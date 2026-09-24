/**
 * Fill assessments on one DHIS2 instance with indicator values computed on
 * another.
 *
 * The two instances share no UIDs - not org units, not data elements, not
 * indicators - and the app can only query the instance it is served from. So
 * rather than mirroring metadata and data, this pulls the *computed* indicator
 * values out of the source instance's analytics and writes them straight into
 * the app's own datastore on the target, exactly as the assessment page's
 * "Fetch DHIS2 data" button would have.
 *
 * Org units are matched by name, since their UIDs differ. Regions match
 * cleanly; districts are matched on (region, district) and the naming diverges
 * between instances, so anything unmatched is reported rather than guessed at.
 *
 *     SOURCE_URL=https://dhims.chimgh.org/dhims SOURCE_TOKEN=d2p_xxx \
 *     TARGET_URL=https://192.168.11.135/dhis TARGET_USERNAME=admin TARGET_PASSWORD=... \
 *       node scripts/prefill-assessments.mjs --year 2025 --level REGION --dry-run --insecure
 *
 * `--dry-run` reports what it would write without touching the datastore.
 * `--only <name>` restricts to org units whose name contains that text.
 * `--aliases <file>` overrides the default name map, `src/framework/org-unit-aliases.json`.
 *
 * This is a snapshot, not a live link: re-run it to refresh. It never
 * overwrites a figure somebody typed, and it skips any assessment that has
 * left DRAFT, so a submitted or approved record is left exactly as it is.
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import {
    matchOrgUnits as matchUnits,
    parseAliases,
} from '../src/lib/orgUnitMatch.js'

const HERE = dirname(fileURLToPath(import.meta.url))

const args = process.argv.slice(2)
const flag = (name) => args.includes(`--${name}`)
const value = (name) => {
    const i = args.indexOf(`--${name}`)
    return i >= 0 ? args[i + 1] : undefined
}

const year = Number(value('year'))
const level = (value('level') || 'REGION').toUpperCase()
const dryRun = flag('dry-run')
const only = value('only')
const aliasFile =
    value('aliases') ||
    join(HERE, '..', 'src', 'framework', 'org-unit-aliases.json')

if (!Number.isFinite(year) || !['REGION', 'DISTRICT'].includes(level)) {
    console.error(
        'Usage: node scripts/prefill-assessments.mjs --year <yyyy> --level REGION|DISTRICT\n' +
            '                                          [--only <name>] [--dry-run] [--insecure]'
    )
    process.exit(2)
}

if (flag('insecure')) {
    // Only for an instance with a self-signed certificate.
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

const NAMESPACE = 'ghs-holistic-assessment'
const ORG_UNIT_LEVEL = { REGION: 2, DISTRICT: 3 }[level]
const FRAMEWORK_ID = {
    REGION: 'ghs-ha-2025',
    DISTRICT: 'ghs-ha-2025-district',
}[level]

/** Statuses whose values the owner is still free to change. */
const FILLABLE = new Set(['DRAFT', 'REJECTED', 'REVISION'])

const authHeader = (prefix) => {
    const token = process.env[`${prefix}_TOKEN`]
    if (token) {
        // DHIS2 personal access tokens use their own scheme, not Bearer.
        return `ApiToken ${token}`
    }
    const user = process.env[`${prefix}_USERNAME`]
    const pass = process.env[`${prefix}_PASSWORD`]
    if (user && pass) {
        return `Basic ${Buffer.from(`${user}:${pass}`).toString('base64')}`
    }
    console.error(
        `Set ${prefix}_URL and either ${prefix}_TOKEN, or ${prefix}_USERNAME and ${prefix}_PASSWORD.`
    )
    process.exit(2)
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

/**
 * Analytics requests against a national instance run for tens of seconds and
 * occasionally drop the socket, which reaches us as a bare "fetch failed". A
 * dropped request is not a failed run, so transport errors and 5xx responses
 * are retried with a widening pause; a 4xx is a real answer and is not.
 */
const RETRIES = 4

const callOnce = async (prefix, path, init = {}) => {
    const base = (process.env[`${prefix}_URL`] || '').replace(/\/+$/, '')
    if (!base) {
        console.error(`Set ${prefix}_URL.`)
        process.exit(2)
    }
    const res = await fetch(`${base}${path}`, {
        ...init,
        headers: {
            Authorization: authHeader(prefix),
            Accept: 'application/json',
            ...(init.body ? { 'Content-Type': 'application/json' } : {}),
            ...init.headers,
        },
        redirect: 'manual',
    })
    if (res.status >= 300 && res.status < 400) {
        throw new Error(
            `${res.status} redirect to ${res.headers.get('location')} — the ` +
                'credentials were not accepted.'
        )
    }
    const text = await res.text()
    let body
    try {
        body = JSON.parse(text)
    } catch {
        body = text
    }
    if (!res.ok) {
        const err = new Error(
            `${res.status} on ${path}: ${
                body?.message || String(body).slice(0, 300)
            }`
        )
        err.status = res.status
        throw err
    }
    return body
}

const call = async (prefix, path, init = {}) => {
    let lastError
    for (let attempt = 1; attempt <= RETRIES; attempt += 1) {
        try {
            return await callOnce(prefix, path, init)
        } catch (e) {
            // A 4xx is the server's considered answer; only transport failures
            // and 5xx are worth asking again.
            const worthRetrying = !e.status || e.status >= 500
            if (!worthRetrying || attempt === RETRIES) {
                throw e
            }
            lastError = e
            const pause = 2000 * attempt
            console.log(
                `    ${e.message.slice(0, 80)} — retrying in ${pause / 1000}s ` +
                    `(${attempt}/${RETRIES - 1})`
            )
            await sleep(pause)
        }
    }
    throw lastError
}

const chunk = (items, size) =>
    Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
        items.slice(i * size, i * size + size)
    )

/**
 * Name pairs for districts the two instances spell differently. Matching
 * itself lives in `src/lib/orgUnitMatch.js`, shared with the app, so the
 * script and the in-app fetch file a district under the same counterpart.
 */
const loadAliases = () => {
    try {
        return parseAliases(JSON.parse(readFileSync(aliasFile, 'utf8')))
    } catch (e) {
        if (e.code === 'ENOENT') {
            return new Map()
        }
        throw e
    }
}

const matchOrgUnits = (sourceUnits, targetUnits) =>
    matchUnits(sourceUnits, targetUnits, {
        byParent: level === 'DISTRICT',
        aliases: level === 'DISTRICT' ? loadAliases() : new Map(),
    })

const listOrgUnits = (prefix) =>
    call(
        prefix,
        `/api/organisationUnits.json?filter=level:eq:${ORG_UNIT_LEVEL}` +
            '&fields=id,name,level,parent[id,name]&paging=false'
    ).then((r) => r.organisationUnits || [])

/** Read one datastore key, treating a missing key as "no record yet". */
const readKey = async (key) => {
    try {
        return await call('TARGET', `/api/dataStore/${NAMESPACE}/${key}`)
    } catch (e) {
        if (e.status === 404) {
            return null
        }
        throw e
    }
}

const writeKey = async (key, body) => {
    try {
        await call('TARGET', `/api/dataStore/${NAMESPACE}/${key}`, {
            method: 'PUT',
            body: JSON.stringify(body),
        })
    } catch (e) {
        if (e.status === 404) {
            await call('TARGET', `/api/dataStore/${NAMESPACE}/${key}`, {
                method: 'POST',
                body: JSON.stringify(body),
            })
            return
        }
        throw e
    }
}

const emptyAssessment = (orgUnit) => ({
    version: 1,
    frameworkId: FRAMEWORK_ID,
    year,
    level,
    orgUnit: {
        id: orgUnit.id,
        name: orgUnit.name,
        level: orgUnit.level,
        parentId: orgUnit.parent?.id || null,
        parentName: orgUnit.parent?.name || null,
    },
    status: 'DRAFT',
    values: {},
    milestones: {},
    review: null,
    response: null,
    history: [],
    createdAt: null,
    updatedAt: null,
    updatedBy: null,
})

const run = async () => {
    const { builtinIdsFor } = await import('../src/framework/indicator-ids.js')
    const bindings = builtinIdsFor(FRAMEWORK_ID)
    const codes = Object.keys(bindings)
    const byIndicatorId = new Map(
        Object.entries(bindings).map(([code, entry]) => [entry.id, code])
    )
    const indicatorIds = [...byIndicatorId.keys()]

    const source = await call('SOURCE', '/api/me?fields=username')
    const target = await call('TARGET', '/api/me?fields=username')
    console.log(
        `${process.env.SOURCE_URL} (${source.username})  →  ` +
            `${process.env.TARGET_URL} (${target.username})`
    )
    console.log(
        `${level} · ${year} · ${codes.length} bound indicators · framework ${FRAMEWORK_ID}\n`
    )

    let sourceUnits = await listOrgUnits('SOURCE')
    const targetUnits = await listOrgUnits('TARGET')
    if (only) {
        const q = only.toLowerCase()
        sourceUnits = sourceUnits.filter((u) =>
            u.name.toLowerCase().includes(q)
        )
    }

    const { matched, unmatched } = matchOrgUnits(sourceUnits, targetUnits)
    const viaAlias = matched.filter((m) => m.viaAlias).length
    console.log(
        `Org units: ${matched.length} matched by name` +
            (viaAlias ? ` (${viaAlias} via the alias file)` : '') +
            `, ${unmatched.length} unmatched ` +
            `(source ${sourceUnits.length}, target ${targetUnits.length})`
    )
    if (unmatched.length) {
        console.log(
            '  no counterpart on the target: ' +
                unmatched
                    .slice(0, 10)
                    .map((u) =>
                        level === 'DISTRICT'
                            ? `${u.parent?.name}/${u.name}`
                            : u.name
                    )
                    .join(', ') +
                (unmatched.length > 10
                    ? `, … ${unmatched.length - 10} more`
                    : '')
        )
    }
    if (!matched.length) {
        console.error('\nNothing to fill.')
        process.exitCode = 1
        return
    }

    // One analytics request per batch of indicators covers every org unit at
    // this level at once; asking per org unit would be hundreds of requests.
    console.log(`\nFetching analytics for ${year} and ${year - 1}…`)
    const sourceIds = new Set(matched.map((m) => m.source.id))
    const byOrgUnit = new Map()
    const batches = chunk(indicatorIds, 12)

    for (const [i, batch] of batches.entries()) {
        const path =
            '/api/analytics.json' +
            `?dimension=dx:${batch.join(';')}` +
            `&dimension=pe:${year};${year - 1}` +
            `&dimension=ou:LEVEL-${ORG_UNIT_LEVEL}` +
            '&skipMeta=true&outputIdScheme=UID'
        const res = await call('SOURCE', path)
        const headers = (res.headers || []).map((h) => h.name)
        const dx = headers.indexOf('dx')
        const pe = headers.indexOf('pe')
        const ou = headers.indexOf('ou')
        const val = headers.indexOf('value')

        ;(res.rows || []).forEach((row) => {
            if (!sourceIds.has(row[ou])) {
                return
            }
            const number = Number(row[val])
            if (!Number.isFinite(number)) {
                return
            }
            const code = byIndicatorId.get(row[dx])
            if (!code) {
                return
            }
            if (!byOrgUnit.has(row[ou])) {
                byOrgUnit.set(row[ou], {})
            }
            const bucket = byOrgUnit.get(row[ou])
            bucket[code] = bucket[code] || {}
            bucket[code][row[pe] === String(year) ? 'current' : 'previous'] =
                number
        })
        console.log(`  batch ${i + 1}/${batches.length}`)
    }

    console.log(`\nWriting${dryRun ? ' (dry run)' : ''}…`)
    const fetchedAt = new Date().toISOString()
    let written = 0
    let skipped = 0
    let filledTotal = 0

    for (const { source: from, target: to } of matched) {
        const label =
            level === 'DISTRICT' ? `${to.parent?.name}/${to.name}` : to.name
        const incoming = byOrgUnit.get(from.id)
        if (!incoming || !Object.keys(incoming).length) {
            console.log(`  ${label}: no analytics data`)
            skipped += 1
            continue
        }

        const key = `assessment-${year}-${to.id}`
        const existing = await readKey(key)
        const record = existing || emptyAssessment(to)

        if (existing && !FILLABLE.has(record.status)) {
            console.log(`  ${label}: skipped, status ${record.status}`)
            skipped += 1
            continue
        }

        const values = { ...record.values }
        let filled = 0
        let keptManual = 0

        Object.entries(incoming).forEach(([code, patch]) => {
            const current = values[code]
            // A figure somebody typed outranks anything fetched.
            if (current && current.source && current.source !== 'dhis2') {
                keptManual += 1
                return
            }
            values[code] = {
                ...(current || {}),
                ...patch,
                source: 'dhis2',
                fetchedAt,
            }
            filled += 1
        })

        console.log(
            `  ${label}: ${filled} filled` +
                (keptManual ? `, ${keptManual} left as manual entry` : '') +
                (existing ? '' : ' (new record)')
        )
        filledTotal += filled

        if (!dryRun && filled) {
            const now = new Date().toISOString()
            await writeKey(key, {
                ...record,
                values,
                createdAt: record.createdAt || now,
                updatedAt: now,
                history: [
                    ...(record.history || []),
                    {
                        at: now,
                        action: 'PREFILLED',
                        by: target.username,
                        detail: `${filled} indicator(s) from ${process.env.SOURCE_URL}`,
                    },
                ],
            })
            written += 1
        }
    }

    console.log(
        `\n${dryRun ? 'Would write' : 'Wrote'} ${dryRun ? matched.length - skipped : written} ` +
            `assessment(s), ${filledTotal} indicator value(s) in total. ${skipped} skipped.`
    )
    if (dryRun) {
        console.log('Dry run — nothing was written. Re-run without --dry-run.')
    }
}

// `process.exitCode` rather than `process.exit()`: exiting from inside a
// rejected promise tears down libuv mid-flight and trips an assertion on Windows.
run().catch((e) => {
    console.error(e.message)
    process.exitCode = 1
})

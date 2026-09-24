import { useDataEngine } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { useCallback, useRef, useState } from 'react'
import orgUnitAliases from '../framework/org-unit-aliases.json'
import { LEVEL, ORG_UNIT_LEVEL } from './constants.js'
import { isRemote, sourceResource } from './dataSource.js'
import { useSettings } from './datastore.js'
import { parseAliases, sourceUnitFor } from './orgUnitMatch.js'

const ALIASES = parseAliases(orgUnitAliases)

const orgUnitsQuery = (resource, dhisLevel) => ({
    orgUnits: {
        resource,
        params: {
            fields: 'id,name,parent[id,name]',
            filter: `level:eq:${dhisLevel}`,
            paging: false,
        },
    },
})

/** The configured data source, or null for this instance. */
const useDataSourceSetting = () => {
    const { value, loading } = useSettings()
    return { dataSource: value?.dataSource || null, loading }
}

/**
 * Pull current- and previous-year values for indicators that have been mapped
 * to a DHIS2 indicator or data element on the Admin page.
 *
 * `mapping` is { '<indicator code>': { id, name, type } }. Codes without a
 * mapping stay manual-entry, which is what the workflow guide calls "Manual".
 *
 * With a remote data source (see `dataSource.js`) the query is relayed through
 * its route, and the org unit is first resolved to its counterpart on the
 * source: by UID when the two share one, otherwise by name through the same
 * matcher and alias file as `scripts/prefill-assessments.mjs`.
 */
export const useDhis2Values = () => {
    const engine = useDataEngine()
    const { dataSource, loading: sourceLoading } = useDataSourceSetting()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [lastResult, setLastResult] = useState(null)

    // Both org unit lists, per route and level. They change rarely and every
    // fetch needs them, so they are read once per page visit.
    const unitCache = useRef(new Map())

    /** The source's id for a local org unit; the id itself when local. */
    const resolveOrgUnit = useCallback(
        async (orgUnitId, level) => {
            if (!isRemote(dataSource)) {
                return orgUnitId
            }
            const dhisLevel =
                ORG_UNIT_LEVEL[level] ?? ORG_UNIT_LEVEL[LEVEL.REGION]
            const cacheKey = `${dataSource.routeId}|${dhisLevel}`
            if (!unitCache.current.has(cacheKey)) {
                const [local, source] = await Promise.all([
                    engine.query(orgUnitsQuery('organisationUnits', dhisLevel)),
                    engine.query(
                        orgUnitsQuery(
                            sourceResource(dataSource, 'organisationUnits'),
                            dhisLevel
                        )
                    ),
                ])
                unitCache.current.set(cacheKey, {
                    local: local.orgUnits?.organisationUnits || [],
                    source: source.orgUnits?.organisationUnits || [],
                })
            }
            const units = unitCache.current.get(cacheKey)
            const match = sourceUnitFor(orgUnitId, units.source, units.local, {
                byParent: level === LEVEL.DISTRICT,
                aliases: ALIASES,
            })
            if (!match) {
                const name =
                    units.local.find((u) => u.id === orgUnitId)?.name ||
                    orgUnitId
                throw new Error(
                    i18n.t(
                        '{{name}} has no counterpart on the data source. Add the pair to src/framework/org-unit-aliases.json, or enter its values by hand.',
                        { name, interpolation: { escapeValue: false } }
                    )
                )
            }
            return match.id
        },
        [dataSource, engine]
    )

    const fetchValues = useCallback(
        async ({ mapping, orgUnitId, level, year }) => {
            const entries = Object.entries(mapping || {}).filter(
                ([, m]) => m && m.id
            )
            if (!entries.length || !orgUnitId || !year) {
                const empty = { values: {}, matched: 0, requested: 0 }
                setLastResult(empty)
                return empty
            }

            setLoading(true)
            setError(null)
            try {
                const sourceOrgUnitId = await resolveOrgUnit(orgUnitId, level)
                const dx = [...new Set(entries.map(([, m]) => m.id))]
                const periods = [String(year), String(year - 1)]

                const res = await engine.query({
                    analytics: {
                        resource: sourceResource(dataSource, 'analytics'),
                        params: {
                            dimension: [
                                `dx:${dx.join(';')}`,
                                `pe:${periods.join(';')}`,
                            ],
                            filter: `ou:${sourceOrgUnitId}`,
                            skipMeta: true,
                            outputIdScheme: 'UID',
                        },
                    },
                })

                const headers = res.analytics?.headers || []
                const rows = res.analytics?.rows || []
                const dxIdx = headers.findIndex((h) => h.name === 'dx')
                const peIdx = headers.findIndex((h) => h.name === 'pe')
                const valIdx = headers.findIndex((h) => h.name === 'value')

                // dx id -> { '2025': n, '2024': n }
                const byDx = new Map()
                if (dxIdx >= 0 && peIdx >= 0 && valIdx >= 0) {
                    rows.forEach((row) => {
                        const id = row[dxIdx]
                        const pe = row[peIdx]
                        const value = Number(row[valIdx])
                        if (!Number.isFinite(value)) {
                            return
                        }
                        if (!byDx.has(id)) {
                            byDx.set(id, {})
                        }
                        byDx.get(id)[pe] = value
                    })
                }

                const values = {}
                let matched = 0
                entries.forEach(([code, m]) => {
                    const found = byDx.get(m.id)
                    if (!found) {
                        return
                    }
                    const current = found[String(year)]
                    const previous = found[String(year - 1)]
                    if (current === undefined && previous === undefined) {
                        return
                    }
                    matched += 1
                    values[code] = {
                        current: current ?? null,
                        previous: previous ?? null,
                        source: 'dhis2',
                        fetchedAt: new Date().toISOString(),
                    }
                })

                const result = { values, matched, requested: entries.length }
                setLastResult(result)
                return result
            } catch (e) {
                setError(e)
                throw e
            } finally {
                setLoading(false)
            }
        },
        [dataSource, engine, resolveOrgUnit]
    )

    return {
        fetchValues,
        loading,
        error,
        lastResult,
        dataSource,
        sourceLoading,
    }
}

/**
 * Search DHIS2 indicators and data elements for the Admin mapping page. A
 * binding is a UID on the instance values are read from, so with a remote
 * source the search runs there too.
 */
export const useMetadataSearch = () => {
    const engine = useDataEngine()
    const { dataSource } = useDataSourceSetting()
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    const [error, setError] = useState(null)

    const search = useCallback(
        async (term) => {
            const q = (term || '').trim()
            if (q.length < 2) {
                setResults([])
                return []
            }
            setLoading(true)
            setError(null)
            try {
                const params = {
                    fields: 'id,displayName',
                    filter: `displayName:ilike:${q}`,
                    paging: true,
                    pageSize: 25,
                    order: 'displayName:asc',
                }
                const res = await engine.query({
                    indicators: {
                        resource: sourceResource(dataSource, 'indicators'),
                        params,
                    },
                    dataElements: {
                        resource: sourceResource(dataSource, 'dataElements'),
                        params,
                    },
                })
                const combined = [
                    ...(res.indicators?.indicators || []).map((x) => ({
                        ...x,
                        type: 'INDICATOR',
                    })),
                    ...(res.dataElements?.dataElements || []).map((x) => ({
                        ...x,
                        type: 'DATA_ELEMENT',
                    })),
                ]
                setResults(combined)
                return combined
            } catch (e) {
                setError(e)
                return []
            } finally {
                setLoading(false)
            }
        },
        [dataSource, engine]
    )

    return { search, results, loading, error, setResults, dataSource }
}

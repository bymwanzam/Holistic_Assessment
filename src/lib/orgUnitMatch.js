/**
 * Pair the org units of two DHIS2 instances that describe the same places.
 *
 * Shared by `scripts/prefill-assessments.mjs` and the in-app fetch from a
 * remote data source, so a district is filed under the same counterpart
 * whichever route its figures take.
 *
 * The two instances name the same district differently - "Bekwai" against
 * "Bekwai Municipal", "Adansi Akrofuom" against "Akrofuom". Matching runs in
 * two passes: exact on the normalised name, then again with the administrative
 * suffix removed. A name that matches more than one candidate is never guessed
 * at; it is reported unmatched.
 */
const SUFFIXES =
    /\s+(municipal(ity)?|metropolitan|metropolis|metro|district|sub[- ]?district)$/

export const normalise = (name) =>
    (name || '')
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()

export const stripSuffix = (name) => {
    let out = normalise(name)
    let previous
    do {
        previous = out
        out = out.replace(SUFFIXES, '').trim()
    } while (out !== previous)
    return out
}

/**
 * Districts are keyed on (region, district), since a district name alone is
 * not unique across the country.
 */
const orgUnitKey = (unit, transform, byParent) =>
    byParent
        ? `${transform(unit.parent?.name)}|${transform(unit.name)}`
        : transform(unit.name)

/** Index org units by key, dropping any key that more than one unit claims. */
const indexBy = (units, transform, byParent) => {
    const index = new Map()
    const clashes = new Set()
    units.forEach((unit) => {
        const key = orgUnitKey(unit, transform, byParent)
        if (index.has(key)) {
            clashes.add(key)
        }
        index.set(key, unit)
    })
    clashes.forEach((key) => index.delete(key))
    return index
}

/**
 * Turn the `districts` block of `framework/org-unit-aliases.json` into
 * normalised 'region|district' keys. Deliberately never fuzzy: the near-misses
 * that are left are district splits and renames, and guessing at those would
 * file one district's figures under another.
 */
export const parseAliases = (file) =>
    new Map(
        Object.entries(file?.districts || {}).map(([from, to]) => [
            from.split('/').map(normalise).join('|'),
            to.split('/').map(normalise).join('|'),
        ])
    )

/**
 * Match every source unit to a target unit. `byParent` is true for districts;
 * `aliases` (from `parseAliases`) maps a source key to a target key and is only
 * consulted for districts, which is the only level it describes.
 */
export const matchOrgUnits = (
    sourceUnits,
    targetUnits,
    { byParent = false, aliases = new Map() } = {}
) => {
    const matched = []
    const unmatched = []

    const exact = indexBy(targetUnits, normalise, byParent)
    const loose = indexBy(targetUnits, stripSuffix, byParent)
    const aliasMap = byParent ? aliases : new Map()

    sourceUnits.forEach((source) => {
        const aliased = aliasMap.get(orgUnitKey(source, normalise, byParent))
        const target =
            (aliased && (exact.get(aliased) || loose.get(aliased))) ||
            exact.get(orgUnitKey(source, normalise, byParent)) ||
            loose.get(orgUnitKey(source, stripSuffix, byParent))
        if (target) {
            matched.push({ source, target, viaAlias: Boolean(aliased) })
        } else {
            unmatched.push(source)
        }
    })
    return { matched, unmatched }
}

/**
 * The source unit for one target unit. A shared UID wins outright - an
 * instance cloned from the source keeps its UIDs - and only then is the
 * name match consulted. Returns null when there is no safe counterpart.
 */
export const sourceUnitFor = (targetId, sourceUnits, targetUnits, options) => {
    const sameId = sourceUnits.find((u) => u.id === targetId)
    if (sameId) {
        return sameId
    }
    const { matched } = matchOrgUnits(sourceUnits, targetUnits, options)
    return matched.find((m) => m.target.id === targetId)?.source || null
}

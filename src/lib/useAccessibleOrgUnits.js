import { useCallback, useMemo } from 'react'
import { LEVEL } from './constants.js'
import { usePeerPairings } from './datastore.js'
import { ORG_LEVEL, scopeOf, useCurrentUser } from './useCurrentUser.js'
import { useOrgUnitsForLevel } from './useOrgUnits.js'

/**
 * The units a user's own units are paired with this year: the pairings in
 * which one of their units is the reviewer. Pairings are
 * `{ [year]: { [reviewerId]: assessedId } }`.
 */
export const counterpartIdsOf = (user, pairings, year) => {
    const forYear = (pairings || {})[String(year)] || {}
    return new Set(
        (user.orgUnits || []).map((o) => forYear[o.id]).filter(Boolean)
    )
}

/**
 * Whether a user may fetch DHIS2 data into, and change, one unit's assessment.
 *
 * Below national level a unit's assessment is filled in by its paired
 * counterpart, never by the unit itself: a district or regional user may
 * change only the assessment of the unit they are paired with. Their own
 * unit's, and any unpaired unit's, they can open but not change. A national
 * user changes any.
 */
export const canModifyOrgUnit = ({ user, pairings, year, orgUnitId }) => {
    if (!orgUnitId) {
        return false
    }
    if (scopeOf(user) <= ORG_LEVEL.NATIONAL) {
        return true
    }
    return counterpartIdsOf(user, pairings, year).has(orgUnitId)
}

/**
 * Which regions and districts a user may open, given everything that exists.
 *
 * - A national user (or superuser) reaches everything.
 * - Anyone else reaches the org units they are assigned to, the units those
 *   are paired with this year and, for a regional user, the districts beneath
 *   their region.
 *
 * So a district user opens their own district (to read it, and the feedback on
 * it) and the district they were paired with (to fill it in, or review it).
 * They reach no region at all, which is what keeps the regional pages empty
 * for them. Opening is not changing: see `canModifyOrgUnit`.
 *
 * Kept free of hooks so the rule can be read and tested on its own.
 */
export const accessibleOrgUnits = ({
    user,
    regions = [],
    districts = [],
    pairings,
    year,
}) => {
    if (scopeOf(user) <= ORG_LEVEL.NATIONAL) {
        return { regions, districts }
    }
    const own = new Set((user.orgUnits || []).map((o) => o.id))
    const reach = new Set([...own, ...counterpartIdsOf(user, pairings, year)])
    return {
        regions: regions.filter((r) => reach.has(r.id)),
        districts: districts.filter(
            (d) => reach.has(d.id) || own.has(d.parent?.id)
        ),
    }
}

/**
 * The assessments a user's reports may draw on.
 *
 * - A national user reports on everything.
 * - A regional user on their own region and the districts beneath it.
 * - A district user on every district of their own region, so they can see
 *   how their neighbours are doing, but on no regional record and nothing
 *   outside their region.
 */
export const reportableRecords = (user, scored = []) => {
    const scope = scopeOf(user)
    if (scope <= ORG_LEVEL.NATIONAL) {
        return scored
    }
    const units = user.orgUnits || []
    const own = new Set(units.map((o) => o.id))
    if (scope === ORG_LEVEL.REGIONAL) {
        return scored.filter(
            (s) =>
                own.has(s.record.orgUnit?.id) ||
                own.has(s.record.orgUnit?.parentId)
        )
    }
    const regions = homeRegionIdsOf(user)
    return scored.filter(
        (s) =>
            s.record.level === LEVEL.DISTRICT &&
            regions.has(s.record.orgUnit?.parentId)
    )
}

/**
 * Plain assessment records cut to what a user may see, by the same rule as
 * `reportableRecords`. For pages that list records without scoring them — the
 * Admin overview and audit trail — so a regional user's counts and history
 * cover their own region and its districts, never the whole country.
 */
export const visibleRecords = (user, records = []) =>
    reportableRecords(
        user,
        records.map((record) => ({ record }))
    ).map((s) => s.record)

/**
 * The regions a user belongs to: a regional user's own region, or the region
 * above a district user's district.
 */
export const homeRegionIdsOf = (user) =>
    new Set(
        (user.orgUnits || [])
            .map((o) =>
                o.level === ORG_LEVEL.REGIONAL
                    ? o.id
                    : o.level === ORG_LEVEL.DISTRICT
                      ? o.parent?.id
                      : null
            )
            .filter(Boolean)
    )

/**
 * What the Pairings tab shows a user below national level, or null for a
 * national user, who sees and edits every pairing.
 *
 * - Districts: those of the user's own region. They can pair these with each
 *   other, and remove such a pairing; a pairing reaching outside the region
 *   was drawn nationally, so it is listed but cannot be removed here.
 * - Regions: their own region and the region paired with it, either way round,
 *   and never the full list. Regional pairings are drawn nationally, so these
 *   rows are read-only.
 *
 * `forYear` is one year's pairings, `{ [reviewerId]: assessedId }`.
 */
export const pairingScope = ({
    user,
    regions = [],
    districts = [],
    forYear = {},
}) => {
    if (scopeOf(user) <= ORG_LEVEL.NATIONAL) {
        return null
    }
    const home = homeRegionIdsOf(user)
    const homeDistricts = districts.filter((d) => home.has(d.parent?.id))
    const districtIds = new Set(homeDistricts.map((d) => d.id))
    const pairs = Object.entries(forYear)

    const partners = new Set(home)
    pairs.forEach(([reviewer, assessed]) => {
        if (home.has(reviewer)) {
            partners.add(assessed)
        }
        if (home.has(assessed)) {
            partners.add(reviewer)
        }
    })

    return {
        districts: homeDistricts,
        regions: regions.filter((r) => partners.has(r.id)),
        districtRows: pairs
            .filter(([a, b]) => districtIds.has(a) || districtIds.has(b))
            .map(([reviewerId, assessedId]) => ({
                reviewerId,
                assessedId,
                editable:
                    districtIds.has(reviewerId) && districtIds.has(assessedId),
            })),
        regionRows: pairs
            .filter(([a, b]) => home.has(a) || home.has(b))
            .map(([reviewerId, assessedId]) => ({
                reviewerId,
                assessedId,
                editable: false,
            })),
    }
}

/**
 * The org unit picker's options for one page: the regions to offer and the
 * districts of the chosen region, both cut down to what the user may open.
 *
 * At district level the region list is the parents of the reachable districts,
 * since a district user holds no region of their own but still picks through
 * one — and a paired district may sit in another region.
 */
export const useAccessibleOrgUnits = ({ level, year, regionId }) => {
    const user = useCurrentUser()
    const { value: pairings, loading: pairingsLoading } = usePeerPairings()
    const { orgUnits: allRegions, loading: regionsLoading } =
        useOrgUnitsForLevel(LEVEL.REGION)
    const { orgUnits: allDistricts, loading: districtsLoading } =
        useOrgUnitsForLevel(LEVEL.DISTRICT)

    const reachable = useMemo(
        () =>
            accessibleOrgUnits({
                user,
                regions: allRegions,
                districts: allDistricts,
                pairings,
                year,
            }),
        [user, allRegions, allDistricts, pairings, year]
    )

    const regions = useMemo(() => {
        if (level !== LEVEL.DISTRICT) {
            return reachable.regions
        }
        const parents = new Set(reachable.districts.map((d) => d.parent?.id))
        return allRegions.filter((r) => parents.has(r.id))
    }, [level, reachable, allRegions])

    const districts = useMemo(
        () =>
            regionId
                ? reachable.districts.filter((d) => d.parent?.id === regionId)
                : [],
        [reachable, regionId]
    )

    // The user's own region, when it is on offer: what the picker opens on.
    const homeRegionId = useMemo(() => {
        const home = homeRegionIdsOf(user)
        return regions.find((r) => home.has(r.id))?.id || ''
    }, [user, regions])

    const canModify = useCallback(
        (orgUnitId) => canModifyOrgUnit({ user, pairings, year, orgUnitId }),
        [user, pairings, year]
    )

    return {
        regions,
        districts,
        homeRegionId,
        canModify,
        loading:
            user.loading ||
            pairingsLoading ||
            regionsLoading ||
            districtsLoading,
    }
}

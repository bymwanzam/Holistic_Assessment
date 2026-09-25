/** Which regions and districts a user may open, change and report on. */
import { reportsForScope } from '../reports/builders.js'
import {
    accessibleOrgUnits,
    canModifyOrgUnit,
    pairingScope,
    reportableRecords,
    visibleRecords,
} from './useAccessibleOrgUnits.js'

const regions = [{ id: 'UE' }, { id: 'UW' }, { id: 'AS' }]
const districts = [
    { id: 'bongo', parent: { id: 'UE' } },
    { id: 'bawku', parent: { id: 'UE' } },
    { id: 'wa', parent: { id: 'UW' } },
    { id: 'kumasi', parent: { id: 'AS' } },
]
const pairings = { 2025: { bongo: 'wa', UE: 'AS' }, 2024: { bongo: 'kumasi' } }

const ids = (list) => list.map((o) => o.id)
const reach = (user, year = 2025) =>
    accessibleOrgUnits({ user, regions, districts, pairings, year })
const assigned = (...units) => ({ isSuperuser: false, orgUnits: units })

describe('accessible org units', () => {
    it('gives a national user everything', () => {
        const got = reach(assigned({ id: 'GH', level: 1 }))
        expect(ids(got.regions)).toEqual(ids(regions))
        expect(ids(got.districts)).toEqual(ids(districts))
    })

    it('gives a superuser with no org unit everything', () => {
        const got = reach({ isSuperuser: true, orgUnits: [] })
        expect(ids(got.regions)).toEqual(ids(regions))
    })

    it('limits a superuser at district level like any district user', () => {
        const got = reach({
            isSuperuser: true,
            orgUnits: [{ id: 'bongo', level: 3 }],
        })
        expect(ids(got.districts)).toEqual(['bongo', 'wa'])
    })

    it('lets a district user open their own and their paired district', () => {
        const got = reach(assigned({ id: 'bongo', level: 3 }))
        expect(got.regions).toEqual([])
        expect(ids(got.districts)).toEqual(['bongo', 'wa'])
    })

    it("follows the selected year's pairings", () => {
        const got = reach(assigned({ id: 'bongo', level: 3 }), 2024)
        expect(ids(got.districts)).toEqual(['bongo', 'kumasi'])
    })

    it('lets a regional user open their region, its districts and its pair', () => {
        const got = reach(assigned({ id: 'UE', level: 2 }))
        expect(ids(got.regions)).toEqual(['UE', 'AS'])
        expect(ids(got.districts)).toEqual(['bongo', 'bawku'])
    })
})

/*
 * A unit's assessment is filled in by its paired counterpart. Below national
 * level a user changes only that one: never their own, never an unpaired unit.
 */
describe('who may change an assessment', () => {
    const may = (user, orgUnitId, year = 2025) =>
        canModifyOrgUnit({ user, pairings, year, orgUnitId })
    const bongo = assigned({ id: 'bongo', level: 3 })
    const upperEast = assigned({ id: 'UE', level: 2 })

    it("lets a district user change their paired district's assessment", () => {
        expect(may(bongo, 'wa')).toBe(true)
    })

    it('stops a district user changing their own district', () => {
        expect(may(bongo, 'bongo')).toBe(false)
    })

    it('stops a district user changing an unpaired district', () => {
        expect(may(bongo, 'bawku')).toBe(false)
        expect(may(bongo, 'kumasi')).toBe(false)
    })

    it("follows the selected year's pairing", () => {
        expect(may(bongo, 'kumasi', 2024)).toBe(true)
        expect(may(bongo, 'wa', 2024)).toBe(false)
    })

    it('does not treat being reviewed as being paired the other way', () => {
        expect(may(assigned({ id: 'wa', level: 3 }), 'bongo')).toBe(false)
    })

    it('lets a regional user change only their paired region', () => {
        expect(may(upperEast, 'AS')).toBe(true)
        expect(may(upperEast, 'UE')).toBe(false)
        expect(may(upperEast, 'bongo')).toBe(false)
    })

    it('stops a user with no pairing changing anything', () => {
        expect(may(assigned({ id: 'bawku', level: 3 }), 'bongo')).toBe(false)
    })

    it('lets a national user change any assessment', () => {
        expect(may(assigned({ id: 'GH', level: 1 }), 'bongo')).toBe(true)
    })

    it('refuses when no org unit is chosen', () => {
        expect(may(bongo, undefined)).toBe(false)
    })
})

describe('reportable records', () => {
    const record = (id, level, parentId) => ({
        record: { level, orgUnit: { id, parentId } },
    })
    const scored = [
        record('UE', 'REGION', 'GH'),
        record('UW', 'REGION', 'GH'),
        record('bongo', 'DISTRICT', 'UE'),
        record('bawku', 'DISTRICT', 'UE'),
        record('wa', 'DISTRICT', 'UW'),
    ]
    const units = (list) => list.map((s) => s.record.orgUnit.id)

    it('gives a national user every record', () => {
        expect(
            units(reportableRecords(assigned({ id: 'GH', level: 1 }), scored))
        ).toEqual(units(scored))
    })

    it('gives a regional user their region and its districts', () => {
        expect(
            units(reportableRecords(assigned({ id: 'UE', level: 2 }), scored))
        ).toEqual(['UE', 'bongo', 'bawku'])
    })

    it('gives a district user the districts of their region and no region', () => {
        const user = assigned({ id: 'bongo', level: 3, parent: { id: 'UE' } })
        expect(units(reportableRecords(user, scored))).toEqual([
            'bongo',
            'bawku',
        ])
    })
})

describe('reports offered by level', () => {
    const offered = (scope) => reportsForScope(scope).map((r) => r.id)

    it('offers every report to a national user', () => {
        expect(offered(1)).toHaveLength(7)
    })

    it('drops the cross-region comparisons for a regional user', () => {
        expect(offered(2)).not.toContain('national-summary')
        expect(offered(2)).not.toContain('regional-performance')
        expect(offered(2)).toContain('peer-review-summary')
    })

    it('offers a district user only reports that work on districts', () => {
        expect(offered(3)).toEqual([
            'objective-performance',
            'indicator-analysis',
            'district-performance',
            'district-peer-review',
        ])
    })
})

describe('pairing scope', () => {
    const forYear = { bongo: 'bawku', bawku: 'wa', UE: 'AS', UW: 'UE' }
    const scope = (user) => pairingScope({ user, regions, districts, forYear })

    it('leaves a national user unrestricted', () => {
        expect(scope(assigned({ id: 'GH', level: 1 }))).toBeNull()
    })

    it("offers a district user only their region's districts", () => {
        const got = scope(
            assigned({ id: 'bongo', level: 3, parent: { id: 'UE' } })
        )
        expect(ids(got.districts)).toEqual(['bongo', 'bawku'])
    })

    it('shows their own region and those paired with it, and no other', () => {
        const got = scope(assigned({ id: 'UE', level: 2 }))
        expect(ids(got.regions).sort()).toEqual(['AS', 'UE', 'UW'])
        expect(
            scope(assigned({ id: 'AS', level: 2 })).regions.map((r) => r.id)
        ).toEqual(['UE', 'AS'])
    })

    it('lets them remove only pairings inside their region', () => {
        const got = scope(
            assigned({ id: 'bongo', level: 3, parent: { id: 'UE' } })
        )
        expect(got.districtRows).toEqual([
            { reviewerId: 'bongo', assessedId: 'bawku', editable: true },
            { reviewerId: 'bawku', assessedId: 'wa', editable: false },
        ])
        expect(got.regionRows.every((r) => !r.editable)).toBe(true)
    })
})

describe('visible records', () => {
    const records = [
        { level: 'REGION', orgUnit: { id: 'UE' } },
        { level: 'REGION', orgUnit: { id: 'AS' } },
        { level: 'DISTRICT', orgUnit: { id: 'bongo', parentId: 'UE' } },
        { level: 'DISTRICT', orgUnit: { id: 'kumasi', parentId: 'AS' } },
    ]
    const units = (list) => list.map((r) => r.orgUnit.id)

    it('shows a national user every record', () => {
        expect(
            units(visibleRecords(assigned({ id: 'GH', level: 1 }), records))
        ).toEqual(['UE', 'AS', 'bongo', 'kumasi'])
    })

    it('shows a regional user only their region and its districts', () => {
        expect(
            units(visibleRecords(assigned({ id: 'UE', level: 2 }), records))
        ).toEqual(['UE', 'bongo'])
    })
})

/**
 * The regional and district tools reuse the same indicator codes for different
 * indicators, so indicator mapping is stored per framework. These tests pin
 * that behaviour, including the migration from the original flat shape and the
 * layering of the DHIS2 bindings the app ships under whatever an administrator
 * saved.
 */
import d2Config from '../../d2.config.js'
import {
    DEFAULT_FRAMEWORK_ID,
    DISTRICT_FRAMEWORK_ID,
    allIndicators,
    getFramework,
} from '../framework/index.js'
import { builtinIdsFor } from '../framework/indicator-ids.js'
import { AUTH_ADMIN, AUTH_EDIT, LEVEL, NAMESPACE, STATUS } from './constants.js'
import {
    assessmentKey,
    recordKey,
    emptyAssessment,
    mappingForFramework,
    storedMappingForFramework,
    strippedOfBuiltins,
    withFrameworkMapping,
    withHistory,
} from './datastore.js'

const REGIONAL_ENTRY = {
    id: 'abc123',
    name: 'Doctor to population',
    type: 'INDICATOR',
}
const DISTRICT_ENTRY = {
    id: 'xyz789',
    name: 'Physician Assistant',
    type: 'INDICATOR',
}

describe('assessmentKey', () => {
    it('is stable and namespaced by year and org unit', () => {
        expect(assessmentKey(2025, 'Ou12345')).toBe('assessment-2025-Ou12345')
    })
})

describe('recordKey', () => {
    it('keys a record by its own year and org unit', () => {
        expect(recordKey({ year: 2025, orgUnit: { id: 'Ou12345' } })).toBe(
            'assessment-2025-Ou12345'
        )
    })

    it('agrees with the key the record was created under', () => {
        const record = emptyAssessment({
            year: 2024,
            orgUnit: { id: 'Dist001', displayName: 'Bolga' },
            level: LEVEL.DISTRICT,
        })
        expect(recordKey(record)).toBe(assessmentKey(2024, 'Dist001'))
    })

    it('is null when the record cannot say where it belongs', () => {
        expect(recordKey(null)).toBeNull()
        expect(recordKey({ year: 2025, orgUnit: null })).toBeNull()
        expect(recordKey({ orgUnit: { id: 'Ou12345' } })).toBeNull()
    })
})

describe('emptyAssessment', () => {
    it('picks the district framework for a district assessment', () => {
        const a = emptyAssessment({
            year: 2025,
            orgUnit: { id: 'd1', displayName: 'Bongo', level: 3 },
            level: LEVEL.DISTRICT,
        })
        expect(a.frameworkId).toBe(DISTRICT_FRAMEWORK_ID)
        expect(a.status).toBe(STATUS.DRAFT)
        expect(a.orgUnit.name).toBe('Bongo')
    })

    it('picks the regional framework for a regional assessment', () => {
        const a = emptyAssessment({
            year: 2025,
            orgUnit: { id: 'r1', displayName: 'Upper East', level: 2 },
            level: LEVEL.REGION,
        })
        expect(a.frameworkId).toBe(DEFAULT_FRAMEWORK_ID)
    })

    it('tolerates a missing org unit', () => {
        expect(
            emptyAssessment({ year: 2025, level: LEVEL.REGION }).orgUnit
        ).toBeNull()
    })
})

describe('storedMappingForFramework', () => {
    it('returns an empty mapping when nothing is stored', () => {
        expect(storedMappingForFramework(null, DEFAULT_FRAMEWORK_ID)).toEqual(
            {}
        )
        expect(storedMappingForFramework({}, DEFAULT_FRAMEWORK_ID)).toEqual({})
    })

    it('reads the requested framework out of a nested mapping', () => {
        const stored = {
            [DEFAULT_FRAMEWORK_ID]: { 1.17: REGIONAL_ENTRY },
            [DISTRICT_FRAMEWORK_ID]: { 1.17: DISTRICT_ENTRY },
        }
        expect(
            storedMappingForFramework(stored, DEFAULT_FRAMEWORK_ID)['1.17']
        ).toBe(REGIONAL_ENTRY)
        expect(
            storedMappingForFramework(stored, DISTRICT_FRAMEWORK_ID)['1.17']
        ).toBe(DISTRICT_ENTRY)
    })

    it('treats a legacy flat mapping as the regional tool only', () => {
        const legacy = { 1.17: REGIONAL_ENTRY }
        expect(storedMappingForFramework(legacy, DEFAULT_FRAMEWORK_ID)).toEqual(
            legacy
        )
        // Crucially it does not leak into the district tool, where 1.17 is a
        // different indicator.
        expect(
            storedMappingForFramework(legacy, DISTRICT_FRAMEWORK_ID)
        ).toEqual({})
    })
})

describe('mappingForFramework', () => {
    it('falls back to the bindings the app ships', () => {
        const builtin = builtinIdsFor(DEFAULT_FRAMEWORK_ID)
        expect(mappingForFramework(null, DEFAULT_FRAMEWORK_ID)).toEqual(builtin)
        expect(mappingForFramework({}, DEFAULT_FRAMEWORK_ID)['1.1'].id).toBe(
            builtin['1.1'].id
        )
    })

    it('lets a saved binding override the shipped one', () => {
        const stored = { [DEFAULT_FRAMEWORK_ID]: { 1.1: REGIONAL_ENTRY } }
        expect(mappingForFramework(stored, DEFAULT_FRAMEWORK_ID)['1.1']).toBe(
            REGIONAL_ENTRY
        )
    })

    it('honours a tombstone left by the Admin page Clear button', () => {
        const stored = { [DEFAULT_FRAMEWORK_ID]: { 1.1: null } }
        expect(
            mappingForFramework(stored, DEFAULT_FRAMEWORK_ID)['1.1']
        ).toBeUndefined()
    })

    it('does not ship a district binding for a code the two tools disagree on', () => {
        // 1.17 is "Doctor to population ratio" regionally and "Physician
        // Assistant to population ratio" in a district, so only the regional
        // tool gets the shipped indicator.
        expect(builtinIdsFor(DEFAULT_FRAMEWORK_ID)['1.17']).toBeDefined()
        expect(builtinIdsFor(DISTRICT_FRAMEWORK_ID)['1.17']).toBeUndefined()
    })

    it('renumbers a shipped binding onto the district code for the same indicator', () => {
        // The district tool drops regional 1.35, so "Completeness of reporting
        // by health facilities" is regional 1.41 but district 1.40.
        const regional = builtinIdsFor(DEFAULT_FRAMEWORK_ID)['1.41']
        const district = builtinIdsFor(DISTRICT_FRAMEWORK_ID)['1.40']
        expect(district.id).toBe(regional.id)
        expect(builtinIdsFor(DISTRICT_FRAMEWORK_ID)['1.41']).toBeUndefined()
    })

    it('binds every shipped id to a code the framework actually has', () => {
        ;[DEFAULT_FRAMEWORK_ID, DISTRICT_FRAMEWORK_ID].forEach((id) => {
            const codes = new Set(
                allIndicators(getFramework(id)).map((i) => i.code)
            )
            Object.entries(builtinIdsFor(id)).forEach(([code, entry]) => {
                expect(codes.has(code)).toBe(true)
                expect(entry.id).toMatch(/^[A-Za-z][A-Za-z0-9]{10}$/)
            })
        })
    })
})

describe('strippedOfBuiltins', () => {
    it('drops entries that still match what the app ships', () => {
        const builtin = builtinIdsFor(DEFAULT_FRAMEWORK_ID)
        expect(strippedOfBuiltins(DEFAULT_FRAMEWORK_ID, builtin)).toEqual({})
    })

    it('keeps a rebinding and a tombstone', () => {
        const edited = { 1.1: REGIONAL_ENTRY, '1.10': null }
        expect(strippedOfBuiltins(DEFAULT_FRAMEWORK_ID, edited)).toEqual(edited)
    })

    it('drops a tombstone for a code that was never shipped', () => {
        // 1.2 has no built-in, so "cleared" is just its normal unmapped state.
        expect(strippedOfBuiltins(DEFAULT_FRAMEWORK_ID, { 1.2: null })).toEqual(
            {}
        )
    })
})

describe('withFrameworkMapping', () => {
    it('writes one framework without disturbing the other', () => {
        const stored = { [DEFAULT_FRAMEWORK_ID]: { 1.17: REGIONAL_ENTRY } }
        const next = withFrameworkMapping(stored, DISTRICT_FRAMEWORK_ID, {
            1.17: DISTRICT_ENTRY,
        })
        expect(next[DEFAULT_FRAMEWORK_ID]['1.17']).toBe(REGIONAL_ENTRY)
        expect(next[DISTRICT_FRAMEWORK_ID]['1.17']).toBe(DISTRICT_ENTRY)
    })

    it('migrates a legacy flat mapping under the regional framework', () => {
        const legacy = { 1.17: REGIONAL_ENTRY }
        const next = withFrameworkMapping(legacy, DISTRICT_FRAMEWORK_ID, {
            1.17: DISTRICT_ENTRY,
        })
        expect(next[DEFAULT_FRAMEWORK_ID]).toEqual(legacy)
        expect(next[DISTRICT_FRAMEWORK_ID]['1.17']).toBe(DISTRICT_ENTRY)
        expect(next['1.17']).toBeUndefined()
    })

    it('does not mutate the stored mapping', () => {
        const stored = { [DEFAULT_FRAMEWORK_ID]: { 1.1: REGIONAL_ENTRY } }
        const snapshot = JSON.stringify(stored)
        withFrameworkMapping(stored, DISTRICT_FRAMEWORK_ID, {})
        expect(JSON.stringify(stored)).toBe(snapshot)
    })
})

describe('withHistory', () => {
    it('appends without mutating', () => {
        const a = { status: STATUS.DRAFT, history: [{ action: 'CREATED' }] }
        const next = withHistory(a, { action: 'SUBMITTED', by: 'Ama' })
        expect(a.history).toHaveLength(1)
        expect(next.history).toHaveLength(2)
        expect(next.history[1].action).toBe('SUBMITTED')
        expect(next.history[1].at).toEqual(expect.any(String))
    })

    it('starts a history when there is none', () => {
        expect(withHistory({}, { action: 'X' }).history).toHaveLength(1)
    })
})

describe('d2.config.js manifest declarations', () => {
    it('declares the datastore namespace the app actually uses', () => {
        // The manifest tells DHIS2 which namespace to associate with the app on
        // install; if it drifts from NAMESPACE the app writes somewhere it was
        // never granted.
        expect(d2Config.dataStoreNamespace).toBe(NAMESPACE)
    })

    it('declares both custom authorities the app checks', () => {
        expect(d2Config.customAuthorities).toEqual(
            expect.arrayContaining([AUTH_EDIT, AUTH_ADMIN])
        )
    })

    it('points every command-palette shortcut at a real route', () => {
        const routes = [
            '#/dashboard',
            '#/regional',
            '#/district',
            '#/peer-review/regional',
            '#/peer-review/district',
            '#/reports',
            '#/admin',
            '#/help',
        ]
        expect(d2Config.shortcuts.map((s) => s.url)).toEqual(routes)
        d2Config.shortcuts.forEach((s) => {
            expect(s.name.length).toBeGreaterThan(0)
        })
    })

    it('builds both the app and the plugin', () => {
        expect(d2Config.entryPoints.app).toBeTruthy()
        expect(d2Config.entryPoints.plugin).toBeTruthy()
        expect(d2Config.pluginType).toBe('DASHBOARD')
    })
})

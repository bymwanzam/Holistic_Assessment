/**
 * The in-app fetch from a remote source and `scripts/prefill-assessments.mjs`
 * both file a district's figures under whatever this matcher pairs it with, so
 * these tests pin its refusal to guess as much as its successes.
 */
import aliasFile from '../framework/org-unit-aliases.json'
import {
    matchOrgUnits,
    parseAliases,
    sourceUnitFor,
    stripSuffix,
} from './orgUnitMatch.js'

const unit = (id, name, parent) => ({
    id,
    name,
    parent: parent ? { name: parent } : undefined,
})

describe('stripSuffix', () => {
    it('drops administrative suffixes, repeatedly', () => {
        expect(stripSuffix('Bekwai Municipal')).toBe('bekwai')
        expect(stripSuffix('Accra Metropolitan District')).toBe('accra')
    })

    it('normalises punctuation and case', () => {
        expect(stripSuffix('Atebubu-Amantin')).toBe('atebubu amantin')
    })
})

describe('matchOrgUnits', () => {
    it('matches regions on the exact name', () => {
        const { matched, unmatched } = matchOrgUnits(
            [unit('s1', 'Ashanti'), unit('s2', 'Volta')],
            [unit('t1', 'Volta'), unit('t2', 'Ashanti')]
        )
        expect(matched.map((m) => [m.source.id, m.target.id])).toEqual([
            ['s1', 't2'],
            ['s2', 't1'],
        ])
        expect(unmatched).toEqual([])
    })

    it('matches districts within their region, suffix or not', () => {
        const { matched } = matchOrgUnits(
            [unit('s1', 'Bekwai', 'Ashanti')],
            [
                unit('t1', 'Bekwai Municipal', 'Ashanti'),
                unit('t2', 'Bekwai Municipal', 'Western'),
            ],
            { byParent: true }
        )
        expect(matched).toHaveLength(1)
        expect(matched[0].target.id).toBe('t1')
    })

    it('never guesses between two candidates', () => {
        const { matched, unmatched } = matchOrgUnits(
            [unit('s1', 'Bekwai', 'Ashanti')],
            [
                unit('t1', 'Bekwai Municipal', 'Ashanti'),
                unit('t2', 'Bekwai District', 'Ashanti'),
            ],
            { byParent: true }
        )
        expect(matched).toEqual([])
        expect(unmatched.map((u) => u.id)).toEqual(['s1'])
    })

    it('follows an alias for a district spelled differently', () => {
        const aliases = parseAliases({
            districts: { 'Ashanti/Adansi Akrofuom': 'Ashanti/Akrofuom' },
        })
        const { matched } = matchOrgUnits(
            [unit('s1', 'Adansi Akrofuom', 'Ashanti')],
            [unit('t1', 'Akrofuom', 'Ashanti')],
            { byParent: true, aliases }
        )
        expect(matched[0]).toMatchObject({
            target: { id: 't1' },
            viaAlias: true,
        })
    })

    it('ignores aliases for regions', () => {
        const aliases = parseAliases({ districts: { 'A/B': 'A/C' } })
        const { unmatched } = matchOrgUnits(
            [unit('s1', 'B', 'A')],
            [unit('t1', 'C', 'A')],
            { aliases }
        )
        expect(unmatched).toHaveLength(1)
    })

    it('reads the shipped alias file', () => {
        expect(parseAliases(aliasFile).size).toBeGreaterThan(0)
    })
})

describe('sourceUnitFor', () => {
    it('prefers a shared UID over any name', () => {
        const found = sourceUnitFor(
            'same',
            [unit('same', 'Somewhere else'), unit('s2', 'Ashanti')],
            [unit('same', 'Ashanti')]
        )
        expect(found.id).toBe('same')
    })

    it('falls back to the name match', () => {
        const found = sourceUnitFor(
            't1',
            [unit('s1', 'Ashanti')],
            [unit('t1', 'Ashanti')]
        )
        expect(found.id).toBe('s1')
    })

    it('returns null when there is no safe counterpart', () => {
        expect(
            sourceUnitFor('t1', [unit('s1', 'Volta')], [unit('t1', 'Ashanti')])
        ).toBeNull()
    })
})

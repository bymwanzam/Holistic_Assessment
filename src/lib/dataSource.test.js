/**
 * A remote data source is a DHIS2 route on this instance; these tests pin the
 * route it defines and how API paths are relayed through it.
 */
import { AUTH_ADMIN, AUTH_EDIT } from './constants.js'
import {
    ROUTE_CODE,
    isRemote,
    normaliseBaseUrl,
    routeDefinition,
    sourceLabel,
    sourceResource,
} from './dataSource.js'

describe('normaliseBaseUrl', () => {
    it.each([
        ['https://dhims.chimgh.org/dhims/', 'https://dhims.chimgh.org/dhims'],
        [
            'https://dhims.chimgh.org/dhims/api/41/me',
            'https://dhims.chimgh.org/dhims',
        ],
        [
            'https://dhims.chimgh.org/dhims/dhis-web-dashboard/#/',
            'https://dhims.chimgh.org/dhims',
        ],
        ['http://localhost:8080/apps', 'http://localhost:8080'],
        ['  http://localhost:8080  ', 'http://localhost:8080'],
    ])('%s → %s', (input, expected) => {
        expect(normaliseBaseUrl(input)).toBe(expected)
    })
})

describe('routeDefinition', () => {
    it('relays every API path with the token, to editors and admins only', () => {
        expect(
            routeDefinition('https://dhims.chimgh.org/dhims/', ' d2p_abc ')
        ).toMatchObject({
            code: ROUTE_CODE,
            url: 'https://dhims.chimgh.org/dhims/api/**',
            auth: { type: 'api-token', token: 'd2p_abc' },
            authorities: [AUTH_EDIT, AUTH_ADMIN],
        })
    })
})

describe('sourceResource', () => {
    it('leaves paths alone without a source', () => {
        expect(isRemote(null)).toBe(false)
        expect(sourceResource(null, 'analytics')).toBe('analytics')
        expect(sourceResource({ routeId: null }, 'analytics')).toBe('analytics')
    })

    it('relays through the route when one is connected', () => {
        const ds = { routeId: 'abc123', url: 'https://dhims.chimgh.org/dhims' }
        expect(sourceResource(ds, 'analytics')).toBe(
            'routes/abc123/run/analytics'
        )
        expect(sourceLabel(ds)).toBe('dhims.chimgh.org')
    })
})

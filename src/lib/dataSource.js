/**
 * Where the assessment page reads indicator values from.
 *
 * By default that is the instance the app is served from. A DHIS2 app cannot
 * query a second server itself - `useDataEngine` only knows its own - so a
 * remote source goes through a DHIS2 *route* on this instance (the Route API,
 * 2.41+). The route holds the source's URL and access token on the server and
 * relays requests to it, which keeps the token out of the browser and needs no
 * CORS setup on the source.
 *
 * `settings.dataSource` records the connection: { routeId, url, username,
 * connectedAt }. Absent means "this instance", which is how every install
 * started, so nothing changes for one that never connects a source.
 */
import { AUTH_ADMIN, AUTH_EDIT } from './constants.js'

/** The route this app owns; one per instance, updated in place on reconnect. */
export const ROUTE_CODE = 'ghs-ha-data-source'

/** The GHS instance whose UIDs `framework/indicator-ids.js` ships bound to. */
export const DEFAULT_SOURCE_URL = 'https://dhims.chimgh.org/dhims'

export const isRemote = (dataSource) => Boolean(dataSource?.routeId)

/** Trim a pasted server address to the base DHIS2 URL. */
export const normaliseBaseUrl = (url) =>
    (url || '')
        .trim()
        .replace(/\/+$/, '')
        .replace(/\/(api|dhis-web-[\w-]+|apps)(\/.*)?$/, '')

/**
 * The route definition. `/**` lets the route relay any sub-path of the
 * source's API - analytics, org units and the metadata search all go through
 * it. Only users who can fill in or administer assessments may run it.
 */
export const routeDefinition = (baseUrl, token) => ({
    name: 'GHS Holistic Assessment data source',
    code: ROUTE_CODE,
    description:
        'Relays the GHS Holistic Assessment app to the instance its indicator values are read from.',
    url: `${normaliseBaseUrl(baseUrl)}/api/**`,
    auth: { type: 'api-token', token: token.trim() },
    authorities: [AUTH_EDIT, AUTH_ADMIN],
})

/**
 * The data-engine resource for an API path on the configured source: the path
 * itself locally, or the same path relayed through the route.
 */
export const sourceResource = (dataSource, path) =>
    isRemote(dataSource) ? `routes/${dataSource.routeId}/run/${path}` : path

/** A short label for the source, for notices: its host, or null when local. */
export const sourceLabel = (dataSource) => {
    if (!isRemote(dataSource)) {
        return null
    }
    try {
        return new URL(dataSource.url).host
    } catch {
        return dataSource.url
    }
}

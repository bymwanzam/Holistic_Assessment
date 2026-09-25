import { useDataQuery } from '@dhis2/app-runtime'
import { useMemo } from 'react'
import {
    AUTH_ADMIN,
    AUTH_EDIT,
    AUTH_PEER_REVIEW,
    AUTH_SUPERUSER,
} from './constants.js'

const ME_QUERY = {
    me: {
        resource: 'me',
        params: {
            fields: [
                'id',
                'username',
                'displayName',
                'authorities',
                'organisationUnits[id,displayName,level,path,parent[id,displayName]]',
                'dataViewOrganisationUnits[id,displayName,level,path]',
            ],
        },
    },
}

/**
 * What a list of DHIS2 authorities lets someone do in this app.
 *
 * Separated from the hook so the rule can be read and tested on its own: which
 * authority grants what is a decision, not a detail of how the current user is
 * fetched.
 *
 * Three custom authorities, one per thing a person does here — enter data,
 * review someone else's, configure the instance. They are independent: a
 * reviewer need not be able to enter data, and often should not be, since the
 * point of peer review is that somebody else looks at it. A superuser (ALL)
 * passes every check.
 */
export const permissionsOf = (authorities = []) => {
    const held = new Set(authorities)
    const isSuperuser = held.has(AUTH_SUPERUSER)
    return {
        isSuperuser,
        canEdit: isSuperuser || held.has(AUTH_EDIT),
        canReview: isSuperuser || held.has(AUTH_PEER_REVIEW),
        canAdmin: isSuperuser || held.has(AUTH_ADMIN),
    }
}

/**
 * DHIS2 org unit levels: 1 national, 2 regional, 3 district.
 */
export const ORG_LEVEL = {
    NATIONAL: 1,
    REGIONAL: 2,
    DISTRICT: 3,
}

/**
 * The org units that confer a role in this app: those at levels 1 to 3.
 *
 * The assessment is run nationally, by region and by district, so those are the
 * only levels a user's role is inherited from. An assignment below district —
 * a sub-district or a facility — carries no role here, and a user holding only
 * such assignments is not given the district's view in its place.
 */
export const roleOrgUnitsOf = (orgUnits = []) =>
    orgUnits.filter(
        (o) => o.level >= ORG_LEVEL.NATIONAL && o.level <= ORG_LEVEL.DISTRICT
    )

/**
 * The signed-in user, their authorities and their assigned org units.
 *
 * `canEdit` gates data entry, `canReview` conducting a peer review and
 * `canAdmin` the Administration page, matching the authorities described in the
 * app's help.
 */
export const useCurrentUser = () => {
    const { data, loading, error, refetch } = useDataQuery(ME_QUERY)

    return useMemo(() => {
        const me = data?.me
        const authorities = me?.authorities || []
        const permissions = permissionsOf(authorities)
        const orgUnits = roleOrgUnitsOf(me?.organisationUnits)

        return {
            loading,
            error,
            refetch,
            user: me || null,
            authorities,
            ...permissions,
            orgUnits,
            orgUnitIds: orgUnits.map((o) => o.id),
            hasRole: hasRoleOf({ ...permissions, orgUnits }),
        }
    }, [data, loading, error, refetch])
}

/**
 * How far a user's remit reaches, as an org unit level: the widest national,
 * regional or district org unit they hold. A superuser is placed by their org
 * unit like anyone else — ALL grants every authority, not a wider remit — and
 * is treated as national only when they hold no such org unit. Anyone else
 * without one gets the narrowest view rather than the widest.
 *
 * This is what decides which dashboard a user lands on and which Admin tabs
 * they see — a national user sees the country and its regions, a regional user
 * their region and its districts, a district user their district.
 */
export const scopeOf = (user) => {
    const levels = roleOrgUnitsOf(user.orgUnits).map((o) => o.level)
    if (levels.length) {
        return Math.min(...levels)
    }
    return user.isSuperuser ? ORG_LEVEL.NATIONAL : Infinity
}

/**
 * Whether the user has any role in the app at all: a superuser, or someone
 * assigned to at least one national, regional or district org unit.
 */
export const hasRoleOf = (user) => scopeOf(user) <= ORG_LEVEL.DISTRICT

/**
 * True when the user is assigned to `orgUnitId` or any of its ancestors,
 * which is how we decide whether they own an assessment.
 */
export const ownsOrgUnit = (user, orgUnit) => {
    if (!user || !orgUnit) {
        return false
    }
    if (user.isSuperuser) {
        return true
    }
    const path = orgUnit.path || ''
    return user.orgUnits.some(
        (o) => o.id === orgUnit.id || path.includes(`/${o.id}`)
    )
}

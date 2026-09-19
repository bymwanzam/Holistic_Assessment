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

        return {
            loading,
            error,
            refetch,
            user: me || null,
            authorities,
            ...permissionsOf(authorities),
            orgUnits: me?.organisationUnits || [],
            orgUnitIds: (me?.organisationUnits || []).map((o) => o.id),
        }
    }, [data, loading, error, refetch])
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
 * How far a user's remit reaches, as an org unit level: the widest org unit
 * they hold. A superuser is treated as national, and a user with no org unit at
 * all gets the narrowest view rather than the widest.
 *
 * This is what decides which dashboard a user lands on and which Admin tabs
 * they see — a national user sees the country and its regions, a regional user
 * their region and its districts, a district user their district.
 */
export const scopeOf = (user) => {
    if (user.isSuperuser) {
        return ORG_LEVEL.NATIONAL
    }
    const levels = (user.orgUnits || []).map((o) => o.level).filter(Boolean)
    return levels.length ? Math.min(...levels) : Infinity
}

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

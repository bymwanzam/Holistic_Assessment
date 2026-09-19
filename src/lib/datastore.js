import { useDataEngine } from '@dhis2/app-runtime'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
    DEFAULT_FRAMEWORK_ID,
    frameworkIdForLevel,
} from '../framework/index.js'
import { builtinIdsFor, withBuiltinIds } from '../framework/indicator-ids.js'
import {
    MAPPING_KEY,
    NAMESPACE,
    PAIRING_KEY,
    PERIODS_KEY,
    SETTINGS_KEY,
    STATUS,
    TARGETS_KEY,
} from './constants.js'

export const assessmentKey = (year, orgUnitId) =>
    `assessment-${year}-${orgUnitId}`

const isNotFound = (error) => {
    const status = error?.details?.httpStatusCode ?? error?.httpStatusCode
    return (
        status === 404 || /not found|does not exist/i.test(error?.message || '')
    )
}

/** A brand-new, empty assessment record. */
export const emptyAssessment = ({ year, orgUnit, level, frameworkId }) => ({
    version: 1,
    frameworkId: frameworkId || frameworkIdForLevel(level),
    year,
    level,
    orgUnit: orgUnit
        ? {
              id: orgUnit.id,
              name: orgUnit.displayName || orgUnit.name,
              level: orgUnit.level,
              parentId: orgUnit.parent?.id || null,
              parentName:
                  orgUnit.parent?.displayName || orgUnit.parent?.name || null,
          }
        : null,
    status: STATUS.DRAFT,
    values: {},
    milestones: {},
    review: null,
    response: null,
    history: [],
    createdAt: null,
    updatedAt: null,
    updatedBy: null,
})

/** Read one dataStore key, treating "missing" as a null value rather than an error. */
const readKey = async (engine, key) => {
    try {
        const res = await engine.query({
            value: { resource: `dataStore/${NAMESPACE}/${key}` },
        })
        return res.value
    } catch (error) {
        if (isNotFound(error)) {
            return null
        }
        throw error
    }
}

/** Write one dataStore key, creating it on first save and updating thereafter. */
const writeKey = async (engine, key, value) => {
    const resource = `dataStore/${NAMESPACE}/${key}`
    try {
        await engine.mutate({ resource, type: 'update', data: value })
    } catch (error) {
        if (isNotFound(error)) {
            await engine.mutate({ resource, type: 'create', data: value })
            return
        }
        throw error
    }
}

export const useDataStore = () => {
    const engine = useDataEngine()
    return useMemo(
        () => ({
            read: (key) => readKey(engine, key),
            write: (key, value) => writeKey(engine, key, value),
            remove: (key) =>
                engine.mutate({
                    resource: `dataStore/${NAMESPACE}/${key}`,
                    type: 'delete',
                }),
            listKeys: async () => {
                try {
                    const res = await engine.query({
                        keys: { resource: `dataStore/${NAMESPACE}` },
                    })
                    return Array.isArray(res.keys) ? res.keys : []
                } catch (error) {
                    if (isNotFound(error)) {
                        return []
                    }
                    throw error
                }
            },
        }),
        [engine]
    )
}

/**
 * Load a single dataStore key into component state.
 * Returns the value, loading/error state, a refetch and an imperative save.
 */
export const useStoreValue = (key, fallback = null) => {
    const store = useDataStore()
    const [value, setValue] = useState(fallback)
    const [loading, setLoading] = useState(Boolean(key))
    const [error, setError] = useState(null)
    const latestKey = useRef(key)

    const load = useCallback(async () => {
        if (!key) {
            setValue(fallback)
            setLoading(false)
            return
        }
        latestKey.current = key
        setLoading(true)
        setError(null)
        try {
            const stored = await store.read(key)
            // Ignore responses for a key we have already navigated away from.
            if (latestKey.current === key) {
                setValue(stored === null ? fallback : stored)
            }
        } catch (e) {
            if (latestKey.current === key) {
                setError(e)
            }
        } finally {
            if (latestKey.current === key) {
                setLoading(false)
            }
        }
        // `fallback` is intentionally excluded: callers pass a fresh object literal
        // on every render, which would otherwise reload in a loop.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key, store])

    useEffect(() => {
        load()
    }, [load])

    const save = useCallback(
        async (next) => {
            if (!key) {
                return
            }
            await store.write(key, next)
            setValue(next)
        },
        [key, store]
    )

    return { value, setValue, loading, error, refetch: load, save }
}

export const useSettings = () =>
    useStoreValue(SETTINGS_KEY, {
        frameworkId: DEFAULT_FRAMEWORK_ID,
        defaultYear: new Date().getFullYear() - 1,
        organisationName: 'Ghana Health Service',
    })

export const useIndicatorMapping = () => useStoreValue(MAPPING_KEY, {})

/**
 * Indicator mapping is stored per framework, because the regional and district
 * tools reuse the same codes for different indicators — 1.17 is "Doctor to
 * population ratio" regionally but "Physician Assistant to population ratio" in
 * a district, so one shared code-keyed mapping would bind the wrong data.
 */
const isLegacyFlatMapping = (mapping) =>
    Object.values(mapping || {}).some(
        (v) => v && typeof v === 'object' && typeof v.id === 'string'
    )

/** What an administrator has saved for one tool, before built-ins are layered in. */
export const storedMappingForFramework = (mapping, frameworkId) => {
    if (!mapping) {
        return {}
    }
    // A mapping saved before frameworks were split described the regional tool.
    if (isLegacyFlatMapping(mapping)) {
        return frameworkId === DEFAULT_FRAMEWORK_ID ? mapping : {}
    }
    return mapping[frameworkId] || {}
}

/**
 * The bindings in force for one tool: what the app ships in
 * `framework/indicator-ids.js`, overridden by whatever the administrator saved.
 */
export const mappingForFramework = (mapping, frameworkId) =>
    withBuiltinIds(frameworkId, storedMappingForFramework(mapping, frameworkId))

/**
 * Reduce an edited mapping to what actually has to be stored: entries that
 * differ from the shipped binding, plus a `null` tombstone wherever a shipped
 * binding was cleared. Anything still equal to a built-in stays out of the
 * datastore, so a corrected id in a later release reaches installs that never
 * touched that row.
 */
export const strippedOfBuiltins = (frameworkId, edited) => {
    const builtin = builtinIdsFor(frameworkId)
    return Object.fromEntries(
        Object.entries(edited || {}).filter(([code, entry]) => {
            if (entry === null) {
                return Boolean(builtin[code])
            }
            return Boolean(entry?.id) && entry.id !== builtin[code]?.id
        })
    )
}

export const withFrameworkMapping = (mapping, frameworkId, next) => {
    const base = isLegacyFlatMapping(mapping)
        ? { [DEFAULT_FRAMEWORK_ID]: mapping }
        : { ...(mapping || {}) }
    return { ...base, [frameworkId]: next }
}

export const usePeerPairings = () => useStoreValue(PAIRING_KEY, {})

/**
 * Year-level target overrides, `{ [year]: { [frameworkId]: { [code]: {...} } } }`.
 * Empty until somebody edits a target, and a framework with no overrides scores
 * exactly as it did before the Targets tab existed.
 */
export const useTargets = () => useStoreValue(TARGETS_KEY, {})

/**
 * Assessment periods, `{ [year]: { status, opensAt, closesAt, ... } }`.
 *
 * A year with no entry is open: the gate has to be opted into, so adding it to
 * an instance that already holds assessments does not freeze every past year.
 */
export const usePeriods = () => useStoreValue(PERIODS_KEY, {})

/** Every stored assessment key, parsed into { key, year, orgUnitId }. */
export const useAssessmentKeys = () => {
    const store = useDataStore()
    const [keys, setKeys] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const load = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const all = await store.listKeys()
            setKeys(
                all
                    .filter((k) => k.startsWith('assessment-'))
                    .map((k) => {
                        const [, year, ...rest] = k.split('-')
                        return {
                            key: k,
                            year: Number(year),
                            orgUnitId: rest.join('-'),
                        }
                    })
                    .filter((k) => Number.isFinite(k.year) && k.orgUnitId)
            )
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }, [store])

    useEffect(() => {
        load()
    }, [load])

    return { keys, loading, error, refetch: load }
}

/** Append an audit entry without mutating the record in place. */
export const withHistory = (assessment, entry) => ({
    ...assessment,
    history: [
        ...(assessment.history || []),
        { at: new Date().toISOString(), ...entry },
    ],
})

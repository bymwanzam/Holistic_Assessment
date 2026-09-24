import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
    assessmentKey,
    emptyAssessment,
    recordKey,
    useDataStore,
} from './datastore.js'
import { scoreAssessment } from './scoring.js'
import { useAutoSave } from './useAutoSave.js'
import { useScoringFramework } from './useScoringFramework.js'

/**
 * Loads one assessment, exposes edit helpers, keeps a live score, and
 * auto-saves the working copy every 30 seconds.
 *
 * `autoSave` should be false for read-only viewers such as the peer reviewer
 * looking at a submitted assessment they do not own.
 */
export const useAssessment = ({ year, orgUnit, level, autoSave = true }) => {
    const store = useDataStore()
    const { resolve: resolveFramework } = useScoringFramework(year)
    const orgUnitId = orgUnit?.id || null
    const key = year && orgUnitId ? assessmentKey(year, orgUnitId) : null

    const [assessment, setAssessment] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    // The key whose read is in flight, so a slow response for an org unit the
    // user has already left is dropped instead of shown under the new one.
    const loadingKey = useRef(null)
    // Read through a ref: permissions arrive after the first render, and that
    // alone should not re-read the record.
    const autoSaveEnabled = useRef(autoSave)
    useEffect(() => {
        autoSaveEnabled.current = autoSave
    }, [autoSave])

    const save = useCallback(
        async (next) => {
            // The record's own key wins over the current selection: an autosave
            // that fires mid-switch must not write one unit's data over another.
            const target = recordKey(next) || key
            if (!target || !next) {
                return
            }
            const stamped = {
                ...next,
                updatedAt: new Date().toISOString(),
                createdAt: next.createdAt || new Date().toISOString(),
            }
            await store.write(target, stamped)
        },
        [key, store]
    )

    const autoSaver = useAutoSave({
        value: assessment,
        save,
        enabled: autoSave && Boolean(key),
    })
    const { reset: resetAutoSave, markSaved, flush } = autoSaver

    const load = useCallback(async () => {
        loadingKey.current = key
        setLoading(Boolean(key))
        setError(null)
        // Unsaved edits to the record being left are written to that record
        // before it is dropped, rather than lost on switching org unit.
        if (autoSaveEnabled.current) {
            await flush()
        }
        if (loadingKey.current !== key) {
            return
        }
        // Clear the previous record at once, so nothing can edit or autosave
        // it while the next one is being read.
        resetAutoSave(null)
        setAssessment(null)
        if (!key) {
            return
        }
        try {
            const stored = await store.read(key)
            if (loadingKey.current !== key) {
                return
            }
            const record = stored || emptyAssessment({ year, orgUnit, level })
            resetAutoSave(record)
            setAssessment(record)
        } catch (e) {
            if (loadingKey.current === key) {
                setError(e)
            }
        } finally {
            if (loadingKey.current === key) {
                setLoading(false)
            }
        }
        // `orgUnit` is a fresh object each render; `key` already captures its id.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key, store, year, level, resetAutoSave, flush])

    useEffect(() => {
        load()
    }, [load])

    // Through the resolver, so the year's target overrides are folded in and
    // this form scores a record exactly as the dashboard and reports do.
    const framework = useMemo(
        () => resolveFramework(assessment?.frameworkId),
        [resolveFramework, assessment?.frameworkId]
    )

    const result = useMemo(
        () =>
            assessment
                ? scoreAssessment(
                      framework,
                      assessment.values,
                      assessment.milestones
                  )
                : null,
        [framework, assessment]
    )

    /** Update one field of one indicator. */
    const setValue = useCallback((code, field, value) => {
        setAssessment((prev) => {
            if (!prev) {
                return prev
            }
            const existing = prev.values[code] || {}
            const next = { ...existing, [field]: value }
            // Typing over a fetched figure makes it a manual entry again.
            if (
                (field === 'current' || field === 'previous') &&
                existing.source === 'dhis2'
            ) {
                next.source = 'manual'
            }
            return { ...prev, values: { ...prev.values, [code]: next } }
        })
    }, [])

    /** Merge fetched DHIS2 values over the current ones. */
    const mergeValues = useCallback((incoming) => {
        setAssessment((prev) =>
            prev
                ? {
                      ...prev,
                      values: Object.entries(incoming).reduce(
                          (acc, [code, patch]) => ({
                              ...acc,
                              [code]: { ...(acc[code] || {}), ...patch },
                          }),
                          { ...prev.values }
                      ),
                  }
                : prev
        )
    }, [])

    const setMilestone = useCallback((code, patch) => {
        setAssessment((prev) =>
            prev
                ? {
                      ...prev,
                      milestones: {
                          ...prev.milestones,
                          [code]: {
                              ...(prev.milestones[code] || {}),
                              ...patch,
                          },
                      },
                  }
                : prev
        )
    }, [])

    const setReviewEntry = useCallback((code, patch, group = 'indicators') => {
        setAssessment((prev) => {
            if (!prev) {
                return prev
            }
            const review = prev.review || { status: 'IN_PROGRESS' }
            const bucket = review[group] || {}
            return {
                ...prev,
                review: {
                    ...review,
                    [group]: {
                        ...bucket,
                        [code]: { ...(bucket[code] || {}), ...patch },
                    },
                },
            }
        })
    }, [])

    const patchReview = useCallback((patch) => {
        setAssessment((prev) =>
            prev
                ? { ...prev, review: { ...(prev.review || {}), ...patch } }
                : prev
        )
    }, [])

    /** Persist immediately and clear the dirty flag. */
    const saveNow = useCallback(
        async (override) => {
            const snapshot = override || assessment
            if (!snapshot) {
                return
            }
            await save(snapshot)
            if (override) {
                setAssessment(override)
            }
            markSaved(snapshot)
        },
        [assessment, save, markSaved]
    )

    return {
        assessment,
        setAssessment,
        framework,
        result,
        loading,
        error,
        reload: load,
        setValue,
        mergeValues,
        setMilestone,
        setReviewEntry,
        patchReview,
        saveNow,
        autoSave: autoSaver,
    }
}

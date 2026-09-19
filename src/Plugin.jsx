import i18n from '@dhis2/d2-i18n'
import { CircularLoader, CssVariables, NoticeBox } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import StatusTag from './components/StatusTag.jsx'
import { PERFORMANCE_LABEL } from './lib/constants.js'
import { assessmentKey, useDataStore } from './lib/datastore.js'
import {
    fmtPercent,
    fmtPerformance,
    fmtScore,
    performanceCategory,
} from './lib/format.js'
import { scoreAssessment } from './lib/scoring.js'
import { useScoringFramework } from './lib/useScoringFramework.js'
import './theme.css'
import styles from './Plugin.module.css'

/**
 * An objective's score runs from -maxScore to +maxScore, so its bar shows the
 * score across that whole range: half-way along is a score of zero.
 */
const objectiveFill = (score, maxScore) =>
    maxScore
        ? Math.max(
              0,
              Math.min(100, ((score + maxScore) / (2 * maxScore)) * 100)
          )
        : 0

/**
 * Dashboard plugin view: a compact scorecard for one assessment.
 *
 * Dashboard item configuration supplies `year` and `orgUnitId`; without them
 * the plugin explains what it needs rather than rendering an empty card.
 */
export const Plugin = ({ year, orgUnitId, title }) => {
    const store = useDataStore()
    const { resolve: resolveFramework } = useScoringFramework(year)
    const [record, setRecord] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const load = useCallback(async () => {
        if (!year || !orgUnitId) {
            setLoading(false)
            return
        }
        setLoading(true)
        setError(null)
        try {
            setRecord(await store.read(assessmentKey(year, orgUnitId)))
        } catch (e) {
            setError(e)
        } finally {
            setLoading(false)
        }
    }, [store, year, orgUnitId])

    useEffect(() => {
        load()
    }, [load])

    const result = useMemo(() => {
        if (!record) {
            return null
        }
        const framework = resolveFramework(record.frameworkId)
        return scoreAssessment(framework, record.values, record.milestones)
    }, [record, resolveFramework])

    if (!year || !orgUnitId) {
        return (
            <div className={styles.plugin}>
                <NoticeBox title={i18n.t('Not configured')}>
                    {i18n.t(
                        'Set a year and organisation unit for this dashboard item.'
                    )}
                </NoticeBox>
            </div>
        )
    }

    if (loading) {
        return (
            <div className={styles.center}>
                <CircularLoader small />
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.plugin}>
                <NoticeBox error title={i18n.t('Could not load')}>
                    {error.message}
                </NoticeBox>
            </div>
        )
    }

    if (!record || !result) {
        return (
            <div className={styles.plugin}>
                <NoticeBox title={i18n.t('No assessment')}>
                    {i18n.t('No assessment has been saved for {{year}}.', {
                        year,
                    })}
                </NoticeBox>
            </div>
        )
    }

    const category = performanceCategory(result.performance)

    return (
        <div className={styles.plugin} data-performance={category}>
            <CssVariables colors spacers />
            <header className={styles.header}>
                <div>
                    <div className={styles.name}>
                        {title || record.orgUnit?.name || i18n.t('Assessment')}
                    </div>
                    <div className={styles.year}>{year}</div>
                </div>
                <StatusTag status={record.status} />
            </header>

            {/* The one number this card leads with, coloured by its band and
                captioned with the band's name so the colour is never the only
                thing saying how the assessment is doing. */}
            <div className={styles.indexBlock}>
                <div className={styles.indexValue}>
                    {fmtPerformance(result.performance)}
                </div>
                <div className={styles.indexLabel}>
                    {i18n.t('Performance score')}
                </div>
                <div className={styles.indexTrack}>
                    <div
                        className={styles.indexFill}
                        style={{
                            inlineSize: `${(result.performance / 5) * 100}%`,
                        }}
                    />
                </div>
                <div className={styles.bandLabel}>
                    {PERFORMANCE_LABEL[category]}
                </div>
            </div>

            <ul className={styles.objectives}>
                {result.objectives.map((o) => (
                    <li
                        key={o.index}
                        className={styles.objective}
                        data-objective={o.index}
                    >
                        <div className={styles.objectiveHead}>
                            <span className={styles.objectiveLabel}>
                                <span className={styles.dot} />
                                {i18n.t('Objective {{n}}', { n: o.index })}
                            </span>
                            <span className={styles.objectiveScore}>
                                {fmtPerformance(o.performance)}
                            </span>
                        </div>
                        <div className={styles.objectiveBar}>
                            <span className={styles.midpoint} />
                            <div
                                className={styles.objectiveFill}
                                style={{
                                    inlineSize: `${objectiveFill(
                                        o.score,
                                        o.maxScore
                                    )}%`,
                                }}
                            />
                        </div>
                    </li>
                ))}
            </ul>

            <footer className={styles.footer}>
                {i18n.t('{{pct}} complete · raw {{score}} of {{max}}', {
                    pct: fmtPercent(result.completion, 0),
                    score: fmtScore(result.total),
                    max: fmtScore(result.maxTotal),
                })}
            </footer>
        </div>
    )
}

Plugin.propTypes = {
    orgUnitId: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Plugin

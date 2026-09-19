import i18n from '@dhis2/d2-i18n'
import {
    AlertBar,
    Button,
    ButtonStrip,
    CircularLoader,
    NoticeBox,
    TabBar,
    Tab,
} from '@dhis2/ui'
import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'
import ContextBar from '../components/ContextBar.jsx'
import IndicatorTable from '../components/IndicatorTable.jsx'
import MilestonePanel from '../components/MilestonePanel.jsx'
import StatusTag from '../components/StatusTag.jsx'
import SummaryPanel from '../components/SummaryPanel.jsx'
import { useAppState } from '../lib/AppState.jsx'
import { LEVEL, MIN_SUBMIT_COMPLETION, STATUS } from '../lib/constants.js'
import { mappingForFramework, useIndicatorMapping } from '../lib/datastore.js'
import { fmtPercent, fmtRelative } from '../lib/format.js'
import { useAssessment } from '../lib/useAssessment.js'
import { useUnsavedWarning } from '../lib/useAutoSave.js'
import { useCurrentUser } from '../lib/useCurrentUser.js'
import { useDhis2Values } from '../lib/useDhis2Values.js'
import {
    useDistrictsForRegion,
    useOrgUnitsForLevel,
} from '../lib/useOrgUnits.js'
import {
    acceptRevisionRequest,
    applyScoreAdjustments,
    canEditIndicator,
    flaggedCodes,
    isOwnerEditable,
    reopenAsDraft,
    rejectAllAdjustments,
    submitBlockers,
    submitForReview,
} from '../lib/workflow.js'
import styles from './AssessmentPage.module.css'

/** Regional and district assessment share this page; only the level differs. */
export const AssessmentPage = ({ level }) => {
    const { year, setYear, regionId, setRegionId, districtId, setDistrictId } =
        useAppState()
    const user = useCurrentUser()
    const { value: allMapping } = useIndicatorMapping()
    const { fetchValues, loading: fetching } = useDhis2Values()

    const { orgUnits: regions } = useOrgUnitsForLevel(LEVEL.REGION)
    const { districts } = useDistrictsForRegion(regionId)

    const selectedId = level === LEVEL.DISTRICT ? districtId : regionId
    const orgUnit = useMemo(() => {
        const pool = level === LEVEL.DISTRICT ? districts : regions
        return pool.find((o) => o.id === selectedId) || null
    }, [level, districts, regions, selectedId])

    const [tab, setTab] = useState(0)
    const [alert, setAlert] = useState(null)

    const {
        assessment,
        framework,
        result,
        loading,
        error,
        setValue,
        mergeValues,
        setMilestone,
        saveNow,
        autoSave,
    } = useAssessment({ year, orgUnit, level, autoSave: user.canEdit })

    useUnsavedWarning(autoSave.dirty)

    // The regional and district tools reuse codes for different indicators, so
    // the mapping must be read for this record's own framework.
    const mapping = useMemo(
        () => mappingForFramework(allMapping, assessment?.frameworkId),
        [allMapping, assessment?.frameworkId]
    )

    const editable = Boolean(
        user.canEdit && assessment && isOwnerEditable(assessment.status)
    )
    const flagged = assessment ? flaggedCodes(assessment) : []
    const blockers = assessment
        ? submitBlockers(assessment, result?.completion ?? 0)
        : []

    const notify = (message, tone = 'success') =>
        setAlert({ message, tone, id: Date.now() })

    const handleFetch = async () => {
        try {
            const { values, matched, requested } = await fetchValues({
                mapping,
                orgUnitId: orgUnit.id,
                year,
            })
            if (requested === 0) {
                notify(
                    i18n.t(
                        'No indicators are mapped to DHIS2 yet. Map them on the Admin page.'
                    ),
                    'warning'
                )
                return
            }
            mergeValues(values)
            notify(
                i18n.t(
                    'Fetched {{matched}} of {{requested}} mapped indicators',
                    {
                        matched,
                        requested,
                    }
                )
            )
        } catch (e) {
            notify(
                i18n.t('Could not fetch DHIS2 data — {{msg}}', {
                    msg: e.message,
                }),
                'critical'
            )
        }
    }

    const handleSave = async () => {
        try {
            await saveNow()
            notify(i18n.t('Draft saved'))
        } catch (e) {
            notify(e.message, 'critical')
        }
    }

    const handleSubmit = async () => {
        try {
            const next = submitForReview(
                assessment,
                user.user,
                result?.completion ?? 0
            )
            await saveNow(next)
            notify(i18n.t('Submitted for peer review'))
        } catch (e) {
            notify(e.message, 'critical')
        }
    }

    const handleAcceptRevision = async () => {
        try {
            const next = acceptRevisionRequest(assessment, user.user)
            await saveNow(next)
            notify(
                i18n.t('Revision mode — {{count}} indicator(s) unlocked', {
                    count: flagged.length,
                })
            )
        } catch (e) {
            notify(e.message, 'critical')
        }
    }

    const suggestedCodes = useMemo(() => {
        const indicators = assessment?.review?.indicators || {}
        return Object.entries(indicators)
            .filter(
                ([, r]) =>
                    r?.suggestedScore !== undefined &&
                    r?.suggestedScore !== null
            )
            .map(([code]) => code)
    }, [assessment])

    const handleAcceptAdjustments = async () => {
        try {
            const next = applyScoreAdjustments(
                assessment,
                suggestedCodes,
                user.user
            )
            await saveNow(next)
            notify(
                i18n.t('{{count}} adjustment(s) applied', {
                    count: suggestedCodes.length,
                })
            )
        } catch (e) {
            notify(e.message, 'critical')
        }
    }

    const handleRejectAdjustments = async () => {
        try {
            const next = rejectAllAdjustments(assessment, user.user)
            await saveNow(next)
            notify(i18n.t('Original scores kept'))
        } catch (e) {
            notify(e.message, 'critical')
        }
    }

    const handleReopen = async () => {
        try {
            const next = reopenAsDraft(assessment, user.user)
            await saveNow(next)
            notify(i18n.t('Assessment reopened as draft'))
        } catch (e) {
            notify(e.message, 'critical')
        }
    }

    const title =
        level === LEVEL.DISTRICT
            ? i18n.t('District Assessment')
            : i18n.t('Regional Assessment')

    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                {assessment && <StatusTag status={assessment.status} />}
                {autoSave.saving && (
                    <span className={styles.autosave}>{i18n.t('Saving…')}</span>
                )}
                {!autoSave.saving && autoSave.savedAt && (
                    <span className={styles.autosave}>
                        {i18n.t('Auto-saved {{when}}', {
                            when: fmtRelative(autoSave.savedAt),
                        })}
                    </span>
                )}
            </header>

            <ContextBar
                level={level}
                year={year}
                regionId={regionId}
                districtId={districtId}
                onYearChange={setYear}
                onRegionChange={setRegionId}
                onDistrictChange={setDistrictId}
            >
                <Button
                    small
                    disabled={!orgUnit || fetching || !editable}
                    loading={fetching}
                    onClick={handleFetch}
                >
                    {i18n.t('Fetch DHIS2 data')}
                </Button>
                <Button
                    small
                    primary
                    disabled={!assessment || !editable}
                    onClick={handleSave}
                >
                    {i18n.t('Save draft')}
                </Button>
                <Button
                    small
                    disabled={!assessment || blockers.length > 0}
                    onClick={handleSubmit}
                >
                    {assessment?.status === STATUS.REVISION
                        ? i18n.t('Resubmit for review')
                        : i18n.t('Submit for review')}
                </Button>
            </ContextBar>

            {alert && (
                <AlertBar
                    key={alert.id}
                    duration={6000}
                    success={alert.tone === 'success'}
                    warning={alert.tone === 'warning'}
                    critical={alert.tone === 'critical'}
                    onHidden={() => setAlert(null)}
                >
                    {alert.message}
                </AlertBar>
            )}

            {!user.canEdit && (
                <div className={styles.notice}>
                    <NoticeBox warning title={i18n.t('Read-only access')}>
                        {i18n.t(
                            'You do not have the GHS_ASSESSMENT_EDIT authority, so this assessment is read-only. Contact your DHIS2 administrator to request edit access.'
                        )}
                    </NoticeBox>
                </div>
            )}

            {!orgUnit && (
                <NoticeBox title={i18n.t('Select an organisation unit')}>
                    {level === LEVEL.DISTRICT
                        ? i18n.t(
                              'Choose a region and then a district to begin.'
                          )
                        : i18n.t('Choose a region to begin.')}
                </NoticeBox>
            )}

            {orgUnit && loading && (
                <div className={styles.loading}>
                    <CircularLoader />
                </div>
            )}

            {error && (
                <NoticeBox error title={i18n.t('Could not load assessment')}>
                    {error.message}
                </NoticeBox>
            )}

            {orgUnit && assessment && result && !loading && (
                <>
                    {assessment.status === STATUS.SUBMITTED &&
                        assessment.review?.status === 'SUBMITTED' &&
                        flagged.length > 0 && (
                            <div className={styles.notice}>
                                <NoticeBox
                                    warning
                                    title={i18n.t('Revision requested')}
                                >
                                    <p>
                                        {i18n.t(
                                            'The reviewer asked for corrections to {{count}} indicator(s). Accepting unlocks only those rows.',
                                            { count: flagged.length }
                                        )}
                                    </p>
                                    <Button
                                        small
                                        primary
                                        disabled={!user.canEdit}
                                        onClick={handleAcceptRevision}
                                    >
                                        {i18n.t('Accept revision request')}
                                    </Button>
                                </NoticeBox>
                            </div>
                        )}

                    {assessment.status === STATUS.UNDER_REVIEW &&
                        suggestedCodes.length > 0 && (
                            <div className={styles.notice}>
                                <NoticeBox
                                    title={i18n.t('Peer review complete')}
                                >
                                    <p>
                                        {i18n.t(
                                            'The reviewer approved this assessment and suggested {{count}} score adjustment(s).',
                                            { count: suggestedCodes.length }
                                        )}
                                    </p>
                                    <ButtonStrip>
                                        <Button
                                            small
                                            primary
                                            disabled={!user.canEdit}
                                            onClick={handleAcceptAdjustments}
                                        >
                                            {i18n.t(
                                                'Accept {{count}} changes',
                                                {
                                                    count: suggestedCodes.length,
                                                }
                                            )}
                                        </Button>
                                        <Button
                                            small
                                            disabled={!user.canEdit}
                                            onClick={handleRejectAdjustments}
                                        >
                                            {i18n.t('Reject all')}
                                        </Button>
                                    </ButtonStrip>
                                </NoticeBox>
                            </div>
                        )}

                    {assessment.status === STATUS.REJECTED && (
                        <div className={styles.notice}>
                            <NoticeBox
                                error
                                title={i18n.t('Assessment rejected')}
                            >
                                <p>
                                    {assessment.review?.comments?.general ||
                                        i18n.t(
                                            'The reviewer found significant data quality issues.'
                                        )}
                                </p>
                                <Button
                                    small
                                    disabled={!user.canEdit}
                                    onClick={handleReopen}
                                >
                                    {i18n.t('Reopen as draft')}
                                </Button>
                            </NoticeBox>
                        </div>
                    )}

                    {assessment.status === STATUS.REVISION && (
                        <div className={styles.notice}>
                            <NoticeBox warning title={i18n.t('Revision mode')}>
                                {i18n.t(
                                    'Only the {{count}} flagged indicator(s) can be edited. Update them and resubmit for the same reviewer.',
                                    { count: flagged.length }
                                )}
                            </NoticeBox>
                        </div>
                    )}

                    {blockers.length > 0 && editable && (
                        <div className={styles.notice}>
                            <NoticeBox title={i18n.t('Before submitting')}>
                                <ul className={styles.blockerList}>
                                    {blockers.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                                {i18n.t(
                                    'Any indicator left without data scores -2. Current completion — {{pct}} (minimum {{min}}).',
                                    {
                                        pct: fmtPercent(result.completion, 0),
                                        min: fmtPercent(
                                            MIN_SUBMIT_COMPLETION,
                                            0
                                        ),
                                    }
                                )}
                            </NoticeBox>
                        </div>
                    )}

                    <div className={styles.body}>
                        {/* One `data-objective` here colours the whole pane -
                            the tab, the objective heading, the table and the
                            milestone card all read their accent from it. */}
                        <section
                            className={styles.content}
                            data-objective={result.objectives[tab]?.index ?? 1}
                        >
                            <TabBar>
                                {result.objectives.map((objective, i) => (
                                    <Tab
                                        key={objective.index}
                                        selected={tab === i}
                                        onClick={() => setTab(i)}
                                    >
                                        {i18n.t(
                                            'Objective {{n}} ({{done}}/{{total}})',
                                            {
                                                n: objective.index,
                                                done: objective.answered,
                                                total: objective.total,
                                            }
                                        )}
                                    </Tab>
                                ))}
                            </TabBar>

                            {result.objectives[tab] && (
                                <>
                                    <p className={styles.objectiveTitle}>
                                        {result.objectives[tab].title}
                                    </p>

                                    <IndicatorTable
                                        objective={result.objectives[tab]}
                                        mapping={mapping}
                                        mode="entry"
                                        canEditCode={(code) =>
                                            user.canEdit &&
                                            canEditIndicator(assessment, code)
                                        }
                                        reviewIndicators={
                                            assessment.review?.status ===
                                            'SUBMITTED'
                                                ? assessment.review
                                                      .indicators || {}
                                                : {}
                                        }
                                        onValueChange={setValue}
                                    />

                                    <MilestonePanel
                                        milestone={
                                            framework.objectives[tab].milestone
                                        }
                                        row={
                                            result.objectives[tab].milestoneRow
                                        }
                                        entry={
                                            assessment.milestones[
                                                framework.objectives[tab]
                                                    .milestone.code
                                            ] || {}
                                        }
                                        editable={editable}
                                        mode="entry"
                                        reviewEntry={
                                            assessment.review?.milestones?.[
                                                framework.objectives[tab]
                                                    .milestone.code
                                            ]
                                        }
                                        onChange={setMilestone}
                                    />
                                </>
                            )}
                        </section>

                        <aside className={styles.sidebar}>
                            <SummaryPanel result={result} />
                        </aside>
                    </div>
                </>
            )}
        </div>
    )
}

AssessmentPage.propTypes = {
    level: PropTypes.oneOf([LEVEL.REGION, LEVEL.DISTRICT]).isRequired,
}

export default AssessmentPage

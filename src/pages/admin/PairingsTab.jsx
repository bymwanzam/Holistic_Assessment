import i18n from '@dhis2/d2-i18n'
import {
    AlertBar,
    Button,
    CircularLoader,
    NoticeBox,
    SingleSelectField,
    SingleSelectOption,
} from '@dhis2/ui'
import React, { useMemo, useState } from 'react'
import { useAppState } from '../../lib/AppState.jsx'
import { LEVEL } from '../../lib/constants.js'
import { usePeerPairings } from '../../lib/datastore.js'
import { pairingScope } from '../../lib/useAccessibleOrgUnits.js'
import { useCurrentUser } from '../../lib/useCurrentUser.js'
import { useOrgUnitsForLevel } from '../../lib/useOrgUnits.js'
import styles from '../AdminPage.module.css'

/**
 * Who reviews whom. Stored under `peer-pairings` as
 * `{ '<year>': { '<reviewer org unit id>': '<assessed org unit id>' } }`,
 * keyed by year because pairings are redrawn each cycle.
 *
 * A pairing is one-directional on purpose: reciprocal review is the common
 * arrangement but not the only one, so adding A→B does not add B→A.
 *
 * Below national level the tab is cut to the user's region (see
 * `pairingScope`): they pair the districts of their region with each other,
 * and of the regions see only their own and the one paired with it.
 */
export const PairingsTab = () => {
    const { year, regionId, setRegionId } = useAppState()
    const user = useCurrentUser()
    const { value: stored, save, loading } = usePeerPairings()

    const { orgUnits: regions } = useOrgUnitsForLevel(LEVEL.REGION)
    const { orgUnits: allDistricts } = useOrgUnitsForLevel(LEVEL.DISTRICT)

    const forYear = useMemo(
        () => (stored || {})[String(year)] || {},
        [stored, year]
    )

    const scoped = useMemo(
        () => pairingScope({ user, regions, districts: allDistricts, forYear }),
        [user, regions, allDistricts, forYear]
    )
    const national = scoped === null

    // Below national, district pairing is the one they draw, so it opens first.
    const [chosenLevel, setLevel] = useState(null)
    const level = chosenLevel || (national ? LEVEL.REGION : LEVEL.DISTRICT)

    const [reviewer, setReviewer] = useState(null)
    const [assessed, setAssessed] = useState(null)
    const [alert, setAlert] = useState(null)

    const nationalDistricts = useMemo(
        () =>
            regionId
                ? allDistricts.filter((d) => d.parent?.id === regionId)
                : [],
        [allDistricts, regionId]
    )

    const pool = national
        ? level === LEVEL.DISTRICT
            ? nationalDistricts
            : regions
        : level === LEVEL.DISTRICT
          ? scoped.districts
          : scoped.regions

    // Regional pairings are drawn nationally; below that they are only listed.
    const canAdd = national || level === LEVEL.DISTRICT

    // Named from every org unit, so a pairing reaching outside the current
    // pool still shows a name rather than an id.
    const byId = useMemo(
        () =>
            new Map(
                [...regions, ...allDistricts].map((o) => [
                    o.id,
                    o.displayName || o.name,
                ])
            ),
        [regions, allDistricts]
    )

    const notify = (message, tone = 'success') =>
        setAlert({ message, tone, id: Date.now() })

    const persist = async (next) => {
        try {
            await save({ ...(stored || {}), [String(year)]: next })
        } catch (e) {
            notify(e.message, 'critical')
            throw e
        }
    }

    const add = async () => {
        if (!reviewer || !assessed) {
            return
        }
        if (reviewer === assessed) {
            notify(i18n.t('An org unit cannot review itself.'), 'critical')
            return
        }
        // A reviewer already paired outside the region was paired nationally;
        // replacing that here would quietly undo a national decision.
        const current = rows.find((r) => r.reviewerId === reviewer)
        if (current && !current.editable) {
            notify(
                i18n.t(
                    '{{reviewer}} was paired at national level. Ask a national administrator to change it.',
                    { reviewer: byId.get(reviewer) }
                ),
                'critical'
            )
            return
        }
        await persist({ ...forYear, [reviewer]: assessed })
        notify(
            i18n.t('{{reviewer}} will review {{assessed}}', {
                reviewer: byId.get(reviewer),
                assessed: byId.get(assessed),
            })
        )
        setReviewer(null)
        setAssessed(null)
    }

    const remove = async (id) => {
        const next = { ...forYear }
        delete next[id]
        await persist(next)
        notify(i18n.t('Pairing removed'))
    }

    const rows = national
        ? Object.entries(forYear).map(([reviewerId, assessedId]) => ({
              reviewerId,
              assessedId,
              editable: true,
          }))
        : level === LEVEL.DISTRICT
          ? scoped.districtRows
          : scoped.regionRows

    return (
        <section>
            {alert && (
                <AlertBar
                    key={alert.id}
                    duration={5000}
                    success={alert.tone === 'success'}
                    critical={alert.tone === 'critical'}
                    onHidden={() => setAlert(null)}
                >
                    {alert.message}
                </AlertBar>
            )}

            <h2 className={styles.sectionTitle}>
                {i18n.t('Peer review pairings for {{year}}', { year })}
            </h2>
            <p className={styles.sectionBody}>
                {i18n.t(
                    'Each pairing says that one org unit reviews another. Pairings are held per year, so last cycle is left intact when this one is redrawn.'
                )}
            </p>

            <div className={styles.controls}>
                <div className={styles.field}>
                    <SingleSelectField
                        dense
                        label={i18n.t('Level')}
                        selected={level}
                        onChange={({ selected }) => {
                            setLevel(selected)
                            setReviewer(null)
                            setAssessed(null)
                        }}
                    >
                        <SingleSelectOption
                            label={i18n.t('Regional')}
                            value={LEVEL.REGION}
                        />
                        <SingleSelectOption
                            label={i18n.t('District')}
                            value={LEVEL.DISTRICT}
                        />
                    </SingleSelectField>
                </div>

                {national && level === LEVEL.DISTRICT && (
                    <div className={styles.field}>
                        <SingleSelectField
                            dense
                            label={i18n.t('Region')}
                            selected={regionId || ''}
                            onChange={({ selected }) => setRegionId(selected)}
                        >
                            {regions.map((r) => (
                                <SingleSelectOption
                                    key={r.id}
                                    label={r.displayName || r.name}
                                    value={r.id}
                                />
                            ))}
                        </SingleSelectField>
                    </div>
                )}

                {canAdd && (
                    <>
                        <div className={styles.field}>
                            <SingleSelectField
                                dense
                                label={i18n.t('Reviewer')}
                                selected={reviewer || ''}
                                onChange={({ selected }) =>
                                    setReviewer(selected)
                                }
                            >
                                {pool.map((o) => (
                                    <SingleSelectOption
                                        key={o.id}
                                        label={o.displayName || o.name}
                                        value={o.id}
                                    />
                                ))}
                            </SingleSelectField>
                        </div>

                        <div className={styles.field}>
                            <SingleSelectField
                                dense
                                label={i18n.t('Reviews')}
                                selected={assessed || ''}
                                onChange={({ selected }) =>
                                    setAssessed(selected)
                                }
                            >
                                {pool.map((o) => (
                                    <SingleSelectOption
                                        key={o.id}
                                        label={o.displayName || o.name}
                                        value={o.id}
                                    />
                                ))}
                            </SingleSelectField>
                        </div>

                        <Button
                            small
                            primary
                            disabled={!reviewer || !assessed}
                            onClick={add}
                        >
                            {i18n.t('Add pairing')}
                        </Button>
                    </>
                )}
            </div>

            {!canAdd && (
                <p className={styles.sectionBody}>
                    {i18n.t(
                        'Regional pairings are drawn at national level. Your region and the region paired with it are listed below.'
                    )}
                </p>
            )}

            {loading && (
                <div className={styles.loading}>
                    <CircularLoader />
                </div>
            )}

            {!loading && !rows.length && (
                <NoticeBox title={i18n.t('No pairings yet')}>
                    {i18n.t(
                        'Nothing is paired for {{year}}. Add a pairing above.',
                        { year }
                    )}
                </NoticeBox>
            )}

            {!loading && rows.length > 0 && (
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>{i18n.t('Reviewer')}</th>
                            <th>{i18n.t('Reviews')}</th>
                            <th>{i18n.t('Action')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(({ reviewerId, assessedId, editable }) => (
                            <tr key={reviewerId}>
                                {/* An org unit outside the current level's pool
                                    still has to be listed, so its id is shown
                                    rather than the row silently disappearing. */}
                                <td>{byId.get(reviewerId) || reviewerId}</td>
                                <td>{byId.get(assessedId) || assessedId}</td>
                                <td>
                                    {editable ? (
                                        <Button
                                            small
                                            destructive
                                            onClick={() => remove(reviewerId)}
                                        >
                                            {i18n.t('Remove')}
                                        </Button>
                                    ) : (
                                        i18n.t('Set nationally')
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </section>
    )
}

export default PairingsTab

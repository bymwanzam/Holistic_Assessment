import i18n from '@dhis2/d2-i18n'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { LEVEL } from '../lib/constants.js'
import { assessmentYears } from '../lib/format.js'
import styles from './ContextBar.module.css'

/**
 * Year plus org-unit selection. District assessments need a region first, so
 * the district list is filtered by the chosen region.
 *
 * The page passes in only the org units the user may open. A selection left
 * over from another page that falls outside them is cleared, and a list with a
 * single entry — a district user's own region and district — is chosen for
 * them. With nothing chosen yet, the user's own region (`homeRegionId`) is.
 * National users have none, so they start from an empty choice.
 */
export const ContextBar = ({
    level,
    year,
    regions = [],
    districts = [],
    loading,
    regionId,
    districtId,
    homeRegionId,
    onYearChange,
    onRegionChange,
    onDistrictChange,
    children,
}) => {
    useEffect(() => {
        if (loading) {
            return
        }
        if (regions.length === 1 && regionId !== regions[0].id) {
            onRegionChange(regions[0].id)
        } else if (regionId && !regions.some((r) => r.id === regionId)) {
            onRegionChange(homeRegionId || '')
        } else if (!regionId && homeRegionId) {
            onRegionChange(homeRegionId)
        }
        // The handlers are recreated on every render; the lists decide this.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, regions, regionId, homeRegionId])

    useEffect(() => {
        if (loading || level !== LEVEL.DISTRICT || !regionId) {
            return
        }
        if (districts.length === 1 && districtId !== districts[0].id) {
            onDistrictChange(districts[0].id)
        } else if (districtId && !districts.some((d) => d.id === districtId)) {
            onDistrictChange('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading, level, districts, regionId, districtId])

    const years = assessmentYears()

    return (
        <div className={styles.bar}>
            <div className={styles.field}>
                <SingleSelectField
                    dense
                    label={i18n.t('Assessment year')}
                    selected={year ? String(year) : ''}
                    onChange={({ selected }) => onYearChange(Number(selected))}
                >
                    {years.map((y) => (
                        <SingleSelectOption
                            key={y}
                            label={String(y)}
                            value={String(y)}
                        />
                    ))}
                </SingleSelectField>
            </div>

            <div className={styles.field}>
                <SingleSelectField
                    dense
                    filterable
                    noMatchText={i18n.t('No regions found')}
                    label={i18n.t('Region')}
                    loading={loading}
                    selected={regionId || ''}
                    onChange={({ selected }) => onRegionChange(selected)}
                >
                    {regions.map((o) => (
                        <SingleSelectOption
                            key={o.id}
                            label={o.displayName}
                            value={o.id}
                        />
                    ))}
                </SingleSelectField>
            </div>

            {level === LEVEL.DISTRICT && (
                <div className={styles.field}>
                    <SingleSelectField
                        dense
                        filterable
                        noMatchText={i18n.t('No districts found')}
                        label={i18n.t('District')}
                        loading={loading}
                        disabled={!regionId}
                        selected={districtId || ''}
                        onChange={({ selected }) => onDistrictChange(selected)}
                    >
                        {districts.map((o) => (
                            <SingleSelectOption
                                key={o.id}
                                label={o.displayName}
                                value={o.id}
                            />
                        ))}
                    </SingleSelectField>
                </div>
            )}

            <div className={styles.actions}>{children}</div>
        </div>
    )
}

ContextBar.propTypes = {
    children: PropTypes.node,
    districtId: PropTypes.string,
    districts: PropTypes.arrayOf(PropTypes.object),
    homeRegionId: PropTypes.string,
    level: PropTypes.string,
    loading: PropTypes.bool,
    onDistrictChange: PropTypes.func,
    onRegionChange: PropTypes.func,
    onYearChange: PropTypes.func,
    regionId: PropTypes.string,
    regions: PropTypes.arrayOf(PropTypes.object),
    year: PropTypes.number,
}

export default ContextBar

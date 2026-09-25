import i18n from '@dhis2/d2-i18n'
import { CssVariables, NoticeBox } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
import { HashRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import './theme.css'
import styles from './App.module.css'
import { AppStateProvider } from './lib/AppState.jsx'
import { LEVEL } from './lib/constants.js'
import { ORG_LEVEL, scopeOf, useCurrentUser } from './lib/useCurrentUser.js'
import AdminPage from './pages/AdminPage.jsx'
import AssessmentPage from './pages/AssessmentPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import HelpPage from './pages/HelpPage.jsx'
import PeerReviewPage from './pages/PeerReviewPage.jsx'
import ReportsPage from './pages/ReportsPage.jsx'

const NAV = [
    {
        to: '/dashboard',
        label: () => i18n.t('Dashboard'),
        upTo: ORG_LEVEL.REGIONAL,
    },
    {
        to: '/regional',
        label: () => i18n.t('Regional Assessment'),
        upTo: ORG_LEVEL.REGIONAL,
    },
    { to: '/district', label: () => i18n.t('District Assessment') },
    {
        to: '/peer-review/regional',
        label: () => i18n.t('Regional Peer Review'),
        upTo: ORG_LEVEL.REGIONAL,
    },
    {
        to: '/peer-review/district',
        label: () => i18n.t('District Peer Review'),
    },
    { to: '/reports', label: () => i18n.t('Reports') },
    { to: '/admin', label: () => i18n.t('Administration'), adminOnly: true },
    { to: '/help', label: () => i18n.t('Help'), alwaysOpen: true },
]

/*
 * The org units the user works from, widest first — the ones their role in the
 * app comes from. Shown under the navigation so everyone can see at a glance
 * whose data they are looking at. A superuser with no org unit of their own is
 * treated as national, so they are told that rather than shown nothing.
 */
const UserOrgUnits = ({ user }) => {
    if (user.loading || user.error) {
        return null
    }
    const orgUnits = [...user.orgUnits].sort(
        (a, b) =>
            a.level - b.level || a.displayName.localeCompare(b.displayName)
    )
    const names = orgUnits.length
        ? orgUnits.map((o) => o.displayName)
        : user.isSuperuser
          ? [i18n.t('National (all organisation units)')]
          : []
    if (!names.length) {
        return null
    }

    return (
        <div className={styles.orgUnit}>
            <span className={styles.orgUnitLabel}>
                {names.length > 1
                    ? i18n.t('Your Organisation Units')
                    : i18n.t('Your Organisation Unit')}
            </span>
            <ul className={styles.orgUnitList}>
                {names.map((name) => (
                    <li key={name} className={styles.orgUnitName}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

UserOrgUnits.propTypes = {
    user: PropTypes.shape({
        error: PropTypes.any,
        isSuperuser: PropTypes.bool,
        loading: PropTypes.bool,
        orgUnits: PropTypes.arrayOf(
            PropTypes.shape({
                displayName: PropTypes.string,
                level: PropTypes.number,
            })
        ),
    }).isRequired,
}

const Sidebar = () => {
    const user = useCurrentUser()
    const { canAdmin, hasRole, loading } = user
    const blocked = !loading && !hasRole
    const scope = scopeOf(user)

    return (
        <nav className={styles.sidebar} aria-label={i18n.t('Main navigation')}>
            <div className={styles.sidebarInner}>
                <div className={styles.brand}>
                    {/* The app icon's three arcs, flattened into three bars: one
                    per objective, in the objective accents used throughout. */}
                    <span className={styles.brandMark} aria-hidden="true">
                        <i data-objective="1" />
                        <i data-objective="2" />
                        <i data-objective="3" />
                    </span>
                    <span className={styles.brandTitle}>
                        {i18n.t('Holistic Assessment')}
                    </span>
                    <span className={styles.brandSubtitle}>
                        {i18n.t('Ghana Health Service')}
                    </span>
                </div>
                <ul className={styles.navList}>
                    {NAV.filter((item) =>
                        blocked
                            ? item.alwaysOpen
                            : (!item.adminOnly || canAdmin) &&
                              scope <= (item.upTo ?? Infinity)
                    ).map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.navLink} ${styles.navLinkActive}`
                                        : styles.navLink
                                }
                            >
                                {item.label()}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <UserOrgUnits user={user} />
            </div>
        </nav>
    )
}

/*
 * Both values are substituted at build time: the version from package.json by
 * the app platform, the build stamp by the `define` in d2.config.js. Neither is
 * set when a test imports this module, so both fall back rather than printing
 * "undefined" next to a figure somebody may be about to quote.
 */
const VERSION = process.env.DHIS2_APP_VERSION || '0.0.0'
const BUILD = process.env.DHIS2_APP_BUILD || 'dev'

const Footer = () => (
    <footer className={styles.footer}>
        <span>
            {i18n.t('© {{year}} Bigvalues IT Systems', {
                year: new Date().getFullYear(),
            })}
        </span>
        <span className={styles.footerBuild}>
            {i18n.t('Version {{version}} (Build {{build}})', {
                version: VERSION,
                build: BUILD,
            })}
        </span>
    </footer>
)

/*
 * A role in the app is inherited from the user's DHIS2 org unit, and only
 * levels 1 to 3 — national, regional, district — confer one. Someone assigned
 * only below district gets this notice in place of every page but Help.
 */
const NoRole = ({ unassigned }) =>
    unassigned ? (
        <NoticeBox warning title={i18n.t('No organisation unit assigned')}>
            {i18n.t(
                'No organisation unit assigned to your account. Please contact your administrator.'
            )}
        </NoticeBox>
    ) : (
        <NoticeBox
            warning
            title={i18n.t('No access at your organisation unit level')}
        >
            {i18n.t(
                'The Holistic Assessment is available to users assigned at national, regional or district level. Ask your DHIS2 administrator to assign you to one of these levels.'
            )}
        </NoticeBox>
    )

NoRole.propTypes = {
    unassigned: PropTypes.bool,
}

/*
 * A page with an `upTo` level is out of reach below it: a district user has no
 * region to assess or review, so the regional pages send them to the district
 * ones instead.
 */
const RoleGate = ({ children, upTo, fallback }) => {
    const user = useCurrentUser()
    const { hasRole, loading, error } = user
    if (loading || error) {
        return children
    }
    if (!hasRole) {
        // Nothing assigned at all, as against assigned only below district.
        return <NoRole unassigned={!user.user?.organisationUnits?.length} />
    }
    if (upTo && scopeOf(user) > upTo) {
        return <Navigate to={fallback} replace />
    }
    return children
}

RoleGate.propTypes = {
    children: PropTypes.node,
    fallback: PropTypes.string,
    upTo: PropTypes.number,
}

/*
 * Where the app opens: the dashboard for national and regional users, and the
 * district assessment for a district user, who has no dashboard.
 */
const Home = () => {
    const user = useCurrentUser()
    if (user.loading) {
        return null
    }
    const to = scopeOf(user) > ORG_LEVEL.REGIONAL ? '/district' : '/dashboard'
    return <Navigate to={to} replace />
}

const gated = (element, upTo, fallback) => (
    <RoleGate upTo={upTo} fallback={fallback}>
        {element}
    </RoleGate>
)

const MyApp = () => (
    <HashRouter>
        <CssVariables colors spacers theme />
        <AppStateProvider>
            <div className={styles.shell}>
                <div className={styles.layout}>
                    <Sidebar />
                    <main className={styles.main}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/dashboard"
                                element={gated(
                                    <DashboardPage />,
                                    ORG_LEVEL.REGIONAL,
                                    '/district'
                                )}
                            />
                            <Route
                                path="/regional"
                                element={gated(
                                    <AssessmentPage level={LEVEL.REGION} />,
                                    ORG_LEVEL.REGIONAL,
                                    '/district'
                                )}
                            />
                            <Route
                                path="/district"
                                element={gated(
                                    <AssessmentPage level={LEVEL.DISTRICT} />
                                )}
                            />
                            <Route
                                path="/peer-review"
                                element={gated(
                                    <PeerReviewPage />,
                                    ORG_LEVEL.REGIONAL,
                                    '/peer-review/district'
                                )}
                            />
                            <Route
                                path="/peer-review/regional"
                                element={gated(
                                    <PeerReviewPage level={LEVEL.REGION} />,
                                    ORG_LEVEL.REGIONAL,
                                    '/peer-review/district'
                                )}
                            />
                            <Route
                                path="/peer-review/district"
                                element={gated(
                                    <PeerReviewPage level={LEVEL.DISTRICT} />
                                )}
                            />
                            <Route
                                path="/reports"
                                element={gated(<ReportsPage />)}
                            />
                            <Route
                                path="/admin"
                                element={gated(<AdminPage />)}
                            />
                            <Route path="/help" element={<HelpPage />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </main>
                </div>
                <Footer />
            </div>
        </AppStateProvider>
    </HashRouter>
)

export default MyApp

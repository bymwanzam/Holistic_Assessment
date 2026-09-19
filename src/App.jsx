import i18n from '@dhis2/d2-i18n'
import { CssVariables } from '@dhis2/ui'
import React from 'react'
import { HashRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom'
import './theme.css'
import styles from './App.module.css'
import { AppStateProvider } from './lib/AppState.jsx'
import { LEVEL } from './lib/constants.js'
import { useCurrentUser } from './lib/useCurrentUser.js'
import AdminPage from './pages/AdminPage.jsx'
import AssessmentPage from './pages/AssessmentPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import HelpPage from './pages/HelpPage.jsx'
import PeerReviewPage from './pages/PeerReviewPage.jsx'
import ReportsPage from './pages/ReportsPage.jsx'

const NAV = [
    { to: '/dashboard', label: () => i18n.t('Dashboard') },
    { to: '/regional', label: () => i18n.t('Regional Assessment') },
    { to: '/district', label: () => i18n.t('District Assessment') },
    {
        to: '/peer-review/regional',
        label: () => i18n.t('Regional Peer Review'),
    },
    {
        to: '/peer-review/district',
        label: () => i18n.t('District Peer Review'),
    },
    { to: '/reports', label: () => i18n.t('Reports') },
    { to: '/admin', label: () => i18n.t('Administration'), adminOnly: true },
    { to: '/help', label: () => i18n.t('Help') },
]

const Sidebar = () => {
    const { canAdmin } = useCurrentUser()

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
                    {NAV.filter((item) => !item.adminOnly || canAdmin).map(
                        (item) => (
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
                        )
                    )}
                </ul>
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

const MyApp = () => (
    <HashRouter>
        <CssVariables colors spacers theme />
        <AppStateProvider>
            <div className={styles.shell}>
                <div className={styles.layout}>
                    <Sidebar />
                    <main className={styles.main}>
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="/dashboard" replace />}
                            />
                            <Route
                                path="/dashboard"
                                element={<DashboardPage />}
                            />
                            <Route
                                path="/regional"
                                element={
                                    <AssessmentPage level={LEVEL.REGION} />
                                }
                            />
                            <Route
                                path="/district"
                                element={
                                    <AssessmentPage level={LEVEL.DISTRICT} />
                                }
                            />
                            <Route
                                path="/peer-review"
                                element={<PeerReviewPage />}
                            />
                            <Route
                                path="/peer-review/regional"
                                element={
                                    <PeerReviewPage level={LEVEL.REGION} />
                                }
                            />
                            <Route
                                path="/peer-review/district"
                                element={
                                    <PeerReviewPage level={LEVEL.DISTRICT} />
                                }
                            />
                            <Route path="/reports" element={<ReportsPage />} />
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="/help" element={<HelpPage />} />
                            <Route
                                path="*"
                                element={<Navigate to="/dashboard" replace />}
                            />
                        </Routes>
                    </main>
                </div>
                <Footer />
            </div>
        </AppStateProvider>
    </HashRouter>
)

export default MyApp

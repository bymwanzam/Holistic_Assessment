import { useDataEngine } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { Button, InputField, NoticeBox } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import {
    DEFAULT_SOURCE_URL,
    ROUTE_CODE,
    isRemote,
    normaliseBaseUrl,
    routeDefinition,
} from '../../lib/dataSource.js'
import styles from '../AdminPage.module.css'

const ROUTE_QUERY = {
    routes: {
        resource: 'routes',
        params: {
            filter: `code:eq:${ROUTE_CODE}`,
            fields: 'id',
            paging: false,
        },
    },
}

const whoAmI = (routeId) => ({
    me: {
        resource: `routes/${routeId}/run/me`,
        params: { fields: 'username' },
    },
})

/** Turn a failed relay into something an administrator can act on. */
const explain = (e) => {
    const status = e?.details?.httpStatusCode
    if (status === 401 || status === 302) {
        return i18n.t(
            'The data source did not accept the token. Check that it is a valid, unexpired personal access token.'
        )
    }
    if (status === 404) {
        return i18n.t(
            'This DHIS2 instance does not support routes. The Route API needs DHIS2 2.41 or later.'
        )
    }
    return e?.message || String(e)
}

/**
 * Connects the app to the instance its indicator values are read from, by
 * creating a DHIS2 route on this instance (see `lib/dataSource.js`). The token
 * goes to the route and is never stored in the app's datastore.
 *
 * i18next HTML-escapes interpolated values by default, turning a URL's slashes
 * into `&#x2F;`. React escapes text itself, so the strings here pass them raw.
 */
export const DataSourceSection = ({ settings, save, notify }) => {
    const engine = useDataEngine()
    const dataSource = settings?.dataSource || null
    const connected = isRemote(dataSource)

    const [editing, setEditing] = useState(false)
    const [url, setUrl] = useState(dataSource?.url || DEFAULT_SOURCE_URL)
    const [token, setToken] = useState('')
    const [busy, setBusy] = useState(false)

    const findRouteId = async () => {
        const res = await engine.query(ROUTE_QUERY)
        return res.routes?.routes?.[0]?.id || null
    }

    const handleConnect = async () => {
        setBusy(true)
        try {
            const definition = routeDefinition(url, token)
            let routeId = await findRouteId()
            if (routeId) {
                await engine.mutate({
                    resource: 'routes',
                    id: routeId,
                    type: 'replace',
                    data: definition,
                })
            } else {
                const res = await engine.mutate({
                    resource: 'routes',
                    type: 'create',
                    data: definition,
                })
                routeId =
                    res?.response?.uid || res?.uid || (await findRouteId())
            }
            if (!routeId) {
                throw new Error(i18n.t('The route was not created.'))
            }

            const { me } = await engine.query(whoAmI(routeId))
            await save({
                ...settings,
                dataSource: {
                    routeId,
                    url: normaliseBaseUrl(url),
                    username: me?.username || null,
                    connectedAt: new Date().toISOString(),
                },
            })
            setToken('')
            setEditing(false)
            notify(
                i18n.t('Connected to {{url}} as {{username}}', {
                    url: normaliseBaseUrl(url),
                    username: me?.username || '?',
                    interpolation: { escapeValue: false },
                })
            )
        } catch (e) {
            notify(
                i18n.t('Could not connect — {{msg}}', {
                    msg: explain(e),
                    interpolation: { escapeValue: false },
                }),
                'critical'
            )
        } finally {
            setBusy(false)
        }
    }

    const handleTest = async () => {
        setBusy(true)
        try {
            const { me } = await engine.query(whoAmI(dataSource.routeId))
            notify(
                i18n.t('The data source answered as {{username}}', {
                    username: me?.username || '?',
                })
            )
        } catch (e) {
            notify(explain(e), 'critical')
        } finally {
            setBusy(false)
        }
    }

    const handleDisconnect = async () => {
        setBusy(true)
        try {
            // Removing the route takes the token off the server with it.
            try {
                await engine.mutate({
                    resource: 'routes',
                    id: dataSource.routeId,
                    type: 'delete',
                })
            } catch {
                // Already gone; the setting is what matters.
            }
            await save({ ...settings, dataSource: null })
            notify(i18n.t('Indicator values are read from this instance again'))
        } catch (e) {
            notify(e.message, 'critical')
        } finally {
            setBusy(false)
        }
    }

    return (
        <section className={styles.dataSource}>
            <h3 className={styles.sectionTitle}>{i18n.t('Data source')}</h3>

            {connected ? (
                <NoticeBox title={i18n.t('Reading from another instance')}>
                    {i18n.t(
                        'Fetch DHIS2 data and the mapping search read from {{url}} (as {{username}}). Org units are linked by UID where the two instances share one, otherwise by name.',
                        {
                            url: dataSource.url,
                            username: dataSource.username || '?',
                            interpolation: { escapeValue: false },
                        }
                    )}
                </NoticeBox>
            ) : (
                <NoticeBox>
                    {i18n.t(
                        'Indicator values are read from this instance. To read them from another DHIS2 instance, such as DHIMS, connect it below.'
                    )}
                </NoticeBox>
            )}

            {(!connected || editing) && (
                <>
                    <div className={styles.formRow}>
                        <div className={styles.grow}>
                            <InputField
                                dense
                                label={i18n.t('Source instance URL')}
                                value={url}
                                onChange={({ value }) => setUrl(value)}
                            />
                        </div>
                    </div>
                    <div className={styles.formRow}>
                        <div className={styles.grow}>
                            <InputField
                                dense
                                type="password"
                                label={i18n.t('Personal access token')}
                                value={token}
                                onChange={({ value }) => setToken(value)}
                                helpText={i18n.t(
                                    'Create it on the source under Edit profile → Personal access tokens, and allow only GET requests. It is stored in a DHIS2 route on this server, never in the app, and anyone who can fill in assessments reads through it.'
                                )}
                            />
                        </div>
                    </div>
                </>
            )}

            <div className={styles.tabHeader}>
                {(!connected || editing) && (
                    <Button
                        small
                        primary
                        loading={busy}
                        disabled={busy || !normaliseBaseUrl(url) || !token}
                        onClick={handleConnect}
                    >
                        {connected ? i18n.t('Reconnect') : i18n.t('Connect')}
                    </Button>
                )}
                {connected && !editing && (
                    <>
                        <Button
                            small
                            secondary
                            disabled={busy}
                            onClick={handleTest}
                        >
                            {i18n.t('Test connection')}
                        </Button>
                        <Button
                            small
                            secondary
                            disabled={busy}
                            onClick={() => setEditing(true)}
                        >
                            {i18n.t('Replace token')}
                        </Button>
                        <Button
                            small
                            destructive
                            disabled={busy}
                            onClick={handleDisconnect}
                        >
                            {i18n.t('Disconnect')}
                        </Button>
                    </>
                )}
                {connected && editing && (
                    <Button small secondary onClick={() => setEditing(false)}>
                        {i18n.t('Cancel')}
                    </Button>
                )}
            </div>
        </section>
    )
}

DataSourceSection.propTypes = {
    notify: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    settings: PropTypes.object,
}

export default DataSourceSection

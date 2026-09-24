/**
 * Helpers for reading analytics without tripping the gateway timeout.
 *
 * One analytics request for every mapped indicator is slow on a national
 * instance, and relayed through a route it regularly outlives the proxy in
 * front of it, which answers 504 while the source is still working. Smaller
 * requests finish in time, and a 5xx or dropped connection is usually gone on
 * the next attempt, so requests go out in batches and are retried; a 4xx is
 * the server's considered answer and is not. The same approach as
 * `scripts/prefill-assessments.mjs`.
 */
import i18n from '@dhis2/d2-i18n'

/** Indicators per analytics request. */
export const BATCH_SIZE = 12

/** Batches in flight at once - enough to be quick, few enough to be polite. */
export const CONCURRENCY = 3

/** Attempts per request, including the first. */
export const ATTEMPTS = 3

export const chunk = (items, size) =>
    Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
        items.slice(i * size, i * size + size)
    )

/**
 * The HTTP status behind a data-engine error, or null for none. DHIS2's own
 * errors carry it in `details`, but for anything else - a gateway's 504 page,
 * say - the engine only writes it into the message, as `... (504)`.
 */
export const httpStatusOf = (error) => {
    const known = error?.details?.httpStatusCode ?? error?.status
    if (known) {
        return known
    }
    const match = /\((\d{3})\)\s*$/.exec(error?.message || '')
    return match ? Number(match[1]) : null
}

/** Whether asking again could plausibly give a different answer. */
export const isRetryable = (error) => {
    const status = httpStatusOf(error)
    if (status) {
        return status >= 500 || status === 429
    }
    // No status: the request never got an answer (dropped socket, offline).
    return error?.type === 'network' || error?.type === 'unknown'
}

const defaultSleep = (ms) => new Promise((r) => setTimeout(r, ms))

/** Run `fn`, retrying transient failures with a widening pause. */
export const withRetry = async (
    fn,
    { attempts = ATTEMPTS, delay = 2000, sleep = defaultSleep } = {}
) => {
    for (let attempt = 1; ; attempt += 1) {
        try {
            return await fn()
        } catch (e) {
            if (attempt >= attempts || !isRetryable(e)) {
                throw e
            }
            await sleep(delay * attempt)
        }
    }
}

/**
 * Map `fn` over `items`, at most `limit` at a time. Settles like
 * `Promise.allSettled`, in the order of `items`.
 */
export const mapSettled = async (items, limit, fn) => {
    const results = new Array(items.length)
    let next = 0
    const worker = async () => {
        while (next < items.length) {
            const i = next++
            try {
                results[i] = { status: 'fulfilled', value: await fn(items[i]) }
            } catch (reason) {
                results[i] = { status: 'rejected', reason }
            }
        }
    }
    await Promise.all(
        Array.from({ length: Math.min(limit, items.length) }, worker)
    )
    return results
}

/** A readable message for a failed analytics read. */
export const describeFetchError = (error) => {
    const status = httpStatusOf(error)
    if (status === 504 || status === 502 || status === 503) {
        return i18n.t(
            'the data source did not respond in time ({{status}}). It may be busy; try again in a few minutes.',
            { status }
        )
    }
    if (status === 401 || status === 403) {
        return i18n.t(
            'access was refused ({{status}}). Check the data source connection on the Admin page.',
            { status }
        )
    }
    if (!status && error?.type === 'network') {
        return i18n.t('the data source could not be reached.')
    }
    return error?.message || i18n.t('an unknown error occurred.')
}

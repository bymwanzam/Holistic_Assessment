import {
    chunk,
    describeFetchError,
    httpStatusOf,
    isRetryable,
    mapSettled,
    withRetry,
} from './analyticsFetch.js'

const engineError = (httpStatusCode, type = 'unknown') => {
    const e = new Error(`An unknown error occurred - (${httpStatusCode})`)
    e.type = type
    e.details = { httpStatusCode }
    return e
}

// What the data engine actually throws for a gateway's 504: the status is
// only in the message, and `details` is the (empty) parsed body.
const gatewayError = (status = 504) => {
    const e = new Error(`An unknown error occurred - (${status})`)
    e.type = 'unknown'
    e.details = {}
    return e
}

const noSleep = () => Promise.resolve()

describe('chunk', () => {
    it('splits into batches of at most the given size', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
        expect(chunk([], 3)).toEqual([])
    })
})

describe('isRetryable', () => {
    it('retries gateway timeouts and other 5xx', () => {
        expect(isRetryable(engineError(504))).toBe(true)
        expect(isRetryable(engineError(502))).toBe(true)
        expect(isRetryable(engineError(500))).toBe(true)
    })

    it('does not retry a 4xx', () => {
        expect(isRetryable(engineError(400))).toBe(false)
        expect(isRetryable(engineError(403, 'access'))).toBe(false)
    })

    it('retries a network failure but not a plain error', () => {
        expect(isRetryable({ type: 'network' })).toBe(true)
        expect(isRetryable(new Error('no counterpart'))).toBe(false)
    })
})

describe('withRetry', () => {
    it('succeeds after a transient 504', async () => {
        let calls = 0
        const result = await withRetry(
            async () => {
                calls += 1
                if (calls < 2) {
                    throw engineError(504)
                }
                return 'ok'
            },
            { sleep: noSleep }
        )
        expect(result).toBe('ok')
        expect(calls).toBe(2)
    })

    it('gives up after the last attempt', async () => {
        let calls = 0
        await expect(
            withRetry(
                async () => {
                    calls += 1
                    throw engineError(504)
                },
                { attempts: 3, sleep: noSleep }
            )
        ).rejects.toThrow('504')
        expect(calls).toBe(3)
    })

    it('does not retry a 4xx', async () => {
        let calls = 0
        await expect(
            withRetry(
                async () => {
                    calls += 1
                    throw engineError(409)
                },
                { sleep: noSleep }
            )
        ).rejects.toThrow()
        expect(calls).toBe(1)
    })
})

describe('mapSettled', () => {
    it('keeps order, settles every item and respects the limit', async () => {
        let inFlight = 0
        let peak = 0
        const results = await mapSettled([1, 2, 3, 4, 5], 2, async (n) => {
            inFlight += 1
            peak = Math.max(peak, inFlight)
            await Promise.resolve()
            inFlight -= 1
            if (n === 3) {
                throw new Error('three')
            }
            return n * 10
        })
        expect(peak).toBeLessThanOrEqual(2)
        expect(results.map((r) => r.status)).toEqual([
            'fulfilled',
            'fulfilled',
            'rejected',
            'fulfilled',
            'fulfilled',
        ])
        expect(results[4].value).toBe(50)
    })
})

describe('httpStatusOf', () => {
    it('reads the status from the message when details lack it', () => {
        expect(httpStatusOf(gatewayError(504))).toBe(504)
        expect(isRetryable(gatewayError(504))).toBe(true)
    })
})

describe('describeFetchError', () => {
    it('explains a gateway 504 whose status is only in the message', () => {
        expect(describeFetchError(gatewayError(504))).toContain(
            'did not respond in time'
        )
    })

    it('explains a gateway timeout instead of "unknown error"', () => {
        const msg = describeFetchError(engineError(504))
        expect(msg).toContain('did not respond in time')
        expect(msg).toContain('504')
    })

    it('falls back to the error message', () => {
        expect(describeFetchError(new Error('no counterpart'))).toBe(
            'no counterpart'
        )
    })
})

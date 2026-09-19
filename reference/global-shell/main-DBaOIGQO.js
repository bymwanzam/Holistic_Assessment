const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["./App-Xt96OVoe.js", "./App-CvDwn6cr.css"]))) => i.map(i => d[i]);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const l of s.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && r(l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity),
        o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
}
)();
var Gr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jo(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var s_ = {
    exports: {}
}
  , Rf = {}
  , a_ = {
    exports: {}
}
  , je = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yl = Symbol.for("react.element")
  , f3 = Symbol.for("react.portal")
  , d3 = Symbol.for("react.fragment")
  , h3 = Symbol.for("react.strict_mode")
  , p3 = Symbol.for("react.profiler")
  , g3 = Symbol.for("react.provider")
  , m3 = Symbol.for("react.context")
  , v3 = Symbol.for("react.forward_ref")
  , y3 = Symbol.for("react.suspense")
  , w3 = Symbol.for("react.memo")
  , _3 = Symbol.for("react.lazy")
  , zy = Symbol.iterator;
function x3(e) {
    return e === null || typeof e != "object" ? null : (e = zy && e[zy] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var l_ = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , u_ = Object.assign
  , c_ = {};
function da(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = c_,
    this.updater = n || l_
}
da.prototype.isReactComponent = {};
da.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
da.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function f_() {}
f_.prototype = da.prototype;
function Vg(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = c_,
    this.updater = n || l_
}
var Gg = Vg.prototype = new f_;
Gg.constructor = Vg;
u_(Gg, da.prototype);
Gg.isPureReactComponent = !0;
var Uy = Array.isArray
  , d_ = Object.prototype.hasOwnProperty
  , qg = {
    current: null
}
  , h_ = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function p_(e, t, n) {
    var r, o = {}, s = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            d_.call(t, r) && !h_.hasOwnProperty(r) && (o[r] = t[r]);
    var c = arguments.length - 2;
    if (c === 1)
        o.children = n;
    else if (1 < c) {
        for (var f = Array(c), h = 0; h < c; h++)
            f[h] = arguments[h + 2];
        o.children = f
    }
    if (e && e.defaultProps)
        for (r in c = e.defaultProps,
        c)
            o[r] === void 0 && (o[r] = c[r]);
    return {
        $$typeof: Yl,
        type: e,
        key: s,
        ref: l,
        props: o,
        _owner: qg.current
    }
}
function S3(e, t) {
    return {
        $$typeof: Yl,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Qg(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Yl
}
function b3(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Yy = /\/+/g;
function Dh(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? b3("" + e.key) : t.toString(36)
}
function kc(e, t, n, r, o) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (s) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Yl:
            case f3:
                l = !0
            }
        }
    if (l)
        return l = e,
        o = o(l),
        e = r === "" ? "." + Dh(l, 0) : r,
        Uy(o) ? (n = "",
        e != null && (n = e.replace(Yy, "$&/") + "/"),
        kc(o, t, n, "", function(h) {
            return h
        })) : o != null && (Qg(o) && (o = S3(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Yy, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    Uy(e))
        for (var c = 0; c < e.length; c++) {
            s = e[c];
            var f = r + Dh(s, c);
            l += kc(s, t, n, f, o)
        }
    else if (f = x3(e),
    typeof f == "function")
        for (e = f.call(e),
        c = 0; !(s = e.next()).done; )
            s = s.value,
            f = r + Dh(s, c++),
            l += kc(s, t, n, f, o);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function rc(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return kc(e, r, "", "", function(s) {
        return t.call(n, s, o++)
    }),
    r
}
function E3(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var bn = {
    current: null
}
  , Cc = {
    transition: null
}
  , k3 = {
    ReactCurrentDispatcher: bn,
    ReactCurrentBatchConfig: Cc,
    ReactCurrentOwner: qg
};
function g_() {
    throw Error("act(...) is not supported in production builds of React.")
}
je.Children = {
    map: rc,
    forEach: function(e, t, n) {
        rc(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return rc(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return rc(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Qg(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
je.Component = da;
je.Fragment = d3;
je.Profiler = p3;
je.PureComponent = Vg;
je.StrictMode = h3;
je.Suspense = y3;
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = k3;
je.act = g_;
je.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = u_({}, e.props)
      , o = e.key
      , s = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        l = qg.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var c = e.type.defaultProps;
        for (f in t)
            d_.call(t, f) && !h_.hasOwnProperty(f) && (r[f] = t[f] === void 0 && c !== void 0 ? c[f] : t[f])
    }
    var f = arguments.length - 2;
    if (f === 1)
        r.children = n;
    else if (1 < f) {
        c = Array(f);
        for (var h = 0; h < f; h++)
            c[h] = arguments[h + 2];
        r.children = c
    }
    return {
        $$typeof: Yl,
        type: e.type,
        key: o,
        ref: s,
        props: r,
        _owner: l
    }
}
;
je.createContext = function(e) {
    return e = {
        $$typeof: m3,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: g3,
        _context: e
    },
    e.Consumer = e
}
;
je.createElement = p_;
je.createFactory = function(e) {
    var t = p_.bind(null, e);
    return t.type = e,
    t
}
;
je.createRef = function() {
    return {
        current: null
    }
}
;
je.forwardRef = function(e) {
    return {
        $$typeof: v3,
        render: e
    }
}
;
je.isValidElement = Qg;
je.lazy = function(e) {
    return {
        $$typeof: _3,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: E3
    }
}
;
je.memo = function(e, t) {
    return {
        $$typeof: w3,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
je.startTransition = function(e) {
    var t = Cc.transition;
    Cc.transition = {};
    try {
        e()
    } finally {
        Cc.transition = t
    }
}
;
je.unstable_act = g_;
je.useCallback = function(e, t) {
    return bn.current.useCallback(e, t)
}
;
je.useContext = function(e) {
    return bn.current.useContext(e)
}
;
je.useDebugValue = function() {}
;
je.useDeferredValue = function(e) {
    return bn.current.useDeferredValue(e)
}
;
je.useEffect = function(e, t) {
    return bn.current.useEffect(e, t)
}
;
je.useId = function() {
    return bn.current.useId()
}
;
je.useImperativeHandle = function(e, t, n) {
    return bn.current.useImperativeHandle(e, t, n)
}
;
je.useInsertionEffect = function(e, t) {
    return bn.current.useInsertionEffect(e, t)
}
;
je.useLayoutEffect = function(e, t) {
    return bn.current.useLayoutEffect(e, t)
}
;
je.useMemo = function(e, t) {
    return bn.current.useMemo(e, t)
}
;
je.useReducer = function(e, t, n) {
    return bn.current.useReducer(e, t, n)
}
;
je.useRef = function(e) {
    return bn.current.useRef(e)
}
;
je.useState = function(e) {
    return bn.current.useState(e)
}
;
je.useSyncExternalStore = function(e, t, n) {
    return bn.current.useSyncExternalStore(e, t, n)
}
;
je.useTransition = function() {
    return bn.current.useTransition()
}
;
je.version = "18.3.1";
a_.exports = je;
var ee = a_.exports;
const I = Jo(ee);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C3 = ee
  , O3 = Symbol.for("react.element")
  , T3 = Symbol.for("react.fragment")
  , P3 = Object.prototype.hasOwnProperty
  , R3 = C3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , D3 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function m_(e, t, n) {
    var r, o = {}, s = null, l = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        P3.call(t, r) && !D3.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: O3,
        type: e,
        key: s,
        ref: l,
        props: o,
        _owner: R3.current
    }
}
Rf.Fragment = T3;
Rf.jsx = m_;
Rf.jsxs = m_;
s_.exports = Rf;
var Bt = s_.exports;
const $ = {
    blue900: "#093371",
    blue800: "#0d47a1",
    blue700: "#1565c0",
    blue600: "#147cd7",
    blue500: "#2196f3",
    blue400: "#42a5f5",
    blue300: "#90caf9",
    blue200: "#c5e3fc",
    blue100: "#e3f2fd",
    blue050: "#f5fbff",
    teal900: "#00332b",
    teal800: "#004d40",
    teal700: "#00695c",
    teal600: "#00796b",
    teal500: "#00897b",
    teal400: "#009688",
    teal300: "#4db6ac",
    teal200: "#b2dfdb",
    teal100: "#e0f2f1",
    teal050: "#f1f9f9",
    red900: "#330202",
    red800: "#891515",
    red700: "#b71c1c",
    red600: "#c62828",
    red500: "#d32f2f",
    red400: "#f44336",
    red300: "#e57373",
    red200: "#ffcdd2",
    red100: "#ffe5e8",
    red050: "#fff5f6",
    yellow900: "#6f3205",
    yellow800: "#bb460d",
    yellow700: "#e56408",
    yellow600: "#ff8302",
    yellow500: "#ff9302",
    yellow400: "#ffa902",
    yellow300: "#ffc324",
    yellow200: "#ffe082",
    yellow100: "#ffecb3",
    yellow050: "#fff8e1",
    green900: "#103713",
    green800: "#1b5e20",
    green700: "#2e7d32",
    green600: "#388e3c",
    green500: "#43a047",
    green400: "#4caf50",
    green300: "#a5d6a7",
    green200: "#c8e6c9",
    green100: "#e8f5e9",
    green050: "#f4fbf4",
    grey900: "#212934",
    grey800: "#404b5a",
    grey700: "#4a5768",
    grey600: "#6C7787",
    grey500: "#a0adba",
    grey400: "#d5dde5",
    grey300: "#e8edf2",
    grey200: "#f3f5f7",
    grey100: "#f8f9fa",
    grey050: "#fbfcfd",
    white: "#ffffff"
}
  , nt = {
    fonts: "Roboto, sans-serif",
    primary900: $.blue900,
    primary800: $.blue800,
    primary700: $.blue700,
    primary600: $.blue600,
    primary500: $.blue500,
    primary400: $.blue400,
    primary300: $.blue300,
    primary200: $.blue200,
    primary100: $.blue100,
    primary050: $.blue050,
    secondary900: $.teal900,
    secondary800: $.teal800,
    secondary700: $.teal700,
    secondary600: $.teal600,
    secondary500: $.teal500,
    secondary400: $.teal400,
    secondary300: $.teal300,
    secondary200: $.teal200,
    secondary100: $.teal100,
    secondary050: $.teal050,
    default: $.grey700,
    error: $.red500,
    valid: $.blue600,
    warning: $.yellow500,
    disabled: $.grey600,
    focus: $.blue600
}
  , ul = {
    applicationTop: 2e3,
    blocking: 3e3,
    alert: 9999
}
  , qe = {
    dp4: 4,
    dp8: 8,
    dp12: 12,
    dp16: 16,
    dp24: 24,
    dp32: 32,
    dp48: 48,
    dp64: 64,
    dp96: 96,
    dp128: 128,
    dp192: 192,
    dp256: 256,
    dp384: 384,
    dp512: 512,
    dp640: 640
}
  , _e = {
    dp4: `${qe.dp4}px`,
    dp8: `${qe.dp8}px`,
    dp12: `${qe.dp12}px`,
    dp16: `${qe.dp16}px`,
    dp24: `${qe.dp24}px`,
    dp32: `${qe.dp32}px`,
    dp48: `${qe.dp48}px`,
    dp64: `${qe.dp64}px`,
    dp96: `${qe.dp96}px`,
    dp128: `${qe.dp128}px`,
    dp192: `${qe.dp192}px`,
    dp256: `${qe.dp256}px`,
    dp384: `${qe.dp384}px`,
    dp512: `${qe.dp512}px`,
    dp640: `${qe.dp640}px`
}
  , Oc = {
    e100: "0px 1px 2px rgba(33,41,52,0.06), 0px 1px 3px rgba(33,41,52,0.1)",
    e200: "0px 0px 1px rgba(33,41,52,0.1), 0px 4px 6px -1px rgba(33,41,52,0.1), 0px 2px 4px -1px rgba(33,41,52,0.06)",
    e300: "0px 10px 15px -3px rgba(33,41,52,0.1), 0px 4px 6px -2px rgba(33,41,52,0.05)",
    e400: "0px 25px 50px -12px rgba(33, 41, 52, 0.25)"
};
var v_ = {
    exports: {}
}
  , I3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , M3 = I3
  , A3 = M3;
function y_() {}
function w_() {}
w_.resetWarningCache = y_;
var N3 = function() {
    function e(r, o, s, l, c, f) {
        if (f !== A3) {
            var h = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw h.name = "Invariant Violation",
            h
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: w_,
        resetWarningCache: y_
    };
    return n.PropTypes = n,
    n
};
v_.exports = N3();
var L3 = v_.exports;
const b = Jo(L3)
  , By = ({min: e=0, max: t=1 / 0, propType: n, isRequired: r}) => (o, s, l, c, f) => {
    const h = o[s]
      , v = f || s
      , m = `Invalid prop \`${v}\` supplied to \`${l}\`,`
      , x = !!f;
    if (r && typeof h > "u")
        return new Error(`${m} this prop is required but no value was found.`);
    if (h && !Array.isArray(h))
        return new Error(`${m} prop value is not an array.`);
    if (h && h.length > t)
        return new Error(`${m} array has a length of ${h.length}, but the maximum is ${t}`);
    if (h && h.length < e)
        return new Error(`${m} array has a length of ${h.length}, but the minimum is ${e}`);
    if (h && n) {
        const E = x ? c : v
          , T = x ? b.arrayOf(b.arrayOf(n)) : b.arrayOf(n)
          , N = {
            [E]: T
        }
          , B = x ? {
            [c]: o
        } : o
          , P = x ? v : "prop";
        b.checkPropTypes(N, B, P, l)
    }
    return null
}
;
function j3(e, t, n) {
    const r = By({
        min: e,
        max: t,
        propType: n,
        isRequired: !1
    });
    return r.isRequired = By({
        min: e,
        max: t,
        propType: n,
        isRequired: !0
    }),
    r
}
const $3 = (e, t) => {
    const n = new Set;
    return (r, o, s) => {
        const l = `"${o}" property of "${s}" has been deprecated. ${t}`;
        return typeof r[o] < "u" && !n.has(l) && (console.warn(l),
        n.add(l)),
        b.checkPropTypes({
            [o]: e
        }, r, "prop", s),
        null
    }
}
  , Hy = (e, t, n) => (r, o, s) => {
    const l = `Invalid prop \`${o}\` supplied to \`${s}\`,`
      , c = typeof r[o] < "u";
    if (e.length === 0)
        return new Error(`mutuallyExclusive was called without any arguments for property \`${o}\` on component \`${s}\`. Please add the required arguments.`);
    if (n && !c)
        return new Error(`${l} this prop is required but no value was found.`);
    if (b.checkPropTypes({
        [o]: t
    }, r, "prop", s),
    r[o]) {
        const f = e.find(h => r[h] && h !== o);
        if (f)
            return new Error(`${l} Property '${o}' is mutually exclusive with '${f}', but both have a thruthy value.`)
    }
    return null
}
;
function Zr(e, t) {
    const n = Hy(e, t, !1);
    return n.isRequired = Hy(e, t, !0),
    n
}
const Vn = Zr(["valid", "warning", "error"], b.bool)
  , F3 = {
    table: {
        type: {
            summary: "bool",
            detail: "'valid', 'warning', and 'error' are mutually exclusive props"
        }
    },
    control: {
        type: "boolean"
    }
}
  , W3 = {
    table: {
        type: {
            summary: "bool"
        }
    },
    control: {
        type: "boolean"
    }
}
  , no = Zr(["small", "large", "extrasmall", "fluid"], b.bool)
  , z3 = {
    table: {
        type: {
            summary: "bool",
            detail: "size props are mutually exclusive"
        }
    },
    control: {
        type: "boolean"
    }
}
  , __ = b.oneOf(["top", "middle", "bottom"])
  , U3 = {
    description: "Inside alignment of the component",
    table: {
        type: {
            summary: "'top' | 'middle' | 'bottom'"
        }
    },
    control: {
        type: "select",
        options: ["top", "middle", "bottom"]
    }
}
  , Y3 = b.oneOf(["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"])
  , B3 = {
    description: "Placement properties relative to reference element",
    table: {
        type: {
            summary: "string (one of several)",
            detail: "see options in menu"
        }
    },
    control: {
        type: "select",
        options: ["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"]
    }
}
  , H3 = b.oneOfType([b.instanceOf(Element), b.shape({
    current: b.instanceOf(Element)
}), b.shape({
    getBoundingClientRect: b.func
})])
  , V3 = {
    description: "A reference to the element to position against: either a DOM node, React ref,         or an instance of an element",
    table: {
        type: {
            summary: "DOM node | React ref | Virtual element"
        }
    },
    control: {
        type: null
    }
}
  , sU = Object.freeze(Object.defineProperty({
    __proto__: null,
    buttonVariantArgType: W3,
    insideAlignmentArgType: U3,
    insideAlignmentPropType: __,
    popperPlacementArgType: B3,
    popperPlacementPropType: Y3,
    popperReferenceArgType: V3,
    popperReferencePropType: H3,
    sizeArgType: z3,
    sizePropType: no,
    statusArgType: F3,
    statusPropType: Vn
}, Symbol.toStringTag, {
    value: "Module"
}));
function Kg(e) {
    let {color: t, dataTest: n, ariaLabel: r} = e;
    return ee.createElement("svg", {
        height: 24,
        viewBox: "0 0 24 24",
        width: 24,
        xmlns: "http://www.w3.org/2000/svg",
        color: t,
        "data-test": n
    }, ee.createElement("path", {
        d: "M19.293 6.293a1 1 0 011.497 1.32l-.083.094-10 10a1 1 0 01-1.32.083l-.094-.083-5-5a1 1 0 011.32-1.497l.094.083L10 15.585z",
        fill: "currentColor"
    }))
}
Kg.propTypes = {
    color: b.string,
    dataTest: b.string,
    ariaLabel: b.string
};
function x_(e) {
    let {color: t, dataTest: n, ariaLabel: r} = e;
    return ee.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        color: t,
        "data-test": n
    }, ee.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20 12a8 8 0 11-16 0 8 8 0 0116 0zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-5.293-1.293a1 1 0 00-1.414-1.414L11 13.586l-1.793-1.793a1 1 0 00-1.414 1.414l2.5 2.5a1 1 0 001.414 0l5-5z",
        fill: "currentColor"
    }))
}
x_.propTypes = {
    color: b.string,
    dataTest: b.string,
    ariaLabel: b.string
};
function Zg(e) {
    let {color: t, dataTest: n, ariaLabel: r} = e;
    return ee.createElement("svg", {
        height: 16,
        viewBox: "0 0 16 16",
        width: 16,
        xmlns: "http://www.w3.org/2000/svg",
        color: t,
        "data-test": n
    }, ee.createElement("path", {
        d: "M4.284 3.589l.07.057L8 7.293l3.646-3.647a.5.5 0 01.765.638l-.057.07L8.707 8l3.647 3.646a.5.5 0 01-.638.765l-.07-.057L8 8.707l-3.646 3.647a.5.5 0 01-.765-.638l.057-.07L7.293 8 3.646 4.354a.5.5 0 01.638-.765z",
        fill: "currentColor"
    }))
}
Zg.propTypes = {
    color: b.string,
    dataTest: b.string,
    ariaLabel: b.string
};
function S_(e) {
    let {color: t, dataTest: n, ariaLabel: r} = e;
    return ee.createElement("svg", {
        height: 24,
        viewBox: "0 0 24 24",
        width: 24,
        xmlns: "http://www.w3.org/2000/svg",
        color: t,
        "data-test": n
    }, ee.createElement("path", {
        d: "M6.613 5.21l.094.083L12 10.585l5.293-5.292a1 1 0 011.497 1.32l-.083.094L13.415 12l5.292 5.293a1 1 0 01-1.32 1.497l-.094-.083L12 13.415l-5.293 5.292a1 1 0 01-1.497-1.32l.083-.094L10.585 12 5.293 6.707a1 1 0 011.32-1.497z",
        fill: "currentColor"
    }))
}
S_.propTypes = {
    color: b.string,
    dataTest: b.string,
    ariaLabel: b.string
};
function Df(e) {
    let {color: t, dataTest: n, ariaLabel: r} = e;
    return ee.createElement("svg", {
        height: 24,
        viewBox: "0 0 24 24",
        width: 24,
        xmlns: "http://www.w3.org/2000/svg",
        color: t,
        "data-test": n
    }, ee.createElement("path", {
        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 14a1 1 0 100 2 1 1 0 000-2zm1-10h-2v7h2z",
        fill: "currentColor",
        fillRule: "evenodd"
    }))
}
Df.propTypes = {
    color: b.string,
    dataTest: b.string,
    ariaLabel: b.string
};
function Jg(e) {
    let {color: t, dataTest: n, ariaLabel: r} = e;
    return ee.createElement("svg", {
        height: 24,
        viewBox: "0 0 24 24",
        width: 24,
        xmlns: "http://www.w3.org/2000/svg",
        color: t,
        "data-test": n
    }, ee.createElement("path", {
        d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 9h-2v6h2zm-1-4a1 1 0 100 2 1 1 0 000-2z",
        fill: "currentColor"
    }))
}
Jg.propTypes = {
    color: b.string,
    dataTest: b.string,
    ariaLabel: b.string
};
function If(e) {
    let {color: t, dataTest: n, ariaLabel: r} = e;
    return ee.createElement("svg", {
        height: 24,
        viewBox: "0 0 24 24",
        width: 24,
        xmlns: "http://www.w3.org/2000/svg",
        color: t,
        "data-test": n
    }, ee.createElement("path", {
        d: "M12.847 2.794l.056.102 8.416 17.674a1 1 0 01-.786 1.423l-.117.007H3.584a1 1 0 01-.947-1.322l.044-.108 8.416-17.674a1 1 0 011.75-.102zM12 18a1 1 0 100 2 1 1 0 000-2zm1-9h-2v7h2z",
        fill: "currentColor"
    }))
}
If.propTypes = {
    color: b.string,
    dataTest: b.string,
    ariaLabel: b.string
};
var b_ = {}
  , E_ = {};
function G3(e) {
    for (var t = 5381, n = e.length; n; )
        t = t * 33 ^ e.charCodeAt(--n);
    return t >>> 0
}
var q3 = G3
  , k_ = {};
(function(e) {
    var t = {};
    e.__esModule = !0,
    e.default = void 0;
    function n(f, h) {
        for (var v = 0; v < h.length; v++) {
            var m = h[v];
            m.enumerable = m.enumerable || !1,
            m.configurable = !0,
            "value" in m && (m.writable = !0),
            Object.defineProperty(f, m.key, m)
        }
    }
    function r(f, h, v) {
        return h && n(f.prototype, h),
        f
    }
    var o = typeof process < "u" && t && !0
      , s = function(h) {
        return Object.prototype.toString.call(h) === "[object String]"
    }
      , l = function() {
        function f(v) {
            var m = v === void 0 ? {} : v
              , x = m.name
              , E = x === void 0 ? "stylesheet" : x
              , T = m.optimizeForSpeed
              , N = T === void 0 ? o : T
              , B = m.isBrowser
              , P = B === void 0 ? typeof window < "u" : B;
            c(s(E), "`name` must be a string"),
            this._name = E,
            this._deletedRulePlaceholder = "#" + E + "-deleted-rule____{}",
            c(typeof N == "boolean", "`optimizeForSpeed` must be a boolean"),
            this._optimizeForSpeed = N,
            this._isBrowser = P,
            this._serverSheet = void 0,
            this._tags = [],
            this._injected = !1,
            this._rulesCount = 0;
            var O = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
            this._nonce = O ? O.getAttribute("content") : null
        }
        var h = f.prototype;
        return h.setOptimizeForSpeed = function(m) {
            c(typeof m == "boolean", "`setOptimizeForSpeed` accepts a boolean"),
            c(this._rulesCount === 0, "optimizeForSpeed cannot be when rules have already been inserted"),
            this.flush(),
            this._optimizeForSpeed = m,
            this.inject()
        }
        ,
        h.isOptimizeForSpeed = function() {
            return this._optimizeForSpeed
        }
        ,
        h.inject = function() {
            var m = this;
            if (c(!this._injected, "sheet already injected"),
            this._injected = !0,
            this._isBrowser && this._optimizeForSpeed) {
                this._tags[0] = this.makeStyleTag(this._name),
                this._optimizeForSpeed = "insertRule" in this.getSheet(),
                this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),
                this.flush(),
                this._injected = !0);
                return
            }
            this._serverSheet = {
                cssRules: [],
                insertRule: function(E, T) {
                    return typeof T == "number" ? m._serverSheet.cssRules[T] = {
                        cssText: E
                    } : m._serverSheet.cssRules.push({
                        cssText: E
                    }),
                    T
                },
                deleteRule: function(E) {
                    m._serverSheet.cssRules[E] = null
                }
            }
        }
        ,
        h.getSheetForTag = function(m) {
            if (m.sheet)
                return m.sheet;
            for (var x = 0; x < document.styleSheets.length; x++)
                if (document.styleSheets[x].ownerNode === m)
                    return document.styleSheets[x]
        }
        ,
        h.getSheet = function() {
            return this.getSheetForTag(this._tags[this._tags.length - 1])
        }
        ,
        h.insertRule = function(m, x) {
            if (c(s(m), "`insertRule` accepts only strings"),
            !this._isBrowser)
                return typeof x != "number" && (x = this._serverSheet.cssRules.length),
                this._serverSheet.insertRule(m, x),
                this._rulesCount++;
            if (this._optimizeForSpeed) {
                var E = this.getSheet();
                typeof x != "number" && (x = E.cssRules.length);
                try {
                    E.insertRule(m, x)
                } catch {
                    return o || console.warn(`StyleSheet: illegal rule: 

` + m + `

See https://stackoverflow.com/q/20007992 for more info`),
                    -1
                }
            } else {
                var T = this._tags[x];
                this._tags.push(this.makeStyleTag(this._name, m, T))
            }
            return this._rulesCount++
        }
        ,
        h.replaceRule = function(m, x) {
            if (this._optimizeForSpeed || !this._isBrowser) {
                var E = this._isBrowser ? this.getSheet() : this._serverSheet;
                if (x.trim() || (x = this._deletedRulePlaceholder),
                !E.cssRules[m])
                    return m;
                E.deleteRule(m);
                try {
                    E.insertRule(x, m)
                } catch {
                    o || console.warn(`StyleSheet: illegal rule: 

` + x + `

See https://stackoverflow.com/q/20007992 for more info`),
                    E.insertRule(this._deletedRulePlaceholder, m)
                }
            } else {
                var T = this._tags[m];
                c(T, "old rule at index `" + m + "` not found"),
                T.textContent = x
            }
            return m
        }
        ,
        h.deleteRule = function(m) {
            if (!this._isBrowser) {
                this._serverSheet.deleteRule(m);
                return
            }
            if (this._optimizeForSpeed)
                this.replaceRule(m, "");
            else {
                var x = this._tags[m];
                c(x, "rule at index `" + m + "` not found"),
                x.parentNode.removeChild(x),
                this._tags[m] = null
            }
        }
        ,
        h.flush = function() {
            this._injected = !1,
            this._rulesCount = 0,
            this._isBrowser ? (this._tags.forEach(function(m) {
                return m && m.parentNode.removeChild(m)
            }),
            this._tags = []) : this._serverSheet.cssRules = []
        }
        ,
        h.cssRules = function() {
            var m = this;
            return this._isBrowser ? this._tags.reduce(function(x, E) {
                return E ? x = x.concat(Array.prototype.map.call(m.getSheetForTag(E).cssRules, function(T) {
                    return T.cssText === m._deletedRulePlaceholder ? null : T
                })) : x.push(null),
                x
            }, []) : this._serverSheet.cssRules
        }
        ,
        h.makeStyleTag = function(m, x, E) {
            x && c(s(x), "makeStyleTag acceps only strings as second parameter");
            var T = document.createElement("style");
            this._nonce && T.setAttribute("nonce", this._nonce),
            T.type = "text/css",
            T.setAttribute("data-" + m, ""),
            x && T.appendChild(document.createTextNode(x));
            var N = document.head || document.getElementsByTagName("head")[0];
            return E ? N.insertBefore(T, E) : N.appendChild(T),
            T
        }
        ,
        r(f, [{
            key: "length",
            get: function() {
                return this._rulesCount
            }
        }]),
        f
    }();
    e.default = l;
    function c(f, h) {
        if (!f)
            throw new Error("StyleSheet: " + h + ".")
    }
}
)(k_);
(function(e) {
    e.__esModule = !0,
    e.default = void 0;
    var t = r(q3)
      , n = r(k_);
    function r(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }
    var o = function(f) {
        return f.replace(/\/style/gi, "\\/style")
    }
      , s = function() {
        function c(h) {
            var v = h === void 0 ? {} : h
              , m = v.styleSheet
              , x = m === void 0 ? null : m
              , E = v.optimizeForSpeed
              , T = E === void 0 ? !1 : E
              , N = v.isBrowser
              , B = N === void 0 ? typeof window < "u" : N;
            this._sheet = x || new n.default({
                name: "styled-jsx",
                optimizeForSpeed: T
            }),
            this._sheet.inject(),
            x && typeof T == "boolean" && (this._sheet.setOptimizeForSpeed(T),
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()),
            this._isBrowser = B,
            this._fromServer = void 0,
            this._indices = {},
            this._instancesCounts = {},
            this.computeId = this.createComputeId(),
            this.computeSelector = this.createComputeSelector()
        }
        var f = c.prototype;
        return f.add = function(v) {
            var m = this;
            this._optimizeForSpeed === void 0 && (this._optimizeForSpeed = Array.isArray(v.children),
            this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
            this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()),
            this._isBrowser && !this._fromServer && (this._fromServer = this.selectFromServer(),
            this._instancesCounts = Object.keys(this._fromServer).reduce(function(B, P) {
                return B[P] = 0,
                B
            }, {}));
            var x = this.getIdAndRules(v)
              , E = x.styleId
              , T = x.rules;
            if (E in this._instancesCounts) {
                this._instancesCounts[E] += 1;
                return
            }
            var N = T.map(function(B) {
                return m._sheet.insertRule(B)
            }).filter(function(B) {
                return B !== -1
            });
            this._indices[E] = N,
            this._instancesCounts[E] = 1
        }
        ,
        f.remove = function(v) {
            var m = this
              , x = this.getIdAndRules(v)
              , E = x.styleId;
            if (l(E in this._instancesCounts, "styleId: `" + E + "` not found"),
            this._instancesCounts[E] -= 1,
            this._instancesCounts[E] < 1) {
                var T = this._fromServer && this._fromServer[E];
                T ? (T.parentNode.removeChild(T),
                delete this._fromServer[E]) : (this._indices[E].forEach(function(N) {
                    return m._sheet.deleteRule(N)
                }),
                delete this._indices[E]),
                delete this._instancesCounts[E]
            }
        }
        ,
        f.update = function(v, m) {
            this.add(m),
            this.remove(v)
        }
        ,
        f.flush = function() {
            this._sheet.flush(),
            this._sheet.inject(),
            this._fromServer = void 0,
            this._indices = {},
            this._instancesCounts = {},
            this.computeId = this.createComputeId(),
            this.computeSelector = this.createComputeSelector()
        }
        ,
        f.cssRules = function() {
            var v = this
              , m = this._fromServer ? Object.keys(this._fromServer).map(function(E) {
                return [E, v._fromServer[E]]
            }) : []
              , x = this._sheet.cssRules();
            return m.concat(Object.keys(this._indices).map(function(E) {
                return [E, v._indices[E].map(function(T) {
                    return x[T].cssText
                }).join(v._optimizeForSpeed ? "" : `
`)]
            }).filter(function(E) {
                return !!E[1]
            }))
        }
        ,
        f.createComputeId = function() {
            var v = {};
            return function(m, x) {
                if (!x)
                    return "jsx-" + m;
                var E = String(x)
                  , T = m + E;
                return v[T] || (v[T] = "jsx-" + (0,
                t.default)(m + "-" + E)),
                v[T]
            }
        }
        ,
        f.createComputeSelector = function(v) {
            v === void 0 && (v = /__jsx-style-dynamic-selector/g);
            var m = {};
            return function(x, E) {
                this._isBrowser || (E = o(E));
                var T = x + E;
                return m[T] || (m[T] = E.replace(v, x)),
                m[T]
            }
        }
        ,
        f.getIdAndRules = function(v) {
            var m = this
              , x = v.children
              , E = v.dynamic
              , T = v.id;
            if (E) {
                var N = this.computeId(T, E);
                return {
                    styleId: N,
                    rules: Array.isArray(x) ? x.map(function(B) {
                        return m.computeSelector(N, B)
                    }) : [this.computeSelector(N, x)]
                }
            }
            return {
                styleId: this.computeId(T),
                rules: Array.isArray(x) ? x : [x]
            }
        }
        ,
        f.selectFromServer = function() {
            var v = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
            return v.reduce(function(m, x) {
                var E = x.id.slice(2);
                return m[E] = x,
                m
            }, {})
        }
        ,
        c
    }();
    e.default = s;
    function l(c, f) {
        if (!c)
            throw new Error("StyleSheetRegistry: " + f + ".")
    }
}
)(E_);
(function(e) {
    e.__esModule = !0,
    e.default = s,
    e.flush = l;
    var t = ee
      , n = r(E_);
    function r(c) {
        return c && c.__esModule ? c : {
            default: c
        }
    }
    var o = new n.default;
    function s(c) {
        return typeof window > "u" ? (o.add(c),
        null) : ((0,
        t.useLayoutEffect)(function() {
            return o.add(c),
            function() {
                o.remove(c)
            }
        }, [c.id, String(c.dynamic)]),
        null)
    }
    s.dynamic = function(c) {
        return c.map(function(f) {
            var h = f[0]
              , v = f[1];
            return o.computeId(h, v)
        }).join(" ")
    }
    ;
    function l() {
        var c = o.cssRules();
        return o.flush(),
        c
    }
}
)(b_);
var Q3 = b_;
const de = Jo(Q3);
var C_ = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
    (function() {
        var t = {}.hasOwnProperty;
        function n() {
            for (var s = "", l = 0; l < arguments.length; l++) {
                var c = arguments[l];
                c && (s = o(s, r(c)))
            }
            return s
        }
        function r(s) {
            if (typeof s == "string" || typeof s == "number")
                return s;
            if (typeof s != "object")
                return "";
            if (Array.isArray(s))
                return n.apply(null, s);
            if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
                return s.toString();
            var l = "";
            for (var c in s)
                t.call(s, c) && s[c] && (l = o(l, c));
            return l
        }
        function o(s, l) {
            return l ? s ? s + " " + l : s + l : s
        }
        e.exports ? (n.default = n,
        e.exports = n) : window.classNames = n
    }
    )()
}
)(C_);
var K3 = C_.exports;
const dn = Jo(K3)
  , Vc = e => {
    let {overflow: t, height: n, minHeight: r, maxHeight: o, width: s, minWidth: l, maxWidth: c, marginTop: f, children: h, dataTest: v="dhis2-uicore-box", className: m} = e;
    return I.createElement("div", {
        "data-test": v,
        className: de.dynamic([["3369228338", [f ? `margin-top: ${f};` : "", n ? `height: ${n};` : "", r ? `min-height: ${r};` : "", o ? `max-height: ${o};` : "", s ? `width: ${s};` : "", l ? `min-width: ${l};` : "", c ? `max-width: ${c};` : "", t ? `overflow: ${t};` : ""]]]) + " " + (m || "")
    }, h, I.createElement(de, {
        id: "3369228338",
        dynamic: [f ? `margin-top: ${f};` : "", n ? `height: ${n};` : "", r ? `min-height: ${r};` : "", o ? `max-height: ${o};` : "", s ? `width: ${s};` : "", l ? `min-width: ${l};` : "", c ? `max-width: ${c};` : "", t ? `overflow: ${t};` : ""]
    }, [`div.__jsx-style-dynamic-selector{${f ? `margin-top: ${f};` : ""} ${n ? `height: ${n};` : ""} ${r ? `min-height: ${r};` : ""} ${o ? `max-height: ${o};` : ""} ${s ? `width: ${s};` : ""} ${l ? `min-width: ${l};` : ""} ${c ? `max-width: ${c};` : ""} ${t ? `overflow: ${t};` : ""};}`]))
}
;
Vc.propTypes = {
    children: b.node,
    className: b.string,
    dataTest: b.string,
    height: b.string,
    marginTop: b.string,
    maxHeight: b.string,
    maxWidth: b.string,
    minHeight: b.string,
    minWidth: b.string,
    overflow: b.string,
    width: b.string
};
const kp = e => {
    let {children: t, valid: n, error: r, warning: o, className: s, dataTest: l="dhis2-uicore-help"} = e;
    return I.createElement("p", {
        "data-test": l,
        className: de.dynamic([["1832050605", [_e.dp4, nt.default, $.blue700, nt.error, $.yellow800]]]) + " " + (dn(s, {
            valid: n,
            error: r,
            warning: o
        }) || "")
    }, t, I.createElement(de, {
        id: "1832050605",
        dynamic: [_e.dp4, nt.default, $.blue700, nt.error, $.yellow800]
    }, [`p.__jsx-style-dynamic-selector{margin-top:${_e.dp4};margin-right:0;margin-bottom:0;margin-left:0;font-size:12px;line-height:14px;color:${nt.default};}`, `.valid.__jsx-style-dynamic-selector{color:${$.blue700};}`, `.error.__jsx-style-dynamic-selector{color:${nt.error};}`, `.warning.__jsx-style-dynamic-selector{color:${$.yellow800};}`]))
}
;
kp.propTypes = {
    children: b.string,
    className: b.string,
    dataTest: b.string,
    error: Vn,
    valid: Vn,
    warning: Vn
};
const O_ = e => {
    let {dataTest: t} = e;
    return I.createElement("span", {
        "data-test": t,
        className: de.dynamic([["1785068162", [_e.dp4]]])
    }, "*", I.createElement(de, {
        id: "1785068162",
        dynamic: [_e.dp4]
    }, [`span.__jsx-style-dynamic-selector{padding-inline-start:${_e.dp4};}`]))
}
;
O_.propTypes = {
    dataTest: b.string.isRequired
};
const el = [`label.jsx-2904627559{display:block;box-sizing:border-box;font-size:14px;line-height:19px;color:${$.grey900};padding:0;}`, ".disabled.jsx-2904627559{cursor:not-allowed;}"];
el.__hash = "2904627559";
const Z3 = e => {
    let {disabled: t, className: n} = e;
    return dn(n, {
        disabled: t
    })
}
  , T_ = e => {
    let {htmlFor: t, children: n, required: r, disabled: o, className: s, dataTest: l="dhis2-uicore-label"} = e;
    return I.createElement("label", {
        htmlFor: t,
        "data-test": l,
        className: `jsx-${el.__hash} ` + (Z3({
            className: s,
            disabled: o
        }) || "")
    }, I.createElement("span", {
        className: `jsx-${el.__hash}`
    }, n), r && I.createElement(O_, {
        dataTest: `${l}-required`
    }), I.createElement(de, {
        id: el.__hash
    }, el))
}
;
T_.propTypes = {
    children: b.string,
    className: b.string,
    dataTest: b.string,
    disabled: b.bool,
    htmlFor: b.string,
    required: b.bool
};
const P_ = e => {
    let {children: t, disabled: n, className: r, helpText: o, label: s, name: l, validationText: c, required: f, dataTest: h="dhis2-uicore-field", valid: v, error: m, warning: x} = e;
    return I.createElement(Vc, {
        className: r,
        dataTest: h
    }, s && I.createElement(T_, {
        dataTest: `${h}-label`,
        required: f,
        disabled: n,
        htmlFor: l
    }, s), I.createElement(Vc, {
        dataTest: `${h}-content`,
        marginTop: s ? "2px" : "0"
    }, t), o && I.createElement(kp, {
        dataTest: `${h}-help`
    }, o), c && I.createElement(kp, {
        error: m,
        warning: x,
        valid: v,
        dataTest: `${h}-validation`
    }, c))
}
;
P_.propTypes = {
    children: b.node,
    className: b.string,
    dataTest: b.string,
    disabled: b.bool,
    error: Vn,
    helpText: b.string,
    label: b.string,
    name: b.string,
    required: b.bool,
    valid: Vn,
    validationText: b.string,
    warning: Vn
};
const ta = e => {
    let {small: t, large: n, extrasmall: r, invert: o, className: s, dataTest: l="dhis2-uicore-circularloader", "aria-label": c} = e;
    return I.createElement("div", {
        role: "progressbar",
        "data-test": l,
        "aria-label": c,
        className: de.dynamic([["3803726117", [$.blue600, $.white]]]) + " " + (dn(s, {
            small: t,
            large: n,
            extrasmall: r,
            invert: o
        }) || "")
    }, I.createElement(de, {
        id: "3803726117",
        dynamic: [$.blue600, $.white]
    }, [`div.__jsx-style-dynamic-selector{width:48px;height:48px;border:6px solid rgba(110,122,138,0.15);border-bottom-color:${$.blue600};border-radius:50%;-webkit-animation:rotation-__jsx-style-dynamic-selector 1s linear infinite;animation:rotation-__jsx-style-dynamic-selector 1s linear infinite;}`, "@-webkit-keyframes rotation-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes rotation-__jsx-style-dynamic-selector{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", ".small.__jsx-style-dynamic-selector{width:24px;height:24px;border-width:4px;}", ".large.__jsx-style-dynamic-selector{width:72px;height:72px;border-width:8px;}", ".extrasmall.__jsx-style-dynamic-selector{width:16px;height:16px;border-width:2px;}", `.invert.__jsx-style-dynamic-selector{border-color:rgba(33,41,52,0.5);border-bottom-color:${$.white};}`]))
}
;
ta.propTypes = {
    "aria-label": b.string,
    className: b.string,
    dataTest: b.string,
    extrasmall: no,
    invert: b.bool,
    large: no,
    small: no
};
const Ps = [`button.jsx-3146657073{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:4px;font-weight:400;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:${$.grey900};height:36px;padding:0 ${_e.dp12};font-size:14px;line-height:16px;border:1px solid ${$.grey500};background-color:#f9fafb;}`, "button.jsx-3146657073:disabled{cursor:not-allowed;}", `button.jsx-3146657073:focus{outline:3px solid ${nt.focus};outline-offset:-3px;-webkit-text-decoration:underline;text-decoration:underline;}`, "button.jsx-3146657073:focus.jsx-3146657073:not(:focus-visible){outline:none;-webkit-text-decoration:none;text-decoration:none;}", "button.jsx-3146657073:active.jsx-3146657073:focus,button.jsx-3146657073:disabled.jsx-3146657073:focus{outline:none;-webkit-text-decoration:none;text-decoration:none;}", `button.jsx-3146657073:hover{border-color:${$.grey500};background-color:${$.grey200};}`, `button.jsx-3146657073:active,button.jsx-3146657073:active.jsx-3146657073:focus{border-color:${$.grey500};background-color:${$.grey200};box-shadow:0 0 0 1px rgb(0,0,0,0.1) inset;}`, "button.jsx-3146657073:focus{background-color:#f9fafb;}", `button.jsx-3146657073:disabled{border-color:${$.grey400};background-color:#f9fafb;box-shadow:none;color:${nt.disabled};fill:${nt.disabled};}`, ".small.jsx-3146657073{height:28px;padding:0 6px;font-size:14px;line-height:16px;}", `.large.jsx-3146657073{height:43px;padding:0 ${_e.dp24};font-size:16px;-webkit-letter-spacing:0.57px;-moz-letter-spacing:0.57px;-ms-letter-spacing:0.57px;letter-spacing:0.57px;line-height:19px;}`, `.primary.jsx-3146657073{border-color:${nt.primary800};background:linear-gradient(180deg,#1565c0 0%,#0650a3 100%);background-color:#2b61b3;color:${$.white};fill:${$.white};font-weight:500;}`, `.primary.jsx-3146657073:hover{border-color:${nt.primary800};background:linear-gradient(180deg,#054fa3 0%,#034793 100%);background-color:#21539f;}`, ".primary.jsx-3146657073:active,.primary.jsx-3146657073:active.jsx-3146657073:focus{background:linear-gradient(180deg,#054fa3 0%,#034793 100%);background-color:#1c4a90;box-shadow:0 0 0 1px rgba(0,0,0,0.18) inset;}", `.primary.jsx-3146657073:focus{background:${$.blue800};border-color:${$.blue900};outline-offset:-5px;}`, `.primary.jsx-3146657073:disabled{border-color:#93a6bd;background:#b3c6de;box-shadow:none;color:${$.white};fill:${$.white};}`, ".secondary.jsx-3146657073{border-color:rgba(74,87,104,0.25);background-color:transparent;}", ".secondary.jsx-3146657073:hover{border-color:rgba(74,87,104,0.5);background-color:rgba(160,173,186,0.05);}", ".secondary.jsx-3146657073:active,.secondary.jsx-3146657073:active.jsx-3146657073:focus{background-color:rgba(160,173,186,0.2);box-shadow:none;}", ".secondary.jsx-3146657073:focus{background-color:transparent;}", `.secondary.jsx-3146657073:disabled{border-color:rgba(74,87,104,0.25);background-color:transparent;box-shadow:none;color:${nt.disabled};fill:${nt.disabled};}`, `.destructive.jsx-3146657073{border-color:#a10b0b;background:linear-gradient(180deg,#d32f2f 0%,#b71c1c 100%);background-color:#b9242b;color:${$.white};fill:${$.white};font-weight:500;}`, ".destructive.jsx-3146657073:hover{border-color:#a10b0b;background:linear-gradient(180deg,#b81c1c 0%,#b80c0b 100%);background-color:#ac0f1a;}", ".destructive.jsx-3146657073:active,.destructive.jsx-3146657073:active.jsx-3146657073:focus{background:linear-gradient(180deg,#b81c1c 0%,#b80c0b 100%);background-color:#ac101b;box-shadow:0 0 0 1px rgba(0,0,0,0.18) inset;}", ".destructive.jsx-3146657073:focus{background:linear-gradient(180deg,#d32f2f 0%,#b71c1c 100%);background-color:#b72229;}", `.destructive.jsx-3146657073:disabled{border-color:#c59898;background:#d6a8a8;box-shadow:none;color:${$.white};fill:${$.white};}`, `.destructive.secondary.jsx-3146657073{border-color:rgba(74,87,104,0.25);background:transparent;color:${$.red700};fill:${$.red700};font-weight:400;}`, `.destructive.secondary.jsx-3146657073:hover{border-color:${$.red600};background:${$.red050};color:${$.red800};fill:${$.red800};}`, `.destructive.secondary.jsx-3146657073:active,.destructive.secondary.jsx-3146657073:active.jsx-3146657073:focus{background:${$.red100};border-color:${$.red700};box-shadow:none;}`, ".destructive.secondary.jsx-3146657073:disabled{background:transparent;border-color:rgba(74,87,104,0.25);color:rgba(183,28,28,0.6);fill:rgba(183,28,28,0.6);}", ".icon-only.jsx-3146657073{padding:0 0 0 5px;}", ".button-icon.jsx-3146657073{margin-inline-end:6px;color:inherit;fill:inherit;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;}", ".icon-only.jsx-3146657073 .button-icon.jsx-3146657073{margin-inline-end:5px;}", ".small.icon-only.jsx-3146657073{padding-block:0;padding-inline-start:5px;padding-inline-end:4px;}", ".small.jsx-3146657073 .button-icon.jsx-3146657073{margin-inline-end:2px;}", ".small.icon-only.jsx-3146657073 .button-icon.jsx-3146657073{margin-inline-end:1px;}", `.toggled.jsx-3146657073{background:${$.grey700};border:1px solid ${$.grey900};color:${$.grey050};fill:${$.grey050};}`, `.toggled.jsx-3146657073:focus{background:${$.grey800};}`, `.toggled.jsx-3146657073:hover{background:${$.grey800};border-color:${$.grey900};}`, `.toggled.jsx-3146657073:active,.toggled.jsx-3146657073:active.jsx-3146657073:focus{background:${$.grey900};border-color:${$.grey900};}`, `.toggled.jsx-3146657073:disabled{background:${$.grey500};border-color:${$.grey600};color:${$.grey050};fill:${$.grey050};}`, ".loader.jsx-3146657073{width:16px;height:16px;margin-inline-end:8px;}", ".loader.jsx-3146657073+.button-icon.jsx-3146657073{display:none;}", ".icon-only.jsx-3146657073 .loader.jsx-3146657073{margin:0 8px 0 4px;margin-inline-start:4px;margin-inline-end:8px;}", ".small.icon-only.jsx-3146657073 .loader.jsx-3146657073{margin:0 4px;}"];
Ps.__hash = "3146657073";
function Cp() {
    return Cp = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Cp.apply(null, arguments)
}
const R_ = e => {
    let {children: t, className: n, dataTest: r="dhis2-uicore-button", destructive: o, disabled: s, icon: l, initialFocus: c, large: f, name: h, primary: v, secondary: m, small: x, tabIndex: E, toggled: T, type: N="button", value: B, onBlur: P, onClick: O, onFocus: D, onKeyDown: z, loading: H, ...F} = e;
    const W = ee.useRef();
    ee.useEffect( () => {
        c && W.current && W.current.focus()
    }
    , [c, W.current]);
    const {"aria-label": G, title: ye} = F;
    !t && !ye && !G && console.debug("Button component has no children but is missing title and ariaLabel attribute.");
    const ge = gt => O && O({
        value: B,
        name: h
    }, gt)
      , Ce = gt => P && P({
        value: B,
        name: h
    }, gt)
      , st = gt => D && D({
        value: B,
        name: h
    }, gt)
      , ut = gt => z && z({
        value: B,
        name: h
    }, gt)
      , Zt = dn(n, {
        primary: v,
        secondary: m,
        destructive: o,
        small: x,
        large: f,
        "icon-only": l && !t,
        toggled: T,
        loading: H
    });
    return I.createElement("button", Cp({
        ref: W,
        name: h,
        "data-test": r,
        disabled: s || H,
        tabIndex: E,
        type: N,
        onBlur: Ce,
        onClick: ge,
        onFocus: st,
        onKeyDown: ut
    }, F, {
        className: `jsx-${Ps.__hash} ` + (F && F.className != null && F.className || Zt || "")
    }), H && I.createElement("span", {
        className: `jsx-${Ps.__hash} loader`
    }, o || v ? I.createElement(ta, {
        extrasmall: !0,
        invert: !0
    }) : I.createElement(ta, {
        extrasmall: !0
    })), l && I.createElement("span", {
        className: `jsx-${Ps.__hash} button-icon`
    }, l), t, I.createElement(de, {
        id: Ps.__hash
    }, Ps))
}
;
R_.propTypes = {
    children: b.node,
    className: b.string,
    dataTest: b.string,
    destructive: b.bool,
    disabled: b.bool,
    icon: b.element,
    initialFocus: b.bool,
    large: no,
    loading: b.bool,
    name: b.string,
    primary: b.bool,
    secondary: b.bool,
    small: no,
    tabIndex: b.string,
    toggled: b.bool,
    type: b.oneOf(["submit", "reset", "button"]),
    value: b.string,
    onBlur: b.func,
    onClick: b.func,
    onFocus: b.func,
    onKeyDown: b.func
};
var D_ = {
    exports: {}
}
  , Qn = {}
  , I_ = {
    exports: {}
}
  , M_ = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(ae, fe) {
        var ke = ae.length;
        ae.push(fe);
        e: for (; 0 < ke; ) {
            var $e = ke - 1 >>> 1
              , St = ae[$e];
            if (0 < o(St, fe))
                ae[$e] = fe,
                ae[ke] = St,
                ke = $e;
            else
                break e
        }
    }
    function n(ae) {
        return ae.length === 0 ? null : ae[0]
    }
    function r(ae) {
        if (ae.length === 0)
            return null;
        var fe = ae[0]
          , ke = ae.pop();
        if (ke !== fe) {
            ae[0] = ke;
            e: for (var $e = 0, St = ae.length, ii = St >>> 1; $e < ii; ) {
                var Lt = 2 * ($e + 1) - 1
                  , pn = ae[Lt]
                  , gn = Lt + 1
                  , Ai = ae[gn];
                if (0 > o(pn, ke))
                    gn < St && 0 > o(Ai, pn) ? (ae[$e] = Ai,
                    ae[gn] = ke,
                    $e = gn) : (ae[$e] = pn,
                    ae[Lt] = ke,
                    $e = Lt);
                else if (gn < St && 0 > o(Ai, ke))
                    ae[$e] = Ai,
                    ae[gn] = ke,
                    $e = gn;
                else
                    break e
            }
        }
        return fe
    }
    function o(ae, fe) {
        var ke = ae.sortIndex - fe.sortIndex;
        return ke !== 0 ? ke : ae.id - fe.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var l = Date
          , c = l.now();
        e.unstable_now = function() {
            return l.now() - c
        }
    }
    var f = []
      , h = []
      , v = 1
      , m = null
      , x = 3
      , E = !1
      , T = !1
      , N = !1
      , B = typeof setTimeout == "function" ? setTimeout : null
      , P = typeof clearTimeout == "function" ? clearTimeout : null
      , O = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function D(ae) {
        for (var fe = n(h); fe !== null; ) {
            if (fe.callback === null)
                r(h);
            else if (fe.startTime <= ae)
                r(h),
                fe.sortIndex = fe.expirationTime,
                t(f, fe);
            else
                break;
            fe = n(h)
        }
    }
    function z(ae) {
        if (N = !1,
        D(ae),
        !T)
            if (n(f) !== null)
                T = !0,
                gt(H);
            else {
                var fe = n(h);
                fe !== null && xt(z, fe.startTime - ae)
            }
    }
    function H(ae, fe) {
        T = !1,
        N && (N = !1,
        P(G),
        G = -1),
        E = !0;
        var ke = x;
        try {
            for (D(fe),
            m = n(f); m !== null && (!(m.expirationTime > fe) || ae && !Ce()); ) {
                var $e = m.callback;
                if (typeof $e == "function") {
                    m.callback = null,
                    x = m.priorityLevel;
                    var St = $e(m.expirationTime <= fe);
                    fe = e.unstable_now(),
                    typeof St == "function" ? m.callback = St : m === n(f) && r(f),
                    D(fe)
                } else
                    r(f);
                m = n(f)
            }
            if (m !== null)
                var ii = !0;
            else {
                var Lt = n(h);
                Lt !== null && xt(z, Lt.startTime - fe),
                ii = !1
            }
            return ii
        } finally {
            m = null,
            x = ke,
            E = !1
        }
    }
    var F = !1
      , W = null
      , G = -1
      , ye = 5
      , ge = -1;
    function Ce() {
        return !(e.unstable_now() - ge < ye)
    }
    function st() {
        if (W !== null) {
            var ae = e.unstable_now();
            ge = ae;
            var fe = !0;
            try {
                fe = W(!0, ae)
            } finally {
                fe ? ut() : (F = !1,
                W = null)
            }
        } else
            F = !1
    }
    var ut;
    if (typeof O == "function")
        ut = function() {
            O(st)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var Kt = new MessageChannel
          , Zt = Kt.port2;
        Kt.port1.onmessage = st,
        ut = function() {
            Zt.postMessage(null)
        }
    } else
        ut = function() {
            B(st, 0)
        }
        ;
    function gt(ae) {
        W = ae,
        F || (F = !0,
        ut())
    }
    function xt(ae, fe) {
        G = B(function() {
            ae(e.unstable_now())
        }, fe)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(ae) {
        ae.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        T || E || (T = !0,
        gt(H))
    }
    ,
    e.unstable_forceFrameRate = function(ae) {
        0 > ae || 125 < ae ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ye = 0 < ae ? Math.floor(1e3 / ae) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return x
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(f)
    }
    ,
    e.unstable_next = function(ae) {
        switch (x) {
        case 1:
        case 2:
        case 3:
            var fe = 3;
            break;
        default:
            fe = x
        }
        var ke = x;
        x = fe;
        try {
            return ae()
        } finally {
            x = ke
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(ae, fe) {
        switch (ae) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            ae = 3
        }
        var ke = x;
        x = ae;
        try {
            return fe()
        } finally {
            x = ke
        }
    }
    ,
    e.unstable_scheduleCallback = function(ae, fe, ke) {
        var $e = e.unstable_now();
        switch (typeof ke == "object" && ke !== null ? (ke = ke.delay,
        ke = typeof ke == "number" && 0 < ke ? $e + ke : $e) : ke = $e,
        ae) {
        case 1:
            var St = -1;
            break;
        case 2:
            St = 250;
            break;
        case 5:
            St = 1073741823;
            break;
        case 4:
            St = 1e4;
            break;
        default:
            St = 5e3
        }
        return St = ke + St,
        ae = {
            id: v++,
            callback: fe,
            priorityLevel: ae,
            startTime: ke,
            expirationTime: St,
            sortIndex: -1
        },
        ke > $e ? (ae.sortIndex = ke,
        t(h, ae),
        n(f) === null && ae === n(h) && (N ? (P(G),
        G = -1) : N = !0,
        xt(z, ke - $e))) : (ae.sortIndex = St,
        t(f, ae),
        T || E || (T = !0,
        gt(H))),
        ae
    }
    ,
    e.unstable_shouldYield = Ce,
    e.unstable_wrapCallback = function(ae) {
        var fe = x;
        return function() {
            var ke = x;
            x = fe;
            try {
                return ae.apply(this, arguments)
            } finally {
                x = ke
            }
        }
    }
}
)(M_);
I_.exports = M_;
var J3 = I_.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X3 = ee
  , qn = J3;
function ne(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var A_ = new Set
  , xl = {};
function Xo(e, t) {
    na(e, t),
    na(e + "Capture", t)
}
function na(e, t) {
    for (xl[e] = t,
    e = 0; e < t.length; e++)
        A_.add(t[e])
}
var Ci = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Op = Object.prototype.hasOwnProperty
  , e4 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Vy = {}
  , Gy = {};
function t4(e) {
    return Op.call(Gy, e) ? !0 : Op.call(Vy, e) ? !1 : e4.test(e) ? Gy[e] = !0 : (Vy[e] = !0,
    !1)
}
function n4(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function r4(e, t, n, r) {
    if (t === null || typeof t > "u" || n4(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function En(e, t, n, r, o, s, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = l
}
var rn = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    rn[e] = new En(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    rn[t] = new En(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    rn[e] = new En(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    rn[e] = new En(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    rn[e] = new En(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    rn[e] = new En(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    rn[e] = new En(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    rn[e] = new En(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    rn[e] = new En(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Xg = /[\-:]([a-z])/g;
function em(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Xg, em);
    rn[t] = new En(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Xg, em);
    rn[t] = new En(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Xg, em);
    rn[t] = new En(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    rn[e] = new En(e,1,!1,e.toLowerCase(),null,!1,!1)
});
rn.xlinkHref = new En("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    rn[e] = new En(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function tm(e, t, n, r) {
    var o = rn.hasOwnProperty(t) ? rn[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (r4(t, n, o, r) && (n = null),
    r || o === null ? t4(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Di = X3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ic = Symbol.for("react.element")
  , Ds = Symbol.for("react.portal")
  , Is = Symbol.for("react.fragment")
  , nm = Symbol.for("react.strict_mode")
  , Tp = Symbol.for("react.profiler")
  , N_ = Symbol.for("react.provider")
  , L_ = Symbol.for("react.context")
  , rm = Symbol.for("react.forward_ref")
  , Pp = Symbol.for("react.suspense")
  , Rp = Symbol.for("react.suspense_list")
  , im = Symbol.for("react.memo")
  , Gi = Symbol.for("react.lazy")
  , j_ = Symbol.for("react.offscreen")
  , qy = Symbol.iterator;
function Ya(e) {
    return e === null || typeof e != "object" ? null : (e = qy && e[qy] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ct = Object.assign, Ih;
function tl(e) {
    if (Ih === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ih = t && t[1] || ""
        }
    return `
` + Ih + e
}
var Mh = !1;
function Ah(e, t) {
    if (!e || Mh)
        return "";
    Mh = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (h) {
                    var r = h
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (h) {
                    r = h
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (h) {
                r = h
            }
            e()
        }
    } catch (h) {
        if (h && r && typeof h.stack == "string") {
            for (var o = h.stack.split(`
`), s = r.stack.split(`
`), l = o.length - 1, c = s.length - 1; 1 <= l && 0 <= c && o[l] !== s[c]; )
                c--;
            for (; 1 <= l && 0 <= c; l--,
            c--)
                if (o[l] !== s[c]) {
                    if (l !== 1 || c !== 1)
                        do
                            if (l--,
                            c--,
                            0 > c || o[l] !== s[c]) {
                                var f = `
` + o[l].replace(" at new ", " at ");
                                return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)),
                                f
                            }
                        while (1 <= l && 0 <= c);
                    break
                }
        }
    } finally {
        Mh = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? tl(e) : ""
}
function i4(e) {
    switch (e.tag) {
    case 5:
        return tl(e.type);
    case 16:
        return tl("Lazy");
    case 13:
        return tl("Suspense");
    case 19:
        return tl("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Ah(e.type, !1),
        e;
    case 11:
        return e = Ah(e.type.render, !1),
        e;
    case 1:
        return e = Ah(e.type, !0),
        e;
    default:
        return ""
    }
}
function Dp(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Is:
        return "Fragment";
    case Ds:
        return "Portal";
    case Tp:
        return "Profiler";
    case nm:
        return "StrictMode";
    case Pp:
        return "Suspense";
    case Rp:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case L_:
            return (e.displayName || "Context") + ".Consumer";
        case N_:
            return (e._context.displayName || "Context") + ".Provider";
        case rm:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case im:
            return t = e.displayName || null,
            t !== null ? t : Dp(e.type) || "Memo";
        case Gi:
            t = e._payload,
            e = e._init;
            try {
                return Dp(e(t))
            } catch {}
        }
    return null
}
function o4(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Dp(t);
    case 8:
        return t === nm ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function po(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function $_(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function s4(e) {
    var t = $_(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(l) {
                r = "" + l,
                s.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function oc(e) {
    e._valueTracker || (e._valueTracker = s4(e))
}
function F_(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = $_(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Gc(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Ip(e, t) {
    var n = t.checked;
    return Ct({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Qy(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = po(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function W_(e, t) {
    t = t.checked,
    t != null && tm(e, "checked", t, !1)
}
function Mp(e, t) {
    W_(e, t);
    var n = po(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ap(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ap(e, t.type, po(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Ky(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Ap(e, t, n) {
    (t !== "number" || Gc(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var nl = Array.isArray;
function Hs(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + po(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Np(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(ne(91));
    return Ct({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Zy(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(ne(92));
            if (nl(n)) {
                if (1 < n.length)
                    throw Error(ne(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: po(n)
    }
}
function z_(e, t) {
    var n = po(t.value)
      , r = po(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Jy(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function U_(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Lp(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? U_(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var sc, Y_ = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
    else {
        for (sc = sc || document.createElement("div"),
        sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = sc.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Sl(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var cl = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , a4 = ["Webkit", "ms", "Moz", "O"];
Object.keys(cl).forEach(function(e) {
    a4.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        cl[t] = cl[e]
    })
});
function B_(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || cl.hasOwnProperty(e) && cl[e] ? ("" + t).trim() : t + "px"
}
function H_(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = B_(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var l4 = Ct({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function jp(e, t) {
    if (t) {
        if (l4[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(ne(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(ne(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(ne(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(ne(62))
    }
}
function $p(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Fp = null;
function om(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Wp = null
  , Vs = null
  , Gs = null;
function Xy(e) {
    if (e = Vl(e)) {
        if (typeof Wp != "function")
            throw Error(ne(280));
        var t = e.stateNode;
        t && (t = jf(t),
        Wp(e.stateNode, e.type, t))
    }
}
function V_(e) {
    Vs ? Gs ? Gs.push(e) : Gs = [e] : Vs = e
}
function G_() {
    if (Vs) {
        var e = Vs
          , t = Gs;
        if (Gs = Vs = null,
        Xy(e),
        t)
            for (e = 0; e < t.length; e++)
                Xy(t[e])
    }
}
function q_(e, t) {
    return e(t)
}
function Q_() {}
var Nh = !1;
function K_(e, t, n) {
    if (Nh)
        return e(t, n);
    Nh = !0;
    try {
        return q_(e, t, n)
    } finally {
        Nh = !1,
        (Vs !== null || Gs !== null) && (Q_(),
        G_())
    }
}
function bl(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = jf(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(ne(231, t, typeof n));
    return n
}
var zp = !1;
if (Ci)
    try {
        var Ba = {};
        Object.defineProperty(Ba, "passive", {
            get: function() {
                zp = !0
            }
        }),
        window.addEventListener("test", Ba, Ba),
        window.removeEventListener("test", Ba, Ba)
    } catch {
        zp = !1
    }
function u4(e, t, n, r, o, s, l, c, f) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, h)
    } catch (v) {
        this.onError(v)
    }
}
var fl = !1
  , qc = null
  , Qc = !1
  , Up = null
  , c4 = {
    onError: function(e) {
        fl = !0,
        qc = e
    }
};
function f4(e, t, n, r, o, s, l, c, f) {
    fl = !1,
    qc = null,
    u4.apply(c4, arguments)
}
function d4(e, t, n, r, o, s, l, c, f) {
    if (f4.apply(this, arguments),
    fl) {
        if (fl) {
            var h = qc;
            fl = !1,
            qc = null
        } else
            throw Error(ne(198));
        Qc || (Qc = !0,
        Up = h)
    }
}
function es(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Z_(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function e1(e) {
    if (es(e) !== e)
        throw Error(ne(188))
}
function h4(e) {
    var t = e.alternate;
    if (!t) {
        if (t = es(e),
        t === null)
            throw Error(ne(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var s = o.alternate;
        if (s === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === s.child) {
            for (s = o.child; s; ) {
                if (s === n)
                    return e1(o),
                    e;
                if (s === r)
                    return e1(o),
                    t;
                s = s.sibling
            }
            throw Error(ne(188))
        }
        if (n.return !== r.return)
            n = o,
            r = s;
        else {
            for (var l = !1, c = o.child; c; ) {
                if (c === n) {
                    l = !0,
                    n = o,
                    r = s;
                    break
                }
                if (c === r) {
                    l = !0,
                    r = o,
                    n = s;
                    break
                }
                c = c.sibling
            }
            if (!l) {
                for (c = s.child; c; ) {
                    if (c === n) {
                        l = !0,
                        n = s,
                        r = o;
                        break
                    }
                    if (c === r) {
                        l = !0,
                        r = s,
                        n = o;
                        break
                    }
                    c = c.sibling
                }
                if (!l)
                    throw Error(ne(189))
            }
        }
        if (n.alternate !== r)
            throw Error(ne(190))
    }
    if (n.tag !== 3)
        throw Error(ne(188));
    return n.stateNode.current === n ? e : t
}
function J_(e) {
    return e = h4(e),
    e !== null ? X_(e) : null
}
function X_(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = X_(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ex = qn.unstable_scheduleCallback
  , t1 = qn.unstable_cancelCallback
  , p4 = qn.unstable_shouldYield
  , g4 = qn.unstable_requestPaint
  , Nt = qn.unstable_now
  , m4 = qn.unstable_getCurrentPriorityLevel
  , sm = qn.unstable_ImmediatePriority
  , tx = qn.unstable_UserBlockingPriority
  , Kc = qn.unstable_NormalPriority
  , v4 = qn.unstable_LowPriority
  , nx = qn.unstable_IdlePriority
  , Mf = null
  , Jr = null;
function y4(e) {
    if (Jr && typeof Jr.onCommitFiberRoot == "function")
        try {
            Jr.onCommitFiberRoot(Mf, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Rr = Math.clz32 ? Math.clz32 : x4
  , w4 = Math.log
  , _4 = Math.LN2;
function x4(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (w4(e) / _4 | 0) | 0
}
var ac = 64
  , lc = 4194304;
function rl(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Zc(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , s = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var c = l & ~o;
        c !== 0 ? r = rl(c) : (s &= l,
        s !== 0 && (r = rl(s)))
    } else
        l = n & ~o,
        l !== 0 ? r = rl(l) : s !== 0 && (r = rl(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    s = t & -t,
    o >= s || o === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Rr(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function S4(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function b4(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var l = 31 - Rr(s)
          , c = 1 << l
          , f = o[l];
        f === -1 ? (!(c & n) || c & r) && (o[l] = S4(c, t)) : f <= t && (e.expiredLanes |= c),
        s &= ~c
    }
}
function Yp(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function rx() {
    var e = ac;
    return ac <<= 1,
    !(ac & 4194240) && (ac = 64),
    e
}
function Lh(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Bl(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Rr(t),
    e[t] = n
}
function E4(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - Rr(n)
          , s = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~s
    }
}
function am(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Rr(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var Xe = 0;
function ix(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ox, lm, sx, ax, lx, Bp = !1, uc = [], ro = null, io = null, oo = null, El = new Map, kl = new Map, Ki = [], k4 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function n1(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        ro = null;
        break;
    case "dragenter":
    case "dragleave":
        io = null;
        break;
    case "mouseover":
    case "mouseout":
        oo = null;
        break;
    case "pointerover":
    case "pointerout":
        El.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        kl.delete(t.pointerId)
    }
}
function Ha(e, t, n, r, o, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o]
    },
    t !== null && (t = Vl(t),
    t !== null && lm(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function C4(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return ro = Ha(ro, e, t, n, r, o),
        !0;
    case "dragenter":
        return io = Ha(io, e, t, n, r, o),
        !0;
    case "mouseover":
        return oo = Ha(oo, e, t, n, r, o),
        !0;
    case "pointerover":
        var s = o.pointerId;
        return El.set(s, Ha(El.get(s) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return s = o.pointerId,
        kl.set(s, Ha(kl.get(s) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function ux(e) {
    var t = Fo(e.target);
    if (t !== null) {
        var n = es(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Z_(n),
                t !== null) {
                    e.blockedOn = t,
                    lx(e.priority, function() {
                        sx(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Tc(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Hp(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Fp = r,
            n.target.dispatchEvent(r),
            Fp = null
        } else
            return t = Vl(n),
            t !== null && lm(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function r1(e, t, n) {
    Tc(e) && n.delete(t)
}
function O4() {
    Bp = !1,
    ro !== null && Tc(ro) && (ro = null),
    io !== null && Tc(io) && (io = null),
    oo !== null && Tc(oo) && (oo = null),
    El.forEach(r1),
    kl.forEach(r1)
}
function Va(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Bp || (Bp = !0,
    qn.unstable_scheduleCallback(qn.unstable_NormalPriority, O4)))
}
function Cl(e) {
    function t(o) {
        return Va(o, e)
    }
    if (0 < uc.length) {
        Va(uc[0], e);
        for (var n = 1; n < uc.length; n++) {
            var r = uc[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ro !== null && Va(ro, e),
    io !== null && Va(io, e),
    oo !== null && Va(oo, e),
    El.forEach(t),
    kl.forEach(t),
    n = 0; n < Ki.length; n++)
        r = Ki[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ki.length && (n = Ki[0],
    n.blockedOn === null); )
        ux(n),
        n.blockedOn === null && Ki.shift()
}
var qs = Di.ReactCurrentBatchConfig
  , Jc = !0;
function T4(e, t, n, r) {
    var o = Xe
      , s = qs.transition;
    qs.transition = null;
    try {
        Xe = 1,
        um(e, t, n, r)
    } finally {
        Xe = o,
        qs.transition = s
    }
}
function P4(e, t, n, r) {
    var o = Xe
      , s = qs.transition;
    qs.transition = null;
    try {
        Xe = 4,
        um(e, t, n, r)
    } finally {
        Xe = o,
        qs.transition = s
    }
}
function um(e, t, n, r) {
    if (Jc) {
        var o = Hp(e, t, n, r);
        if (o === null)
            Vh(e, t, r, Xc, n),
            n1(e, r);
        else if (C4(o, e, t, n, r))
            r.stopPropagation();
        else if (n1(e, r),
        t & 4 && -1 < k4.indexOf(e)) {
            for (; o !== null; ) {
                var s = Vl(o);
                if (s !== null && ox(s),
                s = Hp(e, t, n, r),
                s === null && Vh(e, t, r, Xc, n),
                s === o)
                    break;
                o = s
            }
            o !== null && r.stopPropagation()
        } else
            Vh(e, t, r, null, n)
    }
}
var Xc = null;
function Hp(e, t, n, r) {
    if (Xc = null,
    e = om(r),
    e = Fo(e),
    e !== null)
        if (t = es(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Z_(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Xc = e,
    null
}
function cx(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (m4()) {
        case sm:
            return 1;
        case tx:
            return 4;
        case Kc:
        case v4:
            return 16;
        case nx:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Ji = null
  , cm = null
  , Pc = null;
function fx() {
    if (Pc)
        return Pc;
    var e, t = cm, n = t.length, r, o = "value" in Ji ? Ji.value : Ji.textContent, s = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === o[s - r]; r++)
        ;
    return Pc = o.slice(e, 1 < r ? 1 - r : void 0)
}
function Rc(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function cc() {
    return !0
}
function i1() {
    return !1
}
function Kn(e) {
    function t(n, r, o, s, l) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = s,
        this.target = l,
        this.currentTarget = null;
        for (var c in e)
            e.hasOwnProperty(c) && (n = e[c],
            this[c] = n ? n(s) : s[c]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? cc : i1,
        this.isPropagationStopped = i1,
        this
    }
    return Ct(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = cc)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = cc)
        },
        persist: function() {},
        isPersistent: cc
    }),
    t
}
var ha = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, fm = Kn(ha), Hl = Ct({}, ha, {
    view: 0,
    detail: 0
}), R4 = Kn(Hl), jh, $h, Ga, Af = Ct({}, Hl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: dm,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Ga && (Ga && e.type === "mousemove" ? (jh = e.screenX - Ga.screenX,
        $h = e.screenY - Ga.screenY) : $h = jh = 0,
        Ga = e),
        jh)
    },
    movementY: function(e) {
        return "movementY" in e ? e.movementY : $h
    }
}), o1 = Kn(Af), D4 = Ct({}, Af, {
    dataTransfer: 0
}), I4 = Kn(D4), M4 = Ct({}, Hl, {
    relatedTarget: 0
}), Fh = Kn(M4), A4 = Ct({}, ha, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), N4 = Kn(A4), L4 = Ct({}, ha, {
    clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
}), j4 = Kn(L4), $4 = Ct({}, ha, {
    data: 0
}), s1 = Kn($4), F4 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, W4 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, z4 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function U4(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = z4[e]) ? !!t[e] : !1
}
function dm() {
    return U4
}
var Y4 = Ct({}, Hl, {
    key: function(e) {
        if (e.key) {
            var t = F4[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Rc(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? W4[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: dm,
    charCode: function(e) {
        return e.type === "keypress" ? Rc(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Rc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , B4 = Kn(Y4)
  , H4 = Ct({}, Af, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , a1 = Kn(H4)
  , V4 = Ct({}, Hl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: dm
})
  , G4 = Kn(V4)
  , q4 = Ct({}, ha, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Q4 = Kn(q4)
  , K4 = Ct({}, Af, {
    deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Z4 = Kn(K4)
  , J4 = [9, 13, 27, 32]
  , hm = Ci && "CompositionEvent" in window
  , dl = null;
Ci && "documentMode" in document && (dl = document.documentMode);
var X4 = Ci && "TextEvent" in window && !dl
  , dx = Ci && (!hm || dl && 8 < dl && 11 >= dl)
  , l1 = " "
  , u1 = !1;
function hx(e, t) {
    switch (e) {
    case "keyup":
        return J4.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function px(e) {
    return e = e.detail,
    typeof e == "object" && "data" in e ? e.data : null
}
var Ms = !1;
function eD(e, t) {
    switch (e) {
    case "compositionend":
        return px(t);
    case "keypress":
        return t.which !== 32 ? null : (u1 = !0,
        l1);
    case "textInput":
        return e = t.data,
        e === l1 && u1 ? null : e;
    default:
        return null
    }
}
function tD(e, t) {
    if (Ms)
        return e === "compositionend" || !hm && hx(e, t) ? (e = fx(),
        Pc = cm = Ji = null,
        Ms = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return dx && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var nD = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function c1(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!nD[e.type] : t === "textarea"
}
function gx(e, t, n, r) {
    V_(r),
    t = ef(t, "onChange"),
    0 < t.length && (n = new fm("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var hl = null
  , Ol = null;
function rD(e) {
    Cx(e, 0)
}
function Nf(e) {
    var t = Ls(e);
    if (F_(t))
        return e
}
function iD(e, t) {
    if (e === "change")
        return t
}
var mx = !1;
if (Ci) {
    var Wh;
    if (Ci) {
        var zh = "oninput" in document;
        if (!zh) {
            var f1 = document.createElement("div");
            f1.setAttribute("oninput", "return;"),
            zh = typeof f1.oninput == "function"
        }
        Wh = zh
    } else
        Wh = !1;
    mx = Wh && (!document.documentMode || 9 < document.documentMode)
}
function d1() {
    hl && (hl.detachEvent("onpropertychange", vx),
    Ol = hl = null)
}
function vx(e) {
    if (e.propertyName === "value" && Nf(Ol)) {
        var t = [];
        gx(t, Ol, e, om(e)),
        K_(rD, t)
    }
}
function oD(e, t, n) {
    e === "focusin" ? (d1(),
    hl = t,
    Ol = n,
    hl.attachEvent("onpropertychange", vx)) : e === "focusout" && d1()
}
function sD(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Nf(Ol)
}
function aD(e, t) {
    if (e === "click")
        return Nf(t)
}
function lD(e, t) {
    if (e === "input" || e === "change")
        return Nf(t)
}
function uD(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ir = typeof Object.is == "function" ? Object.is : uD;
function Tl(e, t) {
    if (Ir(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Op.call(t, o) || !Ir(e[o], t[o]))
            return !1
    }
    return !0
}
function h1(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function p1(e, t) {
    var n = h1(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = h1(n)
    }
}
function yx(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yx(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function wx() {
    for (var e = window, t = Gc(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Gc(e.document)
    }
    return t
}
function pm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function cD(e) {
    var t = wx()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && yx(n.ownerDocument.documentElement, n)) {
        if (r !== null && pm(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart" in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , s = Math.min(r.start, o);
                r = r.end === void 0 ? s : Math.min(r.end, o),
                !e.extend && s > r && (o = r,
                r = s,
                s = o),
                o = p1(n, s);
                var l = p1(n, r);
                o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var fD = Ci && "documentMode" in document && 11 >= document.documentMode
  , As = null
  , Vp = null
  , pl = null
  , Gp = !1;
function g1(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gp || As == null || As !== Gc(r) || (r = As,
    "selectionStart" in r && pm(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    pl && Tl(pl, r) || (pl = r,
    r = ef(Vp, "onSelect"),
    0 < r.length && (t = new fm("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = As)))
}
function fc(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ns = {
    animationend: fc("Animation", "AnimationEnd"),
    animationiteration: fc("Animation", "AnimationIteration"),
    animationstart: fc("Animation", "AnimationStart"),
    transitionend: fc("Transition", "TransitionEnd")
}
  , Uh = {}
  , _x = {};
Ci && (_x = document.createElement("div").style,
"AnimationEvent" in window || (delete Ns.animationend.animation,
delete Ns.animationiteration.animation,
delete Ns.animationstart.animation),
"TransitionEvent" in window || delete Ns.transitionend.transition);
function Lf(e) {
    if (Uh[e])
        return Uh[e];
    if (!Ns[e])
        return e;
    var t = Ns[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in _x)
            return Uh[e] = t[n];
    return e
}
var xx = Lf("animationend")
  , Sx = Lf("animationiteration")
  , bx = Lf("animationstart")
  , Ex = Lf("transitionend")
  , kx = new Map
  , m1 = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mo(e, t) {
    kx.set(e, t),
    Xo(t, [e])
}
for (var Yh = 0; Yh < m1.length; Yh++) {
    var Bh = m1[Yh]
      , dD = Bh.toLowerCase()
      , hD = Bh[0].toUpperCase() + Bh.slice(1);
    mo(dD, "on" + hD)
}
mo(xx, "onAnimationEnd");
mo(Sx, "onAnimationIteration");
mo(bx, "onAnimationStart");
mo("dblclick", "onDoubleClick");
mo("focusin", "onFocus");
mo("focusout", "onBlur");
mo(Ex, "onTransitionEnd");
na("onMouseEnter", ["mouseout", "mouseover"]);
na("onMouseLeave", ["mouseout", "mouseover"]);
na("onPointerEnter", ["pointerout", "pointerover"]);
na("onPointerLeave", ["pointerout", "pointerover"]);
Xo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Xo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Xo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Xo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Xo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var il = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , pD = new Set("cancel close invalid load scroll toggle".split(" ").concat(il));
function v1(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    d4(r, t, void 0, e),
    e.currentTarget = null
}
function Cx(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var c = r[l]
                      , f = c.instance
                      , h = c.currentTarget;
                    if (c = c.listener,
                    f !== s && o.isPropagationStopped())
                        break e;
                    v1(o, c, h),
                    s = f
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (c = r[l],
                    f = c.instance,
                    h = c.currentTarget,
                    c = c.listener,
                    f !== s && o.isPropagationStopped())
                        break e;
                    v1(o, c, h),
                    s = f
                }
        }
    }
    if (Qc)
        throw e = Up,
        Qc = !1,
        Up = null,
        e
}
function ft(e, t) {
    var n = t[Jp];
    n === void 0 && (n = t[Jp] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ox(t, e, 2, !1),
    n.add(r))
}
function Hh(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Ox(n, e, r, t)
}
var dc = "_reactListening" + Math.random().toString(36).slice(2);
function Pl(e) {
    if (!e[dc]) {
        e[dc] = !0,
        A_.forEach(function(n) {
            n !== "selectionchange" && (pD.has(n) || Hh(n, !1, e),
            Hh(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[dc] || (t[dc] = !0,
        Hh("selectionchange", !1, t))
    }
}
function Ox(e, t, n, r) {
    switch (cx(t)) {
    case 1:
        var o = T4;
        break;
    case 4:
        o = P4;
        break;
    default:
        o = um
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !zp || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Vh(e, t, n, r, o) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var c = r.stateNode.containerInfo;
                if (c === o || c.nodeType === 8 && c.parentNode === o)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var f = l.tag;
                        if ((f === 3 || f === 4) && (f = l.stateNode.containerInfo,
                        f === o || f.nodeType === 8 && f.parentNode === o))
                            return;
                        l = l.return
                    }
                for (; c !== null; ) {
                    if (l = Fo(c),
                    l === null)
                        return;
                    if (f = l.tag,
                    f === 5 || f === 6) {
                        r = s = l;
                        continue e
                    }
                    c = c.parentNode
                }
            }
            r = r.return
        }
    K_(function() {
        var h = s
          , v = om(n)
          , m = [];
        e: {
            var x = kx.get(e);
            if (x !== void 0) {
                var E = fm
                  , T = e;
                switch (e) {
                case "keypress":
                    if (Rc(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    E = B4;
                    break;
                case "focusin":
                    T = "focus",
                    E = Fh;
                    break;
                case "focusout":
                    T = "blur",
                    E = Fh;
                    break;
                case "beforeblur":
                case "afterblur":
                    E = Fh;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    E = o1;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    E = I4;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    E = G4;
                    break;
                case xx:
                case Sx:
                case bx:
                    E = N4;
                    break;
                case Ex:
                    E = Q4;
                    break;
                case "scroll":
                    E = R4;
                    break;
                case "wheel":
                    E = Z4;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    E = j4;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    E = a1
                }
                var N = (t & 4) !== 0
                  , B = !N && e === "scroll"
                  , P = N ? x !== null ? x + "Capture" : null : x;
                N = [];
                for (var O = h, D; O !== null; ) {
                    D = O;
                    var z = D.stateNode;
                    if (D.tag === 5 && z !== null && (D = z,
                    P !== null && (z = bl(O, P),
                    z != null && N.push(Rl(O, z, D)))),
                    B)
                        break;
                    O = O.return
                }
                0 < N.length && (x = new E(x,T,null,n,v),
                m.push({
                    event: x,
                    listeners: N
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (x = e === "mouseover" || e === "pointerover",
                E = e === "mouseout" || e === "pointerout",
                x && n !== Fp && (T = n.relatedTarget || n.fromElement) && (Fo(T) || T[Oi]))
                    break e;
                if ((E || x) && (x = v.window === v ? v : (x = v.ownerDocument) ? x.defaultView || x.parentWindow : window,
                E ? (T = n.relatedTarget || n.toElement,
                E = h,
                T = T ? Fo(T) : null,
                T !== null && (B = es(T),
                T !== B || T.tag !== 5 && T.tag !== 6) && (T = null)) : (E = null,
                T = h),
                E !== T)) {
                    if (N = o1,
                    z = "onMouseLeave",
                    P = "onMouseEnter",
                    O = "mouse",
                    (e === "pointerout" || e === "pointerover") && (N = a1,
                    z = "onPointerLeave",
                    P = "onPointerEnter",
                    O = "pointer"),
                    B = E == null ? x : Ls(E),
                    D = T == null ? x : Ls(T),
                    x = new N(z,O + "leave",E,n,v),
                    x.target = B,
                    x.relatedTarget = D,
                    z = null,
                    Fo(v) === h && (N = new N(P,O + "enter",T,n,v),
                    N.target = D,
                    N.relatedTarget = B,
                    z = N),
                    B = z,
                    E && T)
                        t: {
                            for (N = E,
                            P = T,
                            O = 0,
                            D = N; D; D = ks(D))
                                O++;
                            for (D = 0,
                            z = P; z; z = ks(z))
                                D++;
                            for (; 0 < O - D; )
                                N = ks(N),
                                O--;
                            for (; 0 < D - O; )
                                P = ks(P),
                                D--;
                            for (; O--; ) {
                                if (N === P || P !== null && N === P.alternate)
                                    break t;
                                N = ks(N),
                                P = ks(P)
                            }
                            N = null
                        }
                    else
                        N = null;
                    E !== null && y1(m, x, E, N, !1),
                    T !== null && B !== null && y1(m, B, T, N, !0)
                }
            }
            e: {
                if (x = h ? Ls(h) : window,
                E = x.nodeName && x.nodeName.toLowerCase(),
                E === "select" || E === "input" && x.type === "file")
                    var H = iD;
                else if (c1(x))
                    if (mx)
                        H = lD;
                    else {
                        H = sD;
                        var F = oD
                    }
                else
                    (E = x.nodeName) && E.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (H = aD);
                if (H && (H = H(e, h))) {
                    gx(m, H, n, v);
                    break e
                }
                F && F(e, x, h),
                e === "focusout" && (F = x._wrapperState) && F.controlled && x.type === "number" && Ap(x, "number", x.value)
            }
            switch (F = h ? Ls(h) : window,
            e) {
            case "focusin":
                (c1(F) || F.contentEditable === "true") && (As = F,
                Vp = h,
                pl = null);
                break;
            case "focusout":
                pl = Vp = As = null;
                break;
            case "mousedown":
                Gp = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Gp = !1,
                g1(m, n, v);
                break;
            case "selectionchange":
                if (fD)
                    break;
            case "keydown":
            case "keyup":
                g1(m, n, v)
            }
            var W;
            if (hm)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var G = "onCompositionStart";
                        break e;
                    case "compositionend":
                        G = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        G = "onCompositionUpdate";
                        break e
                    }
                    G = void 0
                }
            else
                Ms ? hx(e, n) && (G = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (G = "onCompositionStart");
            G && (dx && n.locale !== "ko" && (Ms || G !== "onCompositionStart" ? G === "onCompositionEnd" && Ms && (W = fx()) : (Ji = v,
            cm = "value" in Ji ? Ji.value : Ji.textContent,
            Ms = !0)),
            F = ef(h, G),
            0 < F.length && (G = new s1(G,e,null,n,v),
            m.push({
                event: G,
                listeners: F
            }),
            W ? G.data = W : (W = px(n),
            W !== null && (G.data = W)))),
            (W = X4 ? eD(e, n) : tD(e, n)) && (h = ef(h, "onBeforeInput"),
            0 < h.length && (v = new s1("onBeforeInput","beforeinput",null,n,v),
            m.push({
                event: v,
                listeners: h
            }),
            v.data = W))
        }
        Cx(m, t)
    })
}
function Rl(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ef(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , s = o.stateNode;
        o.tag === 5 && s !== null && (o = s,
        s = bl(e, n),
        s != null && r.unshift(Rl(e, s, o)),
        s = bl(e, t),
        s != null && r.push(Rl(e, s, o))),
        e = e.return
    }
    return r
}
function ks(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function y1(e, t, n, r, o) {
    for (var s = t._reactName, l = []; n !== null && n !== r; ) {
        var c = n
          , f = c.alternate
          , h = c.stateNode;
        if (f !== null && f === r)
            break;
        c.tag === 5 && h !== null && (c = h,
        o ? (f = bl(n, s),
        f != null && l.unshift(Rl(n, f, c))) : o || (f = bl(n, s),
        f != null && l.push(Rl(n, f, c)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var gD = /\r\n?/g
  , mD = /\u0000|\uFFFD/g;
function w1(e) {
    return (typeof e == "string" ? e : "" + e).replace(gD, `
`).replace(mD, "")
}
function hc(e, t, n) {
    if (t = w1(t),
    w1(e) !== t && n)
        throw Error(ne(425))
}
function tf() {}
var qp = null
  , Qp = null;
function Kp(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Zp = typeof setTimeout == "function" ? setTimeout : void 0
  , vD = typeof clearTimeout == "function" ? clearTimeout : void 0
  , _1 = typeof Promise == "function" ? Promise : void 0
  , yD = typeof queueMicrotask == "function" ? queueMicrotask : typeof _1 < "u" ? function(e) {
    return _1.resolve(null).then(e).catch(wD)
}
: Zp;
function wD(e) {
    setTimeout(function() {
        throw e
    })
}
function Gh(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Cl(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Cl(t)
}
function so(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function x1(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var pa = Math.random().toString(36).slice(2)
  , qr = "__reactFiber$" + pa
  , Dl = "__reactProps$" + pa
  , Oi = "__reactContainer$" + pa
  , Jp = "__reactEvents$" + pa
  , _D = "__reactListeners$" + pa
  , xD = "__reactHandles$" + pa;
function Fo(e) {
    var t = e[qr];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Oi] || n[qr]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = x1(e); e !== null; ) {
                    if (n = e[qr])
                        return n;
                    e = x1(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Vl(e) {
    return e = e[qr] || e[Oi],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ls(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(ne(33))
}
function jf(e) {
    return e[Dl] || null
}
var Xp = []
  , js = -1;
function vo(e) {
    return {
        current: e
    }
}
function dt(e) {
    0 > js || (e.current = Xp[js],
    Xp[js] = null,
    js--)
}
function lt(e, t) {
    js++,
    Xp[js] = e.current,
    e.current = t
}
var go = {}
  , hn = vo(go)
  , Mn = vo(!1)
  , Go = go;
function ra(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return go;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, s;
    for (s in n)
        o[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function An(e) {
    return e = e.childContextTypes,
    e != null
}
function nf() {
    dt(Mn),
    dt(hn)
}
function S1(e, t, n) {
    if (hn.current !== go)
        throw Error(ne(168));
    lt(hn, t),
    lt(Mn, n)
}
function Tx(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(ne(108, o4(e) || "Unknown", o));
    return Ct({}, n, r)
}
function rf(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || go,
    Go = hn.current,
    lt(hn, e),
    lt(Mn, Mn.current),
    !0
}
function b1(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(ne(169));
    n ? (e = Tx(e, t, Go),
    r.__reactInternalMemoizedMergedChildContext = e,
    dt(Mn),
    dt(hn),
    lt(hn, e)) : dt(Mn),
    lt(Mn, n)
}
var yi = null
  , $f = !1
  , qh = !1;
function Px(e) {
    yi === null ? yi = [e] : yi.push(e)
}
function SD(e) {
    $f = !0,
    Px(e)
}
function yo() {
    if (!qh && yi !== null) {
        qh = !0;
        var e = 0
          , t = Xe;
        try {
            var n = yi;
            for (Xe = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            yi = null,
            $f = !1
        } catch (o) {
            throw yi !== null && (yi = yi.slice(e + 1)),
            ex(sm, yo),
            o
        } finally {
            Xe = t,
            qh = !1
        }
    }
    return null
}
var $s = []
  , Fs = 0
  , of = null
  , sf = 0
  , cr = []
  , fr = 0
  , qo = null
  , wi = 1
  , _i = "";
function No(e, t) {
    $s[Fs++] = sf,
    $s[Fs++] = of,
    of = e,
    sf = t
}
function Rx(e, t, n) {
    cr[fr++] = wi,
    cr[fr++] = _i,
    cr[fr++] = qo,
    qo = e;
    var r = wi;
    e = _i;
    var o = 32 - Rr(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var s = 32 - Rr(t) + o;
    if (30 < s) {
        var l = o - o % 5;
        s = (r & (1 << l) - 1).toString(32),
        r >>= l,
        o -= l,
        wi = 1 << 32 - Rr(t) + o | n << o | r,
        _i = s + e
    } else
        wi = 1 << s | n << o | r,
        _i = e
}
function gm(e) {
    e.return !== null && (No(e, 1),
    Rx(e, 1, 0))
}
function mm(e) {
    for (; e === of; )
        of = $s[--Fs],
        $s[Fs] = null,
        sf = $s[--Fs],
        $s[Fs] = null;
    for (; e === qo; )
        qo = cr[--fr],
        cr[fr] = null,
        _i = cr[--fr],
        cr[fr] = null,
        wi = cr[--fr],
        cr[fr] = null
}
var Gn = null
  , Hn = null
  , _t = !1
  , Tr = null;
function Dx(e, t) {
    var n = hr(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function E1(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Gn = e,
        Hn = so(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Gn = e,
        Hn = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = qo !== null ? {
            id: wi,
            overflow: _i
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = hr(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Gn = e,
        Hn = null,
        !0) : !1;
    default:
        return !1
    }
}
function eg(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function tg(e) {
    if (_t) {
        var t = Hn;
        if (t) {
            var n = t;
            if (!E1(e, t)) {
                if (eg(e))
                    throw Error(ne(418));
                t = so(n.nextSibling);
                var r = Gn;
                t && E1(e, t) ? Dx(r, n) : (e.flags = e.flags & -4097 | 2,
                _t = !1,
                Gn = e)
            }
        } else {
            if (eg(e))
                throw Error(ne(418));
            e.flags = e.flags & -4097 | 2,
            _t = !1,
            Gn = e
        }
    }
}
function k1(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Gn = e
}
function pc(e) {
    if (e !== Gn)
        return !1;
    if (!_t)
        return k1(e),
        _t = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Kp(e.type, e.memoizedProps)),
    t && (t = Hn)) {
        if (eg(e))
            throw Ix(),
            Error(ne(418));
        for (; t; )
            Dx(e, t),
            t = so(t.nextSibling)
    }
    if (k1(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(ne(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Hn = so(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Hn = null
        }
    } else
        Hn = Gn ? so(e.stateNode.nextSibling) : null;
    return !0
}
function Ix() {
    for (var e = Hn; e; )
        e = so(e.nextSibling)
}
function ia() {
    Hn = Gn = null,
    _t = !1
}
function vm(e) {
    Tr === null ? Tr = [e] : Tr.push(e)
}
var bD = Di.ReactCurrentBatchConfig;
function qa(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(ne(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(ne(147, e));
            var o = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(l) {
                var c = o.refs;
                l === null ? delete c[s] : c[s] = l
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(ne(284));
        if (!n._owner)
            throw Error(ne(290, e))
    }
    return e
}
function gc(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(ne(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function C1(e) {
    var t = e._init;
    return t(e._payload)
}
function Mx(e) {
    function t(P, O) {
        if (e) {
            var D = P.deletions;
            D === null ? (P.deletions = [O],
            P.flags |= 16) : D.push(O)
        }
    }
    function n(P, O) {
        if (!e)
            return null;
        for (; O !== null; )
            t(P, O),
            O = O.sibling;
        return null
    }
    function r(P, O) {
        for (P = new Map; O !== null; )
            O.key !== null ? P.set(O.key, O) : P.set(O.index, O),
            O = O.sibling;
        return P
    }
    function o(P, O) {
        return P = co(P, O),
        P.index = 0,
        P.sibling = null,
        P
    }
    function s(P, O, D) {
        return P.index = D,
        e ? (D = P.alternate,
        D !== null ? (D = D.index,
        D < O ? (P.flags |= 2,
        O) : D) : (P.flags |= 2,
        O)) : (P.flags |= 1048576,
        O)
    }
    function l(P) {
        return e && P.alternate === null && (P.flags |= 2),
        P
    }
    function c(P, O, D, z) {
        return O === null || O.tag !== 6 ? (O = tp(D, P.mode, z),
        O.return = P,
        O) : (O = o(O, D),
        O.return = P,
        O)
    }
    function f(P, O, D, z) {
        var H = D.type;
        return H === Is ? v(P, O, D.props.children, z, D.key) : O !== null && (O.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Gi && C1(H) === O.type) ? (z = o(O, D.props),
        z.ref = qa(P, O, D),
        z.return = P,
        z) : (z = jc(D.type, D.key, D.props, null, P.mode, z),
        z.ref = qa(P, O, D),
        z.return = P,
        z)
    }
    function h(P, O, D, z) {
        return O === null || O.tag !== 4 || O.stateNode.containerInfo !== D.containerInfo || O.stateNode.implementation !== D.implementation ? (O = np(D, P.mode, z),
        O.return = P,
        O) : (O = o(O, D.children || []),
        O.return = P,
        O)
    }
    function v(P, O, D, z, H) {
        return O === null || O.tag !== 7 ? (O = Ho(D, P.mode, z, H),
        O.return = P,
        O) : (O = o(O, D),
        O.return = P,
        O)
    }
    function m(P, O, D) {
        if (typeof O == "string" && O !== "" || typeof O == "number")
            return O = tp("" + O, P.mode, D),
            O.return = P,
            O;
        if (typeof O == "object" && O !== null) {
            switch (O.$$typeof) {
            case ic:
                return D = jc(O.type, O.key, O.props, null, P.mode, D),
                D.ref = qa(P, null, O),
                D.return = P,
                D;
            case Ds:
                return O = np(O, P.mode, D),
                O.return = P,
                O;
            case Gi:
                var z = O._init;
                return m(P, z(O._payload), D)
            }
            if (nl(O) || Ya(O))
                return O = Ho(O, P.mode, D, null),
                O.return = P,
                O;
            gc(P, O)
        }
        return null
    }
    function x(P, O, D, z) {
        var H = O !== null ? O.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
            return H !== null ? null : c(P, O, "" + D, z);
        if (typeof D == "object" && D !== null) {
            switch (D.$$typeof) {
            case ic:
                return D.key === H ? f(P, O, D, z) : null;
            case Ds:
                return D.key === H ? h(P, O, D, z) : null;
            case Gi:
                return H = D._init,
                x(P, O, H(D._payload), z)
            }
            if (nl(D) || Ya(D))
                return H !== null ? null : v(P, O, D, z, null);
            gc(P, D)
        }
        return null
    }
    function E(P, O, D, z, H) {
        if (typeof z == "string" && z !== "" || typeof z == "number")
            return P = P.get(D) || null,
            c(O, P, "" + z, H);
        if (typeof z == "object" && z !== null) {
            switch (z.$$typeof) {
            case ic:
                return P = P.get(z.key === null ? D : z.key) || null,
                f(O, P, z, H);
            case Ds:
                return P = P.get(z.key === null ? D : z.key) || null,
                h(O, P, z, H);
            case Gi:
                var F = z._init;
                return E(P, O, D, F(z._payload), H)
            }
            if (nl(z) || Ya(z))
                return P = P.get(D) || null,
                v(O, P, z, H, null);
            gc(O, z)
        }
        return null
    }
    function T(P, O, D, z) {
        for (var H = null, F = null, W = O, G = O = 0, ye = null; W !== null && G < D.length; G++) {
            W.index > G ? (ye = W,
            W = null) : ye = W.sibling;
            var ge = x(P, W, D[G], z);
            if (ge === null) {
                W === null && (W = ye);
                break
            }
            e && W && ge.alternate === null && t(P, W),
            O = s(ge, O, G),
            F === null ? H = ge : F.sibling = ge,
            F = ge,
            W = ye
        }
        if (G === D.length)
            return n(P, W),
            _t && No(P, G),
            H;
        if (W === null) {
            for (; G < D.length; G++)
                W = m(P, D[G], z),
                W !== null && (O = s(W, O, G),
                F === null ? H = W : F.sibling = W,
                F = W);
            return _t && No(P, G),
            H
        }
        for (W = r(P, W); G < D.length; G++)
            ye = E(W, P, G, D[G], z),
            ye !== null && (e && ye.alternate !== null && W.delete(ye.key === null ? G : ye.key),
            O = s(ye, O, G),
            F === null ? H = ye : F.sibling = ye,
            F = ye);
        return e && W.forEach(function(Ce) {
            return t(P, Ce)
        }),
        _t && No(P, G),
        H
    }
    function N(P, O, D, z) {
        var H = Ya(D);
        if (typeof H != "function")
            throw Error(ne(150));
        if (D = H.call(D),
        D == null)
            throw Error(ne(151));
        for (var F = H = null, W = O, G = O = 0, ye = null, ge = D.next(); W !== null && !ge.done; G++,
        ge = D.next()) {
            W.index > G ? (ye = W,
            W = null) : ye = W.sibling;
            var Ce = x(P, W, ge.value, z);
            if (Ce === null) {
                W === null && (W = ye);
                break
            }
            e && W && Ce.alternate === null && t(P, W),
            O = s(Ce, O, G),
            F === null ? H = Ce : F.sibling = Ce,
            F = Ce,
            W = ye
        }
        if (ge.done)
            return n(P, W),
            _t && No(P, G),
            H;
        if (W === null) {
            for (; !ge.done; G++,
            ge = D.next())
                ge = m(P, ge.value, z),
                ge !== null && (O = s(ge, O, G),
                F === null ? H = ge : F.sibling = ge,
                F = ge);
            return _t && No(P, G),
            H
        }
        for (W = r(P, W); !ge.done; G++,
        ge = D.next())
            ge = E(W, P, G, ge.value, z),
            ge !== null && (e && ge.alternate !== null && W.delete(ge.key === null ? G : ge.key),
            O = s(ge, O, G),
            F === null ? H = ge : F.sibling = ge,
            F = ge);
        return e && W.forEach(function(st) {
            return t(P, st)
        }),
        _t && No(P, G),
        H
    }
    function B(P, O, D, z) {
        if (typeof D == "object" && D !== null && D.type === Is && D.key === null && (D = D.props.children),
        typeof D == "object" && D !== null) {
            switch (D.$$typeof) {
            case ic:
                e: {
                    for (var H = D.key, F = O; F !== null; ) {
                        if (F.key === H) {
                            if (H = D.type,
                            H === Is) {
                                if (F.tag === 7) {
                                    n(P, F.sibling),
                                    O = o(F, D.props.children),
                                    O.return = P,
                                    P = O;
                                    break e
                                }
                            } else if (F.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Gi && C1(H) === F.type) {
                                n(P, F.sibling),
                                O = o(F, D.props),
                                O.ref = qa(P, F, D),
                                O.return = P,
                                P = O;
                                break e
                            }
                            n(P, F);
                            break
                        } else
                            t(P, F);
                        F = F.sibling
                    }
                    D.type === Is ? (O = Ho(D.props.children, P.mode, z, D.key),
                    O.return = P,
                    P = O) : (z = jc(D.type, D.key, D.props, null, P.mode, z),
                    z.ref = qa(P, O, D),
                    z.return = P,
                    P = z)
                }
                return l(P);
            case Ds:
                e: {
                    for (F = D.key; O !== null; ) {
                        if (O.key === F)
                            if (O.tag === 4 && O.stateNode.containerInfo === D.containerInfo && O.stateNode.implementation === D.implementation) {
                                n(P, O.sibling),
                                O = o(O, D.children || []),
                                O.return = P,
                                P = O;
                                break e
                            } else {
                                n(P, O);
                                break
                            }
                        else
                            t(P, O);
                        O = O.sibling
                    }
                    O = np(D, P.mode, z),
                    O.return = P,
                    P = O
                }
                return l(P);
            case Gi:
                return F = D._init,
                B(P, O, F(D._payload), z)
            }
            if (nl(D))
                return T(P, O, D, z);
            if (Ya(D))
                return N(P, O, D, z);
            gc(P, D)
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? (D = "" + D,
        O !== null && O.tag === 6 ? (n(P, O.sibling),
        O = o(O, D),
        O.return = P,
        P = O) : (n(P, O),
        O = tp(D, P.mode, z),
        O.return = P,
        P = O),
        l(P)) : n(P, O)
    }
    return B
}
var oa = Mx(!0)
  , Ax = Mx(!1)
  , af = vo(null)
  , lf = null
  , Ws = null
  , ym = null;
function wm() {
    ym = Ws = lf = null
}
function _m(e) {
    var t = af.current;
    dt(af),
    e._currentValue = t
}
function ng(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Qs(e, t) {
    lf = e,
    ym = Ws = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (In = !0),
    e.firstContext = null)
}
function gr(e) {
    var t = e._currentValue;
    if (ym !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Ws === null) {
            if (lf === null)
                throw Error(ne(308));
            Ws = e,
            lf.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Ws = Ws.next = e;
    return t
}
var Wo = null;
function xm(e) {
    Wo === null ? Wo = [e] : Wo.push(e)
}
function Nx(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    xm(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Ti(e, r)
}
function Ti(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var qi = !1;
function Sm(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Lx(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function bi(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function ao(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    Be & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Ti(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    xm(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Ti(e, n)
}
function Dc(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        am(e, n)
    }
}
function O1(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? o = s = l : s = s.next = l,
                n = n.next
            } while (n !== null);
            s === null ? o = s = t : s = s.next = t
        } else
            o = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function uf(e, t, n, r) {
    var o = e.updateQueue;
    qi = !1;
    var s = o.firstBaseUpdate
      , l = o.lastBaseUpdate
      , c = o.shared.pending;
    if (c !== null) {
        o.shared.pending = null;
        var f = c
          , h = f.next;
        f.next = null,
        l === null ? s = h : l.next = h,
        l = f;
        var v = e.alternate;
        v !== null && (v = v.updateQueue,
        c = v.lastBaseUpdate,
        c !== l && (c === null ? v.firstBaseUpdate = h : c.next = h,
        v.lastBaseUpdate = f))
    }
    if (s !== null) {
        var m = o.baseState;
        l = 0,
        v = h = f = null,
        c = s;
        do {
            var x = c.lane
              , E = c.eventTime;
            if ((r & x) === x) {
                v !== null && (v = v.next = {
                    eventTime: E,
                    lane: 0,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                });
                e: {
                    var T = e
                      , N = c;
                    switch (x = t,
                    E = n,
                    N.tag) {
                    case 1:
                        if (T = N.payload,
                        typeof T == "function") {
                            m = T.call(E, m, x);
                            break e
                        }
                        m = T;
                        break e;
                    case 3:
                        T.flags = T.flags & -65537 | 128;
                    case 0:
                        if (T = N.payload,
                        x = typeof T == "function" ? T.call(E, m, x) : T,
                        x == null)
                            break e;
                        m = Ct({}, m, x);
                        break e;
                    case 2:
                        qi = !0
                    }
                }
                c.callback !== null && c.lane !== 0 && (e.flags |= 64,
                x = o.effects,
                x === null ? o.effects = [c] : x.push(c))
            } else
                E = {
                    eventTime: E,
                    lane: x,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                },
                v === null ? (h = v = E,
                f = m) : v = v.next = E,
                l |= x;
            if (c = c.next,
            c === null) {
                if (c = o.shared.pending,
                c === null)
                    break;
                x = c,
                c = x.next,
                x.next = null,
                o.lastBaseUpdate = x,
                o.shared.pending = null
            }
        } while (!0);
        if (v === null && (f = m),
        o.baseState = f,
        o.firstBaseUpdate = h,
        o.lastBaseUpdate = v,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                l |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            s === null && (o.shared.lanes = 0);
        Ko |= l,
        e.lanes = l,
        e.memoizedState = m
    }
}
function T1(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(ne(191, o));
                o.call(r)
            }
        }
}
var Gl = {}
  , Xr = vo(Gl)
  , Il = vo(Gl)
  , Ml = vo(Gl);
function zo(e) {
    if (e === Gl)
        throw Error(ne(174));
    return e
}
function bm(e, t) {
    switch (lt(Ml, t),
    lt(Il, e),
    lt(Xr, Gl),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Lp(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Lp(t, e)
    }
    dt(Xr),
    lt(Xr, t)
}
function sa() {
    dt(Xr),
    dt(Il),
    dt(Ml)
}
function jx(e) {
    zo(Ml.current);
    var t = zo(Xr.current)
      , n = Lp(t, e.type);
    t !== n && (lt(Il, e),
    lt(Xr, n))
}
function Em(e) {
    Il.current === e && (dt(Xr),
    dt(Il))
}
var Et = vo(0);
function cf(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Qh = [];
function km() {
    for (var e = 0; e < Qh.length; e++)
        Qh[e]._workInProgressVersionPrimary = null;
    Qh.length = 0
}
var Ic = Di.ReactCurrentDispatcher
  , Kh = Di.ReactCurrentBatchConfig
  , Qo = 0
  , kt = null
  , Yt = null
  , qt = null
  , ff = !1
  , gl = !1
  , Al = 0
  , ED = 0;
function ln() {
    throw Error(ne(321))
}
function Cm(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ir(e[n], t[n]))
            return !1;
    return !0
}
function Om(e, t, n, r, o, s) {
    if (Qo = s,
    kt = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Ic.current = e === null || e.memoizedState === null ? TD : PD,
    e = n(r, o),
    gl) {
        s = 0;
        do {
            if (gl = !1,
            Al = 0,
            25 <= s)
                throw Error(ne(301));
            s += 1,
            qt = Yt = null,
            t.updateQueue = null,
            Ic.current = RD,
            e = n(r, o)
        } while (gl)
    }
    if (Ic.current = df,
    t = Yt !== null && Yt.next !== null,
    Qo = 0,
    qt = Yt = kt = null,
    ff = !1,
    t)
        throw Error(ne(300));
    return e
}
function Tm() {
    var e = Al !== 0;
    return Al = 0,
    e
}
function Hr() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return qt === null ? kt.memoizedState = qt = e : qt = qt.next = e,
    qt
}
function mr() {
    if (Yt === null) {
        var e = kt.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Yt.next;
    var t = qt === null ? kt.memoizedState : qt.next;
    if (t !== null)
        qt = t,
        Yt = e;
    else {
        if (e === null)
            throw Error(ne(310));
        Yt = e,
        e = {
            memoizedState: Yt.memoizedState,
            baseState: Yt.baseState,
            baseQueue: Yt.baseQueue,
            queue: Yt.queue,
            next: null
        },
        qt === null ? kt.memoizedState = qt = e : qt = qt.next = e
    }
    return qt
}
function Nl(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Zh(e) {
    var t = mr()
      , n = t.queue;
    if (n === null)
        throw Error(ne(311));
    n.lastRenderedReducer = e;
    var r = Yt
      , o = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (o !== null) {
            var l = o.next;
            o.next = s.next,
            s.next = l
        }
        r.baseQueue = o = s,
        n.pending = null
    }
    if (o !== null) {
        s = o.next,
        r = r.baseState;
        var c = l = null
          , f = null
          , h = s;
        do {
            var v = h.lane;
            if ((Qo & v) === v)
                f !== null && (f = f.next = {
                    lane: 0,
                    action: h.action,
                    hasEagerState: h.hasEagerState,
                    eagerState: h.eagerState,
                    next: null
                }),
                r = h.hasEagerState ? h.eagerState : e(r, h.action);
            else {
                var m = {
                    lane: v,
                    action: h.action,
                    hasEagerState: h.hasEagerState,
                    eagerState: h.eagerState,
                    next: null
                };
                f === null ? (c = f = m,
                l = r) : f = f.next = m,
                kt.lanes |= v,
                Ko |= v
            }
            h = h.next
        } while (h !== null && h !== s);
        f === null ? l = r : f.next = c,
        Ir(r, t.memoizedState) || (In = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = f,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            s = o.lane,
            kt.lanes |= s,
            Ko |= s,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Jh(e) {
    var t = mr()
      , n = t.queue;
    if (n === null)
        throw Error(ne(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , s = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var l = o = o.next;
        do
            s = e(s, l.action),
            l = l.next;
        while (l !== o);
        Ir(s, t.memoizedState) || (In = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function $x() {}
function Fx(e, t) {
    var n = kt
      , r = mr()
      , o = t()
      , s = !Ir(r.memoizedState, o);
    if (s && (r.memoizedState = o,
    In = !0),
    r = r.queue,
    Pm(Ux.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || qt !== null && qt.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Ll(9, zx.bind(null, n, r, o, t), void 0, null),
        Qt === null)
            throw Error(ne(349));
        Qo & 30 || Wx(n, t, o)
    }
    return o
}
function Wx(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = kt.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    kt.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function zx(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Yx(t) && Bx(e)
}
function Ux(e, t, n) {
    return n(function() {
        Yx(t) && Bx(e)
    })
}
function Yx(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ir(e, n)
    } catch {
        return !0
    }
}
function Bx(e) {
    var t = Ti(e, 1);
    t !== null && Dr(t, e, 1, -1)
}
function P1(e) {
    var t = Hr();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nl,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = OD.bind(null, kt, e),
    [t.memoizedState, e]
}
function Ll(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = kt.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    kt.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Hx() {
    return mr().memoizedState
}
function Mc(e, t, n, r) {
    var o = Hr();
    kt.flags |= e,
    o.memoizedState = Ll(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ff(e, t, n, r) {
    var o = mr();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Yt !== null) {
        var l = Yt.memoizedState;
        if (s = l.destroy,
        r !== null && Cm(r, l.deps)) {
            o.memoizedState = Ll(t, n, s, r);
            return
        }
    }
    kt.flags |= e,
    o.memoizedState = Ll(1 | t, n, s, r)
}
function R1(e, t) {
    return Mc(8390656, 8, e, t)
}
function Pm(e, t) {
    return Ff(2048, 8, e, t)
}
function Vx(e, t) {
    return Ff(4, 2, e, t)
}
function Gx(e, t) {
    return Ff(4, 4, e, t)
}
function qx(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Qx(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ff(4, 4, qx.bind(null, t, e), n)
}
function Rm() {}
function Kx(e, t) {
    var n = mr();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Cm(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Zx(e, t) {
    var n = mr();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Cm(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Jx(e, t, n) {
    return Qo & 21 ? (Ir(n, t) || (n = rx(),
    kt.lanes |= n,
    Ko |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    In = !0),
    e.memoizedState = n)
}
function kD(e, t) {
    var n = Xe;
    Xe = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Kh.transition;
    Kh.transition = {};
    try {
        e(!1),
        t()
    } finally {
        Xe = n,
        Kh.transition = r
    }
}
function Xx() {
    return mr().memoizedState
}
function CD(e, t, n) {
    var r = uo(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    eS(e))
        tS(t, n);
    else if (n = Nx(e, t, n, r),
    n !== null) {
        var o = Sn();
        Dr(n, e, r, o),
        nS(n, t, r)
    }
}
function OD(e, t, n) {
    var r = uo(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (eS(e))
        tS(t, o);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var l = t.lastRenderedState
                  , c = s(l, n);
                if (o.hasEagerState = !0,
                o.eagerState = c,
                Ir(c, l)) {
                    var f = t.interleaved;
                    f === null ? (o.next = o,
                    xm(t)) : (o.next = f.next,
                    f.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = Nx(e, t, o, r),
        n !== null && (o = Sn(),
        Dr(n, e, r, o),
        nS(n, t, r))
    }
}
function eS(e) {
    var t = e.alternate;
    return e === kt || t !== null && t === kt
}
function tS(e, t) {
    gl = ff = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function nS(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        am(e, n)
    }
}
var df = {
    readContext: gr,
    useCallback: ln,
    useContext: ln,
    useEffect: ln,
    useImperativeHandle: ln,
    useInsertionEffect: ln,
    useLayoutEffect: ln,
    useMemo: ln,
    useReducer: ln,
    useRef: ln,
    useState: ln,
    useDebugValue: ln,
    useDeferredValue: ln,
    useTransition: ln,
    useMutableSource: ln,
    useSyncExternalStore: ln,
    useId: ln,
    unstable_isNewReconciler: !1
}
  , TD = {
    readContext: gr,
    useCallback: function(e, t) {
        return Hr().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: gr,
    useEffect: R1,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Mc(4194308, 4, qx.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Mc(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Mc(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Hr();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Hr();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = CD.bind(null, kt, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Hr();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: P1,
    useDebugValue: Rm,
    useDeferredValue: function(e) {
        return Hr().memoizedState = e
    },
    useTransition: function() {
        var e = P1(!1)
          , t = e[0];
        return e = kD.bind(null, e[1]),
        Hr().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = kt
          , o = Hr();
        if (_t) {
            if (n === void 0)
                throw Error(ne(407));
            n = n()
        } else {
            if (n = t(),
            Qt === null)
                throw Error(ne(349));
            Qo & 30 || Wx(r, t, n)
        }
        o.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return o.queue = s,
        R1(Ux.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        Ll(9, zx.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Hr()
          , t = Qt.identifierPrefix;
        if (_t) {
            var n = _i
              , r = wi;
            n = (r & ~(1 << 32 - Rr(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Al++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = ED++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , PD = {
    readContext: gr,
    useCallback: Kx,
    useContext: gr,
    useEffect: Pm,
    useImperativeHandle: Qx,
    useInsertionEffect: Vx,
    useLayoutEffect: Gx,
    useMemo: Zx,
    useReducer: Zh,
    useRef: Hx,
    useState: function() {
        return Zh(Nl)
    },
    useDebugValue: Rm,
    useDeferredValue: function(e) {
        var t = mr();
        return Jx(t, Yt.memoizedState, e)
    },
    useTransition: function() {
        var e = Zh(Nl)[0]
          , t = mr().memoizedState;
        return [e, t]
    },
    useMutableSource: $x,
    useSyncExternalStore: Fx,
    useId: Xx,
    unstable_isNewReconciler: !1
}
  , RD = {
    readContext: gr,
    useCallback: Kx,
    useContext: gr,
    useEffect: Pm,
    useImperativeHandle: Qx,
    useInsertionEffect: Vx,
    useLayoutEffect: Gx,
    useMemo: Zx,
    useReducer: Jh,
    useRef: Hx,
    useState: function() {
        return Jh(Nl)
    },
    useDebugValue: Rm,
    useDeferredValue: function(e) {
        var t = mr();
        return Yt === null ? t.memoizedState = e : Jx(t, Yt.memoizedState, e)
    },
    useTransition: function() {
        var e = Jh(Nl)[0]
          , t = mr().memoizedState;
        return [e, t]
    },
    useMutableSource: $x,
    useSyncExternalStore: Fx,
    useId: Xx,
    unstable_isNewReconciler: !1
};
function Cr(e, t) {
    if (e && e.defaultProps) {
        t = Ct({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function rg(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Ct({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Wf = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? es(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Sn()
          , o = uo(e)
          , s = bi(r, o);
        s.payload = t,
        n != null && (s.callback = n),
        t = ao(e, s, o),
        t !== null && (Dr(t, e, o, r),
        Dc(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Sn()
          , o = uo(e)
          , s = bi(r, o);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = ao(e, s, o),
        t !== null && (Dr(t, e, o, r),
        Dc(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Sn()
          , r = uo(e)
          , o = bi(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = ao(e, o, r),
        t !== null && (Dr(t, e, r, n),
        Dc(t, e, r))
    }
};
function D1(e, t, n, r, o, s, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, l) : t.prototype && t.prototype.isPureReactComponent ? !Tl(n, r) || !Tl(o, s) : !0
}
function rS(e, t, n) {
    var r = !1
      , o = go
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = gr(s) : (o = An(t) ? Go : hn.current,
    r = t.contextTypes,
    s = (r = r != null) ? ra(e, o) : go),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Wf,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function I1(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Wf.enqueueReplaceState(t, t.state, null)
}
function ig(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    Sm(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? o.context = gr(s) : (s = An(t) ? Go : hn.current,
    o.context = ra(e, s)),
    o.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (rg(e, t, s, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && Wf.enqueueReplaceState(o, o.state, null),
    uf(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function aa(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += i4(r),
            r = r.return;
        while (r);
        var o = n
    } catch (s) {
        o = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function Xh(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function og(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var DD = typeof WeakMap == "function" ? WeakMap : Map;
function iS(e, t, n) {
    n = bi(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        pf || (pf = !0,
        gg = r),
        og(e, t)
    }
    ,
    n
}
function oS(e, t, n) {
    n = bi(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            og(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        og(e, t),
        typeof r != "function" && (lo === null ? lo = new Set([this]) : lo.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function M1(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new DD;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = HD.bind(null, e, t, n),
    t.then(e, e))
}
function A1(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function N1(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = bi(-1, 1),
    t.tag = 2,
    ao(n, t, 1))),
    n.lanes |= 1),
    e)
}
var ID = Di.ReactCurrentOwner
  , In = !1;
function xn(e, t, n, r) {
    t.child = e === null ? Ax(t, null, n, r) : oa(t, e.child, n, r)
}
function L1(e, t, n, r, o) {
    n = n.render;
    var s = t.ref;
    return Qs(t, o),
    r = Om(e, t, n, r, s, o),
    n = Tm(),
    e !== null && !In ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Pi(e, t, o)) : (_t && n && gm(t),
    t.flags |= 1,
    xn(e, t, r, o),
    t.child)
}
function j1(e, t, n, r, o) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !$m(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        sS(e, t, s, r, o)) : (e = jc(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & o)) {
        var l = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Tl,
        n(l, r) && e.ref === t.ref)
            return Pi(e, t, o)
    }
    return t.flags |= 1,
    e = co(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function sS(e, t, n, r, o) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Tl(s, r) && e.ref === t.ref)
            if (In = !1,
            t.pendingProps = r = s,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (In = !0);
            else
                return t.lanes = e.lanes,
                Pi(e, t, o)
    }
    return sg(e, t, n, r, o)
}
function aS(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            lt(Us, Yn),
            Yn |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                lt(Us, Yn),
                Yn |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            lt(Us, Yn),
            Yn |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        lt(Us, Yn),
        Yn |= r;
    return xn(e, t, o, n),
    t.child
}
function lS(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function sg(e, t, n, r, o) {
    var s = An(n) ? Go : hn.current;
    return s = ra(t, s),
    Qs(t, o),
    n = Om(e, t, n, r, s, o),
    r = Tm(),
    e !== null && !In ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Pi(e, t, o)) : (_t && r && gm(t),
    t.flags |= 1,
    xn(e, t, n, o),
    t.child)
}
function $1(e, t, n, r, o) {
    if (An(n)) {
        var s = !0;
        rf(t)
    } else
        s = !1;
    if (Qs(t, o),
    t.stateNode === null)
        Ac(e, t),
        rS(t, n, r),
        ig(t, n, r, o),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , c = t.memoizedProps;
        l.props = c;
        var f = l.context
          , h = n.contextType;
        typeof h == "object" && h !== null ? h = gr(h) : (h = An(n) ? Go : hn.current,
        h = ra(t, h));
        var v = n.getDerivedStateFromProps
          , m = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (c !== r || f !== h) && I1(t, l, r, h),
        qi = !1;
        var x = t.memoizedState;
        l.state = x,
        uf(t, r, l, o),
        f = t.memoizedState,
        c !== r || x !== f || Mn.current || qi ? (typeof v == "function" && (rg(t, n, v, r),
        f = t.memoizedState),
        (c = qi || D1(t, n, c, r, x, f, h)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = f),
        l.props = r,
        l.state = f,
        l.context = h,
        r = c) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        Lx(e, t),
        c = t.memoizedProps,
        h = t.type === t.elementType ? c : Cr(t.type, c),
        l.props = h,
        m = t.pendingProps,
        x = l.context,
        f = n.contextType,
        typeof f == "object" && f !== null ? f = gr(f) : (f = An(n) ? Go : hn.current,
        f = ra(t, f));
        var E = n.getDerivedStateFromProps;
        (v = typeof E == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (c !== m || x !== f) && I1(t, l, r, f),
        qi = !1,
        x = t.memoizedState,
        l.state = x,
        uf(t, r, l, o);
        var T = t.memoizedState;
        c !== m || x !== T || Mn.current || qi ? (typeof E == "function" && (rg(t, n, E, r),
        T = t.memoizedState),
        (h = qi || D1(t, n, h, r, x, T, f) || !1) ? (v || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, T, f),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, T, f)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = T),
        l.props = r,
        l.state = T,
        l.context = f,
        r = h) : (typeof l.componentDidUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return ag(e, t, n, r, s, o)
}
function ag(e, t, n, r, o, s) {
    lS(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return o && b1(t, n, !1),
        Pi(e, t, s);
    r = t.stateNode,
    ID.current = t;
    var c = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = oa(t, e.child, null, s),
    t.child = oa(t, null, c, s)) : xn(e, t, c, s),
    t.memoizedState = r.state,
    o && b1(t, n, !0),
    t.child
}
function uS(e) {
    var t = e.stateNode;
    t.pendingContext ? S1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && S1(e, t.context, !1),
    bm(e, t.containerInfo)
}
function F1(e, t, n, r, o) {
    return ia(),
    vm(o),
    t.flags |= 256,
    xn(e, t, n, r),
    t.child
}
var lg = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function ug(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function cS(e, t, n) {
    var r = t.pendingProps, o = Et.current, s = !1, l = (t.flags & 128) !== 0, c;
    if ((c = l) || (c = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    c ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    lt(Et, o & 1),
    e === null)
        return tg(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = l) : s = Yf(l, r, 0, null),
        e = Ho(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = ug(n),
        t.memoizedState = lg,
        e) : Dm(t, l));
    if (o = e.memoizedState,
    o !== null && (c = o.dehydrated,
    c !== null))
        return MD(e, t, l, r, c, o, n);
    if (s) {
        s = r.fallback,
        l = t.mode,
        o = e.child,
        c = o.sibling;
        var f = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = f,
        t.deletions = null) : (r = co(o, f),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        c !== null ? s = co(c, s) : (s = Ho(s, l, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        l = e.child.memoizedState,
        l = l === null ? ug(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        s.memoizedState = l,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = lg,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = co(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Dm(e, t) {
    return t = Yf({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function mc(e, t, n, r) {
    return r !== null && vm(r),
    oa(t, e.child, null, n),
    e = Dm(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function MD(e, t, n, r, o, s, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Xh(Error(ne(422))),
        mc(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        o = t.mode,
        r = Yf({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        s = Ho(s, o, l, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && oa(t, e.child, null, l),
        t.child.memoizedState = ug(l),
        t.memoizedState = lg,
        s);
    if (!(t.mode & 1))
        return mc(e, t, l, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var c = r.dgst;
        return r = c,
        s = Error(ne(419)),
        r = Xh(s, r, void 0),
        mc(e, t, l, r)
    }
    if (c = (l & e.childLanes) !== 0,
    In || c) {
        if (r = Qt,
        r !== null) {
            switch (l & -l) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | l) ? 0 : o,
            o !== 0 && o !== s.retryLane && (s.retryLane = o,
            Ti(e, o),
            Dr(r, e, o, -1))
        }
        return jm(),
        r = Xh(Error(ne(421))),
        mc(e, t, l, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = VD.bind(null, e),
    o._reactRetry = t,
    null) : (e = s.treeContext,
    Hn = so(o.nextSibling),
    Gn = t,
    _t = !0,
    Tr = null,
    e !== null && (cr[fr++] = wi,
    cr[fr++] = _i,
    cr[fr++] = qo,
    wi = e.id,
    _i = e.overflow,
    qo = t),
    t = Dm(t, r.children),
    t.flags |= 4096,
    t)
}
function W1(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    ng(e.return, t, n)
}
function ep(e, t, n, r, o) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = o)
}
function fS(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , s = r.tail;
    if (xn(e, t, r.children, n),
    r = Et.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && W1(e, n, t);
                else if (e.tag === 19)
                    W1(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (lt(Et, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && cf(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            ep(t, !1, o, n, s);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && cf(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            ep(t, !0, n, null, s);
            break;
        case "together":
            ep(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ac(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Pi(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Ko |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(ne(153));
    if (t.child !== null) {
        for (e = t.child,
        n = co(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = co(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function AD(e, t, n) {
    switch (t.tag) {
    case 3:
        uS(t),
        ia();
        break;
    case 5:
        jx(t);
        break;
    case 1:
        An(t.type) && rf(t);
        break;
    case 4:
        bm(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        lt(af, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (lt(Et, Et.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? cS(e, t, n) : (lt(Et, Et.current & 1),
            e = Pi(e, t, n),
            e !== null ? e.sibling : null);
        lt(Et, Et.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return fS(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        lt(Et, Et.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        aS(e, t, n)
    }
    return Pi(e, t, n)
}
var dS, cg, hS, pS;
dS = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
cg = function() {}
;
hS = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        zo(Xr.current);
        var s = null;
        switch (n) {
        case "input":
            o = Ip(e, o),
            r = Ip(e, r),
            s = [];
            break;
        case "select":
            o = Ct({}, o, {
                value: void 0
            }),
            r = Ct({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            o = Np(e, o),
            r = Np(e, r),
            s = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = tf)
        }
        jp(n, r);
        var l;
        n = null;
        for (h in o)
            if (!r.hasOwnProperty(h) && o.hasOwnProperty(h) && o[h] != null)
                if (h === "style") {
                    var c = o[h];
                    for (l in c)
                        c.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (xl.hasOwnProperty(h) ? s || (s = []) : (s = s || []).push(h, null));
        for (h in r) {
            var f = r[h];
            if (c = o != null ? o[h] : void 0,
            r.hasOwnProperty(h) && f !== c && (f != null || c != null))
                if (h === "style")
                    if (c) {
                        for (l in c)
                            !c.hasOwnProperty(l) || f && f.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in f)
                            f.hasOwnProperty(l) && c[l] !== f[l] && (n || (n = {}),
                            n[l] = f[l])
                    } else
                        n || (s || (s = []),
                        s.push(h, n)),
                        n = f;
                else
                    h === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0,
                    c = c ? c.__html : void 0,
                    f != null && c !== f && (s = s || []).push(h, f)) : h === "children" ? typeof f != "string" && typeof f != "number" || (s = s || []).push(h, "" + f) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (xl.hasOwnProperty(h) ? (f != null && h === "onScroll" && ft("scroll", e),
                    s || c === f || (s = [])) : (s = s || []).push(h, f))
        }
        n && (s = s || []).push("style", n);
        var h = s;
        (t.updateQueue = h) && (t.flags |= 4)
    }
}
;
pS = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Qa(e, t) {
    if (!_t)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function un(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function ND(e, t, n) {
    var r = t.pendingProps;
    switch (mm(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return un(t),
        null;
    case 1:
        return An(t.type) && nf(),
        un(t),
        null;
    case 3:
        return r = t.stateNode,
        sa(),
        dt(Mn),
        dt(hn),
        km(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (pc(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Tr !== null && (yg(Tr),
        Tr = null))),
        cg(e, t),
        un(t),
        null;
    case 5:
        Em(t);
        var o = zo(Ml.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            hS(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(ne(166));
                return un(t),
                null
            }
            if (e = zo(Xr.current),
            pc(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[qr] = t,
                r[Dl] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ft("cancel", r),
                    ft("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ft("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < il.length; o++)
                        ft(il[o], r);
                    break;
                case "source":
                    ft("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ft("error", r),
                    ft("load", r);
                    break;
                case "details":
                    ft("toggle", r);
                    break;
                case "input":
                    Qy(r, s),
                    ft("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    ft("invalid", r);
                    break;
                case "textarea":
                    Zy(r, s),
                    ft("invalid", r)
                }
                jp(n, s),
                o = null;
                for (var l in s)
                    if (s.hasOwnProperty(l)) {
                        var c = s[l];
                        l === "children" ? typeof c == "string" ? r.textContent !== c && (s.suppressHydrationWarning !== !0 && hc(r.textContent, c, e),
                        o = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (s.suppressHydrationWarning !== !0 && hc(r.textContent, c, e),
                        o = ["children", "" + c]) : xl.hasOwnProperty(l) && c != null && l === "onScroll" && ft("scroll", r)
                    }
                switch (n) {
                case "input":
                    oc(r),
                    Ky(r, s, !0);
                    break;
                case "textarea":
                    oc(r),
                    Jy(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = tf)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = U_(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[qr] = t,
                e[Dl] = r,
                dS(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = $p(n, r),
                    n) {
                    case "dialog":
                        ft("cancel", e),
                        ft("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ft("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < il.length; o++)
                            ft(il[o], e);
                        o = r;
                        break;
                    case "source":
                        ft("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ft("error", e),
                        ft("load", e),
                        o = r;
                        break;
                    case "details":
                        ft("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Qy(e, r),
                        o = Ip(e, r),
                        ft("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = Ct({}, r, {
                            value: void 0
                        }),
                        ft("invalid", e);
                        break;
                    case "textarea":
                        Zy(e, r),
                        o = Np(e, r),
                        ft("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    jp(n, o),
                    c = o;
                    for (s in c)
                        if (c.hasOwnProperty(s)) {
                            var f = c[s];
                            s === "style" ? H_(e, f) : s === "dangerouslySetInnerHTML" ? (f = f ? f.__html : void 0,
                            f != null && Y_(e, f)) : s === "children" ? typeof f == "string" ? (n !== "textarea" || f !== "") && Sl(e, f) : typeof f == "number" && Sl(e, "" + f) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (xl.hasOwnProperty(s) ? f != null && s === "onScroll" && ft("scroll", e) : f != null && tm(e, s, f, l))
                        }
                    switch (n) {
                    case "input":
                        oc(e),
                        Ky(e, r, !1);
                        break;
                    case "textarea":
                        oc(e),
                        Jy(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + po(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Hs(e, !!r.multiple, s, !1) : r.defaultValue != null && Hs(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = tf)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return un(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            pS(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(ne(166));
            if (n = zo(Ml.current),
            zo(Xr.current),
            pc(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[qr] = t,
                (s = r.nodeValue !== n) && (e = Gn,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        hc(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && hc(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[qr] = t,
                t.stateNode = r
        }
        return un(t),
        null;
    case 13:
        if (dt(Et),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (_t && Hn !== null && t.mode & 1 && !(t.flags & 128))
                Ix(),
                ia(),
                t.flags |= 98560,
                s = !1;
            else if (s = pc(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(ne(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(ne(317));
                    s[qr] = t
                } else
                    ia(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                un(t),
                s = !1
            } else
                Tr !== null && (yg(Tr),
                Tr = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || Et.current & 1 ? Ht === 0 && (Ht = 3) : jm())),
        t.updateQueue !== null && (t.flags |= 4),
        un(t),
        null);
    case 4:
        return sa(),
        cg(e, t),
        e === null && Pl(t.stateNode.containerInfo),
        un(t),
        null;
    case 10:
        return _m(t.type._context),
        un(t),
        null;
    case 17:
        return An(t.type) && nf(),
        un(t),
        null;
    case 19:
        if (dt(Et),
        s = t.memoizedState,
        s === null)
            return un(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = s.rendering,
        l === null)
            if (r)
                Qa(s, !1);
            else {
                if (Ht !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = cf(e),
                        l !== null) {
                            for (t.flags |= 128,
                            Qa(s, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                l = s.alternate,
                                l === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = l.childLanes,
                                s.lanes = l.lanes,
                                s.child = l.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = l.memoizedProps,
                                s.memoizedState = l.memoizedState,
                                s.updateQueue = l.updateQueue,
                                s.type = l.type,
                                e = l.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return lt(Et, Et.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && Nt() > la && (t.flags |= 128,
                r = !0,
                Qa(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = cf(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Qa(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !l.alternate && !_t)
                        return un(t),
                        null
                } else
                    2 * Nt() - s.renderingStartTime > la && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Qa(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = s.last,
            n !== null ? n.sibling = l : t.child = l,
            s.last = l)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = Nt(),
        t.sibling = null,
        n = Et.current,
        lt(Et, r ? n & 1 | 2 : n & 1),
        t) : (un(t),
        null);
    case 22:
    case 23:
        return Lm(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Yn & 1073741824 && (un(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : un(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(ne(156, t.tag))
}
function LD(e, t) {
    switch (mm(t),
    t.tag) {
    case 1:
        return An(t.type) && nf(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return sa(),
        dt(Mn),
        dt(hn),
        km(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Em(t),
        null;
    case 13:
        if (dt(Et),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(ne(340));
            ia()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return dt(Et),
        null;
    case 4:
        return sa(),
        null;
    case 10:
        return _m(t.type._context),
        null;
    case 22:
    case 23:
        return Lm(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var vc = !1
  , cn = !1
  , jD = typeof WeakSet == "function" ? WeakSet : Set
  , me = null;
function zs(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Pt(e, t, r)
            }
        else
            n.current = null
}
function fg(e, t, n) {
    try {
        n()
    } catch (r) {
        Pt(e, t, r)
    }
}
var z1 = !1;
function $D(e, t) {
    if (qp = Jc,
    e = wx(),
    pm(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , c = -1
                      , f = -1
                      , h = 0
                      , v = 0
                      , m = e
                      , x = null;
                    t: for (; ; ) {
                        for (var E; m !== n || o !== 0 && m.nodeType !== 3 || (c = l + o),
                        m !== s || r !== 0 && m.nodeType !== 3 || (f = l + r),
                        m.nodeType === 3 && (l += m.nodeValue.length),
                        (E = m.firstChild) !== null; )
                            x = m,
                            m = E;
                        for (; ; ) {
                            if (m === e)
                                break t;
                            if (x === n && ++h === o && (c = l),
                            x === s && ++v === r && (f = l),
                            (E = m.nextSibling) !== null)
                                break;
                            m = x,
                            x = m.parentNode
                        }
                        m = E
                    }
                    n = c === -1 || f === -1 ? null : {
                        start: c,
                        end: f
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Qp = {
        focusedElem: e,
        selectionRange: n
    },
    Jc = !1,
    me = t; me !== null; )
        if (t = me,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            me = e;
        else
            for (; me !== null; ) {
                t = me;
                try {
                    var T = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (T !== null) {
                                var N = T.memoizedProps
                                  , B = T.memoizedState
                                  , P = t.stateNode
                                  , O = P.getSnapshotBeforeUpdate(t.elementType === t.type ? N : Cr(t.type, N), B);
                                P.__reactInternalSnapshotBeforeUpdate = O
                            }
                            break;
                        case 3:
                            var D = t.stateNode.containerInfo;
                            D.nodeType === 1 ? D.textContent = "" : D.nodeType === 9 && D.documentElement && D.removeChild(D.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(ne(163))
                        }
                } catch (z) {
                    Pt(t, t.return, z)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    me = e;
                    break
                }
                me = t.return
            }
    return T = z1,
    z1 = !1,
    T
}
function ml(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var s = o.destroy;
                o.destroy = void 0,
                s !== void 0 && fg(t, n, s)
            }
            o = o.next
        } while (o !== r)
    }
}
function zf(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function dg(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function gS(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    gS(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[qr],
    delete t[Dl],
    delete t[Jp],
    delete t[_D],
    delete t[xD])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function mS(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function U1(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || mS(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function hg(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = tf));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (hg(e, t, n),
        e = e.sibling; e !== null; )
            hg(e, t, n),
            e = e.sibling
}
function pg(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (pg(e, t, n),
        e = e.sibling; e !== null; )
            pg(e, t, n),
            e = e.sibling
}
var tn = null
  , Or = !1;
function Vi(e, t, n) {
    for (n = n.child; n !== null; )
        vS(e, t, n),
        n = n.sibling
}
function vS(e, t, n) {
    if (Jr && typeof Jr.onCommitFiberUnmount == "function")
        try {
            Jr.onCommitFiberUnmount(Mf, n)
        } catch {}
    switch (n.tag) {
    case 5:
        cn || zs(n, t);
    case 6:
        var r = tn
          , o = Or;
        tn = null,
        Vi(e, t, n),
        tn = r,
        Or = o,
        tn !== null && (Or ? (e = tn,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : tn.removeChild(n.stateNode));
        break;
    case 18:
        tn !== null && (Or ? (e = tn,
        n = n.stateNode,
        e.nodeType === 8 ? Gh(e.parentNode, n) : e.nodeType === 1 && Gh(e, n),
        Cl(e)) : Gh(tn, n.stateNode));
        break;
    case 4:
        r = tn,
        o = Or,
        tn = n.stateNode.containerInfo,
        Or = !0,
        Vi(e, t, n),
        tn = r,
        Or = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!cn && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var s = o
                  , l = s.destroy;
                s = s.tag,
                l !== void 0 && (s & 2 || s & 4) && fg(n, t, l),
                o = o.next
            } while (o !== r)
        }
        Vi(e, t, n);
        break;
    case 1:
        if (!cn && (zs(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (c) {
                Pt(n, t, c)
            }
        Vi(e, t, n);
        break;
    case 21:
        Vi(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (cn = (r = cn) || n.memoizedState !== null,
        Vi(e, t, n),
        cn = r) : Vi(e, t, n);
        break;
    default:
        Vi(e, t, n)
    }
}
function Y1(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new jD),
        t.forEach(function(r) {
            var o = GD.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function kr(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var s = e
                  , l = t
                  , c = l;
                e: for (; c !== null; ) {
                    switch (c.tag) {
                    case 5:
                        tn = c.stateNode,
                        Or = !1;
                        break e;
                    case 3:
                        tn = c.stateNode.containerInfo,
                        Or = !0;
                        break e;
                    case 4:
                        tn = c.stateNode.containerInfo,
                        Or = !0;
                        break e
                    }
                    c = c.return
                }
                if (tn === null)
                    throw Error(ne(160));
                vS(s, l, o),
                tn = null,
                Or = !1;
                var f = o.alternate;
                f !== null && (f.return = null),
                o.return = null
            } catch (h) {
                Pt(o, t, h)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            yS(t, e),
            t = t.sibling
}
function yS(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (kr(t, e),
        Br(e),
        r & 4) {
            try {
                ml(3, e, e.return),
                zf(3, e)
            } catch (N) {
                Pt(e, e.return, N)
            }
            try {
                ml(5, e, e.return)
            } catch (N) {
                Pt(e, e.return, N)
            }
        }
        break;
    case 1:
        kr(t, e),
        Br(e),
        r & 512 && n !== null && zs(n, n.return);
        break;
    case 5:
        if (kr(t, e),
        Br(e),
        r & 512 && n !== null && zs(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                Sl(o, "")
            } catch (N) {
                Pt(e, e.return, N)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var s = e.memoizedProps
              , l = n !== null ? n.memoizedProps : s
              , c = e.type
              , f = e.updateQueue;
            if (e.updateQueue = null,
            f !== null)
                try {
                    c === "input" && s.type === "radio" && s.name != null && W_(o, s),
                    $p(c, l);
                    var h = $p(c, s);
                    for (l = 0; l < f.length; l += 2) {
                        var v = f[l]
                          , m = f[l + 1];
                        v === "style" ? H_(o, m) : v === "dangerouslySetInnerHTML" ? Y_(o, m) : v === "children" ? Sl(o, m) : tm(o, v, m, h)
                    }
                    switch (c) {
                    case "input":
                        Mp(o, s);
                        break;
                    case "textarea":
                        z_(o, s);
                        break;
                    case "select":
                        var x = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!s.multiple;
                        var E = s.value;
                        E != null ? Hs(o, !!s.multiple, E, !1) : x !== !!s.multiple && (s.defaultValue != null ? Hs(o, !!s.multiple, s.defaultValue, !0) : Hs(o, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    o[Dl] = s
                } catch (N) {
                    Pt(e, e.return, N)
                }
        }
        break;
    case 6:
        if (kr(t, e),
        Br(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(ne(162));
            o = e.stateNode,
            s = e.memoizedProps;
            try {
                o.nodeValue = s
            } catch (N) {
                Pt(e, e.return, N)
            }
        }
        break;
    case 3:
        if (kr(t, e),
        Br(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Cl(t.containerInfo)
            } catch (N) {
                Pt(e, e.return, N)
            }
        break;
    case 4:
        kr(t, e),
        Br(e);
        break;
    case 13:
        kr(t, e),
        Br(e),
        o = e.child,
        o.flags & 8192 && (s = o.memoizedState !== null,
        o.stateNode.isHidden = s,
        !s || o.alternate !== null && o.alternate.memoizedState !== null || (Am = Nt())),
        r & 4 && Y1(e);
        break;
    case 22:
        if (v = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (cn = (h = cn) || v,
        kr(t, e),
        cn = h) : kr(t, e),
        Br(e),
        r & 8192) {
            if (h = e.memoizedState !== null,
            (e.stateNode.isHidden = h) && !v && e.mode & 1)
                for (me = e,
                v = e.child; v !== null; ) {
                    for (m = me = v; me !== null; ) {
                        switch (x = me,
                        E = x.child,
                        x.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            ml(4, x, x.return);
                            break;
                        case 1:
                            zs(x, x.return);
                            var T = x.stateNode;
                            if (typeof T.componentWillUnmount == "function") {
                                r = x,
                                n = x.return;
                                try {
                                    t = r,
                                    T.props = t.memoizedProps,
                                    T.state = t.memoizedState,
                                    T.componentWillUnmount()
                                } catch (N) {
                                    Pt(r, n, N)
                                }
                            }
                            break;
                        case 5:
                            zs(x, x.return);
                            break;
                        case 22:
                            if (x.memoizedState !== null) {
                                H1(m);
                                continue
                            }
                        }
                        E !== null ? (E.return = x,
                        me = E) : H1(m)
                    }
                    v = v.sibling
                }
            e: for (v = null,
            m = e; ; ) {
                if (m.tag === 5) {
                    if (v === null) {
                        v = m;
                        try {
                            o = m.stateNode,
                            h ? (s = o.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (c = m.stateNode,
                            f = m.memoizedProps.style,
                            l = f != null && f.hasOwnProperty("display") ? f.display : null,
                            c.style.display = B_("display", l))
                        } catch (N) {
                            Pt(e, e.return, N)
                        }
                    }
                } else if (m.tag === 6) {
                    if (v === null)
                        try {
                            m.stateNode.nodeValue = h ? "" : m.memoizedProps
                        } catch (N) {
                            Pt(e, e.return, N)
                        }
                } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                    m.child.return = m,
                    m = m.child;
                    continue
                }
                if (m === e)
                    break e;
                for (; m.sibling === null; ) {
                    if (m.return === null || m.return === e)
                        break e;
                    v === m && (v = null),
                    m = m.return
                }
                v === m && (v = null),
                m.sibling.return = m.return,
                m = m.sibling
            }
        }
        break;
    case 19:
        kr(t, e),
        Br(e),
        r & 4 && Y1(e);
        break;
    case 21:
        break;
    default:
        kr(t, e),
        Br(e)
    }
}
function Br(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (mS(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(ne(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Sl(o, ""),
                r.flags &= -33);
                var s = U1(e);
                pg(e, s, o);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , c = U1(e);
                hg(e, c, l);
                break;
            default:
                throw Error(ne(161))
            }
        } catch (f) {
            Pt(e, e.return, f)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function FD(e, t, n) {
    me = e,
    wS(e)
}
function wS(e, t, n) {
    for (var r = (e.mode & 1) !== 0; me !== null; ) {
        var o = me
          , s = o.child;
        if (o.tag === 22 && r) {
            var l = o.memoizedState !== null || vc;
            if (!l) {
                var c = o.alternate
                  , f = c !== null && c.memoizedState !== null || cn;
                c = vc;
                var h = cn;
                if (vc = l,
                (cn = f) && !h)
                    for (me = o; me !== null; )
                        l = me,
                        f = l.child,
                        l.tag === 22 && l.memoizedState !== null ? V1(o) : f !== null ? (f.return = l,
                        me = f) : V1(o);
                for (; s !== null; )
                    me = s,
                    wS(s),
                    s = s.sibling;
                me = o,
                vc = c,
                cn = h
            }
            B1(e)
        } else
            o.subtreeFlags & 8772 && s !== null ? (s.return = o,
            me = s) : B1(e)
    }
}
function B1(e) {
    for (; me !== null; ) {
        var t = me;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        cn || zf(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !cn)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Cr(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && T1(t, s, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            T1(t, l, n)
                        }
                        break;
                    case 5:
                        var c = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = c;
                            var f = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                f.autoFocus && n.focus();
                                break;
                            case "img":
                                f.src && (n.src = f.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var h = t.alternate;
                            if (h !== null) {
                                var v = h.memoizedState;
                                if (v !== null) {
                                    var m = v.dehydrated;
                                    m !== null && Cl(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(ne(163))
                    }
                cn || t.flags & 512 && dg(t)
            } catch (x) {
                Pt(t, t.return, x)
            }
        }
        if (t === e) {
            me = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            me = n;
            break
        }
        me = t.return
    }
}
function H1(e) {
    for (; me !== null; ) {
        var t = me;
        if (t === e) {
            me = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            me = n;
            break
        }
        me = t.return
    }
}
function V1(e) {
    for (; me !== null; ) {
        var t = me;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    zf(4, t)
                } catch (f) {
                    Pt(t, n, f)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (f) {
                        Pt(t, o, f)
                    }
                }
                var s = t.return;
                try {
                    dg(t)
                } catch (f) {
                    Pt(t, s, f)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    dg(t)
                } catch (f) {
                    Pt(t, l, f)
                }
            }
        } catch (f) {
            Pt(t, t.return, f)
        }
        if (t === e) {
            me = null;
            break
        }
        var c = t.sibling;
        if (c !== null) {
            c.return = t.return,
            me = c;
            break
        }
        me = t.return
    }
}
var WD = Math.ceil
  , hf = Di.ReactCurrentDispatcher
  , Im = Di.ReactCurrentOwner
  , pr = Di.ReactCurrentBatchConfig
  , Be = 0
  , Qt = null
  , Wt = null
  , nn = 0
  , Yn = 0
  , Us = vo(0)
  , Ht = 0
  , jl = null
  , Ko = 0
  , Uf = 0
  , Mm = 0
  , vl = null
  , Dn = null
  , Am = 0
  , la = 1 / 0
  , mi = null
  , pf = !1
  , gg = null
  , lo = null
  , yc = !1
  , Xi = null
  , gf = 0
  , yl = 0
  , mg = null
  , Nc = -1
  , Lc = 0;
function Sn() {
    return Be & 6 ? Nt() : Nc !== -1 ? Nc : Nc = Nt()
}
function uo(e) {
    return e.mode & 1 ? Be & 2 && nn !== 0 ? nn & -nn : bD.transition !== null ? (Lc === 0 && (Lc = rx()),
    Lc) : (e = Xe,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : cx(e.type)),
    e) : 1
}
function Dr(e, t, n, r) {
    if (50 < yl)
        throw yl = 0,
        mg = null,
        Error(ne(185));
    Bl(e, n, r),
    (!(Be & 2) || e !== Qt) && (e === Qt && (!(Be & 2) && (Uf |= n),
    Ht === 4 && Zi(e, nn)),
    Nn(e, r),
    n === 1 && Be === 0 && !(t.mode & 1) && (la = Nt() + 500,
    $f && yo()))
}
function Nn(e, t) {
    var n = e.callbackNode;
    b4(e, t);
    var r = Zc(e, e === Qt ? nn : 0);
    if (r === 0)
        n !== null && t1(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && t1(n),
        t === 1)
            e.tag === 0 ? SD(G1.bind(null, e)) : Px(G1.bind(null, e)),
            yD(function() {
                !(Be & 6) && yo()
            }),
            n = null;
        else {
            switch (ix(r)) {
            case 1:
                n = sm;
                break;
            case 4:
                n = tx;
                break;
            case 16:
                n = Kc;
                break;
            case 536870912:
                n = nx;
                break;
            default:
                n = Kc
            }
            n = OS(n, _S.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function _S(e, t) {
    if (Nc = -1,
    Lc = 0,
    Be & 6)
        throw Error(ne(327));
    var n = e.callbackNode;
    if (Ks() && e.callbackNode !== n)
        return null;
    var r = Zc(e, e === Qt ? nn : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = mf(e, r);
    else {
        t = r;
        var o = Be;
        Be |= 2;
        var s = SS();
        (Qt !== e || nn !== t) && (mi = null,
        la = Nt() + 500,
        Bo(e, t));
        do
            try {
                YD();
                break
            } catch (c) {
                xS(e, c)
            }
        while (!0);
        wm(),
        hf.current = s,
        Be = o,
        Wt !== null ? t = 0 : (Qt = null,
        nn = 0,
        t = Ht)
    }
    if (t !== 0) {
        if (t === 2 && (o = Yp(e),
        o !== 0 && (r = o,
        t = vg(e, o))),
        t === 1)
            throw n = jl,
            Bo(e, 0),
            Zi(e, r),
            Nn(e, Nt()),
            n;
        if (t === 6)
            Zi(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !zD(o) && (t = mf(e, r),
            t === 2 && (s = Yp(e),
            s !== 0 && (r = s,
            t = vg(e, s))),
            t === 1))
                throw n = jl,
                Bo(e, 0),
                Zi(e, r),
                Nn(e, Nt()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(ne(345));
            case 2:
                Lo(e, Dn, mi);
                break;
            case 3:
                if (Zi(e, r),
                (r & 130023424) === r && (t = Am + 500 - Nt(),
                10 < t)) {
                    if (Zc(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Sn(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Zp(Lo.bind(null, e, Dn, mi), t);
                    break
                }
                Lo(e, Dn, mi);
                break;
            case 4:
                if (Zi(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var l = 31 - Rr(r);
                    s = 1 << l,
                    l = t[l],
                    l > o && (o = l),
                    r &= ~s
                }
                if (r = o,
                r = Nt() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * WD(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Zp(Lo.bind(null, e, Dn, mi), r);
                    break
                }
                Lo(e, Dn, mi);
                break;
            case 5:
                Lo(e, Dn, mi);
                break;
            default:
                throw Error(ne(329))
            }
        }
    }
    return Nn(e, Nt()),
    e.callbackNode === n ? _S.bind(null, e) : null
}
function vg(e, t) {
    var n = vl;
    return e.current.memoizedState.isDehydrated && (Bo(e, t).flags |= 256),
    e = mf(e, t),
    e !== 2 && (t = Dn,
    Dn = n,
    t !== null && yg(t)),
    e
}
function yg(e) {
    Dn === null ? Dn = e : Dn.push.apply(Dn, e)
}
function zD(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , s = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Ir(s(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Zi(e, t) {
    for (t &= ~Mm,
    t &= ~Uf,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Rr(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function G1(e) {
    if (Be & 6)
        throw Error(ne(327));
    Ks();
    var t = Zc(e, 0);
    if (!(t & 1))
        return Nn(e, Nt()),
        null;
    var n = mf(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Yp(e);
        r !== 0 && (t = r,
        n = vg(e, r))
    }
    if (n === 1)
        throw n = jl,
        Bo(e, 0),
        Zi(e, t),
        Nn(e, Nt()),
        n;
    if (n === 6)
        throw Error(ne(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Lo(e, Dn, mi),
    Nn(e, Nt()),
    null
}
function Nm(e, t) {
    var n = Be;
    Be |= 1;
    try {
        return e(t)
    } finally {
        Be = n,
        Be === 0 && (la = Nt() + 500,
        $f && yo())
    }
}
function Zo(e) {
    Xi !== null && Xi.tag === 0 && !(Be & 6) && Ks();
    var t = Be;
    Be |= 1;
    var n = pr.transition
      , r = Xe;
    try {
        if (pr.transition = null,
        Xe = 1,
        e)
            return e()
    } finally {
        Xe = r,
        pr.transition = n,
        Be = t,
        !(Be & 6) && yo()
    }
}
function Lm() {
    Yn = Us.current,
    dt(Us)
}
function Bo(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    vD(n)),
    Wt !== null)
        for (n = Wt.return; n !== null; ) {
            var r = n;
            switch (mm(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && nf();
                break;
            case 3:
                sa(),
                dt(Mn),
                dt(hn),
                km();
                break;
            case 5:
                Em(r);
                break;
            case 4:
                sa();
                break;
            case 13:
                dt(Et);
                break;
            case 19:
                dt(Et);
                break;
            case 10:
                _m(r.type._context);
                break;
            case 22:
            case 23:
                Lm()
            }
            n = n.return
        }
    if (Qt = e,
    Wt = e = co(e.current, null),
    nn = Yn = t,
    Ht = 0,
    jl = null,
    Mm = Uf = Ko = 0,
    Dn = vl = null,
    Wo !== null) {
        for (t = 0; t < Wo.length; t++)
            if (n = Wo[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , s = n.pending;
                if (s !== null) {
                    var l = s.next;
                    s.next = o,
                    r.next = l
                }
                n.pending = r
            }
        Wo = null
    }
    return e
}
function xS(e, t) {
    do {
        var n = Wt;
        try {
            if (wm(),
            Ic.current = df,
            ff) {
                for (var r = kt.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                ff = !1
            }
            if (Qo = 0,
            qt = Yt = kt = null,
            gl = !1,
            Al = 0,
            Im.current = null,
            n === null || n.return === null) {
                Ht = 1,
                jl = t,
                Wt = null;
                break
            }
            e: {
                var s = e
                  , l = n.return
                  , c = n
                  , f = t;
                if (t = nn,
                c.flags |= 32768,
                f !== null && typeof f == "object" && typeof f.then == "function") {
                    var h = f
                      , v = c
                      , m = v.tag;
                    if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var x = v.alternate;
                        x ? (v.updateQueue = x.updateQueue,
                        v.memoizedState = x.memoizedState,
                        v.lanes = x.lanes) : (v.updateQueue = null,
                        v.memoizedState = null)
                    }
                    var E = A1(l);
                    if (E !== null) {
                        E.flags &= -257,
                        N1(E, l, c, s, t),
                        E.mode & 1 && M1(s, h, t),
                        t = E,
                        f = h;
                        var T = t.updateQueue;
                        if (T === null) {
                            var N = new Set;
                            N.add(f),
                            t.updateQueue = N
                        } else
                            T.add(f);
                        break e
                    } else {
                        if (!(t & 1)) {
                            M1(s, h, t),
                            jm();
                            break e
                        }
                        f = Error(ne(426))
                    }
                } else if (_t && c.mode & 1) {
                    var B = A1(l);
                    if (B !== null) {
                        !(B.flags & 65536) && (B.flags |= 256),
                        N1(B, l, c, s, t),
                        vm(aa(f, c));
                        break e
                    }
                }
                s = f = aa(f, c),
                Ht !== 4 && (Ht = 2),
                vl === null ? vl = [s] : vl.push(s),
                s = l;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var P = iS(s, f, t);
                        O1(s, P);
                        break e;
                    case 1:
                        c = f;
                        var O = s.type
                          , D = s.stateNode;
                        if (!(s.flags & 128) && (typeof O.getDerivedStateFromError == "function" || D !== null && typeof D.componentDidCatch == "function" && (lo === null || !lo.has(D)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var z = oS(s, c, t);
                            O1(s, z);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            ES(n)
        } catch (H) {
            t = H,
            Wt === n && n !== null && (Wt = n = n.return);
            continue
        }
        break
    } while (!0)
}
function SS() {
    var e = hf.current;
    return hf.current = df,
    e === null ? df : e
}
function jm() {
    (Ht === 0 || Ht === 3 || Ht === 2) && (Ht = 4),
    Qt === null || !(Ko & 268435455) && !(Uf & 268435455) || Zi(Qt, nn)
}
function mf(e, t) {
    var n = Be;
    Be |= 2;
    var r = SS();
    (Qt !== e || nn !== t) && (mi = null,
    Bo(e, t));
    do
        try {
            UD();
            break
        } catch (o) {
            xS(e, o)
        }
    while (!0);
    if (wm(),
    Be = n,
    hf.current = r,
    Wt !== null)
        throw Error(ne(261));
    return Qt = null,
    nn = 0,
    Ht
}
function UD() {
    for (; Wt !== null; )
        bS(Wt)
}
function YD() {
    for (; Wt !== null && !p4(); )
        bS(Wt)
}
function bS(e) {
    var t = CS(e.alternate, e, Yn);
    e.memoizedProps = e.pendingProps,
    t === null ? ES(e) : Wt = t,
    Im.current = null
}
function ES(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = LD(n, t),
            n !== null) {
                n.flags &= 32767,
                Wt = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Ht = 6,
                Wt = null;
                return
            }
        } else if (n = ND(n, t, Yn),
        n !== null) {
            Wt = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Wt = t;
            return
        }
        Wt = t = e
    } while (t !== null);
    Ht === 0 && (Ht = 5)
}
function Lo(e, t, n) {
    var r = Xe
      , o = pr.transition;
    try {
        pr.transition = null,
        Xe = 1,
        BD(e, t, n, r)
    } finally {
        pr.transition = o,
        Xe = r
    }
    return null
}
function BD(e, t, n, r) {
    do
        Ks();
    while (Xi !== null);
    if (Be & 6)
        throw Error(ne(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(ne(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (E4(e, s),
    e === Qt && (Wt = Qt = null,
    nn = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || yc || (yc = !0,
    OS(Kc, function() {
        return Ks(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = pr.transition,
        pr.transition = null;
        var l = Xe;
        Xe = 1;
        var c = Be;
        Be |= 4,
        Im.current = null,
        $D(e, n),
        yS(n, e),
        cD(Qp),
        Jc = !!qp,
        Qp = qp = null,
        e.current = n,
        FD(n),
        g4(),
        Be = c,
        Xe = l,
        pr.transition = s
    } else
        e.current = n;
    if (yc && (yc = !1,
    Xi = e,
    gf = o),
    s = e.pendingLanes,
    s === 0 && (lo = null),
    y4(n.stateNode),
    Nn(e, Nt()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (pf)
        throw pf = !1,
        e = gg,
        gg = null,
        e;
    return gf & 1 && e.tag !== 0 && Ks(),
    s = e.pendingLanes,
    s & 1 ? e === mg ? yl++ : (yl = 0,
    mg = e) : yl = 0,
    yo(),
    null
}
function Ks() {
    if (Xi !== null) {
        var e = ix(gf)
          , t = pr.transition
          , n = Xe;
        try {
            if (pr.transition = null,
            Xe = 16 > e ? 16 : e,
            Xi === null)
                var r = !1;
            else {
                if (e = Xi,
                Xi = null,
                gf = 0,
                Be & 6)
                    throw Error(ne(331));
                var o = Be;
                for (Be |= 4,
                me = e.current; me !== null; ) {
                    var s = me
                      , l = s.child;
                    if (me.flags & 16) {
                        var c = s.deletions;
                        if (c !== null) {
                            for (var f = 0; f < c.length; f++) {
                                var h = c[f];
                                for (me = h; me !== null; ) {
                                    var v = me;
                                    switch (v.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        ml(8, v, s)
                                    }
                                    var m = v.child;
                                    if (m !== null)
                                        m.return = v,
                                        me = m;
                                    else
                                        for (; me !== null; ) {
                                            v = me;
                                            var x = v.sibling
                                              , E = v.return;
                                            if (gS(v),
                                            v === h) {
                                                me = null;
                                                break
                                            }
                                            if (x !== null) {
                                                x.return = E,
                                                me = x;
                                                break
                                            }
                                            me = E
                                        }
                                }
                            }
                            var T = s.alternate;
                            if (T !== null) {
                                var N = T.child;
                                if (N !== null) {
                                    T.child = null;
                                    do {
                                        var B = N.sibling;
                                        N.sibling = null,
                                        N = B
                                    } while (N !== null)
                                }
                            }
                            me = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && l !== null)
                        l.return = s,
                        me = l;
                    else
                        e: for (; me !== null; ) {
                            if (s = me,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ml(9, s, s.return)
                                }
                            var P = s.sibling;
                            if (P !== null) {
                                P.return = s.return,
                                me = P;
                                break e
                            }
                            me = s.return
                        }
                }
                var O = e.current;
                for (me = O; me !== null; ) {
                    l = me;
                    var D = l.child;
                    if (l.subtreeFlags & 2064 && D !== null)
                        D.return = l,
                        me = D;
                    else
                        e: for (l = O; me !== null; ) {
                            if (c = me,
                            c.flags & 2048)
                                try {
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        zf(9, c)
                                    }
                                } catch (H) {
                                    Pt(c, c.return, H)
                                }
                            if (c === l) {
                                me = null;
                                break e
                            }
                            var z = c.sibling;
                            if (z !== null) {
                                z.return = c.return,
                                me = z;
                                break e
                            }
                            me = c.return
                        }
                }
                if (Be = o,
                yo(),
                Jr && typeof Jr.onPostCommitFiberRoot == "function")
                    try {
                        Jr.onPostCommitFiberRoot(Mf, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            Xe = n,
            pr.transition = t
        }
    }
    return !1
}
function q1(e, t, n) {
    t = aa(n, t),
    t = iS(e, t, 1),
    e = ao(e, t, 1),
    t = Sn(),
    e !== null && (Bl(e, 1, t),
    Nn(e, t))
}
function Pt(e, t, n) {
    if (e.tag === 3)
        q1(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                q1(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (lo === null || !lo.has(r))) {
                    e = aa(n, e),
                    e = oS(t, e, 1),
                    t = ao(t, e, 1),
                    e = Sn(),
                    t !== null && (Bl(t, 1, e),
                    Nn(t, e));
                    break
                }
            }
            t = t.return
        }
}
function HD(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Sn(),
    e.pingedLanes |= e.suspendedLanes & n,
    Qt === e && (nn & n) === n && (Ht === 4 || Ht === 3 && (nn & 130023424) === nn && 500 > Nt() - Am ? Bo(e, 0) : Mm |= n),
    Nn(e, t)
}
function kS(e, t) {
    t === 0 && (e.mode & 1 ? (t = lc,
    lc <<= 1,
    !(lc & 130023424) && (lc = 4194304)) : t = 1);
    var n = Sn();
    e = Ti(e, t),
    e !== null && (Bl(e, t, n),
    Nn(e, n))
}
function VD(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    kS(e, n)
}
function GD(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(ne(314))
    }
    r !== null && r.delete(t),
    kS(e, n)
}
var CS;
CS = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Mn.current)
            In = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return In = !1,
                AD(e, t, n);
            In = !!(e.flags & 131072)
        }
    else
        In = !1,
        _t && t.flags & 1048576 && Rx(t, sf, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ac(e, t),
        e = t.pendingProps;
        var o = ra(t, hn.current);
        Qs(t, n),
        o = Om(null, t, r, e, o, n);
        var s = Tm();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        An(r) ? (s = !0,
        rf(t)) : s = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        Sm(t),
        o.updater = Wf,
        t.stateNode = o,
        o._reactInternals = t,
        ig(t, r, e, n),
        t = ag(null, t, r, !0, s, n)) : (t.tag = 0,
        _t && s && gm(t),
        xn(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ac(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = QD(r),
            e = Cr(r, e),
            o) {
            case 0:
                t = sg(null, t, r, e, n);
                break e;
            case 1:
                t = $1(null, t, r, e, n);
                break e;
            case 11:
                t = L1(null, t, r, e, n);
                break e;
            case 14:
                t = j1(null, t, r, Cr(r.type, e), n);
                break e
            }
            throw Error(ne(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Cr(r, o),
        sg(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Cr(r, o),
        $1(e, t, r, o, n);
    case 3:
        e: {
            if (uS(t),
            e === null)
                throw Error(ne(387));
            r = t.pendingProps,
            s = t.memoizedState,
            o = s.element,
            Lx(e, t),
            uf(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    o = aa(Error(ne(423)), t),
                    t = F1(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = aa(Error(ne(424)), t),
                    t = F1(e, t, r, n, o);
                    break e
                } else
                    for (Hn = so(t.stateNode.containerInfo.firstChild),
                    Gn = t,
                    _t = !0,
                    Tr = null,
                    n = Ax(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (ia(),
                r === o) {
                    t = Pi(e, t, n);
                    break e
                }
                xn(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return jx(t),
        e === null && tg(t),
        r = t.type,
        o = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        l = o.children,
        Kp(r, o) ? l = null : s !== null && Kp(r, s) && (t.flags |= 32),
        lS(e, t),
        xn(e, t, l, n),
        t.child;
    case 6:
        return e === null && tg(t),
        null;
    case 13:
        return cS(e, t, n);
    case 4:
        return bm(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = oa(t, null, r, n) : xn(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Cr(r, o),
        L1(e, t, r, o, n);
    case 7:
        return xn(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return xn(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return xn(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            s = t.memoizedProps,
            l = o.value,
            lt(af, r._currentValue),
            r._currentValue = l,
            s !== null)
                if (Ir(s.value, l)) {
                    if (s.children === o.children && !Mn.current) {
                        t = Pi(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var c = s.dependencies;
                        if (c !== null) {
                            l = s.child;
                            for (var f = c.firstContext; f !== null; ) {
                                if (f.context === r) {
                                    if (s.tag === 1) {
                                        f = bi(-1, n & -n),
                                        f.tag = 2;
                                        var h = s.updateQueue;
                                        if (h !== null) {
                                            h = h.shared;
                                            var v = h.pending;
                                            v === null ? f.next = f : (f.next = v.next,
                                            v.next = f),
                                            h.pending = f
                                        }
                                    }
                                    s.lanes |= n,
                                    f = s.alternate,
                                    f !== null && (f.lanes |= n),
                                    ng(s.return, n, t),
                                    c.lanes |= n;
                                    break
                                }
                                f = f.next
                            }
                        } else if (s.tag === 10)
                            l = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (l = s.return,
                            l === null)
                                throw Error(ne(341));
                            l.lanes |= n,
                            c = l.alternate,
                            c !== null && (c.lanes |= n),
                            ng(l, n, t),
                            l = s.sibling
                        } else
                            l = s.child;
                        if (l !== null)
                            l.return = s;
                        else
                            for (l = s; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (s = l.sibling,
                                s !== null) {
                                    s.return = l.return,
                                    l = s;
                                    break
                                }
                                l = l.return
                            }
                        s = l
                    }
            xn(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        Qs(t, n),
        o = gr(o),
        r = r(o),
        t.flags |= 1,
        xn(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = Cr(r, t.pendingProps),
        o = Cr(r.type, o),
        j1(e, t, r, o, n);
    case 15:
        return sS(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : Cr(r, o),
        Ac(e, t),
        t.tag = 1,
        An(r) ? (e = !0,
        rf(t)) : e = !1,
        Qs(t, n),
        rS(t, r, o),
        ig(t, r, o, n),
        ag(null, t, r, !0, e, n);
    case 19:
        return fS(e, t, n);
    case 22:
        return aS(e, t, n)
    }
    throw Error(ne(156, t.tag))
}
;
function OS(e, t) {
    return ex(e, t)
}
function qD(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function hr(e, t, n, r) {
    return new qD(e,t,n,r)
}
function $m(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function QD(e) {
    if (typeof e == "function")
        return $m(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === rm)
            return 11;
        if (e === im)
            return 14
    }
    return 2
}
function co(e, t) {
    var n = e.alternate;
    return n === null ? (n = hr(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function jc(e, t, n, r, o, s) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        $m(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case Is:
            return Ho(n.children, o, s, t);
        case nm:
            l = 8,
            o |= 8;
            break;
        case Tp:
            return e = hr(12, n, t, o | 2),
            e.elementType = Tp,
            e.lanes = s,
            e;
        case Pp:
            return e = hr(13, n, t, o),
            e.elementType = Pp,
            e.lanes = s,
            e;
        case Rp:
            return e = hr(19, n, t, o),
            e.elementType = Rp,
            e.lanes = s,
            e;
        case j_:
            return Yf(n, o, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case N_:
                    l = 10;
                    break e;
                case L_:
                    l = 9;
                    break e;
                case rm:
                    l = 11;
                    break e;
                case im:
                    l = 14;
                    break e;
                case Gi:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(ne(130, e == null ? e : typeof e, ""))
        }
    return t = hr(l, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Ho(e, t, n, r) {
    return e = hr(7, e, r, t),
    e.lanes = n,
    e
}
function Yf(e, t, n, r) {
    return e = hr(22, e, r, t),
    e.elementType = j_,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function tp(e, t, n) {
    return e = hr(6, e, null, t),
    e.lanes = n,
    e
}
function np(e, t, n) {
    return t = hr(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function KD(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Lh(0),
    this.expirationTimes = Lh(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Lh(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Fm(e, t, n, r, o, s, l, c, f) {
    return e = new KD(e,t,n,c,f),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = hr(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Sm(s),
    e
}
function ZD(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ds,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function TS(e) {
    if (!e)
        return go;
    e = e._reactInternals;
    e: {
        if (es(e) !== e || e.tag !== 1)
            throw Error(ne(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (An(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(ne(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (An(n))
            return Tx(e, n, t)
    }
    return t
}
function PS(e, t, n, r, o, s, l, c, f) {
    return e = Fm(n, r, !0, e, o, s, l, c, f),
    e.context = TS(null),
    n = e.current,
    r = Sn(),
    o = uo(n),
    s = bi(r, o),
    s.callback = t ?? null,
    ao(n, s, o),
    e.current.lanes = o,
    Bl(e, o, r),
    Nn(e, r),
    e
}
function Bf(e, t, n, r) {
    var o = t.current
      , s = Sn()
      , l = uo(o);
    return n = TS(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = bi(s, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = ao(o, t, l),
    e !== null && (Dr(e, o, l, s),
    Dc(e, o, l)),
    l
}
function vf(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Q1(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Wm(e, t) {
    Q1(e, t),
    (e = e.alternate) && Q1(e, t)
}
function JD() {
    return null
}
var RS = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function zm(e) {
    this._internalRoot = e
}
Hf.prototype.render = zm.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(ne(409));
    Bf(e, t, null, null)
}
;
Hf.prototype.unmount = zm.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Zo(function() {
            Bf(null, e, null, null)
        }),
        t[Oi] = null
    }
}
;
function Hf(e) {
    this._internalRoot = e
}
Hf.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = ax();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ki.length && t !== 0 && t < Ki[n].priority; n++)
            ;
        Ki.splice(n, 0, e),
        n === 0 && ux(e)
    }
}
;
function Um(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Vf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function K1() {}
function XD(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var h = vf(l);
                s.call(h)
            }
        }
        var l = PS(t, r, e, 0, null, !1, !1, "", K1);
        return e._reactRootContainer = l,
        e[Oi] = l.current,
        Pl(e.nodeType === 8 ? e.parentNode : e),
        Zo(),
        l
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var c = r;
        r = function() {
            var h = vf(f);
            c.call(h)
        }
    }
    var f = Fm(e, 0, !1, null, null, !1, !1, "", K1);
    return e._reactRootContainer = f,
    e[Oi] = f.current,
    Pl(e.nodeType === 8 ? e.parentNode : e),
    Zo(function() {
        Bf(t, f, n, r)
    }),
    f
}
function Gf(e, t, n, r, o) {
    var s = n._reactRootContainer;
    if (s) {
        var l = s;
        if (typeof o == "function") {
            var c = o;
            o = function() {
                var f = vf(l);
                c.call(f)
            }
        }
        Bf(t, l, e, o)
    } else
        l = XD(n, t, e, o, r);
    return vf(l)
}
ox = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = rl(t.pendingLanes);
            n !== 0 && (am(t, n | 1),
            Nn(t, Nt()),
            !(Be & 6) && (la = Nt() + 500,
            yo()))
        }
        break;
    case 13:
        Zo(function() {
            var r = Ti(e, 1);
            if (r !== null) {
                var o = Sn();
                Dr(r, e, 1, o)
            }
        }),
        Wm(e, 1)
    }
}
;
lm = function(e) {
    if (e.tag === 13) {
        var t = Ti(e, 134217728);
        if (t !== null) {
            var n = Sn();
            Dr(t, e, 134217728, n)
        }
        Wm(e, 134217728)
    }
}
;
sx = function(e) {
    if (e.tag === 13) {
        var t = uo(e)
          , n = Ti(e, t);
        if (n !== null) {
            var r = Sn();
            Dr(n, e, t, r)
        }
        Wm(e, t)
    }
}
;
ax = function() {
    return Xe
}
;
lx = function(e, t) {
    var n = Xe;
    try {
        return Xe = e,
        t()
    } finally {
        Xe = n
    }
}
;
Wp = function(e, t, n) {
    switch (t) {
    case "input":
        if (Mp(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = jf(r);
                    if (!o)
                        throw Error(ne(90));
                    F_(r),
                    Mp(r, o)
                }
            }
        }
        break;
    case "textarea":
        z_(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Hs(e, !!n.multiple, t, !1)
    }
}
;
q_ = Nm;
Q_ = Zo;
var eI = {
    usingClientEntryPoint: !1,
    Events: [Vl, Ls, jf, V_, G_, Nm]
}
  , Ka = {
    findFiberByHostInstance: Fo,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , tI = {
    bundleType: Ka.bundleType,
    version: Ka.version,
    rendererPackageName: Ka.rendererPackageName,
    rendererConfig: Ka.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Di.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = J_(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ka.findFiberByHostInstance || JD,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wc.isDisabled && wc.supportsFiber)
        try {
            Mf = wc.inject(tI),
            Jr = wc
        } catch {}
}
Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eI;
Qn.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Um(t))
        throw Error(ne(200));
    return ZD(e, t, null, n)
}
;
Qn.createRoot = function(e, t) {
    if (!Um(e))
        throw Error(ne(299));
    var n = !1
      , r = ""
      , o = RS;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Fm(e, 1, !1, null, null, n, !1, r, o),
    e[Oi] = t.current,
    Pl(e.nodeType === 8 ? e.parentNode : e),
    new zm(t)
}
;
Qn.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(ne(188)) : (e = Object.keys(e).join(","),
        Error(ne(268, e)));
    return e = J_(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Qn.flushSync = function(e) {
    return Zo(e)
}
;
Qn.hydrate = function(e, t, n) {
    if (!Vf(t))
        throw Error(ne(200));
    return Gf(null, e, t, !0, n)
}
;
Qn.hydrateRoot = function(e, t, n) {
    if (!Um(e))
        throw Error(ne(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , s = ""
      , l = RS;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = PS(t, null, e, 1, n ?? null, o, !1, s, l),
    e[Oi] = t.current,
    Pl(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Hf(t)
}
;
Qn.render = function(e, t, n) {
    if (!Vf(t))
        throw Error(ne(200));
    return Gf(null, e, t, !1, n)
}
;
Qn.unmountComponentAtNode = function(e) {
    if (!Vf(e))
        throw Error(ne(40));
    return e._reactRootContainer ? (Zo(function() {
        Gf(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Oi] = null
        })
    }),
    !0) : !1
}
;
Qn.unstable_batchedUpdates = Nm;
Qn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Vf(n))
        throw Error(ne(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(ne(38));
    return Gf(e, t, n, !1, r)
}
;
Qn.version = "18.3.1-next-f1338f8080-20240426";
function DS() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(DS)
        } catch (e) {
            console.error(e)
        }
}
DS(),
D_.exports = Qn;
var IS = D_.exports;
const nI = () => document.getElementById("dhis2-portal-root") || document.body
  , Ym = e => {
    let {children: t, node: n, disable: r} = e;
    const [o,s] = ee.useState(null);
    return ee.useEffect( () => {
        s(n || nI())
    }
    , [n]),
    r ? t : o && IS.createPortal(t, o)
}
;
Ym.propTypes = {
    children: b.node,
    disable: b.bool,
    node: b.node
};
const qf = e => {
    let {children: t, className: n, dataTest: r="dhis2-uicore-layer", disablePortal: o, level: s="auto", onBackdropClick: l, onClick: c, position: f="fixed", translucent: h} = e;
    const v = l || c;
    return I.createElement(Ym, {
        disable: o
    }, I.createElement("div", {
        "data-test": r,
        className: "jsx-4284133831 " + de.dynamic([["1893150038", [s]]]) + " " + (dn("layer", n, f, {
            translucent: h
        }) || "")
    }, v && I.createElement("div", {
        onClick: m => v({}, m),
        className: "jsx-4284133831 " + de.dynamic([["1893150038", [s]]]) + " backdrop"
    }), t, I.createElement(de, {
        id: "1893150038",
        dynamic: [s]
    }, [`div.__jsx-style-dynamic-selector{z-index:${s};}`]), I.createElement(de, {
        id: "4284133831"
    }, ["div.jsx-4284133831{-webkit-inset-block-start:0;-ms-intb-rlock-start:0;inset-block-start:0;inset-inline-start:0;min-height:100vh;min-width:100vw;}", "div.fixed.jsx-4284133831{position:fixed;height:100vh;width:100vw;}", "div.absolute.jsx-4284133831{position:absolute;height:100%;width:100%;}", "div.translucent.jsx-4284133831{background-color:rgba(33,43,54,0.4);}", "div.backdrop.jsx-4284133831{position:absolute;inset:0;z-index:-1;}"])))
}
;
qf.propTypes = {
    children: b.node,
    className: b.string,
    dataTest: b.string,
    disablePortal: b.bool,
    level: b.oneOfType([b.number, b.string]),
    position: b.oneOf(["absolute", "fixed"]),
    translucent: b.bool,
    onBackdropClick: b.func,
    onClick: $3(b.func, 'Please use "onBackdropClick" instead')
};
var rI = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
;
function iI(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function oI(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++)
            n[t] = e[t];
        return n
    } else
        return Array.from(e)
}
var sI = {
    type: "logger",
    log: function(t) {
        this.output("log", t)
    },
    warn: function(t) {
        this.output("warn", t)
    },
    error: function(t) {
        this.output("error", t)
    },
    output: function(t, n) {
        var r;
        console && console[t] && (r = console)[t].apply(r, oI(n))
    }
}
  , aI = function() {
    function e(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        iI(this, e),
        this.init(t, n)
    }
    return e.prototype.init = function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.prefix = r.prefix || "i18next:",
        this.logger = n || sI,
        this.options = r,
        this.debug = r.debug
    }
    ,
    e.prototype.setDebug = function(n) {
        this.debug = n
    }
    ,
    e.prototype.log = function() {
        for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
        return this.forward(r, "log", "", !0)
    }
    ,
    e.prototype.warn = function() {
        for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
        return this.forward(r, "warn", "", !0)
    }
    ,
    e.prototype.error = function() {
        for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
        return this.forward(r, "error", "")
    }
    ,
    e.prototype.deprecate = function() {
        for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
        return this.forward(r, "warn", "WARNING DEPRECATED: ", !0)
    }
    ,
    e.prototype.forward = function(n, r, o, s) {
        return s && !this.debug ? null : (typeof n[0] == "string" && (n[0] = "" + o + this.prefix + " " + n[0]),
        this.logger[r](n))
    }
    ,
    e.prototype.create = function(n) {
        return new e(this.logger,rI({
            prefix: this.prefix + ":" + n + ":"
        }, this.options))
    }
    ,
    e
}();
const Kr = new aI;
function lI(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
var ql = function() {
    function e() {
        lI(this, e),
        this.observers = {}
    }
    return e.prototype.on = function(n, r) {
        var o = this;
        n.split(" ").forEach(function(s) {
            o.observers[s] = o.observers[s] || [],
            o.observers[s].push(r)
        })
    }
    ,
    e.prototype.off = function(n, r) {
        var o = this;
        this.observers[n] && this.observers[n].forEach(function() {
            if (!r)
                delete o.observers[n];
            else {
                var s = o.observers[n].indexOf(r);
                s > -1 && o.observers[n].splice(s, 1)
            }
        })
    }
    ,
    e.prototype.emit = function(n) {
        for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
            o[s - 1] = arguments[s];
        if (this.observers[n]) {
            var l = [].concat(this.observers[n]);
            l.forEach(function(f) {
                f.apply(void 0, o)
            })
        }
        if (this.observers["*"]) {
            var c = [].concat(this.observers["*"]);
            c.forEach(function(f) {
                var h;
                f.apply(f, (h = [n]).concat.apply(h, o))
            })
        }
    }
    ,
    e
}();
function Z1(e) {
    return e == null ? "" : "" + e
}
function uI(e, t, n) {
    e.forEach(function(r) {
        t[r] && (n[r] = t[r])
    })
}
function Bm(e, t, n) {
    function r(c) {
        return c && c.indexOf("###") > -1 ? c.replace(/###/g, ".") : c
    }
    function o() {
        return !e || typeof e == "string"
    }
    for (var s = typeof t != "string" ? [].concat(t) : t.split("."); s.length > 1; ) {
        if (o())
            return {};
        var l = r(s.shift());
        !e[l] && n && (e[l] = new n),
        e = e[l]
    }
    return o() ? {} : {
        obj: e,
        k: r(s.shift())
    }
}
function J1(e, t, n) {
    var r = Bm(e, t, Object)
      , o = r.obj
      , s = r.k;
    o[s] = n
}
function cI(e, t, n, r) {
    var o = Bm(e, t, Object)
      , s = o.obj
      , l = o.k;
    s[l] = s[l] || [],
    s[l].push(n)
}
function ua(e, t) {
    var n = Bm(e, t)
      , r = n.obj
      , o = n.k;
    if (r)
        return r[o]
}
function MS(e, t, n) {
    for (var r in t)
        r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : MS(e[r], t[r], n) : e[r] = t[r];
    return e
}
function Cs(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
var fI = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
function dI(e) {
    return typeof e == "string" ? e.replace(/[&<>"'\/]/g, function(t) {
        return fI[t]
    }) : e
}
var X1 = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
;
function hI(e, t) {
    for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
        var o = n[r]
          , s = Object.getOwnPropertyDescriptor(t, o);
        s && s.configurable && e[o] === void 0 && Object.defineProperty(e, o, s)
    }
    return e
}
function pI(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function gI(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function mI(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : hI(e, t))
}
var vI = function(e) {
    mI(t, e);
    function t(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
        };
        pI(this, t);
        var o = gI(this, e.call(this));
        return o.data = n || {},
        o.options = r,
        o
    }
    return t.prototype.addNamespaces = function(r) {
        this.options.ns.indexOf(r) < 0 && this.options.ns.push(r)
    }
    ,
    t.prototype.removeNamespaces = function(r) {
        var o = this.options.ns.indexOf(r);
        o > -1 && this.options.ns.splice(o, 1)
    }
    ,
    t.prototype.getResource = function(r, o, s) {
        var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
          , c = l.keySeparator || this.options.keySeparator;
        c === void 0 && (c = ".");
        var f = [r, o];
        return s && typeof s != "string" && (f = f.concat(s)),
        s && typeof s == "string" && (f = f.concat(c ? s.split(c) : s)),
        r.indexOf(".") > -1 && (f = r.split(".")),
        ua(this.data, f)
    }
    ,
    t.prototype.addResource = function(r, o, s, l) {
        var c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: !1
        }
          , f = this.options.keySeparator;
        f === void 0 && (f = ".");
        var h = [r, o];
        s && (h = h.concat(f ? s.split(f) : s)),
        r.indexOf(".") > -1 && (h = r.split("."),
        l = o,
        o = h[1]),
        this.addNamespaces(o),
        J1(this.data, h, l),
        c.silent || this.emit("added", r, o, s, l)
    }
    ,
    t.prototype.addResources = function(r, o, s) {
        var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: !1
        };
        for (var c in s)
            typeof s[c] == "string" && this.addResource(r, o, c, s[c], {
                silent: !0
            });
        l.silent || this.emit("added", r, o, s)
    }
    ,
    t.prototype.addResourceBundle = function(r, o, s, l, c) {
        var f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
            silent: !1
        }
          , h = [r, o];
        r.indexOf(".") > -1 && (h = r.split("."),
        l = s,
        s = o,
        o = h[1]),
        this.addNamespaces(o);
        var v = ua(this.data, h) || {};
        l ? MS(v, s, c) : v = X1({}, v, s),
        J1(this.data, h, v),
        f.silent || this.emit("added", r, o, s)
    }
    ,
    t.prototype.removeResourceBundle = function(r, o) {
        this.hasResourceBundle(r, o) && delete this.data[r][o],
        this.removeNamespaces(o),
        this.emit("removed", r, o)
    }
    ,
    t.prototype.hasResourceBundle = function(r, o) {
        return this.getResource(r, o) !== void 0
    }
    ,
    t.prototype.getResourceBundle = function(r, o) {
        return o || (o = this.options.defaultNS),
        this.options.compatibilityAPI === "v1" ? X1({}, this.getResource(r, o)) : this.getResource(r, o)
    }
    ,
    t.prototype.toJSON = function() {
        return this.data
    }
    ,
    t
}(ql);
const AS = {
    processors: {},
    addPostProcessor: function(t) {
        this.processors[t.name] = t
    },
    handle: function(t, n, r, o, s) {
        var l = this;
        return t.forEach(function(c) {
            l.processors[c] && (n = l.processors[c].process(n, r, o, s))
        }),
        n
    }
};
var _c = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , yI = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e
}
: function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}
;
function wI(e, t) {
    for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
        var o = n[r]
          , s = Object.getOwnPropertyDescriptor(t, o);
        s && s.configurable && e[o] === void 0 && Object.defineProperty(e, o, s)
    }
    return e
}
function _I(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function xI(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function SI(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : wI(e, t))
}
var ew = function(e) {
    SI(t, e);
    function t(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _I(this, t);
        var o = xI(this, e.call(this));
        return uI(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector"], n, o),
        o.options = r,
        o.logger = Kr.create("translator"),
        o
    }
    return t.prototype.changeLanguage = function(r) {
        r && (this.language = r)
    }
    ,
    t.prototype.exists = function(r) {
        var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        }
          , s = this.resolve(r, o);
        return s && s.res !== void 0
    }
    ,
    t.prototype.extractFromKey = function(r, o) {
        var s = o.nsSeparator || this.options.nsSeparator;
        s === void 0 && (s = ":");
        var l = o.keySeparator || this.options.keySeparator || "."
          , c = o.ns || this.options.defaultNS;
        if (s && r.indexOf(s) > -1) {
            var f = r.split(s);
            (s !== l || s === l && this.options.ns.indexOf(f[0]) > -1) && (c = f.shift()),
            r = f.join(l)
        }
        return typeof c == "string" && (c = [c]),
        {
            key: r,
            namespaces: c
        }
    }
    ,
    t.prototype.translate = function(r, o) {
        var s = this;
        if ((typeof o > "u" ? "undefined" : yI(o)) !== "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)),
        o || (o = {}),
        r == null || r === "")
            return "";
        typeof r == "number" && (r = String(r)),
        typeof r == "string" && (r = [r]);
        var l = o.keySeparator || this.options.keySeparator || "."
          , c = this.extractFromKey(r[r.length - 1], o)
          , f = c.key
          , h = c.namespaces
          , v = h[h.length - 1]
          , m = o.lng || this.language
          , x = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (m && m.toLowerCase() === "cimode") {
            if (x) {
                var E = o.nsSeparator || this.options.nsSeparator;
                return v + E + f
            }
            return f
        }
        var T = this.resolve(r, o)
          , N = T && T.res
          , B = T && T.usedKey || f
          , P = Object.prototype.toString.apply(N)
          , O = ["[object Number]", "[object Function]", "[object RegExp]"]
          , D = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays
          , z = typeof N != "string" && typeof N != "boolean" && typeof N != "number";
        if (N && z && O.indexOf(P) < 0 && !(D && P === "[object Array]")) {
            if (!o.returnObjects && !this.options.returnObjects)
                return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                this.options.returnedObjectHandler ? this.options.returnedObjectHandler(B, N, o) : "key '" + f + " (" + this.language + ")' returned an object instead of string.";
            if (o.keySeparator || this.options.keySeparator) {
                var H = P === "[object Array]" ? [] : {};
                for (var F in N)
                    if (Object.prototype.hasOwnProperty.call(N, F)) {
                        var W = "" + B + l + F;
                        H[F] = this.translate(W, _c({}, o, {
                            joinArrays: !1,
                            ns: h
                        })),
                        H[F] === W && (H[F] = N[F])
                    }
                N = H
            }
        } else if (D && P === "[object Array]")
            N = N.join(D),
            N && (N = this.extendTranslation(N, r, o));
        else {
            var G = !1
              , ye = !1;
            !this.isValidLookup(N) && o.defaultValue !== void 0 && (G = !0,
            N = o.defaultValue),
            this.isValidLookup(N) || (ye = !0,
            N = f);
            var ge = o.defaultValue && o.defaultValue !== N && this.options.updateMissing;
            if (ye || G || ge) {
                this.logger.log(ge ? "updateKey" : "missingKey", m, v, f, ge ? o.defaultValue : N);
                var Ce = []
                  , st = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && st && st[0])
                    for (var ut = 0; ut < st.length; ut++)
                        Ce.push(st[ut]);
                else
                    this.options.saveMissingTo === "all" ? Ce = this.languageUtils.toResolveHierarchy(o.lng || this.language) : Ce.push(o.lng || this.language);
                var Kt = function(gt, xt) {
                    s.options.missingKeyHandler ? s.options.missingKeyHandler(gt, v, xt, ge ? o.defaultValue : N, ge, o) : s.backendConnector && s.backendConnector.saveMissing && s.backendConnector.saveMissing(gt, v, xt, ge ? o.defaultValue : N, ge, o),
                    s.emit("missingKey", gt, v, xt, N)
                };
                this.options.saveMissing && (this.options.saveMissingPlurals && o.count ? Ce.forEach(function(Zt) {
                    var gt = s.pluralResolver.getPluralFormsOfKey(Zt, f);
                    gt.forEach(function(xt) {
                        return Kt([Zt], xt)
                    })
                }) : Kt(Ce, f))
            }
            N = this.extendTranslation(N, r, o),
            ye && N === f && this.options.appendNamespaceToMissingKey && (N = v + ":" + f),
            ye && this.options.parseMissingKeyHandler && (N = this.options.parseMissingKeyHandler(N))
        }
        return N
    }
    ,
    t.prototype.extendTranslation = function(r, o, s) {
        var l = this;
        s.interpolation && this.interpolator.init(_c({}, s, {
            interpolation: _c({}, this.options.interpolation, s.interpolation)
        }));
        var c = s.replace && typeof s.replace != "string" ? s.replace : s;
        this.options.interpolation.defaultVariables && (c = _c({}, this.options.interpolation.defaultVariables, c)),
        r = this.interpolator.interpolate(r, c, s.lng || this.language),
        s.nest !== !1 && (r = this.interpolator.nest(r, function() {
            return l.translate.apply(l, arguments)
        }, s)),
        s.interpolation && this.interpolator.reset();
        var f = s.postProcess || this.options.postProcess
          , h = typeof f == "string" ? [f] : f;
        return r != null && h && h.length && s.applyPostProcessor !== !1 && (r = AS.handle(h, r, o, s, this)),
        r
    }
    ,
    t.prototype.resolve = function(r) {
        var o = this
          , s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , l = void 0
          , c = void 0;
        return typeof r == "string" && (r = [r]),
        r.forEach(function(f) {
            if (!o.isValidLookup(l)) {
                var h = o.extractFromKey(f, s)
                  , v = h.key;
                c = v;
                var m = h.namespaces;
                o.options.fallbackNS && (m = m.concat(o.options.fallbackNS));
                var x = s.count !== void 0 && typeof s.count != "string"
                  , E = s.context !== void 0 && typeof s.context == "string" && s.context !== ""
                  , T = s.lngs ? s.lngs : o.languageUtils.toResolveHierarchy(s.lng || o.language);
                m.forEach(function(N) {
                    o.isValidLookup(l) || T.forEach(function(B) {
                        if (!o.isValidLookup(l)) {
                            var P = v
                              , O = [P]
                              , D = void 0;
                            x && (D = o.pluralResolver.getSuffix(B, s.count)),
                            x && E && O.push(P + D),
                            E && O.push(P += "" + o.options.contextSeparator + s.context),
                            x && O.push(P += D);
                            for (var z = void 0; z = O.pop(); )
                                o.isValidLookup(l) || (l = o.getResource(B, N, z, s))
                        }
                    })
                })
            }
        }),
        {
            res: l,
            usedKey: c
        }
    }
    ,
    t.prototype.isValidLookup = function(r) {
        return r !== void 0 && !(!this.options.returnNull && r === null) && !(!this.options.returnEmptyString && r === "")
    }
    ,
    t.prototype.getResource = function(r, o, s) {
        var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return this.resourceStore.getResource(r, o, s, l)
    }
    ,
    t
}(ql);
function bI(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function rp(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
var EI = function() {
    function e(t) {
        bI(this, e),
        this.options = t,
        this.whitelist = this.options.whitelist || !1,
        this.logger = Kr.create("languageUtils")
    }
    return e.prototype.getScriptPartFromCode = function(n) {
        if (!n || n.indexOf("-") < 0)
            return null;
        var r = n.split("-");
        return r.length === 2 ? null : (r.pop(),
        this.formatLanguageCode(r.join("-")))
    }
    ,
    e.prototype.getLanguagePartFromCode = function(n) {
        if (!n || n.indexOf("-") < 0)
            return n;
        var r = n.split("-");
        return this.formatLanguageCode(r[0])
    }
    ,
    e.prototype.formatLanguageCode = function(n) {
        if (typeof n == "string" && n.indexOf("-") > -1) {
            var r = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
              , o = n.split("-");
            return this.options.lowerCaseLng ? o = o.map(function(s) {
                return s.toLowerCase()
            }) : o.length === 2 ? (o[0] = o[0].toLowerCase(),
            o[1] = o[1].toUpperCase(),
            r.indexOf(o[1].toLowerCase()) > -1 && (o[1] = rp(o[1].toLowerCase()))) : o.length === 3 && (o[0] = o[0].toLowerCase(),
            o[1].length === 2 && (o[1] = o[1].toUpperCase()),
            o[0] !== "sgn" && o[2].length === 2 && (o[2] = o[2].toUpperCase()),
            r.indexOf(o[1].toLowerCase()) > -1 && (o[1] = rp(o[1].toLowerCase())),
            r.indexOf(o[2].toLowerCase()) > -1 && (o[2] = rp(o[2].toLowerCase()))),
            o.join("-")
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? n.toLowerCase() : n
    }
    ,
    e.prototype.isWhitelisted = function(n) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitWhitelist) && (n = this.getLanguagePartFromCode(n)),
        !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(n) > -1
    }
    ,
    e.prototype.getFallbackCodes = function(n, r) {
        if (!n)
            return [];
        if (typeof n == "string" && (n = [n]),
        Object.prototype.toString.apply(n) === "[object Array]")
            return n;
        if (!r)
            return n.default || [];
        var o = n[r];
        return o || (o = n[this.getScriptPartFromCode(r)]),
        o || (o = n[this.formatLanguageCode(r)]),
        o || (o = n.default),
        o || []
    }
    ,
    e.prototype.toResolveHierarchy = function(n, r) {
        var o = this
          , s = this.getFallbackCodes(r || this.options.fallbackLng || [], n)
          , l = []
          , c = function(h) {
            h && (o.isWhitelisted(h) ? l.push(h) : o.logger.warn("rejecting non-whitelisted language code: " + h))
        };
        return typeof n == "string" && n.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && c(this.formatLanguageCode(n)),
        this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && c(this.getScriptPartFromCode(n)),
        this.options.load !== "currentOnly" && c(this.getLanguagePartFromCode(n))) : typeof n == "string" && c(this.formatLanguageCode(n)),
        s.forEach(function(f) {
            l.indexOf(f) < 0 && c(o.formatLanguageCode(f))
        }),
        l
    }
    ,
    e
}();
function kI(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
var CI = [{
    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
    nr: [1, 2],
    fc: 1
}, {
    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "he", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
    nr: [1, 2],
    fc: 2
}, {
    lngs: ["ay", "bo", "cgg", "fa", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
    nr: [1],
    fc: 3
}, {
    lngs: ["be", "bs", "dz", "hr", "ru", "sr", "uk"],
    nr: [1, 2, 5],
    fc: 4
}, {
    lngs: ["ar"],
    nr: [0, 1, 2, 3, 11, 100],
    fc: 5
}, {
    lngs: ["cs", "sk"],
    nr: [1, 2, 5],
    fc: 6
}, {
    lngs: ["csb", "pl"],
    nr: [1, 2, 5],
    fc: 7
}, {
    lngs: ["cy"],
    nr: [1, 2, 3, 8],
    fc: 8
}, {
    lngs: ["fr"],
    nr: [1, 2],
    fc: 9
}, {
    lngs: ["ga"],
    nr: [1, 2, 3, 7, 11],
    fc: 10
}, {
    lngs: ["gd"],
    nr: [1, 2, 3, 20],
    fc: 11
}, {
    lngs: ["is"],
    nr: [1, 2],
    fc: 12
}, {
    lngs: ["jv"],
    nr: [0, 1],
    fc: 13
}, {
    lngs: ["kw"],
    nr: [1, 2, 3, 4],
    fc: 14
}, {
    lngs: ["lt"],
    nr: [1, 2, 10],
    fc: 15
}, {
    lngs: ["lv"],
    nr: [1, 2, 0],
    fc: 16
}, {
    lngs: ["mk"],
    nr: [1, 2],
    fc: 17
}, {
    lngs: ["mnk"],
    nr: [0, 1, 2],
    fc: 18
}, {
    lngs: ["mt"],
    nr: [1, 2, 11, 20],
    fc: 19
}, {
    lngs: ["or"],
    nr: [2, 1],
    fc: 2
}, {
    lngs: ["ro"],
    nr: [1, 2, 20],
    fc: 20
}, {
    lngs: ["sl"],
    nr: [5, 1, 2, 3],
    fc: 21
}]
  , OI = {
    1: function(t) {
        return +(t > 1)
    },
    2: function(t) {
        return +(t != 1)
    },
    3: function(t) {
        return 0
    },
    4: function(t) {
        return t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
    },
    5: function(t) {
        return t === 0 ? 0 : t == 1 ? 1 : t == 2 ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5
    },
    6: function(t) {
        return t == 1 ? 0 : t >= 2 && t <= 4 ? 1 : 2
    },
    7: function(t) {
        return t == 1 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
    },
    8: function(t) {
        return t == 1 ? 0 : t == 2 ? 1 : t != 8 && t != 11 ? 2 : 3
    },
    9: function(t) {
        return +(t >= 2)
    },
    10: function(t) {
        return t == 1 ? 0 : t == 2 ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4
    },
    11: function(t) {
        return t == 1 || t == 11 ? 0 : t == 2 || t == 12 ? 1 : t > 2 && t < 20 ? 2 : 3
    },
    12: function(t) {
        return +(t % 10 != 1 || t % 100 == 11)
    },
    13: function(t) {
        return +(t !== 0)
    },
    14: function(t) {
        return t == 1 ? 0 : t == 2 ? 1 : t == 3 ? 2 : 3
    },
    15: function(t) {
        return t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2
    },
    16: function(t) {
        return t % 10 == 1 && t % 100 != 11 ? 0 : t !== 0 ? 1 : 2
    },
    17: function(t) {
        return t == 1 || t % 10 == 1 ? 0 : 1
    },
    18: function(t) {
        return t == 0 ? 0 : t == 1 ? 1 : 2
    },
    19: function(t) {
        return t == 1 ? 0 : t === 0 || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3
    },
    20: function(t) {
        return t == 1 ? 0 : t === 0 || t % 100 > 0 && t % 100 < 20 ? 1 : 2
    },
    21: function(t) {
        return t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0
    }
};
function TI() {
    var e = {};
    return CI.forEach(function(t) {
        t.lngs.forEach(function(n) {
            e[n] = {
                numbers: t.nr,
                plurals: OI[t.fc]
            }
        })
    }),
    e
}
var PI = function() {
    function e(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        kI(this, e),
        this.languageUtils = t,
        this.options = n,
        this.logger = Kr.create("pluralResolver"),
        this.rules = TI()
    }
    return e.prototype.addRule = function(n, r) {
        this.rules[n] = r
    }
    ,
    e.prototype.getRule = function(n) {
        return this.rules[n] || this.rules[this.languageUtils.getLanguagePartFromCode(n)]
    }
    ,
    e.prototype.needsPlural = function(n) {
        var r = this.getRule(n);
        return r && r.numbers.length > 1
    }
    ,
    e.prototype.getPluralFormsOfKey = function(n, r) {
        var o = this
          , s = []
          , l = this.getRule(n);
        return l && l.numbers.forEach(function(c) {
            var f = o.getSuffix(n, c);
            s.push("" + r + f)
        }),
        s
    }
    ,
    e.prototype.getSuffix = function(n, r) {
        var o = this
          , s = this.getRule(n);
        if (s) {
            var l = s.noAbs ? s.plurals(r) : s.plurals(Math.abs(r))
              , c = s.numbers[l];
            this.options.simplifyPluralSuffix && s.numbers.length === 2 && s.numbers[0] === 1 && (c === 2 ? c = "plural" : c === 1 && (c = ""));
            var f = function() {
                return o.options.prepend && c.toString() ? o.options.prepend + c.toString() : c.toString()
            };
            return this.options.compatibilityJSON === "v1" ? c === 1 ? "" : typeof c == "number" ? "_plural_" + c.toString() : f() : this.options.compatibilityJSON === "v2" || s.numbers.length === 2 && s.numbers[0] === 1 || s.numbers.length === 2 && s.numbers[0] === 1 ? f() : this.options.prepend && l.toString() ? this.options.prepend + l.toString() : l.toString()
        }
        return this.logger.warn("no plural rule found for: " + n),
        ""
    }
    ,
    e
}()
  , tw = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
;
function RI(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
var DI = function() {
    function e() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        RI(this, e),
        this.logger = Kr.create("interpolator"),
        this.init(t, !0)
    }
    return e.prototype.init = function() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , r = arguments[1];
        r && (this.options = n,
        this.format = n.interpolation && n.interpolation.format || function(s) {
            return s
        }
        ,
        this.escape = n.interpolation && n.interpolation.escape || dI),
        n.interpolation || (n.interpolation = {
            escapeValue: !0
        });
        var o = n.interpolation;
        this.escapeValue = o.escapeValue !== void 0 ? o.escapeValue : !0,
        this.prefix = o.prefix ? Cs(o.prefix) : o.prefixEscaped || "{{",
        this.suffix = o.suffix ? Cs(o.suffix) : o.suffixEscaped || "}}",
        this.formatSeparator = o.formatSeparator ? o.formatSeparator : o.formatSeparator || ",",
        this.unescapePrefix = o.unescapeSuffix ? "" : o.unescapePrefix || "-",
        this.unescapeSuffix = this.unescapePrefix ? "" : o.unescapeSuffix || "",
        this.nestingPrefix = o.nestingPrefix ? Cs(o.nestingPrefix) : o.nestingPrefixEscaped || Cs("$t("),
        this.nestingSuffix = o.nestingSuffix ? Cs(o.nestingSuffix) : o.nestingSuffixEscaped || Cs(")"),
        this.maxReplaces = o.maxReplaces ? o.maxReplaces : 1e3,
        this.resetRegExp()
    }
    ,
    e.prototype.reset = function() {
        this.options && this.init(this.options)
    }
    ,
    e.prototype.resetRegExp = function() {
        var n = this.prefix + "(.+?)" + this.suffix;
        this.regexp = new RegExp(n,"g");
        var r = "" + this.prefix + this.unescapePrefix + "(.+?)" + this.unescapeSuffix + this.suffix;
        this.regexpUnescape = new RegExp(r,"g");
        var o = this.nestingPrefix + "(.+?)" + this.nestingSuffix;
        this.nestingRegexp = new RegExp(o,"g")
    }
    ,
    e.prototype.interpolate = function(n, r, o) {
        var s = this
          , l = void 0
          , c = void 0
          , f = void 0;
        function h(x) {
            return x.replace(/\$/g, "$$$$")
        }
        var v = function(E) {
            if (E.indexOf(s.formatSeparator) < 0)
                return ua(r, E);
            var T = E.split(s.formatSeparator)
              , N = T.shift().trim()
              , B = T.join(s.formatSeparator).trim();
            return s.format(ua(r, N), B, o)
        };
        for (this.resetRegExp(),
        f = 0; (l = this.regexpUnescape.exec(n)) && (c = v(l[1].trim()),
        n = n.replace(l[0], c),
        this.regexpUnescape.lastIndex = 0,
        f++,
        !(f >= this.maxReplaces)); )
            ;
        for (f = 0; l = this.regexp.exec(n); ) {
            if (c = v(l[1].trim()),
            typeof c != "string" && (c = Z1(c)),
            !c)
                if (typeof this.options.missingInterpolationHandler == "function") {
                    var m = this.options.missingInterpolationHandler(n, l);
                    c = typeof m == "string" ? m : ""
                } else
                    this.logger.warn("missed to pass in variable " + l[1] + " for interpolating " + n),
                    c = "";
            if (c = this.escapeValue ? h(this.escape(c)) : h(c),
            n = n.replace(l[0], c),
            this.regexp.lastIndex = 0,
            f++,
            f >= this.maxReplaces)
                break
        }
        return n
    }
    ,
    e.prototype.nest = function(n, r) {
        var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
          , s = void 0
          , l = void 0
          , c = tw({}, o);
        c.applyPostProcessor = !1;
        function f(h, v) {
            if (h.indexOf(",") < 0)
                return h;
            var m = h.split(",");
            h = m.shift();
            var x = m.join(",");
            x = this.interpolate(x, c),
            x = x.replace(/'/g, '"');
            try {
                c = JSON.parse(x),
                v && (c = tw({}, v, c))
            } catch (E) {
                this.logger.error("failed parsing options string in nesting for key " + h, E)
            }
            return h
        }
        for (; s = this.nestingRegexp.exec(n); ) {
            if (l = r(f.call(this, s[1].trim(), c), c),
            l && s[0] === n && typeof l != "string")
                return l;
            typeof l != "string" && (l = Z1(l)),
            l || (this.logger.warn("missed to resolve " + s[1] + " for nesting " + n),
            l = ""),
            n = n.replace(s[0], l),
            this.regexp.lastIndex = 0
        }
        return n
    }
    ,
    e
}()
  , ip = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
  , op = function() {
    function e(t, n) {
        var r = []
          , o = !0
          , s = !1
          , l = void 0;
        try {
            for (var c = t[Symbol.iterator](), f; !(o = (f = c.next()).done) && (r.push(f.value),
            !(n && r.length === n)); o = !0)
                ;
        } catch (h) {
            s = !0,
            l = h
        } finally {
            try {
                !o && c.return && c.return()
            } finally {
                if (s)
                    throw l
            }
        }
        return r
    }
    return function(t, n) {
        if (Array.isArray(t))
            return t;
        if (Symbol.iterator in Object(t))
            return e(t, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}();
function II(e, t) {
    for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
        var o = n[r]
          , s = Object.getOwnPropertyDescriptor(t, o);
        s && s.configurable && e[o] === void 0 && Object.defineProperty(e, o, s)
    }
    return e
}
function MI(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function AI(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function NI(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : II(e, t))
}
function LI(e, t) {
    for (var n = e.indexOf(t); n !== -1; )
        e.splice(n, 1),
        n = e.indexOf(t)
}
var jI = function(e) {
    NI(t, e);
    function t(n, r, o) {
        var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        MI(this, t);
        var l = AI(this, e.call(this));
        return l.backend = n,
        l.store = r,
        l.languageUtils = o.languageUtils,
        l.options = s,
        l.logger = Kr.create("backendConnector"),
        l.state = {},
        l.queue = [],
        l.backend && l.backend.init && l.backend.init(o, s.backend, s),
        l
    }
    return t.prototype.queueLoad = function(r, o, s) {
        var l = this
          , c = []
          , f = []
          , h = []
          , v = [];
        return r.forEach(function(m) {
            var x = !0;
            o.forEach(function(E) {
                var T = m + "|" + E;
                l.store.hasResourceBundle(m, E) ? l.state[T] = 2 : l.state[T] < 0 || (l.state[T] === 1 ? f.indexOf(T) < 0 && f.push(T) : (l.state[T] = 1,
                x = !1,
                f.indexOf(T) < 0 && f.push(T),
                c.indexOf(T) < 0 && c.push(T),
                v.indexOf(E) < 0 && v.push(E)))
            }),
            x || h.push(m)
        }),
        (c.length || f.length) && this.queue.push({
            pending: f,
            loaded: {},
            errors: [],
            callback: s
        }),
        {
            toLoad: c,
            pending: f,
            toLoadLanguages: h,
            toLoadNamespaces: v
        }
    }
    ,
    t.prototype.loaded = function(r, o, s) {
        var l = this
          , c = r.split("|")
          , f = op(c, 2)
          , h = f[0]
          , v = f[1];
        o && this.emit("failedLoading", h, v, o),
        s && this.store.addResourceBundle(h, v, s),
        this.state[r] = o ? -1 : 2,
        this.queue.forEach(function(m) {
            cI(m.loaded, [h], v),
            LI(m.pending, r),
            o && m.errors.push(o),
            m.pending.length === 0 && !m.done && (l.emit("loaded", m.loaded),
            m.done = !0,
            m.errors.length ? m.callback(m.errors) : m.callback())
        }),
        this.queue = this.queue.filter(function(m) {
            return !m.done
        })
    }
    ,
    t.prototype.read = function(r, o, s) {
        var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0
          , c = this
          , f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 250
          , h = arguments[5];
        return r.length ? this.backend[s](r, o, function(v, m) {
            if (v && m && l < 5) {
                setTimeout(function() {
                    c.read.call(c, r, o, s, l + 1, f * 2, h)
                }, f);
                return
            }
            h(v, m)
        }) : h(null, {})
    }
    ,
    t.prototype.load = function(r, o, s) {
        var l = this;
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
            s && s();
        var c = ip({}, this.backend.options, this.options.backend);
        typeof r == "string" && (r = this.languageUtils.toResolveHierarchy(r)),
        typeof o == "string" && (o = [o]);
        var f = this.queueLoad(r, o, s);
        if (!f.toLoad.length)
            return f.pending.length || s(),
            null;
        c.allowMultiLoading && this.backend.readMulti ? this.read(f.toLoadLanguages, f.toLoadNamespaces, "readMulti", null, null, function(h, v) {
            h && l.logger.warn("loading namespaces " + f.toLoadNamespaces.join(", ") + " for languages " + f.toLoadLanguages.join(", ") + " via multiloading failed", h),
            !h && v && l.logger.log("successfully loaded namespaces " + f.toLoadNamespaces.join(", ") + " for languages " + f.toLoadLanguages.join(", ") + " via multiloading", v),
            f.toLoad.forEach(function(m) {
                var x = m.split("|")
                  , E = op(x, 2)
                  , T = E[0]
                  , N = E[1]
                  , B = ua(v, [T, N]);
                if (B)
                    l.loaded(m, h, B);
                else {
                    var P = "loading namespace " + N + " for language " + T + " via multiloading failed";
                    l.loaded(m, P),
                    l.logger.error(P)
                }
            })
        }) : f.toLoad.forEach(function(h) {
            l.loadOne(h)
        })
    }
    ,
    t.prototype.reload = function(r, o) {
        var s = this;
        this.backend || this.logger.warn("No backend was added via i18next.use. Will not load resources.");
        var l = ip({}, this.backend.options, this.options.backend);
        typeof r == "string" && (r = this.languageUtils.toResolveHierarchy(r)),
        typeof o == "string" && (o = [o]),
        l.allowMultiLoading && this.backend.readMulti ? this.read(r, o, "readMulti", null, null, function(c, f) {
            c && s.logger.warn("reloading namespaces " + o.join(", ") + " for languages " + r.join(", ") + " via multiloading failed", c),
            !c && f && s.logger.log("successfully reloaded namespaces " + o.join(", ") + " for languages " + r.join(", ") + " via multiloading", f),
            r.forEach(function(h) {
                o.forEach(function(v) {
                    var m = ua(f, [h, v]);
                    if (m)
                        s.loaded(h + "|" + v, c, m);
                    else {
                        var x = "reloading namespace " + v + " for language " + h + " via multiloading failed";
                        s.loaded(h + "|" + v, x),
                        s.logger.error(x)
                    }
                })
            })
        }) : r.forEach(function(c) {
            o.forEach(function(f) {
                s.loadOne(c + "|" + f, "re")
            })
        })
    }
    ,
    t.prototype.loadOne = function(r) {
        var o = this
          , s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""
          , l = r.split("|")
          , c = op(l, 2)
          , f = c[0]
          , h = c[1];
        this.read(f, h, "read", null, null, function(v, m) {
            v && o.logger.warn(s + "loading namespace " + h + " for language " + f + " failed", v),
            !v && m && o.logger.log(s + "loaded namespace " + h + " for language " + f, m),
            o.loaded(r, v, m)
        })
    }
    ,
    t.prototype.saveMissing = function(r, o, s, l, c) {
        var f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
        this.backend && this.backend.create && this.backend.create(r, o, s, l, null, ip({}, f, {
            isUpdate: c
        })),
        !(!r || !r[0]) && this.store.addResource(r[0], o, s, l)
    }
    ,
    t
}(ql)
  , $I = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
;
function FI(e, t) {
    for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
        var o = n[r]
          , s = Object.getOwnPropertyDescriptor(t, o);
        s && s.configurable && e[o] === void 0 && Object.defineProperty(e, o, s)
    }
    return e
}
function WI(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function zI(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function UI(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : FI(e, t))
}
var YI = function(e) {
    UI(t, e);
    function t(n, r, o) {
        var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        WI(this, t);
        var l = zI(this, e.call(this));
        return l.cache = n,
        l.store = r,
        l.services = o,
        l.options = s,
        l.logger = Kr.create("cacheConnector"),
        l.cache && l.cache.init && l.cache.init(o, s.cache, s),
        l
    }
    return t.prototype.load = function(r, o, s) {
        var l = this;
        if (!this.cache)
            return s && s();
        var c = $I({}, this.cache.options, this.options.cache)
          , f = typeof r == "string" ? this.services.languageUtils.toResolveHierarchy(r) : r;
        c.enabled ? this.cache.load(f, function(h, v) {
            if (h && l.logger.error("loading languages " + f.join(", ") + " from cache failed", h),
            v) {
                for (var m in v)
                    if (Object.prototype.hasOwnProperty.call(v, m)) {
                        for (var x in v[m])
                            if (Object.prototype.hasOwnProperty.call(v[m], x) && x !== "i18nStamp") {
                                var E = v[m][x];
                                E && l.store.addResourceBundle(m, x, E)
                            }
                    }
            }
            s && s()
        }) : s && s()
    }
    ,
    t.prototype.save = function() {
        this.cache && this.options.cache && this.options.cache.enabled && this.cache.save(this.store.data)
    }
    ,
    t
}(ql);
function BI() {
    return {
        debug: !1,
        initImmediate: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        whitelist: !1,
        nonExplicitWhitelist: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        returnNull: !0,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: function() {},
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: function(t) {
            var n = {};
            return t[1] && (n.defaultValue = t[1]),
            t[2] && (n.tDescription = t[2]),
            n
        },
        interpolation: {
            escapeValue: !0,
            format: function(t, n, r) {
                return t
            },
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            maxReplaces: 1e3
        }
    }
}
function nw(e) {
    return typeof e.ns == "string" && (e.ns = [e.ns]),
    typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]),
    e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])),
    e
}
var HI = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e
}
: function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
}
  , sp = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
}
;
function VI(e, t) {
    for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
        var o = n[r]
          , s = Object.getOwnPropertyDescriptor(t, o);
        s && s.configurable && e[o] === void 0 && Object.defineProperty(e, o, s)
    }
    return e
}
function GI(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function rw(e, t) {
    if (!e)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e
}
function qI(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : VI(e, t))
}
function ap() {}
var QI = function(e) {
    qI(t, e);
    function t() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , r = arguments[1];
        GI(this, t);
        var o = rw(this, e.call(this));
        if (o.options = nw(n),
        o.services = {},
        o.logger = Kr,
        o.modules = {
            external: []
        },
        r && !o.isInitialized && !n.isClone) {
            var s;
            if (!o.options.initImmediate)
                return s = o.init(n, r),
                rw(o, s);
            setTimeout(function() {
                o.init(n, r)
            }, 0)
        }
        return o
    }
    return t.prototype.init = function() {
        var r = this
          , o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , s = arguments[1];
        typeof o == "function" && (s = o,
        o = {}),
        this.options = sp({}, BI(), this.options, nw(o)),
        this.format = this.options.interpolation.format,
        s || (s = ap);
        function l(m) {
            return m ? typeof m == "function" ? new m : m : null
        }
        if (!this.options.isClone) {
            this.modules.logger ? Kr.init(l(this.modules.logger), this.options) : Kr.init(null, this.options);
            var c = new EI(this.options);
            this.store = new vI(this.options.resources,this.options);
            var f = this.services;
            f.logger = Kr,
            f.resourceStore = this.store,
            f.resourceStore.on("added removed", function(m, x) {
                f.cacheConnector.save()
            }),
            f.languageUtils = c,
            f.pluralResolver = new PI(c,{
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }),
            f.interpolator = new DI(this.options),
            f.backendConnector = new jI(l(this.modules.backend),f.resourceStore,f,this.options),
            f.backendConnector.on("*", function(m) {
                for (var x = arguments.length, E = Array(x > 1 ? x - 1 : 0), T = 1; T < x; T++)
                    E[T - 1] = arguments[T];
                r.emit.apply(r, [m].concat(E))
            }),
            f.backendConnector.on("loaded", function(m) {
                f.cacheConnector.save()
            }),
            f.cacheConnector = new YI(l(this.modules.cache),f.resourceStore,f,this.options),
            f.cacheConnector.on("*", function(m) {
                for (var x = arguments.length, E = Array(x > 1 ? x - 1 : 0), T = 1; T < x; T++)
                    E[T - 1] = arguments[T];
                r.emit.apply(r, [m].concat(E))
            }),
            this.modules.languageDetector && (f.languageDetector = l(this.modules.languageDetector),
            f.languageDetector.init(f, this.options.detection, this.options)),
            this.translator = new ew(this.services,this.options),
            this.translator.on("*", function(m) {
                for (var x = arguments.length, E = Array(x > 1 ? x - 1 : 0), T = 1; T < x; T++)
                    E[T - 1] = arguments[T];
                r.emit.apply(r, [m].concat(E))
            }),
            this.modules.external.forEach(function(m) {
                m.init && m.init(r)
            })
        }
        var h = ["getResource", "addResource", "addResources", "addResourceBundle", "removeResourceBundle", "hasResourceBundle", "getResourceBundle"];
        h.forEach(function(m) {
            r[m] = function() {
                var x;
                return (x = r.store)[m].apply(x, arguments)
            }
        });
        var v = function() {
            r.changeLanguage(r.options.lng, function(x, E) {
                r.isInitialized = !0,
                r.logger.log("initialized", r.options),
                r.emit("initialized", r.options),
                s(x, E)
            })
        };
        return this.options.resources || !this.options.initImmediate ? v() : setTimeout(v, 0),
        this
    }
    ,
    t.prototype.loadResources = function() {
        var r = this
          , o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ap;
        if (this.options.resources)
            o(null);
        else {
            if (this.language && this.language.toLowerCase() === "cimode")
                return o();
            var s = []
              , l = function(h) {
                if (h) {
                    var v = r.services.languageUtils.toResolveHierarchy(h);
                    v.forEach(function(m) {
                        s.indexOf(m) < 0 && s.push(m)
                    })
                }
            };
            if (this.language)
                l(this.language);
            else {
                var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                c.forEach(function(f) {
                    return l(f)
                })
            }
            this.options.preload && this.options.preload.forEach(function(f) {
                return l(f)
            }),
            this.services.cacheConnector.load(s, this.options.ns, function() {
                r.services.backendConnector.load(s, r.options.ns, o)
            })
        }
    }
    ,
    t.prototype.reloadResources = function(r, o) {
        r || (r = this.languages),
        o || (o = this.options.ns),
        this.services.backendConnector.reload(r, o)
    }
    ,
    t.prototype.use = function(r) {
        return r.type === "backend" && (this.modules.backend = r),
        r.type === "cache" && (this.modules.cache = r),
        (r.type === "logger" || r.log && r.warn && r.error) && (this.modules.logger = r),
        r.type === "languageDetector" && (this.modules.languageDetector = r),
        r.type === "postProcessor" && AS.addPostProcessor(r),
        r.type === "3rdParty" && this.modules.external.push(r),
        this
    }
    ,
    t.prototype.changeLanguage = function(r, o) {
        var s = this
          , l = function(h, v) {
            s.translator.changeLanguage(v),
            v && (s.emit("languageChanged", v),
            s.logger.log("languageChanged", v)),
            o && o(h, function() {
                return s.t.apply(s, arguments)
            })
        }
          , c = function(h) {
            h && (s.language = h,
            s.languages = s.services.languageUtils.toResolveHierarchy(h),
            s.translator.language || s.translator.changeLanguage(h),
            s.services.languageDetector && s.services.languageDetector.cacheUserLanguage(h)),
            s.loadResources(function(v) {
                l(v, h)
            })
        };
        !r && this.services.languageDetector && !this.services.languageDetector.async ? c(this.services.languageDetector.detect()) : !r && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(c) : c(r)
    }
    ,
    t.prototype.getFixedT = function(r, o) {
        var s = this
          , l = function c(f, h) {
            for (var v = arguments.length, m = Array(v > 2 ? v - 2 : 0), x = 2; x < v; x++)
                m[x - 2] = arguments[x];
            var E = sp({}, h);
            return (typeof h > "u" ? "undefined" : HI(h)) !== "object" && (E = s.options.overloadTranslationOptionHandler([f, h].concat(m))),
            E.lng = E.lng || c.lng,
            E.lngs = E.lngs || c.lngs,
            E.ns = E.ns || c.ns,
            s.t(f, E)
        };
        return typeof r == "string" ? l.lng = r : l.lngs = r,
        l.ns = o,
        l
    }
    ,
    t.prototype.t = function() {
        var r;
        return this.translator && (r = this.translator).translate.apply(r, arguments)
    }
    ,
    t.prototype.exists = function() {
        var r;
        return this.translator && (r = this.translator).exists.apply(r, arguments)
    }
    ,
    t.prototype.setDefaultNamespace = function(r) {
        this.options.defaultNS = r
    }
    ,
    t.prototype.loadNamespaces = function(r, o) {
        var s = this;
        if (!this.options.ns)
            return o && o();
        typeof r == "string" && (r = [r]),
        r.forEach(function(l) {
            s.options.ns.indexOf(l) < 0 && s.options.ns.push(l)
        }),
        this.loadResources(o)
    }
    ,
    t.prototype.loadLanguages = function(r, o) {
        typeof r == "string" && (r = [r]);
        var s = this.options.preload || []
          , l = r.filter(function(c) {
            return s.indexOf(c) < 0
        });
        if (!l.length)
            return o();
        this.options.preload = s.concat(l),
        this.loadResources(o)
    }
    ,
    t.prototype.dir = function(r) {
        if (r || (r = this.languages && this.languages.length > 0 ? this.languages[0] : this.language),
        !r)
            return "rtl";
        var o = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"];
        return o.indexOf(this.services.languageUtils.getLanguagePartFromCode(r)) >= 0 ? "rtl" : "ltr"
    }
    ,
    t.prototype.createInstance = function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , o = arguments[1];
        return new t(r,o)
    }
    ,
    t.prototype.cloneInstance = function() {
        var r = this
          , o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ap
          , l = sp({}, this.options, o, {
            isClone: !0
        })
          , c = new t(l)
          , f = ["store", "services", "language"];
        return f.forEach(function(h) {
            c[h] = r[h]
        }),
        c.translator = new ew(c.services,c.options),
        c.translator.on("*", function(h) {
            for (var v = arguments.length, m = Array(v > 1 ? v - 1 : 0), x = 1; x < v; x++)
                m[x - 1] = arguments[x];
            c.emit.apply(c, [h].concat(m))
        }),
        c.init(l, s),
        c.translator.options = c.options,
        c
    }
    ,
    t
}(ql);
const ve = new QI;
ve.changeLanguage.bind(ve);
ve.cloneInstance.bind(ve);
ve.createInstance.bind(ve);
ve.dir.bind(ve);
ve.exists.bind(ve);
ve.getFixedT.bind(ve);
ve.init.bind(ve);
ve.loadLanguages.bind(ve);
ve.loadNamespaces.bind(ve);
ve.loadResources.bind(ve);
ve.off.bind(ve);
ve.on.bind(ve);
ve.setDefaultNamespace.bind(ve);
ve.t.bind(ve);
ve.use.bind(ve);
ve.isInitialized || ve.init({
    resources: void 0,
    lng: "en",
    fallbackLng: "en",
    debug: !1,
    ns: ["translation"],
    defaultNS: "translation",
    fallbackNS: !1,
    nsSeparator: !1,
    returnEmptyString: !1,
    returnObjects: !1,
    keySeparator: !1,
    react: {
        wait: !0
    }
});
const NS = e => {
    let {error: t, warning: n, valid: r, loading: o} = e;
    return t ? I.createElement(Df, {
        color: nt.error
    }) : n ? I.createElement(If, {
        color: nt.warning
    }) : r ? I.createElement(Kg, {
        color: nt.valid
    }) : o ? I.createElement(ta, {
        small: !0
    }) : null
}
;
NS.propTypes = {
    error: b.bool,
    loading: b.bool,
    valid: b.bool,
    warning: b.bool
};
const LS = ["text", "number", "password", "email", "url", "tel", "date", "datetime", "datetime-local", "month", "week", "time", "search"];
function jo(e, t, n) {
    return (t = KI(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function KI(e) {
    var t = ZI(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function ZI(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
const $o = [`.input.jsx-4253951613{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;gap:${_e.dp8};}`, `input.jsx-4253951613{box-sizing:border-box;font-size:14px;line-height:16px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;color:${$.grey900};background-color:white;padding:11px 12px;max-height:40px;outline:0;border:1px solid ${$.grey500};border-radius:3px;box-shadow:inset 0 0 1px 0 rgba(48,54,60,0.1);text-overflow:ellipsis;}`, "input.dense.jsx-4253951613{max-height:32px;padding:7px 8px;}", `input.jsx-4253951613:focus{outline:none;box-shadow:inset 0 0 0 2px ${nt.focus};border-color:${nt.focus};}`, `input.jsx-4253951613::-webkit-input-placeholder{color:${$.grey600};opacity:1;}`, `input.jsx-4253951613::-moz-placeholder{color:${$.grey600};opacity:1;}`, `input.jsx-4253951613:-ms-input-placeholder{color:${$.grey600};opacity:1;}`, `input.jsx-4253951613::placeholder{color:${$.grey600};opacity:1;}`, "input[type='date'].jsx-4253951613::-webkit-inner-spin-button,input[type='date'].jsx-4253951613::-webkit-calendar-picker-indicator,input[type='time'].jsx-4253951613::-webkit-inner-spin-button,input[type='time'].jsx-4253951613::-webkit-calendar-picker-indicator,input[type='datetime-local'].jsx-4253951613::-webkit-inner-spin-button,input[type='datetime-local'].jsx-4253951613::-webkit-calendar-picker-indicator{height:14px;padding-top:1px;padding-bottom:1px;}", "input[type='date'].jsx-4253951613::-webkit-datetime-edit-fields-wrapper,input[type='datetime-local'].jsx-4253951613::-webkit-datetime-edit-fields-wrapper,input[type='time'].jsx-4253951613::-webkit-datetime-edit-fields-wrapper{padding:0;}", `input.warning.jsx-4253951613{border-color:${nt.warning};}`, `input.error.jsx-4253951613{border-color:${nt.error};}`, `input.read-only.jsx-4253951613{background-color:${$.grey050};border-color:${$.grey300};box-shadow:none;cursor:text;}`, `input.disabled.jsx-4253951613{background-color:${$.grey100};border-color:${$.grey500};color:${nt.disabled};cursor:not-allowed;}`];
$o.__hash = "4253951613";
class Hm extends ee.Component {
    constructor() {
        super(...arguments),
        jo(this, "inputRef", I.createRef()),
        jo(this, "handleChange", t => {
            this.props.onChange && this.props.onChange(this.createHandlerPayload(t), t)
        }
        ),
        jo(this, "handleBlur", t => {
            this.props.onBlur && this.props.onBlur(this.createHandlerPayload(t), t)
        }
        ),
        jo(this, "handleFocus", t => {
            this.props.onFocus && this.props.onFocus(this.createHandlerPayload(t), t)
        }
        ),
        jo(this, "handleKeyDown", t => {
            this.props.onKeyDown && this.props.onKeyDown(this.createHandlerPayload(t), t)
        }
        ),
        jo(this, "handleClear", () => {
            this.props.onChange && this.props.onChange({
                value: "",
                name: this.props.name
            })
        }
        )
    }
    componentDidMount() {
        this.props.initialFocus && this.inputRef.current.focus()
    }
    createHandlerPayload(t) {
        return {
            value: t.target.value,
            name: this.props.name
        }
    }
    render() {
        const {role: t, className: n, type: r="text", dense: o, disabled: s, readOnly: l, placeholder: c, name: f, valid: h, error: v, warning: m, loading: x, value: E, tabIndex: T, max: N, min: B, step: P, autoComplete: O, dataTest: D="dhis2-uicore-input", clearable: z, prefixIcon: H, width: F} = this.props;
        return I.createElement("div", {
            "data-test": D,
            className: `jsx-${$o.__hash} ` + de.dynamic([["3324859945", [F || "100%", $.grey600, $.grey500]]]) + " " + (dn("input", n, {
                "input-prefix-icon": H
            }, {
                "input-clearable": z
            }) || "")
        }, H && I.createElement("span", {
            className: `jsx-${$o.__hash} ` + de.dynamic([["3324859945", [F || "100%", $.grey600, $.grey500]]]) + " prefix"
        }, H), I.createElement("input", {
            role: t,
            id: f,
            name: f,
            placeholder: c,
            ref: this.inputRef,
            type: r,
            value: E,
            max: N,
            min: B,
            step: P,
            disabled: s,
            readOnly: l,
            tabIndex: T,
            autoComplete: O,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onChange: this.handleChange,
            onKeyDown: this.handleKeyDown,
            className: `jsx-${$o.__hash} ` + de.dynamic([["3324859945", [F || "100%", $.grey600, $.grey500]]]) + " " + (dn({
                dense: o,
                disabled: s,
                error: v,
                valid: h,
                warning: m,
                "read-only": l
            }) || "")
        }), z && E !== null && E !== void 0 && E.length ? I.createElement("button", {
            type: "button",
            onClick: this.handleClear,
            className: `jsx-${$o.__hash} ` + de.dynamic([["3324859945", [F || "100%", $.grey600, $.grey500]]]) + " clear-button"
        }, I.createElement(Zg, {
            color: $.white
        })) : null, I.createElement(NS, {
            error: v,
            valid: h,
            loading: x,
            warning: m
        }), I.createElement(de, {
            id: $o.__hash
        }, $o), I.createElement(de, {
            id: "3324859945",
            dynamic: [F || "100%", $.grey600, $.grey500]
        }, [`.input.__jsx-style-dynamic-selector{width:${F || "100%"};}`, "input.__jsx-style-dynamic-selector{width:100%;}", ".input-prefix-icon.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{padding-inline-start:30px;}", ".input-clearable.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector{padding-inline-end:30px;}", `.prefix.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:none;left:10px;padding:0;color:${$.grey600};}`, `.clear-button.__jsx-style-dynamic-selector{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:none;cursor:pointer;height:16px;width:16px;border-radius:50%;right:10px;background:${$.grey500};padding:1px;}`]))
    }
}
jo(Hm, "defaultProps", {
    type: "text",
    dataTest: "dhis2-uicore-input"
});
Hm.propTypes = {
    autoComplete: b.string,
    className: b.string,
    clearable: b.bool,
    dataTest: b.string,
    dense: b.bool,
    disabled: b.bool,
    error: Vn,
    initialFocus: b.bool,
    loading: b.bool,
    max: b.string,
    min: b.string,
    name: b.string,
    placeholder: b.string,
    prefixIcon: b.element,
    readOnly: b.bool,
    role: b.string,
    step: b.string,
    tabIndex: b.string,
    type: b.oneOf(LS),
    valid: Vn,
    value: b.string,
    warning: Vn,
    width: b.string,
    onBlur: b.func,
    onChange: b.func,
    onFocus: b.func,
    onKeyDown: b.func
};
function JI(e, t, n) {
    return (t = XI(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function XI(e) {
    var t = eM(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function eM(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
class yf extends I.Component {
    render() {
        const {className: t, onChange: n, onFocus: r, onKeyDown: o, onBlur: s, initialFocus: l, type: c, dense: f, required: h, label: v, disabled: m, readOnly: x, placeholder: E, name: T, max: N, min: B, step: P, valid: O, error: D, warning: z, loading: H, value: F, tabIndex: W, helpText: G, validationText: ye, inputWidth: ge, autoComplete: Ce, clearable: st, prefixIcon: ut, dataTest: Kt="dhis2-uiwidgets-inputfield"} = this.props;
        return I.createElement(P_, {
            className: t,
            dataTest: Kt,
            error: D,
            warning: z,
            valid: O,
            helpText: G,
            validationText: ye,
            label: v,
            name: T,
            disabled: m,
            required: h
        }, I.createElement(Vc, {
            width: ge,
            minWidth: "72px"
        }, I.createElement(Hm, {
            onFocus: r,
            onKeyDown: o,
            onBlur: s,
            onChange: n,
            name: T,
            type: c,
            value: F || "",
            placeholder: E,
            disabled: m,
            max: N,
            min: B,
            step: P,
            valid: O,
            warning: z,
            error: D,
            loading: H,
            dense: f,
            tabIndex: W,
            initialFocus: l,
            readOnly: x,
            autoComplete: Ce,
            clearable: st,
            prefixIcon: ut,
            width: ge
        })))
    }
}
JI(yf, "defaultProps", {
    dataTest: "dhis2-uiwidgets-inputfield"
});
const tM = {
    autoComplete: b.string,
    className: b.string,
    clearable: b.bool,
    dataTest: b.string,
    dense: b.bool,
    disabled: b.bool,
    error: Vn,
    helpText: b.string,
    initialFocus: b.bool,
    inputWidth: b.string,
    label: b.string,
    loading: b.bool,
    max: b.string,
    min: b.string,
    name: b.string,
    placeholder: b.string,
    prefixIcon: b.element,
    readOnly: b.bool,
    required: b.bool,
    step: b.string,
    tabIndex: b.string,
    type: b.oneOf(LS),
    valid: Vn,
    validationText: b.string,
    value: b.string,
    warning: Vn,
    onBlur: b.func,
    onChange: b.func,
    onFocus: b.func,
    onKeyDown: b.func
};
yf.propTypes = tM;
function nM(e, t, n) {
    return (t = rM(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function rM(e) {
    var t = iM(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function iM(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
class jS extends ee.Component {
    constructor() {
        super(...arguments),
        nM(this, "onClick", t => {
            this.props.onClick(t),
            this.props.hide(t)
        }
        )
    }
    render() {
        return I.createElement("span", {
            onClick: this.onClick,
            "data-test": this.props.dataTest,
            className: de.dynamic([["918162538", [_e.dp12]]])
        }, this.props.label, I.createElement(de, {
            id: "918162538",
            dynamic: [_e.dp12]
        }, [`span.__jsx-style-dynamic-selector{margin-inline-end:${_e.dp12};-webkit-text-decoration:underline;text-decoration:underline;white-space:nowrap;}`, "span.__jsx-style-dynamic-selector:hover{cursor:pointer;}"]))
    }
}
jS.propTypes = {
    dataTest: b.string.isRequired,
    hide: b.func.isRequired,
    label: b.string.isRequired,
    onClick: b.func.isRequired
};
function wg() {
    return wg = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    wg.apply(null, arguments)
}
const $S = e => {
    let {actions: t, hide: n, dataTest: r} = e;
    return t ? I.createElement("div", {
        className: de.dynamic([["793807948", [_e.dp48, _e.dp12]]])
    }, t.map(o => I.createElement(jS, wg({
        key: o.label
    }, o, {
        hide: n,
        dataTest: `${r}-action`
    }))), I.createElement(de, {
        id: "793807948",
        dynamic: [_e.dp48, _e.dp12]
    }, [`div.__jsx-style-dynamic-selector{margin-inline-start:${_e.dp48};margin-inline-end:-${_e.dp12};}`])) : null
}
  , FS = j3(0, 2, b.shape({
    label: b.string.isRequired,
    onClick: b.func.isRequired
}));
$S.propTypes = {
    dataTest: b.string.isRequired,
    hide: b.func.isRequired,
    actions: FS
};
const Ys = 350
  , $c = [`div.jsx-1114274882{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:4px;box-shadow:${Oc.e300};padding-top:${_e.dp8};padding-inline-end:${_e.dp8};padding-bottom:${_e.dp8};padding-inline-start:${_e.dp24};margin-bottom:${_e.dp16};max-width:600px;min-width:300px;font-size:14px;pointer-events:all;}`, `div.info.jsx-1114274882{background-color:${$.grey900};color:${$.white};}`, `div.success.jsx-1114274882{background-color:${$.green800};color:${$.white};}`, `div.warning.jsx-1114274882{background-color:${$.yellow300};color:${$.yellow900};}`, `div.critical.jsx-1114274882{background-color:${$.red800};color:${$.white};}`, "@-webkit-keyframes slidein-jsx-1114274882{from{-webkit-transform:translateY(1000px);-ms-transform:translateY(1000px);transform:translateY(1000px);}to{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@keyframes slidein-jsx-1114274882{from{-webkit-transform:translateY(1000px);-ms-transform:translateY(1000px);transform:translateY(1000px);}to{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}", "@-webkit-keyframes slideout-jsx-1114274882{from{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}to{-webkit-transform:translateY(1000px);-ms-transform:translateY(1000px);transform:translateY(1000px);}}", "@keyframes slideout-jsx-1114274882{from{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}to{-webkit-transform:translateY(1000px);-ms-transform:translateY(1000px);transform:translateY(1000px);}}", `div.inViewport.jsx-1114274882{-webkit-animation-duration:${Ys}ms;animation-duration:${Ys}ms;-webkit-animation-name:slidein-jsx-1114274882;animation-name:slidein-jsx-1114274882;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.4,0,0.6,1);animation-timing-function:cubic-bezier(0.4,0,0.6,1);}`, `div.jsx-1114274882{-webkit-animation-duration:${Ys}ms;animation-duration:${Ys}ms;-webkit-animation-name:slideout-jsx-1114274882;animation-name:slideout-jsx-1114274882;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:cubic-bezier(0.4,0,0.6,1);animation-timing-function:cubic-bezier(0.4,0,0.6,1);}`];
$c.__hash = "1114274882";
const WS = e => {
    let {onClick: t, dataTest: n} = e;
    return I.createElement("div", {
        onClick: t,
        "data-test": n,
        className: de.dynamic([["1892313381", [_e.dp16]]])
    }, I.createElement(S_, null), I.createElement(de, {
        id: "1892313381",
        dynamic: [_e.dp16]
    }, [`div.__jsx-style-dynamic-selector{margin-inline-start:${_e.dp16};min-height:32px;min-width:32px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:5px;}`, "div.__jsx-style-dynamic-selector:hover{cursor:pointer;background:rgba(0,0,0,0.15);}", "div.__jsx-style-dynamic-selector:active{background:rgba(0,0,0,0.25);}", "div.__jsx-style-dynamic-selector svg{width:18px;height:18px;}"]))
}
;
WS.propTypes = {
    dataTest: b.string.isRequired,
    onClick: b.func.isRequired
};
const zS = e => {
    let {error: t, warning: n, valid: r, info: o, defaultTo: s=null} = e;
    return t ? I.createElement(Df, {
        color: $.white
    }) : n ? I.createElement(If, {
        color: $.yellow900
    }) : r ? I.createElement(Kg, {
        color: $.white
    }) : o ? I.createElement(Jg, {
        color: $.white
    }) : s
}
;
zS.propTypes = {
    defaultTo: b.element,
    error: b.bool,
    info: b.bool,
    valid: b.bool,
    warning: b.bool
};
const US = e => {
    let {icon: t, success: n, warning: r, critical: o, info: s, dataTest: l} = e;
    return t === !1 ? null : I.createElement("div", {
        "data-test": l,
        className: de.dynamic([["719386130", [_e.dp16]]])
    }, I.isValidElement(t) ? t : I.createElement(zS, {
        valid: n,
        error: o,
        warning: r,
        info: s
    }), I.createElement(de, {
        id: "719386130",
        dynamic: [_e.dp16]
    }, [`div.__jsx-style-dynamic-selector{margin-inline-end:${_e.dp16};}`]))
}
  , YS = b.oneOfType([b.bool, b.element])
  , xc = Zr(["success", "warning", "critical", "info"], b.bool);
US.propTypes = {
    dataTest: b.string.isRequired,
    critical: xc,
    icon: YS,
    info: xc,
    success: xc,
    warning: xc
};
const BS = e => {
    let {children: t} = e;
    return I.createElement("div", {
        className: "jsx-2181391309"
    }, t, I.createElement(de, {
        id: "2181391309"
    }, ["div.jsx-2181391309{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}"]))
}
;
BS.propTypes = {
    children: b.string.isRequired
};
const HS = e => {
    let {actions: t, children: n, className: r, critical: o, dataTest: s="dhis2-uicore-alertbar", duration: l=8e3, hidden: c, icon: f=!0, permanent: h, success: v, warning: m, onHidden: x} = e;
    const [E,T] = ee.useState(!c)
      , [N,B] = ee.useState(!c)
      , P = ee.useRef(null)
      , O = ee.useRef(null)
      , D = ee.useRef(null)
      , z = ee.useRef(null)
      , H = ee.useRef(null)
      , F = !o && !v && !m
      , W = !(h || m || o)
      , G = () => {
        B(!0),
        T(!0)
    }
      , ye = () => {
        B(!0),
        T(!1)
    }
      , ge = () => {
        B(!1),
        T(!1),
        x && x({}, null)
    }
      , Ce = () => {
        clearTimeout(P.current),
        clearTimeout(O.current),
        clearTimeout(D.current)
    }
      , st = () => {
        Ce(),
        ye(),
        D.current = setTimeout(ge, Ys)
    }
      , ut = () => {
        W && (Ce(),
        z.current = Date.now(),
        H.current = l,
        O.current = setTimeout(st, H.current))
    }
      , Kt = () => {
        Ce(),
        G(),
        P.current = setTimeout(ut, Ys)
    }
      , Zt = () => {
        if (W) {
            Ce();
            const xt = Date.now() - z.current;
            H.current -= xt
        }
    }
      , gt = () => {
        W && (Ce(),
        O.current = setTimeout(st, H.current))
    }
    ;
    return ee.useEffect( () => (c && N && st(),
    c || Kt(),
    Ce), [c]),
    N ? I.createElement("div", {
        "data-test": s,
        onMouseEnter: Zt,
        onMouseLeave: gt,
        className: `jsx-${$c.__hash} ` + (dn(r, {
            info: F,
            success: v,
            warning: m,
            critical: o,
            inViewport: E
        }) || "")
    }, I.createElement(US, {
        dataTest: `${s}-icon`,
        icon: f,
        critical: o,
        success: v,
        warning: m,
        info: F
    }), I.createElement(BS, null, n), I.createElement($S, {
        actions: t,
        hide: st,
        dataTest: s
    }), I.createElement(WS, {
        onClick: st,
        dataTest: `${s}-dismiss`
    }), I.createElement(de, {
        id: $c.__hash
    }, $c)) : null
}
  , lp = Zr(["success", "warning", "critical"], b.bool);
HS.propTypes = {
    actions: FS,
    children: b.string,
    className: b.string,
    critical: lp,
    dataTest: b.string,
    duration: b.number,
    hidden: b.bool,
    icon: YS,
    permanent: b.bool,
    success: lp,
    warning: lp,
    onHidden: b.func
};
const VS = e => {
    let {className: t, children: n, dataTest: r="dhis2-uicore-alertstack"} = e;
    return I.createElement(Ym, null, I.createElement("div", {
        "data-test": r,
        className: de.dynamic([["1009591311", [ul.alert]]]) + " " + (dn(t) || "")
    }, n, I.createElement(de, {
        id: "1009591311",
        dynamic: [ul.alert]
    }, [`div.__jsx-style-dynamic-selector{position:fixed;top:auto;inset-inline-end:auto;bottom:0;inset-inline-start:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:${ul.alert};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;pointer-events:none;}`, "div.__jsx-style-dynamic-selector:dir(rtl){-webkit-transform:translateX(50%);-ms-transform:translateX(50%);transform:translateX(50%);}"])))
}
;
VS.propTypes = {
    children: b.node,
    className: b.string,
    dataTest: b.string
};
const GS = e => {
    let {className: t, children: n, dataTest: r="dhis2-uicore-card"} = e;
    return I.createElement("div", {
        "data-test": r,
        className: de.dynamic([["3454125090", [$.white, Oc.e100]]]) + " " + (dn(t) || "")
    }, n, I.createElement(de, {
        id: "3454125090",
        dynamic: [$.white, Oc.e100]
    }, [`div.__jsx-style-dynamic-selector{display:inline-block;position:relative;width:100%;height:100%;border-radius:3px;background:${$.white};box-shadow:${Oc.e100};}`]))
}
;
GS.propTypes = {
    children: b.node,
    className: b.string,
    dataTest: b.string
};
const Ql = ee.forwardRef( (e, t) => {
    let {className: n, dataTest: r="dhis2-uicore-centeredcontent", children: o, position: s="middle"} = e;
    return I.createElement("div", {
        "data-test": r,
        ref: t,
        className: "jsx-498096601 " + (dn("center", n, s) || "")
    }, I.createElement("div", {
        className: "jsx-498096601 center-inner-content"
    }, o), I.createElement(de, {
        id: "498096601"
    }, [".center.jsx-498096601{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;pointer-events:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".center.top.jsx-498096601{-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}", ".center.bottom.jsx-498096601{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}", ".center-inner-content.jsx-498096601{pointer-events:all;}"]))
}
);
Ql.displayName = "Center";
Ql.propTypes = {
    children: b.node,
    className: b.string,
    dataTest: b.string,
    position: b.oneOf(["top", "middle", "bottom"])
};
const oM = () => I.createElement(de, {
    id: "3745978156",
    dynamic: [nt.fonts, nt.fonts]
}, ["html{line-height:1.15;-webkit-text-size-adjust:100%;box-sizing:border-box;}", `*,*:before,*:after{font-family:${nt.fonts};box-sizing:inherit;}`, `body{margin:0;font-family:${nt.fonts};}`, "main{display:block;}", "h1{font-size:2em;margin:0.67em 0;}", "hr{box-sizing:content-box;height:0;overflow:visible;}", "pre{font-family:monospace,monospace;font-size:1em;}", "a{background-color:transparent;}", "abbr[title]{border-bottom:none;-webkit-text-decoration:underline;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}", "b,strong{font-weight:bolder;}", "code,kbd,samp{font-family:monospace,monospace;font-size:1em;}", "small{font-size:80%;}", "sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}", "sub{bottom:-0.25em;}", "sup{top:-0.5em;}", "img{border-style:none;}", "button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}", "button,input{overflow:visible;}", "button,select{text-transform:none;}", "button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance:button;}", "button::-moz-focus-inner,[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner{border-style:none;padding:0;}", "button:-moz-focusring,[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring{outline:1px dotted ButtonText;}", "fieldset{padding:0.35em 0.75em 0.625em;}", "legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}", "progress{vertical-align:baseline;}", "textarea{overflow:auto;}", "[type='checkbox'],[type='radio']{box-sizing:border-box;padding:0;}", "[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}", "[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}", "[type='search']::-webkit-search-decoration{-webkit-appearance:none;}", "::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}", "details{display:block;}", "summary{display:list-item;}", "template{display:none;}", "[hidden]{display:none;}"]);
class Kl {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(t) {
        const n = {
            listener: t
        };
        return this.listeners.add(n),
        this.onSubscribe(),
        () => {
            this.listeners.delete(n),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
const $l = typeof window > "u" || "Deno" in window;
function ur() {}
function sM(e, t) {
    return typeof e == "function" ? e(t) : e
}
function _g(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function qS(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function ol(e, t, n) {
    return Qf(e) ? typeof t == "function" ? {
        ...n,
        queryKey: e,
        queryFn: t
    } : {
        ...t,
        queryKey: e
    } : e
}
function Qi(e, t, n) {
    return Qf(e) ? [{
        ...t,
        queryKey: e
    }, n] : [e || {}, t]
}
function iw(e, t) {
    const {type: n="all", exact: r, fetchStatus: o, predicate: s, queryKey: l, stale: c} = e;
    if (Qf(l)) {
        if (r) {
            if (t.queryHash !== Vm(l, t.options))
                return !1
        } else if (!wf(t.queryKey, l))
            return !1
    }
    if (n !== "all") {
        const f = t.isActive();
        if (n === "active" && !f || n === "inactive" && f)
            return !1
    }
    return !(typeof c == "boolean" && t.isStale() !== c || typeof o < "u" && o !== t.state.fetchStatus || s && !s(t))
}
function ow(e, t) {
    const {exact: n, fetching: r, predicate: o, mutationKey: s} = e;
    if (Qf(s)) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (Uo(t.options.mutationKey) !== Uo(s))
                return !1
        } else if (!wf(t.options.mutationKey, s))
            return !1
    }
    return !(typeof r == "boolean" && t.state.status === "loading" !== r || o && !o(t))
}
function Vm(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Uo)(e)
}
function Uo(e) {
    return JSON.stringify(e, (t, n) => Sg(n) ? Object.keys(n).sort().reduce( (r, o) => (r[o] = n[o],
    r), {}) : n)
}
function wf(e, t) {
    return QS(e, t)
}
function QS(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !QS(e[n], t[n])) : !1
}
function KS(e, t) {
    if (e === t)
        return e;
    const n = sw(e) && sw(t);
    if (n || Sg(e) && Sg(t)) {
        const r = n ? e.length : Object.keys(e).length
          , o = n ? t : Object.keys(t)
          , s = o.length
          , l = n ? [] : {};
        let c = 0;
        for (let f = 0; f < s; f++) {
            const h = n ? f : o[f];
            l[h] = KS(e[h], t[h]),
            l[h] === e[h] && c++
        }
        return r === s && c === r ? e : l
    }
    return t
}
function xg(e, t) {
    if (e && !t || t && !e)
        return !1;
    for (const n in e)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function sw(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function Sg(e) {
    if (!aw(e))
        return !1;
    const t = e.constructor;
    if (typeof t > "u")
        return !0;
    const n = t.prototype;
    return !(!aw(n) || !n.hasOwnProperty("isPrototypeOf"))
}
function aw(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function Qf(e) {
    return Array.isArray(e)
}
function ZS(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function lw(e) {
    ZS(0).then(e)
}
function aM() {
    if (typeof AbortController == "function")
        return new AbortController
}
function bg(e, t, n) {
    return n.isDataEqual != null && n.isDataEqual(e, t) ? e : typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? KS(e, t) : t
}
class lM extends Kl {
    constructor() {
        super(),
        this.setup = t => {
            if (!$l && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                window.addEventListener("focus", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n),
                    window.removeEventListener("focus", n)
                }
            }
        }
    }
    onSubscribe() {
        this.cleanup || this.setEventListener(this.setup)
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            var t;
            (t = this.cleanup) == null || t.call(this),
            this.cleanup = void 0
        }
    }
    setEventListener(t) {
        var n;
        this.setup = t,
        (n = this.cleanup) == null || n.call(this),
        this.cleanup = t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        )
    }
    setFocused(t) {
        this.focused !== t && (this.focused = t,
        this.onFocus())
    }
    onFocus() {
        this.listeners.forEach( ({listener: t}) => {
            t()
        }
        )
    }
    isFocused() {
        return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState)
    }
}
const _f = new lM
  , uw = ["online", "offline"];
class uM extends Kl {
    constructor() {
        super(),
        this.setup = t => {
            if (!$l && window.addEventListener) {
                const n = () => t();
                return uw.forEach(r => {
                    window.addEventListener(r, n, !1)
                }
                ),
                () => {
                    uw.forEach(r => {
                        window.removeEventListener(r, n)
                    }
                    )
                }
            }
        }
    }
    onSubscribe() {
        this.cleanup || this.setEventListener(this.setup)
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            var t;
            (t = this.cleanup) == null || t.call(this),
            this.cleanup = void 0
        }
    }
    setEventListener(t) {
        var n;
        this.setup = t,
        (n = this.cleanup) == null || n.call(this),
        this.cleanup = t(r => {
            typeof r == "boolean" ? this.setOnline(r) : this.onOnline()
        }
        )
    }
    setOnline(t) {
        this.online !== t && (this.online = t,
        this.onOnline())
    }
    onOnline() {
        this.listeners.forEach( ({listener: t}) => {
            t()
        }
        )
    }
    isOnline() {
        return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine
    }
}
const xf = new uM;
function cM(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Kf(e) {
    return (e ?? "online") === "online" ? xf.isOnline() : !0
}
class JS {
    constructor(t) {
        this.revert = t == null ? void 0 : t.revert,
        this.silent = t == null ? void 0 : t.silent
    }
}
function Fc(e) {
    return e instanceof JS
}
function XS(e) {
    let t = !1, n = 0, r = !1, o, s, l;
    const c = new Promise( (B, P) => {
        s = B,
        l = P
    }
    )
      , f = B => {
        r || (E(new JS(B)),
        e.abort == null || e.abort())
    }
      , h = () => {
        t = !0
    }
      , v = () => {
        t = !1
    }
      , m = () => !_f.isFocused() || e.networkMode !== "always" && !xf.isOnline()
      , x = B => {
        r || (r = !0,
        e.onSuccess == null || e.onSuccess(B),
        o == null || o(),
        s(B))
    }
      , E = B => {
        r || (r = !0,
        e.onError == null || e.onError(B),
        o == null || o(),
        l(B))
    }
      , T = () => new Promise(B => {
        o = P => {
            const O = r || !m();
            return O && B(P),
            O
        }
        ,
        e.onPause == null || e.onPause()
    }
    ).then( () => {
        o = void 0,
        r || e.onContinue == null || e.onContinue()
    }
    )
      , N = () => {
        if (r)
            return;
        let B;
        try {
            B = e.fn()
        } catch (P) {
            B = Promise.reject(P)
        }
        Promise.resolve(B).then(x).catch(P => {
            var O, D;
            if (r)
                return;
            const z = (O = e.retry) != null ? O : 3
              , H = (D = e.retryDelay) != null ? D : cM
              , F = typeof H == "function" ? H(n, P) : H
              , W = z === !0 || typeof z == "number" && n < z || typeof z == "function" && z(n, P);
            if (t || !W) {
                E(P);
                return
            }
            n++,
            e.onFail == null || e.onFail(n, P),
            ZS(F).then( () => {
                if (m())
                    return T()
            }
            ).then( () => {
                t ? E(P) : N()
            }
            )
        }
        )
    }
    ;
    return Kf(e.networkMode) ? N() : T().then(N),
    {
        promise: c,
        cancel: f,
        continue: () => (o == null ? void 0 : o()) ? c : Promise.resolve(),
        cancelRetry: h,
        continueRetry: v
    }
}
const Gm = console;
function fM() {
    let e = []
      , t = 0
      , n = v => {
        v()
    }
      , r = v => {
        v()
    }
    ;
    const o = v => {
        let m;
        t++;
        try {
            m = v()
        } finally {
            t--,
            t || c()
        }
        return m
    }
      , s = v => {
        t ? e.push(v) : lw( () => {
            n(v)
        }
        )
    }
      , l = v => (...m) => {
        s( () => {
            v(...m)
        }
        )
    }
      , c = () => {
        const v = e;
        e = [],
        v.length && lw( () => {
            r( () => {
                v.forEach(m => {
                    n(m)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: o,
        batchCalls: l,
        schedule: s,
        setNotifyFunction: v => {
            n = v
        }
        ,
        setBatchNotifyFunction: v => {
            r = v
        }
    }
}
const Ft = fM();
class eb {
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        _g(this.cacheTime) && (this.gcTimeout = setTimeout( () => {
            this.optionalRemove()
        }
        , this.cacheTime))
    }
    updateCacheTime(t) {
        this.cacheTime = Math.max(this.cacheTime || 0, t ?? ($l ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        this.gcTimeout && (clearTimeout(this.gcTimeout),
        this.gcTimeout = void 0)
    }
}
class dM extends eb {
    constructor(t) {
        super(),
        this.abortSignalConsumed = !1,
        this.defaultOptions = t.defaultOptions,
        this.setOptions(t.options),
        this.observers = [],
        this.cache = t.cache,
        this.logger = t.logger || Gm,
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        this.initialState = t.state || hM(this.options),
        this.state = this.initialState,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    setOptions(t) {
        this.options = {
            ...this.defaultOptions,
            ...t
        },
        this.updateCacheTime(this.options.cacheTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this)
    }
    setData(t, n) {
        const r = bg(this.state.data, t, this.options);
        return this.dispatch({
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        this.dispatch({
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var n;
        const r = this.promise;
        return (n = this.retryer) == null || n.cancel(t),
        r ? r.then(ur).catch(ur) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.initialState)
    }
    isActive() {
        return this.observers.some(t => t.options.enabled !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive()
    }
    isStale() {
        return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(t => t.getCurrentResult().isStale)
    }
    isStaleByTime(t=0) {
        return this.state.isInvalidated || !this.state.dataUpdatedAt || !qS(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var t;
        const n = this.observers.find(r => r.shouldFetchOnWindowFocus());
        n && n.refetch({
            cancelRefetch: !1
        }),
        (t = this.retryer) == null || t.continue()
    }
    onOnline() {
        var t;
        const n = this.observers.find(r => r.shouldFetchOnReconnect());
        n && n.refetch({
            cancelRefetch: !1
        }),
        (t = this.retryer) == null || t.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
            revert: !0
        }) : this.retryer.cancelRetry()),
        this.scheduleGc()),
        this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.dispatch({
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var r, o;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.promise) {
                var s;
                return (s = this.retryer) == null || s.continueRetry(),
                this.promise
            }
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const E = this.observers.find(T => T.options.queryFn);
            E && this.setOptions(E.options)
        }
        const l = aM()
          , c = {
            queryKey: this.queryKey,
            pageParam: void 0,
            meta: this.meta
        }
          , f = E => {
            Object.defineProperty(E, "signal", {
                enumerable: !0,
                get: () => {
                    if (l)
                        return this.abortSignalConsumed = !0,
                        l.signal
                }
            })
        }
        ;
        f(c);
        const h = () => this.options.queryFn ? (this.abortSignalConsumed = !1,
        this.options.queryFn(c)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'")
          , v = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: h
        };
        if (f(v),
        (r = this.options.behavior) == null || r.onFetch(v),
        this.revertState = this.state,
        this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((o = v.fetchOptions) == null ? void 0 : o.meta)) {
            var m;
            this.dispatch({
                type: "fetch",
                meta: (m = v.fetchOptions) == null ? void 0 : m.meta
            })
        }
        const x = E => {
            if (Fc(E) && E.silent || this.dispatch({
                type: "error",
                error: E
            }),
            !Fc(E)) {
                var T, N, B, P;
                (T = (N = this.cache.config).onError) == null || T.call(N, E, this),
                (B = (P = this.cache.config).onSettled) == null || B.call(P, this.state.data, E, this)
            }
            this.isFetchingOptimistic || this.scheduleGc(),
            this.isFetchingOptimistic = !1
        }
        ;
        return this.retryer = XS({
            fn: v.fetchFn,
            abort: l == null ? void 0 : l.abort.bind(l),
            onSuccess: E => {
                var T, N, B, P;
                if (typeof E > "u") {
                    x(new Error(this.queryHash + " data is undefined"));
                    return
                }
                this.setData(E),
                (T = (N = this.cache.config).onSuccess) == null || T.call(N, E, this),
                (B = (P = this.cache.config).onSettled) == null || B.call(P, E, this.state.error, this),
                this.isFetchingOptimistic || this.scheduleGc(),
                this.isFetchingOptimistic = !1
            }
            ,
            onError: x,
            onFail: (E, T) => {
                this.dispatch({
                    type: "failed",
                    failureCount: E,
                    error: T
                })
            }
            ,
            onPause: () => {
                this.dispatch({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.dispatch({
                    type: "continue"
                })
            }
            ,
            retry: v.options.retry,
            retryDelay: v.options.retryDelay,
            networkMode: v.options.networkMode
        }),
        this.promise = this.retryer.promise,
        this.promise
    }
    dispatch(t) {
        const n = r => {
            var o, s;
            switch (t.type) {
            case "failed":
                return {
                    ...r,
                    fetchFailureCount: t.failureCount,
                    fetchFailureReason: t.error
                };
            case "pause":
                return {
                    ...r,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...r,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...r,
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchMeta: (o = t.meta) != null ? o : null,
                    fetchStatus: Kf(this.options.networkMode) ? "fetching" : "paused",
                    ...!r.dataUpdatedAt && {
                        error: null,
                        status: "loading"
                    }
                };
            case "success":
                return {
                    ...r,
                    data: t.data,
                    dataUpdateCount: r.dataUpdateCount + 1,
                    dataUpdatedAt: (s = t.dataUpdatedAt) != null ? s : Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...!t.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
            case "error":
                const l = t.error;
                return Fc(l) && l.revert && this.revertState ? {
                    ...this.revertState,
                    fetchStatus: "idle"
                } : {
                    ...r,
                    error: l,
                    errorUpdateCount: r.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: r.fetchFailureCount + 1,
                    fetchFailureReason: l,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...r,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...r,
                    ...t.state
                }
            }
        }
        ;
        this.state = n(this.state),
        Ft.batch( () => {
            this.observers.forEach(r => {
                r.onQueryUpdate(t)
            }
            ),
            this.cache.notify({
                query: this,
                type: "updated",
                action: t
            })
        }
        )
    }
}
function hM(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = typeof t < "u"
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "loading",
        fetchStatus: "idle"
    }
}
class pM extends Kl {
    constructor(t) {
        super(),
        this.config = t || {},
        this.queries = [],
        this.queriesMap = {}
    }
    build(t, n, r) {
        var o;
        const s = n.queryKey
          , l = (o = n.queryHash) != null ? o : Vm(s, n);
        let c = this.get(l);
        return c || (c = new dM({
            cache: this,
            logger: t.getLogger(),
            queryKey: s,
            queryHash: l,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(s)
        }),
        this.add(c)),
        c
    }
    add(t) {
        this.queriesMap[t.queryHash] || (this.queriesMap[t.queryHash] = t,
        this.queries.push(t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = this.queriesMap[t.queryHash];
        n && (t.destroy(),
        this.queries = this.queries.filter(r => r !== t),
        n === t && delete this.queriesMap[t.queryHash],
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Ft.batch( () => {
            this.queries.forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return this.queriesMap[t]
    }
    getAll() {
        return this.queries
    }
    find(t, n) {
        const [r] = Qi(t, n);
        return typeof r.exact > "u" && (r.exact = !0),
        this.queries.find(o => iw(r, o))
    }
    findAll(t, n) {
        const [r] = Qi(t, n);
        return Object.keys(r).length > 0 ? this.queries.filter(o => iw(r, o)) : this.queries
    }
    notify(t) {
        Ft.batch( () => {
            this.listeners.forEach( ({listener: n}) => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Ft.batch( () => {
            this.queries.forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Ft.batch( () => {
            this.queries.forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
class gM extends eb {
    constructor(t) {
        super(),
        this.defaultOptions = t.defaultOptions,
        this.mutationId = t.mutationId,
        this.mutationCache = t.mutationCache,
        this.logger = t.logger || Gm,
        this.observers = [],
        this.state = t.state || mM(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = {
            ...this.defaultOptions,
            ...t
        },
        this.updateCacheTime(this.options.cacheTime)
    }
    get meta() {
        return this.options.meta
    }
    setState(t) {
        this.dispatch({
            type: "setState",
            state: t
        })
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        this.mutationCache.notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers = this.observers.filter(n => n !== t),
        this.scheduleGc(),
        this.mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this))
    }
    continue() {
        var t, n;
        return (t = (n = this.retryer) == null ? void 0 : n.continue()) != null ? t : this.execute()
    }
    async execute() {
        const t = () => {
            var W;
            return this.retryer = XS({
                fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                onFail: (G, ye) => {
                    this.dispatch({
                        type: "failed",
                        failureCount: G,
                        error: ye
                    })
                }
                ,
                onPause: () => {
                    this.dispatch({
                        type: "pause"
                    })
                }
                ,
                onContinue: () => {
                    this.dispatch({
                        type: "continue"
                    })
                }
                ,
                retry: (W = this.options.retry) != null ? W : 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode
            }),
            this.retryer.promise
        }
          , n = this.state.status === "loading";
        try {
            var r, o, s, l, c, f, h, v;
            if (!n) {
                var m, x, E, T;
                this.dispatch({
                    type: "loading",
                    variables: this.options.variables
                }),
                await ((m = (x = this.mutationCache.config).onMutate) == null ? void 0 : m.call(x, this.state.variables, this));
                const G = await ((E = (T = this.options).onMutate) == null ? void 0 : E.call(T, this.state.variables));
                G !== this.state.context && this.dispatch({
                    type: "loading",
                    context: G,
                    variables: this.state.variables
                })
            }
            const W = await t();
            return await ((r = (o = this.mutationCache.config).onSuccess) == null ? void 0 : r.call(o, W, this.state.variables, this.state.context, this)),
            await ((s = (l = this.options).onSuccess) == null ? void 0 : s.call(l, W, this.state.variables, this.state.context)),
            await ((c = (f = this.mutationCache.config).onSettled) == null ? void 0 : c.call(f, W, null, this.state.variables, this.state.context, this)),
            await ((h = (v = this.options).onSettled) == null ? void 0 : h.call(v, W, null, this.state.variables, this.state.context)),
            this.dispatch({
                type: "success",
                data: W
            }),
            W
        } catch (W) {
            try {
                var N, B, P, O, D, z, H, F;
                throw await ((N = (B = this.mutationCache.config).onError) == null ? void 0 : N.call(B, W, this.state.variables, this.state.context, this)),
                await ((P = (O = this.options).onError) == null ? void 0 : P.call(O, W, this.state.variables, this.state.context)),
                await ((D = (z = this.mutationCache.config).onSettled) == null ? void 0 : D.call(z, void 0, W, this.state.variables, this.state.context, this)),
                await ((H = (F = this.options).onSettled) == null ? void 0 : H.call(F, void 0, W, this.state.variables, this.state.context)),
                W
            } finally {
                this.dispatch({
                    type: "error",
                    error: W
                })
            }
        }
    }
    dispatch(t) {
        const n = r => {
            switch (t.type) {
            case "failed":
                return {
                    ...r,
                    failureCount: t.failureCount,
                    failureReason: t.error
                };
            case "pause":
                return {
                    ...r,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...r,
                    isPaused: !1
                };
            case "loading":
                return {
                    ...r,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: !Kf(this.options.networkMode),
                    status: "loading",
                    variables: t.variables
                };
            case "success":
                return {
                    ...r,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...r,
                    data: void 0,
                    error: t.error,
                    failureCount: r.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error"
                };
            case "setState":
                return {
                    ...r,
                    ...t.state
                }
            }
        }
        ;
        this.state = n(this.state),
        Ft.batch( () => {
            this.observers.forEach(r => {
                r.onMutationUpdate(t)
            }
            ),
            this.mutationCache.notify({
                mutation: this,
                type: "updated",
                action: t
            })
        }
        )
    }
}
function mM() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0
    }
}
class vM extends Kl {
    constructor(t) {
        super(),
        this.config = t || {},
        this.mutations = [],
        this.mutationId = 0
    }
    build(t, n, r) {
        const o = new gM({
            mutationCache: this,
            logger: t.getLogger(),
            mutationId: ++this.mutationId,
            options: t.defaultMutationOptions(n),
            state: r,
            defaultOptions: n.mutationKey ? t.getMutationDefaults(n.mutationKey) : void 0
        });
        return this.add(o),
        o
    }
    add(t) {
        this.mutations.push(t),
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        this.mutations = this.mutations.filter(n => n !== t),
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    clear() {
        Ft.batch( () => {
            this.mutations.forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    getAll() {
        return this.mutations
    }
    find(t) {
        return typeof t.exact > "u" && (t.exact = !0),
        this.mutations.find(n => ow(t, n))
    }
    findAll(t) {
        return this.mutations.filter(n => ow(t, n))
    }
    notify(t) {
        Ft.batch( () => {
            this.listeners.forEach( ({listener: n}) => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        var t;
        return this.resuming = ((t = this.resuming) != null ? t : Promise.resolve()).then( () => {
            const n = this.mutations.filter(r => r.state.isPaused);
            return Ft.batch( () => n.reduce( (r, o) => r.then( () => o.continue().catch(ur)), Promise.resolve()))
        }
        ).then( () => {
            this.resuming = void 0
        }
        ),
        this.resuming
    }
}
function yM() {
    return {
        onFetch: e => {
            e.fetchFn = () => {
                var t, n, r, o, s, l;
                const c = (t = e.fetchOptions) == null || (n = t.meta) == null ? void 0 : n.refetchPage
                  , f = (r = e.fetchOptions) == null || (o = r.meta) == null ? void 0 : o.fetchMore
                  , h = f == null ? void 0 : f.pageParam
                  , v = (f == null ? void 0 : f.direction) === "forward"
                  , m = (f == null ? void 0 : f.direction) === "backward"
                  , x = ((s = e.state.data) == null ? void 0 : s.pages) || []
                  , E = ((l = e.state.data) == null ? void 0 : l.pageParams) || [];
                let T = E
                  , N = !1;
                const B = F => {
                    Object.defineProperty(F, "signal", {
                        enumerable: !0,
                        get: () => {
                            var W;
                            if ((W = e.signal) != null && W.aborted)
                                N = !0;
                            else {
                                var G;
                                (G = e.signal) == null || G.addEventListener("abort", () => {
                                    N = !0
                                }
                                )
                            }
                            return e.signal
                        }
                    })
                }
                  , P = e.options.queryFn || ( () => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'"))
                  , O = (F, W, G, ye) => (T = ye ? [W, ...T] : [...T, W],
                ye ? [G, ...F] : [...F, G])
                  , D = (F, W, G, ye) => {
                    if (N)
                        return Promise.reject("Cancelled");
                    if (typeof G > "u" && !W && F.length)
                        return Promise.resolve(F);
                    const ge = {
                        queryKey: e.queryKey,
                        pageParam: G,
                        meta: e.options.meta
                    };
                    B(ge);
                    const Ce = P(ge);
                    return Promise.resolve(Ce).then(ut => O(F, G, ut, ye))
                }
                ;
                let z;
                if (!x.length)
                    z = D([]);
                else if (v) {
                    const F = typeof h < "u"
                      , W = F ? h : cw(e.options, x);
                    z = D(x, F, W)
                } else if (m) {
                    const F = typeof h < "u"
                      , W = F ? h : wM(e.options, x);
                    z = D(x, F, W, !0)
                } else {
                    T = [];
                    const F = typeof e.options.getNextPageParam > "u";
                    z = (c && x[0] ? c(x[0], 0, x) : !0) ? D([], F, E[0]) : Promise.resolve(O([], E[0], x[0]));
                    for (let G = 1; G < x.length; G++)
                        z = z.then(ye => {
                            if (c && x[G] ? c(x[G], G, x) : !0) {
                                const Ce = F ? E[G] : cw(e.options, ye);
                                return D(ye, F, Ce)
                            }
                            return Promise.resolve(O(ye, E[G], x[G]))
                        }
                        )
                }
                return z.then(F => ({
                    pages: F,
                    pageParams: T
                }))
            }
        }
    }
}
function cw(e, t) {
    return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t)
}
function wM(e, t) {
    return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t)
}
class _M {
    constructor(t={}) {
        this.queryCache = t.queryCache || new pM,
        this.mutationCache = t.mutationCache || new vM,
        this.logger = t.logger || Gm,
        this.defaultOptions = t.defaultOptions || {},
        this.queryDefaults = [],
        this.mutationDefaults = [],
        this.mountCount = 0
    }
    mount() {
        this.mountCount++,
        this.mountCount === 1 && (this.unsubscribeFocus = _f.subscribe( () => {
            _f.isFocused() && (this.resumePausedMutations(),
            this.queryCache.onFocus())
        }
        ),
        this.unsubscribeOnline = xf.subscribe( () => {
            xf.isOnline() && (this.resumePausedMutations(),
            this.queryCache.onOnline())
        }
        ))
    }
    unmount() {
        var t, n;
        this.mountCount--,
        this.mountCount === 0 && ((t = this.unsubscribeFocus) == null || t.call(this),
        this.unsubscribeFocus = void 0,
        (n = this.unsubscribeOnline) == null || n.call(this),
        this.unsubscribeOnline = void 0)
    }
    isFetching(t, n) {
        const [r] = Qi(t, n);
        return r.fetchStatus = "fetching",
        this.queryCache.findAll(r).length
    }
    isMutating(t) {
        return this.mutationCache.findAll({
            ...t,
            fetching: !0
        }).length
    }
    getQueryData(t, n) {
        var r;
        return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data
    }
    ensureQueryData(t, n, r) {
        const o = ol(t, n, r)
          , s = this.getQueryData(o.queryKey);
        return s ? Promise.resolve(s) : this.fetchQuery(o)
    }
    getQueriesData(t) {
        return this.getQueryCache().findAll(t).map( ({queryKey: n, state: r}) => {
            const o = r.data;
            return [n, o]
        }
        )
    }
    setQueryData(t, n, r) {
        const o = this.queryCache.find(t)
          , s = o == null ? void 0 : o.state.data
          , l = sM(n, s);
        if (typeof l > "u")
            return;
        const c = ol(t)
          , f = this.defaultQueryOptions(c);
        return this.queryCache.build(this, f).setData(l, {
            ...r,
            manual: !0
        })
    }
    setQueriesData(t, n, r) {
        return Ft.batch( () => this.getQueryCache().findAll(t).map( ({queryKey: o}) => [o, this.setQueryData(o, n, r)]))
    }
    getQueryState(t, n) {
        var r;
        return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state
    }
    removeQueries(t, n) {
        const [r] = Qi(t, n)
          , o = this.queryCache;
        Ft.batch( () => {
            o.findAll(r).forEach(s => {
                o.remove(s)
            }
            )
        }
        )
    }
    resetQueries(t, n, r) {
        const [o,s] = Qi(t, n, r)
          , l = this.queryCache
          , c = {
            type: "active",
            ...o
        };
        return Ft.batch( () => (l.findAll(o).forEach(f => {
            f.reset()
        }
        ),
        this.refetchQueries(c, s)))
    }
    cancelQueries(t, n, r) {
        const [o,s={}] = Qi(t, n, r);
        typeof s.revert > "u" && (s.revert = !0);
        const l = Ft.batch( () => this.queryCache.findAll(o).map(c => c.cancel(s)));
        return Promise.all(l).then(ur).catch(ur)
    }
    invalidateQueries(t, n, r) {
        const [o,s] = Qi(t, n, r);
        return Ft.batch( () => {
            var l, c;
            if (this.queryCache.findAll(o).forEach(h => {
                h.invalidate()
            }
            ),
            o.refetchType === "none")
                return Promise.resolve();
            const f = {
                ...o,
                type: (l = (c = o.refetchType) != null ? c : o.type) != null ? l : "active"
            };
            return this.refetchQueries(f, s)
        }
        )
    }
    refetchQueries(t, n, r) {
        const [o,s] = Qi(t, n, r)
          , l = Ft.batch( () => this.queryCache.findAll(o).filter(f => !f.isDisabled()).map(f => {
            var h;
            return f.fetch(void 0, {
                ...s,
                cancelRefetch: (h = s == null ? void 0 : s.cancelRefetch) != null ? h : !0,
                meta: {
                    refetchPage: o.refetchPage
                }
            })
        }
        ));
        let c = Promise.all(l).then(ur);
        return s != null && s.throwOnError || (c = c.catch(ur)),
        c
    }
    fetchQuery(t, n, r) {
        const o = ol(t, n, r)
          , s = this.defaultQueryOptions(o);
        typeof s.retry > "u" && (s.retry = !1);
        const l = this.queryCache.build(this, s);
        return l.isStaleByTime(s.staleTime) ? l.fetch(s) : Promise.resolve(l.state.data)
    }
    prefetchQuery(t, n, r) {
        return this.fetchQuery(t, n, r).then(ur).catch(ur)
    }
    fetchInfiniteQuery(t, n, r) {
        const o = ol(t, n, r);
        return o.behavior = yM(),
        this.fetchQuery(o)
    }
    prefetchInfiniteQuery(t, n, r) {
        return this.fetchInfiniteQuery(t, n, r).then(ur).catch(ur)
    }
    resumePausedMutations() {
        return this.mutationCache.resumePausedMutations()
    }
    getQueryCache() {
        return this.queryCache
    }
    getMutationCache() {
        return this.mutationCache
    }
    getLogger() {
        return this.logger
    }
    getDefaultOptions() {
        return this.defaultOptions
    }
    setDefaultOptions(t) {
        this.defaultOptions = t
    }
    setQueryDefaults(t, n) {
        const r = this.queryDefaults.find(o => Uo(t) === Uo(o.queryKey));
        r ? r.defaultOptions = n : this.queryDefaults.push({
            queryKey: t,
            defaultOptions: n
        })
    }
    getQueryDefaults(t) {
        if (!t)
            return;
        const n = this.queryDefaults.find(r => wf(t, r.queryKey));
        return n == null ? void 0 : n.defaultOptions
    }
    setMutationDefaults(t, n) {
        const r = this.mutationDefaults.find(o => Uo(t) === Uo(o.mutationKey));
        r ? r.defaultOptions = n : this.mutationDefaults.push({
            mutationKey: t,
            defaultOptions: n
        })
    }
    getMutationDefaults(t) {
        if (!t)
            return;
        const n = this.mutationDefaults.find(r => wf(t, r.mutationKey));
        return n == null ? void 0 : n.defaultOptions
    }
    defaultQueryOptions(t) {
        if (t != null && t._defaulted)
            return t;
        const n = {
            ...this.defaultOptions.queries,
            ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
            ...t,
            _defaulted: !0
        };
        return !n.queryHash && n.queryKey && (n.queryHash = Vm(n.queryKey, n)),
        typeof n.refetchOnReconnect > "u" && (n.refetchOnReconnect = n.networkMode !== "always"),
        typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense),
        n
    }
    defaultMutationOptions(t) {
        return t != null && t._defaulted ? t : {
            ...this.defaultOptions.mutations,
            ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
            ...t,
            _defaulted: !0
        }
    }
    clear() {
        this.queryCache.clear(),
        this.mutationCache.clear()
    }
}
class xM extends Kl {
    constructor(t, n) {
        super(),
        this.client = t,
        this.options = n,
        this.trackedProps = new Set,
        this.selectError = null,
        this.bindMethods(),
        this.setOptions(n)
    }
    bindMethods() {
        this.remove = this.remove.bind(this),
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.currentQuery.addObserver(this),
        fw(this.currentQuery, this.options) && this.executeFetch(),
        this.updateTimers())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Eg(this.currentQuery, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Eg(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        this.clearStaleTimeout(),
        this.clearRefetchInterval(),
        this.currentQuery.removeObserver(this)
    }
    setOptions(t, n) {
        const r = this.options
          , o = this.currentQuery;
        if (this.options = this.client.defaultQueryOptions(t),
        xg(r, this.options) || this.client.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.currentQuery,
            observer: this
        }),
        typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
            throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = r.queryKey),
        this.updateQuery();
        const s = this.hasListeners();
        s && dw(this.currentQuery, o, this.options, r) && this.executeFetch(),
        this.updateResult(n),
        s && (this.currentQuery !== o || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout();
        const l = this.computeRefetchInterval();
        s && (this.currentQuery !== o || this.options.enabled !== r.enabled || l !== this.currentRefetchInterval) && this.updateRefetchInterval(l)
    }
    getOptimisticResult(t) {
        const n = this.client.getQueryCache().build(this.client, t)
          , r = this.createResult(n, t);
        return bM(this, r, t) && (this.currentResult = r,
        this.currentResultOptions = this.options,
        this.currentResultState = this.currentQuery.state),
        r
    }
    getCurrentResult() {
        return this.currentResult
    }
    trackResult(t) {
        const n = {};
        return Object.keys(t).forEach(r => {
            Object.defineProperty(n, r, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackedProps.add(r),
                t[r])
            })
        }
        ),
        n
    }
    getCurrentQuery() {
        return this.currentQuery
    }
    remove() {
        this.client.getQueryCache().remove(this.currentQuery)
    }
    refetch({refetchPage: t, ...n}={}) {
        return this.fetch({
            ...n,
            meta: {
                refetchPage: t
            }
        })
    }
    fetchOptimistic(t) {
        const n = this.client.defaultQueryOptions(t)
          , r = this.client.getQueryCache().build(this.client, n);
        return r.isFetchingOptimistic = !0,
        r.fetch().then( () => this.createResult(r, n))
    }
    fetch(t) {
        var n;
        return this.executeFetch({
            ...t,
            cancelRefetch: (n = t.cancelRefetch) != null ? n : !0
        }).then( () => (this.updateResult(),
        this.currentResult))
    }
    executeFetch(t) {
        this.updateQuery();
        let n = this.currentQuery.fetch(this.options, t);
        return t != null && t.throwOnError || (n = n.catch(ur)),
        n
    }
    updateStaleTimeout() {
        if (this.clearStaleTimeout(),
        $l || this.currentResult.isStale || !_g(this.options.staleTime))
            return;
        const n = qS(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
        this.staleTimeoutId = setTimeout( () => {
            this.currentResult.isStale || this.updateResult()
        }
        , n)
    }
    computeRefetchInterval() {
        var t;
        return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (t = this.options.refetchInterval) != null ? t : !1
    }
    updateRefetchInterval(t) {
        this.clearRefetchInterval(),
        this.currentRefetchInterval = t,
        !($l || this.options.enabled === !1 || !_g(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval( () => {
            (this.options.refetchIntervalInBackground || _f.isFocused()) && this.executeFetch()
        }
        , this.currentRefetchInterval))
    }
    updateTimers() {
        this.updateStaleTimeout(),
        this.updateRefetchInterval(this.computeRefetchInterval())
    }
    clearStaleTimeout() {
        this.staleTimeoutId && (clearTimeout(this.staleTimeoutId),
        this.staleTimeoutId = void 0)
    }
    clearRefetchInterval() {
        this.refetchIntervalId && (clearInterval(this.refetchIntervalId),
        this.refetchIntervalId = void 0)
    }
    createResult(t, n) {
        const r = this.currentQuery
          , o = this.options
          , s = this.currentResult
          , l = this.currentResultState
          , c = this.currentResultOptions
          , f = t !== r
          , h = f ? t.state : this.currentQueryInitialState
          , v = f ? this.currentResult : this.previousQueryResult
          , {state: m} = t;
        let {dataUpdatedAt: x, error: E, errorUpdatedAt: T, fetchStatus: N, status: B} = m, P = !1, O = !1, D;
        if (n._optimisticResults) {
            const G = this.hasListeners()
              , ye = !G && fw(t, n)
              , ge = G && dw(t, r, n, o);
            (ye || ge) && (N = Kf(t.options.networkMode) ? "fetching" : "paused",
            x || (B = "loading")),
            n._optimisticResults === "isRestoring" && (N = "idle")
        }
        if (n.keepPreviousData && !m.dataUpdatedAt && v != null && v.isSuccess && B !== "error")
            D = v.data,
            x = v.dataUpdatedAt,
            B = v.status,
            P = !0;
        else if (n.select && typeof m.data < "u")
            if (s && m.data === (l == null ? void 0 : l.data) && n.select === this.selectFn)
                D = this.selectResult;
            else
                try {
                    this.selectFn = n.select,
                    D = n.select(m.data),
                    D = bg(s == null ? void 0 : s.data, D, n),
                    this.selectResult = D,
                    this.selectError = null
                } catch (G) {
                    this.selectError = G
                }
        else
            D = m.data;
        if (typeof n.placeholderData < "u" && typeof D > "u" && B === "loading") {
            let G;
            if (s != null && s.isPlaceholderData && n.placeholderData === (c == null ? void 0 : c.placeholderData))
                G = s.data;
            else if (G = typeof n.placeholderData == "function" ? n.placeholderData() : n.placeholderData,
            n.select && typeof G < "u")
                try {
                    G = n.select(G),
                    this.selectError = null
                } catch (ye) {
                    this.selectError = ye
                }
            typeof G < "u" && (B = "success",
            D = bg(s == null ? void 0 : s.data, G, n),
            O = !0)
        }
        this.selectError && (E = this.selectError,
        D = this.selectResult,
        T = Date.now(),
        B = "error");
        const z = N === "fetching"
          , H = B === "loading"
          , F = B === "error";
        return {
            status: B,
            fetchStatus: N,
            isLoading: H,
            isSuccess: B === "success",
            isError: F,
            isInitialLoading: H && z,
            data: D,
            dataUpdatedAt: x,
            error: E,
            errorUpdatedAt: T,
            failureCount: m.fetchFailureCount,
            failureReason: m.fetchFailureReason,
            errorUpdateCount: m.errorUpdateCount,
            isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
            isFetchedAfterMount: m.dataUpdateCount > h.dataUpdateCount || m.errorUpdateCount > h.errorUpdateCount,
            isFetching: z,
            isRefetching: z && !H,
            isLoadingError: F && m.dataUpdatedAt === 0,
            isPaused: N === "paused",
            isPlaceholderData: O,
            isPreviousData: P,
            isRefetchError: F && m.dataUpdatedAt !== 0,
            isStale: qm(t, n),
            refetch: this.refetch,
            remove: this.remove
        }
    }
    updateResult(t) {
        const n = this.currentResult
          , r = this.createResult(this.currentQuery, this.options);
        if (this.currentResultState = this.currentQuery.state,
        this.currentResultOptions = this.options,
        xg(r, n))
            return;
        this.currentResult = r;
        const o = {
            cache: !0
        }
          , s = () => {
            if (!n)
                return !0;
            const {notifyOnChangeProps: l} = this.options
              , c = typeof l == "function" ? l() : l;
            if (c === "all" || !c && !this.trackedProps.size)
                return !0;
            const f = new Set(c ?? this.trackedProps);
            return this.options.useErrorBoundary && f.add("error"),
            Object.keys(this.currentResult).some(h => {
                const v = h;
                return this.currentResult[v] !== n[v] && f.has(v)
            }
            )
        }
        ;
        (t == null ? void 0 : t.listeners) !== !1 && s() && (o.listeners = !0),
        this.notify({
            ...o,
            ...t
        })
    }
    updateQuery() {
        const t = this.client.getQueryCache().build(this.client, this.options);
        if (t === this.currentQuery)
            return;
        const n = this.currentQuery;
        this.currentQuery = t,
        this.currentQueryInitialState = t.state,
        this.previousQueryResult = this.currentResult,
        this.hasListeners() && (n == null || n.removeObserver(this),
        t.addObserver(this))
    }
    onQueryUpdate(t) {
        const n = {};
        t.type === "success" ? n.onSuccess = !t.manual : t.type === "error" && !Fc(t.error) && (n.onError = !0),
        this.updateResult(n),
        this.hasListeners() && this.updateTimers()
    }
    notify(t) {
        Ft.batch( () => {
            if (t.onSuccess) {
                var n, r, o, s;
                (n = (r = this.options).onSuccess) == null || n.call(r, this.currentResult.data),
                (o = (s = this.options).onSettled) == null || o.call(s, this.currentResult.data, null)
            } else if (t.onError) {
                var l, c, f, h;
                (l = (c = this.options).onError) == null || l.call(c, this.currentResult.error),
                (f = (h = this.options).onSettled) == null || f.call(h, void 0, this.currentResult.error)
            }
            t.listeners && this.listeners.forEach( ({listener: v}) => {
                v(this.currentResult)
            }
            ),
            t.cache && this.client.getQueryCache().notify({
                query: this.currentQuery,
                type: "observerResultsUpdated"
            })
        }
        )
    }
}
function SM(e, t) {
    return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1)
}
function fw(e, t) {
    return SM(e, t) || e.state.dataUpdatedAt > 0 && Eg(e, t, t.refetchOnMount)
}
function Eg(e, t, n) {
    if (t.enabled !== !1) {
        const r = typeof n == "function" ? n(e) : n;
        return r === "always" || r !== !1 && qm(e, t)
    }
    return !1
}
function dw(e, t, n, r) {
    return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && qm(e, n)
}
function qm(e, t) {
    return e.isStaleByTime(t.staleTime)
}
function bM(e, t, n) {
    return n.keepPreviousData ? !1 : n.placeholderData !== void 0 ? t.isPlaceholderData : !xg(e.getCurrentResult(), t)
}
var tb = {
    exports: {}
}
  , nb = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ca = ee;
function EM(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var kM = typeof Object.is == "function" ? Object.is : EM
  , CM = ca.useState
  , OM = ca.useEffect
  , TM = ca.useLayoutEffect
  , PM = ca.useDebugValue;
function RM(e, t) {
    var n = t()
      , r = CM({
        inst: {
            value: n,
            getSnapshot: t
        }
    })
      , o = r[0].inst
      , s = r[1];
    return TM(function() {
        o.value = n,
        o.getSnapshot = t,
        up(o) && s({
            inst: o
        })
    }, [e, n, t]),
    OM(function() {
        return up(o) && s({
            inst: o
        }),
        e(function() {
            up(o) && s({
                inst: o
            })
        })
    }, [e]),
    PM(n),
    n
}
function up(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !kM(e, n)
    } catch {
        return !0
    }
}
function DM(e, t) {
    return t()
}
var IM = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? DM : RM;
nb.useSyncExternalStore = ca.useSyncExternalStore !== void 0 ? ca.useSyncExternalStore : IM;
tb.exports = nb;
var MM = tb.exports;
const AM = MM.useSyncExternalStore
  , hw = ee.createContext(void 0)
  , rb = ee.createContext(!1);
function ib(e, t) {
    return e || (t && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = hw),
    window.ReactQueryClientContext) : hw)
}
const NM = ({context: e}={}) => {
    const t = ee.useContext(ib(e, ee.useContext(rb)));
    if (!t)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t
}
  , LM = ({client: e, children: t, context: n, contextSharing: r=!1}) => {
    ee.useEffect( () => (e.mount(),
    () => {
        e.unmount()
    }
    ), [e]);
    const o = ib(n, r);
    return ee.createElement(rb.Provider, {
        value: !n && r
    }, ee.createElement(o.Provider, {
        value: e
    }, t))
}
  , ob = ee.createContext(!1)
  , jM = () => ee.useContext(ob);
ob.Provider;
function $M() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        }
        ,
        reset: () => {
            e = !0
        }
        ,
        isReset: () => e
    }
}
const FM = ee.createContext($M())
  , WM = () => ee.useContext(FM);
function zM(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}
const UM = (e, t) => {
    (e.suspense || e.useErrorBoundary) && (t.isReset() || (e.retryOnMount = !1))
}
  , YM = e => {
    ee.useEffect( () => {
        e.clearReset()
    }
    , [e])
}
  , BM = ({result: e, errorResetBoundary: t, useErrorBoundary: n, query: r}) => e.isError && !t.isReset() && !e.isFetching && zM(n, [e.error, r])
  , HM = e => {
    e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3)
}
  , VM = (e, t) => e.isLoading && e.isFetching && !t
  , GM = (e, t, n) => (e == null ? void 0 : e.suspense) && VM(t, n)
  , qM = (e, t, n) => t.fetchOptimistic(e).then( ({data: r}) => {
    e.onSuccess == null || e.onSuccess(r),
    e.onSettled == null || e.onSettled(r, null)
}
).catch(r => {
    n.clearReset(),
    e.onError == null || e.onError(r),
    e.onSettled == null || e.onSettled(void 0, r)
}
);
function QM(e, t) {
    const n = NM({
        context: e.context
    })
      , r = jM()
      , o = WM()
      , s = n.defaultQueryOptions(e);
    s._optimisticResults = r ? "isRestoring" : "optimistic",
    s.onError && (s.onError = Ft.batchCalls(s.onError)),
    s.onSuccess && (s.onSuccess = Ft.batchCalls(s.onSuccess)),
    s.onSettled && (s.onSettled = Ft.batchCalls(s.onSettled)),
    HM(s),
    UM(s, o),
    YM(o);
    const [l] = ee.useState( () => new t(n,s))
      , c = l.getOptimisticResult(s);
    if (AM(ee.useCallback(f => {
        const h = r ? () => {}
        : l.subscribe(Ft.batchCalls(f));
        return l.updateResult(),
        h
    }
    , [l, r]), () => l.getCurrentResult(), () => l.getCurrentResult()),
    ee.useEffect( () => {
        l.setOptions(s, {
            listeners: !1
        })
    }
    , [s, l]),
    GM(s, c, r))
        throw qM(s, l, o);
    if (BM({
        result: c,
        errorResetBoundary: o,
        useErrorBoundary: s.useErrorBoundary,
        query: l.getCurrentQuery()
    }))
        throw c.error;
    return s.notifyOnChangeProps ? c : l.trackResult(c)
}
function KM(e, t, n) {
    const r = ol(e, t, n);
    return QM(r, xM)
}
const ZM = e => e.type === "update" ? e.partial ? "update" : "replace" : e.type
  , pw = (e, t) => {
    let {resource: n, id: r, data: o, params: s} = e;
    return {
        resource: n,
        id: typeof r == "function" ? r(t) : r,
        data: typeof o == "function" ? o(t) : o,
        params: typeof s == "function" ? s(t) : s
    }
}
;
function gw(e, t, n) {
    return (t = JM(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function JM(e) {
    var t = XM(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function XM(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
class sb extends Error {
    constructor(t) {
        super(`Invalid query
${t.map(n => " - " + n).join(`
`)}`),
        gw(this, "type", "invalid-query"),
        gw(this, "details", void 0),
        this.details = t
    }
}
const eA = ["resource", "id", "params", "data"]
  , tA = ["read", "create", "update", "replace", "delete", "json-patch"]
  , ab = (e, t) => {
    if (!tA.includes(e))
        return [`Unknown query or mutation type ${e}`];
    if (typeof t != "object")
        return ["A query or mutation must be a javascript object"];
    const n = [];
    return (!t.resource || typeof t.resource != "string") && n.push("Property resource must be a string"),
    e === "create" && t.id && n.push("Mutation type 'create' does not support property 'id'"),
    t.id && typeof t.id != "string" && n.push("Property id must be a string"),
    t.params && typeof t.params != "object" && n.push("Property params must be an object"),
    e === "delete" && t.data && n.push("Mutation type 'delete' does not support property 'data'"),
    e === "json-patch" && !Array.isArray(t.data) && n.push("Mutation type 'json-patch' requires property 'data' to be of type Array"),
    Object.keys(t).filter(o => !eA.includes(o)).forEach(o => {
        n.push(`Property ${o} is not supported`)
    }
    ),
    n
}
  , nA = function(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    if (t.length !== e.length)
        for (let r = t.length; r < e.length; ++r)
            t.push("query#" + r);
    const n = e.reduce( (r, o, s) => r.concat(ab("read", o).map(l => `[${t[s]}] ${l}`)), []);
    if (n.length)
        throw new sb(n)
}
  , rA = (e, t) => {
    const n = ab(e, t);
    if (n.length)
        throw new sb(n)
}
;
function iA(e, t, n) {
    return (t = oA(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function oA(e) {
    var t = sA(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function sA(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
const aA = (e, t) => e.reduce( (n, r, o) => (n[t[o]] = r,
n), {});
class lb {
    constructor(t) {
        iA(this, "link", void 0),
        this.link = t
    }
    query(t) {
        let {variables: n={}, signal: r, onComplete: o, onError: s} = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const l = Object.keys(t)
          , c = l.map(f => t[f]).map(f => pw(f, n));
        return nA(c, l),
        Promise.all(c.map(f => this.link.executeResourceQuery("read", f, {
            signal: r
        }))).then(f => {
            const h = aA(f, l);
            return o && o(h),
            h
        }
        ).catch(f => {
            throw s && s(f),
            f
        }
        )
    }
    mutate(t) {
        let {variables: n={}, signal: r, onComplete: o, onError: s} = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const l = pw(t, n)
          , c = ZM(t);
        return rA(c, l),
        this.link.executeResourceQuery(c, l, {
            signal: r
        }).then(h => (o && o(h),
        h)).catch(h => {
            throw s && s(h),
            h
        }
        )
    }
}
function mw(e, t, n) {
    return (t = lA(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function lA(e) {
    var t = uA(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function uA(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
class kg extends Error {
    constructor(t) {
        let {message: n, type: r, details: o={}} = t;
        super(n),
        mw(this, "type", void 0),
        mw(this, "details", void 0),
        this.type = r,
        this.details = o
    }
}
function cA(e, t, n) {
    return (t = fA(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function fA(e) {
    var t = dA(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function dA(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
class hA {
    constructor(t) {
        cA(this, "errorMessage", void 0),
        this.errorMessage = t
    }
    executeResourceQuery() {
        return console.error(this.errorMessage),
        Promise.reject(this.errorMessage)
    }
}
const pA = e => e ? e.split(";")[0].trim().toLowerCase() : ""
  , gA = async e => {
    if (e.status === 401 || e.status === 403 || e.status === 409) {
        let n, r = {};
        try {
            r = await e.json(),
            n = r.message
        } catch {}
        throw n || (n = e.status === 401 ? "Unauthorized" : "Forbidden"),
        new kg({
            type: "access",
            message: n,
            details: r
        })
    }
    if (e.status < 200 || e.status >= 400) {
        const n = `An unknown error occurred - ${e.statusText} (${e.status})`;
        let r = {};
        try {
            r = await e.json()
        } catch {}
        throw new kg({
            type: "unknown",
            message: n,
            details: r
        })
    }
    return e
}
;
function mA(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return fetch(e, {
        ...t,
        credentials: "include",
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
            ...t.headers
        }
    }).catch(n => {
        throw new kg({
            type: "network",
            message: "An unknown network error occurred",
            details: n
        })
    }
    ).then(gA).then(async n => {
        const r = pA(n.headers.get("Content-Type"));
        return r === "application/json" ? await n.json() : /^text\/[a-z0-9.-]+$/.test(r) ? await n.text() : await n.blob()
    }
    )
}
const wl = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return t.filter(o => !!o).map(o => o.replace(/^\/+|\/+$/g, "")).join("/")
}
  , vA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && (n === "dataValues" || n === "dataValues/file")
}
  , yA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && n === "fileResources"
}
  , wA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && n === "messageConversations/attachments"
}
  , _A = (e, t) => {
    let {resource: n} = t;
    return e === "create" && /^staticContent\/(?:logo_banner|logo_front)$/.test(n)
}
  , xA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && n === "apps"
}
  , SA = Object.freeze(Object.defineProperty({
    __proto__: null,
    isAppInstall: xA,
    isDataValue: vA,
    isFileResourceUpload: yA,
    isMessageConversationAttachment: wA,
    isStaticContentUpload: _A
}, Symbol.toStringTag, {
    value: "Module"
}))
  , bA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && /^messageConversations\/[a-zA-Z0-9]{11}$/.test(n)
}
  , EA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && n === "messageConversations/feedback"
}
  , kA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && /^interpretations\/(?:reportTable|chart|visualization|map|eventVisualization|eventReport|eventChart|dataSetReport)\/[a-zA-Z0-9]{11}$/.test(n)
}
  , CA = (e, t) => {
    let {resource: n, id: r} = t;
    if (e !== "replace")
        return !1;
    let o;
    if (r) {
        o = /^interpretations$/;
        const s = /^[a-zA-Z0-9]{11}$/;
        return o.test(n) && s.test(r)
    }
    return o = /^interpretations\/[a-zA-Z0-9]{11}$/,
    o.test(n)
}
  , OA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && /^interpretations\/[a-zA-Z0-9]{11}\/comments$/.test(n)
}
  , TA = (e, t) => {
    let {resource: n, id: r} = t;
    if (e !== "replace")
        return !1;
    if (r) {
        const s = /^[a-zA-Z0-9]{11}\/comments\/[a-zA-Z0-9]{11}$/
          , l = /^[a-zA-Z0-9]{11}$/
          , c = /^interpretations\/[a-zA-Z0-9]{11}\/comments$/;
        return n === "interpretations" && s.test(r) || c.test(n) && l.test(r)
    }
    return /^interpretations\/[a-zA-Z0-9]{11}\/comments\/[a-zA-Z0-9]{11}$/.test(n)
}
  , PA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && /^(?:systemSettings|userSettings)\/[a-zA-Z]{4,}$/.test(n)
}
  , RA = (e, t) => {
    let {resource: n} = t;
    const r = /^(configuration)\/([a-zA-Z]{1,50})$/
      , o = n.match(r);
    return e === "create" && !!o && o[2] !== "corsWhitelist"
}
  , DA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && n === "synchronization/metadataPull"
}
  , IA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && /^(indicators|programIndicators|validationRules|predictors)\/expression\/description$/.test(n)
}
  , MA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && /^programIndicators\/filter\/description$/.test(n)
}
  , AA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && /^predictors\/skipTest\/description$/.test(n)
}
  , NA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && /^programRules\/condition\/description$/.test(n)
}
  , LA = Object.freeze(Object.defineProperty({
    __proto__: null,
    addOrUpdateConfigurationProperty: RA,
    isAddOrUpdateSystemOrUserSetting: PA,
    isCommentOnInterpretation: OA,
    isConditionDescriptionValidation: NA,
    isCreateFeedbackMessage: EA,
    isCreateInterpretation: kA,
    isExpressionDescriptionValidation: IA,
    isFilterDescriptionValidation: MA,
    isInterpretationCommentUpdate: TA,
    isMetadataPackageInstallation: DA,
    isReplyToMessageConversation: bA,
    isSkipTestDescriptionValid: AA,
    isUpdateInterpretation: CA
}, Symbol.toStringTag, {
    value: "Module"
}))
  , jA = (e, t) => {
    let {resource: n} = t;
    return e === "create" && (n === "svg.png" || n === "svg.pdf")
}
  , $A = Object.freeze(Object.defineProperty({
    __proto__: null,
    isSvgConversion: jA
}, Symbol.toStringTag, {
    value: "Module"
}))
  , FA = (e, t) => Object.values(LA).some(n => n(e, t))
  , WA = (e, t) => Object.values(SA).some(n => n(e, t))
  , zA = (e, t) => Object.values($A).some(n => n(e, t))
  , vw = (e, t) => {
    const n = Object.entries(e);
    if (n.length === 0)
        throw new Error(`Could not convert data to ${t.constructor.name}: object does not have own enumerable string-keyed properties`);
    return n.reduce( (r, o) => {
        let[s,l] = o;
        return r.append(s, l),
        r
    }
    , t)
}
  , UA = (e, t) => t.data ? e === "json-patch" ? "application/json-patch+json" : FA(e, t) ? "text/plain" : WA(e, t) ? "multipart/form-data" : zA(e, t) ? "application/x-www-form-urlencoded" : "application/json" : null
  , YA = e => {
    if (!(!e || e === "multipart/form-data"))
        return {
            "Content-Type": e
        }
}
  , BA = (e, t) => {
    let {data: n} = t;
    if (!(typeof n > "u"))
        return e === "application/json" || e === "application/json-patch+json" ? JSON.stringify(n) : e === "multipart/form-data" ? vw(n, new FormData) : e === "application/x-www-form-urlencoded" ? vw(n, new URLSearchParams) : n
}
  , HA = e => {
    switch (e) {
    case "create":
        return "POST";
    case "read":
        return "GET";
    case "update":
    case "json-patch":
        return "PATCH";
    case "replace":
        return "PUT";
    case "delete":
        return "DELETE";
    default:
        throw new Error(`Unknown type ${e}`)
    }
}
  , VA = (e, t, n) => {
    const r = UA(e, t);
    return {
        method: HA(e),
        body: BA(r, t),
        headers: YA(r),
        signal: n
    }
}
  , ub = e => {
    if (Array.isArray(e))
        return e.map(ub).join(",");
    if (typeof e == "string")
        return encodeURIComponent(e);
    if (typeof e == "number" || typeof e == "boolean")
        return String(e);
    throw typeof e == "object" ? new Error("Object parameter mappings not yet implemented") : new Error("Unknown parameter type")
}
  , GA = e => Object.keys(e).reduce( (t, n) => {
    const r = e[n];
    return n === "filter" && Array.isArray(r) ? r.forEach(o => {
        t.push({
            key: "filter",
            value: o
        })
    }
    ) : e[n] !== null && e[n] !== void 0 && t.push({
        key: n,
        value: e[n]
    }),
    t
}
, [])
  , qA = e => GA(e).map(n => {
    let {key: r, value: o} = n;
    return `${encodeURIComponent(r)}=${ub(o)}`
}
).join("&")
  , cb = "action::"
  , QA = e => e.startsWith(cb)
  , KA = e => wl("dhis-web-commons", `${e.substr(cb.length)}.action`)
  , fb = "legacy::"
  , ZA = e => e.startsWith(fb)
  , JA = e => {
    switch (e) {
    case "legacy::bundledApps":
        return "dhis-web-apps/apps-bundle.json";
    default:
        return e.replace(fb, "")
    }
}
  , XA = (e, t) => {
    if (e === "tracker" || e.startsWith("tracker/")) {
        var n, r;
        if (!((n = t.serverVersion) !== null && n !== void 0 && n.minor) || ((r = t.serverVersion) === null || r === void 0 ? void 0 : r.minor) < 38)
            return !0
    }
    return e === "ping"
}
  , eN = (e, t, n) => {
    const {resource: r, id: o, params: s={}} = t
      , l = XA(r, e.config) ? e.unversionedApiPath : e.versionedApiPath
      , c = QA(r) ? KA(r) : ZA(r) ? JA(r) : wl(l, r, o);
    return Object.keys(s).length ? `${c}?${qA(s)}` : c
}
;
function cp(e, t, n) {
    return (t = tN(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function tN(e) {
    var t = nN(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function nN(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
class rN {
    constructor(t) {
        cp(this, "config", void 0),
        cp(this, "versionedApiPath", void 0),
        cp(this, "unversionedApiPath", void 0),
        this.config = t,
        this.versionedApiPath = wl("api", String(t.apiVersion)),
        this.unversionedApiPath = wl("api")
    }
    fetch(t, n) {
        return mA(wl(this.config.baseUrl, t), n)
    }
    executeResourceQuery(t, n, r) {
        let {signal: o} = r;
        return this.fetch(eN(this, n), VA(t, n, o))
    }
}
const iN = "DHIS2 data context must be initialized, please ensure that you include a <DataProvider> in your application"
  , oN = new hA(iN)
  , sN = new lb(oN)
  , aN = {
    engine: sN
}
  , db = I.createContext(aN)
  , hb = I.createContext({
    baseUrl: "..",
    apiVersion: 32
})
  , Zl = () => ee.useContext(hb)
  , lN = e => e
  , uN = e => {
    let {config: t, children: n} = e;
    return I.createElement(hb.Provider, {
        value: lN(t)
    }, n)
}
  , cN = {
    defaultOptions: {
        queries: {
            retry: !1,
            retryOnMount: !0,
            refetchOnMount: !0,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
            networkMode: "always"
        }
    }
}
  , fN = new _M(cN)
  , dN = e => {
    const t = {
        ...Zl(),
        ...e
    }
      , n = new rN(t)
      , o = {
        engine: new lb(n)
    };
    return I.createElement(LM, {
        client: fN
    }, I.createElement(db.Provider, {
        value: o
    }, e.children))
}
  , hN = () => ee.useContext(db).engine
  , pN = function(e) {
    let {warn: t=!1, name: n="input"} = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = ee.useRef(e)
      , [o,s] = ee.useState( () => r.current);
    return ee.useDebugValue(o, l => `${n}: ${JSON.stringify(l)}`),
    ee.useEffect( () => {
        t && r.current !== e && console.warn(`The ${n} should be static, don't create it within the render loop!`)
    }
    , [t, e, r, n]),
    [o, s]
};
function yw(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function gN(e) {
    if (!yw(e))
        return !1;
    const t = e.constructor;
    if (typeof t > "u")
        return !0;
    const n = t.prototype;
    return !(!yw(n) || !Object.prototype.hasOwnProperty.call(n, "isPrototypeOf"))
}
function ww(e) {
    let t;
    try {
        t = JSON.stringify(e, (n, r) => gN(r) ? Object.keys(r).sort().reduce( (o, s) => (o[s] = r[s],
        o), {}) : r)
    } catch {
        throw new Error("Could not serialize variables. Make sure that the variables do not contain circular references and can be processed by JSON.stringify.")
    }
    return t
}
const mN = (e, t, n) => {
    if (!t)
        return {
            identical: !0,
            mergedVariablesHash: n,
            mergedVariables: e
        };
    const r = n || ww(e)
      , o = {
        ...e,
        ...t
    }
      , s = ww(o);
    return {
        identical: r === s,
        mergedVariablesHash: s,
        mergedVariables: o
    }
}
  , Qm = function(e) {
    let {onComplete: t, onError: n, variables: r={}, lazy: o=!1} = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const [s] = pN(e, {
        warn: !0,
        name: "query"
    })
      , [l,c] = ee.useState(0)
      , f = ee.useRef({
        variables: r,
        variablesHash: void 0,
        enabled: !o,
        refetchCallback: void 0
    });
    ee.useDebugValue({
        variablesUpdateCount: l,
        enabled: f.current.enabled,
        variables: f.current.variables
    }, H => JSON.stringify(H));
    const h = H => {
        var F, W;
        (F = (W = f.current).refetchCallback) === null || F === void 0 || F.call(W, H),
        f.current.refetchCallback = void 0,
        t && t(H)
    }
      , v = H => {
        f.current.refetchCallback = void 0,
        n && n(H)
    }
      , m = hN()
      , x = [s, f.current.variables]
      , E = () => m.query(s, {
        variables: f.current.variables
    })
      , {status: T, fetchStatus: N, error: B, data: P, refetch: O} = KM({
        queryKey: x,
        queryFn: E,
        enabled: f.current.enabled,
        onSuccess: h,
        onError: v
    })
      , D = ee.useCallback(H => {
        const {identical: F, mergedVariables: W, mergedVariablesHash: G} = mN(f.current.variables, H, f.current.variablesHash);
        if (f.current.enabled && F)
            return O({
                throwOnError: !1
            }).then(ge => {
                let {data: Ce} = ge;
                return Ce
            }
            );
        f.current.variables = W,
        f.current.variablesHash = G,
        f.current.enabled = !0;
        const ye = new Promise(ge => {
            f.current.refetchCallback = Ce => {
                ge(Ce)
            }
        }
        );
        return c(ge => ge + 1),
        ye
    }
    , [O]);
    return {
        engine: m,
        called: !(T === "loading" && N === "idle"),
        loading: N === "fetching" && T === "loading",
        fetching: N === "fetching",
        error: B || void 0,
        data: P,
        refetch: D
    }
}
  , vN = I.createContext(void 0)
  , yN = e => {
    let {userInfo: t, children: n} = e;
    return I.createElement(vN.Provider, {
        value: t
    }, n)
}
  , pb = I.createContext([])
  , wN = () => {
    throw new Error("This function is a placeholder used when creating the AlertsManagerContext, it should be overridden")
}
  , _N = {
    add: wN,
    plugin: !1,
    parentAlertsAdd: null,
    showAlertsInPlugin: !1
}
  , xN = I.createContext(_N)
  , _w = e => Array.from(e.values())
  , SN = (e, t) => {
    const n = new Map;
    let r = 0;
    return {
        add: (s, l) => {
            var c, f;
            const h = (c = (f = l.current) === null || f === void 0 ? void 0 : f.id) !== null && c !== void 0 ? c : ++r
              , v = {
                ...s,
                id: h,
                remove: () => {
                    n.delete(h),
                    l.current = null,
                    e(_w(n))
                }
            };
            return n.set(h, v),
            e(_w(n)),
            v
        }
        ,
        plugin: t
    }
}
  , bN = e => {
    let {plugin: t, parentAlertsAdd: n, showAlertsInPlugin: r, children: o} = e;
    const [s,l] = ee.useState([])
      , [c] = ee.useState( () => SN(l, t));
    return I.createElement(xN.Provider, {
        value: {
            ...c,
            parentAlertsAdd: n,
            showAlertsInPlugin: r
        }
    }, I.createElement(pb.Provider, {
        value: s
    }, o))
}
  , EN = () => ee.useContext(pb);
function kN() {
    this.__data__ = [],
    this.size = 0
}
var CN = kN;
function ON(e, t) {
    return e === t || e !== e && t !== t
}
var TN = ON
  , PN = TN;
function RN(e, t) {
    for (var n = e.length; n--; )
        if (PN(e[n][0], t))
            return n;
    return -1
}
var Zf = RN
  , DN = Zf
  , IN = Array.prototype
  , MN = IN.splice;
function AN(e) {
    var t = this.__data__
      , n = DN(t, e);
    if (n < 0)
        return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : MN.call(t, n, 1),
    --this.size,
    !0
}
var NN = AN
  , LN = Zf;
function jN(e) {
    var t = this.__data__
      , n = LN(t, e);
    return n < 0 ? void 0 : t[n][1]
}
var $N = jN
  , FN = Zf;
function WN(e) {
    return FN(this.__data__, e) > -1
}
var zN = WN
  , UN = Zf;
function YN(e, t) {
    var n = this.__data__
      , r = UN(n, e);
    return r < 0 ? (++this.size,
    n.push([e, t])) : n[r][1] = t,
    this
}
var BN = YN
  , HN = CN
  , VN = NN
  , GN = $N
  , qN = zN
  , QN = BN;
function ga(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
ga.prototype.clear = HN;
ga.prototype.delete = VN;
ga.prototype.get = GN;
ga.prototype.has = qN;
ga.prototype.set = QN;
var Jf = ga
  , KN = Jf;
function ZN() {
    this.__data__ = new KN,
    this.size = 0
}
var JN = ZN;
function XN(e) {
    var t = this.__data__
      , n = t.delete(e);
    return this.size = t.size,
    n
}
var e6 = XN;
function t6(e) {
    return this.__data__.get(e)
}
var n6 = t6;
function r6(e) {
    return this.__data__.has(e)
}
var i6 = r6
  , o6 = typeof Gr == "object" && Gr && Gr.Object === Object && Gr
  , gb = o6
  , s6 = gb
  , a6 = typeof self == "object" && self && self.Object === Object && self
  , l6 = s6 || a6 || Function("return this")()
  , ti = l6
  , u6 = ti
  , c6 = u6.Symbol
  , Km = c6
  , xw = Km
  , mb = Object.prototype
  , f6 = mb.hasOwnProperty
  , d6 = mb.toString
  , Za = xw ? xw.toStringTag : void 0;
function h6(e) {
    var t = f6.call(e, Za)
      , n = e[Za];
    try {
        e[Za] = void 0;
        var r = !0
    } catch {}
    var o = d6.call(e);
    return r && (t ? e[Za] = n : delete e[Za]),
    o
}
var p6 = h6
  , g6 = Object.prototype
  , m6 = g6.toString;
function v6(e) {
    return m6.call(e)
}
var y6 = v6
  , Sw = Km
  , w6 = p6
  , _6 = y6
  , x6 = "[object Null]"
  , S6 = "[object Undefined]"
  , bw = Sw ? Sw.toStringTag : void 0;
function b6(e) {
    return e == null ? e === void 0 ? S6 : x6 : bw && bw in Object(e) ? w6(e) : _6(e)
}
var Xf = b6;
function E6(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var Jl = E6
  , k6 = Xf
  , C6 = Jl
  , O6 = "[object AsyncFunction]"
  , T6 = "[object Function]"
  , P6 = "[object GeneratorFunction]"
  , R6 = "[object Proxy]";
function D6(e) {
    if (!C6(e))
        return !1;
    var t = k6(e);
    return t == T6 || t == P6 || t == O6 || t == R6
}
var I6 = D6
  , M6 = ti
  , A6 = M6["__core-js_shared__"]
  , N6 = A6
  , fp = N6
  , Ew = function() {
    var e = /[^.]+$/.exec(fp && fp.keys && fp.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
}();
function L6(e) {
    return !!Ew && Ew in e
}
var j6 = L6
  , $6 = Function.prototype
  , F6 = $6.toString;
function W6(e) {
    if (e != null) {
        try {
            return F6.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var vb = W6
  , z6 = I6
  , U6 = j6
  , Y6 = Jl
  , B6 = vb
  , H6 = /[\\^$.*+?()[\]{}|]/g
  , V6 = /^\[object .+?Constructor\]$/
  , G6 = Function.prototype
  , q6 = Object.prototype
  , Q6 = G6.toString
  , K6 = q6.hasOwnProperty
  , Z6 = RegExp("^" + Q6.call(K6).replace(H6, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function J6(e) {
    if (!Y6(e) || U6(e))
        return !1;
    var t = z6(e) ? Z6 : V6;
    return t.test(B6(e))
}
var X6 = J6;
function eL(e, t) {
    return e == null ? void 0 : e[t]
}
var tL = eL
  , nL = X6
  , rL = tL;
function iL(e, t) {
    var n = rL(e, t);
    return nL(n) ? n : void 0
}
var ma = iL
  , oL = ma
  , sL = ti
  , aL = oL(sL, "Map")
  , Zm = aL
  , lL = ma
  , uL = lL(Object, "create")
  , ed = uL
  , kw = ed;
function cL() {
    this.__data__ = kw ? kw(null) : {},
    this.size = 0
}
var fL = cL;
function dL(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0,
    t
}
var hL = dL
  , pL = ed
  , gL = "__lodash_hash_undefined__"
  , mL = Object.prototype
  , vL = mL.hasOwnProperty;
function yL(e) {
    var t = this.__data__;
    if (pL) {
        var n = t[e];
        return n === gL ? void 0 : n
    }
    return vL.call(t, e) ? t[e] : void 0
}
var wL = yL
  , _L = ed
  , xL = Object.prototype
  , SL = xL.hasOwnProperty;
function bL(e) {
    var t = this.__data__;
    return _L ? t[e] !== void 0 : SL.call(t, e)
}
var EL = bL
  , kL = ed
  , CL = "__lodash_hash_undefined__";
function OL(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1,
    n[e] = kL && t === void 0 ? CL : t,
    this
}
var TL = OL
  , PL = fL
  , RL = hL
  , DL = wL
  , IL = EL
  , ML = TL;
function va(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
va.prototype.clear = PL;
va.prototype.delete = RL;
va.prototype.get = DL;
va.prototype.has = IL;
va.prototype.set = ML;
var AL = va
  , Cw = AL
  , NL = Jf
  , LL = Zm;
function jL() {
    this.size = 0,
    this.__data__ = {
        hash: new Cw,
        map: new (LL || NL),
        string: new Cw
    }
}
var $L = jL;
function FL(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
var WL = FL
  , zL = WL;
function UL(e, t) {
    var n = e.__data__;
    return zL(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
}
var td = UL
  , YL = td;
function BL(e) {
    var t = YL(this, e).delete(e);
    return this.size -= t ? 1 : 0,
    t
}
var HL = BL
  , VL = td;
function GL(e) {
    return VL(this, e).get(e)
}
var qL = GL
  , QL = td;
function KL(e) {
    return QL(this, e).has(e)
}
var ZL = KL
  , JL = td;
function XL(e, t) {
    var n = JL(this, e)
      , r = n.size;
    return n.set(e, t),
    this.size += n.size == r ? 0 : 1,
    this
}
var e5 = XL
  , t5 = $L
  , n5 = HL
  , r5 = qL
  , i5 = ZL
  , o5 = e5;
function ya(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
ya.prototype.clear = t5;
ya.prototype.delete = n5;
ya.prototype.get = r5;
ya.prototype.has = i5;
ya.prototype.set = o5;
var yb = ya
  , s5 = Jf
  , a5 = Zm
  , l5 = yb
  , u5 = 200;
function c5(e, t) {
    var n = this.__data__;
    if (n instanceof s5) {
        var r = n.__data__;
        if (!a5 || r.length < u5 - 1)
            return r.push([e, t]),
            this.size = ++n.size,
            this;
        n = this.__data__ = new l5(r)
    }
    return n.set(e, t),
    this.size = n.size,
    this
}
var f5 = c5
  , d5 = Jf
  , h5 = JN
  , p5 = e6
  , g5 = n6
  , m5 = i6
  , v5 = f5;
function Xl(e) {
    var t = this.__data__ = new d5(e);
    this.size = t.size
}
Xl.prototype.clear = h5;
Xl.prototype.delete = p5;
Xl.prototype.get = g5;
Xl.prototype.has = m5;
Xl.prototype.set = v5;
var y5 = "__lodash_hash_undefined__";
function w5(e) {
    return this.__data__.set(e, y5),
    this
}
var _5 = w5;
function x5(e) {
    return this.__data__.has(e)
}
var S5 = x5
  , b5 = yb
  , E5 = _5
  , k5 = S5;
function Cg(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.__data__ = new b5; ++t < n; )
        this.add(e[t])
}
Cg.prototype.add = Cg.prototype.push = E5;
Cg.prototype.has = k5;
var C5 = ti;
C5.Uint8Array;
var Ow = Km
  , Tw = Ow ? Ow.prototype : void 0;
Tw && Tw.valueOf;
function O5(e) {
    return e != null && typeof e == "object"
}
var Jm = O5
  , T5 = Xf
  , P5 = Jm
  , R5 = "[object Arguments]";
function D5(e) {
    return P5(e) && T5(e) == R5
}
var I5 = D5
  , Pw = I5
  , M5 = Jm
  , wb = Object.prototype
  , A5 = wb.hasOwnProperty
  , N5 = wb.propertyIsEnumerable;
Pw(function() {
    return arguments
}());
var Sf = {
    exports: {}
};
function L5() {
    return !1
}
var j5 = L5;
Sf.exports;
(function(e, t) {
    var n = ti
      , r = j5
      , o = t && !t.nodeType && t
      , s = o && !0 && e && !e.nodeType && e
      , l = s && s.exports === o
      , c = l ? n.Buffer : void 0
      , f = c ? c.isBuffer : void 0
      , h = f || r;
    e.exports = h
}
)(Sf, Sf.exports);
Sf.exports;
var bf = {
    exports: {}
};
bf.exports;
(function(e, t) {
    var n = gb
      , r = t && !t.nodeType && t
      , o = r && !0 && e && !e.nodeType && e
      , s = o && o.exports === r
      , l = s && n.process
      , c = function() {
        try {
            var f = o && o.require && o.require("util").types;
            return f || l && l.binding && l.binding("util")
        } catch {}
    }();
    e.exports = c
}
)(bf, bf.exports);
var $5 = bf.exports
  , Rw = $5;
Rw && Rw.isTypedArray;
var F5 = ma
  , W5 = ti
  , z5 = F5(W5, "DataView")
  , U5 = z5
  , Y5 = ma
  , B5 = ti
  , H5 = Y5(B5, "Promise")
  , V5 = H5
  , G5 = ma
  , q5 = ti
  , Q5 = G5(q5, "Set")
  , K5 = Q5
  , Z5 = ma
  , J5 = ti
  , X5 = Z5(J5, "WeakMap")
  , ej = X5
  , Og = U5
  , Tg = Zm
  , Pg = V5
  , Rg = K5
  , Dg = ej
  , _b = Xf
  , wa = vb
  , Dw = "[object Map]"
  , tj = "[object Object]"
  , Iw = "[object Promise]"
  , Mw = "[object Set]"
  , Aw = "[object WeakMap]"
  , Nw = "[object DataView]"
  , nj = wa(Og)
  , rj = wa(Tg)
  , ij = wa(Pg)
  , oj = wa(Rg)
  , sj = wa(Dg)
  , Os = _b;
(Og && Os(new Og(new ArrayBuffer(1))) != Nw || Tg && Os(new Tg) != Dw || Pg && Os(Pg.resolve()) != Iw || Rg && Os(new Rg) != Mw || Dg && Os(new Dg) != Aw) && (Os = function(e) {
    var t = _b(e)
      , n = t == tj ? e.constructor : void 0
      , r = n ? wa(n) : "";
    if (r)
        switch (r) {
        case nj:
            return Nw;
        case rj:
            return Dw;
        case ij:
            return Iw;
        case oj:
            return Mw;
        case sj:
            return Aw
        }
    return t
}
);
const xb = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = new Set;
    let n = e;
    return {
        getState: () => n,
        subscribe: r => {
            t.add(r)
        }
        ,
        unsubscribe: r => {
            t.delete(r)
        }
        ,
        mutate: r => {
            n = r(n);
            for (const o of t)
                o(n)
        }
    }
}
  , aj = I.createContext(xb())
  , Sb = e => {
    let {store: t, children: n} = e;
    return I.createElement(aj.Provider, {
        value: t
    }, n)
}
;
Sb.propTypes = {
    children: b.node,
    store: b.shape({})
};
const lj = {
    pwaEnabled: !1,
    latestIsConnected: !1,
    subscribeToDhis2ConnectionStatus: () => () => {}
    ,
    startRecording: async () => {}
    ,
    getCachedSections: async () => [],
    removeSection: async () => !1
}
  , bb = ee.createContext(lj);
function Eb(e) {
    let {offlineInterface: t, children: n} = e;
    return I.createElement(bb.Provider, {
        value: t
    }, n)
}
Eb.propTypes = {
    children: b.node,
    offlineInterface: b.shape({
        init: b.func
    })
};
function kb() {
    const e = ee.useContext(bb);
    if (e === void 0)
        throw new Error("Offline interface context not found. If this app is using the app platform, make sure `pwa: { enabled: true }` is in d2.config.js. If this is not a platform app, make sure your app is wrapped with an app-runtime <Provider> or an <OfflineProvider> from app-service-offline.");
    return e
}
function uj(e) {
    return e.reduce( (t, n) => {
        let {sectionId: r, lastUpdated: o} = n;
        return {
            ...t,
            [r]: {
                lastUpdated: o
            }
        }
    }
    , {})
}
function cj() {
    return xb({
        recordingStates: {},
        cachedSections: {}
    })
}
function fj(e) {
    const t = I.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
function Cb(e) {
    let {children: t} = e;
    const n = kb()
      , r = fj(cj);
    return ee.useEffect( () => {
        n && n.getCachedSections().then(o => {
            r.mutate(s => ({
                ...s,
                cachedSections: uj(o)
            }))
        }
        )
    }
    , [r, n]),
    I.createElement(Sb, {
        store: r
    }, t)
}
Cb.propTypes = {
    children: b.node
};
var Ef = {
    exports: {}
};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ef.exports;
(function(e, t) {
    (function() {
        var n, r = "4.17.21", o = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", h = 500, v = "__lodash_placeholder__", m = 1, x = 2, E = 4, T = 1, N = 2, B = 1, P = 2, O = 4, D = 8, z = 16, H = 32, F = 64, W = 128, G = 256, ye = 512, ge = 30, Ce = "...", st = 800, ut = 16, Kt = 1, Zt = 2, gt = 3, xt = 1 / 0, ae = 9007199254740991, fe = 17976931348623157e292, ke = NaN, $e = 4294967295, St = $e - 1, ii = $e >>> 1, Lt = [["ary", W], ["bind", B], ["bindKey", P], ["curry", D], ["curryRight", z], ["flip", ye], ["partial", H], ["partialRight", F], ["rearg", G]], pn = "[object Arguments]", gn = "[object Array]", Ai = "[object AsyncFunction]", wr = "[object Boolean]", Ni = "[object Date]", wo = "[object DOMException]", ns = "[object Error]", Jn = "[object Function]", Li = "[object GeneratorFunction]", kn = "[object Map]", oi = "[object Number]", _o = "[object Null]", Xn = "[object Object]", ba = "[object Promise]", iu = "[object Proxy]", Lr = "[object RegExp]", Ln = "[object Set]", xo = "[object String]", jr = "[object Symbol]", ou = "[object Undefined]", mt = "[object WeakMap]", pd = "[object WeakSet]", $r = "[object ArrayBuffer]", Rt = "[object DataView]", rs = "[object Float32Array]", is = "[object Float64Array]", So = "[object Int8Array]", os = "[object Int16Array]", ss = "[object Int32Array]", bo = "[object Uint8Array]", as = "[object Uint8ClampedArray]", _r = "[object Uint16Array]", Jt = "[object Uint32Array]", gd = /\b__p \+= '';/g, md = /\b(__p \+=) '' \+/g, mn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, su = /&(?:amp|lt|gt|quot|#39);/g, au = /[&<>"']/g, Ea = RegExp(su.source), lu = RegExp(au.source), vn = /<%-([\s\S]+?)%>/g, ka = /<%([\s\S]+?)%>/g, Ca = /<%=([\s\S]+?)%>/g, uu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cu = /^\w*$/, fu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Eo = /[\\^$.*+?()[\]{}|]/g, Oa = RegExp(Eo.source), ls = /^\s+/, du = /\s/, hu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, pu = /\{\n\/\* \[wrapped with (.+)\] \*/, vd = /,? & /, yd = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, wd = /[()=,{}\[\]\/\s]/, gu = /\\(\\)?/g, Fr = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, mu = /\w*$/, Wr = /^[-+]0x[0-9a-f]+$/i, _d = /^0b[01]+$/i, xd = /^\[object .+?Constructor\]$/, Sd = /^0o[0-7]+$/i, bd = /^(?:0|[1-9]\d*)$/, vu = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, us = /($^)/, Ed = /['\n\r\u2028\u2029\\]/g, cs = "\\ud800-\\udfff", p = "\\u0300-\\u036f", k = "\\ufe20-\\ufe2f", y = "\\u20d0-\\u20ff", C = p + k + y, M = "\\u2700-\\u27bf", U = "a-z\\xdf-\\xf6\\xf8-\\xff", V = "\\xac\\xb1\\xd7\\xf7", X = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Q = "\\u2000-\\u206f", q = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", se = "A-Z\\xc0-\\xd6\\xd8-\\xde", ie = "\\ufe0e\\ufe0f", oe = V + X + Q + q, le = "['’]", De = "[" + cs + "]", Te = "[" + oe + "]", Oe = "[" + C + "]", Ke = "\\d+", Dt = "[" + M + "]", et = "[" + U + "]", Ze = "[^" + cs + oe + Ke + M + U + se + "]", Ot = "\\ud83c[\\udffb-\\udfff]", Ue = "(?:" + Oe + "|" + Ot + ")", tt = "[^" + cs + "]", on = "(?:\\ud83c[\\udde6-\\uddff]){2}", vt = "[\\ud800-\\udbff][\\udc00-\\udfff]", er = "[" + se + "]", fs = "\\u200d", T0 = "(?:" + et + "|" + Ze + ")", p2 = "(?:" + er + "|" + Ze + ")", P0 = "(?:" + le + "(?:d|ll|m|re|s|t|ve))?", R0 = "(?:" + le + "(?:D|LL|M|RE|S|T|VE))?", D0 = Ue + "?", I0 = "[" + ie + "]?", g2 = "(?:" + fs + "(?:" + [tt, on, vt].join("|") + ")" + I0 + D0 + ")*", m2 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", v2 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", M0 = I0 + D0 + g2, y2 = "(?:" + [Dt, on, vt].join("|") + ")" + M0, w2 = "(?:" + [tt + Oe + "?", Oe, on, vt, De].join("|") + ")", _2 = RegExp(le, "g"), x2 = RegExp(Oe, "g"), kd = RegExp(Ot + "(?=" + Ot + ")|" + w2 + M0, "g"), S2 = RegExp([er + "?" + et + "+" + P0 + "(?=" + [Te, er, "$"].join("|") + ")", p2 + "+" + R0 + "(?=" + [Te, er + T0, "$"].join("|") + ")", er + "?" + T0 + "+" + P0, er + "+" + R0, v2, m2, Ke, y2].join("|"), "g"), b2 = RegExp("[" + fs + cs + C + ie + "]"), E2 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, k2 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], C2 = -1, ct = {};
        ct[rs] = ct[is] = ct[So] = ct[os] = ct[ss] = ct[bo] = ct[as] = ct[_r] = ct[Jt] = !0,
        ct[pn] = ct[gn] = ct[$r] = ct[wr] = ct[Rt] = ct[Ni] = ct[ns] = ct[Jn] = ct[kn] = ct[oi] = ct[Xn] = ct[Lr] = ct[Ln] = ct[xo] = ct[mt] = !1;
        var at = {};
        at[pn] = at[gn] = at[$r] = at[Rt] = at[wr] = at[Ni] = at[rs] = at[is] = at[So] = at[os] = at[ss] = at[kn] = at[oi] = at[Xn] = at[Lr] = at[Ln] = at[xo] = at[jr] = at[bo] = at[as] = at[_r] = at[Jt] = !0,
        at[ns] = at[Jn] = at[mt] = !1;
        var O2 = {
            À: "A",
            Á: "A",
            Â: "A",
            Ã: "A",
            Ä: "A",
            Å: "A",
            à: "a",
            á: "a",
            â: "a",
            ã: "a",
            ä: "a",
            å: "a",
            Ç: "C",
            ç: "c",
            Ð: "D",
            ð: "d",
            È: "E",
            É: "E",
            Ê: "E",
            Ë: "E",
            è: "e",
            é: "e",
            ê: "e",
            ë: "e",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ï: "I",
            ì: "i",
            í: "i",
            î: "i",
            ï: "i",
            Ñ: "N",
            ñ: "n",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Õ: "O",
            Ö: "O",
            Ø: "O",
            ò: "o",
            ó: "o",
            ô: "o",
            õ: "o",
            ö: "o",
            ø: "o",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ü: "U",
            ù: "u",
            ú: "u",
            û: "u",
            ü: "u",
            Ý: "Y",
            ý: "y",
            ÿ: "y",
            Æ: "Ae",
            æ: "ae",
            Þ: "Th",
            þ: "th",
            ß: "ss",
            Ā: "A",
            Ă: "A",
            Ą: "A",
            ā: "a",
            ă: "a",
            ą: "a",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            Ď: "D",
            Đ: "D",
            ď: "d",
            đ: "d",
            Ē: "E",
            Ĕ: "E",
            Ė: "E",
            Ę: "E",
            Ě: "E",
            ē: "e",
            ĕ: "e",
            ė: "e",
            ę: "e",
            ě: "e",
            Ĝ: "G",
            Ğ: "G",
            Ġ: "G",
            Ģ: "G",
            ĝ: "g",
            ğ: "g",
            ġ: "g",
            ģ: "g",
            Ĥ: "H",
            Ħ: "H",
            ĥ: "h",
            ħ: "h",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            Į: "I",
            İ: "I",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            į: "i",
            ı: "i",
            Ĵ: "J",
            ĵ: "j",
            Ķ: "K",
            ķ: "k",
            ĸ: "k",
            Ĺ: "L",
            Ļ: "L",
            Ľ: "L",
            Ŀ: "L",
            Ł: "L",
            ĺ: "l",
            ļ: "l",
            ľ: "l",
            ŀ: "l",
            ł: "l",
            Ń: "N",
            Ņ: "N",
            Ň: "N",
            Ŋ: "N",
            ń: "n",
            ņ: "n",
            ň: "n",
            ŋ: "n",
            Ō: "O",
            Ŏ: "O",
            Ő: "O",
            ō: "o",
            ŏ: "o",
            ő: "o",
            Ŕ: "R",
            Ŗ: "R",
            Ř: "R",
            ŕ: "r",
            ŗ: "r",
            ř: "r",
            Ś: "S",
            Ŝ: "S",
            Ş: "S",
            Š: "S",
            ś: "s",
            ŝ: "s",
            ş: "s",
            š: "s",
            Ţ: "T",
            Ť: "T",
            Ŧ: "T",
            ţ: "t",
            ť: "t",
            ŧ: "t",
            Ũ: "U",
            Ū: "U",
            Ŭ: "U",
            Ů: "U",
            Ű: "U",
            Ų: "U",
            ũ: "u",
            ū: "u",
            ŭ: "u",
            ů: "u",
            ű: "u",
            ų: "u",
            Ŵ: "W",
            ŵ: "w",
            Ŷ: "Y",
            ŷ: "y",
            Ÿ: "Y",
            Ź: "Z",
            Ż: "Z",
            Ž: "Z",
            ź: "z",
            ż: "z",
            ž: "z",
            Ĳ: "IJ",
            ĳ: "ij",
            Œ: "Oe",
            œ: "oe",
            ŉ: "'n",
            ſ: "s"
        }
          , T2 = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
          , P2 = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }
          , R2 = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , D2 = parseFloat
          , I2 = parseInt
          , A0 = typeof Gr == "object" && Gr && Gr.Object === Object && Gr
          , M2 = typeof self == "object" && self && self.Object === Object && self
          , Xt = A0 || M2 || Function("return this")()
          , Cd = t && !t.nodeType && t
          , ko = Cd && !0 && e && !e.nodeType && e
          , N0 = ko && ko.exports === Cd
          , Od = N0 && A0.process
          , tr = function() {
            try {
                var L = ko && ko.require && ko.require("util").types;
                return L || Od && Od.binding && Od.binding("util")
            } catch {}
        }()
          , L0 = tr && tr.isArrayBuffer
          , j0 = tr && tr.isDate
          , $0 = tr && tr.isMap
          , F0 = tr && tr.isRegExp
          , W0 = tr && tr.isSet
          , z0 = tr && tr.isTypedArray;
        function jn(L, K, Y) {
            switch (Y.length) {
            case 0:
                return L.call(K);
            case 1:
                return L.call(K, Y[0]);
            case 2:
                return L.call(K, Y[0], Y[1]);
            case 3:
                return L.call(K, Y[0], Y[1], Y[2])
            }
            return L.apply(K, Y)
        }
        function A2(L, K, Y, he) {
            for (var Pe = -1, Ge = L == null ? 0 : L.length; ++Pe < Ge; ) {
                var zt = L[Pe];
                K(he, zt, Y(zt), L)
            }
            return he
        }
        function nr(L, K) {
            for (var Y = -1, he = L == null ? 0 : L.length; ++Y < he && K(L[Y], Y, L) !== !1; )
                ;
            return L
        }
        function N2(L, K) {
            for (var Y = L == null ? 0 : L.length; Y-- && K(L[Y], Y, L) !== !1; )
                ;
            return L
        }
        function U0(L, K) {
            for (var Y = -1, he = L == null ? 0 : L.length; ++Y < he; )
                if (!K(L[Y], Y, L))
                    return !1;
            return !0
        }
        function ji(L, K) {
            for (var Y = -1, he = L == null ? 0 : L.length, Pe = 0, Ge = []; ++Y < he; ) {
                var zt = L[Y];
                K(zt, Y, L) && (Ge[Pe++] = zt)
            }
            return Ge
        }
        function yu(L, K) {
            var Y = L == null ? 0 : L.length;
            return !!Y && ds(L, K, 0) > -1
        }
        function Td(L, K, Y) {
            for (var he = -1, Pe = L == null ? 0 : L.length; ++he < Pe; )
                if (Y(K, L[he]))
                    return !0;
            return !1
        }
        function yt(L, K) {
            for (var Y = -1, he = L == null ? 0 : L.length, Pe = Array(he); ++Y < he; )
                Pe[Y] = K(L[Y], Y, L);
            return Pe
        }
        function $i(L, K) {
            for (var Y = -1, he = K.length, Pe = L.length; ++Y < he; )
                L[Pe + Y] = K[Y];
            return L
        }
        function Pd(L, K, Y, he) {
            var Pe = -1
              , Ge = L == null ? 0 : L.length;
            for (he && Ge && (Y = L[++Pe]); ++Pe < Ge; )
                Y = K(Y, L[Pe], Pe, L);
            return Y
        }
        function L2(L, K, Y, he) {
            var Pe = L == null ? 0 : L.length;
            for (he && Pe && (Y = L[--Pe]); Pe--; )
                Y = K(Y, L[Pe], Pe, L);
            return Y
        }
        function Rd(L, K) {
            for (var Y = -1, he = L == null ? 0 : L.length; ++Y < he; )
                if (K(L[Y], Y, L))
                    return !0;
            return !1
        }
        var j2 = Dd("length");
        function $2(L) {
            return L.split("")
        }
        function F2(L) {
            return L.match(yd) || []
        }
        function Y0(L, K, Y) {
            var he;
            return Y(L, function(Pe, Ge, zt) {
                if (K(Pe, Ge, zt))
                    return he = Ge,
                    !1
            }),
            he
        }
        function wu(L, K, Y, he) {
            for (var Pe = L.length, Ge = Y + (he ? 1 : -1); he ? Ge-- : ++Ge < Pe; )
                if (K(L[Ge], Ge, L))
                    return Ge;
            return -1
        }
        function ds(L, K, Y) {
            return K === K ? Z2(L, K, Y) : wu(L, B0, Y)
        }
        function W2(L, K, Y, he) {
            for (var Pe = Y - 1, Ge = L.length; ++Pe < Ge; )
                if (he(L[Pe], K))
                    return Pe;
            return -1
        }
        function B0(L) {
            return L !== L
        }
        function H0(L, K) {
            var Y = L == null ? 0 : L.length;
            return Y ? Md(L, K) / Y : ke
        }
        function Dd(L) {
            return function(K) {
                return K == null ? n : K[L]
            }
        }
        function Id(L) {
            return function(K) {
                return L == null ? n : L[K]
            }
        }
        function V0(L, K, Y, he, Pe) {
            return Pe(L, function(Ge, zt, ot) {
                Y = he ? (he = !1,
                Ge) : K(Y, Ge, zt, ot)
            }),
            Y
        }
        function z2(L, K) {
            var Y = L.length;
            for (L.sort(K); Y--; )
                L[Y] = L[Y].value;
            return L
        }
        function Md(L, K) {
            for (var Y, he = -1, Pe = L.length; ++he < Pe; ) {
                var Ge = K(L[he]);
                Ge !== n && (Y = Y === n ? Ge : Y + Ge)
            }
            return Y
        }
        function Ad(L, K) {
            for (var Y = -1, he = Array(L); ++Y < L; )
                he[Y] = K(Y);
            return he
        }
        function U2(L, K) {
            return yt(K, function(Y) {
                return [Y, L[Y]]
            })
        }
        function G0(L) {
            return L && L.slice(0, Z0(L) + 1).replace(ls, "")
        }
        function $n(L) {
            return function(K) {
                return L(K)
            }
        }
        function Nd(L, K) {
            return yt(K, function(Y) {
                return L[Y]
            })
        }
        function Ta(L, K) {
            return L.has(K)
        }
        function q0(L, K) {
            for (var Y = -1, he = L.length; ++Y < he && ds(K, L[Y], 0) > -1; )
                ;
            return Y
        }
        function Q0(L, K) {
            for (var Y = L.length; Y-- && ds(K, L[Y], 0) > -1; )
                ;
            return Y
        }
        function Y2(L, K) {
            for (var Y = L.length, he = 0; Y--; )
                L[Y] === K && ++he;
            return he
        }
        var B2 = Id(O2)
          , H2 = Id(T2);
        function V2(L) {
            return "\\" + R2[L]
        }
        function G2(L, K) {
            return L == null ? n : L[K]
        }
        function hs(L) {
            return b2.test(L)
        }
        function q2(L) {
            return E2.test(L)
        }
        function Q2(L) {
            for (var K, Y = []; !(K = L.next()).done; )
                Y.push(K.value);
            return Y
        }
        function Ld(L) {
            var K = -1
              , Y = Array(L.size);
            return L.forEach(function(he, Pe) {
                Y[++K] = [Pe, he]
            }),
            Y
        }
        function K0(L, K) {
            return function(Y) {
                return L(K(Y))
            }
        }
        function Fi(L, K) {
            for (var Y = -1, he = L.length, Pe = 0, Ge = []; ++Y < he; ) {
                var zt = L[Y];
                (zt === K || zt === v) && (L[Y] = v,
                Ge[Pe++] = Y)
            }
            return Ge
        }
        function _u(L) {
            var K = -1
              , Y = Array(L.size);
            return L.forEach(function(he) {
                Y[++K] = he
            }),
            Y
        }
        function K2(L) {
            var K = -1
              , Y = Array(L.size);
            return L.forEach(function(he) {
                Y[++K] = [he, he]
            }),
            Y
        }
        function Z2(L, K, Y) {
            for (var he = Y - 1, Pe = L.length; ++he < Pe; )
                if (L[he] === K)
                    return he;
            return -1
        }
        function J2(L, K, Y) {
            for (var he = Y + 1; he--; )
                if (L[he] === K)
                    return he;
            return he
        }
        function ps(L) {
            return hs(L) ? ek(L) : j2(L)
        }
        function xr(L) {
            return hs(L) ? tk(L) : $2(L)
        }
        function Z0(L) {
            for (var K = L.length; K-- && du.test(L.charAt(K)); )
                ;
            return K
        }
        var X2 = Id(P2);
        function ek(L) {
            for (var K = kd.lastIndex = 0; kd.test(L); )
                ++K;
            return K
        }
        function tk(L) {
            return L.match(kd) || []
        }
        function nk(L) {
            return L.match(S2) || []
        }
        var rk = function L(K) {
            K = K == null ? Xt : gs.defaults(Xt.Object(), K, gs.pick(Xt, k2));
            var Y = K.Array
              , he = K.Date
              , Pe = K.Error
              , Ge = K.Function
              , zt = K.Math
              , ot = K.Object
              , jd = K.RegExp
              , ik = K.String
              , rr = K.TypeError
              , xu = Y.prototype
              , ok = Ge.prototype
              , ms = ot.prototype
              , Su = K["__core-js_shared__"]
              , bu = ok.toString
              , Je = ms.hasOwnProperty
              , sk = 0
              , J0 = function() {
                var i = /[^.]+$/.exec(Su && Su.keys && Su.keys.IE_PROTO || "");
                return i ? "Symbol(src)_1." + i : ""
            }()
              , Eu = ms.toString
              , ak = bu.call(ot)
              , lk = Xt._
              , uk = jd("^" + bu.call(Je).replace(Eo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
              , ku = N0 ? K.Buffer : n
              , Wi = K.Symbol
              , Cu = K.Uint8Array
              , X0 = ku ? ku.allocUnsafe : n
              , Ou = K0(ot.getPrototypeOf, ot)
              , ev = ot.create
              , tv = ms.propertyIsEnumerable
              , Tu = xu.splice
              , nv = Wi ? Wi.isConcatSpreadable : n
              , Pa = Wi ? Wi.iterator : n
              , Co = Wi ? Wi.toStringTag : n
              , Pu = function() {
                try {
                    var i = Do(ot, "defineProperty");
                    return i({}, "", {}),
                    i
                } catch {}
            }()
              , ck = K.clearTimeout !== Xt.clearTimeout && K.clearTimeout
              , fk = he && he.now !== Xt.Date.now && he.now
              , dk = K.setTimeout !== Xt.setTimeout && K.setTimeout
              , Ru = zt.ceil
              , Du = zt.floor
              , $d = ot.getOwnPropertySymbols
              , hk = ku ? ku.isBuffer : n
              , rv = K.isFinite
              , pk = xu.join
              , gk = K0(ot.keys, ot)
              , Ut = zt.max
              , sn = zt.min
              , mk = he.now
              , vk = K.parseInt
              , iv = zt.random
              , yk = xu.reverse
              , Fd = Do(K, "DataView")
              , Ra = Do(K, "Map")
              , Wd = Do(K, "Promise")
              , vs = Do(K, "Set")
              , Da = Do(K, "WeakMap")
              , Ia = Do(ot, "create")
              , Iu = Da && new Da
              , ys = {}
              , wk = Io(Fd)
              , _k = Io(Ra)
              , xk = Io(Wd)
              , Sk = Io(vs)
              , bk = Io(Da)
              , Mu = Wi ? Wi.prototype : n
              , Ma = Mu ? Mu.valueOf : n
              , ov = Mu ? Mu.toString : n;
            function w(i) {
                if (Tt(i) && !Re(i) && !(i instanceof Fe)) {
                    if (i instanceof ir)
                        return i;
                    if (Je.call(i, "__wrapped__"))
                        return sy(i)
                }
                return new ir(i)
            }
            var ws = function() {
                function i() {}
                return function(a) {
                    if (!bt(a))
                        return {};
                    if (ev)
                        return ev(a);
                    i.prototype = a;
                    var u = new i;
                    return i.prototype = n,
                    u
                }
            }();
            function Au() {}
            function ir(i, a) {
                this.__wrapped__ = i,
                this.__actions__ = [],
                this.__chain__ = !!a,
                this.__index__ = 0,
                this.__values__ = n
            }
            w.templateSettings = {
                escape: vn,
                evaluate: ka,
                interpolate: Ca,
                variable: "",
                imports: {
                    _: w
                }
            },
            w.prototype = Au.prototype,
            w.prototype.constructor = w,
            ir.prototype = ws(Au.prototype),
            ir.prototype.constructor = ir;
            function Fe(i) {
                this.__wrapped__ = i,
                this.__actions__ = [],
                this.__dir__ = 1,
                this.__filtered__ = !1,
                this.__iteratees__ = [],
                this.__takeCount__ = $e,
                this.__views__ = []
            }
            function Ek() {
                var i = new Fe(this.__wrapped__);
                return i.__actions__ = Cn(this.__actions__),
                i.__dir__ = this.__dir__,
                i.__filtered__ = this.__filtered__,
                i.__iteratees__ = Cn(this.__iteratees__),
                i.__takeCount__ = this.__takeCount__,
                i.__views__ = Cn(this.__views__),
                i
            }
            function kk() {
                if (this.__filtered__) {
                    var i = new Fe(this);
                    i.__dir__ = -1,
                    i.__filtered__ = !0
                } else
                    i = this.clone(),
                    i.__dir__ *= -1;
                return i
            }
            function Ck() {
                var i = this.__wrapped__.value()
                  , a = this.__dir__
                  , u = Re(i)
                  , d = a < 0
                  , g = u ? i.length : 0
                  , S = $C(0, g, this.__views__)
                  , R = S.start
                  , A = S.end
                  , j = A - R
                  , Z = d ? A : R - 1
                  , J = this.__iteratees__
                  , te = J.length
                  , ue = 0
                  , we = sn(j, this.__takeCount__);
                if (!u || !d && g == j && we == j)
                    return Pv(i, this.__actions__);
                var be = [];
                e: for (; j-- && ue < we; ) {
                    Z += a;
                    for (var Ae = -1, Ee = i[Z]; ++Ae < te; ) {
                        var Le = J[Ae]
                          , ze = Le.iteratee
                          , zn = Le.type
                          , _n = ze(Ee);
                        if (zn == Zt)
                            Ee = _n;
                        else if (!_n) {
                            if (zn == Kt)
                                continue e;
                            break e
                        }
                    }
                    be[ue++] = Ee
                }
                return be
            }
            Fe.prototype = ws(Au.prototype),
            Fe.prototype.constructor = Fe;
            function Oo(i) {
                var a = -1
                  , u = i == null ? 0 : i.length;
                for (this.clear(); ++a < u; ) {
                    var d = i[a];
                    this.set(d[0], d[1])
                }
            }
            function Ok() {
                this.__data__ = Ia ? Ia(null) : {},
                this.size = 0
            }
            function Tk(i) {
                var a = this.has(i) && delete this.__data__[i];
                return this.size -= a ? 1 : 0,
                a
            }
            function Pk(i) {
                var a = this.__data__;
                if (Ia) {
                    var u = a[i];
                    return u === f ? n : u
                }
                return Je.call(a, i) ? a[i] : n
            }
            function Rk(i) {
                var a = this.__data__;
                return Ia ? a[i] !== n : Je.call(a, i)
            }
            function Dk(i, a) {
                var u = this.__data__;
                return this.size += this.has(i) ? 0 : 1,
                u[i] = Ia && a === n ? f : a,
                this
            }
            Oo.prototype.clear = Ok,
            Oo.prototype.delete = Tk,
            Oo.prototype.get = Pk,
            Oo.prototype.has = Rk,
            Oo.prototype.set = Dk;
            function si(i) {
                var a = -1
                  , u = i == null ? 0 : i.length;
                for (this.clear(); ++a < u; ) {
                    var d = i[a];
                    this.set(d[0], d[1])
                }
            }
            function Ik() {
                this.__data__ = [],
                this.size = 0
            }
            function Mk(i) {
                var a = this.__data__
                  , u = Nu(a, i);
                if (u < 0)
                    return !1;
                var d = a.length - 1;
                return u == d ? a.pop() : Tu.call(a, u, 1),
                --this.size,
                !0
            }
            function Ak(i) {
                var a = this.__data__
                  , u = Nu(a, i);
                return u < 0 ? n : a[u][1]
            }
            function Nk(i) {
                return Nu(this.__data__, i) > -1
            }
            function Lk(i, a) {
                var u = this.__data__
                  , d = Nu(u, i);
                return d < 0 ? (++this.size,
                u.push([i, a])) : u[d][1] = a,
                this
            }
            si.prototype.clear = Ik,
            si.prototype.delete = Mk,
            si.prototype.get = Ak,
            si.prototype.has = Nk,
            si.prototype.set = Lk;
            function ai(i) {
                var a = -1
                  , u = i == null ? 0 : i.length;
                for (this.clear(); ++a < u; ) {
                    var d = i[a];
                    this.set(d[0], d[1])
                }
            }
            function jk() {
                this.size = 0,
                this.__data__ = {
                    hash: new Oo,
                    map: new (Ra || si),
                    string: new Oo
                }
            }
            function $k(i) {
                var a = Gu(this, i).delete(i);
                return this.size -= a ? 1 : 0,
                a
            }
            function Fk(i) {
                return Gu(this, i).get(i)
            }
            function Wk(i) {
                return Gu(this, i).has(i)
            }
            function zk(i, a) {
                var u = Gu(this, i)
                  , d = u.size;
                return u.set(i, a),
                this.size += u.size == d ? 0 : 1,
                this
            }
            ai.prototype.clear = jk,
            ai.prototype.delete = $k,
            ai.prototype.get = Fk,
            ai.prototype.has = Wk,
            ai.prototype.set = zk;
            function To(i) {
                var a = -1
                  , u = i == null ? 0 : i.length;
                for (this.__data__ = new ai; ++a < u; )
                    this.add(i[a])
            }
            function Uk(i) {
                return this.__data__.set(i, f),
                this
            }
            function Yk(i) {
                return this.__data__.has(i)
            }
            To.prototype.add = To.prototype.push = Uk,
            To.prototype.has = Yk;
            function Sr(i) {
                var a = this.__data__ = new si(i);
                this.size = a.size
            }
            function Bk() {
                this.__data__ = new si,
                this.size = 0
            }
            function Hk(i) {
                var a = this.__data__
                  , u = a.delete(i);
                return this.size = a.size,
                u
            }
            function Vk(i) {
                return this.__data__.get(i)
            }
            function Gk(i) {
                return this.__data__.has(i)
            }
            function qk(i, a) {
                var u = this.__data__;
                if (u instanceof si) {
                    var d = u.__data__;
                    if (!Ra || d.length < o - 1)
                        return d.push([i, a]),
                        this.size = ++u.size,
                        this;
                    u = this.__data__ = new ai(d)
                }
                return u.set(i, a),
                this.size = u.size,
                this
            }
            Sr.prototype.clear = Bk,
            Sr.prototype.delete = Hk,
            Sr.prototype.get = Vk,
            Sr.prototype.has = Gk,
            Sr.prototype.set = qk;
            function sv(i, a) {
                var u = Re(i)
                  , d = !u && Mo(i)
                  , g = !u && !d && Hi(i)
                  , S = !u && !d && !g && bs(i)
                  , R = u || d || g || S
                  , A = R ? Ad(i.length, ik) : []
                  , j = A.length;
                for (var Z in i)
                    (a || Je.call(i, Z)) && !(R && (Z == "length" || g && (Z == "offset" || Z == "parent") || S && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || fi(Z, j))) && A.push(Z);
                return A
            }
            function av(i) {
                var a = i.length;
                return a ? i[Zd(0, a - 1)] : n
            }
            function Qk(i, a) {
                return qu(Cn(i), Po(a, 0, i.length))
            }
            function Kk(i) {
                return qu(Cn(i))
            }
            function zd(i, a, u) {
                (u !== n && !br(i[a], u) || u === n && !(a in i)) && li(i, a, u)
            }
            function Aa(i, a, u) {
                var d = i[a];
                (!(Je.call(i, a) && br(d, u)) || u === n && !(a in i)) && li(i, a, u)
            }
            function Nu(i, a) {
                for (var u = i.length; u--; )
                    if (br(i[u][0], a))
                        return u;
                return -1
            }
            function Zk(i, a, u, d) {
                return zi(i, function(g, S, R) {
                    a(d, g, u(g), R)
                }),
                d
            }
            function lv(i, a) {
                return i && Ur(a, Gt(a), i)
            }
            function Jk(i, a) {
                return i && Ur(a, Tn(a), i)
            }
            function li(i, a, u) {
                a == "__proto__" && Pu ? Pu(i, a, {
                    configurable: !0,
                    enumerable: !0,
                    value: u,
                    writable: !0
                }) : i[a] = u
            }
            function Ud(i, a) {
                for (var u = -1, d = a.length, g = Y(d), S = i == null; ++u < d; )
                    g[u] = S ? n : Sh(i, a[u]);
                return g
            }
            function Po(i, a, u) {
                return i === i && (u !== n && (i = i <= u ? i : u),
                a !== n && (i = i >= a ? i : a)),
                i
            }
            function or(i, a, u, d, g, S) {
                var R, A = a & m, j = a & x, Z = a & E;
                if (u && (R = g ? u(i, d, g, S) : u(i)),
                R !== n)
                    return R;
                if (!bt(i))
                    return i;
                var J = Re(i);
                if (J) {
                    if (R = WC(i),
                    !A)
                        return Cn(i, R)
                } else {
                    var te = an(i)
                      , ue = te == Jn || te == Li;
                    if (Hi(i))
                        return Iv(i, A);
                    if (te == Xn || te == pn || ue && !g) {
                        if (R = j || ue ? {} : Zv(i),
                        !A)
                            return j ? PC(i, Jk(R, i)) : TC(i, lv(R, i))
                    } else {
                        if (!at[te])
                            return g ? i : {};
                        R = zC(i, te, A)
                    }
                }
                S || (S = new Sr);
                var we = S.get(i);
                if (we)
                    return we;
                S.set(i, R),
                Cy(i) ? i.forEach(function(Ee) {
                    R.add(or(Ee, a, u, Ee, i, S))
                }) : Ey(i) && i.forEach(function(Ee, Le) {
                    R.set(Le, or(Ee, a, u, Le, i, S))
                });
                var be = Z ? j ? lh : ah : j ? Tn : Gt
                  , Ae = J ? n : be(i);
                return nr(Ae || i, function(Ee, Le) {
                    Ae && (Le = Ee,
                    Ee = i[Le]),
                    Aa(R, Le, or(Ee, a, u, Le, i, S))
                }),
                R
            }
            function Xk(i) {
                var a = Gt(i);
                return function(u) {
                    return uv(u, i, a)
                }
            }
            function uv(i, a, u) {
                var d = u.length;
                if (i == null)
                    return !d;
                for (i = ot(i); d--; ) {
                    var g = u[d]
                      , S = a[g]
                      , R = i[g];
                    if (R === n && !(g in i) || !S(R))
                        return !1
                }
                return !0
            }
            function cv(i, a, u) {
                if (typeof i != "function")
                    throw new rr(l);
                return za(function() {
                    i.apply(n, u)
                }, a)
            }
            function Na(i, a, u, d) {
                var g = -1
                  , S = yu
                  , R = !0
                  , A = i.length
                  , j = []
                  , Z = a.length;
                if (!A)
                    return j;
                u && (a = yt(a, $n(u))),
                d ? (S = Td,
                R = !1) : a.length >= o && (S = Ta,
                R = !1,
                a = new To(a));
                e: for (; ++g < A; ) {
                    var J = i[g]
                      , te = u == null ? J : u(J);
                    if (J = d || J !== 0 ? J : 0,
                    R && te === te) {
                        for (var ue = Z; ue--; )
                            if (a[ue] === te)
                                continue e;
                        j.push(J)
                    } else
                        S(a, te, d) || j.push(J)
                }
                return j
            }
            var zi = jv(zr)
              , fv = jv(Bd, !0);
            function eC(i, a) {
                var u = !0;
                return zi(i, function(d, g, S) {
                    return u = !!a(d, g, S),
                    u
                }),
                u
            }
            function Lu(i, a, u) {
                for (var d = -1, g = i.length; ++d < g; ) {
                    var S = i[d]
                      , R = a(S);
                    if (R != null && (A === n ? R === R && !Wn(R) : u(R, A)))
                        var A = R
                          , j = S
                }
                return j
            }
            function tC(i, a, u, d) {
                var g = i.length;
                for (u = Ie(u),
                u < 0 && (u = -u > g ? 0 : g + u),
                d = d === n || d > g ? g : Ie(d),
                d < 0 && (d += g),
                d = u > d ? 0 : Ty(d); u < d; )
                    i[u++] = a;
                return i
            }
            function dv(i, a) {
                var u = [];
                return zi(i, function(d, g, S) {
                    a(d, g, S) && u.push(d)
                }),
                u
            }
            function en(i, a, u, d, g) {
                var S = -1
                  , R = i.length;
                for (u || (u = YC),
                g || (g = []); ++S < R; ) {
                    var A = i[S];
                    a > 0 && u(A) ? a > 1 ? en(A, a - 1, u, d, g) : $i(g, A) : d || (g[g.length] = A)
                }
                return g
            }
            var Yd = $v()
              , hv = $v(!0);
            function zr(i, a) {
                return i && Yd(i, a, Gt)
            }
            function Bd(i, a) {
                return i && hv(i, a, Gt)
            }
            function ju(i, a) {
                return ji(a, function(u) {
                    return di(i[u])
                })
            }
            function Ro(i, a) {
                a = Yi(a, i);
                for (var u = 0, d = a.length; i != null && u < d; )
                    i = i[Yr(a[u++])];
                return u && u == d ? i : n
            }
            function pv(i, a, u) {
                var d = a(i);
                return Re(i) ? d : $i(d, u(i))
            }
            function yn(i) {
                return i == null ? i === n ? ou : _o : Co && Co in ot(i) ? jC(i) : KC(i)
            }
            function Hd(i, a) {
                return i > a
            }
            function nC(i, a) {
                return i != null && Je.call(i, a)
            }
            function rC(i, a) {
                return i != null && a in ot(i)
            }
            function iC(i, a, u) {
                return i >= sn(a, u) && i < Ut(a, u)
            }
            function Vd(i, a, u) {
                for (var d = u ? Td : yu, g = i[0].length, S = i.length, R = S, A = Y(S), j = 1 / 0, Z = []; R--; ) {
                    var J = i[R];
                    R && a && (J = yt(J, $n(a))),
                    j = sn(J.length, j),
                    A[R] = !u && (a || g >= 120 && J.length >= 120) ? new To(R && J) : n
                }
                J = i[0];
                var te = -1
                  , ue = A[0];
                e: for (; ++te < g && Z.length < j; ) {
                    var we = J[te]
                      , be = a ? a(we) : we;
                    if (we = u || we !== 0 ? we : 0,
                    !(ue ? Ta(ue, be) : d(Z, be, u))) {
                        for (R = S; --R; ) {
                            var Ae = A[R];
                            if (!(Ae ? Ta(Ae, be) : d(i[R], be, u)))
                                continue e
                        }
                        ue && ue.push(be),
                        Z.push(we)
                    }
                }
                return Z
            }
            function oC(i, a, u, d) {
                return zr(i, function(g, S, R) {
                    a(d, u(g), S, R)
                }),
                d
            }
            function La(i, a, u) {
                a = Yi(a, i),
                i = ty(i, a);
                var d = i == null ? i : i[Yr(ar(a))];
                return d == null ? n : jn(d, i, u)
            }
            function gv(i) {
                return Tt(i) && yn(i) == pn
            }
            function sC(i) {
                return Tt(i) && yn(i) == $r
            }
            function aC(i) {
                return Tt(i) && yn(i) == Ni
            }
            function ja(i, a, u, d, g) {
                return i === a ? !0 : i == null || a == null || !Tt(i) && !Tt(a) ? i !== i && a !== a : lC(i, a, u, d, ja, g)
            }
            function lC(i, a, u, d, g, S) {
                var R = Re(i)
                  , A = Re(a)
                  , j = R ? gn : an(i)
                  , Z = A ? gn : an(a);
                j = j == pn ? Xn : j,
                Z = Z == pn ? Xn : Z;
                var J = j == Xn
                  , te = Z == Xn
                  , ue = j == Z;
                if (ue && Hi(i)) {
                    if (!Hi(a))
                        return !1;
                    R = !0,
                    J = !1
                }
                if (ue && !J)
                    return S || (S = new Sr),
                    R || bs(i) ? qv(i, a, u, d, g, S) : NC(i, a, j, u, d, g, S);
                if (!(u & T)) {
                    var we = J && Je.call(i, "__wrapped__")
                      , be = te && Je.call(a, "__wrapped__");
                    if (we || be) {
                        var Ae = we ? i.value() : i
                          , Ee = be ? a.value() : a;
                        return S || (S = new Sr),
                        g(Ae, Ee, u, d, S)
                    }
                }
                return ue ? (S || (S = new Sr),
                LC(i, a, u, d, g, S)) : !1
            }
            function uC(i) {
                return Tt(i) && an(i) == kn
            }
            function Gd(i, a, u, d) {
                var g = u.length
                  , S = g
                  , R = !d;
                if (i == null)
                    return !S;
                for (i = ot(i); g--; ) {
                    var A = u[g];
                    if (R && A[2] ? A[1] !== i[A[0]] : !(A[0] in i))
                        return !1
                }
                for (; ++g < S; ) {
                    A = u[g];
                    var j = A[0]
                      , Z = i[j]
                      , J = A[1];
                    if (R && A[2]) {
                        if (Z === n && !(j in i))
                            return !1
                    } else {
                        var te = new Sr;
                        if (d)
                            var ue = d(Z, J, j, i, a, te);
                        if (!(ue === n ? ja(J, Z, T | N, d, te) : ue))
                            return !1
                    }
                }
                return !0
            }
            function mv(i) {
                if (!bt(i) || HC(i))
                    return !1;
                var a = di(i) ? uk : xd;
                return a.test(Io(i))
            }
            function cC(i) {
                return Tt(i) && yn(i) == Lr
            }
            function fC(i) {
                return Tt(i) && an(i) == Ln
            }
            function dC(i) {
                return Tt(i) && ec(i.length) && !!ct[yn(i)]
            }
            function vv(i) {
                return typeof i == "function" ? i : i == null ? Pn : typeof i == "object" ? Re(i) ? _v(i[0], i[1]) : wv(i) : Fy(i)
            }
            function qd(i) {
                if (!Wa(i))
                    return gk(i);
                var a = [];
                for (var u in ot(i))
                    Je.call(i, u) && u != "constructor" && a.push(u);
                return a
            }
            function hC(i) {
                if (!bt(i))
                    return QC(i);
                var a = Wa(i)
                  , u = [];
                for (var d in i)
                    d == "constructor" && (a || !Je.call(i, d)) || u.push(d);
                return u
            }
            function Qd(i, a) {
                return i < a
            }
            function yv(i, a) {
                var u = -1
                  , d = On(i) ? Y(i.length) : [];
                return zi(i, function(g, S, R) {
                    d[++u] = a(g, S, R)
                }),
                d
            }
            function wv(i) {
                var a = ch(i);
                return a.length == 1 && a[0][2] ? Xv(a[0][0], a[0][1]) : function(u) {
                    return u === i || Gd(u, i, a)
                }
            }
            function _v(i, a) {
                return dh(i) && Jv(a) ? Xv(Yr(i), a) : function(u) {
                    var d = Sh(u, i);
                    return d === n && d === a ? bh(u, i) : ja(a, d, T | N)
                }
            }
            function $u(i, a, u, d, g) {
                i !== a && Yd(a, function(S, R) {
                    if (g || (g = new Sr),
                    bt(S))
                        pC(i, a, R, u, $u, d, g);
                    else {
                        var A = d ? d(ph(i, R), S, R + "", i, a, g) : n;
                        A === n && (A = S),
                        zd(i, R, A)
                    }
                }, Tn)
            }
            function pC(i, a, u, d, g, S, R) {
                var A = ph(i, u)
                  , j = ph(a, u)
                  , Z = R.get(j);
                if (Z) {
                    zd(i, u, Z);
                    return
                }
                var J = S ? S(A, j, u + "", i, a, R) : n
                  , te = J === n;
                if (te) {
                    var ue = Re(j)
                      , we = !ue && Hi(j)
                      , be = !ue && !we && bs(j);
                    J = j,
                    ue || we || be ? Re(A) ? J = A : It(A) ? J = Cn(A) : we ? (te = !1,
                    J = Iv(j, !0)) : be ? (te = !1,
                    J = Mv(j, !0)) : J = [] : Ua(j) || Mo(j) ? (J = A,
                    Mo(A) ? J = Py(A) : (!bt(A) || di(A)) && (J = Zv(j))) : te = !1
                }
                te && (R.set(j, J),
                g(J, j, d, S, R),
                R.delete(j)),
                zd(i, u, J)
            }
            function xv(i, a) {
                var u = i.length;
                if (u)
                    return a += a < 0 ? u : 0,
                    fi(a, u) ? i[a] : n
            }
            function Sv(i, a, u) {
                a.length ? a = yt(a, function(S) {
                    return Re(S) ? function(R) {
                        return Ro(R, S.length === 1 ? S[0] : S)
                    }
                    : S
                }) : a = [Pn];
                var d = -1;
                a = yt(a, $n(Se()));
                var g = yv(i, function(S, R, A) {
                    var j = yt(a, function(Z) {
                        return Z(S)
                    });
                    return {
                        criteria: j,
                        index: ++d,
                        value: S
                    }
                });
                return z2(g, function(S, R) {
                    return OC(S, R, u)
                })
            }
            function gC(i, a) {
                return bv(i, a, function(u, d) {
                    return bh(i, d)
                })
            }
            function bv(i, a, u) {
                for (var d = -1, g = a.length, S = {}; ++d < g; ) {
                    var R = a[d]
                      , A = Ro(i, R);
                    u(A, R) && $a(S, Yi(R, i), A)
                }
                return S
            }
            function mC(i) {
                return function(a) {
                    return Ro(a, i)
                }
            }
            function Kd(i, a, u, d) {
                var g = d ? W2 : ds
                  , S = -1
                  , R = a.length
                  , A = i;
                for (i === a && (a = Cn(a)),
                u && (A = yt(i, $n(u))); ++S < R; )
                    for (var j = 0, Z = a[S], J = u ? u(Z) : Z; (j = g(A, J, j, d)) > -1; )
                        A !== i && Tu.call(A, j, 1),
                        Tu.call(i, j, 1);
                return i
            }
            function Ev(i, a) {
                for (var u = i ? a.length : 0, d = u - 1; u--; ) {
                    var g = a[u];
                    if (u == d || g !== S) {
                        var S = g;
                        fi(g) ? Tu.call(i, g, 1) : eh(i, g)
                    }
                }
                return i
            }
            function Zd(i, a) {
                return i + Du(iv() * (a - i + 1))
            }
            function vC(i, a, u, d) {
                for (var g = -1, S = Ut(Ru((a - i) / (u || 1)), 0), R = Y(S); S--; )
                    R[d ? S : ++g] = i,
                    i += u;
                return R
            }
            function Jd(i, a) {
                var u = "";
                if (!i || a < 1 || a > ae)
                    return u;
                do
                    a % 2 && (u += i),
                    a = Du(a / 2),
                    a && (i += i);
                while (a);
                return u
            }
            function Ne(i, a) {
                return gh(ey(i, a, Pn), i + "")
            }
            function yC(i) {
                return av(Es(i))
            }
            function wC(i, a) {
                var u = Es(i);
                return qu(u, Po(a, 0, u.length))
            }
            function $a(i, a, u, d) {
                if (!bt(i))
                    return i;
                a = Yi(a, i);
                for (var g = -1, S = a.length, R = S - 1, A = i; A != null && ++g < S; ) {
                    var j = Yr(a[g])
                      , Z = u;
                    if (j === "__proto__" || j === "constructor" || j === "prototype")
                        return i;
                    if (g != R) {
                        var J = A[j];
                        Z = d ? d(J, j, A) : n,
                        Z === n && (Z = bt(J) ? J : fi(a[g + 1]) ? [] : {})
                    }
                    Aa(A, j, Z),
                    A = A[j]
                }
                return i
            }
            var kv = Iu ? function(i, a) {
                return Iu.set(i, a),
                i
            }
            : Pn
              , _C = Pu ? function(i, a) {
                return Pu(i, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: kh(a),
                    writable: !0
                })
            }
            : Pn;
            function xC(i) {
                return qu(Es(i))
            }
            function sr(i, a, u) {
                var d = -1
                  , g = i.length;
                a < 0 && (a = -a > g ? 0 : g + a),
                u = u > g ? g : u,
                u < 0 && (u += g),
                g = a > u ? 0 : u - a >>> 0,
                a >>>= 0;
                for (var S = Y(g); ++d < g; )
                    S[d] = i[d + a];
                return S
            }
            function SC(i, a) {
                var u;
                return zi(i, function(d, g, S) {
                    return u = a(d, g, S),
                    !u
                }),
                !!u
            }
            function Fu(i, a, u) {
                var d = 0
                  , g = i == null ? d : i.length;
                if (typeof a == "number" && a === a && g <= ii) {
                    for (; d < g; ) {
                        var S = d + g >>> 1
                          , R = i[S];
                        R !== null && !Wn(R) && (u ? R <= a : R < a) ? d = S + 1 : g = S
                    }
                    return g
                }
                return Xd(i, a, Pn, u)
            }
            function Xd(i, a, u, d) {
                var g = 0
                  , S = i == null ? 0 : i.length;
                if (S === 0)
                    return 0;
                a = u(a);
                for (var R = a !== a, A = a === null, j = Wn(a), Z = a === n; g < S; ) {
                    var J = Du((g + S) / 2)
                      , te = u(i[J])
                      , ue = te !== n
                      , we = te === null
                      , be = te === te
                      , Ae = Wn(te);
                    if (R)
                        var Ee = d || be;
                    else
                        Z ? Ee = be && (d || ue) : A ? Ee = be && ue && (d || !we) : j ? Ee = be && ue && !we && (d || !Ae) : we || Ae ? Ee = !1 : Ee = d ? te <= a : te < a;
                    Ee ? g = J + 1 : S = J
                }
                return sn(S, St)
            }
            function Cv(i, a) {
                for (var u = -1, d = i.length, g = 0, S = []; ++u < d; ) {
                    var R = i[u]
                      , A = a ? a(R) : R;
                    if (!u || !br(A, j)) {
                        var j = A;
                        S[g++] = R === 0 ? 0 : R
                    }
                }
                return S
            }
            function Ov(i) {
                return typeof i == "number" ? i : Wn(i) ? ke : +i
            }
            function Fn(i) {
                if (typeof i == "string")
                    return i;
                if (Re(i))
                    return yt(i, Fn) + "";
                if (Wn(i))
                    return ov ? ov.call(i) : "";
                var a = i + "";
                return a == "0" && 1 / i == -xt ? "-0" : a
            }
            function Ui(i, a, u) {
                var d = -1
                  , g = yu
                  , S = i.length
                  , R = !0
                  , A = []
                  , j = A;
                if (u)
                    R = !1,
                    g = Td;
                else if (S >= o) {
                    var Z = a ? null : MC(i);
                    if (Z)
                        return _u(Z);
                    R = !1,
                    g = Ta,
                    j = new To
                } else
                    j = a ? [] : A;
                e: for (; ++d < S; ) {
                    var J = i[d]
                      , te = a ? a(J) : J;
                    if (J = u || J !== 0 ? J : 0,
                    R && te === te) {
                        for (var ue = j.length; ue--; )
                            if (j[ue] === te)
                                continue e;
                        a && j.push(te),
                        A.push(J)
                    } else
                        g(j, te, u) || (j !== A && j.push(te),
                        A.push(J))
                }
                return A
            }
            function eh(i, a) {
                return a = Yi(a, i),
                i = ty(i, a),
                i == null || delete i[Yr(ar(a))]
            }
            function Tv(i, a, u, d) {
                return $a(i, a, u(Ro(i, a)), d)
            }
            function Wu(i, a, u, d) {
                for (var g = i.length, S = d ? g : -1; (d ? S-- : ++S < g) && a(i[S], S, i); )
                    ;
                return u ? sr(i, d ? 0 : S, d ? S + 1 : g) : sr(i, d ? S + 1 : 0, d ? g : S)
            }
            function Pv(i, a) {
                var u = i;
                return u instanceof Fe && (u = u.value()),
                Pd(a, function(d, g) {
                    return g.func.apply(g.thisArg, $i([d], g.args))
                }, u)
            }
            function th(i, a, u) {
                var d = i.length;
                if (d < 2)
                    return d ? Ui(i[0]) : [];
                for (var g = -1, S = Y(d); ++g < d; )
                    for (var R = i[g], A = -1; ++A < d; )
                        A != g && (S[g] = Na(S[g] || R, i[A], a, u));
                return Ui(en(S, 1), a, u)
            }
            function Rv(i, a, u) {
                for (var d = -1, g = i.length, S = a.length, R = {}; ++d < g; ) {
                    var A = d < S ? a[d] : n;
                    u(R, i[d], A)
                }
                return R
            }
            function nh(i) {
                return It(i) ? i : []
            }
            function rh(i) {
                return typeof i == "function" ? i : Pn
            }
            function Yi(i, a) {
                return Re(i) ? i : dh(i, a) ? [i] : oy(Qe(i))
            }
            var bC = Ne;
            function Bi(i, a, u) {
                var d = i.length;
                return u = u === n ? d : u,
                !a && u >= d ? i : sr(i, a, u)
            }
            var Dv = ck || function(i) {
                return Xt.clearTimeout(i)
            }
            ;
            function Iv(i, a) {
                if (a)
                    return i.slice();
                var u = i.length
                  , d = X0 ? X0(u) : new i.constructor(u);
                return i.copy(d),
                d
            }
            function ih(i) {
                var a = new i.constructor(i.byteLength);
                return new Cu(a).set(new Cu(i)),
                a
            }
            function EC(i, a) {
                var u = a ? ih(i.buffer) : i.buffer;
                return new i.constructor(u,i.byteOffset,i.byteLength)
            }
            function kC(i) {
                var a = new i.constructor(i.source,mu.exec(i));
                return a.lastIndex = i.lastIndex,
                a
            }
            function CC(i) {
                return Ma ? ot(Ma.call(i)) : {}
            }
            function Mv(i, a) {
                var u = a ? ih(i.buffer) : i.buffer;
                return new i.constructor(u,i.byteOffset,i.length)
            }
            function Av(i, a) {
                if (i !== a) {
                    var u = i !== n
                      , d = i === null
                      , g = i === i
                      , S = Wn(i)
                      , R = a !== n
                      , A = a === null
                      , j = a === a
                      , Z = Wn(a);
                    if (!A && !Z && !S && i > a || S && R && j && !A && !Z || d && R && j || !u && j || !g)
                        return 1;
                    if (!d && !S && !Z && i < a || Z && u && g && !d && !S || A && u && g || !R && g || !j)
                        return -1
                }
                return 0
            }
            function OC(i, a, u) {
                for (var d = -1, g = i.criteria, S = a.criteria, R = g.length, A = u.length; ++d < R; ) {
                    var j = Av(g[d], S[d]);
                    if (j) {
                        if (d >= A)
                            return j;
                        var Z = u[d];
                        return j * (Z == "desc" ? -1 : 1)
                    }
                }
                return i.index - a.index
            }
            function Nv(i, a, u, d) {
                for (var g = -1, S = i.length, R = u.length, A = -1, j = a.length, Z = Ut(S - R, 0), J = Y(j + Z), te = !d; ++A < j; )
                    J[A] = a[A];
                for (; ++g < R; )
                    (te || g < S) && (J[u[g]] = i[g]);
                for (; Z--; )
                    J[A++] = i[g++];
                return J
            }
            function Lv(i, a, u, d) {
                for (var g = -1, S = i.length, R = -1, A = u.length, j = -1, Z = a.length, J = Ut(S - A, 0), te = Y(J + Z), ue = !d; ++g < J; )
                    te[g] = i[g];
                for (var we = g; ++j < Z; )
                    te[we + j] = a[j];
                for (; ++R < A; )
                    (ue || g < S) && (te[we + u[R]] = i[g++]);
                return te
            }
            function Cn(i, a) {
                var u = -1
                  , d = i.length;
                for (a || (a = Y(d)); ++u < d; )
                    a[u] = i[u];
                return a
            }
            function Ur(i, a, u, d) {
                var g = !u;
                u || (u = {});
                for (var S = -1, R = a.length; ++S < R; ) {
                    var A = a[S]
                      , j = d ? d(u[A], i[A], A, u, i) : n;
                    j === n && (j = i[A]),
                    g ? li(u, A, j) : Aa(u, A, j)
                }
                return u
            }
            function TC(i, a) {
                return Ur(i, fh(i), a)
            }
            function PC(i, a) {
                return Ur(i, Qv(i), a)
            }
            function zu(i, a) {
                return function(u, d) {
                    var g = Re(u) ? A2 : Zk
                      , S = a ? a() : {};
                    return g(u, i, Se(d, 2), S)
                }
            }
            function _s(i) {
                return Ne(function(a, u) {
                    var d = -1
                      , g = u.length
                      , S = g > 1 ? u[g - 1] : n
                      , R = g > 2 ? u[2] : n;
                    for (S = i.length > 3 && typeof S == "function" ? (g--,
                    S) : n,
                    R && wn(u[0], u[1], R) && (S = g < 3 ? n : S,
                    g = 1),
                    a = ot(a); ++d < g; ) {
                        var A = u[d];
                        A && i(a, A, d, S)
                    }
                    return a
                })
            }
            function jv(i, a) {
                return function(u, d) {
                    if (u == null)
                        return u;
                    if (!On(u))
                        return i(u, d);
                    for (var g = u.length, S = a ? g : -1, R = ot(u); (a ? S-- : ++S < g) && d(R[S], S, R) !== !1; )
                        ;
                    return u
                }
            }
            function $v(i) {
                return function(a, u, d) {
                    for (var g = -1, S = ot(a), R = d(a), A = R.length; A--; ) {
                        var j = R[i ? A : ++g];
                        if (u(S[j], j, S) === !1)
                            break
                    }
                    return a
                }
            }
            function RC(i, a, u) {
                var d = a & B
                  , g = Fa(i);
                function S() {
                    var R = this && this !== Xt && this instanceof S ? g : i;
                    return R.apply(d ? u : this, arguments)
                }
                return S
            }
            function Fv(i) {
                return function(a) {
                    a = Qe(a);
                    var u = hs(a) ? xr(a) : n
                      , d = u ? u[0] : a.charAt(0)
                      , g = u ? Bi(u, 1).join("") : a.slice(1);
                    return d[i]() + g
                }
            }
            function xs(i) {
                return function(a) {
                    return Pd(jy(Ly(a).replace(_2, "")), i, "")
                }
            }
            function Fa(i) {
                return function() {
                    var a = arguments;
                    switch (a.length) {
                    case 0:
                        return new i;
                    case 1:
                        return new i(a[0]);
                    case 2:
                        return new i(a[0],a[1]);
                    case 3:
                        return new i(a[0],a[1],a[2]);
                    case 4:
                        return new i(a[0],a[1],a[2],a[3]);
                    case 5:
                        return new i(a[0],a[1],a[2],a[3],a[4]);
                    case 6:
                        return new i(a[0],a[1],a[2],a[3],a[4],a[5]);
                    case 7:
                        return new i(a[0],a[1],a[2],a[3],a[4],a[5],a[6])
                    }
                    var u = ws(i.prototype)
                      , d = i.apply(u, a);
                    return bt(d) ? d : u
                }
            }
            function DC(i, a, u) {
                var d = Fa(i);
                function g() {
                    for (var S = arguments.length, R = Y(S), A = S, j = Ss(g); A--; )
                        R[A] = arguments[A];
                    var Z = S < 3 && R[0] !== j && R[S - 1] !== j ? [] : Fi(R, j);
                    if (S -= Z.length,
                    S < u)
                        return Bv(i, a, Uu, g.placeholder, n, R, Z, n, n, u - S);
                    var J = this && this !== Xt && this instanceof g ? d : i;
                    return jn(J, this, R)
                }
                return g
            }
            function Wv(i) {
                return function(a, u, d) {
                    var g = ot(a);
                    if (!On(a)) {
                        var S = Se(u, 3);
                        a = Gt(a),
                        u = function(A) {
                            return S(g[A], A, g)
                        }
                    }
                    var R = i(a, u, d);
                    return R > -1 ? g[S ? a[R] : R] : n
                }
            }
            function zv(i) {
                return ci(function(a) {
                    var u = a.length
                      , d = u
                      , g = ir.prototype.thru;
                    for (i && a.reverse(); d--; ) {
                        var S = a[d];
                        if (typeof S != "function")
                            throw new rr(l);
                        if (g && !R && Vu(S) == "wrapper")
                            var R = new ir([],!0)
                    }
                    for (d = R ? d : u; ++d < u; ) {
                        S = a[d];
                        var A = Vu(S)
                          , j = A == "wrapper" ? uh(S) : n;
                        j && hh(j[0]) && j[1] == (W | D | H | G) && !j[4].length && j[9] == 1 ? R = R[Vu(j[0])].apply(R, j[3]) : R = S.length == 1 && hh(S) ? R[A]() : R.thru(S)
                    }
                    return function() {
                        var Z = arguments
                          , J = Z[0];
                        if (R && Z.length == 1 && Re(J))
                            return R.plant(J).value();
                        for (var te = 0, ue = u ? a[te].apply(this, Z) : J; ++te < u; )
                            ue = a[te].call(this, ue);
                        return ue
                    }
                })
            }
            function Uu(i, a, u, d, g, S, R, A, j, Z) {
                var J = a & W
                  , te = a & B
                  , ue = a & P
                  , we = a & (D | z)
                  , be = a & ye
                  , Ae = ue ? n : Fa(i);
                function Ee() {
                    for (var Le = arguments.length, ze = Y(Le), zn = Le; zn--; )
                        ze[zn] = arguments[zn];
                    if (we)
                        var _n = Ss(Ee)
                          , Un = Y2(ze, _n);
                    if (d && (ze = Nv(ze, d, g, we)),
                    S && (ze = Lv(ze, S, R, we)),
                    Le -= Un,
                    we && Le < Z) {
                        var Mt = Fi(ze, _n);
                        return Bv(i, a, Uu, Ee.placeholder, u, ze, Mt, A, j, Z - Le)
                    }
                    var Er = te ? u : this
                      , pi = ue ? Er[i] : i;
                    return Le = ze.length,
                    A ? ze = ZC(ze, A) : be && Le > 1 && ze.reverse(),
                    J && j < Le && (ze.length = j),
                    this && this !== Xt && this instanceof Ee && (pi = Ae || Fa(pi)),
                    pi.apply(Er, ze)
                }
                return Ee
            }
            function Uv(i, a) {
                return function(u, d) {
                    return oC(u, i, a(d), {})
                }
            }
            function Yu(i, a) {
                return function(u, d) {
                    var g;
                    if (u === n && d === n)
                        return a;
                    if (u !== n && (g = u),
                    d !== n) {
                        if (g === n)
                            return d;
                        typeof u == "string" || typeof d == "string" ? (u = Fn(u),
                        d = Fn(d)) : (u = Ov(u),
                        d = Ov(d)),
                        g = i(u, d)
                    }
                    return g
                }
            }
            function oh(i) {
                return ci(function(a) {
                    return a = yt(a, $n(Se())),
                    Ne(function(u) {
                        var d = this;
                        return i(a, function(g) {
                            return jn(g, d, u)
                        })
                    })
                })
            }
            function Bu(i, a) {
                a = a === n ? " " : Fn(a);
                var u = a.length;
                if (u < 2)
                    return u ? Jd(a, i) : a;
                var d = Jd(a, Ru(i / ps(a)));
                return hs(a) ? Bi(xr(d), 0, i).join("") : d.slice(0, i)
            }
            function IC(i, a, u, d) {
                var g = a & B
                  , S = Fa(i);
                function R() {
                    for (var A = -1, j = arguments.length, Z = -1, J = d.length, te = Y(J + j), ue = this && this !== Xt && this instanceof R ? S : i; ++Z < J; )
                        te[Z] = d[Z];
                    for (; j--; )
                        te[Z++] = arguments[++A];
                    return jn(ue, g ? u : this, te)
                }
                return R
            }
            function Yv(i) {
                return function(a, u, d) {
                    return d && typeof d != "number" && wn(a, u, d) && (u = d = n),
                    a = hi(a),
                    u === n ? (u = a,
                    a = 0) : u = hi(u),
                    d = d === n ? a < u ? 1 : -1 : hi(d),
                    vC(a, u, d, i)
                }
            }
            function Hu(i) {
                return function(a, u) {
                    return typeof a == "string" && typeof u == "string" || (a = lr(a),
                    u = lr(u)),
                    i(a, u)
                }
            }
            function Bv(i, a, u, d, g, S, R, A, j, Z) {
                var J = a & D
                  , te = J ? R : n
                  , ue = J ? n : R
                  , we = J ? S : n
                  , be = J ? n : S;
                a |= J ? H : F,
                a &= ~(J ? F : H),
                a & O || (a &= ~(B | P));
                var Ae = [i, a, g, we, te, be, ue, A, j, Z]
                  , Ee = u.apply(n, Ae);
                return hh(i) && ny(Ee, Ae),
                Ee.placeholder = d,
                ry(Ee, i, a)
            }
            function sh(i) {
                var a = zt[i];
                return function(u, d) {
                    if (u = lr(u),
                    d = d == null ? 0 : sn(Ie(d), 292),
                    d && rv(u)) {
                        var g = (Qe(u) + "e").split("e")
                          , S = a(g[0] + "e" + (+g[1] + d));
                        return g = (Qe(S) + "e").split("e"),
                        +(g[0] + "e" + (+g[1] - d))
                    }
                    return a(u)
                }
            }
            var MC = vs && 1 / _u(new vs([, -0]))[1] == xt ? function(i) {
                return new vs(i)
            }
            : Th;
            function Hv(i) {
                return function(a) {
                    var u = an(a);
                    return u == kn ? Ld(a) : u == Ln ? K2(a) : U2(a, i(a))
                }
            }
            function ui(i, a, u, d, g, S, R, A) {
                var j = a & P;
                if (!j && typeof i != "function")
                    throw new rr(l);
                var Z = d ? d.length : 0;
                if (Z || (a &= ~(H | F),
                d = g = n),
                R = R === n ? R : Ut(Ie(R), 0),
                A = A === n ? A : Ie(A),
                Z -= g ? g.length : 0,
                a & F) {
                    var J = d
                      , te = g;
                    d = g = n
                }
                var ue = j ? n : uh(i)
                  , we = [i, a, u, d, g, J, te, S, R, A];
                if (ue && qC(we, ue),
                i = we[0],
                a = we[1],
                u = we[2],
                d = we[3],
                g = we[4],
                A = we[9] = we[9] === n ? j ? 0 : i.length : Ut(we[9] - Z, 0),
                !A && a & (D | z) && (a &= ~(D | z)),
                !a || a == B)
                    var be = RC(i, a, u);
                else
                    a == D || a == z ? be = DC(i, a, A) : (a == H || a == (B | H)) && !g.length ? be = IC(i, a, u, d) : be = Uu.apply(n, we);
                var Ae = ue ? kv : ny;
                return ry(Ae(be, we), i, a)
            }
            function Vv(i, a, u, d) {
                return i === n || br(i, ms[u]) && !Je.call(d, u) ? a : i
            }
            function Gv(i, a, u, d, g, S) {
                return bt(i) && bt(a) && (S.set(a, i),
                $u(i, a, n, Gv, S),
                S.delete(a)),
                i
            }
            function AC(i) {
                return Ua(i) ? n : i
            }
            function qv(i, a, u, d, g, S) {
                var R = u & T
                  , A = i.length
                  , j = a.length;
                if (A != j && !(R && j > A))
                    return !1;
                var Z = S.get(i)
                  , J = S.get(a);
                if (Z && J)
                    return Z == a && J == i;
                var te = -1
                  , ue = !0
                  , we = u & N ? new To : n;
                for (S.set(i, a),
                S.set(a, i); ++te < A; ) {
                    var be = i[te]
                      , Ae = a[te];
                    if (d)
                        var Ee = R ? d(Ae, be, te, a, i, S) : d(be, Ae, te, i, a, S);
                    if (Ee !== n) {
                        if (Ee)
                            continue;
                        ue = !1;
                        break
                    }
                    if (we) {
                        if (!Rd(a, function(Le, ze) {
                            if (!Ta(we, ze) && (be === Le || g(be, Le, u, d, S)))
                                return we.push(ze)
                        })) {
                            ue = !1;
                            break
                        }
                    } else if (!(be === Ae || g(be, Ae, u, d, S))) {
                        ue = !1;
                        break
                    }
                }
                return S.delete(i),
                S.delete(a),
                ue
            }
            function NC(i, a, u, d, g, S, R) {
                switch (u) {
                case Rt:
                    if (i.byteLength != a.byteLength || i.byteOffset != a.byteOffset)
                        return !1;
                    i = i.buffer,
                    a = a.buffer;
                case $r:
                    return !(i.byteLength != a.byteLength || !S(new Cu(i), new Cu(a)));
                case wr:
                case Ni:
                case oi:
                    return br(+i, +a);
                case ns:
                    return i.name == a.name && i.message == a.message;
                case Lr:
                case xo:
                    return i == a + "";
                case kn:
                    var A = Ld;
                case Ln:
                    var j = d & T;
                    if (A || (A = _u),
                    i.size != a.size && !j)
                        return !1;
                    var Z = R.get(i);
                    if (Z)
                        return Z == a;
                    d |= N,
                    R.set(i, a);
                    var J = qv(A(i), A(a), d, g, S, R);
                    return R.delete(i),
                    J;
                case jr:
                    if (Ma)
                        return Ma.call(i) == Ma.call(a)
                }
                return !1
            }
            function LC(i, a, u, d, g, S) {
                var R = u & T
                  , A = ah(i)
                  , j = A.length
                  , Z = ah(a)
                  , J = Z.length;
                if (j != J && !R)
                    return !1;
                for (var te = j; te--; ) {
                    var ue = A[te];
                    if (!(R ? ue in a : Je.call(a, ue)))
                        return !1
                }
                var we = S.get(i)
                  , be = S.get(a);
                if (we && be)
                    return we == a && be == i;
                var Ae = !0;
                S.set(i, a),
                S.set(a, i);
                for (var Ee = R; ++te < j; ) {
                    ue = A[te];
                    var Le = i[ue]
                      , ze = a[ue];
                    if (d)
                        var zn = R ? d(ze, Le, ue, a, i, S) : d(Le, ze, ue, i, a, S);
                    if (!(zn === n ? Le === ze || g(Le, ze, u, d, S) : zn)) {
                        Ae = !1;
                        break
                    }
                    Ee || (Ee = ue == "constructor")
                }
                if (Ae && !Ee) {
                    var _n = i.constructor
                      , Un = a.constructor;
                    _n != Un && "constructor" in i && "constructor" in a && !(typeof _n == "function" && _n instanceof _n && typeof Un == "function" && Un instanceof Un) && (Ae = !1)
                }
                return S.delete(i),
                S.delete(a),
                Ae
            }
            function ci(i) {
                return gh(ey(i, n, uy), i + "")
            }
            function ah(i) {
                return pv(i, Gt, fh)
            }
            function lh(i) {
                return pv(i, Tn, Qv)
            }
            var uh = Iu ? function(i) {
                return Iu.get(i)
            }
            : Th;
            function Vu(i) {
                for (var a = i.name + "", u = ys[a], d = Je.call(ys, a) ? u.length : 0; d--; ) {
                    var g = u[d]
                      , S = g.func;
                    if (S == null || S == i)
                        return g.name
                }
                return a
            }
            function Ss(i) {
                var a = Je.call(w, "placeholder") ? w : i;
                return a.placeholder
            }
            function Se() {
                var i = w.iteratee || Ch;
                return i = i === Ch ? vv : i,
                arguments.length ? i(arguments[0], arguments[1]) : i
            }
            function Gu(i, a) {
                var u = i.__data__;
                return BC(a) ? u[typeof a == "string" ? "string" : "hash"] : u.map
            }
            function ch(i) {
                for (var a = Gt(i), u = a.length; u--; ) {
                    var d = a[u]
                      , g = i[d];
                    a[u] = [d, g, Jv(g)]
                }
                return a
            }
            function Do(i, a) {
                var u = G2(i, a);
                return mv(u) ? u : n
            }
            function jC(i) {
                var a = Je.call(i, Co)
                  , u = i[Co];
                try {
                    i[Co] = n;
                    var d = !0
                } catch {}
                var g = Eu.call(i);
                return d && (a ? i[Co] = u : delete i[Co]),
                g
            }
            var fh = $d ? function(i) {
                return i == null ? [] : (i = ot(i),
                ji($d(i), function(a) {
                    return tv.call(i, a)
                }))
            }
            : Ph
              , Qv = $d ? function(i) {
                for (var a = []; i; )
                    $i(a, fh(i)),
                    i = Ou(i);
                return a
            }
            : Ph
              , an = yn;
            (Fd && an(new Fd(new ArrayBuffer(1))) != Rt || Ra && an(new Ra) != kn || Wd && an(Wd.resolve()) != ba || vs && an(new vs) != Ln || Da && an(new Da) != mt) && (an = function(i) {
                var a = yn(i)
                  , u = a == Xn ? i.constructor : n
                  , d = u ? Io(u) : "";
                if (d)
                    switch (d) {
                    case wk:
                        return Rt;
                    case _k:
                        return kn;
                    case xk:
                        return ba;
                    case Sk:
                        return Ln;
                    case bk:
                        return mt
                    }
                return a
            }
            );
            function $C(i, a, u) {
                for (var d = -1, g = u.length; ++d < g; ) {
                    var S = u[d]
                      , R = S.size;
                    switch (S.type) {
                    case "drop":
                        i += R;
                        break;
                    case "dropRight":
                        a -= R;
                        break;
                    case "take":
                        a = sn(a, i + R);
                        break;
                    case "takeRight":
                        i = Ut(i, a - R);
                        break
                    }
                }
                return {
                    start: i,
                    end: a
                }
            }
            function FC(i) {
                var a = i.match(pu);
                return a ? a[1].split(vd) : []
            }
            function Kv(i, a, u) {
                a = Yi(a, i);
                for (var d = -1, g = a.length, S = !1; ++d < g; ) {
                    var R = Yr(a[d]);
                    if (!(S = i != null && u(i, R)))
                        break;
                    i = i[R]
                }
                return S || ++d != g ? S : (g = i == null ? 0 : i.length,
                !!g && ec(g) && fi(R, g) && (Re(i) || Mo(i)))
            }
            function WC(i) {
                var a = i.length
                  , u = new i.constructor(a);
                return a && typeof i[0] == "string" && Je.call(i, "index") && (u.index = i.index,
                u.input = i.input),
                u
            }
            function Zv(i) {
                return typeof i.constructor == "function" && !Wa(i) ? ws(Ou(i)) : {}
            }
            function zC(i, a, u) {
                var d = i.constructor;
                switch (a) {
                case $r:
                    return ih(i);
                case wr:
                case Ni:
                    return new d(+i);
                case Rt:
                    return EC(i, u);
                case rs:
                case is:
                case So:
                case os:
                case ss:
                case bo:
                case as:
                case _r:
                case Jt:
                    return Mv(i, u);
                case kn:
                    return new d;
                case oi:
                case xo:
                    return new d(i);
                case Lr:
                    return kC(i);
                case Ln:
                    return new d;
                case jr:
                    return CC(i)
                }
            }
            function UC(i, a) {
                var u = a.length;
                if (!u)
                    return i;
                var d = u - 1;
                return a[d] = (u > 1 ? "& " : "") + a[d],
                a = a.join(u > 2 ? ", " : " "),
                i.replace(hu, `{
/* [wrapped with ` + a + `] */
`)
            }
            function YC(i) {
                return Re(i) || Mo(i) || !!(nv && i && i[nv])
            }
            function fi(i, a) {
                var u = typeof i;
                return a = a ?? ae,
                !!a && (u == "number" || u != "symbol" && bd.test(i)) && i > -1 && i % 1 == 0 && i < a
            }
            function wn(i, a, u) {
                if (!bt(u))
                    return !1;
                var d = typeof a;
                return (d == "number" ? On(u) && fi(a, u.length) : d == "string" && a in u) ? br(u[a], i) : !1
            }
            function dh(i, a) {
                if (Re(i))
                    return !1;
                var u = typeof i;
                return u == "number" || u == "symbol" || u == "boolean" || i == null || Wn(i) ? !0 : cu.test(i) || !uu.test(i) || a != null && i in ot(a)
            }
            function BC(i) {
                var a = typeof i;
                return a == "string" || a == "number" || a == "symbol" || a == "boolean" ? i !== "__proto__" : i === null
            }
            function hh(i) {
                var a = Vu(i)
                  , u = w[a];
                if (typeof u != "function" || !(a in Fe.prototype))
                    return !1;
                if (i === u)
                    return !0;
                var d = uh(u);
                return !!d && i === d[0]
            }
            function HC(i) {
                return !!J0 && J0 in i
            }
            var VC = Su ? di : Rh;
            function Wa(i) {
                var a = i && i.constructor
                  , u = typeof a == "function" && a.prototype || ms;
                return i === u
            }
            function Jv(i) {
                return i === i && !bt(i)
            }
            function Xv(i, a) {
                return function(u) {
                    return u == null ? !1 : u[i] === a && (a !== n || i in ot(u))
                }
            }
            function GC(i) {
                var a = Ju(i, function(d) {
                    return u.size === h && u.clear(),
                    d
                })
                  , u = a.cache;
                return a
            }
            function qC(i, a) {
                var u = i[1]
                  , d = a[1]
                  , g = u | d
                  , S = g < (B | P | W)
                  , R = d == W && u == D || d == W && u == G && i[7].length <= a[8] || d == (W | G) && a[7].length <= a[8] && u == D;
                if (!(S || R))
                    return i;
                d & B && (i[2] = a[2],
                g |= u & B ? 0 : O);
                var A = a[3];
                if (A) {
                    var j = i[3];
                    i[3] = j ? Nv(j, A, a[4]) : A,
                    i[4] = j ? Fi(i[3], v) : a[4]
                }
                return A = a[5],
                A && (j = i[5],
                i[5] = j ? Lv(j, A, a[6]) : A,
                i[6] = j ? Fi(i[5], v) : a[6]),
                A = a[7],
                A && (i[7] = A),
                d & W && (i[8] = i[8] == null ? a[8] : sn(i[8], a[8])),
                i[9] == null && (i[9] = a[9]),
                i[0] = a[0],
                i[1] = g,
                i
            }
            function QC(i) {
                var a = [];
                if (i != null)
                    for (var u in ot(i))
                        a.push(u);
                return a
            }
            function KC(i) {
                return Eu.call(i)
            }
            function ey(i, a, u) {
                return a = Ut(a === n ? i.length - 1 : a, 0),
                function() {
                    for (var d = arguments, g = -1, S = Ut(d.length - a, 0), R = Y(S); ++g < S; )
                        R[g] = d[a + g];
                    g = -1;
                    for (var A = Y(a + 1); ++g < a; )
                        A[g] = d[g];
                    return A[a] = u(R),
                    jn(i, this, A)
                }
            }
            function ty(i, a) {
                return a.length < 2 ? i : Ro(i, sr(a, 0, -1))
            }
            function ZC(i, a) {
                for (var u = i.length, d = sn(a.length, u), g = Cn(i); d--; ) {
                    var S = a[d];
                    i[d] = fi(S, u) ? g[S] : n
                }
                return i
            }
            function ph(i, a) {
                if (!(a === "constructor" && typeof i[a] == "function") && a != "__proto__")
                    return i[a]
            }
            var ny = iy(kv)
              , za = dk || function(i, a) {
                return Xt.setTimeout(i, a)
            }
              , gh = iy(_C);
            function ry(i, a, u) {
                var d = a + "";
                return gh(i, UC(d, JC(FC(d), u)))
            }
            function iy(i) {
                var a = 0
                  , u = 0;
                return function() {
                    var d = mk()
                      , g = ut - (d - u);
                    if (u = d,
                    g > 0) {
                        if (++a >= st)
                            return arguments[0]
                    } else
                        a = 0;
                    return i.apply(n, arguments)
                }
            }
            function qu(i, a) {
                var u = -1
                  , d = i.length
                  , g = d - 1;
                for (a = a === n ? d : a; ++u < a; ) {
                    var S = Zd(u, g)
                      , R = i[S];
                    i[S] = i[u],
                    i[u] = R
                }
                return i.length = a,
                i
            }
            var oy = GC(function(i) {
                var a = [];
                return i.charCodeAt(0) === 46 && a.push(""),
                i.replace(fu, function(u, d, g, S) {
                    a.push(g ? S.replace(gu, "$1") : d || u)
                }),
                a
            });
            function Yr(i) {
                if (typeof i == "string" || Wn(i))
                    return i;
                var a = i + "";
                return a == "0" && 1 / i == -xt ? "-0" : a
            }
            function Io(i) {
                if (i != null) {
                    try {
                        return bu.call(i)
                    } catch {}
                    try {
                        return i + ""
                    } catch {}
                }
                return ""
            }
            function JC(i, a) {
                return nr(Lt, function(u) {
                    var d = "_." + u[0];
                    a & u[1] && !yu(i, d) && i.push(d)
                }),
                i.sort()
            }
            function sy(i) {
                if (i instanceof Fe)
                    return i.clone();
                var a = new ir(i.__wrapped__,i.__chain__);
                return a.__actions__ = Cn(i.__actions__),
                a.__index__ = i.__index__,
                a.__values__ = i.__values__,
                a
            }
            function XC(i, a, u) {
                (u ? wn(i, a, u) : a === n) ? a = 1 : a = Ut(Ie(a), 0);
                var d = i == null ? 0 : i.length;
                if (!d || a < 1)
                    return [];
                for (var g = 0, S = 0, R = Y(Ru(d / a)); g < d; )
                    R[S++] = sr(i, g, g += a);
                return R
            }
            function eO(i) {
                for (var a = -1, u = i == null ? 0 : i.length, d = 0, g = []; ++a < u; ) {
                    var S = i[a];
                    S && (g[d++] = S)
                }
                return g
            }
            function tO() {
                var i = arguments.length;
                if (!i)
                    return [];
                for (var a = Y(i - 1), u = arguments[0], d = i; d--; )
                    a[d - 1] = arguments[d];
                return $i(Re(u) ? Cn(u) : [u], en(a, 1))
            }
            var nO = Ne(function(i, a) {
                return It(i) ? Na(i, en(a, 1, It, !0)) : []
            })
              , rO = Ne(function(i, a) {
                var u = ar(a);
                return It(u) && (u = n),
                It(i) ? Na(i, en(a, 1, It, !0), Se(u, 2)) : []
            })
              , iO = Ne(function(i, a) {
                var u = ar(a);
                return It(u) && (u = n),
                It(i) ? Na(i, en(a, 1, It, !0), n, u) : []
            });
            function oO(i, a, u) {
                var d = i == null ? 0 : i.length;
                return d ? (a = u || a === n ? 1 : Ie(a),
                sr(i, a < 0 ? 0 : a, d)) : []
            }
            function sO(i, a, u) {
                var d = i == null ? 0 : i.length;
                return d ? (a = u || a === n ? 1 : Ie(a),
                a = d - a,
                sr(i, 0, a < 0 ? 0 : a)) : []
            }
            function aO(i, a) {
                return i && i.length ? Wu(i, Se(a, 3), !0, !0) : []
            }
            function lO(i, a) {
                return i && i.length ? Wu(i, Se(a, 3), !0) : []
            }
            function uO(i, a, u, d) {
                var g = i == null ? 0 : i.length;
                return g ? (u && typeof u != "number" && wn(i, a, u) && (u = 0,
                d = g),
                tC(i, a, u, d)) : []
            }
            function ay(i, a, u) {
                var d = i == null ? 0 : i.length;
                if (!d)
                    return -1;
                var g = u == null ? 0 : Ie(u);
                return g < 0 && (g = Ut(d + g, 0)),
                wu(i, Se(a, 3), g)
            }
            function ly(i, a, u) {
                var d = i == null ? 0 : i.length;
                if (!d)
                    return -1;
                var g = d - 1;
                return u !== n && (g = Ie(u),
                g = u < 0 ? Ut(d + g, 0) : sn(g, d - 1)),
                wu(i, Se(a, 3), g, !0)
            }
            function uy(i) {
                var a = i == null ? 0 : i.length;
                return a ? en(i, 1) : []
            }
            function cO(i) {
                var a = i == null ? 0 : i.length;
                return a ? en(i, xt) : []
            }
            function fO(i, a) {
                var u = i == null ? 0 : i.length;
                return u ? (a = a === n ? 1 : Ie(a),
                en(i, a)) : []
            }
            function dO(i) {
                for (var a = -1, u = i == null ? 0 : i.length, d = {}; ++a < u; ) {
                    var g = i[a];
                    d[g[0]] = g[1]
                }
                return d
            }
            function cy(i) {
                return i && i.length ? i[0] : n
            }
            function hO(i, a, u) {
                var d = i == null ? 0 : i.length;
                if (!d)
                    return -1;
                var g = u == null ? 0 : Ie(u);
                return g < 0 && (g = Ut(d + g, 0)),
                ds(i, a, g)
            }
            function pO(i) {
                var a = i == null ? 0 : i.length;
                return a ? sr(i, 0, -1) : []
            }
            var gO = Ne(function(i) {
                var a = yt(i, nh);
                return a.length && a[0] === i[0] ? Vd(a) : []
            })
              , mO = Ne(function(i) {
                var a = ar(i)
                  , u = yt(i, nh);
                return a === ar(u) ? a = n : u.pop(),
                u.length && u[0] === i[0] ? Vd(u, Se(a, 2)) : []
            })
              , vO = Ne(function(i) {
                var a = ar(i)
                  , u = yt(i, nh);
                return a = typeof a == "function" ? a : n,
                a && u.pop(),
                u.length && u[0] === i[0] ? Vd(u, n, a) : []
            });
            function yO(i, a) {
                return i == null ? "" : pk.call(i, a)
            }
            function ar(i) {
                var a = i == null ? 0 : i.length;
                return a ? i[a - 1] : n
            }
            function wO(i, a, u) {
                var d = i == null ? 0 : i.length;
                if (!d)
                    return -1;
                var g = d;
                return u !== n && (g = Ie(u),
                g = g < 0 ? Ut(d + g, 0) : sn(g, d - 1)),
                a === a ? J2(i, a, g) : wu(i, B0, g, !0)
            }
            function _O(i, a) {
                return i && i.length ? xv(i, Ie(a)) : n
            }
            var xO = Ne(fy);
            function fy(i, a) {
                return i && i.length && a && a.length ? Kd(i, a) : i
            }
            function SO(i, a, u) {
                return i && i.length && a && a.length ? Kd(i, a, Se(u, 2)) : i
            }
            function bO(i, a, u) {
                return i && i.length && a && a.length ? Kd(i, a, n, u) : i
            }
            var EO = ci(function(i, a) {
                var u = i == null ? 0 : i.length
                  , d = Ud(i, a);
                return Ev(i, yt(a, function(g) {
                    return fi(g, u) ? +g : g
                }).sort(Av)),
                d
            });
            function kO(i, a) {
                var u = [];
                if (!(i && i.length))
                    return u;
                var d = -1
                  , g = []
                  , S = i.length;
                for (a = Se(a, 3); ++d < S; ) {
                    var R = i[d];
                    a(R, d, i) && (u.push(R),
                    g.push(d))
                }
                return Ev(i, g),
                u
            }
            function mh(i) {
                return i == null ? i : yk.call(i)
            }
            function CO(i, a, u) {
                var d = i == null ? 0 : i.length;
                return d ? (u && typeof u != "number" && wn(i, a, u) ? (a = 0,
                u = d) : (a = a == null ? 0 : Ie(a),
                u = u === n ? d : Ie(u)),
                sr(i, a, u)) : []
            }
            function OO(i, a) {
                return Fu(i, a)
            }
            function TO(i, a, u) {
                return Xd(i, a, Se(u, 2))
            }
            function PO(i, a) {
                var u = i == null ? 0 : i.length;
                if (u) {
                    var d = Fu(i, a);
                    if (d < u && br(i[d], a))
                        return d
                }
                return -1
            }
            function RO(i, a) {
                return Fu(i, a, !0)
            }
            function DO(i, a, u) {
                return Xd(i, a, Se(u, 2), !0)
            }
            function IO(i, a) {
                var u = i == null ? 0 : i.length;
                if (u) {
                    var d = Fu(i, a, !0) - 1;
                    if (br(i[d], a))
                        return d
                }
                return -1
            }
            function MO(i) {
                return i && i.length ? Cv(i) : []
            }
            function AO(i, a) {
                return i && i.length ? Cv(i, Se(a, 2)) : []
            }
            function NO(i) {
                var a = i == null ? 0 : i.length;
                return a ? sr(i, 1, a) : []
            }
            function LO(i, a, u) {
                return i && i.length ? (a = u || a === n ? 1 : Ie(a),
                sr(i, 0, a < 0 ? 0 : a)) : []
            }
            function jO(i, a, u) {
                var d = i == null ? 0 : i.length;
                return d ? (a = u || a === n ? 1 : Ie(a),
                a = d - a,
                sr(i, a < 0 ? 0 : a, d)) : []
            }
            function $O(i, a) {
                return i && i.length ? Wu(i, Se(a, 3), !1, !0) : []
            }
            function FO(i, a) {
                return i && i.length ? Wu(i, Se(a, 3)) : []
            }
            var WO = Ne(function(i) {
                return Ui(en(i, 1, It, !0))
            })
              , zO = Ne(function(i) {
                var a = ar(i);
                return It(a) && (a = n),
                Ui(en(i, 1, It, !0), Se(a, 2))
            })
              , UO = Ne(function(i) {
                var a = ar(i);
                return a = typeof a == "function" ? a : n,
                Ui(en(i, 1, It, !0), n, a)
            });
            function YO(i) {
                return i && i.length ? Ui(i) : []
            }
            function BO(i, a) {
                return i && i.length ? Ui(i, Se(a, 2)) : []
            }
            function HO(i, a) {
                return a = typeof a == "function" ? a : n,
                i && i.length ? Ui(i, n, a) : []
            }
            function vh(i) {
                if (!(i && i.length))
                    return [];
                var a = 0;
                return i = ji(i, function(u) {
                    if (It(u))
                        return a = Ut(u.length, a),
                        !0
                }),
                Ad(a, function(u) {
                    return yt(i, Dd(u))
                })
            }
            function dy(i, a) {
                if (!(i && i.length))
                    return [];
                var u = vh(i);
                return a == null ? u : yt(u, function(d) {
                    return jn(a, n, d)
                })
            }
            var VO = Ne(function(i, a) {
                return It(i) ? Na(i, a) : []
            })
              , GO = Ne(function(i) {
                return th(ji(i, It))
            })
              , qO = Ne(function(i) {
                var a = ar(i);
                return It(a) && (a = n),
                th(ji(i, It), Se(a, 2))
            })
              , QO = Ne(function(i) {
                var a = ar(i);
                return a = typeof a == "function" ? a : n,
                th(ji(i, It), n, a)
            })
              , KO = Ne(vh);
            function ZO(i, a) {
                return Rv(i || [], a || [], Aa)
            }
            function JO(i, a) {
                return Rv(i || [], a || [], $a)
            }
            var XO = Ne(function(i) {
                var a = i.length
                  , u = a > 1 ? i[a - 1] : n;
                return u = typeof u == "function" ? (i.pop(),
                u) : n,
                dy(i, u)
            });
            function hy(i) {
                var a = w(i);
                return a.__chain__ = !0,
                a
            }
            function eT(i, a) {
                return a(i),
                i
            }
            function Qu(i, a) {
                return a(i)
            }
            var tT = ci(function(i) {
                var a = i.length
                  , u = a ? i[0] : 0
                  , d = this.__wrapped__
                  , g = function(S) {
                    return Ud(S, i)
                };
                return a > 1 || this.__actions__.length || !(d instanceof Fe) || !fi(u) ? this.thru(g) : (d = d.slice(u, +u + (a ? 1 : 0)),
                d.__actions__.push({
                    func: Qu,
                    args: [g],
                    thisArg: n
                }),
                new ir(d,this.__chain__).thru(function(S) {
                    return a && !S.length && S.push(n),
                    S
                }))
            });
            function nT() {
                return hy(this)
            }
            function rT() {
                return new ir(this.value(),this.__chain__)
            }
            function iT() {
                this.__values__ === n && (this.__values__ = Oy(this.value()));
                var i = this.__index__ >= this.__values__.length
                  , a = i ? n : this.__values__[this.__index__++];
                return {
                    done: i,
                    value: a
                }
            }
            function oT() {
                return this
            }
            function sT(i) {
                for (var a, u = this; u instanceof Au; ) {
                    var d = sy(u);
                    d.__index__ = 0,
                    d.__values__ = n,
                    a ? g.__wrapped__ = d : a = d;
                    var g = d;
                    u = u.__wrapped__
                }
                return g.__wrapped__ = i,
                a
            }
            function aT() {
                var i = this.__wrapped__;
                if (i instanceof Fe) {
                    var a = i;
                    return this.__actions__.length && (a = new Fe(this)),
                    a = a.reverse(),
                    a.__actions__.push({
                        func: Qu,
                        args: [mh],
                        thisArg: n
                    }),
                    new ir(a,this.__chain__)
                }
                return this.thru(mh)
            }
            function lT() {
                return Pv(this.__wrapped__, this.__actions__)
            }
            var uT = zu(function(i, a, u) {
                Je.call(i, u) ? ++i[u] : li(i, u, 1)
            });
            function cT(i, a, u) {
                var d = Re(i) ? U0 : eC;
                return u && wn(i, a, u) && (a = n),
                d(i, Se(a, 3))
            }
            function fT(i, a) {
                var u = Re(i) ? ji : dv;
                return u(i, Se(a, 3))
            }
            var dT = Wv(ay)
              , hT = Wv(ly);
            function pT(i, a) {
                return en(Ku(i, a), 1)
            }
            function gT(i, a) {
                return en(Ku(i, a), xt)
            }
            function mT(i, a, u) {
                return u = u === n ? 1 : Ie(u),
                en(Ku(i, a), u)
            }
            function py(i, a) {
                var u = Re(i) ? nr : zi;
                return u(i, Se(a, 3))
            }
            function gy(i, a) {
                var u = Re(i) ? N2 : fv;
                return u(i, Se(a, 3))
            }
            var vT = zu(function(i, a, u) {
                Je.call(i, u) ? i[u].push(a) : li(i, u, [a])
            });
            function yT(i, a, u, d) {
                i = On(i) ? i : Es(i),
                u = u && !d ? Ie(u) : 0;
                var g = i.length;
                return u < 0 && (u = Ut(g + u, 0)),
                tc(i) ? u <= g && i.indexOf(a, u) > -1 : !!g && ds(i, a, u) > -1
            }
            var wT = Ne(function(i, a, u) {
                var d = -1
                  , g = typeof a == "function"
                  , S = On(i) ? Y(i.length) : [];
                return zi(i, function(R) {
                    S[++d] = g ? jn(a, R, u) : La(R, a, u)
                }),
                S
            })
              , _T = zu(function(i, a, u) {
                li(i, u, a)
            });
            function Ku(i, a) {
                var u = Re(i) ? yt : yv;
                return u(i, Se(a, 3))
            }
            function xT(i, a, u, d) {
                return i == null ? [] : (Re(a) || (a = a == null ? [] : [a]),
                u = d ? n : u,
                Re(u) || (u = u == null ? [] : [u]),
                Sv(i, a, u))
            }
            var ST = zu(function(i, a, u) {
                i[u ? 0 : 1].push(a)
            }, function() {
                return [[], []]
            });
            function bT(i, a, u) {
                var d = Re(i) ? Pd : V0
                  , g = arguments.length < 3;
                return d(i, Se(a, 4), u, g, zi)
            }
            function ET(i, a, u) {
                var d = Re(i) ? L2 : V0
                  , g = arguments.length < 3;
                return d(i, Se(a, 4), u, g, fv)
            }
            function kT(i, a) {
                var u = Re(i) ? ji : dv;
                return u(i, Xu(Se(a, 3)))
            }
            function CT(i) {
                var a = Re(i) ? av : yC;
                return a(i)
            }
            function OT(i, a, u) {
                (u ? wn(i, a, u) : a === n) ? a = 1 : a = Ie(a);
                var d = Re(i) ? Qk : wC;
                return d(i, a)
            }
            function TT(i) {
                var a = Re(i) ? Kk : xC;
                return a(i)
            }
            function PT(i) {
                if (i == null)
                    return 0;
                if (On(i))
                    return tc(i) ? ps(i) : i.length;
                var a = an(i);
                return a == kn || a == Ln ? i.size : qd(i).length
            }
            function RT(i, a, u) {
                var d = Re(i) ? Rd : SC;
                return u && wn(i, a, u) && (a = n),
                d(i, Se(a, 3))
            }
            var DT = Ne(function(i, a) {
                if (i == null)
                    return [];
                var u = a.length;
                return u > 1 && wn(i, a[0], a[1]) ? a = [] : u > 2 && wn(a[0], a[1], a[2]) && (a = [a[0]]),
                Sv(i, en(a, 1), [])
            })
              , Zu = fk || function() {
                return Xt.Date.now()
            }
            ;
            function IT(i, a) {
                if (typeof a != "function")
                    throw new rr(l);
                return i = Ie(i),
                function() {
                    if (--i < 1)
                        return a.apply(this, arguments)
                }
            }
            function my(i, a, u) {
                return a = u ? n : a,
                a = i && a == null ? i.length : a,
                ui(i, W, n, n, n, n, a)
            }
            function vy(i, a) {
                var u;
                if (typeof a != "function")
                    throw new rr(l);
                return i = Ie(i),
                function() {
                    return --i > 0 && (u = a.apply(this, arguments)),
                    i <= 1 && (a = n),
                    u
                }
            }
            var yh = Ne(function(i, a, u) {
                var d = B;
                if (u.length) {
                    var g = Fi(u, Ss(yh));
                    d |= H
                }
                return ui(i, d, a, u, g)
            })
              , yy = Ne(function(i, a, u) {
                var d = B | P;
                if (u.length) {
                    var g = Fi(u, Ss(yy));
                    d |= H
                }
                return ui(a, d, i, u, g)
            });
            function wy(i, a, u) {
                a = u ? n : a;
                var d = ui(i, D, n, n, n, n, n, a);
                return d.placeholder = wy.placeholder,
                d
            }
            function _y(i, a, u) {
                a = u ? n : a;
                var d = ui(i, z, n, n, n, n, n, a);
                return d.placeholder = _y.placeholder,
                d
            }
            function xy(i, a, u) {
                var d, g, S, R, A, j, Z = 0, J = !1, te = !1, ue = !0;
                if (typeof i != "function")
                    throw new rr(l);
                a = lr(a) || 0,
                bt(u) && (J = !!u.leading,
                te = "maxWait" in u,
                S = te ? Ut(lr(u.maxWait) || 0, a) : S,
                ue = "trailing" in u ? !!u.trailing : ue);
                function we(Mt) {
                    var Er = d
                      , pi = g;
                    return d = g = n,
                    Z = Mt,
                    R = i.apply(pi, Er),
                    R
                }
                function be(Mt) {
                    return Z = Mt,
                    A = za(Le, a),
                    J ? we(Mt) : R
                }
                function Ae(Mt) {
                    var Er = Mt - j
                      , pi = Mt - Z
                      , Wy = a - Er;
                    return te ? sn(Wy, S - pi) : Wy
                }
                function Ee(Mt) {
                    var Er = Mt - j
                      , pi = Mt - Z;
                    return j === n || Er >= a || Er < 0 || te && pi >= S
                }
                function Le() {
                    var Mt = Zu();
                    if (Ee(Mt))
                        return ze(Mt);
                    A = za(Le, Ae(Mt))
                }
                function ze(Mt) {
                    return A = n,
                    ue && d ? we(Mt) : (d = g = n,
                    R)
                }
                function zn() {
                    A !== n && Dv(A),
                    Z = 0,
                    d = j = g = A = n
                }
                function _n() {
                    return A === n ? R : ze(Zu())
                }
                function Un() {
                    var Mt = Zu()
                      , Er = Ee(Mt);
                    if (d = arguments,
                    g = this,
                    j = Mt,
                    Er) {
                        if (A === n)
                            return be(j);
                        if (te)
                            return Dv(A),
                            A = za(Le, a),
                            we(j)
                    }
                    return A === n && (A = za(Le, a)),
                    R
                }
                return Un.cancel = zn,
                Un.flush = _n,
                Un
            }
            var MT = Ne(function(i, a) {
                return cv(i, 1, a)
            })
              , AT = Ne(function(i, a, u) {
                return cv(i, lr(a) || 0, u)
            });
            function NT(i) {
                return ui(i, ye)
            }
            function Ju(i, a) {
                if (typeof i != "function" || a != null && typeof a != "function")
                    throw new rr(l);
                var u = function() {
                    var d = arguments
                      , g = a ? a.apply(this, d) : d[0]
                      , S = u.cache;
                    if (S.has(g))
                        return S.get(g);
                    var R = i.apply(this, d);
                    return u.cache = S.set(g, R) || S,
                    R
                };
                return u.cache = new (Ju.Cache || ai),
                u
            }
            Ju.Cache = ai;
            function Xu(i) {
                if (typeof i != "function")
                    throw new rr(l);
                return function() {
                    var a = arguments;
                    switch (a.length) {
                    case 0:
                        return !i.call(this);
                    case 1:
                        return !i.call(this, a[0]);
                    case 2:
                        return !i.call(this, a[0], a[1]);
                    case 3:
                        return !i.call(this, a[0], a[1], a[2])
                    }
                    return !i.apply(this, a)
                }
            }
            function LT(i) {
                return vy(2, i)
            }
            var jT = bC(function(i, a) {
                a = a.length == 1 && Re(a[0]) ? yt(a[0], $n(Se())) : yt(en(a, 1), $n(Se()));
                var u = a.length;
                return Ne(function(d) {
                    for (var g = -1, S = sn(d.length, u); ++g < S; )
                        d[g] = a[g].call(this, d[g]);
                    return jn(i, this, d)
                })
            })
              , wh = Ne(function(i, a) {
                var u = Fi(a, Ss(wh));
                return ui(i, H, n, a, u)
            })
              , Sy = Ne(function(i, a) {
                var u = Fi(a, Ss(Sy));
                return ui(i, F, n, a, u)
            })
              , $T = ci(function(i, a) {
                return ui(i, G, n, n, n, a)
            });
            function FT(i, a) {
                if (typeof i != "function")
                    throw new rr(l);
                return a = a === n ? a : Ie(a),
                Ne(i, a)
            }
            function WT(i, a) {
                if (typeof i != "function")
                    throw new rr(l);
                return a = a == null ? 0 : Ut(Ie(a), 0),
                Ne(function(u) {
                    var d = u[a]
                      , g = Bi(u, 0, a);
                    return d && $i(g, d),
                    jn(i, this, g)
                })
            }
            function zT(i, a, u) {
                var d = !0
                  , g = !0;
                if (typeof i != "function")
                    throw new rr(l);
                return bt(u) && (d = "leading" in u ? !!u.leading : d,
                g = "trailing" in u ? !!u.trailing : g),
                xy(i, a, {
                    leading: d,
                    maxWait: a,
                    trailing: g
                })
            }
            function UT(i) {
                return my(i, 1)
            }
            function YT(i, a) {
                return wh(rh(a), i)
            }
            function BT() {
                if (!arguments.length)
                    return [];
                var i = arguments[0];
                return Re(i) ? i : [i]
            }
            function HT(i) {
                return or(i, E)
            }
            function VT(i, a) {
                return a = typeof a == "function" ? a : n,
                or(i, E, a)
            }
            function GT(i) {
                return or(i, m | E)
            }
            function qT(i, a) {
                return a = typeof a == "function" ? a : n,
                or(i, m | E, a)
            }
            function QT(i, a) {
                return a == null || uv(i, a, Gt(a))
            }
            function br(i, a) {
                return i === a || i !== i && a !== a
            }
            var KT = Hu(Hd)
              , ZT = Hu(function(i, a) {
                return i >= a
            })
              , Mo = gv(function() {
                return arguments
            }()) ? gv : function(i) {
                return Tt(i) && Je.call(i, "callee") && !tv.call(i, "callee")
            }
              , Re = Y.isArray
              , JT = L0 ? $n(L0) : sC;
            function On(i) {
                return i != null && ec(i.length) && !di(i)
            }
            function It(i) {
                return Tt(i) && On(i)
            }
            function XT(i) {
                return i === !0 || i === !1 || Tt(i) && yn(i) == wr
            }
            var Hi = hk || Rh
              , eP = j0 ? $n(j0) : aC;
            function tP(i) {
                return Tt(i) && i.nodeType === 1 && !Ua(i)
            }
            function nP(i) {
                if (i == null)
                    return !0;
                if (On(i) && (Re(i) || typeof i == "string" || typeof i.splice == "function" || Hi(i) || bs(i) || Mo(i)))
                    return !i.length;
                var a = an(i);
                if (a == kn || a == Ln)
                    return !i.size;
                if (Wa(i))
                    return !qd(i).length;
                for (var u in i)
                    if (Je.call(i, u))
                        return !1;
                return !0
            }
            function rP(i, a) {
                return ja(i, a)
            }
            function iP(i, a, u) {
                u = typeof u == "function" ? u : n;
                var d = u ? u(i, a) : n;
                return d === n ? ja(i, a, n, u) : !!d
            }
            function _h(i) {
                if (!Tt(i))
                    return !1;
                var a = yn(i);
                return a == ns || a == wo || typeof i.message == "string" && typeof i.name == "string" && !Ua(i)
            }
            function oP(i) {
                return typeof i == "number" && rv(i)
            }
            function di(i) {
                if (!bt(i))
                    return !1;
                var a = yn(i);
                return a == Jn || a == Li || a == Ai || a == iu
            }
            function by(i) {
                return typeof i == "number" && i == Ie(i)
            }
            function ec(i) {
                return typeof i == "number" && i > -1 && i % 1 == 0 && i <= ae
            }
            function bt(i) {
                var a = typeof i;
                return i != null && (a == "object" || a == "function")
            }
            function Tt(i) {
                return i != null && typeof i == "object"
            }
            var Ey = $0 ? $n($0) : uC;
            function sP(i, a) {
                return i === a || Gd(i, a, ch(a))
            }
            function aP(i, a, u) {
                return u = typeof u == "function" ? u : n,
                Gd(i, a, ch(a), u)
            }
            function lP(i) {
                return ky(i) && i != +i
            }
            function uP(i) {
                if (VC(i))
                    throw new Pe(s);
                return mv(i)
            }
            function cP(i) {
                return i === null
            }
            function fP(i) {
                return i == null
            }
            function ky(i) {
                return typeof i == "number" || Tt(i) && yn(i) == oi
            }
            function Ua(i) {
                if (!Tt(i) || yn(i) != Xn)
                    return !1;
                var a = Ou(i);
                if (a === null)
                    return !0;
                var u = Je.call(a, "constructor") && a.constructor;
                return typeof u == "function" && u instanceof u && bu.call(u) == ak
            }
            var xh = F0 ? $n(F0) : cC;
            function dP(i) {
                return by(i) && i >= -ae && i <= ae
            }
            var Cy = W0 ? $n(W0) : fC;
            function tc(i) {
                return typeof i == "string" || !Re(i) && Tt(i) && yn(i) == xo
            }
            function Wn(i) {
                return typeof i == "symbol" || Tt(i) && yn(i) == jr
            }
            var bs = z0 ? $n(z0) : dC;
            function hP(i) {
                return i === n
            }
            function pP(i) {
                return Tt(i) && an(i) == mt
            }
            function gP(i) {
                return Tt(i) && yn(i) == pd
            }
            var mP = Hu(Qd)
              , vP = Hu(function(i, a) {
                return i <= a
            });
            function Oy(i) {
                if (!i)
                    return [];
                if (On(i))
                    return tc(i) ? xr(i) : Cn(i);
                if (Pa && i[Pa])
                    return Q2(i[Pa]());
                var a = an(i)
                  , u = a == kn ? Ld : a == Ln ? _u : Es;
                return u(i)
            }
            function hi(i) {
                if (!i)
                    return i === 0 ? i : 0;
                if (i = lr(i),
                i === xt || i === -xt) {
                    var a = i < 0 ? -1 : 1;
                    return a * fe
                }
                return i === i ? i : 0
            }
            function Ie(i) {
                var a = hi(i)
                  , u = a % 1;
                return a === a ? u ? a - u : a : 0
            }
            function Ty(i) {
                return i ? Po(Ie(i), 0, $e) : 0
            }
            function lr(i) {
                if (typeof i == "number")
                    return i;
                if (Wn(i))
                    return ke;
                if (bt(i)) {
                    var a = typeof i.valueOf == "function" ? i.valueOf() : i;
                    i = bt(a) ? a + "" : a
                }
                if (typeof i != "string")
                    return i === 0 ? i : +i;
                i = G0(i);
                var u = _d.test(i);
                return u || Sd.test(i) ? I2(i.slice(2), u ? 2 : 8) : Wr.test(i) ? ke : +i
            }
            function Py(i) {
                return Ur(i, Tn(i))
            }
            function yP(i) {
                return i ? Po(Ie(i), -ae, ae) : i === 0 ? i : 0
            }
            function Qe(i) {
                return i == null ? "" : Fn(i)
            }
            var wP = _s(function(i, a) {
                if (Wa(a) || On(a)) {
                    Ur(a, Gt(a), i);
                    return
                }
                for (var u in a)
                    Je.call(a, u) && Aa(i, u, a[u])
            })
              , Ry = _s(function(i, a) {
                Ur(a, Tn(a), i)
            })
              , nc = _s(function(i, a, u, d) {
                Ur(a, Tn(a), i, d)
            })
              , _P = _s(function(i, a, u, d) {
                Ur(a, Gt(a), i, d)
            })
              , xP = ci(Ud);
            function SP(i, a) {
                var u = ws(i);
                return a == null ? u : lv(u, a)
            }
            var bP = Ne(function(i, a) {
                i = ot(i);
                var u = -1
                  , d = a.length
                  , g = d > 2 ? a[2] : n;
                for (g && wn(a[0], a[1], g) && (d = 1); ++u < d; )
                    for (var S = a[u], R = Tn(S), A = -1, j = R.length; ++A < j; ) {
                        var Z = R[A]
                          , J = i[Z];
                        (J === n || br(J, ms[Z]) && !Je.call(i, Z)) && (i[Z] = S[Z])
                    }
                return i
            })
              , EP = Ne(function(i) {
                return i.push(n, Gv),
                jn(Dy, n, i)
            });
            function kP(i, a) {
                return Y0(i, Se(a, 3), zr)
            }
            function CP(i, a) {
                return Y0(i, Se(a, 3), Bd)
            }
            function OP(i, a) {
                return i == null ? i : Yd(i, Se(a, 3), Tn)
            }
            function TP(i, a) {
                return i == null ? i : hv(i, Se(a, 3), Tn)
            }
            function PP(i, a) {
                return i && zr(i, Se(a, 3))
            }
            function RP(i, a) {
                return i && Bd(i, Se(a, 3))
            }
            function DP(i) {
                return i == null ? [] : ju(i, Gt(i))
            }
            function IP(i) {
                return i == null ? [] : ju(i, Tn(i))
            }
            function Sh(i, a, u) {
                var d = i == null ? n : Ro(i, a);
                return d === n ? u : d
            }
            function MP(i, a) {
                return i != null && Kv(i, a, nC)
            }
            function bh(i, a) {
                return i != null && Kv(i, a, rC)
            }
            var AP = Uv(function(i, a, u) {
                a != null && typeof a.toString != "function" && (a = Eu.call(a)),
                i[a] = u
            }, kh(Pn))
              , NP = Uv(function(i, a, u) {
                a != null && typeof a.toString != "function" && (a = Eu.call(a)),
                Je.call(i, a) ? i[a].push(u) : i[a] = [u]
            }, Se)
              , LP = Ne(La);
            function Gt(i) {
                return On(i) ? sv(i) : qd(i)
            }
            function Tn(i) {
                return On(i) ? sv(i, !0) : hC(i)
            }
            function jP(i, a) {
                var u = {};
                return a = Se(a, 3),
                zr(i, function(d, g, S) {
                    li(u, a(d, g, S), d)
                }),
                u
            }
            function $P(i, a) {
                var u = {};
                return a = Se(a, 3),
                zr(i, function(d, g, S) {
                    li(u, g, a(d, g, S))
                }),
                u
            }
            var FP = _s(function(i, a, u) {
                $u(i, a, u)
            })
              , Dy = _s(function(i, a, u, d) {
                $u(i, a, u, d)
            })
              , WP = ci(function(i, a) {
                var u = {};
                if (i == null)
                    return u;
                var d = !1;
                a = yt(a, function(S) {
                    return S = Yi(S, i),
                    d || (d = S.length > 1),
                    S
                }),
                Ur(i, lh(i), u),
                d && (u = or(u, m | x | E, AC));
                for (var g = a.length; g--; )
                    eh(u, a[g]);
                return u
            });
            function zP(i, a) {
                return Iy(i, Xu(Se(a)))
            }
            var UP = ci(function(i, a) {
                return i == null ? {} : gC(i, a)
            });
            function Iy(i, a) {
                if (i == null)
                    return {};
                var u = yt(lh(i), function(d) {
                    return [d]
                });
                return a = Se(a),
                bv(i, u, function(d, g) {
                    return a(d, g[0])
                })
            }
            function YP(i, a, u) {
                a = Yi(a, i);
                var d = -1
                  , g = a.length;
                for (g || (g = 1,
                i = n); ++d < g; ) {
                    var S = i == null ? n : i[Yr(a[d])];
                    S === n && (d = g,
                    S = u),
                    i = di(S) ? S.call(i) : S
                }
                return i
            }
            function BP(i, a, u) {
                return i == null ? i : $a(i, a, u)
            }
            function HP(i, a, u, d) {
                return d = typeof d == "function" ? d : n,
                i == null ? i : $a(i, a, u, d)
            }
            var My = Hv(Gt)
              , Ay = Hv(Tn);
            function VP(i, a, u) {
                var d = Re(i)
                  , g = d || Hi(i) || bs(i);
                if (a = Se(a, 4),
                u == null) {
                    var S = i && i.constructor;
                    g ? u = d ? new S : [] : bt(i) ? u = di(S) ? ws(Ou(i)) : {} : u = {}
                }
                return (g ? nr : zr)(i, function(R, A, j) {
                    return a(u, R, A, j)
                }),
                u
            }
            function GP(i, a) {
                return i == null ? !0 : eh(i, a)
            }
            function qP(i, a, u) {
                return i == null ? i : Tv(i, a, rh(u))
            }
            function QP(i, a, u, d) {
                return d = typeof d == "function" ? d : n,
                i == null ? i : Tv(i, a, rh(u), d)
            }
            function Es(i) {
                return i == null ? [] : Nd(i, Gt(i))
            }
            function KP(i) {
                return i == null ? [] : Nd(i, Tn(i))
            }
            function ZP(i, a, u) {
                return u === n && (u = a,
                a = n),
                u !== n && (u = lr(u),
                u = u === u ? u : 0),
                a !== n && (a = lr(a),
                a = a === a ? a : 0),
                Po(lr(i), a, u)
            }
            function JP(i, a, u) {
                return a = hi(a),
                u === n ? (u = a,
                a = 0) : u = hi(u),
                i = lr(i),
                iC(i, a, u)
            }
            function XP(i, a, u) {
                if (u && typeof u != "boolean" && wn(i, a, u) && (a = u = n),
                u === n && (typeof a == "boolean" ? (u = a,
                a = n) : typeof i == "boolean" && (u = i,
                i = n)),
                i === n && a === n ? (i = 0,
                a = 1) : (i = hi(i),
                a === n ? (a = i,
                i = 0) : a = hi(a)),
                i > a) {
                    var d = i;
                    i = a,
                    a = d
                }
                if (u || i % 1 || a % 1) {
                    var g = iv();
                    return sn(i + g * (a - i + D2("1e-" + ((g + "").length - 1))), a)
                }
                return Zd(i, a)
            }
            var eR = xs(function(i, a, u) {
                return a = a.toLowerCase(),
                i + (u ? Ny(a) : a)
            });
            function Ny(i) {
                return Eh(Qe(i).toLowerCase())
            }
            function Ly(i) {
                return i = Qe(i),
                i && i.replace(vu, B2).replace(x2, "")
            }
            function tR(i, a, u) {
                i = Qe(i),
                a = Fn(a);
                var d = i.length;
                u = u === n ? d : Po(Ie(u), 0, d);
                var g = u;
                return u -= a.length,
                u >= 0 && i.slice(u, g) == a
            }
            function nR(i) {
                return i = Qe(i),
                i && lu.test(i) ? i.replace(au, H2) : i
            }
            function rR(i) {
                return i = Qe(i),
                i && Oa.test(i) ? i.replace(Eo, "\\$&") : i
            }
            var iR = xs(function(i, a, u) {
                return i + (u ? "-" : "") + a.toLowerCase()
            })
              , oR = xs(function(i, a, u) {
                return i + (u ? " " : "") + a.toLowerCase()
            })
              , sR = Fv("toLowerCase");
            function aR(i, a, u) {
                i = Qe(i),
                a = Ie(a);
                var d = a ? ps(i) : 0;
                if (!a || d >= a)
                    return i;
                var g = (a - d) / 2;
                return Bu(Du(g), u) + i + Bu(Ru(g), u)
            }
            function lR(i, a, u) {
                i = Qe(i),
                a = Ie(a);
                var d = a ? ps(i) : 0;
                return a && d < a ? i + Bu(a - d, u) : i
            }
            function uR(i, a, u) {
                i = Qe(i),
                a = Ie(a);
                var d = a ? ps(i) : 0;
                return a && d < a ? Bu(a - d, u) + i : i
            }
            function cR(i, a, u) {
                return u || a == null ? a = 0 : a && (a = +a),
                vk(Qe(i).replace(ls, ""), a || 0)
            }
            function fR(i, a, u) {
                return (u ? wn(i, a, u) : a === n) ? a = 1 : a = Ie(a),
                Jd(Qe(i), a)
            }
            function dR() {
                var i = arguments
                  , a = Qe(i[0]);
                return i.length < 3 ? a : a.replace(i[1], i[2])
            }
            var hR = xs(function(i, a, u) {
                return i + (u ? "_" : "") + a.toLowerCase()
            });
            function pR(i, a, u) {
                return u && typeof u != "number" && wn(i, a, u) && (a = u = n),
                u = u === n ? $e : u >>> 0,
                u ? (i = Qe(i),
                i && (typeof a == "string" || a != null && !xh(a)) && (a = Fn(a),
                !a && hs(i)) ? Bi(xr(i), 0, u) : i.split(a, u)) : []
            }
            var gR = xs(function(i, a, u) {
                return i + (u ? " " : "") + Eh(a)
            });
            function mR(i, a, u) {
                return i = Qe(i),
                u = u == null ? 0 : Po(Ie(u), 0, i.length),
                a = Fn(a),
                i.slice(u, u + a.length) == a
            }
            function vR(i, a, u) {
                var d = w.templateSettings;
                u && wn(i, a, u) && (a = n),
                i = Qe(i),
                a = nc({}, a, d, Vv);
                var g = nc({}, a.imports, d.imports, Vv), S = Gt(g), R = Nd(g, S), A, j, Z = 0, J = a.interpolate || us, te = "__p += '", ue = jd((a.escape || us).source + "|" + J.source + "|" + (J === Ca ? Fr : us).source + "|" + (a.evaluate || us).source + "|$", "g"), we = "//# sourceURL=" + (Je.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++C2 + "]") + `
`;
                i.replace(ue, function(Ee, Le, ze, zn, _n, Un) {
                    return ze || (ze = zn),
                    te += i.slice(Z, Un).replace(Ed, V2),
                    Le && (A = !0,
                    te += `' +
__e(` + Le + `) +
'`),
                    _n && (j = !0,
                    te += `';
` + _n + `;
__p += '`),
                    ze && (te += `' +
((__t = (` + ze + `)) == null ? '' : __t) +
'`),
                    Z = Un + Ee.length,
                    Ee
                }),
                te += `';
`;
                var be = Je.call(a, "variable") && a.variable;
                if (!be)
                    te = `with (obj) {
` + te + `
}
`;
                else if (wd.test(be))
                    throw new Pe(c);
                te = (j ? te.replace(gd, "") : te).replace(md, "$1").replace(mn, "$1;"),
                te = "function(" + (be || "obj") + `) {
` + (be ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (A ? ", __e = _.escape" : "") + (j ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + te + `return __p
}`;
                var Ae = $y(function() {
                    return Ge(S, we + "return " + te).apply(n, R)
                });
                if (Ae.source = te,
                _h(Ae))
                    throw Ae;
                return Ae
            }
            function yR(i) {
                return Qe(i).toLowerCase()
            }
            function wR(i) {
                return Qe(i).toUpperCase()
            }
            function _R(i, a, u) {
                if (i = Qe(i),
                i && (u || a === n))
                    return G0(i);
                if (!i || !(a = Fn(a)))
                    return i;
                var d = xr(i)
                  , g = xr(a)
                  , S = q0(d, g)
                  , R = Q0(d, g) + 1;
                return Bi(d, S, R).join("")
            }
            function xR(i, a, u) {
                if (i = Qe(i),
                i && (u || a === n))
                    return i.slice(0, Z0(i) + 1);
                if (!i || !(a = Fn(a)))
                    return i;
                var d = xr(i)
                  , g = Q0(d, xr(a)) + 1;
                return Bi(d, 0, g).join("")
            }
            function SR(i, a, u) {
                if (i = Qe(i),
                i && (u || a === n))
                    return i.replace(ls, "");
                if (!i || !(a = Fn(a)))
                    return i;
                var d = xr(i)
                  , g = q0(d, xr(a));
                return Bi(d, g).join("")
            }
            function bR(i, a) {
                var u = ge
                  , d = Ce;
                if (bt(a)) {
                    var g = "separator" in a ? a.separator : g;
                    u = "length" in a ? Ie(a.length) : u,
                    d = "omission" in a ? Fn(a.omission) : d
                }
                i = Qe(i);
                var S = i.length;
                if (hs(i)) {
                    var R = xr(i);
                    S = R.length
                }
                if (u >= S)
                    return i;
                var A = u - ps(d);
                if (A < 1)
                    return d;
                var j = R ? Bi(R, 0, A).join("") : i.slice(0, A);
                if (g === n)
                    return j + d;
                if (R && (A += j.length - A),
                xh(g)) {
                    if (i.slice(A).search(g)) {
                        var Z, J = j;
                        for (g.global || (g = jd(g.source, Qe(mu.exec(g)) + "g")),
                        g.lastIndex = 0; Z = g.exec(J); )
                            var te = Z.index;
                        j = j.slice(0, te === n ? A : te)
                    }
                } else if (i.indexOf(Fn(g), A) != A) {
                    var ue = j.lastIndexOf(g);
                    ue > -1 && (j = j.slice(0, ue))
                }
                return j + d
            }
            function ER(i) {
                return i = Qe(i),
                i && Ea.test(i) ? i.replace(su, X2) : i
            }
            var kR = xs(function(i, a, u) {
                return i + (u ? " " : "") + a.toUpperCase()
            })
              , Eh = Fv("toUpperCase");
            function jy(i, a, u) {
                return i = Qe(i),
                a = u ? n : a,
                a === n ? q2(i) ? nk(i) : F2(i) : i.match(a) || []
            }
            var $y = Ne(function(i, a) {
                try {
                    return jn(i, n, a)
                } catch (u) {
                    return _h(u) ? u : new Pe(u)
                }
            })
              , CR = ci(function(i, a) {
                return nr(a, function(u) {
                    u = Yr(u),
                    li(i, u, yh(i[u], i))
                }),
                i
            });
            function OR(i) {
                var a = i == null ? 0 : i.length
                  , u = Se();
                return i = a ? yt(i, function(d) {
                    if (typeof d[1] != "function")
                        throw new rr(l);
                    return [u(d[0]), d[1]]
                }) : [],
                Ne(function(d) {
                    for (var g = -1; ++g < a; ) {
                        var S = i[g];
                        if (jn(S[0], this, d))
                            return jn(S[1], this, d)
                    }
                })
            }
            function TR(i) {
                return Xk(or(i, m))
            }
            function kh(i) {
                return function() {
                    return i
                }
            }
            function PR(i, a) {
                return i == null || i !== i ? a : i
            }
            var RR = zv()
              , DR = zv(!0);
            function Pn(i) {
                return i
            }
            function Ch(i) {
                return vv(typeof i == "function" ? i : or(i, m))
            }
            function IR(i) {
                return wv(or(i, m))
            }
            function MR(i, a) {
                return _v(i, or(a, m))
            }
            var AR = Ne(function(i, a) {
                return function(u) {
                    return La(u, i, a)
                }
            })
              , NR = Ne(function(i, a) {
                return function(u) {
                    return La(i, u, a)
                }
            });
            function Oh(i, a, u) {
                var d = Gt(a)
                  , g = ju(a, d);
                u == null && !(bt(a) && (g.length || !d.length)) && (u = a,
                a = i,
                i = this,
                g = ju(a, Gt(a)));
                var S = !(bt(u) && "chain" in u) || !!u.chain
                  , R = di(i);
                return nr(g, function(A) {
                    var j = a[A];
                    i[A] = j,
                    R && (i.prototype[A] = function() {
                        var Z = this.__chain__;
                        if (S || Z) {
                            var J = i(this.__wrapped__)
                              , te = J.__actions__ = Cn(this.__actions__);
                            return te.push({
                                func: j,
                                args: arguments,
                                thisArg: i
                            }),
                            J.__chain__ = Z,
                            J
                        }
                        return j.apply(i, $i([this.value()], arguments))
                    }
                    )
                }),
                i
            }
            function LR() {
                return Xt._ === this && (Xt._ = lk),
                this
            }
            function Th() {}
            function jR(i) {
                return i = Ie(i),
                Ne(function(a) {
                    return xv(a, i)
                })
            }
            var $R = oh(yt)
              , FR = oh(U0)
              , WR = oh(Rd);
            function Fy(i) {
                return dh(i) ? Dd(Yr(i)) : mC(i)
            }
            function zR(i) {
                return function(a) {
                    return i == null ? n : Ro(i, a)
                }
            }
            var UR = Yv()
              , YR = Yv(!0);
            function Ph() {
                return []
            }
            function Rh() {
                return !1
            }
            function BR() {
                return {}
            }
            function HR() {
                return ""
            }
            function VR() {
                return !0
            }
            function GR(i, a) {
                if (i = Ie(i),
                i < 1 || i > ae)
                    return [];
                var u = $e
                  , d = sn(i, $e);
                a = Se(a),
                i -= $e;
                for (var g = Ad(d, a); ++u < i; )
                    a(u);
                return g
            }
            function qR(i) {
                return Re(i) ? yt(i, Yr) : Wn(i) ? [i] : Cn(oy(Qe(i)))
            }
            function QR(i) {
                var a = ++sk;
                return Qe(i) + a
            }
            var KR = Yu(function(i, a) {
                return i + a
            }, 0)
              , ZR = sh("ceil")
              , JR = Yu(function(i, a) {
                return i / a
            }, 1)
              , XR = sh("floor");
            function e3(i) {
                return i && i.length ? Lu(i, Pn, Hd) : n
            }
            function t3(i, a) {
                return i && i.length ? Lu(i, Se(a, 2), Hd) : n
            }
            function n3(i) {
                return H0(i, Pn)
            }
            function r3(i, a) {
                return H0(i, Se(a, 2))
            }
            function i3(i) {
                return i && i.length ? Lu(i, Pn, Qd) : n
            }
            function o3(i, a) {
                return i && i.length ? Lu(i, Se(a, 2), Qd) : n
            }
            var s3 = Yu(function(i, a) {
                return i * a
            }, 1)
              , a3 = sh("round")
              , l3 = Yu(function(i, a) {
                return i - a
            }, 0);
            function u3(i) {
                return i && i.length ? Md(i, Pn) : 0
            }
            function c3(i, a) {
                return i && i.length ? Md(i, Se(a, 2)) : 0
            }
            return w.after = IT,
            w.ary = my,
            w.assign = wP,
            w.assignIn = Ry,
            w.assignInWith = nc,
            w.assignWith = _P,
            w.at = xP,
            w.before = vy,
            w.bind = yh,
            w.bindAll = CR,
            w.bindKey = yy,
            w.castArray = BT,
            w.chain = hy,
            w.chunk = XC,
            w.compact = eO,
            w.concat = tO,
            w.cond = OR,
            w.conforms = TR,
            w.constant = kh,
            w.countBy = uT,
            w.create = SP,
            w.curry = wy,
            w.curryRight = _y,
            w.debounce = xy,
            w.defaults = bP,
            w.defaultsDeep = EP,
            w.defer = MT,
            w.delay = AT,
            w.difference = nO,
            w.differenceBy = rO,
            w.differenceWith = iO,
            w.drop = oO,
            w.dropRight = sO,
            w.dropRightWhile = aO,
            w.dropWhile = lO,
            w.fill = uO,
            w.filter = fT,
            w.flatMap = pT,
            w.flatMapDeep = gT,
            w.flatMapDepth = mT,
            w.flatten = uy,
            w.flattenDeep = cO,
            w.flattenDepth = fO,
            w.flip = NT,
            w.flow = RR,
            w.flowRight = DR,
            w.fromPairs = dO,
            w.functions = DP,
            w.functionsIn = IP,
            w.groupBy = vT,
            w.initial = pO,
            w.intersection = gO,
            w.intersectionBy = mO,
            w.intersectionWith = vO,
            w.invert = AP,
            w.invertBy = NP,
            w.invokeMap = wT,
            w.iteratee = Ch,
            w.keyBy = _T,
            w.keys = Gt,
            w.keysIn = Tn,
            w.map = Ku,
            w.mapKeys = jP,
            w.mapValues = $P,
            w.matches = IR,
            w.matchesProperty = MR,
            w.memoize = Ju,
            w.merge = FP,
            w.mergeWith = Dy,
            w.method = AR,
            w.methodOf = NR,
            w.mixin = Oh,
            w.negate = Xu,
            w.nthArg = jR,
            w.omit = WP,
            w.omitBy = zP,
            w.once = LT,
            w.orderBy = xT,
            w.over = $R,
            w.overArgs = jT,
            w.overEvery = FR,
            w.overSome = WR,
            w.partial = wh,
            w.partialRight = Sy,
            w.partition = ST,
            w.pick = UP,
            w.pickBy = Iy,
            w.property = Fy,
            w.propertyOf = zR,
            w.pull = xO,
            w.pullAll = fy,
            w.pullAllBy = SO,
            w.pullAllWith = bO,
            w.pullAt = EO,
            w.range = UR,
            w.rangeRight = YR,
            w.rearg = $T,
            w.reject = kT,
            w.remove = kO,
            w.rest = FT,
            w.reverse = mh,
            w.sampleSize = OT,
            w.set = BP,
            w.setWith = HP,
            w.shuffle = TT,
            w.slice = CO,
            w.sortBy = DT,
            w.sortedUniq = MO,
            w.sortedUniqBy = AO,
            w.split = pR,
            w.spread = WT,
            w.tail = NO,
            w.take = LO,
            w.takeRight = jO,
            w.takeRightWhile = $O,
            w.takeWhile = FO,
            w.tap = eT,
            w.throttle = zT,
            w.thru = Qu,
            w.toArray = Oy,
            w.toPairs = My,
            w.toPairsIn = Ay,
            w.toPath = qR,
            w.toPlainObject = Py,
            w.transform = VP,
            w.unary = UT,
            w.union = WO,
            w.unionBy = zO,
            w.unionWith = UO,
            w.uniq = YO,
            w.uniqBy = BO,
            w.uniqWith = HO,
            w.unset = GP,
            w.unzip = vh,
            w.unzipWith = dy,
            w.update = qP,
            w.updateWith = QP,
            w.values = Es,
            w.valuesIn = KP,
            w.without = VO,
            w.words = jy,
            w.wrap = YT,
            w.xor = GO,
            w.xorBy = qO,
            w.xorWith = QO,
            w.zip = KO,
            w.zipObject = ZO,
            w.zipObjectDeep = JO,
            w.zipWith = XO,
            w.entries = My,
            w.entriesIn = Ay,
            w.extend = Ry,
            w.extendWith = nc,
            Oh(w, w),
            w.add = KR,
            w.attempt = $y,
            w.camelCase = eR,
            w.capitalize = Ny,
            w.ceil = ZR,
            w.clamp = ZP,
            w.clone = HT,
            w.cloneDeep = GT,
            w.cloneDeepWith = qT,
            w.cloneWith = VT,
            w.conformsTo = QT,
            w.deburr = Ly,
            w.defaultTo = PR,
            w.divide = JR,
            w.endsWith = tR,
            w.eq = br,
            w.escape = nR,
            w.escapeRegExp = rR,
            w.every = cT,
            w.find = dT,
            w.findIndex = ay,
            w.findKey = kP,
            w.findLast = hT,
            w.findLastIndex = ly,
            w.findLastKey = CP,
            w.floor = XR,
            w.forEach = py,
            w.forEachRight = gy,
            w.forIn = OP,
            w.forInRight = TP,
            w.forOwn = PP,
            w.forOwnRight = RP,
            w.get = Sh,
            w.gt = KT,
            w.gte = ZT,
            w.has = MP,
            w.hasIn = bh,
            w.head = cy,
            w.identity = Pn,
            w.includes = yT,
            w.indexOf = hO,
            w.inRange = JP,
            w.invoke = LP,
            w.isArguments = Mo,
            w.isArray = Re,
            w.isArrayBuffer = JT,
            w.isArrayLike = On,
            w.isArrayLikeObject = It,
            w.isBoolean = XT,
            w.isBuffer = Hi,
            w.isDate = eP,
            w.isElement = tP,
            w.isEmpty = nP,
            w.isEqual = rP,
            w.isEqualWith = iP,
            w.isError = _h,
            w.isFinite = oP,
            w.isFunction = di,
            w.isInteger = by,
            w.isLength = ec,
            w.isMap = Ey,
            w.isMatch = sP,
            w.isMatchWith = aP,
            w.isNaN = lP,
            w.isNative = uP,
            w.isNil = fP,
            w.isNull = cP,
            w.isNumber = ky,
            w.isObject = bt,
            w.isObjectLike = Tt,
            w.isPlainObject = Ua,
            w.isRegExp = xh,
            w.isSafeInteger = dP,
            w.isSet = Cy,
            w.isString = tc,
            w.isSymbol = Wn,
            w.isTypedArray = bs,
            w.isUndefined = hP,
            w.isWeakMap = pP,
            w.isWeakSet = gP,
            w.join = yO,
            w.kebabCase = iR,
            w.last = ar,
            w.lastIndexOf = wO,
            w.lowerCase = oR,
            w.lowerFirst = sR,
            w.lt = mP,
            w.lte = vP,
            w.max = e3,
            w.maxBy = t3,
            w.mean = n3,
            w.meanBy = r3,
            w.min = i3,
            w.minBy = o3,
            w.stubArray = Ph,
            w.stubFalse = Rh,
            w.stubObject = BR,
            w.stubString = HR,
            w.stubTrue = VR,
            w.multiply = s3,
            w.nth = _O,
            w.noConflict = LR,
            w.noop = Th,
            w.now = Zu,
            w.pad = aR,
            w.padEnd = lR,
            w.padStart = uR,
            w.parseInt = cR,
            w.random = XP,
            w.reduce = bT,
            w.reduceRight = ET,
            w.repeat = fR,
            w.replace = dR,
            w.result = YP,
            w.round = a3,
            w.runInContext = L,
            w.sample = CT,
            w.size = PT,
            w.snakeCase = hR,
            w.some = RT,
            w.sortedIndex = OO,
            w.sortedIndexBy = TO,
            w.sortedIndexOf = PO,
            w.sortedLastIndex = RO,
            w.sortedLastIndexBy = DO,
            w.sortedLastIndexOf = IO,
            w.startCase = gR,
            w.startsWith = mR,
            w.subtract = l3,
            w.sum = u3,
            w.sumBy = c3,
            w.template = vR,
            w.times = GR,
            w.toFinite = hi,
            w.toInteger = Ie,
            w.toLength = Ty,
            w.toLower = yR,
            w.toNumber = lr,
            w.toSafeInteger = yP,
            w.toString = Qe,
            w.toUpper = wR,
            w.trim = _R,
            w.trimEnd = xR,
            w.trimStart = SR,
            w.truncate = bR,
            w.unescape = ER,
            w.uniqueId = QR,
            w.upperCase = kR,
            w.upperFirst = Eh,
            w.each = py,
            w.eachRight = gy,
            w.first = cy,
            Oh(w, function() {
                var i = {};
                return zr(w, function(a, u) {
                    Je.call(w.prototype, u) || (i[u] = a)
                }),
                i
            }(), {
                chain: !1
            }),
            w.VERSION = r,
            nr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
                w[i].placeholder = w
            }),
            nr(["drop", "take"], function(i, a) {
                Fe.prototype[i] = function(u) {
                    u = u === n ? 1 : Ut(Ie(u), 0);
                    var d = this.__filtered__ && !a ? new Fe(this) : this.clone();
                    return d.__filtered__ ? d.__takeCount__ = sn(u, d.__takeCount__) : d.__views__.push({
                        size: sn(u, $e),
                        type: i + (d.__dir__ < 0 ? "Right" : "")
                    }),
                    d
                }
                ,
                Fe.prototype[i + "Right"] = function(u) {
                    return this.reverse()[i](u).reverse()
                }
            }),
            nr(["filter", "map", "takeWhile"], function(i, a) {
                var u = a + 1
                  , d = u == Kt || u == gt;
                Fe.prototype[i] = function(g) {
                    var S = this.clone();
                    return S.__iteratees__.push({
                        iteratee: Se(g, 3),
                        type: u
                    }),
                    S.__filtered__ = S.__filtered__ || d,
                    S
                }
            }),
            nr(["head", "last"], function(i, a) {
                var u = "take" + (a ? "Right" : "");
                Fe.prototype[i] = function() {
                    return this[u](1).value()[0]
                }
            }),
            nr(["initial", "tail"], function(i, a) {
                var u = "drop" + (a ? "" : "Right");
                Fe.prototype[i] = function() {
                    return this.__filtered__ ? new Fe(this) : this[u](1)
                }
            }),
            Fe.prototype.compact = function() {
                return this.filter(Pn)
            }
            ,
            Fe.prototype.find = function(i) {
                return this.filter(i).head()
            }
            ,
            Fe.prototype.findLast = function(i) {
                return this.reverse().find(i)
            }
            ,
            Fe.prototype.invokeMap = Ne(function(i, a) {
                return typeof i == "function" ? new Fe(this) : this.map(function(u) {
                    return La(u, i, a)
                })
            }),
            Fe.prototype.reject = function(i) {
                return this.filter(Xu(Se(i)))
            }
            ,
            Fe.prototype.slice = function(i, a) {
                i = Ie(i);
                var u = this;
                return u.__filtered__ && (i > 0 || a < 0) ? new Fe(u) : (i < 0 ? u = u.takeRight(-i) : i && (u = u.drop(i)),
                a !== n && (a = Ie(a),
                u = a < 0 ? u.dropRight(-a) : u.take(a - i)),
                u)
            }
            ,
            Fe.prototype.takeRightWhile = function(i) {
                return this.reverse().takeWhile(i).reverse()
            }
            ,
            Fe.prototype.toArray = function() {
                return this.take($e)
            }
            ,
            zr(Fe.prototype, function(i, a) {
                var u = /^(?:filter|find|map|reject)|While$/.test(a)
                  , d = /^(?:head|last)$/.test(a)
                  , g = w[d ? "take" + (a == "last" ? "Right" : "") : a]
                  , S = d || /^find/.test(a);
                g && (w.prototype[a] = function() {
                    var R = this.__wrapped__
                      , A = d ? [1] : arguments
                      , j = R instanceof Fe
                      , Z = A[0]
                      , J = j || Re(R)
                      , te = function(Le) {
                        var ze = g.apply(w, $i([Le], A));
                        return d && ue ? ze[0] : ze
                    };
                    J && u && typeof Z == "function" && Z.length != 1 && (j = J = !1);
                    var ue = this.__chain__
                      , we = !!this.__actions__.length
                      , be = S && !ue
                      , Ae = j && !we;
                    if (!S && J) {
                        R = Ae ? R : new Fe(this);
                        var Ee = i.apply(R, A);
                        return Ee.__actions__.push({
                            func: Qu,
                            args: [te],
                            thisArg: n
                        }),
                        new ir(Ee,ue)
                    }
                    return be && Ae ? i.apply(this, A) : (Ee = this.thru(te),
                    be ? d ? Ee.value()[0] : Ee.value() : Ee)
                }
                )
            }),
            nr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
                var a = xu[i]
                  , u = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru"
                  , d = /^(?:pop|shift)$/.test(i);
                w.prototype[i] = function() {
                    var g = arguments;
                    if (d && !this.__chain__) {
                        var S = this.value();
                        return a.apply(Re(S) ? S : [], g)
                    }
                    return this[u](function(R) {
                        return a.apply(Re(R) ? R : [], g)
                    })
                }
            }),
            zr(Fe.prototype, function(i, a) {
                var u = w[a];
                if (u) {
                    var d = u.name + "";
                    Je.call(ys, d) || (ys[d] = []),
                    ys[d].push({
                        name: a,
                        func: u
                    })
                }
            }),
            ys[Uu(n, P).name] = [{
                name: "wrapper",
                func: n
            }],
            Fe.prototype.clone = Ek,
            Fe.prototype.reverse = kk,
            Fe.prototype.value = Ck,
            w.prototype.at = tT,
            w.prototype.chain = nT,
            w.prototype.commit = rT,
            w.prototype.next = iT,
            w.prototype.plant = sT,
            w.prototype.reverse = aT,
            w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = lT,
            w.prototype.first = w.prototype.head,
            Pa && (w.prototype[Pa] = oT),
            w
        }
          , gs = rk();
        ko ? ((ko.exports = gs)._ = gs,
        Cd._ = gs) : Xt._ = gs
    }
    ).call(Gr)
}
)(Ef, Ef.exports);
var dj = Ef.exports;
const Ob = localStorage.getItem("dhis2.debugConnectionStatus");
Ob && console.log("Logging for dhis2ConnectionStatus is enabled. Remove the `dhis2.debugConnectionStatus` item in localStorage to disable logging.");
function Vr() {
    Ob && console.log(...arguments)
}
function hj(e) {
    if (!e)
        return !1;
    const {minor: t, patch: n} = e;
    switch (t) {
    case 39:
        return n === void 0 || n >= 2;
    case 38:
        return n === void 0 || n >= 4;
    case 37:
        return n === void 0 || n >= 10;
    default:
        return t >= 40
    }
}
const pj = 1e3 * 30
  , gj = 1e3 * 60 * 5
  , mj = 1.5
  , vj = () => {
    throw new Error("Provide a callback")
}
;
function yj() {
    let {initialDelay: e=pj, maxDelay: t=gj, delayIncrementFactor: n=mj, initialPauseValue: r=!1, callback: o=vj} = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const s = {
        paused: r,
        delay: e,
        timeout: setTimeout(function() {}, 0),
        standbyCallback: null
    };
    function l() {
        const N = Math.min(s.delay * n, t);
        Vr("[SI] incrementing delay", {
            prev: s.delay,
            new: N
        }),
        s.delay = N
    }
    function c() {
        l(),
        o()
    }
    function f() {
        Vr("[SI] clearing and starting timeout", {
            delay: s.delay
        }),
        clearTimeout(s.timeout),
        s.timeout = setTimeout(function() {
            if (s.paused) {
                Vr("[SI] entering regular standby"),
                s.standbyCallback = () => {
                    c(),
                    f()
                }
                ;
                return
            }
            c(),
            f()
        }, s.delay)
    }
    function h() {
        clearTimeout(s.timeout)
    }
    function v() {
        if (s.paused) {
            s.standbyCallback === null && (Vr("[SI] entering standby without timer increment"),
            s.standbyCallback = () => {
                o(),
                f()
            }
            );
            return
        }
        o(),
        f()
    }
    function m() {
        Vr("[SI] pausing"),
        s.paused = !0
    }
    function x() {
        Vr("[SI] resuming", {
            standbyCb: s.standbyCallback
        }),
        s.paused = !1,
        s.standbyCallback !== null && (s.standbyCallback(),
        s.standbyCallback = null)
    }
    function E() {
        Vr("[SI] snoozing timeout"),
        f()
    }
    function T() {
        Vr("[SI] resetting interval from beginning"),
        s.delay = e,
        f()
    }
    return f(),
    {
        clear: h,
        pause: m,
        resume: x,
        invokeCallbackImmediately: v,
        snooze: E,
        reset: T
    }
}
function wj() {
    const {baseUrl: e} = Zl();
    return ee.useCallback( () => fetch(e + "/api/ping"), [e])
}
const Lw = "dhis2.lastConnected"
  , Xm = e => e ? `${Lw}.${e}` : Lw
  , jw = e => {
    const t = new Date(Date.now());
    return localStorage.setItem(Xm(e), t.toUTCString()),
    t
}
  , _j = e => {
    const t = localStorage.getItem(Xm(e));
    return t ? new Date(t) : null
}
  , xj = e => {
    localStorage.removeItem(Xm(e))
}
  , Tb = I.createContext({
    isConnected: !0,
    isDisconnected: !1,
    lastConnected: null
})
  , Pb = e => {
    let {children: t} = e;
    const n = kb()
      , {appName: r, serverVersion: o} = Zl()
      , [s,l] = ee.useState(n.latestIsConnected)
      , c = wj()
      , f = ee.useRef(null)
      , h = ee.useCallback(E => {
        l(T => {
            if (Vr("[D2CS] updating state:", {
                prevIsConnected: T,
                newIsConnected: E
            }),
            E !== T) {
                var N;
                (N = f.current) === null || N === void 0 || N.reset(),
                E ? xj(r) : jw(r)
            }
            return E
        }
        )
    }
    , [r])
      , v = ee.useCallback( () => c().then( () => {
        h(!0)
    }
    ).catch(E => {
        console.error("Ping failed:", E.message),
        h(!1)
    }
    ), [c, h])
      , m = ee.useCallback(E => {
        var T;
        let {isConnected: N} = E;
        Vr("[D2CS] handling update from sw"),
        (T = f.current) === null || T === void 0 || T.snooze(),
        h(N)
    }
    , [h]);
    ee.useEffect( () => {
        if (!o || !hj(o))
            return;
        const E = yj({
            initialPauseValue: !document.hasFocus() || document.visibilityState !== "visible",
            callback: v
        });
        f.current = E;
        const T = () => {
            document.visibilityState === "hidden" ? E.pause() : E.resume()
        }
          , N = () => E.invokeCallbackImmediately()
          , B = dj.throttle( () => E.invokeCallbackImmediately(), 15e3);
        return document.addEventListener("visibilitychange", T),
        window.addEventListener("offline", N),
        window.addEventListener("online", B),
        () => {
            document.removeEventListener("visibilitychange", T),
            window.removeEventListener("offline", N),
            window.removeEventListener("online", B),
            E.clear(),
            B.cancel()
        }
    }
    , [v, o]),
    ee.useEffect( () => {
        if (!n.subscribeToDhis2ConnectionStatus) {
            var E;
            (E = f.current) === null || E === void 0 || E.invokeCallbackImmediately(),
            console.warn("Please upgrade to @dhis2/cli-app-scripts@>10.3.8 for full connection status features");
            return
        }
        const T = n.subscribeToDhis2ConnectionStatus({
            onUpdate: m
        });
        return () => {
            T()
        }
    }
    , [n, m]);
    const x = ee.useMemo( () => {
        const E = s ?? !0;
        return {
            isConnected: E,
            isDisconnected: !E,
            lastConnected: E ? null : _j(r) || jw(r)
        }
    }
    , [s, r]);
    return I.createElement(Tb.Provider, {
        value: x
    }, t)
}
;
Pb.propTypes = {
    children: b.node
};
const aU = () => {
    const e = ee.useContext(Tb);
    if (!e)
        throw new Error("useDhis2ConnectionStatus must be used within a Dhis2ConnectionStatus provider");
    return e
}
  , Rb = I.createContext(void 0)
  , Db = I.createContext( () => {}
)
  , Sj = e => {
    let {children: t} = e;
    const [n,r] = ee.useState();
    return I.createElement(Rb.Provider, {
        value: n
    }, I.createElement(Db.Provider, {
        value: r
    }, t))
}
  , bj = () => ee.useContext(Rb)
  , Ej = () => ee.useContext(Db)
  , lU = () => {
    const e = bj()
      , t = Ej();
    return {
        onlineStatusMessage: e,
        setOnlineStatusMessage: t
    }
}
;
function Ib(e) {
    let {offlineInterface: t, children: n} = e;
    return !t || !t.pwaEnabled ? I.createElement(I.Fragment, null, n) : I.createElement(Eb, {
        offlineInterface: t
    }, I.createElement(Pb, null, I.createElement(Cb, null, I.createElement(Sj, null, n))))
}
Ib.propTypes = {
    children: b.node,
    offlineInterface: b.shape({
        pwaEnabled: b.bool
    })
};
b.string.isRequired,
b.node,
b.node;
var kj = ti
  , Cj = function() {
    return kj.Date.now()
}
  , Oj = Cj
  , Tj = /\s/;
function Pj(e) {
    for (var t = e.length; t-- && Tj.test(e.charAt(t)); )
        ;
    return t
}
var Rj = Pj
  , Dj = Rj
  , Ij = /^\s+/;
function Mj(e) {
    return e && e.slice(0, Dj(e) + 1).replace(Ij, "")
}
var Aj = Mj
  , Nj = Xf
  , Lj = Jm
  , jj = "[object Symbol]";
function $j(e) {
    return typeof e == "symbol" || Lj(e) && Nj(e) == jj
}
var Fj = $j
  , Wj = Aj
  , $w = Jl
  , zj = Fj
  , Fw = NaN
  , Uj = /^[-+]0x[0-9a-f]+$/i
  , Yj = /^0b[01]+$/i
  , Bj = /^0o[0-7]+$/i
  , Hj = parseInt;
function Vj(e) {
    if (typeof e == "number")
        return e;
    if (zj(e))
        return Fw;
    if ($w(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = $w(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = Wj(e);
    var n = Yj.test(e);
    return n || Bj.test(e) ? Hj(e.slice(2), n ? 2 : 8) : Uj.test(e) ? Fw : +e
}
var Gj = Vj
  , qj = Jl
  , dp = Oj
  , Ww = Gj
  , Qj = "Expected a function"
  , Kj = Math.max
  , Zj = Math.min;
function Jj(e, t, n) {
    var r, o, s, l, c, f, h = 0, v = !1, m = !1, x = !0;
    if (typeof e != "function")
        throw new TypeError(Qj);
    t = Ww(t) || 0,
    qj(n) && (v = !!n.leading,
    m = "maxWait" in n,
    s = m ? Kj(Ww(n.maxWait) || 0, t) : s,
    x = "trailing" in n ? !!n.trailing : x);
    function E(F) {
        var W = r
          , G = o;
        return r = o = void 0,
        h = F,
        l = e.apply(G, W),
        l
    }
    function T(F) {
        return h = F,
        c = setTimeout(P, t),
        v ? E(F) : l
    }
    function N(F) {
        var W = F - f
          , G = F - h
          , ye = t - W;
        return m ? Zj(ye, s - G) : ye
    }
    function B(F) {
        var W = F - f
          , G = F - h;
        return f === void 0 || W >= t || W < 0 || m && G >= s
    }
    function P() {
        var F = dp();
        if (B(F))
            return O(F);
        c = setTimeout(P, N(F))
    }
    function O(F) {
        return c = void 0,
        x && r ? E(F) : (r = o = void 0,
        l)
    }
    function D() {
        c !== void 0 && clearTimeout(c),
        h = 0,
        r = f = o = c = void 0
    }
    function z() {
        return c === void 0 ? l : O(dp())
    }
    function H() {
        var F = dp()
          , W = B(F);
        if (r = arguments,
        o = this,
        f = F,
        W) {
            if (c === void 0)
                return T(f);
            if (m)
                return clearTimeout(c),
                c = setTimeout(P, t),
                E(f)
        }
        return c === void 0 && (c = setTimeout(P, t)),
        l
    }
    return H.cancel = D,
    H.flush = z,
    H
}
var Xj = Jj;
const e$ = "sections-db"
  , zw = "sections-store"
  , t$ = [/^workbox-precache/]
  , n$ = async e => {
    if (!(!("databases" in indexedDB) || !(await window.indexedDB.databases()).some(n => {
        let {name: r} = n;
        return r === e
    }
    )))
        return new Promise( (n, r) => {
            const o = indexedDB.open(e);
            o.onsuccess = s => {
                const c = s.target.result.transaction(zw, "readwrite");
                c.oncomplete = () => n(),
                c.onerror = v => r(v.target.error);
                const h = c.objectStore(zw).clear();
                h.onerror = v => r(v.target.error)
            }
            ,
            o.onerror = s => {
                r(s.target.error)
            }
        }
        )
}
;
async function r$() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e$;
    console.debug("Clearing sensitive caches");
    let t;
    try {
        t = await caches.keys()
    } catch {
        return !1
    }
    return Promise.all([n$(e).then( () => !1), ...t.map(n => t$.some(r => r.test(n)) ? !1 : caches.delete(n))]).then(n => n.some(r => r))
}
const Mb = e => {
    let {config: t, userInfo: n, children: r, offlineInterface: o, plugin: s, parentAlertsAdd: l, showAlertsInPlugin: c} = e;
    return I.createElement(uN, {
        config: t
    }, I.createElement(bN, {
        plugin: s,
        parentAlertsAdd: l,
        showAlertsInPlugin: c
    }, I.createElement(dN, null, I.createElement(Ib, {
        offlineInterface: o
    }, I.createElement(yN, {
        userInfo: n
    }, r)))))
}
;
Mb.displayName = "DHIS2RuntimeProvider";
const i$ = {
    "Close modal dialog": "Close modal dialog"
}
  , o$ = "default";
ve.addResources("en", o$, i$);
const s$ = e => t => {
    e({}, t)
}
  , Ab = e => {
    let {onClick: t} = e;
    return I.createElement("button", {
        title: ve.t("Close modal dialog"),
        "data-test": "dhis2-modal-close-button",
        onClick: s$(t),
        "aria-label": ve.t("Close modal dialog"),
        className: de.dynamic([["80232614", [$.grey700, $.grey200, $.grey900, $.grey200, nt.focus, $.grey300]]])
    }, I.createElement(Zg, null), I.createElement(de, {
        id: "80232614",
        dynamic: [$.grey700, $.grey200, $.grey900, $.grey200, nt.focus, $.grey300]
    }, [`button.__jsx-style-dynamic-selector{background-color:transparent;color:${$.grey700};border:none;outline:none;padding:4px 4px 0px;border-radius:3px;position:absolute;top:0px;inset-inline-end:0px;}`, `button.__jsx-style-dynamic-selector:hover{background-color:${$.grey200};color:${$.grey900};}`, `button.__jsx-style-dynamic-selector:focus{background-color:${$.grey200};outline:3px solid ${nt.focus};}`, "button.__jsx-style-dynamic-selector:focus.__jsx-style-dynamic-selector:not(:focus-visible){outline:none;}", `button.__jsx-style-dynamic-selector:active{background-color:${$.grey300};}`]))
}
;
Ab.propTypes = {
    onClick: b.func
};
const a$ = e => ({
    styles: I.createElement(de, {
        id: "1884450060",
        dynamic: [_e.dp64, e ? "none" : "block"]
    }, [`div.__jsx-style-dynamic-selector{padding:${_e.dp64};display:${e ? "none" : "block"};}`]),
    className: de.dynamic([["1884450060", [_e.dp64, e ? "none" : "block"]]])
})
  , Nb = e => {
    let {children: t, className: n, dataTest: r="dhis2-uicore-modal", hide: o, fluid: s, large: l, onClose: c, position: f="top", small: h} = e;
    const v = a$(o);
    return ee.useEffect( () => {
        if (o)
            return;
        const m = x => {
            x.key === "Escape" && c && (x.preventDefault(),
            x.stopPropagation(),
            c())
        }
        ;
        return document.addEventListener("keydown", m),
        () => {
            document.removeEventListener("keydown", m)
        }
    }
    , [o, c]),
    I.createElement(qf, {
        onBackdropClick: c,
        className: v.className,
        translucent: !o
    }, I.createElement(Ql, {
        position: f
    }, I.createElement("aside", {
        role: "dialog",
        "aria-modal": "true",
        "data-test": r,
        className: de.dynamic([["3655640549", [2 * qe.dp64, 2 * qe.dp64, 2 * qe.dp64, 2 * qe.dp64]]]) + " " + (dn(n, {
            small: h,
            large: l,
            fluid: s
        }) || "")
    }, I.createElement(GS, null, c && I.createElement(Ab, {
        onClick: c
    }), I.createElement("div", {
        className: de.dynamic([["3655640549", [2 * qe.dp64, 2 * qe.dp64, 2 * qe.dp64, 2 * qe.dp64]]])
    }, t))), v.styles), I.createElement(de, {
        id: "3655640549",
        dynamic: [2 * qe.dp64, 2 * qe.dp64, 2 * qe.dp64, 2 * qe.dp64]
    }, [`aside.__jsx-style-dynamic-selector{height:auto;width:600px;max-width:calc(100vw - ${2 * qe.dp64}px);max-height:calc(100vh - ${2 * qe.dp64}px);}`, "aside.small.__jsx-style-dynamic-selector{width:400px;}", "aside.large.__jsx-style-dynamic-selector{width:800px;}", "aside.fluid.__jsx-style-dynamic-selector{width:auto;}", `div.__jsx-style-dynamic-selector{padding:24px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;max-width:calc(100vw - ${2 * qe.dp64}px);max-height:calc(100vh - ${2 * qe.dp64}px);}`]))
}
;
Nb.propTypes = {
    children: b.node,
    className: b.string,
    dataTest: b.string,
    fluid: b.bool,
    hide: b.bool,
    large: no,
    position: __,
    small: no,
    onClose: b.func
};
const Lb = e => {
    let {children: t, dataTest: n="dhis2-uicore-modalactions"} = e;
    return I.createElement("div", {
        "data-test": n,
        className: de.dynamic([["2674552674", [_e.dp16]]])
    }, t, I.createElement(de, {
        id: "2674552674",
        dynamic: [_e.dp16]
    }, [`div.__jsx-style-dynamic-selector{-webkit-order:3;-ms-flex-order:3;order:3;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin:${_e.dp16} 0 0;}`]))
}
;
Lb.propTypes = {
    children: b.node,
    dataTest: b.string
};
const jb = e => {
    let {children: t, className: n, dataTest: r="dhis2-uicore-modalcontent"} = e;
    return I.createElement("div", {
        "data-test": r,
        className: "jsx-3719215021 " + (n || "")
    }, t, I.createElement(de, {
        id: "3719215021"
    }, ["div.jsx-3719215021{-webkit-order:2;-ms-flex-order:2;order:2;-webkit-box-flex:2;-webkit-flex-grow:2;-ms-flex-positive:2;flex-grow:2;overflow-y:auto;}"]))
}
;
jb.propTypes = {
    children: b.node,
    className: b.string,
    dataTest: b.string
};
const $b = e => {
    let {children: t, dataTest: n="dhis2-uicore-modaltitle"} = e;
    return I.createElement("h1", {
        "data-test": n,
        className: de.dynamic([["4169842822", [$.grey900, _e.dp12]]]) + " " + (dn("title") || "")
    }, t, I.createElement(de, {
        id: "4169842822",
        dynamic: [$.grey900, _e.dp12]
    }, [`h1.__jsx-style-dynamic-selector{-webkit-order:1;-ms-flex-order:1;order:1;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;color:${$.grey900};font-size:20px;font-weight:500;line-height:24px;margin:0 0 ${_e.dp12};}`]))
}
;
$b.propTypes = {
    children: b.node,
    dataTest: b.string
};
const Fb = e => {
    let {children: t, dataTest: n} = e;
    return t ? I.createElement("div", {
        "data-test": n,
        className: de.dynamic([["3568970766", [$.grey900]]])
    }, t, I.createElement(de, {
        id: "3568970766",
        dynamic: [$.grey900]
    }, [`div.__jsx-style-dynamic-selector{color:${$.grey900};font-size:14px;line-height:19px;}`])) : null
}
;
Fb.propTypes = {
    dataTest: b.string.isRequired,
    children: b.node
};
const Wb = e => {
    let {title: t, dataTest: n} = e;
    return t ? I.createElement("h6", {
        "data-test": n,
        className: de.dynamic([["1334557505", [$.grey900]]])
    }, t, I.createElement(de, {
        id: "1334557505",
        dynamic: [$.grey900]
    }, [`h6.__jsx-style-dynamic-selector{color:${$.grey900};font-size:14px;font-weight:500;line-height:19px;margin:0;}`])) : null
}
;
Wb.propTypes = {
    dataTest: b.string.isRequired,
    title: b.string
};
const zb = e => {
    let {children: t, dataTest: n="dhis2-uicore-noticebox-content", title: r} = e;
    return I.createElement("div", {
        "data-test": n,
        className: de.dynamic([["403435427", [_e.dp8]]])
    }, I.createElement(Wb, {
        title: r,
        dataTest: `${n}-title`
    }), I.createElement(Fb, {
        dataTest: `${n}-message`
    }, t), I.createElement(de, {
        id: "403435427",
        dynamic: [_e.dp8]
    }, [`div.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:${_e.dp8};padding-block-start:3px;}`]))
}
;
zb.propTypes = {
    children: b.node,
    dataTest: b.string,
    title: b.string
};
const Ub = e => {
    let {valid: t, warning: n, error: r, dataTest: o} = e
      , s = $.blue900
      , l = Jg;
    return t && (s = $.green700,
    l = x_),
    n && (s = $.yellow700,
    l = If),
    r && (s = $.red700,
    l = Df),
    I.createElement("div", {
        "data-test": o,
        className: de.dynamic([["1909501516", [_e.dp12, _e.dp24]]])
    }, I.createElement(l, {
        color: s,
        className: de.dynamic([["1909501516", [_e.dp12, _e.dp24]]])
    }), I.createElement(de, {
        id: "1909501516",
        dynamic: [_e.dp12, _e.dp24]
    }, [`.__jsx-style-dynamic-selector{margin-inline-end:${_e.dp12};height:${_e.dp24};}`]))
}
;
Ub.propTypes = {
    dataTest: b.string.isRequired,
    error: Zr(["error", "valid", "warning"], b.bool),
    valid: Zr(["error", "valid", "warning"], b.bool),
    warning: Zr(["error", "valid", "warning"], b.bool)
};
const Yb = e => {
    let {className: t, children: n, dataTest: r="dhis2-uicore-noticebox", title: o, warning: s, error: l, valid: c} = e;
    const f = dn(t, "root", {
        warning: s,
        error: l,
        valid: c
    });
    return I.createElement("div", {
        "data-test": r,
        className: de.dynamic([["243875418", [$.blue050, $.blue200, _e.dp12, _e.dp16, $.yellow050, $.yellow200, $.red050, $.red500, $.green050, $.green200]]]) + " " + (f || "")
    }, I.createElement(Ub, {
        error: l,
        warning: s,
        valid: c,
        dataTest: `${r}-icon`
    }), I.createElement("div", {
        className: de.dynamic([["243875418", [$.blue050, $.blue200, _e.dp12, _e.dp16, $.yellow050, $.yellow200, $.red050, $.red500, $.green050, $.green200]]])
    }, I.createElement(zb, {
        title: o,
        dataTest: `${r}-content`
    }, n)), I.createElement(de, {
        id: "243875418",
        dynamic: [$.blue050, $.blue200, _e.dp12, _e.dp16, $.yellow050, $.yellow200, $.red050, $.red500, $.green050, $.green200]
    }, [`.root.__jsx-style-dynamic-selector{background:${$.blue050};border:1px solid ${$.blue200};border-radius:3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-block:${_e.dp12};padding-inline:${_e.dp16};}`, `.root.warning.__jsx-style-dynamic-selector{background:${$.yellow050};border:1px solid ${$.yellow200};}`, `.root.error.__jsx-style-dynamic-selector{background:${$.red050};border:2px solid ${$.red500};}`, `.root.valid.__jsx-style-dynamic-selector{background:${$.green050};border:1px solid ${$.green200};}`]))
}
;
Yb.propTypes = {
    children: b.node,
    className: b.string,
    dataTest: b.string,
    error: Zr(["error", "valid", "warning"], b.bool),
    title: b.string,
    valid: Zr(["error", "valid", "warning"], b.bool),
    warning: Zr(["error", "valid", "warning"], b.bool)
};
var Bb, Uw = IS;
Bb = Uw.createRoot,
Uw.hydrateRoot;
const l$ = "modulepreload"
  , u$ = function(e, t) {
    return new URL(e,t).href
}
  , Yw = {}
  , Hb = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
        const l = document.getElementsByTagName("link")
          , c = document.querySelector("meta[property=csp-nonce]")
          , f = (c == null ? void 0 : c.nonce) || (c == null ? void 0 : c.getAttribute("nonce"));
        o = Promise.allSettled(n.map(h => {
            if (h = u$(h, r),
            h in Yw)
                return;
            Yw[h] = !0;
            const v = h.endsWith(".css")
              , m = v ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let T = l.length - 1; T >= 0; T--) {
                    const N = l[T];
                    if (N.href === h && (!v || N.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${h}"]${m}`))
                return;
            const E = document.createElement("link");
            if (E.rel = v ? "stylesheet" : l$,
            v || (E.as = "script"),
            E.crossOrigin = "",
            E.href = h,
            f && E.setAttribute("nonce", f),
            document.head.appendChild(E),
            v)
                return new Promise( (T, N) => {
                    E.addEventListener("load", T),
                    E.addEventListener("error", () => N(new Error(`Unable to preload CSS for ${h}`)))
                }
                )
        }
        ))
    }
    function s(l) {
        const c = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (c.payload = l,
        window.dispatchEvent(c),
        !c.defaultPrevented)
            throw l
    }
    return o.then(l => {
        for (const c of l || [])
            c.status === "rejected" && s(c.reason);
        return t().catch(s)
    }
    )
};
try {
    self["workbox:core:7.2.0"] && _()
} catch {}
typeof registration < "u" && registration.scope;
try {
    self["workbox:precaching:7.2.0"] && _()
} catch {}
try {
    self["workbox:strategies:7.2.0"] && _()
} catch {}
try {
    self["workbox:routing:7.2.0"] && _()
} catch {}
const jt = Object.freeze({
    getClientsInfo: "GET_CLIENTS_INFO",
    clientsInfo: "CLIENTS_INFO",
    claimClients: "CLAIM_CLIENTS",
    skipWaiting: "SKIP_WAITING",
    startRecording: "START_RECORDING",
    recordingStarted: "RECORDING_STARTED",
    recordingError: "RECORDING_ERROR",
    confirmRecordingCompletion: "CONFIRM_RECORDING_COMPLETION",
    completeRecording: "COMPLETE_RECORDING",
    recordingCompleted: "RECORDING_COMPLETED",
    dhis2ConnectionStatusUpdate: "DHIS2_CONNECTION_STATUS_UPDATE",
    getImmediateDhis2ConnectionStatusUpdate: "GET_IMMEDIATE_DHIS2_CONNECTION_STATUS_UPDATE"
});
var c$ = Xj
  , f$ = Jl
  , d$ = "Expected a function";
function h$(e, t, n) {
    var r = !0
      , o = !0;
    if (typeof e != "function")
        throw new TypeError(d$);
    return f$(n) && (r = "leading" in n ? !!n.leading : r,
    o = "trailing" in n ? !!n.trailing : o),
    c$(e, t, {
        leading: r,
        maxWait: t,
        trailing: o
    })
}
var p$ = h$;
const g$ = Jo(p$)
  , m$ = (e, t) => t.some(n => e instanceof n);
let Bw, Hw;
function v$() {
    return Bw || (Bw = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
}
function y$() {
    return Hw || (Hw = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
}
const Vb = new WeakMap
  , Ig = new WeakMap
  , Gb = new WeakMap
  , hp = new WeakMap
  , e0 = new WeakMap;
function w$(e) {
    const t = new Promise( (n, r) => {
        const o = () => {
            e.removeEventListener("success", s),
            e.removeEventListener("error", l)
        }
          , s = () => {
            n(fo(e.result)),
            o()
        }
          , l = () => {
            r(e.error),
            o()
        }
        ;
        e.addEventListener("success", s),
        e.addEventListener("error", l)
    }
    );
    return t.then(n => {
        n instanceof IDBCursor && Vb.set(n, e)
    }
    ).catch( () => {}
    ),
    e0.set(t, e),
    t
}
function _$(e) {
    if (Ig.has(e))
        return;
    const t = new Promise( (n, r) => {
        const o = () => {
            e.removeEventListener("complete", s),
            e.removeEventListener("error", l),
            e.removeEventListener("abort", l)
        }
          , s = () => {
            n(),
            o()
        }
          , l = () => {
            r(e.error || new DOMException("AbortError","AbortError")),
            o()
        }
        ;
        e.addEventListener("complete", s),
        e.addEventListener("error", l),
        e.addEventListener("abort", l)
    }
    );
    Ig.set(e, t)
}
let Mg = {
    get(e, t, n) {
        if (e instanceof IDBTransaction) {
            if (t === "done")
                return Ig.get(e);
            if (t === "objectStoreNames")
                return e.objectStoreNames || Gb.get(e);
            if (t === "store")
                return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
        }
        return fo(e[t])
    },
    set(e, t, n) {
        return e[t] = n,
        !0
    },
    has(e, t) {
        return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e
    }
};
function x$(e) {
    Mg = e(Mg)
}
function S$(e) {
    return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...n) {
        const r = e.call(pp(this), t, ...n);
        return Gb.set(r, t.sort ? t.sort() : [t]),
        fo(r)
    }
    : y$().includes(e) ? function(...t) {
        return e.apply(pp(this), t),
        fo(Vb.get(this))
    }
    : function(...t) {
        return fo(e.apply(pp(this), t))
    }
}
function b$(e) {
    return typeof e == "function" ? S$(e) : (e instanceof IDBTransaction && _$(e),
    m$(e, v$()) ? new Proxy(e,Mg) : e)
}
function fo(e) {
    if (e instanceof IDBRequest)
        return w$(e);
    if (hp.has(e))
        return hp.get(e);
    const t = b$(e);
    return t !== e && (hp.set(e, t),
    e0.set(t, e)),
    t
}
const pp = e => e0.get(e);
function qb(e, t, {blocked: n, upgrade: r, blocking: o, terminated: s}={}) {
    const l = indexedDB.open(e, t)
      , c = fo(l);
    return r && l.addEventListener("upgradeneeded", f => {
        r(fo(l.result), f.oldVersion, f.newVersion, fo(l.transaction))
    }
    ),
    n && l.addEventListener("blocked", () => n()),
    c.then(f => {
        s && f.addEventListener("close", () => s()),
        o && f.addEventListener("versionchange", () => o())
    }
    ).catch( () => {}
    ),
    c
}
const E$ = ["get", "getKey", "getAll", "getAllKeys", "count"]
  , k$ = ["put", "add", "delete", "clear"]
  , gp = new Map;
function Vw(e, t) {
    if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string"))
        return;
    if (gp.get(t))
        return gp.get(t);
    const n = t.replace(/FromIndex$/, "")
      , r = t !== n
      , o = k$.includes(n);
    if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(o || E$.includes(n)))
        return;
    const s = async function(l, ...c) {
        const f = this.transaction(l, o ? "readwrite" : "readonly");
        let h = f.store;
        return r && (h = h.index(c.shift())),
        (await Promise.all([h[n](...c), o && f.done]))[0]
    };
    return gp.set(t, s),
    s
}
x$(e => ({
    ...e,
    get: (t, n, r) => Vw(t, n) || e.get(t, n, r),
    has: (t, n) => !!Vw(t, n) || e.has(t, n)
}));
const C$ = "dhis2-base-url-db"
  , t0 = "dhis2-base-url-store"
  , O$ = 1;
function Qb() {
    return qb(C$, O$, {
        upgrade(e, t) {
            switch (t) {
            case 0:
                e.createObjectStore(t0, {
                    keyPath: "appName"
                });
            default:
                console.debug("[sections-db] Done upgrading DB")
            }
        }
    })
}
async function T$(e) {
    let {appName: t, baseUrl: n} = e;
    return (await Qb()).put(t0, {
        appName: t,
        baseUrl: n
    })
}
async function P$(e) {
    return (await Qb()).get(t0, e).then(n => n == null ? void 0 : n.baseUrl)
}
const R$ = "sections-db"
  , Wc = "sections-store"
  , D$ = 1;
function Gw() {
    return qb(R$, D$, {
        upgrade(e, t) {
            switch (t) {
            case 0:
                e.createObjectStore(Wc, {
                    keyPath: "sectionId"
                });
            default:
                console.debug("[sections-db] Done upgrading DB")
            }
        }
    })
}
var qw = {};
JSON.parse(qw.REACT_APP_DHIS2_APP_PWA_CACHING_PATTERNS_TO_OMIT_FROM_APP_SHELL || qw.REACT_APP_DHIS2_APP_PWA_CACHING_PATTERNS_TO_OMIT || "[]").map(e => new RegExp(e));
function I$() {
    return self.clients.matchAll({
        includeUncontrolled: !0
    }).then(e => e.filter(t => t.url.startsWith(self.registration.scope)))
}
const M$ = 1e3;
g$(async e => {
    (await I$()).forEach(n => n.postMessage({
        type: jt.dhis2ConnectionStatusUpdate,
        payload: {
            isConnected: e
        }
    }))
}
, M$);
var A$ = {};
JSON.parse(A$.REACT_APP_DHIS2_APP_PWA_CACHING_PATTERNS_TO_OMIT_FROM_CACHEABLE_SECTIONS || "[]").map(e => new RegExp(e));
var n0 = {
    exports: {}
}, Zs = typeof Reflect == "object" ? Reflect : null, Qw = Zs && typeof Zs.apply == "function" ? Zs.apply : function(t, n, r) {
    return Function.prototype.apply.call(t, n, r)
}
, zc;
Zs && typeof Zs.ownKeys == "function" ? zc = Zs.ownKeys : Object.getOwnPropertySymbols ? zc = function(t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
}
: zc = function(t) {
    return Object.getOwnPropertyNames(t)
}
;
function N$(e) {
    console && console.warn && console.warn(e)
}
var Kb = Number.isNaN || function(t) {
    return t !== t
}
;
function rt() {
    rt.init.call(this)
}
n0.exports = rt;
n0.exports.once = F$;
rt.EventEmitter = rt;
rt.prototype._events = void 0;
rt.prototype._eventsCount = 0;
rt.prototype._maxListeners = void 0;
var Kw = 10;
function nd(e) {
    if (typeof e != "function")
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
}
Object.defineProperty(rt, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Kw
    },
    set: function(e) {
        if (typeof e != "number" || e < 0 || Kb(e))
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
        Kw = e
    }
});
rt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null),
    this._eventsCount = 0),
    this._maxListeners = this._maxListeners || void 0
}
;
rt.prototype.setMaxListeners = function(t) {
    if (typeof t != "number" || t < 0 || Kb(t))
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
    return this._maxListeners = t,
    this
}
;
function Zb(e) {
    return e._maxListeners === void 0 ? rt.defaultMaxListeners : e._maxListeners
}
rt.prototype.getMaxListeners = function() {
    return Zb(this)
}
;
rt.prototype.emit = function(t) {
    for (var n = [], r = 1; r < arguments.length; r++)
        n.push(arguments[r]);
    var o = t === "error"
      , s = this._events;
    if (s !== void 0)
        o = o && s.error === void 0;
    else if (!o)
        return !1;
    if (o) {
        var l;
        if (n.length > 0 && (l = n[0]),
        l instanceof Error)
            throw l;
        var c = new Error("Unhandled error." + (l ? " (" + l.message + ")" : ""));
        throw c.context = l,
        c
    }
    var f = s[t];
    if (f === void 0)
        return !1;
    if (typeof f == "function")
        Qw(f, this, n);
    else
        for (var h = f.length, v = nE(f, h), r = 0; r < h; ++r)
            Qw(v[r], this, n);
    return !0
}
;
function Jb(e, t, n, r) {
    var o, s, l;
    if (nd(n),
    s = e._events,
    s === void 0 ? (s = e._events = Object.create(null),
    e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n),
    s = e._events),
    l = s[t]),
    l === void 0)
        l = s[t] = n,
        ++e._eventsCount;
    else if (typeof l == "function" ? l = s[t] = r ? [n, l] : [l, n] : r ? l.unshift(n) : l.push(n),
    o = Zb(e),
    o > 0 && l.length > o && !l.warned) {
        l.warned = !0;
        var c = new Error("Possible EventEmitter memory leak detected. " + l.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        c.name = "MaxListenersExceededWarning",
        c.emitter = e,
        c.type = t,
        c.count = l.length,
        N$(c)
    }
    return e
}
rt.prototype.addListener = function(t, n) {
    return Jb(this, t, n, !1)
}
;
rt.prototype.on = rt.prototype.addListener;
rt.prototype.prependListener = function(t, n) {
    return Jb(this, t, n, !0)
}
;
function L$() {
    if (!this.fired)
        return this.target.removeListener(this.type, this.wrapFn),
        this.fired = !0,
        arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}
function Xb(e, t, n) {
    var r = {
        fired: !1,
        wrapFn: void 0,
        target: e,
        type: t,
        listener: n
    }
      , o = L$.bind(r);
    return o.listener = n,
    r.wrapFn = o,
    o
}
rt.prototype.once = function(t, n) {
    return nd(n),
    this.on(t, Xb(this, t, n)),
    this
}
;
rt.prototype.prependOnceListener = function(t, n) {
    return nd(n),
    this.prependListener(t, Xb(this, t, n)),
    this
}
;
rt.prototype.removeListener = function(t, n) {
    var r, o, s, l, c;
    if (nd(n),
    o = this._events,
    o === void 0)
        return this;
    if (r = o[t],
    r === void 0)
        return this;
    if (r === n || r.listener === n)
        --this._eventsCount === 0 ? this._events = Object.create(null) : (delete o[t],
        o.removeListener && this.emit("removeListener", t, r.listener || n));
    else if (typeof r != "function") {
        for (s = -1,
        l = r.length - 1; l >= 0; l--)
            if (r[l] === n || r[l].listener === n) {
                c = r[l].listener,
                s = l;
                break
            }
        if (s < 0)
            return this;
        s === 0 ? r.shift() : j$(r, s),
        r.length === 1 && (o[t] = r[0]),
        o.removeListener !== void 0 && this.emit("removeListener", t, c || n)
    }
    return this
}
;
rt.prototype.off = rt.prototype.removeListener;
rt.prototype.removeAllListeners = function(t) {
    var n, r, o;
    if (r = this._events,
    r === void 0)
        return this;
    if (r.removeListener === void 0)
        return arguments.length === 0 ? (this._events = Object.create(null),
        this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[t]),
        this;
    if (arguments.length === 0) {
        var s = Object.keys(r), l;
        for (o = 0; o < s.length; ++o)
            l = s[o],
            l !== "removeListener" && this.removeAllListeners(l);
        return this.removeAllListeners("removeListener"),
        this._events = Object.create(null),
        this._eventsCount = 0,
        this
    }
    if (n = r[t],
    typeof n == "function")
        this.removeListener(t, n);
    else if (n !== void 0)
        for (o = n.length - 1; o >= 0; o--)
            this.removeListener(t, n[o]);
    return this
}
;
function eE(e, t, n) {
    var r = e._events;
    if (r === void 0)
        return [];
    var o = r[t];
    return o === void 0 ? [] : typeof o == "function" ? n ? [o.listener || o] : [o] : n ? $$(o) : nE(o, o.length)
}
rt.prototype.listeners = function(t) {
    return eE(this, t, !0)
}
;
rt.prototype.rawListeners = function(t) {
    return eE(this, t, !1)
}
;
rt.listenerCount = function(e, t) {
    return typeof e.listenerCount == "function" ? e.listenerCount(t) : tE.call(e, t)
}
;
rt.prototype.listenerCount = tE;
function tE(e) {
    var t = this._events;
    if (t !== void 0) {
        var n = t[e];
        if (typeof n == "function")
            return 1;
        if (n !== void 0)
            return n.length
    }
    return 0
}
rt.prototype.eventNames = function() {
    return this._eventsCount > 0 ? zc(this._events) : []
}
;
function nE(e, t) {
    for (var n = new Array(t), r = 0; r < t; ++r)
        n[r] = e[r];
    return n
}
function j$(e, t) {
    for (; t + 1 < e.length; t++)
        e[t] = e[t + 1];
    e.pop()
}
function $$(e) {
    for (var t = new Array(e.length), n = 0; n < t.length; ++n)
        t[n] = e[n].listener || e[n];
    return t
}
function F$(e, t) {
    return new Promise(function(n, r) {
        function o(l) {
            e.removeListener(t, s),
            r(l)
        }
        function s() {
            typeof e.removeListener == "function" && e.removeListener("error", o),
            n([].slice.call(arguments))
        }
        rE(e, t, s, {
            once: !0
        }),
        t !== "error" && W$(e, o, {
            once: !0
        })
    }
    )
}
function W$(e, t, n) {
    typeof e.on == "function" && rE(e, "error", t, n)
}
function rE(e, t, n, r) {
    if (typeof e.on == "function")
        r.once ? e.once(t, n) : e.on(t, n);
    else if (typeof e.addEventListener == "function")
        e.addEventListener(t, function o(s) {
            r.once && e.removeEventListener(t, o),
            n(s)
        });
    else
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
}
var z$ = n0.exports;
const U$ = Jo(z$)
  , Y$ = "UNREGISTERED"
  , iE = "WAITING"
  , oE = "FIRST_ACTIVATION"
  , B$ = "ACTIVE";
async function H$() {
    if ("serviceWorker" in navigator)
        return await navigator.serviceWorker.getRegistration()
}
async function V$() {
    const e = await H$();
    if (e) {
        if (e.waiting)
            return iE;
        if (e.active)
            return navigator.serviceWorker.controller === null ? oE : B$
    } else
        return Y$
}
async function sE(e) {
    let {onUpdate: t, targetServiceWorker: n} = e;
    if (!("serviceWorker" in navigator) && !n)
        return;
    const r = n || navigator.serviceWorker;
    let o = await r.getRegistration();
    if (o === void 0 && (await new Promise(f => setTimeout(f, 500)),
    o = await r.getRegistration(),
    o === void 0))
        return;
    function s() {
        console.log("New content is available and will be used when all tabs for this page are closed."),
        t && t({
            registration: o
        })
    }
    function l() {
        console.log("This app is ready for offline usage. Refresh to use offline features."),
        t && t({
            registration: o,
            firstActivation: !0
        })
    }
    o.waiting ? s() : o.active && r.controller === null && l();
    function c() {
        const f = o.installing;
        f && f.addEventListener("statechange", () => {
            f.state === "installed" && r.controller ? s() : f.state === "activated" && !r.controller && l()
        }
        )
    }
    o.installing && c(),
    o.addEventListener("updatefound", c)
}
async function G$() {
    const e = () => window.location.reload();
    if (!("serviceWorker" in navigator))
        return e();
    const t = await navigator.serviceWorker.getRegistration();
    if (t === void 0 || !t.waiting && !t.installing)
        return e();
    sE({
        onUpdate: n => {
            navigator.serviceWorker.oncontrollerchange = e,
            n.waiting.postMessage({
                type: "SKIP_WAITING"
            })
        }
    })
}
function q$(e) {
    const t = !!(window.location.hostname === "localhost" || window.location.hostname === "[::1]" || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    if ("serviceWorker" in navigator) {
        const n = new URL(".",window.location.href);
        if (n.origin !== window.location.origin)
            return;
        const r = () => {
            const o = new URL("service-worker.js",n);
            t ? (Q$(o),
            navigator.serviceWorker.ready.then( () => {
                console.log("This web app is using a service worker. If this is a production environment, it is being served cache-first. Learn more at https://cra.link/PWA")
            }
            )) : aE(o)
        }
        ;
        document.readyState === "complete" ? r() : window.addEventListener("load", r)
    }
}
async function aE(e) {
    navigator.serviceWorker.register(e).catch(t => {
        console.error("Error during service worker registration:", t)
    }
    )
}
function Q$(e, t) {
    fetch(e, {
        headers: {
            "Service-Worker": "script"
        }
    }).then(n => {
        const r = n.headers.get("content-type");
        n.status === 404 || r != null && r.indexOf("javascript") === -1 ? navigator.serviceWorker.ready.then(o => {
            o.unregister().then( () => {
                window.location.reload()
            }
            )
        }
        ) : aE(e)
    }
    ).catch( () => {
        console.log("No internet connection found. App is running in offline mode.")
    }
    )
}
function K$() {
    return "serviceWorker" in navigator ? navigator.serviceWorker.ready.then(e => {
        e.unregister()
    }
    ).catch(e => {
        console.error(e.message)
    }
    ) : Promise.resolve()
}
const Z$ = !0;
function sl() {
    if ("serviceWorker" in navigator)
        return !0;
    const e = (window.isSecureContext ? "`serviceWorker` is not available on `navigator`." : "This window is not a secure context -- see https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts.") + " PWA features will not work.";
    return console.error(new Error(e)),
    !1
}
function J$() {
    return !0
}
function mp() {
    return sl() && J$()
}
function vp(e, t) {
    if (!navigator.serviceWorker.controller)
        throw new Error("[Offine interface] Cannot send service worker message - no service worker is controlling this page.");
    navigator.serviceWorker.controller.postMessage({
        type: e,
        payload: t
    })
}
class X$ {
    constructor() {
        if (this.pwaEnabled = Z$,
        this.latestIsConnected = null,
        this.pwaEnabled ? q$() : K$(),
        !sl()) {
            this.ready = Promise.resolve(),
            this.latestIsConnected = !0;
            return
        }
        let t;
        navigator.serviceWorker.oncontrollerchange = () => {
            t || (t = !0,
            window.location.reload())
        }
        ,
        this.offlineEvents = new U$;
        const n = r => {
            if (!r.data)
                return;
            const {type: o, payload: s} = r.data;
            this.offlineEvents.emit(o, s)
        }
        ;
        navigator.serviceWorker.addEventListener("message", n),
        this.ready = this.pwaEnabled ? new Promise(r => {
            this.offlineEvents.on(jt.dhis2ConnectionStatusUpdate, o => {
                let {isConnected: s} = o;
                const l = this.latestIsConnected === null;
                this.latestIsConnected = s,
                l && r()
            }
            );
            try {
                vp(jt.getImmediateDhis2ConnectionStatusUpdate)
            } catch {
                this.latestIsConnected = !0,
                r()
            }
        }
        ) : Promise.resolve()
    }
    checkForNewSW(t) {
        let {onNewSW: n} = t;
        sE({
            onUpdate: n
        })
    }
    async getRegistrationState() {
        return await V$()
    }
    getClientsInfo() {
        return sl() ? new Promise( (t, n) => {
            navigator.serviceWorker.getRegistration().then(r => {
                const o = (r == null ? void 0 : r.waiting) || (r == null ? void 0 : r.active);
                if (!o) {
                    t({
                        clientsCount: 0
                    });
                    return
                }
                o.postMessage({
                    type: jt.getClientsInfo
                }),
                this.offlineEvents.once(jt.clientsInfo, t),
                setTimeout( () => {
                    n("Request for clients info timed out"),
                    this.offlineEvents.removeAllListeners(jt.clientsInfo)
                }
                , 2e3)
            }
            )
        }
        ) : Promise.resolve({
            clientsCount: 0
        })
    }
    useNewSW() {
        return sl() ? navigator.serviceWorker.getRegistration().then(t => {
            if (!t)
                throw new Error("No service worker is registered");
            t.waiting ? t.waiting.postMessage({
                type: jt.skipWaiting
            }) : t.active && t.active.postMessage({
                type: jt.claimClients
            })
        }
        ) : Promise.resolve()
    }
    subscribeToDhis2ConnectionStatus(t) {
        let {onUpdate: n} = t;
        return sl() ? (this.offlineEvents.on(jt.dhis2ConnectionStatusUpdate, n),
        () => this.offlineEvents.off(jt.dhis2ConnectionStatusUpdate, n)) : () => {}
    }
    async startRecording(t) {
        let {sectionId: n, recordingTimeoutDelay: r, onStarted: o, onCompleted: s, onError: l} = t;
        if (!mp())
            return;
        if (!n || !o || !s || !l)
            throw new Error("[Offline interface] The options { sectionId, onStarted, onCompleted, onError } are required when calling startRecording()");
        vp(jt.startRecording, {
            sectionId: n,
            recordingTimeoutDelay: r
        });
        const c = () => {
            [jt.recordingStarted, jt.recordingError, jt.recordingCompleted, jt.confirmRecordingCompletion].forEach(h => this.offlineEvents.removeAllListeners(h))
        }
        ;
        this.offlineEvents.once(jt.recordingStarted, o),
        this.offlineEvents.once(jt.confirmRecordingCompletion, () => vp(jt.completeRecording)),
        this.offlineEvents.once(jt.recordingCompleted, () => {
            c(),
            s()
        }
        ),
        this.offlineEvents.once(jt.recordingError, f => {
            let {msg: h} = f;
            c();
            const v = new Error(h);
            l(v)
        }
        )
    }
    async getCachedSections() {
        if (!mp())
            return [];
        await navigator.serviceWorker.ready,
        this.dbPromise === void 0 && (this.dbPromise = Gw());
        const n = await (await this.dbPromise).getAll(Wc)
          , r = await caches.keys();
        return n.filter(s => r.includes(s.sectionId))
    }
    async removeSection(t) {
        if (!mp())
            return !1;
        if (!t)
            throw new Error("No section ID specified to delete");
        await navigator.serviceWorker.ready,
        this.dbPromise === void 0 && (this.dbPromise = Gw());
        const n = await this.dbPromise
          , r = await n.count(Wc, t);
        return Promise.all([caches.delete(t), !!r && n.delete(Wc, t).then( () => !0)]).then(o => {
            let[s,l] = o;
            return s || l
        }
        )
    }
}
const lE = ee.createContext(null);
let yp = null;
const uE = e => {
    let {children: t} = e;
    return yp === null && (yp = new X$),
    I.createElement(lE.Provider, {
        value: yp
    }, t)
}
;
uE.propTypes = {
    children: b.node
};
const cE = () => ee.useContext(lE);
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var fE;
function ce() {
    return fE.apply(null, arguments)
}
function e7(e) {
    fE = e
}
function Mr(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
}
function Vo(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]"
}
function He(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}
function r0(e) {
    if (Object.getOwnPropertyNames)
        return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e)
        if (He(e, t))
            return !1;
    return !0
}
function Rn(e) {
    return e === void 0
}
function Ri(e) {
    return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]"
}
function eu(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
}
function dE(e, t) {
    var n = [], r, o = e.length;
    for (r = 0; r < o; ++r)
        n.push(t(e[r], r));
    return n
}
function eo(e, t) {
    for (var n in t)
        He(t, n) && (e[n] = t[n]);
    return He(t, "toString") && (e.toString = t.toString),
    He(t, "valueOf") && (e.valueOf = t.valueOf),
    e
}
function ni(e, t, n, r) {
    return NE(e, t, n, r, !0).utc()
}
function t7() {
    return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: !1,
        weekdayMismatch: !1
    }
}
function Me(e) {
    return e._pf == null && (e._pf = t7()),
    e._pf
}
var Ag;
Array.prototype.some ? Ag = Array.prototype.some : Ag = function(e) {
    var t = Object(this), n = t.length >>> 0, r;
    for (r = 0; r < n; r++)
        if (r in t && e.call(this, t[r], r, t))
            return !0;
    return !1
}
;
function i0(e) {
    var t = null
      , n = !1
      , r = e._d && !isNaN(e._d.getTime());
    if (r && (t = Me(e),
    n = Ag.call(t.parsedDateParts, function(o) {
        return o != null
    }),
    r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n),
    e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)),
    Object.isFrozen == null || !Object.isFrozen(e))
        e._isValid = r;
    else
        return r;
    return e._isValid
}
function rd(e) {
    var t = ni(NaN);
    return e != null ? eo(Me(t), e) : Me(t).userInvalidated = !0,
    t
}
var Zw = ce.momentProperties = []
  , wp = !1;
function o0(e, t) {
    var n, r, o, s = Zw.length;
    if (Rn(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
    Rn(t._i) || (e._i = t._i),
    Rn(t._f) || (e._f = t._f),
    Rn(t._l) || (e._l = t._l),
    Rn(t._strict) || (e._strict = t._strict),
    Rn(t._tzm) || (e._tzm = t._tzm),
    Rn(t._isUTC) || (e._isUTC = t._isUTC),
    Rn(t._offset) || (e._offset = t._offset),
    Rn(t._pf) || (e._pf = Me(t)),
    Rn(t._locale) || (e._locale = t._locale),
    s > 0)
        for (n = 0; n < s; n++)
            r = Zw[n],
            o = t[r],
            Rn(o) || (e[r] = o);
    return e
}
function tu(e) {
    o0(this, e),
    this._d = new Date(e._d != null ? e._d.getTime() : NaN),
    this.isValid() || (this._d = new Date(NaN)),
    wp === !1 && (wp = !0,
    ce.updateOffset(this),
    wp = !1)
}
function Ar(e) {
    return e instanceof tu || e != null && e._isAMomentObject != null
}
function hE(e) {
    ce.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e)
}
function vr(e, t) {
    var n = !0;
    return eo(function() {
        if (ce.deprecationHandler != null && ce.deprecationHandler(null, e),
        n) {
            var r = [], o, s, l, c = arguments.length;
            for (s = 0; s < c; s++) {
                if (o = "",
                typeof arguments[s] == "object") {
                    o += `
[` + s + "] ";
                    for (l in arguments[0])
                        He(arguments[0], l) && (o += l + ": " + arguments[0][l] + ", ");
                    o = o.slice(0, -2)
                } else
                    o = arguments[s];
                r.push(o)
            }
            hE(e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack),
            n = !1
        }
        return t.apply(this, arguments)
    }, t)
}
var Jw = {};
function pE(e, t) {
    ce.deprecationHandler != null && ce.deprecationHandler(e, t),
    Jw[e] || (hE(t),
    Jw[e] = !0)
}
ce.suppressDeprecationWarnings = !1;
ce.deprecationHandler = null;
function ri(e) {
    return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
}
function n7(e) {
    var t, n;
    for (n in e)
        He(e, n) && (t = e[n],
        ri(t) ? this[n] = t : this["_" + n] = t);
    this._config = e,
    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
}
function Ng(e, t) {
    var n = eo({}, e), r;
    for (r in t)
        He(t, r) && (Vo(e[r]) && Vo(t[r]) ? (n[r] = {},
        eo(n[r], e[r]),
        eo(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
    for (r in e)
        He(e, r) && !He(t, r) && Vo(e[r]) && (n[r] = eo({}, n[r]));
    return n
}
function s0(e) {
    e != null && this.set(e)
}
var Lg;
Object.keys ? Lg = Object.keys : Lg = function(e) {
    var t, n = [];
    for (t in e)
        He(e, t) && n.push(t);
    return n
}
;
var r7 = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
};
function i7(e, t, n) {
    var r = this._calendar[e] || this._calendar.sameElse;
    return ri(r) ? r.call(t, n) : r
}
function ei(e, t, n) {
    var r = "" + Math.abs(e)
      , o = t - r.length
      , s = e >= 0;
    return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r
}
var a0 = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
  , Sc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
  , _p = {}
  , Js = {};
function xe(e, t, n, r) {
    var o = r;
    typeof r == "string" && (o = function() {
        return this[r]()
    }
    ),
    e && (Js[e] = o),
    t && (Js[t[0]] = function() {
        return ei(o.apply(this, arguments), t[1], t[2])
    }
    ),
    n && (Js[n] = function() {
        return this.localeData().ordinal(o.apply(this, arguments), e)
    }
    )
}
function o7(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
}
function s7(e) {
    var t = e.match(a0), n, r;
    for (n = 0,
    r = t.length; n < r; n++)
        Js[t[n]] ? t[n] = Js[t[n]] : t[n] = o7(t[n]);
    return function(o) {
        var s = "", l;
        for (l = 0; l < r; l++)
            s += ri(t[l]) ? t[l].call(o, e) : t[l];
        return s
    }
}
function Uc(e, t) {
    return e.isValid() ? (t = gE(t, e.localeData()),
    _p[t] = _p[t] || s7(t),
    _p[t](e)) : e.localeData().invalidDate()
}
function gE(e, t) {
    var n = 5;
    function r(o) {
        return t.longDateFormat(o) || o
    }
    for (Sc.lastIndex = 0; n >= 0 && Sc.test(e); )
        e = e.replace(Sc, r),
        Sc.lastIndex = 0,
        n -= 1;
    return e
}
var a7 = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function l7(e) {
    var t = this._longDateFormat[e]
      , n = this._longDateFormat[e.toUpperCase()];
    return t || !n ? t : (this._longDateFormat[e] = n.match(a0).map(function(r) {
        return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r
    }).join(""),
    this._longDateFormat[e])
}
var u7 = "Invalid date";
function c7() {
    return this._invalidDate
}
var f7 = "%d"
  , d7 = /\d{1,2}/;
function h7(e) {
    return this._ordinal.replace("%d", e)
}
var p7 = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
};
function g7(e, t, n, r) {
    var o = this._relativeTime[n];
    return ri(o) ? o(e, t, n, r) : o.replace(/%d/i, e)
}
function m7(e, t) {
    var n = this._relativeTime[e > 0 ? "future" : "past"];
    return ri(n) ? n(t) : n.replace(/%s/i, t)
}
var Xw = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year"
};
function yr(e) {
    return typeof e == "string" ? Xw[e] || Xw[e.toLowerCase()] : void 0
}
function l0(e) {
    var t = {}, n, r;
    for (r in e)
        He(e, r) && (n = yr(r),
        n && (t[n] = e[r]));
    return t
}
var v7 = {
    date: 9,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    dayOfYear: 4,
    hour: 13,
    millisecond: 16,
    minute: 14,
    month: 8,
    quarter: 7,
    second: 15,
    weekYear: 1,
    isoWeekYear: 1,
    week: 5,
    isoWeek: 5,
    year: 1
};
function y7(e) {
    var t = [], n;
    for (n in e)
        He(e, n) && t.push({
            unit: n,
            priority: v7[n]
        });
    return t.sort(function(r, o) {
        return r.priority - o.priority
    }),
    t
}
var mE = /\d/, Zn = /\d\d/, vE = /\d{3}/, u0 = /\d{4}/, id = /[+-]?\d{6}/, pt = /\d\d?/, yE = /\d\d\d\d?/, wE = /\d\d\d\d\d\d?/, od = /\d{1,3}/, c0 = /\d{1,4}/, sd = /[+-]?\d{1,6}/, _a = /\d+/, ad = /[+-]?\d+/, w7 = /Z|[+-]\d\d:?\d\d/gi, ld = /Z|[+-]\d\d(?::?\d\d)?/gi, _7 = /[+-]?\d+(\.\d{1,3})?/, nu = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, xa = /^[1-9]\d?/, f0 = /^([1-9]\d|\d)/, kf;
kf = {};
function pe(e, t, n) {
    kf[e] = ri(t) ? t : function(r, o) {
        return r && n ? n : t
    }
}
function x7(e, t) {
    return He(kf, e) ? kf[e](t._strict, t._locale) : new RegExp(S7(e))
}
function S7(e) {
    return Ei(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, n, r, o, s) {
        return n || r || o || s
    }))
}
function Ei(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}
function dr(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
}
function We(e) {
    var t = +e
      , n = 0;
    return t !== 0 && isFinite(t) && (n = dr(t)),
    n
}
var jg = {};
function it(e, t) {
    var n, r = t, o;
    for (typeof e == "string" && (e = [e]),
    Ri(t) && (r = function(s, l) {
        l[t] = We(s)
    }
    ),
    o = e.length,
    n = 0; n < o; n++)
        jg[e[n]] = r
}
function ru(e, t) {
    it(e, function(n, r, o, s) {
        o._w = o._w || {},
        t(n, o._w, o, s)
    })
}
function b7(e, t, n) {
    t != null && He(jg, e) && jg[e](t, n._a, n, e)
}
function ud(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
}
var fn = 0
  , xi = 1
  , Qr = 2
  , Vt = 3
  , Pr = 4
  , Si = 5
  , Yo = 6
  , E7 = 7
  , k7 = 8;
xe("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? ei(e, 4) : "+" + e
});
xe(0, ["YY", 2], 0, function() {
    return this.year() % 100
});
xe(0, ["YYYY", 4], 0, "year");
xe(0, ["YYYYY", 5], 0, "year");
xe(0, ["YYYYYY", 6, !0], 0, "year");
pe("Y", ad);
pe("YY", pt, Zn);
pe("YYYY", c0, u0);
pe("YYYYY", sd, id);
pe("YYYYYY", sd, id);
it(["YYYYY", "YYYYYY"], fn);
it("YYYY", function(e, t) {
    t[fn] = e.length === 2 ? ce.parseTwoDigitYear(e) : We(e)
});
it("YY", function(e, t) {
    t[fn] = ce.parseTwoDigitYear(e)
});
it("Y", function(e, t) {
    t[fn] = parseInt(e, 10)
});
function _l(e) {
    return ud(e) ? 366 : 365
}
ce.parseTwoDigitYear = function(e) {
    return We(e) + (We(e) > 68 ? 1900 : 2e3)
}
;
var _E = Sa("FullYear", !0);
function C7() {
    return ud(this.year())
}
function Sa(e, t) {
    return function(n) {
        return n != null ? (xE(this, e, n),
        ce.updateOffset(this, t),
        this) : Fl(this, e)
    }
}
function Fl(e, t) {
    if (!e.isValid())
        return NaN;
    var n = e._d
      , r = e._isUTC;
    switch (t) {
    case "Milliseconds":
        return r ? n.getUTCMilliseconds() : n.getMilliseconds();
    case "Seconds":
        return r ? n.getUTCSeconds() : n.getSeconds();
    case "Minutes":
        return r ? n.getUTCMinutes() : n.getMinutes();
    case "Hours":
        return r ? n.getUTCHours() : n.getHours();
    case "Date":
        return r ? n.getUTCDate() : n.getDate();
    case "Day":
        return r ? n.getUTCDay() : n.getDay();
    case "Month":
        return r ? n.getUTCMonth() : n.getMonth();
    case "FullYear":
        return r ? n.getUTCFullYear() : n.getFullYear();
    default:
        return NaN
    }
}
function xE(e, t, n) {
    var r, o, s, l, c;
    if (!(!e.isValid() || isNaN(n))) {
        switch (r = e._d,
        o = e._isUTC,
        t) {
        case "Milliseconds":
            return void (o ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
        case "Seconds":
            return void (o ? r.setUTCSeconds(n) : r.setSeconds(n));
        case "Minutes":
            return void (o ? r.setUTCMinutes(n) : r.setMinutes(n));
        case "Hours":
            return void (o ? r.setUTCHours(n) : r.setHours(n));
        case "Date":
            return void (o ? r.setUTCDate(n) : r.setDate(n));
        case "FullYear":
            break;
        default:
            return
        }
        s = n,
        l = e.month(),
        c = e.date(),
        c = c === 29 && l === 1 && !ud(s) ? 28 : c,
        o ? r.setUTCFullYear(s, l, c) : r.setFullYear(s, l, c)
    }
}
function O7(e) {
    return e = yr(e),
    ri(this[e]) ? this[e]() : this
}
function T7(e, t) {
    if (typeof e == "object") {
        e = l0(e);
        var n = y7(e), r, o = n.length;
        for (r = 0; r < o; r++)
            this[n[r].unit](e[n[r].unit])
    } else if (e = yr(e),
    ri(this[e]))
        return this[e](t);
    return this
}
function P7(e, t) {
    return (e % t + t) % t
}
var At;
Array.prototype.indexOf ? At = Array.prototype.indexOf : At = function(e) {
    var t;
    for (t = 0; t < this.length; ++t)
        if (this[t] === e)
            return t;
    return -1
}
;
function d0(e, t) {
    if (isNaN(e) || isNaN(t))
        return NaN;
    var n = P7(t, 12);
    return e += (t - n) / 12,
    n === 1 ? ud(e) ? 29 : 28 : 31 - n % 7 % 2
}
xe("M", ["MM", 2], "Mo", function() {
    return this.month() + 1
});
xe("MMM", 0, 0, function(e) {
    return this.localeData().monthsShort(this, e)
});
xe("MMMM", 0, 0, function(e) {
    return this.localeData().months(this, e)
});
pe("M", pt, xa);
pe("MM", pt, Zn);
pe("MMM", function(e, t) {
    return t.monthsShortRegex(e)
});
pe("MMMM", function(e, t) {
    return t.monthsRegex(e)
});
it(["M", "MM"], function(e, t) {
    t[xi] = We(e) - 1
});
it(["MMM", "MMMM"], function(e, t, n, r) {
    var o = n._locale.monthsParse(e, r, n._strict);
    o != null ? t[xi] = o : Me(n).invalidMonth = e
});
var R7 = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
  , SE = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
  , bE = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
  , D7 = nu
  , I7 = nu;
function M7(e, t) {
    return e ? Mr(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || bE).test(t) ? "format" : "standalone"][e.month()] : Mr(this._months) ? this._months : this._months.standalone
}
function A7(e, t) {
    return e ? Mr(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[bE.test(t) ? "format" : "standalone"][e.month()] : Mr(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
}
function N7(e, t, n) {
    var r, o, s, l = e.toLocaleLowerCase();
    if (!this._monthsParse)
        for (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = [],
        r = 0; r < 12; ++r)
            s = ni([2e3, r]),
            this._shortMonthsParse[r] = this.monthsShort(s, "").toLocaleLowerCase(),
            this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
    return n ? t === "MMM" ? (o = At.call(this._shortMonthsParse, l),
    o !== -1 ? o : null) : (o = At.call(this._longMonthsParse, l),
    o !== -1 ? o : null) : t === "MMM" ? (o = At.call(this._shortMonthsParse, l),
    o !== -1 ? o : (o = At.call(this._longMonthsParse, l),
    o !== -1 ? o : null)) : (o = At.call(this._longMonthsParse, l),
    o !== -1 ? o : (o = At.call(this._shortMonthsParse, l),
    o !== -1 ? o : null))
}
function L7(e, t, n) {
    var r, o, s;
    if (this._monthsParseExact)
        return N7.call(this, e, t, n);
    for (this._monthsParse || (this._monthsParse = [],
    this._longMonthsParse = [],
    this._shortMonthsParse = []),
    r = 0; r < 12; r++) {
        if (o = ni([2e3, r]),
        n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(o, "").replace(".", "") + "$","i"),
        this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$","i")),
        !n && !this._monthsParse[r] && (s = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""),
        this._monthsParse[r] = new RegExp(s.replace(".", ""),"i")),
        n && t === "MMMM" && this._longMonthsParse[r].test(e))
            return r;
        if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
            return r;
        if (!n && this._monthsParse[r].test(e))
            return r
    }
}
function EE(e, t) {
    if (!e.isValid())
        return e;
    if (typeof t == "string") {
        if (/^\d+$/.test(t))
            t = We(t);
        else if (t = e.localeData().monthsParse(t),
        !Ri(t))
            return e
    }
    var n = t
      , r = e.date();
    return r = r < 29 ? r : Math.min(r, d0(e.year(), n)),
    e._isUTC ? e._d.setUTCMonth(n, r) : e._d.setMonth(n, r),
    e
}
function kE(e) {
    return e != null ? (EE(this, e),
    ce.updateOffset(this, !0),
    this) : Fl(this, "Month")
}
function j7() {
    return d0(this.year(), this.month())
}
function $7(e) {
    return this._monthsParseExact ? (He(this, "_monthsRegex") || CE.call(this),
    e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (He(this, "_monthsShortRegex") || (this._monthsShortRegex = D7),
    this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
}
function F7(e) {
    return this._monthsParseExact ? (He(this, "_monthsRegex") || CE.call(this),
    e ? this._monthsStrictRegex : this._monthsRegex) : (He(this, "_monthsRegex") || (this._monthsRegex = I7),
    this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
}
function CE() {
    function e(f, h) {
        return h.length - f.length
    }
    var t = [], n = [], r = [], o, s, l, c;
    for (o = 0; o < 12; o++)
        s = ni([2e3, o]),
        l = Ei(this.monthsShort(s, "")),
        c = Ei(this.months(s, "")),
        t.push(l),
        n.push(c),
        r.push(c),
        r.push(l);
    t.sort(e),
    n.sort(e),
    r.sort(e),
    this._monthsRegex = new RegExp("^(" + r.join("|") + ")","i"),
    this._monthsShortRegex = this._monthsRegex,
    this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")","i"),
    this._monthsShortStrictRegex = new RegExp("^(" + t.join("|") + ")","i")
}
function W7(e, t, n, r, o, s, l) {
    var c;
    return e < 100 && e >= 0 ? (c = new Date(e + 400,t,n,r,o,s,l),
    isFinite(c.getFullYear()) && c.setFullYear(e)) : c = new Date(e,t,n,r,o,s,l),
    c
}
function Wl(e) {
    var t, n;
    return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments),
    n[0] = e + 400,
    t = new Date(Date.UTC.apply(null, n)),
    isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)),
    t
}
function Cf(e, t, n) {
    var r = 7 + t - n
      , o = (7 + Wl(e, 0, r).getUTCDay() - t) % 7;
    return -o + r - 1
}
function OE(e, t, n, r, o) {
    var s = (7 + n - r) % 7, l = Cf(e, r, o), c = 1 + 7 * (t - 1) + s + l, f, h;
    return c <= 0 ? (f = e - 1,
    h = _l(f) + c) : c > _l(e) ? (f = e + 1,
    h = c - _l(e)) : (f = e,
    h = c),
    {
        year: f,
        dayOfYear: h
    }
}
function zl(e, t, n) {
    var r = Cf(e.year(), t, n), o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, s, l;
    return o < 1 ? (l = e.year() - 1,
    s = o + ki(l, t, n)) : o > ki(e.year(), t, n) ? (s = o - ki(e.year(), t, n),
    l = e.year() + 1) : (l = e.year(),
    s = o),
    {
        week: s,
        year: l
    }
}
function ki(e, t, n) {
    var r = Cf(e, t, n)
      , o = Cf(e + 1, t, n);
    return (_l(e) - r + o) / 7
}
xe("w", ["ww", 2], "wo", "week");
xe("W", ["WW", 2], "Wo", "isoWeek");
pe("w", pt, xa);
pe("ww", pt, Zn);
pe("W", pt, xa);
pe("WW", pt, Zn);
ru(["w", "ww", "W", "WW"], function(e, t, n, r) {
    t[r.substr(0, 1)] = We(e)
});
function z7(e) {
    return zl(e, this._week.dow, this._week.doy).week
}
var U7 = {
    dow: 0,
    doy: 6
};
function Y7() {
    return this._week.dow
}
function B7() {
    return this._week.doy
}
function H7(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d")
}
function V7(e) {
    var t = zl(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d")
}
xe("d", 0, "do", "day");
xe("dd", 0, 0, function(e) {
    return this.localeData().weekdaysMin(this, e)
});
xe("ddd", 0, 0, function(e) {
    return this.localeData().weekdaysShort(this, e)
});
xe("dddd", 0, 0, function(e) {
    return this.localeData().weekdays(this, e)
});
xe("e", 0, 0, "weekday");
xe("E", 0, 0, "isoWeekday");
pe("d", pt);
pe("e", pt);
pe("E", pt);
pe("dd", function(e, t) {
    return t.weekdaysMinRegex(e)
});
pe("ddd", function(e, t) {
    return t.weekdaysShortRegex(e)
});
pe("dddd", function(e, t) {
    return t.weekdaysRegex(e)
});
ru(["dd", "ddd", "dddd"], function(e, t, n, r) {
    var o = n._locale.weekdaysParse(e, r, n._strict);
    o != null ? t.d = o : Me(n).invalidWeekday = e
});
ru(["d", "e", "E"], function(e, t, n, r) {
    t[r] = We(e)
});
function G7(e, t) {
    return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e),
    typeof e == "number" ? e : null) : parseInt(e, 10)
}
function q7(e, t) {
    return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
}
function h0(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t))
}
var Q7 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
  , TE = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
  , K7 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
  , Z7 = nu
  , J7 = nu
  , X7 = nu;
function e8(e, t) {
    var n = Mr(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return e === !0 ? h0(n, this._week.dow) : e ? n[e.day()] : n
}
function t8(e) {
    return e === !0 ? h0(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
}
function n8(e) {
    return e === !0 ? h0(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
}
function r8(e, t, n) {
    var r, o, s, l = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
        for (this._weekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._minWeekdaysParse = [],
        r = 0; r < 7; ++r)
            s = ni([2e3, 1]).day(r),
            this._minWeekdaysParse[r] = this.weekdaysMin(s, "").toLocaleLowerCase(),
            this._shortWeekdaysParse[r] = this.weekdaysShort(s, "").toLocaleLowerCase(),
            this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
    return n ? t === "dddd" ? (o = At.call(this._weekdaysParse, l),
    o !== -1 ? o : null) : t === "ddd" ? (o = At.call(this._shortWeekdaysParse, l),
    o !== -1 ? o : null) : (o = At.call(this._minWeekdaysParse, l),
    o !== -1 ? o : null) : t === "dddd" ? (o = At.call(this._weekdaysParse, l),
    o !== -1 || (o = At.call(this._shortWeekdaysParse, l),
    o !== -1) ? o : (o = At.call(this._minWeekdaysParse, l),
    o !== -1 ? o : null)) : t === "ddd" ? (o = At.call(this._shortWeekdaysParse, l),
    o !== -1 || (o = At.call(this._weekdaysParse, l),
    o !== -1) ? o : (o = At.call(this._minWeekdaysParse, l),
    o !== -1 ? o : null)) : (o = At.call(this._minWeekdaysParse, l),
    o !== -1 || (o = At.call(this._weekdaysParse, l),
    o !== -1) ? o : (o = At.call(this._shortWeekdaysParse, l),
    o !== -1 ? o : null))
}
function i8(e, t, n) {
    var r, o, s;
    if (this._weekdaysParseExact)
        return r8.call(this, e, t, n);
    for (this._weekdaysParse || (this._weekdaysParse = [],
    this._minWeekdaysParse = [],
    this._shortWeekdaysParse = [],
    this._fullWeekdaysParse = []),
    r = 0; r < 7; r++) {
        if (o = ni([2e3, 1]).day(r),
        n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(o, "").replace(".", "\\.?") + "$","i"),
        this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", "\\.?") + "$","i"),
        this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", "\\.?") + "$","i")),
        this._weekdaysParse[r] || (s = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""),
        this._weekdaysParse[r] = new RegExp(s.replace(".", ""),"i")),
        n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
            return r;
        if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
            return r;
        if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
            return r;
        if (!n && this._weekdaysParse[r].test(e))
            return r
    }
}
function o8(e) {
    if (!this.isValid())
        return e != null ? this : NaN;
    var t = Fl(this, "Day");
    return e != null ? (e = G7(e, this.localeData()),
    this.add(e - t, "d")) : t
}
function s8(e) {
    if (!this.isValid())
        return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d")
}
function a8(e) {
    if (!this.isValid())
        return e != null ? this : NaN;
    if (e != null) {
        var t = q7(e, this.localeData());
        return this.day(this.day() % 7 ? t : t - 7)
    } else
        return this.day() || 7
}
function l8(e) {
    return this._weekdaysParseExact ? (He(this, "_weekdaysRegex") || p0.call(this),
    e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (He(this, "_weekdaysRegex") || (this._weekdaysRegex = Z7),
    this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
}
function u8(e) {
    return this._weekdaysParseExact ? (He(this, "_weekdaysRegex") || p0.call(this),
    e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (He(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = J7),
    this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
}
function c8(e) {
    return this._weekdaysParseExact ? (He(this, "_weekdaysRegex") || p0.call(this),
    e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (He(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = X7),
    this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
}
function p0() {
    function e(v, m) {
        return m.length - v.length
    }
    var t = [], n = [], r = [], o = [], s, l, c, f, h;
    for (s = 0; s < 7; s++)
        l = ni([2e3, 1]).day(s),
        c = Ei(this.weekdaysMin(l, "")),
        f = Ei(this.weekdaysShort(l, "")),
        h = Ei(this.weekdays(l, "")),
        t.push(c),
        n.push(f),
        r.push(h),
        o.push(c),
        o.push(f),
        o.push(h);
    t.sort(e),
    n.sort(e),
    r.sort(e),
    o.sort(e),
    this._weekdaysRegex = new RegExp("^(" + o.join("|") + ")","i"),
    this._weekdaysShortRegex = this._weekdaysRegex,
    this._weekdaysMinRegex = this._weekdaysRegex,
    this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")","i"),
    this._weekdaysShortStrictRegex = new RegExp("^(" + n.join("|") + ")","i"),
    this._weekdaysMinStrictRegex = new RegExp("^(" + t.join("|") + ")","i")
}
function g0() {
    return this.hours() % 12 || 12
}
function f8() {
    return this.hours() || 24
}
xe("H", ["HH", 2], 0, "hour");
xe("h", ["hh", 2], 0, g0);
xe("k", ["kk", 2], 0, f8);
xe("hmm", 0, 0, function() {
    return "" + g0.apply(this) + ei(this.minutes(), 2)
});
xe("hmmss", 0, 0, function() {
    return "" + g0.apply(this) + ei(this.minutes(), 2) + ei(this.seconds(), 2)
});
xe("Hmm", 0, 0, function() {
    return "" + this.hours() + ei(this.minutes(), 2)
});
xe("Hmmss", 0, 0, function() {
    return "" + this.hours() + ei(this.minutes(), 2) + ei(this.seconds(), 2)
});
function PE(e, t) {
    xe(e, 0, 0, function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), t)
    })
}
PE("a", !0);
PE("A", !1);
function RE(e, t) {
    return t._meridiemParse
}
pe("a", RE);
pe("A", RE);
pe("H", pt, f0);
pe("h", pt, xa);
pe("k", pt, xa);
pe("HH", pt, Zn);
pe("hh", pt, Zn);
pe("kk", pt, Zn);
pe("hmm", yE);
pe("hmmss", wE);
pe("Hmm", yE);
pe("Hmmss", wE);
it(["H", "HH"], Vt);
it(["k", "kk"], function(e, t, n) {
    var r = We(e);
    t[Vt] = r === 24 ? 0 : r
});
it(["a", "A"], function(e, t, n) {
    n._isPm = n._locale.isPM(e),
    n._meridiem = e
});
it(["h", "hh"], function(e, t, n) {
    t[Vt] = We(e),
    Me(n).bigHour = !0
});
it("hmm", function(e, t, n) {
    var r = e.length - 2;
    t[Vt] = We(e.substr(0, r)),
    t[Pr] = We(e.substr(r)),
    Me(n).bigHour = !0
});
it("hmmss", function(e, t, n) {
    var r = e.length - 4
      , o = e.length - 2;
    t[Vt] = We(e.substr(0, r)),
    t[Pr] = We(e.substr(r, 2)),
    t[Si] = We(e.substr(o)),
    Me(n).bigHour = !0
});
it("Hmm", function(e, t, n) {
    var r = e.length - 2;
    t[Vt] = We(e.substr(0, r)),
    t[Pr] = We(e.substr(r))
});
it("Hmmss", function(e, t, n) {
    var r = e.length - 4
      , o = e.length - 2;
    t[Vt] = We(e.substr(0, r)),
    t[Pr] = We(e.substr(r, 2)),
    t[Si] = We(e.substr(o))
});
function d8(e) {
    return (e + "").toLowerCase().charAt(0) === "p"
}
var h8 = /[ap]\.?m?\.?/i
  , p8 = Sa("Hours", !0);
function g8(e, t, n) {
    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
}
var DE = {
    calendar: r7,
    longDateFormat: a7,
    invalidDate: u7,
    ordinal: f7,
    dayOfMonthOrdinalParse: d7,
    relativeTime: p7,
    months: R7,
    monthsShort: SE,
    week: U7,
    weekdays: Q7,
    weekdaysMin: K7,
    weekdaysShort: TE,
    meridiemParse: h8
}, wt = {}, Ja = {}, Ul;
function m8(e, t) {
    var n, r = Math.min(e.length, t.length);
    for (n = 0; n < r; n += 1)
        if (e[n] !== t[n])
            return n;
    return r
}
function e_(e) {
    return e && e.toLowerCase().replace("_", "-")
}
function v8(e) {
    for (var t = 0, n, r, o, s; t < e.length; ) {
        for (s = e_(e[t]).split("-"),
        n = s.length,
        r = e_(e[t + 1]),
        r = r ? r.split("-") : null; n > 0; ) {
            if (o = cd(s.slice(0, n).join("-")),
            o)
                return o;
            if (r && r.length >= n && m8(s, r) >= n - 1)
                break;
            n--
        }
        t++
    }
    return Ul
}
function y8(e) {
    return !!(e && e.match("^[^/\\\\]*$"))
}
function cd(e) {
    var t = null, n;
    if (wt[e] === void 0 && typeof module < "u" && module && module.exports && y8(e))
        try {
            t = Ul._abbr,
            n = require,
            n("./locale/" + e),
            ho(t)
        } catch {
            wt[e] = null
        }
    return wt[e]
}
function ho(e, t) {
    var n;
    return e && (Rn(t) ? n = Ii(e) : n = m0(e, t),
    n ? Ul = n : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
    Ul._abbr
}
function m0(e, t) {
    if (t !== null) {
        var n, r = DE;
        if (t.abbr = e,
        wt[e] != null)
            pE("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
            r = wt[e]._config;
        else if (t.parentLocale != null)
            if (wt[t.parentLocale] != null)
                r = wt[t.parentLocale]._config;
            else if (n = cd(t.parentLocale),
            n != null)
                r = n._config;
            else
                return Ja[t.parentLocale] || (Ja[t.parentLocale] = []),
                Ja[t.parentLocale].push({
                    name: e,
                    config: t
                }),
                null;
        return wt[e] = new s0(Ng(r, t)),
        Ja[e] && Ja[e].forEach(function(o) {
            m0(o.name, o.config)
        }),
        ho(e),
        wt[e]
    } else
        return delete wt[e],
        null
}
function w8(e, t) {
    if (t != null) {
        var n, r, o = DE;
        wt[e] != null && wt[e].parentLocale != null ? wt[e].set(Ng(wt[e]._config, t)) : (r = cd(e),
        r != null && (o = r._config),
        t = Ng(o, t),
        r == null && (t.abbr = e),
        n = new s0(t),
        n.parentLocale = wt[e],
        wt[e] = n),
        ho(e)
    } else
        wt[e] != null && (wt[e].parentLocale != null ? (wt[e] = wt[e].parentLocale,
        e === ho() && ho(e)) : wt[e] != null && delete wt[e]);
    return wt[e]
}
function Ii(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
    !e)
        return Ul;
    if (!Mr(e)) {
        if (t = cd(e),
        t)
            return t;
        e = [e]
    }
    return v8(e)
}
function _8() {
    return Lg(wt)
}
function v0(e) {
    var t, n = e._a;
    return n && Me(e).overflow === -2 && (t = n[xi] < 0 || n[xi] > 11 ? xi : n[Qr] < 1 || n[Qr] > d0(n[fn], n[xi]) ? Qr : n[Vt] < 0 || n[Vt] > 24 || n[Vt] === 24 && (n[Pr] !== 0 || n[Si] !== 0 || n[Yo] !== 0) ? Vt : n[Pr] < 0 || n[Pr] > 59 ? Pr : n[Si] < 0 || n[Si] > 59 ? Si : n[Yo] < 0 || n[Yo] > 999 ? Yo : -1,
    Me(e)._overflowDayOfYear && (t < fn || t > Qr) && (t = Qr),
    Me(e)._overflowWeeks && t === -1 && (t = E7),
    Me(e)._overflowWeekday && t === -1 && (t = k7),
    Me(e).overflow = t),
    e
}
var x8 = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
  , S8 = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
  , b8 = /Z|[+-]\d\d(?::?\d\d)?/
  , bc = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
  , xp = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
  , E8 = /^\/?Date\((-?\d+)/i
  , k8 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
  , C8 = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};
function IE(e) {
    var t, n, r = e._i, o = x8.exec(r) || S8.exec(r), s, l, c, f, h = bc.length, v = xp.length;
    if (o) {
        for (Me(e).iso = !0,
        t = 0,
        n = h; t < n; t++)
            if (bc[t][1].exec(o[1])) {
                l = bc[t][0],
                s = bc[t][2] !== !1;
                break
            }
        if (l == null) {
            e._isValid = !1;
            return
        }
        if (o[3]) {
            for (t = 0,
            n = v; t < n; t++)
                if (xp[t][1].exec(o[3])) {
                    c = (o[2] || " ") + xp[t][0];
                    break
                }
            if (c == null) {
                e._isValid = !1;
                return
            }
        }
        if (!s && c != null) {
            e._isValid = !1;
            return
        }
        if (o[4])
            if (b8.exec(o[4]))
                f = "Z";
            else {
                e._isValid = !1;
                return
            }
        e._f = l + (c || "") + (f || ""),
        w0(e)
    } else
        e._isValid = !1
}
function O8(e, t, n, r, o, s) {
    var l = [T8(e), SE.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(o, 10)];
    return s && l.push(parseInt(s, 10)),
    l
}
function T8(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
}
function P8(e) {
    return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}
function R8(e, t, n) {
    if (e) {
        var r = TE.indexOf(e)
          , o = new Date(t[0],t[1],t[2]).getDay();
        if (r !== o)
            return Me(n).weekdayMismatch = !0,
            n._isValid = !1,
            !1
    }
    return !0
}
function D8(e, t, n) {
    if (e)
        return C8[e];
    if (t)
        return 0;
    var r = parseInt(n, 10)
      , o = r % 100
      , s = (r - o) / 100;
    return s * 60 + o
}
function ME(e) {
    var t = k8.exec(P8(e._i)), n;
    if (t) {
        if (n = O8(t[4], t[3], t[2], t[5], t[6], t[7]),
        !R8(t[1], n, e))
            return;
        e._a = n,
        e._tzm = D8(t[8], t[9], t[10]),
        e._d = Wl.apply(null, e._a),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        Me(e).rfc2822 = !0
    } else
        e._isValid = !1
}
function I8(e) {
    var t = E8.exec(e._i);
    if (t !== null) {
        e._d = new Date(+t[1]);
        return
    }
    if (IE(e),
    e._isValid === !1)
        delete e._isValid;
    else
        return;
    if (ME(e),
    e._isValid === !1)
        delete e._isValid;
    else
        return;
    e._strict ? e._isValid = !1 : ce.createFromInputFallback(e)
}
ce.createFromInputFallback = vr("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
});
function Rs(e, t, n) {
    return e ?? t ?? n
}
function M8(e) {
    var t = new Date(ce.now());
    return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
}
function y0(e) {
    var t, n, r = [], o, s, l;
    if (!e._d) {
        for (o = M8(e),
        e._w && e._a[Qr] == null && e._a[xi] == null && A8(e),
        e._dayOfYear != null && (l = Rs(e._a[fn], o[fn]),
        (e._dayOfYear > _l(l) || e._dayOfYear === 0) && (Me(e)._overflowDayOfYear = !0),
        n = Wl(l, 0, e._dayOfYear),
        e._a[xi] = n.getUTCMonth(),
        e._a[Qr] = n.getUTCDate()),
        t = 0; t < 3 && e._a[t] == null; ++t)
            e._a[t] = r[t] = o[t];
        for (; t < 7; t++)
            e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
        e._a[Vt] === 24 && e._a[Pr] === 0 && e._a[Si] === 0 && e._a[Yo] === 0 && (e._nextDay = !0,
        e._a[Vt] = 0),
        e._d = (e._useUTC ? Wl : W7).apply(null, r),
        s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
        e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[Vt] = 24),
        e._w && typeof e._w.d < "u" && e._w.d !== s && (Me(e).weekdayMismatch = !0)
    }
}
function A8(e) {
    var t, n, r, o, s, l, c, f, h;
    t = e._w,
    t.GG != null || t.W != null || t.E != null ? (s = 1,
    l = 4,
    n = Rs(t.GG, e._a[fn], zl(ht(), 1, 4).year),
    r = Rs(t.W, 1),
    o = Rs(t.E, 1),
    (o < 1 || o > 7) && (f = !0)) : (s = e._locale._week.dow,
    l = e._locale._week.doy,
    h = zl(ht(), s, l),
    n = Rs(t.gg, e._a[fn], h.year),
    r = Rs(t.w, h.week),
    t.d != null ? (o = t.d,
    (o < 0 || o > 6) && (f = !0)) : t.e != null ? (o = t.e + s,
    (t.e < 0 || t.e > 6) && (f = !0)) : o = s),
    r < 1 || r > ki(n, s, l) ? Me(e)._overflowWeeks = !0 : f != null ? Me(e)._overflowWeekday = !0 : (c = OE(n, r, o, s, l),
    e._a[fn] = c.year,
    e._dayOfYear = c.dayOfYear)
}
ce.ISO_8601 = function() {}
;
ce.RFC_2822 = function() {}
;
function w0(e) {
    if (e._f === ce.ISO_8601) {
        IE(e);
        return
    }
    if (e._f === ce.RFC_2822) {
        ME(e);
        return
    }
    e._a = [],
    Me(e).empty = !0;
    var t = "" + e._i, n, r, o, s, l, c = t.length, f = 0, h, v;
    for (o = gE(e._f, e._locale).match(a0) || [],
    v = o.length,
    n = 0; n < v; n++)
        s = o[n],
        r = (t.match(x7(s, e)) || [])[0],
        r && (l = t.substr(0, t.indexOf(r)),
        l.length > 0 && Me(e).unusedInput.push(l),
        t = t.slice(t.indexOf(r) + r.length),
        f += r.length),
        Js[s] ? (r ? Me(e).empty = !1 : Me(e).unusedTokens.push(s),
        b7(s, r, e)) : e._strict && !r && Me(e).unusedTokens.push(s);
    Me(e).charsLeftOver = c - f,
    t.length > 0 && Me(e).unusedInput.push(t),
    e._a[Vt] <= 12 && Me(e).bigHour === !0 && e._a[Vt] > 0 && (Me(e).bigHour = void 0),
    Me(e).parsedDateParts = e._a.slice(0),
    Me(e).meridiem = e._meridiem,
    e._a[Vt] = N8(e._locale, e._a[Vt], e._meridiem),
    h = Me(e).era,
    h !== null && (e._a[fn] = e._locale.erasConvertYear(h, e._a[fn])),
    y0(e),
    v0(e)
}
function N8(e, t, n) {
    var r;
    return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n),
    r && t < 12 && (t += 12),
    !r && t === 12 && (t = 0)),
    t)
}
function L8(e) {
    var t, n, r, o, s, l, c = !1, f = e._f.length;
    if (f === 0) {
        Me(e).invalidFormat = !0,
        e._d = new Date(NaN);
        return
    }
    for (o = 0; o < f; o++)
        s = 0,
        l = !1,
        t = o0({}, e),
        e._useUTC != null && (t._useUTC = e._useUTC),
        t._f = e._f[o],
        w0(t),
        i0(t) && (l = !0),
        s += Me(t).charsLeftOver,
        s += Me(t).unusedTokens.length * 10,
        Me(t).score = s,
        c ? s < r && (r = s,
        n = t) : (r == null || s < r || l) && (r = s,
        n = t,
        l && (c = !0));
    eo(e, n || t)
}
function j8(e) {
    if (!e._d) {
        var t = l0(e._i)
          , n = t.day === void 0 ? t.date : t.day;
        e._a = dE([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function(r) {
            return r && parseInt(r, 10)
        }),
        y0(e)
    }
}
function $8(e) {
    var t = new tu(v0(AE(e)));
    return t._nextDay && (t.add(1, "d"),
    t._nextDay = void 0),
    t
}
function AE(e) {
    var t = e._i
      , n = e._f;
    return e._locale = e._locale || Ii(e._l),
    t === null || n === void 0 && t === "" ? rd({
        nullInput: !0
    }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)),
    Ar(t) ? new tu(v0(t)) : (eu(t) ? e._d = t : Mr(n) ? L8(e) : n ? w0(e) : F8(e),
    i0(e) || (e._d = null),
    e))
}
function F8(e) {
    var t = e._i;
    Rn(t) ? e._d = new Date(ce.now()) : eu(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? I8(e) : Mr(t) ? (e._a = dE(t.slice(0), function(n) {
        return parseInt(n, 10)
    }),
    y0(e)) : Vo(t) ? j8(e) : Ri(t) ? e._d = new Date(t) : ce.createFromInputFallback(e)
}
function NE(e, t, n, r, o) {
    var s = {};
    return (t === !0 || t === !1) && (r = t,
    t = void 0),
    (n === !0 || n === !1) && (r = n,
    n = void 0),
    (Vo(e) && r0(e) || Mr(e) && e.length === 0) && (e = void 0),
    s._isAMomentObject = !0,
    s._useUTC = s._isUTC = o,
    s._l = n,
    s._i = e,
    s._f = t,
    s._strict = r,
    $8(s)
}
function ht(e, t, n, r) {
    return NE(e, t, n, r, !1)
}
var W8 = vr("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    var e = ht.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : rd()
})
  , z8 = vr("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    var e = ht.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : rd()
});
function LE(e, t) {
    var n, r;
    if (t.length === 1 && Mr(t[0]) && (t = t[0]),
    !t.length)
        return ht();
    for (n = t[0],
    r = 1; r < t.length; ++r)
        (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
    return n
}
function U8() {
    var e = [].slice.call(arguments, 0);
    return LE("isBefore", e)
}
function Y8() {
    var e = [].slice.call(arguments, 0);
    return LE("isAfter", e)
}
var B8 = function() {
    return Date.now ? Date.now() : +new Date
}
  , Xa = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
function H8(e) {
    var t, n = !1, r, o = Xa.length;
    for (t in e)
        if (He(e, t) && !(At.call(Xa, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
            return !1;
    for (r = 0; r < o; ++r)
        if (e[Xa[r]]) {
            if (n)
                return !1;
            parseFloat(e[Xa[r]]) !== We(e[Xa[r]]) && (n = !0)
        }
    return !0
}
function V8() {
    return this._isValid
}
function G8() {
    return Nr(NaN)
}
function fd(e) {
    var t = l0(e)
      , n = t.year || 0
      , r = t.quarter || 0
      , o = t.month || 0
      , s = t.week || t.isoWeek || 0
      , l = t.day || 0
      , c = t.hour || 0
      , f = t.minute || 0
      , h = t.second || 0
      , v = t.millisecond || 0;
    this._isValid = H8(t),
    this._milliseconds = +v + h * 1e3 + f * 6e4 + c * 1e3 * 60 * 60,
    this._days = +l + s * 7,
    this._months = +o + r * 3 + n * 12,
    this._data = {},
    this._locale = Ii(),
    this._bubble()
}
function Yc(e) {
    return e instanceof fd
}
function $g(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
}
function q8(e, t, n) {
    var r = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), s = 0, l;
    for (l = 0; l < r; l++)
        We(e[l]) !== We(t[l]) && s++;
    return s + o
}
function jE(e, t) {
    xe(e, 0, 0, function() {
        var n = this.utcOffset()
          , r = "+";
        return n < 0 && (n = -n,
        r = "-"),
        r + ei(~~(n / 60), 2) + t + ei(~~n % 60, 2)
    })
}
jE("Z", ":");
jE("ZZ", "");
pe("Z", ld);
pe("ZZ", ld);
it(["Z", "ZZ"], function(e, t, n) {
    n._useUTC = !0,
    n._tzm = _0(ld, e)
});
var Q8 = /([\+\-]|\d\d)/gi;
function _0(e, t) {
    var n = (t || "").match(e), r, o, s;
    return n === null ? null : (r = n[n.length - 1] || [],
    o = (r + "").match(Q8) || ["-", 0, 0],
    s = +(o[1] * 60) + We(o[2]),
    s === 0 ? 0 : o[0] === "+" ? s : -s)
}
function x0(e, t) {
    var n, r;
    return t._isUTC ? (n = t.clone(),
    r = (Ar(e) || eu(e) ? e.valueOf() : ht(e).valueOf()) - n.valueOf(),
    n._d.setTime(n._d.valueOf() + r),
    ce.updateOffset(n, !1),
    n) : ht(e).local()
}
function Fg(e) {
    return -Math.round(e._d.getTimezoneOffset())
}
ce.updateOffset = function() {}
;
function K8(e, t, n) {
    var r = this._offset || 0, o;
    if (!this.isValid())
        return e != null ? this : NaN;
    if (e != null) {
        if (typeof e == "string") {
            if (e = _0(ld, e),
            e === null)
                return this
        } else
            Math.abs(e) < 16 && !n && (e = e * 60);
        return !this._isUTC && t && (o = Fg(this)),
        this._offset = e,
        this._isUTC = !0,
        o != null && this.add(o, "m"),
        r !== e && (!t || this._changeInProgress ? WE(this, Nr(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
        ce.updateOffset(this, !0),
        this._changeInProgress = null)),
        this
    } else
        return this._isUTC ? r : Fg(this)
}
function Z8(e, t) {
    return e != null ? (typeof e != "string" && (e = -e),
    this.utcOffset(e, t),
    this) : -this.utcOffset()
}
function J8(e) {
    return this.utcOffset(0, e)
}
function X8(e) {
    return this._isUTC && (this.utcOffset(0, e),
    this._isUTC = !1,
    e && this.subtract(Fg(this), "m")),
    this
}
function eF() {
    if (this._tzm != null)
        this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
        var e = _0(w7, this._i);
        e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
    }
    return this
}
function tF(e) {
    return this.isValid() ? (e = e ? ht(e).utcOffset() : 0,
    (this.utcOffset() - e) % 60 === 0) : !1
}
function nF() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
}
function rF() {
    if (!Rn(this._isDSTShifted))
        return this._isDSTShifted;
    var e = {}, t;
    return o0(e, this),
    e = AE(e),
    e._a ? (t = e._isUTC ? ni(e._a) : ht(e._a),
    this._isDSTShifted = this.isValid() && q8(e._a, t.toArray()) > 0) : this._isDSTShifted = !1,
    this._isDSTShifted
}
function iF() {
    return this.isValid() ? !this._isUTC : !1
}
function oF() {
    return this.isValid() ? this._isUTC : !1
}
function $E() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1
}
var sF = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
  , aF = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function Nr(e, t) {
    var n = e, r = null, o, s, l;
    return Yc(e) ? n = {
        ms: e._milliseconds,
        d: e._days,
        M: e._months
    } : Ri(e) || !isNaN(+e) ? (n = {},
    t ? n[t] = +e : n.milliseconds = +e) : (r = sF.exec(e)) ? (o = r[1] === "-" ? -1 : 1,
    n = {
        y: 0,
        d: We(r[Qr]) * o,
        h: We(r[Vt]) * o,
        m: We(r[Pr]) * o,
        s: We(r[Si]) * o,
        ms: We($g(r[Yo] * 1e3)) * o
    }) : (r = aF.exec(e)) ? (o = r[1] === "-" ? -1 : 1,
    n = {
        y: Ao(r[2], o),
        M: Ao(r[3], o),
        w: Ao(r[4], o),
        d: Ao(r[5], o),
        h: Ao(r[6], o),
        m: Ao(r[7], o),
        s: Ao(r[8], o)
    }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (l = lF(ht(n.from), ht(n.to)),
    n = {},
    n.ms = l.milliseconds,
    n.M = l.months),
    s = new fd(n),
    Yc(e) && He(e, "_locale") && (s._locale = e._locale),
    Yc(e) && He(e, "_isValid") && (s._isValid = e._isValid),
    s
}
Nr.fn = fd.prototype;
Nr.invalid = G8;
function Ao(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t
}
function t_(e, t) {
    var n = {};
    return n.months = t.month() - e.month() + (t.year() - e.year()) * 12,
    e.clone().add(n.months, "M").isAfter(t) && --n.months,
    n.milliseconds = +t - +e.clone().add(n.months, "M"),
    n
}
function lF(e, t) {
    var n;
    return e.isValid() && t.isValid() ? (t = x0(t, e),
    e.isBefore(t) ? n = t_(e, t) : (n = t_(t, e),
    n.milliseconds = -n.milliseconds,
    n.months = -n.months),
    n) : {
        milliseconds: 0,
        months: 0
    }
}
function FE(e, t) {
    return function(n, r) {
        var o, s;
        return r !== null && !isNaN(+r) && (pE(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
        s = n,
        n = r,
        r = s),
        o = Nr(n, r),
        WE(this, o, e),
        this
    }
}
function WE(e, t, n, r) {
    var o = t._milliseconds
      , s = $g(t._days)
      , l = $g(t._months);
    e.isValid() && (r = r ?? !0,
    l && EE(e, Fl(e, "Month") + l * n),
    s && xE(e, "Date", Fl(e, "Date") + s * n),
    o && e._d.setTime(e._d.valueOf() + o * n),
    r && ce.updateOffset(e, s || l))
}
var uF = FE(1, "add")
  , cF = FE(-1, "subtract");
function zE(e) {
    return typeof e == "string" || e instanceof String
}
function fF(e) {
    return Ar(e) || eu(e) || zE(e) || Ri(e) || hF(e) || dF(e) || e === null || e === void 0
}
function dF(e) {
    var t = Vo(e) && !r0(e), n = !1, r = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], o, s, l = r.length;
    for (o = 0; o < l; o += 1)
        s = r[o],
        n = n || He(e, s);
    return t && n
}
function hF(e) {
    var t = Mr(e)
      , n = !1;
    return t && (n = e.filter(function(r) {
        return !Ri(r) && zE(e)
    }).length === 0),
    t && n
}
function pF(e) {
    var t = Vo(e) && !r0(e), n = !1, r = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], o, s;
    for (o = 0; o < r.length; o += 1)
        s = r[o],
        n = n || He(e, s);
    return t && n
}
function gF(e, t) {
    var n = e.diff(t, "days", !0);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
}
function mF(e, t) {
    arguments.length === 1 && (arguments[0] ? fF(arguments[0]) ? (e = arguments[0],
    t = void 0) : pF(arguments[0]) && (t = arguments[0],
    e = void 0) : (e = void 0,
    t = void 0));
    var n = e || ht()
      , r = x0(n, this).startOf("day")
      , o = ce.calendarFormat(this, r) || "sameElse"
      , s = t && (ri(t[o]) ? t[o].call(this, n) : t[o]);
    return this.format(s || this.localeData().calendar(o, this, ht(n)))
}
function vF() {
    return new tu(this)
}
function yF(e, t) {
    var n = Ar(e) ? e : ht(e);
    return this.isValid() && n.isValid() ? (t = yr(t) || "millisecond",
    t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1
}
function wF(e, t) {
    var n = Ar(e) ? e : ht(e);
    return this.isValid() && n.isValid() ? (t = yr(t) || "millisecond",
    t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1
}
function _F(e, t, n, r) {
    var o = Ar(e) ? e : ht(e)
      , s = Ar(t) ? t : ht(t);
    return this.isValid() && o.isValid() && s.isValid() ? (r = r || "()",
    (r[0] === "(" ? this.isAfter(o, n) : !this.isBefore(o, n)) && (r[1] === ")" ? this.isBefore(s, n) : !this.isAfter(s, n))) : !1
}
function xF(e, t) {
    var n = Ar(e) ? e : ht(e), r;
    return this.isValid() && n.isValid() ? (t = yr(t) || "millisecond",
    t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(),
    this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1
}
function SF(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
}
function bF(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
}
function EF(e, t, n) {
    var r, o, s;
    if (!this.isValid())
        return NaN;
    if (r = x0(e, this),
    !r.isValid())
        return NaN;
    switch (o = (r.utcOffset() - this.utcOffset()) * 6e4,
    t = yr(t),
    t) {
    case "year":
        s = Bc(this, r) / 12;
        break;
    case "month":
        s = Bc(this, r);
        break;
    case "quarter":
        s = Bc(this, r) / 3;
        break;
    case "second":
        s = (this - r) / 1e3;
        break;
    case "minute":
        s = (this - r) / 6e4;
        break;
    case "hour":
        s = (this - r) / 36e5;
        break;
    case "day":
        s = (this - r - o) / 864e5;
        break;
    case "week":
        s = (this - r - o) / 6048e5;
        break;
    default:
        s = this - r
    }
    return n ? s : dr(s)
}
function Bc(e, t) {
    if (e.date() < t.date())
        return -Bc(t, e);
    var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), o, s;
    return t - r < 0 ? (o = e.clone().add(n - 1, "months"),
    s = (t - r) / (r - o)) : (o = e.clone().add(n + 1, "months"),
    s = (t - r) / (o - r)),
    -(n + s) || 0
}
ce.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
ce.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function kF() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}
function CF(e) {
    if (!this.isValid())
        return null;
    var t = e !== !0
      , n = t ? this.clone().utc() : this;
    return n.year() < 0 || n.year() > 9999 ? Uc(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : ri(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Uc(n, "Z")) : Uc(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
}
function OF() {
    if (!this.isValid())
        return "moment.invalid(/* " + this._i + " */)";
    var e = "moment", t = "", n, r, o, s;
    return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone",
    t = "Z"),
    n = "[" + e + '("]',
    r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
    o = "-MM-DD[T]HH:mm:ss.SSS",
    s = t + '[")]',
    this.format(n + r + o + s)
}
function TF(e) {
    e || (e = this.isUtc() ? ce.defaultFormatUtc : ce.defaultFormat);
    var t = Uc(this, e);
    return this.localeData().postformat(t)
}
function PF(e, t) {
    return this.isValid() && (Ar(e) && e.isValid() || ht(e).isValid()) ? Nr({
        to: this,
        from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
}
function RF(e) {
    return this.from(ht(), e)
}
function DF(e, t) {
    return this.isValid() && (Ar(e) && e.isValid() || ht(e).isValid()) ? Nr({
        from: this,
        to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
}
function IF(e) {
    return this.to(ht(), e)
}
function UE(e) {
    var t;
    return e === void 0 ? this._locale._abbr : (t = Ii(e),
    t != null && (this._locale = t),
    this)
}
var YE = vr("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
    return e === void 0 ? this.localeData() : this.locale(e)
});
function BE() {
    return this._locale
}
var Of = 1e3
  , Xs = 60 * Of
  , Tf = 60 * Xs
  , HE = (365 * 400 + 97) * 24 * Tf;
function ea(e, t) {
    return (e % t + t) % t
}
function VE(e, t, n) {
    return e < 100 && e >= 0 ? new Date(e + 400,t,n) - HE : new Date(e,t,n).valueOf()
}
function GE(e, t, n) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - HE : Date.UTC(e, t, n)
}
function MF(e) {
    var t, n;
    if (e = yr(e),
    e === void 0 || e === "millisecond" || !this.isValid())
        return this;
    switch (n = this._isUTC ? GE : VE,
    e) {
    case "year":
        t = n(this.year(), 0, 1);
        break;
    case "quarter":
        t = n(this.year(), this.month() - this.month() % 3, 1);
        break;
    case "month":
        t = n(this.year(), this.month(), 1);
        break;
    case "week":
        t = n(this.year(), this.month(), this.date() - this.weekday());
        break;
    case "isoWeek":
        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
    case "day":
    case "date":
        t = n(this.year(), this.month(), this.date());
        break;
    case "hour":
        t = this._d.valueOf(),
        t -= ea(t + (this._isUTC ? 0 : this.utcOffset() * Xs), Tf);
        break;
    case "minute":
        t = this._d.valueOf(),
        t -= ea(t, Xs);
        break;
    case "second":
        t = this._d.valueOf(),
        t -= ea(t, Of);
        break
    }
    return this._d.setTime(t),
    ce.updateOffset(this, !0),
    this
}
function AF(e) {
    var t, n;
    if (e = yr(e),
    e === void 0 || e === "millisecond" || !this.isValid())
        return this;
    switch (n = this._isUTC ? GE : VE,
    e) {
    case "year":
        t = n(this.year() + 1, 0, 1) - 1;
        break;
    case "quarter":
        t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
    case "month":
        t = n(this.year(), this.month() + 1, 1) - 1;
        break;
    case "week":
        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
    case "isoWeek":
        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
    case "day":
    case "date":
        t = n(this.year(), this.month(), this.date() + 1) - 1;
        break;
    case "hour":
        t = this._d.valueOf(),
        t += Tf - ea(t + (this._isUTC ? 0 : this.utcOffset() * Xs), Tf) - 1;
        break;
    case "minute":
        t = this._d.valueOf(),
        t += Xs - ea(t, Xs) - 1;
        break;
    case "second":
        t = this._d.valueOf(),
        t += Of - ea(t, Of) - 1;
        break
    }
    return this._d.setTime(t),
    ce.updateOffset(this, !0),
    this
}
function NF() {
    return this._d.valueOf() - (this._offset || 0) * 6e4
}
function LF() {
    return Math.floor(this.valueOf() / 1e3)
}
function jF() {
    return new Date(this.valueOf())
}
function $F() {
    var e = this;
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
}
function FF() {
    var e = this;
    return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds()
    }
}
function WF() {
    return this.isValid() ? this.toISOString() : null
}
function zF() {
    return i0(this)
}
function UF() {
    return eo({}, Me(this))
}
function YF() {
    return Me(this).overflow
}
function BF() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    }
}
xe("N", 0, 0, "eraAbbr");
xe("NN", 0, 0, "eraAbbr");
xe("NNN", 0, 0, "eraAbbr");
xe("NNNN", 0, 0, "eraName");
xe("NNNNN", 0, 0, "eraNarrow");
xe("y", ["y", 1], "yo", "eraYear");
xe("y", ["yy", 2], 0, "eraYear");
xe("y", ["yyy", 3], 0, "eraYear");
xe("y", ["yyyy", 4], 0, "eraYear");
pe("N", S0);
pe("NN", S0);
pe("NNN", S0);
pe("NNNN", tW);
pe("NNNNN", nW);
it(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, t, n, r) {
    var o = n._locale.erasParse(e, r, n._strict);
    o ? Me(n).era = o : Me(n).invalidEra = e
});
pe("y", _a);
pe("yy", _a);
pe("yyy", _a);
pe("yyyy", _a);
pe("yo", rW);
it(["y", "yy", "yyy", "yyyy"], fn);
it(["yo"], function(e, t, n, r) {
    var o;
    n._locale._eraYearOrdinalRegex && (o = e.match(n._locale._eraYearOrdinalRegex)),
    n._locale.eraYearOrdinalParse ? t[fn] = n._locale.eraYearOrdinalParse(e, o) : t[fn] = parseInt(e, 10)
});
function HF(e, t) {
    var n, r, o, s = this._eras || Ii("en")._eras;
    for (n = 0,
    r = s.length; n < r; ++n) {
        switch (typeof s[n].since) {
        case "string":
            o = ce(s[n].since).startOf("day"),
            s[n].since = o.valueOf();
            break
        }
        switch (typeof s[n].until) {
        case "undefined":
            s[n].until = 1 / 0;
            break;
        case "string":
            o = ce(s[n].until).startOf("day").valueOf(),
            s[n].until = o.valueOf();
            break
        }
    }
    return s
}
function VF(e, t, n) {
    var r, o, s = this.eras(), l, c, f;
    for (e = e.toUpperCase(),
    r = 0,
    o = s.length; r < o; ++r)
        if (l = s[r].name.toUpperCase(),
        c = s[r].abbr.toUpperCase(),
        f = s[r].narrow.toUpperCase(),
        n)
            switch (t) {
            case "N":
            case "NN":
            case "NNN":
                if (c === e)
                    return s[r];
                break;
            case "NNNN":
                if (l === e)
                    return s[r];
                break;
            case "NNNNN":
                if (f === e)
                    return s[r];
                break
            }
        else if ([l, c, f].indexOf(e) >= 0)
            return s[r]
}
function GF(e, t) {
    var n = e.since <= e.until ? 1 : -1;
    return t === void 0 ? ce(e.since).year() : ce(e.since).year() + (t - e.offset) * n
}
function qF() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0,
    t = r.length; e < t; ++e)
        if (n = this.clone().startOf("day").valueOf(),
        r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
            return r[e].name;
    return ""
}
function QF() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0,
    t = r.length; e < t; ++e)
        if (n = this.clone().startOf("day").valueOf(),
        r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
            return r[e].narrow;
    return ""
}
function KF() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0,
    t = r.length; e < t; ++e)
        if (n = this.clone().startOf("day").valueOf(),
        r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
            return r[e].abbr;
    return ""
}
function ZF() {
    var e, t, n, r, o = this.localeData().eras();
    for (e = 0,
    t = o.length; e < t; ++e)
        if (n = o[e].since <= o[e].until ? 1 : -1,
        r = this.clone().startOf("day").valueOf(),
        o[e].since <= r && r <= o[e].until || o[e].until <= r && r <= o[e].since)
            return (this.year() - ce(o[e].since).year()) * n + o[e].offset;
    return this.year()
}
function JF(e) {
    return He(this, "_erasNameRegex") || b0.call(this),
    e ? this._erasNameRegex : this._erasRegex
}
function XF(e) {
    return He(this, "_erasAbbrRegex") || b0.call(this),
    e ? this._erasAbbrRegex : this._erasRegex
}
function eW(e) {
    return He(this, "_erasNarrowRegex") || b0.call(this),
    e ? this._erasNarrowRegex : this._erasRegex
}
function S0(e, t) {
    return t.erasAbbrRegex(e)
}
function tW(e, t) {
    return t.erasNameRegex(e)
}
function nW(e, t) {
    return t.erasNarrowRegex(e)
}
function rW(e, t) {
    return t._eraYearOrdinalRegex || _a
}
function b0() {
    var e = [], t = [], n = [], r = [], o, s, l, c, f, h = this.eras();
    for (o = 0,
    s = h.length; o < s; ++o)
        l = Ei(h[o].name),
        c = Ei(h[o].abbr),
        f = Ei(h[o].narrow),
        t.push(l),
        e.push(c),
        n.push(f),
        r.push(l),
        r.push(c),
        r.push(f);
    this._erasRegex = new RegExp("^(" + r.join("|") + ")","i"),
    this._erasNameRegex = new RegExp("^(" + t.join("|") + ")","i"),
    this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")","i"),
    this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")","i")
}
xe(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100
});
xe(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100
});
function dd(e, t) {
    xe(0, [e, e.length], 0, t)
}
dd("gggg", "weekYear");
dd("ggggg", "weekYear");
dd("GGGG", "isoWeekYear");
dd("GGGGG", "isoWeekYear");
pe("G", ad);
pe("g", ad);
pe("GG", pt, Zn);
pe("gg", pt, Zn);
pe("GGGG", c0, u0);
pe("gggg", c0, u0);
pe("GGGGG", sd, id);
pe("ggggg", sd, id);
ru(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
    t[r.substr(0, 2)] = We(e)
});
ru(["gg", "GG"], function(e, t, n, r) {
    t[r] = ce.parseTwoDigitYear(e)
});
function iW(e) {
    return qE.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
}
function oW(e) {
    return qE.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
}
function sW() {
    return ki(this.year(), 1, 4)
}
function aW() {
    return ki(this.isoWeekYear(), 1, 4)
}
function lW() {
    var e = this.localeData()._week;
    return ki(this.year(), e.dow, e.doy)
}
function uW() {
    var e = this.localeData()._week;
    return ki(this.weekYear(), e.dow, e.doy)
}
function qE(e, t, n, r, o) {
    var s;
    return e == null ? zl(this, r, o).year : (s = ki(e, r, o),
    t > s && (t = s),
    cW.call(this, e, t, n, r, o))
}
function cW(e, t, n, r, o) {
    var s = OE(e, t, n, r, o)
      , l = Wl(s.year, 0, s.dayOfYear);
    return this.year(l.getUTCFullYear()),
    this.month(l.getUTCMonth()),
    this.date(l.getUTCDate()),
    this
}
xe("Q", 0, "Qo", "quarter");
pe("Q", mE);
it("Q", function(e, t) {
    t[xi] = (We(e) - 1) * 3
});
function fW(e) {
    return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3)
}
xe("D", ["DD", 2], "Do", "date");
pe("D", pt, xa);
pe("DD", pt, Zn);
pe("Do", function(e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
});
it(["D", "DD"], Qr);
it("Do", function(e, t) {
    t[Qr] = We(e.match(pt)[0])
});
var QE = Sa("Date", !0);
xe("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
pe("DDD", od);
pe("DDDD", vE);
it(["DDD", "DDDD"], function(e, t, n) {
    n._dayOfYear = We(e)
});
function dW(e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return e == null ? t : this.add(e - t, "d")
}
xe("m", ["mm", 2], 0, "minute");
pe("m", pt, f0);
pe("mm", pt, Zn);
it(["m", "mm"], Pr);
var hW = Sa("Minutes", !1);
xe("s", ["ss", 2], 0, "second");
pe("s", pt, f0);
pe("ss", pt, Zn);
it(["s", "ss"], Si);
var pW = Sa("Seconds", !1);
xe("S", 0, 0, function() {
    return ~~(this.millisecond() / 100)
});
xe(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10)
});
xe(0, ["SSS", 3], 0, "millisecond");
xe(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10
});
xe(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100
});
xe(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3
});
xe(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4
});
xe(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5
});
xe(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6
});
pe("S", od, mE);
pe("SS", od, Zn);
pe("SSS", od, vE);
var to, KE;
for (to = "SSSS"; to.length <= 9; to += "S")
    pe(to, _a);
function gW(e, t) {
    t[Yo] = We(("0." + e) * 1e3)
}
for (to = "S"; to.length <= 9; to += "S")
    it(to, gW);
KE = Sa("Milliseconds", !1);
xe("z", 0, 0, "zoneAbbr");
xe("zz", 0, 0, "zoneName");
function mW() {
    return this._isUTC ? "UTC" : ""
}
function vW() {
    return this._isUTC ? "Coordinated Universal Time" : ""
}
var re = tu.prototype;
re.add = uF;
re.calendar = mF;
re.clone = vF;
re.diff = EF;
re.endOf = AF;
re.format = TF;
re.from = PF;
re.fromNow = RF;
re.to = DF;
re.toNow = IF;
re.get = O7;
re.invalidAt = YF;
re.isAfter = yF;
re.isBefore = wF;
re.isBetween = _F;
re.isSame = xF;
re.isSameOrAfter = SF;
re.isSameOrBefore = bF;
re.isValid = zF;
re.lang = YE;
re.locale = UE;
re.localeData = BE;
re.max = z8;
re.min = W8;
re.parsingFlags = UF;
re.set = T7;
re.startOf = MF;
re.subtract = cF;
re.toArray = $F;
re.toObject = FF;
re.toDate = jF;
re.toISOString = CF;
re.inspect = OF;
typeof Symbol < "u" && Symbol.for != null && (re[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">"
}
);
re.toJSON = WF;
re.toString = kF;
re.unix = LF;
re.valueOf = NF;
re.creationData = BF;
re.eraName = qF;
re.eraNarrow = QF;
re.eraAbbr = KF;
re.eraYear = ZF;
re.year = _E;
re.isLeapYear = C7;
re.weekYear = iW;
re.isoWeekYear = oW;
re.quarter = re.quarters = fW;
re.month = kE;
re.daysInMonth = j7;
re.week = re.weeks = H7;
re.isoWeek = re.isoWeeks = V7;
re.weeksInYear = lW;
re.weeksInWeekYear = uW;
re.isoWeeksInYear = sW;
re.isoWeeksInISOWeekYear = aW;
re.date = QE;
re.day = re.days = o8;
re.weekday = s8;
re.isoWeekday = a8;
re.dayOfYear = dW;
re.hour = re.hours = p8;
re.minute = re.minutes = hW;
re.second = re.seconds = pW;
re.millisecond = re.milliseconds = KE;
re.utcOffset = K8;
re.utc = J8;
re.local = X8;
re.parseZone = eF;
re.hasAlignedHourOffset = tF;
re.isDST = nF;
re.isLocal = iF;
re.isUtcOffset = oF;
re.isUtc = $E;
re.isUTC = $E;
re.zoneAbbr = mW;
re.zoneName = vW;
re.dates = vr("dates accessor is deprecated. Use date instead.", QE);
re.months = vr("months accessor is deprecated. Use month instead", kE);
re.years = vr("years accessor is deprecated. Use year instead", _E);
re.zone = vr("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Z8);
re.isDSTShifted = vr("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", rF);
function yW(e) {
    return ht(e * 1e3)
}
function wW() {
    return ht.apply(null, arguments).parseZone()
}
function ZE(e) {
    return e
}
var Ve = s0.prototype;
Ve.calendar = i7;
Ve.longDateFormat = l7;
Ve.invalidDate = c7;
Ve.ordinal = h7;
Ve.preparse = ZE;
Ve.postformat = ZE;
Ve.relativeTime = g7;
Ve.pastFuture = m7;
Ve.set = n7;
Ve.eras = HF;
Ve.erasParse = VF;
Ve.erasConvertYear = GF;
Ve.erasAbbrRegex = XF;
Ve.erasNameRegex = JF;
Ve.erasNarrowRegex = eW;
Ve.months = M7;
Ve.monthsShort = A7;
Ve.monthsParse = L7;
Ve.monthsRegex = F7;
Ve.monthsShortRegex = $7;
Ve.week = z7;
Ve.firstDayOfYear = B7;
Ve.firstDayOfWeek = Y7;
Ve.weekdays = e8;
Ve.weekdaysMin = n8;
Ve.weekdaysShort = t8;
Ve.weekdaysParse = i8;
Ve.weekdaysRegex = l8;
Ve.weekdaysShortRegex = u8;
Ve.weekdaysMinRegex = c8;
Ve.isPM = d8;
Ve.meridiem = g8;
function Pf(e, t, n, r) {
    var o = Ii()
      , s = ni().set(r, t);
    return o[n](s, e)
}
function JE(e, t, n) {
    if (Ri(e) && (t = e,
    e = void 0),
    e = e || "",
    t != null)
        return Pf(e, t, n, "month");
    var r, o = [];
    for (r = 0; r < 12; r++)
        o[r] = Pf(e, r, n, "month");
    return o
}
function E0(e, t, n, r) {
    typeof e == "boolean" ? (Ri(t) && (n = t,
    t = void 0),
    t = t || "") : (t = e,
    n = t,
    e = !1,
    Ri(t) && (n = t,
    t = void 0),
    t = t || "");
    var o = Ii(), s = e ? o._week.dow : 0, l, c = [];
    if (n != null)
        return Pf(t, (n + s) % 7, r, "day");
    for (l = 0; l < 7; l++)
        c[l] = Pf(t, (l + s) % 7, r, "day");
    return c
}
function _W(e, t) {
    return JE(e, t, "months")
}
function xW(e, t) {
    return JE(e, t, "monthsShort")
}
function SW(e, t, n) {
    return E0(e, t, n, "weekdays")
}
function bW(e, t, n) {
    return E0(e, t, n, "weekdaysShort")
}
function EW(e, t, n) {
    return E0(e, t, n, "weekdaysMin")
}
ho("en", {
    eras: [{
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
    }, {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
    }],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(e) {
        var t = e % 10
          , n = We(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
        return e + n
    }
});
ce.lang = vr("moment.lang is deprecated. Use moment.locale instead.", ho);
ce.langData = vr("moment.langData is deprecated. Use moment.localeData instead.", Ii);
var gi = Math.abs;
function kW() {
    var e = this._data;
    return this._milliseconds = gi(this._milliseconds),
    this._days = gi(this._days),
    this._months = gi(this._months),
    e.milliseconds = gi(e.milliseconds),
    e.seconds = gi(e.seconds),
    e.minutes = gi(e.minutes),
    e.hours = gi(e.hours),
    e.months = gi(e.months),
    e.years = gi(e.years),
    this
}
function XE(e, t, n, r) {
    var o = Nr(t, n);
    return e._milliseconds += r * o._milliseconds,
    e._days += r * o._days,
    e._months += r * o._months,
    e._bubble()
}
function CW(e, t) {
    return XE(this, e, t, 1)
}
function OW(e, t) {
    return XE(this, e, t, -1)
}
function n_(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
}
function TW() {
    var e = this._milliseconds, t = this._days, n = this._months, r = this._data, o, s, l, c, f;
    return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += n_(Wg(n) + t) * 864e5,
    t = 0,
    n = 0),
    r.milliseconds = e % 1e3,
    o = dr(e / 1e3),
    r.seconds = o % 60,
    s = dr(o / 60),
    r.minutes = s % 60,
    l = dr(s / 60),
    r.hours = l % 24,
    t += dr(l / 24),
    f = dr(e2(t)),
    n += f,
    t -= n_(Wg(f)),
    c = dr(n / 12),
    n %= 12,
    r.days = t,
    r.months = n,
    r.years = c,
    this
}
function e2(e) {
    return e * 4800 / 146097
}
function Wg(e) {
    return e * 146097 / 4800
}
function PW(e) {
    if (!this.isValid())
        return NaN;
    var t, n, r = this._milliseconds;
    if (e = yr(e),
    e === "month" || e === "quarter" || e === "year")
        switch (t = this._days + r / 864e5,
        n = this._months + e2(t),
        e) {
        case "month":
            return n;
        case "quarter":
            return n / 3;
        case "year":
            return n / 12
        }
    else
        switch (t = this._days + Math.round(Wg(this._months)),
        e) {
        case "week":
            return t / 7 + r / 6048e5;
        case "day":
            return t + r / 864e5;
        case "hour":
            return t * 24 + r / 36e5;
        case "minute":
            return t * 1440 + r / 6e4;
        case "second":
            return t * 86400 + r / 1e3;
        case "millisecond":
            return Math.floor(t * 864e5) + r;
        default:
            throw new Error("Unknown unit " + e)
        }
}
function Mi(e) {
    return function() {
        return this.as(e)
    }
}
var t2 = Mi("ms")
  , RW = Mi("s")
  , DW = Mi("m")
  , IW = Mi("h")
  , MW = Mi("d")
  , AW = Mi("w")
  , NW = Mi("M")
  , LW = Mi("Q")
  , jW = Mi("y")
  , $W = t2;
function FW() {
    return Nr(this)
}
function WW(e) {
    return e = yr(e),
    this.isValid() ? this[e + "s"]() : NaN
}
function ts(e) {
    return function() {
        return this.isValid() ? this._data[e] : NaN
    }
}
var zW = ts("milliseconds")
  , UW = ts("seconds")
  , YW = ts("minutes")
  , BW = ts("hours")
  , HW = ts("days")
  , VW = ts("months")
  , GW = ts("years");
function qW() {
    return dr(this.days() / 7)
}
var vi = Math.round
  , Bs = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    w: null,
    M: 11
};
function QW(e, t, n, r, o) {
    return o.relativeTime(t || 1, !!n, e, r)
}
function KW(e, t, n, r) {
    var o = Nr(e).abs()
      , s = vi(o.as("s"))
      , l = vi(o.as("m"))
      , c = vi(o.as("h"))
      , f = vi(o.as("d"))
      , h = vi(o.as("M"))
      , v = vi(o.as("w"))
      , m = vi(o.as("y"))
      , x = s <= n.ss && ["s", s] || s < n.s && ["ss", s] || l <= 1 && ["m"] || l < n.m && ["mm", l] || c <= 1 && ["h"] || c < n.h && ["hh", c] || f <= 1 && ["d"] || f < n.d && ["dd", f];
    return n.w != null && (x = x || v <= 1 && ["w"] || v < n.w && ["ww", v]),
    x = x || h <= 1 && ["M"] || h < n.M && ["MM", h] || m <= 1 && ["y"] || ["yy", m],
    x[2] = t,
    x[3] = +e > 0,
    x[4] = r,
    QW.apply(null, x)
}
function ZW(e) {
    return e === void 0 ? vi : typeof e == "function" ? (vi = e,
    !0) : !1
}
function JW(e, t) {
    return Bs[e] === void 0 ? !1 : t === void 0 ? Bs[e] : (Bs[e] = t,
    e === "s" && (Bs.ss = t - 1),
    !0)
}
function XW(e, t) {
    if (!this.isValid())
        return this.localeData().invalidDate();
    var n = !1, r = Bs, o, s;
    return typeof e == "object" && (t = e,
    e = !1),
    typeof e == "boolean" && (n = e),
    typeof t == "object" && (r = Object.assign({}, Bs, t),
    t.s != null && t.ss == null && (r.ss = t.s - 1)),
    o = this.localeData(),
    s = KW(this, !n, r, o),
    n && (s = o.pastFuture(+this, s)),
    o.postformat(s)
}
var Sp = Math.abs;
function Ts(e) {
    return (e > 0) - (e < 0) || +e
}
function hd() {
    if (!this.isValid())
        return this.localeData().invalidDate();
    var e = Sp(this._milliseconds) / 1e3, t = Sp(this._days), n = Sp(this._months), r, o, s, l, c = this.asSeconds(), f, h, v, m;
    return c ? (r = dr(e / 60),
    o = dr(r / 60),
    e %= 60,
    r %= 60,
    s = dr(n / 12),
    n %= 12,
    l = e ? e.toFixed(3).replace(/\.?0+$/, "") : "",
    f = c < 0 ? "-" : "",
    h = Ts(this._months) !== Ts(c) ? "-" : "",
    v = Ts(this._days) !== Ts(c) ? "-" : "",
    m = Ts(this._milliseconds) !== Ts(c) ? "-" : "",
    f + "P" + (s ? h + s + "Y" : "") + (n ? h + n + "M" : "") + (t ? v + t + "D" : "") + (o || r || e ? "T" : "") + (o ? m + o + "H" : "") + (r ? m + r + "M" : "") + (e ? m + l + "S" : "")) : "P0D"
}
var Ye = fd.prototype;
Ye.isValid = V8;
Ye.abs = kW;
Ye.add = CW;
Ye.subtract = OW;
Ye.as = PW;
Ye.asMilliseconds = t2;
Ye.asSeconds = RW;
Ye.asMinutes = DW;
Ye.asHours = IW;
Ye.asDays = MW;
Ye.asWeeks = AW;
Ye.asMonths = NW;
Ye.asQuarters = LW;
Ye.asYears = jW;
Ye.valueOf = $W;
Ye._bubble = TW;
Ye.clone = FW;
Ye.get = WW;
Ye.milliseconds = zW;
Ye.seconds = UW;
Ye.minutes = YW;
Ye.hours = BW;
Ye.days = HW;
Ye.weeks = qW;
Ye.months = VW;
Ye.years = GW;
Ye.humanize = XW;
Ye.toISOString = hd;
Ye.toString = hd;
Ye.toJSON = hd;
Ye.locale = UE;
Ye.localeData = BE;
Ye.toIsoString = vr("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", hd);
Ye.lang = YE;
xe("X", 0, 0, "unix");
xe("x", 0, 0, "valueOf");
pe("x", ad);
pe("X", _7);
it("X", function(e, t, n) {
    n._d = new Date(parseFloat(e) * 1e3)
});
it("x", function(e, t, n) {
    n._d = new Date(We(e))
});
//! moment.js
ce.version = "2.30.1";
e7(ht);
ce.fn = re;
ce.min = U8;
ce.max = Y8;
ce.now = B8;
ce.utc = ni;
ce.unix = yW;
ce.months = _W;
ce.isDate = eu;
ce.locale = ho;
ce.invalid = rd;
ce.duration = Nr;
ce.isMoment = Ar;
ce.weekdays = SW;
ce.parseZone = wW;
ce.localeData = Ii;
ce.isDuration = Yc;
ce.monthsShort = xW;
ce.weekdaysMin = EW;
ce.defineLocale = m0;
ce.updateLocale = w8;
ce.locales = _8;
ce.weekdaysShort = bW;
ce.normalizeUnits = yr;
ce.relativeTimeRounding = ZW;
ce.relativeTimeThreshold = JW;
ce.calendarFormat = gF;
ce.prototype = re;
ce.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
};
const n2 = "default";
ve.setDefaultNamespace(n2);
const ez = e => {
    const [t,n,r] = e.split("_");
    let o = t;
    return r && (o += `-${r}`),
    n && (o += `-${n}`),
    new Intl.Locale(o)
}
  , tz = e => {
    try {
        if (e.keyUiLanguageTag)
            return new Intl.Locale(e.keyUiLanguageTag);
        if (e.keyUiLocale)
            return ez(e.keyUiLocale)
    } catch {
        console.error("Unable to parse locale from user settings:", {
            userSettings: e
        })
    }
    return new Intl.Locale(window.navigator.language)
}
  , nz = e => {
    const {language: t, script: n, region: r} = e
      , o = [];
    n && r && o.push(`${t}_${r}_${n}`, `${t}-${n}-${r}`),
    r && o.push(`${t}_${r}`, `${t}-${r}`),
    n && o.push(`${t}_${n}`, `${t}-${n}`),
    o.push(t);
    let s;
    const l = [];
    for (const f of o) {
        if (ve.hasResourceBundle(f, n2)) {
            s = f;
            break
        }
        l.push(f)
    }
    l.length > 0 && console.log(`Translations for locale(s) ${l.join(", ")} not found`);
    const c = s || t;
    ve.changeLanguage(c),
    console.log("🗺 Global d2-i18n locale initialized:", c)
}
  , rz = async e => {
    const {language: t, region: n, script: r} = e;
    if (e.language === "en" || e.baseName === "en-US")
        return;
    const o = [];
    r && o.push(`${t}-${r}`.toLowerCase()),
    n && o.push(`${t}-${n}`.toLowerCase()),
    o.push(t);
    for (const s of o)
        try {
            await Hb( () => import(`moment/dist/locale/${s}`), [], import.meta.url),
            ce.locale(s);
            break
        } catch {
            continue
        }
}
  , iz = e => {
    let {localeDirection: t, configDirection: n} = e;
    if (!["auto", "ltr", "rtl"].includes(n)) {
        document.documentElement.setAttribute("dir", "ltr");
        return
    }
    const r = n === "auto" ? t : n;
    document.documentElement.setAttribute("dir", r)
}
  , r2 = e => {
    let {userSettings: t, configDirection: n} = e;
    const [r,o] = ee.useState({
        locale: void 0,
        direction: void 0
    });
    return ee.useEffect( () => {
        if (!t)
            return;
        const s = tz(t);
        nz(s),
        rz(s);
        const l = ve.dir(s.language);
        iz({
            localeDirection: l,
            configDirection: n
        }),
        document.documentElement.setAttribute("lang", s.baseName),
        o({
            locale: s,
            direction: l
        })
    }
    , [t, n]),
    r
}
  , oz = {
    userSettings: {
        resource: "userSettings"
    }
}
  , sz = e => {
    const {loading: t, error: n, data: r} = Qm(oz)
      , {locale: o, direction: s} = r2({
        userSettings: r && r.userSettings,
        configDirection: e
    });
    if (n)
        throw new Error("Failed to fetch user locale: " + n);
    return {
        loading: t || !o,
        locale: o,
        direction: s
    }
}
  , az = {
    loginConfig: {
        resource: "loginConfig"
    }
}
  , lz = () => {
    const {loading: e, data: t, error: n} = Qm(az)
      , r = ee.useMemo( () => {
        var s;
        return {
            userSettings: {
                keyUiLocale: t && ((t == null || (s = t.loginConfig) === null || s === void 0 ? void 0 : s.uiLocale) || window.navigator.language)
            },
            configDirection: "auto"
        }
    }
    , [t])
      , o = r2(r);
    return n && console.error(n),
    {
        loading: e || !o,
        locale: o
    }
}
  , uz = {
    user: {
        resource: "me",
        params: {
            fields: ["id"]
        }
    }
}
  , r_ = "dhis2.latestUser";
function cz() {
    const {pwaEnabled: e} = Zl()
      , [t,n] = ee.useState(!1)
      , {loading: r, error: o} = Qm(uz, {
        onComplete: async s => {
            const l = localStorage.getItem(r_)
              , c = s.user.id;
            if (c !== l) {
                const f = await r$();
                if (localStorage.setItem(r_, c),
                f && e)
                    return window.location.reload()
            }
            n(!0)
        }
    });
    if (o)
        throw new Error("Failed to fetch user ID: " + o);
    return {
        loading: r || !t
    }
}
function zg() {
    return zg = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    zg.apply(null, arguments)
}
const fz = () => {
    const [e] = ee.useState(new Map)
      , [,t] = ee.useState(null)
      , n = EN()
      , r = ee.useCallback(function() {
        let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        const l = new Set;
        s.forEach(c => {
            l.add(c.id),
            e.has(c.id) || e.set(c.id, {
                ...c,
                options: {
                    ...c.options,
                    hidden: c.options.hidden || !1
                }
            })
        }
        ),
        e.forEach(c => {
            l.has(c.id) || (c.options.hidden = !0)
        }
        )
    }, [e])
      , o = ee.useCallback(s => {
        e.delete(s),
        t(s)
    }
    , [e]);
    return r(n),
    {
        alerts: Array.from(e.values()).sort( (s, l) => s.id - l.id),
        removeAlert: o
    }
}
  , Ug = () => {
    const {alerts: e, removeAlert: t} = fz();
    return I.createElement(VS, null, e.map(n => {
        let {message: r, remove: o, id: s, options: {onHidden: l, ...c}} = n;
        return I.createElement(HS, zg({}, c, {
            key: s,
            onHidden: () => {
                l && l(),
                t(s),
                o()
            }
        }), r)
    }
    ))
}
  , dz = "Cancel"
  , hz = "Reload"
  , pz = "Server"
  , gz = "Username"
  , mz = "Password"
  , vz = {
    "Save your data": "Save your data",
    "Updating will reload all {{n}} open instances of this app, and any unsaved data will be lost. Save any data you need to, then click 'Reload' when ready.": "Updating will reload all {{n}} open instances of this app, and any unsaved data will be lost. Save any data you need to, then click 'Reload' when ready.",
    "Updating will reload all open instances of this app, and any unsaved data will be lost. Save any data you need to, then click 'Reload' when ready.": "Updating will reload all open instances of this app, and any unsaved data will be lost. Save any data you need to, then click 'Reload' when ready.",
    Cancel: dz,
    Reload: hz,
    "An error occurred in the DHIS2 application.": "An error occurred in the DHIS2 application.",
    "Technical details copied to clipboard": "Technical details copied to clipboard",
    "There was a problem loading this plugin": "There was a problem loading this plugin",
    "Copy debug info to clipboard": "Copy debug info to clipboard",
    "Try again": "Try again",
    "Something went wrong": "Something went wrong",
    "Redirect to safe login mode": "Redirect to safe login mode",
    "Hide technical details": "Hide technical details",
    "Show technical details": "Show technical details",
    "The following information may be requested by technical support.": "The following information may be requested by technical support.",
    "Copy technical details to clipboard": "Copy technical details to clipboard",
    "Signing in...": "Signing in...",
    "Sign in": "Sign in",
    "Going to app...": "Going to app...",
    "Go to app": "Go to app",
    "Please sign in": "Please sign in",
    "Specify server": "Specify server",
    "Could not log in": "Could not log in",
    Server: pz,
    Username: gz,
    Password: mz
}
  , yz = "Servidor"
  , wz = "Nombre de usuario"
  , _z = "Contraseña"
  , xz = {
    "Please sign in": "Por favor iniciar sesión",
    Server: yz,
    Username: wz,
    Password: _z,
    "Sign in": "Iniciar sesión",
    "An error occurred in the DHIS2 application.": "",
    "Something went wrong": "",
    "Refresh to try again": "",
    "Hide technical details": "",
    "Show technical details": "",
    "The following information may be requested by technical support.": ""
}
  , Sz = "Serveur"
  , bz = "Nom d'utilizateur"
  , Ez = "Mot de passe"
  , kz = {
    "Please sign in": "Se connecter, s'il vous plait",
    Server: Sz,
    Username: bz,
    Password: Ez,
    "Sign in": "Connexion",
    "An error occurred in the DHIS2 application.": "",
    "Something went wrong": "",
    "Refresh to try again": "",
    "Hide technical details": "",
    "Show technical details": "",
    "The following information may be requested by technical support.": ""
}
  , k0 = "default";
ve.addResources("en", k0, vz);
ve.addResources("es", k0, xz);
ve.addResources("fr", k0, kz);
b.number,
b.func,
b.func;
const Cz = "#21934"
  , bp = "#a0adba"
  , i_ = "#f3f5f7"
  , Oz = "#147cd7"
  , Tz = "#6C7787"
  , Hc = [`button.jsx-1751666061{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:4px;font-weight:400;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;-webkit-transition:all 0.15s cubic-bezier(0.4,0,0.6,1);transition:all 0.15s cubic-bezier(0.4,0,0.6,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:${Cz};height:36px;padding:0 12px;font-size:14px;line-height:16px;border:1px solid ${bp};background-color:#f9fafb;}`, "button.jsx-1751666061:disabled{cursor:not-allowed;}", "button.jsx-1751666061:focus{outline:none;}", "button.jsx-1751666061::after{content:' ';pointer-events:none;position:absolute;top:-2px;right:-2px;bottom:-2px;left:-2px;z-index:1;border:2px solid transparent;border-radius:inherit;-webkit-transition:border-color 0.15s cubic-bezier(0.4,0,0.6,1);transition:border-color 0.15s cubic-bezier(0.4,0,0.6,1);}", "button.jsx-1751666061:active.jsx-1751666061:focus.jsx-1751666061::after,button.jsx-1751666061:disabled.jsx-1751666061:focus.jsx-1751666061::after{border-color:transparent;}", `button.jsx-1751666061:hover{border-color:${bp};background-color:${i_};}`, `button.jsx-1751666061:active,button.jsx-1751666061:active.jsx-1751666061:focus{border-color:${bp};background-color:${i_};box-shadow:0 0 0 1px rgb(0,0,0,0.1) inset;}`, "button.jsx-1751666061:focus{background-color:#f9fafb;}", `button.jsx-1751666061:focus.jsx-1751666061::after{border-color:${Oz};}`, `.pluginButton.jsx-1751666061{height:28px;padding:0 6px;font-size:14px;line-height:16px;color:${Tz};}`];
Hc.__hash = "1751666061";
const Pz = "#F4F6F8"
  , Rz = "#B0BEC5"
  , Dz = "#000000"
  , Ep = "#494949"
  , Iz = "#D32F2F"
  , Mz = "#FBFCFD"
  , Az = "#F8F9FA"
  , o_ = "#6C7787"
  , $t = [`.mask.jsx-4038532877{min-height:480px;height:100%;width:100%;overflow:auto;overflow-y:auto;color:${Dz};background-color:${Pz};display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}`, ".fullscreen.jsx-4038532877{position:absolute;top:0px;left:0px;right:0px;bottom:0px;}", ".container.jsx-4038532877{text-align:center;color:black;}", `.icon.jsx-4038532877{width:96px;height:96px;color:${Rz};margin-bottom:24px;}`, ".message.jsx-4038532877{font-size:24px;font-weight:normal;margin-top:0;margin-bottom:24px;}", ".retry.jsx-4038532877{margin-bottom:24px;}", `.drawerToggle.jsx-4038532877{font-size:12px;color:${Ep};-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;margin-bottom:12px;background:none;border:none;}`, `.drawer.jsx-4038532877{margin:auto;padding:8px;display:block;height:250px;width:min(500px,100%);overflow:auto;overflow-y:auto;background:${Mz};border:1px solid ${Ep};text-align:left;}`, ".hidden.jsx-4038532877{display:none;}", ".errorIntro.jsx-4038532877{margin-bottom:16px;}", `.errorIntro.jsx-4038532877 p.jsx-4038532877{margin-top:0;margin-bottom:4px;font-size:14px;color:${Ep};}`, `.errorDetails.jsx-4038532877{white-space:pre-wrap;font-size:12px;line-height:1.2;color:${Iz};font-family:Menlo,Courier,monospace !important;}`, `.pluginBoundary.jsx-4038532877{background-color:${Az};height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-block-start:16px;}`, `.pluginErrorMessage.jsx-4038532877{margin-block-start:8px;color:${o_};}`, `.pluginErrorCopy.jsx-4038532877{margin-block-start:8px;color:${o_};-webkit-text-decoration:underline;text-decoration:underline;font-size:14px;}`, ".pluginRetry.jsx-4038532877{margin-block-start:16px;}"];
$t.__hash = "4038532877";
function Ec(e, t, n) {
    return (t = Nz(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Nz(e) {
    var t = Lz(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function Lz(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
const al = e => {
    let {children: t, onClick: n, plugin: r} = e;
    return I.createElement(I.Fragment, null, I.createElement(de, {
        id: Hc.__hash
    }, Hc), I.createElement("button", {
        onClick: n,
        className: `jsx-${Hc.__hash} ` + ((r ? "pluginButton" : null) || "")
    }, t))
}
;
al.propTypes = {
    children: b.node.isRequired,
    onClick: b.func.isRequired,
    plugin: b.bool
};
const jz = () => I.createElement("svg", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
}, I.createElement("path", {
    d: "m12 2c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10-10-4.4771525-10-10 4.4771525-10 10-10zm0 2c-4.418278 0-8 3.581722-8 8s3.581722 8 8 8 8-3.581722 8-8-3.581722-8-8-8zm1 7v6h-2v-6zm-1-4c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1-1-.44771525-1-1 .4477153-1 1-1z",
    fill: "#A0ADBA"
}))
  , $z = ve.t("An error occurred in the DHIS2 application.");
class fa extends ee.Component {
    constructor(t) {
        super(t),
        Ec(this, "toggleTechInfoDrawer", () => {
            this.setState({
                drawerOpen: !this.state.drawerOpen
            })
        }
        ),
        Ec(this, "handleCopyErrorDetails", () => {
            const n = this.errorDetailsRef.current.textContent;
            navigator.clipboard.writeText(n).then( () => {
                alert(ve.t("Technical details copied to clipboard"))
            }
            )
        }
        ),
        Ec(this, "handleCopyErrorDetailsPlugin", n => {
            let {error: r, errorInfo: o} = n;
            const s = `${r}
${r == null ? void 0 : r.stack}
${o == null ? void 0 : o.componentStack}`;
            navigator.clipboard.writeText(s).then( () => {
                alert(ve.t("Technical details copied to clipboard"))
            }
            )
        }
        ),
        Ec(this, "handleSafeLoginRedirect", () => {
            window.location.href = this.props.baseURL + (this.props.baseURL.endsWith("/") ? "" : "/") + "dhis-web-commons/security/login.action"
        }
        ),
        this.state = {
            error: null,
            errorInfo: null,
            drawerOpen: !1
        },
        this.errorDetailsRef = I.createRef()
    }
    componentDidCatch(t, n) {
        this.props.plugin && this.props.onPluginError && (console.error(t),
        this.props.onPluginError(t)),
        this.setState({
            error: t,
            errorInfo: n
        })
    }
    render() {
        const {children: t, fullscreen: n, onRetry: r, loginApp: o, baseURL: s} = this.props;
        return this.state.error ? this.props.plugin ? I.createElement(I.Fragment, null, I.createElement(de, {
            id: $t.__hash
        }, $t), I.createElement("div", {
            className: `jsx-${$t.__hash} pluginBoundary`
        }, I.createElement(jz, null), I.createElement("div", {
            className: `jsx-${$t.__hash} pluginErrorMessage`
        }, ve.t("There was a problem loading this plugin")), I.createElement("div", {
            onClick: () => {
                this.handleCopyErrorDetailsPlugin({
                    error: this.state.error,
                    errorInfo: this.state.errorInfo
                })
            }
            ,
            className: `jsx-${$t.__hash} pluginErrorCopy`
        }, ve.t("Copy debug info to clipboard")), r && I.createElement("div", {
            className: `jsx-${$t.__hash} pluginRetry`
        }, I.createElement(al, {
            onClick: r,
            plugin: !0
        }, ve.t("Try again"))))) : I.createElement("div", {
            className: `jsx-${$t.__hash} ` + (dn("mask", {
                fullscreen: n
            }) || "")
        }, I.createElement(de, {
            id: $t.__hash
        }, $t), I.createElement("div", {
            className: `jsx-${$t.__hash} container`
        }, I.createElement("h1", {
            className: `jsx-${$t.__hash} message`
        }, ve.t("Something went wrong")), o && s && I.createElement("div", {
            className: `jsx-${$t.__hash} retry`
        }, I.createElement(al, {
            onClick: this.handleSafeLoginRedirect
        }, ve.t("Redirect to safe login mode"))), r && I.createElement("div", {
            className: `jsx-${$t.__hash} retry`
        }, I.createElement(al, {
            onClick: r
        }, ve.t("Try again"))), I.createElement("button", {
            onClick: this.toggleTechInfoDrawer,
            className: `jsx-${$t.__hash} drawerToggle`
        }, this.state.drawerOpen ? ve.t("Hide technical details") : ve.t("Show technical details")), I.createElement("div", {
            className: `jsx-${$t.__hash} ` + (dn("drawer", {
                hidden: !this.state.drawerOpen
            }) || "")
        }, I.createElement("div", {
            className: `jsx-${$t.__hash} errorIntro`
        }, I.createElement("p", {
            className: `jsx-${$t.__hash}`
        }, $z), I.createElement("p", {
            className: `jsx-${$t.__hash}`
        }, ve.t("The following information may be requested by technical support.")), I.createElement(al, {
            onClick: this.handleCopyErrorDetails
        }, ve.t("Copy technical details to clipboard"))), I.createElement("pre", {
            ref: this.errorDetailsRef,
            className: `jsx-${$t.__hash} errorDetails`
        }, `${this.state.error}
`, this.state.error.stack, this.state.errorInfo.componentStack)))) : t
    }
}
fa.propTypes = {
    children: b.node.isRequired,
    baseURL: b.string,
    fullscreen: b.bool,
    loginApp: b.bool,
    plugin: b.bool,
    onPluginError: b.func,
    onRetry: b.func
};
const C0 = () => I.createElement(qf, {
    level: ul.alert
}, I.createElement(Ql, null, I.createElement(ta, null)))
  , Bn = ["div.app-shell-adapter.jsx-1964929281{width:100vw;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", "div.app-shell-app.jsx-1964929281{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;overflow:auto;height:100%;}"];
Bn.__hash = "1964929281";
const i2 = e => {
    let {children: t, plugin: n, onPluginError: r, clearPluginError: o, direction: s} = e;
    const {loading: l, direction: c} = sz(s)
      , {loading: f} = cz();
    return l || f ? I.createElement(C0, null) : n ? I.createElement("div", {
        className: `jsx-${Bn.__hash} app-shell-adapter`
    }, I.createElement(de, {
        id: Bn.__hash
    }, Bn), I.createElement("div", {
        className: `jsx-${Bn.__hash} app-shell-app`
    }, I.createElement(fa, {
        plugin: !0,
        onPluginError: r,
        onRetry: () => {
            o && o(),
            window.location.reload()
        }
    }, t)), I.createElement(Ug, null)) : I.createElement("div", {
        className: `jsx-${Bn.__hash} app-shell-adapter`
    }, I.createElement(de, {
        id: Bn.__hash
    }, Bn), I.createElement("div", {
        className: `jsx-${Bn.__hash} app-shell-app`
    }, I.createElement(fa, {
        onRetry: () => window.location.reload()
    }, t)), I.createElement(Ug, null))
}
;
i2.propTypes = {
    children: b.node,
    clearPluginError: b.func,
    direction: b.oneOf(["ltr", "rtl", "auto"]),
    plugin: b.bool,
    onPluginError: b.func
};
const o2 = e => {
    let {children: t} = e;
    const {loading: n} = lz()
      , {baseUrl: r} = Zl();
    return n ? I.createElement(C0, null) : I.createElement("div", {
        className: `jsx-${Bn.__hash} app-shell-adapter`
    }, I.createElement(de, {
        id: Bn.__hash
    }, Bn), I.createElement("div", {
        className: `jsx-${Bn.__hash} app-shell-app`
    }, I.createElement(fa, {
        onRetry: () => window.location.reload(),
        loginApp: !0,
        baseURL: r
    }, t)), I.createElement(Ug, null))
}
;
o2.propTypes = {
    children: b.node
};
const s2 = e => {
    let {children: t} = e;
    const [n,r] = ee.useState(!1)
      , o = cE();
    return ee.useEffect( () => {
        (async () => {
            const l = await o.getRegistrationState()
              , c = await o.getClientsInfo();
            (l === iE || l === oE) && c.clientsCount === 1 ? (console.log("Reloading on startup to activate waiting service worker"),
            o.useNewSW()) : r(!0)
        }
        )().catch(l => {
            console.error(l),
            r(!0)
        }
        )
    }
    , [o]),
    n ? t : null
}
;
s2.propTypes = {
    children: b.node.isRequired
};
const O0 = (e, t) => {
    const n = new AbortController
      , r = new Promise( (o, s) => {
        fetch(e, {
            ...t,
            credentials: "include",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                Accept: "application/json",
                ...t.headers
            },
            signal: n.signal
        }).then(l => {
            if (l.status !== 200) {
                l.json().then(c => {
                    s(c)
                }
                ).catch( () => {
                    s("Request failed " + l.statusText)
                }
                );
                return
            }
            try {
                o(l.json())
            } catch {
                o(l.text())
            }
        }
        ).catch(l => {
            console.error("Network error: ", l),
            s("Network error")
        }
        )
    }
    );
    return r.abort = () => n.abort(),
    r
}
  , Yg = e => O0(e, {
    method: "GET"
})
  , Fz = (e, t) => O0(e, {
    method: "POST",
    body: t,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
  , Wz = (e, t) => O0(e, {
    method: "POST",
    body: t,
    headers: {
        "Content-Type": "application/json"
    }
})
  , a2 = e => {
    const [t,n] = (e == null ? void 0 : e.split("-")) || []
      , [r,o,s] = (t == null ? void 0 : t.split(".")) || [];
    return {
        full: e,
        major: parseInt(r) || void 0,
        minor: parseInt(o) || void 0,
        patch: parseInt(s) || void 0,
        tag: n
    }
}
  , zz = e => {
    const t = a2(e);
    return (!t.major || !t.minor || t.major !== 2) && console.warn("Improperly formatted DHIS2 systemInfo server version", e),
    t
}
  , ll = [".errorNotification.jsx-4203289217{margin-block:8px;}"];
ll.__hash = "4203289217";
const Uz = "../../.."
  , Yz = async e => {
    try {
        return await Yg(`${e}/api/loginConfig`),
        !0
    } catch (t) {
        return console.error(t),
        !1
    }
}
  , Bz = async e => {
    let {server: t, username: n, password: r, setError: o, setIsLoggingIn: s} = e;
    try {
        await Wz(`${t}/api/auth/login`, JSON.stringify({
            username: n,
            password: r
        })),
        window.location.reload()
    } catch (l) {
        o(l),
        s(!1)
    }
}
  , Hz = async e => {
    let {server: t, username: n, password: r} = e;
    try {
        await Fz(`${t}/dhis-web-commons-security/login.action`, `j_username=${encodeURIComponent(n)}&j_password=${encodeURIComponent(r)}`)
    } catch (o) {
        console.error(o)
    } finally {
        window.location.reload()
    }
}
  , l2 = e => {
    let {appName: t, baseUrl: n, loginApp: r=!1} = e;
    const [o,s] = ee.useState(n || "")
      , [l,c] = ee.useState("")
      , [f,h] = ee.useState("")
      , [v,m] = ee.useState(!1)
      , [x,E] = ee.useState(null)
      , [T,N] = ee.useState(!1)
      , B = D => D && D.length >= 2
      , P = D => {
        let {loginApp: z, isLoggingIn: H} = D;
        return z ? H ? ve.t("Going to app...") : ve.t("Go to app") : H ? ve.t("Signing in...") : ve.t("Sign in")
    }
      , O = async D => {
        D.preventDefault(),
        m(!0),
        B(o) && (B(l) && B(f) || r) && (N(!0),
        await Yz(o) ? Bz({
            server: o,
            username: l,
            password: f,
            setError: E,
            setIsLoggingIn: N
        }) : Hz({
            server: o,
            username: l,
            password: f
        }))
    }
    ;
    return I.createElement(Nb, {
        open: !0,
        small: !0,
        dataTest: "dhis2-adapter-loginmodal"
    }, I.createElement(de, {
        id: ll.__hash
    }, ll), I.createElement("form", {
        onSubmit: O,
        className: `jsx-${ll.__hash}`
    }, I.createElement($b, null, r ? ve.t("Specify server") : ve.t("Please sign in")), I.createElement(jb, null, x && I.createElement("div", {
        className: `jsx-${ll.__hash} errorNotification`
    }, I.createElement(Yb, {
        error: !0,
        title: ve.t("Could not log in")
    }, x == null ? void 0 : x.message)), !Uz, !r && I.createElement(I.Fragment, null, I.createElement(yf, {
        dataTest: "dhis2-adapter-loginname",
        error: v && !B(l),
        label: ve.t("Username"),
        name: "j_username",
        type: "text",
        value: l,
        onChange: D => c(D.value)
    }), I.createElement(yf, {
        dataTest: "dhis2-adapter-loginpassword",
        error: v && !B(f),
        label: ve.t("Password"),
        name: "j_password",
        type: "password",
        value: f,
        onChange: D => h(D.value)
    }))), I.createElement(Lb, null, I.createElement(R_, {
        primary: !0,
        dataTest: "dhis2-adapter-loginsubmit",
        type: "submit",
        disabled: T
    }, P({
        loginApp: r,
        isLoggingIn: T
    })))))
}
;
l2.propTypes = {
    appName: b.string,
    baseUrl: b.string,
    loginApp: b.bool
};
const Bg = e => {
    let {appName: t, appVersion: n, url: r, apiVersion: o, pwaEnabled: s, plugin: l, parentAlertsAdd: c, showAlertsInPlugin: f, loginApp: h, children: v} = e;
    const m = cE()
      , [x,E] = ee.useState({
        loading: !0,
        error: void 0,
        systemInfo: void 0
    })
      , [T,N] = ee.useState({
        loading: !r,
        error: void 0,
        baseUrl: r
    })
      , [B,P] = ee.useState(s)
      , {systemInfo: O} = x
      , {baseUrl: D} = T;
    if (ee.useEffect( () => {
        if (!D) {
            N(W => W.loading ? W : {
                loading: !0,
                error: void 0,
                systemInfo: void 0
            }),
            P$(t).then(W => {
                if (W) {
                    N({
                        loading: !1,
                        error: void 0,
                        baseUrl: W
                    });
                    return
                }
                const G = window.localStorage.DHIS2_BASE_URL;
                if (G)
                    return N({
                        loading: !1,
                        error: void 0,
                        baseUrl: G
                    }),
                    T$({
                        appName: t,
                        baseUrl: G
                    });
                N({
                    loading: !1,
                    error: new Error("No url specified"),
                    baseUrl: void 0
                })
            }
            ).catch(W => {
                console.error(W),
                N({
                    loading: !1,
                    error: W,
                    baseUrl: void 0
                })
            }
            );
            return
        }
        if (E(W => W.loading ? W : {
            loading: !0,
            error: void 0,
            systemInfo: void 0
        }),
        h) {
            Yg(`${D}/api/loginConfig`).then(G => {
                var ye;
                E({
                    loading: !1,
                    error: void 0,
                    systemInfo: {
                        version: (ye = G.apiVersion) !== null && ye !== void 0 ? ye : "2.41"
                    }
                })
            }
            ).catch(G => {
                E({
                    loading: !1,
                    error: G,
                    systemInfo: void 0
                })
            }
            );
            return
        }
        const F = Yg(`${D}/api/system/info`);
        return F.then(W => {
            E({
                loading: !1,
                error: void 0,
                systemInfo: W
            })
        }
        ).catch(W => {
            E({
                loading: !1,
                error: W,
                systemInfo: void 0
            })
        }
        ),
        () => {
            F.abort()
        }
    }
    , [t, D, h]),
    ee.useEffect( () => {
        s && m.ready.then( () => {
            P(!1)
        }
        )
    }
    , [m, s]),
    x.error || T.error)
        return I.createElement(l2, {
            appName: t,
            baseUrl: D,
            loginApp: h
        });
    if (x.loading || T.loading || B)
        return I.createElement(C0, null);
    const z = zz(O.version)
      , H = z.minor;
    return I.createElement(Mb, {
        config: {
            appName: t,
            appVersion: a2(n),
            baseUrl: D,
            apiVersion: o || H,
            serverVersion: z,
            systemInfo: O,
            pwaEnabled: s
        },
        offlineInterface: h ? null : m,
        plugin: l,
        parentAlertsAdd: c,
        showAlertsInPlugin: f
    }, v)
}
;
Bg.propTypes = {
    appName: b.string.isRequired,
    appVersion: b.string.isRequired,
    apiVersion: b.number,
    children: b.element,
    loginApp: b.bool,
    parentAlertsAdd: b.func,
    plugin: b.bool,
    pwaEnabled: b.bool,
    showAlertsInPlugin: b.bool,
    url: b.string
};
const u2 = e => {
    let {appName: t, appVersion: n, url: r, apiVersion: o, direction: s, pwaEnabled: l, plugin: c, parentAlertsAdd: f, showAlertsInPlugin: h, onPluginError: v, clearPluginError: m, loginApp: x, children: E} = e;
    return x ? I.createElement(fa, {
        fullscreen: !0,
        onRetry: () => {
            window.location.reload()
        }
        ,
        plugin: !1,
        loginApp: !0,
        baseURL: r
    }, I.createElement(Bg, {
        appName: t,
        appVersion: n,
        url: r,
        apiVersion: o,
        pwaEnabled: l,
        loginApp: x,
        plugin: !1
    }, I.createElement(o2, null, E))) : I.createElement(fa, {
        plugin: c,
        fullscreen: !0,
        onRetry: G$
    }, I.createElement(uE, null, I.createElement(s2, null, I.createElement(Bg, {
        appName: t,
        appVersion: n,
        url: r,
        apiVersion: o,
        pwaEnabled: l,
        plugin: c,
        parentAlertsAdd: f,
        showAlertsInPlugin: h
    }, I.createElement(i2, {
        plugin: c,
        onPluginError: v,
        clearPluginError: m,
        direction: s
    }, E)))))
}
;
u2.propTypes = {
    appName: b.string.isRequired,
    appVersion: b.string.isRequired,
    apiVersion: b.number,
    children: b.element,
    clearPluginError: b.func,
    direction: b.oneOf(["ltr", "rtl", "auto"]),
    loginApp: b.bool,
    parentAlertsAdd: b.func,
    plugin: b.bool,
    pwaEnabled: b.bool,
    showAlertsInPlugin: b.bool,
    url: b.string,
    onPluginError: b.func
};
var c2 = {
    exports: {}
}
  , f2 = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(typeof self < "u" ? self : Gr, function() {
        return function(n) {
            var r = {};
            function o(s) {
                if (r[s])
                    return r[s].exports;
                var l = r[s] = {
                    i: s,
                    l: !1,
                    exports: {}
                };
                return n[s].call(l.exports, l, l.exports, o),
                l.l = !0,
                l.exports
            }
            return o.m = n,
            o.c = r,
            o.d = function(s, l, c) {
                o.o(s, l) || Object.defineProperty(s, l, {
                    enumerable: !0,
                    get: c
                })
            }
            ,
            o.r = function(s) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(s, "__esModule", {
                    value: !0
                })
            }
            ,
            o.t = function(s, l) {
                if (1 & l && (s = o(s)),
                8 & l || 4 & l && typeof s == "object" && s && s.__esModule)
                    return s;
                var c = Object.create(null);
                if (o.r(c),
                Object.defineProperty(c, "default", {
                    enumerable: !0,
                    value: s
                }),
                2 & l && typeof s != "string")
                    for (var f in s)
                        o.d(c, f, (function(h) {
                            return s[h]
                        }
                        ).bind(null, f));
                return c
            }
            ,
            o.n = function(s) {
                var l = s && s.__esModule ? function() {
                    return s.default
                }
                : function() {
                    return s
                }
                ;
                return o.d(l, "a", l),
                l
            }
            ,
            o.o = function(s, l) {
                return {}.hasOwnProperty.call(s, l)
            }
            ,
            o.p = "",
            o(o.s = 0)
        }([function(n, r, o) {
            o.r(r),
            o.d(r, "Promise", function() {
                return fe
            }),
            o.d(r, "TYPES", function() {
                return Ed
            }),
            o.d(r, "ProxyWindow", function() {
                return vn
            }),
            o.d(r, "setup", function() {
                return vu
            }),
            o.d(r, "destroy", function() {
                return us
            }),
            o.d(r, "serializeMessage", function() {
                return _d
            }),
            o.d(r, "deserializeMessage", function() {
                return xd
            }),
            o.d(r, "createProxyWindow", function() {
                return Sd
            }),
            o.d(r, "toProxyWindow", function() {
                return bd
            }),
            o.d(r, "on", function() {
                return Fr
            }),
            o.d(r, "once", function() {
                return mu
            }),
            o.d(r, "send", function() {
                return Wr
            }),
            o.d(r, "markWindowKnown", function() {
                return ss
            }),
            o.d(r, "cleanUpWindow", function() {
                return cs
            }),
            o.d(r, "bridge", function() {});
            function s(p) {
                return {}.toString.call(p) === "[object RegExp]"
            }
            var l = `Call was rejected by callee.\r
`;
            function c(p) {
                return p === void 0 && (p = window),
                p.location.protocol
            }
            function f(p) {
                if (p === void 0 && (p = window),
                p.mockDomain) {
                    var k = p.mockDomain.split("//")[0];
                    if (k)
                        return k
                }
                return c(p)
            }
            function h(p) {
                return p === void 0 && (p = window),
                f(p) === "about:"
            }
            function v(p) {
                if (p === void 0 && (p = window),
                p)
                    try {
                        if (p.parent && p.parent !== p)
                            return p.parent
                    } catch {}
            }
            function m(p) {
                if (p === void 0 && (p = window),
                p && !v(p))
                    try {
                        return p.opener
                    } catch {}
            }
            function x(p) {
                try {
                    return !0
                } catch {}
                return !1
            }
            function E(p) {
                p === void 0 && (p = window);
                var k = p.location;
                if (!k)
                    throw new Error("Can not read window location");
                var y = c(p);
                if (!y)
                    throw new Error("Can not read window protocol");
                if (y === "file:")
                    return "file://";
                if (y === "about:") {
                    var C = v(p);
                    return C && x() ? E(C) : "about://"
                }
                var M = k.host;
                if (!M)
                    throw new Error("Can not read window host");
                return y + "//" + M
            }
            function T(p) {
                p === void 0 && (p = window);
                var k = E(p);
                return k && p.mockDomain && p.mockDomain.indexOf("mock:") === 0 ? p.mockDomain : k
            }
            function N(p) {
                if (!function(k) {
                    try {
                        if (k === window)
                            return !0
                    } catch {}
                    try {
                        var y = Object.getOwnPropertyDescriptor(k, "location");
                        if (y && y.enumerable === !1)
                            return !1
                    } catch {}
                    try {
                        if (h(k) && x())
                            return !0
                    } catch {}
                    try {
                        if (function(C) {
                            return C === void 0 && (C = window),
                            f(C) === "mock:"
                        }(k) && x())
                            return !0
                    } catch {}
                    try {
                        if (E(k) === E(window))
                            return !0
                    } catch {}
                    return !1
                }(p))
                    return !1;
                try {
                    if (p === window || h(p) && x() || T(window) === T(p))
                        return !0
                } catch {}
                return !1
            }
            function B(p) {
                if (!N(p))
                    throw new Error("Expected window to be same domain");
                return p
            }
            function P(p, k) {
                if (!p || !k)
                    return !1;
                var y = v(k);
                return y ? y === p : function(C) {
                    var M = [];
                    try {
                        for (; C.parent !== C; )
                            M.push(C.parent),
                            C = C.parent
                    } catch {}
                    return M
                }(k).indexOf(p) !== -1
            }
            function O(p) {
                var k = [], y;
                try {
                    y = p.frames
                } catch {
                    y = p
                }
                var C;
                try {
                    C = y.length
                } catch {}
                if (C === 0)
                    return k;
                if (C) {
                    for (var M = 0; M < C; M++) {
                        var U = void 0;
                        try {
                            U = y[M]
                        } catch {
                            continue
                        }
                        k.push(U)
                    }
                    return k
                }
                for (var V = 0; V < 100; V++) {
                    var X = void 0;
                    try {
                        X = y[V]
                    } catch {
                        return k
                    }
                    if (!X)
                        return k;
                    k.push(X)
                }
                return k
            }
            var D = []
              , z = [];
            function H(p, k) {
                k === void 0 && (k = !0);
                try {
                    if (p === window)
                        return !1
                } catch {
                    return !0
                }
                try {
                    if (!p)
                        return !0
                } catch {
                    return !0
                }
                try {
                    if (p.closed)
                        return !0
                } catch (M) {
                    return !M || M.message !== l
                }
                if (k && N(p))
                    try {
                        if (p.mockclosed)
                            return !0
                    } catch {}
                try {
                    if (!p.parent || !p.top)
                        return !0
                } catch {}
                var y = function(M, U) {
                    for (var V = 0; V < M.length; V++)
                        try {
                            if (M[V] === U)
                                return V
                        } catch {}
                    return -1
                }(D, p);
                if (y !== -1) {
                    var C = z[y];
                    if (C && function(M) {
                        if (!M.contentWindow || !M.parentNode)
                            return !0;
                        var U = M.ownerDocument;
                        if (U && U.documentElement && !U.documentElement.contains(M)) {
                            for (var V = M; V.parentNode && V.parentNode !== V; )
                                V = V.parentNode;
                            if (!V.host || !U.documentElement.contains(V.host))
                                return !0
                        }
                        return !1
                    }(C))
                        return !0
                }
                return !1
            }
            function F(p) {
                return p === void 0 && (p = window),
                m(p = p || window) || v(p) || void 0
            }
            function W(p, k) {
                if (typeof p == "string") {
                    if (typeof k == "string")
                        return p === "*" || k === p;
                    if (s(k) || Array.isArray(k))
                        return !1
                }
                return s(p) ? s(k) ? p.toString() === k.toString() : !Array.isArray(k) && !!k.match(p) : !!Array.isArray(p) && (Array.isArray(k) ? JSON.stringify(p) === JSON.stringify(k) : !s(k) && p.some(function(y) {
                    return W(y, k)
                }))
            }
            function G(p) {
                try {
                    if (p === window)
                        return !0
                } catch (k) {
                    if (k && k.message === l)
                        return !0
                }
                try {
                    if ({}.toString.call(p) === "[object Window]")
                        return !0
                } catch (k) {
                    if (k && k.message === l)
                        return !0
                }
                try {
                    if (window.Window && p instanceof window.Window)
                        return !0
                } catch (k) {
                    if (k && k.message === l)
                        return !0
                }
                try {
                    if (p && p.self === p)
                        return !0
                } catch (k) {
                    if (k && k.message === l)
                        return !0
                }
                try {
                    if (p && p.parent === p)
                        return !0
                } catch (k) {
                    if (k && k.message === l)
                        return !0
                }
                try {
                    if (p && p.top === p)
                        return !0
                } catch (k) {
                    if (k && k.message === l)
                        return !0
                }
                try {
                    if (p && p.__cross_domain_utils_window_check__ === "__unlikely_value__")
                        return !1
                } catch {
                    return !0
                }
                try {
                    if ("postMessage" in p && "self" in p && "location" in p)
                        return !0
                } catch {}
                return !1
            }
            function ye(p) {
                if (N(p))
                    return B(p).frameElement;
                for (var k = 0, y = document.querySelectorAll("iframe"); k < y.length; k++) {
                    var C = y[k];
                    if (C && C.contentWindow && C.contentWindow === p)
                        return C
                }
            }
            function ge(p) {
                if (function(y) {
                    return y === void 0 && (y = window),
                    !!v(y)
                }(p)) {
                    var k = ye(p);
                    if (k && k.parentElement) {
                        k.parentElement.removeChild(k);
                        return
                    }
                }
                try {
                    p.close()
                } catch {}
            }
            function Ce(p) {
                try {
                    if (!p)
                        return !1;
                    if (typeof Promise < "u" && p instanceof Promise)
                        return !0;
                    if (typeof window < "u" && typeof window.Window == "function" && p instanceof window.Window || typeof window < "u" && typeof window.constructor == "function" && p instanceof window.constructor)
                        return !1;
                    var k = {}.toString;
                    if (k) {
                        var y = k.call(p);
                        if (y === "[object Window]" || y === "[object global]" || y === "[object DOMWindow]")
                            return !1
                    }
                    if (typeof p.then == "function")
                        return !0
                } catch {
                    return !1
                }
                return !1
            }
            var st = [], ut = [], Kt = 0, Zt;
            function gt() {
                if (!Kt && Zt) {
                    var p = Zt;
                    Zt = null,
                    p.resolve()
                }
            }
            function xt() {
                Kt += 1
            }
            function ae() {
                Kt -= 1,
                gt()
            }
            var fe = function() {
                function p(y) {
                    var C = this;
                    if (this.resolved = void 0,
                    this.rejected = void 0,
                    this.errorHandled = void 0,
                    this.value = void 0,
                    this.error = void 0,
                    this.handlers = void 0,
                    this.dispatching = void 0,
                    this.stack = void 0,
                    this.resolved = !1,
                    this.rejected = !1,
                    this.errorHandled = !1,
                    this.handlers = [],
                    y) {
                        var M, U, V = !1, X = !1, Q = !1;
                        xt();
                        try {
                            y(function(q) {
                                Q ? C.resolve(q) : (V = !0,
                                M = q)
                            }, function(q) {
                                Q ? C.reject(q) : (X = !0,
                                U = q)
                            })
                        } catch (q) {
                            ae(),
                            this.reject(q);
                            return
                        }
                        ae(),
                        Q = !0,
                        V ? this.resolve(M) : X && this.reject(U)
                    }
                }
                var k = p.prototype;
                return k.resolve = function(y) {
                    if (this.resolved || this.rejected)
                        return this;
                    if (Ce(y))
                        throw new Error("Can not resolve promise with another promise");
                    return this.resolved = !0,
                    this.value = y,
                    this.dispatch(),
                    this
                }
                ,
                k.reject = function(y) {
                    var C = this;
                    if (this.resolved || this.rejected)
                        return this;
                    if (Ce(y))
                        throw new Error("Can not reject promise with another promise");
                    if (!y) {
                        var M = y && typeof y.toString == "function" ? y.toString() : {}.toString.call(y);
                        y = new Error("Expected reject to be called with Error, got " + M)
                    }
                    return this.rejected = !0,
                    this.error = y,
                    this.errorHandled || setTimeout(function() {
                        C.errorHandled || function(U, V) {
                            if (st.indexOf(U) === -1) {
                                st.push(U),
                                setTimeout(function() {
                                    throw U
                                }, 1);
                                for (var X = 0; X < ut.length; X++)
                                    ut[X](U, V)
                            }
                        }(y, C)
                    }, 1),
                    this.dispatch(),
                    this
                }
                ,
                k.asyncReject = function(y) {
                    return this.errorHandled = !0,
                    this.reject(y),
                    this
                }
                ,
                k.dispatch = function() {
                    var y = this.resolved
                      , C = this.rejected
                      , M = this.handlers;
                    if (!this.dispatching && (y || C)) {
                        this.dispatching = !0,
                        xt();
                        for (var U = function(le, De) {
                            return le.then(function(Te) {
                                De.resolve(Te)
                            }, function(Te) {
                                De.reject(Te)
                            })
                        }, V = 0; V < M.length; V++) {
                            var X = M[V]
                              , Q = X.onSuccess
                              , q = X.onError
                              , se = X.promise
                              , ie = void 0;
                            if (y)
                                try {
                                    ie = Q ? Q(this.value) : this.value
                                } catch (le) {
                                    se.reject(le);
                                    continue
                                }
                            else if (C) {
                                if (!q) {
                                    se.reject(this.error);
                                    continue
                                }
                                try {
                                    ie = q(this.error)
                                } catch (le) {
                                    se.reject(le);
                                    continue
                                }
                            }
                            if (ie instanceof p && (ie.resolved || ie.rejected)) {
                                var oe = ie;
                                oe.resolved ? se.resolve(oe.value) : se.reject(oe.error),
                                oe.errorHandled = !0
                            } else
                                Ce(ie) ? ie instanceof p && (ie.resolved || ie.rejected) ? ie.resolved ? se.resolve(ie.value) : se.reject(ie.error) : U(ie, se) : se.resolve(ie)
                        }
                        M.length = 0,
                        this.dispatching = !1,
                        ae()
                    }
                }
                ,
                k.then = function(y, C) {
                    if (y && typeof y != "function" && !y.call)
                        throw new Error("Promise.then expected a function for success handler");
                    if (C && typeof C != "function" && !C.call)
                        throw new Error("Promise.then expected a function for error handler");
                    var M = new p;
                    return this.handlers.push({
                        promise: M,
                        onSuccess: y,
                        onError: C
                    }),
                    this.errorHandled = !0,
                    this.dispatch(),
                    M
                }
                ,
                k.catch = function(y) {
                    return this.then(void 0, y)
                }
                ,
                k.finally = function(y) {
                    if (y && typeof y != "function" && !y.call)
                        throw new Error("Promise.finally expected a function");
                    return this.then(function(C) {
                        return p.try(y).then(function() {
                            return C
                        })
                    }, function(C) {
                        return p.try(y).then(function() {
                            throw C
                        })
                    })
                }
                ,
                k.timeout = function(y, C) {
                    var M = this;
                    if (this.resolved || this.rejected)
                        return this;
                    var U = setTimeout(function() {
                        M.resolved || M.rejected || M.reject(C || new Error("Promise timed out after " + y + "ms"))
                    }, y);
                    return this.then(function(V) {
                        return clearTimeout(U),
                        V
                    })
                }
                ,
                k.toPromise = function() {
                    if (typeof Promise > "u")
                        throw new TypeError("Could not find Promise");
                    return Promise.resolve(this)
                }
                ,
                k.lazy = function() {
                    return this.errorHandled = !0,
                    this
                }
                ,
                p.resolve = function(y) {
                    return y instanceof p ? y : Ce(y) ? new p(function(C, M) {
                        return y.then(C, M)
                    }
                    ) : new p().resolve(y)
                }
                ,
                p.reject = function(y) {
                    return new p().reject(y)
                }
                ,
                p.asyncReject = function(y) {
                    return new p().asyncReject(y)
                }
                ,
                p.all = function(y) {
                    var C = new p
                      , M = y.length
                      , U = [].slice();
                    if (!M)
                        return C.resolve(U),
                        C;
                    for (var V = function(q, se, ie) {
                        return se.then(function(oe) {
                            U[q] = oe,
                            (M -= 1) == 0 && C.resolve(U)
                        }, function(oe) {
                            ie.reject(oe)
                        })
                    }, X = 0; X < y.length; X++) {
                        var Q = y[X];
                        if (Q instanceof p) {
                            if (Q.resolved) {
                                U[X] = Q.value,
                                M -= 1;
                                continue
                            }
                        } else if (!Ce(Q)) {
                            U[X] = Q,
                            M -= 1;
                            continue
                        }
                        V(X, p.resolve(Q), C)
                    }
                    return M === 0 && C.resolve(U),
                    C
                }
                ,
                p.hash = function(y) {
                    var C = {}
                      , M = []
                      , U = function(X) {
                        if (y.hasOwnProperty(X)) {
                            var Q = y[X];
                            Ce(Q) ? M.push(Q.then(function(q) {
                                C[X] = q
                            })) : C[X] = Q
                        }
                    };
                    for (var V in y)
                        U(V);
                    return p.all(M).then(function() {
                        return C
                    })
                }
                ,
                p.map = function(y, C) {
                    return p.all(y.map(C))
                }
                ,
                p.onPossiblyUnhandledException = function(y) {
                    return function(C) {
                        return ut.push(C),
                        {
                            cancel: function() {
                                ut.splice(ut.indexOf(C), 1)
                            }
                        }
                    }(y)
                }
                ,
                p.try = function(y, C, M) {
                    if (y && typeof y != "function" && !y.call)
                        throw new Error("Promise.try expected a function");
                    var U;
                    xt();
                    try {
                        U = y.apply(C, M || [])
                    } catch (V) {
                        return ae(),
                        p.reject(V)
                    }
                    return ae(),
                    p.resolve(U)
                }
                ,
                p.delay = function(y) {
                    return new p(function(C) {
                        setTimeout(C, y)
                    }
                    )
                }
                ,
                p.isPromise = function(y) {
                    return !!(y && y instanceof p) || Ce(y)
                }
                ,
                p.flush = function() {
                    return function(y) {
                        var C = Zt = Zt || new y;
                        return gt(),
                        C
                    }(p)
                }
                ,
                p
            }();
            function ke(p, k) {
                for (var y = 0; y < p.length; y++)
                    try {
                        if (p[y] === k)
                            return y
                    } catch {}
                return -1
            }
            var $e = function() {
                function p() {
                    if (this.name = void 0,
                    this.weakmap = void 0,
                    this.keys = void 0,
                    this.values = void 0,
                    this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__",
                    function() {
                        if (typeof WeakMap > "u" || Object.freeze === void 0)
                            return !1;
                        try {
                            var y = new WeakMap
                              , C = {};
                            return Object.freeze(C),
                            y.set(C, "__testvalue__"),
                            y.get(C) === "__testvalue__"
                        } catch {
                            return !1
                        }
                    }())
                        try {
                            this.weakmap = new WeakMap
                        } catch {}
                    this.keys = [],
                    this.values = []
                }
                var k = p.prototype;
                return k._cleanupClosedWindows = function() {
                    for (var y = this.weakmap, C = this.keys, M = 0; M < C.length; M++) {
                        var U = C[M];
                        if (G(U) && H(U)) {
                            if (y)
                                try {
                                    y.delete(U)
                                } catch {}
                            C.splice(M, 1),
                            this.values.splice(M, 1),
                            M -= 1
                        }
                    }
                }
                ,
                k.isSafeToReadWrite = function(y) {
                    return !G(y)
                }
                ,
                k.set = function(y, C) {
                    if (!y)
                        throw new Error("WeakMap expected key");
                    var M = this.weakmap;
                    if (M)
                        try {
                            M.set(y, C)
                        } catch {
                            delete this.weakmap
                        }
                    if (this.isSafeToReadWrite(y))
                        try {
                            var U = this.name
                              , V = y[U];
                            V && V[0] === y ? V[1] = C : Object.defineProperty(y, U, {
                                value: [y, C],
                                writable: !0
                            });
                            return
                        } catch {}
                    this._cleanupClosedWindows();
                    var X = this.keys
                      , Q = this.values
                      , q = ke(X, y);
                    q === -1 ? (X.push(y),
                    Q.push(C)) : Q[q] = C
                }
                ,
                k.get = function(y) {
                    if (!y)
                        throw new Error("WeakMap expected key");
                    var C = this.weakmap;
                    if (C)
                        try {
                            if (C.has(y))
                                return C.get(y)
                        } catch {
                            delete this.weakmap
                        }
                    if (this.isSafeToReadWrite(y))
                        try {
                            var M = y[this.name];
                            return M && M[0] === y ? M[1] : void 0
                        } catch {}
                    this._cleanupClosedWindows();
                    var U = ke(this.keys, y);
                    if (U !== -1)
                        return this.values[U]
                }
                ,
                k.delete = function(y) {
                    if (!y)
                        throw new Error("WeakMap expected key");
                    var C = this.weakmap;
                    if (C)
                        try {
                            C.delete(y)
                        } catch {
                            delete this.weakmap
                        }
                    if (this.isSafeToReadWrite(y))
                        try {
                            var M = y[this.name];
                            M && M[0] === y && (M[0] = M[1] = void 0)
                        } catch {}
                    this._cleanupClosedWindows();
                    var U = this.keys
                      , V = ke(U, y);
                    V !== -1 && (U.splice(V, 1),
                    this.values.splice(V, 1))
                }
                ,
                k.has = function(y) {
                    if (!y)
                        throw new Error("WeakMap expected key");
                    var C = this.weakmap;
                    if (C)
                        try {
                            if (C.has(y))
                                return !0
                        } catch {
                            delete this.weakmap
                        }
                    if (this.isSafeToReadWrite(y))
                        try {
                            var M = y[this.name];
                            return !(!M || M[0] !== y)
                        } catch {}
                    return this._cleanupClosedWindows(),
                    ke(this.keys, y) !== -1
                }
                ,
                k.getOrSet = function(y, C) {
                    if (this.has(y))
                        return this.get(y);
                    var M = C();
                    return this.set(y, M),
                    M
                }
                ,
                p
            }();
            function St(p) {
                return p.name || p.__name__ || p.displayName || "anonymous"
            }
            function ii(p, k) {
                try {
                    delete p.name,
                    p.name = k
                } catch {}
                return p.__name__ = p.displayName = k,
                p
            }
            function Lt() {
                var p = "0123456789abcdef";
                return "uid_" + "xxxxxxxxxx".replace(/./g, function() {
                    return p.charAt(Math.floor(Math.random() * p.length))
                }) + "_" + function(k) {
                    if (typeof btoa == "function")
                        return btoa(encodeURIComponent(k).replace(/%([0-9A-F]{2})/g, function(y, C) {
                            return String.fromCharCode(parseInt(C, 16))
                        })).replace(/[=]/g, "");
                    if (typeof Buffer < "u")
                        return Buffer.from(k, "utf8").toString("base64").replace(/[=]/g, "");
                    throw new Error("Can not find window.btoa or Buffer")
                }(new Date().toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
            }
            var pn;
            function gn(p) {
                try {
                    return JSON.stringify([].slice.call(p), function(k, y) {
                        return typeof y == "function" ? "memoize[" + function(C) {
                            if (pn = pn || new $e,
                            C == null || typeof C != "object" && typeof C != "function")
                                throw new Error("Invalid object");
                            var M = pn.get(C);
                            return M || (M = typeof C + ":" + Lt(),
                            pn.set(C, M)),
                            M
                        }(y) + "]" : typeof window < "u" && y instanceof window.Element || y !== null && typeof y == "object" && y.nodeType === 1 && typeof y.style == "object" && typeof y.ownerDocument == "object" ? {} : y
                    })
                } catch {
                    throw new Error("Arguments not serializable -- can not be used to memoize")
                }
            }
            function Ai() {
                return {}
            }
            var wr = 0
              , Ni = 0;
            function wo(p, k) {
                k === void 0 && (k = {});
                var y = k.thisNamespace, C = y !== void 0 && y, M = k.time, U, V, X = wr;
                wr += 1;
                var Q = function() {
                    for (var q = arguments.length, se = new Array(q), ie = 0; ie < q; ie++)
                        se[ie] = arguments[ie];
                    X < Ni && (U = null,
                    V = null,
                    X = wr,
                    wr += 1);
                    var oe;
                    oe = C ? (V = V || new $e).getOrSet(this, Ai) : U = U || {};
                    var le;
                    try {
                        le = gn(se)
                    } catch {
                        return p.apply(this, arguments)
                    }
                    var De = oe[le];
                    if (De && M && Date.now() - De.time < M && (delete oe[le],
                    De = null),
                    De)
                        return De.value;
                    var Te = Date.now()
                      , Oe = p.apply(this, arguments);
                    return oe[le] = {
                        time: Te,
                        value: Oe
                    },
                    Oe
                };
                return Q.reset = function() {
                    U = null,
                    V = null
                }
                ,
                ii(Q, (k.name || St(p)) + "::memoized")
            }
            wo.clear = function() {
                Ni = wr
            }
            ;
            function ns(p) {
                var k = {};
                function y() {
                    for (var C = arguments, M = this, U = arguments.length, V = new Array(U), X = 0; X < U; X++)
                        V[X] = arguments[X];
                    var Q = gn(V);
                    return k.hasOwnProperty(Q) || (k[Q] = fe.try(function() {
                        return p.apply(M, C)
                    }).finally(function() {
                        delete k[Q]
                    })),
                    k[Q]
                }
                return y.reset = function() {
                    k = {}
                }
                ,
                ii(y, St(p) + "::promiseMemoized")
            }
            function Jn() {}
            function Li(p, k) {
                if (k === void 0 && (k = 1),
                k >= 3)
                    return "stringifyError stack overflow";
                try {
                    if (!p)
                        return "<unknown error: " + {}.toString.call(p) + ">";
                    if (typeof p == "string")
                        return p;
                    if (p instanceof Error) {
                        var y = p && p.stack
                          , C = p && p.message;
                        if (y && C)
                            return y.indexOf(C) !== -1 ? y : C + `
` + y;
                        if (y)
                            return y;
                        if (C)
                            return C
                    }
                    return p && p.toString && typeof p.toString == "function" ? p.toString() : {}.toString.call(p)
                } catch (M) {
                    return "Error while stringifying error: " + Li(M, k + 1)
                }
            }
            function kn(p) {
                return typeof p == "string" ? p : p && p.toString && typeof p.toString == "function" ? p.toString() : {}.toString.call(p)
            }
            wo(function(p) {
                if (Object.values)
                    return Object.values(p);
                var k = [];
                for (var y in p)
                    p.hasOwnProperty(y) && k.push(p[y]);
                return k
            });
            function oi(p) {
                return {}.toString.call(p) === "[object RegExp]"
            }
            function _o(p, k, y) {
                if (p.hasOwnProperty(k))
                    return p[k];
                var C = y();
                return p[k] = C,
                C
            }
            function Xn() {
                var p = document.body;
                if (!p)
                    throw new Error("Body element not found");
                return p
            }
            function ba() {
                return !!document.body && document.readyState === "complete"
            }
            function iu() {
                return !!document.body && document.readyState === "interactive"
            }
            wo(function() {
                return new fe(function(p) {
                    if (ba() || iu())
                        return p();
                    var k = setInterval(function() {
                        if (ba() || iu())
                            return clearInterval(k),
                            p()
                    }, 10)
                }
                )
            });
            var Lr = typeof document < "u" ? document.currentScript : null
              , Ln = wo(function() {
                if (Lr || (Lr = function() {
                    try {
                        var p = function() {
                            try {
                                throw new Error("_")
                            } catch (V) {
                                return V.stack || ""
                            }
                        }()
                          , k = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(p)
                          , y = k && k[1];
                        if (!y)
                            return;
                        for (var C = 0, M = [].slice.call(document.getElementsByTagName("script")).reverse(); C < M.length; C++) {
                            var U = M[C];
                            if (U.src && U.src === y)
                                return U
                        }
                    } catch {}
                }()))
                    return Lr;
                throw new Error("Can not determine current script")
            })
              , xo = Lt();
            wo(function() {
                var p;
                try {
                    p = Ln()
                } catch {
                    return xo
                }
                var k = p.getAttribute("data-uid");
                if (k && typeof k == "string" || (k = p.getAttribute("data-uid-auto")) && typeof k == "string")
                    return k;
                if (p.src) {
                    var y = function(C) {
                        for (var M = "", U = 0; U < C.length; U++) {
                            var V = C[U].charCodeAt(0) * U;
                            C[U + 1] && (V += C[U + 1].charCodeAt(0) * (U - 1)),
                            M += String.fromCharCode(97 + Math.abs(V) % 26)
                        }
                        return M
                    }(JSON.stringify({
                        src: p.src,
                        dataset: p.dataset
                    }));
                    k = "uid_" + y.slice(y.length - 30)
                } else
                    k = Lt();
                return p.setAttribute("data-uid-auto", k),
                k
            });
            function jr(p) {
                p === void 0 && (p = window);
                var k = "__post_robot_10_0_46__";
                return p !== window ? p[k] : p[k] = p[k] || {}
            }
            var ou = function() {
                return {}
            };
            function mt(p, k) {
                return p === void 0 && (p = "store"),
                k === void 0 && (k = ou),
                _o(jr(), p, function() {
                    var y = k();
                    return {
                        has: function(C) {
                            return y.hasOwnProperty(C)
                        },
                        get: function(C, M) {
                            return y.hasOwnProperty(C) ? y[C] : M
                        },
                        set: function(C, M) {
                            return y[C] = M,
                            M
                        },
                        del: function(C) {
                            delete y[C]
                        },
                        getOrSet: function(C, M) {
                            return _o(y, C, M)
                        },
                        reset: function() {
                            y = k()
                        },
                        keys: function() {
                            return Object.keys(y)
                        }
                    }
                })
            }
            var pd = function() {};
            function $r() {
                var p = jr();
                return p.WINDOW_WILDCARD = p.WINDOW_WILDCARD || new pd,
                p.WINDOW_WILDCARD
            }
            function Rt(p, k) {
                return p === void 0 && (p = "store"),
                k === void 0 && (k = ou),
                mt("windowStore").getOrSet(p, function() {
                    var y = new $e
                      , C = function(M) {
                        return y.getOrSet(M, k)
                    };
                    return {
                        has: function(M) {
                            return C(M).hasOwnProperty(p)
                        },
                        get: function(M, U) {
                            var V = C(M);
                            return V.hasOwnProperty(p) ? V[p] : U
                        },
                        set: function(M, U) {
                            return C(M)[p] = U,
                            U
                        },
                        del: function(M) {
                            delete C(M)[p]
                        },
                        getOrSet: function(M, U) {
                            return _o(C(M), p, U)
                        }
                    }
                })
            }
            function rs() {
                return mt("instance").getOrSet("instanceID", Lt)
            }
            function is(p, k) {
                var y = k.domain
                  , C = Rt("helloPromises")
                  , M = C.get(p);
                M && M.resolve({
                    domain: y
                });
                var U = fe.resolve({
                    domain: y
                });
                return C.set(p, U),
                U
            }
            function So(p, k) {
                return (0,
                k.send)(p, "postrobot_hello", {
                    instanceID: rs()
                }, {
                    domain: "*",
                    timeout: -1
                }).then(function(y) {
                    var C = y.origin
                      , M = y.data.instanceID;
                    return is(p, {
                        domain: C
                    }),
                    {
                        win: p,
                        domain: C,
                        instanceID: M
                    }
                })
            }
            function os(p, k) {
                var y = k.send;
                return Rt("windowInstanceIDPromises").getOrSet(p, function() {
                    return So(p, {
                        send: y
                    }).then(function(C) {
                        return C.instanceID
                    })
                })
            }
            function ss(p) {
                Rt("knownWindows").set(p, !0)
            }
            function bo(p) {
                return typeof p == "object" && p !== null && typeof p.__type__ == "string"
            }
            function as(p) {
                return p === void 0 ? "undefined" : p === null ? "null" : Array.isArray(p) ? "array" : typeof p == "function" ? "function" : typeof p == "object" ? p instanceof Error ? "error" : typeof p.then == "function" ? "promise" : {}.toString.call(p) === "[object RegExp]" ? "regex" : {}.toString.call(p) === "[object Date]" ? "date" : "object" : typeof p == "string" ? "string" : typeof p == "number" ? "number" : typeof p == "boolean" ? "boolean" : void 0
            }
            function _r(p, k) {
                return {
                    __type__: p,
                    __val__: k
                }
            }
            var Jt, gd = ((Jt = {}).function = function() {}
            ,
            Jt.error = function(p) {
                return _r("error", {
                    message: p.message,
                    stack: p.stack,
                    code: p.code,
                    data: p.data
                })
            }
            ,
            Jt.promise = function() {}
            ,
            Jt.regex = function(p) {
                return _r("regex", p.source)
            }
            ,
            Jt.date = function(p) {
                return _r("date", p.toJSON())
            }
            ,
            Jt.array = function(p) {
                return p
            }
            ,
            Jt.object = function(p) {
                return p
            }
            ,
            Jt.string = function(p) {
                return p
            }
            ,
            Jt.number = function(p) {
                return p
            }
            ,
            Jt.boolean = function(p) {
                return p
            }
            ,
            Jt.null = function(p) {
                return p
            }
            ,
            Jt[void 0] = function(p) {
                return _r("undefined", p)
            }
            ,
            Jt), md = {}, mn, su = ((mn = {}).function = function() {
                throw new Error("Function serialization is not implemented; nothing to deserialize")
            }
            ,
            mn.error = function(p) {
                var k = p.stack
                  , y = p.code
                  , C = p.data
                  , M = new Error(p.message);
                return M.code = y,
                C && (M.data = C),
                M.stack = k + `

` + M.stack,
                M
            }
            ,
            mn.promise = function() {
                throw new Error("Promise serialization is not implemented; nothing to deserialize")
            }
            ,
            mn.regex = function(p) {
                return new RegExp(p)
            }
            ,
            mn.date = function(p) {
                return new Date(p)
            }
            ,
            mn.array = function(p) {
                return p
            }
            ,
            mn.object = function(p) {
                return p
            }
            ,
            mn.string = function(p) {
                return p
            }
            ,
            mn.number = function(p) {
                return p
            }
            ,
            mn.boolean = function(p) {
                return p
            }
            ,
            mn.null = function(p) {
                return p
            }
            ,
            mn[void 0] = function() {}
            ,
            mn), au = {};
            new fe(function(p) {
                if (window.document && window.document.body)
                    return p(window.document.body);
                var k = setInterval(function() {
                    if (window.document && window.document.body)
                        return clearInterval(k),
                        p(window.document.body)
                }, 10)
            }
            );
            function Ea() {
                for (var p = mt("idToProxyWindow"), k = 0, y = p.keys(); k < y.length; k++) {
                    var C = y[k];
                    p.get(C).shouldClean() && p.del(C)
                }
            }
            function lu(p, k) {
                var y = k.send
                  , C = k.id
                  , M = C === void 0 ? Lt() : C
                  , U = p.then(function(Q) {
                    if (N(Q))
                        return B(Q).name
                })
                  , V = p.then(function(Q) {
                    if (H(Q))
                        throw new Error("Window is closed, can not determine type");
                    return m(Q) ? "popup" : "iframe"
                });
                U.catch(Jn),
                V.catch(Jn);
                var X = function() {
                    return p.then(function(Q) {
                        if (!H(Q))
                            return N(Q) ? B(Q).name : U
                    })
                };
                return {
                    id: M,
                    getType: function() {
                        return V
                    },
                    getInstanceID: ns(function() {
                        return p.then(function(Q) {
                            return os(Q, {
                                send: y
                            })
                        })
                    }),
                    close: function() {
                        return p.then(ge)
                    },
                    getName: X,
                    focus: function() {
                        return p.then(function(Q) {
                            Q.focus()
                        })
                    },
                    isClosed: function() {
                        return p.then(function(Q) {
                            return H(Q)
                        })
                    },
                    setLocation: function(Q, q) {
                        return q === void 0 && (q = {}),
                        p.then(function(se) {
                            var ie = window.location.protocol + "//" + window.location.host
                              , oe = q.method
                              , le = oe === void 0 ? "get" : oe
                              , De = q.body;
                            if (Q.indexOf("/") === 0)
                                Q = "" + ie + Q;
                            else if (!Q.match(/^https?:\/\//) && Q.indexOf(ie) !== 0)
                                throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(Q));
                            if (le === "post")
                                return X().then(function(Te) {
                                    if (!Te)
                                        throw new Error("Can not post to window without target name");
                                    (function(Oe) {
                                        var Ke = Oe.url
                                          , Dt = Oe.target
                                          , et = Oe.body
                                          , Ze = Oe.method
                                          , Ot = Ze === void 0 ? "post" : Ze
                                          , Ue = document.createElement("form");
                                        if (Ue.setAttribute("target", Dt),
                                        Ue.setAttribute("method", Ot),
                                        Ue.setAttribute("action", Ke),
                                        Ue.style.display = "none",
                                        et)
                                            for (var tt = 0, on = Object.keys(et); tt < on.length; tt++) {
                                                var vt, er = on[tt], fs = document.createElement("input");
                                                fs.setAttribute("name", er),
                                                fs.setAttribute("value", (vt = et[er]) == null ? void 0 : vt.toString()),
                                                Ue.appendChild(fs)
                                            }
                                        Xn().appendChild(Ue),
                                        Ue.submit(),
                                        Xn().removeChild(Ue)
                                    }
                                    )({
                                        url: Q,
                                        target: Te,
                                        method: le,
                                        body: De
                                    })
                                });
                            if (le !== "get")
                                throw new Error("Unsupported method: " + le);
                            if (N(se))
                                try {
                                    if (se.location && typeof se.location.replace == "function") {
                                        se.location.replace(Q);
                                        return
                                    }
                                } catch {}
                            se.location = Q
                        })
                    },
                    setName: function(Q) {
                        return p.then(function(q) {
                            var se = N(q)
                              , ie = ye(q);
                            if (!se)
                                throw new Error("Can not set name for cross-domain window: " + Q);
                            B(q).name = Q,
                            ie && ie.setAttribute("name", Q),
                            U = fe.resolve(Q)
                        })
                    }
                }
            }
            var vn = function() {
                function p(y) {
                    var C = y.send
                      , M = y.win
                      , U = y.serializedWindow;
                    this.id = void 0,
                    this.isProxyWindow = !0,
                    this.serializedWindow = void 0,
                    this.actualWindow = void 0,
                    this.actualWindowPromise = void 0,
                    this.send = void 0,
                    this.name = void 0,
                    this.actualWindowPromise = new fe,
                    this.serializedWindow = U || lu(this.actualWindowPromise, {
                        send: C
                    }),
                    mt("idToProxyWindow").set(this.getID(), this),
                    M && this.setWindow(M, {
                        send: C
                    })
                }
                var k = p.prototype;
                return k.getID = function() {
                    return this.serializedWindow.id
                }
                ,
                k.getType = function() {
                    return this.serializedWindow.getType()
                }
                ,
                k.isPopup = function() {
                    return this.getType().then(function(y) {
                        return y === "popup"
                    })
                }
                ,
                k.setLocation = function(y, C) {
                    var M = this;
                    return this.serializedWindow.setLocation(y, C).then(function() {
                        return M
                    })
                }
                ,
                k.getName = function() {
                    return this.serializedWindow.getName()
                }
                ,
                k.setName = function(y) {
                    var C = this;
                    return this.serializedWindow.setName(y).then(function() {
                        return C
                    })
                }
                ,
                k.close = function() {
                    var y = this;
                    return this.serializedWindow.close().then(function() {
                        return y
                    })
                }
                ,
                k.focus = function() {
                    var y = this
                      , C = this.isPopup()
                      , M = this.getName()
                      , U = fe.hash({
                        isPopup: C,
                        name: M
                    }).then(function(X) {
                        var Q = X.name;
                        X.isPopup && Q && window.open("", Q, "noopener")
                    })
                      , V = this.serializedWindow.focus();
                    return fe.all([U, V]).then(function() {
                        return y
                    })
                }
                ,
                k.isClosed = function() {
                    return this.serializedWindow.isClosed()
                }
                ,
                k.getWindow = function() {
                    return this.actualWindow
                }
                ,
                k.setWindow = function(y, C) {
                    var M = C.send;
                    this.actualWindow = y,
                    this.actualWindowPromise.resolve(this.actualWindow),
                    this.serializedWindow = lu(this.actualWindowPromise, {
                        send: M,
                        id: this.getID()
                    }),
                    Rt("winToProxyWindow").set(y, this)
                }
                ,
                k.awaitWindow = function() {
                    return this.actualWindowPromise
                }
                ,
                k.matchWindow = function(y, C) {
                    var M = this
                      , U = C.send;
                    return fe.try(function() {
                        return M.actualWindow ? y === M.actualWindow : fe.hash({
                            proxyInstanceID: M.getInstanceID(),
                            knownWindowInstanceID: os(y, {
                                send: U
                            })
                        }).then(function(V) {
                            var X = V.proxyInstanceID === V.knownWindowInstanceID;
                            return X && M.setWindow(y, {
                                send: U
                            }),
                            X
                        })
                    })
                }
                ,
                k.unwrap = function() {
                    return this.actualWindow || this
                }
                ,
                k.getInstanceID = function() {
                    return this.serializedWindow.getInstanceID()
                }
                ,
                k.shouldClean = function() {
                    return !!(this.actualWindow && H(this.actualWindow))
                }
                ,
                k.serialize = function() {
                    return this.serializedWindow
                }
                ,
                p.unwrap = function(y) {
                    return p.isProxyWindow(y) ? y.unwrap() : y
                }
                ,
                p.serialize = function(y, C) {
                    var M = C.send;
                    return Ea(),
                    p.toProxyWindow(y, {
                        send: M
                    }).serialize()
                }
                ,
                p.deserialize = function(y, C) {
                    var M = C.send;
                    return Ea(),
                    mt("idToProxyWindow").get(y.id) || new p({
                        serializedWindow: y,
                        send: M
                    })
                }
                ,
                p.isProxyWindow = function(y) {
                    return !!(y && !G(y) && y.isProxyWindow)
                }
                ,
                p.toProxyWindow = function(y, C) {
                    var M = C.send;
                    if (Ea(),
                    p.isProxyWindow(y))
                        return y;
                    var U = y;
                    return Rt("winToProxyWindow").get(U) || new p({
                        win: U,
                        send: M
                    })
                }
                ,
                p
            }();
            function ka(p, k, y, C, M) {
                var U = Rt("methodStore")
                  , V = mt("proxyWindowMethods");
                vn.isProxyWindow(C) ? V.set(p, {
                    val: k,
                    name: y,
                    domain: M,
                    source: C
                }) : (V.del(p),
                U.getOrSet(C, function() {
                    return {}
                })[p] = {
                    domain: M,
                    name: y,
                    val: k,
                    source: C
                })
            }
            function Ca(p, k) {
                var y = Rt("methodStore")
                  , C = mt("proxyWindowMethods");
                return y.getOrSet(p, function() {
                    return {}
                })[k] || C.get(k)
            }
            function uu(p, k, y, C, M) {
                V = (U = {
                    on: M.on,
                    send: M.send
                }).on,
                X = U.send,
                mt("builtinListeners").getOrSet("functionCalls", function() {
                    return V("postrobot_method", {
                        domain: "*"
                    }, function(se) {
                        var ie = se.source
                          , oe = se.origin
                          , le = se.data
                          , De = le.id
                          , Te = le.name
                          , Oe = Ca(ie, De);
                        if (!Oe)
                            throw new Error("Could not find method '" + Te + "' with id: " + le.id + " in " + T(window));
                        var Ke = Oe.source
                          , Dt = Oe.domain
                          , et = Oe.val;
                        return fe.try(function() {
                            if (!W(Dt, oe))
                                throw new Error("Method '" + le.name + "' domain " + JSON.stringify(oi(Oe.domain) ? Oe.domain.source : Oe.domain) + " does not match origin " + oe + " in " + T(window));
                            if (vn.isProxyWindow(Ke))
                                return Ke.matchWindow(ie, {
                                    send: X
                                }).then(function(Ze) {
                                    if (!Ze)
                                        throw new Error("Method call '" + le.name + "' failed - proxy window does not match source in " + T(window))
                                })
                        }).then(function() {
                            return et.apply({
                                source: ie,
                                origin: oe
                            }, le.args)
                        }, function(Ze) {
                            return fe.try(function() {
                                if (et.onError)
                                    return et.onError(Ze)
                            }).then(function() {
                                throw Ze.stack && (Ze.stack = "Remote call to " + Te + "(" + function(Ot) {
                                    return Ot === void 0 && (Ot = []),
                                    (Ue = Ot,
                                    [].slice.call(Ue)).map(function(tt) {
                                        return typeof tt == "string" ? "'" + tt + "'" : tt === void 0 ? "undefined" : tt === null ? "null" : typeof tt == "boolean" ? tt.toString() : Array.isArray(tt) ? "[ ... ]" : typeof tt == "object" ? "{ ... }" : typeof tt == "function" ? "() => { ... }" : "<" + typeof tt + ">"
                                    }).join(", ");
                                    var Ue
                                }(le.args) + `) failed

` + Ze.stack),
                                Ze
                            })
                        }).then(function(Ze) {
                            return {
                                result: Ze,
                                id: De,
                                name: Te
                            }
                        })
                    })
                });
                var U, V, X, Q = y.__id__ || Lt();
                p = vn.unwrap(p);
                var q = y.__name__ || y.name || C;
                return typeof q == "string" && typeof q.indexOf == "function" && q.indexOf("anonymous::") === 0 && (q = q.replace("anonymous::", C + "::")),
                vn.isProxyWindow(p) ? (ka(Q, y, q, p, k),
                p.awaitWindow().then(function(se) {
                    ka(Q, y, q, se, k)
                })) : ka(Q, y, q, p, k),
                _r("cross_domain_function", {
                    id: Q,
                    name: q
                })
            }
            function cu(p, k, y, C) {
                var M, U = C.on, V = C.send;
                return function(X, Q) {
                    Q === void 0 && (Q = md);
                    var q = JSON.stringify(X, function(se) {
                        var ie = this[se];
                        if (bo(this))
                            return ie;
                        var oe = as(ie);
                        if (!oe)
                            return ie;
                        var le = Q[oe] || gd[oe];
                        return le ? le(ie, se) : ie
                    });
                    return q === void 0 ? "undefined" : q
                }(y, ((M = {}).promise = function(X, Q) {
                    return function(q, se, ie, oe, le) {
                        return _r("cross_domain_zalgo_promise", {
                            then: uu(q, se, function(De, Te) {
                                return ie.then(De, Te)
                            }, oe, {
                                on: le.on,
                                send: le.send
                            })
                        })
                    }(p, k, X, Q, {
                        on: U,
                        send: V
                    })
                }
                ,
                M.function = function(X, Q) {
                    return uu(p, k, X, Q, {
                        on: U,
                        send: V
                    })
                }
                ,
                M.object = function(X) {
                    return G(X) || vn.isProxyWindow(X) ? _r("cross_domain_window", vn.serialize(X, {
                        send: V
                    })) : X
                }
                ,
                M))
            }
            function fu(p, k, y, C) {
                var M, U = C.send;
                return function(V, X) {
                    if (X === void 0 && (X = au),
                    V !== "undefined")
                        return JSON.parse(V, function(Q, q) {
                            if (bo(this))
                                return q;
                            var se, ie;
                            if (bo(q) ? (se = q.__type__,
                            ie = q.__val__) : (se = as(q),
                            ie = q),
                            !se)
                                return ie;
                            var oe = X[se] || su[se];
                            return oe ? oe(ie, Q) : ie
                        })
                }(y, ((M = {}).cross_domain_zalgo_promise = function(V) {
                    return function(X, Q, q) {
                        return new fe(q.then)
                    }(0, 0, V)
                }
                ,
                M.cross_domain_function = function(V) {
                    return function(X, Q, q, se) {
                        var ie = q.id
                          , oe = q.name
                          , le = se.send
                          , De = function(Oe) {
                            Oe === void 0 && (Oe = {});
                            function Ke() {
                                var Dt = arguments;
                                return vn.toProxyWindow(X, {
                                    send: le
                                }).awaitWindow().then(function(et) {
                                    var Ze = Ca(et, ie);
                                    if (Ze && Ze.val !== Ke)
                                        return Ze.val.apply({
                                            source: window,
                                            origin: T()
                                        }, Dt);
                                    var Ot = [].slice.call(Dt);
                                    return Oe.fireAndForget ? le(et, "postrobot_method", {
                                        id: ie,
                                        name: oe,
                                        args: Ot
                                    }, {
                                        domain: Q,
                                        fireAndForget: !0
                                    }) : le(et, "postrobot_method", {
                                        id: ie,
                                        name: oe,
                                        args: Ot
                                    }, {
                                        domain: Q,
                                        fireAndForget: !1
                                    }).then(function(Ue) {
                                        return Ue.data.result
                                    })
                                }).catch(function(et) {
                                    throw et
                                })
                            }
                            return Ke.__name__ = oe,
                            Ke.__origin__ = Q,
                            Ke.__source__ = X,
                            Ke.__id__ = ie,
                            Ke.origin = Q,
                            Ke
                        }
                          , Te = De();
                        return Te.fireAndForget = De({
                            fireAndForget: !0
                        }),
                        Te
                    }(p, k, V, {
                        send: U
                    })
                }
                ,
                M.cross_domain_window = function(V) {
                    return vn.deserialize(V, {
                        send: U
                    })
                }
                ,
                M))
            }
            var Eo = {};
            Eo.postrobot_post_message = function(p, k, y) {
                y.indexOf("file:") === 0 && (y = "*"),
                p.postMessage(k, y)
            }
            ;
            function Oa(p, k, y, C) {
                var M = C.on
                  , U = C.send;
                return fe.try(function() {
                    var V = Rt().getOrSet(p, function() {
                        return {}
                    });
                    return V.buffer = V.buffer || [],
                    V.buffer.push(y),
                    V.flush = V.flush || fe.flush().then(function() {
                        if (H(p))
                            throw new Error("Window is closed");
                        var X = cu(p, k, ((Q = {}).__post_robot_10_0_46__ = V.buffer || [],
                        Q), {
                            on: M,
                            send: U
                        }), Q;
                        delete V.buffer;
                        for (var q = Object.keys(Eo), se = [], ie = 0; ie < q.length; ie++) {
                            var oe = q[ie];
                            try {
                                Eo[oe](p, X, k)
                            } catch (le) {
                                se.push(le)
                            }
                        }
                        if (se.length === q.length)
                            throw new Error(`All post-robot messaging strategies failed:

` + se.map(function(le, De) {
                                return De + ". " + Li(le)
                            }).join(`

`))
                    }),
                    V.flush.then(function() {
                        delete V.flush
                    })
                }).then(Jn)
            }
            function ls(p) {
                return mt("responseListeners").get(p)
            }
            function du(p) {
                mt("responseListeners").del(p)
            }
            function hu(p) {
                return mt("erroredResponseListeners").has(p)
            }
            function pu(p) {
                var k = p.name
                  , y = p.win
                  , C = p.domain
                  , M = Rt("requestListeners");
                if (y === "*" && (y = null),
                C === "*" && (C = null),
                !k)
                    throw new Error("Name required to get request listener");
                for (var U = 0, V = [y, $r()]; U < V.length; U++) {
                    var X = V[U];
                    if (X) {
                        var Q = M.get(X);
                        if (Q) {
                            var q = Q[k];
                            if (q) {
                                if (C && typeof C == "string") {
                                    if (q[C])
                                        return q[C];
                                    if (q.__domain_regex__)
                                        for (var se = 0, ie = q.__domain_regex__; se < ie.length; se++) {
                                            var oe = ie[se]
                                              , le = oe.listener;
                                            if (W(oe.regex, C))
                                                return le
                                        }
                                }
                                if (q["*"])
                                    return q["*"]
                            }
                        }
                    }
                }
            }
            function vd(p, k, y, C) {
                var M = C.on
                  , U = C.send
                  , V = pu({
                    name: y.name,
                    win: p,
                    domain: k
                })
                  , X = y.name === "postrobot_method" && y.data && typeof y.data.name == "string" ? y.data.name + "()" : y.name;
                function Q(q, se, ie) {
                    return fe.flush().then(function() {
                        if (!y.fireAndForget && !H(p))
                            try {
                                return Oa(p, k, {
                                    id: Lt(),
                                    origin: T(window),
                                    type: "postrobot_message_response",
                                    hash: y.hash,
                                    name: y.name,
                                    ack: q,
                                    data: se,
                                    error: ie
                                }, {
                                    on: M,
                                    send: U
                                })
                            } catch (oe) {
                                throw new Error("Send response message failed for " + X + " in " + T() + `

` + Li(oe))
                            }
                    })
                }
                return fe.all([fe.flush().then(function() {
                    if (!y.fireAndForget && !H(p))
                        try {
                            return Oa(p, k, {
                                id: Lt(),
                                origin: T(window),
                                type: "postrobot_message_ack",
                                hash: y.hash,
                                name: y.name
                            }, {
                                on: M,
                                send: U
                            })
                        } catch (q) {
                            throw new Error("Send ack message failed for " + X + " in " + T() + `

` + Li(q))
                        }
                }), fe.try(function() {
                    if (!V)
                        throw new Error("No handler found for post message: " + y.name + " from " + k + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    return V.handler({
                        source: p,
                        origin: k,
                        data: y.data
                    })
                }).then(function(q) {
                    return Q("success", q)
                }, function(q) {
                    return Q("error", null, q)
                })]).then(Jn).catch(function(q) {
                    if (V && V.handleError)
                        return V.handleError(q);
                    throw q
                })
            }
            function yd(p, k, y) {
                if (!hu(y.hash)) {
                    var C = ls(y.hash);
                    if (!C)
                        throw new Error("No handler found for post message ack for message: " + y.name + " from " + k + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    try {
                        if (!W(C.domain, k))
                            throw new Error("Ack origin " + k + " does not match domain " + C.domain.toString());
                        if (p !== C.win)
                            throw new Error("Ack source does not match registered window")
                    } catch (M) {
                        C.promise.reject(M)
                    }
                    C.ack = !0
                }
            }
            function wd(p, k, y) {
                if (!hu(y.hash)) {
                    var C = ls(y.hash);
                    if (!C)
                        throw new Error("No handler found for post message response for message: " + y.name + " from " + k + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!W(C.domain, k))
                        throw new Error("Response origin " + k + " does not match domain " + (M = C.domain,
                        Array.isArray(M) ? "(" + M.join(" | ") + ")" : s(M) ? "RegExp(" + M.toString() + ")" : M.toString()));
                    var M;
                    if (p !== C.win)
                        throw new Error("Response source does not match registered window");
                    du(y.hash),
                    y.ack === "error" ? C.promise.reject(y.error) : y.ack === "success" && C.promise.resolve({
                        source: p,
                        origin: k,
                        data: y.data
                    })
                }
            }
            function gu(p, k) {
                var y = k.on
                  , C = k.send
                  , M = mt("receivedMessages");
                try {
                    if (!window || window.closed || !p.source)
                        return
                } catch {
                    return
                }
                var U = p.source
                  , V = p.origin
                  , X = function(se, ie, oe, le) {
                    var De = le.on, Te = le.send, Oe;
                    try {
                        Oe = fu(ie, oe, se, {
                            on: De,
                            send: Te
                        })
                    } catch {
                        return
                    }
                    if (Oe && typeof Oe == "object" && Oe !== null) {
                        var Ke = Oe.__post_robot_10_0_46__;
                        if (Array.isArray(Ke))
                            return Ke
                    }
                }(p.data, U, V, {
                    on: y,
                    send: C
                });
                if (X) {
                    ss(U);
                    for (var Q = 0; Q < X.length; Q++) {
                        var q = X[Q];
                        if (M.has(q.id) || (M.set(q.id, !0),
                        H(U) && !q.fireAndForget))
                            return;
                        q.origin.indexOf("file:") === 0 && (V = "file://");
                        try {
                            q.type === "postrobot_message_request" ? vd(U, V, q, {
                                on: y,
                                send: C
                            }) : q.type === "postrobot_message_response" ? wd(U, V, q) : q.type === "postrobot_message_ack" && yd(U, V, q)
                        } catch (se) {
                            setTimeout(function() {
                                throw se
                            }, 0)
                        }
                    }
                }
            }
            function Fr(p, k, y) {
                if (!p)
                    throw new Error("Expected name");
                if (typeof (k = k || {}) == "function" && (y = k,
                k = {}),
                !y)
                    throw new Error("Expected handler");
                var C = function M(U, V) {
                    var X = U.name
                      , Q = U.win
                      , q = U.domain
                      , se = Rt("requestListeners");
                    if (!X || typeof X != "string")
                        throw new Error("Name required to add request listener");
                    if (Q && Q !== "*" && vn.isProxyWindow(Q)) {
                        var ie = Q.awaitWindow().then(function(vt) {
                            return M({
                                name: X,
                                win: vt,
                                domain: q
                            }, V)
                        });
                        return {
                            cancel: function() {
                                ie.then(function(vt) {
                                    return vt.cancel()
                                }, Jn)
                            }
                        }
                    }
                    var oe = Q;
                    if (Array.isArray(oe)) {
                        for (var le = [], De = 0, Te = oe; De < Te.length; De++)
                            le.push(M({
                                name: X,
                                domain: q,
                                win: Te[De]
                            }, V));
                        return {
                            cancel: function() {
                                for (var vt = 0; vt < le.length; vt++)
                                    le[vt].cancel()
                            }
                        }
                    }
                    if (Array.isArray(q)) {
                        for (var Oe = [], Ke = 0, Dt = q; Ke < Dt.length; Ke++)
                            Oe.push(M({
                                name: X,
                                win: oe,
                                domain: Dt[Ke]
                            }, V));
                        return {
                            cancel: function() {
                                for (var vt = 0; vt < Oe.length; vt++)
                                    Oe[vt].cancel()
                            }
                        }
                    }
                    var et = pu({
                        name: X,
                        win: oe,
                        domain: q
                    });
                    oe && oe !== "*" || (oe = $r());
                    var Ze = (q = q || "*").toString();
                    if (et)
                        throw oe && q ? new Error("Request listener already exists for " + X + " on domain " + q.toString() + " for " + (oe === $r() ? "wildcard" : "specified") + " window") : oe ? new Error("Request listener already exists for " + X + " for " + (oe === $r() ? "wildcard" : "specified") + " window") : q ? new Error("Request listener already exists for " + X + " on domain " + q.toString()) : new Error("Request listener already exists for " + X);
                    var Ot = se.getOrSet(oe, function() {
                        return {}
                    }), Ue = _o(Ot, X, function() {
                        return {}
                    }), tt, on;
                    return oi(q) ? (tt = _o(Ue, "__domain_regex__", function() {
                        return []
                    })).push(on = {
                        regex: q,
                        listener: V
                    }) : Ue[Ze] = V,
                    {
                        cancel: function() {
                            delete Ue[Ze],
                            on && (tt.splice(tt.indexOf(on, 1)),
                            tt.length || delete Ue.__domain_regex__),
                            Object.keys(Ue).length || delete Ot[X],
                            oe && !Object.keys(Ot).length && se.del(oe)
                        }
                    }
                }({
                    name: p,
                    win: k.window,
                    domain: k.domain || "*"
                }, {
                    handler: y || k.handler,
                    handleError: k.errorHandler || function(M) {
                        throw M
                    }
                });
                return {
                    cancel: function() {
                        C.cancel()
                    }
                }
            }
            function mu(p, k, y) {
                typeof (k = k || {}) == "function" && (y = k,
                k = {});
                var C = new fe, M;
                return k.errorHandler = function(U) {
                    M.cancel(),
                    C.reject(U)
                }
                ,
                M = Fr(p, k, function(U) {
                    if (M.cancel(),
                    C.resolve(U),
                    y)
                        return y(U)
                }),
                C.cancel = M.cancel,
                C
            }
            var Wr = function p(k, y, C, M) {
                var U = (M = M || {}).domain || "*"
                  , V = M.timeout || -1
                  , X = M.timeout || 5e3
                  , Q = M.fireAndForget || !1;
                return vn.toProxyWindow(k, {
                    send: p
                }).awaitWindow().then(function(q) {
                    return fe.try(function() {
                        if (function(se, ie, oe) {
                            if (!se)
                                throw new Error("Expected name");
                            if (oe && typeof oe != "string" && !Array.isArray(oe) && !oi(oe))
                                throw new TypeError("Can not send " + se + ". Expected domain " + JSON.stringify(oe) + " to be a string, array, or regex");
                            if (H(ie))
                                throw new Error("Can not send " + se + ". Target window is closed")
                        }(y, q, U),
                        function(se, ie) {
                            var oe = F(ie);
                            if (oe)
                                return oe === se;
                            if (ie === se || function(Te) {
                                Te === void 0 && (Te = window);
                                try {
                                    if (Te.top)
                                        return Te.top
                                } catch {}
                                if (v(Te) === Te)
                                    return Te;
                                try {
                                    if (P(window, Te) && window.top)
                                        return window.top
                                } catch {}
                                try {
                                    if (P(Te, window) && window.top)
                                        return window.top
                                } catch {}
                                for (var Oe = 0, Ke = function et(Ze) {
                                    for (var Ot = [], Ue = 0, tt = O(Ze); Ue < tt.length; Ue++) {
                                        var on = tt[Ue];
                                        Ot.push(on);
                                        for (var vt = 0, er = et(on); vt < er.length; vt++)
                                            Ot.push(er[vt])
                                    }
                                    return Ot
                                }(Te); Oe < Ke.length; Oe++) {
                                    var Dt = Ke[Oe];
                                    try {
                                        if (Dt.top)
                                            return Dt.top
                                    } catch {}
                                    if (v(Dt) === Dt)
                                        return Dt
                                }
                            }(ie) === ie)
                                return !1;
                            for (var le = 0, De = O(se); le < De.length; le++)
                                if (De[le] === ie)
                                    return !0;
                            return !1
                        }(window, q))
                            return function(se, ie, oe) {
                                ie === void 0 && (ie = 5e3),
                                oe === void 0 && (oe = "Window");
                                var le = function(De) {
                                    return Rt("helloPromises").getOrSet(De, function() {
                                        return new fe
                                    })
                                }(se);
                                return ie !== -1 && (le = le.timeout(ie, new Error(oe + " did not load after " + ie + "ms"))),
                                le
                            }(q, X)
                    }).then(function(se) {
                        return function(ie, oe, le, De) {
                            var Te = De.send;
                            return fe.try(function() {
                                return typeof oe == "string" ? oe : fe.try(function() {
                                    return le || So(ie, {
                                        send: Te
                                    }).then(function(Oe) {
                                        return Oe.domain
                                    })
                                }).then(function(Oe) {
                                    if (!W(oe, oe))
                                        throw new Error("Domain " + kn(oe) + " does not match " + kn(oe));
                                    return Oe
                                })
                            })
                        }(q, U, (se === void 0 ? {} : se).domain, {
                            send: p
                        })
                    }).then(function(se) {
                        var ie = se
                          , oe = y === "postrobot_method" && C && typeof C.name == "string" ? C.name + "()" : y
                          , le = new fe
                          , De = y + "_" + Lt();
                        if (!Q) {
                            var Te = {
                                name: y,
                                win: q,
                                domain: ie,
                                promise: le
                            };
                            (function(Ue, tt) {
                                mt("responseListeners").set(Ue, tt)
                            }
                            )(De, Te);
                            var Oe = Rt("requestPromises").getOrSet(q, function() {
                                return []
                            });
                            Oe.push(le),
                            le.catch(function() {
                                (function(Ue) {
                                    mt("erroredResponseListeners").set(Ue, !0)
                                }
                                )(De),
                                du(De)
                            });
                            var Ke = function(Ue) {
                                return Rt("knownWindows").get(Ue, !1)
                            }(q) ? 1e4 : 2e3
                              , Dt = V
                              , et = Ke
                              , Ze = Dt
                              , Ot = function(Ue, tt) {
                                var on;
                                return function vt() {
                                    on = setTimeout(function() {
                                        (function() {
                                            if (H(q))
                                                return le.reject(new Error("Window closed for " + y + " before " + (Te.ack ? "response" : "ack")));
                                            if (Te.cancelled)
                                                return le.reject(new Error("Response listener was cancelled for " + y));
                                            et = Math.max(et - 500, 0),
                                            Ze !== -1 && (Ze = Math.max(Ze - 500, 0)),
                                            Te.ack || et !== 0 ? Ze === 0 && le.reject(new Error("No response for postMessage " + oe + " in " + T() + " in " + Dt + "ms")) : le.reject(new Error("No ack for postMessage " + oe + " in " + T() + " in " + Ke + "ms"))
                                        }
                                        )(),
                                        vt()
                                    }, 500)
                                }(),
                                {
                                    cancel: function() {
                                        clearTimeout(on)
                                    }
                                }
                            }();
                            le.finally(function() {
                                Ot.cancel(),
                                Oe.splice(Oe.indexOf(le, 1))
                            }).catch(Jn)
                        }
                        return Oa(q, ie, {
                            id: Lt(),
                            origin: T(window),
                            type: "postrobot_message_request",
                            hash: De,
                            name: y,
                            data: C,
                            fireAndForget: Q
                        }, {
                            on: Fr,
                            send: p
                        }).then(function() {
                            return Q ? le.resolve() : le
                        }, function(Ue) {
                            throw new Error("Send request message failed for " + oe + " in " + T() + `

` + Li(Ue))
                        })
                    })
                })
            };
            function _d(p, k, y) {
                return cu(p, k, y, {
                    on: Fr,
                    send: Wr
                })
            }
            function xd(p, k, y) {
                return fu(p, k, y, {
                    on: Fr,
                    send: Wr
                })
            }
            function Sd(p) {
                return new vn({
                    send: Wr,
                    win: p
                })
            }
            function bd(p) {
                return vn.toProxyWindow(p, {
                    send: Wr
                })
            }
            function vu() {
                jr().initialized || (jr().initialized = !0,
                k = (p = {
                    on: Fr,
                    send: Wr
                }).on,
                y = p.send,
                (C = jr()).receiveMessage = C.receiveMessage || function(M) {
                    return gu(M, {
                        on: k,
                        send: y
                    })
                }
                ,
                function(M) {
                    var U = M.on
                      , V = M.send;
                    mt().getOrSet("postMessageListener", function() {
                        return function(X, Q, q) {
                            return X.addEventListener("message", q),
                            {
                                cancel: function() {
                                    X.removeEventListener("message", q)
                                }
                            }
                        }(window, 0, function(X) {
                            (function(Q, q) {
                                var se = q.on
                                  , ie = q.send;
                                fe.try(function() {
                                    var oe = Q.source || Q.sourceElement
                                      , le = Q.origin || Q.originalEvent && Q.originalEvent.origin
                                      , De = Q.data;
                                    if (le === "null" && (le = "file://"),
                                    oe) {
                                        if (!le)
                                            throw new Error("Post message did not have origin domain");
                                        gu({
                                            source: oe,
                                            origin: le,
                                            data: De
                                        }, {
                                            on: se,
                                            send: ie
                                        })
                                    }
                                })
                            }
                            )(X, {
                                on: U,
                                send: V
                            })
                        })
                    })
                }({
                    on: Fr,
                    send: Wr
                }),
                function(M) {
                    var U = M.on
                      , V = M.send;
                    mt("builtinListeners").getOrSet("helloListener", function() {
                        var X = U("postrobot_hello", {
                            domain: "*"
                        }, function(q) {
                            return is(q.source, {
                                domain: q.origin
                            }),
                            {
                                instanceID: rs()
                            }
                        })
                          , Q = F();
                        return Q && So(Q, {
                            send: V
                        }).catch(function(q) {}),
                        X
                    })
                }({
                    on: Fr,
                    send: Wr
                }));
                var p, k, y, C
            }
            function us() {
                (function() {
                    for (var k = mt("responseListeners"), y = 0, C = k.keys(); y < C.length; y++) {
                        var M = C[y]
                          , U = k.get(M);
                        U && (U.cancelled = !0),
                        k.del(M)
                    }
                }
                )(),
                (p = mt().get("postMessageListener")) && p.cancel();
                var p;
                delete window.__post_robot_10_0_46__
            }
            var Ed = !0;
            function cs(p) {
                for (var k = 0, y = Rt("requestPromises").get(p, []); k < y.length; k++)
                    y[k].reject(new Error("Window " + (H(p) ? "closed" : "cleaned up") + " before response")).catch(Jn)
            }
            vu()
        }
        ])
    })
}
)(f2);
var Vz = f2.exports;
(function(e) {
    e.exports = Vz,
    e.exports.default = e.exports
}
)(c2);
var Gz = c2.exports;
const uU = Jo(Gz);
b.object,
b.string,
b.object,
b.object,
b.func,
b.func;
b.object,
b.string,
b.object,
b.object,
b.func,
b.func;
b.object,
b.object,
b.array;
const qz = "#F8F9FA"
  , Qz = "#6C7787"
  , Kz = () => Bt.jsx("svg", {
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg",
    children: Bt.jsx("path", {
        d: "m12 2c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10-10-4.4771525-10-10 4.4771525-10 10-10zm0 2c-4.418278 0-8 3.581722-8 8s3.581722 8 8 8 8-3.581722 8-8-3.581722-8-8-8zm1 7v6h-2v-6zm-1-4c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1-1-.44771525-1-1 .4477153-1 1-1z",
        fill: "#A0ADBA"
    })
});
class Zz extends ee.Component {
    constructor(t) {
        super(t),
        this.state = {
            error: null,
            errorInfo: null
        }
    }
    componentDidCatch(t, n) {
        this.setState({
            error: t,
            errorInfo: n
        })
    }
    render() {
        const {children: t} = this.props;
        return this.state.error ? Bt.jsxs(Bt.Fragment, {
            children: [Bt.jsxs("div", {
                className: "jsx-2250419591 pluginBoundary",
                children: [Bt.jsx(Kz, {}), Bt.jsx("div", {
                    className: "jsx-2250419591 pluginErrorMessage",
                    children: "There was a problem loading this plugin"
                })]
            }), Bt.jsx(de, {
                id: "2250419591",
                children: [`.pluginBoundary.jsx-2250419591{background-color:${qz};height:100vh;width:100vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-block-start:16px;}`, `.pluginErrorMessage.jsx-2250419591{margin-block-start:8px;color:${Qz};}`]
            })]
        }) : t
    }
}
Zz.propTypes = {
    children: b.node.isRequired
};
var Hg = {};
const Jz = I.lazy( () => Hb( () => import("./App-Xt96OVoe.js"), __vite__mapDeps([0, 1]), import.meta.url))
  , Xz = () => {
    var t;
    const e = (t = document.querySelector('meta[name="dhis2-base-url"]')) == null ? void 0 : t.getAttribute("content");
    return e && e !== "__DHIS2_BASE_URL__" ? e : null
}
  , eU = e => !e || e === "" ? [] : e.split(",")
  , tU = !1
  , nU = eU(Hg.REACT_APP_DHIS2_APP_REQUIREDPROPS)
  , d2 = {
    url: Xz() || "../../..",
    appName: "Global Shell",
    appVersion: "1.12.3",
    apiVersion: parseInt(Hg.REACT_APP_DHIS2_API_VERSION),
    pwaEnabled: !0,
    plugin: tU,
    loginApp: Hg.REACT_APP_DHIS2_APP_LOGINAPP === "true",
    direction: "auto"
};
({
    ...d2
});
const h2 = ({config: e}) => Bt.jsx(u2, {
    ...e,
    children: Bt.jsx(I.Suspense, {
        fallback: Bt.jsx(qf, {
            level: ul.alert,
            children: Bt.jsx(Ql, {
                children: Bt.jsx(ta, {})
            })
        }),
        children: Bt.jsx(Jz, {
            config: e
        })
    })
});
h2.propTypes = {
    config: b.object
};
b.object;
const rU = () => Bt.jsx(h2, {
    config: d2
})
  , iU = document.getElementById("dhis2-app-root")
  , oU = Bb(iU);
oU.render(Bt.jsxs(Bt.Fragment, {
    children: [Bt.jsx(oM, {}), Bt.jsx(rU, {})]
}));
export {xN as A, R_ as B, Qm as C, aU as D, U$ as E, lU as F, Ql as G, ta as H, yf as I, uU as J, qf as L, Nb as M, Yb as N, b as P, I as R, de as _, _e as a, qe as b, $ as c, dn as d, Oc as e, IS as f, Jo as g, H3 as h, no as i, Ym as j, sE as k, ul as l, Zr as m, jt as n, cE as o, Y3 as p, Bt as q, ee as r, sU as s, nt as t, Zl as u, ve as v, $b as w, jb as x, Lb as y, r$ as z};
//# sourceMappingURL=main-DBaOIGQO.js.map

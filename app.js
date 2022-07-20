! function(t) {
    function e(e) {
        for (var n, r, i = e[0], o = e[1], a = 0, s = []; a < i.length; a++) r = i[a], Object.prototype.hasOwnProperty.call(T, r) && T[r] && s.push(T[r][0]), T[r] = 0;
        for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
        for (R && R(e); s.length;) s.shift()()
    }
    var n = window.webpackHotUpdate;
    window.webpackHotUpdate = function(t, e) {
        ! function(t, e) {
            if (!w[t] || !_[t]) return;
            for (var n in _[t] = !1, e) Object.prototype.hasOwnProperty.call(e, n) && (g[n] = e[n]);
            0 == --m && 0 === y && M()
        }(t, e), n && n(t, e)
    };
    var r, i = !0,
        o = "95b0c3f7daf35928b064",
        a = {},
        s = [],
        c = [];

    function u(t) {
        var e = P[t];
        if (!e) return D;
        var n = function(n) {
                return e.hot.active ? (P[n] ? -1 === P[n].parents.indexOf(t) && P[n].parents.push(t) : (s = [t], r = n), -1 === e.children.indexOf(n) && e.children.push(n)) : (console.warn("[HMR] unexpected require(" + n + ") from disposed module " + t), s = []), D(n)
            },
            i = function(t) {
                return {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return D[t]
                    },
                    set: function(e) {
                        D[t] = e
                    }
                }
            };
        for (var o in D) Object.prototype.hasOwnProperty.call(D, o) && "e" !== o && "t" !== o && Object.defineProperty(n, o, i(o));
        return n.e = function(t) {
            return "ready" === h && d("prepare"), y++, D.e(t).then(e, (function(t) {
                throw e(), t
            }));

            function e() {
                y--, "prepare" === h && (x[t] || S(t), 0 === y && 0 === m && M())
            }
        }, n.t = function(t, e) {
            return 1 & e && (t = n(t)), D.t(t, -2 & e)
        }, n
    }

    function l(e) {
        var n = {
            _acceptedDependencies: {},
            _declinedDependencies: {},
            _selfAccepted: !1,
            _selfDeclined: !1,
            _selfInvalidated: !1,
            _disposeHandlers: [],
            _main: r !== e,
            active: !0,
            accept: function(t, e) {
                if (void 0 === t) n._selfAccepted = !0;
                else if ("function" == typeof t) n._selfAccepted = t;
                else if ("object" == typeof t)
                    for (var r = 0; r < t.length; r++) n._acceptedDependencies[t[r]] = e || function() {};
                else n._acceptedDependencies[t] = e || function() {}
            },
            decline: function(t) {
                if (void 0 === t) n._selfDeclined = !0;
                else if ("object" == typeof t)
                    for (var e = 0; e < t.length; e++) n._declinedDependencies[t[e]] = !0;
                else n._declinedDependencies[t] = !0
            },
            dispose: function(t) {
                n._disposeHandlers.push(t)
            },
            addDisposeHandler: function(t) {
                n._disposeHandlers.push(t)
            },
            removeDisposeHandler: function(t) {
                var e = n._disposeHandlers.indexOf(t);
                e >= 0 && n._disposeHandlers.splice(e, 1)
            },
            invalidate: function() {
                switch (this._selfInvalidated = !0, h) {
                    case "idle":
                        (g = {})[e] = t[e], d("ready");
                        break;
                    case "ready":
                        A(e);
                        break;
                    case "prepare":
                    case "check":
                    case "dispose":
                    case "apply":
                        (v = v || []).push(e)
                }
            },
            check: j,
            apply: k,
            status: function(t) {
                if (!t) return h;
                f.push(t)
            },
            addStatusHandler: function(t) {
                f.push(t)
            },
            removeStatusHandler: function(t) {
                var e = f.indexOf(t);
                e >= 0 && f.splice(e, 1)
            },
            data: a[e]
        };
        return r = void 0, n
    }
    var f = [],
        h = "idle";

    function d(t) {
        h = t;
        for (var e = 0; e < f.length; e++) f[e].call(null, t)
    }
    var p, g, b, v, m = 0,
        y = 0,
        x = {},
        _ = {},
        w = {};

    function O(t) {
        return +t + "" === t ? +t : t
    }

    function j(t) {
        if ("idle" !== h) throw new Error("check() is only allowed in idle status");
        return i = t, d("check"), (e = 1e4, e = e || 1e4, new Promise((function(t, n) {
            if ("undefined" == typeof XMLHttpRequest) return n(new Error("No browser support"));
            try {
                var r = new XMLHttpRequest,
                    i = D.p + "" + o + ".hot-update.json";
                r.open("GET", i, !0), r.timeout = e, r.send(null)
            } catch (t) {
                return n(t)
            }
            r.onreadystatechange = function() {
                if (4 === r.readyState)
                    if (0 === r.status) n(new Error("Manifest request to " + i + " timed out."));
                    else if (404 === r.status) t();
                else if (200 !== r.status && 304 !== r.status) n(new Error("Manifest request to " + i + " failed."));
                else {
                    try {
                        var e = JSON.parse(r.responseText)
                    } catch (t) {
                        return void n(t)
                    }
                    t(e)
                }
            }
        }))).then((function(t) {
            if (!t) return d(E() ? "ready" : "idle"), null;
            _ = {}, x = {}, w = t.c, b = t.h, d("prepare");
            var e = new Promise((function(t, e) {
                p = {
                    resolve: t,
                    reject: e
                }
            }));
            for (var n in g = {}, T) S(n);
            return "prepare" === h && 0 === y && 0 === m && M(), e
        }));
        var e
    }

    function S(t) {
        w[t] ? (_[t] = !0, m++, function(t) {
            var e = document.createElement("script");
            e.charset = "utf-8", e.src = D.p + "" + t + "." + o + ".hot-update.js", document.head.appendChild(e)
        }(t)) : x[t] = !0
    }

    function M() {
        d("ready");
        var t = p;
        if (p = null, t)
            if (i) Promise.resolve().then((function() {
                return k(i)
            })).then((function(e) {
                t.resolve(e)
            }), (function(e) {
                t.reject(e)
            }));
            else {
                var e = [];
                for (var n in g) Object.prototype.hasOwnProperty.call(g, n) && e.push(O(n));
                t.resolve(e)
            }
    }

    function k(e) {
        if ("ready" !== h) throw new Error("apply() is only allowed in ready status");
        return function e(n) {
            var i, c, u, l, f;

            function h(t) {
                for (var e = [t], n = {}, r = e.map((function(t) {
                        return {
                            chain: [t],
                            id: t
                        }
                    })); r.length > 0;) {
                    var i = r.pop(),
                        o = i.id,
                        a = i.chain;
                    if ((l = P[o]) && (!l.hot._selfAccepted || l.hot._selfInvalidated)) {
                        if (l.hot._selfDeclined) return {
                            type: "self-declined",
                            chain: a,
                            moduleId: o
                        };
                        if (l.hot._main) return {
                            type: "unaccepted",
                            chain: a,
                            moduleId: o
                        };
                        for (var s = 0; s < l.parents.length; s++) {
                            var c = l.parents[s],
                                u = P[c];
                            if (u) {
                                if (u.hot._declinedDependencies[o]) return {
                                    type: "declined",
                                    chain: a.concat([c]),
                                    moduleId: o,
                                    parentId: c
                                }; - 1 === e.indexOf(c) && (u.hot._acceptedDependencies[o] ? (n[c] || (n[c] = []), p(n[c], [o])) : (delete n[c], e.push(c), r.push({
                                    chain: a.concat([c]),
                                    id: c
                                })))
                            }
                        }
                    }
                }
                return {
                    type: "accepted",
                    moduleId: t,
                    outdatedModules: e,
                    outdatedDependencies: n
                }
            }

            function p(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]; - 1 === t.indexOf(r) && t.push(r)
                }
            }
            E();
            var m = {},
                y = [],
                x = {},
                _ = function() {
                    console.warn("[HMR] unexpected require(" + S.moduleId + ") to disposed module")
                };
            for (var j in g)
                if (Object.prototype.hasOwnProperty.call(g, j)) {
                    var S;
                    f = O(j), S = g[j] ? h(f) : {
                        type: "disposed",
                        moduleId: j
                    };
                    var M = !1,
                        k = !1,
                        A = !1,
                        C = "";
                    switch (S.chain && (C = "\nUpdate propagation: " + S.chain.join(" -> ")), S.type) {
                        case "self-declined":
                            n.onDeclined && n.onDeclined(S), n.ignoreDeclined || (M = new Error("Aborted because of self decline: " + S.moduleId + C));
                            break;
                        case "declined":
                            n.onDeclined && n.onDeclined(S), n.ignoreDeclined || (M = new Error("Aborted because of declined dependency: " + S.moduleId + " in " + S.parentId + C));
                            break;
                        case "unaccepted":
                            n.onUnaccepted && n.onUnaccepted(S), n.ignoreUnaccepted || (M = new Error("Aborted because " + f + " is not accepted" + C));
                            break;
                        case "accepted":
                            n.onAccepted && n.onAccepted(S), k = !0;
                            break;
                        case "disposed":
                            n.onDisposed && n.onDisposed(S), A = !0;
                            break;
                        default:
                            throw new Error("Unexception type " + S.type)
                    }
                    if (M) return d("abort"), Promise.reject(M);
                    if (k)
                        for (f in x[f] = g[f], p(y, S.outdatedModules), S.outdatedDependencies) Object.prototype.hasOwnProperty.call(S.outdatedDependencies, f) && (m[f] || (m[f] = []), p(m[f], S.outdatedDependencies[f]));
                    A && (p(y, [S.moduleId]), x[f] = _)
                }
            var L, I = [];
            for (c = 0; c < y.length; c++) f = y[c], P[f] && P[f].hot._selfAccepted && x[f] !== _ && !P[f].hot._selfInvalidated && I.push({
                module: f,
                parents: P[f].parents.slice(),
                errorHandler: P[f].hot._selfAccepted
            });
            d("dispose"), Object.keys(w).forEach((function(t) {
                !1 === w[t] && function(t) {
                    delete T[t]
                }(t)
            }));
            var R, F, z = y.slice();
            for (; z.length > 0;)
                if (f = z.pop(), l = P[f]) {
                    var N = {},
                        B = l.hot._disposeHandlers;
                    for (u = 0; u < B.length; u++)(i = B[u])(N);
                    for (a[f] = N, l.hot.active = !1, delete P[f], delete m[f], u = 0; u < l.children.length; u++) {
                        var W = P[l.children[u]];
                        W && ((L = W.parents.indexOf(f)) >= 0 && W.parents.splice(L, 1))
                    }
                }
            for (f in m)
                if (Object.prototype.hasOwnProperty.call(m, f) && (l = P[f]))
                    for (F = m[f], u = 0; u < F.length; u++) R = F[u], (L = l.children.indexOf(R)) >= 0 && l.children.splice(L, 1);
            d("apply"), void 0 !== b && (o = b, b = void 0);
            for (f in g = void 0, x) Object.prototype.hasOwnProperty.call(x, f) && (t[f] = x[f]);
            var V = null;
            for (f in m)
                if (Object.prototype.hasOwnProperty.call(m, f) && (l = P[f])) {
                    F = m[f];
                    var H = [];
                    for (c = 0; c < F.length; c++)
                        if (R = F[c], i = l.hot._acceptedDependencies[R]) {
                            if (-1 !== H.indexOf(i)) continue;
                            H.push(i)
                        }
                    for (c = 0; c < H.length; c++) {
                        i = H[c];
                        try {
                            i(F)
                        } catch (t) {
                            n.onErrored && n.onErrored({
                                type: "accept-errored",
                                moduleId: f,
                                dependencyId: F[c],
                                error: t
                            }), n.ignoreErrored || V || (V = t)
                        }
                    }
                }
            for (c = 0; c < I.length; c++) {
                var U = I[c];
                f = U.module, s = U.parents, r = f;
                try {
                    D(f)
                } catch (t) {
                    if ("function" == typeof U.errorHandler) try {
                        U.errorHandler(t)
                    } catch (e) {
                        n.onErrored && n.onErrored({
                            type: "self-accept-error-handler-errored",
                            moduleId: f,
                            error: e,
                            originalError: t
                        }), n.ignoreErrored || V || (V = e), V || (V = t)
                    } else n.onErrored && n.onErrored({
                        type: "self-accept-errored",
                        moduleId: f,
                        error: t
                    }), n.ignoreErrored || V || (V = t)
                }
            }
            if (V) return d("fail"), Promise.reject(V);
            if (v) return e(n).then((function(t) {
                return y.forEach((function(e) {
                    t.indexOf(e) < 0 && t.push(e)
                })), t
            }));
            return d("idle"), new Promise((function(t) {
                t(y)
            }))
        }(e = e || {})
    }

    function E() {
        if (v) return g || (g = {}), v.forEach(A), v = void 0, !0
    }

    function A(e) {
        Object.prototype.hasOwnProperty.call(g, e) || (g[e] = t[e])
    }
    var P = {},
        T = {
            5: 0
        };

    function D(e) {
        if (P[e]) return P[e].exports;
        var n = P[e] = {
            i: e,
            l: !1,
            exports: {},
            hot: l(e),
            parents: (c = s, s = [], c),
            children: []
        };
        return t[e].call(n.exports, n, n.exports, u(e)), n.l = !0, n.exports
    }
    D.e = function(t) {
        var e = [],
            n = T[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var r = new Promise((function(e, r) {
                    n = T[t] = [e, r]
                }));
                e.push(n[2] = r);
                var i, o = document.createElement("script");
                o.charset = "utf-8", o.timeout = 120, D.nc && o.setAttribute("nonce", D.nc), o.src = function(t) {
                    return D.p + "" + {
                        0: "1951cc65392e91ef868c",
                        1: "9184f3e2afbdd0c769a3",
                        2: "6da6865bede717050be3",
                        3: "3554e55cbd85d1ef56b0",
                        4: "dac9705eb3c7c3e0da51",
                        6: "4c162c328d9d108eba71",
                        7: "3b95c348a893cbaddfab",
                        8: "b14e00d017861a78c184",
                        9: "548fe5ab5711362b0825",
                        10: "fb89b1e2cb05a7386cc7",
                        11: "3c64bdd94b3bf6e93732",
                        12: "9ab6c473df44cfb40444",
                        13: "b8b3915735295b96902f",
                        14: "23376ad8cc47316e844e",
                        15: "054b36fd129b539abe62",
                        16: "41adf561c2a0489de9ac",
                        17: "d49e617e082513ced042",
                        18: "98b349f0b75b20eb8557",
                        19: "6086f3856dd75d9107b1",
                        20: "fca217d88975f3f13281",
                        21: "541abbaa4be04b263189",
                        22: "8a6dd16c6a1b847038e0",
                        23: "d9765b8a6b8c0d6478aa",
                        24: "2505360d1859470c8ed5",
                        25: "4e2bf0adb9ff4b9efc4d",
                        26: "5e6bb5425d34407e7148",
                        27: "83874af9861506406afa",
                        28: "2640a8fefca0ec7193a4",
                        29: "be4287bcde1087c3a13e",
                        30: "a33381b43926252cae2b",
                        31: "6566d1870e896f933afa",
                        32: "d514981aaa7254e2da31",
                        33: "a4182319535db713278f",
                        34: "382f9e0982ceec6806c3",
                        35: "8d8c3dcc9b0ff1d488ca",
                        36: "5499719db9a3c667b13d",
                        37: "f2ad6b98f2f332578e03",
                        38: "ebb7238be726f6f4cc3f",
                        39: "e28f82a7df9b3ccc8f6d",
                        40: "371ed53662c4475c1066",
                        41: "04dc38d087ed66750811"
                    }[t] + ".js"
                }(t);
                var a = new Error;
                i = function(e) {
                    o.onerror = o.onload = null, clearTimeout(s);
                    var n = T[t];
                    if (0 !== n) {
                        if (n) {
                            var r = e && ("load" === e.type ? "missing" : e.type),
                                i = e && e.target && e.target.src;
                            a.message = "Loading chunk " + t + " failed.\n(" + r + ": " + i + ")", a.name = "ChunkLoadError", a.type = r, a.request = i, n[1](a)
                        }
                        T[t] = void 0
                    }
                };
                var s = setTimeout((function() {
                    i({
                        type: "timeout",
                        target: o
                    })
                }), 12e4);
                o.onerror = o.onload = i, document.head.appendChild(o)
            }
        return Promise.all(e)
    }, D.m = t, D.c = P, D.d = function(t, e, n) {
        D.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, D.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, D.t = function(t, e) {
        if (1 & e && (t = D(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (D.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) D.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, D.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return D.d(e, "a", e), e
    }, D.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, D.p = "/dist/js/", D.oe = function(t) {
        throw console.error(t), t
    }, D.h = function() {
        return o
    };
    var C = window.webpackJsonp = window.webpackJsonp || [],
        L = C.push.bind(C);
    C.push = e, C = C.slice();
    for (var I = 0; I < C.length; I++) e(C[I]);
    var R = L;
    u(131)(D.s = 131)
}([function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return S
    })), n.d(e, "b", (function() {
        return ee
    })), n.d(e, "c", (function() {
        return xe
    })), n.d(e, "d", (function() {
        return pe
    })), n.d(e, "e", (function() {
        return x
    })), n.d(e, "f", (function() {
        return Ze
    })), n.d(e, "g", (function() {
        return $e
    })), n.d(e, "h", (function() {
        return en
    })), n.d(e, "i", (function() {
        return N
    })), n.d(e, "j", (function() {
        return i
    })), n.d(e, "k", (function() {
        return tn
    })), n.d(e, "l", (function() {
        return V
    })), n.d(e, "m", (function() {
        return $
    })), n.d(e, "n", (function() {
        return g
    })), n.d(e, "o", (function() {
        return y
    })), n.d(e, "p", (function() {
        return ve
    })), n.d(e, "q", (function() {
        return L
    })), n.d(e, "r", (function() {
        return J
    })), n.d(e, "s", (function() {
        return Kt
    })), n.d(e, "t", (function() {
        return ot
    })), n.d(e, "u", (function() {
        return I
    })), n.d(e, "v", (function() {
        return Zt
    })), n.d(e, "w", (function() {
        return ae
    })), n.d(e, "x", (function() {
        return ge
    })), n.d(e, "y", (function() {
        return a
    })), n.d(e, "z", (function() {
        return s
    })), n.d(e, "A", (function() {
        return $t
    })), n.d(e, "B", (function() {
        return Se
    })), n.d(e, "C", (function() {
        return be
    })), n.d(e, "D", (function() {
        return P
    })), n.d(e, "E", (function() {
        return Yt
    })), n.d(e, "F", (function() {
        return D
    })), n.d(e, "G", (function() {
        return ke
    })), n.d(e, "H", (function() {
        return Me
    })), n.d(e, "I", (function() {
        return Ee
    })), n.d(e, "J", (function() {
        return M
    })), n.d(e, "K", (function() {
        return l
    })), n.d(e, "L", (function() {
        return o
    })), n.d(e, "M", (function() {
        return Qe
    })), n.d(e, "N", (function() {
        return U
    })), n.d(e, "O", (function() {
        return G
    })), n.d(e, "P", (function() {
        return q
    })), n.d(e, "Q", (function() {
        return Z
    })), n.d(e, "R", (function() {
        return Jt
    })), n.d(e, "S", (function() {
        return _e
    })), n.d(e, "T", (function() {
        return me
    })), n.d(e, "U", (function() {
        return Qt
    })), n.d(e, "V", (function() {
        return C
    })), n.d(e, "W", (function() {
        return _
    })), n.d(e, "X", (function() {
        return Q
    })), n.d(e, "Y", (function() {
        return fe
    })), n.d(e, "Z", (function() {
        return Ue
    })), n.d(e, "ab", (function() {
        return gn
    })), n.d(e, "bb", (function() {
        return pn
    })), n.d(e, "cb", (function() {
        return rn
    })), n.d(e, "db", (function() {
        return on
    })), n.d(e, "eb", (function() {
        return nn
    })), n.d(e, "fb", (function() {
        return ie
    })), n.d(e, "gb", (function() {
        return oe
    })), n.d(e, "hb", (function() {
        return te
    })), n.d(e, "ib", (function() {
        return se
    })), n.d(e, "jb", (function() {
        return he
    })), n.d(e, "kb", (function() {
        return de
    })), n.d(e, "lb", (function() {
        return dn
    })), n.d(e, "mb", (function() {
        return nt
    })), n.d(e, "nb", (function() {
        return cn
    })), n.d(e, "ob", (function() {
        return un
    })), n.d(e, "pb", (function() {
        return c
    })), n.d(e, "qb", (function() {
        return ln
    })), n.d(e, "rb", (function() {
        return u
    })), n.d(e, "sb", (function() {
        return tt
    })), n.d(e, "tb", (function() {
        return X
    })), n.d(e, "ub", (function() {
        return h
    })), n.d(e, "vb", (function() {
        return Ht
    })), n.d(e, "wb", (function() {
        return Xt
    })), n.d(e, "xb", (function() {
        return ut
    })), n.d(e, "yb", (function() {
        return A
    })), n.d(e, "zb", (function() {
        return p
    })), n.d(e, "Ab", (function() {
        return T
    })), n.d(e, "Bb", (function() {
        return d
    })), n.d(e, "Cb", (function() {
        return f
    })), n.d(e, "Db", (function() {
        return ne
    })), n.d(e, "Eb", (function() {
        return Oe
    })), n.d(e, "Fb", (function() {
        return re
    })), n.d(e, "Gb", (function() {
        return v
    })), n.d(e, "Hb", (function() {
        return m
    })), n.d(e, "Ib", (function() {
        return sn
    })), n.d(e, "Jb", (function() {
        return rt
    })), n.d(e, "Kb", (function() {
        return r
    })), n.d(e, "Lb", (function() {
        return H
    })), n.d(e, "Mb", (function() {
        return K
    })), n.d(e, "Nb", (function() {
        return je
    })), n.d(e, "Ob", (function() {
        return b
    })), n.d(e, "Pb", (function() {
        return Y
    })), n.d(e, "Qb", (function() {
        return it
    })), n.d(e, "Rb", (function() {
        return ye
    })), n.d(e, "Sb", (function() {
        return Ke
    }));
    const r = "undefined" == typeof window ? function(t) {
        return t()
    } : window.requestAnimationFrame;

    function i(t, e, n) {
        const i = n || (t => Array.prototype.slice.call(t));
        let o = !1,
            a = [];
        return function(...n) {
            a = i(n), o || (o = !0, r.call(window, () => {
                o = !1, t.apply(e, a)
            }))
        }
    }

    function o(t, e) {
        let n;
        return function() {
            return e ? (clearTimeout(n), n = setTimeout(t, e)) : t(), e
        }
    }
    const a = t => "start" === t ? "left" : "end" === t ? "right" : "center",
        s = (t, e, n) => "start" === t ? e : "end" === t ? n : (e + n) / 2,
        c = (t, e, n) => "right" === t ? n : "center" === t ? (e + n) / 2 : e;

    function u() {}
    const l = function() {
        let t = 0;
        return function() {
            return t++
        }
    }();

    function f(t) {
        return null == t
    }

    function h(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = Object.prototype.toString.call(t);
        return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6)
    }

    function d(t) {
        return null !== t && "[object Object]" === Object.prototype.toString.call(t)
    }
    const p = t => ("number" == typeof t || t instanceof Number) && isFinite(+t);

    function g(t, e) {
        return p(t) ? t : e
    }

    function b(t, e) {
        return void 0 === t ? e : t
    }
    const v = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : t / e,
        m = (t, e) => "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;

    function y(t, e, n) {
        if (t && "function" == typeof t.call) return t.apply(n, e)
    }

    function x(t, e, n, r) {
        let i, o, a;
        if (h(t))
            if (o = t.length, r)
                for (i = o - 1; i >= 0; i--) e.call(n, t[i], i);
            else
                for (i = 0; i < o; i++) e.call(n, t[i], i);
        else if (d(t))
            for (a = Object.keys(t), o = a.length, i = 0; i < o; i++) e.call(n, t[a[i]], a[i])
    }

    function _(t, e) {
        let n, r, i, o;
        if (!t || !e || t.length !== e.length) return !1;
        for (n = 0, r = t.length; n < r; ++n)
            if (i = t[n], o = e[n], i.datasetIndex !== o.datasetIndex || i.index !== o.index) return !1;
        return !0
    }

    function w(t) {
        if (h(t)) return t.map(w);
        if (d(t)) {
            const e = Object.create(null),
                n = Object.keys(t),
                r = n.length;
            let i = 0;
            for (; i < r; ++i) e[n[i]] = w(t[n[i]]);
            return e
        }
        return t
    }

    function O(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
    }

    function j(t, e, n, r) {
        if (!O(t)) return;
        const i = e[t],
            o = n[t];
        d(i) && d(o) ? S(i, o, r) : e[t] = w(o)
    }

    function S(t, e, n) {
        const r = h(e) ? e : [e],
            i = r.length;
        if (!d(t)) return t;
        const o = (n = n || {}).merger || j;
        for (let a = 0; a < i; ++a) {
            if (!d(e = r[a])) continue;
            const i = Object.keys(e);
            for (let r = 0, a = i.length; r < a; ++r) o(i[r], t, e, n)
        }
        return t
    }

    function M(t, e) {
        return S(t, e, {
            merger: k
        })
    }

    function k(t, e, n) {
        if (!O(t)) return;
        const r = e[t],
            i = n[t];
        d(r) && d(i) ? M(r, i) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = w(i))
    }

    function E(t, e) {
        const n = t.indexOf(".", e);
        return -1 === n ? t.length : n
    }

    function A(t, e) {
        if ("" === e) return t;
        let n = 0,
            r = E(e, n);
        for (; t && r > n;) t = t[e.substr(n, r - n)], n = r + 1, r = E(e, n);
        return t
    }

    function P(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    const T = t => void 0 !== t,
        D = t => "function" == typeof t,
        C = (t, e) => {
            if (t.size !== e.size) return !1;
            for (const n of t)
                if (!e.has(n)) return !1;
            return !0
        },
        L = Math.PI,
        I = 2 * L,
        R = I + L,
        F = Number.POSITIVE_INFINITY,
        z = L / 180,
        N = L / 2,
        B = L / 4,
        W = 2 * L / 3,
        V = Math.log10,
        H = Math.sign;

    function U(t) {
        const e = Math.pow(10, Math.floor(V(t))),
            n = t / e;
        return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * e
    }

    function $(t) {
        const e = [],
            n = Math.sqrt(t);
        let r;
        for (r = 1; r < n; r++) t % r == 0 && (e.push(r), e.push(t / r));
        return n === (0 | n) && e.push(n), e.sort((t, e) => t - e).pop(), e
    }

    function Y(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }

    function q(t, e, n) {
        return Math.abs(t - e) < n
    }

    function G(t, e) {
        const n = Math.round(t);
        return n - e <= t && n + e >= t
    }

    function X(t, e, n) {
        let r, i, o;
        for (r = 0, i = t.length; r < i; r++) o = t[r][n], isNaN(o) || (e.min = Math.min(e.min, o), e.max = Math.max(e.max, o))
    }

    function K(t) {
        return t * (L / 180)
    }

    function J(t) {
        return t * (180 / L)
    }

    function Z(t) {
        if (!p(t)) return;
        let e = 1,
            n = 0;
        for (; Math.round(t * e) / e !== t;) e *= 10, n++;
        return n
    }

    function Q(t, e) {
        const n = e.x - t.x,
            r = e.y - t.y,
            i = Math.sqrt(n * n + r * r);
        let o = Math.atan2(r, n);
        return o < -.5 * L && (o += I), {
            angle: o,
            distance: i
        }
    }

    function tt(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
    }

    function et(t, e) {
        return (t - e + R) % I - L
    }

    function nt(t) {
        return (t % I + I) % I
    }

    function rt(t, e, n) {
        const r = nt(t),
            i = nt(e),
            o = nt(n),
            a = nt(i - r),
            s = nt(o - r),
            c = nt(r - i),
            u = nt(r - o);
        return r === i || r === o || a > s && c < u
    }

    function it(t, e, n) {
        return Math.max(e, Math.min(n, t))
    }

    function ot(t) {
        return it(t, -32768, 32767)
    }
    const at = t => 0 === t || 1 === t,
        st = (t, e, n) => -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * I / n),
        ct = (t, e, n) => Math.pow(2, -10 * t) * Math.sin((t - e) * I / n) + 1,
        ut = {
            linear: t => t,
            easeInQuad: t => t * t,
            easeOutQuad: t => -t * (t - 2),
            easeInOutQuad: t => (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1),
            easeInCubic: t => t * t * t,
            easeOutCubic: t => (t -= 1) * t * t + 1,
            easeInOutCubic: t => (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2),
            easeInQuart: t => t * t * t * t,
            easeOutQuart: t => -((t -= 1) * t * t * t - 1),
            easeInOutQuart: t => (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2),
            easeInQuint: t => t * t * t * t * t,
            easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
            easeInOutQuint: t => (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2),
            easeInSine: t => 1 - Math.cos(t * N),
            easeOutSine: t => Math.sin(t * N),
            easeInOutSine: t => -.5 * (Math.cos(L * t) - 1),
            easeInExpo: t => 0 === t ? 0 : Math.pow(2, 10 * (t - 1)),
            easeOutExpo: t => 1 === t ? 1 : 1 - Math.pow(2, -10 * t),
            easeInOutExpo: t => at(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
            easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
            easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
            easeInOutCirc: t => (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
            easeInElastic: t => at(t) ? t : st(t, .075, .3),
            easeOutElastic: t => at(t) ? t : ct(t, .075, .3),
            easeInOutElastic(t) {
                const e = .1125;
                return at(t) ? t : t < .5 ? .5 * st(2 * t, e, .45) : .5 + .5 * ct(2 * t - 1, e, .45)
            },
            easeInBack(t) {
                const e = 1.70158;
                return t * t * ((e + 1) * t - e)
            },
            easeOutBack(t) {
                const e = 1.70158;
                return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack(t) {
                let e = 1.70158;
                return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: t => 1 - ut.easeOutBounce(1 - t),
            easeOutBounce(t) {
                const e = 7.5625,
                    n = 2.75;
                return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
            },
            easeInOutBounce: t => t < .5 ? .5 * ut.easeInBounce(2 * t) : .5 * ut.easeOutBounce(2 * t - 1) + .5
        },
        lt = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15
        },
        ft = "0123456789ABCDEF",
        ht = t => ft[15 & t],
        dt = t => ft[(240 & t) >> 4] + ft[15 & t],
        pt = t => (240 & t) >> 4 == (15 & t);

    function gt(t) {
        var e = function(t) {
            return pt(t.r) && pt(t.g) && pt(t.b) && pt(t.a)
        }(t) ? ht : dt;
        return t ? "#" + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : "") : t
    }

    function bt(t) {
        return t + .5 | 0
    }
    const vt = (t, e, n) => Math.max(Math.min(t, n), e);

    function mt(t) {
        return vt(bt(2.55 * t), 0, 255)
    }

    function yt(t) {
        return vt(bt(255 * t), 0, 255)
    }

    function xt(t) {
        return vt(bt(t / 2.55) / 100, 0, 1)
    }

    function _t(t) {
        return vt(bt(100 * t), 0, 100)
    }
    const wt = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
    const Ot = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

    function jt(t, e, n) {
        const r = e * Math.min(n, 1 - n),
            i = (e, i = (e + t / 30) % 12) => n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1);
        return [i(0), i(8), i(4)]
    }

    function St(t, e, n) {
        const r = (r, i = (r + t / 60) % 6) => n - n * e * Math.max(Math.min(i, 4 - i, 1), 0);
        return [r(5), r(3), r(1)]
    }

    function Mt(t, e, n) {
        const r = jt(t, 1, .5);
        let i;
        for (e + n > 1 && (i = 1 / (e + n), e *= i, n *= i), i = 0; i < 3; i++) r[i] *= 1 - e - n, r[i] += e;
        return r
    }

    function kt(t) {
        const e = t.r / 255,
            n = t.g / 255,
            r = t.b / 255,
            i = Math.max(e, n, r),
            o = Math.min(e, n, r),
            a = (i + o) / 2;
        let s, c, u;
        return i !== o && (u = i - o, c = a > .5 ? u / (2 - i - o) : u / (i + o), s = i === e ? (n - r) / u + (n < r ? 6 : 0) : i === n ? (r - e) / u + 2 : (e - n) / u + 4, s = 60 * s + .5), [0 | s, c || 0, a]
    }

    function Et(t, e, n, r) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, r)).map(yt)
    }

    function At(t, e, n) {
        return Et(jt, t, e, n)
    }

    function Pt(t) {
        return (t % 360 + 360) % 360
    }

    function Tt(t) {
        const e = Ot.exec(t);
        let n, r = 255;
        if (!e) return;
        e[5] !== n && (r = e[6] ? mt(+e[5]) : yt(+e[5]));
        const i = Pt(+e[2]),
            o = +e[3] / 100,
            a = +e[4] / 100;
        return n = "hwb" === e[1] ? function(t, e, n) {
            return Et(Mt, t, e, n)
        }(i, o, a) : "hsv" === e[1] ? function(t, e, n) {
            return Et(St, t, e, n)
        }(i, o, a) : At(i, o, a), {
            r: n[0],
            g: n[1],
            b: n[2],
            a: r
        }
    }
    const Dt = {
            x: "dark",
            Z: "light",
            Y: "re",
            X: "blu",
            W: "gr",
            V: "medium",
            U: "slate",
            A: "ee",
            T: "ol",
            S: "or",
            B: "ra",
            C: "lateg",
            D: "ights",
            R: "in",
            Q: "turquois",
            E: "hi",
            P: "ro",
            O: "al",
            N: "le",
            M: "de",
            L: "yello",
            F: "en",
            K: "ch",
            G: "arks",
            H: "ea",
            I: "ightg",
            J: "wh"
        },
        Ct = {
            OiceXe: "f0f8ff",
            antiquewEte: "faebd7",
            aqua: "ffff",
            aquamarRe: "7fffd4",
            azuY: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "0",
            blanKedOmond: "ffebcd",
            Xe: "ff",
            XeviTet: "8a2be2",
            bPwn: "a52a2a",
            burlywood: "deb887",
            caMtXe: "5f9ea0",
            KartYuse: "7fff00",
            KocTate: "d2691e",
            cSO: "ff7f50",
            cSnflowerXe: "6495ed",
            cSnsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "ffff",
            xXe: "8b",
            xcyan: "8b8b",
            xgTMnPd: "b8860b",
            xWay: "a9a9a9",
            xgYF: "6400",
            xgYy: "a9a9a9",
            xkhaki: "bdb76b",
            xmagFta: "8b008b",
            xTivegYF: "556b2f",
            xSange: "ff8c00",
            xScEd: "9932cc",
            xYd: "8b0000",
            xsOmon: "e9967a",
            xsHgYF: "8fbc8f",
            xUXe: "483d8b",
            xUWay: "2f4f4f",
            xUgYy: "2f4f4f",
            xQe: "ced1",
            xviTet: "9400d3",
            dAppRk: "ff1493",
            dApskyXe: "bfff",
            dimWay: "696969",
            dimgYy: "696969",
            dodgerXe: "1e90ff",
            fiYbrick: "b22222",
            flSOwEte: "fffaf0",
            foYstWAn: "228b22",
            fuKsia: "ff00ff",
            gaRsbSo: "dcdcdc",
            ghostwEte: "f8f8ff",
            gTd: "ffd700",
            gTMnPd: "daa520",
            Way: "808080",
            gYF: "8000",
            gYFLw: "adff2f",
            gYy: "808080",
            honeyMw: "f0fff0",
            hotpRk: "ff69b4",
            RdianYd: "cd5c5c",
            Rdigo: "4b0082",
            ivSy: "fffff0",
            khaki: "f0e68c",
            lavFMr: "e6e6fa",
            lavFMrXsh: "fff0f5",
            lawngYF: "7cfc00",
            NmoncEffon: "fffacd",
            ZXe: "add8e6",
            ZcSO: "f08080",
            Zcyan: "e0ffff",
            ZgTMnPdLw: "fafad2",
            ZWay: "d3d3d3",
            ZgYF: "90ee90",
            ZgYy: "d3d3d3",
            ZpRk: "ffb6c1",
            ZsOmon: "ffa07a",
            ZsHgYF: "20b2aa",
            ZskyXe: "87cefa",
            ZUWay: "778899",
            ZUgYy: "778899",
            ZstAlXe: "b0c4de",
            ZLw: "ffffe0",
            lime: "ff00",
            limegYF: "32cd32",
            lRF: "faf0e6",
            magFta: "ff00ff",
            maPon: "800000",
            VaquamarRe: "66cdaa",
            VXe: "cd",
            VScEd: "ba55d3",
            VpurpN: "9370db",
            VsHgYF: "3cb371",
            VUXe: "7b68ee",
            VsprRggYF: "fa9a",
            VQe: "48d1cc",
            VviTetYd: "c71585",
            midnightXe: "191970",
            mRtcYam: "f5fffa",
            mistyPse: "ffe4e1",
            moccasR: "ffe4b5",
            navajowEte: "ffdead",
            navy: "80",
            Tdlace: "fdf5e6",
            Tive: "808000",
            TivedBb: "6b8e23",
            Sange: "ffa500",
            SangeYd: "ff4500",
            ScEd: "da70d6",
            pOegTMnPd: "eee8aa",
            pOegYF: "98fb98",
            pOeQe: "afeeee",
            pOeviTetYd: "db7093",
            papayawEp: "ffefd5",
            pHKpuff: "ffdab9",
            peru: "cd853f",
            pRk: "ffc0cb",
            plum: "dda0dd",
            powMrXe: "b0e0e6",
            purpN: "800080",
            YbeccapurpN: "663399",
            Yd: "ff0000",
            Psybrown: "bc8f8f",
            PyOXe: "4169e1",
            saddNbPwn: "8b4513",
            sOmon: "fa8072",
            sandybPwn: "f4a460",
            sHgYF: "2e8b57",
            sHshell: "fff5ee",
            siFna: "a0522d",
            silver: "c0c0c0",
            skyXe: "87ceeb",
            UXe: "6a5acd",
            UWay: "708090",
            UgYy: "708090",
            snow: "fffafa",
            sprRggYF: "ff7f",
            stAlXe: "4682b4",
            tan: "d2b48c",
            teO: "8080",
            tEstN: "d8bfd8",
            tomato: "ff6347",
            Qe: "40e0d0",
            viTet: "ee82ee",
            JHt: "f5deb3",
            wEte: "ffffff",
            wEtesmoke: "f5f5f5",
            Lw: "ffff00",
            LwgYF: "9acd32"
        };
    let Lt;

    function It(t) {
        Lt || (Lt = function() {
            const t = {},
                e = Object.keys(Ct),
                n = Object.keys(Dt);
            let r, i, o, a, s;
            for (r = 0; r < e.length; r++) {
                for (a = s = e[r], i = 0; i < n.length; i++) o = n[i], s = s.replace(o, Dt[o]);
                o = parseInt(Ct[a], 16), t[s] = [o >> 16 & 255, o >> 8 & 255, 255 & o]
            }
            return t
        }(), Lt.transparent = [0, 0, 0, 0]);
        const e = Lt[t.toLowerCase()];
        return e && {
            r: e[0],
            g: e[1],
            b: e[2],
            a: 4 === e.length ? e[3] : 255
        }
    }

    function Rt(t, e, n) {
        if (t) {
            let r = kt(t);
            r[e] = Math.max(0, Math.min(r[e] + r[e] * n, 0 === e ? 360 : 1)), r = At(r), t.r = r[0], t.g = r[1], t.b = r[2]
        }
    }

    function Ft(t, e) {
        return t ? Object.assign(e || {}, t) : t
    }

    function zt(t) {
        var e = {
            r: 0,
            g: 0,
            b: 0,
            a: 255
        };
        return Array.isArray(t) ? t.length >= 3 && (e = {
            r: t[0],
            g: t[1],
            b: t[2],
            a: 255
        }, t.length > 3 && (e.a = yt(t[3]))) : (e = Ft(t, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        })).a = yt(e.a), e
    }

    function Nt(t) {
        return "r" === t.charAt(0) ? function(t) {
            const e = wt.exec(t);
            let n, r, i, o = 255;
            if (e) {
                if (e[7] !== n) {
                    const t = +e[7];
                    o = 255 & (e[8] ? mt(t) : 255 * t)
                }
                return n = +e[1], r = +e[3], i = +e[5], n = 255 & (e[2] ? mt(n) : n), r = 255 & (e[4] ? mt(r) : r), i = 255 & (e[6] ? mt(i) : i), {
                    r: n,
                    g: r,
                    b: i,
                    a: o
                }
            }
        }(t) : Tt(t)
    }
    class Bt {
        constructor(t) {
            if (t instanceof Bt) return t;
            const e = typeof t;
            let n;
            var r, i, o;
            "object" === e ? n = zt(t) : "string" === e && (o = (r = t).length, "#" === r[0] && (4 === o || 5 === o ? i = {
                r: 255 & 17 * lt[r[1]],
                g: 255 & 17 * lt[r[2]],
                b: 255 & 17 * lt[r[3]],
                a: 5 === o ? 17 * lt[r[4]] : 255
            } : 7 !== o && 9 !== o || (i = {
                r: lt[r[1]] << 4 | lt[r[2]],
                g: lt[r[3]] << 4 | lt[r[4]],
                b: lt[r[5]] << 4 | lt[r[6]],
                a: 9 === o ? lt[r[7]] << 4 | lt[r[8]] : 255
            })), n = i || It(t) || Nt(t)), this._rgb = n, this._valid = !!n
        }
        get valid() {
            return this._valid
        }
        get rgb() {
            var t = Ft(this._rgb);
            return t && (t.a = xt(t.a)), t
        }
        set rgb(t) {
            this._rgb = zt(t)
        }
        rgbString() {
            return this._valid ? (t = this._rgb) && (t.a < 255 ? `rgba(${t.r}, ${t.g}, ${t.b}, ${xt(t.a)})` : `rgb(${t.r}, ${t.g}, ${t.b})`) : this._rgb;
            var t
        }
        hexString() {
            return this._valid ? gt(this._rgb) : this._rgb
        }
        hslString() {
            return this._valid ? function(t) {
                if (!t) return;
                const e = kt(t),
                    n = e[0],
                    r = _t(e[1]),
                    i = _t(e[2]);
                return t.a < 255 ? `hsla(${n}, ${r}%, ${i}%, ${xt(t.a)})` : `hsl(${n}, ${r}%, ${i}%)`
            }(this._rgb) : this._rgb
        }
        mix(t, e) {
            const n = this;
            if (t) {
                const r = n.rgb,
                    i = t.rgb;
                let o;
                const a = e === o ? .5 : e,
                    s = 2 * a - 1,
                    c = r.a - i.a,
                    u = ((s * c == -1 ? s : (s + c) / (1 + s * c)) + 1) / 2;
                o = 1 - u, r.r = 255 & u * r.r + o * i.r + .5, r.g = 255 & u * r.g + o * i.g + .5, r.b = 255 & u * r.b + o * i.b + .5, r.a = a * r.a + (1 - a) * i.a, n.rgb = r
            }
            return n
        }
        clone() {
            return new Bt(this.rgb)
        }
        alpha(t) {
            return this._rgb.a = yt(t), this
        }
        clearer(t) {
            return this._rgb.a *= 1 - t, this
        }
        greyscale() {
            const t = this._rgb,
                e = bt(.3 * t.r + .59 * t.g + .11 * t.b);
            return t.r = t.g = t.b = e, this
        }
        opaquer(t) {
            return this._rgb.a *= 1 + t, this
        }
        negate() {
            const t = this._rgb;
            return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
        }
        lighten(t) {
            return Rt(this._rgb, 2, t), this
        }
        darken(t) {
            return Rt(this._rgb, 2, -t), this
        }
        saturate(t) {
            return Rt(this._rgb, 1, t), this
        }
        desaturate(t) {
            return Rt(this._rgb, 1, -t), this
        }
        rotate(t) {
            return function(t, e) {
                var n = kt(t);
                n[0] = Pt(n[0] + e), n = At(n), t.r = n[0], t.g = n[1], t.b = n[2]
            }(this._rgb, t), this
        }
    }

    function Wt(t) {
        return new Bt(t)
    }
    const Vt = t => t instanceof CanvasGradient || t instanceof CanvasPattern;

    function Ht(t) {
        return Vt(t) ? t : Wt(t)
    }

    function Ut(t) {
        return Vt(t) ? t : Wt(t).saturate(.5).darken(.1).hexString()
    }
    const $t = Object.create(null),
        Yt = Object.create(null);

    function qt(t, e) {
        if (!e) return t;
        const n = e.split(".");
        for (let e = 0, r = n.length; e < r; ++e) {
            const r = n[e];
            t = t[r] || (t[r] = Object.create(null))
        }
        return t
    }

    function Gt(t, e, n) {
        return "string" == typeof e ? S(qt(t, e), n) : S(qt(t, ""), e)
    }
    var Xt = new class {
        constructor(t) {
            this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = t => t.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null
            }, this.hover = {}, this.hoverBackgroundColor = (t, e) => Ut(e.backgroundColor), this.hoverBorderColor = (t, e) => Ut(e.borderColor), this.hoverColor = (t, e) => Ut(e.color), this.indexAxis = "x", this.interaction = {
                mode: "nearest",
                intersect: !0
            }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.describe(t)
        }
        set(t, e) {
            return Gt(this, t, e)
        }
        get(t) {
            return qt(this, t)
        }
        describe(t, e) {
            return Gt(Yt, t, e)
        }
        override(t, e) {
            return Gt($t, t, e)
        }
        route(t, e, n, r) {
            const i = qt(this, t),
                o = qt(this, n),
                a = "_" + e;
            Object.defineProperties(i, {
                [a]: {
                    value: i[e],
                    writable: !0
                },
                [e]: {
                    enumerable: !0,
                    get() {
                        const t = this[a],
                            e = o[r];
                        return d(t) ? Object.assign({}, e, t) : b(t, e)
                    },
                    set(t) {
                        this[a] = t
                    }
                }
            })
        }
    }({
        _scriptable: t => !t.startsWith("on"),
        _indexable: t => "events" !== t,
        hover: {
            _fallback: "interaction"
        },
        interaction: {
            _scriptable: !1,
            _indexable: !1
        }
    });

    function Kt(t, e, n, r, i) {
        let o = e[i];
        return o || (o = e[i] = t.measureText(i).width, n.push(i)), o > r && (r = o), r
    }

    function Jt(t, e, n, r) {
        let i = (r = r || {}).data = r.data || {},
            o = r.garbageCollect = r.garbageCollect || [];
        r.font !== e && (i = r.data = {}, o = r.garbageCollect = [], r.font = e), t.save(), t.font = e;
        let a = 0;
        const s = n.length;
        let c, u, l, f, d;
        for (c = 0; c < s; c++)
            if (f = n[c], null != f && !0 !== h(f)) a = Kt(t, i, o, a, f);
            else if (h(f))
            for (u = 0, l = f.length; u < l; u++) d = f[u], null == d || h(d) || (a = Kt(t, i, o, a, d));
        t.restore();
        const p = o.length / 2;
        if (p > n.length) {
            for (c = 0; c < p; c++) delete i[o[c]];
            o.splice(0, p)
        }
        return a
    }

    function Zt(t, e, n) {
        const r = t.currentDevicePixelRatio,
            i = 0 !== n ? Math.max(n / 2, .5) : 0;
        return Math.round((e - i) * r) / r + i
    }

    function Qt(t, e) {
        (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()
    }

    function te(t, e, n, r) {
        let i, o, a, s, c;
        const u = e.pointStyle,
            l = e.rotation,
            f = e.radius;
        let h = (l || 0) * z;
        if (u && "object" == typeof u && (i = u.toString(), "[object HTMLImageElement]" === i || "[object HTMLCanvasElement]" === i)) return t.save(), t.translate(n, r), t.rotate(h), t.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height), void t.restore();
        if (!(isNaN(f) || f <= 0)) {
            switch (t.beginPath(), u) {
                default: t.arc(n, r, f, 0, I),
                t.closePath();
                break;
                case "triangle":
                        t.moveTo(n + Math.sin(h) * f, r - Math.cos(h) * f),
                    h += W,
                    t.lineTo(n + Math.sin(h) * f, r - Math.cos(h) * f),
                    h += W,
                    t.lineTo(n + Math.sin(h) * f, r - Math.cos(h) * f),
                    t.closePath();
                    break;
                case "rectRounded":
                        c = .516 * f,
                    s = f - c,
                    o = Math.cos(h + B) * s,
                    a = Math.sin(h + B) * s,
                    t.arc(n - o, r - a, c, h - L, h - N),
                    t.arc(n + a, r - o, c, h - N, h),
                    t.arc(n + o, r + a, c, h, h + N),
                    t.arc(n - a, r + o, c, h + N, h + L),
                    t.closePath();
                    break;
                case "rect":
                        if (!l) {
                        s = Math.SQRT1_2 * f, t.rect(n - s, r - s, 2 * s, 2 * s);
                        break
                    }h += B;
                case "rectRot":
                        o = Math.cos(h) * f,
                    a = Math.sin(h) * f,
                    t.moveTo(n - o, r - a),
                    t.lineTo(n + a, r - o),
                    t.lineTo(n + o, r + a),
                    t.lineTo(n - a, r + o),
                    t.closePath();
                    break;
                case "crossRot":
                        h += B;
                case "cross":
                        o = Math.cos(h) * f,
                    a = Math.sin(h) * f,
                    t.moveTo(n - o, r - a),
                    t.lineTo(n + o, r + a),
                    t.moveTo(n + a, r - o),
                    t.lineTo(n - a, r + o);
                    break;
                case "star":
                        o = Math.cos(h) * f,
                    a = Math.sin(h) * f,
                    t.moveTo(n - o, r - a),
                    t.lineTo(n + o, r + a),
                    t.moveTo(n + a, r - o),
                    t.lineTo(n - a, r + o),
                    h += B,
                    o = Math.cos(h) * f,
                    a = Math.sin(h) * f,
                    t.moveTo(n - o, r - a),
                    t.lineTo(n + o, r + a),
                    t.moveTo(n + a, r - o),
                    t.lineTo(n - a, r + o);
                    break;
                case "line":
                        o = Math.cos(h) * f,
                    a = Math.sin(h) * f,
                    t.moveTo(n - o, r - a),
                    t.lineTo(n + o, r + a);
                    break;
                case "dash":
                        t.moveTo(n, r),
                    t.lineTo(n + Math.cos(h) * f, r + Math.sin(h) * f)
            }
            t.fill(), e.borderWidth > 0 && t.stroke()
        }
    }

    function ee(t, e, n) {
        return n = n || .5, t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n
    }

    function ne(t, e) {
        t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
    }

    function re(t) {
        t.restore()
    }

    function ie(t, e, n, r, i) {
        if (!e) return t.lineTo(n.x, n.y);
        if ("middle" === i) {
            const r = (e.x + n.x) / 2;
            t.lineTo(r, e.y), t.lineTo(r, n.y)
        } else "after" === i != !!r ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
        t.lineTo(n.x, n.y)
    }

    function oe(t, e, n, r) {
        if (!e) return t.lineTo(n.x, n.y);
        t.bezierCurveTo(r ? e.cp1x : e.cp2x, r ? e.cp1y : e.cp2y, r ? n.cp2x : n.cp1x, r ? n.cp2y : n.cp1y, n.x, n.y)
    }

    function ae(t, e, n, r, i, o = {}) {
        const a = h(e) ? e : [e],
            s = o.strokeWidth > 0 && "" !== o.strokeColor;
        let c, u;
        for (t.save(), o.translation && t.translate(o.translation[0], o.translation[1]), f(o.rotation) || t.rotate(o.rotation), t.font = i.string, o.color && (t.fillStyle = o.color), o.textAlign && (t.textAlign = o.textAlign), o.textBaseline && (t.textBaseline = o.textBaseline), c = 0; c < a.length; ++c) {
            if (u = a[c], s && (o.strokeColor && (t.strokeStyle = o.strokeColor), f(o.strokeWidth) || (t.lineWidth = o.strokeWidth), t.strokeText(u, n, r, o.maxWidth)), t.fillText(u, n, r, o.maxWidth), o.strikethrough || o.underline) {
                const e = t.measureText(u),
                    i = n - e.actualBoundingBoxLeft,
                    a = n + e.actualBoundingBoxRight,
                    s = r - e.actualBoundingBoxAscent,
                    c = r + e.actualBoundingBoxDescent,
                    l = o.strikethrough ? (s + c) / 2 : c;
                t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = o.decorationWidth || 2, t.moveTo(i, l), t.lineTo(a, l), t.stroke()
            }
            r += i.lineHeight
        }
        t.restore()
    }

    function se(t, e) {
        const {
            x: n,
            y: r,
            w: i,
            h: o,
            radius: a
        } = e;
        t.arc(n + a.topLeft, r + a.topLeft, a.topLeft, -N, L, !0), t.lineTo(n, r + o - a.bottomLeft), t.arc(n + a.bottomLeft, r + o - a.bottomLeft, a.bottomLeft, L, N, !0), t.lineTo(n + i - a.bottomRight, r + o), t.arc(n + i - a.bottomRight, r + o - a.bottomRight, a.bottomRight, N, 0, !0), t.lineTo(n + i, r + a.topRight), t.arc(n + i - a.topRight, r + a.topRight, a.topRight, 0, -N, !0), t.lineTo(n + a.topLeft, r)
    }
    const ce = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
        ue = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

    function le(t, e) {
        const n = ("" + t).match(ce);
        if (!n || "normal" === n[1]) return 1.2 * e;
        switch (t = +n[2], n[3]) {
            case "px":
                return t;
            case "%":
                t /= 100
        }
        return e * t
    }

    function fe(t, e) {
        const n = {},
            r = d(e),
            i = r ? Object.keys(e) : e,
            o = d(t) ? r ? n => b(t[n], t[e[n]]) : e => t[e] : () => t;
        for (const t of i) n[t] = +o(t) || 0;
        return n
    }

    function he(t) {
        return fe(t, {
            top: "y",
            right: "x",
            bottom: "y",
            left: "x"
        })
    }

    function de(t) {
        return fe(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
    }

    function pe(t) {
        const e = he(t);
        return e.width = e.left + e.right, e.height = e.top + e.bottom, e
    }

    function ge(t, e) {
        t = t || {}, e = e || Xt.font;
        let n = b(t.size, e.size);
        "string" == typeof n && (n = parseInt(n, 10));
        let r = b(t.style, e.style);
        r && !("" + r).match(ue) && (console.warn('Invalid font style specified: "' + r + '"'), r = "");
        const i = {
            family: b(t.family, e.family),
            lineHeight: le(b(t.lineHeight, e.lineHeight), n),
            size: n,
            style: r,
            weight: b(t.weight, e.weight),
            string: ""
        };
        return i.string = function(t) {
            return !t || f(t.size) || f(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
        }(i), i
    }

    function be(t, e, n, r) {
        let i, o, a, s = !0;
        for (i = 0, o = t.length; i < o; ++i)
            if (a = t[i], void 0 !== a && (void 0 !== e && "function" == typeof a && (a = a(e), s = !1), void 0 !== n && h(a) && (a = a[n % a.length], s = !1), void 0 !== a)) return r && !s && (r.cacheable = !1), a
    }

    function ve(t, e) {
        const {
            min: n,
            max: r
        } = t;
        return {
            min: n - Math.abs(m(e, n)),
            max: r + m(e, r)
        }
    }

    function me(t, e, n) {
        n = n || (n => t[n] < e);
        let r, i = t.length - 1,
            o = 0;
        for (; i - o > 1;) r = o + i >> 1, n(r) ? o = r : i = r;
        return {
            lo: o,
            hi: i
        }
    }
    const ye = (t, e, n) => me(t, n, r => t[r][e] < n),
        xe = (t, e, n) => me(t, n, r => t[r][e] >= n);

    function _e(t, e, n) {
        let r = 0,
            i = t.length;
        for (; r < i && t[r] < e;) r++;
        for (; i > r && t[i - 1] > n;) i--;
        return r > 0 || i < t.length ? t.slice(r, i) : t
    }
    const we = ["push", "pop", "shift", "splice", "unshift"];

    function Oe(t, e) {
        t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
            configurable: !0,
            enumerable: !1,
            value: {
                listeners: [e]
            }
        }), we.forEach(e => {
            const n = "_onData" + P(e),
                r = t[e];
            Object.defineProperty(t, e, {
                configurable: !0,
                enumerable: !1,
                value(...e) {
                    const i = r.apply(this, e);
                    return t._chartjs.listeners.forEach(t => {
                        "function" == typeof t[n] && t[n](...e)
                    }), i
                }
            })
        }))
    }

    function je(t, e) {
        const n = t._chartjs;
        if (!n) return;
        const r = n.listeners,
            i = r.indexOf(e); - 1 !== i && r.splice(i, 1), r.length > 0 || (we.forEach(e => {
            delete t[e]
        }), delete t._chartjs)
    }

    function Se(t) {
        const e = new Set;
        let n, r;
        for (n = 0, r = t.length; n < r; ++n) e.add(t[n]);
        if (e.size === r) return t;
        const i = [];
        return e.forEach(t => {
            i.push(t)
        }), i
    }

    function Me(t, e = [""], n = t, r, i = (() => t[0])) {
        T(r) || (r = Fe("_fallback", t));
        const o = {
            [Symbol.toStringTag]: "Object",
            _cacheable: !0,
            _scopes: t,
            _rootScopes: n,
            _fallback: r,
            _getTarget: i,
            override: i => Me([i, ...t], e, n, r)
        };
        return new Proxy(o, {
            deleteProperty: (e, n) => (delete e[n], delete e._keys, delete t[0][n], !0),
            get: (n, r) => Te(n, r, () => function(t, e, n, r) {
                let i;
                for (const o of e)
                    if (i = Fe(Ae(o, t), n), T(i)) return Pe(t, i) ? Ie(n, r, t, i) : i
            }(r, e, t, n)),
            getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
            getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
            has: (t, e) => ze(t).includes(e),
            ownKeys: t => ze(t),
            set: (t, e, n) => ((t._storage || (t._storage = i()))[e] = n, delete t[e], delete t._keys, !0)
        })
    }

    function ke(t, e, n, r) {
        const i = {
            _cacheable: !1,
            _proxy: t,
            _context: e,
            _subProxy: n,
            _stack: new Set,
            _descriptors: Ee(t, r),
            setContext: e => ke(t, e, n, r),
            override: i => ke(t.override(i), e, n, r)
        };
        return new Proxy(i, {
            deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
            get: (t, e, n) => Te(t, e, () => function(t, e, n) {
                const {
                    _proxy: r,
                    _context: i,
                    _subProxy: o,
                    _descriptors: a
                } = t;
                let s = r[e];
                D(s) && a.isScriptable(e) && (s = function(t, e, n, r) {
                    const {
                        _proxy: i,
                        _context: o,
                        _subProxy: a,
                        _stack: s
                    } = n;
                    if (s.has(t)) throw new Error("Recursion detected: " + [...s].join("->") + "->" + t);
                    s.add(t), e = e(o, a || r), s.delete(t), d(e) && (e = Ie(i._scopes, i, t, e));
                    return e
                }(e, s, t, n));
                h(s) && s.length && (s = function(t, e, n, r) {
                    const {
                        _proxy: i,
                        _context: o,
                        _subProxy: a,
                        _descriptors: s
                    } = n;
                    if (T(o.index) && r(t)) e = e[o.index % e.length];
                    else if (d(e[0])) {
                        const n = e,
                            r = i._scopes.filter(t => t !== n);
                        e = [];
                        for (const c of n) {
                            const n = Ie(r, i, t, c);
                            e.push(ke(n, o, a && a[t], s))
                        }
                    }
                    return e
                }(e, s, t, a.isIndexable));
                Pe(e, s) && (s = ke(s, i, o && o[e], a));
                return s
            }(t, e, n)),
            getOwnPropertyDescriptor: (e, n) => e._descriptors.allKeys ? Reflect.has(t, n) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(t, n),
            getPrototypeOf: () => Reflect.getPrototypeOf(t),
            has: (e, n) => Reflect.has(t, n),
            ownKeys: () => Reflect.ownKeys(t),
            set: (e, n, r) => (t[n] = r, delete e[n], !0)
        })
    }

    function Ee(t, e = {
        scriptable: !0,
        indexable: !0
    }) {
        const {
            _scriptable: n = e.scriptable,
            _indexable: r = e.indexable,
            _allKeys: i = e.allKeys
        } = t;
        return {
            allKeys: i,
            scriptable: n,
            indexable: r,
            isScriptable: D(n) ? n : () => n,
            isIndexable: D(r) ? r : () => r
        }
    }
    const Ae = (t, e) => t ? t + P(e) : e,
        Pe = (t, e) => d(e) && "adapters" !== t;

    function Te(t, e, n) {
        let r = t[e];
        return T(r) || (r = n(), T(r) && (t[e] = r)), r
    }

    function De(t, e, n) {
        return D(t) ? t(e, n) : t
    }
    const Ce = (t, e) => !0 === t ? e : "string" == typeof t ? A(e, t) : void 0;

    function Le(t, e, n, r) {
        for (const i of e) {
            const e = Ce(n, i);
            if (e) {
                t.add(e);
                const i = De(e._fallback, n, e);
                if (T(i) && i !== n && i !== r) return i
            } else if (!1 === e && T(r) && n !== r) return null
        }
        return !1
    }

    function Ie(t, e, n, r) {
        const i = e._rootScopes,
            o = De(e._fallback, n, r),
            a = [...t, ...i],
            s = new Set;
        s.add(r);
        let c = Re(s, a, n, o || n);
        return null !== c && ((!T(o) || o === n || (c = Re(s, a, o, c), null !== c)) && Me([...s], [""], i, o, () => {
            const t = e._getTarget();
            return n in t || (t[n] = {}), t[n]
        }))
    }

    function Re(t, e, n, r) {
        for (; n;) n = Le(t, e, n, r);
        return n
    }

    function Fe(t, e) {
        for (const n of e) {
            if (!n) continue;
            const e = n[t];
            if (T(e)) return e
        }
    }

    function ze(t) {
        let e = t._keys;
        return e || (e = t._keys = function(t) {
            const e = new Set;
            for (const n of t)
                for (const t of Object.keys(n).filter(t => !t.startsWith("_"))) e.add(t);
            return [...e]
        }(t._scopes)), e
    }
    const Ne = Number.EPSILON || 1e-14,
        Be = (t, e) => e < t.length && !t[e].skip && t[e];

    function We(t, e, n, r) {
        const i = t.skip ? e : t,
            o = e,
            a = n.skip ? e : n,
            s = tt(o, i),
            c = tt(a, o);
        let u = s / (s + c),
            l = c / (s + c);
        u = isNaN(u) ? 0 : u, l = isNaN(l) ? 0 : l;
        const f = r * u,
            h = r * l;
        return {
            previous: {
                x: o.x - f * (a.x - i.x),
                y: o.y - f * (a.y - i.y)
            },
            next: {
                x: o.x + h * (a.x - i.x),
                y: o.y + h * (a.y - i.y)
            }
        }
    }

    function Ve(t) {
        const e = t.length,
            n = Array(e).fill(0),
            r = Array(e);
        let i, o, a, s = Be(t, 0);
        for (i = 0; i < e; ++i)
            if (o = a, a = s, s = Be(t, i + 1), a) {
                if (s) {
                    const t = s.x - a.x;
                    n[i] = 0 !== t ? (s.y - a.y) / t : 0
                }
                r[i] = o ? s ? H(n[i - 1]) !== H(n[i]) ? 0 : (n[i - 1] + n[i]) / 2 : n[i - 1] : n[i]
            }! function(t, e, n) {
            const r = t.length;
            let i, o, a, s, c, u = Be(t, 0);
            for (let l = 0; l < r - 1; ++l) c = u, u = Be(t, l + 1), c && u && (q(e[l], 0, Ne) ? n[l] = n[l + 1] = 0 : (i = n[l] / e[l], o = n[l + 1] / e[l], s = Math.pow(i, 2) + Math.pow(o, 2), s <= 9 || (a = 3 / Math.sqrt(s), n[l] = i * a * e[l], n[l + 1] = o * a * e[l])))
        }(t, n, r),
        function(t, e) {
            const n = t.length;
            let r, i, o, a = Be(t, 0);
            for (let s = 0; s < n; ++s) {
                if (i = o, o = a, a = Be(t, s + 1), !o) continue;
                const {
                    x: n,
                    y: c
                } = o;
                i && (r = (n - i.x) / 3, o.cp1x = n - r, o.cp1y = c - r * e[s]), a && (r = (a.x - n) / 3, o.cp2x = n + r, o.cp2y = c + r * e[s])
            }
        }(t, r)
    }

    function He(t, e, n) {
        return Math.max(Math.min(t, n), e)
    }

    function Ue(t, e, n, r) {
        let i, o, a, s;
        if (e.spanGaps && (t = t.filter(t => !t.skip)), "monotone" === e.cubicInterpolationMode) Ve(t);
        else {
            let n = r ? t[t.length - 1] : t[0];
            for (i = 0, o = t.length; i < o; ++i) a = t[i], s = We(n, a, t[Math.min(i + 1, o - (r ? 0 : 1)) % o], e.tension), a.cp1x = s.previous.x, a.cp1y = s.previous.y, a.cp2x = s.next.x, a.cp2y = s.next.y, n = a
        }
        e.capBezierPoints && function(t, e) {
            let n, r, i, o, a, s = ee(t[0], e);
            for (n = 0, r = t.length; n < r; ++n) a = o, o = s, s = n < r - 1 && ee(t[n + 1], e), o && (i = t[n], a && (i.cp1x = He(i.cp1x, e.left, e.right), i.cp1y = He(i.cp1y, e.top, e.bottom)), s && (i.cp2x = He(i.cp2x, e.left, e.right), i.cp2y = He(i.cp2y, e.top, e.bottom)))
        }(t, n)
    }

    function $e(t) {
        let e = t.parentNode;
        return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
    }

    function Ye(t, e, n) {
        let r;
        return "string" == typeof t ? (r = parseInt(t, 10), -1 !== t.indexOf("%") && (r = r / 100 * e.parentNode[n])) : r = t, r
    }
    const qe = t => window.getComputedStyle(t, null);
    const Ge = ["top", "right", "bottom", "left"];

    function Xe(t, e, n) {
        const r = {};
        n = n ? "-" + n : "";
        for (let i = 0; i < 4; i++) {
            const o = Ge[i];
            r[o] = parseFloat(t[e + "-" + o + n]) || 0
        }
        return r.width = r.left + r.right, r.height = r.top + r.bottom, r
    }

    function Ke(t, e) {
        const {
            canvas: n,
            currentDevicePixelRatio: r
        } = e, i = qe(n), o = "border-box" === i.boxSizing, a = Xe(i, "padding"), s = Xe(i, "border", "width"), {
            x: c,
            y: u,
            box: l
        } = function(t, e) {
            const n = t.native || t,
                r = n.touches,
                i = r && r.length ? r[0] : n,
                {
                    offsetX: o,
                    offsetY: a
                } = i;
            let s, c, u = !1;
            if (((t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot))(o, a, n.target)) s = o, c = a;
            else {
                const t = e.getBoundingClientRect();
                s = i.clientX - t.left, c = i.clientY - t.top, u = !0
            }
            return {
                x: s,
                y: c,
                box: u
            }
        }(t, n), f = a.left + (l && s.left), h = a.top + (l && s.top);
        let {
            width: d,
            height: p
        } = e;
        return o && (d -= a.width + s.width, p -= a.height + s.height), {
            x: Math.round((c - f) / d * n.width / r),
            y: Math.round((u - h) / p * n.height / r)
        }
    }
    const Je = t => Math.round(10 * t) / 10;

    function Ze(t, e, n, r) {
        const i = qe(t),
            o = Xe(i, "margin"),
            a = Ye(i.maxWidth, t, "clientWidth") || F,
            s = Ye(i.maxHeight, t, "clientHeight") || F,
            c = function(t, e, n) {
                let r, i;
                if (void 0 === e || void 0 === n) {
                    const o = $e(t);
                    if (o) {
                        const t = o.getBoundingClientRect(),
                            a = qe(o),
                            s = Xe(a, "border", "width"),
                            c = Xe(a, "padding");
                        e = t.width - c.width - s.width, n = t.height - c.height - s.height, r = Ye(a.maxWidth, o, "clientWidth"), i = Ye(a.maxHeight, o, "clientHeight")
                    } else e = t.clientWidth, n = t.clientHeight
                }
                return {
                    width: e,
                    height: n,
                    maxWidth: r || F,
                    maxHeight: i || F
                }
            }(t, e, n);
        let {
            width: u,
            height: l
        } = c;
        if ("content-box" === i.boxSizing) {
            const t = Xe(i, "border", "width"),
                e = Xe(i, "padding");
            u -= e.width + t.width, l -= e.height + t.height
        }
        return u = Math.max(0, u - o.width), l = Math.max(0, r ? Math.floor(u / r) : l - o.height), u = Je(Math.min(u, a, c.maxWidth)), l = Je(Math.min(l, s, c.maxHeight)), u && !l && (l = Je(u / 2)), {
            width: u,
            height: l
        }
    }

    function Qe(t, e, n) {
        const r = t.currentDevicePixelRatio = e || 1,
            {
                canvas: i,
                width: o,
                height: a
            } = t;
        i.height = a * r, i.width = o * r, t.ctx.setTransform(r, 0, 0, r, 0, 0), i.style && (n || !i.style.height && !i.style.width) && (i.style.height = a + "px", i.style.width = o + "px")
    }
    const tn = function() {
        let t = !1;
        try {
            const e = {
                get passive() {
                    return t = !0, !1
                }
            };
            window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
        } catch (t) {}
        return t
    }();

    function en(t, e) {
        const n = function(t, e) {
                return qe(t).getPropertyValue(e)
            }(t, e),
            r = n && n.match(/^(\d+)(\.\d+)?px$/);
        return r ? +r[1] : void 0
    }

    function nn(t, e, n, r) {
        return {
            x: t.x + n * (e.x - t.x),
            y: t.y + n * (e.y - t.y)
        }
    }

    function rn(t, e, n, r) {
        return {
            x: t.x + n * (e.x - t.x),
            y: "middle" === r ? n < .5 ? t.y : e.y : "after" === r ? n < 1 ? t.y : e.y : n > 0 ? e.y : t.y
        }
    }

    function on(t, e, n, r) {
        const i = {
                x: t.cp2x,
                y: t.cp2y
            },
            o = {
                x: e.cp1x,
                y: e.cp1y
            },
            a = nn(t, i, n),
            s = nn(i, o, n),
            c = nn(o, e, n),
            u = nn(a, s, n),
            l = nn(s, c, n);
        return nn(u, l, n)
    }
    const an = new Map;

    function sn(t, e, n) {
        return function(t, e) {
            e = e || {};
            const n = t + JSON.stringify(e);
            let r = an.get(n);
            return r || (r = new Intl.NumberFormat(t, e), an.set(n, r)), r
        }(e, n).format(t)
    }

    function cn(t, e, n) {
        return t ? function(t, e) {
            return {
                x: n => t + t + e - n,
                setWidth(t) {
                    e = t
                },
                textAlign: t => "center" === t ? t : "right" === t ? "left" : "right",
                xPlus: (t, e) => t - e,
                leftForLtr: (t, e) => t - e
            }
        }(e, n) : {
            x: t => t,
            setWidth(t) {},
            textAlign: t => t,
            xPlus: (t, e) => t + e,
            leftForLtr: (t, e) => t
        }
    }

    function un(t, e) {
        let n, r;
        "ltr" !== e && "rtl" !== e || (n = t.canvas.style, r = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = r)
    }

    function ln(t, e) {
        void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
    }

    function fn(t) {
        return "angle" === t ? {
            between: rt,
            compare: et,
            normalize: nt
        } : {
            between: (t, e, n) => t >= Math.min(e, n) && t <= Math.max(n, e),
            compare: (t, e) => t - e,
            normalize: t => t
        }
    }

    function hn({
        start: t,
        end: e,
        count: n,
        loop: r,
        style: i
    }) {
        return {
            start: t % n,
            end: e % n,
            loop: r && (e - t + 1) % n == 0,
            style: i
        }
    }

    function dn(t, e, n) {
        if (!n) return [t];
        const {
            property: r,
            start: i,
            end: o
        } = n, a = e.length, {
            compare: s,
            between: c,
            normalize: u
        } = fn(r), {
            start: l,
            end: f,
            loop: h,
            style: d
        } = function(t, e, n) {
            const {
                property: r,
                start: i,
                end: o
            } = n, {
                between: a,
                normalize: s
            } = fn(r), c = e.length;
            let u, l, {
                start: f,
                end: h,
                loop: d
            } = t;
            if (d) {
                for (f += c, h += c, u = 0, l = c; u < l && a(s(e[f % c][r]), i, o); ++u) f--, h--;
                f %= c, h %= c
            }
            return h < f && (h += c), {
                start: f,
                end: h,
                loop: d,
                style: t.style
            }
        }(t, e, n), p = [];
        let g, b, v, m = !1,
            y = null;
        const x = () => m || c(i, v, g) && 0 !== s(i, v),
            _ = () => !m || 0 === s(o, g) || c(o, v, g);
        for (let t = l, n = l; t <= f; ++t) b = e[t % a], b.skip || (g = u(b[r]), m = c(g, i, o), null === y && x() && (y = 0 === s(g, i) ? t : n), null !== y && _() && (p.push(hn({
            start: y,
            end: t,
            loop: h,
            count: a,
            style: d
        })), y = null), n = t, v = g);
        return null !== y && p.push(hn({
            start: y,
            end: f,
            loop: h,
            count: a,
            style: d
        })), p
    }

    function pn(t, e) {
        const n = [],
            r = t.segments;
        for (let i = 0; i < r.length; i++) {
            const o = dn(r[i], t.points, e);
            o.length && n.push(...o)
        }
        return n
    }

    function gn(t, e) {
        const n = t.points,
            r = t.options.spanGaps,
            i = n.length;
        if (!i) return [];
        const o = !!t._loop,
            {
                start: a,
                end: s
            } = function(t, e, n, r) {
                let i = 0,
                    o = e - 1;
                if (n && !r)
                    for (; i < e && !t[i].skip;) i++;
                for (; i < e && t[i].skip;) i++;
                for (i %= e, n && (o += i); o > i && t[o % e].skip;) o--;
                return o %= e, {
                    start: i,
                    end: o
                }
            }(n, i, o, r);
        if (!0 === r) return bn([{
            start: a,
            end: s,
            loop: o
        }], n, e);
        return bn(function(t, e, n, r) {
            const i = t.length,
                o = [];
            let a, s = e,
                c = t[e];
            for (a = e + 1; a <= n; ++a) {
                const n = t[a % i];
                n.skip || n.stop ? c.skip || (r = !1, o.push({
                    start: e % i,
                    end: (a - 1) % i,
                    loop: r
                }), e = s = n.stop ? a : null) : (s = a, c.skip && (e = a)), c = n
            }
            return null !== s && o.push({
                start: e % i,
                end: s % i,
                loop: r
            }), o
        }(n, a, s < a ? s + i : s, !!t._fullLoop && 0 === a && s === i - 1), n, e)
    }

    function bn(t, e, n) {
        return n && n.setContext && e ? function(t, e, n) {
            const r = e.length,
                i = [];
            let o = t[0].start,
                a = o;
            for (const c of t) {
                let t, u, l = e[o % r];
                for (a = o + 1; a <= c.end; a++) {
                    const f = e[a % r];
                    s = n.setContext({
                        type: "segment",
                        p0: l,
                        p1: f
                    }), u = {
                        backgroundColor: s.backgroundColor,
                        borderCapStyle: s.borderCapStyle,
                        borderDash: s.borderDash,
                        borderDashOffset: s.borderDashOffset,
                        borderJoinStyle: s.borderJoinStyle,
                        borderWidth: s.borderWidth,
                        borderColor: s.borderColor
                    }, vn(u, t) && (i.push({
                        start: o,
                        end: a - 1,
                        loop: c.loop,
                        style: t
                    }), t = u, o = a - 1), l = f, t = u
                }
                o < a - 1 && (i.push({
                    start: o,
                    end: a - 1,
                    loop: c.loop,
                    style: u
                }), o = a - 1)
            }
            var s;
            return i
        }(t, e, n) : t
    }

    function vn(t, e) {
        return e && JSON.stringify(t) !== JSON.stringify(e)
    }
}, function(t, e, n) {
    var r = n(2),
        i = n(10),
        o = n(15),
        a = n(12),
        s = n(23),
        c = function(t, e, n) {
            var u, l, f, h, d = t & c.F,
                p = t & c.G,
                g = t & c.S,
                b = t & c.P,
                v = t & c.B,
                m = p ? r : g ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                y = p ? i : i[e] || (i[e] = {}),
                x = y.prototype || (y.prototype = {});
            for (u in p && (n = e), n) f = ((l = !d && m && void 0 !== m[u]) ? m : n)[u], h = v && l ? s(f, r) : b && "function" == typeof f ? s(Function.call, f) : f, m && a(m, u, f, t & c.U), y[u] != f && o(y, u, h), b && x[u] != f && (x[u] = f)
        };
    r.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
}, function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e, n) {
    var r = n(5);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    var r = n(51)("wks"),
        i = n(32),
        o = n(2).Symbol,
        a = "function" == typeof o;
    (t.exports = function(t) {
        return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
    }).store = r
}, function(t, e, n) {
    var r = n(18),
        i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    t.exports = !n(3)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    var r = n(4),
        i = n(96),
        o = n(28),
        a = Object.defineProperty;
    e.f = n(8) ? Object.defineProperty : function(t, e, n) {
        if (r(t), e = o(e, !0), r(n), i) try {
            return a(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e) {
    var n = t.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    var r = n(26);
    t.exports = function(t) {
        return Object(r(t))
    }
}, function(t, e, n) {
    var r = n(2),
        i = n(15),
        o = n(14),
        a = n(32)("src"),
        s = n(134),
        c = ("" + s).split("toString");
    n(10).inspectSource = function(t) {
        return s.call(t)
    }, (t.exports = function(t, e, n, s) {
        var u = "function" == typeof n;
        u && (o(n, "name") || i(n, "name", e)), t[e] !== n && (u && (o(n, a) || i(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === r ? t[e] = n : s ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)))
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && this[a] || s.call(this)
    }))
}, function(t, e, n) {
    var r = n(1),
        i = n(3),
        o = n(26),
        a = /"/g,
        s = function(t, e, n, r) {
            var i = String(o(t)),
                s = "<" + e;
            return "" !== n && (s += " " + n + '="' + String(r).replace(a, "&quot;") + '"'), s + ">" + i + "</" + e + ">"
        };
    t.exports = function(t, e) {
        var n = {};
        n[t] = e(s), r(r.P + r.F * i((function() {
            var e = "" [t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        })), "String", n)
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    var r = n(9),
        i = n(31);
    t.exports = n(8) ? function(t, e, n) {
        return r.f(t, e, i(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var r = n(47),
        i = n(26);
    t.exports = function(t) {
        return r(i(t))
    }
}, function(t, e, n) {
    "use strict";
    var r = n(3);
    t.exports = function(t, e) {
        return !!t && r((function() {
            e ? t.call(null, (function() {}), 1) : t.call(null)
        }))
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function(t, e, n) {
    var r = n(48),
        i = n(31),
        o = n(16),
        a = n(28),
        s = n(14),
        c = n(96),
        u = Object.getOwnPropertyDescriptor;
    e.f = n(8) ? u : function(t, e) {
        if (t = o(t), e = a(e, !0), c) try {
            return u(t, e)
        } catch (t) {}
        if (s(t, e)) return i(!r.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var r = n(1),
        i = n(10),
        o = n(3);
    t.exports = function(t, e) {
        var n = (i.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(n), r(r.S + r.F * o((function() {
            n(1)
        })), "Object", a)
    }
}, function(t, e, n) {
    var r = n(23),
        i = n(47),
        o = n(11),
        a = n(7),
        s = n(224);
    t.exports = function(t, e) {
        var n = 1 == t,
            c = 2 == t,
            u = 3 == t,
            l = 4 == t,
            f = 6 == t,
            h = 5 == t || f,
            d = e || s;
        return function(e, s, p) {
            for (var g, b, v = o(e), m = i(v), y = r(s, p, 3), x = a(m.length), _ = 0, w = n ? d(e, x) : c ? d(e, 0) : void 0; x > _; _++)
                if ((h || _ in m) && (b = y(g = m[_], _, v), t))
                    if (n) w[_] = b;
                    else if (b) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return g;
                case 6:
                    return _;
                case 2:
                    w.push(g)
            } else if (l) return !1;
            return f ? -1 : u || l ? l : w
        }
    }
}, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return Zt
    })), n.d(e, "b", (function() {
        return Xe
    })), n.d(e, "c", (function() {
        return fn
    })), n.d(e, "d", (function() {
        return Rn
    }));
    var r = n(0);
    /*!
     * Chart.js v3.2.1
     * https://www.chartjs.org
     * (c) 2021 Chart.js Contributors
     * Released under the MIT License
     */
    var i = new class {
        constructor() {
            this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0
        }
        _notify(t, e, n, r) {
            const i = e.listeners[r],
                o = e.duration;
            i.forEach(r => r({
                chart: t,
                initial: e.initial,
                numSteps: o,
                currentStep: Math.min(n - e.start, o)
            }))
        }
        _refresh() {
            const t = this;
            t._request || (t._running = !0, t._request = r.Kb.call(window, () => {
                t._update(), t._request = null, t._running && t._refresh()
            }))
        }
        _update(t = Date.now()) {
            const e = this;
            let n = 0;
            e._charts.forEach((r, i) => {
                if (!r.running || !r.items.length) return;
                const o = r.items;
                let a, s = o.length - 1,
                    c = !1;
                for (; s >= 0; --s) a = o[s], a._active ? (a._total > r.duration && (r.duration = a._total), a.tick(t), c = !0) : (o[s] = o[o.length - 1], o.pop());
                c && (i.draw(), e._notify(i, r, t, "progress")), o.length || (r.running = !1, e._notify(i, r, t, "complete"), r.initial = !1), n += o.length
            }), e._lastDate = t, 0 === n && (e._running = !1)
        }
        _getAnims(t) {
            const e = this._charts;
            let n = e.get(t);
            return n || (n = {
                running: !1,
                initial: !0,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            }, e.set(t, n)), n
        }
        listen(t, e, n) {
            this._getAnims(t).listeners[e].push(n)
        }
        add(t, e) {
            e && e.length && this._getAnims(t).items.push(...e)
        }
        has(t) {
            return this._getAnims(t).items.length > 0
        }
        start(t) {
            const e = this._charts.get(t);
            e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0), this._refresh())
        }
        running(t) {
            if (!this._running) return !1;
            const e = this._charts.get(t);
            return !!(e && e.running && e.items.length)
        }
        stop(t) {
            const e = this._charts.get(t);
            if (!e || !e.items.length) return;
            const n = e.items;
            let r = n.length - 1;
            for (; r >= 0; --r) n[r].cancel();
            e.items = [], this._notify(t, e, Date.now(), "complete")
        }
        remove(t) {
            return this._charts.delete(t)
        }
    };
    const o = {
        boolean: (t, e, n) => n > .5 ? e : t,
        color(t, e, n) {
            const i = Object(r.vb)(t || "transparent"),
                o = i.valid && Object(r.vb)(e || "transparent");
            return o && o.valid ? o.mix(i, n).hexString() : e
        },
        number: (t, e, n) => t + (e - t) * n
    };
    class a {
        constructor(t, e, n, i) {
            const a = e[n];
            i = Object(r.C)([t.to, i, a, t.from]);
            const s = Object(r.C)([t.from, a, i]);
            this._active = !0, this._fn = t.fn || o[t.type || typeof s], this._easing = r.xb[t.easing] || r.xb.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = n, this._from = s, this._to = i, this._promises = void 0
        }
        active() {
            return this._active
        }
        update(t, e, n) {
            const i = this;
            if (i._active) {
                i._notify(!1);
                const o = i._target[i._prop],
                    a = n - i._start,
                    s = i._duration - a;
                i._start = n, i._duration = Math.floor(Math.max(s, t.duration)), i._total += a, i._loop = !!t.loop, i._to = Object(r.C)([t.to, e, o, t.from]), i._from = Object(r.C)([t.from, o, e])
            }
        }
        cancel() {
            const t = this;
            t._active && (t.tick(Date.now()), t._active = !1, t._notify(!1))
        }
        tick(t) {
            const e = this,
                n = t - e._start,
                r = e._duration,
                i = e._prop,
                o = e._from,
                a = e._loop,
                s = e._to;
            let c;
            if (e._active = o !== s && (a || n < r), !e._active) return e._target[i] = s, void e._notify(!0);
            n < 0 ? e._target[i] = o : (c = n / r % 2, c = a && c > 1 ? 2 - c : c, c = e._easing(Math.min(1, Math.max(0, c))), e._target[i] = e._fn(o, s, c))
        }
        wait() {
            const t = this._promises || (this._promises = []);
            return new Promise((e, n) => {
                t.push({
                    res: e,
                    rej: n
                })
            })
        }
        _notify(t) {
            const e = t ? "res" : "rej",
                n = this._promises || [];
            for (let t = 0; t < n.length; t++) n[t][e]()
        }
    }
    r.wb.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0
    });
    const s = Object.keys(r.wb.animation);
    r.wb.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: t => "onProgress" !== t && "onComplete" !== t && "fn" !== t
    }), r.wb.set("animations", {
        colors: {
            type: "color",
            properties: ["color", "borderColor", "backgroundColor"]
        },
        numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius", "tension"]
        }
    }), r.wb.describe("animations", {
        _fallback: "animation"
    }), r.wb.set("transitions", {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: "transparent"
                },
                visible: {
                    type: "boolean",
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: "transparent"
                },
                visible: {
                    type: "boolean",
                    easing: "linear",
                    fn: t => 0 | t
                }
            }
        }
    });
    class c {
        constructor(t, e) {
            this._chart = t, this._properties = new Map, this.configure(e)
        }
        configure(t) {
            if (!Object(r.Bb)(t)) return;
            const e = this._properties;
            Object.getOwnPropertyNames(t).forEach(n => {
                const i = t[n];
                if (!Object(r.Bb)(i)) return;
                const o = {};
                for (const t of s) o[t] = i[t];
                (Object(r.ub)(i.properties) && i.properties || [n]).forEach(t => {
                    t !== n && e.has(t) || e.set(t, o)
                })
            })
        }
        _animateOptions(t, e) {
            const n = e.options,
                r = function(t, e) {
                    if (!e) return;
                    let n = t.options;
                    if (!n) return void(t.options = e);
                    n.$shared && (t.options = n = Object.assign({}, n, {
                        $shared: !1,
                        $animations: {}
                    }));
                    return n
                }(t, n);
            if (!r) return [];
            const i = this._createAnimations(r, n);
            return n.$shared && function(t, e) {
                const n = [],
                    r = Object.keys(e);
                for (let e = 0; e < r.length; e++) {
                    const i = t[r[e]];
                    i && i.active() && n.push(i.wait())
                }
                return Promise.all(n)
            }(t.options.$animations, n).then(() => {
                t.options = n
            }, () => {}), i
        }
        _createAnimations(t, e) {
            const n = this._properties,
                r = [],
                i = t.$animations || (t.$animations = {}),
                o = Object.keys(e),
                s = Date.now();
            let c;
            for (c = o.length - 1; c >= 0; --c) {
                const u = o[c];
                if ("$" === u.charAt(0)) continue;
                if ("options" === u) {
                    r.push(...this._animateOptions(t, e));
                    continue
                }
                const l = e[u];
                let f = i[u];
                const h = n.get(u);
                if (f) {
                    if (h && f.active()) {
                        f.update(h, l, s);
                        continue
                    }
                    f.cancel()
                }
                h && h.duration ? (i[u] = f = new a(h, t, u, l), r.push(f)) : t[u] = l
            }
            return r
        }
        update(t, e) {
            if (0 === this._properties.size) return void Object.assign(t, e);
            const n = this._createAnimations(t, e);
            return n.length ? (i.add(this._chart, n), !0) : void 0
        }
    }

    function u(t, e) {
        const n = t && t.options || {},
            r = n.reverse,
            i = void 0 === n.min ? e : 0,
            o = void 0 === n.max ? e : 0;
        return {
            start: r ? o : i,
            end: r ? i : o
        }
    }

    function l(t, e) {
        const n = [],
            r = t._getSortedDatasetMetas(e);
        let i, o;
        for (i = 0, o = r.length; i < o; ++i) n.push(r[i].index);
        return n
    }

    function f(t, e, n, i) {
        const o = t.keys,
            a = "single" === i.mode;
        let s, c, u, l;
        if (null !== e) {
            for (s = 0, c = o.length; s < c; ++s) {
                if (u = +o[s], u === n) {
                    if (i.all) continue;
                    break
                }
                l = t.values[u], Object(r.zb)(l) && (a || 0 === e || Object(r.Lb)(e) === Object(r.Lb)(l)) && (e += l)
            }
            return e
        }
    }

    function h(t, e) {
        const n = t && t.options.stacked;
        return n || void 0 === n && void 0 !== e.stack
    }

    function d(t, e, n) {
        const r = t[e] || (t[e] = {});
        return r[n] || (r[n] = {})
    }

    function p(t, e, n) {
        for (const r of e.getMatchingVisibleMetas("bar").reverse()) {
            const e = t[r.index];
            if (n && e > 0 || !n && e < 0) return r.index
        }
        return null
    }

    function g(t, e) {
        const {
            chart: n,
            _cachedMeta: r
        } = t, i = n._stacks || (n._stacks = {}), {
            iScale: o,
            vScale: a,
            index: s
        } = r, c = o.axis, u = a.axis, l = function(t, e, n) {
            return `${t.id}.${e.id}.${n.stack||n.type}`
        }(o, a, r), f = e.length;
        let h;
        for (let t = 0; t < f; ++t) {
            const n = e[t],
                {
                    [c]: r,
                    [u]: o
                } = n;
            h = (n._stacks || (n._stacks = {}))[u] = d(i, l, r), h[s] = o, h._top = p(h, a, !0), h._bottom = p(h, a, !1)
        }
    }

    function b(t, e) {
        const n = t.scales;
        return Object.keys(n).filter(t => n[t].axis === e).shift()
    }

    function v(t, e) {
        e = e || t._parsed;
        for (const n of e) {
            const e = n._stacks;
            if (!e || void 0 === e[t.vScale.id] || void 0 === e[t.vScale.id][t.index]) return;
            delete e[t.vScale.id][t.index]
        }
    }
    const m = t => "reset" === t || "none" === t,
        y = (t, e) => e ? t : Object.assign({}, t);
    class x {
        constructor(t, e) {
            this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.$context = void 0, this.initialize()
        }
        initialize() {
            const t = this._cachedMeta;
            this.configure(), this.linkScales(), t._stacked = h(t.vScale, t), this.addElements()
        }
        updateIndex(t) {
            this.index = t
        }
        linkScales() {
            const t = this,
                e = t.chart,
                n = t._cachedMeta,
                i = t.getDataset(),
                o = (t, e, n, r) => "x" === t ? e : "r" === t ? r : n,
                a = n.xAxisID = Object(r.Ob)(i.xAxisID, b(e, "x")),
                s = n.yAxisID = Object(r.Ob)(i.yAxisID, b(e, "y")),
                c = n.rAxisID = Object(r.Ob)(i.rAxisID, b(e, "r")),
                u = n.indexAxis,
                l = n.iAxisID = o(u, a, s, c),
                f = n.vAxisID = o(u, s, a, c);
            n.xScale = t.getScaleForId(a), n.yScale = t.getScaleForId(s), n.rScale = t.getScaleForId(c), n.iScale = t.getScaleForId(l), n.vScale = t.getScaleForId(f)
        }
        getDataset() {
            return this.chart.data.datasets[this.index]
        }
        getMeta() {
            return this.chart.getDatasetMeta(this.index)
        }
        getScaleForId(t) {
            return this.chart.scales[t]
        }
        _getOtherScale(t) {
            const e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale
        }
        reset() {
            this._update("reset")
        }
        _destroy() {
            const t = this._cachedMeta;
            this._data && Object(r.Nb)(this._data, this), t._stacked && v(t)
        }
        _dataCheck() {
            const t = this,
                e = t.getDataset(),
                n = e.data || (e.data = []);
            Object(r.Bb)(n) ? t._data = function(t) {
                const e = Object.keys(t),
                    n = new Array(e.length);
                let r, i, o;
                for (r = 0, i = e.length; r < i; ++r) o = e[r], n[r] = {
                    x: o,
                    y: t[o]
                };
                return n
            }(n) : t._data !== n && (t._data && (Object(r.Nb)(t._data, t), v(t._cachedMeta)), n && Object.isExtensible(n) && Object(r.Eb)(n, t), t._data = n)
        }
        addElements() {
            const t = this,
                e = t._cachedMeta;
            t._dataCheck(), t.datasetElementType && (e.dataset = new t.datasetElementType)
        }
        buildOrUpdateElements(t) {
            const e = this,
                n = e._cachedMeta,
                r = e.getDataset();
            let i = !1;
            e._dataCheck(), n._stacked = h(n.vScale, n), n.stack !== r.stack && (i = !0, v(n), n.stack = r.stack), e._resyncElements(t), i && g(e, n._parsed)
        }
        configure() {
            const t = this,
                e = t.chart.config,
                n = e.datasetScopeKeys(t._type),
                r = e.getOptionScopes(t.getDataset(), n, !0);
            t.options = e.createResolver(r, t.getContext()), t._parsing = t.options.parsing
        }
        parse(t, e) {
            const n = this,
                {
                    _cachedMeta: i,
                    _data: o
                } = n,
                {
                    iScale: a,
                    _stacked: s
                } = i,
                c = a.axis;
            let u, l, f, h = 0 === t && e === o.length || i._sorted,
                d = t > 0 && i._parsed[t - 1];
            if (!1 === n._parsing) i._parsed = o, i._sorted = !0, f = o;
            else {
                f = Object(r.ub)(o[t]) ? n.parseArrayData(i, o, t, e) : Object(r.Bb)(o[t]) ? n.parseObjectData(i, o, t, e) : n.parsePrimitiveData(i, o, t, e);
                const a = () => null === l[c] || d && l[c] < d[c];
                for (u = 0; u < e; ++u) i._parsed[u + t] = l = f[u], h && (a() && (h = !1), d = l);
                i._sorted = h
            }
            s && g(n, f)
        }
        parsePrimitiveData(t, e, n, r) {
            const {
                iScale: i,
                vScale: o
            } = t, a = i.axis, s = o.axis, c = i.getLabels(), u = i === o, l = new Array(r);
            let f, h, d;
            for (f = 0, h = r; f < h; ++f) d = f + n, l[f] = {
                [a]: u || i.parse(c[d], d),
                [s]: o.parse(e[d], d)
            };
            return l
        }
        parseArrayData(t, e, n, r) {
            const {
                xScale: i,
                yScale: o
            } = t, a = new Array(r);
            let s, c, u, l;
            for (s = 0, c = r; s < c; ++s) u = s + n, l = e[u], a[s] = {
                x: i.parse(l[0], u),
                y: o.parse(l[1], u)
            };
            return a
        }
        parseObjectData(t, e, n, i) {
            const {
                xScale: o,
                yScale: a
            } = t, {
                xAxisKey: s = "x",
                yAxisKey: c = "y"
            } = this._parsing, u = new Array(i);
            let l, f, h, d;
            for (l = 0, f = i; l < f; ++l) h = l + n, d = e[h], u[l] = {
                x: o.parse(Object(r.yb)(d, s), h),
                y: a.parse(Object(r.yb)(d, c), h)
            };
            return u
        }
        getParsed(t) {
            return this._cachedMeta._parsed[t]
        }
        getDataElement(t) {
            return this._cachedMeta.data[t]
        }
        applyStack(t, e, n) {
            const r = this.chart,
                i = this._cachedMeta,
                o = e[t.axis];
            return f({
                keys: l(r, !0),
                values: e._stacks[t.axis]
            }, o, i.index, {
                mode: n
            })
        }
        updateRangeFromParsed(t, e, n, r) {
            const i = n[e.axis];
            let o = null === i ? NaN : i;
            const a = r && n._stacks[e.axis];
            r && a && (r.values = a, t.min = Math.min(t.min, o), t.max = Math.max(t.max, o), o = f(r, i, this._cachedMeta.index, {
                all: !0
            })), t.min = Math.min(t.min, o), t.max = Math.max(t.max, o)
        }
        getMinMax(t, e) {
            const n = this,
                i = n._cachedMeta,
                o = i._parsed,
                a = i._sorted && t === i.iScale,
                s = o.length,
                c = n._getOtherScale(t),
                u = e && i._stacked && {
                    keys: l(n.chart, !0),
                    values: null
                },
                f = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                },
                {
                    min: h,
                    max: d
                } = function(t) {
                    const {
                        min: e,
                        max: n,
                        minDefined: r,
                        maxDefined: i
                    } = t.getUserBounds();
                    return {
                        min: r ? e : Number.NEGATIVE_INFINITY,
                        max: i ? n : Number.POSITIVE_INFINITY
                    }
                }(c);
            let p, g, b, v;

            function m() {
                return b = o[p], g = b[t.axis], v = b[c.axis], !Object(r.zb)(g) || h > v || d < v
            }
            for (p = 0; p < s && (m() || (n.updateRangeFromParsed(f, t, b, u), !a)); ++p);
            if (a)
                for (p = s - 1; p >= 0; --p)
                    if (!m()) {
                        n.updateRangeFromParsed(f, t, b, u);
                        break
                    }
            return f
        }
        getAllParsedValues(t) {
            const e = this._cachedMeta._parsed,
                n = [];
            let i, o, a;
            for (i = 0, o = e.length; i < o; ++i) a = e[i][t.axis], Object(r.zb)(a) && n.push(a);
            return n
        }
        getMaxOverflow() {
            return !1
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                n = e.iScale,
                r = e.vScale,
                i = this.getParsed(t);
            return {
                label: n ? "" + n.getLabelForValue(i[n.axis]) : "",
                value: r ? "" + r.getLabelForValue(i[r.axis]) : ""
            }
        }
        _update(t) {
            const e = this,
                n = e._cachedMeta;
            e.configure(), e._cachedDataOpts = {}, e.update(t || "default"), n._clip = function(t) {
                let e, n, i, o;
                return Object(r.Bb)(t) ? (e = t.top, n = t.right, i = t.bottom, o = t.left) : e = n = i = o = t, {
                    top: e,
                    right: n,
                    bottom: i,
                    left: o
                }
            }(Object(r.Ob)(e.options.clip, function(t, e, n) {
                if (!1 === n) return !1;
                const r = u(t, n),
                    i = u(e, n);
                return {
                    top: i.end,
                    right: r.end,
                    bottom: i.start,
                    left: r.start
                }
            }(n.xScale, n.yScale, e.getMaxOverflow())))
        }
        update(t) {}
        draw() {
            const t = this,
                e = t._ctx,
                n = t.chart,
                r = t._cachedMeta,
                i = r.data || [],
                o = n.chartArea,
                a = [],
                s = t._drawStart || 0,
                c = t._drawCount || i.length - s;
            let u;
            for (r.dataset && r.dataset.draw(e, o, s, c), u = s; u < s + c; ++u) {
                const t = i[u];
                t.active ? a.push(t) : t.draw(e, o)
            }
            for (u = 0; u < a.length; ++u) a[u].draw(e, o)
        }
        getStyle(t, e) {
            const n = e ? "active" : "default";
            return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(t || 0, n)
        }
        getContext(t, e, n) {
            const r = this,
                i = r.getDataset();
            let o;
            if (t >= 0 && t < r._cachedMeta.data.length) {
                const e = r._cachedMeta.data[t];
                o = e.$context || (e.$context = function(t, e, n) {
                    return Object.assign(Object.create(t), {
                        active: !1,
                        dataIndex: e,
                        parsed: void 0,
                        raw: void 0,
                        element: n,
                        index: e,
                        mode: "default",
                        type: "data"
                    })
                }(r.getContext(), t, e)), o.parsed = r.getParsed(t), o.raw = i.data[t]
            } else o = r.$context || (r.$context = function(t, e) {
                return Object.assign(Object.create(t), {
                    active: !1,
                    dataset: void 0,
                    datasetIndex: e,
                    index: e,
                    mode: "default",
                    type: "dataset"
                })
            }(r.chart.getContext(), r.index)), o.dataset = i;
            return o.active = !!e, o.mode = n, o
        }
        resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t)
        }
        resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t)
        }
        _resolveElementOptions(t, e = "default", n) {
            const i = this,
                o = "active" === e,
                a = i._cachedDataOpts,
                s = t + "-" + e,
                c = a[s],
                u = i.enableOptionSharing && Object(r.Ab)(n);
            if (c) return y(c, u);
            const l = i.chart.config,
                f = l.datasetElementScopeKeys(i._type, t),
                h = o ? [t + "Hover", "hover", t, ""] : [t, ""],
                d = l.getOptionScopes(i.getDataset(), f),
                p = Object.keys(r.wb.elements[t]),
                g = l.resolveNamedOptions(d, p, () => i.getContext(n, o), h);
            return g.$shared && (g.$shared = u, a[s] = Object.freeze(y(g, u))), g
        }
        _resolveAnimations(t, e, n) {
            const r = this,
                i = r.chart,
                o = r._cachedDataOpts,
                a = "animation-" + e,
                s = o[a];
            if (s) return s;
            let u;
            if (!1 !== i.options.animation) {
                const i = r.chart.config,
                    o = i.datasetAnimationScopeKeys(r._type, e),
                    a = i.getOptionScopes(r.getDataset(), o);
                u = i.createResolver(a, r.getContext(t, n, e))
            }
            const l = new c(i, u && u.animations);
            return u && u._cacheable && (o[a] = Object.freeze(l)), l
        }
        getSharedOptions(t) {
            if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
        }
        includeOptions(t, e) {
            return !e || m(t) || this.chart._animationsDisabled
        }
        updateElement(t, e, n, r) {
            m(r) ? Object.assign(t, n) : this._resolveAnimations(e, r).update(t, n)
        }
        updateSharedOptions(t, e, n) {
            t && !m(e) && this._resolveAnimations(void 0, e).update(t, n)
        }
        _setStyle(t, e, n, r) {
            t.active = r;
            const i = this.getStyle(e, r);
            this._resolveAnimations(e, n, r).update(t, {
                options: !r && this.getSharedOptions(i) || i
            })
        }
        removeHoverStyle(t, e, n) {
            this._setStyle(t, n, "active", !1)
        }
        setHoverStyle(t, e, n) {
            this._setStyle(t, n, "active", !0)
        }
        _removeDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1)
        }
        _setDatasetHoverStyle() {
            const t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0)
        }
        _resyncElements(t) {
            const e = this,
                n = e._cachedMeta.data.length,
                r = e._data.length;
            r > n ? e._insertElements(n, r - n, t) : r < n && e._removeElements(r, n - r);
            const i = Math.min(r, n);
            i && e.parse(0, i)
        }
        _insertElements(t, e, n = !0) {
            const r = this,
                i = r._cachedMeta,
                o = i.data,
                a = t + e;
            let s;
            const c = t => {
                for (t.length += e, s = t.length - 1; s >= a; s--) t[s] = t[s - e]
            };
            for (c(o), s = t; s < a; ++s) o[s] = new r.dataElementType;
            r._parsing && c(i._parsed), r.parse(t, e), n && r.updateElements(o, t, e, "reset")
        }
        updateElements(t, e, n, r) {}
        _removeElements(t, e) {
            const n = this._cachedMeta;
            if (this._parsing) {
                const r = n._parsed.splice(t, e);
                n._stacked && v(n, r)
            }
            n.data.splice(t, e)
        }
        _onDataPush() {
            const t = arguments.length;
            this._insertElements(this.getDataset().data.length - t, t)
        }
        _onDataPop() {
            this._removeElements(this._cachedMeta.data.length - 1, 1)
        }
        _onDataShift() {
            this._removeElements(0, 1)
        }
        _onDataSplice(t, e) {
            this._removeElements(t, e), this._insertElements(t, arguments.length - 2)
        }
        _onDataUnshift() {
            this._insertElements(0, arguments.length)
        }
    }

    function _(t) {
        const e = function(t) {
            if (!t._cache.$bar) {
                const e = t.getMatchingVisibleMetas("bar");
                let n = [];
                for (let r = 0, i = e.length; r < i; r++) n = n.concat(e[r].controller.getAllParsedValues(t));
                t._cache.$bar = Object(r.B)(n.sort((t, e) => t - e))
            }
            return t._cache.$bar
        }(t);
        let n, i, o, a, s = t._length;
        const c = () => {
            32767 !== o && -32768 !== o && (Object(r.Ab)(a) && (s = Math.min(s, Math.abs(o - a) || s)), a = o)
        };
        for (n = 0, i = e.length; n < i; ++n) o = t.getPixelForValue(e[n]), c();
        for (a = void 0, n = 0, i = t.ticks.length; n < i; ++n) o = t.getPixelForTick(n), c();
        return s
    }

    function w(t, e, n, i) {
        return Object(r.ub)(t) ? function(t, e, n, r) {
            const i = n.parse(t[0], r),
                o = n.parse(t[1], r),
                a = Math.min(i, o),
                s = Math.max(i, o);
            let c = a,
                u = s;
            Math.abs(a) > Math.abs(s) && (c = s, u = a), e[n.axis] = u, e._custom = {
                barStart: c,
                barEnd: u,
                start: i,
                end: o,
                min: a,
                max: s
            }
        }(t, e, n, i) : e[n.axis] = n.parse(t, i), e
    }

    function O(t, e, n, r) {
        const i = t.iScale,
            o = t.vScale,
            a = i.getLabels(),
            s = i === o,
            c = [];
        let u, l, f, h;
        for (u = n, l = n + r; u < l; ++u) h = e[u], f = {}, f[i.axis] = s || i.parse(a[u], u), c.push(w(h, f, o, u));
        return c
    }

    function j(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd
    }
    x.defaults = {}, x.prototype.datasetElementType = null, x.prototype.dataElementType = null;
    class S extends x {
        parsePrimitiveData(t, e, n, r) {
            return O(t, e, n, r)
        }
        parseArrayData(t, e, n, r) {
            return O(t, e, n, r)
        }
        parseObjectData(t, e, n, i) {
            const {
                iScale: o,
                vScale: a
            } = t, {
                xAxisKey: s = "x",
                yAxisKey: c = "y"
            } = this._parsing, u = "x" === o.axis ? s : c, l = "x" === a.axis ? s : c, f = [];
            let h, d, p, g;
            for (h = n, d = n + i; h < d; ++h) g = e[h], p = {}, p[o.axis] = o.parse(Object(r.yb)(g, u), h), f.push(w(Object(r.yb)(g, l), p, a, h));
            return f
        }
        updateRangeFromParsed(t, e, n, r) {
            super.updateRangeFromParsed(t, e, n, r);
            const i = n._custom;
            i && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, i.min), t.max = Math.max(t.max, i.max))
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                {
                    iScale: n,
                    vScale: r
                } = e,
                i = this.getParsed(t),
                o = i._custom,
                a = j(o) ? "[" + o.start + ", " + o.end + "]" : "" + r.getLabelForValue(i[r.axis]);
            return {
                label: "" + n.getLabelForValue(i[n.axis]),
                value: a
            }
        }
        initialize() {
            this.enableOptionSharing = !0, super.initialize();
            this._cachedMeta.stack = this.getDataset().stack
        }
        update(t) {
            const e = this._cachedMeta;
            this.updateElements(e.data, 0, e.data.length, t)
        }
        updateElements(t, e, n, i) {
            const o = this,
                a = "reset" === i,
                s = o._cachedMeta.vScale,
                c = s.getBasePixel(),
                u = s.isHorizontal(),
                l = o._getRuler(),
                f = o.resolveDataElementOptions(e, i),
                h = o.getSharedOptions(f),
                d = o.includeOptions(i, h);
            o.updateSharedOptions(h, i, f);
            for (let f = e; f < e + n; f++) {
                const e = o.getParsed(f),
                    n = a || Object(r.Cb)(e[s.axis]) ? {
                        base: c,
                        head: c
                    } : o._calculateBarValuePixels(f),
                    p = o._calculateBarIndexPixels(f, l),
                    g = (e._stacks || {})[s.axis],
                    b = {
                        horizontal: u,
                        base: n.base,
                        enableBorderRadius: !g || j(e._custom) || o.index === g._top || o.index === g._bottom,
                        x: u ? n.head : p.center,
                        y: u ? p.center : n.head,
                        height: u ? p.size : void 0,
                        width: u ? void 0 : p.size
                    };
                d && (b.options = h || o.resolveDataElementOptions(f, i)), o.updateElement(t[f], f, b, i)
            }
        }
        _getStacks(t, e) {
            const n = this._cachedMeta.iScale,
                i = n.getMatchingVisibleMetas(this._type),
                o = n.options.stacked,
                a = i.length,
                s = [];
            let c, u;
            for (c = 0; c < a; ++c) {
                if (u = i[c], void 0 !== e) {
                    const t = u.controller.getParsed(e)[u.controller._cachedMeta.vScale.axis];
                    if (Object(r.Cb)(t) || isNaN(t)) continue
                }
                if ((!1 === o || -1 === s.indexOf(u.stack) || void 0 === o && void 0 === u.stack) && s.push(u.stack), u.index === t) break
            }
            return s.length || s.push(void 0), s
        }
        _getStackCount(t) {
            return this._getStacks(void 0, t).length
        }
        _getStackIndex(t, e, n) {
            const r = this._getStacks(t, n),
                i = void 0 !== e ? r.indexOf(e) : -1;
            return -1 === i ? r.length - 1 : i
        }
        _getRuler() {
            const t = this,
                e = t.options,
                n = t._cachedMeta,
                r = n.iScale,
                i = [];
            let o, a;
            for (o = 0, a = n.data.length; o < a; ++o) i.push(r.getPixelForValue(t.getParsed(o)[r.axis], o));
            const s = e.barThickness;
            return {
                min: s || _(r),
                pixels: i,
                start: r._startPixel,
                end: r._endPixel,
                stackCount: t._getStackCount(),
                scale: r,
                grouped: e.grouped,
                ratio: s ? 1 : e.categoryPercentage * e.barPercentage
            }
        }
        _calculateBarValuePixels(t) {
            const {
                vScale: e,
                _stacked: n
            } = this._cachedMeta, {
                base: i,
                minBarLength: o
            } = this.options, a = this.getParsed(t), s = a._custom, c = j(s);
            let u, l, f = a[e.axis],
                h = 0,
                d = n ? this.applyStack(e, a, n) : f;
            d !== f && (h = d - f, d = f), c && (f = s.barStart, d = s.barEnd - s.barStart, 0 !== f && Object(r.Lb)(f) !== Object(r.Lb)(s.barEnd) && (h = 0), h += f);
            const p = Object(r.Cb)(i) || c ? h : i;
            let g = e.getPixelForValue(p);
            u = this.chart.getDataVisibility(t) ? e.getPixelForValue(h + d) : g, l = u - g, void 0 !== o && Math.abs(l) < o && (l = l < 0 ? -o : o, 0 === f && (g -= l / 2), u = g + l);
            const b = i || 0;
            if (g === e.getPixelForValue(b)) {
                const t = e.getLineWidthForValue(b) / 2;
                l > 0 ? (g += t, l -= t) : l < 0 && (g -= t, l += t)
            }
            return {
                size: l,
                base: g,
                head: u,
                center: u + l / 2
            }
        }
        _calculateBarIndexPixels(t, e) {
            const n = this,
                i = e.scale,
                o = n.options,
                a = o.skipNull,
                s = Object(r.Ob)(o.maxBarThickness, 1 / 0);
            let c, u;
            if (e.grouped) {
                const i = a ? n._getStackCount(t) : e.stackCount,
                    l = "flex" === o.barThickness ? function(t, e, n, r) {
                        const i = e.pixels,
                            o = i[t];
                        let a = t > 0 ? i[t - 1] : null,
                            s = t < i.length - 1 ? i[t + 1] : null;
                        const c = n.categoryPercentage;
                        null === a && (a = o - (null === s ? e.end - e.start : s - o)), null === s && (s = o + o - a);
                        const u = o - (o - Math.min(a, s)) / 2 * c;
                        return {
                            chunk: Math.abs(s - a) / 2 * c / r,
                            ratio: n.barPercentage,
                            start: u
                        }
                    }(t, e, o, i) : function(t, e, n, i) {
                        const o = n.barThickness;
                        let a, s;
                        return Object(r.Cb)(o) ? (a = e.min * n.categoryPercentage, s = n.barPercentage) : (a = o * i, s = 1), {
                            chunk: a / i,
                            ratio: s,
                            start: e.pixels[t] - a / 2
                        }
                    }(t, e, o, i),
                    f = n._getStackIndex(n.index, n._cachedMeta.stack, a ? t : void 0);
                c = l.start + l.chunk * f + l.chunk / 2, u = Math.min(s, l.chunk * l.ratio)
            } else c = i.getPixelForValue(n.getParsed(t)[i.axis], t), u = Math.min(s, e.min * e.ratio);
            return {
                base: c - u / 2,
                head: c + u / 2,
                center: c,
                size: u
            }
        }
        draw() {
            const t = this,
                e = t.chart,
                n = t._cachedMeta,
                i = n.vScale,
                o = n.data,
                a = o.length;
            let s = 0;
            for (Object(r.Db)(e.ctx, e.chartArea); s < a; ++s) null !== t.getParsed(s)[i.axis] && o[s].draw(t._ctx);
            Object(r.Fb)(e.ctx)
        }
    }
    S.id = "bar", S.defaults = {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: .8,
        barPercentage: .9,
        grouped: !0,
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "base", "width", "height"]
            }
        }
    }, S.overrides = {
        interaction: {
            mode: "index"
        },
        scales: {
            _index_: {
                type: "category",
                offset: !0,
                grid: {
                    offset: !0
                }
            },
            _value_: {
                type: "linear",
                beginAtZero: !0
            }
        }
    };
    class M extends x {
        initialize() {
            this.enableOptionSharing = !0, super.initialize()
        }
        parseObjectData(t, e, n, i) {
            const {
                xScale: o,
                yScale: a
            } = t, {
                xAxisKey: s = "x",
                yAxisKey: c = "y"
            } = this._parsing, u = [];
            let l, f, h;
            for (l = n, f = n + i; l < f; ++l) h = e[l], u.push({
                x: o.parse(Object(r.yb)(h, s), l),
                y: a.parse(Object(r.yb)(h, c), l),
                _custom: h && h.r && +h.r
            });
            return u
        }
        getMaxOverflow() {
            const {
                data: t,
                _parsed: e
            } = this._cachedMeta;
            let n = 0;
            for (let r = t.length - 1; r >= 0; --r) n = Math.max(n, t[r].size() / 2, e[r]._custom);
            return n > 0 && n
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                {
                    xScale: n,
                    yScale: r
                } = e,
                i = this.getParsed(t),
                o = n.getLabelForValue(i.x),
                a = r.getLabelForValue(i.y),
                s = i._custom;
            return {
                label: e.label,
                value: "(" + o + ", " + a + (s ? ", " + s : "") + ")"
            }
        }
        update(t) {
            const e = this._cachedMeta.data;
            this.updateElements(e, 0, e.length, t)
        }
        updateElements(t, e, n, r) {
            const i = this,
                o = "reset" === r,
                {
                    xScale: a,
                    yScale: s
                } = i._cachedMeta,
                c = i.resolveDataElementOptions(e, r),
                u = i.getSharedOptions(c),
                l = i.includeOptions(r, u);
            for (let c = e; c < e + n; c++) {
                const e = t[c],
                    n = !o && i.getParsed(c),
                    u = o ? a.getPixelForDecimal(.5) : a.getPixelForValue(n.x),
                    f = o ? s.getBasePixel() : s.getPixelForValue(n.y),
                    h = {
                        x: u,
                        y: f,
                        skip: isNaN(u) || isNaN(f)
                    };
                l && (h.options = i.resolveDataElementOptions(c, r), o && (h.options.radius = 0)), i.updateElement(e, c, h, r)
            }
            i.updateSharedOptions(u, r, c)
        }
        resolveDataElementOptions(t, e) {
            const n = this.getParsed(t);
            let i = super.resolveDataElementOptions(t, e);
            i.$shared && (i = Object.assign({}, i, {
                $shared: !1
            }));
            const o = i.radius;
            return "active" !== e && (i.radius = 0), i.radius += Object(r.Ob)(n && n._custom, o), i
        }
    }
    M.id = "bubble", M.defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "borderWidth", "radius"]
            }
        }
    }, M.overrides = {
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: () => ""
                }
            }
        }
    };
    class k extends x {
        constructor(t, e) {
            super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0
        }
        linkScales() {}
        parse(t, e) {
            const n = this.getDataset().data,
                r = this._cachedMeta;
            let i, o;
            for (i = t, o = t + e; i < o; ++i) r._parsed[i] = +n[i]
        }
        _getRotation() {
            return Object(r.Mb)(this.options.rotation - 90)
        }
        _getCircumference() {
            return Object(r.Mb)(this.options.circumference)
        }
        _getRotationExtents() {
            let t = r.u,
                e = -r.u;
            const n = this;
            for (let r = 0; r < n.chart.data.datasets.length; ++r)
                if (n.chart.isDatasetVisible(r)) {
                    const i = n.chart.getDatasetMeta(r).controller,
                        o = i._getRotation(),
                        a = i._getCircumference();
                    t = Math.min(t, o), e = Math.max(e, o + a)
                }
            return {
                rotation: t,
                circumference: e - t
            }
        }
        update(t) {
            const e = this,
                n = e.chart,
                {
                    chartArea: i
                } = n,
                o = e._cachedMeta,
                a = o.data,
                s = e.getMaxBorderWidth() + e.getMaxOffset(a),
                c = Math.max((Math.min(i.width, i.height) - s) / 2, 0),
                u = Math.min(Object(r.Gb)(e.options.cutout, c), 1),
                l = e._getRingWeight(e.index),
                {
                    circumference: f,
                    rotation: h
                } = e._getRotationExtents(),
                {
                    ratioX: d,
                    ratioY: p,
                    offsetX: g,
                    offsetY: b
                } = function(t, e, n) {
                    let i = 1,
                        o = 1,
                        a = 0,
                        s = 0;
                    if (e < r.u) {
                        const c = t,
                            u = c + e,
                            l = Math.cos(c),
                            f = Math.sin(c),
                            h = Math.cos(u),
                            d = Math.sin(u),
                            p = (t, e, i) => Object(r.Jb)(t, c, u) ? 1 : Math.max(e, e * n, i, i * n),
                            g = (t, e, i) => Object(r.Jb)(t, c, u) ? -1 : Math.min(e, e * n, i, i * n),
                            b = p(0, l, h),
                            v = p(r.i, f, d),
                            m = g(r.q, l, h),
                            y = g(r.q + r.i, f, d);
                        i = (b - m) / 2, o = (v - y) / 2, a = -(b + m) / 2, s = -(v + y) / 2
                    }
                    return {
                        ratioX: i,
                        ratioY: o,
                        offsetX: a,
                        offsetY: s
                    }
                }(h, f, u),
                v = (i.width - s) / d,
                m = (i.height - s) / p,
                y = Math.max(Math.min(v, m) / 2, 0),
                x = Object(r.Hb)(e.options.radius, y),
                _ = (x - Math.max(x * u, 0)) / e._getVisibleDatasetWeightTotal();
            e.offsetX = g * x, e.offsetY = b * x, o.total = e.calculateTotal(), e.outerRadius = x - _ * e._getRingWeightOffset(e.index), e.innerRadius = Math.max(e.outerRadius - _ * l, 0), e.updateElements(a, 0, a.length, t)
        }
        _circumference(t, e) {
            const n = this.options,
                i = this._cachedMeta,
                o = this._getCircumference();
            return e && n.animation.animateRotate || !this.chart.getDataVisibility(t) || null === i._parsed[t] ? 0 : this.calculateCircumference(i._parsed[t] * o / r.u)
        }
        updateElements(t, e, n, r) {
            const i = this,
                o = "reset" === r,
                a = i.chart,
                s = a.chartArea,
                c = a.options.animation,
                u = (s.left + s.right) / 2,
                l = (s.top + s.bottom) / 2,
                f = o && c.animateScale,
                h = f ? 0 : i.innerRadius,
                d = f ? 0 : i.outerRadius,
                p = i.resolveDataElementOptions(e, r),
                g = i.getSharedOptions(p),
                b = i.includeOptions(r, g);
            let v, m = i._getRotation();
            for (v = 0; v < e; ++v) m += i._circumference(v, o);
            for (v = e; v < e + n; ++v) {
                const e = i._circumference(v, o),
                    n = t[v],
                    a = {
                        x: u + i.offsetX,
                        y: l + i.offsetY,
                        startAngle: m,
                        endAngle: m + e,
                        circumference: e,
                        outerRadius: d,
                        innerRadius: h
                    };
                b && (a.options = g || i.resolveDataElementOptions(v, r)), m += e, i.updateElement(n, v, a, r)
            }
            i.updateSharedOptions(g, r, p)
        }
        calculateTotal() {
            const t = this._cachedMeta,
                e = t.data;
            let n, r = 0;
            for (n = 0; n < e.length; n++) {
                const e = t._parsed[n];
                null !== e && !isNaN(e) && this.chart.getDataVisibility(n) && (r += Math.abs(e))
            }
            return r
        }
        calculateCircumference(t) {
            const e = this._cachedMeta.total;
            return e > 0 && !isNaN(t) ? r.u * (Math.abs(t) / e) : 0
        }
        getLabelAndValue(t) {
            const e = this._cachedMeta,
                n = this.chart,
                i = n.data.labels || [],
                o = Object(r.Ib)(e._parsed[t], n.options.locale);
            return {
                label: i[t] || "",
                value: o
            }
        }
        getMaxBorderWidth(t) {
            const e = this;
            let n = 0;
            const r = e.chart;
            let i, o, a, s, c;
            if (!t)
                for (i = 0, o = r.data.datasets.length; i < o; ++i)
                    if (r.isDatasetVisible(i)) {
                        a = r.getDatasetMeta(i), t = a.data, s = a.controller, s !== e && s.configure();
                        break
                    }
            if (!t) return 0;
            for (i = 0, o = t.length; i < o; ++i) c = s.resolveDataElementOptions(i), "inner" !== c.borderAlign && (n = Math.max(n, c.borderWidth || 0, c.hoverBorderWidth || 0));
            return n
        }
        getMaxOffset(t) {
            let e = 0;
            for (let n = 0, r = t.length; n < r; ++n) {
                const t = this.resolveDataElementOptions(n);
                e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
            }
            return e
        }
        _getRingWeightOffset(t) {
            let e = 0;
            for (let n = 0; n < t; ++n) this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
            return e
        }
        _getRingWeight(t) {
            return Math.max(Object(r.Ob)(this.chart.data.datasets[t].weight, 1), 0)
        }
        _getVisibleDatasetWeightTotal() {
            return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
        }
    }
    k.id = "doughnut", k.defaults = {
        datasetElementType: !1,
        dataElementType: "arc",
        animation: {
            animateRotate: !0,
            animateScale: !1
        },
        animations: {
            numbers: {
                type: "number",
                properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth"]
            }
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        indexAxis: "r"
    }, k.overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(t) {
                        const e = t.data;
                        return e.labels.length && e.datasets.length ? e.labels.map((e, n) => {
                            const r = t.getDatasetMeta(0).controller.getStyle(n);
                            return {
                                text: e,
                                fillStyle: r.backgroundColor,
                                strokeStyle: r.borderColor,
                                lineWidth: r.borderWidth,
                                hidden: !t.getDataVisibility(n),
                                index: n
                            }
                        }) : []
                    }
                },
                onClick(t, e, n) {
                    n.chart.toggleDataVisibility(e.index), n.chart.update()
                }
            },
            tooltip: {
                callbacks: {
                    title: () => "",
                    label(t) {
                        let e = t.label;
                        const n = ": " + t.formattedValue;
                        return Object(r.ub)(e) ? (e = e.slice(), e[0] += n) : e += n, e
                    }
                }
            }
        }
    };
    class E extends x {
        initialize() {
            this.enableOptionSharing = !0, super.initialize()
        }
        update(t) {
            const e = this,
                n = e._cachedMeta,
                {
                    dataset: i,
                    data: o = [],
                    _dataset: a
                } = n,
                s = e.chart._animationsDisabled;
            let {
                start: c,
                count: u
            } = function(t, e, n) {
                const i = e.length;
                let o = 0,
                    a = i;
                if (t._sorted) {
                    const {
                        iScale: s,
                        _parsed: c
                    } = t, u = s.axis, {
                        min: l,
                        max: f,
                        minDefined: h,
                        maxDefined: d
                    } = s.getUserBounds();
                    h && (o = Object(r.Qb)(Math.min(Object(r.Rb)(c, s.axis, l).lo, n ? i : Object(r.Rb)(e, u, s.getPixelForValue(l)).lo), 0, i - 1)), a = d ? Object(r.Qb)(Math.max(Object(r.Rb)(c, s.axis, f).hi + 1, n ? 0 : Object(r.Rb)(e, u, s.getPixelForValue(f)).hi + 1), o, i) - o : i - o
                }
                return {
                    start: o,
                    count: a
                }
            }(n, o, s);
            e._drawStart = c, e._drawCount = u,
                function(t) {
                    const {
                        xScale: e,
                        yScale: n,
                        _scaleRanges: r
                    } = t, i = {
                        xmin: e.min,
                        xmax: e.max,
                        ymin: n.min,
                        ymax: n.max
                    };
                    if (!r) return t._scaleRanges = i, !0;
                    const o = r.xmin !== e.min || r.xmax !== e.max || r.ymin !== n.min || r.ymax !== n.max;
                    return Object.assign(r, i), o
                }(n) && (c = 0, u = o.length), i._decimated = !!a._decimated, i.points = o;
            const l = e.resolveDatasetElementOptions(t);
            e.options.showLine || (l.borderWidth = 0), l.segment = e.options.segment, e.updateElement(i, void 0, {
                animated: !s,
                options: l
            }, t), e.updateElements(o, c, u, t)
        }
        updateElements(t, e, n, i) {
            const o = this,
                a = "reset" === i,
                {
                    xScale: s,
                    yScale: c,
                    _stacked: u
                } = o._cachedMeta,
                l = o.resolveDataElementOptions(e, i),
                f = o.getSharedOptions(l),
                h = o.includeOptions(i, f),
                d = o.options.spanGaps,
                p = Object(r.Pb)(d) ? d : Number.POSITIVE_INFINITY,
                g = o.chart._animationsDisabled || a || "none" === i;
            let b = e > 0 && o.getParsed(e - 1);
            for (let l = e; l < e + n; ++l) {
                const e = t[l],
                    n = o.getParsed(l),
                    d = g ? e : {},
                    v = Object(r.Cb)(n.y),
                    m = d.x = s.getPixelForValue(n.x, l),
                    y = d.y = a || v ? c.getBasePixel() : c.getPixelForValue(u ? o.applyStack(c, n, u) : n.y, l);
                d.skip = isNaN(m) || isNaN(y) || v, d.stop = l > 0 && n.x - b.x > p, d.parsed = n, h && (d.options = f || o.resolveDataElementOptions(l, i)), g || o.updateElement(e, l, d, i), b = n
            }
            o.updateSharedOptions(f, i, l)
        }
        getMaxOverflow() {
            const t = this._cachedMeta,
                e = t.dataset,
                n = e.options && e.options.borderWidth || 0,
                r = t.data || [];
            if (!r.length) return n;
            const i = r[0].size(this.resolveDataElementOptions(0)),
                o = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
            return Math.max(n, i, o) / 2
        }
        draw() {
            this._cachedMeta.dataset.updateControlPoints(this.chart.chartArea), super.draw()
        }
    }
    E.id = "line", E.defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: !0,
        spanGaps: !1
    }, E.overrides = {
        scales: {
            _index_: {
                type: "category"
            },
            _value_: {
                type: "linear"
            }
        }
    };
    class A extends x {
        constructor(t, e) {
            super(t, e), this.innerRadius = void 0, this.outerRadius = void 0
        }
        update(t) {
            const e = this._cachedMeta.data;
            this._updateRadius(), this.updateElements(e, 0, e.length, t)
        }
        _updateRadius() {
            const t = this,
                e = t.chart,
                n = e.chartArea,
                r = e.options,
                i = Math.min(n.right - n.left, n.bottom - n.top),
                o = Math.max(i / 2, 0),
                a = (o - Math.max(r.cutoutPercentage ? o / 100 * r.cutoutPercentage : 1, 0)) / e.getVisibleDatasetCount();
            t.outerRadius = o - a * t.index, t.innerRadius = t.outerRadius - a
        }
        updateElements(t, e, n, i) {
            const o = this,
                a = "reset" === i,
                s = o.chart,
                c = o.getDataset(),
                u = s.options.animation,
                l = o._cachedMeta.rScale,
                f = l.xCenter,
                h = l.yCenter,
                d = l.getIndexAngle(0) - .5 * r.q;
            let p, g = d;
            const b = 360 / o.countVisibleElements();
            for (p = 0; p < e; ++p) g += o._computeAngle(p, i, b);
            for (p = e; p < e + n; p++) {
                const e = t[p];
                let n = g,
                    r = g + o._computeAngle(p, i, b),
                    v = s.getDataVisibility(p) ? l.getDistanceFromCenterForValue(c.data[p]) : 0;
                g = r, a && (u.animateScale && (v = 0), u.animateRotate && (n = r = d));
                const m = {
                    x: f,
                    y: h,
                    innerRadius: 0,
                    outerRadius: v,
                    startAngle: n,
                    endAngle: r,
                    options: o.resolveDataElementOptions(p, i)
                };
                o.updateElement(e, p, m, i)
            }
        }
        countVisibleElements() {
            const t = this.getDataset(),
                e = this._cachedMeta;
            let n = 0;
            return e.data.forEach((e, r) => {
                !isNaN(t.data[r]) && this.chart.getDataVisibility(r) && n++
            }), n
        }
        _computeAngle(t, e, n) {
            return this.chart.getDataVisibility(t) ? Object(r.Mb)(this.resolveDataElementOptions(t, e).angle || n) : 0
        }
    }
    A.id = "polarArea", A.defaults = {
        dataElementType: "arc",
        animation: {
            animateRotate: !0,
            animateScale: !0
        },
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
            }
        },
        indexAxis: "r",
        startAngle: 0
    }, A.overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels(t) {
                        const e = t.data;
                        return e.labels.length && e.datasets.length ? e.labels.map((e, n) => {
                            const r = t.getDatasetMeta(0).controller.getStyle(n);
                            return {
                                text: e,
                                fillStyle: r.backgroundColor,
                                strokeStyle: r.borderColor,
                                lineWidth: r.borderWidth,
                                hidden: !t.getDataVisibility(n),
                                index: n
                            }
                        }) : []
                    }
                },
                onClick(t, e, n) {
                    n.chart.toggleDataVisibility(e.index), n.chart.update()
                }
            },
            tooltip: {
                callbacks: {
                    title: () => "",
                    label: t => t.chart.data.labels[t.dataIndex] + ": " + t.formattedValue
                }
            }
        },
        scales: {
            r: {
                type: "radialLinear",
                angleLines: {
                    display: !1
                },
                beginAtZero: !0,
                grid: {
                    circular: !0
                },
                pointLabels: {
                    display: !1
                },
                startAngle: 0
            }
        }
    };
    class P extends k {}
    P.id = "pie", P.defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%"
    };
    class T extends x {
        getLabelAndValue(t) {
            const e = this._cachedMeta.vScale,
                n = this.getParsed(t);
            return {
                label: e.getLabels()[t],
                value: "" + e.getLabelForValue(n[e.axis])
            }
        }
        update(t) {
            const e = this,
                n = e._cachedMeta,
                r = n.dataset,
                i = n.data || [],
                o = n.iScale.getLabels();
            if (r.points = i, "resize" !== t) {
                const n = e.resolveDatasetElementOptions(t);
                e.options.showLine || (n.borderWidth = 0);
                const a = {
                    _loop: !0,
                    _fullLoop: o.length === i.length,
                    options: n
                };
                e.updateElement(r, void 0, a, t)
            }
            e.updateElements(i, 0, i.length, t)
        }
        updateElements(t, e, n, r) {
            const i = this,
                o = i.getDataset(),
                a = i._cachedMeta.rScale,
                s = "reset" === r;
            for (let c = e; c < e + n; c++) {
                const e = t[c],
                    n = i.resolveDataElementOptions(c, r),
                    u = a.getPointPositionForValue(c, o.data[c]),
                    l = s ? a.xCenter : u.x,
                    f = s ? a.yCenter : u.y,
                    h = {
                        x: l,
                        y: f,
                        angle: u.angle,
                        skip: isNaN(l) || isNaN(f),
                        options: n
                    };
                i.updateElement(e, c, h, r)
            }
        }
    }
    T.id = "radar", T.defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: {
            line: {
                fill: "start"
            }
        }
    }, T.overrides = {
        aspectRatio: 1,
        scales: {
            r: {
                type: "radialLinear"
            }
        }
    };
    class D extends E {}
    D.id = "scatter", D.defaults = {
        showLine: !1,
        fill: !1
    }, D.overrides = {
        interaction: {
            mode: "point"
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: () => "",
                    label: t => "(" + t.label + ", " + t.formattedValue + ")"
                }
            }
        },
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        }
    };
    var C = Object.freeze({
        __proto__: null,
        BarController: S,
        BubbleController: M,
        DoughnutController: k,
        LineController: E,
        PolarAreaController: A,
        PieController: P,
        RadarController: T,
        ScatterController: D
    });

    function L() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
    }
    class I {
        constructor(t) {
            this.options = t || {}
        }
        formats() {
            return L()
        }
        parse(t, e) {
            return L()
        }
        format(t, e) {
            return L()
        }
        add(t, e, n) {
            return L()
        }
        diff(t, e, n) {
            return L()
        }
        startOf(t, e, n) {
            return L()
        }
        endOf(t, e) {
            return L()
        }
    }
    I.override = function(t) {
        Object.assign(I.prototype, t)
    };
    var R = {
        _date: I
    };

    function F(t, e) {
        return "native" in t ? {
            x: t.x,
            y: t.y
        } : Object(r.Sb)(t, e)
    }

    function z(t, e, n, i) {
        const {
            controller: o,
            data: a,
            _sorted: s
        } = t, c = o._cachedMeta.iScale;
        if (c && e === c.axis && s && a.length) {
            const t = c._reversePixels ? r.c : r.Rb;
            if (!i) return t(a, e, n);
            if (o._sharedOptions) {
                const r = a[0],
                    i = "function" == typeof r.getRange && r.getRange(e);
                if (i) {
                    const r = t(a, e, n - i),
                        o = t(a, e, n + i);
                    return {
                        lo: r.lo,
                        hi: o.hi
                    }
                }
            }
        }
        return {
            lo: 0,
            hi: a.length - 1
        }
    }

    function N(t, e, n, r, i) {
        const o = t.getSortedVisibleDatasetMetas(),
            a = n[e];
        for (let t = 0, n = o.length; t < n; ++t) {
            const {
                index: n,
                data: s
            } = o[t], {
                lo: c,
                hi: u
            } = z(o[t], e, a, i);
            for (let t = c; t <= u; ++t) {
                const e = s[t];
                e.skip || r(e, n, t)
            }
        }
    }

    function B(t, e, n, i) {
        const o = [];
        if (!Object(r.b)(e, t.chartArea, t._minPadding)) return o;
        return N(t, n, e, (function(t, n, r) {
            t.inRange(e.x, e.y, i) && o.push({
                element: t,
                datasetIndex: n,
                index: r
            })
        }), !0), o
    }

    function W(t, e, n, i, o) {
        const a = function(t) {
            const e = -1 !== t.indexOf("x"),
                n = -1 !== t.indexOf("y");
            return function(t, r) {
                const i = e ? Math.abs(t.x - r.x) : 0,
                    o = n ? Math.abs(t.y - r.y) : 0;
                return Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2))
            }
        }(n);
        let s = Number.POSITIVE_INFINITY,
            c = [];
        if (!Object(r.b)(e, t.chartArea, t._minPadding)) return c;
        return N(t, n, e, (function(t, n, r) {
            if (i && !t.inRange(e.x, e.y, o)) return;
            const u = t.getCenterPoint(o),
                l = a(e, u);
            l < s ? (c = [{
                element: t,
                datasetIndex: n,
                index: r
            }], s = l) : l === s && c.push({
                element: t,
                datasetIndex: n,
                index: r
            })
        })), c
    }

    function V(t, e, n, r) {
        const i = F(e, t),
            o = [],
            a = n.axis,
            s = "x" === a ? "inXRange" : "inYRange";
        let c = !1;
        return function(t, e) {
            const n = t.getSortedVisibleDatasetMetas();
            let r, i, o;
            for (let t = 0, a = n.length; t < a; ++t) {
                ({
                    index: r,
                    data: i
                } = n[t]);
                for (let t = 0, n = i.length; t < n; ++t) o = i[t], o.skip || e(o, r, t)
            }
        }(t, (t, e, n) => {
            t[s](i[a], r) && o.push({
                element: t,
                datasetIndex: e,
                index: n
            }), t.inRange(i.x, i.y, r) && (c = !0)
        }), n.intersect && !c ? [] : o
    }
    var H = {
        modes: {
            index(t, e, n, r) {
                const i = F(e, t),
                    o = n.axis || "x",
                    a = n.intersect ? B(t, i, o, r) : W(t, i, o, !1, r),
                    s = [];
                return a.length ? (t.getSortedVisibleDatasetMetas().forEach(t => {
                    const e = a[0].index,
                        n = t.data[e];
                    n && !n.skip && s.push({
                        element: n,
                        datasetIndex: t.index,
                        index: e
                    })
                }), s) : []
            },
            dataset(t, e, n, r) {
                const i = F(e, t),
                    o = n.axis || "xy";
                let a = n.intersect ? B(t, i, o, r) : W(t, i, o, !1, r);
                if (a.length > 0) {
                    const e = a[0].datasetIndex,
                        n = t.getDatasetMeta(e).data;
                    a = [];
                    for (let t = 0; t < n.length; ++t) a.push({
                        element: n[t],
                        datasetIndex: e,
                        index: t
                    })
                }
                return a
            },
            point: (t, e, n, r) => B(t, F(e, t), n.axis || "xy", r),
            nearest: (t, e, n, r) => W(t, F(e, t), n.axis || "xy", n.intersect, r),
            x: (t, e, n, r) => (n.axis = "x", V(t, e, n, r)),
            y: (t, e, n, r) => (n.axis = "y", V(t, e, n, r))
        }
    };
    const U = ["left", "top", "right", "bottom"];

    function $(t, e) {
        return t.filter(t => t.pos === e)
    }

    function Y(t, e) {
        return t.filter(t => -1 === U.indexOf(t.pos) && t.box.axis === e)
    }

    function q(t, e) {
        return t.sort((t, n) => {
            const r = e ? n : t,
                i = e ? t : n;
            return r.weight === i.weight ? r.index - i.index : r.weight - i.weight
        })
    }

    function G(t, e, n, r) {
        return Math.max(t[n], e[n]) + Math.max(t[r], e[r])
    }

    function X(t, e) {
        t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right)
    }

    function K(t, e, n) {
        const i = n.box,
            o = t.maxPadding;
        Object(r.Bb)(n.pos) || (n.size && (t[n.pos] -= n.size), n.size = n.horizontal ? i.height : i.width, t[n.pos] += n.size), i.getPadding && X(o, i.getPadding());
        const a = Math.max(0, e.outerWidth - G(o, t, "left", "right")),
            s = Math.max(0, e.outerHeight - G(o, t, "top", "bottom")),
            c = a !== t.w,
            u = s !== t.h;
        return t.w = a, t.h = s, n.horizontal ? {
            same: c,
            other: u
        } : {
            same: u,
            other: c
        }
    }

    function J(t, e) {
        const n = e.maxPadding;

        function r(t) {
            const r = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return t.forEach(t => {
                r[t] = Math.max(e[t], n[t])
            }), r
        }
        return r(t ? ["left", "right"] : ["top", "bottom"])
    }

    function Z(t, e, n) {
        const r = [];
        let i, o, a, s, c, u;
        for (i = 0, o = t.length, c = 0; i < o; ++i) {
            a = t[i], s = a.box, s.update(a.width || e.w, a.height || e.h, J(a.horizontal, e));
            const {
                same: o,
                other: l
            } = K(e, n, a);
            c |= o && r.length, u = u || l, s.fullSize || r.push(a)
        }
        return c && Z(r, e, n) || u
    }

    function Q(t, e, n) {
        const r = n.padding;
        let i, o, a, s, c = e.x,
            u = e.y;
        for (i = 0, o = t.length; i < o; ++i) a = t[i], s = a.box, a.horizontal ? (s.left = s.fullSize ? r.left : e.left, s.right = s.fullSize ? n.outerWidth - r.right : e.left + e.w, s.top = u, s.bottom = u + s.height, s.width = s.right - s.left, u = s.bottom) : (s.left = c, s.right = c + s.width, s.top = s.fullSize ? r.top : e.top, s.bottom = s.fullSize ? n.outerHeight - r.right : e.top + e.h, s.height = s.bottom - s.top, c = s.right);
        e.x = c, e.y = u
    }
    r.wb.set("layout", {
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    });
    var tt = {
        addBox(t, e) {
            t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function() {
                return [{
                    z: 0,
                    draw(t) {
                        e.draw(t)
                    }
                }]
            }, t.boxes.push(e)
        },
        removeBox(t, e) {
            const n = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== n && t.boxes.splice(n, 1)
        },
        configure(t, e, n) {
            e.fullSize = n.fullSize, e.position = n.position, e.weight = n.weight
        },
        update(t, e, n, i) {
            if (!t) return;
            const o = Object(r.d)(t.options.layout.padding),
                a = e - o.width,
                s = n - o.height,
                c = function(t) {
                    const e = function(t) {
                            const e = [];
                            let n, r, i;
                            for (n = 0, r = (t || []).length; n < r; ++n) i = t[n], e.push({
                                index: n,
                                box: i,
                                pos: i.position,
                                horizontal: i.isHorizontal(),
                                weight: i.weight
                            });
                            return e
                        }(t),
                        n = q(e.filter(t => t.box.fullSize), !0),
                        r = q($(e, "left"), !0),
                        i = q($(e, "right")),
                        o = q($(e, "top"), !0),
                        a = q($(e, "bottom")),
                        s = Y(e, "x"),
                        c = Y(e, "y");
                    return {
                        fullSize: n,
                        leftAndTop: r.concat(o),
                        rightAndBottom: i.concat(c).concat(a).concat(s),
                        chartArea: $(e, "chartArea"),
                        vertical: r.concat(i).concat(c),
                        horizontal: o.concat(a).concat(s)
                    }
                }(t.boxes),
                u = c.vertical,
                l = c.horizontal;
            Object(r.e)(t.boxes, t => {
                "function" == typeof t.beforeLayout && t.beforeLayout()
            });
            const f = u.reduce((t, e) => e.box.options && !1 === e.box.options.display ? t : t + 1, 0) || 1,
                h = Object.freeze({
                    outerWidth: e,
                    outerHeight: n,
                    padding: o,
                    availableWidth: a,
                    availableHeight: s,
                    vBoxMaxWidth: a / 2 / f,
                    hBoxMaxHeight: s / 2
                }),
                d = Object.assign({}, o);
            X(d, Object(r.d)(i));
            const p = Object.assign({
                maxPadding: d,
                w: a,
                h: s,
                x: o.left,
                y: o.top
            }, o);
            ! function(t, e) {
                let n, r, i;
                for (n = 0, r = t.length; n < r; ++n) i = t[n], i.horizontal ? (i.width = i.box.fullSize && e.availableWidth, i.height = e.hBoxMaxHeight) : (i.width = e.vBoxMaxWidth, i.height = i.box.fullSize && e.availableHeight)
            }(u.concat(l), h), Z(c.fullSize, p, h), Z(u, p, h), Z(l, p, h) && Z(u, p, h),
                function(t) {
                    const e = t.maxPadding;

                    function n(n) {
                        const r = Math.max(e[n] - t[n], 0);
                        return t[n] += r, r
                    }
                    t.y += n("top"), t.x += n("left"), n("right"), n("bottom")
                }(p), Q(c.leftAndTop, p, h), p.x += p.w, p.y += p.h, Q(c.rightAndBottom, p, h), t.chartArea = {
                    left: p.left,
                    top: p.top,
                    right: p.left + p.w,
                    bottom: p.top + p.h,
                    height: p.h,
                    width: p.w
                }, Object(r.e)(c.chartArea, e => {
                    const n = e.box;
                    Object.assign(n, t.chartArea), n.update(p.w, p.h)
                })
        }
    };
    class et {
        acquireContext(t, e) {}
        releaseContext(t) {
            return !1
        }
        addEventListener(t, e, n) {}
        removeEventListener(t, e, n) {}
        getDevicePixelRatio() {
            return 1
        }
        getMaximumSize(t, e, n, r) {
            return e = Math.max(0, e || t.width), n = n || t.height, {
                width: e,
                height: Math.max(0, r ? Math.floor(e / r) : n)
            }
        }
        isAttached(t) {
            return !0
        }
    }
    class nt extends et {
        acquireContext(t) {
            return t && t.getContext && t.getContext("2d") || null
        }
    }
    const rt = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup",
            pointerenter: "mouseenter",
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointerleave: "mouseout",
            pointerout: "mouseout"
        },
        it = t => null === t || "" === t;
    const ot = !!r.k && {
        passive: !0
    };

    function at(t, e, n) {
        t.canvas.removeEventListener(e, n, ot)
    }

    function st(t, e, n) {
        const i = t.canvas,
            o = i && Object(r.g)(i) || i,
            a = new MutationObserver(t => {
                const e = Object(r.g)(o);
                t.forEach(t => {
                    for (let r = 0; r < t.addedNodes.length; r++) {
                        const i = t.addedNodes[r];
                        i !== o && i !== e || n(t.target)
                    }
                })
            });
        return a.observe(document, {
            childList: !0,
            subtree: !0
        }), a
    }

    function ct(t, e, n) {
        const i = t.canvas,
            o = i && Object(r.g)(i);
        if (!o) return;
        const a = new MutationObserver(t => {
            t.forEach(t => {
                for (let e = 0; e < t.removedNodes.length; e++)
                    if (t.removedNodes[e] === i) {
                        n();
                        break
                    }
            })
        });
        return a.observe(o, {
            childList: !0
        }), a
    }
    const ut = new Map;
    let lt = 0;

    function ft() {
        const t = window.devicePixelRatio;
        t !== lt && (lt = t, ut.forEach((e, n) => {
            n.currentDevicePixelRatio !== t && e()
        }))
    }

    function ht(t, e, n) {
        const i = t.canvas,
            o = i && Object(r.g)(i);
        if (!o) return;
        const a = Object(r.j)((t, e) => {
                const r = o.clientWidth;
                n(t, e), r < o.clientWidth && n()
            }, window),
            s = new ResizeObserver(t => {
                const e = t[0],
                    n = e.contentRect.width,
                    r = e.contentRect.height;
                0 === n && 0 === r || a(n, r)
            });
        return s.observe(o),
            function(t, e) {
                ut.size || window.addEventListener("resize", ft), ut.set(t, e)
            }(t, a), s
    }

    function dt(t, e, n) {
        n && n.disconnect(), "resize" === e && function(t) {
            ut.delete(t), ut.size || window.removeEventListener("resize", ft)
        }(t)
    }

    function pt(t, e, n) {
        const i = t.canvas,
            o = Object(r.j)(e => {
                null !== t.ctx && n(function(t, e) {
                    const n = rt[t.type] || t.type,
                        {
                            x: i,
                            y: o
                        } = Object(r.Sb)(t, e);
                    return {
                        type: n,
                        chart: e,
                        native: t,
                        x: void 0 !== i ? i : null,
                        y: void 0 !== o ? o : null
                    }
                }(e, t))
            }, t, t => {
                const e = t[0];
                return [e, e.offsetX, e.offsetY]
            });
        return function(t, e, n) {
            t.addEventListener(e, n, ot)
        }(i, e, o), o
    }
    class gt extends et {
        acquireContext(t, e) {
            const n = t && t.getContext && t.getContext("2d");
            return n && n.canvas === t ? (function(t, e) {
                const n = t.style,
                    i = t.getAttribute("height"),
                    o = t.getAttribute("width");
                if (t.$chartjs = {
                        initial: {
                            height: i,
                            width: o,
                            style: {
                                display: n.display,
                                height: n.height,
                                width: n.width
                            }
                        }
                    }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", it(o)) {
                    const e = Object(r.h)(t, "width");
                    void 0 !== e && (t.width = e)
                }
                if (it(i))
                    if ("" === t.style.height) t.height = t.width / (e || 2);
                    else {
                        const e = Object(r.h)(t, "height");
                        void 0 !== e && (t.height = e)
                    }
            }(t, e), n) : null
        }
        releaseContext(t) {
            const e = t.canvas;
            if (!e.$chartjs) return !1;
            const n = e.$chartjs.initial;
            ["height", "width"].forEach(t => {
                const i = n[t];
                Object(r.Cb)(i) ? e.removeAttribute(t) : e.setAttribute(t, i)
            });
            const i = n.style || {};
            return Object.keys(i).forEach(t => {
                e.style[t] = i[t]
            }), e.width = e.width, delete e.$chartjs, !0
        }
        addEventListener(t, e, n) {
            this.removeEventListener(t, e);
            const r = t.$proxies || (t.$proxies = {}),
                i = {
                    attach: st,
                    detach: ct,
                    resize: ht
                }[e] || pt;
            r[e] = i(t, e, n)
        }
        removeEventListener(t, e) {
            const n = t.$proxies || (t.$proxies = {}),
                r = n[e];
            if (!r) return;
            ({
                attach: dt,
                detach: dt,
                resize: dt
            }[e] || at)(t, e, r), n[e] = void 0
        }
        getDevicePixelRatio() {
            return window.devicePixelRatio
        }
        getMaximumSize(t, e, n, i) {
            return Object(r.f)(t, e, n, i)
        }
        isAttached(t) {
            const e = Object(r.g)(t);
            return !(!e || !Object(r.g)(e))
        }
    }
    class bt {
        constructor() {
            this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0
        }
        tooltipPosition(t) {
            const {
                x: e,
                y: n
            } = this.getProps(["x", "y"], t);
            return {
                x: e,
                y: n
            }
        }
        hasValue() {
            return Object(r.Pb)(this.x) && Object(r.Pb)(this.y)
        }
        getProps(t, e) {
            const n = this,
                r = this.$animations;
            if (!e || !r) return n;
            const i = {};
            return t.forEach(t => {
                i[t] = r[t] && r[t].active() ? r[t]._to : n[t]
            }), i
        }
    }
    bt.defaults = {}, bt.defaultRoutes = void 0;
    const vt = {
        values: t => Object(r.ub)(t) ? t : "" + t,
        numeric(t, e, n) {
            if (0 === t) return "0";
            const i = this.chart.options.locale;
            let o, a = t;
            if (n.length > 1) {
                const e = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
                (e < 1e-4 || e > 1e15) && (o = "scientific"), a = function(t, e) {
                    let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
                    Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
                    return n
                }(t, n)
            }
            const s = Object(r.l)(Math.abs(a)),
                c = Math.max(Math.min(-1 * Math.floor(s), 20), 0),
                u = {
                    notation: o,
                    minimumFractionDigits: c,
                    maximumFractionDigits: c
                };
            return Object.assign(u, this.options.ticks.format), Object(r.Ib)(t, i, u)
        },
        logarithmic(t, e, n) {
            if (0 === t) return "0";
            const i = t / Math.pow(10, Math.floor(Object(r.l)(t)));
            return 1 === i || 2 === i || 5 === i ? vt.numeric.call(this, t, e, n) : ""
        }
    };
    var mt = {
        formatters: vt
    };

    function yt(t, e) {
        const n = t.options.ticks,
            i = n.maxTicksLimit || function(t) {
                const e = t.options.offset,
                    n = t._tickSize(),
                    r = t._length / n + (e ? 0 : 1),
                    i = t._maxLength / n;
                return Math.floor(Math.min(r, i))
            }(t),
            o = n.major.enabled ? function(t) {
                const e = [];
                let n, r;
                for (n = 0, r = t.length; n < r; n++) t[n].major && e.push(n);
                return e
            }(e) : [],
            a = o.length,
            s = o[0],
            c = o[a - 1],
            u = [];
        if (a > i) return function(t, e, n, r) {
            let i, o = 0,
                a = n[0];
            for (r = Math.ceil(r), i = 0; i < t.length; i++) i === a && (e.push(t[i]), o++, a = n[o * r])
        }(e, u, o, a / i), u;
        const l = function(t, e, n) {
            const i = function(t) {
                    const e = t.length;
                    let n, r;
                    if (e < 2) return !1;
                    for (r = t[0], n = 1; n < e; ++n)
                        if (t[n] - t[n - 1] !== r) return !1;
                    return r
                }(t),
                o = e.length / n;
            if (!i) return Math.max(o, 1);
            const a = Object(r.m)(i);
            for (let t = 0, e = a.length - 1; t < e; t++) {
                const e = a[t];
                if (e > o) return e
            }
            return Math.max(o, 1)
        }(o, e, i);
        if (a > 0) {
            let t, n;
            const i = a > 1 ? Math.round((c - s) / (a - 1)) : null;
            for (xt(e, u, l, Object(r.Cb)(i) ? 0 : s - i, s), t = 0, n = a - 1; t < n; t++) xt(e, u, l, o[t], o[t + 1]);
            return xt(e, u, l, c, Object(r.Cb)(i) ? e.length : c + i), u
        }
        return xt(e, u, l), u
    }

    function xt(t, e, n, i, o) {
        const a = Object(r.Ob)(i, 0),
            s = Math.min(Object(r.Ob)(o, t.length), t.length);
        let c, u, l, f = 0;
        for (n = Math.ceil(n), o && (c = o - i, n = c / Math.floor(c / n)), l = a; l < 0;) f++, l = Math.round(a + f * n);
        for (u = Math.max(a, 0); u < s; u++) u === l && (e.push(t[u]), f++, l = Math.round(a + f * n))
    }
    r.wb.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t, e) => e.lineWidth,
            tickColor: (t, e) => e.color,
            offset: !1,
            borderDash: [],
            borderDashOffset: 0,
            borderWidth: 1
        },
        title: {
            display: !1,
            text: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: mt.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
        }
    }), r.wb.route("scale.ticks", "color", "", "color"), r.wb.route("scale.grid", "color", "", "borderColor"), r.wb.route("scale.grid", "borderColor", "", "borderColor"), r.wb.route("scale.title", "color", "", "color"), r.wb.describe("scale", {
        _fallback: !1,
        _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t,
        _indexable: t => "borderDash" !== t && "tickBorderDash" !== t
    }), r.wb.describe("scales", {
        _fallback: "scale"
    });
    const _t = (t, e, n) => "top" === e || "left" === e ? t[e] + n : t[e] - n;

    function wt(t, e) {
        const n = [],
            r = t.length / e,
            i = t.length;
        let o = 0;
        for (; o < i; o += r) n.push(t[Math.floor(o)]);
        return n
    }

    function Ot(t, e, n) {
        const r = t.ticks.length,
            i = Math.min(e, r - 1),
            o = t._startPixel,
            a = t._endPixel;
        let s, c = t.getPixelForTick(i);
        if (!(n && (s = 1 === r ? Math.max(c - o, a - c) : 0 === e ? (t.getPixelForTick(1) - c) / 2 : (c - t.getPixelForTick(i - 1)) / 2, c += i < e ? s : -s, c < o - 1e-6 || c > a + 1e-6))) return c
    }

    function jt(t) {
        return t.drawTicks ? t.tickLength : 0
    }

    function St(t, e) {
        if (!t.display) return 0;
        const n = Object(r.x)(t.font, e),
            i = Object(r.d)(t.padding);
        return (Object(r.ub)(t.text) ? t.text.length : 1) * n.lineHeight + i.height
    }

    function Mt(t, e, n) {
        let i = Object(r.y)(t);
        return (n && "right" !== e || !n && "right" === e) && (i = (t => "left" === t ? "right" : "right" === t ? "left" : t)(i)), i
    }
    class kt extends bt {
        constructor(t) {
            super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0
        }
        init(t) {
            const e = this;
            e.options = t.setContext(e.getContext()), e.axis = t.axis, e._userMin = e.parse(t.min), e._userMax = e.parse(t.max), e._suggestedMin = e.parse(t.suggestedMin), e._suggestedMax = e.parse(t.suggestedMax)
        }
        parse(t, e) {
            return t
        }
        getUserBounds() {
            let {
                _userMin: t,
                _userMax: e,
                _suggestedMin: n,
                _suggestedMax: i
            } = this;
            return t = Object(r.n)(t, Number.POSITIVE_INFINITY), e = Object(r.n)(e, Number.NEGATIVE_INFINITY), n = Object(r.n)(n, Number.POSITIVE_INFINITY), i = Object(r.n)(i, Number.NEGATIVE_INFINITY), {
                min: Object(r.n)(t, n),
                max: Object(r.n)(e, i),
                minDefined: Object(r.zb)(t),
                maxDefined: Object(r.zb)(e)
            }
        }
        getMinMax(t) {
            const e = this;
            let n, {
                min: i,
                max: o,
                minDefined: a,
                maxDefined: s
            } = e.getUserBounds();
            if (a && s) return {
                min: i,
                max: o
            };
            const c = e.getMatchingVisibleMetas();
            for (let r = 0, u = c.length; r < u; ++r) n = c[r].controller.getMinMax(e, t), a || (i = Math.min(i, n.min)), s || (o = Math.max(o, n.max));
            return {
                min: Object(r.n)(i, Object(r.n)(o, i)),
                max: Object(r.n)(o, Object(r.n)(i, o))
            }
        }
        getPadding() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            }
        }
        getTicks() {
            return this.ticks
        }
        getLabels() {
            const t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
        }
        beforeLayout() {
            this._cache = {}, this._dataLimitsCached = !1
        }
        beforeUpdate() {
            Object(r.o)(this.options.beforeUpdate, [this])
        }
        update(t, e, n) {
            const i = this,
                o = i.options.ticks,
                a = o.sampleSize;
            i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i._margins = n = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, n), i.ticks = null, i._labelSizes = null, i._gridLineItems = null, i._labelItems = null, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i._maxLength = i.isHorizontal() ? i.width + n.left + n.right : i.height + n.top + n.bottom, i._dataLimitsCached || (i.beforeDataLimits(), i.determineDataLimits(), i.afterDataLimits(), i._range = Object(r.p)(i, i.options.grace), i._dataLimitsCached = !0), i.beforeBuildTicks(), i.ticks = i.buildTicks() || [], i.afterBuildTicks();
            const s = a < i.ticks.length;
            i._convertTicksToLabels(s ? wt(i.ticks, a) : i.ticks), i.configure(), i.beforeCalculateLabelRotation(), i.calculateLabelRotation(), i.afterCalculateLabelRotation(), o.display && (o.autoSkip || "auto" === o.source) && (i.ticks = yt(i, i.ticks), i._labelSizes = null), s && i._convertTicksToLabels(i.ticks), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate()
        }
        configure() {
            const t = this;
            let e, n, r = t.options.reverse;
            t.isHorizontal() ? (e = t.left, n = t.right) : (e = t.top, n = t.bottom, r = !r), t._startPixel = e, t._endPixel = n, t._reversePixels = r, t._length = n - e, t._alignToPixels = t.options.alignToPixels
        }
        afterUpdate() {
            Object(r.o)(this.options.afterUpdate, [this])
        }
        beforeSetDimensions() {
            Object(r.o)(this.options.beforeSetDimensions, [this])
        }
        setDimensions() {
            const t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
        }
        afterSetDimensions() {
            Object(r.o)(this.options.afterSetDimensions, [this])
        }
        _callHooks(t) {
            this.chart.notifyPlugins(t, this.getContext()), Object(r.o)(this.options[t], [this])
        }
        beforeDataLimits() {
            this._callHooks("beforeDataLimits")
        }
        determineDataLimits() {}
        afterDataLimits() {
            this._callHooks("afterDataLimits")
        }
        beforeBuildTicks() {
            this._callHooks("beforeBuildTicks")
        }
        buildTicks() {
            return []
        }
        afterBuildTicks() {
            this._callHooks("afterBuildTicks")
        }
        beforeTickToLabelConversion() {
            Object(r.o)(this.options.beforeTickToLabelConversion, [this])
        }
        generateTickLabels(t) {
            const e = this,
                n = e.options.ticks;
            let i, o, a;
            for (i = 0, o = t.length; i < o; i++) a = t[i], a.label = Object(r.o)(n.callback, [a.value, i, t], e);
            for (i = 0; i < o; i++) Object(r.Cb)(t[i].label) && (t.splice(i, 1), o--, i--)
        }
        afterTickToLabelConversion() {
            Object(r.o)(this.options.afterTickToLabelConversion, [this])
        }
        beforeCalculateLabelRotation() {
            Object(r.o)(this.options.beforeCalculateLabelRotation, [this])
        }
        calculateLabelRotation() {
            const t = this,
                e = t.options,
                n = e.ticks,
                i = t.ticks.length,
                o = n.minRotation || 0,
                a = n.maxRotation;
            let s, c, u, l = o;
            if (!t._isVisible() || !n.display || o >= a || i <= 1 || !t.isHorizontal()) return void(t.labelRotation = o);
            const f = t._getLabelSizes(),
                h = f.widest.width,
                d = f.highest.height,
                p = Object(r.Qb)(t.chart.width - h, 0, t.maxWidth);
            s = e.offset ? t.maxWidth / i : p / (i - 1), h + 6 > s && (s = p / (i - (e.offset ? .5 : 1)), c = t.maxHeight - jt(e.grid) - n.padding - St(e.title, t.chart.options.font), u = Math.sqrt(h * h + d * d), l = Object(r.r)(Math.min(Math.asin(Math.min((f.highest.height + 6) / s, 1)), Math.asin(Math.min(c / u, 1)) - Math.asin(d / u))), l = Math.max(o, Math.min(a, l))), t.labelRotation = l
        }
        afterCalculateLabelRotation() {
            Object(r.o)(this.options.afterCalculateLabelRotation, [this])
        }
        beforeFit() {
            Object(r.o)(this.options.beforeFit, [this])
        }
        fit() {
            const t = this,
                e = {
                    width: 0,
                    height: 0
                },
                {
                    chart: n,
                    options: {
                        ticks: i,
                        title: o,
                        grid: a
                    }
                } = t,
                s = t._isVisible(),
                c = t.isHorizontal();
            if (s) {
                const s = St(o, n.options.font);
                if (c ? (e.width = t.maxWidth, e.height = jt(a) + s) : (e.height = t.maxHeight, e.width = jt(a) + s), i.display && t.ticks.length) {
                    const {
                        first: n,
                        last: o,
                        widest: a,
                        highest: s
                    } = t._getLabelSizes(), u = 2 * i.padding, l = Object(r.Mb)(t.labelRotation), f = Math.cos(l), h = Math.sin(l);
                    if (c) {
                        const n = i.mirror ? 0 : h * a.width + f * s.height;
                        e.height = Math.min(t.maxHeight, e.height + n + u)
                    } else {
                        const n = i.mirror ? 0 : f * a.width + h * s.height;
                        e.width = Math.min(t.maxWidth, e.width + n + u)
                    }
                    t._calculatePadding(n, o, h, f)
                }
            }
            t._handleMargins(), c ? (t.width = t._length = n.width - t._margins.left - t._margins.right, t.height = e.height) : (t.width = e.width, t.height = t._length = n.height - t._margins.top - t._margins.bottom)
        }
        _calculatePadding(t, e, n, r) {
            const i = this,
                {
                    ticks: {
                        align: o,
                        padding: a
                    },
                    position: s
                } = i.options,
                c = 0 !== i.labelRotation,
                u = "top" !== s && "x" === i.axis;
            if (i.isHorizontal()) {
                const s = i.getPixelForTick(0) - i.left,
                    l = i.right - i.getPixelForTick(i.ticks.length - 1);
                let f = 0,
                    h = 0;
                c ? u ? (f = r * t.width, h = n * e.height) : (f = n * t.height, h = r * e.width) : "start" === o ? h = e.width : "end" === o ? f = t.width : (f = t.width / 2, h = e.width / 2), i.paddingLeft = Math.max((f - s + a) * i.width / (i.width - s), 0), i.paddingRight = Math.max((h - l + a) * i.width / (i.width - l), 0)
            } else {
                let n = e.height / 2,
                    r = t.height / 2;
                "start" === o ? (n = 0, r = t.height) : "end" === o && (n = e.height, r = 0), i.paddingTop = n + a, i.paddingBottom = r + a
            }
        }
        _handleMargins() {
            const t = this;
            t._margins && (t._margins.left = Math.max(t.paddingLeft, t._margins.left), t._margins.top = Math.max(t.paddingTop, t._margins.top), t._margins.right = Math.max(t.paddingRight, t._margins.right), t._margins.bottom = Math.max(t.paddingBottom, t._margins.bottom))
        }
        afterFit() {
            Object(r.o)(this.options.afterFit, [this])
        }
        isHorizontal() {
            const {
                axis: t,
                position: e
            } = this.options;
            return "top" === e || "bottom" === e || "x" === t
        }
        isFullSize() {
            return this.options.fullSize
        }
        _convertTicksToLabels(t) {
            this.beforeTickToLabelConversion(), this.generateTickLabels(t), this.afterTickToLabelConversion()
        }
        _getLabelSizes() {
            const t = this;
            let e = t._labelSizes;
            if (!e) {
                const n = t.options.ticks.sampleSize;
                let r = t.ticks;
                n < r.length && (r = wt(r, n)), t._labelSizes = e = t._computeLabelSizes(r, r.length)
            }
            return e
        }
        _computeLabelSizes(t, e) {
            const {
                ctx: n,
                _longestTextCache: i
            } = this, o = [], a = [];
            let s, c, u, l, f, h, d, p, g, b, v, m = 0,
                y = 0;
            for (s = 0; s < e; ++s) {
                if (l = t[s].label, f = this._resolveTickFontOptions(s), n.font = h = f.string, d = i[h] = i[h] || {
                        data: {},
                        gc: []
                    }, p = f.lineHeight, g = b = 0, Object(r.Cb)(l) || Object(r.ub)(l)) {
                    if (Object(r.ub)(l))
                        for (c = 0, u = l.length; c < u; ++c) v = l[c], Object(r.Cb)(v) || Object(r.ub)(v) || (g = Object(r.s)(n, d.data, d.gc, g, v), b += p)
                } else g = Object(r.s)(n, d.data, d.gc, g, l), b = p;
                o.push(g), a.push(b), m = Math.max(g, m), y = Math.max(b, y)
            }! function(t, e) {
                Object(r.e)(t, t => {
                    const n = t.gc,
                        r = n.length / 2;
                    let i;
                    if (r > e) {
                        for (i = 0; i < r; ++i) delete t.data[n[i]];
                        n.splice(0, r)
                    }
                })
            }(i, e);
            const x = o.indexOf(m),
                _ = a.indexOf(y),
                w = t => ({
                    width: o[t] || 0,
                    height: a[t] || 0
                });
            return {
                first: w(0),
                last: w(e - 1),
                widest: w(x),
                highest: w(_),
                widths: o,
                heights: a
            }
        }
        getLabelForValue(t) {
            return t
        }
        getPixelForValue(t, e) {
            return NaN
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
        }
        getPixelForDecimal(t) {
            const e = this;
            e._reversePixels && (t = 1 - t);
            const n = e._startPixel + t * e._length;
            return Object(r.t)(e._alignToPixels ? Object(r.v)(e.chart, n, 0) : n)
        }
        getDecimalForPixel(t) {
            const e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e
        }
        getBasePixel() {
            return this.getPixelForValue(this.getBaseValue())
        }
        getBaseValue() {
            const {
                min: t,
                max: e
            } = this;
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
        }
        getContext(t) {
            const e = this,
                n = e.ticks || [];
            if (t >= 0 && t < n.length) {
                const r = n[t];
                return r.$context || (r.$context = function(t, e, n) {
                    return Object.assign(Object.create(t), {
                        tick: n,
                        index: e,
                        type: "tick"
                    })
                }(e.getContext(), t, r))
            }
            return e.$context || (e.$context = (r = e.chart.getContext(), i = e, Object.assign(Object.create(r), {
                scale: i,
                type: "scale"
            })));
            var r, i
        }
        _tickSize() {
            const t = this.options.ticks,
                e = Object(r.Mb)(this.labelRotation),
                n = Math.abs(Math.cos(e)),
                i = Math.abs(Math.sin(e)),
                o = this._getLabelSizes(),
                a = t.autoSkipPadding || 0,
                s = o ? o.widest.width + a : 0,
                c = o ? o.highest.height + a : 0;
            return this.isHorizontal() ? c * n > s * i ? s / n : c / i : c * i < s * n ? c / n : s / i
        }
        _isVisible() {
            const t = this.options.display;
            return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0
        }
        _computeGridLineItems(t) {
            const e = this,
                n = e.axis,
                i = e.chart,
                o = e.options,
                {
                    grid: a,
                    position: s
                } = o,
                c = a.offset,
                u = e.isHorizontal(),
                l = e.ticks.length + (c ? 1 : 0),
                f = jt(a),
                h = [],
                d = a.setContext(e.getContext()),
                p = d.drawBorder ? d.borderWidth : 0,
                g = p / 2,
                b = function(t) {
                    return Object(r.v)(i, t, p)
                };
            let v, m, y, x, _, w, O, j, S, M, k, E;
            if ("top" === s) v = b(e.bottom), w = e.bottom - f, j = v - g, M = b(t.top) + g, E = t.bottom;
            else if ("bottom" === s) v = b(e.top), M = t.top, E = b(t.bottom) - g, w = v + g, j = e.top + f;
            else if ("left" === s) v = b(e.right), _ = e.right - f, O = v - g, S = b(t.left) + g, k = t.right;
            else if ("right" === s) v = b(e.left), S = t.left, k = b(t.right) - g, _ = v + g, O = e.left + f;
            else if ("x" === n) {
                if ("center" === s) v = b((t.top + t.bottom) / 2 + .5);
                else if (Object(r.Bb)(s)) {
                    const t = Object.keys(s)[0],
                        n = s[t];
                    v = b(e.chart.scales[t].getPixelForValue(n))
                }
                M = t.top, E = t.bottom, w = v + g, j = w + f
            } else if ("y" === n) {
                if ("center" === s) v = b((t.left + t.right) / 2);
                else if (Object(r.Bb)(s)) {
                    const t = Object.keys(s)[0],
                        n = s[t];
                    v = b(e.chart.scales[t].getPixelForValue(n))
                }
                _ = v - g, O = _ - f, S = t.left, k = t.right
            }
            for (m = 0; m < l; ++m) {
                const t = a.setContext(e.getContext(m)),
                    n = t.lineWidth,
                    o = t.color,
                    s = a.borderDash || [],
                    l = t.borderDashOffset,
                    f = t.tickWidth,
                    d = t.tickColor,
                    p = t.tickBorderDash || [],
                    g = t.tickBorderDashOffset;
                y = Ot(e, m, c), void 0 !== y && (x = Object(r.v)(i, y, n), u ? _ = O = S = k = x : w = j = M = E = x, h.push({
                    tx1: _,
                    ty1: w,
                    tx2: O,
                    ty2: j,
                    x1: S,
                    y1: M,
                    x2: k,
                    y2: E,
                    width: n,
                    color: o,
                    borderDash: s,
                    borderDashOffset: l,
                    tickWidth: f,
                    tickColor: d,
                    tickBorderDash: p,
                    tickBorderDashOffset: g
                }))
            }
            return e._ticksLength = l, e._borderValue = v, h
        }
        _computeLabelItems(t) {
            const e = this,
                n = e.axis,
                i = e.options,
                {
                    position: o,
                    ticks: a
                } = i,
                s = e.isHorizontal(),
                c = e.ticks,
                {
                    align: u,
                    crossAlign: l,
                    padding: f,
                    mirror: h
                } = a,
                d = jt(i.grid),
                p = d + f,
                g = h ? -f : p,
                b = -Object(r.Mb)(e.labelRotation),
                v = [];
            let m, y, x, _, w, O, j, S, M, k, E, A, P = "middle";
            if ("top" === o) O = e.bottom - g, j = e._getXAxisLabelAlignment();
            else if ("bottom" === o) O = e.top + g, j = e._getXAxisLabelAlignment();
            else if ("left" === o) {
                const t = e._getYAxisLabelAlignment(d);
                j = t.textAlign, w = t.x
            } else if ("right" === o) {
                const t = e._getYAxisLabelAlignment(d);
                j = t.textAlign, w = t.x
            } else if ("x" === n) {
                if ("center" === o) O = (t.top + t.bottom) / 2 + p;
                else if (Object(r.Bb)(o)) {
                    const t = Object.keys(o)[0],
                        n = o[t];
                    O = e.chart.scales[t].getPixelForValue(n) + p
                }
                j = e._getXAxisLabelAlignment()
            } else if ("y" === n) {
                if ("center" === o) w = (t.left + t.right) / 2 - p;
                else if (Object(r.Bb)(o)) {
                    const t = Object.keys(o)[0],
                        n = o[t];
                    w = e.chart.scales[t].getPixelForValue(n)
                }
                j = e._getYAxisLabelAlignment(d).textAlign
            }
            "y" === n && ("start" === u ? P = "top" : "end" === u && (P = "bottom"));
            const T = e._getLabelSizes();
            for (m = 0, y = c.length; m < y; ++m) {
                x = c[m], _ = x.label;
                const t = a.setContext(e.getContext(m));
                S = e.getPixelForTick(m) + a.labelOffset, M = e._resolveTickFontOptions(m), k = M.lineHeight, E = Object(r.ub)(_) ? _.length : 1;
                const n = E / 2,
                    i = t.color,
                    u = t.textStrokeColor,
                    f = t.textStrokeWidth;
                let d;
                if (s ? (w = S, A = "top" === o ? "near" === l || 0 !== b ? -E * k + k / 2 : "center" === l ? -T.highest.height / 2 - n * k + k : -T.highest.height + k / 2 : "near" === l || 0 !== b ? k / 2 : "center" === l ? T.highest.height / 2 - n * k : T.highest.height - E * k, h && (A *= -1)) : (O = S, A = (1 - E) * k / 2), t.showLabelBackdrop) {
                    const e = Object(r.d)(t.backdropPadding),
                        n = T.heights[m],
                        i = T.widths[m];
                    let o = O + A - e.top,
                        a = w - e.left;
                    switch (P) {
                        case "middle":
                            o -= n / 2;
                            break;
                        case "bottom":
                            o -= n
                    }
                    switch (j) {
                        case "center":
                            a -= i / 2;
                            break;
                        case "right":
                            a -= i
                    }
                    d = {
                        left: a,
                        top: o,
                        width: i + e.width,
                        height: n + e.height,
                        color: t.backdropColor
                    }
                }
                v.push({
                    rotation: b,
                    label: _,
                    font: M,
                    color: i,
                    strokeColor: u,
                    strokeWidth: f,
                    textOffset: A,
                    textAlign: j,
                    textBaseline: P,
                    translation: [w, O],
                    backdrop: d
                })
            }
            return v
        }
        _getXAxisLabelAlignment() {
            const {
                position: t,
                ticks: e
            } = this.options;
            if (-Object(r.Mb)(this.labelRotation)) return "top" === t ? "left" : "right";
            let n = "center";
            return "start" === e.align ? n = "left" : "end" === e.align && (n = "right"), n
        }
        _getYAxisLabelAlignment(t) {
            const e = this,
                {
                    position: n,
                    ticks: {
                        crossAlign: r,
                        mirror: i,
                        padding: o
                    }
                } = e.options,
                a = t + o,
                s = e._getLabelSizes().widest.width;
            let c, u;
            return "left" === n ? i ? (c = "left", u = e.right + o) : (u = e.right - a, "near" === r ? c = "right" : "center" === r ? (c = "center", u -= s / 2) : (c = "left", u = e.left)) : "right" === n ? i ? (c = "right", u = e.left + o) : (u = e.left + a, "near" === r ? c = "left" : "center" === r ? (c = "center", u += s / 2) : (c = "right", u = e.right)) : c = "right", {
                textAlign: c,
                x: u
            }
        }
        _computeLabelArea() {
            const t = this;
            if (t.options.ticks.mirror) return;
            const e = t.chart,
                n = t.options.position;
            return "left" === n || "right" === n ? {
                top: 0,
                left: t.left,
                bottom: e.height,
                right: t.right
            } : "top" === n || "bottom" === n ? {
                top: t.top,
                left: 0,
                bottom: t.bottom,
                right: e.width
            } : void 0
        }
        drawBackground() {
            const {
                ctx: t,
                options: {
                    backgroundColor: e
                },
                left: n,
                top: r,
                width: i,
                height: o
            } = this;
            e && (t.save(), t.fillStyle = e, t.fillRect(n, r, i, o), t.restore())
        }
        getLineWidthForValue(t) {
            const e = this,
                n = e.options.grid;
            if (!e._isVisible() || !n.display) return 0;
            const r = e.ticks.findIndex(e => e.value === t);
            if (r >= 0) {
                return n.setContext(e.getContext(r)).lineWidth
            }
            return 0
        }
        drawGrid(t) {
            const e = this,
                n = e.options.grid,
                r = e.ctx,
                i = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t));
            let o, a;
            const s = (t, e, n) => {
                n.width && n.color && (r.save(), r.lineWidth = n.width, r.strokeStyle = n.color, r.setLineDash(n.borderDash || []), r.lineDashOffset = n.borderDashOffset, r.beginPath(), r.moveTo(t.x, t.y), r.lineTo(e.x, e.y), r.stroke(), r.restore())
            };
            if (n.display)
                for (o = 0, a = i.length; o < a; ++o) {
                    const t = i[o];
                    n.drawOnChartArea && s({
                        x: t.x1,
                        y: t.y1
                    }, {
                        x: t.x2,
                        y: t.y2
                    }, t), n.drawTicks && s({
                        x: t.tx1,
                        y: t.ty1
                    }, {
                        x: t.tx2,
                        y: t.ty2
                    }, {
                        color: t.tickColor,
                        width: t.tickWidth,
                        borderDash: t.tickBorderDash,
                        borderDashOffset: t.tickBorderDashOffset
                    })
                }
        }
        drawBorder() {
            const t = this,
                {
                    chart: e,
                    ctx: n,
                    options: {
                        grid: i
                    }
                } = t,
                o = i.setContext(t.getContext()),
                a = i.drawBorder ? o.borderWidth : 0;
            if (!a) return;
            const s = i.setContext(t.getContext(0)).lineWidth,
                c = t._borderValue;
            let u, l, f, h;
            t.isHorizontal() ? (u = Object(r.v)(e, t.left, a) - a / 2, l = Object(r.v)(e, t.right, s) + s / 2, f = h = c) : (f = Object(r.v)(e, t.top, a) - a / 2, h = Object(r.v)(e, t.bottom, s) + s / 2, u = l = c), n.save(), n.lineWidth = o.borderWidth, n.strokeStyle = o.borderColor, n.beginPath(), n.moveTo(u, f), n.lineTo(l, h), n.stroke(), n.restore()
        }
        drawLabels(t) {
            const e = this;
            if (!e.options.ticks.display) return;
            const n = e.ctx,
                i = e._computeLabelArea();
            i && Object(r.Db)(n, i);
            const o = e._labelItems || (e._labelItems = e._computeLabelItems(t));
            let a, s;
            for (a = 0, s = o.length; a < s; ++a) {
                const t = o[a],
                    e = t.font,
                    i = t.label;
                t.backdrop && (n.fillStyle = t.backdrop.color, n.fillRect(t.backdrop.left, t.backdrop.top, t.backdrop.width, t.backdrop.height));
                let s = t.textOffset;
                Object(r.w)(n, i, 0, s, e, t)
            }
            i && Object(r.Fb)(n)
        }
        drawTitle() {
            const {
                ctx: t,
                options: {
                    position: e,
                    title: n,
                    reverse: i
                }
            } = this;
            if (!n.display) return;
            const o = Object(r.x)(n.font),
                a = Object(r.d)(n.padding),
                s = n.align;
            let c = o.lineHeight / 2;
            "bottom" === e ? (c += a.bottom, Object(r.ub)(n.text) && (c += o.lineHeight * (n.text.length - 1))) : c += a.top;
            const {
                titleX: u,
                titleY: l,
                maxWidth: f,
                rotation: h
            } = function(t, e, n, i) {
                const {
                    top: o,
                    left: a,
                    bottom: s,
                    right: c
                } = t;
                let u, l, f, h = 0;
                return t.isHorizontal() ? (l = Object(r.z)(i, a, c), f = _t(t, n, e), u = c - a) : (l = _t(t, n, e), f = Object(r.z)(i, s, o), h = "left" === n ? -r.i : r.i), {
                    titleX: l,
                    titleY: f,
                    maxWidth: u,
                    rotation: h
                }
            }(this, c, e, s);
            Object(r.w)(t, n.text, 0, 0, o, {
                color: n.color,
                maxWidth: f,
                rotation: h,
                textAlign: Mt(s, e, i),
                textBaseline: "middle",
                translation: [u, l]
            })
        }
        draw(t) {
            const e = this;
            e._isVisible() && (e.drawBackground(), e.drawGrid(t), e.drawBorder(), e.drawTitle(), e.drawLabels(t))
        }
        _layers() {
            const t = this,
                e = t.options,
                n = e.ticks && e.ticks.z || 0,
                r = e.grid && e.grid.z || 0;
            return t._isVisible() && t.draw === kt.prototype.draw ? [{
                z: r,
                draw(e) {
                    t.drawBackground(), t.drawGrid(e), t.drawTitle()
                }
            }, {
                z: r + 1,
                draw() {
                    t.drawBorder()
                }
            }, {
                z: n,
                draw(e) {
                    t.drawLabels(e)
                }
            }] : [{
                z: n,
                draw(e) {
                    t.draw(e)
                }
            }]
        }
        getMatchingVisibleMetas(t) {
            const e = this,
                n = e.chart.getSortedVisibleDatasetMetas(),
                r = e.axis + "AxisID",
                i = [];
            let o, a;
            for (o = 0, a = n.length; o < a; ++o) {
                const a = n[o];
                a[r] !== e.id || t && a.type !== t || i.push(a)
            }
            return i
        }
        _resolveTickFontOptions(t) {
            const e = this.options.ticks.setContext(this.getContext(t));
            return Object(r.x)(e.font)
        }
        _maxDigits() {
            const t = this._resolveTickFontOptions(0).lineHeight;
            return this.isHorizontal() ? this.width / t / .7 : this.height / t
        }
    }
    class Et {
        constructor(t, e, n) {
            this.type = t, this.scope = e, this.override = n, this.items = Object.create(null)
        }
        isForType(t) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
        }
        register(t) {
            const e = this,
                n = Object.getPrototypeOf(t);
            let i;
            (function(t) {
                return "id" in t && "defaults" in t
            })(n) && (i = e.register(n));
            const o = e.items,
                a = t.id,
                s = e.scope + "." + a;
            if (!a) throw new Error("class does not have id: " + t);
            return a in o || (o[a] = t, function(t, e, n) {
                const i = Object(r.a)(Object.create(null), [n ? r.wb.get(n) : {}, r.wb.get(e), t.defaults]);
                r.wb.set(e, i), t.defaultRoutes && function(t, e) {
                    Object.keys(e).forEach(n => {
                        const i = n.split("."),
                            o = i.pop(),
                            a = [t].concat(i).join("."),
                            s = e[n].split("."),
                            c = s.pop(),
                            u = s.join(".");
                        r.wb.route(a, o, u, c)
                    })
                }(e, t.defaultRoutes);
                t.descriptors && r.wb.describe(e, t.descriptors)
            }(t, s, i), e.override && r.wb.override(t.id, t.overrides)), s
        }
        get(t) {
            return this.items[t]
        }
        unregister(t) {
            const e = this.items,
                n = t.id,
                i = this.scope;
            n in e && delete e[n], i && n in r.wb[i] && (delete r.wb[i][n], this.override && delete r.A[n])
        }
    }
    var At = new class {
        constructor() {
            this.controllers = new Et(x, "datasets", !0), this.elements = new Et(bt, "elements"), this.plugins = new Et(Object, "plugins"), this.scales = new Et(kt, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]
        }
        add(...t) {
            this._each("register", t)
        }
        remove(...t) {
            this._each("unregister", t)
        }
        addControllers(...t) {
            this._each("register", t, this.controllers)
        }
        addElements(...t) {
            this._each("register", t, this.elements)
        }
        addPlugins(...t) {
            this._each("register", t, this.plugins)
        }
        addScales(...t) {
            this._each("register", t, this.scales)
        }
        getController(t) {
            return this._get(t, this.controllers, "controller")
        }
        getElement(t) {
            return this._get(t, this.elements, "element")
        }
        getPlugin(t) {
            return this._get(t, this.plugins, "plugin")
        }
        getScale(t) {
            return this._get(t, this.scales, "scale")
        }
        removeControllers(...t) {
            this._each("unregister", t, this.controllers)
        }
        removeElements(...t) {
            this._each("unregister", t, this.elements)
        }
        removePlugins(...t) {
            this._each("unregister", t, this.plugins)
        }
        removeScales(...t) {
            this._each("unregister", t, this.scales)
        }
        _each(t, e, n) {
            const i = this;
            [...e].forEach(e => {
                const o = n || i._getRegistryForType(e);
                n || o.isForType(e) || o === i.plugins && e.id ? i._exec(t, o, e) : Object(r.e)(e, e => {
                    const r = n || i._getRegistryForType(e);
                    i._exec(t, r, e)
                })
            })
        }
        _exec(t, e, n) {
            const i = Object(r.D)(t);
            Object(r.o)(n["before" + i], [], n), e[t](n), Object(r.o)(n["after" + i], [], n)
        }
        _getRegistryForType(t) {
            for (let e = 0; e < this._typedRegistries.length; e++) {
                const n = this._typedRegistries[e];
                if (n.isForType(t)) return n
            }
            return this.plugins
        }
        _get(t, e, n) {
            const r = e.get(t);
            if (void 0 === r) throw new Error('"' + t + '" is not a registered ' + n + ".");
            return r
        }
    };
    class Pt {
        constructor() {
            this._init = []
        }
        notify(t, e, n, r) {
            const i = this;
            "beforeInit" === e && (i._init = i._createDescriptors(t, !0), i._notify(i._init, t, "install"));
            const o = r ? i._descriptors(t).filter(r) : i._descriptors(t),
                a = i._notify(o, t, e, n);
            return "destroy" === e && (i._notify(o, t, "stop"), i._notify(i._init, t, "uninstall")), a
        }
        _notify(t, e, n, i) {
            i = i || {};
            for (const o of t) {
                const t = o.plugin,
                    a = t[n],
                    s = [e, i, o.options];
                if (!1 === Object(r.o)(a, s, t) && i.cancelable) return !1
            }
            return !0
        }
        invalidate() {
            Object(r.Cb)(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
        }
        _descriptors(t) {
            if (this._cache) return this._cache;
            const e = this._cache = this._createDescriptors(t);
            return this._notifyStateChanges(t), e
        }
        _createDescriptors(t, e) {
            const n = t && t.config,
                i = Object(r.Ob)(n.options && n.options.plugins, {}),
                o = function(t) {
                    const e = [],
                        n = Object.keys(At.plugins.items);
                    for (let t = 0; t < n.length; t++) e.push(At.getPlugin(n[t]));
                    const r = t.plugins || [];
                    for (let t = 0; t < r.length; t++) {
                        const n = r[t]; - 1 === e.indexOf(n) && e.push(n)
                    }
                    return e
                }(n);
            return !1 !== i || e ? function(t, e, n, r) {
                const i = [],
                    o = t.getContext();
                for (let a = 0; a < e.length; a++) {
                    const s = e[a],
                        c = s.id,
                        u = Tt(n[c], r);
                    null !== u && i.push({
                        plugin: s,
                        options: Dt(t.config, s, u, o)
                    })
                }
                return i
            }(t, o, i, e) : []
        }
        _notifyStateChanges(t) {
            const e = this._oldCache || [],
                n = this._cache,
                r = (t, e) => t.filter(t => !e.some(e => t.plugin.id === e.plugin.id));
            this._notify(r(e, n), t, "stop"), this._notify(r(n, e), t, "start")
        }
    }

    function Tt(t, e) {
        return e || !1 !== t ? !0 === t ? {} : t : null
    }

    function Dt(t, e, n, r) {
        const i = t.pluginScopeKeys(e),
            o = t.getOptionScopes(n, i);
        return t.createResolver(o, r, [""], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0
        })
    }

    function Ct(t, e) {
        const n = r.wb.datasets[t] || {};
        return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || "x"
    }

    function Lt(t, e) {
        return "x" === t || "y" === t ? t : e.axis || ("top" === (n = e.position) || "bottom" === n ? "x" : "left" === n || "right" === n ? "y" : void 0) || t.charAt(0).toLowerCase();
        var n
    }

    function It(t) {
        const e = t.options || (t.options = {});
        e.plugins = Object(r.Ob)(e.plugins, {}), e.scales = function(t, e) {
            const n = r.A[t.type] || {
                    scales: {}
                },
                i = e.scales || {},
                o = Ct(t.type, e),
                a = Object.create(null),
                s = Object.create(null);
            return Object.keys(i).forEach(t => {
                const e = i[t],
                    c = Lt(t, e),
                    u = function(t, e) {
                        return t === e ? "_index_" : "_value_"
                    }(c, o),
                    l = n.scales || {};
                a[c] = a[c] || t, s[t] = Object(r.J)(Object.create(null), [{
                    axis: c
                }, e, l[c], l[u]])
            }), t.data.datasets.forEach(n => {
                const o = n.type || t.type,
                    c = n.indexAxis || Ct(o, e),
                    u = (r.A[o] || {}).scales || {};
                Object.keys(u).forEach(t => {
                    const e = function(t, e) {
                            let n = t;
                            return "_index_" === t ? n = e : "_value_" === t && (n = "x" === e ? "y" : "x"), n
                        }(t, c),
                        o = n[e + "AxisID"] || a[e] || e;
                    s[o] = s[o] || Object.create(null), Object(r.J)(s[o], [{
                        axis: e
                    }, i[o], u[t]])
                })
            }), Object.keys(s).forEach(t => {
                const e = s[t];
                Object(r.J)(e, [r.wb.scales[e.type], r.wb.scale])
            }), s
        }(t, e)
    }

    function Rt(t) {
        return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t
    }
    const Ft = new Map,
        zt = new Set;

    function Nt(t, e) {
        let n = Ft.get(t);
        return n || (n = e(), Ft.set(t, n), zt.add(n)), n
    }
    const Bt = (t, e, n) => {
        const i = Object(r.yb)(e, n);
        void 0 !== i && t.add(i)
    };
    class Wt {
        constructor(t) {
            this._config = function(t) {
                return (t = t || {}).data = Rt(t.data), It(t), t
            }(t), this._scopeCache = new Map, this._resolverCache = new Map
        }
        get type() {
            return this._config.type
        }
        set type(t) {
            this._config.type = t
        }
        get data() {
            return this._config.data
        }
        set data(t) {
            this._config.data = Rt(t)
        }
        get options() {
            return this._config.options
        }
        set options(t) {
            this._config.options = t
        }
        get plugins() {
            return this._config.plugins
        }
        update() {
            const t = this._config;
            this.clearCache(), It(t)
        }
        clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear()
        }
        datasetScopeKeys(t) {
            return Nt(t, () => [
                ["datasets." + t, ""]
            ])
        }
        datasetAnimationScopeKeys(t, e) {
            return Nt(`${t}.transition.${e}`, () => [
                [`datasets.${t}.transitions.${e}`, "transitions." + e],
                ["datasets." + t, ""]
            ])
        }
        datasetElementScopeKeys(t, e) {
            return Nt(`${t}-${e}`, () => [
                [`datasets.${t}.elements.${e}`, "datasets." + t, "elements." + e, ""]
            ])
        }
        pluginScopeKeys(t) {
            const e = t.id;
            return Nt(`${this.type}-plugin-${e}`, () => [
                ["plugins." + e, ...t.additionalOptionScopes || []]
            ])
        }
        _cachedScopes(t, e) {
            const n = this._scopeCache;
            let r = n.get(t);
            return r && !e || (r = new Map, n.set(t, r)), r
        }
        getOptionScopes(t, e, n) {
            const {
                options: i,
                type: o
            } = this, a = this._cachedScopes(t, n), s = a.get(e);
            if (s) return s;
            const c = new Set;
            e.forEach(e => {
                t && (c.add(t), e.forEach(e => Bt(c, t, e))), e.forEach(t => Bt(c, i, t)), e.forEach(t => Bt(c, r.A[o] || {}, t)), e.forEach(t => Bt(c, r.wb, t)), e.forEach(t => Bt(c, r.E, t))
            });
            const u = [...c];
            return zt.has(e) && a.set(e, u), u
        }
        chartOptionScopes() {
            const {
                options: t,
                type: e
            } = this;
            return [t, r.A[e] || {}, r.wb.datasets[e] || {}, {
                type: e
            }, r.wb, r.E]
        }
        resolveNamedOptions(t, e, n, i = [""]) {
            const o = {
                    $shared: !0
                },
                {
                    resolver: a,
                    subPrefixes: s
                } = Vt(this._resolverCache, t, i);
            let c = a;
            if (function(t, e) {
                    const {
                        isScriptable: n,
                        isIndexable: i
                    } = Object(r.I)(t);
                    for (const o of e)
                        if (n(o) && Object(r.F)(t[o]) || i(o) && Object(r.ub)(t[o])) return !0;
                    return !1
                }(a, e)) {
                o.$shared = !1, n = Object(r.F)(n) ? n() : n;
                const e = this.createResolver(t, n, s);
                c = Object(r.G)(a, n, e)
            }
            for (const t of e) o[t] = c[t];
            return o
        }
        createResolver(t, e, n = [""], i) {
            const {
                resolver: o
            } = Vt(this._resolverCache, t, n);
            return Object(r.Bb)(e) ? Object(r.G)(o, e, void 0, i) : o
        }
    }

    function Vt(t, e, n) {
        let i = t.get(e);
        i || (i = new Map, t.set(e, i));
        const o = n.join();
        let a = i.get(o);
        if (!a) {
            a = {
                resolver: Object(r.H)(e, n),
                subPrefixes: n.filter(t => !t.toLowerCase().includes("hover"))
            }, i.set(o, a)
        }
        return a
    }
    const Ht = ["top", "bottom", "left", "right", "chartArea"];

    function Ut(t, e) {
        return "top" === t || "bottom" === t || -1 === Ht.indexOf(t) && "x" === e
    }

    function $t(t, e) {
        return function(n, r) {
            return n[t] === r[t] ? n[e] - r[e] : n[t] - r[t]
        }
    }

    function Yt(t) {
        const e = t.chart,
            n = e.options.animation;
        e.notifyPlugins("afterRender"), Object(r.o)(n && n.onComplete, [t], e)
    }

    function qt(t) {
        const e = t.chart,
            n = e.options.animation;
        Object(r.o)(n && n.onProgress, [t], e)
    }

    function Gt() {
        return "undefined" != typeof window && "undefined" != typeof document
    }

    function Xt(t) {
        return Gt() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t && t.canvas && (t = t.canvas), t
    }
    const Kt = {},
        Jt = t => {
            const e = Xt(t);
            return Object.values(Kt).filter(t => t.canvas === e).pop()
        };
    class Zt {
        constructor(t, e) {
            const n = this;
            this.config = e = new Wt(e);
            const o = Xt(t),
                a = Jt(o);
            if (a) throw new Error("Canvas is already in use. Chart with ID '" + a.id + "' must be destroyed before the canvas can be reused.");
            const s = e.createResolver(e.chartOptionScopes(), n.getContext());
            this.platform = n._initializePlatform(o, e);
            const c = n.platform.acquireContext(o, s.aspectRatio),
                u = c && c.canvas,
                l = u && u.height,
                f = u && u.width;
            this.id = Object(r.K)(), this.ctx = c, this.canvas = u, this.width = f, this.height = l, this._options = s, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._sortedMetasets = [], this.scales = {}, this.scale = void 0, this._plugins = new Pt, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Object(r.L)(() => this.update("resize"), s.resizeDelay || 0), Kt[n.id] = n, c && u ? (i.listen(n, "complete", Yt), i.listen(n, "progress", qt), n._initialize(), n.attached && n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
        }
        get aspectRatio() {
            const {
                options: {
                    aspectRatio: t,
                    maintainAspectRatio: e
                },
                width: n,
                height: i,
                _aspectRatio: o
            } = this;
            return Object(r.Cb)(t) ? e && o ? o : i ? n / i : null : t
        }
        get data() {
            return this.config.data
        }
        set data(t) {
            this.config.data = t
        }
        get options() {
            return this._options
        }
        set options(t) {
            this.config.options = t
        }
        _initialize() {
            const t = this;
            return t.notifyPlugins("beforeInit"), t.options.responsive ? t.resize() : Object(r.M)(t, t.options.devicePixelRatio), t.bindEvents(), t.notifyPlugins("afterInit"), t
        }
        _initializePlatform(t, e) {
            return e.platform ? new e.platform : !Gt() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? new nt : new gt
        }
        clear() {
            return Object(r.U)(this.canvas, this.ctx), this
        }
        stop() {
            return i.stop(this), this
        }
        resize(t, e) {
            i.running(this) ? this._resizeBeforeDraw = {
                width: t,
                height: e
            } : this._resize(t, e)
        }
        _resize(t, e) {
            const n = this,
                i = n.options,
                o = n.canvas,
                a = i.maintainAspectRatio && n.aspectRatio,
                s = n.platform.getMaximumSize(o, t, e, a),
                c = n.currentDevicePixelRatio,
                u = i.devicePixelRatio || n.platform.getDevicePixelRatio();
            n.width === s.width && n.height === s.height && c === u || (n.width = s.width, n.height = s.height, n._aspectRatio = n.aspectRatio, Object(r.M)(n, u, !0), n.notifyPlugins("resize", {
                size: s
            }), Object(r.o)(i.onResize, [n, s], n), n.attached && n._doResize() && n.render())
        }
        ensureScalesHaveIDs() {
            const t = this.options.scales || {};
            Object(r.e)(t, (t, e) => {
                t.id = e
            })
        }
        buildOrUpdateScales() {
            const t = this,
                e = t.options,
                n = e.scales,
                i = t.scales,
                o = Object.keys(i).reduce((t, e) => (t[e] = !1, t), {});
            let a = [];
            n && (a = a.concat(Object.keys(n).map(t => {
                const e = n[t],
                    r = Lt(t, e),
                    i = "r" === r,
                    o = "x" === r;
                return {
                    options: e,
                    dposition: i ? "chartArea" : o ? "bottom" : "left",
                    dtype: i ? "radialLinear" : o ? "category" : "linear"
                }
            }))), Object(r.e)(a, n => {
                const a = n.options,
                    s = a.id,
                    c = Lt(s, a),
                    u = Object(r.Ob)(a.type, n.dtype);
                void 0 !== a.position && Ut(a.position, c) === Ut(n.dposition) || (a.position = n.dposition), o[s] = !0;
                let l = null;
                if (s in i && i[s].type === u) l = i[s];
                else {
                    l = new(At.getScale(u))({
                        id: s,
                        type: u,
                        ctx: t.ctx,
                        chart: t
                    }), i[l.id] = l
                }
                l.init(a, e)
            }), Object(r.e)(o, (t, e) => {
                t || delete i[e]
            }), Object(r.e)(i, e => {
                tt.configure(t, e, e.options), tt.addBox(t, e)
            })
        }
        _updateMetasetIndex(t, e) {
            const n = this._metasets,
                r = t.index;
            r !== e && (n[r] = n[e], n[e] = t, t.index = e)
        }
        _updateMetasets() {
            const t = this,
                e = t._metasets,
                n = t.data.datasets.length,
                r = e.length;
            if (r > n) {
                for (let e = n; e < r; ++e) t._destroyDatasetMeta(e);
                e.splice(n, r - n)
            }
            t._sortedMetasets = e.slice(0).sort($t("order", "index"))
        }
        _removeUnreferencedMetasets() {
            const t = this,
                {
                    _metasets: e,
                    data: {
                        datasets: n
                    }
                } = t;
            e.length > n.length && delete t._stacks, e.forEach((e, r) => {
                0 === n.filter(t => t === e._dataset).length && t._destroyDatasetMeta(r)
            })
        }
        buildOrUpdateControllers() {
            const t = this,
                e = [],
                n = t.data.datasets;
            let i, o;
            for (t._removeUnreferencedMetasets(), i = 0, o = n.length; i < o; i++) {
                const o = n[i];
                let a = t.getDatasetMeta(i);
                const s = o.type || t.config.type;
                if (a.type && a.type !== s && (t._destroyDatasetMeta(i), a = t.getDatasetMeta(i)), a.type = s, a.indexAxis = o.indexAxis || Ct(s, t.options), a.order = o.order || 0, t._updateMetasetIndex(a, i), a.label = "" + o.label, a.visible = t.isDatasetVisible(i), a.controller) a.controller.updateIndex(i), a.controller.linkScales();
                else {
                    const n = At.getController(s),
                        {
                            datasetElementType: o,
                            dataElementType: c
                        } = r.wb.datasets[s];
                    Object.assign(n.prototype, {
                        dataElementType: At.getElement(c),
                        datasetElementType: o && At.getElement(o)
                    }), a.controller = new n(t, i), e.push(a.controller)
                }
            }
            return t._updateMetasets(), e
        }
        _resetElements() {
            const t = this;
            Object(r.e)(t.data.datasets, (e, n) => {
                t.getDatasetMeta(n).controller.reset()
            }, t)
        }
        reset() {
            this._resetElements(), this.notifyPlugins("reset")
        }
        update(t) {
            const e = this,
                n = e.config;
            n.update(), e._options = n.createResolver(n.chartOptionScopes(), e.getContext()), Object(r.e)(e.scales, t => {
                tt.removeBox(e, t)
            });
            const i = e._animationsDisabled = !e.options.animation;
            e.ensureScalesHaveIDs(), e.buildOrUpdateScales();
            const o = new Set(Object.keys(e._listeners)),
                a = new Set(e.options.events);
            if (Object(r.V)(o, a) || (e.unbindEvents(), e.bindEvents()), e._plugins.invalidate(), !1 === e.notifyPlugins("beforeUpdate", {
                    mode: t,
                    cancelable: !0
                })) return;
            const s = e.buildOrUpdateControllers();
            e.notifyPlugins("beforeElementsUpdate");
            let c = 0;
            for (let t = 0, n = e.data.datasets.length; t < n; t++) {
                const {
                    controller: n
                } = e.getDatasetMeta(t), r = !i && -1 === s.indexOf(n);
                n.buildOrUpdateElements(r), c = Math.max(+n.getMaxOverflow(), c)
            }
            e._minPadding = c, e._updateLayout(c), i || Object(r.e)(s, t => {
                t.reset()
            }), e._updateDatasets(t), e.notifyPlugins("afterUpdate", {
                mode: t
            }), e._layers.sort($t("z", "_idx")), e._lastEvent && e._eventHandler(e._lastEvent, !0), e.render()
        }
        _updateLayout(t) {
            const e = this;
            if (!1 === e.notifyPlugins("beforeLayout", {
                    cancelable: !0
                })) return;
            tt.update(e, e.width, e.height, t);
            const n = e.chartArea,
                i = n.width <= 0 || n.height <= 0;
            e._layers = [], Object(r.e)(e.boxes, t => {
                i && "chartArea" === t.position || (t.configure && t.configure(), e._layers.push(...t._layers()))
            }, e), e._layers.forEach((t, e) => {
                t._idx = e
            }), e.notifyPlugins("afterLayout")
        }
        _updateDatasets(t) {
            const e = this,
                n = "function" == typeof t;
            if (!1 !== e.notifyPlugins("beforeDatasetsUpdate", {
                    mode: t,
                    cancelable: !0
                })) {
                for (let r = 0, i = e.data.datasets.length; r < i; ++r) e._updateDataset(r, n ? t({
                    datasetIndex: r
                }) : t);
                e.notifyPlugins("afterDatasetsUpdate", {
                    mode: t
                })
            }
        }
        _updateDataset(t, e) {
            const n = this.getDatasetMeta(t),
                r = {
                    meta: n,
                    index: t,
                    mode: e,
                    cancelable: !0
                };
            !1 !== this.notifyPlugins("beforeDatasetUpdate", r) && (n.controller._update(e), r.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", r))
        }
        render() {
            const t = this;
            !1 !== t.notifyPlugins("beforeRender", {
                cancelable: !0
            }) && (i.has(t) ? t.attached && !i.running(t) && i.start(t) : (t.draw(), Yt({
                chart: t
            })))
        }
        draw() {
            const t = this;
            let e;
            if (t._resizeBeforeDraw) {
                const {
                    width: e,
                    height: n
                } = t._resizeBeforeDraw;
                t._resize(e, n), t._resizeBeforeDraw = null
            }
            if (t.clear(), t.width <= 0 || t.height <= 0) return;
            if (!1 === t.notifyPlugins("beforeDraw", {
                    cancelable: !0
                })) return;
            const n = t._layers;
            for (e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(t.chartArea);
            for (t._drawDatasets(); e < n.length; ++e) n[e].draw(t.chartArea);
            t.notifyPlugins("afterDraw")
        }
        _getSortedDatasetMetas(t) {
            const e = this._sortedMetasets,
                n = [];
            let r, i;
            for (r = 0, i = e.length; r < i; ++r) {
                const i = e[r];
                t && !i.visible || n.push(i)
            }
            return n
        }
        getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0)
        }
        _drawDatasets() {
            const t = this;
            if (!1 === t.notifyPlugins("beforeDatasetsDraw", {
                    cancelable: !0
                })) return;
            const e = t.getSortedVisibleDatasetMetas();
            for (let n = e.length - 1; n >= 0; --n) t._drawDataset(e[n]);
            t.notifyPlugins("afterDatasetsDraw")
        }
        _drawDataset(t) {
            const e = this,
                n = e.ctx,
                i = t._clip,
                o = e.chartArea,
                a = {
                    meta: t,
                    index: t.index,
                    cancelable: !0
                };
            !1 !== e.notifyPlugins("beforeDatasetDraw", a) && (Object(r.Db)(n, {
                left: !1 === i.left ? 0 : o.left - i.left,
                right: !1 === i.right ? e.width : o.right + i.right,
                top: !1 === i.top ? 0 : o.top - i.top,
                bottom: !1 === i.bottom ? e.height : o.bottom + i.bottom
            }), t.controller.draw(), Object(r.Fb)(n), a.cancelable = !1, e.notifyPlugins("afterDatasetDraw", a))
        }
        getElementsAtEventForMode(t, e, n, r) {
            const i = H.modes[e];
            return "function" == typeof i ? i(this, t, n, r) : []
        }
        getDatasetMeta(t) {
            const e = this.data.datasets[t],
                n = this._metasets;
            let r = n.filter(t => t && t._dataset === e).pop();
            return r || (r = n[t] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e && e.order || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1
            }), r
        }
        getContext() {
            return this.$context || (this.$context = {
                chart: this,
                type: "chart"
            })
        }
        getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length
        }
        isDatasetVisible(t) {
            const e = this.data.datasets[t];
            if (!e) return !1;
            const n = this.getDatasetMeta(t);
            return "boolean" == typeof n.hidden ? !n.hidden : !e.hidden
        }
        setDatasetVisibility(t, e) {
            this.getDatasetMeta(t).hidden = !e
        }
        toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t]
        }
        getDataVisibility(t) {
            return !this._hiddenIndices[t]
        }
        _updateDatasetVisibility(t, e) {
            const n = e ? "show" : "hide",
                r = this.getDatasetMeta(t),
                i = r.controller._resolveAnimations(void 0, n);
            this.setDatasetVisibility(t, e), i.update(r, {
                visible: e
            }), this.update(e => e.datasetIndex === t ? n : void 0)
        }
        hide(t) {
            this._updateDatasetVisibility(t, !1)
        }
        show(t) {
            this._updateDatasetVisibility(t, !0)
        }
        _destroyDatasetMeta(t) {
            const e = this,
                n = e._metasets && e._metasets[t];
            n && n.controller && (n.controller._destroy(), delete e._metasets[t])
        }
        destroy() {
            const t = this,
                {
                    canvas: e,
                    ctx: n
                } = t;
            let o, a;
            for (t.stop(), i.remove(t), o = 0, a = t.data.datasets.length; o < a; ++o) t._destroyDatasetMeta(o);
            t.config.clearCache(), e && (t.unbindEvents(), Object(r.U)(e, n), t.platform.releaseContext(n), t.canvas = null, t.ctx = null), t.notifyPlugins("destroy"), delete Kt[t.id]
        }
        toBase64Image(...t) {
            return this.canvas.toDataURL(...t)
        }
        bindEvents() {
            const t = this,
                e = t._listeners,
                n = t.platform,
                i = (r, i) => {
                    n.addEventListener(t, r, i), e[r] = i
                },
                o = (r, i) => {
                    e[r] && (n.removeEventListener(t, r, i), delete e[r])
                };
            let a = function(e, n, r) {
                e.offsetX = n, e.offsetY = r, t._eventHandler(e)
            };
            if (Object(r.e)(t.options.events, t => i(t, a)), t.options.responsive) {
                let e;
                a = (e, n) => {
                    t.canvas && t.resize(e, n)
                };
                const r = () => {
                    o("attach", r), t.attached = !0, t.resize(), i("resize", a), i("detach", e)
                };
                e = () => {
                    t.attached = !1, o("resize", a), i("attach", r)
                }, n.isAttached(t.canvas) ? r() : e()
            } else t.attached = !0
        }
        unbindEvents() {
            const t = this,
                e = t._listeners;
            e && (t._listeners = {}, Object(r.e)(e, (e, n) => {
                t.platform.removeEventListener(t, n, e)
            }))
        }
        updateHoverStyle(t, e, n) {
            const r = n ? "set" : "remove";
            let i, o, a, s;
            for ("dataset" === e && (i = this.getDatasetMeta(t[0].datasetIndex), i.controller["_" + r + "DatasetHoverStyle"]()), a = 0, s = t.length; a < s; ++a) {
                o = t[a];
                const e = o && this.getDatasetMeta(o.datasetIndex).controller;
                e && e[r + "HoverStyle"](o.element, o.datasetIndex, o.index)
            }
        }
        getActiveElements() {
            return this._active || []
        }
        setActiveElements(t) {
            const e = this,
                n = e._active || [],
                i = t.map(({
                    datasetIndex: t,
                    index: n
                }) => {
                    const r = e.getDatasetMeta(t);
                    if (!r) throw new Error("No dataset found at index " + t);
                    return {
                        datasetIndex: t,
                        element: r.data[n],
                        index: n
                    }
                });
            !Object(r.W)(i, n) && (e._active = i, e._updateHoverStyles(i, n))
        }
        notifyPlugins(t, e, n) {
            return this._plugins.notify(this, t, e, n)
        }
        _updateHoverStyles(t, e, n) {
            const r = this,
                i = r.options.hover,
                o = (t, e) => t.filter(t => !e.some(e => t.datasetIndex === e.datasetIndex && t.index === e.index)),
                a = o(e, t),
                s = n ? t : o(t, e);
            a.length && r.updateHoverStyle(a, i.mode, !1), s.length && i.mode && r.updateHoverStyle(s, i.mode, !0)
        }
        _eventHandler(t, e) {
            const n = this,
                r = {
                    event: t,
                    replay: e,
                    cancelable: !0
                },
                i = e => (e.options.events || this.options.events).includes(t.type);
            if (!1 === n.notifyPlugins("beforeEvent", r, i)) return;
            const o = n._handleEvent(t, e);
            return r.cancelable = !1, n.notifyPlugins("afterEvent", r, i), (o || r.changed) && n.render(), n
        }
        _handleEvent(t, e) {
            const n = this,
                {
                    _active: i = [],
                    options: o
                } = n,
                a = o.hover,
                s = e;
            let c = [],
                u = !1,
                l = null;
            return "mouseout" !== t.type && (c = n.getElementsAtEventForMode(t, a.mode, a, s), l = "click" === t.type ? n._lastEvent : t), n._lastEvent = null, Object(r.b)(t, n.chartArea, n._minPadding) && (Object(r.o)(o.onHover, [t, c, n], n), "mouseup" !== t.type && "click" !== t.type && "contextmenu" !== t.type || Object(r.o)(o.onClick, [t, c, n], n)), u = !Object(r.W)(c, i), (u || e) && (n._active = c, n._updateHoverStyles(c, i, e)), n._lastEvent = l, u
        }
    }
    const Qt = () => Object(r.e)(Zt.instances, t => t._plugins.invalidate());

    function te(t, e) {
        const {
            startAngle: n,
            endAngle: i,
            pixelMargin: o,
            x: a,
            y: s,
            outerRadius: c,
            innerRadius: u
        } = e;
        let l = o / c;
        t.beginPath(), t.arc(a, s, c, n - l, i + l), u > o ? (l = o / u, t.arc(a, s, u, i + l, n - l, !0)) : t.arc(a, s, o, i + r.i, n - r.i), t.closePath(), t.clip()
    }

    function ee(t, e, n, i) {
        const o = (a = t.options.borderRadius, Object(r.Y)(a, ["outerStart", "outerEnd", "innerStart", "innerEnd"]));
        var a;
        const s = (n - e) / 2,
            c = Math.min(s, i * e / 2),
            u = t => {
                const e = (n - Math.min(s, t)) * i / 2;
                return Object(r.Qb)(t, 0, Math.min(s, e))
            };
        return {
            outerStart: u(o.outerStart),
            outerEnd: u(o.outerEnd),
            innerStart: Object(r.Qb)(o.innerStart, 0, c),
            innerEnd: Object(r.Qb)(o.innerEnd, 0, c)
        }
    }

    function ne(t, e, n, r) {
        return {
            x: n + t * Math.cos(e),
            y: r + t * Math.sin(e)
        }
    }

    function re(t, e) {
        const {
            x: n,
            y: i,
            startAngle: o,
            endAngle: a,
            pixelMargin: s
        } = e, c = Math.max(e.outerRadius - s, 0), u = e.innerRadius + s, {
            outerStart: l,
            outerEnd: f,
            innerStart: h,
            innerEnd: d
        } = ee(e, u, c, a - o), p = c - l, g = c - f, b = o + l / p, v = a - f / g, m = u + h, y = u + d, x = o + h / m, _ = a - d / y;
        if (t.beginPath(), t.arc(n, i, c, b, v), f > 0) {
            const e = ne(g, v, n, i);
            t.arc(e.x, e.y, f, v, a + r.i)
        }
        const w = ne(y, a, n, i);
        if (t.lineTo(w.x, w.y), d > 0) {
            const e = ne(y, _, n, i);
            t.arc(e.x, e.y, d, a + r.i, _ + Math.PI)
        }
        if (t.arc(n, i, u, a - d / u, o + h / u, !0), h > 0) {
            const e = ne(m, x, n, i);
            t.arc(e.x, e.y, h, x + Math.PI, o - r.i)
        }
        const O = ne(p, o, n, i);
        if (t.lineTo(O.x, O.y), l > 0) {
            const e = ne(p, b, n, i);
            t.arc(e.x, e.y, l, o - r.i, b)
        }
        t.closePath()
    }

    function ie(t, e) {
        const {
            options: n
        } = e, i = "inner" === n.borderAlign;
        n.borderWidth && (i ? (t.lineWidth = 2 * n.borderWidth, t.lineJoin = "round") : (t.lineWidth = n.borderWidth, t.lineJoin = "bevel"), e.fullCircles && function(t, e, n) {
            const {
                x: i,
                y: o,
                startAngle: a,
                endAngle: s,
                pixelMargin: c
            } = e, u = Math.max(e.outerRadius - c, 0), l = e.innerRadius + c;
            let f;
            for (n && (e.endAngle = e.startAngle + r.u, te(t, e), e.endAngle = s, e.endAngle === e.startAngle && (e.endAngle += r.u, e.fullCircles--)), t.beginPath(), t.arc(i, o, l, a + r.u, a, !0), f = 0; f < e.fullCircles; ++f) t.stroke();
            for (t.beginPath(), t.arc(i, o, u, a, a + r.u), f = 0; f < e.fullCircles; ++f) t.stroke()
        }(t, e, i), i && te(t, e), re(t, e), t.stroke())
    }
    Object.defineProperties(Zt, {
        defaults: {
            enumerable: !0,
            value: r.wb
        },
        instances: {
            enumerable: !0,
            value: Kt
        },
        overrides: {
            enumerable: !0,
            value: r.A
        },
        registry: {
            enumerable: !0,
            value: At
        },
        version: {
            enumerable: !0,
            value: "3.2.1"
        },
        getChart: {
            enumerable: !0,
            value: Jt
        },
        register: {
            enumerable: !0,
            value: (...t) => {
                At.add(...t), Qt()
            }
        },
        unregister: {
            enumerable: !0,
            value: (...t) => {
                At.remove(...t), Qt()
            }
        }
    });
    class oe extends bt {
        constructor(t) {
            super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t)
        }
        inRange(t, e, n) {
            const i = this.getProps(["x", "y"], n),
                {
                    angle: o,
                    distance: a
                } = Object(r.X)(i, {
                    x: t,
                    y: e
                }),
                {
                    startAngle: s,
                    endAngle: c,
                    innerRadius: u,
                    outerRadius: l,
                    circumference: f
                } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], n);
            return (f >= r.u || Object(r.Jb)(o, s, c)) && (a >= u && a <= l)
        }
        getCenterPoint(t) {
            const {
                x: e,
                y: n,
                startAngle: r,
                endAngle: i,
                innerRadius: o,
                outerRadius: a
            } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t), s = (r + i) / 2, c = (o + a) / 2;
            return {
                x: e + Math.cos(s) * c,
                y: n + Math.sin(s) * c
            }
        }
        tooltipPosition(t) {
            return this.getCenterPoint(t)
        }
        draw(t) {
            const e = this,
                n = e.options,
                i = n.offset || 0;
            if (e.pixelMargin = "inner" === n.borderAlign ? .33 : 0, e.fullCircles = Math.floor(e.circumference / r.u), !(0 === e.circumference || e.innerRadius < 0 || e.outerRadius < 0)) {
                if (t.save(), i && e.circumference < r.u) {
                    const n = (e.startAngle + e.endAngle) / 2;
                    t.translate(Math.cos(n) * i, Math.sin(n) * i)
                }
                t.fillStyle = n.backgroundColor, t.strokeStyle = n.borderColor,
                    function(t, e) {
                        if (e.fullCircles) {
                            e.endAngle = e.startAngle + r.u, re(t, e);
                            for (let n = 0; n < e.fullCircles; ++n) t.fill()
                        }
                        isNaN(e.circumference) || (e.endAngle = e.startAngle + e.circumference % r.u), re(t, e), t.fill()
                    }(t, e), ie(t, e), t.restore()
            }
        }
    }

    function ae(t, e, n = e) {
        t.lineCap = Object(r.Ob)(n.borderCapStyle, e.borderCapStyle), t.setLineDash(Object(r.Ob)(n.borderDash, e.borderDash)), t.lineDashOffset = Object(r.Ob)(n.borderDashOffset, e.borderDashOffset), t.lineJoin = Object(r.Ob)(n.borderJoinStyle, e.borderJoinStyle), t.lineWidth = Object(r.Ob)(n.borderWidth, e.borderWidth), t.strokeStyle = Object(r.Ob)(n.borderColor, e.borderColor)
    }

    function se(t, e, n) {
        t.lineTo(n.x, n.y)
    }

    function ce(t, e, n = {}) {
        const r = t.length,
            {
                start: i = 0,
                end: o = r - 1
            } = n,
            {
                start: a,
                end: s
            } = e,
            c = Math.max(i, a),
            u = Math.min(o, s),
            l = i < a && o < a || i > s && o > s;
        return {
            count: r,
            start: c,
            loop: e.loop,
            ilen: u < c && !l ? r + u - c : u - c
        }
    }

    function ue(t, e, n, i) {
        const {
            points: o,
            options: a
        } = e, {
            count: s,
            start: c,
            loop: u,
            ilen: l
        } = ce(o, n, i), f = function(t) {
            return t.stepped ? r.fb : t.tension || "monotone" === t.cubicInterpolationMode ? r.gb : se
        }(a);
        let h, d, p, {
            move: g = !0,
            reverse: b
        } = i || {};
        for (h = 0; h <= l; ++h) d = o[(c + (b ? l - h : h)) % s], d.skip || (g ? (t.moveTo(d.x, d.y), g = !1) : f(t, p, d, b, a.stepped), p = d);
        return u && (d = o[(c + (b ? l : 0)) % s], f(t, p, d, b, a.stepped)), !!u
    }

    function le(t, e, n, r) {
        const i = e.points,
            {
                count: o,
                start: a,
                ilen: s
            } = ce(i, n, r),
            {
                move: c = !0,
                reverse: u
            } = r || {};
        let l, f, h, d, p, g, b = 0,
            v = 0;
        const m = t => (a + (u ? s - t : t)) % o,
            y = () => {
                d !== p && (t.lineTo(b, p), t.lineTo(b, d), t.lineTo(b, g))
            };
        for (c && (f = i[m(0)], t.moveTo(f.x, f.y)), l = 0; l <= s; ++l) {
            if (f = i[m(l)], f.skip) continue;
            const e = f.x,
                n = f.y,
                r = 0 | e;
            r === h ? (n < d ? d = n : n > p && (p = n), b = (v * b + e) / ++v) : (y(), t.lineTo(e, n), h = r, v = 0, d = p = n), g = n
        }
        y()
    }

    function fe(t) {
        const e = t.options,
            n = e.borderDash && e.borderDash.length;
        return !(t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || n) ? le : ue
    }
    oe.id = "arc", oe.defaults = {
        borderAlign: "center",
        borderColor: "#fff",
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        angle: void 0
    }, oe.defaultRoutes = {
        backgroundColor: "backgroundColor"
    };
    const he = "function" == typeof Path2D;

    function de(t, e, n, r) {
        he && 1 === e.segments.length ? function(t, e, n, r) {
            let i = e._path;
            i || (i = e._path = new Path2D, e.path(i, n, r) && i.closePath()), ae(t, e.options), t.stroke(i)
        }(t, e, n, r) : function(t, e, n, r) {
            const {
                segments: i,
                options: o
            } = e, a = fe(e);
            for (const s of i) ae(t, o, s.style), t.beginPath(), a(t, e, s, {
                start: n,
                end: n + r - 1
            }) && t.closePath(), t.stroke()
        }(t, e, n, r)
    }
    class pe extends bt {
        constructor(t) {
            super(), this.animated = !0, this.options = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, t && Object.assign(this, t)
        }
        updateControlPoints(t) {
            const e = this,
                n = e.options;
            if ((n.tension || "monotone" === n.cubicInterpolationMode) && !n.stepped && !e._pointsUpdated) {
                const i = n.spanGaps ? e._loop : e._fullLoop;
                Object(r.Z)(e._points, n, t, i), e._pointsUpdated = !0
            }
        }
        set points(t) {
            this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1
        }
        get points() {
            return this._points
        }
        get segments() {
            return this._segments || (this._segments = Object(r.ab)(this, this.options.segment))
        }
        first() {
            const t = this.segments,
                e = this.points;
            return t.length && e[t[0].start]
        }
        last() {
            const t = this.segments,
                e = this.points,
                n = t.length;
            return n && e[t[n - 1].end]
        }
        interpolate(t, e) {
            const n = this.options,
                i = t[e],
                o = this.points,
                a = Object(r.bb)(this, {
                    property: e,
                    start: i,
                    end: i
                });
            if (!a.length) return;
            const s = [],
                c = function(t) {
                    return t.stepped ? r.cb : t.tension || "monotone" === t.cubicInterpolationMode ? r.db : r.eb
                }(n);
            let u, l;
            for (u = 0, l = a.length; u < l; ++u) {
                const {
                    start: r,
                    end: l
                } = a[u], f = o[r], h = o[l];
                if (f === h) {
                    s.push(f);
                    continue
                }
                const d = c(f, h, Math.abs((i - f[e]) / (h[e] - f[e])), n.stepped);
                d[e] = t[e], s.push(d)
            }
            return 1 === s.length ? s[0] : s
        }
        pathSegment(t, e, n) {
            return fe(this)(t, this, e, n)
        }
        path(t, e, n) {
            const r = this,
                i = r.segments,
                o = fe(r);
            let a = r._loop;
            e = e || 0, n = n || r.points.length - e;
            for (const s of i) a &= o(t, r, s, {
                start: e,
                end: e + n - 1
            });
            return !!a
        }
        draw(t, e, n, r) {
            const i = this,
                o = i.options || {};
            (i.points || []).length && o.borderWidth && (t.save(), de(t, i, n, r), t.restore(), i.animated && (i._pointsUpdated = !1, i._path = void 0))
        }
    }

    function ge(t, e, n, r) {
        const i = t.options,
            {
                [n]: o
            } = t.getProps([n], r);
        return Math.abs(e - o) < i.radius + i.hitRadius
    }
    pe.id = "line", pe.defaults = {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: "default",
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0
    }, pe.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    }, pe.descriptors = {
        _scriptable: !0,
        _indexable: t => "borderDash" !== t && "fill" !== t
    };
    class be extends bt {
        constructor(t) {
            super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t)
        }
        inRange(t, e, n) {
            const r = this.options,
                {
                    x: i,
                    y: o
                } = this.getProps(["x", "y"], n);
            return Math.pow(t - i, 2) + Math.pow(e - o, 2) < Math.pow(r.hitRadius + r.radius, 2)
        }
        inXRange(t, e) {
            return ge(this, t, "x", e)
        }
        inYRange(t, e) {
            return ge(this, t, "y", e)
        }
        getCenterPoint(t) {
            const {
                x: e,
                y: n
            } = this.getProps(["x", "y"], t);
            return {
                x: e,
                y: n
            }
        }
        size(t) {
            let e = (t = t || this.options || {}).radius || 0;
            e = Math.max(e, e && t.hoverRadius || 0);
            return 2 * (e + (e && t.borderWidth || 0))
        }
        draw(t) {
            const e = this.options;
            this.skip || e.radius < .1 || (t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, Object(r.hb)(t, e, this.x, this.y))
        }
        getRange() {
            const t = this.options || {};
            return t.radius + t.hitRadius
        }
    }

    function ve(t, e) {
        const {
            x: n,
            y: r,
            base: i,
            width: o,
            height: a
        } = t.getProps(["x", "y", "base", "width", "height"], e);
        let s, c, u, l, f;
        return t.horizontal ? (f = a / 2, s = Math.min(n, i), c = Math.max(n, i), u = r - f, l = r + f) : (f = o / 2, s = n - f, c = n + f, u = Math.min(r, i), l = Math.max(r, i)), {
            left: s,
            top: u,
            right: c,
            bottom: l
        }
    }

    function me(t) {
        let e = t.options.borderSkipped;
        const n = {};
        return e ? (e = t.horizontal ? ye(e, "left", "right", t.base > t.x) : ye(e, "bottom", "top", t.base < t.y), n[e] = !0, n) : n
    }

    function ye(t, e, n, r) {
        var i, o, a;
        return r ? (a = n, t = xe(t = (i = t) === (o = e) ? a : i === a ? o : i, n, e)) : t = xe(t, e, n), t
    }

    function xe(t, e, n) {
        return "start" === t ? e : "end" === t ? n : t
    }

    function _e(t, e, n, r) {
        return t ? 0 : Math.max(Math.min(e, r), n)
    }

    function we(t) {
        const e = ve(t),
            n = e.right - e.left,
            i = e.bottom - e.top,
            o = function(t, e, n) {
                const i = t.options.borderWidth,
                    o = me(t),
                    a = Object(r.jb)(i);
                return {
                    t: _e(o.top, a.top, 0, n),
                    r: _e(o.right, a.right, 0, e),
                    b: _e(o.bottom, a.bottom, 0, n),
                    l: _e(o.left, a.left, 0, e)
                }
            }(t, n / 2, i / 2),
            a = function(t, e, n) {
                const {
                    enableBorderRadius: i
                } = t.getProps(["enableBorderRadius"]), o = t.options.borderRadius, a = Object(r.kb)(o), s = Math.min(e, n), c = me(t), u = i || Object(r.Bb)(o);
                return {
                    topLeft: _e(!u || c.top || c.left, a.topLeft, 0, s),
                    topRight: _e(!u || c.top || c.right, a.topRight, 0, s),
                    bottomLeft: _e(!u || c.bottom || c.left, a.bottomLeft, 0, s),
                    bottomRight: _e(!u || c.bottom || c.right, a.bottomRight, 0, s)
                }
            }(t, n / 2, i / 2);
        return {
            outer: {
                x: e.left,
                y: e.top,
                w: n,
                h: i,
                radius: a
            },
            inner: {
                x: e.left + o.l,
                y: e.top + o.t,
                w: n - o.l - o.r,
                h: i - o.t - o.b,
                radius: {
                    topLeft: Math.max(0, a.topLeft - Math.max(o.t, o.l)),
                    topRight: Math.max(0, a.topRight - Math.max(o.t, o.r)),
                    bottomLeft: Math.max(0, a.bottomLeft - Math.max(o.b, o.l)),
                    bottomRight: Math.max(0, a.bottomRight - Math.max(o.b, o.r))
                }
            }
        }
    }

    function Oe(t, e, n, r) {
        const i = null === e,
            o = null === n,
            a = t && !(i && o) && ve(t, r);
        return a && (i || e >= a.left && e <= a.right) && (o || n >= a.top && n <= a.bottom)
    }

    function je(t, e) {
        t.rect(e.x, e.y, e.w, e.h)
    }
    be.id = "point", be.defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
    }, be.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    class Se extends bt {
        constructor(t) {
            super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, t && Object.assign(this, t)
        }
        draw(t) {
            const e = this.options,
                {
                    inner: n,
                    outer: i
                } = we(this),
                o = (a = i.radius).topLeft || a.topRight || a.bottomLeft || a.bottomRight ? r.ib : je;
            var a;
            t.save(), i.w === n.w && i.h === n.h || (t.beginPath(), o(t, i), t.clip(), o(t, n), t.fillStyle = e.borderColor, t.fill("evenodd")), t.beginPath(), o(t, n), t.fillStyle = e.backgroundColor, t.fill(), t.restore()
        }
        inRange(t, e, n) {
            return Oe(this, t, e, n)
        }
        inXRange(t, e) {
            return Oe(this, t, null, e)
        }
        inYRange(t, e) {
            return Oe(this, null, t, e)
        }
        getCenterPoint(t) {
            const {
                x: e,
                y: n,
                base: r,
                horizontal: i
            } = this.getProps(["x", "y", "base", "horizontal"], t);
            return {
                x: i ? (e + r) / 2 : e,
                y: i ? n : (n + r) / 2
            }
        }
        getRange(t) {
            return "x" === t ? this.width / 2 : this.height / 2
        }
    }
    Se.id = "bar", Se.defaults = {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        enableBorderRadius: !0,
        pointStyle: void 0
    }, Se.defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    var Me = Object.freeze({
        __proto__: null,
        ArcElement: oe,
        LineElement: pe,
        PointElement: be,
        BarElement: Se
    });

    function ke(t) {
        if (t._decimated) {
            const e = t._data;
            delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
                value: e
            })
        }
    }

    function Ee(t) {
        t.data.datasets.forEach(t => {
            ke(t)
        })
    }
    var Ae = {
        id: "decimation",
        defaults: {
            algorithm: "min-max",
            enabled: !1
        },
        beforeElementsUpdate: (t, e, n) => {
            if (!n.enabled) return void Ee(t);
            const i = t.width;
            t.data.datasets.forEach((e, o) => {
                const {
                    _data: a,
                    indexAxis: s
                } = e, c = t.getDatasetMeta(o), u = a || e.data;
                if ("y" === Object(r.C)([s, t.options.indexAxis])) return;
                if ("line" !== c.type) return;
                const l = t.scales[c.xAxisID];
                if ("linear" !== l.type && "time" !== l.type) return;
                if (t.options.parsing) return;
                let f, {
                    start: h,
                    count: d
                } = function(t, e) {
                    const n = e.length;
                    let i, o = 0;
                    const {
                        iScale: a
                    } = t, {
                        min: s,
                        max: c,
                        minDefined: u,
                        maxDefined: l
                    } = a.getUserBounds();
                    return u && (o = Object(r.Qb)(Object(r.Rb)(e, a.axis, s).lo, 0, n - 1)), i = l ? Object(r.Qb)(Object(r.Rb)(e, a.axis, c).hi + 1, o, n) - o : n - o, {
                        start: o,
                        count: i
                    }
                }(c, u);
                if (d <= 4 * i) ke(e);
                else {
                    switch (Object(r.Cb)(a) && (e._data = u, delete e.data, Object.defineProperty(e, "data", {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return this._decimated
                        },
                        set: function(t) {
                            this._data = t
                        }
                    })), n.algorithm) {
                        case "lttb":
                            f = function(t, e, n, r, i) {
                                const o = i.samples || r;
                                if (o >= n) return t.slice(e, e + n);
                                const a = [],
                                    s = (n - 2) / (o - 2);
                                let c = 0;
                                const u = e + n - 1;
                                let l, f, h, d, p, g = e;
                                for (a[c++] = t[g], l = 0; l < o - 2; l++) {
                                    let r, i = 0,
                                        o = 0;
                                    const u = Math.floor((l + 1) * s) + 1 + e,
                                        b = Math.min(Math.floor((l + 2) * s) + 1, n) + e,
                                        v = b - u;
                                    for (r = u; r < b; r++) i += t[r].x, o += t[r].y;
                                    i /= v, o /= v;
                                    const m = Math.floor(l * s) + 1 + e,
                                        y = Math.floor((l + 1) * s) + 1 + e,
                                        {
                                            x: x,
                                            y: _
                                        } = t[g];
                                    for (h = d = -1, r = m; r < y; r++) d = .5 * Math.abs((x - i) * (t[r].y - _) - (x - t[r].x) * (o - _)), d > h && (h = d, f = t[r], p = r);
                                    a[c++] = f, g = p
                                }
                                return a[c++] = t[u], a
                            }(u, h, d, i, n);
                            break;
                        case "min-max":
                            f = function(t, e, n, i) {
                                let o, a, s, c, u, l, f, h, d, p, g = 0,
                                    b = 0;
                                const v = [],
                                    m = e + n - 1,
                                    y = t[e].x,
                                    x = t[m].x - y;
                                for (o = e; o < e + n; ++o) {
                                    a = t[o], s = (a.x - y) / x * i, c = a.y;
                                    const e = 0 | s;
                                    if (e === u) c < d ? (d = c, l = o) : c > p && (p = c, f = o), g = (b * g + a.x) / ++b;
                                    else {
                                        const n = o - 1;
                                        if (!Object(r.Cb)(l) && !Object(r.Cb)(f)) {
                                            const e = Math.min(l, f),
                                                r = Math.max(l, f);
                                            e !== h && e !== n && v.push({ ...t[e],
                                                x: g
                                            }), r !== h && r !== n && v.push({ ...t[r],
                                                x: g
                                            })
                                        }
                                        o > 0 && n !== h && v.push(t[n]), v.push(a), u = e, b = 0, d = p = c, l = f = h = o
                                    }
                                }
                                return v
                            }(u, h, d, i);
                            break;
                        default:
                            throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)
                    }
                    e._decimated = f
                }
            })
        },
        destroy(t) {
            Ee(t)
        }
    };

    function Pe(t, e, n) {
        const i = function(t) {
            const e = t.options,
                n = e.fill;
            let i = Object(r.Ob)(n && n.target, n);
            return void 0 === i && (i = !!e.backgroundColor), !1 !== i && null !== i && (!0 === i ? "origin" : i)
        }(t);
        if (Object(r.Bb)(i)) return !isNaN(i.value) && i;
        let o = parseFloat(i);
        return Object(r.zb)(o) && Math.floor(o) === o ? ("-" !== i[0] && "+" !== i[0] || (o = e + o), !(o === e || o < 0 || o >= n) && o) : ["origin", "start", "end", "stack"].indexOf(i) >= 0 && i
    }
    class Te {
        constructor(t) {
            this.x = t.x, this.y = t.y, this.radius = t.radius
        }
        pathSegment(t, e, n) {
            const {
                x: i,
                y: o,
                radius: a
            } = this;
            return e = e || {
                start: 0,
                end: r.u
            }, t.arc(i, o, a, e.end, e.start, !0), !n.bounds
        }
        interpolate(t) {
            const {
                x: e,
                y: n,
                radius: r
            } = this, i = t.angle;
            return {
                x: e + Math.cos(i) * r,
                y: n + Math.sin(i) * r,
                angle: i
            }
        }
    }

    function De(t) {
        return (t.scale || {}).getPointPositionForValue ? function(t) {
            const {
                scale: e,
                fill: n
            } = t, i = e.options, o = e.getLabels().length, a = [], s = i.reverse ? e.max : e.min, c = i.reverse ? e.min : e.max;
            let u, l, f;
            if (f = "start" === n ? s : "end" === n ? c : Object(r.Bb)(n) ? n.value : e.getBaseValue(), i.grid.circular) return l = e.getPointPositionForValue(0, s), new Te({
                x: l.x,
                y: l.y,
                radius: e.getDistanceFromCenterForValue(f)
            });
            for (u = 0; u < o; ++u) a.push(e.getPointPositionForValue(u, f));
            return a
        }(t) : function(t) {
            const {
                scale: e = {},
                fill: n
            } = t;
            let i, o = null;
            return "start" === n ? o = e.bottom : "end" === n ? o = e.top : Object(r.Bb)(n) ? o = e.getPixelForValue(n.value) : e.getBasePixel && (o = e.getBasePixel()), Object(r.zb)(o) ? (i = e.isHorizontal(), {
                x: i ? o : null,
                y: i ? null : o
            }) : null
        }(t)
    }

    function Ce(t) {
        const {
            chart: e,
            scale: n,
            index: r,
            line: i
        } = t, o = [], a = i.segments, s = i.points, c = function(t, e) {
            const n = [],
                r = t.getSortedVisibleDatasetMetas();
            for (let t = 0; t < r.length; t++) {
                const i = r[t];
                if (i.index === e) break;
                Le(i) && n.unshift(i.dataset)
            }
            return n
        }(e, r);
        c.push(Fe({
            x: null,
            y: n.bottom
        }, i));
        for (let t = 0; t < a.length; t++) {
            const e = a[t];
            for (let t = e.start; t <= e.end; t++) Ie(o, s[t], c)
        }
        return new pe({
            points: o,
            options: {}
        })
    }
    const Le = t => "line" === t.type && !t.hidden;

    function Ie(t, e, n) {
        const r = [];
        for (let i = 0; i < n.length; i++) {
            const o = n[i],
                {
                    first: a,
                    last: s,
                    point: c
                } = Re(o, e, "x");
            if (!(!c || a && s))
                if (a) r.unshift(c);
                else if (t.push(c), !s) break
        }
        t.push(...r)
    }

    function Re(t, e, n) {
        const r = t.interpolate(e, n);
        if (!r) return {};
        const i = r[n],
            o = t.segments,
            a = t.points;
        let s = !1,
            c = !1;
        for (let t = 0; t < o.length; t++) {
            const e = o[t],
                r = a[e.start][n],
                u = a[e.end][n];
            if (i >= r && i <= u) {
                s = i === r, c = i === u;
                break
            }
        }
        return {
            first: s,
            last: c,
            point: r
        }
    }

    function Fe(t, e) {
        let n = [],
            i = !1;
        return Object(r.ub)(t) ? (i = !0, n = t) : n = function(t, e) {
            const {
                x: n = null,
                y: r = null
            } = t || {}, i = e.points, o = [];
            return e.segments.forEach(t => {
                const e = i[t.start],
                    a = i[t.end];
                null !== r ? (o.push({
                    x: e.x,
                    y: r
                }), o.push({
                    x: a.x,
                    y: r
                })) : null !== n && (o.push({
                    x: n,
                    y: e.y
                }), o.push({
                    x: n,
                    y: a.y
                }))
            }), o
        }(t, e), n.length ? new pe({
            points: n,
            options: {
                tension: 0
            },
            _loop: i,
            _fullLoop: i
        }) : null
    }

    function ze(t, e, n) {
        let i = t[e].fill;
        const o = [e];
        let a;
        if (!n) return i;
        for (; !1 !== i && -1 === o.indexOf(i);) {
            if (!Object(r.zb)(i)) return i;
            if (a = t[i], !a) return !1;
            if (a.visible) return i;
            o.push(i), i = a.fill
        }
        return !1
    }

    function Ne(t, e, n) {
        t.beginPath(), e.path(t), t.lineTo(e.last().x, n), t.lineTo(e.first().x, n), t.closePath(), t.clip()
    }

    function Be(t, e, n, i) {
        if (i) return;
        let o = e[t],
            a = n[t];
        return "angle" === t && (o = Object(r.mb)(o), a = Object(r.mb)(a)), {
            property: t,
            start: o,
            end: a
        }
    }

    function We(t, e, n, r) {
        return t && e ? r(t[n], e[n]) : t ? t[n] : e ? e[n] : 0
    }

    function Ve(t, e, n) {
        const {
            top: r,
            bottom: i
        } = e.chart.chartArea, {
            property: o,
            start: a,
            end: s
        } = n || {};
        "x" === o && (t.beginPath(), t.rect(a, r, s - a, i - r), t.clip())
    }

    function He(t, e, n, r) {
        const i = e.interpolate(n, r);
        i && t.lineTo(i.x, i.y)
    }

    function Ue(t, e) {
        const {
            line: n,
            target: i,
            property: o,
            color: a,
            scale: s
        } = e, c = function(t, e, n) {
            const i = t.segments,
                o = t.points,
                a = e.points,
                s = [];
            for (const t of i) {
                const i = Be(n, o[t.start], o[t.end], t.loop);
                if (!e.segments) {
                    s.push({
                        source: t,
                        target: i,
                        start: o[t.start],
                        end: o[t.end]
                    });
                    continue
                }
                const c = Object(r.bb)(e, i);
                for (const e of c) {
                    const c = Be(n, a[e.start], a[e.end], e.loop),
                        u = Object(r.lb)(t, o, c);
                    for (const t of u) s.push({
                        source: t,
                        target: e,
                        start: {
                            [n]: We(i, c, "start", Math.max)
                        },
                        end: {
                            [n]: We(i, c, "end", Math.min)
                        }
                    })
                }
            }
            return s
        }(n, i, o);
        for (const {
                source: e,
                target: r,
                start: u,
                end: l
            } of c) {
            const {
                style: {
                    backgroundColor: c = a
                } = {}
            } = e;
            t.save(), t.fillStyle = c, Ve(t, s, Be(o, u, l)), t.beginPath();
            const f = !!n.pathSegment(t, e);
            f ? t.closePath() : He(t, i, l, o);
            const h = !!i.pathSegment(t, r, {
                    move: f,
                    reverse: !0
                }),
                d = f && h;
            d || He(t, i, u, o), t.closePath(), t.fill(d ? "evenodd" : "nonzero"), t.restore()
        }
    }

    function $e(t, e, n) {
        const i = function(t) {
                const {
                    chart: e,
                    fill: n,
                    line: i
                } = t;
                if (Object(r.zb)(n)) return function(t, e) {
                    const n = t.getDatasetMeta(e);
                    return n && t.isDatasetVisible(e) ? n.dataset : null
                }(e, n);
                if ("stack" === n) return Ce(t);
                const o = De(t);
                return o instanceof Te ? o : Fe(o, i)
            }(e),
            {
                line: o,
                scale: a,
                axis: s
            } = e,
            c = o.options,
            u = c.fill,
            l = c.backgroundColor,
            {
                above: f = l,
                below: h = l
            } = u || {};
        i && o.points.length && (Object(r.Db)(t, n), function(t, e) {
            const {
                line: n,
                target: r,
                above: i,
                below: o,
                area: a,
                scale: s
            } = e, c = n._loop ? "angle" : e.axis;
            t.save(), "x" === c && o !== i && (Ne(t, r, a.top), Ue(t, {
                line: n,
                target: r,
                color: i,
                scale: s,
                property: c
            }), t.restore(), t.save(), Ne(t, r, a.bottom)), Ue(t, {
                line: n,
                target: r,
                color: o,
                scale: s,
                property: c
            }), t.restore()
        }(t, {
            line: o,
            target: i,
            above: f,
            below: h,
            area: n,
            scale: a,
            axis: s
        }), Object(r.Fb)(t))
    }
    var Ye = {
        id: "filler",
        afterDatasetsUpdate(t, e, n) {
            const r = (t.data.datasets || []).length,
                i = [];
            let o, a, s, c;
            for (a = 0; a < r; ++a) o = t.getDatasetMeta(a), s = o.dataset, c = null, s && s.options && s instanceof pe && (c = {
                visible: t.isDatasetVisible(a),
                index: a,
                fill: Pe(s, a, r),
                chart: t,
                axis: o.controller.options.indexAxis,
                scale: o.vScale,
                line: s
            }), o.$filler = c, i.push(c);
            for (a = 0; a < r; ++a) c = i[a], c && !1 !== c.fill && (c.fill = ze(i, a, n.propagate))
        },
        beforeDraw(t, e, n) {
            const r = "beforeDraw" === n.drawTime,
                i = t.getSortedVisibleDatasetMetas(),
                o = t.chartArea;
            for (let e = i.length - 1; e >= 0; --e) {
                const n = i[e].$filler;
                n && (n.line.updateControlPoints(o), r && $e(t.ctx, n, o))
            }
        },
        beforeDatasetsDraw(t, e, n) {
            if ("beforeDatasetsDraw" !== n.drawTime) return;
            const r = t.getSortedVisibleDatasetMetas();
            for (let e = r.length - 1; e >= 0; --e) {
                const n = r[e].$filler;
                n && $e(t.ctx, n, t.chartArea)
            }
        },
        beforeDatasetDraw(t, e, n) {
            const r = e.meta.$filler;
            r && !1 !== r.fill && "beforeDatasetDraw" === n.drawTime && $e(t.ctx, r, t.chartArea)
        },
        defaults: {
            propagate: !0,
            drawTime: "beforeDatasetDraw"
        }
    };
    const qe = (t, e) => {
        let {
            boxHeight: n = e,
            boxWidth: r = e
        } = t;
        return t.usePointStyle && (n = Math.min(n, e), r = Math.min(r, e)), {
            boxWidth: r,
            boxHeight: n,
            itemHeight: Math.max(e, n)
        }
    };
    class Ge extends bt {
        constructor(t) {
            super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
        }
        update(t, e, n) {
            const r = this;
            r.maxWidth = t, r.maxHeight = e, r._margins = n, r.setDimensions(), r.buildLabels(), r.fit()
        }
        setDimensions() {
            const t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height)
        }
        buildLabels() {
            const t = this,
                e = t.options.labels || {};
            let n = Object(r.o)(e.generateLabels, [t.chart], t) || [];
            e.filter && (n = n.filter(n => e.filter(n, t.chart.data))), e.sort && (n = n.sort((n, r) => e.sort(n, r, t.chart.data))), t.options.reverse && n.reverse(), t.legendItems = n
        }
        fit() {
            const t = this,
                {
                    options: e,
                    ctx: n
                } = t;
            if (!e.display) return void(t.width = t.height = 0);
            const i = e.labels,
                o = Object(r.x)(i.font),
                a = o.size,
                s = t._computeTitleHeight(),
                {
                    boxWidth: c,
                    itemHeight: u
                } = qe(i, a);
            let l, f;
            n.font = o.string, t.isHorizontal() ? (l = t.maxWidth, f = t._fitRows(s, a, c, u) + 10) : (f = t.maxHeight, l = t._fitCols(s, a, c, u) + 10), t.width = Math.min(l, e.maxWidth || t.maxWidth), t.height = Math.min(f, e.maxHeight || t.maxHeight)
        }
        _fitRows(t, e, n, r) {
            const {
                ctx: i,
                maxWidth: o,
                options: {
                    labels: {
                        padding: a
                    }
                }
            } = this, s = this.legendHitBoxes = [], c = this.lineWidths = [0], u = r + a;
            let l = t;
            i.textAlign = "left", i.textBaseline = "middle";
            let f = -1,
                h = -u;
            return this.legendItems.forEach((t, d) => {
                const p = n + e / 2 + i.measureText(t.text).width;
                (0 === d || c[c.length - 1] + p + 2 * a > o) && (l += u, c[c.length - (d > 0 ? 0 : 1)] = 0, h += u, f++), s[d] = {
                    left: 0,
                    top: h,
                    row: f,
                    width: p,
                    height: r
                }, c[c.length - 1] += p + a
            }), l
        }
        _fitCols(t, e, n, r) {
            const {
                ctx: i,
                maxHeight: o,
                options: {
                    labels: {
                        padding: a
                    }
                }
            } = this, s = this.legendHitBoxes = [], c = this.columnSizes = [], u = o - t;
            let l = a,
                f = 0,
                h = 0,
                d = 0,
                p = 0,
                g = 0;
            return this.legendItems.forEach((t, o) => {
                const b = n + e / 2 + i.measureText(t.text).width;
                o > 0 && h + e + 2 * a > u && (l += f + a, c.push({
                    width: f,
                    height: h
                }), d += f + a, g++, p = 0, f = h = 0), f = Math.max(f, b), h += e + a, s[o] = {
                    left: d,
                    top: p,
                    col: g,
                    width: b,
                    height: r
                }, p += r + a
            }), l += f, c.push({
                width: f,
                height: h
            }), l
        }
        adjustHitBoxes() {
            const t = this;
            if (!t.options.display) return;
            const e = t._computeTitleHeight(),
                {
                    legendHitBoxes: n,
                    options: {
                        align: i,
                        labels: {
                            padding: o
                        }
                    }
                } = t;
            if (this.isHorizontal()) {
                let a = 0,
                    s = Object(r.z)(i, t.left + o, t.right - t.lineWidths[a]);
                for (const c of n) a !== c.row && (a = c.row, s = Object(r.z)(i, t.left + o, t.right - t.lineWidths[a])), c.top += t.top + e + o, c.left = s, s += c.width + o
            } else {
                let a = 0,
                    s = Object(r.z)(i, t.top + e + o, t.bottom - t.columnSizes[a].height);
                for (const c of n) c.col !== a && (a = c.col, s = Object(r.z)(i, t.top + e + o, t.bottom - t.columnSizes[a].height)), c.top = s, c.left += t.left + o, s += c.height + o
            }
        }
        isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position
        }
        draw() {
            const t = this;
            if (t.options.display) {
                const e = t.ctx;
                Object(r.Db)(e, t), t._draw(), Object(r.Fb)(e)
            }
        }
        _draw() {
            const t = this,
                {
                    options: e,
                    columnSizes: n,
                    lineWidths: i,
                    ctx: o
                } = t,
                {
                    align: a,
                    labels: s
                } = e,
                c = r.wb.color,
                u = Object(r.nb)(e.rtl, t.left, t.width),
                l = Object(r.x)(s.font),
                {
                    color: f,
                    padding: h
                } = s,
                d = l.size,
                p = d / 2;
            let g;
            t.drawTitle(), o.textAlign = u.textAlign("left"), o.textBaseline = "middle", o.lineWidth = .5, o.font = l.string;
            const {
                boxWidth: b,
                boxHeight: v,
                itemHeight: m
            } = qe(s, d), y = t.isHorizontal(), x = this._computeTitleHeight();
            g = y ? {
                x: Object(r.z)(a, t.left + h, t.right - i[0]),
                y: t.top + h + x,
                line: 0
            } : {
                x: t.left + h,
                y: Object(r.z)(a, t.top + x + h, t.bottom - n[0].height),
                line: 0
            }, Object(r.ob)(t.ctx, e.textDirection);
            const _ = m + h;
            t.legendItems.forEach((e, w) => {
                o.strokeStyle = e.fontColor || f, o.fillStyle = e.fontColor || f;
                const O = o.measureText(e.text).width,
                    j = u.textAlign(e.textAlign || (e.textAlign = s.textAlign)),
                    S = b + d / 2 + O;
                let M = g.x,
                    k = g.y;
                u.setWidth(t.width), y ? w > 0 && M + S + h > t.right && (k = g.y += _, g.line++, M = g.x = Object(r.z)(a, t.left + h, t.right - i[g.line])) : w > 0 && k + _ > t.bottom && (M = g.x = M + n[g.line].width + h, g.line++, k = g.y = Object(r.z)(a, t.top + x + h, t.bottom - n[g.line].height));
                ! function(t, e, n) {
                    if (isNaN(b) || b <= 0 || isNaN(v) || v < 0) return;
                    o.save();
                    const i = Object(r.Ob)(n.lineWidth, 1);
                    if (o.fillStyle = Object(r.Ob)(n.fillStyle, c), o.lineCap = Object(r.Ob)(n.lineCap, "butt"), o.lineDashOffset = Object(r.Ob)(n.lineDashOffset, 0), o.lineJoin = Object(r.Ob)(n.lineJoin, "miter"), o.lineWidth = i, o.strokeStyle = Object(r.Ob)(n.strokeStyle, c), o.setLineDash(Object(r.Ob)(n.lineDash, [])), s.usePointStyle) {
                        const a = {
                                radius: b * Math.SQRT2 / 2,
                                pointStyle: n.pointStyle,
                                rotation: n.rotation,
                                borderWidth: i
                            },
                            s = u.xPlus(t, b / 2),
                            c = e + p;
                        Object(r.hb)(o, a, s, c)
                    } else {
                        const a = e + Math.max((d - v) / 2, 0),
                            s = u.leftForLtr(t, b),
                            c = Object(r.kb)(n.borderRadius);
                        o.beginPath(), Object.values(c).some(t => 0 !== t) ? Object(r.ib)(o, {
                            x: s,
                            y: a,
                            w: b,
                            h: v,
                            radius: c
                        }) : o.rect(s, a, b, v), o.fill(), 0 !== i && o.stroke()
                    }
                    o.restore()
                }(u.x(M), k, e), M = Object(r.pb)(j, M + b + p, t.right),
                    function(t, e, n) {
                        Object(r.w)(o, n.text, t, e + m / 2, l, {
                            strikethrough: n.hidden,
                            textAlign: n.textAlign
                        })
                    }(u.x(M), k, e), y ? g.x += S + h : g.y += _
            }), Object(r.qb)(t.ctx, e.textDirection)
        }
        drawTitle() {
            const t = this,
                e = t.options,
                n = e.title,
                i = Object(r.x)(n.font),
                o = Object(r.d)(n.padding);
            if (!n.display) return;
            const a = Object(r.nb)(e.rtl, t.left, t.width),
                s = t.ctx,
                c = n.position,
                u = i.size / 2,
                l = o.top + u;
            let f, h = t.left,
                d = t.width;
            if (this.isHorizontal()) d = Math.max(...t.lineWidths), f = t.top + l, h = Object(r.z)(e.align, h, t.right - d);
            else {
                const n = t.columnSizes.reduce((t, e) => Math.max(t, e.height), 0);
                f = l + Object(r.z)(e.align, t.top, t.bottom - n - e.labels.padding - t._computeTitleHeight())
            }
            const p = Object(r.z)(c, h, h + d);
            s.textAlign = a.textAlign(Object(r.y)(c)), s.textBaseline = "middle", s.strokeStyle = n.color, s.fillStyle = n.color, s.font = i.string, Object(r.w)(s, n.text, p, f, i)
        }
        _computeTitleHeight() {
            const t = this.options.title,
                e = Object(r.x)(t.font),
                n = Object(r.d)(t.padding);
            return t.display ? e.lineHeight + n.height : 0
        }
        _getLegendItemAt(t, e) {
            const n = this;
            let r, i, o;
            if (t >= n.left && t <= n.right && e >= n.top && e <= n.bottom)
                for (o = n.legendHitBoxes, r = 0; r < o.length; ++r)
                    if (i = o[r], t >= i.left && t <= i.left + i.width && e >= i.top && e <= i.top + i.height) return n.legendItems[r];
            return null
        }
        handleEvent(t) {
            const e = this,
                n = e.options;
            if (! function(t, e) {
                    if ("mousemove" === t && (e.onHover || e.onLeave)) return !0;
                    if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
                    return !1
                }(t.type, n)) return;
            const i = e._getLegendItemAt(t.x, t.y);
            if ("mousemove" === t.type) {
                const s = e._hoveredItem,
                    c = (a = i, null !== (o = s) && null !== a && o.datasetIndex === a.datasetIndex && o.index === a.index);
                s && !c && Object(r.o)(n.onLeave, [t, s, e], e), e._hoveredItem = i, i && !c && Object(r.o)(n.onHover, [t, i, e], e)
            } else i && Object(r.o)(n.onClick, [t, i, e], e);
            var o, a
        }
    }
    var Xe = {
        id: "legend",
        _element: Ge,
        start(t, e, n) {
            const r = t.legend = new Ge({
                ctx: t.ctx,
                options: n,
                chart: t
            });
            tt.configure(t, r, n), tt.addBox(t, r)
        },
        stop(t) {
            tt.removeBox(t, t.legend), delete t.legend
        },
        beforeUpdate(t, e, n) {
            const r = t.legend;
            tt.configure(t, r, n), r.options = n
        },
        afterUpdate(t) {
            const e = t.legend;
            e.buildLabels(), e.adjustHitBoxes()
        },
        afterEvent(t, e) {
            e.replay || t.legend.handleEvent(e.event)
        },
        defaults: {
            display: !0,
            position: "top",
            align: "center",
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick(t, e, n) {
                const r = e.datasetIndex,
                    i = n.chart;
                i.isDatasetVisible(r) ? (i.hide(r), e.hidden = !0) : (i.show(r), e.hidden = !1)
            },
            onHover: null,
            onLeave: null,
            labels: {
                color: t => t.chart.options.color,
                boxWidth: 40,
                padding: 10,
                generateLabels(t) {
                    const e = t.data.datasets,
                        {
                            labels: {
                                usePointStyle: n,
                                pointStyle: i,
                                textAlign: o,
                                color: a
                            }
                        } = t.legend.options;
                    return t._getSortedDatasetMetas().map(t => {
                        const s = t.controller.getStyle(n ? 0 : void 0),
                            c = Object(r.d)(s.borderWidth);
                        return {
                            text: e[t.index].label,
                            fillStyle: s.backgroundColor,
                            fontColor: a,
                            hidden: !t.visible,
                            lineCap: s.borderCapStyle,
                            lineDash: s.borderDash,
                            lineDashOffset: s.borderDashOffset,
                            lineJoin: s.borderJoinStyle,
                            lineWidth: (c.width + c.height) / 4,
                            strokeStyle: s.borderColor,
                            pointStyle: i || s.pointStyle,
                            rotation: s.rotation,
                            textAlign: o || s.textAlign,
                            borderRadius: 0,
                            datasetIndex: t.index
                        }
                    }, this)
                }
            },
            title: {
                color: t => t.chart.options.color,
                display: !1,
                position: "center",
                text: ""
            }
        },
        descriptors: {
            _scriptable: t => !t.startsWith("on"),
            labels: {
                _scriptable: t => !["generateLabels", "filter", "sort"].includes(t)
            }
        }
    };
    class Ke extends bt {
        constructor(t) {
            super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0
        }
        update(t, e) {
            const n = this,
                i = n.options;
            if (n.left = 0, n.top = 0, !i.display) return void(n.width = n.height = n.right = n.bottom = 0);
            n.width = n.right = t, n.height = n.bottom = e;
            const o = Object(r.ub)(i.text) ? i.text.length : 1;
            n._padding = Object(r.d)(i.padding);
            const a = o * Object(r.x)(i.font).lineHeight + n._padding.height;
            n.isHorizontal() ? n.height = a : n.width = a
        }
        isHorizontal() {
            const t = this.options.position;
            return "top" === t || "bottom" === t
        }
        _drawArgs(t) {
            const {
                top: e,
                left: n,
                bottom: i,
                right: o,
                options: a
            } = this, s = a.align;
            let c, u, l, f = 0;
            return this.isHorizontal() ? (u = Object(r.z)(s, n, o), l = e + t, c = o - n) : ("left" === a.position ? (u = n + t, l = Object(r.z)(s, i, e), f = -.5 * r.q) : (u = o - t, l = Object(r.z)(s, e, i), f = .5 * r.q), c = i - e), {
                titleX: u,
                titleY: l,
                maxWidth: c,
                rotation: f
            }
        }
        draw() {
            const t = this.ctx,
                e = this.options;
            if (!e.display) return;
            const n = Object(r.x)(e.font),
                i = n.lineHeight / 2 + this._padding.top,
                {
                    titleX: o,
                    titleY: a,
                    maxWidth: s,
                    rotation: c
                } = this._drawArgs(i);
            Object(r.w)(t, e.text, 0, 0, n, {
                color: e.color,
                maxWidth: s,
                rotation: c,
                textAlign: Object(r.y)(e.align),
                textBaseline: "middle",
                translation: [o, a]
            })
        }
    }
    var Je = {
        id: "title",
        _element: Ke,
        start(t, e, n) {
            ! function(t, e) {
                const n = new Ke({
                    ctx: t.ctx,
                    options: e,
                    chart: t
                });
                tt.configure(t, n, e), tt.addBox(t, n), t.titleBlock = n
            }(t, n)
        },
        stop(t) {
            const e = t.titleBlock;
            tt.removeBox(t, e), delete t.titleBlock
        },
        beforeUpdate(t, e, n) {
            const r = t.titleBlock;
            tt.configure(t, r, n), r.options = n
        },
        defaults: {
            align: "center",
            display: !1,
            font: {
                weight: "bold"
            },
            fullSize: !0,
            padding: 10,
            position: "top",
            text: "",
            weight: 2e3
        },
        defaultRoutes: {
            color: "color"
        },
        descriptors: {
            _scriptable: !0,
            _indexable: !1
        }
    };
    const Ze = {
        average(t) {
            if (!t.length) return !1;
            let e, n, r = 0,
                i = 0,
                o = 0;
            for (e = 0, n = t.length; e < n; ++e) {
                const n = t[e].element;
                if (n && n.hasValue()) {
                    const t = n.tooltipPosition();
                    r += t.x, i += t.y, ++o
                }
            }
            return {
                x: r / o,
                y: i / o
            }
        },
        nearest(t, e) {
            if (!t.length) return !1;
            let n, i, o, a = e.x,
                s = e.y,
                c = Number.POSITIVE_INFINITY;
            for (n = 0, i = t.length; n < i; ++n) {
                const i = t[n].element;
                if (i && i.hasValue()) {
                    const t = i.getCenterPoint(),
                        n = Object(r.sb)(e, t);
                    n < c && (c = n, o = i)
                }
            }
            if (o) {
                const t = o.tooltipPosition();
                a = t.x, s = t.y
            }
            return {
                x: a,
                y: s
            }
        }
    };

    function Qe(t, e) {
        return e && (Object(r.ub)(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
    }

    function tn(t) {
        return ("string" == typeof t || t instanceof String) && t.indexOf("\n") > -1 ? t.split("\n") : t
    }

    function en(t, e) {
        const {
            element: n,
            datasetIndex: r,
            index: i
        } = e, o = t.getDatasetMeta(r).controller, {
            label: a,
            value: s
        } = o.getLabelAndValue(i);
        return {
            chart: t,
            label: a,
            parsed: o.getParsed(i),
            raw: t.data.datasets[r].data[i],
            formattedValue: s,
            dataset: o.getDataset(),
            dataIndex: i,
            datasetIndex: r,
            element: n
        }
    }

    function nn(t, e) {
        const n = t._chart.ctx,
            {
                body: i,
                footer: o,
                title: a
            } = t,
            {
                boxWidth: s,
                boxHeight: c
            } = e,
            u = Object(r.x)(e.bodyFont),
            l = Object(r.x)(e.titleFont),
            f = Object(r.x)(e.footerFont),
            h = a.length,
            d = o.length,
            p = i.length,
            g = Object(r.d)(e.padding);
        let b = g.height,
            v = 0,
            m = i.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0);
        if (m += t.beforeBody.length + t.afterBody.length, h && (b += h * l.lineHeight + (h - 1) * e.titleSpacing + e.titleMarginBottom), m) {
            b += p * (e.displayColors ? Math.max(c, u.lineHeight) : u.lineHeight) + (m - p) * u.lineHeight + (m - 1) * e.bodySpacing
        }
        d && (b += e.footerMarginTop + d * f.lineHeight + (d - 1) * e.footerSpacing);
        let y = 0;
        const x = function(t) {
            v = Math.max(v, n.measureText(t).width + y)
        };
        return n.save(), n.font = l.string, Object(r.e)(t.title, x), n.font = u.string, Object(r.e)(t.beforeBody.concat(t.afterBody), x), y = e.displayColors ? s + 2 : 0, Object(r.e)(i, t => {
            Object(r.e)(t.before, x), Object(r.e)(t.lines, x), Object(r.e)(t.after, x)
        }), y = 0, n.font = f.string, Object(r.e)(t.footer, x), n.restore(), v += g.width, {
            width: v,
            height: b
        }
    }

    function rn(t, e, n, r) {
        const {
            x: i,
            width: o
        } = n, {
            width: a,
            chartArea: {
                left: s,
                right: c
            }
        } = t;
        let u = "center";
        return "center" === r ? u = i <= (s + c) / 2 ? "left" : "right" : i <= o / 2 ? u = "left" : i >= a - o / 2 && (u = "right"),
            function(t, e, n, r) {
                const {
                    x: i,
                    width: o
                } = r, a = n.caretSize + n.caretPadding;
                return "left" === t && i + o + a > e.width || ("right" === t && i - o - a < 0 || void 0)
            }(u, t, e, n) && (u = "center"), u
    }

    function on(t, e, n) {
        const r = e.yAlign || function(t, e) {
            const {
                y: n,
                height: r
            } = e;
            return n < r / 2 ? "top" : n > t.height - r / 2 ? "bottom" : "center"
        }(t, n);
        return {
            xAlign: e.xAlign || rn(t, e, n, r),
            yAlign: r
        }
    }

    function an(t, e, n, i) {
        const {
            caretSize: o,
            caretPadding: a,
            cornerRadius: s
        } = t, {
            xAlign: c,
            yAlign: u
        } = n, l = o + a, f = s + a;
        let h = function(t, e) {
            let {
                x: n,
                width: r
            } = t;
            return "right" === e ? n -= r : "center" === e && (n -= r / 2), n
        }(e, c);
        const d = function(t, e, n) {
            let {
                y: r,
                height: i
            } = t;
            return "top" === e ? r += n : r -= "bottom" === e ? i + n : i / 2, r
        }(e, u, l);
        return "center" === u ? "left" === c ? h += l : "right" === c && (h -= l) : "left" === c ? h -= f : "right" === c && (h += f), {
            x: Object(r.Qb)(h, 0, i.width - e.width),
            y: Object(r.Qb)(d, 0, i.height - e.height)
        }
    }

    function sn(t, e, n) {
        const i = Object(r.d)(n.padding);
        return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - i.right : t.x + i.left
    }

    function cn(t) {
        return Qe([], tn(t))
    }

    function un(t, e) {
        const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return n ? t.override(n) : t
    }
    class ln extends bt {
        constructor(t) {
            super(), this.opacity = 0, this._active = [], this._chart = t._chart, this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0
        }
        initialize(t) {
            this.options = t, this._cachedAnimations = void 0, this.$context = void 0
        }
        _resolveAnimations() {
            const t = this,
                e = t._cachedAnimations;
            if (e) return e;
            const n = t._chart,
                r = t.options.setContext(t.getContext()),
                i = r.enabled && n.options.animation && r.animations,
                o = new c(t._chart, i);
            return i._cacheable && (t._cachedAnimations = Object.freeze(o)), o
        }
        getContext() {
            const t = this;
            return t.$context || (t.$context = (e = t._chart.getContext(), n = t, r = t._tooltipItems, Object.assign(Object.create(e), {
                tooltip: n,
                tooltipItems: r,
                type: "tooltip"
            })));
            var e, n, r
        }
        getTitle(t, e) {
            const {
                callbacks: n
            } = e, r = n.beforeTitle.apply(this, [t]), i = n.title.apply(this, [t]), o = n.afterTitle.apply(this, [t]);
            let a = [];
            return a = Qe(a, tn(r)), a = Qe(a, tn(i)), a = Qe(a, tn(o)), a
        }
        getBeforeBody(t, e) {
            return cn(e.callbacks.beforeBody.apply(this, [t]))
        }
        getBody(t, e) {
            const n = this,
                {
                    callbacks: i
                } = e,
                o = [];
            return Object(r.e)(t, t => {
                const e = {
                        before: [],
                        lines: [],
                        after: []
                    },
                    r = un(i, t);
                Qe(e.before, tn(r.beforeLabel.call(n, t))), Qe(e.lines, r.label.call(n, t)), Qe(e.after, tn(r.afterLabel.call(n, t))), o.push(e)
            }), o
        }
        getAfterBody(t, e) {
            return cn(e.callbacks.afterBody.apply(this, [t]))
        }
        getFooter(t, e) {
            const {
                callbacks: n
            } = e, r = n.beforeFooter.apply(this, [t]), i = n.footer.apply(this, [t]), o = n.afterFooter.apply(this, [t]);
            let a = [];
            return a = Qe(a, tn(r)), a = Qe(a, tn(i)), a = Qe(a, tn(o)), a
        }
        _createItems(t) {
            const e = this,
                n = e._active,
                i = e._chart.data,
                o = [],
                a = [],
                s = [];
            let c, u, l = [];
            for (c = 0, u = n.length; c < u; ++c) l.push(en(e._chart, n[c]));
            return t.filter && (l = l.filter((e, n, r) => t.filter(e, n, r, i))), t.itemSort && (l = l.sort((e, n) => t.itemSort(e, n, i))), Object(r.e)(l, n => {
                const r = un(t.callbacks, n);
                o.push(r.labelColor.call(e, n)), a.push(r.labelPointStyle.call(e, n)), s.push(r.labelTextColor.call(e, n))
            }), e.labelColors = o, e.labelPointStyles = a, e.labelTextColors = s, e.dataPoints = l, l
        }
        update(t, e) {
            const n = this,
                r = n.options.setContext(n.getContext()),
                i = n._active;
            let o, a = [];
            if (i.length) {
                const t = Ze[r.position].call(n, i, n._eventPosition);
                a = n._createItems(r), n.title = n.getTitle(a, r), n.beforeBody = n.getBeforeBody(a, r), n.body = n.getBody(a, r), n.afterBody = n.getAfterBody(a, r), n.footer = n.getFooter(a, r);
                const e = n._size = nn(n, r),
                    s = Object.assign({}, t, e),
                    c = on(n._chart, r, s),
                    u = an(r, s, c, n._chart);
                n.xAlign = c.xAlign, n.yAlign = c.yAlign, o = {
                    opacity: 1,
                    x: u.x,
                    y: u.y,
                    width: e.width,
                    height: e.height,
                    caretX: t.x,
                    caretY: t.y
                }
            } else 0 !== n.opacity && (o = {
                opacity: 0
            });
            n._tooltipItems = a, n.$context = void 0, o && n._resolveAnimations().update(n, o), t && r.external && r.external.call(n, {
                chart: n._chart,
                tooltip: n,
                replay: e
            })
        }
        drawCaret(t, e, n, r) {
            const i = this.getCaretPosition(t, n, r);
            e.lineTo(i.x1, i.y1), e.lineTo(i.x2, i.y2), e.lineTo(i.x3, i.y3)
        }
        getCaretPosition(t, e, n) {
            const {
                xAlign: r,
                yAlign: i
            } = this, {
                cornerRadius: o,
                caretSize: a
            } = n, {
                x: s,
                y: c
            } = t, {
                width: u,
                height: l
            } = e;
            let f, h, d, p, g, b;
            return "center" === i ? (g = c + l / 2, "left" === r ? (f = s, h = f - a, p = g + a, b = g - a) : (f = s + u, h = f + a, p = g - a, b = g + a), d = f) : (h = "left" === r ? s + o + a : "right" === r ? s + u - o - a : this.caretX, "top" === i ? (p = c, g = p - a, f = h - a, d = h + a) : (p = c + l, g = p + a, f = h + a, d = h - a), b = p), {
                x1: f,
                x2: h,
                x3: d,
                y1: p,
                y2: g,
                y3: b
            }
        }
        drawTitle(t, e, n) {
            const i = this,
                o = i.title,
                a = o.length;
            let s, c, u;
            if (a) {
                const l = Object(r.nb)(n.rtl, i.x, i.width);
                for (t.x = sn(i, n.titleAlign, n), e.textAlign = l.textAlign(n.titleAlign), e.textBaseline = "middle", s = Object(r.x)(n.titleFont), c = n.titleSpacing, e.fillStyle = n.titleColor, e.font = s.string, u = 0; u < a; ++u) e.fillText(o[u], l.x(t.x), t.y + s.lineHeight / 2), t.y += s.lineHeight + c, u + 1 === a && (t.y += n.titleMarginBottom - c)
            }
        }
        _drawColorBox(t, e, n, i, o) {
            const a = this.labelColors[n],
                s = this.labelPointStyles[n],
                {
                    boxHeight: c,
                    boxWidth: u
                } = o,
                l = Object(r.x)(o.bodyFont),
                f = sn(this, "left", o),
                h = i.x(f),
                d = c < l.lineHeight ? (l.lineHeight - c) / 2 : 0,
                p = e.y + d;
            if (o.usePointStyle) {
                const e = {
                        radius: Math.min(u, c) / 2,
                        pointStyle: s.pointStyle,
                        rotation: s.rotation,
                        borderWidth: 1
                    },
                    n = i.leftForLtr(h, u) + u / 2,
                    l = p + c / 2;
                t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Object(r.hb)(t, e, n, l), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, Object(r.hb)(t, e, n, l)
            } else {
                t.lineWidth = a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
                const e = i.leftForLtr(h, u),
                    n = i.leftForLtr(i.xPlus(h, 1), u - 2),
                    s = Object(r.kb)(a.borderRadius);
                Object.values(s).some(t => 0 !== t) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Object(r.ib)(t, {
                    x: e,
                    y: p,
                    w: u,
                    h: c,
                    radius: s
                }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), Object(r.ib)(t, {
                    x: n,
                    y: p + 1,
                    w: u - 2,
                    h: c - 2,
                    radius: s
                }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(e, p, u, c), t.strokeRect(e, p, u, c), t.fillStyle = a.backgroundColor, t.fillRect(n, p + 1, u - 2, c - 2))
            }
            t.fillStyle = this.labelTextColors[n]
        }
        drawBody(t, e, n) {
            const i = this,
                {
                    body: o
                } = i,
                {
                    bodySpacing: a,
                    bodyAlign: s,
                    displayColors: c,
                    boxHeight: u,
                    boxWidth: l
                } = n,
                f = Object(r.x)(n.bodyFont);
            let h = f.lineHeight,
                d = 0;
            const p = Object(r.nb)(n.rtl, i.x, i.width),
                g = function(n) {
                    e.fillText(n, p.x(t.x + d), t.y + h / 2), t.y += h + a
                },
                b = p.textAlign(s);
            let v, m, y, x, _, w, O;
            for (e.textAlign = s, e.textBaseline = "middle", e.font = f.string, t.x = sn(i, b, n), e.fillStyle = n.bodyColor, Object(r.e)(i.beforeBody, g), d = c && "right" !== b ? "center" === s ? l / 2 + 1 : l + 2 : 0, x = 0, w = o.length; x < w; ++x) {
                for (v = o[x], m = i.labelTextColors[x], e.fillStyle = m, Object(r.e)(v.before, g), y = v.lines, c && y.length && (i._drawColorBox(e, t, x, p, n), h = Math.max(f.lineHeight, u)), _ = 0, O = y.length; _ < O; ++_) g(y[_]), h = f.lineHeight;
                Object(r.e)(v.after, g)
            }
            d = 0, h = f.lineHeight, Object(r.e)(i.afterBody, g), t.y -= a
        }
        drawFooter(t, e, n) {
            const i = this,
                o = i.footer,
                a = o.length;
            let s, c;
            if (a) {
                const u = Object(r.nb)(n.rtl, i.x, i.width);
                for (t.x = sn(i, n.footerAlign, n), t.y += n.footerMarginTop, e.textAlign = u.textAlign(n.footerAlign), e.textBaseline = "middle", s = Object(r.x)(n.footerFont), e.fillStyle = n.footerColor, e.font = s.string, c = 0; c < a; ++c) e.fillText(o[c], u.x(t.x), t.y + s.lineHeight / 2), t.y += s.lineHeight + n.footerSpacing
            }
        }
        drawBackground(t, e, n, r) {
            const {
                xAlign: i,
                yAlign: o
            } = this, {
                x: a,
                y: s
            } = t, {
                width: c,
                height: u
            } = n, l = r.cornerRadius;
            e.fillStyle = r.backgroundColor, e.strokeStyle = r.borderColor, e.lineWidth = r.borderWidth, e.beginPath(), e.moveTo(a + l, s), "top" === o && this.drawCaret(t, e, n, r), e.lineTo(a + c - l, s), e.quadraticCurveTo(a + c, s, a + c, s + l), "center" === o && "right" === i && this.drawCaret(t, e, n, r), e.lineTo(a + c, s + u - l), e.quadraticCurveTo(a + c, s + u, a + c - l, s + u), "bottom" === o && this.drawCaret(t, e, n, r), e.lineTo(a + l, s + u), e.quadraticCurveTo(a, s + u, a, s + u - l), "center" === o && "left" === i && this.drawCaret(t, e, n, r), e.lineTo(a, s + l), e.quadraticCurveTo(a, s, a + l, s), e.closePath(), e.fill(), r.borderWidth > 0 && e.stroke()
        }
        _updateAnimationTarget(t) {
            const e = this,
                n = e._chart,
                r = e.$animations,
                i = r && r.x,
                o = r && r.y;
            if (i || o) {
                const r = Ze[t.position].call(e, e._active, e._eventPosition);
                if (!r) return;
                const a = e._size = nn(e, t),
                    s = Object.assign({}, r, e._size),
                    c = on(n, t, s),
                    u = an(t, s, c, n);
                i._to === u.x && o._to === u.y || (e.xAlign = c.xAlign, e.yAlign = c.yAlign, e.width = a.width, e.height = a.height, e.caretX = r.x, e.caretY = r.y, e._resolveAnimations().update(e, u))
            }
        }
        draw(t) {
            const e = this,
                n = e.options.setContext(e.getContext());
            let i = e.opacity;
            if (!i) return;
            e._updateAnimationTarget(n);
            const o = {
                    width: e.width,
                    height: e.height
                },
                a = {
                    x: e.x,
                    y: e.y
                };
            i = Math.abs(i) < .001 ? 0 : i;
            const s = Object(r.d)(n.padding),
                c = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
            n.enabled && c && (t.save(), t.globalAlpha = i, e.drawBackground(a, t, o, n), Object(r.ob)(t, n.textDirection), a.y += s.top, e.drawTitle(a, t, n), e.drawBody(a, t, n), e.drawFooter(a, t, n), Object(r.qb)(t, n.textDirection), t.restore())
        }
        getActiveElements() {
            return this._active || []
        }
        setActiveElements(t, e) {
            const n = this,
                i = n._active,
                o = t.map(({
                    datasetIndex: t,
                    index: e
                }) => {
                    const r = n._chart.getDatasetMeta(t);
                    if (!r) throw new Error("Cannot find a dataset at index " + t);
                    return {
                        datasetIndex: t,
                        element: r.data[e],
                        index: e
                    }
                }),
                a = !Object(r.W)(i, o),
                s = n._positionChanged(o, e);
            (a || s) && (n._active = o, n._eventPosition = e, n.update(!0))
        }
        handleEvent(t, e) {
            const n = this,
                i = n.options,
                o = n._active || [];
            let a = !1,
                s = [];
            "mouseout" !== t.type && (s = n._chart.getElementsAtEventForMode(t, i.mode, i, e), i.reverse && s.reverse());
            const c = n._positionChanged(s, t);
            return a = e || !Object(r.W)(s, o) || c, a && (n._active = s, (i.enabled || i.external) && (n._eventPosition = {
                x: t.x,
                y: t.y
            }, n.update(!0, e))), a
        }
        _positionChanged(t, e) {
            const {
                caretX: n,
                caretY: r,
                options: i
            } = this, o = Ze[i.position].call(this, t, e);
            return !1 !== o && (n !== o.x || r !== o.y)
        }
    }
    ln.positioners = Ze;
    var fn = {
            id: "tooltip",
            _element: ln,
            positioners: Ze,
            afterInit(t, e, n) {
                n && (t.tooltip = new ln({
                    _chart: t,
                    options: n
                }))
            },
            beforeUpdate(t, e, n) {
                t.tooltip && t.tooltip.initialize(n)
            },
            reset(t, e, n) {
                t.tooltip && t.tooltip.initialize(n)
            },
            afterDraw(t) {
                const e = t.tooltip,
                    n = {
                        tooltip: e
                    };
                !1 !== t.notifyPlugins("beforeTooltipDraw", n) && (e && e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", n))
            },
            afterEvent(t, e) {
                if (t.tooltip) {
                    const n = e.replay;
                    t.tooltip.handleEvent(e.event, n) && (e.changed = !0)
                }
            },
            defaults: {
                enabled: !0,
                external: null,
                position: "average",
                backgroundColor: "rgba(0,0,0,0.8)",
                titleColor: "#fff",
                titleFont: {
                    weight: "bold"
                },
                titleSpacing: 2,
                titleMarginBottom: 6,
                titleAlign: "left",
                bodyColor: "#fff",
                bodySpacing: 2,
                bodyFont: {},
                bodyAlign: "left",
                footerColor: "#fff",
                footerSpacing: 2,
                footerMarginTop: 6,
                footerFont: {
                    weight: "bold"
                },
                footerAlign: "left",
                padding: 6,
                caretPadding: 2,
                caretSize: 5,
                cornerRadius: 6,
                boxHeight: (t, e) => e.bodyFont.size,
                boxWidth: (t, e) => e.bodyFont.size,
                multiKeyBackground: "#fff",
                displayColors: !0,
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                animation: {
                    duration: 400,
                    easing: "easeOutQuart"
                },
                animations: {
                    numbers: {
                        type: "number",
                        properties: ["x", "y", "width", "height", "caretX", "caretY"]
                    },
                    opacity: {
                        easing: "linear",
                        duration: 200
                    }
                },
                callbacks: {
                    beforeTitle: r.rb,
                    title(t) {
                        if (t.length > 0) {
                            const e = t[0],
                                n = e.chart.data.labels,
                                r = n ? n.length : 0;
                            if (this && this.options && "dataset" === this.options.mode) return e.dataset.label || "";
                            if (e.label) return e.label;
                            if (r > 0 && e.dataIndex < r) return n[e.dataIndex]
                        }
                        return ""
                    },
                    afterTitle: r.rb,
                    beforeBody: r.rb,
                    beforeLabel: r.rb,
                    label(t) {
                        if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
                        let e = t.dataset.label || "";
                        e && (e += ": ");
                        const n = t.formattedValue;
                        return Object(r.Cb)(n) || (e += n), e
                    },
                    labelColor(t) {
                        const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                        return {
                            borderColor: e.borderColor,
                            backgroundColor: e.backgroundColor,
                            borderWidth: e.borderWidth,
                            borderDash: e.borderDash,
                            borderDashOffset: e.borderDashOffset,
                            borderRadius: 0
                        }
                    },
                    labelTextColor() {
                        return this.options.bodyColor
                    },
                    labelPointStyle(t) {
                        const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
                        return {
                            pointStyle: e.pointStyle,
                            rotation: e.rotation
                        }
                    },
                    afterLabel: r.rb,
                    afterBody: r.rb,
                    beforeFooter: r.rb,
                    footer: r.rb,
                    afterFooter: r.rb
                }
            },
            defaultRoutes: {
                bodyFont: "font",
                footerFont: "font",
                titleFont: "font"
            },
            descriptors: {
                _scriptable: t => "filter" !== t && "itemSort" !== t && "external" !== t,
                _indexable: !1,
                callbacks: {
                    _scriptable: !1,
                    _indexable: !1
                },
                animation: {
                    _fallback: !1
                },
                animations: {
                    _fallback: "animation"
                }
            },
            additionalOptionScopes: ["interaction"]
        },
        hn = Object.freeze({
            __proto__: null,
            Decimation: Ae,
            Filler: Ye,
            Legend: Xe,
            Title: Je,
            Tooltip: fn
        });

    function dn(t, e, n) {
        const r = t.indexOf(e);
        if (-1 === r) return ((t, e, n) => "string" == typeof e ? t.push(e) - 1 : isNaN(e) ? null : n)(t, e, n);
        return r !== t.lastIndexOf(e) ? n : r
    }
    class pn extends kt {
        constructor(t) {
            super(t), this._startValue = void 0, this._valueRange = 0
        }
        parse(t, e) {
            if (Object(r.Cb)(t)) return null;
            const n = this.getLabels();
            return ((t, e) => null === t ? null : Object(r.Qb)(Math.round(t), 0, e))(e = isFinite(e) && n[e] === t ? e : dn(n, t, Object(r.Ob)(e, t)), n.length - 1)
        }
        determineDataLimits() {
            const t = this,
                {
                    minDefined: e,
                    maxDefined: n
                } = t.getUserBounds();
            let {
                min: r,
                max: i
            } = t.getMinMax(!0);
            "ticks" === t.options.bounds && (e || (r = 0), n || (i = t.getLabels().length - 1)), t.min = r, t.max = i
        }
        buildTicks() {
            const t = this,
                e = t.min,
                n = t.max,
                r = t.options.offset,
                i = [];
            let o = t.getLabels();
            o = 0 === e && n === o.length - 1 ? o : o.slice(e, n + 1), t._valueRange = Math.max(o.length - (r ? 0 : 1), 1), t._startValue = t.min - (r ? .5 : 0);
            for (let t = e; t <= n; t++) i.push({
                value: t
            });
            return i
        }
        getLabelForValue(t) {
            const e = this.getLabels();
            return t >= 0 && t < e.length ? e[t] : t
        }
        configure() {
            const t = this;
            super.configure(), t.isHorizontal() || (t._reversePixels = !t._reversePixels)
        }
        getPixelForValue(t) {
            const e = this;
            return "number" != typeof t && (t = e.parse(t)), null === t ? NaN : e.getPixelForDecimal((t - e._startValue) / e._valueRange)
        }
        getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
        }
        getValueForPixel(t) {
            return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
        }
        getBasePixel() {
            return this.bottom
        }
    }
    pn.id = "category", pn.defaults = {
        ticks: {
            callback: pn.prototype.getLabelForValue
        }
    };
    class gn extends kt {
        constructor(t) {
            super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0
        }
        parse(t, e) {
            return Object(r.Cb)(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t
        }
        handleTickRangeOptions() {
            const t = this,
                {
                    beginAtZero: e,
                    stacked: n
                } = t.options,
                {
                    minDefined: i,
                    maxDefined: o
                } = t.getUserBounds();
            let {
                min: a,
                max: s
            } = t;
            const c = t => a = i ? a : t,
                u = t => s = o ? s : t;
            if (e || n) {
                const t = Object(r.Lb)(a),
                    e = Object(r.Lb)(s);
                t < 0 && e < 0 ? u(0) : t > 0 && e > 0 && c(0)
            }
            a === s && (u(s + 1), e || c(a - 1)), t.min = a, t.max = s
        }
        getTickLimit() {
            const t = this,
                e = t.options.ticks;
            let n, {
                maxTicksLimit: r,
                stepSize: i
            } = e;
            return i ? n = Math.ceil(t.max / i) - Math.floor(t.min / i) + 1 : (n = t.computeTickLimit(), r = r || 11), r && (n = Math.min(r, n)), n
        }
        computeTickLimit() {
            return Number.POSITIVE_INFINITY
        }
        buildTicks() {
            const t = this,
                e = t.options,
                n = e.ticks;
            let i = t.getTickLimit();
            i = Math.max(2, i);
            const o = function(t, e) {
                const n = [],
                    {
                        step: i,
                        min: o,
                        max: a,
                        precision: s,
                        count: c,
                        maxTicks: u,
                        maxDigits: l,
                        horizontal: f
                    } = t,
                    h = i || 1,
                    d = u - 1,
                    {
                        min: p,
                        max: g
                    } = e,
                    b = !Object(r.Cb)(o),
                    v = !Object(r.Cb)(a),
                    m = !Object(r.Cb)(c),
                    y = (g - p) / l;
                let x, _, w, O, j = Object(r.N)((g - p) / d / h) * h;
                if (j < 1e-14 && !b && !v) return [{
                    value: p
                }, {
                    value: g
                }];
                O = Math.ceil(g / j) - Math.floor(p / j), O > d && (j = Object(r.N)(O * j / d / h) * h), Object(r.Cb)(s) || (x = Math.pow(10, s), j = Math.ceil(j * x) / x), _ = Math.floor(p / j) * j, w = Math.ceil(g / j) * j, b && v && i && Object(r.O)((a - o) / i, j / 1e3) ? (O = Math.min((a - o) / j, u), j = (a - o) / O, _ = o, w = a) : m ? (_ = b ? o : _, w = v ? a : w, O = c - 1, j = (w - _) / O) : (O = (w - _) / j, O = Object(r.P)(O, Math.round(O), j / 1e3) ? Math.round(O) : Math.ceil(O)), x = Math.pow(10, Object(r.Cb)(s) ? Object(r.Q)(j) : s), _ = Math.round(_ * x) / x, w = Math.round(w * x) / x;
                let S = 0;
                for (b && (n.push({
                        value: o
                    }), _ <= o && S++, Object(r.P)(Math.round((_ + S * j) * x) / x, o, y * (f ? ("" + o).length : 1)) && S++); S < O; ++S) n.push({
                    value: Math.round((_ + S * j) * x) / x
                });
                return v ? Object(r.P)(n[n.length - 1].value, a, y * (f ? ("" + a).length : 1)) ? n[n.length - 1].value = a : n.push({
                    value: a
                }) : n.push({
                    value: w
                }), n
            }({
                maxTicks: i,
                min: e.min,
                max: e.max,
                precision: n.precision,
                step: n.stepSize,
                count: n.count,
                maxDigits: t._maxDigits(),
                horizontal: t.isHorizontal()
            }, t._range || t);
            return "ticks" === e.bounds && Object(r.tb)(o, t, "value"), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), o
        }
        configure() {
            const t = this,
                e = t.ticks;
            let n = t.min,
                r = t.max;
            if (super.configure(), t.options.offset && e.length) {
                const t = (r - n) / Math.max(e.length - 1, 1) / 2;
                n -= t, r += t
            }
            t._startValue = n, t._endValue = r, t._valueRange = r - n
        }
        getLabelForValue(t) {
            return Object(r.Ib)(t, this.chart.options.locale)
        }
    }
    class bn extends gn {
        determineDataLimits() {
            const {
                min: t,
                max: e
            } = this.getMinMax(!0);
            this.min = Object(r.zb)(t) ? t : 0, this.max = Object(r.zb)(e) ? e : 1, this.handleTickRangeOptions()
        }
        computeTickLimit() {
            const t = this;
            if (t.isHorizontal()) return Math.ceil(t.width / 40);
            const e = t._resolveTickFontOptions(0);
            return Math.ceil(t.height / e.lineHeight)
        }
        getPixelForValue(t) {
            return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
        }
        getValueForPixel(t) {
            return this._startValue + this.getDecimalForPixel(t) * this._valueRange
        }
    }

    function vn(t) {
        return 1 === t / Math.pow(10, Math.floor(Object(r.l)(t)))
    }
    bn.id = "linear", bn.defaults = {
        ticks: {
            callback: mt.formatters.numeric
        }
    };
    class mn extends kt {
        constructor(t) {
            super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0
        }
        parse(t, e) {
            const n = gn.prototype.parse.apply(this, [t, e]);
            if (0 !== n) return Object(r.zb)(n) && n > 0 ? n : null;
            this._zero = !0
        }
        determineDataLimits() {
            const t = this,
                {
                    min: e,
                    max: n
                } = t.getMinMax(!0);
            t.min = Object(r.zb)(e) ? Math.max(0, e) : null, t.max = Object(r.zb)(n) ? Math.max(0, n) : null, t.options.beginAtZero && (t._zero = !0), t.handleTickRangeOptions()
        }
        handleTickRangeOptions() {
            const t = this,
                {
                    minDefined: e,
                    maxDefined: n
                } = t.getUserBounds();
            let i = t.min,
                o = t.max;
            const a = t => i = e ? i : t,
                s = t => o = n ? o : t,
                c = (t, e) => Math.pow(10, Math.floor(Object(r.l)(t)) + e);
            i === o && (i <= 0 ? (a(1), s(10)) : (a(c(i, -1)), s(c(o, 1)))), i <= 0 && a(c(o, -1)), o <= 0 && s(c(i, 1)), t._zero && t.min !== t._suggestedMin && i === c(t.min, 0) && a(c(i, -1)), t.min = i, t.max = o
        }
        buildTicks() {
            const t = this,
                e = t.options,
                n = function(t, e) {
                    const n = Math.floor(Object(r.l)(e.max)),
                        i = Math.ceil(e.max / Math.pow(10, n)),
                        o = [];
                    let a = Object(r.n)(t.min, Math.pow(10, Math.floor(Object(r.l)(e.min)))),
                        s = Math.floor(Object(r.l)(a)),
                        c = Math.floor(a / Math.pow(10, s)),
                        u = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
                    do {
                        o.push({
                            value: a,
                            major: vn(a)
                        }), ++c, 10 === c && (c = 1, ++s, u = s >= 0 ? 1 : u), a = Math.round(c * Math.pow(10, s) * u) / u
                    } while (s < n || s === n && c < i);
                    const l = Object(r.n)(t.max, a);
                    return o.push({
                        value: l,
                        major: vn(a)
                    }), o
                }({
                    min: t._userMin,
                    max: t._userMax
                }, t);
            return "ticks" === e.bounds && Object(r.tb)(n, t, "value"), e.reverse ? (n.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), n
        }
        getLabelForValue(t) {
            return void 0 === t ? "0" : Object(r.Ib)(t, this.chart.options.locale)
        }
        configure() {
            const t = this.min;
            super.configure(), this._startValue = Object(r.l)(t), this._valueRange = Object(r.l)(this.max) - Object(r.l)(t)
        }
        getPixelForValue(t) {
            const e = this;
            return void 0 !== t && 0 !== t || (t = e.min), null === t || isNaN(t) ? NaN : e.getPixelForDecimal(t === e.min ? 0 : (Object(r.l)(t) - e._startValue) / e._valueRange)
        }
        getValueForPixel(t) {
            const e = this.getDecimalForPixel(t);
            return Math.pow(10, this._startValue + e * this._valueRange)
        }
    }

    function yn(t) {
        const e = t.ticks;
        if (e.display && t.display) {
            const t = Object(r.d)(e.backdropPadding);
            return Object(r.Ob)(e.font && e.font.size, r.wb.font.size) + t.height
        }
        return 0
    }

    function xn(t, e, n, r, i) {
        return t === r || t === i ? {
            start: e - n / 2,
            end: e + n / 2
        } : t < r || t > i ? {
            start: e - n,
            end: e
        } : {
            start: e,
            end: e + n
        }
    }

    function _n(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
    }

    function wn(t, e, n) {
        90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h)
    }

    function On(t, e, n, i) {
        const {
            ctx: o
        } = t;
        if (n) o.arc(t.xCenter, t.yCenter, e, 0, r.u);
        else {
            let n = t.getPointPosition(0, e);
            o.moveTo(n.x, n.y);
            for (let r = 1; r < i; r++) n = t.getPointPosition(r, e), o.lineTo(n.x, n.y)
        }
    }

    function jn(t) {
        return Object(r.Pb)(t) ? t : 0
    }
    mn.id = "logarithmic", mn.defaults = {
        ticks: {
            callback: mt.formatters.logarithmic,
            major: {
                enabled: !0
            }
        }
    };
    class Sn extends gn {
        constructor(t) {
            super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []
        }
        setDimensions() {
            const t = this;
            t.width = t.maxWidth, t.height = t.maxHeight, t.paddingTop = yn(t.options) / 2, t.xCenter = Math.floor(t.width / 2), t.yCenter = Math.floor((t.height - t.paddingTop) / 2), t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2
        }
        determineDataLimits() {
            const {
                min: t,
                max: e
            } = this.getMinMax(!1);
            this.min = Object(r.zb)(t) && !isNaN(t) ? t : 0, this.max = Object(r.zb)(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions()
        }
        computeTickLimit() {
            return Math.ceil(this.drawingArea / yn(this.options))
        }
        generateTickLabels(t) {
            const e = this;
            gn.prototype.generateTickLabels.call(e, t), e._pointLabels = e.getLabels().map((t, n) => {
                const i = Object(r.o)(e.options.pointLabels.callback, [t, n], e);
                return i || 0 === i ? i : ""
            })
        }
        fit() {
            const t = this,
                e = t.options;
            e.display && e.pointLabels.display ? function(t) {
                const e = {
                        l: 0,
                        r: t.width,
                        t: 0,
                        b: t.height - t.paddingTop
                    },
                    n = {};
                let i, o, a;
                const s = [],
                    c = [],
                    u = t.getLabels().length;
                for (i = 0; i < u; i++) {
                    const u = t.options.pointLabels.setContext(t.getContext(i));
                    c[i] = u.padding, a = t.getPointPosition(i, t.drawingArea + c[i]);
                    const d = Object(r.x)(u.font);
                    t.ctx.font = d.string, l = t.ctx, f = d.lineHeight, h = t._pointLabels[i], o = Object(r.ub)(h) ? {
                        w: Object(r.R)(l, l.font, h),
                        h: h.length * f
                    } : {
                        w: l.measureText(h).width,
                        h: f
                    }, s[i] = o;
                    const p = t.getIndexAngle(i),
                        g = Object(r.r)(p),
                        b = xn(g, a.x, o.w, 0, 180),
                        v = xn(g, a.y, o.h, 90, 270);
                    b.start < e.l && (e.l = b.start, n.l = p), b.end > e.r && (e.r = b.end, n.r = p), v.start < e.t && (e.t = v.start, n.t = p), v.end > e.b && (e.b = v.end, n.b = p)
                }
                var l, f, h;
                t._setReductions(t.drawingArea, e, n), t._pointLabelItems = [];
                const d = t.options,
                    p = yn(d),
                    g = t.getDistanceFromCenterForValue(d.ticks.reverse ? t.min : t.max);
                for (i = 0; i < u; i++) {
                    const e = 0 === i ? p / 2 : 0,
                        n = t.getPointPosition(i, g + e + c[i]),
                        o = Object(r.r)(t.getIndexAngle(i)),
                        a = s[i];
                    wn(o, a, n);
                    const u = _n(o);
                    let l;
                    l = "left" === u ? n.x : "center" === u ? n.x - a.w / 2 : n.x - a.w;
                    const f = l + a.w;
                    t._pointLabelItems[i] = {
                        x: n.x,
                        y: n.y,
                        textAlign: u,
                        left: l,
                        top: n.y,
                        right: f,
                        bottom: n.y + a.h
                    }
                }
            }(t) : t.setCenterPoint(0, 0, 0, 0)
        }
        _setReductions(t, e, n) {
            const r = this;
            let i = e.l / Math.sin(n.l),
                o = Math.max(e.r - r.width, 0) / Math.sin(n.r),
                a = -e.t / Math.cos(n.t),
                s = -Math.max(e.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
            i = jn(i), o = jn(o), a = jn(a), s = jn(s), r.drawingArea = Math.max(t / 2, Math.min(Math.floor(t - (i + o) / 2), Math.floor(t - (a + s) / 2))), r.setCenterPoint(i, o, a, s)
        }
        setCenterPoint(t, e, n, r) {
            const i = this,
                o = i.width - e - i.drawingArea,
                a = t + i.drawingArea,
                s = n + i.drawingArea,
                c = i.height - i.paddingTop - r - i.drawingArea;
            i.xCenter = Math.floor((a + o) / 2 + i.left), i.yCenter = Math.floor((s + c) / 2 + i.top + i.paddingTop)
        }
        getIndexAngle(t) {
            const e = r.u / this.getLabels().length,
                n = this.options.startAngle || 0;
            return Object(r.mb)(t * e + Object(r.Mb)(n))
        }
        getDistanceFromCenterForValue(t) {
            const e = this;
            if (Object(r.Cb)(t)) return NaN;
            const n = e.drawingArea / (e.max - e.min);
            return e.options.reverse ? (e.max - t) * n : (t - e.min) * n
        }
        getValueForDistanceFromCenter(t) {
            if (Object(r.Cb)(t)) return NaN;
            const e = this,
                n = t / (e.drawingArea / (e.max - e.min));
            return e.options.reverse ? e.max - n : e.min + n
        }
        getPointPosition(t, e) {
            const n = this.getIndexAngle(t) - r.i;
            return {
                x: Math.cos(n) * e + this.xCenter,
                y: Math.sin(n) * e + this.yCenter,
                angle: n
            }
        }
        getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
        }
        getBasePosition(t) {
            return this.getPointPositionForValue(t || 0, this.getBaseValue())
        }
        getPointLabelPosition(t) {
            const {
                left: e,
                top: n,
                right: r,
                bottom: i
            } = this._pointLabelItems[t];
            return {
                left: e,
                top: n,
                right: r,
                bottom: i
            }
        }
        drawBackground() {
            const t = this,
                {
                    backgroundColor: e,
                    grid: {
                        circular: n
                    }
                } = t.options;
            if (e) {
                const r = t.ctx;
                r.save(), r.beginPath(), On(t, t.getDistanceFromCenterForValue(t._endValue), n, t.getLabels().length), r.closePath(), r.fillStyle = e, r.fill(), r.restore()
            }
        }
        drawGrid() {
            const t = this,
                e = t.ctx,
                n = t.options,
                {
                    angleLines: i,
                    grid: o
                } = n,
                a = t.getLabels().length;
            let s, c, u;
            if (n.pointLabels.display && function(t, e) {
                    const {
                        ctx: n,
                        options: {
                            pointLabels: i
                        }
                    } = t;
                    for (let o = e - 1; o >= 0; o--) {
                        const e = i.setContext(t.getContext(o)),
                            a = Object(r.x)(e.font),
                            {
                                x: s,
                                y: c,
                                textAlign: u,
                                left: l,
                                top: f,
                                right: h,
                                bottom: d
                            } = t._pointLabelItems[o],
                            {
                                backdropColor: p
                            } = e;
                        if (!Object(r.Cb)(p)) {
                            const t = Object(r.d)(e.backdropPadding);
                            n.fillStyle = p, n.fillRect(l - t.left, f - t.top, h - l + t.width, d - f + t.height)
                        }
                        Object(r.w)(n, t._pointLabels[o], s, c + a.lineHeight / 2, a, {
                            color: e.color,
                            textAlign: u,
                            textBaseline: "middle"
                        })
                    }
                }(t, a), o.display && t.ticks.forEach((e, n) => {
                    if (0 !== n) {
                        c = t.getDistanceFromCenterForValue(e.value);
                        const r = o.setContext(t.getContext(n - 1));
                        ! function(t, e, n, r) {
                            const i = t.ctx,
                                o = e.circular,
                                {
                                    color: a,
                                    lineWidth: s
                                } = e;
                            !o && !r || !a || !s || n < 0 || (i.save(), i.strokeStyle = a, i.lineWidth = s, i.setLineDash(e.borderDash), i.lineDashOffset = e.borderDashOffset, i.beginPath(), On(t, n, o, r), i.closePath(), i.stroke(), i.restore())
                        }(t, r, c, a)
                    }
                }), i.display) {
                for (e.save(), s = t.getLabels().length - 1; s >= 0; s--) {
                    const r = i.setContext(t.getContext(s)),
                        {
                            color: o,
                            lineWidth: a
                        } = r;
                    a && o && (e.lineWidth = a, e.strokeStyle = o, e.setLineDash(r.borderDash), e.lineDashOffset = r.borderDashOffset, c = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max), u = t.getPointPosition(s, c), e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(u.x, u.y), e.stroke())
                }
                e.restore()
            }
        }
        drawBorder() {}
        drawLabels() {
            const t = this,
                e = t.ctx,
                n = t.options,
                i = n.ticks;
            if (!i.display) return;
            const o = t.getIndexAngle(0);
            let a, s;
            e.save(), e.translate(t.xCenter, t.yCenter), e.rotate(o), e.textAlign = "center", e.textBaseline = "middle", t.ticks.forEach((o, c) => {
                if (0 === c && !n.reverse) return;
                const u = i.setContext(t.getContext(c)),
                    l = Object(r.x)(u.font);
                if (a = t.getDistanceFromCenterForValue(t.ticks[c].value), u.showLabelBackdrop) {
                    s = e.measureText(o.label).width, e.fillStyle = u.backdropColor;
                    const t = Object(r.d)(u.backdropPadding);
                    e.fillRect(-s / 2 - t.left, -a - l.size / 2 - t.top, s + t.width, l.size + t.height)
                }
                Object(r.w)(e, o.label, 0, -a, l, {
                    color: u.color
                })
            }), e.restore()
        }
        drawTitle() {}
    }
    Sn.id = "radialLinear", Sn.defaults = {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0
        },
        grid: {
            circular: !1
        },
        startAngle: 0,
        ticks: {
            showLabelBackdrop: !0,
            callback: mt.formatters.numeric
        },
        pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: {
                size: 10
            },
            callback: t => t,
            padding: 5
        }
    }, Sn.defaultRoutes = {
        "angleLines.color": "borderColor",
        "pointLabels.color": "color",
        "ticks.color": "color"
    }, Sn.descriptors = {
        angleLines: {
            _fallback: "grid"
        }
    };
    const Mn = {
            millisecond: {
                common: !0,
                size: 1,
                steps: 1e3
            },
            second: {
                common: !0,
                size: 1e3,
                steps: 60
            },
            minute: {
                common: !0,
                size: 6e4,
                steps: 60
            },
            hour: {
                common: !0,
                size: 36e5,
                steps: 24
            },
            day: {
                common: !0,
                size: 864e5,
                steps: 30
            },
            week: {
                common: !1,
                size: 6048e5,
                steps: 4
            },
            month: {
                common: !0,
                size: 2628e6,
                steps: 12
            },
            quarter: {
                common: !1,
                size: 7884e6,
                steps: 4
            },
            year: {
                common: !0,
                size: 3154e7
            }
        },
        kn = Object.keys(Mn);

    function En(t, e) {
        return t - e
    }

    function An(t, e) {
        if (Object(r.Cb)(e)) return null;
        const n = t._adapter,
            {
                parser: i,
                round: o,
                isoWeekday: a
            } = t._parseOpts;
        let s = e;
        return "function" == typeof i && (s = i(s)), Object(r.zb)(s) || (s = "string" == typeof i ? n.parse(s, i) : n.parse(s)), null === s ? null : (o && (s = "week" !== o || !Object(r.Pb)(a) && !0 !== a ? n.startOf(s, o) : n.startOf(s, "isoWeek", a)), +s)
    }

    function Pn(t, e, n, r) {
        const i = kn.length;
        for (let o = kn.indexOf(t); o < i - 1; ++o) {
            const t = Mn[kn[o]],
                i = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
            if (t.common && Math.ceil((n - e) / (i * t.size)) <= r) return kn[o]
        }
        return kn[i - 1]
    }

    function Tn(t, e, n) {
        if (n) {
            if (n.length) {
                const {
                    lo: i,
                    hi: o
                } = Object(r.T)(n, e);
                t[n[i] >= e ? n[i] : n[o]] = !0
            }
        } else t[e] = !0
    }

    function Dn(t, e, n) {
        const r = [],
            i = {},
            o = e.length;
        let a, s;
        for (a = 0; a < o; ++a) s = e[a], i[s] = a, r.push({
            value: s,
            major: !1
        });
        return 0 !== o && n ? function(t, e, n, r) {
            const i = t._adapter,
                o = +i.startOf(e[0].value, r),
                a = e[e.length - 1].value;
            let s, c;
            for (s = o; s <= a; s = +i.add(s, 1, r)) c = n[s], c >= 0 && (e[c].major = !0);
            return e
        }(t, r, i, n) : r
    }
    class Cn extends kt {
        constructor(t) {
            super(t), this._cache = {
                data: [],
                labels: [],
                all: []
            }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0
        }
        init(t, e) {
            const n = t.time || (t.time = {}),
                i = this._adapter = new R._date(t.adapters.date);
            Object(r.J)(n.displayFormats, i.formats()), this._parseOpts = {
                parser: n.parser,
                round: n.round,
                isoWeekday: n.isoWeekday
            }, super.init(t), this._normalized = e.normalized
        }
        parse(t, e) {
            return void 0 === t ? null : An(this, t)
        }
        beforeLayout() {
            super.beforeLayout(), this._cache = {
                data: [],
                labels: [],
                all: []
            }
        }
        determineDataLimits() {
            const t = this,
                e = t.options,
                n = t._adapter,
                i = e.time.unit || "day";
            let {
                min: o,
                max: a,
                minDefined: s,
                maxDefined: c
            } = t.getUserBounds();

            function u(t) {
                s || isNaN(t.min) || (o = Math.min(o, t.min)), c || isNaN(t.max) || (a = Math.max(a, t.max))
            }
            s && c || (u(t._getLabelBounds()), "ticks" === e.bounds && "labels" === e.ticks.source || u(t.getMinMax(!1))), o = Object(r.zb)(o) && !isNaN(o) ? o : +n.startOf(Date.now(), i), a = Object(r.zb)(a) && !isNaN(a) ? a : +n.endOf(Date.now(), i) + 1, t.min = Math.min(o, a - 1), t.max = Math.max(o + 1, a)
        }
        _getLabelBounds() {
            const t = this.getLabelTimestamps();
            let e = Number.POSITIVE_INFINITY,
                n = Number.NEGATIVE_INFINITY;
            return t.length && (e = t[0], n = t[t.length - 1]), {
                min: e,
                max: n
            }
        }
        buildTicks() {
            const t = this,
                e = t.options,
                n = e.time,
                i = e.ticks,
                o = "labels" === i.source ? t.getLabelTimestamps() : t._generate();
            "ticks" === e.bounds && o.length && (t.min = t._userMin || o[0], t.max = t._userMax || o[o.length - 1]);
            const a = t.min,
                s = t.max,
                c = Object(r.S)(o, a, s);
            return t._unit = n.unit || (i.autoSkip ? Pn(n.minUnit, t.min, t.max, t._getLabelCapacity(a)) : function(t, e, n, r, i) {
                for (let o = kn.length - 1; o >= kn.indexOf(n); o--) {
                    const n = kn[o];
                    if (Mn[n].common && t._adapter.diff(i, r, n) >= e - 1) return n
                }
                return kn[n ? kn.indexOf(n) : 0]
            }(t, c.length, n.minUnit, t.min, t.max)), t._majorUnit = i.major.enabled && "year" !== t._unit ? function(t) {
                for (let e = kn.indexOf(t) + 1, n = kn.length; e < n; ++e)
                    if (Mn[kn[e]].common) return kn[e]
            }(t._unit) : void 0, t.initOffsets(o), e.reverse && c.reverse(), Dn(t, c, t._majorUnit)
        }
        initOffsets(t) {
            const e = this;
            let n, i, o = 0,
                a = 0;
            e.options.offset && t.length && (n = e.getDecimalForValue(t[0]), o = 1 === t.length ? 1 - n : (e.getDecimalForValue(t[1]) - n) / 2, i = e.getDecimalForValue(t[t.length - 1]), a = 1 === t.length ? i : (i - e.getDecimalForValue(t[t.length - 2])) / 2);
            const s = t.length < 3 ? .5 : .25;
            o = Object(r.Qb)(o, 0, s), a = Object(r.Qb)(a, 0, s), e._offsets = {
                start: o,
                end: a,
                factor: 1 / (o + 1 + a)
            }
        }
        _generate() {
            const t = this,
                e = t._adapter,
                n = t.min,
                i = t.max,
                o = t.options,
                a = o.time,
                s = a.unit || Pn(a.minUnit, n, i, t._getLabelCapacity(n)),
                c = Object(r.Ob)(a.stepSize, 1),
                u = "week" === s && a.isoWeekday,
                l = Object(r.Pb)(u) || !0 === u,
                f = {};
            let h, d, p = n;
            if (l && (p = +e.startOf(p, "isoWeek", u)), p = +e.startOf(p, l ? "day" : s), e.diff(i, n, s) > 1e5 * c) throw new Error(n + " and " + i + " are too far apart with stepSize of " + c + " " + s);
            const g = "data" === o.ticks.source && t.getDataTimestamps();
            for (h = p, d = 0; h < i; h = +e.add(h, c, s), d++) Tn(f, h, g);
            return h !== i && "ticks" !== o.bounds && 1 !== d || Tn(f, h, g), Object.keys(f).sort((t, e) => t - e).map(t => +t)
        }
        getLabelForValue(t) {
            const e = this._adapter,
                n = this.options.time;
            return n.tooltipFormat ? e.format(t, n.tooltipFormat) : e.format(t, n.displayFormats.datetime)
        }
        _tickFormatFunction(t, e, n, i) {
            const o = this,
                a = o.options,
                s = a.time.displayFormats,
                c = o._unit,
                u = o._majorUnit,
                l = c && s[c],
                f = u && s[u],
                h = n[e],
                d = u && f && h && h.major,
                p = o._adapter.format(t, i || (d ? f : l)),
                g = a.ticks.callback;
            return g ? Object(r.o)(g, [p, e, n], o) : p
        }
        generateTickLabels(t) {
            let e, n, r;
            for (e = 0, n = t.length; e < n; ++e) r = t[e], r.label = this._tickFormatFunction(r.value, e, t)
        }
        getDecimalForValue(t) {
            return null === t ? NaN : (t - this.min) / (this.max - this.min)
        }
        getPixelForValue(t) {
            const e = this._offsets,
                n = this.getDecimalForValue(t);
            return this.getPixelForDecimal((e.start + n) * e.factor)
        }
        getValueForPixel(t) {
            const e = this,
                n = e._offsets,
                r = e.getDecimalForPixel(t) / n.factor - n.end;
            return e.min + r * (e.max - e.min)
        }
        _getLabelSize(t) {
            const e = this.options.ticks,
                n = this.ctx.measureText(t).width,
                i = Object(r.Mb)(this.isHorizontal() ? e.maxRotation : e.minRotation),
                o = Math.cos(i),
                a = Math.sin(i),
                s = this._resolveTickFontOptions(0).size;
            return {
                w: n * o + s * a,
                h: n * a + s * o
            }
        }
        _getLabelCapacity(t) {
            const e = this,
                n = e.options.time,
                r = n.displayFormats,
                i = r[n.unit] || r.millisecond,
                o = e._tickFormatFunction(t, 0, Dn(e, [t], e._majorUnit), i),
                a = e._getLabelSize(o),
                s = Math.floor(e.isHorizontal() ? e.width / a.w : e.height / a.h) - 1;
            return s > 0 ? s : 1
        }
        getDataTimestamps() {
            const t = this;
            let e, n, r = t._cache.data || [];
            if (r.length) return r;
            const i = t.getMatchingVisibleMetas();
            if (t._normalized && i.length) return t._cache.data = i[0].controller.getAllParsedValues(t);
            for (e = 0, n = i.length; e < n; ++e) r = r.concat(i[e].controller.getAllParsedValues(t));
            return t._cache.data = t.normalize(r)
        }
        getLabelTimestamps() {
            const t = this,
                e = t._cache.labels || [];
            let n, r;
            if (e.length) return e;
            const i = t.getLabels();
            for (n = 0, r = i.length; n < r; ++n) e.push(An(t, i[n]));
            return t._cache.labels = t._normalized ? e : t.normalize(e)
        }
        normalize(t) {
            return Object(r.B)(t.sort(En))
        }
    }

    function Ln(t, e, n) {
        let i, o, a, s;
        if (n) i = Math.floor(e), o = Math.ceil(e), a = t[i], s = t[o];
        else {
            const n = Object(r.T)(t, e);
            a = n.lo, s = n.hi, i = t[a], o = t[s]
        }
        const c = o - i;
        return c ? a + (s - a) * (e - i) / c : a
    }
    Cn.id = "time", Cn.defaults = {
        bounds: "data",
        adapters: {},
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {}
        },
        ticks: {
            source: "auto",
            major: {
                enabled: !1
            }
        }
    };
    class In extends Cn {
        constructor(t) {
            super(t), this._table = [], this._maxIndex = void 0
        }
        initOffsets() {
            const t = this,
                e = t._getTimestampsForTable();
            t._table = t.buildLookupTable(e), t._maxIndex = t._table.length - 1, super.initOffsets(e)
        }
        buildLookupTable(t) {
            const {
                min: e,
                max: n
            } = this;
            if (!t.length) return [{
                time: e,
                pos: 0
            }, {
                time: n,
                pos: 1
            }];
            const r = [e];
            let i, o, a;
            for (i = 0, o = t.length; i < o; ++i) a = t[i], a > e && a < n && r.push(a);
            return r.push(n), r
        }
        _getTimestampsForTable() {
            const t = this;
            let e = t._cache.all || [];
            if (e.length) return e;
            const n = t.getDataTimestamps(),
                r = t.getLabelTimestamps();
            return e = n.length && r.length ? t.normalize(n.concat(r)) : n.length ? n : r, e = t._cache.all = e, e
        }
        getPixelForValue(t, e) {
            const n = this,
                i = n._offsets,
                o = n._normalized && n._maxIndex > 0 && !Object(r.Cb)(e) ? e / n._maxIndex : n.getDecimalForValue(t);
            return n.getPixelForDecimal((i.start + o) * i.factor)
        }
        getDecimalForValue(t) {
            return Ln(this._table, t) / this._maxIndex
        }
        getValueForPixel(t) {
            const e = this._offsets,
                n = this.getDecimalForPixel(t) / e.factor - e.end;
            return Ln(this._table, n * this._maxIndex, !0)
        }
    }
    In.id = "timeseries", In.defaults = Cn.defaults;
    const Rn = [C, Me, hn, Object.freeze({
        __proto__: null,
        CategoryScale: pn,
        LinearScale: bn,
        LogarithmicScale: mn,
        RadialLinearScale: Sn,
        TimeScale: Cn,
        TimeSeriesScale: In
    })]
}, function(t, e, n) {
    var r = n(24);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function(t, e, n) {
    "use strict";
    if (n(8)) {
        var r = n(33),
            i = n(2),
            o = n(3),
            a = n(1),
            s = n(62),
            c = n(90),
            u = n(23),
            l = n(44),
            f = n(31),
            h = n(15),
            d = n(45),
            p = n(18),
            g = n(7),
            b = n(122),
            v = n(35),
            m = n(28),
            y = n(14),
            x = n(49),
            _ = n(5),
            w = n(11),
            O = n(82),
            j = n(36),
            S = n(38),
            M = n(37).f,
            k = n(84),
            E = n(32),
            A = n(6),
            P = n(21),
            T = n(52),
            D = n(50),
            C = n(86),
            L = n(41),
            I = n(55),
            R = n(43),
            F = n(85),
            z = n(113),
            N = n(9),
            B = n(19),
            W = N.f,
            V = B.f,
            H = i.RangeError,
            U = i.TypeError,
            $ = i.Uint8Array,
            Y = Array.prototype,
            q = c.ArrayBuffer,
            G = c.DataView,
            X = P(0),
            K = P(2),
            J = P(3),
            Z = P(4),
            Q = P(5),
            tt = P(6),
            et = T(!0),
            nt = T(!1),
            rt = C.values,
            it = C.keys,
            ot = C.entries,
            at = Y.lastIndexOf,
            st = Y.reduce,
            ct = Y.reduceRight,
            ut = Y.join,
            lt = Y.sort,
            ft = Y.slice,
            ht = Y.toString,
            dt = Y.toLocaleString,
            pt = A("iterator"),
            gt = A("toStringTag"),
            bt = E("typed_constructor"),
            vt = E("def_constructor"),
            mt = s.CONSTR,
            yt = s.TYPED,
            xt = s.VIEW,
            _t = P(1, (function(t, e) {
                return Mt(D(t, t[vt]), e)
            })),
            wt = o((function() {
                return 1 === new $(new Uint16Array([1]).buffer)[0]
            })),
            Ot = !!$ && !!$.prototype.set && o((function() {
                new $(1).set({})
            })),
            jt = function(t, e) {
                var n = p(t);
                if (n < 0 || n % e) throw H("Wrong offset!");
                return n
            },
            St = function(t) {
                if (_(t) && yt in t) return t;
                throw U(t + " is not a typed array!")
            },
            Mt = function(t, e) {
                if (!_(t) || !(bt in t)) throw U("It is not a typed array constructor!");
                return new t(e)
            },
            kt = function(t, e) {
                return Et(D(t, t[vt]), e)
            },
            Et = function(t, e) {
                for (var n = 0, r = e.length, i = Mt(t, r); r > n;) i[n] = e[n++];
                return i
            },
            At = function(t, e, n) {
                W(t, e, {
                    get: function() {
                        return this._d[n]
                    }
                })
            },
            Pt = function(t) {
                var e, n, r, i, o, a, s = w(t),
                    c = arguments.length,
                    l = c > 1 ? arguments[1] : void 0,
                    f = void 0 !== l,
                    h = k(s);
                if (null != h && !O(h)) {
                    for (a = h.call(s), r = [], e = 0; !(o = a.next()).done; e++) r.push(o.value);
                    s = r
                }
                for (f && c > 2 && (l = u(l, arguments[2], 2)), e = 0, n = g(s.length), i = Mt(this, n); n > e; e++) i[e] = f ? l(s[e], e) : s[e];
                return i
            },
            Tt = function() {
                for (var t = 0, e = arguments.length, n = Mt(this, e); e > t;) n[t] = arguments[t++];
                return n
            },
            Dt = !!$ && o((function() {
                dt.call(new $(1))
            })),
            Ct = function() {
                return dt.apply(Dt ? ft.call(St(this)) : St(this), arguments)
            },
            Lt = {
                copyWithin: function(t, e) {
                    return z.call(St(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                every: function(t) {
                    return Z(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                fill: function(t) {
                    return F.apply(St(this), arguments)
                },
                filter: function(t) {
                    return kt(this, K(St(this), t, arguments.length > 1 ? arguments[1] : void 0))
                },
                find: function(t) {
                    return Q(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                findIndex: function(t) {
                    return tt(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                forEach: function(t) {
                    X(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                indexOf: function(t) {
                    return nt(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                includes: function(t) {
                    return et(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                join: function(t) {
                    return ut.apply(St(this), arguments)
                },
                lastIndexOf: function(t) {
                    return at.apply(St(this), arguments)
                },
                map: function(t) {
                    return _t(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                reduce: function(t) {
                    return st.apply(St(this), arguments)
                },
                reduceRight: function(t) {
                    return ct.apply(St(this), arguments)
                },
                reverse: function() {
                    for (var t, e = St(this).length, n = Math.floor(e / 2), r = 0; r < n;) t = this[r], this[r++] = this[--e], this[e] = t;
                    return this
                },
                some: function(t) {
                    return J(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
                },
                sort: function(t) {
                    return lt.call(St(this), t)
                },
                subarray: function(t, e) {
                    var n = St(this),
                        r = n.length,
                        i = v(t, r);
                    return new(D(n, n[vt]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, g((void 0 === e ? r : v(e, r)) - i))
                }
            },
            It = function(t, e) {
                return kt(this, ft.call(St(this), t, e))
            },
            Rt = function(t) {
                St(this);
                var e = jt(arguments[1], 1),
                    n = this.length,
                    r = w(t),
                    i = g(r.length),
                    o = 0;
                if (i + e > n) throw H("Wrong length!");
                for (; o < i;) this[e + o] = r[o++]
            },
            Ft = {
                entries: function() {
                    return ot.call(St(this))
                },
                keys: function() {
                    return it.call(St(this))
                },
                values: function() {
                    return rt.call(St(this))
                }
            },
            zt = function(t, e) {
                return _(t) && t[yt] && "symbol" != typeof e && e in t && String(+e) == String(e)
            },
            Nt = function(t, e) {
                return zt(t, e = m(e, !0)) ? f(2, t[e]) : V(t, e)
            },
            Bt = function(t, e, n) {
                return !(zt(t, e = m(e, !0)) && _(n) && y(n, "value")) || y(n, "get") || y(n, "set") || n.configurable || y(n, "writable") && !n.writable || y(n, "enumerable") && !n.enumerable ? W(t, e, n) : (t[e] = n.value, t)
            };
        mt || (B.f = Nt, N.f = Bt), a(a.S + a.F * !mt, "Object", {
            getOwnPropertyDescriptor: Nt,
            defineProperty: Bt
        }), o((function() {
            ht.call({})
        })) && (ht = dt = function() {
            return ut.call(this)
        });
        var Wt = d({}, Lt);
        d(Wt, Ft), h(Wt, pt, Ft.values), d(Wt, {
            slice: It,
            set: Rt,
            constructor: function() {},
            toString: ht,
            toLocaleString: Ct
        }), At(Wt, "buffer", "b"), At(Wt, "byteOffset", "o"), At(Wt, "byteLength", "l"), At(Wt, "length", "e"), W(Wt, gt, {
            get: function() {
                return this[yt]
            }
        }), t.exports = function(t, e, n, c) {
            var u = t + ((c = !!c) ? "Clamped" : "") + "Array",
                f = "get" + t,
                d = "set" + t,
                p = i[u],
                v = p || {},
                m = p && S(p),
                y = !p || !s.ABV,
                w = {},
                O = p && p.prototype,
                k = function(t, n) {
                    W(t, n, {
                        get: function() {
                            return function(t, n) {
                                var r = t._d;
                                return r.v[f](n * e + r.o, wt)
                            }(this, n)
                        },
                        set: function(t) {
                            return function(t, n, r) {
                                var i = t._d;
                                c && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[d](n * e + i.o, r, wt)
                            }(this, n, t)
                        },
                        enumerable: !0
                    })
                };
            y ? (p = n((function(t, n, r, i) {
                l(t, p, u, "_d");
                var o, a, s, c, f = 0,
                    d = 0;
                if (_(n)) {
                    if (!(n instanceof q || "ArrayBuffer" == (c = x(n)) || "SharedArrayBuffer" == c)) return yt in n ? Et(p, n) : Pt.call(p, n);
                    o = n, d = jt(r, e);
                    var v = n.byteLength;
                    if (void 0 === i) {
                        if (v % e) throw H("Wrong length!");
                        if ((a = v - d) < 0) throw H("Wrong length!")
                    } else if ((a = g(i) * e) + d > v) throw H("Wrong length!");
                    s = a / e
                } else s = b(n), o = new q(a = s * e);
                for (h(t, "_d", {
                        b: o,
                        o: d,
                        l: a,
                        e: s,
                        v: new G(o)
                    }); f < s;) k(t, f++)
            })), O = p.prototype = j(Wt), h(O, "constructor", p)) : o((function() {
                p(1)
            })) && o((function() {
                new p(-1)
            })) && I((function(t) {
                new p, new p(null), new p(1.5), new p(t)
            }), !0) || (p = n((function(t, n, r, i) {
                var o;
                return l(t, p, u), _(n) ? n instanceof q || "ArrayBuffer" == (o = x(n)) || "SharedArrayBuffer" == o ? void 0 !== i ? new v(n, jt(r, e), i) : void 0 !== r ? new v(n, jt(r, e)) : new v(n) : yt in n ? Et(p, n) : Pt.call(p, n) : new v(b(n))
            })), X(m !== Function.prototype ? M(v).concat(M(m)) : M(v), (function(t) {
                t in p || h(p, t, v[t])
            })), p.prototype = O, r || (O.constructor = p));
            var E = O[pt],
                A = !!E && ("values" == E.name || null == E.name),
                P = Ft.values;
            h(p, bt, !0), h(O, yt, u), h(O, xt, !0), h(O, vt, p), (c ? new p(1)[gt] == u : gt in O) || W(O, gt, {
                get: function() {
                    return u
                }
            }), w[u] = p, a(a.G + a.W + a.F * (p != v), w), a(a.S, u, {
                BYTES_PER_ELEMENT: e
            }), a(a.S + a.F * o((function() {
                v.of.call(p, 1)
            })), u, {
                from: Pt,
                of: Tt
            }), "BYTES_PER_ELEMENT" in O || h(O, "BYTES_PER_ELEMENT", e), a(a.P, u, Lt), R(u), a(a.P + a.F * Ot, u, {
                set: Rt
            }), a(a.P + a.F * !A, u, Ft), r || O.toString == ht || (O.toString = ht), a(a.P + a.F * o((function() {
                new p(1).slice()
            })), u, {
                slice: It
            }), a(a.P + a.F * (o((function() {
                return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
            })) || !o((function() {
                O.toLocaleString.call([1, 2])
            }))), u, {
                toLocaleString: Ct
            }), L[u] = A ? E : P, r || A || h(O, pt, P)
        }
    } else t.exports = function() {}
}, function(t, e, n) {
    var r = n(5);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, n) {
    var r = n(32)("meta"),
        i = n(5),
        o = n(14),
        a = n(9).f,
        s = 0,
        c = Object.isExtensible || function() {
            return !0
        },
        u = !n(3)((function() {
            return c(Object.preventExtensions({}))
        })),
        l = function(t) {
            a(t, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        f = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, e) {
                if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!o(t, r)) {
                    if (!c(t)) return "F";
                    if (!e) return "E";
                    l(t)
                }
                return t[r].i
            },
            getWeak: function(t, e) {
                if (!o(t, r)) {
                    if (!c(t)) return !0;
                    if (!e) return !1;
                    l(t)
                }
                return t[r].w
            },
            onFreeze: function(t) {
                return u && f.NEED && c(t) && !o(t, r) && l(t), t
            }
        }
}, function(t, e, n) {
    var r = n(298),
        i = n(299),
        o = n(129),
        a = n(300);
    t.exports = function(t) {
        return r(t) || i(t) || o(t) || a()
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var r = n(98),
        i = n(68);
    t.exports = Object.keys || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(18),
        i = Math.max,
        o = Math.min;
    t.exports = function(t, e) {
        return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e)
    }
}, function(t, e, n) {
    var r = n(4),
        i = n(99),
        o = n(68),
        a = n(67)("IE_PROTO"),
        s = function() {},
        c = function() {
            var t, e = n(65)("iframe"),
                r = o.length;
            for (e.style.display = "none", n(70).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c.prototype[o[r]];
            return c()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = c(), void 0 === e ? n : i(n, e)
    }
}, function(t, e, n) {
    var r = n(98),
        i = n(68).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(14),
        i = n(11),
        o = n(67)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function(t, e, n) {
    var r = n(5);
    t.exports = function(t, e) {
        if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, function(t, e, n) {
    var r = n(9).f,
        i = n(14),
        o = n(6)("toStringTag");
    t.exports = function(t, e, n) {
        t && !i(t = n ? t : t.prototype, o) && r(t, o, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var r = n(6)("unscopables"),
        i = Array.prototype;
    null == i[r] && n(15)(i, r, {}), t.exports = function(t) {
        i[r][t] = !0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(9),
        o = n(8),
        a = n(6)("species");
    t.exports = function(t) {
        var e = r[t];
        o && e && !e[a] && i.f(e, a, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var r = n(12);
    t.exports = function(t, e, n) {
        for (var i in e) r(t, i, e[i], n);
        return t
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function(t, e, n) {
    var r = n(25);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
    var r = n(25),
        i = n(6)("toStringTag"),
        o = "Arguments" == r(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e, n) {
    var r = n(4),
        i = n(24),
        o = n(6)("species");
    t.exports = function(t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || null == (n = r(a)[o]) ? e : i(n)
    }
}, function(t, e, n) {
    var r = n(10),
        i = n(2),
        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (t.exports = function(t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: r.version,
        mode: n(33) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e, n) {
    var r = n(16),
        i = n(7),
        o = n(35);
    t.exports = function(t) {
        return function(e, n, a) {
            var s, c = r(e),
                u = i(c.length),
                l = o(a, u);
            if (t && n != n) {
                for (; u > l;)
                    if ((s = c[l++]) != s) return !0
            } else
                for (; u > l; l++)
                    if ((t || l in c) && c[l] === n) return t || l || 0;
            return !t && -1
        }
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var r = n(1),
        i = n(26),
        o = n(3),
        a = n(72),
        s = "[" + a + "]",
        c = RegExp("^" + s + s + "*"),
        u = RegExp(s + s + "*$"),
        l = function(t, e, n) {
            var i = {},
                s = o((function() {
                    return !!a[t]() || "​" != "​" [t]()
                })),
                c = i[t] = s ? e(f) : a[t];
            n && (i[n] = c), r(r.P + r.F * s, "String", i)
        },
        f = l.trim = function(t, e) {
            return t = String(i(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(u, "")), t
        };
    t.exports = l
}, function(t, e, n) {
    var r = n(6)("iterator"),
        i = !1;
    try {
        var o = [7][r]();
        o.return = function() {
            i = !0
        }, Array.from(o, (function() {
            throw 2
        }))
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !i) return !1;
        var n = !1;
        try {
            var o = [7],
                a = o[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }, o[r] = function() {
                return a
            }, t(o)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(4);
    t.exports = function() {
        var t = r(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(49),
        i = RegExp.prototype.exec;
    t.exports = function(t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var o = n.call(t, e);
            if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return o
        }
        if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return i.call(t, e)
    }
}, function(t, e, n) {
    "use strict";
    n(115);
    var r = n(12),
        i = n(15),
        o = n(3),
        a = n(26),
        s = n(6),
        c = n(87),
        u = s("species"),
        l = !o((function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        f = function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var n = "ab".split(t);
            return 2 === n.length && "a" === n[0] && "b" === n[1]
        }();
    t.exports = function(t, e, n) {
        var h = s(t),
            d = !o((function() {
                var e = {};
                return e[h] = function() {
                    return 7
                }, 7 != "" [t](e)
            })),
            p = d ? !o((function() {
                var e = !1,
                    n = /a/;
                return n.exec = function() {
                    return e = !0, null
                }, "split" === t && (n.constructor = {}, n.constructor[u] = function() {
                    return n
                }), n[h](""), !e
            })) : void 0;
        if (!d || !p || "replace" === t && !l || "split" === t && !f) {
            var g = /./ [h],
                b = n(a, h, "" [t], (function(t, e, n, r, i) {
                    return e.exec === c ? d && !i ? {
                        done: !0,
                        value: g.call(e, n, r)
                    } : {
                        done: !0,
                        value: t.call(n, e, r)
                    } : {
                        done: !1
                    }
                })),
                v = b[0],
                m = b[1];
            r(String.prototype, t, v), i(RegExp.prototype, h, 2 == e ? function(t, e) {
                return m.call(t, this, e)
            } : function(t) {
                return m.call(t, this)
            })
        }
    }
}, function(t, e, n) {
    var r = n(23),
        i = n(111),
        o = n(82),
        a = n(4),
        s = n(7),
        c = n(84),
        u = {},
        l = {};
    (e = t.exports = function(t, e, n, f, h) {
        var d, p, g, b, v = h ? function() {
                return t
            } : c(t),
            m = r(n, f, e ? 2 : 1),
            y = 0;
        if ("function" != typeof v) throw TypeError(t + " is not iterable!");
        if (o(v)) {
            for (d = s(t.length); d > y; y++)
                if ((b = e ? m(a(p = t[y])[0], p[1]) : m(t[y])) === u || b === l) return b
        } else
            for (g = v.call(t); !(p = g.next()).done;)
                if ((b = i(g, m, p.value, e)) === u || b === l) return b
    }).BREAK = u, e.RETURN = l
}, function(t, e, n) {
    var r = n(2).navigator;
    t.exports = r && r.userAgent || ""
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(1),
        o = n(12),
        a = n(45),
        s = n(29),
        c = n(59),
        u = n(44),
        l = n(5),
        f = n(3),
        h = n(55),
        d = n(40),
        p = n(73);
    t.exports = function(t, e, n, g, b, v) {
        var m = r[t],
            y = m,
            x = b ? "set" : "add",
            _ = y && y.prototype,
            w = {},
            O = function(t) {
                var e = _[t];
                o(_, t, "delete" == t || "has" == t ? function(t) {
                    return !(v && !l(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return v && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this
                })
            };
        if ("function" == typeof y && (v || _.forEach && !f((function() {
                (new y).entries().next()
            })))) {
            var j = new y,
                S = j[x](v ? {} : -0, 1) != j,
                M = f((function() {
                    j.has(1)
                })),
                k = h((function(t) {
                    new y(t)
                })),
                E = !v && f((function() {
                    for (var t = new y, e = 5; e--;) t[x](e, e);
                    return !t.has(-0)
                }));
            k || ((y = e((function(e, n) {
                u(e, y, t);
                var r = p(new m, e, y);
                return null != n && c(n, b, r[x], r), r
            }))).prototype = _, _.constructor = y), (M || E) && (O("delete"), O("has"), b && O("get")), (E || S) && O(x), v && _.clear && delete _.clear
        } else y = g.getConstructor(e, t, b, x), a(y.prototype, n), s.NEED = !0;
        return d(y, t), w[t] = y, i(i.G + i.W + i.F * (y != m), w), v || g.setStrong(y, t, b), y
    }
}, function(t, e, n) {
    for (var r, i = n(2), o = n(15), a = n(32), s = a("typed_array"), c = a("view"), u = !(!i.ArrayBuffer || !i.DataView), l = u, f = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(r = i[h[f++]]) ? (o(r.prototype, s, !0), o(r.prototype, c, !0)) : l = !1;
    t.exports = {
        ABV: u,
        CONSTR: l,
        TYPED: s,
        VIEW: c
    }
}, function(t, e, n) {
    t.exports = n(301)
}, function(t, e, n) {
    "use strict";
    e.a = function(t, e) {
        if (!t || !e) throw Error("Missing element or callback function");
        var n = t.getBoundingClientRect(),
            r = n.bottom;
        n.top > window.innerHeight + 150 || r < -150 || e()
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(2).document,
        o = r(i) && r(i.createElement);
    t.exports = function(t) {
        return o ? i.createElement(t) : {}
    }
}, function(t, e, n) {
    e.f = n(6)
}, function(t, e, n) {
    var r = n(51)("keys"),
        i = n(32);
    t.exports = function(t) {
        return r[t] || (r[t] = i(t))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    var r = n(25);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}, function(t, e, n) {
    var r = n(2).document;
    t.exports = r && r.documentElement
}, function(t, e, n) {
    var r = n(5),
        i = n(4),
        o = function(t, e) {
            if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
            try {
                (r = n(23)(Function.call, n(19).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return o(t, n), e ? t.__proto__ = n : r(t, n), t
            }
        }({}, !1) : void 0),
        check: o
    }
}, function(t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, n) {
    var r = n(5),
        i = n(71).set;
    t.exports = function(t, e, n) {
        var o, a = e.constructor;
        return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && r(o) && i && i(t, o), t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(18),
        i = n(26);
    t.exports = function(t) {
        var e = String(i(this)),
            n = "",
            o = r(t);
        if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
        for (; o > 0;
            (o >>>= 1) && (e += e)) 1 & o && (n += e);
        return n
    }
}, function(t, e) {
    t.exports = Math.sign || function(t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
    }
}, function(t, e) {
    var n = Math.expm1;
    t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(t) {
        return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
    } : n
}, function(t, e, n) {
    var r = n(18),
        i = n(26);
    t.exports = function(t) {
        return function(e, n) {
            var o, a, s = String(i(e)),
                c = r(n),
                u = s.length;
            return c < 0 || c >= u ? t ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : o : t ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(33),
        i = n(1),
        o = n(12),
        a = n(15),
        s = n(41),
        c = n(110),
        u = n(40),
        l = n(38),
        f = n(6)("iterator"),
        h = !([].keys && "next" in [].keys()),
        d = function() {
            return this
        };
    t.exports = function(t, e, n, p, g, b, v) {
        c(n, e, p);
        var m, y, x, _ = function(t) {
                if (!h && t in S) return S[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            w = e + " Iterator",
            O = "values" == g,
            j = !1,
            S = t.prototype,
            M = S[f] || S["@@iterator"] || g && S[g],
            k = M || _(g),
            E = g ? O ? _("entries") : k : void 0,
            A = "Array" == e && S.entries || M;
        if (A && (x = l(A.call(new t))) !== Object.prototype && x.next && (u(x, w, !0), r || "function" == typeof x[f] || a(x, f, d)), O && M && "values" !== M.name && (j = !0, k = function() {
                return M.call(this)
            }), r && !v || !h && !j && S[f] || a(S, f, k), s[e] = k, s[w] = d, g)
            if (m = {
                    values: O ? k : _("values"),
                    keys: b ? k : _("keys"),
                    entries: E
                }, v)
                for (y in m) y in S || o(S, y, m[y]);
            else i(i.P + i.F * (h || j), e, m);
        return m
    }
}, function(t, e, n) {
    var r = n(80),
        i = n(26);
    t.exports = function(t, e, n) {
        if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(i(t))
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(25),
        o = n(6)("match");
    t.exports = function(t) {
        var e;
        return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
    }
}, function(t, e, n) {
    var r = n(6)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (n) {
            try {
                return e[r] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }
}, function(t, e, n) {
    var r = n(41),
        i = n(6)("iterator"),
        o = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || o[i] === t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(9),
        i = n(31);
    t.exports = function(t, e, n) {
        e in t ? r.f(t, e, i(0, n)) : t[e] = n
    }
}, function(t, e, n) {
    var r = n(49),
        i = n(6)("iterator"),
        o = n(41);
    t.exports = n(10).getIteratorMethod = function(t) {
        if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
    }
}, function(t, e, n) {
    "use strict";
    var r = n(11),
        i = n(35),
        o = n(7);
    t.exports = function(t) {
        for (var e = r(this), n = o(e.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), c = a > 2 ? arguments[2] : void 0, u = void 0 === c ? n : i(c, n); u > s;) e[s++] = t;
        return e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(42),
        i = n(114),
        o = n(41),
        a = n(16);
    t.exports = n(78)(Array, "Array", (function(t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }), (function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function(t, e, n) {
    "use strict";
    var r, i, o = n(56),
        a = RegExp.prototype.exec,
        s = String.prototype.replace,
        c = a,
        u = (r = /a/, i = /b*/g, a.call(r, "a"), a.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
        l = void 0 !== /()??/.exec("")[1];
    (u || l) && (c = function(t) {
        var e, n, r, i, c = this;
        return l && (n = new RegExp("^" + c.source + "$(?!\\s)", o.call(c))), u && (e = c.lastIndex), r = a.call(c, t), u && r && (c.lastIndex = c.global ? r.index + r[0].length : e), l && r && r.length > 1 && s.call(r[0], n, (function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
        })), r
    }), t.exports = c
}, function(t, e, n) {
    "use strict";
    var r = n(77)(!0);
    t.exports = function(t, e, n) {
        return e + (n ? r(t, e).length : 1)
    }
}, function(t, e, n) {
    var r, i, o, a = n(23),
        s = n(104),
        c = n(70),
        u = n(65),
        l = n(2),
        f = l.process,
        h = l.setImmediate,
        d = l.clearImmediate,
        p = l.MessageChannel,
        g = l.Dispatch,
        b = 0,
        v = {},
        m = function() {
            var t = +this;
            if (v.hasOwnProperty(t)) {
                var e = v[t];
                delete v[t], e()
            }
        },
        y = function(t) {
            m.call(t.data)
        };
    h && d || (h = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return v[++b] = function() {
            s("function" == typeof t ? t : Function(t), e)
        }, r(b), b
    }, d = function(t) {
        delete v[t]
    }, "process" == n(25)(f) ? r = function(t) {
        f.nextTick(a(m, t, 1))
    } : g && g.now ? r = function(t) {
        g.now(a(m, t, 1))
    } : p ? (o = (i = new p).port2, i.port1.onmessage = y, r = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
        l.postMessage(t + "", "*")
    }, l.addEventListener("message", y, !1)) : r = "onreadystatechange" in u("script") ? function(t) {
        c.appendChild(u("script")).onreadystatechange = function() {
            c.removeChild(this), m.call(t)
        }
    } : function(t) {
        setTimeout(a(m, t, 1), 0)
    }), t.exports = {
        set: h,
        clear: d
    }
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(8),
        o = n(33),
        a = n(62),
        s = n(15),
        c = n(45),
        u = n(3),
        l = n(44),
        f = n(18),
        h = n(7),
        d = n(122),
        p = n(37).f,
        g = n(9).f,
        b = n(85),
        v = n(40),
        m = r.ArrayBuffer,
        y = r.DataView,
        x = r.Math,
        _ = r.RangeError,
        w = r.Infinity,
        O = m,
        j = x.abs,
        S = x.pow,
        M = x.floor,
        k = x.log,
        E = x.LN2,
        A = i ? "_b" : "buffer",
        P = i ? "_l" : "byteLength",
        T = i ? "_o" : "byteOffset";

    function D(t, e, n) {
        var r, i, o, a = new Array(n),
            s = 8 * n - e - 1,
            c = (1 << s) - 1,
            u = c >> 1,
            l = 23 === e ? S(2, -24) - S(2, -77) : 0,
            f = 0,
            h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for ((t = j(t)) != t || t === w ? (i = t != t ? 1 : 0, r = c) : (r = M(k(t) / E), t * (o = S(2, -r)) < 1 && (r--, o *= 2), (t += r + u >= 1 ? l / o : l * S(2, 1 - u)) * o >= 2 && (r++, o /= 2), r + u >= c ? (i = 0, r = c) : r + u >= 1 ? (i = (t * o - 1) * S(2, e), r += u) : (i = t * S(2, u - 1) * S(2, e), r = 0)); e >= 8; a[f++] = 255 & i, i /= 256, e -= 8);
        for (r = r << e | i, s += e; s > 0; a[f++] = 255 & r, r /= 256, s -= 8);
        return a[--f] |= 128 * h, a
    }

    function C(t, e, n) {
        var r, i = 8 * n - e - 1,
            o = (1 << i) - 1,
            a = o >> 1,
            s = i - 7,
            c = n - 1,
            u = t[c--],
            l = 127 & u;
        for (u >>= 7; s > 0; l = 256 * l + t[c], c--, s -= 8);
        for (r = l & (1 << -s) - 1, l >>= -s, s += e; s > 0; r = 256 * r + t[c], c--, s -= 8);
        if (0 === l) l = 1 - a;
        else {
            if (l === o) return r ? NaN : u ? -w : w;
            r += S(2, e), l -= a
        }
        return (u ? -1 : 1) * r * S(2, l - e)
    }

    function L(t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
    }

    function I(t) {
        return [255 & t]
    }

    function R(t) {
        return [255 & t, t >> 8 & 255]
    }

    function F(t) {
        return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
    }

    function z(t) {
        return D(t, 52, 8)
    }

    function N(t) {
        return D(t, 23, 4)
    }

    function B(t, e, n) {
        g(t.prototype, e, {
            get: function() {
                return this[n]
            }
        })
    }

    function W(t, e, n, r) {
        var i = d(+n);
        if (i + e > t[P]) throw _("Wrong index!");
        var o = t[A]._b,
            a = i + t[T],
            s = o.slice(a, a + e);
        return r ? s : s.reverse()
    }

    function V(t, e, n, r, i, o) {
        var a = d(+n);
        if (a + e > t[P]) throw _("Wrong index!");
        for (var s = t[A]._b, c = a + t[T], u = r(+i), l = 0; l < e; l++) s[c + l] = u[o ? l : e - l - 1]
    }
    if (a.ABV) {
        if (!u((function() {
                m(1)
            })) || !u((function() {
                new m(-1)
            })) || u((function() {
                return new m, new m(1.5), new m(NaN), "ArrayBuffer" != m.name
            }))) {
            for (var H, U = (m = function(t) {
                    return l(this, m), new O(d(t))
                }).prototype = O.prototype, $ = p(O), Y = 0; $.length > Y;)(H = $[Y++]) in m || s(m, H, O[H]);
            o || (U.constructor = m)
        }
        var q = new y(new m(2)),
            G = y.prototype.setInt8;
        q.setInt8(0, 2147483648), q.setInt8(1, 2147483649), !q.getInt8(0) && q.getInt8(1) || c(y.prototype, {
            setInt8: function(t, e) {
                G.call(this, t, e << 24 >> 24)
            },
            setUint8: function(t, e) {
                G.call(this, t, e << 24 >> 24)
            }
        }, !0)
    } else m = function(t) {
        l(this, m, "ArrayBuffer");
        var e = d(t);
        this._b = b.call(new Array(e), 0), this[P] = e
    }, y = function(t, e, n) {
        l(this, y, "DataView"), l(t, m, "DataView");
        var r = t[P],
            i = f(e);
        if (i < 0 || i > r) throw _("Wrong offset!");
        if (i + (n = void 0 === n ? r - i : h(n)) > r) throw _("Wrong length!");
        this[A] = t, this[T] = i, this[P] = n
    }, i && (B(m, "byteLength", "_l"), B(y, "buffer", "_b"), B(y, "byteLength", "_l"), B(y, "byteOffset", "_o")), c(y.prototype, {
        getInt8: function(t) {
            return W(this, 1, t)[0] << 24 >> 24
        },
        getUint8: function(t) {
            return W(this, 1, t)[0]
        },
        getInt16: function(t) {
            var e = W(this, 2, t, arguments[1]);
            return (e[1] << 8 | e[0]) << 16 >> 16
        },
        getUint16: function(t) {
            var e = W(this, 2, t, arguments[1]);
            return e[1] << 8 | e[0]
        },
        getInt32: function(t) {
            return L(W(this, 4, t, arguments[1]))
        },
        getUint32: function(t) {
            return L(W(this, 4, t, arguments[1])) >>> 0
        },
        getFloat32: function(t) {
            return C(W(this, 4, t, arguments[1]), 23, 4)
        },
        getFloat64: function(t) {
            return C(W(this, 8, t, arguments[1]), 52, 8)
        },
        setInt8: function(t, e) {
            V(this, 1, t, I, e)
        },
        setUint8: function(t, e) {
            V(this, 1, t, I, e)
        },
        setInt16: function(t, e) {
            V(this, 2, t, R, e, arguments[2])
        },
        setUint16: function(t, e) {
            V(this, 2, t, R, e, arguments[2])
        },
        setInt32: function(t, e) {
            V(this, 4, t, F, e, arguments[2])
        },
        setUint32: function(t, e) {
            V(this, 4, t, F, e, arguments[2])
        },
        setFloat32: function(t, e) {
            V(this, 4, t, N, e, arguments[2])
        },
        setFloat64: function(t, e) {
            V(this, 8, t, z, e, arguments[2])
        }
    });
    v(m, "ArrayBuffer"), v(y, "DataView"), s(y.prototype, a.VIEW, !0), e.ArrayBuffer = m, e.DataView = y
}, function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function(t, e) {
    function n(t, e, n, r, i, o, a) {
        try {
            var s = t[o](a),
                c = s.value
        } catch (t) {
            return void n(t)
        }
        s.done ? e(c) : Promise.resolve(c).then(r, i)
    }
    t.exports = function(t) {
        return function() {
            var e = this,
                r = arguments;
            return new Promise((function(i, o) {
                var a = t.apply(e, r);

                function s(t) {
                    n(a, i, o, s, c, "next", t)
                }

                function c(t) {
                    n(a, i, o, s, c, "throw", t)
                }
                s(void 0)
            }))
        }
    }
}, function(t, e, n) {
    (function(t, r) {
        var i;
        /**
         * @license
         * Lodash <https://lodash.com/>
         * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
         * Released under MIT license <https://lodash.com/license>
         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         */
        (function() {
            var o = "Expected a function",
                a = "__lodash_placeholder__",
                s = [
                    ["ary", 128],
                    ["bind", 1],
                    ["bindKey", 2],
                    ["curry", 8],
                    ["curryRight", 16],
                    ["flip", 512],
                    ["partial", 32],
                    ["partialRight", 64],
                    ["rearg", 256]
                ],
                c = "[object Arguments]",
                u = "[object Array]",
                l = "[object Boolean]",
                f = "[object Date]",
                h = "[object Error]",
                d = "[object Function]",
                p = "[object GeneratorFunction]",
                g = "[object Map]",
                b = "[object Number]",
                v = "[object Object]",
                m = "[object RegExp]",
                y = "[object Set]",
                x = "[object String]",
                _ = "[object Symbol]",
                w = "[object WeakMap]",
                O = "[object ArrayBuffer]",
                j = "[object DataView]",
                S = "[object Float32Array]",
                M = "[object Float64Array]",
                k = "[object Int8Array]",
                E = "[object Int16Array]",
                A = "[object Int32Array]",
                P = "[object Uint8Array]",
                T = "[object Uint16Array]",
                D = "[object Uint32Array]",
                C = /\b__p \+= '';/g,
                L = /\b(__p \+=) '' \+/g,
                I = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                R = /&(?:amp|lt|gt|quot|#39);/g,
                F = /[&<>"']/g,
                z = RegExp(R.source),
                N = RegExp(F.source),
                B = /<%-([\s\S]+?)%>/g,
                W = /<%([\s\S]+?)%>/g,
                V = /<%=([\s\S]+?)%>/g,
                H = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                U = /^\w*$/,
                $ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Y = /[\\^$.*+?()[\]{}|]/g,
                q = RegExp(Y.source),
                G = /^\s+|\s+$/g,
                X = /^\s+/,
                K = /\s+$/,
                J = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                Z = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Q = /,? & /,
                tt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                et = /\\(\\)?/g,
                nt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                rt = /\w*$/,
                it = /^[-+]0x[0-9a-f]+$/i,
                ot = /^0b[01]+$/i,
                at = /^\[object .+?Constructor\]$/,
                st = /^0o[0-7]+$/i,
                ct = /^(?:0|[1-9]\d*)$/,
                ut = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                lt = /($^)/,
                ft = /['\n\r\u2028\u2029\\]/g,
                ht = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                dt = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                pt = "[\\ud800-\\udfff]",
                gt = "[" + dt + "]",
                bt = "[" + ht + "]",
                vt = "\\d+",
                mt = "[\\u2700-\\u27bf]",
                yt = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                xt = "[^\\ud800-\\udfff" + dt + vt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                _t = "\\ud83c[\\udffb-\\udfff]",
                wt = "[^\\ud800-\\udfff]",
                Ot = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                jt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                St = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                Mt = "(?:" + yt + "|" + xt + ")",
                kt = "(?:" + St + "|" + xt + ")",
                Et = "(?:" + bt + "|" + _t + ")" + "?",
                At = "[\\ufe0e\\ufe0f]?" + Et + ("(?:\\u200d(?:" + [wt, Ot, jt].join("|") + ")[\\ufe0e\\ufe0f]?" + Et + ")*"),
                Pt = "(?:" + [mt, Ot, jt].join("|") + ")" + At,
                Tt = "(?:" + [wt + bt + "?", bt, Ot, jt, pt].join("|") + ")",
                Dt = RegExp("['’]", "g"),
                Ct = RegExp(bt, "g"),
                Lt = RegExp(_t + "(?=" + _t + ")|" + Tt + At, "g"),
                It = RegExp([St + "?" + yt + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [gt, St, "$"].join("|") + ")", kt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [gt, St + Mt, "$"].join("|") + ")", St + "?" + Mt + "+(?:['’](?:d|ll|m|re|s|t|ve))?", St + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", vt, Pt].join("|"), "g"),
                Rt = RegExp("[\\u200d\\ud800-\\udfff" + ht + "\\ufe0e\\ufe0f]"),
                Ft = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                zt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                Nt = -1,
                Bt = {};
            Bt[S] = Bt[M] = Bt[k] = Bt[E] = Bt[A] = Bt[P] = Bt["[object Uint8ClampedArray]"] = Bt[T] = Bt[D] = !0, Bt[c] = Bt[u] = Bt[O] = Bt[l] = Bt[j] = Bt[f] = Bt[h] = Bt[d] = Bt[g] = Bt[b] = Bt[v] = Bt[m] = Bt[y] = Bt[x] = Bt[w] = !1;
            var Wt = {};
            Wt[c] = Wt[u] = Wt[O] = Wt[j] = Wt[l] = Wt[f] = Wt[S] = Wt[M] = Wt[k] = Wt[E] = Wt[A] = Wt[g] = Wt[b] = Wt[v] = Wt[m] = Wt[y] = Wt[x] = Wt[_] = Wt[P] = Wt["[object Uint8ClampedArray]"] = Wt[T] = Wt[D] = !0, Wt[h] = Wt[d] = Wt[w] = !1;
            var Vt = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Ht = parseFloat,
                Ut = parseInt,
                $t = "object" == typeof t && t && t.Object === Object && t,
                Yt = "object" == typeof self && self && self.Object === Object && self,
                qt = $t || Yt || Function("return this")(),
                Gt = e && !e.nodeType && e,
                Xt = Gt && "object" == typeof r && r && !r.nodeType && r,
                Kt = Xt && Xt.exports === Gt,
                Jt = Kt && $t.process,
                Zt = function() {
                    try {
                        var t = Xt && Xt.require && Xt.require("util").types;
                        return t || Jt && Jt.binding && Jt.binding("util")
                    } catch (t) {}
                }(),
                Qt = Zt && Zt.isArrayBuffer,
                te = Zt && Zt.isDate,
                ee = Zt && Zt.isMap,
                ne = Zt && Zt.isRegExp,
                re = Zt && Zt.isSet,
                ie = Zt && Zt.isTypedArray;

            function oe(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            }

            function ae(t, e, n, r) {
                for (var i = -1, o = null == t ? 0 : t.length; ++i < o;) {
                    var a = t[i];
                    e(r, a, n(a), t)
                }
                return r
            }

            function se(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
                return t
            }

            function ce(t, e) {
                for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t););
                return t
            }

            function ue(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                    if (!e(t[n], n, t)) return !1;
                return !0
            }

            function le(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
                    var a = t[n];
                    e(a, n, t) && (o[i++] = a)
                }
                return o
            }

            function fe(t, e) {
                return !!(null == t ? 0 : t.length) && _e(t, e, 0) > -1
            }

            function he(t, e, n) {
                for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)
                    if (n(e, t[r])) return !0;
                return !1
            }

            function de(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
                return i
            }

            function pe(t, e) {
                for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
                return t
            }

            function ge(t, e, n, r) {
                var i = -1,
                    o = null == t ? 0 : t.length;
                for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
                return n
            }

            function be(t, e, n, r) {
                var i = null == t ? 0 : t.length;
                for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t);
                return n
            }

            function ve(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                    if (e(t[n], n, t)) return !0;
                return !1
            }
            var me = Se("length");

            function ye(t, e, n) {
                var r;
                return n(t, (function(t, n, i) {
                    if (e(t, n, i)) return r = n, !1
                })), r
            }

            function xe(t, e, n, r) {
                for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                    if (e(t[o], o, t)) return o;
                return -1
            }

            function _e(t, e, n) {
                return e == e ? function(t, e, n) {
                    var r = n - 1,
                        i = t.length;
                    for (; ++r < i;)
                        if (t[r] === e) return r;
                    return -1
                }(t, e, n) : xe(t, Oe, n)
            }

            function we(t, e, n, r) {
                for (var i = n - 1, o = t.length; ++i < o;)
                    if (r(t[i], e)) return i;
                return -1
            }

            function Oe(t) {
                return t != t
            }

            function je(t, e) {
                var n = null == t ? 0 : t.length;
                return n ? Ee(t, e) / n : NaN
            }

            function Se(t) {
                return function(e) {
                    return null == e ? void 0 : e[t]
                }
            }

            function Me(t) {
                return function(e) {
                    return null == t ? void 0 : t[e]
                }
            }

            function ke(t, e, n, r, i) {
                return i(t, (function(t, i, o) {
                    n = r ? (r = !1, t) : e(n, t, i, o)
                })), n
            }

            function Ee(t, e) {
                for (var n, r = -1, i = t.length; ++r < i;) {
                    var o = e(t[r]);
                    void 0 !== o && (n = void 0 === n ? o : n + o)
                }
                return n
            }

            function Ae(t, e) {
                for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                return r
            }

            function Pe(t) {
                return function(e) {
                    return t(e)
                }
            }

            function Te(t, e) {
                return de(e, (function(e) {
                    return t[e]
                }))
            }

            function De(t, e) {
                return t.has(e)
            }

            function Ce(t, e) {
                for (var n = -1, r = t.length; ++n < r && _e(e, t[n], 0) > -1;);
                return n
            }

            function Le(t, e) {
                for (var n = t.length; n-- && _e(e, t[n], 0) > -1;);
                return n
            }

            function Ie(t, e) {
                for (var n = t.length, r = 0; n--;) t[n] === e && ++r;
                return r
            }
            var Re = Me({
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ã": "A",
                    "Ä": "A",
                    "Å": "A",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ã": "a",
                    "ä": "a",
                    "å": "a",
                    "Ç": "C",
                    "ç": "c",
                    "Ð": "D",
                    "ð": "d",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ë": "E",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ë": "e",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ï": "I",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ï": "i",
                    "Ñ": "N",
                    "ñ": "n",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Õ": "O",
                    "Ö": "O",
                    "Ø": "O",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "õ": "o",
                    "ö": "o",
                    "ø": "o",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ü": "U",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ü": "u",
                    "Ý": "Y",
                    "ý": "y",
                    "ÿ": "y",
                    "Æ": "Ae",
                    "æ": "ae",
                    "Þ": "Th",
                    "þ": "th",
                    "ß": "ss",
                    "Ā": "A",
                    "Ă": "A",
                    "Ą": "A",
                    "ā": "a",
                    "ă": "a",
                    "ą": "a",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "Ď": "D",
                    "Đ": "D",
                    "ď": "d",
                    "đ": "d",
                    "Ē": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ę": "E",
                    "Ě": "E",
                    "ē": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ę": "e",
                    "ě": "e",
                    "Ĝ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ģ": "G",
                    "ĝ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ģ": "g",
                    "Ĥ": "H",
                    "Ħ": "H",
                    "ĥ": "h",
                    "ħ": "h",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "Į": "I",
                    "İ": "I",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "į": "i",
                    "ı": "i",
                    "Ĵ": "J",
                    "ĵ": "j",
                    "Ķ": "K",
                    "ķ": "k",
                    "ĸ": "k",
                    "Ĺ": "L",
                    "Ļ": "L",
                    "Ľ": "L",
                    "Ŀ": "L",
                    "Ł": "L",
                    "ĺ": "l",
                    "ļ": "l",
                    "ľ": "l",
                    "ŀ": "l",
                    "ł": "l",
                    "Ń": "N",
                    "Ņ": "N",
                    "Ň": "N",
                    "Ŋ": "N",
                    "ń": "n",
                    "ņ": "n",
                    "ň": "n",
                    "ŋ": "n",
                    "Ō": "O",
                    "Ŏ": "O",
                    "Ő": "O",
                    "ō": "o",
                    "ŏ": "o",
                    "ő": "o",
                    "Ŕ": "R",
                    "Ŗ": "R",
                    "Ř": "R",
                    "ŕ": "r",
                    "ŗ": "r",
                    "ř": "r",
                    "Ś": "S",
                    "Ŝ": "S",
                    "Ş": "S",
                    "Š": "S",
                    "ś": "s",
                    "ŝ": "s",
                    "ş": "s",
                    "š": "s",
                    "Ţ": "T",
                    "Ť": "T",
                    "Ŧ": "T",
                    "ţ": "t",
                    "ť": "t",
                    "ŧ": "t",
                    "Ũ": "U",
                    "Ū": "U",
                    "Ŭ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ų": "U",
                    "ũ": "u",
                    "ū": "u",
                    "ŭ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ų": "u",
                    "Ŵ": "W",
                    "ŵ": "w",
                    "Ŷ": "Y",
                    "ŷ": "y",
                    "Ÿ": "Y",
                    "Ź": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "ź": "z",
                    "ż": "z",
                    "ž": "z",
                    "Ĳ": "IJ",
                    "ĳ": "ij",
                    "Œ": "Oe",
                    "œ": "oe",
                    "ŉ": "'n",
                    "ſ": "s"
                }),
                Fe = Me({
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                });

            function ze(t) {
                return "\\" + Vt[t]
            }

            function Ne(t) {
                return Rt.test(t)
            }

            function Be(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach((function(t, r) {
                    n[++e] = [r, t]
                })), n
            }

            function We(t, e) {
                return function(n) {
                    return t(e(n))
                }
            }

            function Ve(t, e) {
                for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
                    var s = t[n];
                    s !== e && s !== a || (t[n] = a, o[i++] = n)
                }
                return o
            }

            function He(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach((function(t) {
                    n[++e] = t
                })), n
            }

            function Ue(t) {
                var e = -1,
                    n = Array(t.size);
                return t.forEach((function(t) {
                    n[++e] = [t, t]
                })), n
            }

            function $e(t) {
                return Ne(t) ? function(t) {
                    var e = Lt.lastIndex = 0;
                    for (; Lt.test(t);) ++e;
                    return e
                }(t) : me(t)
            }

            function Ye(t) {
                return Ne(t) ? function(t) {
                    return t.match(Lt) || []
                }(t) : function(t) {
                    return t.split("")
                }(t)
            }
            var qe = Me({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            });
            var Ge = function t(e) {
                var n, r = (e = null == e ? qt : Ge.defaults(qt.Object(), e, Ge.pick(qt, zt))).Array,
                    i = e.Date,
                    ht = e.Error,
                    dt = e.Function,
                    pt = e.Math,
                    gt = e.Object,
                    bt = e.RegExp,
                    vt = e.String,
                    mt = e.TypeError,
                    yt = r.prototype,
                    xt = dt.prototype,
                    _t = gt.prototype,
                    wt = e["__core-js_shared__"],
                    Ot = xt.toString,
                    jt = _t.hasOwnProperty,
                    St = 0,
                    Mt = (n = /[^.]+$/.exec(wt && wt.keys && wt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                    kt = _t.toString,
                    Et = Ot.call(gt),
                    At = qt._,
                    Pt = bt("^" + Ot.call(jt).replace(Y, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    Tt = Kt ? e.Buffer : void 0,
                    Lt = e.Symbol,
                    Rt = e.Uint8Array,
                    Vt = Tt ? Tt.allocUnsafe : void 0,
                    $t = We(gt.getPrototypeOf, gt),
                    Yt = gt.create,
                    Gt = _t.propertyIsEnumerable,
                    Xt = yt.splice,
                    Jt = Lt ? Lt.isConcatSpreadable : void 0,
                    Zt = Lt ? Lt.iterator : void 0,
                    me = Lt ? Lt.toStringTag : void 0,
                    Me = function() {
                        try {
                            var t = Qi(gt, "defineProperty");
                            return t({}, "", {}), t
                        } catch (t) {}
                    }(),
                    Xe = e.clearTimeout !== qt.clearTimeout && e.clearTimeout,
                    Ke = i && i.now !== qt.Date.now && i.now,
                    Je = e.setTimeout !== qt.setTimeout && e.setTimeout,
                    Ze = pt.ceil,
                    Qe = pt.floor,
                    tn = gt.getOwnPropertySymbols,
                    en = Tt ? Tt.isBuffer : void 0,
                    nn = e.isFinite,
                    rn = yt.join,
                    on = We(gt.keys, gt),
                    an = pt.max,
                    sn = pt.min,
                    cn = i.now,
                    un = e.parseInt,
                    ln = pt.random,
                    fn = yt.reverse,
                    hn = Qi(e, "DataView"),
                    dn = Qi(e, "Map"),
                    pn = Qi(e, "Promise"),
                    gn = Qi(e, "Set"),
                    bn = Qi(e, "WeakMap"),
                    vn = Qi(gt, "create"),
                    mn = bn && new bn,
                    yn = {},
                    xn = ko(hn),
                    _n = ko(dn),
                    wn = ko(pn),
                    On = ko(gn),
                    jn = ko(bn),
                    Sn = Lt ? Lt.prototype : void 0,
                    Mn = Sn ? Sn.valueOf : void 0,
                    kn = Sn ? Sn.toString : void 0;

                function En(t) {
                    if (Ua(t) && !Ca(t) && !(t instanceof Dn)) {
                        if (t instanceof Tn) return t;
                        if (jt.call(t, "__wrapped__")) return Eo(t)
                    }
                    return new Tn(t)
                }
                var An = function() {
                    function t() {}
                    return function(e) {
                        if (!Ha(e)) return {};
                        if (Yt) return Yt(e);
                        t.prototype = e;
                        var n = new t;
                        return t.prototype = void 0, n
                    }
                }();

                function Pn() {}

                function Tn(t, e) {
                    this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
                }

                function Dn(t) {
                    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                }

                function Cn(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function Ln(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function In(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function Rn(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.__data__ = new In; ++e < n;) this.add(t[e])
                }

                function Fn(t) {
                    var e = this.__data__ = new Ln(t);
                    this.size = e.size
                }

                function zn(t, e) {
                    var n = Ca(t),
                        r = !n && Da(t),
                        i = !n && !r && Fa(t),
                        o = !n && !r && !i && Za(t),
                        a = n || r || i || o,
                        s = a ? Ae(t.length, vt) : [],
                        c = s.length;
                    for (var u in t) !e && !jt.call(t, u) || a && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || ao(u, c)) || s.push(u);
                    return s
                }

                function Nn(t) {
                    var e = t.length;
                    return e ? t[Rr(0, e - 1)] : void 0
                }

                function Bn(t, e) {
                    return jo(vi(t), Xn(e, 0, t.length))
                }

                function Wn(t) {
                    return jo(vi(t))
                }

                function Vn(t, e, n) {
                    (void 0 !== n && !Aa(t[e], n) || void 0 === n && !(e in t)) && qn(t, e, n)
                }

                function Hn(t, e, n) {
                    var r = t[e];
                    jt.call(t, e) && Aa(r, n) && (void 0 !== n || e in t) || qn(t, e, n)
                }

                function Un(t, e) {
                    for (var n = t.length; n--;)
                        if (Aa(t[n][0], e)) return n;
                    return -1
                }

                function $n(t, e, n, r) {
                    return tr(t, (function(t, i, o) {
                        e(r, t, n(t), o)
                    })), r
                }

                function Yn(t, e) {
                    return t && mi(e, xs(e), t)
                }

                function qn(t, e, n) {
                    "__proto__" == e && Me ? Me(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : t[e] = n
                }

                function Gn(t, e) {
                    for (var n = -1, i = e.length, o = r(i), a = null == t; ++n < i;) o[n] = a ? void 0 : gs(t, e[n]);
                    return o
                }

                function Xn(t, e, n) {
                    return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
                }

                function Kn(t, e, n, r, i, o) {
                    var a, s = 1 & e,
                        u = 2 & e,
                        h = 4 & e;
                    if (n && (a = i ? n(t, r, i, o) : n(t)), void 0 !== a) return a;
                    if (!Ha(t)) return t;
                    var w = Ca(t);
                    if (w) {
                        if (a = function(t) {
                                var e = t.length,
                                    n = new t.constructor(e);
                                e && "string" == typeof t[0] && jt.call(t, "index") && (n.index = t.index, n.input = t.input);
                                return n
                            }(t), !s) return vi(t, a)
                    } else {
                        var C = no(t),
                            L = C == d || C == p;
                        if (Fa(t)) return fi(t, s);
                        if (C == v || C == c || L && !i) {
                            if (a = u || L ? {} : io(t), !s) return u ? function(t, e) {
                                return mi(t, eo(t), e)
                            }(t, function(t, e) {
                                return t && mi(e, _s(e), t)
                            }(a, t)) : function(t, e) {
                                return mi(t, to(t), e)
                            }(t, Yn(a, t))
                        } else {
                            if (!Wt[C]) return i ? t : {};
                            a = function(t, e, n) {
                                var r = t.constructor;
                                switch (e) {
                                    case O:
                                        return hi(t);
                                    case l:
                                    case f:
                                        return new r(+t);
                                    case j:
                                        return function(t, e) {
                                            var n = e ? hi(t.buffer) : t.buffer;
                                            return new t.constructor(n, t.byteOffset, t.byteLength)
                                        }(t, n);
                                    case S:
                                    case M:
                                    case k:
                                    case E:
                                    case A:
                                    case P:
                                    case "[object Uint8ClampedArray]":
                                    case T:
                                    case D:
                                        return di(t, n);
                                    case g:
                                        return new r;
                                    case b:
                                    case x:
                                        return new r(t);
                                    case m:
                                        return function(t) {
                                            var e = new t.constructor(t.source, rt.exec(t));
                                            return e.lastIndex = t.lastIndex, e
                                        }(t);
                                    case y:
                                        return new r;
                                    case _:
                                        return i = t, Mn ? gt(Mn.call(i)) : {}
                                }
                                var i
                            }(t, C, s)
                        }
                    }
                    o || (o = new Fn);
                    var I = o.get(t);
                    if (I) return I;
                    o.set(t, a), Xa(t) ? t.forEach((function(r) {
                        a.add(Kn(r, e, n, r, t, o))
                    })) : $a(t) && t.forEach((function(r, i) {
                        a.set(i, Kn(r, e, n, i, t, o))
                    }));
                    var R = w ? void 0 : (h ? u ? Yi : $i : u ? _s : xs)(t);
                    return se(R || t, (function(r, i) {
                        R && (r = t[i = r]), Hn(a, i, Kn(r, e, n, i, t, o))
                    })), a
                }

                function Jn(t, e, n) {
                    var r = n.length;
                    if (null == t) return !r;
                    for (t = gt(t); r--;) {
                        var i = n[r],
                            o = e[i],
                            a = t[i];
                        if (void 0 === a && !(i in t) || !o(a)) return !1
                    }
                    return !0
                }

                function Zn(t, e, n) {
                    if ("function" != typeof t) throw new mt(o);
                    return xo((function() {
                        t.apply(void 0, n)
                    }), e)
                }

                function Qn(t, e, n, r) {
                    var i = -1,
                        o = fe,
                        a = !0,
                        s = t.length,
                        c = [],
                        u = e.length;
                    if (!s) return c;
                    n && (e = de(e, Pe(n))), r ? (o = he, a = !1) : e.length >= 200 && (o = De, a = !1, e = new Rn(e));
                    t: for (; ++i < s;) {
                        var l = t[i],
                            f = null == n ? l : n(l);
                        if (l = r || 0 !== l ? l : 0, a && f == f) {
                            for (var h = u; h--;)
                                if (e[h] === f) continue t;
                            c.push(l)
                        } else o(e, f, r) || c.push(l)
                    }
                    return c
                }
                En.templateSettings = {
                    escape: B,
                    evaluate: W,
                    interpolate: V,
                    variable: "",
                    imports: {
                        _: En
                    }
                }, En.prototype = Pn.prototype, En.prototype.constructor = En, Tn.prototype = An(Pn.prototype), Tn.prototype.constructor = Tn, Dn.prototype = An(Pn.prototype), Dn.prototype.constructor = Dn, Cn.prototype.clear = function() {
                    this.__data__ = vn ? vn(null) : {}, this.size = 0
                }, Cn.prototype.delete = function(t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= e ? 1 : 0, e
                }, Cn.prototype.get = function(t) {
                    var e = this.__data__;
                    if (vn) {
                        var n = e[t];
                        return "__lodash_hash_undefined__" === n ? void 0 : n
                    }
                    return jt.call(e, t) ? e[t] : void 0
                }, Cn.prototype.has = function(t) {
                    var e = this.__data__;
                    return vn ? void 0 !== e[t] : jt.call(e, t)
                }, Cn.prototype.set = function(t, e) {
                    var n = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, n[t] = vn && void 0 === e ? "__lodash_hash_undefined__" : e, this
                }, Ln.prototype.clear = function() {
                    this.__data__ = [], this.size = 0
                }, Ln.prototype.delete = function(t) {
                    var e = this.__data__,
                        n = Un(e, t);
                    return !(n < 0) && (n == e.length - 1 ? e.pop() : Xt.call(e, n, 1), --this.size, !0)
                }, Ln.prototype.get = function(t) {
                    var e = this.__data__,
                        n = Un(e, t);
                    return n < 0 ? void 0 : e[n][1]
                }, Ln.prototype.has = function(t) {
                    return Un(this.__data__, t) > -1
                }, Ln.prototype.set = function(t, e) {
                    var n = this.__data__,
                        r = Un(n, t);
                    return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
                }, In.prototype.clear = function() {
                    this.size = 0, this.__data__ = {
                        hash: new Cn,
                        map: new(dn || Ln),
                        string: new Cn
                    }
                }, In.prototype.delete = function(t) {
                    var e = Ji(this, t).delete(t);
                    return this.size -= e ? 1 : 0, e
                }, In.prototype.get = function(t) {
                    return Ji(this, t).get(t)
                }, In.prototype.has = function(t) {
                    return Ji(this, t).has(t)
                }, In.prototype.set = function(t, e) {
                    var n = Ji(this, t),
                        r = n.size;
                    return n.set(t, e), this.size += n.size == r ? 0 : 1, this
                }, Rn.prototype.add = Rn.prototype.push = function(t) {
                    return this.__data__.set(t, "__lodash_hash_undefined__"), this
                }, Rn.prototype.has = function(t) {
                    return this.__data__.has(t)
                }, Fn.prototype.clear = function() {
                    this.__data__ = new Ln, this.size = 0
                }, Fn.prototype.delete = function(t) {
                    var e = this.__data__,
                        n = e.delete(t);
                    return this.size = e.size, n
                }, Fn.prototype.get = function(t) {
                    return this.__data__.get(t)
                }, Fn.prototype.has = function(t) {
                    return this.__data__.has(t)
                }, Fn.prototype.set = function(t, e) {
                    var n = this.__data__;
                    if (n instanceof Ln) {
                        var r = n.__data__;
                        if (!dn || r.length < 199) return r.push([t, e]), this.size = ++n.size, this;
                        n = this.__data__ = new In(r)
                    }
                    return n.set(t, e), this.size = n.size, this
                };
                var tr = _i(cr),
                    er = _i(ur, !0);

                function nr(t, e) {
                    var n = !0;
                    return tr(t, (function(t, r, i) {
                        return n = !!e(t, r, i)
                    })), n
                }

                function rr(t, e, n) {
                    for (var r = -1, i = t.length; ++r < i;) {
                        var o = t[r],
                            a = e(o);
                        if (null != a && (void 0 === s ? a == a && !Ja(a) : n(a, s))) var s = a,
                            c = o
                    }
                    return c
                }

                function ir(t, e) {
                    var n = [];
                    return tr(t, (function(t, r, i) {
                        e(t, r, i) && n.push(t)
                    })), n
                }

                function or(t, e, n, r, i) {
                    var o = -1,
                        a = t.length;
                    for (n || (n = oo), i || (i = []); ++o < a;) {
                        var s = t[o];
                        e > 0 && n(s) ? e > 1 ? or(s, e - 1, n, r, i) : pe(i, s) : r || (i[i.length] = s)
                    }
                    return i
                }
                var ar = wi(),
                    sr = wi(!0);

                function cr(t, e) {
                    return t && ar(t, e, xs)
                }

                function ur(t, e) {
                    return t && sr(t, e, xs)
                }

                function lr(t, e) {
                    return le(e, (function(e) {
                        return Ba(t[e])
                    }))
                }

                function fr(t, e) {
                    for (var n = 0, r = (e = si(e, t)).length; null != t && n < r;) t = t[Mo(e[n++])];
                    return n && n == r ? t : void 0
                }

                function hr(t, e, n) {
                    var r = e(t);
                    return Ca(t) ? r : pe(r, n(t))
                }

                function dr(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : me && me in gt(t) ? function(t) {
                        var e = jt.call(t, me),
                            n = t[me];
                        try {
                            t[me] = void 0;
                            var r = !0
                        } catch (t) {}
                        var i = kt.call(t);
                        r && (e ? t[me] = n : delete t[me]);
                        return i
                    }(t) : function(t) {
                        return kt.call(t)
                    }(t)
                }

                function pr(t, e) {
                    return t > e
                }

                function gr(t, e) {
                    return null != t && jt.call(t, e)
                }

                function br(t, e) {
                    return null != t && e in gt(t)
                }

                function vr(t, e, n) {
                    for (var i = n ? he : fe, o = t[0].length, a = t.length, s = a, c = r(a), u = 1 / 0, l = []; s--;) {
                        var f = t[s];
                        s && e && (f = de(f, Pe(e))), u = sn(f.length, u), c[s] = !n && (e || o >= 120 && f.length >= 120) ? new Rn(s && f) : void 0
                    }
                    f = t[0];
                    var h = -1,
                        d = c[0];
                    t: for (; ++h < o && l.length < u;) {
                        var p = f[h],
                            g = e ? e(p) : p;
                        if (p = n || 0 !== p ? p : 0, !(d ? De(d, g) : i(l, g, n))) {
                            for (s = a; --s;) {
                                var b = c[s];
                                if (!(b ? De(b, g) : i(t[s], g, n))) continue t
                            }
                            d && d.push(g), l.push(p)
                        }
                    }
                    return l
                }

                function mr(t, e, n) {
                    var r = null == (t = bo(t, e = si(e, t))) ? t : t[Mo(No(e))];
                    return null == r ? void 0 : oe(r, t, n)
                }

                function yr(t) {
                    return Ua(t) && dr(t) == c
                }

                function xr(t, e, n, r, i) {
                    return t === e || (null == t || null == e || !Ua(t) && !Ua(e) ? t != t && e != e : function(t, e, n, r, i, o) {
                        var a = Ca(t),
                            s = Ca(e),
                            d = a ? u : no(t),
                            p = s ? u : no(e),
                            w = (d = d == c ? v : d) == v,
                            S = (p = p == c ? v : p) == v,
                            M = d == p;
                        if (M && Fa(t)) {
                            if (!Fa(e)) return !1;
                            a = !0, w = !1
                        }
                        if (M && !w) return o || (o = new Fn), a || Za(t) ? Hi(t, e, n, r, i, o) : function(t, e, n, r, i, o, a) {
                            switch (n) {
                                case j:
                                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                    t = t.buffer, e = e.buffer;
                                case O:
                                    return !(t.byteLength != e.byteLength || !o(new Rt(t), new Rt(e)));
                                case l:
                                case f:
                                case b:
                                    return Aa(+t, +e);
                                case h:
                                    return t.name == e.name && t.message == e.message;
                                case m:
                                case x:
                                    return t == e + "";
                                case g:
                                    var s = Be;
                                case y:
                                    var c = 1 & r;
                                    if (s || (s = He), t.size != e.size && !c) return !1;
                                    var u = a.get(t);
                                    if (u) return u == e;
                                    r |= 2, a.set(t, e);
                                    var d = Hi(s(t), s(e), r, i, o, a);
                                    return a.delete(t), d;
                                case _:
                                    if (Mn) return Mn.call(t) == Mn.call(e)
                            }
                            return !1
                        }(t, e, d, n, r, i, o);
                        if (!(1 & n)) {
                            var k = w && jt.call(t, "__wrapped__"),
                                E = S && jt.call(e, "__wrapped__");
                            if (k || E) {
                                var A = k ? t.value() : t,
                                    P = E ? e.value() : e;
                                return o || (o = new Fn), i(A, P, n, r, o)
                            }
                        }
                        if (!M) return !1;
                        return o || (o = new Fn),
                            function(t, e, n, r, i, o) {
                                var a = 1 & n,
                                    s = $i(t),
                                    c = s.length,
                                    u = $i(e).length;
                                if (c != u && !a) return !1;
                                var l = c;
                                for (; l--;) {
                                    var f = s[l];
                                    if (!(a ? f in e : jt.call(e, f))) return !1
                                }
                                var h = o.get(t),
                                    d = o.get(e);
                                if (h && d) return h == e && d == t;
                                var p = !0;
                                o.set(t, e), o.set(e, t);
                                var g = a;
                                for (; ++l < c;) {
                                    f = s[l];
                                    var b = t[f],
                                        v = e[f];
                                    if (r) var m = a ? r(v, b, f, e, t, o) : r(b, v, f, t, e, o);
                                    if (!(void 0 === m ? b === v || i(b, v, n, r, o) : m)) {
                                        p = !1;
                                        break
                                    }
                                    g || (g = "constructor" == f)
                                }
                                if (p && !g) {
                                    var y = t.constructor,
                                        x = e.constructor;
                                    y == x || !("constructor" in t) || !("constructor" in e) || "function" == typeof y && y instanceof y && "function" == typeof x && x instanceof x || (p = !1)
                                }
                                return o.delete(t), o.delete(e), p
                            }(t, e, n, r, i, o)
                    }(t, e, n, r, xr, i))
                }

                function _r(t, e, n, r) {
                    var i = n.length,
                        o = i,
                        a = !r;
                    if (null == t) return !o;
                    for (t = gt(t); i--;) {
                        var s = n[i];
                        if (a && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
                    }
                    for (; ++i < o;) {
                        var c = (s = n[i])[0],
                            u = t[c],
                            l = s[1];
                        if (a && s[2]) {
                            if (void 0 === u && !(c in t)) return !1
                        } else {
                            var f = new Fn;
                            if (r) var h = r(u, l, c, t, e, f);
                            if (!(void 0 === h ? xr(l, u, 3, r, f) : h)) return !1
                        }
                    }
                    return !0
                }

                function wr(t) {
                    return !(!Ha(t) || (e = t, Mt && Mt in e)) && (Ba(t) ? Pt : at).test(ko(t));
                    var e
                }

                function Or(t) {
                    return "function" == typeof t ? t : null == t ? Ys : "object" == typeof t ? Ca(t) ? Ar(t[0], t[1]) : Er(t) : ec(t)
                }

                function jr(t) {
                    if (!fo(t)) return on(t);
                    var e = [];
                    for (var n in gt(t)) jt.call(t, n) && "constructor" != n && e.push(n);
                    return e
                }

                function Sr(t) {
                    if (!Ha(t)) return function(t) {
                        var e = [];
                        if (null != t)
                            for (var n in gt(t)) e.push(n);
                        return e
                    }(t);
                    var e = fo(t),
                        n = [];
                    for (var r in t)("constructor" != r || !e && jt.call(t, r)) && n.push(r);
                    return n
                }

                function Mr(t, e) {
                    return t < e
                }

                function kr(t, e) {
                    var n = -1,
                        i = Ia(t) ? r(t.length) : [];
                    return tr(t, (function(t, r, o) {
                        i[++n] = e(t, r, o)
                    })), i
                }

                function Er(t) {
                    var e = Zi(t);
                    return 1 == e.length && e[0][2] ? po(e[0][0], e[0][1]) : function(n) {
                        return n === t || _r(n, t, e)
                    }
                }

                function Ar(t, e) {
                    return co(t) && ho(e) ? po(Mo(t), e) : function(n) {
                        var r = gs(n, t);
                        return void 0 === r && r === e ? bs(n, t) : xr(e, r, 3)
                    }
                }

                function Pr(t, e, n, r, i) {
                    t !== e && ar(e, (function(o, a) {
                        if (i || (i = new Fn), Ha(o)) ! function(t, e, n, r, i, o, a) {
                            var s = mo(t, n),
                                c = mo(e, n),
                                u = a.get(c);
                            if (u) return void Vn(t, n, u);
                            var l = o ? o(s, c, n + "", t, e, a) : void 0,
                                f = void 0 === l;
                            if (f) {
                                var h = Ca(c),
                                    d = !h && Fa(c),
                                    p = !h && !d && Za(c);
                                l = c, h || d || p ? Ca(s) ? l = s : Ra(s) ? l = vi(s) : d ? (f = !1, l = fi(c, !0)) : p ? (f = !1, l = di(c, !0)) : l = [] : qa(c) || Da(c) ? (l = s, Da(s) ? l = as(s) : Ha(s) && !Ba(s) || (l = io(c))) : f = !1
                            }
                            f && (a.set(c, l), i(l, c, r, o, a), a.delete(c));
                            Vn(t, n, l)
                        }(t, e, a, n, Pr, r, i);
                        else {
                            var s = r ? r(mo(t, a), o, a + "", t, e, i) : void 0;
                            void 0 === s && (s = o), Vn(t, a, s)
                        }
                    }), _s)
                }

                function Tr(t, e) {
                    var n = t.length;
                    if (n) return ao(e += e < 0 ? n : 0, n) ? t[e] : void 0
                }

                function Dr(t, e, n) {
                    e = e.length ? de(e, (function(t) {
                        return Ca(t) ? function(e) {
                            return fr(e, 1 === t.length ? t[0] : t)
                        } : t
                    })) : [Ys];
                    var r = -1;
                    return e = de(e, Pe(Ki())),
                        function(t, e) {
                            var n = t.length;
                            for (t.sort(e); n--;) t[n] = t[n].value;
                            return t
                        }(kr(t, (function(t, n, i) {
                            return {
                                criteria: de(e, (function(e) {
                                    return e(t)
                                })),
                                index: ++r,
                                value: t
                            }
                        })), (function(t, e) {
                            return function(t, e, n) {
                                var r = -1,
                                    i = t.criteria,
                                    o = e.criteria,
                                    a = i.length,
                                    s = n.length;
                                for (; ++r < a;) {
                                    var c = pi(i[r], o[r]);
                                    if (c) {
                                        if (r >= s) return c;
                                        var u = n[r];
                                        return c * ("desc" == u ? -1 : 1)
                                    }
                                }
                                return t.index - e.index
                            }(t, e, n)
                        }))
                }

                function Cr(t, e, n) {
                    for (var r = -1, i = e.length, o = {}; ++r < i;) {
                        var a = e[r],
                            s = fr(t, a);
                        n(s, a) && Wr(o, si(a, t), s)
                    }
                    return o
                }

                function Lr(t, e, n, r) {
                    var i = r ? we : _e,
                        o = -1,
                        a = e.length,
                        s = t;
                    for (t === e && (e = vi(e)), n && (s = de(t, Pe(n))); ++o < a;)
                        for (var c = 0, u = e[o], l = n ? n(u) : u;
                            (c = i(s, l, c, r)) > -1;) s !== t && Xt.call(s, c, 1), Xt.call(t, c, 1);
                    return t
                }

                function Ir(t, e) {
                    for (var n = t ? e.length : 0, r = n - 1; n--;) {
                        var i = e[n];
                        if (n == r || i !== o) {
                            var o = i;
                            ao(i) ? Xt.call(t, i, 1) : Qr(t, i)
                        }
                    }
                    return t
                }

                function Rr(t, e) {
                    return t + Qe(ln() * (e - t + 1))
                }

                function Fr(t, e) {
                    var n = "";
                    if (!t || e < 1 || e > 9007199254740991) return n;
                    do {
                        e % 2 && (n += t), (e = Qe(e / 2)) && (t += t)
                    } while (e);
                    return n
                }

                function zr(t, e) {
                    return _o(go(t, e, Ys), t + "")
                }

                function Nr(t) {
                    return Nn(As(t))
                }

                function Br(t, e) {
                    var n = As(t);
                    return jo(n, Xn(e, 0, n.length))
                }

                function Wr(t, e, n, r) {
                    if (!Ha(t)) return t;
                    for (var i = -1, o = (e = si(e, t)).length, a = o - 1, s = t; null != s && ++i < o;) {
                        var c = Mo(e[i]),
                            u = n;
                        if ("__proto__" === c || "constructor" === c || "prototype" === c) return t;
                        if (i != a) {
                            var l = s[c];
                            void 0 === (u = r ? r(l, c, s) : void 0) && (u = Ha(l) ? l : ao(e[i + 1]) ? [] : {})
                        }
                        Hn(s, c, u), s = s[c]
                    }
                    return t
                }
                var Vr = mn ? function(t, e) {
                        return mn.set(t, e), t
                    } : Ys,
                    Hr = Me ? function(t, e) {
                        return Me(t, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Hs(e),
                            writable: !0
                        })
                    } : Ys;

                function Ur(t) {
                    return jo(As(t))
                }

                function $r(t, e, n) {
                    var i = -1,
                        o = t.length;
                    e < 0 && (e = -e > o ? 0 : o + e), (n = n > o ? o : n) < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
                    for (var a = r(o); ++i < o;) a[i] = t[i + e];
                    return a
                }

                function Yr(t, e) {
                    var n;
                    return tr(t, (function(t, r, i) {
                        return !(n = e(t, r, i))
                    })), !!n
                }

                function qr(t, e, n) {
                    var r = 0,
                        i = null == t ? r : t.length;
                    if ("number" == typeof e && e == e && i <= 2147483647) {
                        for (; r < i;) {
                            var o = r + i >>> 1,
                                a = t[o];
                            null !== a && !Ja(a) && (n ? a <= e : a < e) ? r = o + 1 : i = o
                        }
                        return i
                    }
                    return Gr(t, e, Ys, n)
                }

                function Gr(t, e, n, r) {
                    var i = 0,
                        o = null == t ? 0 : t.length;
                    if (0 === o) return 0;
                    for (var a = (e = n(e)) != e, s = null === e, c = Ja(e), u = void 0 === e; i < o;) {
                        var l = Qe((i + o) / 2),
                            f = n(t[l]),
                            h = void 0 !== f,
                            d = null === f,
                            p = f == f,
                            g = Ja(f);
                        if (a) var b = r || p;
                        else b = u ? p && (r || h) : s ? p && h && (r || !d) : c ? p && h && !d && (r || !g) : !d && !g && (r ? f <= e : f < e);
                        b ? i = l + 1 : o = l
                    }
                    return sn(o, 4294967294)
                }

                function Xr(t, e) {
                    for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
                        var a = t[n],
                            s = e ? e(a) : a;
                        if (!n || !Aa(s, c)) {
                            var c = s;
                            o[i++] = 0 === a ? 0 : a
                        }
                    }
                    return o
                }

                function Kr(t) {
                    return "number" == typeof t ? t : Ja(t) ? NaN : +t
                }

                function Jr(t) {
                    if ("string" == typeof t) return t;
                    if (Ca(t)) return de(t, Jr) + "";
                    if (Ja(t)) return kn ? kn.call(t) : "";
                    var e = t + "";
                    return "0" == e && 1 / t == -1 / 0 ? "-0" : e
                }

                function Zr(t, e, n) {
                    var r = -1,
                        i = fe,
                        o = t.length,
                        a = !0,
                        s = [],
                        c = s;
                    if (n) a = !1, i = he;
                    else if (o >= 200) {
                        var u = e ? null : Fi(t);
                        if (u) return He(u);
                        a = !1, i = De, c = new Rn
                    } else c = e ? [] : s;
                    t: for (; ++r < o;) {
                        var l = t[r],
                            f = e ? e(l) : l;
                        if (l = n || 0 !== l ? l : 0, a && f == f) {
                            for (var h = c.length; h--;)
                                if (c[h] === f) continue t;
                            e && c.push(f), s.push(l)
                        } else i(c, f, n) || (c !== s && c.push(f), s.push(l))
                    }
                    return s
                }

                function Qr(t, e) {
                    return null == (t = bo(t, e = si(e, t))) || delete t[Mo(No(e))]
                }

                function ti(t, e, n, r) {
                    return Wr(t, e, n(fr(t, e)), r)
                }

                function ei(t, e, n, r) {
                    for (var i = t.length, o = r ? i : -1;
                        (r ? o-- : ++o < i) && e(t[o], o, t););
                    return n ? $r(t, r ? 0 : o, r ? o + 1 : i) : $r(t, r ? o + 1 : 0, r ? i : o)
                }

                function ni(t, e) {
                    var n = t;
                    return n instanceof Dn && (n = n.value()), ge(e, (function(t, e) {
                        return e.func.apply(e.thisArg, pe([t], e.args))
                    }), n)
                }

                function ri(t, e, n) {
                    var i = t.length;
                    if (i < 2) return i ? Zr(t[0]) : [];
                    for (var o = -1, a = r(i); ++o < i;)
                        for (var s = t[o], c = -1; ++c < i;) c != o && (a[o] = Qn(a[o] || s, t[c], e, n));
                    return Zr(or(a, 1), e, n)
                }

                function ii(t, e, n) {
                    for (var r = -1, i = t.length, o = e.length, a = {}; ++r < i;) {
                        var s = r < o ? e[r] : void 0;
                        n(a, t[r], s)
                    }
                    return a
                }

                function oi(t) {
                    return Ra(t) ? t : []
                }

                function ai(t) {
                    return "function" == typeof t ? t : Ys
                }

                function si(t, e) {
                    return Ca(t) ? t : co(t, e) ? [t] : So(ss(t))
                }
                var ci = zr;

                function ui(t, e, n) {
                    var r = t.length;
                    return n = void 0 === n ? r : n, !e && n >= r ? t : $r(t, e, n)
                }
                var li = Xe || function(t) {
                    return qt.clearTimeout(t)
                };

                function fi(t, e) {
                    if (e) return t.slice();
                    var n = t.length,
                        r = Vt ? Vt(n) : new t.constructor(n);
                    return t.copy(r), r
                }

                function hi(t) {
                    var e = new t.constructor(t.byteLength);
                    return new Rt(e).set(new Rt(t)), e
                }

                function di(t, e) {
                    var n = e ? hi(t.buffer) : t.buffer;
                    return new t.constructor(n, t.byteOffset, t.length)
                }

                function pi(t, e) {
                    if (t !== e) {
                        var n = void 0 !== t,
                            r = null === t,
                            i = t == t,
                            o = Ja(t),
                            a = void 0 !== e,
                            s = null === e,
                            c = e == e,
                            u = Ja(e);
                        if (!s && !u && !o && t > e || o && a && c && !s && !u || r && a && c || !n && c || !i) return 1;
                        if (!r && !o && !u && t < e || u && n && i && !r && !o || s && n && i || !a && i || !c) return -1
                    }
                    return 0
                }

                function gi(t, e, n, i) {
                    for (var o = -1, a = t.length, s = n.length, c = -1, u = e.length, l = an(a - s, 0), f = r(u + l), h = !i; ++c < u;) f[c] = e[c];
                    for (; ++o < s;)(h || o < a) && (f[n[o]] = t[o]);
                    for (; l--;) f[c++] = t[o++];
                    return f
                }

                function bi(t, e, n, i) {
                    for (var o = -1, a = t.length, s = -1, c = n.length, u = -1, l = e.length, f = an(a - c, 0), h = r(f + l), d = !i; ++o < f;) h[o] = t[o];
                    for (var p = o; ++u < l;) h[p + u] = e[u];
                    for (; ++s < c;)(d || o < a) && (h[p + n[s]] = t[o++]);
                    return h
                }

                function vi(t, e) {
                    var n = -1,
                        i = t.length;
                    for (e || (e = r(i)); ++n < i;) e[n] = t[n];
                    return e
                }

                function mi(t, e, n, r) {
                    var i = !n;
                    n || (n = {});
                    for (var o = -1, a = e.length; ++o < a;) {
                        var s = e[o],
                            c = r ? r(n[s], t[s], s, n, t) : void 0;
                        void 0 === c && (c = t[s]), i ? qn(n, s, c) : Hn(n, s, c)
                    }
                    return n
                }

                function yi(t, e) {
                    return function(n, r) {
                        var i = Ca(n) ? ae : $n,
                            o = e ? e() : {};
                        return i(n, t, Ki(r, 2), o)
                    }
                }

                function xi(t) {
                    return zr((function(e, n) {
                        var r = -1,
                            i = n.length,
                            o = i > 1 ? n[i - 1] : void 0,
                            a = i > 2 ? n[2] : void 0;
                        for (o = t.length > 3 && "function" == typeof o ? (i--, o) : void 0, a && so(n[0], n[1], a) && (o = i < 3 ? void 0 : o, i = 1), e = gt(e); ++r < i;) {
                            var s = n[r];
                            s && t(e, s, r, o)
                        }
                        return e
                    }))
                }

                function _i(t, e) {
                    return function(n, r) {
                        if (null == n) return n;
                        if (!Ia(n)) return t(n, r);
                        for (var i = n.length, o = e ? i : -1, a = gt(n);
                            (e ? o-- : ++o < i) && !1 !== r(a[o], o, a););
                        return n
                    }
                }

                function wi(t) {
                    return function(e, n, r) {
                        for (var i = -1, o = gt(e), a = r(e), s = a.length; s--;) {
                            var c = a[t ? s : ++i];
                            if (!1 === n(o[c], c, o)) break
                        }
                        return e
                    }
                }

                function Oi(t) {
                    return function(e) {
                        var n = Ne(e = ss(e)) ? Ye(e) : void 0,
                            r = n ? n[0] : e.charAt(0),
                            i = n ? ui(n, 1).join("") : e.slice(1);
                        return r[t]() + i
                    }
                }

                function ji(t) {
                    return function(e) {
                        return ge(Bs(Ds(e).replace(Dt, "")), t, "")
                    }
                }

                function Si(t) {
                    return function() {
                        var e = arguments;
                        switch (e.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3]);
                            case 5:
                                return new t(e[0], e[1], e[2], e[3], e[4]);
                            case 6:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                            case 7:
                                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                        }
                        var n = An(t.prototype),
                            r = t.apply(n, e);
                        return Ha(r) ? r : n
                    }
                }

                function Mi(t) {
                    return function(e, n, r) {
                        var i = gt(e);
                        if (!Ia(e)) {
                            var o = Ki(n, 3);
                            e = xs(e), n = function(t) {
                                return o(i[t], t, i)
                            }
                        }
                        var a = t(e, n, r);
                        return a > -1 ? i[o ? e[a] : a] : void 0
                    }
                }

                function ki(t) {
                    return Ui((function(e) {
                        var n = e.length,
                            r = n,
                            i = Tn.prototype.thru;
                        for (t && e.reverse(); r--;) {
                            var a = e[r];
                            if ("function" != typeof a) throw new mt(o);
                            if (i && !s && "wrapper" == Gi(a)) var s = new Tn([], !0)
                        }
                        for (r = s ? r : n; ++r < n;) {
                            var c = Gi(a = e[r]),
                                u = "wrapper" == c ? qi(a) : void 0;
                            s = u && uo(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? s[Gi(u[0])].apply(s, u[3]) : 1 == a.length && uo(a) ? s[c]() : s.thru(a)
                        }
                        return function() {
                            var t = arguments,
                                r = t[0];
                            if (s && 1 == t.length && Ca(r)) return s.plant(r).value();
                            for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                            return o
                        }
                    }))
                }

                function Ei(t, e, n, i, o, a, s, c, u, l) {
                    var f = 128 & e,
                        h = 1 & e,
                        d = 2 & e,
                        p = 24 & e,
                        g = 512 & e,
                        b = d ? void 0 : Si(t);
                    return function v() {
                        for (var m = arguments.length, y = r(m), x = m; x--;) y[x] = arguments[x];
                        if (p) var _ = Xi(v),
                            w = Ie(y, _);
                        if (i && (y = gi(y, i, o, p)), a && (y = bi(y, a, s, p)), m -= w, p && m < l) {
                            var O = Ve(y, _);
                            return Ii(t, e, Ei, v.placeholder, n, y, O, c, u, l - m)
                        }
                        var j = h ? n : this,
                            S = d ? j[t] : t;
                        return m = y.length, c ? y = vo(y, c) : g && m > 1 && y.reverse(), f && u < m && (y.length = u), this && this !== qt && this instanceof v && (S = b || Si(S)), S.apply(j, y)
                    }
                }

                function Ai(t, e) {
                    return function(n, r) {
                        return function(t, e, n, r) {
                            return cr(t, (function(t, i, o) {
                                e(r, n(t), i, o)
                            })), r
                        }(n, t, e(r), {})
                    }
                }

                function Pi(t, e) {
                    return function(n, r) {
                        var i;
                        if (void 0 === n && void 0 === r) return e;
                        if (void 0 !== n && (i = n), void 0 !== r) {
                            if (void 0 === i) return r;
                            "string" == typeof n || "string" == typeof r ? (n = Jr(n), r = Jr(r)) : (n = Kr(n), r = Kr(r)), i = t(n, r)
                        }
                        return i
                    }
                }

                function Ti(t) {
                    return Ui((function(e) {
                        return e = de(e, Pe(Ki())), zr((function(n) {
                            var r = this;
                            return t(e, (function(t) {
                                return oe(t, r, n)
                            }))
                        }))
                    }))
                }

                function Di(t, e) {
                    var n = (e = void 0 === e ? " " : Jr(e)).length;
                    if (n < 2) return n ? Fr(e, t) : e;
                    var r = Fr(e, Ze(t / $e(e)));
                    return Ne(e) ? ui(Ye(r), 0, t).join("") : r.slice(0, t)
                }

                function Ci(t) {
                    return function(e, n, i) {
                        return i && "number" != typeof i && so(e, n, i) && (n = i = void 0), e = ns(e), void 0 === n ? (n = e, e = 0) : n = ns(n),
                            function(t, e, n, i) {
                                for (var o = -1, a = an(Ze((e - t) / (n || 1)), 0), s = r(a); a--;) s[i ? a : ++o] = t, t += n;
                                return s
                            }(e, n, i = void 0 === i ? e < n ? 1 : -1 : ns(i), t)
                    }
                }

                function Li(t) {
                    return function(e, n) {
                        return "string" == typeof e && "string" == typeof n || (e = os(e), n = os(n)), t(e, n)
                    }
                }

                function Ii(t, e, n, r, i, o, a, s, c, u) {
                    var l = 8 & e;
                    e |= l ? 32 : 64, 4 & (e &= ~(l ? 64 : 32)) || (e &= -4);
                    var f = [t, e, i, l ? o : void 0, l ? a : void 0, l ? void 0 : o, l ? void 0 : a, s, c, u],
                        h = n.apply(void 0, f);
                    return uo(t) && yo(h, f), h.placeholder = r, wo(h, t, e)
                }

                function Ri(t) {
                    var e = pt[t];
                    return function(t, n) {
                        if (t = os(t), (n = null == n ? 0 : sn(rs(n), 292)) && nn(t)) {
                            var r = (ss(t) + "e").split("e");
                            return +((r = (ss(e(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
                        }
                        return e(t)
                    }
                }
                var Fi = gn && 1 / He(new gn([, -0]))[1] == 1 / 0 ? function(t) {
                    return new gn(t)
                } : Js;

                function zi(t) {
                    return function(e) {
                        var n = no(e);
                        return n == g ? Be(e) : n == y ? Ue(e) : function(t, e) {
                            return de(e, (function(e) {
                                return [e, t[e]]
                            }))
                        }(e, t(e))
                    }
                }

                function Ni(t, e, n, i, s, c, u, l) {
                    var f = 2 & e;
                    if (!f && "function" != typeof t) throw new mt(o);
                    var h = i ? i.length : 0;
                    if (h || (e &= -97, i = s = void 0), u = void 0 === u ? u : an(rs(u), 0), l = void 0 === l ? l : rs(l), h -= s ? s.length : 0, 64 & e) {
                        var d = i,
                            p = s;
                        i = s = void 0
                    }
                    var g = f ? void 0 : qi(t),
                        b = [t, e, n, i, s, d, p, c, u, l];
                    if (g && function(t, e) {
                            var n = t[1],
                                r = e[1],
                                i = n | r,
                                o = i < 131,
                                s = 128 == r && 8 == n || 128 == r && 256 == n && t[7].length <= e[8] || 384 == r && e[7].length <= e[8] && 8 == n;
                            if (!o && !s) return t;
                            1 & r && (t[2] = e[2], i |= 1 & n ? 0 : 4);
                            var c = e[3];
                            if (c) {
                                var u = t[3];
                                t[3] = u ? gi(u, c, e[4]) : c, t[4] = u ? Ve(t[3], a) : e[4]
                            }(c = e[5]) && (u = t[5], t[5] = u ? bi(u, c, e[6]) : c, t[6] = u ? Ve(t[5], a) : e[6]);
                            (c = e[7]) && (t[7] = c);
                            128 & r && (t[8] = null == t[8] ? e[8] : sn(t[8], e[8]));
                            null == t[9] && (t[9] = e[9]);
                            t[0] = e[0], t[1] = i
                        }(b, g), t = b[0], e = b[1], n = b[2], i = b[3], s = b[4], !(l = b[9] = void 0 === b[9] ? f ? 0 : t.length : an(b[9] - h, 0)) && 24 & e && (e &= -25), e && 1 != e) v = 8 == e || 16 == e ? function(t, e, n) {
                        var i = Si(t);
                        return function o() {
                            for (var a = arguments.length, s = r(a), c = a, u = Xi(o); c--;) s[c] = arguments[c];
                            var l = a < 3 && s[0] !== u && s[a - 1] !== u ? [] : Ve(s, u);
                            if ((a -= l.length) < n) return Ii(t, e, Ei, o.placeholder, void 0, s, l, void 0, void 0, n - a);
                            var f = this && this !== qt && this instanceof o ? i : t;
                            return oe(f, this, s)
                        }
                    }(t, e, l) : 32 != e && 33 != e || s.length ? Ei.apply(void 0, b) : function(t, e, n, i) {
                        var o = 1 & e,
                            a = Si(t);
                        return function e() {
                            for (var s = -1, c = arguments.length, u = -1, l = i.length, f = r(l + c), h = this && this !== qt && this instanceof e ? a : t; ++u < l;) f[u] = i[u];
                            for (; c--;) f[u++] = arguments[++s];
                            return oe(h, o ? n : this, f)
                        }
                    }(t, e, n, i);
                    else var v = function(t, e, n) {
                        var r = 1 & e,
                            i = Si(t);
                        return function e() {
                            var o = this && this !== qt && this instanceof e ? i : t;
                            return o.apply(r ? n : this, arguments)
                        }
                    }(t, e, n);
                    return wo((g ? Vr : yo)(v, b), t, e)
                }

                function Bi(t, e, n, r) {
                    return void 0 === t || Aa(t, _t[n]) && !jt.call(r, n) ? e : t
                }

                function Wi(t, e, n, r, i, o) {
                    return Ha(t) && Ha(e) && (o.set(e, t), Pr(t, e, void 0, Wi, o), o.delete(e)), t
                }

                function Vi(t) {
                    return qa(t) ? void 0 : t
                }

                function Hi(t, e, n, r, i, o) {
                    var a = 1 & n,
                        s = t.length,
                        c = e.length;
                    if (s != c && !(a && c > s)) return !1;
                    var u = o.get(t),
                        l = o.get(e);
                    if (u && l) return u == e && l == t;
                    var f = -1,
                        h = !0,
                        d = 2 & n ? new Rn : void 0;
                    for (o.set(t, e), o.set(e, t); ++f < s;) {
                        var p = t[f],
                            g = e[f];
                        if (r) var b = a ? r(g, p, f, e, t, o) : r(p, g, f, t, e, o);
                        if (void 0 !== b) {
                            if (b) continue;
                            h = !1;
                            break
                        }
                        if (d) {
                            if (!ve(e, (function(t, e) {
                                    if (!De(d, e) && (p === t || i(p, t, n, r, o))) return d.push(e)
                                }))) {
                                h = !1;
                                break
                            }
                        } else if (p !== g && !i(p, g, n, r, o)) {
                            h = !1;
                            break
                        }
                    }
                    return o.delete(t), o.delete(e), h
                }

                function Ui(t) {
                    return _o(go(t, void 0, Lo), t + "")
                }

                function $i(t) {
                    return hr(t, xs, to)
                }

                function Yi(t) {
                    return hr(t, _s, eo)
                }
                var qi = mn ? function(t) {
                    return mn.get(t)
                } : Js;

                function Gi(t) {
                    for (var e = t.name + "", n = yn[e], r = jt.call(yn, e) ? n.length : 0; r--;) {
                        var i = n[r],
                            o = i.func;
                        if (null == o || o == t) return i.name
                    }
                    return e
                }

                function Xi(t) {
                    return (jt.call(En, "placeholder") ? En : t).placeholder
                }

                function Ki() {
                    var t = En.iteratee || qs;
                    return t = t === qs ? Or : t, arguments.length ? t(arguments[0], arguments[1]) : t
                }

                function Ji(t, e) {
                    var n, r, i = t.__data__;
                    return ("string" == (r = typeof(n = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof e ? "string" : "hash"] : i.map
                }

                function Zi(t) {
                    for (var e = xs(t), n = e.length; n--;) {
                        var r = e[n],
                            i = t[r];
                        e[n] = [r, i, ho(i)]
                    }
                    return e
                }

                function Qi(t, e) {
                    var n = function(t, e) {
                        return null == t ? void 0 : t[e]
                    }(t, e);
                    return wr(n) ? n : void 0
                }
                var to = tn ? function(t) {
                        return null == t ? [] : (t = gt(t), le(tn(t), (function(e) {
                            return Gt.call(t, e)
                        })))
                    } : ic,
                    eo = tn ? function(t) {
                        for (var e = []; t;) pe(e, to(t)), t = $t(t);
                        return e
                    } : ic,
                    no = dr;

                function ro(t, e, n) {
                    for (var r = -1, i = (e = si(e, t)).length, o = !1; ++r < i;) {
                        var a = Mo(e[r]);
                        if (!(o = null != t && n(t, a))) break;
                        t = t[a]
                    }
                    return o || ++r != i ? o : !!(i = null == t ? 0 : t.length) && Va(i) && ao(a, i) && (Ca(t) || Da(t))
                }

                function io(t) {
                    return "function" != typeof t.constructor || fo(t) ? {} : An($t(t))
                }

                function oo(t) {
                    return Ca(t) || Da(t) || !!(Jt && t && t[Jt])
                }

                function ao(t, e) {
                    var n = typeof t;
                    return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && ct.test(t)) && t > -1 && t % 1 == 0 && t < e
                }

                function so(t, e, n) {
                    if (!Ha(n)) return !1;
                    var r = typeof e;
                    return !!("number" == r ? Ia(n) && ao(e, n.length) : "string" == r && e in n) && Aa(n[e], t)
                }

                function co(t, e) {
                    if (Ca(t)) return !1;
                    var n = typeof t;
                    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !Ja(t)) || (U.test(t) || !H.test(t) || null != e && t in gt(e))
                }

                function uo(t) {
                    var e = Gi(t),
                        n = En[e];
                    if ("function" != typeof n || !(e in Dn.prototype)) return !1;
                    if (t === n) return !0;
                    var r = qi(n);
                    return !!r && t === r[0]
                }(hn && no(new hn(new ArrayBuffer(1))) != j || dn && no(new dn) != g || pn && "[object Promise]" != no(pn.resolve()) || gn && no(new gn) != y || bn && no(new bn) != w) && (no = function(t) {
                    var e = dr(t),
                        n = e == v ? t.constructor : void 0,
                        r = n ? ko(n) : "";
                    if (r) switch (r) {
                        case xn:
                            return j;
                        case _n:
                            return g;
                        case wn:
                            return "[object Promise]";
                        case On:
                            return y;
                        case jn:
                            return w
                    }
                    return e
                });
                var lo = wt ? Ba : oc;

                function fo(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || _t)
                }

                function ho(t) {
                    return t == t && !Ha(t)
                }

                function po(t, e) {
                    return function(n) {
                        return null != n && (n[t] === e && (void 0 !== e || t in gt(n)))
                    }
                }

                function go(t, e, n) {
                    return e = an(void 0 === e ? t.length - 1 : e, 0),
                        function() {
                            for (var i = arguments, o = -1, a = an(i.length - e, 0), s = r(a); ++o < a;) s[o] = i[e + o];
                            o = -1;
                            for (var c = r(e + 1); ++o < e;) c[o] = i[o];
                            return c[e] = n(s), oe(t, this, c)
                        }
                }

                function bo(t, e) {
                    return e.length < 2 ? t : fr(t, $r(e, 0, -1))
                }

                function vo(t, e) {
                    for (var n = t.length, r = sn(e.length, n), i = vi(t); r--;) {
                        var o = e[r];
                        t[r] = ao(o, n) ? i[o] : void 0
                    }
                    return t
                }

                function mo(t, e) {
                    if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e) return t[e]
                }
                var yo = Oo(Vr),
                    xo = Je || function(t, e) {
                        return qt.setTimeout(t, e)
                    },
                    _o = Oo(Hr);

                function wo(t, e, n) {
                    var r = e + "";
                    return _o(t, function(t, e) {
                        var n = e.length;
                        if (!n) return t;
                        var r = n - 1;
                        return e[r] = (n > 1 ? "& " : "") + e[r], e = e.join(n > 2 ? ", " : " "), t.replace(J, "{\n/* [wrapped with " + e + "] */\n")
                    }(r, function(t, e) {
                        return se(s, (function(n) {
                            var r = "_." + n[0];
                            e & n[1] && !fe(t, r) && t.push(r)
                        })), t.sort()
                    }(function(t) {
                        var e = t.match(Z);
                        return e ? e[1].split(Q) : []
                    }(r), n)))
                }

                function Oo(t) {
                    var e = 0,
                        n = 0;
                    return function() {
                        var r = cn(),
                            i = 16 - (r - n);
                        if (n = r, i > 0) {
                            if (++e >= 800) return arguments[0]
                        } else e = 0;
                        return t.apply(void 0, arguments)
                    }
                }

                function jo(t, e) {
                    var n = -1,
                        r = t.length,
                        i = r - 1;
                    for (e = void 0 === e ? r : e; ++n < e;) {
                        var o = Rr(n, i),
                            a = t[o];
                        t[o] = t[n], t[n] = a
                    }
                    return t.length = e, t
                }
                var So = function(t) {
                    var e = Oa(t, (function(t) {
                            return 500 === n.size && n.clear(), t
                        })),
                        n = e.cache;
                    return e
                }((function(t) {
                    var e = [];
                    return 46 === t.charCodeAt(0) && e.push(""), t.replace($, (function(t, n, r, i) {
                        e.push(r ? i.replace(et, "$1") : n || t)
                    })), e
                }));

                function Mo(t) {
                    if ("string" == typeof t || Ja(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -1 / 0 ? "-0" : e
                }

                function ko(t) {
                    if (null != t) {
                        try {
                            return Ot.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                }

                function Eo(t) {
                    if (t instanceof Dn) return t.clone();
                    var e = new Tn(t.__wrapped__, t.__chain__);
                    return e.__actions__ = vi(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
                }
                var Ao = zr((function(t, e) {
                        return Ra(t) ? Qn(t, or(e, 1, Ra, !0)) : []
                    })),
                    Po = zr((function(t, e) {
                        var n = No(e);
                        return Ra(n) && (n = void 0), Ra(t) ? Qn(t, or(e, 1, Ra, !0), Ki(n, 2)) : []
                    })),
                    To = zr((function(t, e) {
                        var n = No(e);
                        return Ra(n) && (n = void 0), Ra(t) ? Qn(t, or(e, 1, Ra, !0), void 0, n) : []
                    }));

                function Do(t, e, n) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var i = null == n ? 0 : rs(n);
                    return i < 0 && (i = an(r + i, 0)), xe(t, Ki(e, 3), i)
                }

                function Co(t, e, n) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var i = r - 1;
                    return void 0 !== n && (i = rs(n), i = n < 0 ? an(r + i, 0) : sn(i, r - 1)), xe(t, Ki(e, 3), i, !0)
                }

                function Lo(t) {
                    return (null == t ? 0 : t.length) ? or(t, 1) : []
                }

                function Io(t) {
                    return t && t.length ? t[0] : void 0
                }
                var Ro = zr((function(t) {
                        var e = de(t, oi);
                        return e.length && e[0] === t[0] ? vr(e) : []
                    })),
                    Fo = zr((function(t) {
                        var e = No(t),
                            n = de(t, oi);
                        return e === No(n) ? e = void 0 : n.pop(), n.length && n[0] === t[0] ? vr(n, Ki(e, 2)) : []
                    })),
                    zo = zr((function(t) {
                        var e = No(t),
                            n = de(t, oi);
                        return (e = "function" == typeof e ? e : void 0) && n.pop(), n.length && n[0] === t[0] ? vr(n, void 0, e) : []
                    }));

                function No(t) {
                    var e = null == t ? 0 : t.length;
                    return e ? t[e - 1] : void 0
                }
                var Bo = zr(Wo);

                function Wo(t, e) {
                    return t && t.length && e && e.length ? Lr(t, e) : t
                }
                var Vo = Ui((function(t, e) {
                    var n = null == t ? 0 : t.length,
                        r = Gn(t, e);
                    return Ir(t, de(e, (function(t) {
                        return ao(t, n) ? +t : t
                    })).sort(pi)), r
                }));

                function Ho(t) {
                    return null == t ? t : fn.call(t)
                }
                var Uo = zr((function(t) {
                        return Zr(or(t, 1, Ra, !0))
                    })),
                    $o = zr((function(t) {
                        var e = No(t);
                        return Ra(e) && (e = void 0), Zr(or(t, 1, Ra, !0), Ki(e, 2))
                    })),
                    Yo = zr((function(t) {
                        var e = No(t);
                        return e = "function" == typeof e ? e : void 0, Zr(or(t, 1, Ra, !0), void 0, e)
                    }));

                function qo(t) {
                    if (!t || !t.length) return [];
                    var e = 0;
                    return t = le(t, (function(t) {
                        if (Ra(t)) return e = an(t.length, e), !0
                    })), Ae(e, (function(e) {
                        return de(t, Se(e))
                    }))
                }

                function Go(t, e) {
                    if (!t || !t.length) return [];
                    var n = qo(t);
                    return null == e ? n : de(n, (function(t) {
                        return oe(e, void 0, t)
                    }))
                }
                var Xo = zr((function(t, e) {
                        return Ra(t) ? Qn(t, e) : []
                    })),
                    Ko = zr((function(t) {
                        return ri(le(t, Ra))
                    })),
                    Jo = zr((function(t) {
                        var e = No(t);
                        return Ra(e) && (e = void 0), ri(le(t, Ra), Ki(e, 2))
                    })),
                    Zo = zr((function(t) {
                        var e = No(t);
                        return e = "function" == typeof e ? e : void 0, ri(le(t, Ra), void 0, e)
                    })),
                    Qo = zr(qo);
                var ta = zr((function(t) {
                    var e = t.length,
                        n = e > 1 ? t[e - 1] : void 0;
                    return n = "function" == typeof n ? (t.pop(), n) : void 0, Go(t, n)
                }));

                function ea(t) {
                    var e = En(t);
                    return e.__chain__ = !0, e
                }

                function na(t, e) {
                    return e(t)
                }
                var ra = Ui((function(t) {
                    var e = t.length,
                        n = e ? t[0] : 0,
                        r = this.__wrapped__,
                        i = function(e) {
                            return Gn(e, t)
                        };
                    return !(e > 1 || this.__actions__.length) && r instanceof Dn && ao(n) ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                        func: na,
                        args: [i],
                        thisArg: void 0
                    }), new Tn(r, this.__chain__).thru((function(t) {
                        return e && !t.length && t.push(void 0), t
                    }))) : this.thru(i)
                }));
                var ia = yi((function(t, e, n) {
                    jt.call(t, n) ? ++t[n] : qn(t, n, 1)
                }));
                var oa = Mi(Do),
                    aa = Mi(Co);

                function sa(t, e) {
                    return (Ca(t) ? se : tr)(t, Ki(e, 3))
                }

                function ca(t, e) {
                    return (Ca(t) ? ce : er)(t, Ki(e, 3))
                }
                var ua = yi((function(t, e, n) {
                    jt.call(t, n) ? t[n].push(e) : qn(t, n, [e])
                }));
                var la = zr((function(t, e, n) {
                        var i = -1,
                            o = "function" == typeof e,
                            a = Ia(t) ? r(t.length) : [];
                        return tr(t, (function(t) {
                            a[++i] = o ? oe(e, t, n) : mr(t, e, n)
                        })), a
                    })),
                    fa = yi((function(t, e, n) {
                        qn(t, n, e)
                    }));

                function ha(t, e) {
                    return (Ca(t) ? de : kr)(t, Ki(e, 3))
                }
                var da = yi((function(t, e, n) {
                    t[n ? 0 : 1].push(e)
                }), (function() {
                    return [
                        [],
                        []
                    ]
                }));
                var pa = zr((function(t, e) {
                        if (null == t) return [];
                        var n = e.length;
                        return n > 1 && so(t, e[0], e[1]) ? e = [] : n > 2 && so(e[0], e[1], e[2]) && (e = [e[0]]), Dr(t, or(e, 1), [])
                    })),
                    ga = Ke || function() {
                        return qt.Date.now()
                    };

                function ba(t, e, n) {
                    return e = n ? void 0 : e, Ni(t, 128, void 0, void 0, void 0, void 0, e = t && null == e ? t.length : e)
                }

                function va(t, e) {
                    var n;
                    if ("function" != typeof e) throw new mt(o);
                    return t = rs(t),
                        function() {
                            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = void 0), n
                        }
                }
                var ma = zr((function(t, e, n) {
                        var r = 1;
                        if (n.length) {
                            var i = Ve(n, Xi(ma));
                            r |= 32
                        }
                        return Ni(t, r, e, n, i)
                    })),
                    ya = zr((function(t, e, n) {
                        var r = 3;
                        if (n.length) {
                            var i = Ve(n, Xi(ya));
                            r |= 32
                        }
                        return Ni(e, r, t, n, i)
                    }));

                function xa(t, e, n) {
                    var r, i, a, s, c, u, l = 0,
                        f = !1,
                        h = !1,
                        d = !0;
                    if ("function" != typeof t) throw new mt(o);

                    function p(e) {
                        var n = r,
                            o = i;
                        return r = i = void 0, l = e, s = t.apply(o, n)
                    }

                    function g(t) {
                        return l = t, c = xo(v, e), f ? p(t) : s
                    }

                    function b(t) {
                        var n = t - u;
                        return void 0 === u || n >= e || n < 0 || h && t - l >= a
                    }

                    function v() {
                        var t = ga();
                        if (b(t)) return m(t);
                        c = xo(v, function(t) {
                            var n = e - (t - u);
                            return h ? sn(n, a - (t - l)) : n
                        }(t))
                    }

                    function m(t) {
                        return c = void 0, d && r ? p(t) : (r = i = void 0, s)
                    }

                    function y() {
                        var t = ga(),
                            n = b(t);
                        if (r = arguments, i = this, u = t, n) {
                            if (void 0 === c) return g(u);
                            if (h) return li(c), c = xo(v, e), p(u)
                        }
                        return void 0 === c && (c = xo(v, e)), s
                    }
                    return e = os(e) || 0, Ha(n) && (f = !!n.leading, a = (h = "maxWait" in n) ? an(os(n.maxWait) || 0, e) : a, d = "trailing" in n ? !!n.trailing : d), y.cancel = function() {
                        void 0 !== c && li(c), l = 0, r = u = i = c = void 0
                    }, y.flush = function() {
                        return void 0 === c ? s : m(ga())
                    }, y
                }
                var _a = zr((function(t, e) {
                        return Zn(t, 1, e)
                    })),
                    wa = zr((function(t, e, n) {
                        return Zn(t, os(e) || 0, n)
                    }));

                function Oa(t, e) {
                    if ("function" != typeof t || null != e && "function" != typeof e) throw new mt(o);
                    var n = function() {
                        var r = arguments,
                            i = e ? e.apply(this, r) : r[0],
                            o = n.cache;
                        if (o.has(i)) return o.get(i);
                        var a = t.apply(this, r);
                        return n.cache = o.set(i, a) || o, a
                    };
                    return n.cache = new(Oa.Cache || In), n
                }

                function ja(t) {
                    if ("function" != typeof t) throw new mt(o);
                    return function() {
                        var e = arguments;
                        switch (e.length) {
                            case 0:
                                return !t.call(this);
                            case 1:
                                return !t.call(this, e[0]);
                            case 2:
                                return !t.call(this, e[0], e[1]);
                            case 3:
                                return !t.call(this, e[0], e[1], e[2])
                        }
                        return !t.apply(this, e)
                    }
                }
                Oa.Cache = In;
                var Sa = ci((function(t, e) {
                        var n = (e = 1 == e.length && Ca(e[0]) ? de(e[0], Pe(Ki())) : de(or(e, 1), Pe(Ki()))).length;
                        return zr((function(r) {
                            for (var i = -1, o = sn(r.length, n); ++i < o;) r[i] = e[i].call(this, r[i]);
                            return oe(t, this, r)
                        }))
                    })),
                    Ma = zr((function(t, e) {
                        return Ni(t, 32, void 0, e, Ve(e, Xi(Ma)))
                    })),
                    ka = zr((function(t, e) {
                        return Ni(t, 64, void 0, e, Ve(e, Xi(ka)))
                    })),
                    Ea = Ui((function(t, e) {
                        return Ni(t, 256, void 0, void 0, void 0, e)
                    }));

                function Aa(t, e) {
                    return t === e || t != t && e != e
                }
                var Pa = Li(pr),
                    Ta = Li((function(t, e) {
                        return t >= e
                    })),
                    Da = yr(function() {
                        return arguments
                    }()) ? yr : function(t) {
                        return Ua(t) && jt.call(t, "callee") && !Gt.call(t, "callee")
                    },
                    Ca = r.isArray,
                    La = Qt ? Pe(Qt) : function(t) {
                        return Ua(t) && dr(t) == O
                    };

                function Ia(t) {
                    return null != t && Va(t.length) && !Ba(t)
                }

                function Ra(t) {
                    return Ua(t) && Ia(t)
                }
                var Fa = en || oc,
                    za = te ? Pe(te) : function(t) {
                        return Ua(t) && dr(t) == f
                    };

                function Na(t) {
                    if (!Ua(t)) return !1;
                    var e = dr(t);
                    return e == h || "[object DOMException]" == e || "string" == typeof t.message && "string" == typeof t.name && !qa(t)
                }

                function Ba(t) {
                    if (!Ha(t)) return !1;
                    var e = dr(t);
                    return e == d || e == p || "[object AsyncFunction]" == e || "[object Proxy]" == e
                }

                function Wa(t) {
                    return "number" == typeof t && t == rs(t)
                }

                function Va(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                }

                function Ha(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }

                function Ua(t) {
                    return null != t && "object" == typeof t
                }
                var $a = ee ? Pe(ee) : function(t) {
                    return Ua(t) && no(t) == g
                };

                function Ya(t) {
                    return "number" == typeof t || Ua(t) && dr(t) == b
                }

                function qa(t) {
                    if (!Ua(t) || dr(t) != v) return !1;
                    var e = $t(t);
                    if (null === e) return !0;
                    var n = jt.call(e, "constructor") && e.constructor;
                    return "function" == typeof n && n instanceof n && Ot.call(n) == Et
                }
                var Ga = ne ? Pe(ne) : function(t) {
                    return Ua(t) && dr(t) == m
                };
                var Xa = re ? Pe(re) : function(t) {
                    return Ua(t) && no(t) == y
                };

                function Ka(t) {
                    return "string" == typeof t || !Ca(t) && Ua(t) && dr(t) == x
                }

                function Ja(t) {
                    return "symbol" == typeof t || Ua(t) && dr(t) == _
                }
                var Za = ie ? Pe(ie) : function(t) {
                    return Ua(t) && Va(t.length) && !!Bt[dr(t)]
                };
                var Qa = Li(Mr),
                    ts = Li((function(t, e) {
                        return t <= e
                    }));

                function es(t) {
                    if (!t) return [];
                    if (Ia(t)) return Ka(t) ? Ye(t) : vi(t);
                    if (Zt && t[Zt]) return function(t) {
                        for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
                        return n
                    }(t[Zt]());
                    var e = no(t);
                    return (e == g ? Be : e == y ? He : As)(t)
                }

                function ns(t) {
                    return t ? (t = os(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
                }

                function rs(t) {
                    var e = ns(t),
                        n = e % 1;
                    return e == e ? n ? e - n : e : 0
                }

                function is(t) {
                    return t ? Xn(rs(t), 0, 4294967295) : 0
                }

                function os(t) {
                    if ("number" == typeof t) return t;
                    if (Ja(t)) return NaN;
                    if (Ha(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = Ha(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(G, "");
                    var n = ot.test(t);
                    return n || st.test(t) ? Ut(t.slice(2), n ? 2 : 8) : it.test(t) ? NaN : +t
                }

                function as(t) {
                    return mi(t, _s(t))
                }

                function ss(t) {
                    return null == t ? "" : Jr(t)
                }
                var cs = xi((function(t, e) {
                        if (fo(e) || Ia(e)) mi(e, xs(e), t);
                        else
                            for (var n in e) jt.call(e, n) && Hn(t, n, e[n])
                    })),
                    us = xi((function(t, e) {
                        mi(e, _s(e), t)
                    })),
                    ls = xi((function(t, e, n, r) {
                        mi(e, _s(e), t, r)
                    })),
                    fs = xi((function(t, e, n, r) {
                        mi(e, xs(e), t, r)
                    })),
                    hs = Ui(Gn);
                var ds = zr((function(t, e) {
                        t = gt(t);
                        var n = -1,
                            r = e.length,
                            i = r > 2 ? e[2] : void 0;
                        for (i && so(e[0], e[1], i) && (r = 1); ++n < r;)
                            for (var o = e[n], a = _s(o), s = -1, c = a.length; ++s < c;) {
                                var u = a[s],
                                    l = t[u];
                                (void 0 === l || Aa(l, _t[u]) && !jt.call(t, u)) && (t[u] = o[u])
                            }
                        return t
                    })),
                    ps = zr((function(t) {
                        return t.push(void 0, Wi), oe(Os, void 0, t)
                    }));

                function gs(t, e, n) {
                    var r = null == t ? void 0 : fr(t, e);
                    return void 0 === r ? n : r
                }

                function bs(t, e) {
                    return null != t && ro(t, e, br)
                }
                var vs = Ai((function(t, e, n) {
                        null != e && "function" != typeof e.toString && (e = kt.call(e)), t[e] = n
                    }), Hs(Ys)),
                    ms = Ai((function(t, e, n) {
                        null != e && "function" != typeof e.toString && (e = kt.call(e)), jt.call(t, e) ? t[e].push(n) : t[e] = [n]
                    }), Ki),
                    ys = zr(mr);

                function xs(t) {
                    return Ia(t) ? zn(t) : jr(t)
                }

                function _s(t) {
                    return Ia(t) ? zn(t, !0) : Sr(t)
                }
                var ws = xi((function(t, e, n) {
                        Pr(t, e, n)
                    })),
                    Os = xi((function(t, e, n, r) {
                        Pr(t, e, n, r)
                    })),
                    js = Ui((function(t, e) {
                        var n = {};
                        if (null == t) return n;
                        var r = !1;
                        e = de(e, (function(e) {
                            return e = si(e, t), r || (r = e.length > 1), e
                        })), mi(t, Yi(t), n), r && (n = Kn(n, 7, Vi));
                        for (var i = e.length; i--;) Qr(n, e[i]);
                        return n
                    }));
                var Ss = Ui((function(t, e) {
                    return null == t ? {} : function(t, e) {
                        return Cr(t, e, (function(e, n) {
                            return bs(t, n)
                        }))
                    }(t, e)
                }));

                function Ms(t, e) {
                    if (null == t) return {};
                    var n = de(Yi(t), (function(t) {
                        return [t]
                    }));
                    return e = Ki(e), Cr(t, n, (function(t, n) {
                        return e(t, n[0])
                    }))
                }
                var ks = zi(xs),
                    Es = zi(_s);

                function As(t) {
                    return null == t ? [] : Te(t, xs(t))
                }
                var Ps = ji((function(t, e, n) {
                    return e = e.toLowerCase(), t + (n ? Ts(e) : e)
                }));

                function Ts(t) {
                    return Ns(ss(t).toLowerCase())
                }

                function Ds(t) {
                    return (t = ss(t)) && t.replace(ut, Re).replace(Ct, "")
                }
                var Cs = ji((function(t, e, n) {
                        return t + (n ? "-" : "") + e.toLowerCase()
                    })),
                    Ls = ji((function(t, e, n) {
                        return t + (n ? " " : "") + e.toLowerCase()
                    })),
                    Is = Oi("toLowerCase");
                var Rs = ji((function(t, e, n) {
                    return t + (n ? "_" : "") + e.toLowerCase()
                }));
                var Fs = ji((function(t, e, n) {
                    return t + (n ? " " : "") + Ns(e)
                }));
                var zs = ji((function(t, e, n) {
                        return t + (n ? " " : "") + e.toUpperCase()
                    })),
                    Ns = Oi("toUpperCase");

                function Bs(t, e, n) {
                    return t = ss(t), void 0 === (e = n ? void 0 : e) ? function(t) {
                        return Ft.test(t)
                    }(t) ? function(t) {
                        return t.match(It) || []
                    }(t) : function(t) {
                        return t.match(tt) || []
                    }(t) : t.match(e) || []
                }
                var Ws = zr((function(t, e) {
                        try {
                            return oe(t, void 0, e)
                        } catch (t) {
                            return Na(t) ? t : new ht(t)
                        }
                    })),
                    Vs = Ui((function(t, e) {
                        return se(e, (function(e) {
                            e = Mo(e), qn(t, e, ma(t[e], t))
                        })), t
                    }));

                function Hs(t) {
                    return function() {
                        return t
                    }
                }
                var Us = ki(),
                    $s = ki(!0);

                function Ys(t) {
                    return t
                }

                function qs(t) {
                    return Or("function" == typeof t ? t : Kn(t, 1))
                }
                var Gs = zr((function(t, e) {
                        return function(n) {
                            return mr(n, t, e)
                        }
                    })),
                    Xs = zr((function(t, e) {
                        return function(n) {
                            return mr(t, n, e)
                        }
                    }));

                function Ks(t, e, n) {
                    var r = xs(e),
                        i = lr(e, r);
                    null != n || Ha(e) && (i.length || !r.length) || (n = e, e = t, t = this, i = lr(e, xs(e)));
                    var o = !(Ha(n) && "chain" in n && !n.chain),
                        a = Ba(t);
                    return se(i, (function(n) {
                        var r = e[n];
                        t[n] = r, a && (t.prototype[n] = function() {
                            var e = this.__chain__;
                            if (o || e) {
                                var n = t(this.__wrapped__),
                                    i = n.__actions__ = vi(this.__actions__);
                                return i.push({
                                    func: r,
                                    args: arguments,
                                    thisArg: t
                                }), n.__chain__ = e, n
                            }
                            return r.apply(t, pe([this.value()], arguments))
                        })
                    })), t
                }

                function Js() {}
                var Zs = Ti(de),
                    Qs = Ti(ue),
                    tc = Ti(ve);

                function ec(t) {
                    return co(t) ? Se(Mo(t)) : function(t) {
                        return function(e) {
                            return fr(e, t)
                        }
                    }(t)
                }
                var nc = Ci(),
                    rc = Ci(!0);

                function ic() {
                    return []
                }

                function oc() {
                    return !1
                }
                var ac = Pi((function(t, e) {
                        return t + e
                    }), 0),
                    sc = Ri("ceil"),
                    cc = Pi((function(t, e) {
                        return t / e
                    }), 1),
                    uc = Ri("floor");
                var lc, fc = Pi((function(t, e) {
                        return t * e
                    }), 1),
                    hc = Ri("round"),
                    dc = Pi((function(t, e) {
                        return t - e
                    }), 0);
                return En.after = function(t, e) {
                    if ("function" != typeof e) throw new mt(o);
                    return t = rs(t),
                        function() {
                            if (--t < 1) return e.apply(this, arguments)
                        }
                }, En.ary = ba, En.assign = cs, En.assignIn = us, En.assignInWith = ls, En.assignWith = fs, En.at = hs, En.before = va, En.bind = ma, En.bindAll = Vs, En.bindKey = ya, En.castArray = function() {
                    if (!arguments.length) return [];
                    var t = arguments[0];
                    return Ca(t) ? t : [t]
                }, En.chain = ea, En.chunk = function(t, e, n) {
                    e = (n ? so(t, e, n) : void 0 === e) ? 1 : an(rs(e), 0);
                    var i = null == t ? 0 : t.length;
                    if (!i || e < 1) return [];
                    for (var o = 0, a = 0, s = r(Ze(i / e)); o < i;) s[a++] = $r(t, o, o += e);
                    return s
                }, En.compact = function(t) {
                    for (var e = -1, n = null == t ? 0 : t.length, r = 0, i = []; ++e < n;) {
                        var o = t[e];
                        o && (i[r++] = o)
                    }
                    return i
                }, En.concat = function() {
                    var t = arguments.length;
                    if (!t) return [];
                    for (var e = r(t - 1), n = arguments[0], i = t; i--;) e[i - 1] = arguments[i];
                    return pe(Ca(n) ? vi(n) : [n], or(e, 1))
                }, En.cond = function(t) {
                    var e = null == t ? 0 : t.length,
                        n = Ki();
                    return t = e ? de(t, (function(t) {
                        if ("function" != typeof t[1]) throw new mt(o);
                        return [n(t[0]), t[1]]
                    })) : [], zr((function(n) {
                        for (var r = -1; ++r < e;) {
                            var i = t[r];
                            if (oe(i[0], this, n)) return oe(i[1], this, n)
                        }
                    }))
                }, En.conforms = function(t) {
                    return function(t) {
                        var e = xs(t);
                        return function(n) {
                            return Jn(n, t, e)
                        }
                    }(Kn(t, 1))
                }, En.constant = Hs, En.countBy = ia, En.create = function(t, e) {
                    var n = An(t);
                    return null == e ? n : Yn(n, e)
                }, En.curry = function t(e, n, r) {
                    var i = Ni(e, 8, void 0, void 0, void 0, void 0, void 0, n = r ? void 0 : n);
                    return i.placeholder = t.placeholder, i
                }, En.curryRight = function t(e, n, r) {
                    var i = Ni(e, 16, void 0, void 0, void 0, void 0, void 0, n = r ? void 0 : n);
                    return i.placeholder = t.placeholder, i
                }, En.debounce = xa, En.defaults = ds, En.defaultsDeep = ps, En.defer = _a, En.delay = wa, En.difference = Ao, En.differenceBy = Po, En.differenceWith = To, En.drop = function(t, e, n) {
                    var r = null == t ? 0 : t.length;
                    return r ? $r(t, (e = n || void 0 === e ? 1 : rs(e)) < 0 ? 0 : e, r) : []
                }, En.dropRight = function(t, e, n) {
                    var r = null == t ? 0 : t.length;
                    return r ? $r(t, 0, (e = r - (e = n || void 0 === e ? 1 : rs(e))) < 0 ? 0 : e) : []
                }, En.dropRightWhile = function(t, e) {
                    return t && t.length ? ei(t, Ki(e, 3), !0, !0) : []
                }, En.dropWhile = function(t, e) {
                    return t && t.length ? ei(t, Ki(e, 3), !0) : []
                }, En.fill = function(t, e, n, r) {
                    var i = null == t ? 0 : t.length;
                    return i ? (n && "number" != typeof n && so(t, e, n) && (n = 0, r = i), function(t, e, n, r) {
                        var i = t.length;
                        for ((n = rs(n)) < 0 && (n = -n > i ? 0 : i + n), (r = void 0 === r || r > i ? i : rs(r)) < 0 && (r += i), r = n > r ? 0 : is(r); n < r;) t[n++] = e;
                        return t
                    }(t, e, n, r)) : []
                }, En.filter = function(t, e) {
                    return (Ca(t) ? le : ir)(t, Ki(e, 3))
                }, En.flatMap = function(t, e) {
                    return or(ha(t, e), 1)
                }, En.flatMapDeep = function(t, e) {
                    return or(ha(t, e), 1 / 0)
                }, En.flatMapDepth = function(t, e, n) {
                    return n = void 0 === n ? 1 : rs(n), or(ha(t, e), n)
                }, En.flatten = Lo, En.flattenDeep = function(t) {
                    return (null == t ? 0 : t.length) ? or(t, 1 / 0) : []
                }, En.flattenDepth = function(t, e) {
                    return (null == t ? 0 : t.length) ? or(t, e = void 0 === e ? 1 : rs(e)) : []
                }, En.flip = function(t) {
                    return Ni(t, 512)
                }, En.flow = Us, En.flowRight = $s, En.fromPairs = function(t) {
                    for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n;) {
                        var i = t[e];
                        r[i[0]] = i[1]
                    }
                    return r
                }, En.functions = function(t) {
                    return null == t ? [] : lr(t, xs(t))
                }, En.functionsIn = function(t) {
                    return null == t ? [] : lr(t, _s(t))
                }, En.groupBy = ua, En.initial = function(t) {
                    return (null == t ? 0 : t.length) ? $r(t, 0, -1) : []
                }, En.intersection = Ro, En.intersectionBy = Fo, En.intersectionWith = zo, En.invert = vs, En.invertBy = ms, En.invokeMap = la, En.iteratee = qs, En.keyBy = fa, En.keys = xs, En.keysIn = _s, En.map = ha, En.mapKeys = function(t, e) {
                    var n = {};
                    return e = Ki(e, 3), cr(t, (function(t, r, i) {
                        qn(n, e(t, r, i), t)
                    })), n
                }, En.mapValues = function(t, e) {
                    var n = {};
                    return e = Ki(e, 3), cr(t, (function(t, r, i) {
                        qn(n, r, e(t, r, i))
                    })), n
                }, En.matches = function(t) {
                    return Er(Kn(t, 1))
                }, En.matchesProperty = function(t, e) {
                    return Ar(t, Kn(e, 1))
                }, En.memoize = Oa, En.merge = ws, En.mergeWith = Os, En.method = Gs, En.methodOf = Xs, En.mixin = Ks, En.negate = ja, En.nthArg = function(t) {
                    return t = rs(t), zr((function(e) {
                        return Tr(e, t)
                    }))
                }, En.omit = js, En.omitBy = function(t, e) {
                    return Ms(t, ja(Ki(e)))
                }, En.once = function(t) {
                    return va(2, t)
                }, En.orderBy = function(t, e, n, r) {
                    return null == t ? [] : (Ca(e) || (e = null == e ? [] : [e]), Ca(n = r ? void 0 : n) || (n = null == n ? [] : [n]), Dr(t, e, n))
                }, En.over = Zs, En.overArgs = Sa, En.overEvery = Qs, En.overSome = tc, En.partial = Ma, En.partialRight = ka, En.partition = da, En.pick = Ss, En.pickBy = Ms, En.property = ec, En.propertyOf = function(t) {
                    return function(e) {
                        return null == t ? void 0 : fr(t, e)
                    }
                }, En.pull = Bo, En.pullAll = Wo, En.pullAllBy = function(t, e, n) {
                    return t && t.length && e && e.length ? Lr(t, e, Ki(n, 2)) : t
                }, En.pullAllWith = function(t, e, n) {
                    return t && t.length && e && e.length ? Lr(t, e, void 0, n) : t
                }, En.pullAt = Vo, En.range = nc, En.rangeRight = rc, En.rearg = Ea, En.reject = function(t, e) {
                    return (Ca(t) ? le : ir)(t, ja(Ki(e, 3)))
                }, En.remove = function(t, e) {
                    var n = [];
                    if (!t || !t.length) return n;
                    var r = -1,
                        i = [],
                        o = t.length;
                    for (e = Ki(e, 3); ++r < o;) {
                        var a = t[r];
                        e(a, r, t) && (n.push(a), i.push(r))
                    }
                    return Ir(t, i), n
                }, En.rest = function(t, e) {
                    if ("function" != typeof t) throw new mt(o);
                    return zr(t, e = void 0 === e ? e : rs(e))
                }, En.reverse = Ho, En.sampleSize = function(t, e, n) {
                    return e = (n ? so(t, e, n) : void 0 === e) ? 1 : rs(e), (Ca(t) ? Bn : Br)(t, e)
                }, En.set = function(t, e, n) {
                    return null == t ? t : Wr(t, e, n)
                }, En.setWith = function(t, e, n, r) {
                    return r = "function" == typeof r ? r : void 0, null == t ? t : Wr(t, e, n, r)
                }, En.shuffle = function(t) {
                    return (Ca(t) ? Wn : Ur)(t)
                }, En.slice = function(t, e, n) {
                    var r = null == t ? 0 : t.length;
                    return r ? (n && "number" != typeof n && so(t, e, n) ? (e = 0, n = r) : (e = null == e ? 0 : rs(e), n = void 0 === n ? r : rs(n)), $r(t, e, n)) : []
                }, En.sortBy = pa, En.sortedUniq = function(t) {
                    return t && t.length ? Xr(t) : []
                }, En.sortedUniqBy = function(t, e) {
                    return t && t.length ? Xr(t, Ki(e, 2)) : []
                }, En.split = function(t, e, n) {
                    return n && "number" != typeof n && so(t, e, n) && (e = n = void 0), (n = void 0 === n ? 4294967295 : n >>> 0) ? (t = ss(t)) && ("string" == typeof e || null != e && !Ga(e)) && !(e = Jr(e)) && Ne(t) ? ui(Ye(t), 0, n) : t.split(e, n) : []
                }, En.spread = function(t, e) {
                    if ("function" != typeof t) throw new mt(o);
                    return e = null == e ? 0 : an(rs(e), 0), zr((function(n) {
                        var r = n[e],
                            i = ui(n, 0, e);
                        return r && pe(i, r), oe(t, this, i)
                    }))
                }, En.tail = function(t) {
                    var e = null == t ? 0 : t.length;
                    return e ? $r(t, 1, e) : []
                }, En.take = function(t, e, n) {
                    return t && t.length ? $r(t, 0, (e = n || void 0 === e ? 1 : rs(e)) < 0 ? 0 : e) : []
                }, En.takeRight = function(t, e, n) {
                    var r = null == t ? 0 : t.length;
                    return r ? $r(t, (e = r - (e = n || void 0 === e ? 1 : rs(e))) < 0 ? 0 : e, r) : []
                }, En.takeRightWhile = function(t, e) {
                    return t && t.length ? ei(t, Ki(e, 3), !1, !0) : []
                }, En.takeWhile = function(t, e) {
                    return t && t.length ? ei(t, Ki(e, 3)) : []
                }, En.tap = function(t, e) {
                    return e(t), t
                }, En.throttle = function(t, e, n) {
                    var r = !0,
                        i = !0;
                    if ("function" != typeof t) throw new mt(o);
                    return Ha(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), xa(t, e, {
                        leading: r,
                        maxWait: e,
                        trailing: i
                    })
                }, En.thru = na, En.toArray = es, En.toPairs = ks, En.toPairsIn = Es, En.toPath = function(t) {
                    return Ca(t) ? de(t, Mo) : Ja(t) ? [t] : vi(So(ss(t)))
                }, En.toPlainObject = as, En.transform = function(t, e, n) {
                    var r = Ca(t),
                        i = r || Fa(t) || Za(t);
                    if (e = Ki(e, 4), null == n) {
                        var o = t && t.constructor;
                        n = i ? r ? new o : [] : Ha(t) && Ba(o) ? An($t(t)) : {}
                    }
                    return (i ? se : cr)(t, (function(t, r, i) {
                        return e(n, t, r, i)
                    })), n
                }, En.unary = function(t) {
                    return ba(t, 1)
                }, En.union = Uo, En.unionBy = $o, En.unionWith = Yo, En.uniq = function(t) {
                    return t && t.length ? Zr(t) : []
                }, En.uniqBy = function(t, e) {
                    return t && t.length ? Zr(t, Ki(e, 2)) : []
                }, En.uniqWith = function(t, e) {
                    return e = "function" == typeof e ? e : void 0, t && t.length ? Zr(t, void 0, e) : []
                }, En.unset = function(t, e) {
                    return null == t || Qr(t, e)
                }, En.unzip = qo, En.unzipWith = Go, En.update = function(t, e, n) {
                    return null == t ? t : ti(t, e, ai(n))
                }, En.updateWith = function(t, e, n, r) {
                    return r = "function" == typeof r ? r : void 0, null == t ? t : ti(t, e, ai(n), r)
                }, En.values = As, En.valuesIn = function(t) {
                    return null == t ? [] : Te(t, _s(t))
                }, En.without = Xo, En.words = Bs, En.wrap = function(t, e) {
                    return Ma(ai(e), t)
                }, En.xor = Ko, En.xorBy = Jo, En.xorWith = Zo, En.zip = Qo, En.zipObject = function(t, e) {
                    return ii(t || [], e || [], Hn)
                }, En.zipObjectDeep = function(t, e) {
                    return ii(t || [], e || [], Wr)
                }, En.zipWith = ta, En.entries = ks, En.entriesIn = Es, En.extend = us, En.extendWith = ls, Ks(En, En), En.add = ac, En.attempt = Ws, En.camelCase = Ps, En.capitalize = Ts, En.ceil = sc, En.clamp = function(t, e, n) {
                    return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = os(n)) == n ? n : 0), void 0 !== e && (e = (e = os(e)) == e ? e : 0), Xn(os(t), e, n)
                }, En.clone = function(t) {
                    return Kn(t, 4)
                }, En.cloneDeep = function(t) {
                    return Kn(t, 5)
                }, En.cloneDeepWith = function(t, e) {
                    return Kn(t, 5, e = "function" == typeof e ? e : void 0)
                }, En.cloneWith = function(t, e) {
                    return Kn(t, 4, e = "function" == typeof e ? e : void 0)
                }, En.conformsTo = function(t, e) {
                    return null == e || Jn(t, e, xs(e))
                }, En.deburr = Ds, En.defaultTo = function(t, e) {
                    return null == t || t != t ? e : t
                }, En.divide = cc, En.endsWith = function(t, e, n) {
                    t = ss(t), e = Jr(e);
                    var r = t.length,
                        i = n = void 0 === n ? r : Xn(rs(n), 0, r);
                    return (n -= e.length) >= 0 && t.slice(n, i) == e
                }, En.eq = Aa, En.escape = function(t) {
                    return (t = ss(t)) && N.test(t) ? t.replace(F, Fe) : t
                }, En.escapeRegExp = function(t) {
                    return (t = ss(t)) && q.test(t) ? t.replace(Y, "\\$&") : t
                }, En.every = function(t, e, n) {
                    var r = Ca(t) ? ue : nr;
                    return n && so(t, e, n) && (e = void 0), r(t, Ki(e, 3))
                }, En.find = oa, En.findIndex = Do, En.findKey = function(t, e) {
                    return ye(t, Ki(e, 3), cr)
                }, En.findLast = aa, En.findLastIndex = Co, En.findLastKey = function(t, e) {
                    return ye(t, Ki(e, 3), ur)
                }, En.floor = uc, En.forEach = sa, En.forEachRight = ca, En.forIn = function(t, e) {
                    return null == t ? t : ar(t, Ki(e, 3), _s)
                }, En.forInRight = function(t, e) {
                    return null == t ? t : sr(t, Ki(e, 3), _s)
                }, En.forOwn = function(t, e) {
                    return t && cr(t, Ki(e, 3))
                }, En.forOwnRight = function(t, e) {
                    return t && ur(t, Ki(e, 3))
                }, En.get = gs, En.gt = Pa, En.gte = Ta, En.has = function(t, e) {
                    return null != t && ro(t, e, gr)
                }, En.hasIn = bs, En.head = Io, En.identity = Ys, En.includes = function(t, e, n, r) {
                    t = Ia(t) ? t : As(t), n = n && !r ? rs(n) : 0;
                    var i = t.length;
                    return n < 0 && (n = an(i + n, 0)), Ka(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && _e(t, e, n) > -1
                }, En.indexOf = function(t, e, n) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var i = null == n ? 0 : rs(n);
                    return i < 0 && (i = an(r + i, 0)), _e(t, e, i)
                }, En.inRange = function(t, e, n) {
                    return e = ns(e), void 0 === n ? (n = e, e = 0) : n = ns(n),
                        function(t, e, n) {
                            return t >= sn(e, n) && t < an(e, n)
                        }(t = os(t), e, n)
                }, En.invoke = ys, En.isArguments = Da, En.isArray = Ca, En.isArrayBuffer = La, En.isArrayLike = Ia, En.isArrayLikeObject = Ra, En.isBoolean = function(t) {
                    return !0 === t || !1 === t || Ua(t) && dr(t) == l
                }, En.isBuffer = Fa, En.isDate = za, En.isElement = function(t) {
                    return Ua(t) && 1 === t.nodeType && !qa(t)
                }, En.isEmpty = function(t) {
                    if (null == t) return !0;
                    if (Ia(t) && (Ca(t) || "string" == typeof t || "function" == typeof t.splice || Fa(t) || Za(t) || Da(t))) return !t.length;
                    var e = no(t);
                    if (e == g || e == y) return !t.size;
                    if (fo(t)) return !jr(t).length;
                    for (var n in t)
                        if (jt.call(t, n)) return !1;
                    return !0
                }, En.isEqual = function(t, e) {
                    return xr(t, e)
                }, En.isEqualWith = function(t, e, n) {
                    var r = (n = "function" == typeof n ? n : void 0) ? n(t, e) : void 0;
                    return void 0 === r ? xr(t, e, void 0, n) : !!r
                }, En.isError = Na, En.isFinite = function(t) {
                    return "number" == typeof t && nn(t)
                }, En.isFunction = Ba, En.isInteger = Wa, En.isLength = Va, En.isMap = $a, En.isMatch = function(t, e) {
                    return t === e || _r(t, e, Zi(e))
                }, En.isMatchWith = function(t, e, n) {
                    return n = "function" == typeof n ? n : void 0, _r(t, e, Zi(e), n)
                }, En.isNaN = function(t) {
                    return Ya(t) && t != +t
                }, En.isNative = function(t) {
                    if (lo(t)) throw new ht("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                    return wr(t)
                }, En.isNil = function(t) {
                    return null == t
                }, En.isNull = function(t) {
                    return null === t
                }, En.isNumber = Ya, En.isObject = Ha, En.isObjectLike = Ua, En.isPlainObject = qa, En.isRegExp = Ga, En.isSafeInteger = function(t) {
                    return Wa(t) && t >= -9007199254740991 && t <= 9007199254740991
                }, En.isSet = Xa, En.isString = Ka, En.isSymbol = Ja, En.isTypedArray = Za, En.isUndefined = function(t) {
                    return void 0 === t
                }, En.isWeakMap = function(t) {
                    return Ua(t) && no(t) == w
                }, En.isWeakSet = function(t) {
                    return Ua(t) && "[object WeakSet]" == dr(t)
                }, En.join = function(t, e) {
                    return null == t ? "" : rn.call(t, e)
                }, En.kebabCase = Cs, En.last = No, En.lastIndexOf = function(t, e, n) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var i = r;
                    return void 0 !== n && (i = (i = rs(n)) < 0 ? an(r + i, 0) : sn(i, r - 1)), e == e ? function(t, e, n) {
                        for (var r = n + 1; r--;)
                            if (t[r] === e) return r;
                        return r
                    }(t, e, i) : xe(t, Oe, i, !0)
                }, En.lowerCase = Ls, En.lowerFirst = Is, En.lt = Qa, En.lte = ts, En.max = function(t) {
                    return t && t.length ? rr(t, Ys, pr) : void 0
                }, En.maxBy = function(t, e) {
                    return t && t.length ? rr(t, Ki(e, 2), pr) : void 0
                }, En.mean = function(t) {
                    return je(t, Ys)
                }, En.meanBy = function(t, e) {
                    return je(t, Ki(e, 2))
                }, En.min = function(t) {
                    return t && t.length ? rr(t, Ys, Mr) : void 0
                }, En.minBy = function(t, e) {
                    return t && t.length ? rr(t, Ki(e, 2), Mr) : void 0
                }, En.stubArray = ic, En.stubFalse = oc, En.stubObject = function() {
                    return {}
                }, En.stubString = function() {
                    return ""
                }, En.stubTrue = function() {
                    return !0
                }, En.multiply = fc, En.nth = function(t, e) {
                    return t && t.length ? Tr(t, rs(e)) : void 0
                }, En.noConflict = function() {
                    return qt._ === this && (qt._ = At), this
                }, En.noop = Js, En.now = ga, En.pad = function(t, e, n) {
                    t = ss(t);
                    var r = (e = rs(e)) ? $e(t) : 0;
                    if (!e || r >= e) return t;
                    var i = (e - r) / 2;
                    return Di(Qe(i), n) + t + Di(Ze(i), n)
                }, En.padEnd = function(t, e, n) {
                    t = ss(t);
                    var r = (e = rs(e)) ? $e(t) : 0;
                    return e && r < e ? t + Di(e - r, n) : t
                }, En.padStart = function(t, e, n) {
                    t = ss(t);
                    var r = (e = rs(e)) ? $e(t) : 0;
                    return e && r < e ? Di(e - r, n) + t : t
                }, En.parseInt = function(t, e, n) {
                    return n || null == e ? e = 0 : e && (e = +e), un(ss(t).replace(X, ""), e || 0)
                }, En.random = function(t, e, n) {
                    if (n && "boolean" != typeof n && so(t, e, n) && (e = n = void 0), void 0 === n && ("boolean" == typeof e ? (n = e, e = void 0) : "boolean" == typeof t && (n = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = ns(t), void 0 === e ? (e = t, t = 0) : e = ns(e)), t > e) {
                        var r = t;
                        t = e, e = r
                    }
                    if (n || t % 1 || e % 1) {
                        var i = ln();
                        return sn(t + i * (e - t + Ht("1e-" + ((i + "").length - 1))), e)
                    }
                    return Rr(t, e)
                }, En.reduce = function(t, e, n) {
                    var r = Ca(t) ? ge : ke,
                        i = arguments.length < 3;
                    return r(t, Ki(e, 4), n, i, tr)
                }, En.reduceRight = function(t, e, n) {
                    var r = Ca(t) ? be : ke,
                        i = arguments.length < 3;
                    return r(t, Ki(e, 4), n, i, er)
                }, En.repeat = function(t, e, n) {
                    return e = (n ? so(t, e, n) : void 0 === e) ? 1 : rs(e), Fr(ss(t), e)
                }, En.replace = function() {
                    var t = arguments,
                        e = ss(t[0]);
                    return t.length < 3 ? e : e.replace(t[1], t[2])
                }, En.result = function(t, e, n) {
                    var r = -1,
                        i = (e = si(e, t)).length;
                    for (i || (i = 1, t = void 0); ++r < i;) {
                        var o = null == t ? void 0 : t[Mo(e[r])];
                        void 0 === o && (r = i, o = n), t = Ba(o) ? o.call(t) : o
                    }
                    return t
                }, En.round = hc, En.runInContext = t, En.sample = function(t) {
                    return (Ca(t) ? Nn : Nr)(t)
                }, En.size = function(t) {
                    if (null == t) return 0;
                    if (Ia(t)) return Ka(t) ? $e(t) : t.length;
                    var e = no(t);
                    return e == g || e == y ? t.size : jr(t).length
                }, En.snakeCase = Rs, En.some = function(t, e, n) {
                    var r = Ca(t) ? ve : Yr;
                    return n && so(t, e, n) && (e = void 0), r(t, Ki(e, 3))
                }, En.sortedIndex = function(t, e) {
                    return qr(t, e)
                }, En.sortedIndexBy = function(t, e, n) {
                    return Gr(t, e, Ki(n, 2))
                }, En.sortedIndexOf = function(t, e) {
                    var n = null == t ? 0 : t.length;
                    if (n) {
                        var r = qr(t, e);
                        if (r < n && Aa(t[r], e)) return r
                    }
                    return -1
                }, En.sortedLastIndex = function(t, e) {
                    return qr(t, e, !0)
                }, En.sortedLastIndexBy = function(t, e, n) {
                    return Gr(t, e, Ki(n, 2), !0)
                }, En.sortedLastIndexOf = function(t, e) {
                    if (null == t ? 0 : t.length) {
                        var n = qr(t, e, !0) - 1;
                        if (Aa(t[n], e)) return n
                    }
                    return -1
                }, En.startCase = Fs, En.startsWith = function(t, e, n) {
                    return t = ss(t), n = null == n ? 0 : Xn(rs(n), 0, t.length), e = Jr(e), t.slice(n, n + e.length) == e
                }, En.subtract = dc, En.sum = function(t) {
                    return t && t.length ? Ee(t, Ys) : 0
                }, En.sumBy = function(t, e) {
                    return t && t.length ? Ee(t, Ki(e, 2)) : 0
                }, En.template = function(t, e, n) {
                    var r = En.templateSettings;
                    n && so(t, e, n) && (e = void 0), t = ss(t), e = ls({}, e, r, Bi);
                    var i, o, a = ls({}, e.imports, r.imports, Bi),
                        s = xs(a),
                        c = Te(a, s),
                        u = 0,
                        l = e.interpolate || lt,
                        f = "__p += '",
                        h = bt((e.escape || lt).source + "|" + l.source + "|" + (l === V ? nt : lt).source + "|" + (e.evaluate || lt).source + "|$", "g"),
                        d = "//# sourceURL=" + (jt.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Nt + "]") + "\n";
                    t.replace(h, (function(e, n, r, a, s, c) {
                        return r || (r = a), f += t.slice(u, c).replace(ft, ze), n && (i = !0, f += "' +\n__e(" + n + ") +\n'"), s && (o = !0, f += "';\n" + s + ";\n__p += '"), r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), u = c + e.length, e
                    })), f += "';\n";
                    var p = jt.call(e, "variable") && e.variable;
                    p || (f = "with (obj) {\n" + f + "\n}\n"), f = (o ? f.replace(C, "") : f).replace(L, "$1").replace(I, "$1;"), f = "function(" + (p || "obj") + ") {\n" + (p ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
                    var g = Ws((function() {
                        return dt(s, d + "return " + f).apply(void 0, c)
                    }));
                    if (g.source = f, Na(g)) throw g;
                    return g
                }, En.times = function(t, e) {
                    if ((t = rs(t)) < 1 || t > 9007199254740991) return [];
                    var n = 4294967295,
                        r = sn(t, 4294967295);
                    t -= 4294967295;
                    for (var i = Ae(r, e = Ki(e)); ++n < t;) e(n);
                    return i
                }, En.toFinite = ns, En.toInteger = rs, En.toLength = is, En.toLower = function(t) {
                    return ss(t).toLowerCase()
                }, En.toNumber = os, En.toSafeInteger = function(t) {
                    return t ? Xn(rs(t), -9007199254740991, 9007199254740991) : 0 === t ? t : 0
                }, En.toString = ss, En.toUpper = function(t) {
                    return ss(t).toUpperCase()
                }, En.trim = function(t, e, n) {
                    if ((t = ss(t)) && (n || void 0 === e)) return t.replace(G, "");
                    if (!t || !(e = Jr(e))) return t;
                    var r = Ye(t),
                        i = Ye(e);
                    return ui(r, Ce(r, i), Le(r, i) + 1).join("")
                }, En.trimEnd = function(t, e, n) {
                    if ((t = ss(t)) && (n || void 0 === e)) return t.replace(K, "");
                    if (!t || !(e = Jr(e))) return t;
                    var r = Ye(t);
                    return ui(r, 0, Le(r, Ye(e)) + 1).join("")
                }, En.trimStart = function(t, e, n) {
                    if ((t = ss(t)) && (n || void 0 === e)) return t.replace(X, "");
                    if (!t || !(e = Jr(e))) return t;
                    var r = Ye(t);
                    return ui(r, Ce(r, Ye(e))).join("")
                }, En.truncate = function(t, e) {
                    var n = 30,
                        r = "...";
                    if (Ha(e)) {
                        var i = "separator" in e ? e.separator : i;
                        n = "length" in e ? rs(e.length) : n, r = "omission" in e ? Jr(e.omission) : r
                    }
                    var o = (t = ss(t)).length;
                    if (Ne(t)) {
                        var a = Ye(t);
                        o = a.length
                    }
                    if (n >= o) return t;
                    var s = n - $e(r);
                    if (s < 1) return r;
                    var c = a ? ui(a, 0, s).join("") : t.slice(0, s);
                    if (void 0 === i) return c + r;
                    if (a && (s += c.length - s), Ga(i)) {
                        if (t.slice(s).search(i)) {
                            var u, l = c;
                            for (i.global || (i = bt(i.source, ss(rt.exec(i)) + "g")), i.lastIndex = 0; u = i.exec(l);) var f = u.index;
                            c = c.slice(0, void 0 === f ? s : f)
                        }
                    } else if (t.indexOf(Jr(i), s) != s) {
                        var h = c.lastIndexOf(i);
                        h > -1 && (c = c.slice(0, h))
                    }
                    return c + r
                }, En.unescape = function(t) {
                    return (t = ss(t)) && z.test(t) ? t.replace(R, qe) : t
                }, En.uniqueId = function(t) {
                    var e = ++St;
                    return ss(t) + e
                }, En.upperCase = zs, En.upperFirst = Ns, En.each = sa, En.eachRight = ca, En.first = Io, Ks(En, (lc = {}, cr(En, (function(t, e) {
                    jt.call(En.prototype, e) || (lc[e] = t)
                })), lc), {
                    chain: !1
                }), En.VERSION = "4.17.20", se(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], (function(t) {
                    En[t].placeholder = En
                })), se(["drop", "take"], (function(t, e) {
                    Dn.prototype[t] = function(n) {
                        n = void 0 === n ? 1 : an(rs(n), 0);
                        var r = this.__filtered__ && !e ? new Dn(this) : this.clone();
                        return r.__filtered__ ? r.__takeCount__ = sn(n, r.__takeCount__) : r.__views__.push({
                            size: sn(n, 4294967295),
                            type: t + (r.__dir__ < 0 ? "Right" : "")
                        }), r
                    }, Dn.prototype[t + "Right"] = function(e) {
                        return this.reverse()[t](e).reverse()
                    }
                })), se(["filter", "map", "takeWhile"], (function(t, e) {
                    var n = e + 1,
                        r = 1 == n || 3 == n;
                    Dn.prototype[t] = function(t) {
                        var e = this.clone();
                        return e.__iteratees__.push({
                            iteratee: Ki(t, 3),
                            type: n
                        }), e.__filtered__ = e.__filtered__ || r, e
                    }
                })), se(["head", "last"], (function(t, e) {
                    var n = "take" + (e ? "Right" : "");
                    Dn.prototype[t] = function() {
                        return this[n](1).value()[0]
                    }
                })), se(["initial", "tail"], (function(t, e) {
                    var n = "drop" + (e ? "" : "Right");
                    Dn.prototype[t] = function() {
                        return this.__filtered__ ? new Dn(this) : this[n](1)
                    }
                })), Dn.prototype.compact = function() {
                    return this.filter(Ys)
                }, Dn.prototype.find = function(t) {
                    return this.filter(t).head()
                }, Dn.prototype.findLast = function(t) {
                    return this.reverse().find(t)
                }, Dn.prototype.invokeMap = zr((function(t, e) {
                    return "function" == typeof t ? new Dn(this) : this.map((function(n) {
                        return mr(n, t, e)
                    }))
                })), Dn.prototype.reject = function(t) {
                    return this.filter(ja(Ki(t)))
                }, Dn.prototype.slice = function(t, e) {
                    t = rs(t);
                    var n = this;
                    return n.__filtered__ && (t > 0 || e < 0) ? new Dn(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), void 0 !== e && (n = (e = rs(e)) < 0 ? n.dropRight(-e) : n.take(e - t)), n)
                }, Dn.prototype.takeRightWhile = function(t) {
                    return this.reverse().takeWhile(t).reverse()
                }, Dn.prototype.toArray = function() {
                    return this.take(4294967295)
                }, cr(Dn.prototype, (function(t, e) {
                    var n = /^(?:filter|find|map|reject)|While$/.test(e),
                        r = /^(?:head|last)$/.test(e),
                        i = En[r ? "take" + ("last" == e ? "Right" : "") : e],
                        o = r || /^find/.test(e);
                    i && (En.prototype[e] = function() {
                        var e = this.__wrapped__,
                            a = r ? [1] : arguments,
                            s = e instanceof Dn,
                            c = a[0],
                            u = s || Ca(e),
                            l = function(t) {
                                var e = i.apply(En, pe([t], a));
                                return r && f ? e[0] : e
                            };
                        u && n && "function" == typeof c && 1 != c.length && (s = u = !1);
                        var f = this.__chain__,
                            h = !!this.__actions__.length,
                            d = o && !f,
                            p = s && !h;
                        if (!o && u) {
                            e = p ? e : new Dn(this);
                            var g = t.apply(e, a);
                            return g.__actions__.push({
                                func: na,
                                args: [l],
                                thisArg: void 0
                            }), new Tn(g, f)
                        }
                        return d && p ? t.apply(this, a) : (g = this.thru(l), d ? r ? g.value()[0] : g.value() : g)
                    })
                })), se(["pop", "push", "shift", "sort", "splice", "unshift"], (function(t) {
                    var e = yt[t],
                        n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                        r = /^(?:pop|shift)$/.test(t);
                    En.prototype[t] = function() {
                        var t = arguments;
                        if (r && !this.__chain__) {
                            var i = this.value();
                            return e.apply(Ca(i) ? i : [], t)
                        }
                        return this[n]((function(n) {
                            return e.apply(Ca(n) ? n : [], t)
                        }))
                    }
                })), cr(Dn.prototype, (function(t, e) {
                    var n = En[e];
                    if (n) {
                        var r = n.name + "";
                        jt.call(yn, r) || (yn[r] = []), yn[r].push({
                            name: e,
                            func: n
                        })
                    }
                })), yn[Ei(void 0, 2).name] = [{
                    name: "wrapper",
                    func: void 0
                }], Dn.prototype.clone = function() {
                    var t = new Dn(this.__wrapped__);
                    return t.__actions__ = vi(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = vi(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = vi(this.__views__), t
                }, Dn.prototype.reverse = function() {
                    if (this.__filtered__) {
                        var t = new Dn(this);
                        t.__dir__ = -1, t.__filtered__ = !0
                    } else(t = this.clone()).__dir__ *= -1;
                    return t
                }, Dn.prototype.value = function() {
                    var t = this.__wrapped__.value(),
                        e = this.__dir__,
                        n = Ca(t),
                        r = e < 0,
                        i = n ? t.length : 0,
                        o = function(t, e, n) {
                            var r = -1,
                                i = n.length;
                            for (; ++r < i;) {
                                var o = n[r],
                                    a = o.size;
                                switch (o.type) {
                                    case "drop":
                                        t += a;
                                        break;
                                    case "dropRight":
                                        e -= a;
                                        break;
                                    case "take":
                                        e = sn(e, t + a);
                                        break;
                                    case "takeRight":
                                        t = an(t, e - a)
                                }
                            }
                            return {
                                start: t,
                                end: e
                            }
                        }(0, i, this.__views__),
                        a = o.start,
                        s = o.end,
                        c = s - a,
                        u = r ? s : a - 1,
                        l = this.__iteratees__,
                        f = l.length,
                        h = 0,
                        d = sn(c, this.__takeCount__);
                    if (!n || !r && i == c && d == c) return ni(t, this.__actions__);
                    var p = [];
                    t: for (; c-- && h < d;) {
                        for (var g = -1, b = t[u += e]; ++g < f;) {
                            var v = l[g],
                                m = v.iteratee,
                                y = v.type,
                                x = m(b);
                            if (2 == y) b = x;
                            else if (!x) {
                                if (1 == y) continue t;
                                break t
                            }
                        }
                        p[h++] = b
                    }
                    return p
                }, En.prototype.at = ra, En.prototype.chain = function() {
                    return ea(this)
                }, En.prototype.commit = function() {
                    return new Tn(this.value(), this.__chain__)
                }, En.prototype.next = function() {
                    void 0 === this.__values__ && (this.__values__ = es(this.value()));
                    var t = this.__index__ >= this.__values__.length;
                    return {
                        done: t,
                        value: t ? void 0 : this.__values__[this.__index__++]
                    }
                }, En.prototype.plant = function(t) {
                    for (var e, n = this; n instanceof Pn;) {
                        var r = Eo(n);
                        r.__index__ = 0, r.__values__ = void 0, e ? i.__wrapped__ = r : e = r;
                        var i = r;
                        n = n.__wrapped__
                    }
                    return i.__wrapped__ = t, e
                }, En.prototype.reverse = function() {
                    var t = this.__wrapped__;
                    if (t instanceof Dn) {
                        var e = t;
                        return this.__actions__.length && (e = new Dn(this)), (e = e.reverse()).__actions__.push({
                            func: na,
                            args: [Ho],
                            thisArg: void 0
                        }), new Tn(e, this.__chain__)
                    }
                    return this.thru(Ho)
                }, En.prototype.toJSON = En.prototype.valueOf = En.prototype.value = function() {
                    return ni(this.__wrapped__, this.__actions__)
                }, En.prototype.first = En.prototype.head, Zt && (En.prototype[Zt] = function() {
                    return this
                }), En
            }();
            qt._ = Ge, void 0 === (i = function() {
                return Ge
            }.call(e, n, e, r)) || (r.exports = i)
        }).call(this)
    }).call(this, n(94), n(130)(t))
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e, n) {
    "use strict";
    (function(t) {
        n(132), n(276), n(278), n(280), n(282), n(284), n(286), n(288), n(290), n(292), n(296), t._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."), t._babelPolyfill = !0
    }).call(this, n(94))
}, function(t, e, n) {
    t.exports = !n(8) && !n(3)((function() {
        return 7 != Object.defineProperty(n(65)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    var r = n(2),
        i = n(10),
        o = n(33),
        a = n(66),
        s = n(9).f;
    t.exports = function(t) {
        var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
            value: a.f(t)
        })
    }
}, function(t, e, n) {
    var r = n(14),
        i = n(16),
        o = n(52)(!1),
        a = n(67)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = i(t),
            c = 0,
            u = [];
        for (n in s) n != a && r(s, n) && u.push(n);
        for (; e.length > c;) r(s, n = e[c++]) && (~o(u, n) || u.push(n));
        return u
    }
}, function(t, e, n) {
    var r = n(9),
        i = n(4),
        o = n(34);
    t.exports = n(8) ? Object.defineProperties : function(t, e) {
        i(t);
        for (var n, a = o(e), s = a.length, c = 0; s > c;) r.f(t, n = a[c++], e[n]);
        return t
    }
}, function(t, e, n) {
    var r = n(16),
        i = n(37).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return a && "[object Window]" == o.call(t) ? function(t) {
            try {
                return i(t)
            } catch (t) {
                return a.slice()
            }
        }(t) : i(r(t))
    }
}, function(t, e, n) {
    "use strict";
    var r = n(8),
        i = n(34),
        o = n(53),
        a = n(48),
        s = n(11),
        c = n(47),
        u = Object.assign;
    t.exports = !u || n(3)((function() {
        var t = {},
            e = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return t[n] = 7, r.split("").forEach((function(t) {
            e[t] = t
        })), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r
    })) ? function(t, e) {
        for (var n = s(t), u = arguments.length, l = 1, f = o.f, h = a.f; u > l;)
            for (var d, p = c(arguments[l++]), g = f ? i(p).concat(f(p)) : i(p), b = g.length, v = 0; b > v;) d = g[v++], r && !h.call(p, d) || (n[d] = p[d]);
        return n
    } : u
}, function(t, e) {
    t.exports = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(24),
        i = n(5),
        o = n(104),
        a = [].slice,
        s = {},
        c = function(t, e, n) {
            if (!(e in s)) {
                for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
                s[e] = Function("F,a", "return new F(" + r.join(",") + ")")
            }
            return s[e](t, n)
        };
    t.exports = Function.bind || function(t) {
        var e = r(this),
            n = a.call(arguments, 1),
            s = function() {
                var r = n.concat(a.call(arguments));
                return this instanceof s ? c(e, r.length, r) : o(e, r, t)
            };
        return i(e.prototype) && (s.prototype = e.prototype), s
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    var r = n(2).parseInt,
        i = n(54).trim,
        o = n(72),
        a = /^[-+]?0[xX]/;
    t.exports = 8 !== r(o + "08") || 22 !== r(o + "0x16") ? function(t, e) {
        var n = i(String(t), 3);
        return r(n, e >>> 0 || (a.test(n) ? 16 : 10))
    } : r
}, function(t, e, n) {
    var r = n(2).parseFloat,
        i = n(54).trim;
    t.exports = 1 / r(n(72) + "-0") != -1 / 0 ? function(t) {
        var e = i(String(t), 3),
            n = r(e);
        return 0 === n && "-" == e.charAt(0) ? -0 : n
    } : r
}, function(t, e, n) {
    var r = n(25);
    t.exports = function(t, e) {
        if ("number" != typeof t && "Number" != r(t)) throw TypeError(e);
        return +t
    }
}, function(t, e, n) {
    var r = n(5),
        i = Math.floor;
    t.exports = function(t) {
        return !r(t) && isFinite(t) && i(t) === t
    }
}, function(t, e) {
    t.exports = Math.log1p || function(t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(36),
        i = n(31),
        o = n(40),
        a = {};
    n(15)(a, n(6)("iterator"), (function() {
        return this
    })), t.exports = function(t, e, n) {
        t.prototype = r(a, {
            next: i(1, n)
        }), o(t, e + " Iterator")
    }
}, function(t, e, n) {
    var r = n(4);
    t.exports = function(t, e, n, i) {
        try {
            return i ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && r(o.call(t)), e
        }
    }
}, function(t, e, n) {
    var r = n(24),
        i = n(11),
        o = n(47),
        a = n(7);
    t.exports = function(t, e, n, s, c) {
        r(e);
        var u = i(t),
            l = o(u),
            f = a(u.length),
            h = c ? f - 1 : 0,
            d = c ? -1 : 1;
        if (n < 2)
            for (;;) {
                if (h in l) {
                    s = l[h], h += d;
                    break
                }
                if (h += d, c ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value")
            }
        for (; c ? h >= 0 : f > h; h += d) h in l && (s = e(s, l[h], h, u));
        return s
    }
}, function(t, e, n) {
    "use strict";
    var r = n(11),
        i = n(35),
        o = n(7);
    t.exports = [].copyWithin || function(t, e) {
        var n = r(this),
            a = o(n.length),
            s = i(t, a),
            c = i(e, a),
            u = arguments.length > 2 ? arguments[2] : void 0,
            l = Math.min((void 0 === u ? a : i(u, a)) - c, a - s),
            f = 1;
        for (c < s && s < c + l && (f = -1, c += l - 1, s += l - 1); l-- > 0;) c in n ? n[s] = n[c] : delete n[s], s += f, c += f;
        return n
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(87);
    n(1)({
        target: "RegExp",
        proto: !0,
        forced: r !== /./.exec
    }, {
        exec: r
    })
}, function(t, e, n) {
    n(8) && "g" != /./g.flags && n(9).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(56)
    })
}, function(t, e, n) {
    "use strict";
    var r, i, o, a, s = n(33),
        c = n(2),
        u = n(23),
        l = n(49),
        f = n(1),
        h = n(5),
        d = n(24),
        p = n(44),
        g = n(59),
        b = n(50),
        v = n(89).set,
        m = n(245)(),
        y = n(118),
        x = n(246),
        _ = n(60),
        w = n(119),
        O = c.TypeError,
        j = c.process,
        S = j && j.versions,
        M = S && S.v8 || "",
        k = c.Promise,
        E = "process" == l(j),
        A = function() {},
        P = i = y.f,
        T = !! function() {
            try {
                var t = k.resolve(1),
                    e = (t.constructor = {})[n(6)("species")] = function(t) {
                        t(A, A)
                    };
                return (E || "function" == typeof PromiseRejectionEvent) && t.then(A) instanceof e && 0 !== M.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
            } catch (t) {}
        }(),
        D = function(t) {
            var e;
            return !(!h(t) || "function" != typeof(e = t.then)) && e
        },
        C = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                m((function() {
                    for (var r = t._v, i = 1 == t._s, o = 0, a = function(e) {
                            var n, o, a, s = i ? e.ok : e.fail,
                                c = e.resolve,
                                u = e.reject,
                                l = e.domain;
                            try {
                                s ? (i || (2 == t._h && R(t), t._h = 1), !0 === s ? n = r : (l && l.enter(), n = s(r), l && (l.exit(), a = !0)), n === e.promise ? u(O("Promise-chain cycle")) : (o = D(n)) ? o.call(n, c, u) : c(n)) : u(r)
                            } catch (t) {
                                l && !a && l.exit(), u(t)
                            }
                        }; n.length > o;) a(n[o++]);
                    t._c = [], t._n = !1, e && !t._h && L(t)
                }))
            }
        },
        L = function(t) {
            v.call(c, (function() {
                var e, n, r, i = t._v,
                    o = I(t);
                if (o && (e = x((function() {
                        E ? j.emit("unhandledRejection", i, t) : (n = c.onunhandledrejection) ? n({
                            promise: t,
                            reason: i
                        }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", i)
                    })), t._h = E || I(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
            }))
        },
        I = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        R = function(t) {
            v.call(c, (function() {
                var e;
                E ? j.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            }))
        },
        F = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), C(e, !0))
        },
        z = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw O("Promise can't be resolved itself");
                    (e = D(t)) ? m((function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, u(z, r, 1), u(F, r, 1))
                        } catch (t) {
                            F.call(r, t)
                        }
                    })): (n._v = t, n._s = 1, C(n, !1))
                } catch (t) {
                    F.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
    T || (k = function(t) {
        p(this, k, "Promise", "_h"), d(t), r.call(this);
        try {
            t(u(z, this, 1), u(F, this, 1))
        } catch (t) {
            F.call(this, t)
        }
    }, (r = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(45)(k.prototype, {
        then: function(t, e) {
            var n = P(b(this, k));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = E ? j.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && C(this, !1), n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), o = function() {
        var t = new r;
        this.promise = t, this.resolve = u(z, t, 1), this.reject = u(F, t, 1)
    }, y.f = P = function(t) {
        return t === k || t === a ? new o(t) : i(t)
    }), f(f.G + f.W + f.F * !T, {
        Promise: k
    }), n(40)(k, "Promise"), n(43)("Promise"), a = n(10).Promise, f(f.S + f.F * !T, "Promise", {
        reject: function(t) {
            var e = P(this);
            return (0, e.reject)(t), e.promise
        }
    }), f(f.S + f.F * (s || !T), "Promise", {
        resolve: function(t) {
            return w(s && this === a ? k : this, t)
        }
    }), f(f.S + f.F * !(T && n(55)((function(t) {
        k.all(t).catch(A)
    }))), "Promise", {
        all: function(t) {
            var e = this,
                n = P(e),
                r = n.resolve,
                i = n.reject,
                o = x((function() {
                    var n = [],
                        o = 0,
                        a = 1;
                    g(t, !1, (function(t) {
                        var s = o++,
                            c = !1;
                        n.push(void 0), a++, e.resolve(t).then((function(t) {
                            c || (c = !0, n[s] = t, --a || r(n))
                        }), i)
                    })), --a || r(n)
                }));
            return o.e && i(o.v), n.promise
        },
        race: function(t) {
            var e = this,
                n = P(e),
                r = n.reject,
                i = x((function() {
                    g(t, !1, (function(t) {
                        e.resolve(t).then(n.resolve, r)
                    }))
                }));
            return i.e && r(i.v), n.promise
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(24);

    function i(t) {
        var e, n;
        this.promise = new t((function(t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = r
        })), this.resolve = r(e), this.reject = r(n)
    }
    t.exports.f = function(t) {
        return new i(t)
    }
}, function(t, e, n) {
    var r = n(4),
        i = n(5),
        o = n(118);
    t.exports = function(t, e) {
        if (r(t), i(e) && e.constructor === t) return e;
        var n = o.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function(t, e, n) {
    "use strict";
    var r = n(9).f,
        i = n(36),
        o = n(45),
        a = n(23),
        s = n(44),
        c = n(59),
        u = n(78),
        l = n(114),
        f = n(43),
        h = n(8),
        d = n(29).fastKey,
        p = n(39),
        g = h ? "_s" : "size",
        b = function(t, e) {
            var n, r = d(e);
            if ("F" !== r) return t._i[r];
            for (n = t._f; n; n = n.n)
                if (n.k == e) return n
        };
    t.exports = {
        getConstructor: function(t, e, n, u) {
            var l = t((function(t, r) {
                s(t, l, e, "_i"), t._t = e, t._i = i(null), t._f = void 0, t._l = void 0, t[g] = 0, null != r && c(r, n, t[u], t)
            }));
            return o(l.prototype, {
                clear: function() {
                    for (var t = p(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                    t._f = t._l = void 0, t[g] = 0
                },
                delete: function(t) {
                    var n = p(this, e),
                        r = b(n, t);
                    if (r) {
                        var i = r.n,
                            o = r.p;
                        delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), n._l == r && (n._l = o), n[g]--
                    }
                    return !!r
                },
                forEach: function(t) {
                    p(this, e);
                    for (var n, r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                        for (r(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(t) {
                    return !!b(p(this, e), t)
                }
            }), h && r(l.prototype, "size", {
                get: function() {
                    return p(this, e)[g]
                }
            }), l
        },
        def: function(t, e, n) {
            var r, i, o = b(t, e);
            return o ? o.v = n : (t._l = o = {
                i: i = d(e, !0),
                k: e,
                v: n,
                p: r = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = o), r && (r.n = o), t[g]++, "F" !== i && (t._i[i] = o)), t
        },
        getEntry: b,
        setStrong: function(t, e, n) {
            u(t, e, (function(t, n) {
                this._t = p(t, e), this._k = n, this._l = void 0
            }), (function() {
                for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                return this._t && (this._l = e = e ? e.n : this._t._f) ? l(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, l(1))
            }), n ? "entries" : "values", !n, !0), f(e)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(45),
        i = n(29).getWeak,
        o = n(4),
        a = n(5),
        s = n(44),
        c = n(59),
        u = n(21),
        l = n(14),
        f = n(39),
        h = u(5),
        d = u(6),
        p = 0,
        g = function(t) {
            return t._l || (t._l = new b)
        },
        b = function() {
            this.a = []
        },
        v = function(t, e) {
            return h(t.a, (function(t) {
                return t[0] === e
            }))
        };
    b.prototype = {
        get: function(t) {
            var e = v(this, t);
            if (e) return e[1]
        },
        has: function(t) {
            return !!v(this, t)
        },
        set: function(t, e) {
            var n = v(this, t);
            n ? n[1] = e : this.a.push([t, e])
        },
        delete: function(t) {
            var e = d(this.a, (function(e) {
                return e[0] === t
            }));
            return ~e && this.a.splice(e, 1), !!~e
        }
    }, t.exports = {
        getConstructor: function(t, e, n, o) {
            var u = t((function(t, r) {
                s(t, u, e, "_i"), t._t = e, t._i = p++, t._l = void 0, null != r && c(r, n, t[o], t)
            }));
            return r(u.prototype, {
                delete: function(t) {
                    if (!a(t)) return !1;
                    var n = i(t);
                    return !0 === n ? g(f(this, e)).delete(t) : n && l(n, this._i) && delete n[this._i]
                },
                has: function(t) {
                    if (!a(t)) return !1;
                    var n = i(t);
                    return !0 === n ? g(f(this, e)).has(t) : n && l(n, this._i)
                }
            }), u
        },
        def: function(t, e, n) {
            var r = i(o(e), !0);
            return !0 === r ? g(t).set(e, n) : r[t._i] = n, t
        },
        ufstore: g
    }
}, function(t, e, n) {
    var r = n(18),
        i = n(7);
    t.exports = function(t) {
        if (void 0 === t) return 0;
        var e = r(t),
            n = i(e);
        if (e !== n) throw RangeError("Wrong length!");
        return n
    }
}, function(t, e, n) {
    var r = n(37),
        i = n(53),
        o = n(4),
        a = n(2).Reflect;
    t.exports = a && a.ownKeys || function(t) {
        var e = r.f(o(t)),
            n = i.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(74),
        o = n(26);
    t.exports = function(t, e, n, a) {
        var s = String(o(t)),
            c = s.length,
            u = void 0 === n ? " " : String(n),
            l = r(e);
        if (l <= c || "" == u) return s;
        var f = l - c,
            h = i.call(u, Math.ceil(f / u.length));
        return h.length > f && (h = h.slice(0, f)), a ? h + s : s + h
    }
}, function(t, e, n) {
    var r = n(8),
        i = n(34),
        o = n(16),
        a = n(48).f;
    t.exports = function(t) {
        return function(e) {
            for (var n, s = o(e), c = i(s), u = c.length, l = 0, f = []; u > l;) n = c[l++], r && !a.call(s, n) || f.push(t ? [n, s[n]] : s[n]);
            return f
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }
}, function(t, e, n) {
    "use strict";
    e.a = {
        blue: "#13426b",
        blue20: "rgba(19, 66, 107, 0.2)",
        blueDark: "#171739",
        red: "#f4364c"
    }
}, function(t, e, n) {
    var r, i;
    i = this, void 0 === (r = function() {
        return i.svg4everybody = function() {
            /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
            function t(t, e, n) {
                if (n) {
                    var r = document.createDocumentFragment(),
                        i = !e.hasAttribute("viewBox") && n.getAttribute("viewBox");
                    i && e.setAttribute("viewBox", i);
                    for (var o = n.cloneNode(!0); o.childNodes.length;) r.appendChild(o.firstChild);
                    t.appendChild(r)
                }
            }

            function e(e) {
                e.onreadystatechange = function() {
                    if (4 === e.readyState) {
                        var n = e._cachedDocument;
                        n || ((n = e._cachedDocument = document.implementation.createHTMLDocument("")).body.innerHTML = e.responseText, e._cachedTarget = {}), e._embeds.splice(0).map((function(r) {
                            var i = e._cachedTarget[r.id];
                            i || (i = e._cachedTarget[r.id] = n.getElementById(r.id)), t(r.parent, r.svg, i)
                        }))
                    }
                }, e.onreadystatechange()
            }

            function n(t) {
                for (var e = t;
                    "svg" !== e.nodeName.toLowerCase() && (e = e.parentNode););
                return e
            }
            return function(r) {
                var i, o = Object(r),
                    a = window.top !== window.self;
                i = "polyfill" in o ? o.polyfill : /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent) || (navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/) || [])[1] < 10547 || (navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/) || [])[1] < 537 || /\bEdge\/.(\d+)\b/.test(navigator.userAgent) && a;
                var s = {},
                    c = window.requestAnimationFrame || setTimeout,
                    u = document.getElementsByTagName("use"),
                    l = 0;
                i && function r() {
                    for (var a = 0; a < u.length;) {
                        var f = u[a],
                            h = f.parentNode,
                            d = n(h),
                            p = f.getAttribute("xlink:href") || f.getAttribute("href");
                        if (!p && o.attributeName && (p = f.getAttribute(o.attributeName)), d && p) {
                            if (i)
                                if (!o.validate || o.validate(p, d, f)) {
                                    h.removeChild(f);
                                    var g = p.split("#"),
                                        b = g.shift(),
                                        v = g.join("#");
                                    if (b.length) {
                                        var m = s[b];
                                        m || ((m = s[b] = new XMLHttpRequest).open("GET", b), m.send(), m._embeds = []), m._embeds.push({
                                            parent: h,
                                            svg: d,
                                            id: v
                                        }), e(m)
                                    } else t(h, d, document.getElementById(v))
                                } else ++a, ++l
                        } else ++a
                    }(!u.length || u.length - l > 0) && c(r, 67)
                }()
            }
        }()
    }.apply(e, [])) || (t.exports = r)
}, function(t, e, n) {
    var r = n(126);
    t.exports = function(t, e) {
        if (t) {
            if ("string" == typeof t) return r(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, n) {
    n(95), n(297), t.exports = n(305)
}, function(t, e, n) {
    n(133), n(136), n(137), n(138), n(139), n(140), n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(165), n(166), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(179), n(180), n(181), n(182), n(183), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(212), n(214), n(215), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(86), n(239), n(115), n(240), n(116), n(241), n(242), n(243), n(244), n(117), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(275), t.exports = n(10)
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(14),
        o = n(8),
        a = n(1),
        s = n(12),
        c = n(29).KEY,
        u = n(3),
        l = n(51),
        f = n(40),
        h = n(32),
        d = n(6),
        p = n(66),
        g = n(97),
        b = n(135),
        v = n(69),
        m = n(4),
        y = n(5),
        x = n(11),
        _ = n(16),
        w = n(28),
        O = n(31),
        j = n(36),
        S = n(100),
        M = n(19),
        k = n(53),
        E = n(9),
        A = n(34),
        P = M.f,
        T = E.f,
        D = S.f,
        C = r.Symbol,
        L = r.JSON,
        I = L && L.stringify,
        R = d("_hidden"),
        F = d("toPrimitive"),
        z = {}.propertyIsEnumerable,
        N = l("symbol-registry"),
        B = l("symbols"),
        W = l("op-symbols"),
        V = Object.prototype,
        H = "function" == typeof C && !!k.f,
        U = r.QObject,
        $ = !U || !U.prototype || !U.prototype.findChild,
        Y = o && u((function() {
            return 7 != j(T({}, "a", {
                get: function() {
                    return T(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(t, e, n) {
            var r = P(V, e);
            r && delete V[e], T(t, e, n), r && t !== V && T(V, e, r)
        } : T,
        q = function(t) {
            var e = B[t] = j(C.prototype);
            return e._k = t, e
        },
        G = H && "symbol" == typeof C.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof C
        },
        X = function(t, e, n) {
            return t === V && X(W, e, n), m(t), e = w(e, !0), m(n), i(B, e) ? (n.enumerable ? (i(t, R) && t[R][e] && (t[R][e] = !1), n = j(n, {
                enumerable: O(0, !1)
            })) : (i(t, R) || T(t, R, O(1, {})), t[R][e] = !0), Y(t, e, n)) : T(t, e, n)
        },
        K = function(t, e) {
            m(t);
            for (var n, r = b(e = _(e)), i = 0, o = r.length; o > i;) X(t, n = r[i++], e[n]);
            return t
        },
        J = function(t) {
            var e = z.call(this, t = w(t, !0));
            return !(this === V && i(B, t) && !i(W, t)) && (!(e || !i(this, t) || !i(B, t) || i(this, R) && this[R][t]) || e)
        },
        Z = function(t, e) {
            if (t = _(t), e = w(e, !0), t !== V || !i(B, e) || i(W, e)) {
                var n = P(t, e);
                return !n || !i(B, e) || i(t, R) && t[R][e] || (n.enumerable = !0), n
            }
        },
        Q = function(t) {
            for (var e, n = D(_(t)), r = [], o = 0; n.length > o;) i(B, e = n[o++]) || e == R || e == c || r.push(e);
            return r
        },
        tt = function(t) {
            for (var e, n = t === V, r = D(n ? W : _(t)), o = [], a = 0; r.length > a;) !i(B, e = r[a++]) || n && !i(V, e) || o.push(B[e]);
            return o
        };
    H || (s((C = function() {
        if (this instanceof C) throw TypeError("Symbol is not a constructor!");
        var t = h(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === V && e.call(W, n), i(this, R) && i(this[R], t) && (this[R][t] = !1), Y(this, t, O(1, n))
            };
        return o && $ && Y(V, t, {
            configurable: !0,
            set: e
        }), q(t)
    }).prototype, "toString", (function() {
        return this._k
    })), M.f = Z, E.f = X, n(37).f = S.f = Q, n(48).f = J, k.f = tt, o && !n(33) && s(V, "propertyIsEnumerable", J, !0), p.f = function(t) {
        return q(d(t))
    }), a(a.G + a.W + a.F * !H, {
        Symbol: C
    });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) d(et[nt++]);
    for (var rt = A(d.store), it = 0; rt.length > it;) g(rt[it++]);
    a(a.S + a.F * !H, "Symbol", {
        for: function(t) {
            return i(N, t += "") ? N[t] : N[t] = C(t)
        },
        keyFor: function(t) {
            if (!G(t)) throw TypeError(t + " is not a symbol!");
            for (var e in N)
                if (N[e] === t) return e
        },
        useSetter: function() {
            $ = !0
        },
        useSimple: function() {
            $ = !1
        }
    }), a(a.S + a.F * !H, "Object", {
        create: function(t, e) {
            return void 0 === e ? j(t) : K(j(t), e)
        },
        defineProperty: X,
        defineProperties: K,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: tt
    });
    var ot = u((function() {
        k.f(1)
    }));
    a(a.S + a.F * ot, "Object", {
        getOwnPropertySymbols: function(t) {
            return k.f(x(t))
        }
    }), L && a(a.S + a.F * (!H || u((function() {
        var t = C();
        return "[null]" != I([t]) || "{}" != I({
            a: t
        }) || "{}" != I(Object(t))
    }))), "JSON", {
        stringify: function(t) {
            for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
            if (n = e = r[1], (y(e) || void 0 !== t) && !G(t)) return v(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !G(e)) return e
            }), r[1] = e, I.apply(L, r)
        }
    }), C.prototype[F] || n(15)(C.prototype, F, C.prototype.valueOf), f(C, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
}, function(t, e, n) {
    t.exports = n(51)("native-function-to-string", Function.toString)
}, function(t, e, n) {
    var r = n(34),
        i = n(53),
        o = n(48);
    t.exports = function(t) {
        var e = r(t),
            n = i.f;
        if (n)
            for (var a, s = n(t), c = o.f, u = 0; s.length > u;) c.call(t, a = s[u++]) && e.push(a);
        return e
    }
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Object", {
        create: n(36)
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S + r.F * !n(8), "Object", {
        defineProperty: n(9).f
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S + r.F * !n(8), "Object", {
        defineProperties: n(99)
    })
}, function(t, e, n) {
    var r = n(16),
        i = n(19).f;
    n(20)("getOwnPropertyDescriptor", (function() {
        return function(t, e) {
            return i(r(t), e)
        }
    }))
}, function(t, e, n) {
    var r = n(11),
        i = n(38);
    n(20)("getPrototypeOf", (function() {
        return function(t) {
            return i(r(t))
        }
    }))
}, function(t, e, n) {
    var r = n(11),
        i = n(34);
    n(20)("keys", (function() {
        return function(t) {
            return i(r(t))
        }
    }))
}, function(t, e, n) {
    n(20)("getOwnPropertyNames", (function() {
        return n(100).f
    }))
}, function(t, e, n) {
    var r = n(5),
        i = n(29).onFreeze;
    n(20)("freeze", (function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    }))
}, function(t, e, n) {
    var r = n(5),
        i = n(29).onFreeze;
    n(20)("seal", (function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    }))
}, function(t, e, n) {
    var r = n(5),
        i = n(29).onFreeze;
    n(20)("preventExtensions", (function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    }))
}, function(t, e, n) {
    var r = n(5);
    n(20)("isFrozen", (function(t) {
        return function(e) {
            return !r(e) || !!t && t(e)
        }
    }))
}, function(t, e, n) {
    var r = n(5);
    n(20)("isSealed", (function(t) {
        return function(e) {
            return !r(e) || !!t && t(e)
        }
    }))
}, function(t, e, n) {
    var r = n(5);
    n(20)("isExtensible", (function(t) {
        return function(e) {
            return !!r(e) && (!t || t(e))
        }
    }))
}, function(t, e, n) {
    var r = n(1);
    r(r.S + r.F, "Object", {
        assign: n(101)
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Object", {
        is: n(102)
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Object", {
        setPrototypeOf: n(71).set
    })
}, function(t, e, n) {
    "use strict";
    var r = n(49),
        i = {};
    i[n(6)("toStringTag")] = "z", i + "" != "[object z]" && n(12)(Object.prototype, "toString", (function() {
        return "[object " + r(this) + "]"
    }), !0)
}, function(t, e, n) {
    var r = n(1);
    r(r.P, "Function", {
        bind: n(103)
    })
}, function(t, e, n) {
    var r = n(9).f,
        i = Function.prototype,
        o = /^\s*function ([^ (]*)/;
    "name" in i || n(8) && r(i, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(o)[1]
            } catch (t) {
                return ""
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(5),
        i = n(38),
        o = n(6)("hasInstance"),
        a = Function.prototype;
    o in a || n(9).f(a, o, {
        value: function(t) {
            if ("function" != typeof this || !r(t)) return !1;
            if (!r(this.prototype)) return t instanceof this;
            for (; t = i(t);)
                if (this.prototype === t) return !0;
            return !1
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(105);
    r(r.G + r.F * (parseInt != i), {
        parseInt: i
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(106);
    r(r.G + r.F * (parseFloat != i), {
        parseFloat: i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(2),
        i = n(14),
        o = n(25),
        a = n(73),
        s = n(28),
        c = n(3),
        u = n(37).f,
        l = n(19).f,
        f = n(9).f,
        h = n(54).trim,
        d = r.Number,
        p = d,
        g = d.prototype,
        b = "Number" == o(n(36)(g)),
        v = "trim" in String.prototype,
        m = function(t) {
            var e = s(t, !1);
            if ("string" == typeof e && e.length > 2) {
                var n, r, i, o = (e = v ? e.trim() : h(e, 3)).charCodeAt(0);
                if (43 === o || 45 === o) {
                    if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === o) {
                    switch (e.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2, i = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8, i = 55;
                            break;
                        default:
                            return +e
                    }
                    for (var a, c = e.slice(2), u = 0, l = c.length; u < l; u++)
                        if ((a = c.charCodeAt(u)) < 48 || a > i) return NaN;
                    return parseInt(c, r)
                }
            }
            return +e
        };
    if (!d(" 0o1") || !d("0b1") || d("+0x1")) {
        d = function(t) {
            var e = arguments.length < 1 ? 0 : t,
                n = this;
            return n instanceof d && (b ? c((function() {
                g.valueOf.call(n)
            })) : "Number" != o(n)) ? a(new p(m(e)), n, d) : m(e)
        };
        for (var y, x = n(8) ? u(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), _ = 0; x.length > _; _++) i(p, y = x[_]) && !i(d, y) && f(d, y, l(p, y));
        d.prototype = g, g.constructor = d, n(12)(r, "Number", d)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(18),
        o = n(107),
        a = n(74),
        s = 1..toFixed,
        c = Math.floor,
        u = [0, 0, 0, 0, 0, 0],
        l = "Number.toFixed: incorrect invocation!",
        f = function(t, e) {
            for (var n = -1, r = e; ++n < 6;) r += t * u[n], u[n] = r % 1e7, r = c(r / 1e7)
        },
        h = function(t) {
            for (var e = 6, n = 0; --e >= 0;) n += u[e], u[e] = c(n / t), n = n % t * 1e7
        },
        d = function() {
            for (var t = 6, e = ""; --t >= 0;)
                if ("" !== e || 0 === t || 0 !== u[t]) {
                    var n = String(u[t]);
                    e = "" === e ? n : e + a.call("0", 7 - n.length) + n
                }
            return e
        },
        p = function(t, e, n) {
            return 0 === e ? n : e % 2 == 1 ? p(t, e - 1, n * t) : p(t * t, e / 2, n)
        };
    r(r.P + r.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(3)((function() {
        s.call({})
    }))), "Number", {
        toFixed: function(t) {
            var e, n, r, s, c = o(this, l),
                u = i(t),
                g = "",
                b = "0";
            if (u < 0 || u > 20) throw RangeError(l);
            if (c != c) return "NaN";
            if (c <= -1e21 || c >= 1e21) return String(c);
            if (c < 0 && (g = "-", c = -c), c > 1e-21)
                if (n = (e = function(t) {
                        for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                        for (; n >= 2;) e += 1, n /= 2;
                        return e
                    }(c * p(2, 69, 1)) - 69) < 0 ? c * p(2, -e, 1) : c / p(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
                    for (f(0, n), r = u; r >= 7;) f(1e7, 0), r -= 7;
                    for (f(p(10, r, 1), 0), r = e - 1; r >= 23;) h(1 << 23), r -= 23;
                    h(1 << r), f(1, 1), h(2), b = d()
                } else f(0, n), f(1 << -e, 0), b = d() + a.call("0", u);
            return b = u > 0 ? g + ((s = b.length) <= u ? "0." + a.call("0", u - s) + b : b.slice(0, s - u) + "." + b.slice(s - u)) : g + b
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(3),
        o = n(107),
        a = 1..toPrecision;
    r(r.P + r.F * (i((function() {
        return "1" !== a.call(1, void 0)
    })) || !i((function() {
        a.call({})
    }))), "Number", {
        toPrecision: function(t) {
            var e = o(this, "Number#toPrecision: incorrect invocation!");
            return void 0 === t ? a.call(e) : a.call(e, t)
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Number", {
        EPSILON: Math.pow(2, -52)
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(2).isFinite;
    r(r.S, "Number", {
        isFinite: function(t) {
            return "number" == typeof t && i(t)
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Number", {
        isInteger: n(108)
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Number", {
        isNaN: function(t) {
            return t != t
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(108),
        o = Math.abs;
    r(r.S, "Number", {
        isSafeInteger: function(t) {
            return i(t) && o(t) <= 9007199254740991
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Number", {
        MAX_SAFE_INTEGER: 9007199254740991
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Number", {
        MIN_SAFE_INTEGER: -9007199254740991
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(106);
    r(r.S + r.F * (Number.parseFloat != i), "Number", {
        parseFloat: i
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(105);
    r(r.S + r.F * (Number.parseInt != i), "Number", {
        parseInt: i
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(109),
        o = Math.sqrt,
        a = Math.acosh;
    r(r.S + r.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
        acosh: function(t) {
            return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : i(t - 1 + o(t - 1) * o(t + 1))
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = Math.asinh;
    r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
        asinh: function t(e) {
            return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = Math.atanh;
    r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
        atanh: function(t) {
            return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(75);
    r(r.S, "Math", {
        cbrt: function(t) {
            return i(t = +t) * Math.pow(Math.abs(t), 1 / 3)
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Math", {
        clz32: function(t) {
            return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = Math.exp;
    r(r.S, "Math", {
        cosh: function(t) {
            return (i(t = +t) + i(-t)) / 2
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(76);
    r(r.S + r.F * (i != Math.expm1), "Math", {
        expm1: i
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Math", {
        fround: n(178)
    })
}, function(t, e, n) {
    var r = n(75),
        i = Math.pow,
        o = i(2, -52),
        a = i(2, -23),
        s = i(2, 127) * (2 - a),
        c = i(2, -126);
    t.exports = Math.fround || function(t) {
        var e, n, i = Math.abs(t),
            u = r(t);
        return i < c ? u * (i / c / a + 1 / o - 1 / o) * c * a : (n = (e = (1 + a / o) * i) - (e - i)) > s || n != n ? u * (1 / 0) : u * n
    }
}, function(t, e, n) {
    var r = n(1),
        i = Math.abs;
    r(r.S, "Math", {
        hypot: function(t, e) {
            for (var n, r, o = 0, a = 0, s = arguments.length, c = 0; a < s;) c < (n = i(arguments[a++])) ? (o = o * (r = c / n) * r + 1, c = n) : o += n > 0 ? (r = n / c) * r : n;
            return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(o)
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = Math.imul;
    r(r.S + r.F * n(3)((function() {
        return -5 != i(4294967295, 5) || 2 != i.length
    })), "Math", {
        imul: function(t, e) {
            var n = +t,
                r = +e,
                i = 65535 & n,
                o = 65535 & r;
            return 0 | i * o + ((65535 & n >>> 16) * o + i * (65535 & r >>> 16) << 16 >>> 0)
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Math", {
        log10: function(t) {
            return Math.log(t) * Math.LOG10E
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Math", {
        log1p: n(109)
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Math", {
        log2: function(t) {
            return Math.log(t) / Math.LN2
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Math", {
        sign: n(75)
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(76),
        o = Math.exp;
    r(r.S + r.F * n(3)((function() {
        return -2e-17 != !Math.sinh(-2e-17)
    })), "Math", {
        sinh: function(t) {
            return Math.abs(t = +t) < 1 ? (i(t) - i(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(76),
        o = Math.exp;
    r(r.S, "Math", {
        tanh: function(t) {
            var e = i(t = +t),
                n = i(-t);
            return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (o(t) + o(-t))
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Math", {
        trunc: function(t) {
            return (t > 0 ? Math.floor : Math.ceil)(t)
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(35),
        o = String.fromCharCode,
        a = String.fromCodePoint;
    r(r.S + r.F * (!!a && 1 != a.length), "String", {
        fromCodePoint: function(t) {
            for (var e, n = [], r = arguments.length, a = 0; r > a;) {
                if (e = +arguments[a++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                n.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
            }
            return n.join("")
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(16),
        o = n(7);
    r(r.S, "String", {
        raw: function(t) {
            for (var e = i(t.raw), n = o(e.length), r = arguments.length, a = [], s = 0; n > s;) a.push(String(e[s++])), s < r && a.push(String(arguments[s]));
            return a.join("")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(54)("trim", (function(t) {
        return function() {
            return t(this, 3)
        }
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(77)(!0);
    n(78)(String, "String", (function(t) {
        this._t = String(t), this._i = 0
    }), (function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(77)(!1);
    r(r.P, "String", {
        codePointAt: function(t) {
            return i(this, t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(7),
        o = n(79),
        a = "".endsWith;
    r(r.P + r.F * n(81)("endsWith"), "String", {
        endsWith: function(t) {
            var e = o(this, t, "endsWith"),
                n = arguments.length > 1 ? arguments[1] : void 0,
                r = i(e.length),
                s = void 0 === n ? r : Math.min(i(n), r),
                c = String(t);
            return a ? a.call(e, c, s) : e.slice(s - c.length, s) === c
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(79);
    r(r.P + r.F * n(81)("includes"), "String", {
        includes: function(t) {
            return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.P, "String", {
        repeat: n(74)
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(7),
        o = n(79),
        a = "".startsWith;
    r(r.P + r.F * n(81)("startsWith"), "String", {
        startsWith: function(t) {
            var e = o(this, t, "startsWith"),
                n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                r = String(t);
            return a ? a.call(e, r, n) : e.slice(n, n + r.length) === r
        }
    })
}, function(t, e, n) {
    "use strict";
    n(13)("anchor", (function(t) {
        return function(e) {
            return t(this, "a", "name", e)
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(13)("big", (function(t) {
        return function() {
            return t(this, "big", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(13)("blink", (function(t) {
        return function() {
            return t(this, "blink", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(13)("bold", (function(t) {
        return function() {
            return t(this, "b", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(13)("fixed", (function(t) {
        return function() {
            return t(this, "tt", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(13)("fontcolor", (function(t) {
        return function(e) {
            return t(this, "font", "color", e)
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(13)("fontsize", (function(t) {
        return function(e) {
            return t(this, "font", "size", e)
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(13)("italics", (function(t) {
        return function() {
            return t(this, "i", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(13)("link", (function(t) {
        return function(e) {
            return t(this, "a", "href", e)
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(13)("small", (function(t) {
        return function() {
            return t(this, "small", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(13)("strike", (function(t) {
        return function() {
            return t(this, "strike", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(13)("sub", (function(t) {
        return function() {
            return t(this, "sub", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(13)("sup", (function(t) {
        return function() {
            return t(this, "sup", "", "")
        }
    }))
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Date", {
        now: function() {
            return (new Date).getTime()
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(11),
        o = n(28);
    r(r.P + r.F * n(3)((function() {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
                return 1
            }
        })
    })), "Date", {
        toJSON: function(t) {
            var e = i(this),
                n = o(e);
            return "number" != typeof n || isFinite(n) ? e.toISOString() : null
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(213);
    r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", {
        toISOString: i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(3),
        i = Date.prototype.getTime,
        o = Date.prototype.toISOString,
        a = function(t) {
            return t > 9 ? t : "0" + t
        };
    t.exports = r((function() {
        return "0385-07-25T07:06:39.999Z" != o.call(new Date(-50000000000001))
    })) || !r((function() {
        o.call(new Date(NaN))
    })) ? function() {
        if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
        var t = this,
            e = t.getUTCFullYear(),
            n = t.getUTCMilliseconds(),
            r = e < 0 ? "-" : e > 9999 ? "+" : "";
        return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z"
    } : o
}, function(t, e, n) {
    var r = Date.prototype,
        i = r.toString,
        o = r.getTime;
    new Date(NaN) + "" != "Invalid Date" && n(12)(r, "toString", (function() {
        var t = o.call(this);
        return t == t ? i.call(this) : "Invalid Date"
    }))
}, function(t, e, n) {
    var r = n(6)("toPrimitive"),
        i = Date.prototype;
    r in i || n(15)(i, r, n(216))
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(28);
    t.exports = function(t) {
        if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
        return i(r(this), "number" != t)
    }
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Array", {
        isArray: n(69)
    })
}, function(t, e, n) {
    "use strict";
    var r = n(23),
        i = n(1),
        o = n(11),
        a = n(111),
        s = n(82),
        c = n(7),
        u = n(83),
        l = n(84);
    i(i.S + i.F * !n(55)((function(t) {
        Array.from(t)
    })), "Array", {
        from: function(t) {
            var e, n, i, f, h = o(t),
                d = "function" == typeof this ? this : Array,
                p = arguments.length,
                g = p > 1 ? arguments[1] : void 0,
                b = void 0 !== g,
                v = 0,
                m = l(h);
            if (b && (g = r(g, p > 2 ? arguments[2] : void 0, 2)), null == m || d == Array && s(m))
                for (n = new d(e = c(h.length)); e > v; v++) u(n, v, b ? g(h[v], v) : h[v]);
            else
                for (f = m.call(h), n = new d; !(i = f.next()).done; v++) u(n, v, b ? a(f, g, [i.value, v], !0) : i.value);
            return n.length = v, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(83);
    r(r.S + r.F * n(3)((function() {
        function t() {}
        return !(Array.of.call(t) instanceof t)
    })), "Array", { of: function() {
            for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) i(n, t, arguments[t++]);
            return n.length = e, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(16),
        o = [].join;
    r(r.P + r.F * (n(47) != Object || !n(17)(o)), "Array", {
        join: function(t) {
            return o.call(i(this), void 0 === t ? "," : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(70),
        o = n(25),
        a = n(35),
        s = n(7),
        c = [].slice;
    r(r.P + r.F * n(3)((function() {
        i && c.call(i)
    })), "Array", {
        slice: function(t, e) {
            var n = s(this.length),
                r = o(this);
            if (e = void 0 === e ? n : e, "Array" == r) return c.call(this, t, e);
            for (var i = a(t, n), u = a(e, n), l = s(u - i), f = new Array(l), h = 0; h < l; h++) f[h] = "String" == r ? this.charAt(i + h) : this[i + h];
            return f
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(24),
        o = n(11),
        a = n(3),
        s = [].sort,
        c = [1, 2, 3];
    r(r.P + r.F * (a((function() {
        c.sort(void 0)
    })) || !a((function() {
        c.sort(null)
    })) || !n(17)(s)), "Array", {
        sort: function(t) {
            return void 0 === t ? s.call(o(this)) : s.call(o(this), i(t))
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(21)(0),
        o = n(17)([].forEach, !0);
    r(r.P + r.F * !o, "Array", {
        forEach: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    var r = n(225);
    t.exports = function(t, e) {
        return new(r(t))(e)
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(69),
        o = n(6)("species");
    t.exports = function(t) {
        var e;
        return i(t) && ("function" != typeof(e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), r(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(21)(1);
    r(r.P + r.F * !n(17)([].map, !0), "Array", {
        map: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(21)(2);
    r(r.P + r.F * !n(17)([].filter, !0), "Array", {
        filter: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(21)(3);
    r(r.P + r.F * !n(17)([].some, !0), "Array", {
        some: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(21)(4);
    r(r.P + r.F * !n(17)([].every, !0), "Array", {
        every: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(112);
    r(r.P + r.F * !n(17)([].reduce, !0), "Array", {
        reduce: function(t) {
            return i(this, t, arguments.length, arguments[1], !1)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(112);
    r(r.P + r.F * !n(17)([].reduceRight, !0), "Array", {
        reduceRight: function(t) {
            return i(this, t, arguments.length, arguments[1], !0)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(52)(!1),
        o = [].indexOf,
        a = !!o && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (a || !n(17)(o)), "Array", {
        indexOf: function(t) {
            return a ? o.apply(this, arguments) || 0 : i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(16),
        o = n(18),
        a = n(7),
        s = [].lastIndexOf,
        c = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (c || !n(17)(s)), "Array", {
        lastIndexOf: function(t) {
            if (c) return s.apply(this, arguments) || 0;
            var e = i(this),
                n = a(e.length),
                r = n - 1;
            for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                if (r in e && e[r] === t) return r || 0;
            return -1
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.P, "Array", {
        copyWithin: n(113)
    }), n(42)("copyWithin")
}, function(t, e, n) {
    var r = n(1);
    r(r.P, "Array", {
        fill: n(85)
    }), n(42)("fill")
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(21)(5),
        o = !0;
    "find" in [] && Array(1).find((function() {
        o = !1
    })), r(r.P + r.F * o, "Array", {
        find: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(42)("find")
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(21)(6),
        o = "findIndex",
        a = !0;
    o in [] && Array(1)[o]((function() {
        a = !1
    })), r(r.P + r.F * a, "Array", {
        findIndex: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(42)(o)
}, function(t, e, n) {
    n(43)("Array")
}, function(t, e, n) {
    var r = n(2),
        i = n(73),
        o = n(9).f,
        a = n(37).f,
        s = n(80),
        c = n(56),
        u = r.RegExp,
        l = u,
        f = u.prototype,
        h = /a/g,
        d = /a/g,
        p = new u(h) !== h;
    if (n(8) && (!p || n(3)((function() {
            return d[n(6)("match")] = !1, u(h) != h || u(d) == d || "/a/i" != u(h, "i")
        })))) {
        u = function(t, e) {
            var n = this instanceof u,
                r = s(t),
                o = void 0 === e;
            return !n && r && t.constructor === u && o ? t : i(p ? new l(r && !o ? t.source : t, e) : l((r = t instanceof u) ? t.source : t, r && o ? c.call(t) : e), n ? this : f, u)
        };
        for (var g = function(t) {
                t in u || o(u, t, {
                    configurable: !0,
                    get: function() {
                        return l[t]
                    },
                    set: function(e) {
                        l[t] = e
                    }
                })
            }, b = a(l), v = 0; b.length > v;) g(b[v++]);
        f.constructor = u, u.prototype = f, n(12)(r, "RegExp", u)
    }
    n(43)("RegExp")
}, function(t, e, n) {
    "use strict";
    n(116);
    var r = n(4),
        i = n(56),
        o = n(8),
        a = /./.toString,
        s = function(t) {
            n(12)(RegExp.prototype, "toString", t, !0)
        };
    n(3)((function() {
        return "/a/b" != a.call({
            source: "a",
            flags: "b"
        })
    })) ? s((function() {
        var t = r(this);
        return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? i.call(t) : void 0)
    })) : "toString" != a.name && s((function() {
        return a.call(this)
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(7),
        o = n(88),
        a = n(57);
    n(58)("match", 1, (function(t, e, n, s) {
        return [function(n) {
            var r = t(this),
                i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
        }, function(t) {
            var e = s(n, t, this);
            if (e.done) return e.value;
            var c = r(t),
                u = String(this);
            if (!c.global) return a(c, u);
            var l = c.unicode;
            c.lastIndex = 0;
            for (var f, h = [], d = 0; null !== (f = a(c, u));) {
                var p = String(f[0]);
                h[d] = p, "" === p && (c.lastIndex = o(u, i(c.lastIndex), l)), d++
            }
            return 0 === d ? null : h
        }]
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(11),
        o = n(7),
        a = n(18),
        s = n(88),
        c = n(57),
        u = Math.max,
        l = Math.min,
        f = Math.floor,
        h = /\$([$&`']|\d\d?|<[^>]*>)/g,
        d = /\$([$&`']|\d\d?)/g;
    n(58)("replace", 2, (function(t, e, n, p) {
        return [function(r, i) {
            var o = t(this),
                a = null == r ? void 0 : r[e];
            return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i)
        }, function(t, e) {
            var i = p(n, t, this, e);
            if (i.done) return i.value;
            var f = r(t),
                h = String(this),
                d = "function" == typeof e;
            d || (e = String(e));
            var b = f.global;
            if (b) {
                var v = f.unicode;
                f.lastIndex = 0
            }
            for (var m = [];;) {
                var y = c(f, h);
                if (null === y) break;
                if (m.push(y), !b) break;
                "" === String(y[0]) && (f.lastIndex = s(h, o(f.lastIndex), v))
            }
            for (var x, _ = "", w = 0, O = 0; O < m.length; O++) {
                y = m[O];
                for (var j = String(y[0]), S = u(l(a(y.index), h.length), 0), M = [], k = 1; k < y.length; k++) M.push(void 0 === (x = y[k]) ? x : String(x));
                var E = y.groups;
                if (d) {
                    var A = [j].concat(M, S, h);
                    void 0 !== E && A.push(E);
                    var P = String(e.apply(void 0, A))
                } else P = g(j, h, S, M, E, e);
                S >= w && (_ += h.slice(w, S) + P, w = S + j.length)
            }
            return _ + h.slice(w)
        }];

        function g(t, e, r, o, a, s) {
            var c = r + t.length,
                u = o.length,
                l = d;
            return void 0 !== a && (a = i(a), l = h), n.call(s, l, (function(n, i) {
                var s;
                switch (i.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, r);
                    case "'":
                        return e.slice(c);
                    case "<":
                        s = a[i.slice(1, -1)];
                        break;
                    default:
                        var l = +i;
                        if (0 === l) return n;
                        if (l > u) {
                            var h = f(l / 10);
                            return 0 === h ? n : h <= u ? void 0 === o[h - 1] ? i.charAt(1) : o[h - 1] + i.charAt(1) : n
                        }
                        s = o[l - 1]
                }
                return void 0 === s ? "" : s
            }))
        }
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(4),
        i = n(102),
        o = n(57);
    n(58)("search", 1, (function(t, e, n, a) {
        return [function(n) {
            var r = t(this),
                i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
        }, function(t) {
            var e = a(n, t, this);
            if (e.done) return e.value;
            var s = r(t),
                c = String(this),
                u = s.lastIndex;
            i(u, 0) || (s.lastIndex = 0);
            var l = o(s, c);
            return i(s.lastIndex, u) || (s.lastIndex = u), null === l ? -1 : l.index
        }]
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(80),
        i = n(4),
        o = n(50),
        a = n(88),
        s = n(7),
        c = n(57),
        u = n(87),
        l = n(3),
        f = Math.min,
        h = [].push,
        d = "length",
        p = !l((function() {
            RegExp(4294967295, "y")
        }));
    n(58)("split", 2, (function(t, e, n, l) {
        var g;
        return g = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[d] || 2 != "ab".split(/(?:ab)*/)[d] || 4 != ".".split(/(.?)(.?)/)[d] || ".".split(/()()/)[d] > 1 || "".split(/.?/)[d] ? function(t, e) {
            var i = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!r(t)) return n.call(i, t, e);
            for (var o, a, s, c = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, p = void 0 === e ? 4294967295 : e >>> 0, g = new RegExp(t.source, l + "g");
                (o = u.call(g, i)) && !((a = g.lastIndex) > f && (c.push(i.slice(f, o.index)), o[d] > 1 && o.index < i[d] && h.apply(c, o.slice(1)), s = o[0][d], f = a, c[d] >= p));) g.lastIndex === o.index && g.lastIndex++;
            return f === i[d] ? !s && g.test("") || c.push("") : c.push(i.slice(f)), c[d] > p ? c.slice(0, p) : c
        } : "0".split(void 0, 0)[d] ? function(t, e) {
            return void 0 === t && 0 === e ? [] : n.call(this, t, e)
        } : n, [function(n, r) {
            var i = t(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : g.call(String(i), n, r)
        }, function(t, e) {
            var r = l(g, t, this, e, g !== n);
            if (r.done) return r.value;
            var u = i(t),
                h = String(this),
                d = o(u, RegExp),
                b = u.unicode,
                v = (u.ignoreCase ? "i" : "") + (u.multiline ? "m" : "") + (u.unicode ? "u" : "") + (p ? "y" : "g"),
                m = new d(p ? u : "^(?:" + u.source + ")", v),
                y = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === y) return [];
            if (0 === h.length) return null === c(m, h) ? [h] : [];
            for (var x = 0, _ = 0, w = []; _ < h.length;) {
                m.lastIndex = p ? _ : 0;
                var O, j = c(m, p ? h : h.slice(_));
                if (null === j || (O = f(s(m.lastIndex + (p ? 0 : _)), h.length)) === x) _ = a(h, _, b);
                else {
                    if (w.push(h.slice(x, _)), w.length === y) return w;
                    for (var S = 1; S <= j.length - 1; S++)
                        if (w.push(j[S]), w.length === y) return w;
                    _ = x = O
                }
            }
            return w.push(h.slice(x)), w
        }]
    }))
}, function(t, e, n) {
    var r = n(2),
        i = n(89).set,
        o = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        s = r.Promise,
        c = "process" == n(25)(a);
    t.exports = function() {
        var t, e, n, u = function() {
            var r, i;
            for (c && (r = a.domain) && r.exit(); t;) {
                i = t.fn, t = t.next;
                try {
                    i()
                } catch (r) {
                    throw t ? n() : e = void 0, r
                }
            }
            e = void 0, r && r.enter()
        };
        if (c) n = function() {
            a.nextTick(u)
        };
        else if (!o || r.navigator && r.navigator.standalone)
            if (s && s.resolve) {
                var l = s.resolve(void 0);
                n = function() {
                    l.then(u)
                }
            } else n = function() {
                i.call(r, u)
            };
        else {
            var f = !0,
                h = document.createTextNode("");
            new o(u).observe(h, {
                characterData: !0
            }), n = function() {
                h.data = f = !f
            }
        }
        return function(r) {
            var i = {
                fn: r,
                next: void 0
            };
            e && (e.next = i), t || (t = i, n()), e = i
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(120),
        i = n(39);
    t.exports = n(61)("Map", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        get: function(t) {
            var e = r.getEntry(i(this, "Map"), t);
            return e && e.v
        },
        set: function(t, e) {
            return r.def(i(this, "Map"), 0 === t ? 0 : t, e)
        }
    }, r, !0)
}, function(t, e, n) {
    "use strict";
    var r = n(120),
        i = n(39);
    t.exports = n(61)("Set", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        add: function(t) {
            return r.def(i(this, "Set"), t = 0 === t ? 0 : t, t)
        }
    }, r)
}, function(t, e, n) {
    "use strict";
    var r, i = n(2),
        o = n(21)(0),
        a = n(12),
        s = n(29),
        c = n(101),
        u = n(121),
        l = n(5),
        f = n(39),
        h = n(39),
        d = !i.ActiveXObject && "ActiveXObject" in i,
        p = s.getWeak,
        g = Object.isExtensible,
        b = u.ufstore,
        v = function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        },
        m = {
            get: function(t) {
                if (l(t)) {
                    var e = p(t);
                    return !0 === e ? b(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                }
            },
            set: function(t, e) {
                return u.def(f(this, "WeakMap"), t, e)
            }
        },
        y = t.exports = n(61)("WeakMap", v, m, u, !0, !0);
    h && d && (c((r = u.getConstructor(v, "WeakMap")).prototype, m), s.NEED = !0, o(["delete", "has", "get", "set"], (function(t) {
        var e = y.prototype,
            n = e[t];
        a(e, t, (function(e, i) {
            if (l(e) && !g(e)) {
                this._f || (this._f = new r);
                var o = this._f[t](e, i);
                return "set" == t ? this : o
            }
            return n.call(this, e, i)
        }))
    })))
}, function(t, e, n) {
    "use strict";
    var r = n(121),
        i = n(39);
    n(61)("WeakSet", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        add: function(t) {
            return r.def(i(this, "WeakSet"), t, !0)
        }
    }, r, !1, !0)
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(62),
        o = n(90),
        a = n(4),
        s = n(35),
        c = n(7),
        u = n(5),
        l = n(2).ArrayBuffer,
        f = n(50),
        h = o.ArrayBuffer,
        d = o.DataView,
        p = i.ABV && l.isView,
        g = h.prototype.slice,
        b = i.VIEW;
    r(r.G + r.W + r.F * (l !== h), {
        ArrayBuffer: h
    }), r(r.S + r.F * !i.CONSTR, "ArrayBuffer", {
        isView: function(t) {
            return p && p(t) || u(t) && b in t
        }
    }), r(r.P + r.U + r.F * n(3)((function() {
        return !new h(2).slice(1, void 0).byteLength
    })), "ArrayBuffer", {
        slice: function(t, e) {
            if (void 0 !== g && void 0 === e) return g.call(a(this), t);
            for (var n = a(this).byteLength, r = s(t, n), i = s(void 0 === e ? n : e, n), o = new(f(this, h))(c(i - r)), u = new d(this), l = new d(o), p = 0; r < i;) l.setUint8(p++, u.getUint8(r++));
            return o
        }
    }), n(43)("ArrayBuffer")
}, function(t, e, n) {
    var r = n(1);
    r(r.G + r.W + r.F * !n(62).ABV, {
        DataView: n(90).DataView
    })
}, function(t, e, n) {
    n(27)("Int8", 1, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(27)("Uint8", 1, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(27)("Uint8", 1, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }), !0)
}, function(t, e, n) {
    n(27)("Int16", 2, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(27)("Uint16", 2, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(27)("Int32", 4, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(27)("Uint32", 4, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(27)("Float32", 4, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    n(27)("Float64", 8, (function(t) {
        return function(e, n, r) {
            return t(this, e, n, r)
        }
    }))
}, function(t, e, n) {
    var r = n(1),
        i = n(24),
        o = n(4),
        a = (n(2).Reflect || {}).apply,
        s = Function.apply;
    r(r.S + r.F * !n(3)((function() {
        a((function() {}))
    })), "Reflect", {
        apply: function(t, e, n) {
            var r = i(t),
                c = o(n);
            return a ? a(r, e, c) : s.call(r, e, c)
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(36),
        o = n(24),
        a = n(4),
        s = n(5),
        c = n(3),
        u = n(103),
        l = (n(2).Reflect || {}).construct,
        f = c((function() {
            function t() {}
            return !(l((function() {}), [], t) instanceof t)
        })),
        h = !c((function() {
            l((function() {}))
        }));
    r(r.S + r.F * (f || h), "Reflect", {
        construct: function(t, e) {
            o(t), a(e);
            var n = arguments.length < 3 ? t : o(arguments[2]);
            if (h && !f) return l(t, e, n);
            if (t == n) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var r = [null];
                return r.push.apply(r, e), new(u.apply(t, r))
            }
            var c = n.prototype,
                d = i(s(c) ? c : Object.prototype),
                p = Function.apply.call(t, d, e);
            return s(p) ? p : d
        }
    })
}, function(t, e, n) {
    var r = n(9),
        i = n(1),
        o = n(4),
        a = n(28);
    i(i.S + i.F * n(3)((function() {
        Reflect.defineProperty(r.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    })), "Reflect", {
        defineProperty: function(t, e, n) {
            o(t), e = a(e, !0), o(n);
            try {
                return r.f(t, e, n), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(19).f,
        o = n(4);
    r(r.S, "Reflect", {
        deleteProperty: function(t, e) {
            var n = i(o(t), e);
            return !(n && !n.configurable) && delete t[e]
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(4),
        o = function(t) {
            this._t = i(t), this._i = 0;
            var e, n = this._k = [];
            for (e in t) n.push(e)
        };
    n(110)(o, "Object", (function() {
        var t, e = this._k;
        do {
            if (this._i >= e.length) return {
                value: void 0,
                done: !0
            }
        } while (!((t = e[this._i++]) in this._t));
        return {
            value: t,
            done: !1
        }
    })), r(r.S, "Reflect", {
        enumerate: function(t) {
            return new o(t)
        }
    })
}, function(t, e, n) {
    var r = n(19),
        i = n(38),
        o = n(14),
        a = n(1),
        s = n(5),
        c = n(4);
    a(a.S, "Reflect", {
        get: function t(e, n) {
            var a, u, l = arguments.length < 3 ? e : arguments[2];
            return c(e) === l ? e[n] : (a = r.f(e, n)) ? o(a, "value") ? a.value : void 0 !== a.get ? a.get.call(l) : void 0 : s(u = i(e)) ? t(u, n, l) : void 0
        }
    })
}, function(t, e, n) {
    var r = n(19),
        i = n(1),
        o = n(4);
    i(i.S, "Reflect", {
        getOwnPropertyDescriptor: function(t, e) {
            return r.f(o(t), e)
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(38),
        o = n(4);
    r(r.S, "Reflect", {
        getPrototypeOf: function(t) {
            return i(o(t))
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Reflect", {
        has: function(t, e) {
            return e in t
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(4),
        o = Object.isExtensible;
    r(r.S, "Reflect", {
        isExtensible: function(t) {
            return i(t), !o || o(t)
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Reflect", {
        ownKeys: n(123)
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(4),
        o = Object.preventExtensions;
    r(r.S, "Reflect", {
        preventExtensions: function(t) {
            i(t);
            try {
                return o && o(t), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    var r = n(9),
        i = n(19),
        o = n(38),
        a = n(14),
        s = n(1),
        c = n(31),
        u = n(4),
        l = n(5);
    s(s.S, "Reflect", {
        set: function t(e, n, s) {
            var f, h, d = arguments.length < 4 ? e : arguments[3],
                p = i.f(u(e), n);
            if (!p) {
                if (l(h = o(e))) return t(h, n, s, d);
                p = c(0)
            }
            if (a(p, "value")) {
                if (!1 === p.writable || !l(d)) return !1;
                if (f = i.f(d, n)) {
                    if (f.get || f.set || !1 === f.writable) return !1;
                    f.value = s, r.f(d, n, f)
                } else r.f(d, n, c(0, s));
                return !0
            }
            return void 0 !== p.set && (p.set.call(d, s), !0)
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(71);
    i && r(r.S, "Reflect", {
        setPrototypeOf: function(t, e) {
            i.check(t, e);
            try {
                return i.set(t, e), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    n(277), t.exports = n(10).Array.includes
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(52)(!0);
    r(r.P, "Array", {
        includes: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(42)("includes")
}, function(t, e, n) {
    n(279), t.exports = n(10).String.padStart
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(124),
        o = n(60),
        a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    r(r.P + r.F * a, "String", {
        padStart: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
        }
    })
}, function(t, e, n) {
    n(281), t.exports = n(10).String.padEnd
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(124),
        o = n(60),
        a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    r(r.P + r.F * a, "String", {
        padEnd: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
        }
    })
}, function(t, e, n) {
    n(283), t.exports = n(66).f("asyncIterator")
}, function(t, e, n) {
    n(97)("asyncIterator")
}, function(t, e, n) {
    n(285), t.exports = n(10).Object.getOwnPropertyDescriptors
}, function(t, e, n) {
    var r = n(1),
        i = n(123),
        o = n(16),
        a = n(19),
        s = n(83);
    r(r.S, "Object", {
        getOwnPropertyDescriptors: function(t) {
            for (var e, n, r = o(t), c = a.f, u = i(r), l = {}, f = 0; u.length > f;) void 0 !== (n = c(r, e = u[f++])) && s(l, e, n);
            return l
        }
    })
}, function(t, e, n) {
    n(287), t.exports = n(10).Object.values
}, function(t, e, n) {
    var r = n(1),
        i = n(125)(!1);
    r(r.S, "Object", {
        values: function(t) {
            return i(t)
        }
    })
}, function(t, e, n) {
    n(289), t.exports = n(10).Object.entries
}, function(t, e, n) {
    var r = n(1),
        i = n(125)(!0);
    r(r.S, "Object", {
        entries: function(t) {
            return i(t)
        }
    })
}, function(t, e, n) {
    "use strict";
    n(117), n(291), t.exports = n(10).Promise.finally
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(10),
        o = n(2),
        a = n(50),
        s = n(119);
    r(r.P + r.R, "Promise", {
        finally: function(t) {
            var e = a(this, i.Promise || o.Promise),
                n = "function" == typeof t;
            return this.then(n ? function(n) {
                return s(e, t()).then((function() {
                    return n
                }))
            } : t, n ? function(n) {
                return s(e, t()).then((function() {
                    throw n
                }))
            } : t)
        }
    })
}, function(t, e, n) {
    n(293), n(294), n(295), t.exports = n(10)
}, function(t, e, n) {
    var r = n(2),
        i = n(1),
        o = n(60),
        a = [].slice,
        s = /MSIE .\./.test(o),
        c = function(t) {
            return function(e, n) {
                var r = arguments.length > 2,
                    i = !!r && a.call(arguments, 2);
                return t(r ? function() {
                    ("function" == typeof e ? e : Function(e)).apply(this, i)
                } : e, n)
            }
        };
    i(i.G + i.B + i.F * s, {
        setTimeout: c(r.setTimeout),
        setInterval: c(r.setInterval)
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(89);
    r(r.G + r.B, {
        setImmediate: i.set,
        clearImmediate: i.clear
    })
}, function(t, e, n) {
    for (var r = n(86), i = n(34), o = n(12), a = n(2), s = n(15), c = n(41), u = n(6), l = u("iterator"), f = u("toStringTag"), h = c.Array, d = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, p = i(d), g = 0; g < p.length; g++) {
        var b, v = p[g],
            m = d[v],
            y = a[v],
            x = y && y.prototype;
        if (x && (x[l] || s(x, l, h), x[f] || s(x, f, v), c[v] = h, m))
            for (b in r) x[b] || o(x, b, r[b], !0)
    }
}, function(t, e) {
    ! function(e) {
        "use strict";
        var n = Object.prototype,
            r = n.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            o = i.iterator || "@@iterator",
            a = i.asyncIterator || "@@asyncIterator",
            s = i.toStringTag || "@@toStringTag",
            c = "object" == typeof t,
            u = e.regeneratorRuntime;
        if (u) c && (t.exports = u);
        else {
            (u = e.regeneratorRuntime = c ? t.exports : {}).wrap = g;
            var l = {},
                f = {};
            f[o] = function() {
                return this
            };
            var h = Object.getPrototypeOf,
                d = h && h(h(M([])));
            d && d !== n && r.call(d, o) && (f = d);
            var p = y.prototype = v.prototype = Object.create(f);
            m.prototype = p.constructor = y, y.constructor = m, y[s] = m.displayName = "GeneratorFunction", u.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
            }, u.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, s in t || (t[s] = "GeneratorFunction")), t.prototype = Object.create(p), t
            }, u.awrap = function(t) {
                return {
                    __await: t
                }
            }, x(_.prototype), _.prototype[a] = function() {
                return this
            }, u.AsyncIterator = _, u.async = function(t, e, n, r) {
                var i = new _(g(t, e, n, r));
                return u.isGeneratorFunction(e) ? i : i.next().then((function(t) {
                    return t.done ? t.value : i.next()
                }))
            }, x(p), p[s] = "Generator", p[o] = function() {
                return this
            }, p.toString = function() {
                return "[object Generator]"
            }, u.keys = function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(),
                    function n() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return n.value = r, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, u.values = M, S.prototype = {
                constructor: S,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(j), !t)
                        for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var e = this;

                    function n(n, r) {
                        return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i],
                            a = o.completion;
                        if ("root" === o.tryLoc) return n("end");
                        if (o.tryLoc <= this.prev) {
                            var s = r.call(o, "catchLoc"),
                                c = r.call(o, "finallyLoc");
                            if (s && c) {
                                if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                            } else if (s) {
                                if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                            } else {
                                if (!c) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var i = this.tryEntries[n];
                        if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), j(n), l
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                j(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: M(t),
                        resultName: e,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = void 0), l
                }
            }
        }

        function g(t, e, n, r) {
            var i = e && e.prototype instanceof v ? e : v,
                o = Object.create(i.prototype),
                a = new S(r || []);
            return o._invoke = function(t, e, n) {
                var r = "suspendedStart";
                return function(i, o) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i) throw o;
                        return k()
                    }
                    for (n.method = i, n.arg = o;;) {
                        var a = n.delegate;
                        if (a) {
                            var s = w(a, n);
                            if (s) {
                                if (s === l) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = b(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            }
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                    }
                }
            }(t, n, a), o
        }

        function b(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }

        function v() {}

        function m() {}

        function y() {}

        function x(t) {
            ["next", "throw", "return"].forEach((function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            }))
        }

        function _(t) {
            var e;
            this._invoke = function(n, i) {
                function o() {
                    return new Promise((function(e, o) {
                        ! function e(n, i, o, a) {
                            var s = b(t[n], t, i);
                            if ("throw" !== s.type) {
                                var c = s.arg,
                                    u = c.value;
                                return u && "object" == typeof u && r.call(u, "__await") ? Promise.resolve(u.__await).then((function(t) {
                                    e("next", t, o, a)
                                }), (function(t) {
                                    e("throw", t, o, a)
                                })) : Promise.resolve(u).then((function(t) {
                                    c.value = t, o(c)
                                }), (function(t) {
                                    return e("throw", t, o, a)
                                }))
                            }
                            a(s.arg)
                        }(n, i, e, o)
                    }))
                }
                return e = e ? e.then(o, o) : o()
            }
        }

        function w(t, e) {
            var n = t.iterator[e.method];
            if (void 0 === n) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return l;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return l
            }
            var r = b(n, t.iterator, e.arg);
            if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
            var i = r.arg;
            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
        }

        function O(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function j(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function S(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(O, this), this.reset(!0)
        }

        function M(t) {
            if (t) {
                var e = t[o];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        i = function e() {
                            for (; ++n < t.length;)
                                if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                    return i.next = i
                }
            }
            return {
                next: k
            }
        }

        function k() {
            return {
                value: void 0,
                done: !0
            }
        }
    }(function() {
        return this || "object" == typeof self && self
    }() || Function("return this")())
}, function(t, e) {
    ! function(t) {
        "use strict";
        if (!t.fetch) {
            var e = "URLSearchParams" in t,
                n = "Symbol" in t && "iterator" in Symbol,
                r = "FileReader" in t && "Blob" in t && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                i = "FormData" in t,
                o = "ArrayBuffer" in t;
            if (o) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                s = function(t) {
                    return t && DataView.prototype.isPrototypeOf(t)
                },
                c = ArrayBuffer.isView || function(t) {
                    return t && a.indexOf(Object.prototype.toString.call(t)) > -1
                };
            p.prototype.append = function(t, e) {
                t = f(t), e = h(e);
                var n = this.map[t];
                this.map[t] = n ? n + "," + e : e
            }, p.prototype.delete = function(t) {
                delete this.map[f(t)]
            }, p.prototype.get = function(t) {
                return t = f(t), this.has(t) ? this.map[t] : null
            }, p.prototype.has = function(t) {
                return this.map.hasOwnProperty(f(t))
            }, p.prototype.set = function(t, e) {
                this.map[f(t)] = h(e)
            }, p.prototype.forEach = function(t, e) {
                for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
            }, p.prototype.keys = function() {
                var t = [];
                return this.forEach((function(e, n) {
                    t.push(n)
                })), d(t)
            }, p.prototype.values = function() {
                var t = [];
                return this.forEach((function(e) {
                    t.push(e)
                })), d(t)
            }, p.prototype.entries = function() {
                var t = [];
                return this.forEach((function(e, n) {
                    t.push([n, e])
                })), d(t)
            }, n && (p.prototype[Symbol.iterator] = p.prototype.entries);
            var u = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            x.prototype.clone = function() {
                return new x(this, {
                    body: this._bodyInit
                })
            }, y.call(x.prototype), y.call(w.prototype), w.prototype.clone = function() {
                return new w(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new p(this.headers),
                    url: this.url
                })
            }, w.error = function() {
                var t = new w(null, {
                    status: 0,
                    statusText: ""
                });
                return t.type = "error", t
            };
            var l = [301, 302, 303, 307, 308];
            w.redirect = function(t, e) {
                if (-1 === l.indexOf(e)) throw new RangeError("Invalid status code");
                return new w(null, {
                    status: e,
                    headers: {
                        location: t
                    }
                })
            }, t.Headers = p, t.Request = x, t.Response = w, t.fetch = function(t, e) {
                return new Promise((function(n, i) {
                    var o = new x(t, e),
                        a = new XMLHttpRequest;
                    a.onload = function() {
                        var t, e, r = {
                            status: a.status,
                            statusText: a.statusText,
                            headers: (t = a.getAllResponseHeaders() || "", e = new p, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                                var n = t.split(":"),
                                    r = n.shift().trim();
                                if (r) {
                                    var i = n.join(":").trim();
                                    e.append(r, i)
                                }
                            })), e)
                        };
                        r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
                        var i = "response" in a ? a.response : a.responseText;
                        n(new w(i, r))
                    }, a.onerror = function() {
                        i(new TypeError("Network request failed"))
                    }, a.ontimeout = function() {
                        i(new TypeError("Network request failed"))
                    }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && r && (a.responseType = "blob"), o.headers.forEach((function(t, e) {
                        a.setRequestHeader(e, t)
                    })), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                }))
            }, t.fetch.polyfill = !0
        }

        function f(t) {
            if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function h(t) {
            return "string" != typeof t && (t = String(t)), t
        }

        function d(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return n && (e[Symbol.iterator] = function() {
                return e
            }), e
        }

        function p(t) {
            this.map = {}, t instanceof p ? t.forEach((function(t, e) {
                this.append(e, t)
            }), this) : Array.isArray(t) ? t.forEach((function(t) {
                this.append(t[0], t[1])
            }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                this.append(e, t[e])
            }), this)
        }

        function g(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function b(t) {
            return new Promise((function(e, n) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    n(t.error)
                }
            }))
        }

        function v(t) {
            var e = new FileReader,
                n = b(e);
            return e.readAsArrayBuffer(t), n
        }

        function m(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function y() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                if (this._bodyInit = t, t)
                    if ("string" == typeof t) this._bodyText = t;
                    else if (r && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                else if (i && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                else if (e && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                else if (o && r && s(t)) this._bodyArrayBuffer = m(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!o || !ArrayBuffer.prototype.isPrototypeOf(t) && !c(t)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = m(t)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, r && (this.blob = function() {
                var t = g(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? g(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(v)
            }), this.text = function() {
                var t, e, n, r = g(this);
                if (r) return r;
                if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, n = b(e), e.readAsText(t), n;
                if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                    for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, i && (this.formData = function() {
                return this.text().then(_)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function x(t, e) {
            var n, r, i = (e = e || {}).body;
            if (t instanceof x) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new p(t.headers)), this.method = t.method, this.mode = t.mode, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new p(e.headers)), this.method = (n = e.method || this.method || "GET", r = n.toUpperCase(), u.indexOf(r) > -1 ? r : n), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(i)
        }

        function _(t) {
            var e = new FormData;
            return t.trim().split("&").forEach((function(t) {
                if (t) {
                    var n = t.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        i = n.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(r), decodeURIComponent(i))
                }
            })), e
        }

        function w(t, e) {
            e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new p(e.headers), this.url = e.url || "", this._initBody(t)
        }
    }("undefined" != typeof self ? self : this)
}, function(t, e, n) {
    var r = n(126);
    t.exports = function(t) {
        if (Array.isArray(t)) return r(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
}, function(t, e, n) {
    var r = function(t) {
        "use strict";
        var e = Object.prototype,
            n = e.hasOwnProperty,
            r = "function" == typeof Symbol ? Symbol : {},
            i = r.iterator || "@@iterator",
            o = r.asyncIterator || "@@asyncIterator",
            a = r.toStringTag || "@@toStringTag";

        function s(t, e, n) {
            return Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e]
        }
        try {
            s({}, "")
        } catch (t) {
            s = function(t, e, n) {
                return t[e] = n
            }
        }

        function c(t, e, n, r) {
            var i = e && e.prototype instanceof f ? e : f,
                o = Object.create(i.prototype),
                a = new O(r || []);
            return o._invoke = function(t, e, n) {
                var r = "suspendedStart";
                return function(i, o) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i) throw o;
                        return S()
                    }
                    for (n.method = i, n.arg = o;;) {
                        var a = n.delegate;
                        if (a) {
                            var s = x(a, n);
                            if (s) {
                                if (s === l) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = u(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                            return {
                                value: c.arg,
                                done: n.done
                            }
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                    }
                }
            }(t, n, a), o
        }

        function u(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = c;
        var l = {};

        function f() {}

        function h() {}

        function d() {}
        var p = {};
        p[i] = function() {
            return this
        };
        var g = Object.getPrototypeOf,
            b = g && g(g(j([])));
        b && b !== e && n.call(b, i) && (p = b);
        var v = d.prototype = f.prototype = Object.create(p);

        function m(t) {
            ["next", "throw", "return"].forEach((function(e) {
                s(t, e, (function(t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function y(t, e) {
            var r;
            this._invoke = function(i, o) {
                function a() {
                    return new e((function(r, a) {
                        ! function r(i, o, a, s) {
                            var c = u(t[i], t, o);
                            if ("throw" !== c.type) {
                                var l = c.arg,
                                    f = l.value;
                                return f && "object" == typeof f && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                    r("next", t, a, s)
                                }), (function(t) {
                                    r("throw", t, a, s)
                                })) : e.resolve(f).then((function(t) {
                                    l.value = t, a(l)
                                }), (function(t) {
                                    return r("throw", t, a, s)
                                }))
                            }
                            s(c.arg)
                        }(i, o, r, a)
                    }))
                }
                return r = r ? r.then(a, a) : a()
            }
        }

        function x(t, e) {
            var n = t.iterator[e.method];
            if (void 0 === n) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return l;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return l
            }
            var r = u(n, t.iterator, e.arg);
            if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
            var i = r.arg;
            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
        }

        function _(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function w(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function O(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(_, this), this.reset(!0)
        }

        function j(t) {
            if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var r = -1,
                        o = function e() {
                            for (; ++r < t.length;)
                                if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                    return o.next = o
                }
            }
            return {
                next: S
            }
        }

        function S() {
            return {
                value: void 0,
                done: !0
            }
        }
        return h.prototype = v.constructor = d, d.constructor = h, h.displayName = s(d, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
        }, t.awrap = function(t) {
            return {
                __await: t
            }
        }, m(y.prototype), y.prototype[o] = function() {
            return this
        }, t.AsyncIterator = y, t.async = function(e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new y(c(e, n, r, i), o);
            return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, m(v), s(v, a, "Generator"), v[i] = function() {
            return this
        }, v.toString = function() {
            return "[object Generator]"
        }, t.keys = function(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e.reverse(),
                function n() {
                    for (; e.length;) {
                        var r = e.pop();
                        if (r in t) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, t.values = j, O.prototype = {
            constructor: O,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !t)
                    for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function r(n, r) {
                    return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var o = this.tryEntries[i],
                        a = o.completion;
                    if ("root" === o.tryLoc) return r("end");
                    if (o.tryLoc <= this.prev) {
                        var s = n.call(o, "catchLoc"),
                            c = n.call(o, "finallyLoc");
                        if (s && c) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                        } else if (s) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                        } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var i = this.tryEntries[r];
                    if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var o = i;
                        break
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), w(n), l
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            w(n)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, n) {
                return this.delegate = {
                    iterator: j(t),
                    resultName: e,
                    nextLoc: n
                }, "next" === this.method && (this.arg = void 0), l
            }
        }, t
    }(t.exports);
    try {
        regeneratorRuntime = r
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}, function(t, e) {
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
        var e = this;
        do {
            if (e.matches(t)) return e;
            e = e.parentElement || e.parentNode
        } while (null !== e && 1 === e.nodeType);
        return null
    })
}, function(t, e) {
    ! function() {
        if ("undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof HTMLElement) {
            var t = !1;
            try {
                var e = document.createElement("div");
                e.addEventListener("focus", (function(t) {
                    t.preventDefault(), t.stopPropagation()
                }), !0), e.focus(Object.defineProperty({}, "preventScroll", {
                    get: function() {
                        if (navigator && void 0 !== navigator.userAgent && navigator.userAgent && navigator.userAgent.match(/Edge\/1[7-8]/)) return t = !1;
                        t = !0
                    }
                }))
            } catch (t) {}
            if (void 0 === HTMLElement.prototype.nativeFocus && !t) {
                HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;
                var n = function(t) {
                    for (var e = 0; e < t.length; e++) t[e][0].scrollTop = t[e][1], t[e][0].scrollLeft = t[e][2];
                    t = []
                };
                HTMLElement.prototype.focus = function(t) {
                    if (t && t.preventScroll) {
                        var e = function(t) {
                            for (var e = t.parentNode, n = [], r = document.scrollingElement || document.documentElement; e && e !== r;)(e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && n.push([e, e.scrollTop, e.scrollLeft]), e = e.parentNode;
                            return e = r, n.push([e, e.scrollTop, e.scrollLeft]), n
                        }(this);
                        if ("function" == typeof setTimeout) {
                            var r = this;
                            setTimeout((function() {
                                r.nativeFocus(), n(e)
                            }), 0)
                        } else this.nativeFocus(), n(e)
                    } else this.nativeFocus()
                }
            }
        }
    }()
}, function(t, e, n) {
    var r = {
        "./Account/code/app": [308, 10],
        "./ContentComponents/code/app": [306, 11],
        "./Hero/code/app": [310, 12],
        "./MemberOrganisations/code/app": [311, 13],
        "./Navigation/code/app": [312, 14],
        "./Panels/code/app": [313, 15],
        "./Search/code/app": [309, 16],
        "./TradingData/code/app": [307, 17]
    };

    function i(t) {
        if (!n.o(r, t)) return Promise.resolve().then((function() {
            var e = new Error("Cannot find module '" + t + "'");
            throw e.code = "MODULE_NOT_FOUND", e
        }));
        var e = r[t],
            i = e[0];
        return n.e(e[1]).then((function() {
            return n(i)
        }))
    }
    i.keys = function() {
        return Object.keys(r)
    }, i.id = 304, t.exports = i
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r, i, o = n(30),
        a = n.n(o),
        s = n(63),
        c = n.n(s),
        u = n(92),
        l = n.n(u),
        f = n(128),
        h = n.n(f),
        d = (n(95), n(91)),
        p = n.n(d),
        g = n(46),
        b = n.n(g),
        v = n(93),
        m = n(64),
        y = function t(e) {
            var n = this;
            p()(this, t), b()(this, "onInView", (function() {
                var t = n.element;
                "IMG" === n.elementType ? n.setImageElement(t) : n.setInlineBackgroundImage(t), window.removeEventListener("scroll", n.windowScrollThrottle)
            })), b()(this, "setImageElement", (function(t) {
                t.src = n.getResponsiveImage(t.dataset.src.split(",")), t.onload = function() {
                    return t.classList.add("loaded")
                }
            })), b()(this, "setInlineBackgroundImage", (function(t) {
                var e = document.createElement("img"),
                    r = n.getResponsiveImage(t.dataset.src.split(","));
                e.addEventListener("load", (function() {
                    t.style.backgroundImage = "url('".concat(r, "')"), t.classList.add("loaded")
                })), e.src = r
            })), b()(this, "getResponsiveImage", (function(t) {
                var e = n.element.offsetWidth,
                    r = t.map((function(t) {
                        return parseInt(function(t, e) {
                            e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                            var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                            return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
                        }(t, "w"))
                    })),
                    i = r.reduce((function(t, n) {
                        var r = Math.abs(t - e),
                            i = Math.abs(n - e);
                        return r == i ? t > n ? t : n : i < r ? n : t
                    }));
                return t[r.findIndex((function(t) {
                    return t === i
                }))]
            })), this.element = e, this.elementType = this.element.tagName, Object(m.a)(this.element, this.onInView), this.windowScrollThrottle = Object(v.throttle)((function() {
                return Object(m.a)(n.element, n.onInView)
            }), 100), window.addEventListener("scroll", this.windowScrollThrottle)
        },
        x = n(22),
        _ = n(127);
    n(302), n(303);
    l()(c.a.mark((function t() {
            var e;
            return c.a.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if ("ResizeObserver" in window != !1) {
                            t.next = 5;
                            break
                        }
                        return t.next = 3, n.e(30).then(n.bind(null, 368));
                    case 3:
                        e = t.sent, window.ResizeObserver = e.ResizeObserver;
                    case 5:
                    case "end":
                        return t.stop()
                }
            }), t)
        })))(), t.hot.accept(), h()(), r = function t(e) {
            9 === e.keyCode && (document.body.classList.add("user-is-tabbing"), window.removeEventListener("keydown", t), window.addEventListener("mousedown", i))
        }, i = function t() {
            document.body.classList.remove("user-is-tabbing"), window.removeEventListener("mousedown", t), window.addEventListener("keydown", r)
        }, window.addEventListener("keydown", r),
        function() {
            var t = function(t) {
                    t.forEach((function(t) {
                        t.insertAdjacentHTML("afterend", '<span class="checkbox__box"></span>'), t.parentNode.classList.contains("checkbox") ? t.parentNode.classList.remove("checkbox--vanilla") : (t.parentNode.classList.add("checkbox"), t.parentNode.classList.add("checkbox--list"))
                    }))
                },
                e = a()(document.querySelectorAll(".sitecore-form__checkbox"));
            e.length && t(e);
            var n = a()(document.querySelectorAll("input.sitecore-form__list-input"));
            n.length && t(n);
            var r = a()(document.querySelectorAll("label.sitecore-form__list-input"));
            r.length && r.forEach((function(t) {
                t.classList.add("radio-button"), t.classList.add("radio-button--list"), t.querySelector('input[type="radio"]').insertAdjacentHTML("afterend", '<span class="radio-button__circle"></span>')
            }))
        }(), document.querySelector("[data-chart-container]") && (x.a.register(x.b, x.c), x.a.defaults.font.family = '"Nunito Sans", sans-serif', x.a.defaults.color = _.a.blue, x.a.defaults.plugins.legend.display = !1, x.a.defaults.plugins.tooltip.titleMarginBottom = 12, x.a.defaults.plugins.tooltip.padding = 12, x.a.defaults.plugins.tooltip.bodySpacing = 6), a()(document.querySelectorAll("[data-lazy]")).forEach((function(t) {
            return new y(t)
        })), a()(document.querySelectorAll("[data-component]")).forEach((function(t) {
            var e = t.dataset.component,
                r = t.dataset.feature;
            if (!r) throw Error("Invalid or missing feature");
            n(304)("./".concat(r, "/code/app")).then((function(n) {
                if (!Object.prototype.hasOwnProperty.call(n, e)) throw Error("Invalid component: ".concat(e));
                if (!("function" == typeof n[e])) throw Error("Invalid constructor: ".concat(e));
                return new n[e](t, e)
            }))
        }))
}]);
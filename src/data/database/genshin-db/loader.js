!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define("GenshinDb", [], t)
        : "object" == typeof exports
        ? (exports.GenshinDb = t())
        : (e.GenshinDb = t());
})("undefined" != typeof self ? self : this, function () {
    return (
        (e = {
            780: (e, t, a) => {
                e.exports = a(574)(
                    "H4sIAAAAAAAAA6tWSkksSVSyqq7VUcrMS0mtgDJzE9NTIcziksSSYggzubSoDCpaWpQDYZSlFhVn5ueBOLUA7uXX0k0AAAA="
                );
            },
            574: (e) => {
                "use strict";
                e.exports = function (e) {
                    for (
                        var t =
                                "undefined" != typeof window &&
                                "function" == typeof window.atob
                                    ? window.atob(e)
                                    : Buffer.from(e, "base64").toString(
                                          "binary"
                                      ),
                            a = new Uint8Array(t.length),
                            n = 0;
                        n < t.length;
                        ++n
                    )
                        a[n] = t.charCodeAt(n);
                    return a.buffer;
                };
            },
            360: function (e, t) {
                var a, n;
                void 0 ===
                    (n =
                        "function" ==
                        typeof (a = function () {
                            var e = "undefined" == typeof window,
                                t = new Map(),
                                a = new Map(),
                                n = [];
                            n.total = 0;
                            var r = [],
                                i = [];
                            function s() {
                                t.clear(), a.clear(), (r = []), (i = []);
                            }
                            function o(e) {
                                for (
                                    var t = -9007199254740991, a = e.length - 1;
                                    a >= 0;
                                    --a
                                ) {
                                    var n = e[a];
                                    if (null !== n) {
                                        var r = n.score;
                                        r > t && (t = r);
                                    }
                                }
                                return -9007199254740991 === t ? null : t;
                            }
                            function l(e, t) {
                                var a = e[t];
                                if (void 0 !== a) return a;
                                var n = t;
                                Array.isArray(t) || (n = t.split("."));
                                for (var r = n.length, i = -1; e && ++i < r; )
                                    e = e[n[i]];
                                return e;
                            }
                            function d(e) {
                                return "object" == typeof e;
                            }
                            var h = function () {
                                    var e = [],
                                        t = 0,
                                        a = {};
                                    function n() {
                                        for (
                                            var a = 0, n = e[a], r = 1;
                                            r < t;

                                        ) {
                                            var i = r + 1;
                                            (a = r),
                                                i < t &&
                                                    e[i].score < e[r].score &&
                                                    (a = i),
                                                (e[(a - 1) >> 1] = e[a]),
                                                (r = 1 + (a << 1));
                                        }
                                        for (
                                            var s = (a - 1) >> 1;
                                            a > 0 && n.score < e[s].score;
                                            s = ((a = s) - 1) >> 1
                                        )
                                            e[a] = e[s];
                                        e[a] = n;
                                    }
                                    return (
                                        (a.add = function (a) {
                                            var n = t;
                                            e[t++] = a;
                                            for (
                                                var r = (n - 1) >> 1;
                                                n > 0 && a.score < e[r].score;
                                                r = ((n = r) - 1) >> 1
                                            )
                                                e[n] = e[r];
                                            e[n] = a;
                                        }),
                                        (a.poll = function () {
                                            if (0 !== t) {
                                                var a = e[0];
                                                return (e[0] = e[--t]), n(), a;
                                            }
                                        }),
                                        (a.peek = function (a) {
                                            if (0 !== t) return e[0];
                                        }),
                                        (a.replaceTop = function (t) {
                                            (e[0] = t), n();
                                        }),
                                        a
                                    );
                                },
                                c = h();
                            return (function u(f) {
                                var _ = {
                                    single: function (e, t, a) {
                                        return e
                                            ? (d(e) ||
                                                  (e = _.getPreparedSearch(e)),
                                              t
                                                  ? (d(t) ||
                                                        (t = _.getPrepared(t)),
                                                    ((
                                                        a &&
                                                        void 0 !== a.allowTypo
                                                            ? a.allowTypo
                                                            : !f ||
                                                              void 0 ===
                                                                  f.allowTypo ||
                                                              f.allowTypo
                                                    )
                                                        ? _.algorithm
                                                        : _.algorithmNoTypo)(
                                                        e,
                                                        t,
                                                        e[0]
                                                    ))
                                                  : null)
                                            : null;
                                    },
                                    go: function (e, t, a) {
                                        if (!e) return n;
                                        var r = (e = _.prepareSearch(e))[0],
                                            i =
                                                (a && a.threshold) ||
                                                (f && f.threshold) ||
                                                -9007199254740991,
                                            s =
                                                (a && a.limit) ||
                                                (f && f.limit) ||
                                                9007199254740991,
                                            h = (
                                                a && void 0 !== a.allowTypo
                                                    ? a.allowTypo
                                                    : !f ||
                                                      void 0 === f.allowTypo ||
                                                      f.allowTypo
                                            )
                                                ? _.algorithm
                                                : _.algorithmNoTypo,
                                            u = 0,
                                            p = 0,
                                            g = t.length;
                                        if (a && a.keys)
                                            for (
                                                var m = a.scoreFn || o,
                                                    w = a.keys,
                                                    b = w.length,
                                                    v = g - 1;
                                                v >= 0;
                                                --v
                                            ) {
                                                for (
                                                    var k = t[v],
                                                        y = new Array(b),
                                                        x = b - 1;
                                                    x >= 0;
                                                    --x
                                                )
                                                    (E = l(k, (z = w[x])))
                                                        ? (d(E) ||
                                                              (E =
                                                                  _.getPrepared(
                                                                      E
                                                                  )),
                                                          (y[x] = h(e, E, r)))
                                                        : (y[x] = null);
                                                y.obj = k;
                                                var A = m(y);
                                                null !== A &&
                                                    (A < i ||
                                                        ((y.score = A),
                                                        u < s
                                                            ? (c.add(y), ++u)
                                                            : (++p,
                                                              A >
                                                                  c.peek()
                                                                      .score &&
                                                                  c.replaceTop(
                                                                      y
                                                                  ))));
                                            }
                                        else if (a && a.key) {
                                            var z = a.key;
                                            for (v = g - 1; v >= 0; --v)
                                                (E = l((k = t[v]), z)) &&
                                                    (d(E) ||
                                                        (E = _.getPrepared(E)),
                                                    null !== (R = h(e, E, r)) &&
                                                        (R.score < i ||
                                                            ((R = {
                                                                target: R.target,
                                                                _targetLowerCodes:
                                                                    null,
                                                                _nextBeginningIndexes:
                                                                    null,
                                                                score: R.score,
                                                                indexes:
                                                                    R.indexes,
                                                                obj: k,
                                                            }),
                                                            u < s
                                                                ? (c.add(R),
                                                                  ++u)
                                                                : (++p,
                                                                  R.score >
                                                                      c.peek()
                                                                          .score &&
                                                                      c.replaceTop(
                                                                          R
                                                                      )))));
                                        } else
                                            for (v = g - 1; v >= 0; --v) {
                                                var E, R;
                                                (E = t[v]) &&
                                                    (d(E) ||
                                                        (E = _.getPrepared(E)),
                                                    null !== (R = h(e, E, r)) &&
                                                        (R.score < i ||
                                                            (u < s
                                                                ? (c.add(R),
                                                                  ++u)
                                                                : (++p,
                                                                  R.score >
                                                                      c.peek()
                                                                          .score &&
                                                                      c.replaceTop(
                                                                          R
                                                                      )))));
                                            }
                                        if (0 === u) return n;
                                        var S = new Array(u);
                                        for (v = u - 1; v >= 0; --v)
                                            S[v] = c.poll();
                                        return (S.total = u + p), S;
                                    },
                                    goAsync: function (t, a, r) {
                                        var i = !1,
                                            s = new Promise(function (s, c) {
                                                if (!t) return s(n);
                                                var u = (t =
                                                        _.prepareSearch(t))[0],
                                                    p = h(),
                                                    g = a.length - 1,
                                                    m =
                                                        (r && r.threshold) ||
                                                        (f && f.threshold) ||
                                                        -9007199254740991,
                                                    w =
                                                        (r && r.limit) ||
                                                        (f && f.limit) ||
                                                        9007199254740991,
                                                    b = (
                                                        r &&
                                                        void 0 !== r.allowTypo
                                                            ? r.allowTypo
                                                            : !f ||
                                                              void 0 ===
                                                                  f.allowTypo ||
                                                              f.allowTypo
                                                    )
                                                        ? _.algorithm
                                                        : _.algorithmNoTypo,
                                                    v = 0,
                                                    k = 0;
                                                function y() {
                                                    if (i) return c("canceled");
                                                    var h = Date.now();
                                                    if (r && r.keys)
                                                        for (
                                                            var f =
                                                                    r.scoreFn ||
                                                                    o,
                                                                x = r.keys,
                                                                A = x.length;
                                                            g >= 0;
                                                            --g
                                                        ) {
                                                            for (
                                                                var z = a[g],
                                                                    E =
                                                                        new Array(
                                                                            A
                                                                        ),
                                                                    R = A - 1;
                                                                R >= 0;
                                                                --R
                                                            )
                                                                (N = l(
                                                                    z,
                                                                    (T = x[R])
                                                                ))
                                                                    ? (d(N) ||
                                                                          (N =
                                                                              _.getPrepared(
                                                                                  N
                                                                              )),
                                                                      (E[R] = b(
                                                                          t,
                                                                          N,
                                                                          u
                                                                      )))
                                                                    : (E[R] =
                                                                          null);
                                                            E.obj = z;
                                                            var S = f(E);
                                                            if (
                                                                null !== S &&
                                                                !(S < m) &&
                                                                ((E.score = S),
                                                                v < w
                                                                    ? (p.add(E),
                                                                      ++v)
                                                                    : (++k,
                                                                      S >
                                                                          p.peek()
                                                                              .score &&
                                                                          p.replaceTop(
                                                                              E
                                                                          )),
                                                                g % 1e3 == 0 &&
                                                                    Date.now() -
                                                                        h >=
                                                                        10)
                                                            )
                                                                return void (e
                                                                    ? setImmediate(
                                                                          y
                                                                      )
                                                                    : setTimeout(
                                                                          y
                                                                      ));
                                                        }
                                                    else if (r && r.key) {
                                                        for (
                                                            var T = r.key;
                                                            g >= 0;
                                                            --g
                                                        )
                                                            if (
                                                                (N = l(
                                                                    (z = a[g]),
                                                                    T
                                                                )) &&
                                                                (d(N) ||
                                                                    (N =
                                                                        _.getPrepared(
                                                                            N
                                                                        )),
                                                                null !==
                                                                    (L = b(
                                                                        t,
                                                                        N,
                                                                        u
                                                                    )) &&
                                                                    !(
                                                                        L.score <
                                                                        m
                                                                    ) &&
                                                                    ((L = {
                                                                        target: L.target,
                                                                        _targetLowerCodes:
                                                                            null,
                                                                        _nextBeginningIndexes:
                                                                            null,
                                                                        score: L.score,
                                                                        indexes:
                                                                            L.indexes,
                                                                        obj: z,
                                                                    }),
                                                                    v < w
                                                                        ? (p.add(
                                                                              L
                                                                          ),
                                                                          ++v)
                                                                        : (++k,
                                                                          L.score >
                                                                              p.peek()
                                                                                  .score &&
                                                                              p.replaceTop(
                                                                                  L
                                                                              )),
                                                                    g % 1e3 ==
                                                                        0 &&
                                                                        Date.now() -
                                                                            h >=
                                                                            10))
                                                            )
                                                                return void (e
                                                                    ? setImmediate(
                                                                          y
                                                                      )
                                                                    : setTimeout(
                                                                          y
                                                                      ));
                                                    } else
                                                        for (; g >= 0; --g) {
                                                            var N, L;
                                                            if (
                                                                (N = a[g]) &&
                                                                (d(N) ||
                                                                    (N =
                                                                        _.getPrepared(
                                                                            N
                                                                        )),
                                                                null !==
                                                                    (L = b(
                                                                        t,
                                                                        N,
                                                                        u
                                                                    )) &&
                                                                    !(
                                                                        L.score <
                                                                        m
                                                                    ) &&
                                                                    (v < w
                                                                        ? (p.add(
                                                                              L
                                                                          ),
                                                                          ++v)
                                                                        : (++k,
                                                                          L.score >
                                                                              p.peek()
                                                                                  .score &&
                                                                              p.replaceTop(
                                                                                  L
                                                                              )),
                                                                    g % 1e3 ==
                                                                        0 &&
                                                                        Date.now() -
                                                                            h >=
                                                                            10))
                                                            )
                                                                return void (e
                                                                    ? setImmediate(
                                                                          y
                                                                      )
                                                                    : setTimeout(
                                                                          y
                                                                      ));
                                                        }
                                                    if (0 === v) return s(n);
                                                    for (
                                                        var I = new Array(v),
                                                            O = v - 1;
                                                        O >= 0;
                                                        --O
                                                    )
                                                        I[O] = p.poll();
                                                    (I.total = v + k), s(I);
                                                }
                                                e ? setImmediate(y) : y();
                                            });
                                        return (
                                            (s.cancel = function () {
                                                i = !0;
                                            }),
                                            s
                                        );
                                    },
                                    highlight: function (e, t, a) {
                                        if (null === e) return null;
                                        void 0 === t && (t = "<b>"),
                                            void 0 === a && (a = "</b>");
                                        for (
                                            var n = "",
                                                r = 0,
                                                i = !1,
                                                s = e.target,
                                                o = s.length,
                                                l = e.indexes,
                                                d = 0;
                                            d < o;
                                            ++d
                                        ) {
                                            var h = s[d];
                                            if (l[r] === d) {
                                                if (
                                                    (i || ((i = !0), (n += t)),
                                                    ++r === l.length)
                                                ) {
                                                    n +=
                                                        h + a + s.substr(d + 1);
                                                    break;
                                                }
                                            } else i && ((i = !1), (n += a));
                                            n += h;
                                        }
                                        return n;
                                    },
                                    prepare: function (e) {
                                        if (e)
                                            return {
                                                target: e,
                                                _targetLowerCodes:
                                                    _.prepareLowerCodes(e),
                                                _nextBeginningIndexes: null,
                                                score: null,
                                                indexes: null,
                                                obj: null,
                                            };
                                    },
                                    prepareSlow: function (e) {
                                        if (e)
                                            return {
                                                target: e,
                                                _targetLowerCodes:
                                                    _.prepareLowerCodes(e),
                                                _nextBeginningIndexes:
                                                    _.prepareNextBeginningIndexes(
                                                        e
                                                    ),
                                                score: null,
                                                indexes: null,
                                                obj: null,
                                            };
                                    },
                                    prepareSearch: function (e) {
                                        if (e) return _.prepareLowerCodes(e);
                                    },
                                    getPrepared: function (e) {
                                        if (e.length > 999) return _.prepare(e);
                                        var a = t.get(e);
                                        return (
                                            void 0 !== a ||
                                                ((a = _.prepare(e)),
                                                t.set(e, a)),
                                            a
                                        );
                                    },
                                    getPreparedSearch: function (e) {
                                        if (e.length > 999)
                                            return _.prepareSearch(e);
                                        var t = a.get(e);
                                        return (
                                            void 0 !== t ||
                                                ((t = _.prepareSearch(e)),
                                                a.set(e, t)),
                                            t
                                        );
                                    },
                                    algorithm: function (e, t, a) {
                                        for (
                                            var n = t._targetLowerCodes,
                                                s = e.length,
                                                o = n.length,
                                                l = 0,
                                                d = 0,
                                                h = 0,
                                                c = 0;
                                            ;

                                        ) {
                                            if (a === n[d]) {
                                                if (((r[c++] = d), ++l === s))
                                                    break;
                                                a =
                                                    e[
                                                        0 === h
                                                            ? l
                                                            : h === l
                                                            ? l + 1
                                                            : h === l - 1
                                                            ? l - 1
                                                            : l
                                                    ];
                                            }
                                            if (++d >= o)
                                                for (;;) {
                                                    if (l <= 1) return null;
                                                    if (0 === h) {
                                                        if (a === e[--l])
                                                            continue;
                                                        h = l;
                                                    } else {
                                                        if (1 === h)
                                                            return null;
                                                        if (
                                                            (a =
                                                                e[
                                                                    1 +
                                                                        (l =
                                                                            --h)
                                                                ]) === e[l]
                                                        )
                                                            continue;
                                                    }
                                                    d = r[(c = l) - 1] + 1;
                                                    break;
                                                }
                                        }
                                        l = 0;
                                        var u = 0,
                                            f = !1,
                                            p = 0,
                                            g = t._nextBeginningIndexes;
                                        null === g &&
                                            (g = t._nextBeginningIndexes =
                                                _.prepareNextBeginningIndexes(
                                                    t.target
                                                ));
                                        var m = (d =
                                            0 === r[0] ? 0 : g[r[0] - 1]);
                                        if (d !== o)
                                            for (;;)
                                                if (d >= o) {
                                                    if (l <= 0) {
                                                        if (++u > s - 2) break;
                                                        if (e[u] === e[u + 1])
                                                            continue;
                                                        d = m;
                                                        continue;
                                                    }
                                                    --l, (d = g[i[--p]]);
                                                } else if (
                                                    e[
                                                        0 === u
                                                            ? l
                                                            : u === l
                                                            ? l + 1
                                                            : u === l - 1
                                                            ? l - 1
                                                            : l
                                                    ] === n[d]
                                                ) {
                                                    if (
                                                        ((i[p++] = d),
                                                        ++l === s)
                                                    ) {
                                                        f = !0;
                                                        break;
                                                    }
                                                    ++d;
                                                } else d = g[d];
                                        if (f)
                                            var w = i,
                                                b = p;
                                        else (w = r), (b = c);
                                        for (
                                            var v = 0, k = -1, y = 0;
                                            y < s;
                                            ++y
                                        )
                                            k !== (d = w[y]) - 1 && (v -= d),
                                                (k = d);
                                        for (
                                            f
                                                ? 0 !== u && (v += -20)
                                                : ((v *= 1e3),
                                                  0 !== h && (v += -20)),
                                                v -= o - s,
                                                t.score = v,
                                                t.indexes = new Array(b),
                                                y = b - 1;
                                            y >= 0;
                                            --y
                                        )
                                            t.indexes[y] = w[y];
                                        return t;
                                    },
                                    algorithmNoTypo: function (e, t, a) {
                                        for (
                                            var n = t._targetLowerCodes,
                                                s = e.length,
                                                o = n.length,
                                                l = 0,
                                                d = 0,
                                                h = 0;
                                            ;

                                        ) {
                                            if (a === n[d]) {
                                                if (((r[h++] = d), ++l === s))
                                                    break;
                                                a = e[l];
                                            }
                                            if (++d >= o) return null;
                                        }
                                        l = 0;
                                        var c = !1,
                                            u = 0,
                                            f = t._nextBeginningIndexes;
                                        if (
                                            (null === f &&
                                                (f = t._nextBeginningIndexes =
                                                    _.prepareNextBeginningIndexes(
                                                        t.target
                                                    )),
                                            (d =
                                                0 === r[0]
                                                    ? 0
                                                    : f[r[0] - 1]) !== o)
                                        )
                                            for (;;)
                                                if (d >= o) {
                                                    if (l <= 0) break;
                                                    --l, (d = f[i[--u]]);
                                                } else if (e[l] === n[d]) {
                                                    if (
                                                        ((i[u++] = d),
                                                        ++l === s)
                                                    ) {
                                                        c = !0;
                                                        break;
                                                    }
                                                    ++d;
                                                } else d = f[d];
                                        if (c)
                                            var p = i,
                                                g = u;
                                        else (p = r), (g = h);
                                        for (
                                            var m = 0, w = -1, b = 0;
                                            b < s;
                                            ++b
                                        )
                                            w !== (d = p[b]) - 1 && (m -= d),
                                                (w = d);
                                        for (
                                            c || (m *= 1e3),
                                                m -= o - s,
                                                t.score = m,
                                                t.indexes = new Array(g),
                                                b = g - 1;
                                            b >= 0;
                                            --b
                                        )
                                            t.indexes[b] = p[b];
                                        return t;
                                    },
                                    prepareLowerCodes: function (e) {
                                        for (
                                            var t = e.length,
                                                a = [],
                                                n = e.toLowerCase(),
                                                r = 0;
                                            r < t;
                                            ++r
                                        )
                                            a[r] = n.charCodeAt(r);
                                        return a;
                                    },
                                    prepareBeginningIndexes: function (e) {
                                        for (
                                            var t = e.length,
                                                a = [],
                                                n = 0,
                                                r = !1,
                                                i = !1,
                                                s = 0;
                                            s < t;
                                            ++s
                                        ) {
                                            var o = e.charCodeAt(s),
                                                l = o >= 65 && o <= 90,
                                                d =
                                                    l ||
                                                    (o >= 97 && o <= 122) ||
                                                    (o >= 48 && o <= 57),
                                                h = (l && !r) || !i || !d;
                                            (r = l), (i = d), h && (a[n++] = s);
                                        }
                                        return a;
                                    },
                                    prepareNextBeginningIndexes: function (e) {
                                        for (
                                            var t = e.length,
                                                a =
                                                    _.prepareBeginningIndexes(
                                                        e
                                                    ),
                                                n = [],
                                                r = a[0],
                                                i = 0,
                                                s = 0;
                                            s < t;
                                            ++s
                                        )
                                            r > s
                                                ? (n[s] = r)
                                                : ((r = a[++i]),
                                                  (n[s] =
                                                      void 0 === r ? t : r));
                                        return n;
                                    },
                                    cleanup: s,
                                    new: u,
                                };
                                return _;
                            })();
                        })
                            ? a.apply(t, [])
                            : a) || (e.exports = n);
            },
            591: (e, t, a) => {
                "use strict";
                const {
                        Deflate: n,
                        deflate: r,
                        deflateRaw: i,
                        gzip: s,
                    } = a(555),
                    {
                        Inflate: o,
                        inflate: l,
                        inflateRaw: d,
                        ungzip: h,
                    } = a(843),
                    c = a(619);
                (e.exports.Deflate = n),
                    (e.exports.deflate = r),
                    (e.exports.deflateRaw = i),
                    (e.exports.gzip = s),
                    (e.exports.Inflate = o),
                    (e.exports.inflate = l),
                    (e.exports.inflateRaw = d),
                    (e.exports.ungzip = h),
                    (e.exports.constants = c);
            },
            555: (e, t, a) => {
                "use strict";
                const n = a(405),
                    r = a(236),
                    i = a(373),
                    s = a(898),
                    o = a(292),
                    l = Object.prototype.toString,
                    {
                        Z_NO_FLUSH: d,
                        Z_SYNC_FLUSH: h,
                        Z_FULL_FLUSH: c,
                        Z_FINISH: u,
                        Z_OK: f,
                        Z_STREAM_END: _,
                        Z_DEFAULT_COMPRESSION: p,
                        Z_DEFAULT_STRATEGY: g,
                        Z_DEFLATED: m,
                    } = a(619);
                function w(e) {
                    this.options = r.assign(
                        {
                            level: p,
                            method: m,
                            chunkSize: 16384,
                            windowBits: 15,
                            memLevel: 8,
                            strategy: g,
                        },
                        e || {}
                    );
                    let t = this.options;
                    t.raw && t.windowBits > 0
                        ? (t.windowBits = -t.windowBits)
                        : t.gzip &&
                          t.windowBits > 0 &&
                          t.windowBits < 16 &&
                          (t.windowBits += 16),
                        (this.err = 0),
                        (this.msg = ""),
                        (this.ended = !1),
                        (this.chunks = []),
                        (this.strm = new o()),
                        (this.strm.avail_out = 0);
                    let a = n.deflateInit2(
                        this.strm,
                        t.level,
                        t.method,
                        t.windowBits,
                        t.memLevel,
                        t.strategy
                    );
                    if (a !== f) throw new Error(s[a]);
                    if (
                        (t.header && n.deflateSetHeader(this.strm, t.header),
                        t.dictionary)
                    ) {
                        let e;
                        if (
                            ((e =
                                "string" == typeof t.dictionary
                                    ? i.string2buf(t.dictionary)
                                    : "[object ArrayBuffer]" ===
                                      l.call(t.dictionary)
                                    ? new Uint8Array(t.dictionary)
                                    : t.dictionary),
                            (a = n.deflateSetDictionary(this.strm, e)),
                            a !== f)
                        )
                            throw new Error(s[a]);
                        this._dict_set = !0;
                    }
                }
                function b(e, t) {
                    const a = new w(t);
                    if ((a.push(e, !0), a.err)) throw a.msg || s[a.err];
                    return a.result;
                }
                (w.prototype.push = function (e, t) {
                    const a = this.strm,
                        r = this.options.chunkSize;
                    let s, o;
                    if (this.ended) return !1;
                    for (
                        o = t === ~~t ? t : !0 === t ? u : d,
                            "string" == typeof e
                                ? (a.input = i.string2buf(e))
                                : "[object ArrayBuffer]" === l.call(e)
                                ? (a.input = new Uint8Array(e))
                                : (a.input = e),
                            a.next_in = 0,
                            a.avail_in = a.input.length;
                        ;

                    )
                        if (
                            (0 === a.avail_out &&
                                ((a.output = new Uint8Array(r)),
                                (a.next_out = 0),
                                (a.avail_out = r)),
                            (o === h || o === c) && a.avail_out <= 6)
                        )
                            this.onData(a.output.subarray(0, a.next_out)),
                                (a.avail_out = 0);
                        else {
                            if (((s = n.deflate(a, o)), s === _))
                                return (
                                    a.next_out > 0 &&
                                        this.onData(
                                            a.output.subarray(0, a.next_out)
                                        ),
                                    (s = n.deflateEnd(this.strm)),
                                    this.onEnd(s),
                                    (this.ended = !0),
                                    s === f
                                );
                            if (0 !== a.avail_out) {
                                if (o > 0 && a.next_out > 0)
                                    this.onData(
                                        a.output.subarray(0, a.next_out)
                                    ),
                                        (a.avail_out = 0);
                                else if (0 === a.avail_in) break;
                            } else this.onData(a.output);
                        }
                    return !0;
                }),
                    (w.prototype.onData = function (e) {
                        this.chunks.push(e);
                    }),
                    (w.prototype.onEnd = function (e) {
                        e === f && (this.result = r.flattenChunks(this.chunks)),
                            (this.chunks = []),
                            (this.err = e),
                            (this.msg = this.strm.msg);
                    }),
                    (e.exports.Deflate = w),
                    (e.exports.deflate = b),
                    (e.exports.deflateRaw = function (e, t) {
                        return ((t = t || {}).raw = !0), b(e, t);
                    }),
                    (e.exports.gzip = function (e, t) {
                        return ((t = t || {}).gzip = !0), b(e, t);
                    }),
                    (e.exports.constants = a(619));
            },
            843: (e, t, a) => {
                "use strict";
                const n = a(948),
                    r = a(236),
                    i = a(373),
                    s = a(898),
                    o = a(292),
                    l = a(401),
                    d = Object.prototype.toString,
                    {
                        Z_NO_FLUSH: h,
                        Z_FINISH: c,
                        Z_OK: u,
                        Z_STREAM_END: f,
                        Z_NEED_DICT: _,
                        Z_STREAM_ERROR: p,
                        Z_DATA_ERROR: g,
                        Z_MEM_ERROR: m,
                    } = a(619);
                function w(e) {
                    this.options = r.assign(
                        { chunkSize: 65536, windowBits: 15, to: "" },
                        e || {}
                    );
                    const t = this.options;
                    t.raw &&
                        t.windowBits >= 0 &&
                        t.windowBits < 16 &&
                        ((t.windowBits = -t.windowBits),
                        0 === t.windowBits && (t.windowBits = -15)),
                        !(t.windowBits >= 0 && t.windowBits < 16) ||
                            (e && e.windowBits) ||
                            (t.windowBits += 32),
                        t.windowBits > 15 &&
                            t.windowBits < 48 &&
                            0 == (15 & t.windowBits) &&
                            (t.windowBits |= 15),
                        (this.err = 0),
                        (this.msg = ""),
                        (this.ended = !1),
                        (this.chunks = []),
                        (this.strm = new o()),
                        (this.strm.avail_out = 0);
                    let a = n.inflateInit2(this.strm, t.windowBits);
                    if (a !== u) throw new Error(s[a]);
                    if (
                        ((this.header = new l()),
                        n.inflateGetHeader(this.strm, this.header),
                        t.dictionary &&
                            ("string" == typeof t.dictionary
                                ? (t.dictionary = i.string2buf(t.dictionary))
                                : "[object ArrayBuffer]" ===
                                      d.call(t.dictionary) &&
                                  (t.dictionary = new Uint8Array(t.dictionary)),
                            t.raw &&
                                ((a = n.inflateSetDictionary(
                                    this.strm,
                                    t.dictionary
                                )),
                                a !== u)))
                    )
                        throw new Error(s[a]);
                }
                function b(e, t) {
                    const a = new w(t);
                    if ((a.push(e), a.err)) throw a.msg || s[a.err];
                    return a.result;
                }
                (w.prototype.push = function (e, t) {
                    const a = this.strm,
                        r = this.options.chunkSize,
                        s = this.options.dictionary;
                    let o, l, w;
                    if (this.ended) return !1;
                    for (
                        l = t === ~~t ? t : !0 === t ? c : h,
                            "[object ArrayBuffer]" === d.call(e)
                                ? (a.input = new Uint8Array(e))
                                : (a.input = e),
                            a.next_in = 0,
                            a.avail_in = a.input.length;
                        ;

                    ) {
                        for (
                            0 === a.avail_out &&
                                ((a.output = new Uint8Array(r)),
                                (a.next_out = 0),
                                (a.avail_out = r)),
                                o = n.inflate(a, l),
                                o === _ &&
                                    s &&
                                    ((o = n.inflateSetDictionary(a, s)),
                                    o === u
                                        ? (o = n.inflate(a, l))
                                        : o === g && (o = _));
                            a.avail_in > 0 &&
                            o === f &&
                            a.state.wrap > 0 &&
                            0 !== e[a.next_in];

                        )
                            n.inflateReset(a), (o = n.inflate(a, l));
                        switch (o) {
                            case p:
                            case g:
                            case _:
                            case m:
                                return this.onEnd(o), (this.ended = !0), !1;
                        }
                        if (
                            ((w = a.avail_out),
                            a.next_out && (0 === a.avail_out || o === f))
                        )
                            if ("string" === this.options.to) {
                                let e = i.utf8border(a.output, a.next_out),
                                    t = a.next_out - e,
                                    n = i.buf2string(a.output, e);
                                (a.next_out = t),
                                    (a.avail_out = r - t),
                                    t &&
                                        a.output.set(
                                            a.output.subarray(e, e + t),
                                            0
                                        ),
                                    this.onData(n);
                            } else
                                this.onData(
                                    a.output.length === a.next_out
                                        ? a.output
                                        : a.output.subarray(0, a.next_out)
                                );
                        if (o !== u || 0 !== w) {
                            if (o === f)
                                return (
                                    (o = n.inflateEnd(this.strm)),
                                    this.onEnd(o),
                                    (this.ended = !0),
                                    !0
                                );
                            if (0 === a.avail_in) break;
                        }
                    }
                    return !0;
                }),
                    (w.prototype.onData = function (e) {
                        this.chunks.push(e);
                    }),
                    (w.prototype.onEnd = function (e) {
                        e === u &&
                            ("string" === this.options.to
                                ? (this.result = this.chunks.join(""))
                                : (this.result = r.flattenChunks(this.chunks))),
                            (this.chunks = []),
                            (this.err = e),
                            (this.msg = this.strm.msg);
                    }),
                    (e.exports.Inflate = w),
                    (e.exports.inflate = b),
                    (e.exports.inflateRaw = function (e, t) {
                        return ((t = t || {}).raw = !0), b(e, t);
                    }),
                    (e.exports.ungzip = b),
                    (e.exports.constants = a(619));
            },
            236: (e) => {
                "use strict";
                const t = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
                (e.exports.assign = function (e) {
                    const a = Array.prototype.slice.call(arguments, 1);
                    for (; a.length; ) {
                        const n = a.shift();
                        if (n) {
                            if ("object" != typeof n)
                                throw new TypeError(n + "must be non-object");
                            for (const a in n) t(n, a) && (e[a] = n[a]);
                        }
                    }
                    return e;
                }),
                    (e.exports.flattenChunks = (e) => {
                        let t = 0;
                        for (let a = 0, n = e.length; a < n; a++)
                            t += e[a].length;
                        const a = new Uint8Array(t);
                        for (let t = 0, n = 0, r = e.length; t < r; t++) {
                            let r = e[t];
                            a.set(r, n), (n += r.length);
                        }
                        return a;
                    });
            },
            373: (e) => {
                "use strict";
                let t = !0;
                try {
                    String.fromCharCode.apply(null, new Uint8Array(1));
                } catch (e) {
                    t = !1;
                }
                const a = new Uint8Array(256);
                for (let e = 0; e < 256; e++)
                    a[e] =
                        e >= 252
                            ? 6
                            : e >= 248
                            ? 5
                            : e >= 240
                            ? 4
                            : e >= 224
                            ? 3
                            : e >= 192
                            ? 2
                            : 1;
                (a[254] = a[254] = 1),
                    (e.exports.string2buf = (e) => {
                        if (
                            "function" == typeof TextEncoder &&
                            TextEncoder.prototype.encode
                        )
                            return new TextEncoder().encode(e);
                        let t,
                            a,
                            n,
                            r,
                            i,
                            s = e.length,
                            o = 0;
                        for (r = 0; r < s; r++)
                            (a = e.charCodeAt(r)),
                                55296 == (64512 & a) &&
                                    r + 1 < s &&
                                    ((n = e.charCodeAt(r + 1)),
                                    56320 == (64512 & n) &&
                                        ((a =
                                            65536 +
                                            ((a - 55296) << 10) +
                                            (n - 56320)),
                                        r++)),
                                (o +=
                                    a < 128
                                        ? 1
                                        : a < 2048
                                        ? 2
                                        : a < 65536
                                        ? 3
                                        : 4);
                        for (t = new Uint8Array(o), i = 0, r = 0; i < o; r++)
                            (a = e.charCodeAt(r)),
                                55296 == (64512 & a) &&
                                    r + 1 < s &&
                                    ((n = e.charCodeAt(r + 1)),
                                    56320 == (64512 & n) &&
                                        ((a =
                                            65536 +
                                            ((a - 55296) << 10) +
                                            (n - 56320)),
                                        r++)),
                                a < 128
                                    ? (t[i++] = a)
                                    : a < 2048
                                    ? ((t[i++] = 192 | (a >>> 6)),
                                      (t[i++] = 128 | (63 & a)))
                                    : a < 65536
                                    ? ((t[i++] = 224 | (a >>> 12)),
                                      (t[i++] = 128 | ((a >>> 6) & 63)),
                                      (t[i++] = 128 | (63 & a)))
                                    : ((t[i++] = 240 | (a >>> 18)),
                                      (t[i++] = 128 | ((a >>> 12) & 63)),
                                      (t[i++] = 128 | ((a >>> 6) & 63)),
                                      (t[i++] = 128 | (63 & a)));
                        return t;
                    }),
                    (e.exports.buf2string = (e, n) => {
                        const r = n || e.length;
                        if (
                            "function" == typeof TextDecoder &&
                            TextDecoder.prototype.decode
                        )
                            return new TextDecoder().decode(e.subarray(0, n));
                        let i, s;
                        const o = new Array(2 * r);
                        for (s = 0, i = 0; i < r; ) {
                            let t = e[i++];
                            if (t < 128) {
                                o[s++] = t;
                                continue;
                            }
                            let n = a[t];
                            if (n > 4) (o[s++] = 65533), (i += n - 1);
                            else {
                                for (
                                    t &= 2 === n ? 31 : 3 === n ? 15 : 7;
                                    n > 1 && i < r;

                                )
                                    (t = (t << 6) | (63 & e[i++])), n--;
                                n > 1
                                    ? (o[s++] = 65533)
                                    : t < 65536
                                    ? (o[s++] = t)
                                    : ((t -= 65536),
                                      (o[s++] = 55296 | ((t >> 10) & 1023)),
                                      (o[s++] = 56320 | (1023 & t)));
                            }
                        }
                        return ((e, a) => {
                            if (a < 65534 && e.subarray && t)
                                return String.fromCharCode.apply(
                                    null,
                                    e.length === a ? e : e.subarray(0, a)
                                );
                            let n = "";
                            for (let t = 0; t < a; t++)
                                n += String.fromCharCode(e[t]);
                            return n;
                        })(o, s);
                    }),
                    (e.exports.utf8border = (e, t) => {
                        (t = t || e.length) > e.length && (t = e.length);
                        let n = t - 1;
                        for (; n >= 0 && 128 == (192 & e[n]); ) n--;
                        return n < 0 || 0 === n ? t : n + a[e[n]] > t ? n : t;
                    });
            },
            69: (e) => {
                "use strict";
                e.exports = (e, t, a, n) => {
                    let r = (65535 & e) | 0,
                        i = ((e >>> 16) & 65535) | 0,
                        s = 0;
                    for (; 0 !== a; ) {
                        (s = a > 2e3 ? 2e3 : a), (a -= s);
                        do {
                            (r = (r + t[n++]) | 0), (i = (i + r) | 0);
                        } while (--s);
                        (r %= 65521), (i %= 65521);
                    }
                    return r | (i << 16) | 0;
                };
            },
            619: (e) => {
                "use strict";
                e.exports = {
                    Z_NO_FLUSH: 0,
                    Z_PARTIAL_FLUSH: 1,
                    Z_SYNC_FLUSH: 2,
                    Z_FULL_FLUSH: 3,
                    Z_FINISH: 4,
                    Z_BLOCK: 5,
                    Z_TREES: 6,
                    Z_OK: 0,
                    Z_STREAM_END: 1,
                    Z_NEED_DICT: 2,
                    Z_ERRNO: -1,
                    Z_STREAM_ERROR: -2,
                    Z_DATA_ERROR: -3,
                    Z_MEM_ERROR: -4,
                    Z_BUF_ERROR: -5,
                    Z_NO_COMPRESSION: 0,
                    Z_BEST_SPEED: 1,
                    Z_BEST_COMPRESSION: 9,
                    Z_DEFAULT_COMPRESSION: -1,
                    Z_FILTERED: 1,
                    Z_HUFFMAN_ONLY: 2,
                    Z_RLE: 3,
                    Z_FIXED: 4,
                    Z_DEFAULT_STRATEGY: 0,
                    Z_BINARY: 0,
                    Z_TEXT: 1,
                    Z_UNKNOWN: 2,
                    Z_DEFLATED: 8,
                };
            },
            869: (e) => {
                "use strict";
                const t = new Uint32Array(
                    (() => {
                        let e,
                            t = [];
                        for (var a = 0; a < 256; a++) {
                            e = a;
                            for (var n = 0; n < 8; n++)
                                e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
                            t[a] = e;
                        }
                        return t;
                    })()
                );
                e.exports = (e, a, n, r) => {
                    const i = t,
                        s = r + n;
                    e ^= -1;
                    for (let t = r; t < s; t++)
                        e = (e >>> 8) ^ i[255 & (e ^ a[t])];
                    return -1 ^ e;
                };
            },
            405: (e, t, a) => {
                "use strict";
                const {
                        _tr_init: n,
                        _tr_stored_block: r,
                        _tr_flush_block: i,
                        _tr_tally: s,
                        _tr_align: o,
                    } = a(342),
                    l = a(69),
                    d = a(869),
                    h = a(898),
                    {
                        Z_NO_FLUSH: c,
                        Z_PARTIAL_FLUSH: u,
                        Z_FULL_FLUSH: f,
                        Z_FINISH: _,
                        Z_BLOCK: p,
                        Z_OK: g,
                        Z_STREAM_END: m,
                        Z_STREAM_ERROR: w,
                        Z_DATA_ERROR: b,
                        Z_BUF_ERROR: v,
                        Z_DEFAULT_COMPRESSION: k,
                        Z_FILTERED: y,
                        Z_HUFFMAN_ONLY: x,
                        Z_RLE: A,
                        Z_FIXED: z,
                        Z_DEFAULT_STRATEGY: E,
                        Z_UNKNOWN: R,
                        Z_DEFLATED: S,
                    } = a(619),
                    T = 258,
                    N = 262,
                    L = 103,
                    I = 113,
                    O = 666,
                    C = (e, t) => ((e.msg = h[t]), t),
                    D = (e) => (e << 1) - (e > 4 ? 9 : 0),
                    Z = (e) => {
                        let t = e.length;
                        for (; --t >= 0; ) e[t] = 0;
                    };
                let F = (e, t, a) => ((t << e.hash_shift) ^ a) & e.hash_mask;
                const U = (e) => {
                        const t = e.state;
                        let a = t.pending;
                        a > e.avail_out && (a = e.avail_out),
                            0 !== a &&
                                (e.output.set(
                                    t.pending_buf.subarray(
                                        t.pending_out,
                                        t.pending_out + a
                                    ),
                                    e.next_out
                                ),
                                (e.next_out += a),
                                (t.pending_out += a),
                                (e.total_out += a),
                                (e.avail_out -= a),
                                (t.pending -= a),
                                0 === t.pending && (t.pending_out = 0));
                    },
                    B = (e, t) => {
                        i(
                            e,
                            e.block_start >= 0 ? e.block_start : -1,
                            e.strstart - e.block_start,
                            t
                        ),
                            (e.block_start = e.strstart),
                            U(e.strm);
                    },
                    j = (e, t) => {
                        e.pending_buf[e.pending++] = t;
                    },
                    P = (e, t) => {
                        (e.pending_buf[e.pending++] = (t >>> 8) & 255),
                            (e.pending_buf[e.pending++] = 255 & t);
                    },
                    H = (e, t, a, n) => {
                        let r = e.avail_in;
                        return (
                            r > n && (r = n),
                            0 === r
                                ? 0
                                : ((e.avail_in -= r),
                                  t.set(
                                      e.input.subarray(
                                          e.next_in,
                                          e.next_in + r
                                      ),
                                      a
                                  ),
                                  1 === e.state.wrap
                                      ? (e.adler = l(e.adler, t, r, a))
                                      : 2 === e.state.wrap &&
                                        (e.adler = d(e.adler, t, r, a)),
                                  (e.next_in += r),
                                  (e.total_in += r),
                                  r)
                        );
                    },
                    $ = (e, t) => {
                        let a,
                            n,
                            r = e.max_chain_length,
                            i = e.strstart,
                            s = e.prev_length,
                            o = e.nice_match;
                        const l =
                                e.strstart > e.w_size - N
                                    ? e.strstart - (e.w_size - N)
                                    : 0,
                            d = e.window,
                            h = e.w_mask,
                            c = e.prev,
                            u = e.strstart + T;
                        let f = d[i + s - 1],
                            _ = d[i + s];
                        e.prev_length >= e.good_match && (r >>= 2),
                            o > e.lookahead && (o = e.lookahead);
                        do {
                            if (
                                ((a = t),
                                d[a + s] === _ &&
                                    d[a + s - 1] === f &&
                                    d[a] === d[i] &&
                                    d[++a] === d[i + 1])
                            ) {
                                (i += 2), a++;
                                do {} while (
                                    d[++i] === d[++a] &&
                                    d[++i] === d[++a] &&
                                    d[++i] === d[++a] &&
                                    d[++i] === d[++a] &&
                                    d[++i] === d[++a] &&
                                    d[++i] === d[++a] &&
                                    d[++i] === d[++a] &&
                                    d[++i] === d[++a] &&
                                    i < u
                                );
                                if (((n = T - (u - i)), (i = u - T), n > s)) {
                                    if (((e.match_start = t), (s = n), n >= o))
                                        break;
                                    (f = d[i + s - 1]), (_ = d[i + s]);
                                }
                            }
                        } while ((t = c[t & h]) > l && 0 != --r);
                        return s <= e.lookahead ? s : e.lookahead;
                    },
                    M = (e) => {
                        const t = e.w_size;
                        let a, n, r, i, s;
                        do {
                            if (
                                ((i = e.window_size - e.lookahead - e.strstart),
                                e.strstart >= t + (t - N))
                            ) {
                                e.window.set(e.window.subarray(t, t + t), 0),
                                    (e.match_start -= t),
                                    (e.strstart -= t),
                                    (e.block_start -= t),
                                    (n = e.hash_size),
                                    (a = n);
                                do {
                                    (r = e.head[--a]),
                                        (e.head[a] = r >= t ? r - t : 0);
                                } while (--n);
                                (n = t), (a = n);
                                do {
                                    (r = e.prev[--a]),
                                        (e.prev[a] = r >= t ? r - t : 0);
                                } while (--n);
                                i += t;
                            }
                            if (0 === e.strm.avail_in) break;
                            if (
                                ((n = H(
                                    e.strm,
                                    e.window,
                                    e.strstart + e.lookahead,
                                    i
                                )),
                                (e.lookahead += n),
                                e.lookahead + e.insert >= 3)
                            )
                                for (
                                    s = e.strstart - e.insert,
                                        e.ins_h = e.window[s],
                                        e.ins_h = F(
                                            e,
                                            e.ins_h,
                                            e.window[s + 1]
                                        );
                                    e.insert &&
                                    ((e.ins_h = F(
                                        e,
                                        e.ins_h,
                                        e.window[s + 3 - 1]
                                    )),
                                    (e.prev[s & e.w_mask] = e.head[e.ins_h]),
                                    (e.head[e.ins_h] = s),
                                    s++,
                                    e.insert--,
                                    !(e.lookahead + e.insert < 3));

                                );
                        } while (e.lookahead < N && 0 !== e.strm.avail_in);
                    },
                    W = (e, t) => {
                        let a, n;
                        for (;;) {
                            if (e.lookahead < N) {
                                if ((M(e), e.lookahead < N && t === c))
                                    return 1;
                                if (0 === e.lookahead) break;
                            }
                            if (
                                ((a = 0),
                                e.lookahead >= 3 &&
                                    ((e.ins_h = F(
                                        e,
                                        e.ins_h,
                                        e.window[e.strstart + 3 - 1]
                                    )),
                                    (a = e.prev[e.strstart & e.w_mask] =
                                        e.head[e.ins_h]),
                                    (e.head[e.ins_h] = e.strstart)),
                                0 !== a &&
                                    e.strstart - a <= e.w_size - N &&
                                    (e.match_length = $(e, a)),
                                e.match_length >= 3)
                            )
                                if (
                                    ((n = s(
                                        e,
                                        e.strstart - e.match_start,
                                        e.match_length - 3
                                    )),
                                    (e.lookahead -= e.match_length),
                                    e.match_length <= e.max_lazy_match &&
                                        e.lookahead >= 3)
                                ) {
                                    e.match_length--;
                                    do {
                                        e.strstart++,
                                            (e.ins_h = F(
                                                e,
                                                e.ins_h,
                                                e.window[e.strstart + 3 - 1]
                                            )),
                                            (a = e.prev[e.strstart & e.w_mask] =
                                                e.head[e.ins_h]),
                                            (e.head[e.ins_h] = e.strstart);
                                    } while (0 != --e.match_length);
                                    e.strstart++;
                                } else
                                    (e.strstart += e.match_length),
                                        (e.match_length = 0),
                                        (e.ins_h = e.window[e.strstart]),
                                        (e.ins_h = F(
                                            e,
                                            e.ins_h,
                                            e.window[e.strstart + 1]
                                        ));
                            else
                                (n = s(e, 0, e.window[e.strstart])),
                                    e.lookahead--,
                                    e.strstart++;
                            if (n && (B(e, !1), 0 === e.strm.avail_out))
                                return 1;
                        }
                        return (
                            (e.insert = e.strstart < 2 ? e.strstart : 2),
                            t === _
                                ? (B(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                                : e.last_lit &&
                                  (B(e, !1), 0 === e.strm.avail_out)
                                ? 1
                                : 2
                        );
                    },
                    K = (e, t) => {
                        let a, n, r;
                        for (;;) {
                            if (e.lookahead < N) {
                                if ((M(e), e.lookahead < N && t === c))
                                    return 1;
                                if (0 === e.lookahead) break;
                            }
                            if (
                                ((a = 0),
                                e.lookahead >= 3 &&
                                    ((e.ins_h = F(
                                        e,
                                        e.ins_h,
                                        e.window[e.strstart + 3 - 1]
                                    )),
                                    (a = e.prev[e.strstart & e.w_mask] =
                                        e.head[e.ins_h]),
                                    (e.head[e.ins_h] = e.strstart)),
                                (e.prev_length = e.match_length),
                                (e.prev_match = e.match_start),
                                (e.match_length = 2),
                                0 !== a &&
                                    e.prev_length < e.max_lazy_match &&
                                    e.strstart - a <= e.w_size - N &&
                                    ((e.match_length = $(e, a)),
                                    e.match_length <= 5 &&
                                        (e.strategy === y ||
                                            (3 === e.match_length &&
                                                e.strstart - e.match_start >
                                                    4096)) &&
                                        (e.match_length = 2)),
                                e.prev_length >= 3 &&
                                    e.match_length <= e.prev_length)
                            ) {
                                (r = e.strstart + e.lookahead - 3),
                                    (n = s(
                                        e,
                                        e.strstart - 1 - e.prev_match,
                                        e.prev_length - 3
                                    )),
                                    (e.lookahead -= e.prev_length - 1),
                                    (e.prev_length -= 2);
                                do {
                                    ++e.strstart <= r &&
                                        ((e.ins_h = F(
                                            e,
                                            e.ins_h,
                                            e.window[e.strstart + 3 - 1]
                                        )),
                                        (a = e.prev[e.strstart & e.w_mask] =
                                            e.head[e.ins_h]),
                                        (e.head[e.ins_h] = e.strstart));
                                } while (0 != --e.prev_length);
                                if (
                                    ((e.match_available = 0),
                                    (e.match_length = 2),
                                    e.strstart++,
                                    n && (B(e, !1), 0 === e.strm.avail_out))
                                )
                                    return 1;
                            } else if (e.match_available) {
                                if (
                                    ((n = s(e, 0, e.window[e.strstart - 1])),
                                    n && B(e, !1),
                                    e.strstart++,
                                    e.lookahead--,
                                    0 === e.strm.avail_out)
                                )
                                    return 1;
                            } else
                                (e.match_available = 1),
                                    e.strstart++,
                                    e.lookahead--;
                        }
                        return (
                            e.match_available &&
                                ((n = s(e, 0, e.window[e.strstart - 1])),
                                (e.match_available = 0)),
                            (e.insert = e.strstart < 2 ? e.strstart : 2),
                            t === _
                                ? (B(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                                : e.last_lit &&
                                  (B(e, !1), 0 === e.strm.avail_out)
                                ? 1
                                : 2
                        );
                    };
                function G(e, t, a, n, r) {
                    (this.good_length = e),
                        (this.max_lazy = t),
                        (this.nice_length = a),
                        (this.max_chain = n),
                        (this.func = r);
                }
                const J = [
                    new G(0, 0, 0, 0, (e, t) => {
                        let a = 65535;
                        for (
                            a > e.pending_buf_size - 5 &&
                            (a = e.pending_buf_size - 5);
                            ;

                        ) {
                            if (e.lookahead <= 1) {
                                if ((M(e), 0 === e.lookahead && t === c))
                                    return 1;
                                if (0 === e.lookahead) break;
                            }
                            (e.strstart += e.lookahead), (e.lookahead = 0);
                            const n = e.block_start + a;
                            if (
                                (0 === e.strstart || e.strstart >= n) &&
                                ((e.lookahead = e.strstart - n),
                                (e.strstart = n),
                                B(e, !1),
                                0 === e.strm.avail_out)
                            )
                                return 1;
                            if (
                                e.strstart - e.block_start >= e.w_size - N &&
                                (B(e, !1), 0 === e.strm.avail_out)
                            )
                                return 1;
                        }
                        return (
                            (e.insert = 0),
                            t === _
                                ? (B(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                                : (e.strstart > e.block_start &&
                                      (B(e, !1), e.strm.avail_out),
                                  1)
                        );
                    }),
                    new G(4, 4, 8, 4, W),
                    new G(4, 5, 16, 8, W),
                    new G(4, 6, 32, 32, W),
                    new G(4, 4, 16, 16, K),
                    new G(8, 16, 32, 32, K),
                    new G(8, 16, 128, 128, K),
                    new G(8, 32, 128, 256, K),
                    new G(32, 128, 258, 1024, K),
                    new G(32, 258, 258, 4096, K),
                ];
                function q() {
                    (this.strm = null),
                        (this.status = 0),
                        (this.pending_buf = null),
                        (this.pending_buf_size = 0),
                        (this.pending_out = 0),
                        (this.pending = 0),
                        (this.wrap = 0),
                        (this.gzhead = null),
                        (this.gzindex = 0),
                        (this.method = S),
                        (this.last_flush = -1),
                        (this.w_size = 0),
                        (this.w_bits = 0),
                        (this.w_mask = 0),
                        (this.window = null),
                        (this.window_size = 0),
                        (this.prev = null),
                        (this.head = null),
                        (this.ins_h = 0),
                        (this.hash_size = 0),
                        (this.hash_bits = 0),
                        (this.hash_mask = 0),
                        (this.hash_shift = 0),
                        (this.block_start = 0),
                        (this.match_length = 0),
                        (this.prev_match = 0),
                        (this.match_available = 0),
                        (this.strstart = 0),
                        (this.match_start = 0),
                        (this.lookahead = 0),
                        (this.prev_length = 0),
                        (this.max_chain_length = 0),
                        (this.max_lazy_match = 0),
                        (this.level = 0),
                        (this.strategy = 0),
                        (this.good_match = 0),
                        (this.nice_match = 0),
                        (this.dyn_ltree = new Uint16Array(1146)),
                        (this.dyn_dtree = new Uint16Array(122)),
                        (this.bl_tree = new Uint16Array(78)),
                        Z(this.dyn_ltree),
                        Z(this.dyn_dtree),
                        Z(this.bl_tree),
                        (this.l_desc = null),
                        (this.d_desc = null),
                        (this.bl_desc = null),
                        (this.bl_count = new Uint16Array(16)),
                        (this.heap = new Uint16Array(573)),
                        Z(this.heap),
                        (this.heap_len = 0),
                        (this.heap_max = 0),
                        (this.depth = new Uint16Array(573)),
                        Z(this.depth),
                        (this.l_buf = 0),
                        (this.lit_bufsize = 0),
                        (this.last_lit = 0),
                        (this.d_buf = 0),
                        (this.opt_len = 0),
                        (this.static_len = 0),
                        (this.matches = 0),
                        (this.insert = 0),
                        (this.bi_buf = 0),
                        (this.bi_valid = 0);
                }
                const Y = (e) => {
                        if (!e || !e.state) return C(e, w);
                        (e.total_in = e.total_out = 0), (e.data_type = R);
                        const t = e.state;
                        return (
                            (t.pending = 0),
                            (t.pending_out = 0),
                            t.wrap < 0 && (t.wrap = -t.wrap),
                            (t.status = t.wrap ? 42 : I),
                            (e.adler = 2 === t.wrap ? 0 : 1),
                            (t.last_flush = c),
                            n(t),
                            g
                        );
                    },
                    V = (e) => {
                        const t = Y(e);
                        var a;
                        return (
                            t === g &&
                                (((a = e.state).window_size = 2 * a.w_size),
                                Z(a.head),
                                (a.max_lazy_match = J[a.level].max_lazy),
                                (a.good_match = J[a.level].good_length),
                                (a.nice_match = J[a.level].nice_length),
                                (a.max_chain_length = J[a.level].max_chain),
                                (a.strstart = 0),
                                (a.block_start = 0),
                                (a.lookahead = 0),
                                (a.insert = 0),
                                (a.match_length = a.prev_length = 2),
                                (a.match_available = 0),
                                (a.ins_h = 0)),
                            t
                        );
                    },
                    X = (e, t, a, n, r, i) => {
                        if (!e) return w;
                        let s = 1;
                        if (
                            (t === k && (t = 6),
                            n < 0
                                ? ((s = 0), (n = -n))
                                : n > 15 && ((s = 2), (n -= 16)),
                            r < 1 ||
                                r > 9 ||
                                a !== S ||
                                n < 8 ||
                                n > 15 ||
                                t < 0 ||
                                t > 9 ||
                                i < 0 ||
                                i > z)
                        )
                            return C(e, w);
                        8 === n && (n = 9);
                        const o = new q();
                        return (
                            (e.state = o),
                            (o.strm = e),
                            (o.wrap = s),
                            (o.gzhead = null),
                            (o.w_bits = n),
                            (o.w_size = 1 << o.w_bits),
                            (o.w_mask = o.w_size - 1),
                            (o.hash_bits = r + 7),
                            (o.hash_size = 1 << o.hash_bits),
                            (o.hash_mask = o.hash_size - 1),
                            (o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3)),
                            (o.window = new Uint8Array(2 * o.w_size)),
                            (o.head = new Uint16Array(o.hash_size)),
                            (o.prev = new Uint16Array(o.w_size)),
                            (o.lit_bufsize = 1 << (r + 6)),
                            (o.pending_buf_size = 4 * o.lit_bufsize),
                            (o.pending_buf = new Uint8Array(
                                o.pending_buf_size
                            )),
                            (o.d_buf = 1 * o.lit_bufsize),
                            (o.l_buf = 3 * o.lit_bufsize),
                            (o.level = t),
                            (o.strategy = i),
                            (o.method = a),
                            V(e)
                        );
                    };
                (e.exports.deflateInit = (e, t) => X(e, t, S, 15, 8, E)),
                    (e.exports.deflateInit2 = X),
                    (e.exports.deflateReset = V),
                    (e.exports.deflateResetKeep = Y),
                    (e.exports.deflateSetHeader = (e, t) =>
                        e && e.state
                            ? 2 !== e.state.wrap
                                ? w
                                : ((e.state.gzhead = t), g)
                            : w),
                    (e.exports.deflate = (e, t) => {
                        let a, n;
                        if (!e || !e.state || t > p || t < 0)
                            return e ? C(e, w) : w;
                        const i = e.state;
                        if (
                            !e.output ||
                            (!e.input && 0 !== e.avail_in) ||
                            (i.status === O && t !== _)
                        )
                            return C(e, 0 === e.avail_out ? v : w);
                        i.strm = e;
                        const l = i.last_flush;
                        if (((i.last_flush = t), 42 === i.status))
                            if (2 === i.wrap)
                                (e.adler = 0),
                                    j(i, 31),
                                    j(i, 139),
                                    j(i, 8),
                                    i.gzhead
                                        ? (j(
                                              i,
                                              (i.gzhead.text ? 1 : 0) +
                                                  (i.gzhead.hcrc ? 2 : 0) +
                                                  (i.gzhead.extra ? 4 : 0) +
                                                  (i.gzhead.name ? 8 : 0) +
                                                  (i.gzhead.comment ? 16 : 0)
                                          ),
                                          j(i, 255 & i.gzhead.time),
                                          j(i, (i.gzhead.time >> 8) & 255),
                                          j(i, (i.gzhead.time >> 16) & 255),
                                          j(i, (i.gzhead.time >> 24) & 255),
                                          j(
                                              i,
                                              9 === i.level
                                                  ? 2
                                                  : i.strategy >= x ||
                                                    i.level < 2
                                                  ? 4
                                                  : 0
                                          ),
                                          j(i, 255 & i.gzhead.os),
                                          i.gzhead.extra &&
                                              i.gzhead.extra.length &&
                                              (j(
                                                  i,
                                                  255 & i.gzhead.extra.length
                                              ),
                                              j(
                                                  i,
                                                  (i.gzhead.extra.length >> 8) &
                                                      255
                                              )),
                                          i.gzhead.hcrc &&
                                              (e.adler = d(
                                                  e.adler,
                                                  i.pending_buf,
                                                  i.pending,
                                                  0
                                              )),
                                          (i.gzindex = 0),
                                          (i.status = 69))
                                        : (j(i, 0),
                                          j(i, 0),
                                          j(i, 0),
                                          j(i, 0),
                                          j(i, 0),
                                          j(
                                              i,
                                              9 === i.level
                                                  ? 2
                                                  : i.strategy >= x ||
                                                    i.level < 2
                                                  ? 4
                                                  : 0
                                          ),
                                          j(i, 3),
                                          (i.status = I));
                            else {
                                let t = (S + ((i.w_bits - 8) << 4)) << 8,
                                    a = -1;
                                (a =
                                    i.strategy >= x || i.level < 2
                                        ? 0
                                        : i.level < 6
                                        ? 1
                                        : 6 === i.level
                                        ? 2
                                        : 3),
                                    (t |= a << 6),
                                    0 !== i.strstart && (t |= 32),
                                    (t += 31 - (t % 31)),
                                    (i.status = I),
                                    P(i, t),
                                    0 !== i.strstart &&
                                        (P(i, e.adler >>> 16),
                                        P(i, 65535 & e.adler)),
                                    (e.adler = 1);
                            }
                        if (69 === i.status)
                            if (i.gzhead.extra) {
                                for (
                                    a = i.pending;
                                    i.gzindex <
                                        (65535 & i.gzhead.extra.length) &&
                                    (i.pending !== i.pending_buf_size ||
                                        (i.gzhead.hcrc &&
                                            i.pending > a &&
                                            (e.adler = d(
                                                e.adler,
                                                i.pending_buf,
                                                i.pending - a,
                                                a
                                            )),
                                        U(e),
                                        (a = i.pending),
                                        i.pending !== i.pending_buf_size));

                                )
                                    j(i, 255 & i.gzhead.extra[i.gzindex]),
                                        i.gzindex++;
                                i.gzhead.hcrc &&
                                    i.pending > a &&
                                    (e.adler = d(
                                        e.adler,
                                        i.pending_buf,
                                        i.pending - a,
                                        a
                                    )),
                                    i.gzindex === i.gzhead.extra.length &&
                                        ((i.gzindex = 0), (i.status = 73));
                            } else i.status = 73;
                        if (73 === i.status)
                            if (i.gzhead.name) {
                                a = i.pending;
                                do {
                                    if (
                                        i.pending === i.pending_buf_size &&
                                        (i.gzhead.hcrc &&
                                            i.pending > a &&
                                            (e.adler = d(
                                                e.adler,
                                                i.pending_buf,
                                                i.pending - a,
                                                a
                                            )),
                                        U(e),
                                        (a = i.pending),
                                        i.pending === i.pending_buf_size)
                                    ) {
                                        n = 1;
                                        break;
                                    }
                                    (n =
                                        i.gzindex < i.gzhead.name.length
                                            ? 255 &
                                              i.gzhead.name.charCodeAt(
                                                  i.gzindex++
                                              )
                                            : 0),
                                        j(i, n);
                                } while (0 !== n);
                                i.gzhead.hcrc &&
                                    i.pending > a &&
                                    (e.adler = d(
                                        e.adler,
                                        i.pending_buf,
                                        i.pending - a,
                                        a
                                    )),
                                    0 === n &&
                                        ((i.gzindex = 0), (i.status = 91));
                            } else i.status = 91;
                        if (91 === i.status)
                            if (i.gzhead.comment) {
                                a = i.pending;
                                do {
                                    if (
                                        i.pending === i.pending_buf_size &&
                                        (i.gzhead.hcrc &&
                                            i.pending > a &&
                                            (e.adler = d(
                                                e.adler,
                                                i.pending_buf,
                                                i.pending - a,
                                                a
                                            )),
                                        U(e),
                                        (a = i.pending),
                                        i.pending === i.pending_buf_size)
                                    ) {
                                        n = 1;
                                        break;
                                    }
                                    (n =
                                        i.gzindex < i.gzhead.comment.length
                                            ? 255 &
                                              i.gzhead.comment.charCodeAt(
                                                  i.gzindex++
                                              )
                                            : 0),
                                        j(i, n);
                                } while (0 !== n);
                                i.gzhead.hcrc &&
                                    i.pending > a &&
                                    (e.adler = d(
                                        e.adler,
                                        i.pending_buf,
                                        i.pending - a,
                                        a
                                    )),
                                    0 === n && (i.status = L);
                            } else i.status = L;
                        if (
                            (i.status === L &&
                                (i.gzhead.hcrc
                                    ? (i.pending + 2 > i.pending_buf_size &&
                                          U(e),
                                      i.pending + 2 <= i.pending_buf_size &&
                                          (j(i, 255 & e.adler),
                                          j(i, (e.adler >> 8) & 255),
                                          (e.adler = 0),
                                          (i.status = I)))
                                    : (i.status = I)),
                            0 !== i.pending)
                        ) {
                            if ((U(e), 0 === e.avail_out))
                                return (i.last_flush = -1), g;
                        } else if (0 === e.avail_in && D(t) <= D(l) && t !== _)
                            return C(e, v);
                        if (i.status === O && 0 !== e.avail_in) return C(e, v);
                        if (
                            0 !== e.avail_in ||
                            0 !== i.lookahead ||
                            (t !== c && i.status !== O)
                        ) {
                            let a =
                                i.strategy === x
                                    ? ((e, t) => {
                                          let a;
                                          for (;;) {
                                              if (
                                                  0 === e.lookahead &&
                                                  (M(e), 0 === e.lookahead)
                                              ) {
                                                  if (t === c) return 1;
                                                  break;
                                              }
                                              if (
                                                  ((e.match_length = 0),
                                                  (a = s(
                                                      e,
                                                      0,
                                                      e.window[e.strstart]
                                                  )),
                                                  e.lookahead--,
                                                  e.strstart++,
                                                  a &&
                                                      (B(e, !1),
                                                      0 === e.strm.avail_out))
                                              )
                                                  return 1;
                                          }
                                          return (
                                              (e.insert = 0),
                                              t === _
                                                  ? (B(e, !0),
                                                    0 === e.strm.avail_out
                                                        ? 3
                                                        : 4)
                                                  : e.last_lit &&
                                                    (B(e, !1),
                                                    0 === e.strm.avail_out)
                                                  ? 1
                                                  : 2
                                          );
                                      })(i, t)
                                    : i.strategy === A
                                    ? ((e, t) => {
                                          let a, n, r, i;
                                          const o = e.window;
                                          for (;;) {
                                              if (e.lookahead <= T) {
                                                  if (
                                                      (M(e),
                                                      e.lookahead <= T &&
                                                          t === c)
                                                  )
                                                      return 1;
                                                  if (0 === e.lookahead) break;
                                              }
                                              if (
                                                  ((e.match_length = 0),
                                                  e.lookahead >= 3 &&
                                                      e.strstart > 0 &&
                                                      ((r = e.strstart - 1),
                                                      (n = o[r]),
                                                      n === o[++r] &&
                                                          n === o[++r] &&
                                                          n === o[++r]))
                                              ) {
                                                  i = e.strstart + T;
                                                  do {} while (
                                                      n === o[++r] &&
                                                      n === o[++r] &&
                                                      n === o[++r] &&
                                                      n === o[++r] &&
                                                      n === o[++r] &&
                                                      n === o[++r] &&
                                                      n === o[++r] &&
                                                      n === o[++r] &&
                                                      r < i
                                                  );
                                                  (e.match_length =
                                                      T - (i - r)),
                                                      e.match_length >
                                                          e.lookahead &&
                                                          (e.match_length =
                                                              e.lookahead);
                                              }
                                              if (
                                                  (e.match_length >= 3
                                                      ? ((a = s(
                                                            e,
                                                            1,
                                                            e.match_length - 3
                                                        )),
                                                        (e.lookahead -=
                                                            e.match_length),
                                                        (e.strstart +=
                                                            e.match_length),
                                                        (e.match_length = 0))
                                                      : ((a = s(
                                                            e,
                                                            0,
                                                            e.window[e.strstart]
                                                        )),
                                                        e.lookahead--,
                                                        e.strstart++),
                                                  a &&
                                                      (B(e, !1),
                                                      0 === e.strm.avail_out))
                                              )
                                                  return 1;
                                          }
                                          return (
                                              (e.insert = 0),
                                              t === _
                                                  ? (B(e, !0),
                                                    0 === e.strm.avail_out
                                                        ? 3
                                                        : 4)
                                                  : e.last_lit &&
                                                    (B(e, !1),
                                                    0 === e.strm.avail_out)
                                                  ? 1
                                                  : 2
                                          );
                                      })(i, t)
                                    : J[i.level].func(i, t);
                            if (
                                ((3 !== a && 4 !== a) || (i.status = O),
                                1 === a || 3 === a)
                            )
                                return (
                                    0 === e.avail_out && (i.last_flush = -1), g
                                );
                            if (
                                2 === a &&
                                (t === u
                                    ? o(i)
                                    : t !== p &&
                                      (r(i, 0, 0, !1),
                                      t === f &&
                                          (Z(i.head),
                                          0 === i.lookahead &&
                                              ((i.strstart = 0),
                                              (i.block_start = 0),
                                              (i.insert = 0)))),
                                U(e),
                                0 === e.avail_out)
                            )
                                return (i.last_flush = -1), g;
                        }
                        return t !== _
                            ? g
                            : i.wrap <= 0
                            ? m
                            : (2 === i.wrap
                                  ? (j(i, 255 & e.adler),
                                    j(i, (e.adler >> 8) & 255),
                                    j(i, (e.adler >> 16) & 255),
                                    j(i, (e.adler >> 24) & 255),
                                    j(i, 255 & e.total_in),
                                    j(i, (e.total_in >> 8) & 255),
                                    j(i, (e.total_in >> 16) & 255),
                                    j(i, (e.total_in >> 24) & 255))
                                  : (P(i, e.adler >>> 16),
                                    P(i, 65535 & e.adler)),
                              U(e),
                              i.wrap > 0 && (i.wrap = -i.wrap),
                              0 !== i.pending ? g : m);
                    }),
                    (e.exports.deflateEnd = (e) => {
                        if (!e || !e.state) return w;
                        const t = e.state.status;
                        return 42 !== t &&
                            69 !== t &&
                            73 !== t &&
                            91 !== t &&
                            t !== L &&
                            t !== I &&
                            t !== O
                            ? C(e, w)
                            : ((e.state = null), t === I ? C(e, b) : g);
                    }),
                    (e.exports.deflateSetDictionary = (e, t) => {
                        let a = t.length;
                        if (!e || !e.state) return w;
                        const n = e.state,
                            r = n.wrap;
                        if (
                            2 === r ||
                            (1 === r && 42 !== n.status) ||
                            n.lookahead
                        )
                            return w;
                        if (
                            (1 === r && (e.adler = l(e.adler, t, a, 0)),
                            (n.wrap = 0),
                            a >= n.w_size)
                        ) {
                            0 === r &&
                                (Z(n.head),
                                (n.strstart = 0),
                                (n.block_start = 0),
                                (n.insert = 0));
                            let e = new Uint8Array(n.w_size);
                            e.set(t.subarray(a - n.w_size, a), 0),
                                (t = e),
                                (a = n.w_size);
                        }
                        const i = e.avail_in,
                            s = e.next_in,
                            o = e.input;
                        for (
                            e.avail_in = a, e.next_in = 0, e.input = t, M(n);
                            n.lookahead >= 3;

                        ) {
                            let e = n.strstart,
                                t = n.lookahead - 2;
                            do {
                                (n.ins_h = F(n, n.ins_h, n.window[e + 3 - 1])),
                                    (n.prev[e & n.w_mask] = n.head[n.ins_h]),
                                    (n.head[n.ins_h] = e),
                                    e++;
                            } while (--t);
                            (n.strstart = e), (n.lookahead = 2), M(n);
                        }
                        return (
                            (n.strstart += n.lookahead),
                            (n.block_start = n.strstart),
                            (n.insert = n.lookahead),
                            (n.lookahead = 0),
                            (n.match_length = n.prev_length = 2),
                            (n.match_available = 0),
                            (e.next_in = s),
                            (e.input = o),
                            (e.avail_in = i),
                            (n.wrap = r),
                            g
                        );
                    }),
                    (e.exports.deflateInfo =
                        "pako deflate (from Nodeca project)");
            },
            401: (e) => {
                "use strict";
                e.exports = function () {
                    (this.text = 0),
                        (this.time = 0),
                        (this.xflags = 0),
                        (this.os = 0),
                        (this.extra = null),
                        (this.extra_len = 0),
                        (this.name = ""),
                        (this.comment = ""),
                        (this.hcrc = 0),
                        (this.done = !1);
                };
            },
            264: (e) => {
                "use strict";
                e.exports = function (e, t) {
                    let a,
                        n,
                        r,
                        i,
                        s,
                        o,
                        l,
                        d,
                        h,
                        c,
                        u,
                        f,
                        _,
                        p,
                        g,
                        m,
                        w,
                        b,
                        v,
                        k,
                        y,
                        x,
                        A,
                        z;
                    const E = e.state;
                    (a = e.next_in),
                        (A = e.input),
                        (n = a + (e.avail_in - 5)),
                        (r = e.next_out),
                        (z = e.output),
                        (i = r - (t - e.avail_out)),
                        (s = r + (e.avail_out - 257)),
                        (o = E.dmax),
                        (l = E.wsize),
                        (d = E.whave),
                        (h = E.wnext),
                        (c = E.window),
                        (u = E.hold),
                        (f = E.bits),
                        (_ = E.lencode),
                        (p = E.distcode),
                        (g = (1 << E.lenbits) - 1),
                        (m = (1 << E.distbits) - 1);
                    e: do {
                        f < 15 &&
                            ((u += A[a++] << f),
                            (f += 8),
                            (u += A[a++] << f),
                            (f += 8)),
                            (w = _[u & g]);
                        t: for (;;) {
                            if (
                                ((b = w >>> 24),
                                (u >>>= b),
                                (f -= b),
                                (b = (w >>> 16) & 255),
                                0 === b)
                            )
                                z[r++] = 65535 & w;
                            else {
                                if (!(16 & b)) {
                                    if (0 == (64 & b)) {
                                        w =
                                            _[
                                                (65535 & w) +
                                                    (u & ((1 << b) - 1))
                                            ];
                                        continue t;
                                    }
                                    if (32 & b) {
                                        E.mode = 12;
                                        break e;
                                    }
                                    (e.msg = "invalid literal/length code"),
                                        (E.mode = 30);
                                    break e;
                                }
                                (v = 65535 & w),
                                    (b &= 15),
                                    b &&
                                        (f < b &&
                                            ((u += A[a++] << f), (f += 8)),
                                        (v += u & ((1 << b) - 1)),
                                        (u >>>= b),
                                        (f -= b)),
                                    f < 15 &&
                                        ((u += A[a++] << f),
                                        (f += 8),
                                        (u += A[a++] << f),
                                        (f += 8)),
                                    (w = p[u & m]);
                                a: for (;;) {
                                    if (
                                        ((b = w >>> 24),
                                        (u >>>= b),
                                        (f -= b),
                                        (b = (w >>> 16) & 255),
                                        !(16 & b))
                                    ) {
                                        if (0 == (64 & b)) {
                                            w =
                                                p[
                                                    (65535 & w) +
                                                        (u & ((1 << b) - 1))
                                                ];
                                            continue a;
                                        }
                                        (e.msg = "invalid distance code"),
                                            (E.mode = 30);
                                        break e;
                                    }
                                    if (
                                        ((k = 65535 & w),
                                        (b &= 15),
                                        f < b &&
                                            ((u += A[a++] << f),
                                            (f += 8),
                                            f < b &&
                                                ((u += A[a++] << f), (f += 8))),
                                        (k += u & ((1 << b) - 1)),
                                        k > o)
                                    ) {
                                        (e.msg =
                                            "invalid distance too far back"),
                                            (E.mode = 30);
                                        break e;
                                    }
                                    if (
                                        ((u >>>= b),
                                        (f -= b),
                                        (b = r - i),
                                        k > b)
                                    ) {
                                        if (((b = k - b), b > d && E.sane)) {
                                            (e.msg =
                                                "invalid distance too far back"),
                                                (E.mode = 30);
                                            break e;
                                        }
                                        if (((y = 0), (x = c), 0 === h)) {
                                            if (((y += l - b), b < v)) {
                                                v -= b;
                                                do {
                                                    z[r++] = c[y++];
                                                } while (--b);
                                                (y = r - k), (x = z);
                                            }
                                        } else if (h < b) {
                                            if (
                                                ((y += l + h - b),
                                                (b -= h),
                                                b < v)
                                            ) {
                                                v -= b;
                                                do {
                                                    z[r++] = c[y++];
                                                } while (--b);
                                                if (((y = 0), h < v)) {
                                                    (b = h), (v -= b);
                                                    do {
                                                        z[r++] = c[y++];
                                                    } while (--b);
                                                    (y = r - k), (x = z);
                                                }
                                            }
                                        } else if (((y += h - b), b < v)) {
                                            v -= b;
                                            do {
                                                z[r++] = c[y++];
                                            } while (--b);
                                            (y = r - k), (x = z);
                                        }
                                        for (; v > 2; )
                                            (z[r++] = x[y++]),
                                                (z[r++] = x[y++]),
                                                (z[r++] = x[y++]),
                                                (v -= 3);
                                        v &&
                                            ((z[r++] = x[y++]),
                                            v > 1 && (z[r++] = x[y++]));
                                    } else {
                                        y = r - k;
                                        do {
                                            (z[r++] = z[y++]),
                                                (z[r++] = z[y++]),
                                                (z[r++] = z[y++]),
                                                (v -= 3);
                                        } while (v > 2);
                                        v &&
                                            ((z[r++] = z[y++]),
                                            v > 1 && (z[r++] = z[y++]));
                                    }
                                    break;
                                }
                            }
                            break;
                        }
                    } while (a < n && r < s);
                    (v = f >> 3),
                        (a -= v),
                        (f -= v << 3),
                        (u &= (1 << f) - 1),
                        (e.next_in = a),
                        (e.next_out = r),
                        (e.avail_in = a < n ? n - a + 5 : 5 - (a - n)),
                        (e.avail_out = r < s ? s - r + 257 : 257 - (r - s)),
                        (E.hold = u),
                        (E.bits = f);
                };
            },
            948: (e, t, a) => {
                "use strict";
                const n = a(69),
                    r = a(869),
                    i = a(264),
                    s = a(241),
                    {
                        Z_FINISH: o,
                        Z_BLOCK: l,
                        Z_TREES: d,
                        Z_OK: h,
                        Z_STREAM_END: c,
                        Z_NEED_DICT: u,
                        Z_STREAM_ERROR: f,
                        Z_DATA_ERROR: _,
                        Z_MEM_ERROR: p,
                        Z_BUF_ERROR: g,
                        Z_DEFLATED: m,
                    } = a(619),
                    w = 12,
                    b = 30,
                    v = (e) =>
                        ((e >>> 24) & 255) +
                        ((e >>> 8) & 65280) +
                        ((65280 & e) << 8) +
                        ((255 & e) << 24);
                function k() {
                    (this.mode = 0),
                        (this.last = !1),
                        (this.wrap = 0),
                        (this.havedict = !1),
                        (this.flags = 0),
                        (this.dmax = 0),
                        (this.check = 0),
                        (this.total = 0),
                        (this.head = null),
                        (this.wbits = 0),
                        (this.wsize = 0),
                        (this.whave = 0),
                        (this.wnext = 0),
                        (this.window = null),
                        (this.hold = 0),
                        (this.bits = 0),
                        (this.length = 0),
                        (this.offset = 0),
                        (this.extra = 0),
                        (this.lencode = null),
                        (this.distcode = null),
                        (this.lenbits = 0),
                        (this.distbits = 0),
                        (this.ncode = 0),
                        (this.nlen = 0),
                        (this.ndist = 0),
                        (this.have = 0),
                        (this.next = null),
                        (this.lens = new Uint16Array(320)),
                        (this.work = new Uint16Array(288)),
                        (this.lendyn = null),
                        (this.distdyn = null),
                        (this.sane = 0),
                        (this.back = 0),
                        (this.was = 0);
                }
                const y = (e) => {
                        if (!e || !e.state) return f;
                        const t = e.state;
                        return (
                            (e.total_in = e.total_out = t.total = 0),
                            (e.msg = ""),
                            t.wrap && (e.adler = 1 & t.wrap),
                            (t.mode = 1),
                            (t.last = 0),
                            (t.havedict = 0),
                            (t.dmax = 32768),
                            (t.head = null),
                            (t.hold = 0),
                            (t.bits = 0),
                            (t.lencode = t.lendyn = new Int32Array(852)),
                            (t.distcode = t.distdyn = new Int32Array(592)),
                            (t.sane = 1),
                            (t.back = -1),
                            h
                        );
                    },
                    x = (e) => {
                        if (!e || !e.state) return f;
                        const t = e.state;
                        return (
                            (t.wsize = 0), (t.whave = 0), (t.wnext = 0), y(e)
                        );
                    },
                    A = (e, t) => {
                        let a;
                        if (!e || !e.state) return f;
                        const n = e.state;
                        return (
                            t < 0
                                ? ((a = 0), (t = -t))
                                : ((a = 1 + (t >> 4)), t < 48 && (t &= 15)),
                            t && (t < 8 || t > 15)
                                ? f
                                : (null !== n.window &&
                                      n.wbits !== t &&
                                      (n.window = null),
                                  (n.wrap = a),
                                  (n.wbits = t),
                                  x(e))
                        );
                    },
                    z = (e, t) => {
                        if (!e) return f;
                        const a = new k();
                        (e.state = a), (a.window = null);
                        const n = A(e, t);
                        return n !== h && (e.state = null), n;
                    };
                let E,
                    R,
                    S = !0;
                const T = (e) => {
                        if (S) {
                            (E = new Int32Array(512)), (R = new Int32Array(32));
                            let t = 0;
                            for (; t < 144; ) e.lens[t++] = 8;
                            for (; t < 256; ) e.lens[t++] = 9;
                            for (; t < 280; ) e.lens[t++] = 7;
                            for (; t < 288; ) e.lens[t++] = 8;
                            for (
                                s(1, e.lens, 0, 288, E, 0, e.work, { bits: 9 }),
                                    t = 0;
                                t < 32;

                            )
                                e.lens[t++] = 5;
                            s(2, e.lens, 0, 32, R, 0, e.work, { bits: 5 }),
                                (S = !1);
                        }
                        (e.lencode = E),
                            (e.lenbits = 9),
                            (e.distcode = R),
                            (e.distbits = 5);
                    },
                    N = (e, t, a, n) => {
                        let r;
                        const i = e.state;
                        return (
                            null === i.window &&
                                ((i.wsize = 1 << i.wbits),
                                (i.wnext = 0),
                                (i.whave = 0),
                                (i.window = new Uint8Array(i.wsize))),
                            n >= i.wsize
                                ? (i.window.set(t.subarray(a - i.wsize, a), 0),
                                  (i.wnext = 0),
                                  (i.whave = i.wsize))
                                : ((r = i.wsize - i.wnext),
                                  r > n && (r = n),
                                  i.window.set(
                                      t.subarray(a - n, a - n + r),
                                      i.wnext
                                  ),
                                  (n -= r)
                                      ? (i.window.set(t.subarray(a - n, a), 0),
                                        (i.wnext = n),
                                        (i.whave = i.wsize))
                                      : ((i.wnext += r),
                                        i.wnext === i.wsize && (i.wnext = 0),
                                        i.whave < i.wsize && (i.whave += r))),
                            0
                        );
                    };
                (e.exports.inflateReset = x),
                    (e.exports.inflateReset2 = A),
                    (e.exports.inflateResetKeep = y),
                    (e.exports.inflateInit = (e) => z(e, 15)),
                    (e.exports.inflateInit2 = z),
                    (e.exports.inflate = (e, t) => {
                        let a,
                            k,
                            y,
                            x,
                            A,
                            z,
                            E,
                            R,
                            S,
                            L,
                            I,
                            O,
                            C,
                            D,
                            Z,
                            F,
                            U,
                            B,
                            j,
                            P,
                            H,
                            $,
                            M = 0;
                        const W = new Uint8Array(4);
                        let K, G;
                        const J = new Uint8Array([
                            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13,
                            2, 14, 1, 15,
                        ]);
                        if (
                            !e ||
                            !e.state ||
                            !e.output ||
                            (!e.input && 0 !== e.avail_in)
                        )
                            return f;
                        (a = e.state),
                            a.mode === w && (a.mode = 13),
                            (A = e.next_out),
                            (y = e.output),
                            (E = e.avail_out),
                            (x = e.next_in),
                            (k = e.input),
                            (z = e.avail_in),
                            (R = a.hold),
                            (S = a.bits),
                            (L = z),
                            (I = E),
                            ($ = h);
                        e: for (;;)
                            switch (a.mode) {
                                case 1:
                                    if (0 === a.wrap) {
                                        a.mode = 13;
                                        break;
                                    }
                                    for (; S < 16; ) {
                                        if (0 === z) break e;
                                        z--, (R += k[x++] << S), (S += 8);
                                    }
                                    if (2 & a.wrap && 35615 === R) {
                                        (a.check = 0),
                                            (W[0] = 255 & R),
                                            (W[1] = (R >>> 8) & 255),
                                            (a.check = r(a.check, W, 2, 0)),
                                            (R = 0),
                                            (S = 0),
                                            (a.mode = 2);
                                        break;
                                    }
                                    if (
                                        ((a.flags = 0),
                                        a.head && (a.head.done = !1),
                                        !(1 & a.wrap) ||
                                            (((255 & R) << 8) + (R >> 8)) % 31)
                                    ) {
                                        (e.msg = "incorrect header check"),
                                            (a.mode = b);
                                        break;
                                    }
                                    if ((15 & R) !== m) {
                                        (e.msg = "unknown compression method"),
                                            (a.mode = b);
                                        break;
                                    }
                                    if (
                                        ((R >>>= 4),
                                        (S -= 4),
                                        (H = 8 + (15 & R)),
                                        0 === a.wbits)
                                    )
                                        a.wbits = H;
                                    else if (H > a.wbits) {
                                        (e.msg = "invalid window size"),
                                            (a.mode = b);
                                        break;
                                    }
                                    (a.dmax = 1 << a.wbits),
                                        (e.adler = a.check = 1),
                                        (a.mode = 512 & R ? 10 : w),
                                        (R = 0),
                                        (S = 0);
                                    break;
                                case 2:
                                    for (; S < 16; ) {
                                        if (0 === z) break e;
                                        z--, (R += k[x++] << S), (S += 8);
                                    }
                                    if (
                                        ((a.flags = R), (255 & a.flags) !== m)
                                    ) {
                                        (e.msg = "unknown compression method"),
                                            (a.mode = b);
                                        break;
                                    }
                                    if (57344 & a.flags) {
                                        (e.msg = "unknown header flags set"),
                                            (a.mode = b);
                                        break;
                                    }
                                    a.head && (a.head.text = (R >> 8) & 1),
                                        512 & a.flags &&
                                            ((W[0] = 255 & R),
                                            (W[1] = (R >>> 8) & 255),
                                            (a.check = r(a.check, W, 2, 0))),
                                        (R = 0),
                                        (S = 0),
                                        (a.mode = 3);
                                case 3:
                                    for (; S < 32; ) {
                                        if (0 === z) break e;
                                        z--, (R += k[x++] << S), (S += 8);
                                    }
                                    a.head && (a.head.time = R),
                                        512 & a.flags &&
                                            ((W[0] = 255 & R),
                                            (W[1] = (R >>> 8) & 255),
                                            (W[2] = (R >>> 16) & 255),
                                            (W[3] = (R >>> 24) & 255),
                                            (a.check = r(a.check, W, 4, 0))),
                                        (R = 0),
                                        (S = 0),
                                        (a.mode = 4);
                                case 4:
                                    for (; S < 16; ) {
                                        if (0 === z) break e;
                                        z--, (R += k[x++] << S), (S += 8);
                                    }
                                    a.head &&
                                        ((a.head.xflags = 255 & R),
                                        (a.head.os = R >> 8)),
                                        512 & a.flags &&
                                            ((W[0] = 255 & R),
                                            (W[1] = (R >>> 8) & 255),
                                            (a.check = r(a.check, W, 2, 0))),
                                        (R = 0),
                                        (S = 0),
                                        (a.mode = 5);
                                case 5:
                                    if (1024 & a.flags) {
                                        for (; S < 16; ) {
                                            if (0 === z) break e;
                                            z--, (R += k[x++] << S), (S += 8);
                                        }
                                        (a.length = R),
                                            a.head && (a.head.extra_len = R),
                                            512 & a.flags &&
                                                ((W[0] = 255 & R),
                                                (W[1] = (R >>> 8) & 255),
                                                (a.check = r(
                                                    a.check,
                                                    W,
                                                    2,
                                                    0
                                                ))),
                                            (R = 0),
                                            (S = 0);
                                    } else a.head && (a.head.extra = null);
                                    a.mode = 6;
                                case 6:
                                    if (
                                        1024 & a.flags &&
                                        ((O = a.length),
                                        O > z && (O = z),
                                        O &&
                                            (a.head &&
                                                ((H =
                                                    a.head.extra_len -
                                                    a.length),
                                                a.head.extra ||
                                                    (a.head.extra =
                                                        new Uint8Array(
                                                            a.head.extra_len
                                                        )),
                                                a.head.extra.set(
                                                    k.subarray(x, x + O),
                                                    H
                                                )),
                                            512 & a.flags &&
                                                (a.check = r(a.check, k, O, x)),
                                            (z -= O),
                                            (x += O),
                                            (a.length -= O)),
                                        a.length)
                                    )
                                        break e;
                                    (a.length = 0), (a.mode = 7);
                                case 7:
                                    if (2048 & a.flags) {
                                        if (0 === z) break e;
                                        O = 0;
                                        do {
                                            (H = k[x + O++]),
                                                a.head &&
                                                    H &&
                                                    a.length < 65536 &&
                                                    (a.head.name +=
                                                        String.fromCharCode(H));
                                        } while (H && O < z);
                                        if (
                                            (512 & a.flags &&
                                                (a.check = r(a.check, k, O, x)),
                                            (z -= O),
                                            (x += O),
                                            H)
                                        )
                                            break e;
                                    } else a.head && (a.head.name = null);
                                    (a.length = 0), (a.mode = 8);
                                case 8:
                                    if (4096 & a.flags) {
                                        if (0 === z) break e;
                                        O = 0;
                                        do {
                                            (H = k[x + O++]),
                                                a.head &&
                                                    H &&
                                                    a.length < 65536 &&
                                                    (a.head.comment +=
                                                        String.fromCharCode(H));
                                        } while (H && O < z);
                                        if (
                                            (512 & a.flags &&
                                                (a.check = r(a.check, k, O, x)),
                                            (z -= O),
                                            (x += O),
                                            H)
                                        )
                                            break e;
                                    } else a.head && (a.head.comment = null);
                                    a.mode = 9;
                                case 9:
                                    if (512 & a.flags) {
                                        for (; S < 16; ) {
                                            if (0 === z) break e;
                                            z--, (R += k[x++] << S), (S += 8);
                                        }
                                        if (R !== (65535 & a.check)) {
                                            (e.msg = "header crc mismatch"),
                                                (a.mode = b);
                                            break;
                                        }
                                        (R = 0), (S = 0);
                                    }
                                    a.head &&
                                        ((a.head.hcrc = (a.flags >> 9) & 1),
                                        (a.head.done = !0)),
                                        (e.adler = a.check = 0),
                                        (a.mode = w);
                                    break;
                                case 10:
                                    for (; S < 32; ) {
                                        if (0 === z) break e;
                                        z--, (R += k[x++] << S), (S += 8);
                                    }
                                    (e.adler = a.check = v(R)),
                                        (R = 0),
                                        (S = 0),
                                        (a.mode = 11);
                                case 11:
                                    if (0 === a.havedict)
                                        return (
                                            (e.next_out = A),
                                            (e.avail_out = E),
                                            (e.next_in = x),
                                            (e.avail_in = z),
                                            (a.hold = R),
                                            (a.bits = S),
                                            u
                                        );
                                    (e.adler = a.check = 1), (a.mode = w);
                                case w:
                                    if (t === l || t === d) break e;
                                case 13:
                                    if (a.last) {
                                        (R >>>= 7 & S),
                                            (S -= 7 & S),
                                            (a.mode = 27);
                                        break;
                                    }
                                    for (; S < 3; ) {
                                        if (0 === z) break e;
                                        z--, (R += k[x++] << S), (S += 8);
                                    }
                                    switch (
                                        ((a.last = 1 & R),
                                        (R >>>= 1),
                                        (S -= 1),
                                        3 & R)
                                    ) {
                                        case 0:
                                            a.mode = 14;
                                            break;
                                        case 1:
                                            if (
                                                (T(a), (a.mode = 20), t === d)
                                            ) {
                                                (R >>>= 2), (S -= 2);
                                                break e;
                                            }
                                            break;
                                        case 2:
                                            a.mode = 17;
                                            break;
                                        case 3:
                                            (e.msg = "invalid block type"),
                                                (a.mode = b);
                                    }
                                    (R >>>= 2), (S -= 2);
                                    break;
                                case 14:
                                    for (R >>>= 7 & S, S -= 7 & S; S < 32; ) {
                                        if (0 === z) break e;
                                        z--, (R += k[x++] << S), (S += 8);
                                    }
                                    if ((65535 & R) != ((R >>> 16) ^ 65535)) {
                                        (e.msg =
                                            "invalid stored block lengths"),
                                            (a.mode = b);
                                        break;
                                    }
                                    if (
                                        ((a.length = 65535 & R),
                                        (R = 0),
                                        (S = 0),
                                        (a.mode = 15),
                                        t === d)
                                    )
                                        break e;
                                case 15:
                                    a.mode = 16;
                                case 16:
                                    if (((O = a.length), O)) {
                                        if (
                                            (O > z && (O = z),
                                            O > E && (O = E),
                                            0 === O)
                                        )
                                            break e;
                                        y.set(k.subarray(x, x + O), A),
                                            (z -= O),
                                            (x += O),
                                            (E -= O),
                                            (A += O),
                                            (a.length -= O);
                                        break;
                                    }
                                    a.mode = w;
                                    break;
                                case 17:
                                    for (; S < 14; ) {
                                        if (0 === z) break e;
                                        z--, (R += k[x++] << S), (S += 8);
                                    }
                                    if (
                                        ((a.nlen = 257 + (31 & R)),
                                        (R >>>= 5),
                                        (S -= 5),
                                        (a.ndist = 1 + (31 & R)),
                                        (R >>>= 5),
                                        (S -= 5),
                                        (a.ncode = 4 + (15 & R)),
                                        (R >>>= 4),
                                        (S -= 4),
                                        a.nlen > 286 || a.ndist > 30)
                                    ) {
                                        (e.msg =
                                            "too many length or distance symbols"),
                                            (a.mode = b);
                                        break;
                                    }
                                    (a.have = 0), (a.mode = 18);
                                case 18:
                                    for (; a.have < a.ncode; ) {
                                        for (; S < 3; ) {
                                            if (0 === z) break e;
                                            z--, (R += k[x++] << S), (S += 8);
                                        }
                                        (a.lens[J[a.have++]] = 7 & R),
                                            (R >>>= 3),
                                            (S -= 3);
                                    }
                                    for (; a.have < 19; )
                                        a.lens[J[a.have++]] = 0;
                                    if (
                                        ((a.lencode = a.lendyn),
                                        (a.lenbits = 7),
                                        (K = { bits: a.lenbits }),
                                        ($ = s(
                                            0,
                                            a.lens,
                                            0,
                                            19,
                                            a.lencode,
                                            0,
                                            a.work,
                                            K
                                        )),
                                        (a.lenbits = K.bits),
                                        $)
                                    ) {
                                        (e.msg = "invalid code lengths set"),
                                            (a.mode = b);
                                        break;
                                    }
                                    (a.have = 0), (a.mode = 19);
                                case 19:
                                    for (; a.have < a.nlen + a.ndist; ) {
                                        for (
                                            ;
                                            (M =
                                                a.lencode[
                                                    R & ((1 << a.lenbits) - 1)
                                                ]),
                                                (Z = M >>> 24),
                                                (F = (M >>> 16) & 255),
                                                (U = 65535 & M),
                                                !(Z <= S);

                                        ) {
                                            if (0 === z) break e;
                                            z--, (R += k[x++] << S), (S += 8);
                                        }
                                        if (U < 16)
                                            (R >>>= Z),
                                                (S -= Z),
                                                (a.lens[a.have++] = U);
                                        else {
                                            if (16 === U) {
                                                for (G = Z + 2; S < G; ) {
                                                    if (0 === z) break e;
                                                    z--,
                                                        (R += k[x++] << S),
                                                        (S += 8);
                                                }
                                                if (
                                                    ((R >>>= Z),
                                                    (S -= Z),
                                                    0 === a.have)
                                                ) {
                                                    (e.msg =
                                                        "invalid bit length repeat"),
                                                        (a.mode = b);
                                                    break;
                                                }
                                                (H = a.lens[a.have - 1]),
                                                    (O = 3 + (3 & R)),
                                                    (R >>>= 2),
                                                    (S -= 2);
                                            } else if (17 === U) {
                                                for (G = Z + 3; S < G; ) {
                                                    if (0 === z) break e;
                                                    z--,
                                                        (R += k[x++] << S),
                                                        (S += 8);
                                                }
                                                (R >>>= Z),
                                                    (S -= Z),
                                                    (H = 0),
                                                    (O = 3 + (7 & R)),
                                                    (R >>>= 3),
                                                    (S -= 3);
                                            } else {
                                                for (G = Z + 7; S < G; ) {
                                                    if (0 === z) break e;
                                                    z--,
                                                        (R += k[x++] << S),
                                                        (S += 8);
                                                }
                                                (R >>>= Z),
                                                    (S -= Z),
                                                    (H = 0),
                                                    (O = 11 + (127 & R)),
                                                    (R >>>= 7),
                                                    (S -= 7);
                                            }
                                            if (a.have + O > a.nlen + a.ndist) {
                                                (e.msg =
                                                    "invalid bit length repeat"),
                                                    (a.mode = b);
                                                break;
                                            }
                                            for (; O--; ) a.lens[a.have++] = H;
                                        }
                                    }
                                    if (a.mode === b) break;
                                    if (0 === a.lens[256]) {
                                        (e.msg =
                                            "invalid code -- missing end-of-block"),
                                            (a.mode = b);
                                        break;
                                    }
                                    if (
                                        ((a.lenbits = 9),
                                        (K = { bits: a.lenbits }),
                                        ($ = s(
                                            1,
                                            a.lens,
                                            0,
                                            a.nlen,
                                            a.lencode,
                                            0,
                                            a.work,
                                            K
                                        )),
                                        (a.lenbits = K.bits),
                                        $)
                                    ) {
                                        (e.msg = "invalid literal/lengths set"),
                                            (a.mode = b);
                                        break;
                                    }
                                    if (
                                        ((a.distbits = 6),
                                        (a.distcode = a.distdyn),
                                        (K = { bits: a.distbits }),
                                        ($ = s(
                                            2,
                                            a.lens,
                                            a.nlen,
                                            a.ndist,
                                            a.distcode,
                                            0,
                                            a.work,
                                            K
                                        )),
                                        (a.distbits = K.bits),
                                        $)
                                    ) {
                                        (e.msg = "invalid distances set"),
                                            (a.mode = b);
                                        break;
                                    }
                                    if (((a.mode = 20), t === d)) break e;
                                case 20:
                                    a.mode = 21;
                                case 21:
                                    if (z >= 6 && E >= 258) {
                                        (e.next_out = A),
                                            (e.avail_out = E),
                                            (e.next_in = x),
                                            (e.avail_in = z),
                                            (a.hold = R),
                                            (a.bits = S),
                                            i(e, I),
                                            (A = e.next_out),
                                            (y = e.output),
                                            (E = e.avail_out),
                                            (x = e.next_in),
                                            (k = e.input),
                                            (z = e.avail_in),
                                            (R = a.hold),
                                            (S = a.bits),
                                            a.mode === w && (a.back = -1);
                                        break;
                                    }
                                    for (
                                        a.back = 0;
                                        (M =
                                            a.lencode[
                                                R & ((1 << a.lenbits) - 1)
                                            ]),
                                            (Z = M >>> 24),
                                            (F = (M >>> 16) & 255),
                                            (U = 65535 & M),
                                            !(Z <= S);

                                    ) {
                                        if (0 === z) break e;
                                        z--, (R += k[x++] << S), (S += 8);
                                    }
                                    if (F && 0 == (240 & F)) {
                                        for (
                                            B = Z, j = F, P = U;
                                            (M =
                                                a.lencode[
                                                    P +
                                                        ((R &
                                                            ((1 << (B + j)) -
                                                                1)) >>
                                                            B)
                                                ]),
                                                (Z = M >>> 24),
                                                (F = (M >>> 16) & 255),
                                                (U = 65535 & M),
                                                !(B + Z <= S);

                                        ) {
                                            if (0 === z) break e;
                                            z--, (R += k[x++] << S), (S += 8);
                                        }
                                        (R >>>= B), (S -= B), (a.back += B);
                                    }
                                    if (
                                        ((R >>>= Z),
                                        (S -= Z),
                                        (a.back += Z),
                                        (a.length = U),
                                        0 === F)
                                    ) {
                                        a.mode = 26;
                                        break;
                                    }
                                    if (32 & F) {
                                        (a.back = -1), (a.mode = w);
                                        break;
                                    }
                                    if (64 & F) {
                                        (e.msg = "invalid literal/length code"),
                                            (a.mode = b);
                                        break;
                                    }
                                    (a.extra = 15 & F), (a.mode = 22);
                                case 22:
                                    if (a.extra) {
                                        for (G = a.extra; S < G; ) {
                                            if (0 === z) break e;
                                            z--, (R += k[x++] << S), (S += 8);
                                        }
                                        (a.length += R & ((1 << a.extra) - 1)),
                                            (R >>>= a.extra),
                                            (S -= a.extra),
                                            (a.back += a.extra);
                                    }
                                    (a.was = a.length), (a.mode = 23);
                                case 23:
                                    for (
                                        ;
                                        (M =
                                            a.distcode[
                                                R & ((1 << a.distbits) - 1)
                                            ]),
                                            (Z = M >>> 24),
                                            (F = (M >>> 16) & 255),
                                            (U = 65535 & M),
                                            !(Z <= S);

                                    ) {
                                        if (0 === z) break e;
                                        z--, (R += k[x++] << S), (S += 8);
                                    }
                                    if (0 == (240 & F)) {
                                        for (
                                            B = Z, j = F, P = U;
                                            (M =
                                                a.distcode[
                                                    P +
                                                        ((R &
                                                            ((1 << (B + j)) -
                                                                1)) >>
                                                            B)
                                                ]),
                                                (Z = M >>> 24),
                                                (F = (M >>> 16) & 255),
                                                (U = 65535 & M),
                                                !(B + Z <= S);

                                        ) {
                                            if (0 === z) break e;
                                            z--, (R += k[x++] << S), (S += 8);
                                        }
                                        (R >>>= B), (S -= B), (a.back += B);
                                    }
                                    if (
                                        ((R >>>= Z),
                                        (S -= Z),
                                        (a.back += Z),
                                        64 & F)
                                    ) {
                                        (e.msg = "invalid distance code"),
                                            (a.mode = b);
                                        break;
                                    }
                                    (a.offset = U),
                                        (a.extra = 15 & F),
                                        (a.mode = 24);
                                case 24:
                                    if (a.extra) {
                                        for (G = a.extra; S < G; ) {
                                            if (0 === z) break e;
                                            z--, (R += k[x++] << S), (S += 8);
                                        }
                                        (a.offset += R & ((1 << a.extra) - 1)),
                                            (R >>>= a.extra),
                                            (S -= a.extra),
                                            (a.back += a.extra);
                                    }
                                    if (a.offset > a.dmax) {
                                        (e.msg =
                                            "invalid distance too far back"),
                                            (a.mode = b);
                                        break;
                                    }
                                    a.mode = 25;
                                case 25:
                                    if (0 === E) break e;
                                    if (((O = I - E), a.offset > O)) {
                                        if (
                                            ((O = a.offset - O),
                                            O > a.whave && a.sane)
                                        ) {
                                            (e.msg =
                                                "invalid distance too far back"),
                                                (a.mode = b);
                                            break;
                                        }
                                        O > a.wnext
                                            ? ((O -= a.wnext),
                                              (C = a.wsize - O))
                                            : (C = a.wnext - O),
                                            O > a.length && (O = a.length),
                                            (D = a.window);
                                    } else
                                        (D = y),
                                            (C = A - a.offset),
                                            (O = a.length);
                                    O > E && (O = E), (E -= O), (a.length -= O);
                                    do {
                                        y[A++] = D[C++];
                                    } while (--O);
                                    0 === a.length && (a.mode = 21);
                                    break;
                                case 26:
                                    if (0 === E) break e;
                                    (y[A++] = a.length), E--, (a.mode = 21);
                                    break;
                                case 27:
                                    if (a.wrap) {
                                        for (; S < 32; ) {
                                            if (0 === z) break e;
                                            z--, (R |= k[x++] << S), (S += 8);
                                        }
                                        if (
                                            ((I -= E),
                                            (e.total_out += I),
                                            (a.total += I),
                                            I &&
                                                (e.adler = a.check =
                                                    a.flags
                                                        ? r(
                                                              a.check,
                                                              y,
                                                              I,
                                                              A - I
                                                          )
                                                        : n(
                                                              a.check,
                                                              y,
                                                              I,
                                                              A - I
                                                          )),
                                            (I = E),
                                            (a.flags ? R : v(R)) !== a.check)
                                        ) {
                                            (e.msg = "incorrect data check"),
                                                (a.mode = b);
                                            break;
                                        }
                                        (R = 0), (S = 0);
                                    }
                                    a.mode = 28;
                                case 28:
                                    if (a.wrap && a.flags) {
                                        for (; S < 32; ) {
                                            if (0 === z) break e;
                                            z--, (R += k[x++] << S), (S += 8);
                                        }
                                        if (R !== (4294967295 & a.total)) {
                                            (e.msg = "incorrect length check"),
                                                (a.mode = b);
                                            break;
                                        }
                                        (R = 0), (S = 0);
                                    }
                                    a.mode = 29;
                                case 29:
                                    $ = c;
                                    break e;
                                case b:
                                    $ = _;
                                    break e;
                                case 31:
                                    return p;
                                case 32:
                                default:
                                    return f;
                            }
                        return (
                            (e.next_out = A),
                            (e.avail_out = E),
                            (e.next_in = x),
                            (e.avail_in = z),
                            (a.hold = R),
                            (a.bits = S),
                            (a.wsize ||
                                (I !== e.avail_out &&
                                    a.mode < b &&
                                    (a.mode < 27 || t !== o))) &&
                            N(e, e.output, e.next_out, I - e.avail_out)
                                ? ((a.mode = 31), p)
                                : ((L -= e.avail_in),
                                  (I -= e.avail_out),
                                  (e.total_in += L),
                                  (e.total_out += I),
                                  (a.total += I),
                                  a.wrap &&
                                      I &&
                                      (e.adler = a.check =
                                          a.flags
                                              ? r(a.check, y, I, e.next_out - I)
                                              : n(
                                                    a.check,
                                                    y,
                                                    I,
                                                    e.next_out - I
                                                )),
                                  (e.data_type =
                                      a.bits +
                                      (a.last ? 64 : 0) +
                                      (a.mode === w ? 128 : 0) +
                                      (20 === a.mode || 15 === a.mode
                                          ? 256
                                          : 0)),
                                  ((0 === L && 0 === I) || t === o) &&
                                      $ === h &&
                                      ($ = g),
                                  $)
                        );
                    }),
                    (e.exports.inflateEnd = (e) => {
                        if (!e || !e.state) return f;
                        let t = e.state;
                        return (
                            t.window && (t.window = null), (e.state = null), h
                        );
                    }),
                    (e.exports.inflateGetHeader = (e, t) => {
                        if (!e || !e.state) return f;
                        const a = e.state;
                        return 0 == (2 & a.wrap)
                            ? f
                            : ((a.head = t), (t.done = !1), h);
                    }),
                    (e.exports.inflateSetDictionary = (e, t) => {
                        const a = t.length;
                        let r, i, s;
                        return e && e.state
                            ? ((r = e.state),
                              0 !== r.wrap && 11 !== r.mode
                                  ? f
                                  : 11 === r.mode &&
                                    ((i = 1),
                                    (i = n(i, t, a, 0)),
                                    i !== r.check)
                                  ? _
                                  : ((s = N(e, t, a, a)),
                                    s
                                        ? ((r.mode = 31), p)
                                        : ((r.havedict = 1), h)))
                            : f;
                    }),
                    (e.exports.inflateInfo =
                        "pako inflate (from Nodeca project)");
            },
            241: (e) => {
                "use strict";
                const t = new Uint16Array([
                        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
                        35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227,
                        258, 0, 0,
                    ]),
                    a = new Uint8Array([
                        16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18,
                        18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21,
                        16, 72, 78,
                    ]),
                    n = new Uint16Array([
                        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129,
                        193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097,
                        6145, 8193, 12289, 16385, 24577, 0, 0,
                    ]),
                    r = new Uint8Array([
                        16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21,
                        22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28,
                        29, 29, 64, 64,
                    ]);
                e.exports = (e, i, s, o, l, d, h, c) => {
                    const u = c.bits;
                    let f,
                        _,
                        p,
                        g,
                        m,
                        w,
                        b = 0,
                        v = 0,
                        k = 0,
                        y = 0,
                        x = 0,
                        A = 0,
                        z = 0,
                        E = 0,
                        R = 0,
                        S = 0,
                        T = null,
                        N = 0;
                    const L = new Uint16Array(16),
                        I = new Uint16Array(16);
                    let O,
                        C,
                        D,
                        Z = null,
                        F = 0;
                    for (b = 0; b <= 15; b++) L[b] = 0;
                    for (v = 0; v < o; v++) L[i[s + v]]++;
                    for (x = u, y = 15; y >= 1 && 0 === L[y]; y--);
                    if ((x > y && (x = y), 0 === y))
                        return (
                            (l[d++] = 20971520),
                            (l[d++] = 20971520),
                            (c.bits = 1),
                            0
                        );
                    for (k = 1; k < y && 0 === L[k]; k++);
                    for (x < k && (x = k), E = 1, b = 1; b <= 15; b++)
                        if (((E <<= 1), (E -= L[b]), E < 0)) return -1;
                    if (E > 0 && (0 === e || 1 !== y)) return -1;
                    for (I[1] = 0, b = 1; b < 15; b++) I[b + 1] = I[b] + L[b];
                    for (v = 0; v < o; v++)
                        0 !== i[s + v] && (h[I[i[s + v]]++] = v);
                    if (
                        (0 === e
                            ? ((T = Z = h), (w = 19))
                            : 1 === e
                            ? ((T = t),
                              (N -= 257),
                              (Z = a),
                              (F -= 257),
                              (w = 256))
                            : ((T = n), (Z = r), (w = -1)),
                        (S = 0),
                        (v = 0),
                        (b = k),
                        (m = d),
                        (A = x),
                        (z = 0),
                        (p = -1),
                        (R = 1 << x),
                        (g = R - 1),
                        (1 === e && R > 852) || (2 === e && R > 592))
                    )
                        return 1;
                    for (;;) {
                        (O = b - z),
                            h[v] < w
                                ? ((C = 0), (D = h[v]))
                                : h[v] > w
                                ? ((C = Z[F + h[v]]), (D = T[N + h[v]]))
                                : ((C = 96), (D = 0)),
                            (f = 1 << (b - z)),
                            (_ = 1 << A),
                            (k = _);
                        do {
                            (_ -= f),
                                (l[m + (S >> z) + _] =
                                    (O << 24) | (C << 16) | D | 0);
                        } while (0 !== _);
                        for (f = 1 << (b - 1); S & f; ) f >>= 1;
                        if (
                            (0 !== f ? ((S &= f - 1), (S += f)) : (S = 0),
                            v++,
                            0 == --L[b])
                        ) {
                            if (b === y) break;
                            b = i[s + h[v]];
                        }
                        if (b > x && (S & g) !== p) {
                            for (
                                0 === z && (z = x),
                                    m += k,
                                    A = b - z,
                                    E = 1 << A;
                                A + z < y && ((E -= L[A + z]), !(E <= 0));

                            )
                                A++, (E <<= 1);
                            if (
                                ((R += 1 << A),
                                (1 === e && R > 852) || (2 === e && R > 592))
                            )
                                return 1;
                            (p = S & g),
                                (l[p] = (x << 24) | (A << 16) | (m - d) | 0);
                        }
                    }
                    return (
                        0 !== S &&
                            (l[m + S] = ((b - z) << 24) | (64 << 16) | 0),
                        (c.bits = x),
                        0
                    );
                };
            },
            898: (e) => {
                "use strict";
                e.exports = {
                    2: "need dictionary",
                    1: "stream end",
                    0: "",
                    "-1": "file error",
                    "-2": "stream error",
                    "-3": "data error",
                    "-4": "insufficient memory",
                    "-5": "buffer error",
                    "-6": "incompatible version",
                };
            },
            342: (e) => {
                "use strict";
                function t(e) {
                    let t = e.length;
                    for (; --t >= 0; ) e[t] = 0;
                }
                const a = new Uint8Array([
                        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3,
                        3, 4, 4, 4, 4, 5, 5, 5, 5, 0,
                    ]),
                    n = new Uint8Array([
                        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8,
                        8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13,
                    ]),
                    r = new Uint8Array([
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
                    ]),
                    i = new Uint8Array([
                        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2,
                        14, 1, 15,
                    ]),
                    s = new Array(576);
                t(s);
                const o = new Array(60);
                t(o);
                const l = new Array(512);
                t(l);
                const d = new Array(256);
                t(d);
                const h = new Array(29);
                t(h);
                const c = new Array(30);
                function u(e, t, a, n, r) {
                    (this.static_tree = e),
                        (this.extra_bits = t),
                        (this.extra_base = a),
                        (this.elems = n),
                        (this.max_length = r),
                        (this.has_stree = e && e.length);
                }
                let f, _, p;
                function g(e, t) {
                    (this.dyn_tree = e),
                        (this.max_code = 0),
                        (this.stat_desc = t);
                }
                t(c);
                const m = (e) => (e < 256 ? l[e] : l[256 + (e >>> 7)]),
                    w = (e, t) => {
                        (e.pending_buf[e.pending++] = 255 & t),
                            (e.pending_buf[e.pending++] = (t >>> 8) & 255);
                    },
                    b = (e, t, a) => {
                        e.bi_valid > 16 - a
                            ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
                              w(e, e.bi_buf),
                              (e.bi_buf = t >> (16 - e.bi_valid)),
                              (e.bi_valid += a - 16))
                            : ((e.bi_buf |= (t << e.bi_valid) & 65535),
                              (e.bi_valid += a));
                    },
                    v = (e, t, a) => {
                        b(e, a[2 * t], a[2 * t + 1]);
                    },
                    k = (e, t) => {
                        let a = 0;
                        do {
                            (a |= 1 & e), (e >>>= 1), (a <<= 1);
                        } while (--t > 0);
                        return a >>> 1;
                    },
                    y = (e, t, a) => {
                        const n = new Array(16);
                        let r,
                            i,
                            s = 0;
                        for (r = 1; r <= 15; r++)
                            n[r] = s = (s + a[r - 1]) << 1;
                        for (i = 0; i <= t; i++) {
                            let t = e[2 * i + 1];
                            0 !== t && (e[2 * i] = k(n[t]++, t));
                        }
                    },
                    x = (e) => {
                        let t;
                        for (t = 0; t < 286; t++) e.dyn_ltree[2 * t] = 0;
                        for (t = 0; t < 30; t++) e.dyn_dtree[2 * t] = 0;
                        for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
                        (e.dyn_ltree[512] = 1),
                            (e.opt_len = e.static_len = 0),
                            (e.last_lit = e.matches = 0);
                    },
                    A = (e) => {
                        e.bi_valid > 8
                            ? w(e, e.bi_buf)
                            : e.bi_valid > 0 &&
                              (e.pending_buf[e.pending++] = e.bi_buf),
                            (e.bi_buf = 0),
                            (e.bi_valid = 0);
                    },
                    z = (e, t, a, n) => {
                        const r = 2 * t,
                            i = 2 * a;
                        return e[r] < e[i] || (e[r] === e[i] && n[t] <= n[a]);
                    },
                    E = (e, t, a) => {
                        const n = e.heap[a];
                        let r = a << 1;
                        for (
                            ;
                            r <= e.heap_len &&
                            (r < e.heap_len &&
                                z(t, e.heap[r + 1], e.heap[r], e.depth) &&
                                r++,
                            !z(t, n, e.heap[r], e.depth));

                        )
                            (e.heap[a] = e.heap[r]), (a = r), (r <<= 1);
                        e.heap[a] = n;
                    },
                    R = (e, t, r) => {
                        let i,
                            s,
                            o,
                            l,
                            u = 0;
                        if (0 !== e.last_lit)
                            do {
                                (i =
                                    (e.pending_buf[e.d_buf + 2 * u] << 8) |
                                    e.pending_buf[e.d_buf + 2 * u + 1]),
                                    (s = e.pending_buf[e.l_buf + u]),
                                    u++,
                                    0 === i
                                        ? v(e, s, t)
                                        : ((o = d[s]),
                                          v(e, o + 256 + 1, t),
                                          (l = a[o]),
                                          0 !== l && ((s -= h[o]), b(e, s, l)),
                                          i--,
                                          (o = m(i)),
                                          v(e, o, r),
                                          (l = n[o]),
                                          0 !== l && ((i -= c[o]), b(e, i, l)));
                            } while (u < e.last_lit);
                        v(e, 256, t);
                    },
                    S = (e, t) => {
                        const a = t.dyn_tree,
                            n = t.stat_desc.static_tree,
                            r = t.stat_desc.has_stree,
                            i = t.stat_desc.elems;
                        let s,
                            o,
                            l,
                            d = -1;
                        for (
                            e.heap_len = 0, e.heap_max = 573, s = 0;
                            s < i;
                            s++
                        )
                            0 !== a[2 * s]
                                ? ((e.heap[++e.heap_len] = d = s),
                                  (e.depth[s] = 0))
                                : (a[2 * s + 1] = 0);
                        for (; e.heap_len < 2; )
                            (l = e.heap[++e.heap_len] = d < 2 ? ++d : 0),
                                (a[2 * l] = 1),
                                (e.depth[l] = 0),
                                e.opt_len--,
                                r && (e.static_len -= n[2 * l + 1]);
                        for (t.max_code = d, s = e.heap_len >> 1; s >= 1; s--)
                            E(e, a, s);
                        l = i;
                        do {
                            (s = e.heap[1]),
                                (e.heap[1] = e.heap[e.heap_len--]),
                                E(e, a, 1),
                                (o = e.heap[1]),
                                (e.heap[--e.heap_max] = s),
                                (e.heap[--e.heap_max] = o),
                                (a[2 * l] = a[2 * s] + a[2 * o]),
                                (e.depth[l] =
                                    (e.depth[s] >= e.depth[o]
                                        ? e.depth[s]
                                        : e.depth[o]) + 1),
                                (a[2 * s + 1] = a[2 * o + 1] = l),
                                (e.heap[1] = l++),
                                E(e, a, 1);
                        } while (e.heap_len >= 2);
                        (e.heap[--e.heap_max] = e.heap[1]),
                            ((e, t) => {
                                const a = t.dyn_tree,
                                    n = t.max_code,
                                    r = t.stat_desc.static_tree,
                                    i = t.stat_desc.has_stree,
                                    s = t.stat_desc.extra_bits,
                                    o = t.stat_desc.extra_base,
                                    l = t.stat_desc.max_length;
                                let d,
                                    h,
                                    c,
                                    u,
                                    f,
                                    _,
                                    p = 0;
                                for (u = 0; u <= 15; u++) e.bl_count[u] = 0;
                                for (
                                    a[2 * e.heap[e.heap_max] + 1] = 0,
                                        d = e.heap_max + 1;
                                    d < 573;
                                    d++
                                )
                                    (h = e.heap[d]),
                                        (u = a[2 * a[2 * h + 1] + 1] + 1),
                                        u > l && ((u = l), p++),
                                        (a[2 * h + 1] = u),
                                        h > n ||
                                            (e.bl_count[u]++,
                                            (f = 0),
                                            h >= o && (f = s[h - o]),
                                            (_ = a[2 * h]),
                                            (e.opt_len += _ * (u + f)),
                                            i &&
                                                (e.static_len +=
                                                    _ * (r[2 * h + 1] + f)));
                                if (0 !== p) {
                                    do {
                                        for (u = l - 1; 0 === e.bl_count[u]; )
                                            u--;
                                        e.bl_count[u]--,
                                            (e.bl_count[u + 1] += 2),
                                            e.bl_count[l]--,
                                            (p -= 2);
                                    } while (p > 0);
                                    for (u = l; 0 !== u; u--)
                                        for (h = e.bl_count[u]; 0 !== h; )
                                            (c = e.heap[--d]),
                                                c > n ||
                                                    (a[2 * c + 1] !== u &&
                                                        ((e.opt_len +=
                                                            (u - a[2 * c + 1]) *
                                                            a[2 * c]),
                                                        (a[2 * c + 1] = u)),
                                                    h--);
                                }
                            })(e, t),
                            y(a, d, e.bl_count);
                    },
                    T = (e, t, a) => {
                        let n,
                            r,
                            i = -1,
                            s = t[1],
                            o = 0,
                            l = 7,
                            d = 4;
                        for (
                            0 === s && ((l = 138), (d = 3)),
                                t[2 * (a + 1) + 1] = 65535,
                                n = 0;
                            n <= a;
                            n++
                        )
                            (r = s),
                                (s = t[2 * (n + 1) + 1]),
                                (++o < l && r === s) ||
                                    (o < d
                                        ? (e.bl_tree[2 * r] += o)
                                        : 0 !== r
                                        ? (r !== i && e.bl_tree[2 * r]++,
                                          e.bl_tree[32]++)
                                        : o <= 10
                                        ? e.bl_tree[34]++
                                        : e.bl_tree[36]++,
                                    (o = 0),
                                    (i = r),
                                    0 === s
                                        ? ((l = 138), (d = 3))
                                        : r === s
                                        ? ((l = 6), (d = 3))
                                        : ((l = 7), (d = 4)));
                    },
                    N = (e, t, a) => {
                        let n,
                            r,
                            i = -1,
                            s = t[1],
                            o = 0,
                            l = 7,
                            d = 4;
                        for (
                            0 === s && ((l = 138), (d = 3)), n = 0;
                            n <= a;
                            n++
                        )
                            if (
                                ((r = s),
                                (s = t[2 * (n + 1) + 1]),
                                !(++o < l && r === s))
                            ) {
                                if (o < d)
                                    do {
                                        v(e, r, e.bl_tree);
                                    } while (0 != --o);
                                else
                                    0 !== r
                                        ? (r !== i && (v(e, r, e.bl_tree), o--),
                                          v(e, 16, e.bl_tree),
                                          b(e, o - 3, 2))
                                        : o <= 10
                                        ? (v(e, 17, e.bl_tree), b(e, o - 3, 3))
                                        : (v(e, 18, e.bl_tree),
                                          b(e, o - 11, 7));
                                (o = 0),
                                    (i = r),
                                    0 === s
                                        ? ((l = 138), (d = 3))
                                        : r === s
                                        ? ((l = 6), (d = 3))
                                        : ((l = 7), (d = 4));
                            }
                    };
                let L = !1;
                const I = (e, t, a, n) => {
                    b(e, 0 + (n ? 1 : 0), 3),
                        ((e, t, a, n) => {
                            A(e),
                                w(e, a),
                                w(e, ~a),
                                e.pending_buf.set(
                                    e.window.subarray(t, t + a),
                                    e.pending
                                ),
                                (e.pending += a);
                        })(e, t, a);
                };
                (e.exports._tr_init = (e) => {
                    L ||
                        ((() => {
                            let e, t, i, g, m;
                            const w = new Array(16);
                            for (i = 0, g = 0; g < 28; g++)
                                for (h[g] = i, e = 0; e < 1 << a[g]; e++)
                                    d[i++] = g;
                            for (d[i - 1] = g, m = 0, g = 0; g < 16; g++)
                                for (c[g] = m, e = 0; e < 1 << n[g]; e++)
                                    l[m++] = g;
                            for (m >>= 7; g < 30; g++)
                                for (
                                    c[g] = m << 7, e = 0;
                                    e < 1 << (n[g] - 7);
                                    e++
                                )
                                    l[256 + m++] = g;
                            for (t = 0; t <= 15; t++) w[t] = 0;
                            for (e = 0; e <= 143; )
                                (s[2 * e + 1] = 8), e++, w[8]++;
                            for (; e <= 255; ) (s[2 * e + 1] = 9), e++, w[9]++;
                            for (; e <= 279; ) (s[2 * e + 1] = 7), e++, w[7]++;
                            for (; e <= 287; ) (s[2 * e + 1] = 8), e++, w[8]++;
                            for (y(s, 287, w), e = 0; e < 30; e++)
                                (o[2 * e + 1] = 5), (o[2 * e] = k(e, 5));
                            (f = new u(s, a, 257, 286, 15)),
                                (_ = new u(o, n, 0, 30, 15)),
                                (p = new u(new Array(0), r, 0, 19, 7));
                        })(),
                        (L = !0)),
                        (e.l_desc = new g(e.dyn_ltree, f)),
                        (e.d_desc = new g(e.dyn_dtree, _)),
                        (e.bl_desc = new g(e.bl_tree, p)),
                        (e.bi_buf = 0),
                        (e.bi_valid = 0),
                        x(e);
                }),
                    (e.exports._tr_stored_block = I),
                    (e.exports._tr_flush_block = (e, t, a, n) => {
                        let r,
                            l,
                            d = 0;
                        e.level > 0
                            ? (2 === e.strm.data_type &&
                                  (e.strm.data_type = ((e) => {
                                      let t,
                                          a = 4093624447;
                                      for (t = 0; t <= 31; t++, a >>>= 1)
                                          if (1 & a && 0 !== e.dyn_ltree[2 * t])
                                              return 0;
                                      if (
                                          0 !== e.dyn_ltree[18] ||
                                          0 !== e.dyn_ltree[20] ||
                                          0 !== e.dyn_ltree[26]
                                      )
                                          return 1;
                                      for (t = 32; t < 256; t++)
                                          if (0 !== e.dyn_ltree[2 * t])
                                              return 1;
                                      return 0;
                                  })(e)),
                              S(e, e.l_desc),
                              S(e, e.d_desc),
                              (d = ((e) => {
                                  let t;
                                  for (
                                      T(e, e.dyn_ltree, e.l_desc.max_code),
                                          T(e, e.dyn_dtree, e.d_desc.max_code),
                                          S(e, e.bl_desc),
                                          t = 18;
                                      t >= 3 && 0 === e.bl_tree[2 * i[t] + 1];
                                      t--
                                  );
                                  return (
                                      (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t
                                  );
                              })(e)),
                              (r = (e.opt_len + 3 + 7) >>> 3),
                              (l = (e.static_len + 3 + 7) >>> 3),
                              l <= r && (r = l))
                            : (r = l = a + 5),
                            a + 4 <= r && -1 !== t
                                ? I(e, t, a, n)
                                : 4 === e.strategy || l === r
                                ? (b(e, 2 + (n ? 1 : 0), 3), R(e, s, o))
                                : (b(e, 4 + (n ? 1 : 0), 3),
                                  ((e, t, a, n) => {
                                      let r;
                                      for (
                                          b(e, t - 257, 5),
                                              b(e, a - 1, 5),
                                              b(e, n - 4, 4),
                                              r = 0;
                                          r < n;
                                          r++
                                      )
                                          b(e, e.bl_tree[2 * i[r] + 1], 3);
                                      N(e, e.dyn_ltree, t - 1),
                                          N(e, e.dyn_dtree, a - 1);
                                  })(
                                      e,
                                      e.l_desc.max_code + 1,
                                      e.d_desc.max_code + 1,
                                      d + 1
                                  ),
                                  R(e, e.dyn_ltree, e.dyn_dtree)),
                            x(e),
                            n && A(e);
                    }),
                    (e.exports._tr_tally = (e, t, a) => (
                        (e.pending_buf[e.d_buf + 2 * e.last_lit] =
                            (t >>> 8) & 255),
                        (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
                        (e.pending_buf[e.l_buf + e.last_lit] = 255 & a),
                        e.last_lit++,
                        0 === t
                            ? e.dyn_ltree[2 * a]++
                            : (e.matches++,
                              t--,
                              e.dyn_ltree[2 * (d[a] + 256 + 1)]++,
                              e.dyn_dtree[2 * m(t)]++),
                        e.last_lit === e.lit_bufsize - 1
                    )),
                    (e.exports._tr_align = (e) => {
                        b(e, 2, 3),
                            v(e, 256, s),
                            ((e) => {
                                16 === e.bi_valid
                                    ? (w(e, e.bi_buf),
                                      (e.bi_buf = 0),
                                      (e.bi_valid = 0))
                                    : e.bi_valid >= 8 &&
                                      ((e.pending_buf[e.pending++] =
                                          255 & e.bi_buf),
                                      (e.bi_buf >>= 8),
                                      (e.bi_valid -= 8));
                            })(e);
                    });
            },
            292: (e) => {
                "use strict";
                e.exports = function () {
                    (this.input = null),
                        (this.next_in = 0),
                        (this.avail_in = 0),
                        (this.total_in = 0),
                        (this.output = null),
                        (this.next_out = 0),
                        (this.avail_out = 0),
                        (this.total_out = 0),
                        (this.msg = ""),
                        (this.state = null),
                        (this.data_type = 2),
                        (this.adler = 0);
                };
            },
            713: (e) => {
                e.exports = class {
                    constructor(e, t, a, n, r, i, s, o) {
                        (this.dumpResult = e),
                            (this.matchNames = t),
                            (this.matchAltNames = a),
                            (this.matchAliases = n),
                            (this.matchCategories = r),
                            (this.verboseCategories = i),
                            (this.queryLanguages = s),
                            (this.resultLanguage = o);
                    }
                };
            },
            657: (e, t, a) => {
                const n = a(865),
                    { LanguagesEnum: r } = a(608),
                    { getIndex: i } = a(359);
                let s = {},
                    o = { count: 0 },
                    l = { maxLength: 100, maxCount: 1e3 };
                function d(e) {
                    return "string" == typeof e && n[e];
                }
                function h(e) {
                    return "string" == typeof e && r[e];
                }
                function c(e) {
                    for (let t in e) if (e.hasOwnProperty(t)) return !1;
                    return !0;
                }
                (s.setLimit = function (e) {
                    "number" == typeof e.maxLength &&
                        (l.maxLength = e.maxLength),
                        "number" == typeof e.maxCount &&
                            (l.maxCount = e.maxCount);
                }),
                    (s.addAltName = function (e, t, a, n) {
                        return !(
                            !h(e) ||
                            !d(t) ||
                            !(function (e) {
                                return (
                                    "string" == typeof e &&
                                    e.length > 0 &&
                                    e.length <= l.maxLength
                                );
                            })(a) ||
                            !(function (e, t, a) {
                                if ("string" != typeof e) return !1;
                                const n = i(t, a);
                                return void 0 !== n && void 0 !== n.namemap[e];
                            })(n, e, t) ||
                            o.count >= l.maxCount ||
                            (o[e] || (o[e] = {}),
                            o[e][t] || (o[e][t] = {}),
                            (o[e][t][a] = n),
                            o.count++,
                            0)
                        );
                    }),
                    (s.removeAltNames = function (e, t, a) {
                        if (!h(e) || !d(t)) return !1;
                        if (void 0 !== a && "string" != typeof a) return !1;
                        try {
                            void 0 !== a
                                ? (o.count--, delete o[e][t][a])
                                : ((o.count -= Object.keys(o[e][t]).length),
                                  delete o[e][t]),
                                c(o[e][t]) && delete o[e][t],
                                c(o[e]) && delete o[e];
                        } catch (e) {}
                        return !0;
                    }),
                    (s.getAltNamesList = function (e, t) {
                        return o[e] && o[e][t] ? Object.keys(o[e][t]) : [];
                    }),
                    (s.getFilename = function (e, t, a) {
                        return o[e] && o[e][t] && o[e][t][a]
                            ? o[e][t][a]
                            : void 0;
                    }),
                    s.addAltName(
                        "English",
                        "characters",
                        "Childe",
                        "tartaglia"
                    ),
                    s.addAltName("English", "talents", "Childe", "tartaglia"),
                    s.addAltName(
                        "English",
                        "constellations",
                        "Childe",
                        "tartaglia"
                    ),
                    s.addAltName(
                        "English",
                        "characters",
                        "Baal",
                        "raidenshogun"
                    ),
                    s.addAltName("English", "talents", "Baal", "raidenshogun"),
                    s.addAltName(
                        "English",
                        "constellations",
                        "Baal",
                        "raidenshogun"
                    ),
                    s.addAltName(
                        "English",
                        "talents",
                        "Anemo Traveler",
                        "traveleranemo"
                    ),
                    s.addAltName(
                        "English",
                        "talents",
                        "Electro Traveler",
                        "travelerelectro"
                    ),
                    s.addAltName(
                        "English",
                        "talents",
                        "Geo Traveler",
                        "travelergeo"
                    ),
                    s.addAltName(
                        "English",
                        "constellations",
                        "Anemo Traveler",
                        "traveleranemo"
                    ),
                    s.addAltName(
                        "English",
                        "constellations",
                        "Electro Traveler",
                        "travelerelectro"
                    ),
                    s.addAltName(
                        "English",
                        "constellations",
                        "Geo Traveler",
                        "travelergeo"
                    ),
                    s.addAltName("English", "enemies", "Dvalin", "stormterror"),
                    (e.exports = s);
            },
            865: (e) => {
                e.exports = {
                    characters: "characters",
                    outfits: "outfits",
                    talents: "talents",
                    constellations: "constellations",
                    weapons: "weapons",
                    foods: "foods",
                    materials: "materials",
                    weaponmaterialtypes: "weaponmaterialtypes",
                    talentmaterialtypes: "talentmaterialtypes",
                    artifacts: "artifacts",
                    domains: "domains",
                    enemies: "enemies",
                    rarity: "rarity",
                    elements: "elements",
                    achievements: "achievements",
                    achievementgroups: "achievementgroups",
                    windgliders: "windgliders",
                    animals: "animals",
                    namecards: "namecards",
                    geographies: "geographies",
                    adventureranks: "adventureranks",
                };
            },
            359: (e, t, a) => {
                let n = a(780);
                const r = a(591);
                n instanceof ArrayBuffer &&
                    (n = JSON.parse(r.ungzip(n, { to: "string" }))),
                    n.data || (n.data = {}),
                    n.index || (n.index = {}),
                    n.image || (n.image = {}),
                    n.url || (n.url = {}),
                    n.stats || (n.stats = {}),
                    n.curve || (n.curve = {}),
                    n.version || (n.version = {});
                const i = n.data,
                    s = n.index,
                    o = n.image,
                    l = n.url,
                    d = n.stats,
                    h = n.curve,
                    c = n.version,
                    u = [
                        "characters",
                        "outfits",
                        "artifacts",
                        "weapons",
                        "constellations",
                        "talents",
                        "materials",
                        "foods",
                        "elements",
                        "domains",
                        "enemies",
                        "achievementgroups",
                        "windgliders",
                        "animals",
                        "namecards",
                        "geographies",
                    ],
                    f = [
                        "characters",
                        "outfits",
                        "artifacts",
                        "weapons",
                        "foods",
                        "materials",
                    ],
                    _ = ["characters", "weapons", "enemies"],
                    p = ["characters", "weapons", "enemies"],
                    g = {
                        characters: function (e) {
                            const t = w("characters", e),
                                a = b("characters");
                            return void 0 === t || void 0 === a
                                ? void 0
                                : function (e, n) {
                                      if (((e = parseInt(e, 10)), isNaN(e)))
                                          return;
                                      if (e > 90 || e < 1) return;
                                      const [r, i] = v(t.promotion, e, n);
                                      let s = {
                                          level: e,
                                          ascension: r,
                                          hp:
                                              t.base.hp * a[e][t.curve.hp] +
                                              i.hp,
                                          attack:
                                              t.base.attack *
                                                  a[e][t.curve.attack] +
                                              i.attack,
                                          defense:
                                              t.base.defense *
                                                  a[e][t.curve.defense] +
                                              i.defense,
                                          specialized: i.specialized,
                                      };
                                      return (
                                          "FIGHT_PROP_CRITICAL" ===
                                          t.specialized
                                              ? (s.specialized +=
                                                    t.base.critrate)
                                              : "FIGHT_PROP_CRITICAL_HURT" ===
                                                    t.specialized &&
                                                (s.specialized +=
                                                    t.base.critdmg),
                                          s
                                      );
                                  };
                        },
                        weapons: function (e) {
                            const t = w("weapons", e),
                                a = b("weapons");
                            if (void 0 === t || void 0 === a) return;
                            const n =
                                t.promotion[t.promotion.length - 1].maxlevel;
                            return function (e, r) {
                                if (((e = parseInt(e, 10)), isNaN(e))) return;
                                if (e > n || e < 1) return;
                                const [i, s] = v(t.promotion, e, r);
                                return {
                                    level: e,
                                    ascension: i,
                                    attack:
                                        t.base.attack * a[e][t.curve.attack] +
                                        s.attack,
                                    specialized:
                                        t.base.specialized *
                                        a[e][t.curve.specialized],
                                };
                            };
                        },
                        enemies: function (e) {
                            const t = w("enemies", e),
                                a = b("enemies");
                            return void 0 === t || void 0 === a
                                ? void 0
                                : function (e) {
                                      if (
                                          ((e = parseInt(e, 10)),
                                          !(isNaN(e) || e > 200 || e < 1))
                                      )
                                          return {
                                              level: e,
                                              hp: t.base.hp * a[e][t.curve.hp],
                                              attack:
                                                  t.base.attack *
                                                  a[e][t.curve.attack],
                                              defense: 5 * e + 500,
                                          };
                                  };
                        },
                    };
                function m(e, t) {
                    try {
                        return o[e][t];
                    } catch (e) {
                        return;
                    }
                }
                function w(e, t) {
                    try {
                        return d[e][t];
                    } catch (e) {
                        return;
                    }
                }
                function b(e) {
                    try {
                        return h[e];
                    } catch (e) {
                        return;
                    }
                }
                function v(e, t, a) {
                    for (let n = e.length - 2; n >= 0; n--) {
                        if (t > e[n].maxlevel) return [n + 1, e[n + 1]];
                        if (t === e[n].maxlevel)
                            return (Number.isFinite(a) && a > n) || "+" === a
                                ? [n + 1, e[n + 1]]
                                : [n, e[n]];
                    }
                    return [0, e[0]];
                }
                function k(e) {
                    return !!e && "object" == typeof e;
                }
                function y(e, t, a, n) {
                    try {
                        return t ? e[t][a][n] : e[a][n];
                    } catch {
                        return;
                    }
                }
                function x(e, t, a, n) {
                    for (const a of t) e[a] || (e[a] = {}), (e = e[a]);
                    e[a] = n;
                }
                function A(e, t, a, n) {
                    if (
                        0 !== (n = n.filter((e) => "string" == typeof e)).length
                    ) {
                        for (const a of t) e[a] || (e[a] = {}), (e = e[a]);
                        if (!e[a]) return (e[a] = n);
                        for (const t of n)
                            "string" == typeof t &&
                                (e[a].includes(t) || e[a].push(t));
                    }
                }
                const z = a(608).languages;
                Object.values(a(865)),
                    (e.exports = {
                        addData: function (e, t = !0) {
                            if (
                                ((e instanceof ArrayBuffer ||
                                    (Buffer && e instanceof Buffer)) &&
                                    (e = JSON.parse(
                                        r.ungzip(e, { to: "string" })
                                    )),
                                k(e))
                            ) {
                                if (k(e.data))
                                    for (const a of z)
                                        if (k(e.data[a]))
                                            for (const n of Object.keys(
                                                e.data[a]
                                            ))
                                                if (k(e.data[a][n]))
                                                    for (const r in e.data[a][
                                                        n
                                                    ])
                                                        k(e.data[a][n][r]) &&
                                                            ((!t &&
                                                                y(
                                                                    i,
                                                                    a,
                                                                    n,
                                                                    r
                                                                )) ||
                                                                x(
                                                                    i,
                                                                    [a, n],
                                                                    r,
                                                                    e.data[a][
                                                                        n
                                                                    ][r]
                                                                ));
                                if (k(e.index))
                                    for (const t of z)
                                        if (k(e.index[t]))
                                            for (const a of Object.keys(
                                                e.index[t]
                                            ))
                                                if (
                                                    (s[t][a] || (s[t][a] = {}),
                                                    k(e.index[t][a]))
                                                )
                                                    for (const n of [
                                                        "namemap",
                                                        "names",
                                                        "aliases",
                                                        "categories",
                                                        "properties",
                                                    ])
                                                        if (
                                                            (s[t][a][n] ||
                                                                (s[t][a][n] =
                                                                    {}),
                                                            k(e.index[t][a][n]))
                                                        )
                                                            for (const r in e
                                                                .index[t][a][n])
                                                                switch (n) {
                                                                    case "namemap":
                                                                    case "names":
                                                                    case "aliases":
                                                                        if (
                                                                            "string" !=
                                                                            typeof e
                                                                                .index[
                                                                                t
                                                                            ][
                                                                                a
                                                                            ][
                                                                                n
                                                                            ][r]
                                                                        )
                                                                            continue;
                                                                        x(
                                                                            s,
                                                                            [
                                                                                t,
                                                                                a,
                                                                                n,
                                                                            ],
                                                                            r,
                                                                            e
                                                                                .index[
                                                                                t
                                                                            ][
                                                                                a
                                                                            ][
                                                                                n
                                                                            ][r]
                                                                        );
                                                                        break;
                                                                    case "categories":
                                                                    case "properties":
                                                                        if (
                                                                            !Array.isArray(
                                                                                e
                                                                                    .index[
                                                                                    t
                                                                                ][
                                                                                    a
                                                                                ][
                                                                                    n
                                                                                ][
                                                                                    r
                                                                                ]
                                                                            )
                                                                        )
                                                                            continue;
                                                                        A(
                                                                            s,
                                                                            [
                                                                                t,
                                                                                a,
                                                                                n,
                                                                            ],
                                                                            r,
                                                                            e
                                                                                .index[
                                                                                t
                                                                            ][
                                                                                a
                                                                            ][
                                                                                n
                                                                            ][r]
                                                                        );
                                                                }
                                if (k(e.image))
                                    for (const a of Object.keys(e.image))
                                        if (k(e.image[a]))
                                            for (const n in e.image[a])
                                                k(e.image[a][n]) &&
                                                    ((!t && y(o, a, n)) ||
                                                        (x(
                                                            o,
                                                            [a],
                                                            n,
                                                            e.image[a][n]
                                                        ),
                                                        u.includes(a) ||
                                                            u.push(a)));
                                if (k(e.stats))
                                    for (const a of Object.keys(e.stats))
                                        if (k(e.stats[a]))
                                            for (const n in e.stats[a])
                                                k(e.stats[a][n]) &&
                                                    ((!t && y(o, a, n)) ||
                                                        (x(
                                                            d,
                                                            [a],
                                                            n,
                                                            e.stats[a][n]
                                                        ),
                                                        _.includes(a) ||
                                                            _.push(a)));
                                if (k(e.curve))
                                    for (const a of Object.keys(e.curve))
                                        if (k(e.curve[a]))
                                            for (const n in e.curve[a])
                                                k(e.curve[a][n]) &&
                                                    ((!t && y(o, a, n)) ||
                                                        (x(
                                                            h,
                                                            [a],
                                                            n,
                                                            e.curve[a][n]
                                                        ),
                                                        p.includes(a) ||
                                                            p.push(a)));
                                if (k(e.url))
                                    for (const a of Object.keys(e.url))
                                        if (k(e.url[a]))
                                            for (const n in e.url[a])
                                                k(e.url[a][n]) &&
                                                    ((!t && y(o, a, n)) ||
                                                        (x(
                                                            l,
                                                            [a],
                                                            n,
                                                            e.url[a][n]
                                                        ),
                                                        f.includes(a) ||
                                                            f.push(a)));
                            }
                        },
                        getData: function (e, t, a) {
                            try {
                                let n = i[e][t][a];
                                return (
                                    void 0 === n.images &&
                                        u.includes(t) &&
                                        (n.images = m(t, a)),
                                    void 0 === n.url &&
                                        f.includes(t) &&
                                        (n.url = (function (e, t) {
                                            try {
                                                return l[e][t];
                                            } catch (e) {
                                                return;
                                            }
                                        })(t, a)),
                                    void 0 === n.stats &&
                                        _.includes(t) &&
                                        g[t] &&
                                        (n.stats = g[t](a)),
                                    "talents" === t &&
                                        void 0 === n.combat1.parameters &&
                                        (function (e, t) {
                                            const a = w("talents", t);
                                            for (const t of [
                                                "combat1",
                                                "combat2",
                                                "combatsp",
                                                "combat3",
                                            ])
                                                void 0 !== a[t] &&
                                                    (e[
                                                        t
                                                    ].attributes.parameters =
                                                        a[t]);
                                        })(n, a),
                                    void 0 === n.version &&
                                        (n.version = (function (e, t) {
                                            try {
                                                return c[e][t];
                                            } catch (e) {
                                                return "";
                                            }
                                        })(t, a)),
                                    n
                                );
                            } catch (e) {
                                return;
                            }
                        },
                        getIndex: function (e, t) {
                            try {
                                return s[e][t];
                            } catch (e) {
                                return;
                            }
                        },
                        getImage: m,
                        getStats: w,
                    });
            },
            21: (e) => {
                const t = {};
                function a(e) {
                    let t = e[e.length - 1];
                    return isNaN(parseInt(t, 10)) ? t : void 0;
                }
                function n(e) {
                    return e.substring(0, e.length - 1);
                }
                (t.makeFilename = function (e) {
                    return (e = e
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, ""))
                        .toLowerCase()
                        .replace(/[^a-z]/g, "");
                }),
                    (t.substat = function (e, t) {
                        if (void 0 !== t)
                            return e.replace(/([^%]*)(%?)/, `$1 ${t}$2`);
                    }),
                    (t.effect = function (e, ...t) {
                        if (void 0 !== e && 0 !== t.length) {
                            for (let a = 0; a < t[0].length; a++) {
                                let n = t.reduce(
                                    (e, t) => (
                                        "" !== e && (e += "/"), e + t[a]
                                    ),
                                    ""
                                );
                                e = e.replace(new RegExp(`\\{${a}\\}`, "g"), n);
                            }
                            return e;
                        }
                    }),
                    (t.WeaponFormat = {
                        R1: 0,
                        R2: 1,
                        R3: 2,
                        R4: 3,
                        R5: 4,
                        AllSlash: 5,
                        AllSlashWSuffix: 6,
                        AllDash: 7,
                        AllDashWSuffix: 8,
                    }),
                    (t.formatWeaponEffect = function (e, r, i) {
                        let s,
                            o = [];
                        switch (r) {
                            case t.WeaponFormat.R1:
                                o = e.r1;
                                break;
                            case t.WeaponFormat.R2:
                                o = e.r2;
                                break;
                            case t.WeaponFormat.R3:
                                o = e.r3;
                                break;
                            case t.WeaponFormat.R4:
                                o = e.r4;
                                break;
                            case t.WeaponFormat.R5:
                                o = e.r5;
                                break;
                            case t.WeaponFormat.AllSlash:
                                for (let t = 0; t < e.r1.length; t++)
                                    (s = a(e.r1[t])),
                                        s
                                            ? o.push(
                                                  `${n(e.r1[t])}/${n(
                                                      e.r2[t]
                                                  )}/${n(e.r3[t])}/${n(
                                                      e.r4[t]
                                                  )}/${n(e.r5[t])}${s}`
                                              )
                                            : o.push(
                                                  `${e.r1[t]}/${e.r2[t]}/${e.r3[t]}/${e.r4[t]}/${e.r5[t]}`
                                              );
                                break;
                            case t.WeaponFormat.AllSlashWSuffix:
                                for (let t = 0; t < e.r1.length; t++)
                                    o.push(
                                        `${e.r1[t]}/${e.r2[t]}/${e.r3[t]}/${e.r4[t]}/${e.r5[t]}`
                                    );
                                break;
                            case t.WeaponFormat.AllDash:
                                for (let t = 0; t < e.r1.length; t++)
                                    (s = a(e.r1[t])),
                                        s
                                            ? o.push(
                                                  `${n(e.r1[t])}-${n(
                                                      e.r5[t]
                                                  )}${s}`
                                              )
                                            : o.push(`${e.r1[t]}-${e.r5[t]}`);
                                break;
                            case t.WeaponFormat.AllDashWSuffix:
                                for (let t = 0; t < e.r1.length; t++)
                                    o.push(`${e.r1[t]}-${e.r5[t]}`);
                        }
                        let l = e.effect;
                        for (let e = 0; e < o.length; e++)
                            l = l.replace(`{${e}}`, o[e]);
                        return l;
                    }),
                    (t.formatTalentLabels = function (e, t) {
                        if (!Number.isInteger(t) || !(t >= 1 && t <= 15))
                            throw "talentlevel parameter must be an integer between 1 and 15";
                        let a = [];
                        const n = /{(.*?)}/g;
                        for (let r of e.labels) {
                            let i = r.matchAll(n);
                            for (let a of i) {
                                const n = a[1],
                                    [i, s] = n.split(":");
                                let o = e.parameters[i][t - 1];
                                "I" !== s
                                    ? (s.includes("P") && (o *= 100),
                                      s.includes("F") && (o = o.toFixed(s[1])),
                                      s.includes("P") && (o += "%"),
                                      (r = r.replace(a[0], o)))
                                    : (r = r.replace(a[0], o));
                            }
                            a.push(r);
                        }
                        return a;
                    }),
                    (e.exports = t);
            },
            608: (e, t, a) => {
                const n = a(360),
                    r = {
                        CHS: "ChineseSimplified",
                        CHT: "ChineseTraditional",
                        DE: "German",
                        EN: "English",
                        ES: "Spanish",
                        FR: "French",
                        ID: "Indonesian",
                        JP: "Japanese",
                        KR: "Korean",
                        PT: "Portuguese",
                        RU: "Russian",
                        TH: "Thai",
                        VI: "Vietnamese",
                    },
                    i = Object.values(r),
                    s = Object.keys(r),
                    o = Object.keys(r).concat(Object.values(r));
                e.exports = {
                    LanguagesEnum: {
                        ChineseSimplified: "ChineseSimplified",
                        ChineseTraditional: "ChineseTraditional",
                        English: "English",
                        French: "French",
                        German: "German",
                        Indonesian: "Indonesian",
                        Japanese: "Japanese",
                        Korean: "Korean",
                        Portuguese: "Portuguese",
                        Russian: "Russian",
                        Spanish: "Spanish",
                        Thai: "Thai",
                        Vietnamese: "Vietnamese",
                    },
                    languages: i,
                    languageCodes: s,
                    languageMap: r,
                    localeMap: {
                        ChineseSimplified: "zh-cn",
                        ChineseTraditional: "zh-tw",
                        German: "de",
                        English: "en",
                        Spanish: "es",
                        French: "fr",
                        Indonesian: "id",
                        Japanese: "ja",
                        Korean: "ko",
                        Portuguese: "pt",
                        Russian: "ru",
                        Thai: "th",
                        Vietnamese: "vi",
                    },
                    format: function e(t) {
                        if ("string" == typeof t)
                            return (function (e, t) {
                                let a = n.go(e, t, { limit: 1 })[0];
                                return (
                                    void 0 !== a &&
                                        (a =
                                            a.target.length < 4
                                                ? r[a.target]
                                                : a.target),
                                    a
                                );
                            })(t, o);
                        if (Array.isArray(t)) {
                            let a = [];
                            for (let n of t)
                                (n = e(n)), n && !a.includes(n) && a.push(n);
                            if (a.length) return a;
                        }
                    },
                };
            },
            225: (e, t, a) => {
                const n = a(360),
                    r = a(608),
                    i = a(865),
                    s = a(657),
                    o = a(713),
                    { getData: l, getIndex: d, addData: h } = a(359),
                    c = {},
                    u = new o(!1, !0, !0, !1, !1, !1, ["English"], "English");
                function f(e, t) {
                    let a = n.go(e, t, { limit: 1 })[0];
                    return void 0 === a ? void 0 : a.target;
                }
                function _(e) {
                    if (!e || "object" != typeof e) return;
                    let t = {};
                    return (
                        [
                            "dumpResult",
                            "matchNames",
                            "matchAltNames",
                            "matchAliases",
                            "matchCategories",
                            "verboseCategories",
                        ].forEach((a) => {
                            "boolean" == typeof e[a] && (t[a] = e[a]);
                        }),
                        (e.resultLanguage = r.format(e.resultLanguage)),
                        void 0 !== e.resultLanguage &&
                            (t.resultLanguage = e.resultLanguage),
                        (e.queryLanguages = r.format(e.queryLanguages)),
                        void 0 !== e.queryLanguages &&
                            (t.queryLanguages = Array.isArray(e.queryLanguages)
                                ? e.queryLanguages
                                : [e.queryLanguages]),
                        t
                    );
                }
                function p(e, t, a, n) {
                    let r = f(
                        "" + e,
                        (function (e, t, a) {
                            let n = a.matchCategories ? ["names"] : [];
                            for (const r of e) {
                                const e = d(r, t);
                                void 0 !== e &&
                                    (a.matchNames &&
                                        e.namemap &&
                                        (n = n.concat(
                                            Object.values(e.namemap)
                                        )),
                                    a.matchAltNames &&
                                        (n = n.concat(s.getAltNamesList(r, t))),
                                    a.matchAliases &&
                                        e.aliases &&
                                        (n = n.concat(Object.keys(e.aliases))),
                                    a.matchCategories &&
                                        e.categories &&
                                        (n = n.concat(
                                            Object.keys(e.categories)
                                        )));
                            }
                            return n;
                        })(
                            (a = Object.assign({}, u, _(a))).queryLanguages,
                            t,
                            a
                        )
                    );
                    if (void 0 === r)
                        return a.dumpResult
                            ? g(e, t, void 0, a, void 0, void 0)
                            : void 0;
                    for (let i of a.queryLanguages) {
                        let o = d(i, t);
                        if (void 0 !== o) {
                            if (a.matchNames && void 0 !== o.names[r]) {
                                const i = o.names[r];
                                if (n) return i;
                                let s = l(a.resultLanguage, t, i);
                                return a.dumpResult ? g(e, t, r, a, i, s) : s;
                            }
                            if (a.matchAltNames && s.getFilename(i, t, r)) {
                                const o = s.getFilename(i, t, r);
                                if (n) return o;
                                let d = l(a.resultLanguage, t, o);
                                return a.dumpResult ? g(e, t, r, a, o, d) : d;
                            }
                            if (a.matchAliases && void 0 !== o.aliases[r]) {
                                const i = o.aliases[r];
                                if (n) return i;
                                let s = l(a.resultLanguage, t, i);
                                return a.dumpResult ? g(e, t, r, a, i, s) : s;
                            }
                            if (
                                a.matchCategories &&
                                ("names" === r || void 0 !== o.categories[r])
                            ) {
                                let n = d(a.resultLanguage, t);
                                if (void 0 === n) return;
                                let i =
                                        "names" === r
                                            ? Object.keys(n.namemap)
                                            : o.categories[r],
                                    s = i.reduce((e, r) => {
                                        let i = a.verboseCategories
                                            ? l(a.resultLanguage, t, r)
                                            : n.namemap[r];
                                        return void 0 !== i && e.push(i), e;
                                    }, []);
                                return a.dumpResult ? g(e, t, r, a, i, s) : s;
                            }
                        }
                    }
                    return a.dumpResult
                        ? g(e, t, r, a, void 0, void 0)
                        : void 0;
                }
                function g(e, t, a, n, r, i) {
                    return {
                        query: e,
                        folder: t,
                        match: a,
                        options: JSON.parse(JSON.stringify(n)),
                        filename:
                            void 0 !== r ? JSON.parse(JSON.stringify(r)) : r,
                        result: i,
                    };
                }
                (c.setOptions = function (e) {
                    Object.assign(u, _(e));
                }),
                    (c.getOptions = function () {
                        return JSON.parse(JSON.stringify(u));
                    }),
                    (c.categories = c.category =
                        function (e, t, a) {
                            if ("string" != typeof t || void 0 === i[t]) return;
                            a = Object.assign({}, u, _(a));
                            const n = d(a.resultLanguage, t),
                                r = Object.keys(n.properties);
                            if ("names" === e) return r;
                            {
                                let t = f("" + e, r);
                                if (void 0 === t) return;
                                return n.properties[t];
                            }
                        }),
                    (c.characters = c.character =
                        function (e, t) {
                            return p(e, i.characters, t);
                        }),
                    (c.outfits = c.outfit =
                        function (e, t) {
                            return p(e, i.outfits, t);
                        }),
                    (c.talents = c.talent =
                        function (e, t) {
                            return p(e, i.talents, t);
                        }),
                    (c.weapons = c.weapon =
                        function (e, t) {
                            return p(e, i.weapons, t);
                        }),
                    (c.weaponmaterialtypes = c.weaponmaterialtype =
                        function (e, t) {
                            return p(e, i.weaponmaterialtypes, t);
                        }),
                    (c.talentmaterialtypes = c.talentmaterialtype =
                        function (e, t) {
                            return p(e, i.talentmaterialtypes, t);
                        }),
                    (c.materials = c.material =
                        function (e, t) {
                            return p(e, i.materials, t);
                        }),
                    (c.elements = c.element =
                        function (e, t) {
                            return p(e, i.elements, t);
                        }),
                    (c.constellations = c.constellation =
                        function (e, t) {
                            return p(e, i.constellations, t);
                        }),
                    (c.artifacts = c.artifact =
                        function (e, t) {
                            return p(e, i.artifacts, t);
                        }),
                    (c.rarity = function (e, t) {
                        return p(e, i.rarity, t);
                    }),
                    (c.foods = c.food =
                        function (e, t) {
                            return p(e, i.foods, t);
                        }),
                    (c.domains = c.domain =
                        function (e, t) {
                            return p(e, i.domains, t);
                        }),
                    (c.enemies = c.enemy =
                        function (e, t) {
                            return p(e, i.enemies, t);
                        }),
                    (c.achievements = c.achievement =
                        function (e, t) {
                            return p(e, i.achievements, t);
                        }),
                    (c.achievementgroups = c.achievementgroup =
                        function (e, t) {
                            return p(e, i.achievementgroups, t);
                        }),
                    (c.windgliders = c.windglider =
                        function (e, t) {
                            return p(e, i.windgliders, t);
                        }),
                    (c.animals =
                        c.animal =
                        c.wildlife =
                            function (e, t) {
                                return p(e, i.animals, t);
                            }),
                    (c.namecards = c.namecard =
                        function (e, t) {
                            return p(e, i.namecards, t);
                        }),
                    (c.geographies =
                        c.geography =
                        c.viewpoints =
                        c.viewpoint =
                            function (e, t) {
                                return p(e, i.geographies, t);
                            }),
                    (c.adventureranks = c.adventurerank =
                        function (e, t) {
                            return p(e, i.adventureranks, t);
                        }),
                    (c.searchFolder = function (e, t, a) {
                        if ("string" == typeof e) return p(t, e, a);
                    }),
                    (c.helper = a(21)),
                    (c.Language = c.Languages = r.LanguagesEnum),
                    (c.Folder = c.Folders = i),
                    (c.addAltName = function (e, t, a, n) {
                        const r = p(
                            n,
                            t,
                            new o(!1, !0, !1, !1, !1, !1, [e]),
                            !0
                        );
                        return !!r && s.addAltName(e, t, a, r);
                    }),
                    (c.removeAltNames = s.removeAltNames),
                    (c.setAltNameLimits = s.setLimit),
                    (c.Options = o),
                    (c.addData = h),
                    (e.exports = c);
            },
        }),
        (t = {}),
        (function a(n) {
            if (t[n]) return t[n].exports;
            var r = (t[n] = { exports: {} });
            return e[n].call(r.exports, r, r.exports, a), r.exports;
        })(225)
    );
    var e, t;
});
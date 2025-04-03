/*! For license information please see main.7eac9c1c.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      4: (e, t, n) => {
        var r = n(853),
          a = n(43),
          l = n(950);
        function o(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function i(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        var u = Symbol.for("react.element"),
          s = Symbol.for("react.transitional.element"),
          c = Symbol.for("react.portal"),
          f = Symbol.for("react.fragment"),
          d = Symbol.for("react.strict_mode"),
          p = Symbol.for("react.profiler"),
          h = Symbol.for("react.provider"),
          m = Symbol.for("react.consumer"),
          g = Symbol.for("react.context"),
          v = Symbol.for("react.forward_ref"),
          y = Symbol.for("react.suspense"),
          b = Symbol.for("react.suspense_list"),
          k = Symbol.for("react.memo"),
          w = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var S = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
        var x = Symbol.for("react.memo_cache_sentinel"),
          E = Symbol.iterator;
        function C(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (E && e[E]) || e["@@iterator"])
            ? e
            : null;
        }
        var _ = Symbol.for("react.client.reference");
        function P(e) {
          if (null == e) return null;
          if ("function" === typeof e)
            return e.$$typeof === _ ? null : e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case f:
              return "Fragment";
            case c:
              return "Portal";
            case p:
              return "Profiler";
            case d:
              return "StrictMode";
            case y:
              return "Suspense";
            case b:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case g:
                return (e.displayName || "Context") + ".Provider";
              case m:
                return (e._context.displayName || "Context") + ".Consumer";
              case v:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case k:
                return null !== (t = e.displayName || null)
                  ? t
                  : P(e.type) || "Memo";
              case w:
                (t = e._payload), (e = e._init);
                try {
                  return P(e(t));
                } catch (n) {}
            }
          return null;
        }
        var N,
          z,
          L = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          T = Object.assign;
        function R(e) {
          if (void 0 === N)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              (N = (t && t[1]) || ""),
                (z =
                  -1 < n.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < n.stack.indexOf("@")
                    ? "@unknown:0:0"
                    : "");
            }
          return "\n" + N + e + z;
        }
        var O = !1;
        function j(e, t) {
          if (!e || O) return "";
          O = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" === typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (a) {
                        var r = a;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (l) {
                        r = l;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (o) {
                      r = o;
                    }
                    (n = e()) &&
                      "function" === typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (i) {
                  if (i && r && "string" === typeof i.stack)
                    return [i.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name"
            );
            a &&
              a.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var l = r.DetermineComponentFrameRoot(),
              o = l[0],
              i = l[1];
            if (o && i) {
              var u = o.split("\n"),
                s = i.split("\n");
              for (
                a = r = 0;
                r < u.length && !u[r].includes("DetermineComponentFrameRoot");

              )
                r++;
              for (
                ;
                a < s.length && !s[a].includes("DetermineComponentFrameRoot");

              )
                a++;
              if (r === u.length || a === s.length)
                for (
                  r = u.length - 1, a = s.length - 1;
                  1 <= r && 0 <= a && u[r] !== s[a];

                )
                  a--;
              for (; 1 <= r && 0 <= a; r--, a--)
                if (u[r] !== s[a]) {
                  if (1 !== r || 1 !== a)
                    do {
                      if ((r--, 0 > --a || u[r] !== s[a])) {
                        var c = "\n" + u[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= r && 0 <= a);
                  break;
                }
            }
          } finally {
            (O = !1), (Error.prepareStackTrace = n);
          }
          return (n = e ? e.displayName || e.name : "") ? R(n) : "";
        }
        function A(e) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return R(e.type);
            case 16:
              return R("Lazy");
            case 13:
              return R("Suspense");
            case 19:
              return R("SuspenseList");
            case 0:
            case 15:
              return (e = j(e.type, !1));
            case 11:
              return (e = j(e.type.render, !1));
            case 1:
              return (e = j(e.type, !0));
            default:
              return "";
          }
        }
        function D(e) {
          try {
            var t = "";
            do {
              (t += A(e)), (e = e.return);
            } while (e);
            return t;
          } catch (n) {
            return "\nError generating stack: " + n.message + "\n" + n.stack;
          }
        }
        function F(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function M(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function $(e) {
          if (F(e) !== e) throw Error(o(188));
        }
        function I(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = I(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var U = Array.isArray,
          H = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          B = { pending: !1, data: null, method: null, action: null },
          W = [],
          V = -1;
        function Q(e) {
          return { current: e };
        }
        function q(e) {
          0 > V || ((e.current = W[V]), (W[V] = null), V--);
        }
        function Y(e, t) {
          V++, (W[V] = e.current), (e.current = t);
        }
        var K = Q(null),
          G = Q(null),
          X = Q(null),
          J = Q(null);
        function Z(e, t) {
          switch ((Y(X, t), Y(G, e), Y(K, null), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) && (t = t.namespaceURI) ? Gc(t) : 0;
              break;
            default:
              if (
                ((t = (e = 8 === e ? t.parentNode : t).tagName),
                (e = e.namespaceURI))
              )
                t = Xc((e = Gc(e)), t);
              else
                switch (t) {
                  case "svg":
                    t = 1;
                    break;
                  case "math":
                    t = 2;
                    break;
                  default:
                    t = 0;
                }
          }
          q(K), Y(K, t);
        }
        function ee() {
          q(K), q(G), q(X);
        }
        function te(e) {
          null !== e.memoizedState && Y(J, e);
          var t = K.current,
            n = Xc(t, e.type);
          t !== n && (Y(G, e), Y(K, n));
        }
        function ne(e) {
          G.current === e && (q(K), q(G)),
            J.current === e && (q(J), (Ff._currentValue = B));
        }
        var re = Object.prototype.hasOwnProperty,
          ae = r.unstable_scheduleCallback,
          le = r.unstable_cancelCallback,
          oe = r.unstable_shouldYield,
          ie = r.unstable_requestPaint,
          ue = r.unstable_now,
          se = r.unstable_getCurrentPriorityLevel,
          ce = r.unstable_ImmediatePriority,
          fe = r.unstable_UserBlockingPriority,
          de = r.unstable_NormalPriority,
          pe = r.unstable_LowPriority,
          he = r.unstable_IdlePriority,
          me = r.log,
          ge = r.unstable_setDisableYieldValue,
          ve = null,
          ye = null;
        function be(e) {
          if (
            ("function" === typeof me && ge(e),
            ye && "function" === typeof ye.setStrictMode)
          )
            try {
              ye.setStrictMode(ve, e);
            } catch (t) {}
        }
        var ke = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((we(e) / Se) | 0)) | 0;
              },
          we = Math.log,
          Se = Math.LN2;
        var xe = 128,
          Ee = 4194304;
        function Ce(e) {
          var t = 42 & e;
          if (0 !== t) return t;
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
              return 64;
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
              return 4194176 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function _e(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = e.warmLanes;
          e = 0 !== e.finishedLanes;
          var i = 134217727 & n;
          return (
            0 !== i
              ? 0 !== (n = i & ~a)
                ? (r = Ce(n))
                : 0 !== (l &= i)
                ? (r = Ce(l))
                : e || (0 !== (o = i & ~o) && (r = Ce(o)))
              : 0 !== (i = n & ~a)
              ? (r = Ce(i))
              : 0 !== l
              ? (r = Ce(l))
              : e || (0 !== (o = n & ~o) && (r = Ce(o))),
            0 === r
              ? 0
              : 0 !== t &&
                t !== r &&
                0 === (t & a) &&
                ((a = r & -r) >= (o = t & -t) ||
                  (32 === a && 0 !== (4194176 & o)))
              ? t
              : r
          );
        }
        function Pe(e, t) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
          );
        }
        function Ne(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
              return t + 250;
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
            default:
              return -1;
          }
        }
        function ze() {
          var e = xe;
          return 0 === (4194176 & (xe <<= 1)) && (xe = 128), e;
        }
        function Le() {
          var e = Ee;
          return 0 === (62914560 & (Ee <<= 1)) && (Ee = 4194304), e;
        }
        function Te(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Re(e, t) {
          (e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
        }
        function Oe(e, t, n) {
          (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
          var r = 31 - ke(t);
          (e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (4194218 & n));
        }
        function je(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ke(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        function Ae(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 0 !== (134217727 & e)
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function De() {
          var e = H.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Jf(e.type);
        }
        var Fe = Math.random().toString(36).slice(2),
          Me = "__reactFiber$" + Fe,
          $e = "__reactProps$" + Fe,
          Ie = "__reactContainer$" + Fe,
          Ue = "__reactEvents$" + Fe,
          He = "__reactListeners$" + Fe,
          Be = "__reactHandles$" + Fe,
          We = "__reactResources$" + Fe,
          Ve = "__reactMarker$" + Fe;
        function Qe(e) {
          delete e[Me], delete e[$e], delete e[Ue], delete e[He], delete e[Be];
        }
        function qe(e) {
          var t = e[Me];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Ie] || n[Me])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = sf(e); null !== e; ) {
                  if ((n = e[Me])) return n;
                  e = sf(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Ye(e) {
          if ((e = e[Me] || e[Ie])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function Ke(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(o(33));
        }
        function Ge(e) {
          var t = e[We];
          return (
            t ||
              (t = e[We] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            t
          );
        }
        function Xe(e) {
          e[Ve] = !0;
        }
        var Je = new Set(),
          Ze = {};
        function et(e, t) {
          tt(e, t), tt(e + "Capture", t);
        }
        function tt(e, t) {
          for (Ze[e] = t, e = 0; e < t.length; e++) Je.add(t[e]);
        }
        var nt = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          rt = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          ),
          at = {},
          lt = {};
        function ot(e, t, n) {
          if (
            ((a = t),
            re.call(lt, a) ||
              (!re.call(at, a) &&
                (rt.test(a) ? (lt[a] = !0) : ((at[a] = !0), 0))))
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
          var a;
        }
        function it(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function ut(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function st(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function ct(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function ft(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = ct(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function dt(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = ct(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function pt(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        var ht = /[\n"\\]/g;
        function mt(e) {
          return e.replace(ht, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function gt(e, t, n, r, a, l, o, i) {
          (e.name = ""),
            null != o &&
            "function" !== typeof o &&
            "symbol" !== typeof o &&
            "boolean" !== typeof o
              ? (e.type = o)
              : e.removeAttribute("type"),
            null != t
              ? "number" === o
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + st(t))
                : e.value !== "" + st(t) && (e.value = "" + st(t))
              : ("submit" !== o && "reset" !== o) || e.removeAttribute("value"),
            null != t
              ? yt(e, o, st(t))
              : null != n
              ? yt(e, o, st(n))
              : null != r && e.removeAttribute("value"),
            null == a && null != l && (e.defaultChecked = !!l),
            null != a &&
              (e.checked =
                a && "function" !== typeof a && "symbol" !== typeof a),
            null != i &&
            "function" !== typeof i &&
            "symbol" !== typeof i &&
            "boolean" !== typeof i
              ? (e.name = "" + st(i))
              : e.removeAttribute("name");
        }
        function vt(e, t, n, r, a, l, o, i) {
          if (
            (null != l &&
              "function" !== typeof l &&
              "symbol" !== typeof l &&
              "boolean" !== typeof l &&
              (e.type = l),
            null != t || null != n)
          ) {
            if (
              !(
                ("submit" !== l && "reset" !== l) ||
                (void 0 !== t && null !== t)
              )
            )
              return;
            (n = null != n ? "" + st(n) : ""),
              (t = null != t ? "" + st(t) : n),
              i || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          (r =
            "function" !== typeof (r = null != r ? r : a) &&
            "symbol" !== typeof r &&
            !!r),
            (e.checked = i ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != o &&
              "function" !== typeof o &&
              "symbol" !== typeof o &&
              "boolean" !== typeof o &&
              (e.name = o);
        }
        function yt(e, t, n) {
          ("number" === t && pt(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function bt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + st(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function kt(e, t, n) {
          null == t ||
          ((t = "" + st(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + st(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function wt(e, t, n, r) {
          if (null == t) {
            if (null != r) {
              if (null != n) throw Error(o(92));
              if (U(r)) {
                if (1 < r.length) throw Error(o(93));
                r = r[0];
              }
              n = r;
            }
            null == n && (n = ""), (t = n);
          }
          (n = st(t)),
            (e.defaultValue = n),
            (r = e.textContent) === n &&
              "" !== r &&
              null !== r &&
              (e.value = r);
        }
        function St(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var xt = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
          )
        );
        function Et(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" === typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
              ? (e.cssFloat = "")
              : (e[t] = "")
            : r
            ? e.setProperty(t, n)
            : "number" !== typeof n || 0 === n || xt.has(t)
            ? "float" === t
              ? (e.cssFloat = n)
              : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
        }
        function Ct(e, t, n) {
          if (null != t && "object" !== typeof t) throw Error(o(62));
          if (((e = e.style), null != n)) {
            for (var r in n)
              !n.hasOwnProperty(r) ||
                (null != t && t.hasOwnProperty(r)) ||
                (0 === r.indexOf("--")
                  ? e.setProperty(r, "")
                  : "float" === r
                  ? (e.cssFloat = "")
                  : (e[r] = ""));
            for (var a in t)
              (r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Et(e, a, r);
          } else for (var l in t) t.hasOwnProperty(l) && Et(e, l, t[l]);
        }
        function _t(e) {
          if (-1 === e.indexOf("-")) return !1;
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
              return !0;
          }
        }
        var Pt = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          Nt =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function zt(e) {
          return Nt.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        var Lt = null;
        function Tt(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Rt = null,
          Ot = null;
        function jt(e) {
          var t = Ye(e);
          if (t && (e = t.stateNode)) {
            var n = e[$e] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (gt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + mt("" + t) + '"][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = r[$e] || null;
                      if (!a) throw Error(o(90));
                      gt(
                        r,
                        a.value,
                        a.defaultValue,
                        a.defaultValue,
                        a.checked,
                        a.defaultChecked,
                        a.type,
                        a.name
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (r = n[t]).form === e.form && dt(r);
                }
                break e;
              case "textarea":
                kt(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && bt(e, !!n.multiple, t, !1);
            }
          }
        }
        var At = !1;
        function Dt(e, t, n) {
          if (At) return e(t, n);
          At = !0;
          try {
            return e(t);
          } finally {
            if (
              ((At = !1),
              (null !== Rt || null !== Ot) &&
                (Ms(), Rt && ((t = Rt), (e = Ot), (Ot = Rt = null), jt(t), e)))
            )
              for (t = 0; t < e.length; t++) jt(e[t]);
          }
        }
        function Ft(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = n[$e] || null;
          if (null === r) return null;
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Mt = !1;
        if (nt)
          try {
            var $t = {};
            Object.defineProperty($t, "passive", {
              get: function () {
                Mt = !0;
              },
            }),
              window.addEventListener("test", $t, $t),
              window.removeEventListener("test", $t, $t);
          } catch (Sd) {
            Mt = !1;
          }
        var It = null,
          Ut = null,
          Ht = null;
        function Bt() {
          if (Ht) return Ht;
          var e,
            t,
            n = Ut,
            r = n.length,
            a = "value" in It ? It.value : It.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return (Ht = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Wt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Vt() {
          return !0;
        }
        function Qt() {
          return !1;
        }
        function qt(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? Vt
                : Qt),
              (this.isPropagationStopped = Qt),
              this
            );
          }
          return (
            T(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = Vt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = Vt));
              },
              persist: function () {},
              isPersistent: Vt,
            }),
            t
          );
        }
        var Yt,
          Kt,
          Gt,
          Xt = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          Jt = qt(Xt),
          Zt = T({}, Xt, { view: 0, detail: 0 }),
          en = qt(Zt),
          tn = T({}, Zt, {
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
            getModifierState: pn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== Gt &&
                    (Gt && "mousemove" === e.type
                      ? ((Yt = e.screenX - Gt.screenX),
                        (Kt = e.screenY - Gt.screenY))
                      : (Kt = Yt = 0),
                    (Gt = e)),
                  Yt);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : Kt;
            },
          }),
          nn = qt(tn),
          rn = qt(T({}, tn, { dataTransfer: 0 })),
          an = qt(T({}, Zt, { relatedTarget: 0 })),
          ln = qt(
            T({}, Xt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          on = qt(
            T({}, Xt, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            })
          ),
          un = qt(T({}, Xt, { data: 0 })),
          sn = {
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
            MozPrintableKey: "Unidentified",
          },
          cn = {
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
            224: "Meta",
          },
          fn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function dn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = fn[e]) && !!t[e];
        }
        function pn() {
          return dn;
        }
        var hn = qt(
            T({}, Zt, {
              key: function (e) {
                if (e.key) {
                  var t = sn[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Wt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? cn[e.keyCode] || "Unidentified"
                  : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: pn,
              charCode: function (e) {
                return "keypress" === e.type ? Wt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Wt(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
            })
          ),
          mn = qt(
            T({}, tn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          gn = qt(
            T({}, Zt, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: pn,
            })
          ),
          vn = qt(
            T({}, Xt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = qt(
            T({}, tn, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            })
          ),
          bn = qt(T({}, Xt, { newState: 0, oldState: 0 })),
          kn = [9, 13, 27, 32],
          wn = nt && "CompositionEvent" in window,
          Sn = null;
        nt && "documentMode" in document && (Sn = document.documentMode);
        var xn = nt && "TextEvent" in window && !Sn,
          En = nt && (!wn || (Sn && 8 < Sn && 11 >= Sn)),
          Cn = String.fromCharCode(32),
          _n = !1;
        function Pn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== kn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Nn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var zn = !1;
        var Ln = {
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
          week: !0,
        };
        function Tn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Ln[e.type] : "textarea" === t;
        }
        function Rn(e, t, n, r) {
          Rt ? (Ot ? Ot.push(r) : (Ot = [r])) : (Rt = r),
            0 < (t = Dc(t, "onChange")).length &&
              ((n = new Jt("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var On = null,
          jn = null;
        function An(e) {
          Nc(e, 0);
        }
        function Dn(e) {
          if (dt(Ke(e))) return e;
        }
        function Fn(e, t) {
          if ("change" === e) return t;
        }
        var Mn = !1;
        if (nt) {
          var $n;
          if (nt) {
            var In = "oninput" in document;
            if (!In) {
              var Un = document.createElement("div");
              Un.setAttribute("oninput", "return;"),
                (In = "function" === typeof Un.oninput);
            }
            $n = In;
          } else $n = !1;
          Mn = $n && (!document.documentMode || 9 < document.documentMode);
        }
        function Hn() {
          On && (On.detachEvent("onpropertychange", Bn), (jn = On = null));
        }
        function Bn(e) {
          if ("value" === e.propertyName && Dn(jn)) {
            var t = [];
            Rn(t, jn, e, Tt(e)), Dt(An, t);
          }
        }
        function Wn(e, t, n) {
          "focusin" === e
            ? (Hn(), (jn = n), (On = t).attachEvent("onpropertychange", Bn))
            : "focusout" === e && Hn();
        }
        function Vn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Dn(jn);
        }
        function Qn(e, t) {
          if ("click" === e) return Dn(t);
        }
        function qn(e, t) {
          if ("input" === e || "change" === e) return Dn(t);
        }
        var Yn =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function Kn(e, t) {
          if (Yn(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!re.call(t, a) || !Yn(e[a], t[a])) return !1;
          }
          return !0;
        }
        function Gn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function Xn(e, t) {
          var n,
            r = Gn(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = Gn(r);
          }
        }
        function Jn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? Jn(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function Zn(e) {
          for (
            var t = pt(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = pt((e = t.contentWindow).document);
          }
          return t;
        }
        function er(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function tr(e, t) {
          var n = Zn(t);
          t = e.focusedElem;
          var r = e.selectionRange;
          if (
            n !== t &&
            t &&
            t.ownerDocument &&
            Jn(t.ownerDocument.documentElement, t)
          ) {
            if (null !== r && er(t))
              if (
                ((e = r.start),
                void 0 === (n = r.end) && (n = e),
                "selectionStart" in t)
              )
                (t.selectionStart = e),
                  (t.selectionEnd = Math.min(n, t.value.length));
              else if (
                (n =
                  ((e = t.ownerDocument || document) && e.defaultView) ||
                  window).getSelection
              ) {
                n = n.getSelection();
                var a = t.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !n.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = Xn(t, l));
                var o = Xn(t, r);
                a &&
                  o &&
                  (1 !== n.rangeCount ||
                    n.anchorNode !== a.node ||
                    n.anchorOffset !== a.offset ||
                    n.focusNode !== o.node ||
                    n.focusOffset !== o.offset) &&
                  ((e = e.createRange()).setStart(a.node, a.offset),
                  n.removeAllRanges(),
                  l > r
                    ? (n.addRange(e), n.extend(o.node, o.offset))
                    : (e.setEnd(o.node, o.offset), n.addRange(e)));
              }
            for (e = [], n = t; (n = n.parentNode); )
              1 === n.nodeType &&
                e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
            for (
              "function" === typeof t.focus && t.focus(), t = 0;
              t < e.length;
              t++
            )
              ((n = e[t]).element.scrollLeft = n.left),
                (n.element.scrollTop = n.top);
          }
        }
        var nr =
            nt && "documentMode" in document && 11 >= document.documentMode,
          rr = null,
          ar = null,
          lr = null,
          or = !1;
        function ir(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          or ||
            null == rr ||
            rr !== pt(r) ||
            ("selectionStart" in (r = rr) && er(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (lr && Kn(lr, r)) ||
              ((lr = r),
              0 < (r = Dc(ar, "onSelect")).length &&
                ((t = new Jt("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = rr))));
        }
        function ur(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var sr = {
            animationend: ur("Animation", "AnimationEnd"),
            animationiteration: ur("Animation", "AnimationIteration"),
            animationstart: ur("Animation", "AnimationStart"),
            transitionrun: ur("Transition", "TransitionRun"),
            transitionstart: ur("Transition", "TransitionStart"),
            transitioncancel: ur("Transition", "TransitionCancel"),
            transitionend: ur("Transition", "TransitionEnd"),
          },
          cr = {},
          fr = {};
        function dr(e) {
          if (cr[e]) return cr[e];
          if (!sr[e]) return e;
          var t,
            n = sr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in fr) return (cr[e] = n[t]);
          return e;
        }
        nt &&
          ((fr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete sr.animationend.animation,
            delete sr.animationiteration.animation,
            delete sr.animationstart.animation),
          "TransitionEvent" in window || delete sr.transitionend.transition);
        var pr = dr("animationend"),
          hr = dr("animationiteration"),
          mr = dr("animationstart"),
          gr = dr("transitionrun"),
          vr = dr("transitionstart"),
          yr = dr("transitioncancel"),
          br = dr("transitionend"),
          kr = new Map(),
          wr =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
              " "
            );
        function Sr(e, t) {
          kr.set(e, t), et(t, [e]);
        }
        var xr = [],
          Er = 0,
          Cr = 0;
        function _r() {
          for (var e = Er, t = (Cr = Er = 0); t < e; ) {
            var n = xr[t];
            xr[t++] = null;
            var r = xr[t];
            xr[t++] = null;
            var a = xr[t];
            xr[t++] = null;
            var l = xr[t];
            if (((xr[t++] = null), null !== r && null !== a)) {
              var o = r.pending;
              null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
                (r.pending = a);
            }
            0 !== l && Lr(n, a, l);
          }
        }
        function Pr(e, t, n, r) {
          (xr[Er++] = e),
            (xr[Er++] = t),
            (xr[Er++] = n),
            (xr[Er++] = r),
            (Cr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r);
        }
        function Nr(e, t, n, r) {
          return Pr(e, t, n, r), Tr(e);
        }
        function zr(e, t) {
          return Pr(e, null, null, t), Tr(e);
        }
        function Lr(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var a = !1, l = e.return; null !== l; )
            (l.childLanes |= n),
              null !== (r = l.alternate) && (r.childLanes |= n),
              22 === l.tag &&
                (null === (e = l.stateNode) || 1 & e._visibility || (a = !0)),
              (e = l),
              (l = l.return);
          a &&
            null !== t &&
            3 === e.tag &&
            ((l = e.stateNode),
            (a = 31 - ke(n)),
            null === (e = (l = l.hiddenUpdates)[a]) ? (l[a] = [t]) : e.push(t),
            (t.lane = 536870912 | n));
        }
        function Tr(e) {
          if (50 < Ns) throw ((Ns = 0), (zs = null), Error(o(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Rr = {},
          Or = new WeakMap();
        function jr(e, t) {
          if ("object" === typeof e && null !== e) {
            var n = Or.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: D(t) }), Or.set(e, t), t);
          }
          return { value: e, source: t, stack: D(t) };
        }
        var Ar = [],
          Dr = 0,
          Fr = null,
          Mr = 0,
          $r = [],
          Ir = 0,
          Ur = null,
          Hr = 1,
          Br = "";
        function Wr(e, t) {
          (Ar[Dr++] = Mr), (Ar[Dr++] = Fr), (Fr = e), (Mr = t);
        }
        function Vr(e, t, n) {
          ($r[Ir++] = Hr), ($r[Ir++] = Br), ($r[Ir++] = Ur), (Ur = e);
          var r = Hr;
          e = Br;
          var a = 32 - ke(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - ke(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Hr = (1 << (32 - ke(t) + a)) | (n << a) | r),
              (Br = l + e);
          } else (Hr = (1 << l) | (n << a) | r), (Br = e);
        }
        function Qr(e) {
          null !== e.return && (Wr(e, 1), Vr(e, 1, 0));
        }
        function qr(e) {
          for (; e === Fr; )
            (Fr = Ar[--Dr]), (Ar[Dr] = null), (Mr = Ar[--Dr]), (Ar[Dr] = null);
          for (; e === Ur; )
            (Ur = $r[--Ir]),
              ($r[Ir] = null),
              (Br = $r[--Ir]),
              ($r[Ir] = null),
              (Hr = $r[--Ir]),
              ($r[Ir] = null);
        }
        var Yr = null,
          Kr = null,
          Gr = !1,
          Xr = null,
          Jr = !1,
          Zr = Error(o(519));
        function ea(e) {
          throw (la(jr(Error(o(418, "")), e)), Zr);
        }
        function ta(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[Me] = e), (t[$e] = r), n)) {
            case "dialog":
              zc("cancel", t), zc("close", t);
              break;
            case "iframe":
            case "object":
            case "embed":
              zc("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < _c.length; n++) zc(_c[n], t);
              break;
            case "source":
              zc("error", t);
              break;
            case "img":
            case "image":
            case "link":
              zc("error", t), zc("load", t);
              break;
            case "details":
              zc("toggle", t);
              break;
            case "input":
              zc("invalid", t),
                vt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0
                ),
                ft(t);
              break;
            case "select":
              zc("invalid", t);
              break;
            case "textarea":
              zc("invalid", t),
                wt(t, r.value, r.defaultValue, r.children),
                ft(t);
          }
          ("string" !== typeof (n = r.children) &&
            "number" !== typeof n &&
            "bigint" !== typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          Hc(t.textContent, n)
            ? (null != r.popover && (zc("beforetoggle", t), zc("toggle", t)),
              null != r.onScroll && zc("scroll", t),
              null != r.onScrollEnd && zc("scrollend", t),
              null != r.onClick && (t.onclick = Bc),
              (t = !0))
            : (t = !1),
            t || ea(e);
        }
        function na(e) {
          for (Yr = e.return; Yr; )
            switch (Yr.tag) {
              case 3:
              case 27:
                return void (Jr = !0);
              case 5:
              case 13:
                return void (Jr = !1);
              default:
                Yr = Yr.return;
            }
        }
        function ra(e) {
          if (e !== Yr) return !1;
          if (!Gr) return na(e), (Gr = !0), !1;
          var t,
            n = !1;
          if (
            ((t = 3 !== e.tag && 27 !== e.tag) &&
              ((t = 5 === e.tag) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  Jc(e.type, e.memoizedProps)),
              (t = !t)),
            t && (n = !0),
            n && Kr && ea(e),
            na(e),
            13 === e.tag)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, n = 0; e; ) {
                if (8 === e.nodeType)
                  if ("/$" === (t = e.data)) {
                    if (0 === n) {
                      Kr = uf(e.nextSibling);
                      break e;
                    }
                    n--;
                  } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
                e = e.nextSibling;
              }
              Kr = null;
            }
          } else Kr = Yr ? uf(e.stateNode.nextSibling) : null;
          return !0;
        }
        function aa() {
          (Kr = Yr = null), (Gr = !1);
        }
        function la(e) {
          null === Xr ? (Xr = [e]) : Xr.push(e);
        }
        var oa = Error(o(460)),
          ia = Error(o(474)),
          ua = { then: function () {} };
        function sa(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function ca() {}
        function fa(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(ca, ca), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              if ((e = t.reason) === oa) throw Error(o(483));
              throw e;
            default:
              if ("string" === typeof t.status) t.then(ca, ca);
              else {
                if (null !== (e = ts) && 100 < e.shellSuspendCounter)
                  throw Error(o(482));
                ((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "fulfilled"), (n.value = e);
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        (n.status = "rejected"), (n.reason = e);
                      }
                    }
                  );
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  if ((e = t.reason) === oa) throw Error(o(483));
                  throw e;
              }
              throw ((da = t), oa);
          }
        }
        var da = null;
        function pa() {
          if (null === da) throw Error(o(459));
          var e = da;
          return (da = null), e;
        }
        var ha = null,
          ma = 0;
        function ga(e) {
          var t = ma;
          return (ma += 1), null === ha && (ha = []), fa(ha, e, t);
        }
        function va(e, t) {
          (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
        }
        function ya(e, t) {
          if (t.$$typeof === u) throw Error(o(525));
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function ba(e) {
          return (0, e._init)(e._payload);
        }
        function ka(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e) {
            for (var t = new Map(); null !== e; )
              null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling);
            return t;
          }
          function a(e, t) {
            return ((e = Fu(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 33554434), n)
                    : r
                  : ((t.flags |= 33554434), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 33554434), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Hu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n, r) {
            var l = n.type;
            return l === f
              ? h(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === w &&
                    ba(l) === t.type))
              ? (va((t = a(t, n.props)), n), (t.return = e), t)
              : (va((t = $u(n.type, n.key, n.props, null, e.mode, r)), n),
                (t.return = e),
                t);
          }
          function p(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function h(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Iu(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function m(e, t, n) {
            if (
              ("string" === typeof t && "" !== t) ||
              "number" === typeof t ||
              "bigint" === typeof t
            )
              return ((t = Hu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case s:
                  return (
                    va((n = $u(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case c:
                  return ((t = Bu(t, e.mode, n)).return = e), t;
                case w:
                  return m(e, (t = (0, t._init)(t._payload)), n);
              }
              if (U(t) || C(t))
                return ((t = Iu(t, e.mode, n, null)).return = e), t;
              if ("function" === typeof t.then) return m(e, ga(t), n);
              if (t.$$typeof === g) return m(e, _i(e, t), n);
              ya(e, t);
            }
            return null;
          }
          function v(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (
              ("string" === typeof n && "" !== n) ||
              "number" === typeof n ||
              "bigint" === typeof n
            )
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case s:
                  return n.key === a ? d(e, t, n, r) : null;
                case c:
                  return n.key === a ? p(e, t, n, r) : null;
                case w:
                  return v(e, t, (n = (a = n._init)(n._payload)), r);
              }
              if (U(n) || C(n)) return null !== a ? null : h(e, t, n, r, null);
              if ("function" === typeof n.then) return v(e, t, ga(n), r);
              if (n.$$typeof === g) return v(e, t, _i(e, n), r);
              ya(e, n);
            }
            return null;
          }
          function y(e, t, n, r, a) {
            if (
              ("string" === typeof r && "" !== r) ||
              "number" === typeof r ||
              "bigint" === typeof r
            )
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case s:
                  return d(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case c:
                  return p(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case w:
                  return y(e, t, n, (r = (0, r._init)(r._payload)), a);
              }
              if (U(r) || C(r)) return h(t, (e = e.get(n) || null), r, a, null);
              if ("function" === typeof r.then) return y(e, t, n, ga(r), a);
              if (r.$$typeof === g) return y(e, t, n, _i(t, r), a);
              ya(t, r);
            }
            return null;
          }
          function b(u, d, p, h) {
            if (
              ("object" === typeof p &&
                null !== p &&
                p.type === f &&
                null === p.key &&
                (p = p.props.children),
              "object" === typeof p && null !== p)
            ) {
              switch (p.$$typeof) {
                case s:
                  e: {
                    for (var k = p.key; null !== d; ) {
                      if (d.key === k) {
                        if ((k = p.type) === f) {
                          if (7 === d.tag) {
                            n(u, d.sibling),
                              ((h = a(d, p.props.children)).return = u),
                              (u = h);
                            break e;
                          }
                        } else if (
                          d.elementType === k ||
                          ("object" === typeof k &&
                            null !== k &&
                            k.$$typeof === w &&
                            ba(k) === d.type)
                        ) {
                          n(u, d.sibling),
                            va((h = a(d, p.props)), p),
                            (h.return = u),
                            (u = h);
                          break e;
                        }
                        n(u, d);
                        break;
                      }
                      t(u, d), (d = d.sibling);
                    }
                    p.type === f
                      ? (((h = Iu(p.props.children, u.mode, h, p.key)).return =
                          u),
                        (u = h))
                      : (va(
                          (h = $u(p.type, p.key, p.props, null, u.mode, h)),
                          p
                        ),
                        (h.return = u),
                        (u = h));
                  }
                  return i(u);
                case c:
                  e: {
                    for (k = p.key; null !== d; ) {
                      if (d.key === k) {
                        if (
                          4 === d.tag &&
                          d.stateNode.containerInfo === p.containerInfo &&
                          d.stateNode.implementation === p.implementation
                        ) {
                          n(u, d.sibling),
                            ((h = a(d, p.children || [])).return = u),
                            (u = h);
                          break e;
                        }
                        n(u, d);
                        break;
                      }
                      t(u, d), (d = d.sibling);
                    }
                    ((h = Bu(p, u.mode, h)).return = u), (u = h);
                  }
                  return i(u);
                case w:
                  return b(u, d, (p = (k = p._init)(p._payload)), h);
              }
              if (U(p))
                return (function (a, o, i, u) {
                  for (
                    var s = null, c = null, f = o, d = (o = 0), p = null;
                    null !== f && d < i.length;
                    d++
                  ) {
                    f.index > d ? ((p = f), (f = null)) : (p = f.sibling);
                    var h = v(a, f, i[d], u);
                    if (null === h) {
                      null === f && (f = p);
                      break;
                    }
                    e && f && null === h.alternate && t(a, f),
                      (o = l(h, o, d)),
                      null === c ? (s = h) : (c.sibling = h),
                      (c = h),
                      (f = p);
                  }
                  if (d === i.length) return n(a, f), Gr && Wr(a, d), s;
                  if (null === f) {
                    for (; d < i.length; d++)
                      null !== (f = m(a, i[d], u)) &&
                        ((o = l(f, o, d)),
                        null === c ? (s = f) : (c.sibling = f),
                        (c = f));
                    return Gr && Wr(a, d), s;
                  }
                  for (f = r(f); d < i.length; d++)
                    null !== (p = y(f, a, d, i[d], u)) &&
                      (e &&
                        null !== p.alternate &&
                        f.delete(null === p.key ? d : p.key),
                      (o = l(p, o, d)),
                      null === c ? (s = p) : (c.sibling = p),
                      (c = p));
                  return (
                    e &&
                      f.forEach(function (e) {
                        return t(a, e);
                      }),
                    Gr && Wr(a, d),
                    s
                  );
                })(u, d, p, h);
              if (C(p)) {
                if ("function" !== typeof (k = C(p))) throw Error(o(150));
                return (function (a, i, u, s) {
                  if (null == u) throw Error(o(151));
                  for (
                    var c = null,
                      f = null,
                      d = i,
                      p = (i = 0),
                      h = null,
                      g = u.next();
                    null !== d && !g.done;
                    p++, g = u.next()
                  ) {
                    d.index > p ? ((h = d), (d = null)) : (h = d.sibling);
                    var b = v(a, d, g.value, s);
                    if (null === b) {
                      null === d && (d = h);
                      break;
                    }
                    e && d && null === b.alternate && t(a, d),
                      (i = l(b, i, p)),
                      null === f ? (c = b) : (f.sibling = b),
                      (f = b),
                      (d = h);
                  }
                  if (g.done) return n(a, d), Gr && Wr(a, p), c;
                  if (null === d) {
                    for (; !g.done; p++, g = u.next())
                      null !== (g = m(a, g.value, s)) &&
                        ((i = l(g, i, p)),
                        null === f ? (c = g) : (f.sibling = g),
                        (f = g));
                    return Gr && Wr(a, p), c;
                  }
                  for (d = r(d); !g.done; p++, g = u.next())
                    null !== (g = y(d, a, p, g.value, s)) &&
                      (e &&
                        null !== g.alternate &&
                        d.delete(null === g.key ? p : g.key),
                      (i = l(g, i, p)),
                      null === f ? (c = g) : (f.sibling = g),
                      (f = g));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(a, e);
                      }),
                    Gr && Wr(a, p),
                    c
                  );
                })(u, d, (p = k.call(p)), h);
              }
              if ("function" === typeof p.then) return b(u, d, ga(p), h);
              if (p.$$typeof === g) return b(u, d, _i(u, p), h);
              ya(u, p);
            }
            return ("string" === typeof p && "" !== p) ||
              "number" === typeof p ||
              "bigint" === typeof p
              ? ((p = "" + p),
                null !== d && 6 === d.tag
                  ? (n(u, d.sibling), ((h = a(d, p)).return = u), (u = h))
                  : (n(u, d), ((h = Hu(p, u.mode, h)).return = u), (u = h)),
                i(u))
              : n(u, d);
          }
          return function (e, t, n, r) {
            try {
              ma = 0;
              var a = b(e, t, n, r);
              return (ha = null), a;
            } catch (o) {
              if (o === oa) throw o;
              var l = Au(29, o, null, e.mode);
              return (l.lanes = r), (l.return = e), l;
            }
          };
        }
        var wa = ka(!0),
          Sa = ka(!1),
          xa = Q(null),
          Ea = Q(0);
        function Ca(e, t) {
          Y(Ea, (e = ss)), Y(xa, t), (ss = e | t.baseLanes);
        }
        function _a() {
          Y(Ea, ss), Y(xa, xa.current);
        }
        function Pa() {
          (ss = Ea.current), q(xa), q(Ea);
        }
        var Na = Q(null),
          za = null;
        function La(e) {
          var t = e.alternate;
          Y(ja, 1 & ja.current),
            Y(Na, e),
            null === za &&
              (null === t || null !== xa.current || null !== t.memoizedState) &&
              (za = e);
        }
        function Ta(e) {
          if (22 === e.tag) {
            if ((Y(ja, ja.current), Y(Na, e), null === za)) {
              var t = e.alternate;
              null !== t && null !== t.memoizedState && (za = e);
            }
          } else Ra();
        }
        function Ra() {
          Y(ja, ja.current), Y(Na, Na.current);
        }
        function Oa(e) {
          q(Na), za === e && (za = null), q(ja);
        }
        var ja = Q(0);
        function Aa(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Da =
            "undefined" !== typeof AbortController
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    (t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      });
                  };
                },
          Fa = r.unstable_scheduleCallback,
          Ma = r.unstable_NormalPriority,
          $a = {
            $$typeof: g,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Ia() {
          return { controller: new Da(), data: new Map(), refCount: 0 };
        }
        function Ua(e) {
          e.refCount--,
            0 === e.refCount &&
              Fa(Ma, function () {
                e.controller.abort();
              });
        }
        var Ha = null,
          Ba = 0,
          Wa = 0,
          Va = null;
        function Qa() {
          if (0 === --Ba && null !== Ha) {
            null !== Va && (Va.status = "fulfilled");
            var e = Ha;
            (Ha = null), (Wa = 0), (Va = null);
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var qa = L.S;
        L.S = function (e, t) {
          "object" === typeof t &&
            null !== t &&
            "function" === typeof t.then &&
            (function (e, t) {
              if (null === Ha) {
                var n = (Ha = []);
                (Ba = 0),
                  (Wa = wc()),
                  (Va = {
                    status: "pending",
                    value: void 0,
                    then: function (e) {
                      n.push(e);
                    },
                  });
              }
              Ba++, t.then(Qa, Qa);
            })(0, t),
            null !== qa && qa(e, t);
        };
        var Ya = Q(null);
        function Ka() {
          var e = Ya.current;
          return null !== e ? e : ts.pooledCache;
        }
        function Ga(e, t) {
          Y(Ya, null === t ? Ya.current : t.pool);
        }
        function Xa() {
          var e = Ka();
          return null === e ? null : { parent: $a._currentValue, pool: e };
        }
        var Ja = 0,
          Za = null,
          el = null,
          tl = null,
          nl = !1,
          rl = !1,
          al = !1,
          ll = 0,
          ol = 0,
          il = null,
          ul = 0;
        function sl() {
          throw Error(o(321));
        }
        function cl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!Yn(e[n], t[n])) return !1;
          return !0;
        }
        function fl(e, t, n, r, a, l) {
          return (
            (Ja = l),
            (Za = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (L.H = null === e || null === e.memoizedState ? _o : Po),
            (al = !1),
            (l = n(r, a)),
            (al = !1),
            rl && (l = pl(t, n, r, a)),
            dl(e),
            l
          );
        }
        function dl(e) {
          L.H = Co;
          var t = null !== el && null !== el.next;
          if (
            ((Ja = 0),
            (tl = el = Za = null),
            (nl = !1),
            (ol = 0),
            (il = null),
            t)
          )
            throw Error(o(300));
          null === e ||
            Wo ||
            (null !== (e = e.dependencies) && xi(e) && (Wo = !0));
        }
        function pl(e, t, n, r) {
          Za = e;
          var a = 0;
          do {
            if ((rl && (il = null), (ol = 0), (rl = !1), 25 <= a))
              throw Error(o(301));
            if (((a += 1), (tl = el = null), null != e.updateQueue)) {
              var l = e.updateQueue;
              (l.lastEffect = null),
                (l.events = null),
                (l.stores = null),
                null != l.memoCache && (l.memoCache.index = 0);
            }
            (L.H = No), (l = t(n, r));
          } while (rl);
          return l;
        }
        function hl() {
          var e = L.H,
            t = e.useState()[0];
          return (
            (t = "function" === typeof t.then ? kl(t) : t),
            (e = e.useState()[0]),
            (null !== el ? el.memoizedState : null) !== e && (Za.flags |= 1024),
            t
          );
        }
        function ml() {
          var e = 0 !== ll;
          return (ll = 0), e;
        }
        function gl(e, t, n) {
          (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
        }
        function vl(e) {
          if (nl) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              null !== t && (t.pending = null), (e = e.next);
            }
            nl = !1;
          }
          (Ja = 0),
            (tl = el = Za = null),
            (rl = !1),
            (ol = ll = 0),
            (il = null);
        }
        function yl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === tl ? (Za.memoizedState = tl = e) : (tl = tl.next = e), tl
          );
        }
        function bl() {
          if (null === el) {
            var e = Za.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = el.next;
          var t = null === tl ? Za.memoizedState : tl.next;
          if (null !== t) (tl = t), (el = e);
          else {
            if (null === e) {
              if (null === Za.alternate) throw Error(o(467));
              throw Error(o(310));
            }
            (e = {
              memoizedState: (el = e).memoizedState,
              baseState: el.baseState,
              baseQueue: el.baseQueue,
              queue: el.queue,
              next: null,
            }),
              null === tl ? (Za.memoizedState = tl = e) : (tl = tl.next = e);
          }
          return tl;
        }
        function kl(e) {
          var t = ol;
          return (
            (ol += 1),
            null === il && (il = []),
            (e = fa(il, e, t)),
            (t = Za),
            null === (null === tl ? t.memoizedState : tl.next) &&
              ((t = t.alternate),
              (L.H = null === t || null === t.memoizedState ? _o : Po)),
            e
          );
        }
        function wl(e) {
          if (null !== e && "object" === typeof e) {
            if ("function" === typeof e.then) return kl(e);
            if (e.$$typeof === g) return Ci(e);
          }
          throw Error(o(438, String(e)));
        }
        function Sl(e) {
          var t = null,
            n = Za.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = Za.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Za.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = x;
          return t.index++, n;
        }
        function xl(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function El(e) {
          return Cl(bl(), el, e);
        }
        function Cl(e, t, n) {
          var r = e.queue;
          if (null === r) throw Error(o(311));
          r.lastRenderedReducer = n;
          var a = e.baseQueue,
            l = r.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (t.baseQueue = a = l), (r.pending = null);
          }
          if (((l = e.baseState), null === a)) e.memoizedState = l;
          else {
            var u = (i = null),
              s = null,
              c = (t = a.next),
              f = !1;
            do {
              var d = -536870913 & c.lane;
              if (d !== c.lane ? (rs & d) === d : (Ja & d) === d) {
                var p = c.revertLane;
                if (0 === p)
                  null !== s &&
                    (s = s.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    d === Wa && (f = !0);
                else {
                  if ((Ja & p) === p) {
                    (c = c.next), p === Wa && (f = !0);
                    continue;
                  }
                  (d = {
                    lane: 0,
                    revertLane: c.revertLane,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                    null === s ? ((u = s = d), (i = l)) : (s = s.next = d),
                    (Za.lanes |= p),
                    (fs |= p);
                }
                (d = c.action),
                  al && n(l, d),
                  (l = c.hasEagerState ? c.eagerState : n(l, d));
              } else
                (p = {
                  lane: d,
                  revertLane: c.revertLane,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === s ? ((u = s = p), (i = l)) : (s = s.next = p),
                  (Za.lanes |= d),
                  (fs |= d);
              c = c.next;
            } while (null !== c && c !== t);
            if (
              (null === s ? (i = l) : (s.next = u),
              !Yn(l, e.memoizedState) && ((Wo = !0), f && null !== (n = Va)))
            )
              throw n;
            (e.memoizedState = l),
              (e.baseState = i),
              (e.baseQueue = s),
              (r.lastRenderedState = l);
          }
          return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch];
        }
        function _l(e) {
          var t = bl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            Yn(l, t.memoizedState) || (Wo = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function Pl(e, t, n) {
          var r = Za,
            a = bl(),
            l = Gr;
          if (l) {
            if (void 0 === n) throw Error(o(407));
            n = n();
          } else n = t();
          var i = !Yn((el || a).memoizedState, n);
          if (
            (i && ((a.memoizedState = n), (Wo = !0)),
            (a = a.queue),
            Jl(Ll.bind(null, r, a, e), [e]),
            a.getSnapshot !== t ||
              i ||
              (null !== tl && 1 & tl.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              ql(9, zl.bind(null, r, a, n, t), { destroy: void 0 }, null),
              null === ts)
            )
              throw Error(o(349));
            l || 0 !== (60 & Ja) || Nl(r, t, n);
          }
          return n;
        }
        function Nl(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = Za.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (Za.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function zl(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Tl(t) && Rl(e);
        }
        function Ll(e, t, n) {
          return n(function () {
            Tl(t) && Rl(e);
          });
        }
        function Tl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !Yn(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Rl(e) {
          var t = zr(e, 2);
          null !== t && Rs(t, e, 2);
        }
        function Ol(e) {
          var t = yl();
          if ("function" === typeof e) {
            var n = e;
            if (((e = n()), al)) {
              be(!0);
              try {
                n();
              } finally {
                be(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xl,
              lastRenderedState: e,
            }),
            t
          );
        }
        function jl(e, t, n, r) {
          return (e.baseState = n), Cl(e, el, "function" === typeof r ? r : xl);
        }
        function Al(e, t, n, r, a) {
          if (So(e)) throw Error(o(485));
          if (null !== (e = t.action)) {
            var l = {
              payload: a,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                l.listeners.push(e);
              },
            };
            null !== L.T ? n(!0) : (l.isTransition = !1),
              r(l),
              null === (n = t.pending)
                ? ((l.next = t.pending = l), Dl(t, l))
                : ((l.next = n.next), (t.pending = n.next = l));
          }
        }
        function Dl(e, t) {
          var n = t.action,
            r = t.payload,
            a = e.state;
          if (t.isTransition) {
            var l = L.T,
              o = {};
            L.T = o;
            try {
              var i = n(a, r),
                u = L.S;
              null !== u && u(o, i), Fl(e, t, i);
            } catch (s) {
              $l(e, t, s);
            } finally {
              L.T = l;
            }
          } else
            try {
              Fl(e, t, (l = n(a, r)));
            } catch (c) {
              $l(e, t, c);
            }
        }
        function Fl(e, t, n) {
          null !== n && "object" === typeof n && "function" === typeof n.then
            ? n.then(
                function (n) {
                  Ml(e, t, n);
                },
                function (n) {
                  return $l(e, t, n);
                }
              )
            : Ml(e, t, n);
        }
        function Ml(e, t, n) {
          (t.status = "fulfilled"),
            (t.value = n),
            Il(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), Dl(e, n)));
        }
        function $l(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              (t.status = "rejected"), (t.reason = n), Il(t), (t = t.next);
            } while (t !== r);
          }
          e.action = null;
        }
        function Il(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function Ul(e, t) {
          return t;
        }
        function Hl(e, t) {
          if (Gr) {
            var n = ts.formState;
            if (null !== n) {
              e: {
                var r = Za;
                if (Gr) {
                  if (Kr) {
                    t: {
                      for (var a = Kr, l = Jr; 8 !== a.nodeType; ) {
                        if (!l) {
                          a = null;
                          break t;
                        }
                        if (null === (a = uf(a.nextSibling))) {
                          a = null;
                          break t;
                        }
                      }
                      a = "F!" === (l = a.data) || "F" === l ? a : null;
                    }
                    if (a) {
                      (Kr = uf(a.nextSibling)), (r = "F!" === a.data);
                      break e;
                    }
                  }
                  ea(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = yl()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ul,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = bo.bind(null, Za, r)),
            (r.dispatch = n),
            (r = Ol(!1)),
            (l = wo.bind(null, Za, !1, r.queue)),
            (a = { state: t, dispatch: null, action: e, pending: null }),
            ((r = yl()).queue = a),
            (n = Al.bind(null, Za, a, l, n)),
            (a.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function Bl(e) {
          return Wl(bl(), el, e);
        }
        function Wl(e, t, n) {
          (t = Cl(e, t, Ul)[0]),
            (e = El(xl)[0]),
            (t =
              "object" === typeof t &&
              null !== t &&
              "function" === typeof t.then
                ? kl(t)
                : t);
          var r = bl(),
            a = r.queue,
            l = a.dispatch;
          return (
            n !== r.memoizedState &&
              ((Za.flags |= 2048),
              ql(9, Vl.bind(null, a, n), { destroy: void 0 }, null)),
            [t, l, e]
          );
        }
        function Vl(e, t) {
          e.action = t;
        }
        function Ql(e) {
          var t = bl(),
            n = el;
          if (null !== n) return Wl(t, n, e);
          bl(), (t = t.memoizedState);
          var r = (n = bl()).queue.dispatch;
          return (n.memoizedState = e), [t, r, !1];
        }
        function ql(e, t, n, r) {
          return (
            (e = { tag: e, create: t, inst: n, deps: r, next: null }),
            null === (t = Za.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (Za.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Yl() {
          return bl().memoizedState;
        }
        function Kl(e, t, n, r) {
          var a = yl();
          (Za.flags |= e),
            (a.memoizedState = ql(
              1 | t,
              n,
              { destroy: void 0 },
              void 0 === r ? null : r
            ));
        }
        function Gl(e, t, n, r) {
          var a = bl();
          r = void 0 === r ? null : r;
          var l = a.memoizedState.inst;
          null !== el && null !== r && cl(r, el.memoizedState.deps)
            ? (a.memoizedState = ql(t, n, l, r))
            : ((Za.flags |= e), (a.memoizedState = ql(1 | t, n, l, r)));
        }
        function Xl(e, t) {
          Kl(8390656, 8, e, t);
        }
        function Jl(e, t) {
          Gl(2048, 8, e, t);
        }
        function Zl(e, t) {
          return Gl(4, 2, e, t);
        }
        function eo(e, t) {
          return Gl(4, 4, e, t);
        }
        function to(e, t) {
          if ("function" === typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" === typeof n ? n() : t(null);
            };
          }
          if (null !== t && void 0 !== t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function no(e, t, n) {
          (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Gl(4, 4, to.bind(null, t, e), n);
        }
        function ro() {}
        function ao(e, t) {
          var n = bl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && cl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function lo(e, t) {
          var n = bl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && cl(t, r[1])) return r[0];
          if (((r = e()), al)) {
            be(!0);
            try {
              e();
            } finally {
              be(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        }
        function oo(e, t, n) {
          return void 0 === n || 0 !== (1073741824 & Ja)
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = Ts()),
              (Za.lanes |= e),
              (fs |= e),
              n);
        }
        function io(e, t, n, r) {
          return Yn(n, t)
            ? n
            : null !== xa.current
            ? ((e = oo(e, n, r)), Yn(e, t) || (Wo = !0), e)
            : 0 === (42 & Ja)
            ? ((Wo = !0), (e.memoizedState = n))
            : ((e = Ts()), (Za.lanes |= e), (fs |= e), t);
        }
        function uo(e, t, n, r, a) {
          var l = H.p;
          H.p = 0 !== l && 8 > l ? l : 8;
          var o = L.T,
            i = {};
          (L.T = i), wo(e, !1, t, n);
          try {
            var u = a(),
              s = L.S;
            if (
              (null !== s && s(i, u),
              null !== u &&
                "object" === typeof u &&
                "function" === typeof u.then)
            )
              ko(
                e,
                t,
                (function (e, t) {
                  var n = [],
                    r = {
                      status: "pending",
                      value: null,
                      reason: null,
                      then: function (e) {
                        n.push(e);
                      },
                    };
                  return (
                    e.then(
                      function () {
                        (r.status = "fulfilled"), (r.value = t);
                        for (var e = 0; e < n.length; e++) (0, n[e])(t);
                      },
                      function (e) {
                        for (
                          r.status = "rejected", r.reason = e, e = 0;
                          e < n.length;
                          e++
                        )
                          (0, n[e])(void 0);
                      }
                    ),
                    r
                  );
                })(u, r),
                Ls()
              );
            else ko(e, t, r, Ls());
          } catch (c) {
            ko(
              e,
              t,
              { then: function () {}, status: "rejected", reason: c },
              Ls()
            );
          } finally {
            (H.p = l), (L.T = o);
          }
        }
        function so() {}
        function co(e, t, n, r) {
          if (5 !== e.tag) throw Error(o(476));
          var a = fo(e).queue;
          uo(
            e,
            a,
            t,
            B,
            null === n
              ? so
              : function () {
                  return po(e), n(r);
                }
          );
        }
        function fo(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: B,
              baseState: B,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: xl,
                lastRenderedState: B,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: xl,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function po(e) {
          ko(e, fo(e).next.queue, {}, Ls());
        }
        function ho() {
          return Ci(Ff);
        }
        function mo() {
          return bl().memoizedState;
        }
        function go() {
          return bl().memoizedState;
        }
        function vo(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Ls(),
                  r = Ri(t, (e = Ti(n)), n);
                return (
                  null !== r && (Rs(r, t, n), Oi(r, t, n)),
                  (t = { cache: Ia() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function yo(e, t, n) {
          var r = Ls();
          (n = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            So(e)
              ? xo(t, n)
              : null !== (n = Nr(e, t, n, r)) && (Rs(n, e, r), Eo(n, t, r));
        }
        function bo(e, t, n) {
          ko(e, t, n, Ls());
        }
        function ko(e, t, n, r) {
          var a = {
            lane: r,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (So(e)) xo(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), Yn(i, o)))
                  return Pr(e, t, a, 0), null === ts && _r(), !1;
              } catch (u) {}
            if (null !== (n = Nr(e, t, a, r)))
              return Rs(n, e, r), Eo(n, t, r), !0;
          }
          return !1;
        }
        function wo(e, t, n, r) {
          if (
            ((r = {
              lane: 2,
              revertLane: wc(),
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            So(e))
          ) {
            if (t) throw Error(o(479));
          } else null !== (t = Nr(e, n, r, 2)) && Rs(t, e, 2);
        }
        function So(e) {
          var t = e.alternate;
          return e === Za || (null !== t && t === Za);
        }
        function xo(e, t) {
          rl = nl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Eo(e, t, n) {
          if (0 !== (4194176 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), je(e, n);
          }
        }
        var Co = {
          readContext: Ci,
          use: wl,
          useCallback: sl,
          useContext: sl,
          useEffect: sl,
          useImperativeHandle: sl,
          useLayoutEffect: sl,
          useInsertionEffect: sl,
          useMemo: sl,
          useReducer: sl,
          useRef: sl,
          useState: sl,
          useDebugValue: sl,
          useDeferredValue: sl,
          useTransition: sl,
          useSyncExternalStore: sl,
          useId: sl,
        };
        (Co.useCacheRefresh = sl),
          (Co.useMemoCache = sl),
          (Co.useHostTransitionStatus = sl),
          (Co.useFormState = sl),
          (Co.useActionState = sl),
          (Co.useOptimistic = sl);
        var _o = {
          readContext: Ci,
          use: wl,
          useCallback: function (e, t) {
            return (yl().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: Ci,
          useEffect: Xl,
          useImperativeHandle: function (e, t, n) {
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              Kl(4194308, 4, to.bind(null, t, e), n);
          },
          useLayoutEffect: function (e, t) {
            return Kl(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            Kl(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = yl();
            t = void 0 === t ? null : t;
            var r = e();
            if (al) {
              be(!0);
              try {
                e();
              } finally {
                be(!1);
              }
            }
            return (n.memoizedState = [r, t]), r;
          },
          useReducer: function (e, t, n) {
            var r = yl();
            if (void 0 !== n) {
              var a = n(t);
              if (al) {
                be(!0);
                try {
                  n(t);
                } finally {
                  be(!1);
                }
              }
            } else a = t;
            return (
              (r.memoizedState = r.baseState = a),
              (e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: a,
              }),
              (r.queue = e),
              (e = e.dispatch = yo.bind(null, Za, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (yl().memoizedState = e);
          },
          useState: function (e) {
            var t = (e = Ol(e)).queue,
              n = bo.bind(null, Za, t);
            return (t.dispatch = n), [e.memoizedState, n];
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            return oo(yl(), e, t);
          },
          useTransition: function () {
            var e = Ol(!1);
            return (
              (e = uo.bind(null, Za, e.queue, !0, !1)),
              (yl().memoizedState = e),
              [!1, e]
            );
          },
          useSyncExternalStore: function (e, t, n) {
            var r = Za,
              a = yl();
            if (Gr) {
              if (void 0 === n) throw Error(o(407));
              n = n();
            } else {
              if (((n = t()), null === ts)) throw Error(o(349));
              0 !== (60 & rs) || Nl(r, t, n);
            }
            a.memoizedState = n;
            var l = { value: n, getSnapshot: t };
            return (
              (a.queue = l),
              Xl(Ll.bind(null, r, l, e), [e]),
              (r.flags |= 2048),
              ql(9, zl.bind(null, r, l, n, t), { destroy: void 0 }, null),
              n
            );
          },
          useId: function () {
            var e = yl(),
              t = ts.identifierPrefix;
            if (Gr) {
              var n = Br;
              (t =
                ":" +
                t +
                "R" +
                (n = (Hr & ~(1 << (32 - ke(Hr) - 1))).toString(32) + n)),
                0 < (n = ll++) && (t += "H" + n.toString(32)),
                (t += ":");
            } else t = ":" + t + "r" + (n = ul++).toString(32) + ":";
            return (e.memoizedState = t);
          },
          useCacheRefresh: function () {
            return (yl().memoizedState = vo.bind(null, Za));
          },
        };
        (_o.useMemoCache = Sl),
          (_o.useHostTransitionStatus = ho),
          (_o.useFormState = Hl),
          (_o.useActionState = Hl),
          (_o.useOptimistic = function (e) {
            var t = yl();
            t.memoizedState = t.baseState = e;
            var n = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null,
            };
            return (
              (t.queue = n),
              (t = wo.bind(null, Za, !0, n)),
              (n.dispatch = t),
              [e, t]
            );
          });
        var Po = {
          readContext: Ci,
          use: wl,
          useCallback: ao,
          useContext: Ci,
          useEffect: Jl,
          useImperativeHandle: no,
          useInsertionEffect: Zl,
          useLayoutEffect: eo,
          useMemo: lo,
          useReducer: El,
          useRef: Yl,
          useState: function () {
            return El(xl);
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            return io(bl(), el.memoizedState, e, t);
          },
          useTransition: function () {
            var e = El(xl)[0],
              t = bl().memoizedState;
            return ["boolean" === typeof e ? e : kl(e), t];
          },
          useSyncExternalStore: Pl,
          useId: mo,
        };
        (Po.useCacheRefresh = go),
          (Po.useMemoCache = Sl),
          (Po.useHostTransitionStatus = ho),
          (Po.useFormState = Bl),
          (Po.useActionState = Bl),
          (Po.useOptimistic = function (e, t) {
            return jl(bl(), 0, e, t);
          });
        var No = {
          readContext: Ci,
          use: wl,
          useCallback: ao,
          useContext: Ci,
          useEffect: Jl,
          useImperativeHandle: no,
          useInsertionEffect: Zl,
          useLayoutEffect: eo,
          useMemo: lo,
          useReducer: _l,
          useRef: Yl,
          useState: function () {
            return _l(xl);
          },
          useDebugValue: ro,
          useDeferredValue: function (e, t) {
            var n = bl();
            return null === el ? oo(n, e, t) : io(n, el.memoizedState, e, t);
          },
          useTransition: function () {
            var e = _l(xl)[0],
              t = bl().memoizedState;
            return ["boolean" === typeof e ? e : kl(e), t];
          },
          useSyncExternalStore: Pl,
          useId: mo,
        };
        function zo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : T({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        (No.useCacheRefresh = go),
          (No.useMemoCache = Sl),
          (No.useHostTransitionStatus = ho),
          (No.useFormState = Ql),
          (No.useActionState = Ql),
          (No.useOptimistic = function (e, t) {
            var n = bl();
            return null !== el
              ? jl(n, 0, e, t)
              : ((n.baseState = e), [e, n.queue.dispatch]);
          });
        var Lo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && F(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ls(),
              a = Ti(r);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ri(e, a, r)) && (Rs(t, e, r), Oi(t, e, r));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Ls(),
              a = Ti(r);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Ri(e, a, r)) && (Rs(t, e, r), Oi(t, e, r));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Ls(),
              r = Ti(n);
            (r.tag = 2),
              void 0 !== t && null !== t && (r.callback = t),
              null !== (t = Ri(e, r, n)) && (Rs(t, e, n), Oi(t, e, n));
          },
        };
        function To(e, t, n, r, a, l, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !Kn(n, r) ||
                !Kn(a, l);
        }
        function Ro(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Lo.enqueueReplaceState(t, t.state, null);
        }
        function Oo(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var a in (n === t && (n = T({}, n)), e))
              void 0 === n[a] && (n[a] = e[a]);
          return n;
        }
        var jo =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function Ao(e) {
          jo(e);
        }
        function Do(e) {
          console.error(e);
        }
        function Fo(e) {
          jo(e);
        }
        function Mo(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        function $o(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        function Io(e, t, n) {
          return (
            ((n = Ti(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              Mo(e, t);
            }),
            n
          );
        }
        function Uo(e) {
          return ((e = Ti(e)).tag = 3), e;
        }
        function Ho(e, t, n, r) {
          var a = n.type.getDerivedStateFromError;
          if ("function" === typeof a) {
            var l = r.value;
            (e.payload = function () {
              return a(l);
            }),
              (e.callback = function () {
                $o(t, n, r);
              });
          }
          var o = n.stateNode;
          null !== o &&
            "function" === typeof o.componentDidCatch &&
            (e.callback = function () {
              $o(t, n, r),
                "function" !== typeof a &&
                  (null === Ss ? (Ss = new Set([this])) : Ss.add(this));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var Bo = Error(o(461)),
          Wo = !1;
        function Vo(e, t, n, r) {
          t.child = null === e ? Sa(t, null, n, r) : wa(t, e.child, n, r);
        }
        function Qo(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          if ("ref" in r) {
            var o = {};
            for (var i in r) "ref" !== i && (o[i] = r[i]);
          } else o = r;
          return (
            Ei(t),
            (r = fl(e, t, n, o, l, a)),
            (i = ml()),
            null === e || Wo
              ? (Gr && i && Qr(t), (t.flags |= 1), Vo(e, t, r, a), t.child)
              : (gl(e, t, a), di(e, t, a))
          );
        }
        function qo(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              Du(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare
              ? (((e = $u(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Yo(e, t, l, r, a));
          }
          if (((l = e.child), !pi(e, a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : Kn)(o, r) &&
              e.ref === t.ref
            )
              return di(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Fu(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Yo(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (Kn(l, r) && e.ref === t.ref) {
              if (((Wo = !1), (t.pendingProps = r = l), !pi(e, a)))
                return (t.lanes = e.lanes), di(e, t, a);
              0 !== (131072 & e.flags) && (Wo = !0);
            }
          }
          return Jo(e, t, n, r, a);
        }
        function Ko(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = 0 !== (2 & t.stateNode._pendingVisibility),
            o = null !== e ? e.memoizedState : null;
          if ((Xo(e, t), "hidden" === r.mode || l)) {
            if (0 !== (128 & t.flags)) {
              if (((r = null !== o ? o.baseLanes | n : n), null !== e)) {
                for (a = t.child = e.child, l = 0; null !== a; )
                  (l = l | a.lanes | a.childLanes), (a = a.sibling);
                t.childLanes = l & ~r;
              } else (t.childLanes = 0), (t.child = null);
              return Go(e, t, r, n);
            }
            if (0 === (536870912 & n))
              return (
                (t.lanes = t.childLanes = 536870912),
                Go(e, t, null !== o ? o.baseLanes | n : n, n)
              );
            (t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Ga(0, null !== o ? o.cachePool : null),
              null !== o ? Ca(t, o) : _a(),
              Ta(t);
          } else
            null !== o
              ? (Ga(0, o.cachePool), Ca(t, o), Ra(), (t.memoizedState = null))
              : (null !== e && Ga(0, null), _a(), Ra());
          return Vo(e, t, a, n), t.child;
        }
        function Go(e, t, n, r) {
          var a = Ka();
          return (
            (a = null === a ? null : { parent: $a._currentValue, pool: a }),
            (t.memoizedState = { baseLanes: n, cachePool: a }),
            null !== e && Ga(0, null),
            _a(),
            Ta(t),
            null !== e && Si(e, t, r, !0),
            null
          );
        }
        function Xo(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 2097664);
          else {
            if ("function" !== typeof n && "object" !== typeof n)
              throw Error(o(284));
            (null !== e && e.ref === n) || (t.flags |= 2097664);
          }
        }
        function Jo(e, t, n, r, a) {
          return (
            Ei(t),
            (n = fl(e, t, n, r, void 0, a)),
            (r = ml()),
            null === e || Wo
              ? (Gr && r && Qr(t), (t.flags |= 1), Vo(e, t, n, a), t.child)
              : (gl(e, t, a), di(e, t, a))
          );
        }
        function Zo(e, t, n, r, a, l) {
          return (
            Ei(t),
            (t.updateQueue = null),
            (n = pl(t, r, n, a)),
            dl(e),
            (r = ml()),
            null === e || Wo
              ? (Gr && r && Qr(t), (t.flags |= 1), Vo(e, t, n, l), t.child)
              : (gl(e, t, l), di(e, t, l))
          );
        }
        function ei(e, t, n, r, a) {
          if ((Ei(t), null === t.stateNode)) {
            var l = Rr,
              o = n.contextType;
            "object" === typeof o && null !== o && (l = Ci(o)),
              (l = new n(r, l)),
              (t.memoizedState =
                null !== l.state && void 0 !== l.state ? l.state : null),
              (l.updater = Lo),
              (t.stateNode = l),
              (l._reactInternals = t),
              ((l = t.stateNode).props = r),
              (l.state = t.memoizedState),
              (l.refs = {}),
              zi(t),
              (o = n.contextType),
              (l.context = "object" === typeof o && null !== o ? Ci(o) : Rr),
              (l.state = t.memoizedState),
              "function" === typeof (o = n.getDerivedStateFromProps) &&
                (zo(t, n, o, r), (l.state = t.memoizedState)),
              "function" === typeof n.getDerivedStateFromProps ||
                "function" === typeof l.getSnapshotBeforeUpdate ||
                ("function" !== typeof l.UNSAFE_componentWillMount &&
                  "function" !== typeof l.componentWillMount) ||
                ((o = l.state),
                "function" === typeof l.componentWillMount &&
                  l.componentWillMount(),
                "function" === typeof l.UNSAFE_componentWillMount &&
                  l.UNSAFE_componentWillMount(),
                o !== l.state && Lo.enqueueReplaceState(l, l.state, null),
                Fi(t, r, l, a),
                Di(),
                (l.state = t.memoizedState)),
              "function" === typeof l.componentDidMount && (t.flags |= 4194308),
              (r = !0);
          } else if (null === e) {
            l = t.stateNode;
            var i = t.memoizedProps,
              u = Oo(n, i);
            l.props = u;
            var s = l.context,
              c = n.contextType;
            (o = Rr), "object" === typeof c && null !== c && (o = Ci(c));
            var f = n.getDerivedStateFromProps;
            (c =
              "function" === typeof f ||
              "function" === typeof l.getSnapshotBeforeUpdate),
              (i = t.pendingProps !== i),
              c ||
                ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof l.componentWillReceiveProps) ||
                ((i || s !== o) && Ro(t, l, r, o)),
              (Ni = !1);
            var d = t.memoizedState;
            (l.state = d),
              Fi(t, r, l, a),
              Di(),
              (s = t.memoizedState),
              i || d !== s || Ni
                ? ("function" === typeof f &&
                    (zo(t, n, f, r), (s = t.memoizedState)),
                  (u = Ni || To(t, n, u, r, d, s, o))
                    ? (c ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (l.props = r),
                  (l.state = s),
                  (l.context = o),
                  (r = u))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              Li(e, t),
              (c = Oo(n, (o = t.memoizedProps))),
              (l.props = c),
              (f = t.pendingProps),
              (d = l.context),
              (s = n.contextType),
              (u = Rr),
              "object" === typeof s && null !== s && (u = Ci(s)),
              (s =
                "function" === typeof (i = n.getDerivedStateFromProps) ||
                "function" === typeof l.getSnapshotBeforeUpdate) ||
                ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                  "function" !== typeof l.componentWillReceiveProps) ||
                ((o !== f || d !== u) && Ro(t, l, r, u)),
              (Ni = !1),
              (d = t.memoizedState),
              (l.state = d),
              Fi(t, r, l, a),
              Di();
            var p = t.memoizedState;
            o !== f ||
            d !== p ||
            Ni ||
            (null !== e && null !== e.dependencies && xi(e.dependencies))
              ? ("function" === typeof i &&
                  (zo(t, n, i, r), (p = t.memoizedState)),
                (c =
                  Ni ||
                  To(t, n, c, r, d, p, u) ||
                  (null !== e && null !== e.dependencies && xi(e.dependencies)))
                  ? (s ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, p, u),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, p, u)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (l.props = r),
                (l.state = p),
                (l.context = u),
                (r = c))
              : ("function" !== typeof l.componentDidUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (l = r),
            Xo(e, t),
            (r = 0 !== (128 & t.flags)),
            l || r
              ? ((l = t.stateNode),
                (n =
                  r && "function" !== typeof n.getDerivedStateFromError
                    ? null
                    : l.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = wa(t, e.child, null, a)),
                    (t.child = wa(t, null, n, a)))
                  : Vo(e, t, n, a),
                (t.memoizedState = l.state),
                (e = t.child))
              : (e = di(e, t, a)),
            e
          );
        }
        function ti(e, t, n, r) {
          return aa(), (t.flags |= 256), Vo(e, t, n, r), t.child;
        }
        var ni = { dehydrated: null, treeContext: null, retryLane: 0 };
        function ri(e) {
          return { baseLanes: e, cachePool: Xa() };
        }
        function ai(e, t, n) {
          return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= hs), e;
        }
        function li(e, t, n) {
          var r,
            a = t.pendingProps,
            l = !1,
            i = 0 !== (128 & t.flags);
          if (
            ((r = i) ||
              (r =
                (null === e || null !== e.memoizedState) &&
                0 !== (2 & ja.current)),
            r && ((l = !0), (t.flags &= -129)),
            (r = 0 !== (32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (Gr) {
              if ((l ? La(t) : Ra(), Gr)) {
                var u,
                  s = Kr;
                if ((u = s)) {
                  e: {
                    for (u = s, s = Jr; 8 !== u.nodeType; ) {
                      if (!s) {
                        s = null;
                        break e;
                      }
                      if (null === (u = uf(u.nextSibling))) {
                        s = null;
                        break e;
                      }
                    }
                    s = u;
                  }
                  null !== s
                    ? ((t.memoizedState = {
                        dehydrated: s,
                        treeContext:
                          null !== Ur ? { id: Hr, overflow: Br } : null,
                        retryLane: 536870912,
                      }),
                      ((u = Au(18, null, null, 0)).stateNode = s),
                      (u.return = t),
                      (t.child = u),
                      (Yr = t),
                      (Kr = null),
                      (u = !0))
                    : (u = !1);
                }
                u || ea(t);
              }
              if (null !== (s = t.memoizedState) && null !== (s = s.dehydrated))
                return (
                  "$!" === s.data ? (t.lanes = 16) : (t.lanes = 536870912), null
                );
              Oa(t);
            }
            return (
              (s = a.children),
              (a = a.fallback),
              l
                ? (Ra(),
                  (s = ii({ mode: "hidden", children: s }, (l = t.mode))),
                  (a = Iu(a, l, n, null)),
                  (s.return = t),
                  (a.return = t),
                  (s.sibling = a),
                  (t.child = s),
                  ((l = t.child).memoizedState = ri(n)),
                  (l.childLanes = ai(e, r, n)),
                  (t.memoizedState = ni),
                  a)
                : (La(t), oi(t, s))
            );
          }
          if (null !== (u = e.memoizedState) && null !== (s = u.dehydrated)) {
            if (i)
              256 & t.flags
                ? (La(t), (t.flags &= -257), (t = ui(e, t, n)))
                : null !== t.memoizedState
                ? (Ra(), (t.child = e.child), (t.flags |= 128), (t = null))
                : (Ra(),
                  (l = a.fallback),
                  (s = t.mode),
                  (a = ii({ mode: "visible", children: a.children }, s)),
                  ((l = Iu(l, s, n, null)).flags |= 2),
                  (a.return = t),
                  (l.return = t),
                  (a.sibling = l),
                  (t.child = a),
                  wa(t, e.child, null, n),
                  ((a = t.child).memoizedState = ri(n)),
                  (a.childLanes = ai(e, r, n)),
                  (t.memoizedState = ni),
                  (t = l));
            else if ((La(t), "$!" === s.data)) {
              if ((r = s.nextSibling && s.nextSibling.dataset)) var c = r.dgst;
              (r = c),
                ((a = Error(o(419))).stack = ""),
                (a.digest = r),
                la({ value: a, source: null, stack: null }),
                (t = ui(e, t, n));
            } else if (
              (Wo || Si(e, t, n, !1), (r = 0 !== (n & e.childLanes)), Wo || r)
            ) {
              if (null !== (r = ts)) {
                if (0 !== (42 & (a = n & -n))) a = 1;
                else
                  switch (a) {
                    case 2:
                      a = 1;
                      break;
                    case 8:
                      a = 4;
                      break;
                    case 32:
                      a = 16;
                      break;
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
                      a = 64;
                      break;
                    case 268435456:
                      a = 134217728;
                      break;
                    default:
                      a = 0;
                  }
                if (
                  0 !== (a = 0 !== (a & (r.suspendedLanes | n)) ? 0 : a) &&
                  a !== u.retryLane
                )
                  throw ((u.retryLane = a), zr(e, a), Rs(r, e, a), Bo);
              }
              "$?" === s.data || Ws(), (t = ui(e, t, n));
            } else
              "$?" === s.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = ic.bind(null, e)),
                  (s._reactRetry = t),
                  (t = null))
                : ((e = u.treeContext),
                  (Kr = uf(s.nextSibling)),
                  (Yr = t),
                  (Gr = !0),
                  (Xr = null),
                  (Jr = !1),
                  null !== e &&
                    (($r[Ir++] = Hr),
                    ($r[Ir++] = Br),
                    ($r[Ir++] = Ur),
                    (Hr = e.id),
                    (Br = e.overflow),
                    (Ur = t)),
                  ((t = oi(t, a.children)).flags |= 4096));
            return t;
          }
          return l
            ? (Ra(),
              (l = a.fallback),
              (s = t.mode),
              (c = (u = e.child).sibling),
              ((a = Fu(u, {
                mode: "hidden",
                children: a.children,
              })).subtreeFlags = 31457280 & u.subtreeFlags),
              null !== c
                ? (l = Fu(c, l))
                : ((l = Iu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              null === (s = e.child.memoizedState)
                ? (s = ri(n))
                : (null !== (u = s.cachePool)
                    ? ((c = $a._currentValue),
                      (u = u.parent !== c ? { parent: c, pool: c } : u))
                    : (u = Xa()),
                  (s = { baseLanes: s.baseLanes | n, cachePool: u })),
              (l.memoizedState = s),
              (l.childLanes = ai(e, r, n)),
              (t.memoizedState = ni),
              a)
            : (La(t),
              (e = (n = e.child).sibling),
              ((n = Fu(n, { mode: "visible", children: a.children })).return =
                t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function oi(e, t) {
          return (
            ((t = ii({ mode: "visible", children: t }, e.mode)).return = e),
            (e.child = t)
          );
        }
        function ii(e, t) {
          return Uu(e, t, 0, null);
        }
        function ui(e, t, n) {
          return (
            wa(t, e.child, null, n),
            ((e = oi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function si(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), ki(e.return, t, n);
        }
        function ci(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function fi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((Vo(e, t, r.children, n), 0 !== (2 & (r = ja.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && si(e, n, t);
                else if (19 === e.tag) si(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          switch ((Y(ja, r), a)) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === Aa(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                ci(t, !1, a, n, l);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === Aa(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              ci(t, !0, n, null, l);
              break;
            case "together":
              ci(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function di(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (fs |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Si(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Fu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Fu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function pi(e, t) {
          return (
            0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !xi(e))
          );
        }
        function hi(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Wo = !0;
            else {
              if (!pi(e, n) && 0 === (128 & t.flags))
                return (
                  (Wo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Z(t, t.stateNode.containerInfo),
                          yi(t, $a, e.memoizedState.cache),
                          aa();
                        break;
                      case 27:
                      case 5:
                        te(t);
                        break;
                      case 4:
                        Z(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        yi(t, t.type, t.memoizedProps.value);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (La(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? li(e, t, n)
                            : (La(t),
                              null !== (e = di(e, t, n)) ? e.sibling : null);
                        La(t);
                        break;
                      case 19:
                        var a = 0 !== (128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Si(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          a)
                        ) {
                          if (r) return fi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Y(ja, ja.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ko(e, t, n);
                      case 24:
                        yi(t, $a, e.memoizedState.cache);
                    }
                    return di(e, t, n);
                  })(e, t, n)
                );
              Wo = 0 !== (131072 & e.flags);
            }
          else (Wo = !1), Gr && 0 !== (1048576 & t.flags) && Vr(t, Mr, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                e = t.pendingProps;
                var r = t.elementType,
                  a = r._init;
                if (
                  ((r = a(r._payload)), (t.type = r), "function" !== typeof r)
                ) {
                  if (void 0 !== r && null !== r) {
                    if ((a = r.$$typeof) === v) {
                      (t.tag = 11), (t = Qo(null, t, r, e, n));
                      break e;
                    }
                    if (a === k) {
                      (t.tag = 14), (t = qo(null, t, r, e, n));
                      break e;
                    }
                  }
                  throw ((t = P(r) || r), Error(o(306, t, "")));
                }
                Du(r)
                  ? ((e = Oo(r, e)), (t.tag = 1), (t = ei(null, t, r, e, n)))
                  : ((t.tag = 0), (t = Jo(null, t, r, e, n)));
              }
              return t;
            case 0:
              return Jo(e, t, t.type, t.pendingProps, n);
            case 1:
              return ei(e, t, (r = t.type), (a = Oo(r, t.pendingProps)), n);
            case 3:
              e: {
                if ((Z(t, t.stateNode.containerInfo), null === e))
                  throw Error(o(387));
                var l = t.pendingProps;
                (r = (a = t.memoizedState).element),
                  Li(e, t),
                  Fi(t, l, null, n);
                var i = t.memoizedState;
                if (
                  ((l = i.cache),
                  yi(t, $a, l),
                  l !== a.cache && wi(t, [$a], n, !0),
                  Di(),
                  (l = i.element),
                  a.isDehydrated)
                ) {
                  if (
                    ((a = { element: l, isDehydrated: !1, cache: i.cache }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = ti(e, t, l, n);
                    break e;
                  }
                  if (l !== r) {
                    la((r = jr(Error(o(424)), t))), (t = ti(e, t, l, n));
                    break e;
                  }
                  for (
                    Kr = uf(t.stateNode.containerInfo.firstChild),
                      Yr = t,
                      Gr = !0,
                      Xr = null,
                      Jr = !0,
                      n = Sa(t, null, l, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((aa(), l === r)) {
                    t = di(e, t, n);
                    break e;
                  }
                  Vo(e, t, l, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                Xo(e, t),
                null === e
                  ? (n = vf(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : Gr ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((r = Kc(X.current).createElement(n))[Me] = t),
                      (r[$e] = e),
                      Qc(r, n, e),
                      Xe(r),
                      (t.stateNode = r))
                  : (t.memoizedState = vf(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState
                    )),
                null
              );
            case 27:
              return (
                te(t),
                null === e &&
                  Gr &&
                  ((r = t.stateNode = cf(t.type, t.pendingProps, X.current)),
                  (Yr = t),
                  (Jr = !0),
                  (Kr = uf(r.firstChild))),
                (r = t.pendingProps.children),
                null !== e || Gr
                  ? Vo(e, t, r, n)
                  : (t.child = wa(t, null, r, n)),
                Xo(e, t),
                t.child
              );
            case 5:
              return (
                null === e &&
                  Gr &&
                  ((a = r = Kr) &&
                    (null !==
                    (r = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var a = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[Ve])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  "stylesheet" ===
                                    (l = e.getAttribute("rel")) &&
                                  e.hasAttribute("data-precedence")
                                )
                                  break;
                                if (
                                  l !== a.rel ||
                                  e.getAttribute("href") !==
                                    (null == a.href ? null : a.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == a.crossOrigin
                                      ? null
                                      : a.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == a.title ? null : a.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((l = e.getAttribute("src")) !==
                                    (null == a.src ? null : a.src) ||
                                    e.getAttribute("type") !==
                                      (null == a.type ? null : a.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == a.crossOrigin
                                        ? null
                                        : a.crossOrigin)) &&
                                  l &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var l = null == a.name ? null : "" + a.name;
                          if (
                            "hidden" === a.type &&
                            e.getAttribute("name") === l
                          )
                            return e;
                        }
                        if (null === (e = uf(e.nextSibling))) break;
                      }
                      return null;
                    })(r, t.type, t.pendingProps, Jr))
                      ? ((t.stateNode = r),
                        (Yr = t),
                        (Kr = uf(r.firstChild)),
                        (Jr = !1),
                        (a = !0))
                      : (a = !1)),
                  a || ea(t)),
                te(t),
                (a = t.type),
                (l = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (r = l.children),
                Jc(a, l)
                  ? (r = null)
                  : null !== i && Jc(a, i) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((a = fl(e, t, hl, null, null, n)), (Ff._currentValue = a)),
                Xo(e, t),
                Vo(e, t, r, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  Gr &&
                  ((e = n = Kr) &&
                    (null !==
                    (n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; ) {
                        if (
                          (1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                          !n
                        )
                          return null;
                        if (null === (e = uf(e.nextSibling))) return null;
                      }
                      return e;
                    })(n, t.pendingProps, Jr))
                      ? ((t.stateNode = n), (Yr = t), (Kr = null), (e = !0))
                      : (e = !1)),
                  e || ea(t)),
                null
              );
            case 13:
              return li(e, t, n);
            case 4:
              return (
                Z(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = wa(t, null, r, n)) : Vo(e, t, r, n),
                t.child
              );
            case 11:
              return Qo(e, t, t.type, t.pendingProps, n);
            case 7:
              return Vo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Vo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              return (
                (r = t.pendingProps),
                yi(t, t.type, r.value),
                Vo(e, t, r.children, n),
                t.child
              );
            case 9:
              return (
                (a = t.type._context),
                (r = t.pendingProps.children),
                Ei(t),
                (r = r((a = Ci(a)))),
                (t.flags |= 1),
                Vo(e, t, r, n),
                t.child
              );
            case 14:
              return qo(e, t, t.type, t.pendingProps, n);
            case 15:
              return Yo(e, t, t.type, t.pendingProps, n);
            case 19:
              return fi(e, t, n);
            case 22:
              return Ko(e, t, n);
            case 24:
              return (
                Ei(t),
                (r = Ci($a)),
                null === e
                  ? (null === (a = Ka()) &&
                      ((a = ts),
                      (l = Ia()),
                      (a.pooledCache = l),
                      l.refCount++,
                      null !== l && (a.pooledCacheLanes |= n),
                      (a = l)),
                    (t.memoizedState = { parent: r, cache: a }),
                    zi(t),
                    yi(t, $a, a))
                  : (0 !== (e.lanes & n) &&
                      (Li(e, t), Fi(t, null, null, n), Di()),
                    (a = e.memoizedState),
                    (l = t.memoizedState),
                    a.parent !== r
                      ? ((a = { parent: r, cache: r }),
                        (t.memoizedState = a),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = a),
                        yi(t, $a, r))
                      : ((r = l.cache),
                        yi(t, $a, r),
                        r !== a.cache && wi(t, [$a], n, !0))),
                Vo(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(o(156, t.tag));
        }
        var mi = Q(null),
          gi = null,
          vi = null;
        function yi(e, t, n) {
          Y(mi, t._currentValue), (t._currentValue = n);
        }
        function bi(e) {
          (e._currentValue = mi.current), q(mi);
        }
        function ki(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function wi(e, t, n, r) {
          var a = e.child;
          for (null !== a && (a.return = e); null !== a; ) {
            var l = a.dependencies;
            if (null !== l) {
              var i = a.child;
              l = l.firstContext;
              e: for (; null !== l; ) {
                var u = l;
                l = a;
                for (var s = 0; s < t.length; s++)
                  if (u.context === t[s]) {
                    (l.lanes |= n),
                      null !== (u = l.alternate) && (u.lanes |= n),
                      ki(l.return, n, e),
                      r || (i = null);
                    break e;
                  }
                l = u.next;
              }
            } else if (18 === a.tag) {
              if (null === (i = a.return)) throw Error(o(341));
              (i.lanes |= n),
                null !== (l = i.alternate) && (l.lanes |= n),
                ki(i, n, e),
                (i = null);
            } else i = a.child;
            if (null !== i) i.return = a;
            else
              for (i = a; null !== i; ) {
                if (i === e) {
                  i = null;
                  break;
                }
                if (null !== (a = i.sibling)) {
                  (a.return = i.return), (i = a);
                  break;
                }
                i = i.return;
              }
            a = i;
          }
        }
        function Si(e, t, n, r) {
          e = null;
          for (var a = t, l = !1; null !== a; ) {
            if (!l)
              if (0 !== (524288 & a.flags)) l = !0;
              else if (0 !== (262144 & a.flags)) break;
            if (10 === a.tag) {
              var i = a.alternate;
              if (null === i) throw Error(o(387));
              if (null !== (i = i.memoizedProps)) {
                var u = a.type;
                Yn(a.pendingProps.value, i.value) ||
                  (null !== e ? e.push(u) : (e = [u]));
              }
            } else if (a === J.current) {
              if (null === (i = a.alternate)) throw Error(o(387));
              i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
                (null !== e ? e.push(Ff) : (e = [Ff]));
            }
            a = a.return;
          }
          null !== e && wi(t, e, n, r), (t.flags |= 262144);
        }
        function xi(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!Yn(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Ei(e) {
          (gi = e),
            (vi = null),
            null !== (e = e.dependencies) && (e.firstContext = null);
        }
        function Ci(e) {
          return Pi(gi, e);
        }
        function _i(e, t) {
          return null === gi && Ei(e), Pi(e, t);
        }
        function Pi(e, t) {
          var n = t._currentValue;
          if (
            ((t = { context: t, memoizedValue: n, next: null }), null === vi)
          ) {
            if (null === e) throw Error(o(308));
            (vi = t),
              (e.dependencies = { lanes: 0, firstContext: t }),
              (e.flags |= 524288);
          } else vi = vi.next = t;
          return n;
        }
        var Ni = !1;
        function zi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function Li(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              });
        }
        function Ti(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function Ri(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & es))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              (t = Tr(e)),
              Lr(e, null, n),
              t
            );
          }
          return Pr(e, r, t, n), Tr(e);
        }
        function Oi(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194176 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), je(e, n);
          }
        }
        function ji(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        var Ai = !1;
        function Di() {
          if (Ai) {
            if (null !== Va) throw Va;
          }
        }
        function Fi(e, t, n, r) {
          Ai = !1;
          var a = e.updateQueue;
          Ni = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === o ? (l = s) : (o.next = s), (o = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== l) {
            var f = a.baseState;
            for (o = 0, c = s = u = null, i = l; ; ) {
              var d = -536870913 & i.lane,
                p = d !== i.lane;
              if (p ? (rs & d) === d : (r & d) === d) {
                0 !== d && d === Wa && (Ai = !0),
                  null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null,
                      });
                e: {
                  var h = e,
                    m = i;
                  d = t;
                  var g = n;
                  switch (m.tag) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(g, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(g, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = T({}, f, d);
                      break e;
                    case 2:
                      Ni = !0;
                  }
                }
                null !== (d = i.callback) &&
                  ((e.flags |= 64),
                  p && (e.flags |= 8192),
                  null === (p = a.callbacks) ? (a.callbacks = [d]) : p.push(d));
              } else
                (p = {
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (p = i).next),
                  (p.next = null),
                  (a.lastBaseUpdate = p),
                  (a.shared.pending = null);
              }
            }
            null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null === l && (a.shared.lanes = 0),
              (fs |= o),
              (e.lanes = o),
              (e.memoizedState = f);
          }
        }
        function Mi(e, t) {
          if ("function" !== typeof e) throw Error(o(191, e));
          e.call(t);
        }
        function $i(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) Mi(n[e], t);
        }
        function Ii(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var a = r.next;
              n = a;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var l = n.create,
                    o = n.inst;
                  (r = l()), (o.destroy = r);
                }
                n = n.next;
              } while (n !== a);
            }
          } catch (i) {
            rc(t, t.return, i);
          }
        }
        function Ui(e, t, n) {
          try {
            var r = t.updateQueue,
              a = null !== r ? r.lastEffect : null;
            if (null !== a) {
              var l = a.next;
              r = l;
              do {
                if ((r.tag & e) === e) {
                  var o = r.inst,
                    i = o.destroy;
                  if (void 0 !== i) {
                    (o.destroy = void 0), (a = t);
                    var u = n;
                    try {
                      i();
                    } catch (s) {
                      rc(a, u, s);
                    }
                  }
                }
                r = r.next;
              } while (r !== l);
            }
          } catch (s) {
            rc(t, t.return, s);
          }
        }
        function Hi(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              $i(t, n);
            } catch (r) {
              rc(e, e.return, r);
            }
          }
        }
        function Bi(e, t, n) {
          (n.props = Oo(e.type, e.memoizedProps)), (n.state = e.memoizedState);
          try {
            n.componentWillUnmount();
          } catch (r) {
            rc(e, t, r);
          }
        }
        function Wi(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              var r = e.stateNode;
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var a = r;
                  break;
                default:
                  a = r;
              }
              "function" === typeof n ? (e.refCleanup = n(a)) : (n.current = a);
            }
          } catch (l) {
            rc(e, t, l);
          }
        }
        function Vi(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" === typeof r)
              try {
                r();
              } catch (a) {
                rc(e, t, a);
              } finally {
                (e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null);
              }
            else if ("function" === typeof n)
              try {
                n(null);
              } catch (l) {
                rc(e, t, l);
              }
            else n.current = null;
        }
        function Qi(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (a) {
            rc(e, e.return, a);
          }
        }
        function qi(e, t, n) {
          try {
            var r = e.stateNode;
            !(function (e, t, n, r) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var a = null,
                    l = null,
                    i = null,
                    u = null,
                    s = null,
                    c = null,
                    f = null;
                  for (h in n) {
                    var d = n[h];
                    if (n.hasOwnProperty(h) && null != d)
                      switch (h) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          s = d;
                        default:
                          r.hasOwnProperty(h) || Wc(e, t, h, null, r, d);
                      }
                  }
                  for (var p in r) {
                    var h = r[p];
                    if (
                      ((d = n[p]),
                      r.hasOwnProperty(p) && (null != h || null != d))
                    )
                      switch (p) {
                        case "type":
                          l = h;
                          break;
                        case "name":
                          a = h;
                          break;
                        case "checked":
                          c = h;
                          break;
                        case "defaultChecked":
                          f = h;
                          break;
                        case "value":
                          i = h;
                          break;
                        case "defaultValue":
                          u = h;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != h) throw Error(o(137, t));
                          break;
                        default:
                          h !== d && Wc(e, t, p, h, r, d);
                      }
                  }
                  return void gt(e, i, u, s, c, f, l, a);
                case "select":
                  for (l in ((h = i = u = p = null), n))
                    if (((s = n[l]), n.hasOwnProperty(l) && null != s))
                      switch (l) {
                        case "value":
                          break;
                        case "multiple":
                          h = s;
                        default:
                          r.hasOwnProperty(l) || Wc(e, t, l, null, r, s);
                      }
                  for (a in r)
                    if (
                      ((l = r[a]),
                      (s = n[a]),
                      r.hasOwnProperty(a) && (null != l || null != s))
                    )
                      switch (a) {
                        case "value":
                          p = l;
                          break;
                        case "defaultValue":
                          u = l;
                          break;
                        case "multiple":
                          i = l;
                        default:
                          l !== s && Wc(e, t, a, l, r, s);
                      }
                  return (
                    (t = u),
                    (n = i),
                    (r = h),
                    void (null != p
                      ? bt(e, !!n, p, !1)
                      : !!r !== !!n &&
                        (null != t
                          ? bt(e, !!n, t, !0)
                          : bt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (u in ((h = p = null), n))
                    if (
                      ((a = n[u]),
                      n.hasOwnProperty(u) && null != a && !r.hasOwnProperty(u))
                    )
                      switch (u) {
                        case "value":
                        case "children":
                          break;
                        default:
                          Wc(e, t, u, null, r, a);
                      }
                  for (i in r)
                    if (
                      ((a = r[i]),
                      (l = n[i]),
                      r.hasOwnProperty(i) && (null != a || null != l))
                    )
                      switch (i) {
                        case "value":
                          p = a;
                          break;
                        case "defaultValue":
                          h = a;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != a) throw Error(o(91));
                          break;
                        default:
                          a !== l && Wc(e, t, i, a, r, l);
                      }
                  return void kt(e, p, h);
                case "option":
                  for (var m in n)
                    if (
                      ((p = n[m]),
                      n.hasOwnProperty(m) && null != p && !r.hasOwnProperty(m))
                    )
                      if ("selected" === m) e.selected = !1;
                      else Wc(e, t, m, null, r, p);
                  for (s in r)
                    if (
                      ((p = r[s]),
                      (h = n[s]),
                      r.hasOwnProperty(s) &&
                        p !== h &&
                        (null != p || null != h))
                    )
                      if ("selected" === s)
                        e.selected =
                          p && "function" !== typeof p && "symbol" !== typeof p;
                      else Wc(e, t, s, p, r, h);
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    (p = n[g]),
                      n.hasOwnProperty(g) &&
                        null != p &&
                        !r.hasOwnProperty(g) &&
                        Wc(e, t, g, null, r, p);
                  for (c in r)
                    if (
                      ((p = r[c]),
                      (h = n[c]),
                      r.hasOwnProperty(c) &&
                        p !== h &&
                        (null != p || null != h))
                    )
                      switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(o(137, t));
                          break;
                        default:
                          Wc(e, t, c, p, r, h);
                      }
                  return;
                default:
                  if (_t(t)) {
                    for (var v in n)
                      (p = n[v]),
                        n.hasOwnProperty(v) &&
                          void 0 !== p &&
                          !r.hasOwnProperty(v) &&
                          Vc(e, t, v, void 0, r, p);
                    for (f in r)
                      (p = r[f]),
                        (h = n[f]),
                        !r.hasOwnProperty(f) ||
                          p === h ||
                          (void 0 === p && void 0 === h) ||
                          Vc(e, t, f, p, r, h);
                    return;
                  }
              }
              for (var y in n)
                (p = n[y]),
                  n.hasOwnProperty(y) &&
                    null != p &&
                    !r.hasOwnProperty(y) &&
                    Wc(e, t, y, null, r, p);
              for (d in r)
                (p = r[d]),
                  (h = n[d]),
                  !r.hasOwnProperty(d) ||
                    p === h ||
                    (null == p && null == h) ||
                    Wc(e, t, d, p, r, h);
            })(r, e.type, n, t),
              (r[$e] = t);
          } catch (a) {
            rc(e, e.return, a);
          }
        }
        function Yi(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            27 === e.tag ||
            4 === e.tag
          );
        }
        function Ki(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Yi(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function Gi(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Bc));
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Gi(e, t, n), e = e.sibling; null !== e; )
              Gi(e, t, n), (e = e.sibling);
        }
        function Xi(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && 27 !== r && null !== (e = e.child))
            for (Xi(e, t, n), e = e.sibling; null !== e; )
              Xi(e, t, n), (e = e.sibling);
        }
        var Ji = !1,
          Zi = !1,
          eu = !1,
          tu = "function" === typeof WeakSet ? WeakSet : Set,
          nu = null,
          ru = !1;
        function au(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              vu(e, n), 4 & r && Ii(5, n);
              break;
            case 1:
              if ((vu(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (i) {
                    rc(n, n.return, i);
                  }
                else {
                  var a = Oo(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      a,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate
                    );
                  } catch (u) {
                    rc(n, n.return, u);
                  }
                }
              64 & r && Hi(n), 512 & r && Wi(n, n.return);
              break;
            case 3:
              if ((vu(e, n), 64 & r && null !== (r = n.updateQueue))) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                try {
                  $i(r, e);
                } catch (i) {
                  rc(n, n.return, i);
                }
              }
              break;
            case 26:
              vu(e, n), 512 & r && Wi(n, n.return);
              break;
            case 27:
            case 5:
              vu(e, n),
                null === t && 4 & r && Qi(n),
                512 & r && Wi(n, n.return);
              break;
            case 12:
            default:
              vu(e, n);
              break;
            case 13:
              vu(e, n), 4 & r && cu(e, n);
              break;
            case 22:
              if (!(a = null !== n.memoizedState || Ji)) {
                t = (null !== t && null !== t.memoizedState) || Zi;
                var l = Ji,
                  o = Zi;
                (Ji = a),
                  (Zi = t) && !o
                    ? bu(e, n, 0 !== (8772 & n.subtreeFlags))
                    : vu(e, n),
                  (Ji = l),
                  (Zi = o);
              }
              512 & r &&
                ("manual" === n.memoizedProps.mode
                  ? Wi(n, n.return)
                  : Vi(n, n.return));
          }
        }
        function lu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Qe(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        var ou = null,
          iu = !1;
        function uu(e, t, n) {
          for (n = n.child; null !== n; ) su(e, t, n), (n = n.sibling);
        }
        function su(e, t, n) {
          if (ye && "function" === typeof ye.onCommitFiberUnmount)
            try {
              ye.onCommitFiberUnmount(ve, n);
            } catch (o) {}
          switch (n.tag) {
            case 26:
              Zi || Vi(n, t),
                uu(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
              break;
            case 27:
              Zi || Vi(n, t);
              var r = ou,
                a = iu;
              for (
                ou = n.stateNode, uu(e, t, n), t = (n = n.stateNode).attributes;
                t.length;

              )
                n.removeAttributeNode(t[0]);
              Qe(n), (ou = r), (iu = a);
              break;
            case 5:
              Zi || Vi(n, t);
            case 6:
              a = ou;
              var l = iu;
              if (((ou = null), uu(e, t, n), (iu = l), null !== (ou = a)))
                if (iu)
                  try {
                    (e = ou),
                      (r = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(r)
                        : e.removeChild(r);
                  } catch (i) {
                    rc(n, t, i);
                  }
                else
                  try {
                    ou.removeChild(n.stateNode);
                  } catch (i) {
                    rc(n, t, i);
                  }
              break;
            case 18:
              null !== ou &&
                (iu
                  ? ((t = ou),
                    (n = n.stateNode),
                    8 === t.nodeType
                      ? lf(t.parentNode, n)
                      : 1 === t.nodeType && lf(t, n),
                    gd(t))
                  : lf(ou, n.stateNode));
              break;
            case 4:
              (r = ou),
                (a = iu),
                (ou = n.stateNode.containerInfo),
                (iu = !0),
                uu(e, t, n),
                (ou = r),
                (iu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              Zi || Ui(2, n, t), Zi || Ui(4, n, t), uu(e, t, n);
              break;
            case 1:
              Zi ||
                (Vi(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount &&
                  Bi(n, t, r)),
                uu(e, t, n);
              break;
            case 21:
              uu(e, t, n);
              break;
            case 22:
              Zi || Vi(n, t),
                (Zi = (r = Zi) || null !== n.memoizedState),
                uu(e, t, n),
                (Zi = r);
              break;
            default:
              uu(e, t, n);
          }
        }
        function cu(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              gd(e);
            } catch (n) {
              rc(t, t.return, n);
            }
        }
        function fu(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 13:
              case 19:
                var t = e.stateNode;
                return null === t && (t = e.stateNode = new tu()), t;
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new tu()),
                  t
                );
              default:
                throw Error(o(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            var r = uc.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
        }
        function du(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r],
                l = e,
                i = t,
                u = i;
              e: for (; null !== u; ) {
                switch (u.tag) {
                  case 27:
                  case 5:
                    (ou = u.stateNode), (iu = !1);
                    break e;
                  case 3:
                  case 4:
                    (ou = u.stateNode.containerInfo), (iu = !0);
                    break e;
                }
                u = u.return;
              }
              if (null === ou) throw Error(o(160));
              su(l, i, a),
                (ou = null),
                (iu = !1),
                null !== (l = a.alternate) && (l.return = null),
                (a.return = null);
            }
          if (13878 & t.subtreeFlags)
            for (t = t.child; null !== t; ) hu(t, e), (t = t.sibling);
        }
        var pu = null;
        function hu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              du(t, e),
                mu(e),
                4 & r && (Ui(3, e, e.return), Ii(3, e), Ui(5, e, e.return));
              break;
            case 1:
              du(t, e),
                mu(e),
                512 & r && (Zi || null === n || Vi(n, n.return)),
                64 & r &&
                  Ji &&
                  null !== (e = e.updateQueue) &&
                  null !== (r = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
              break;
            case 26:
              var a = pu;
              if (
                (du(t, e),
                mu(e),
                512 & r && (Zi || null === n || Vi(n, n.return)),
                4 & r)
              ) {
                var l = null !== n ? n.memoizedState : null;
                if (((r = e.memoizedState), null === n))
                  if (null === r)
                    if (null === e.stateNode) {
                      e: {
                        (r = e.type),
                          (n = e.memoizedProps),
                          (a = a.ownerDocument || a);
                        t: switch (r) {
                          case "title":
                            (!(l = a.getElementsByTagName("title")[0]) ||
                              l[Ve] ||
                              l[Me] ||
                              "http://www.w3.org/2000/svg" === l.namespaceURI ||
                              l.hasAttribute("itemprop")) &&
                              ((l = a.createElement(r)),
                              a.head.insertBefore(
                                l,
                                a.querySelector("head > title")
                              )),
                              Qc(l, r, n),
                              (l[Me] = e),
                              Xe(l),
                              (r = l);
                            break e;
                          case "link":
                            var i = Nf("link", "href", a).get(
                              r + (n.href || "")
                            );
                            if (i)
                              for (var u = 0; u < i.length; u++)
                                if (
                                  (l = i[u]).getAttribute("href") ===
                                    (null == n.href ? null : n.href) &&
                                  l.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  l.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  l.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  i.splice(u, 1);
                                  break t;
                                }
                            Qc((l = a.createElement(r)), r, n),
                              a.head.appendChild(l);
                            break;
                          case "meta":
                            if (
                              (i = Nf("meta", "content", a).get(
                                r + (n.content || "")
                              ))
                            )
                              for (u = 0; u < i.length; u++)
                                if (
                                  (l = i[u]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  l.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  l.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  l.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  l.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  i.splice(u, 1);
                                  break t;
                                }
                            Qc((l = a.createElement(r)), r, n),
                              a.head.appendChild(l);
                            break;
                          default:
                            throw Error(o(468, r));
                        }
                        (l[Me] = e), Xe(l), (r = l);
                      }
                      e.stateNode = r;
                    } else zf(a, e.type, e.stateNode);
                  else e.stateNode = xf(a, r, e.memoizedProps);
                else
                  l !== r
                    ? (null === l
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : l.count--,
                      null === r
                        ? zf(a, e.type, e.stateNode)
                        : xf(a, r, e.memoizedProps))
                    : null === r &&
                      null !== e.stateNode &&
                      qi(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              if (4 & r && null === e.alternate) {
                (a = e.stateNode), (l = e.memoizedProps);
                try {
                  for (var s = a.firstChild; s; ) {
                    var c = s.nextSibling,
                      f = s.nodeName;
                    s[Ve] ||
                      "HEAD" === f ||
                      "BODY" === f ||
                      "SCRIPT" === f ||
                      "STYLE" === f ||
                      ("LINK" === f && "stylesheet" === s.rel.toLowerCase()) ||
                      a.removeChild(s),
                      (s = c);
                  }
                  for (var d = e.type, p = a.attributes; p.length; )
                    a.removeAttributeNode(p[0]);
                  Qc(a, d, l), (a[Me] = e), (a[$e] = l);
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
            case 5:
              if (
                (du(t, e),
                mu(e),
                512 & r && (Zi || null === n || Vi(n, n.return)),
                32 & e.flags)
              ) {
                a = e.stateNode;
                try {
                  St(a, "");
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
              4 & r &&
                null != e.stateNode &&
                qi(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
                1024 & r && (eu = !0);
              break;
            case 6:
              if ((du(t, e), mu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (r = e.memoizedProps), (n = e.stateNode);
                try {
                  n.nodeValue = r;
                } catch (m) {
                  rc(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                ((Pf = null),
                (a = pu),
                (pu = pf(t.containerInfo)),
                du(t, e),
                (pu = a),
                mu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  gd(t.containerInfo);
                } catch (m) {
                  rc(e, e.return, m);
                }
              eu && ((eu = !1), gu(e));
              break;
            case 4:
              (r = pu),
                (pu = pf(e.stateNode.containerInfo)),
                du(t, e),
                mu(e),
                (pu = r);
              break;
            case 12:
              du(t, e), mu(e);
              break;
            case 13:
              du(t, e),
                mu(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !==
                    (null !== n && null !== n.memoizedState) &&
                  (bs = ue()),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), fu(e, r));
              break;
            case 22:
              if (
                (512 & r && (Zi || null === n || Vi(n, n.return)),
                (s = null !== e.memoizedState),
                (c = null !== n && null !== n.memoizedState),
                (Ji = (f = Ji) || s),
                (Zi = (d = Zi) || c),
                du(t, e),
                (Zi = d),
                (Ji = f),
                mu(e),
                ((t = e.stateNode)._current = e),
                (t._visibility &= -3),
                (t._visibility |= 2 & t._pendingVisibility),
                8192 & r &&
                  ((t._visibility = s ? -2 & t._visibility : 1 | t._visibility),
                  s && ((t = Ji || Zi), null === n || c || t || yu(e)),
                  null === e.memoizedProps ||
                    "manual" !== e.memoizedProps.mode))
              )
                e: for (n = null, t = e; ; ) {
                  if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
                    if (null === n) {
                      c = n = t;
                      try {
                        if (((a = c.stateNode), s))
                          "function" === typeof (l = a.style).setProperty
                            ? l.setProperty("display", "none", "important")
                            : (l.display = "none");
                        else {
                          i = c.stateNode;
                          var h =
                            void 0 !== (u = c.memoizedProps.style) &&
                            null !== u &&
                            u.hasOwnProperty("display")
                              ? u.display
                              : null;
                          i.style.display =
                            null == h || "boolean" === typeof h
                              ? ""
                              : ("" + h).trim();
                        }
                      } catch (m) {
                        rc(c, c.return, m);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        c.stateNode.nodeValue = s ? "" : c.memoizedProps;
                      } catch (m) {
                        rc(c, c.return, m);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    (t.child.return = t), (t = t.child);
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    n === t && (n = null), (t = t.return);
                  }
                  n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling);
                }
              4 & r &&
                null !== (r = e.updateQueue) &&
                null !== (n = r.retryQueue) &&
                ((r.retryQueue = null), fu(e, n));
              break;
            case 19:
              du(t, e),
                mu(e),
                4 & r &&
                  null !== (r = e.updateQueue) &&
                  ((e.updateQueue = null), fu(e, r));
              break;
            case 21:
              break;
            default:
              du(t, e), mu(e);
          }
        }
        function mu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              if (27 !== e.tag) {
                e: {
                  for (var n = e.return; null !== n; ) {
                    if (Yi(n)) {
                      var r = n;
                      break e;
                    }
                    n = n.return;
                  }
                  throw Error(o(160));
                }
                switch (r.tag) {
                  case 27:
                    var a = r.stateNode;
                    Xi(e, Ki(e), a);
                    break;
                  case 5:
                    var l = r.stateNode;
                    32 & r.flags && (St(l, ""), (r.flags &= -33)),
                      Xi(e, Ki(e), l);
                    break;
                  case 3:
                  case 4:
                    var i = r.stateNode.containerInfo;
                    Gi(e, Ki(e), i);
                    break;
                  default:
                    throw Error(o(161));
                }
              }
            } catch (u) {
              rc(e, e.return, u);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function gu(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              gu(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling);
            }
        }
        function vu(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              au(e, t.alternate, t), (t = t.sibling);
        }
        function yu(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ui(4, t, t.return), yu(t);
                break;
              case 1:
                Vi(t, t.return);
                var n = t.stateNode;
                "function" === typeof n.componentWillUnmount &&
                  Bi(t, t.return, n),
                  yu(t);
                break;
              case 26:
              case 27:
              case 5:
                Vi(t, t.return), yu(t);
                break;
              case 22:
                Vi(t, t.return), null === t.memoizedState && yu(t);
                break;
              default:
                yu(t);
            }
            e = e.sibling;
          }
        }
        function bu(e, t, n) {
          for (
            n = n && 0 !== (8772 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var r = t.alternate,
              a = e,
              l = t,
              o = l.flags;
            switch (l.tag) {
              case 0:
              case 11:
              case 15:
                bu(a, l, n), Ii(4, l);
                break;
              case 1:
                if (
                  (bu(a, l, n),
                  "function" ===
                    typeof (a = (r = l).stateNode).componentDidMount)
                )
                  try {
                    a.componentDidMount();
                  } catch (s) {
                    rc(r, r.return, s);
                  }
                if (null !== (a = (r = l).updateQueue)) {
                  var i = r.stateNode;
                  try {
                    var u = a.shared.hiddenCallbacks;
                    if (null !== u)
                      for (
                        a.shared.hiddenCallbacks = null, a = 0;
                        a < u.length;
                        a++
                      )
                        Mi(u[a], i);
                  } catch (s) {
                    rc(r, r.return, s);
                  }
                }
                n && 64 & o && Hi(l), Wi(l, l.return);
                break;
              case 26:
              case 27:
              case 5:
                bu(a, l, n), n && null === r && 4 & o && Qi(l), Wi(l, l.return);
                break;
              case 12:
              default:
                bu(a, l, n);
                break;
              case 13:
                bu(a, l, n), n && 4 & o && cu(a, l);
                break;
              case 22:
                null === l.memoizedState && bu(a, l, n), Wi(l, l.return);
            }
            t = t.sibling;
          }
        }
        function ku(e, t) {
          var n = null;
          null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Ua(n));
        }
        function wu(e, t) {
          (e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && Ua(e));
        }
        function Su(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) xu(e, t, n, r), (t = t.sibling);
        }
        function xu(e, t, n, r) {
          var a = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Su(e, t, n, r), 2048 & a && Ii(9, t);
              break;
            case 3:
              Su(e, t, n, r),
                2048 & a &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && Ua(e)));
              break;
            case 12:
              if (2048 & a) {
                Su(e, t, n, r), (e = t.stateNode);
                try {
                  var l = t.memoizedProps,
                    o = l.id,
                    i = l.onPostCommit;
                  "function" === typeof i &&
                    i(
                      o,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0
                    );
                } catch (u) {
                  rc(t, t.return, u);
                }
              } else Su(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              (l = t.stateNode),
                null !== t.memoizedState
                  ? 4 & l._visibility
                    ? Su(e, t, n, r)
                    : Cu(e, t)
                  : 4 & l._visibility
                  ? Su(e, t, n, r)
                  : ((l._visibility |= 4),
                    Eu(e, t, n, r, 0 !== (10256 & t.subtreeFlags))),
                2048 & a && ku(t.alternate, t);
              break;
            case 24:
              Su(e, t, n, r), 2048 & a && wu(t.alternate, t);
              break;
            default:
              Su(e, t, n, r);
          }
        }
        function Eu(e, t, n, r, a) {
          for (
            a = a && 0 !== (10256 & t.subtreeFlags), t = t.child;
            null !== t;

          ) {
            var l = e,
              o = t,
              i = n,
              u = r,
              s = o.flags;
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Eu(l, o, i, u, a), Ii(8, o);
                break;
              case 23:
                break;
              case 22:
                var c = o.stateNode;
                null !== o.memoizedState
                  ? 4 & c._visibility
                    ? Eu(l, o, i, u, a)
                    : Cu(l, o)
                  : ((c._visibility |= 4), Eu(l, o, i, u, a)),
                  a && 2048 & s && ku(o.alternate, o);
                break;
              case 24:
                Eu(l, o, i, u, a), a && 2048 & s && wu(o.alternate, o);
                break;
              default:
                Eu(l, o, i, u, a);
            }
            t = t.sibling;
          }
        }
        function Cu(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                a = r.flags;
              switch (r.tag) {
                case 22:
                  Cu(n, r), 2048 & a && ku(r.alternate, r);
                  break;
                case 24:
                  Cu(n, r), 2048 & a && wu(r.alternate, r);
                  break;
                default:
                  Cu(n, r);
              }
              t = t.sibling;
            }
        }
        var _u = 8192;
        function Pu(e) {
          if (e.subtreeFlags & _u)
            for (e = e.child; null !== e; ) Nu(e), (e = e.sibling);
        }
        function Nu(e) {
          switch (e.tag) {
            case 26:
              Pu(e),
                e.flags & _u &&
                  null !== e.memoizedState &&
                  (function (e, t, n) {
                    if (null === Tf) throw Error(o(475));
                    var r = Tf;
                    if (
                      "stylesheet" === t.type &&
                      ("string" !== typeof n.media ||
                        !1 !== matchMedia(n.media).matches) &&
                      0 === (4 & t.state.loading)
                    ) {
                      if (null === t.instance) {
                        var a = yf(n.href),
                          l = e.querySelector(bf(a));
                        if (l)
                          return (
                            null !== (e = l._p) &&
                              "object" === typeof e &&
                              "function" === typeof e.then &&
                              (r.count++, (r = Of.bind(r)), e.then(r, r)),
                            (t.state.loading |= 4),
                            (t.instance = l),
                            void Xe(l)
                          );
                        (l = e.ownerDocument || e),
                          (n = kf(n)),
                          (a = ff.get(a)) && Cf(n, a),
                          Xe((l = l.createElement("link")));
                        var i = l;
                        (i._p = new Promise(function (e, t) {
                          (i.onload = e), (i.onerror = t);
                        })),
                          Qc(l, "link", n),
                          (t.instance = l);
                      }
                      null === r.stylesheets && (r.stylesheets = new Map()),
                        r.stylesheets.set(t, e),
                        (e = t.state.preload) &&
                          0 === (3 & t.state.loading) &&
                          (r.count++,
                          (t = Of.bind(r)),
                          e.addEventListener("load", t),
                          e.addEventListener("error", t));
                    }
                  })(pu, e.memoizedState, e.memoizedProps);
              break;
            case 5:
            default:
              Pu(e);
              break;
            case 3:
            case 4:
              var t = pu;
              (pu = pf(e.stateNode.containerInfo)), Pu(e), (pu = t);
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (t = e.alternate) && null !== t.memoizedState
                  ? ((t = _u), (_u = 16777216), Pu(e), (_u = t))
                  : Pu(e));
          }
        }
        function zu(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              (t = e.sibling), (e.sibling = null), (e = t);
            } while (null !== e);
          }
        }
        function Lu(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (nu = r), Ou(r, e);
              }
            zu(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) Tu(e), (e = e.sibling);
        }
        function Tu(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Lu(e), 2048 & e.flags && Ui(9, e, e.return);
              break;
            case 3:
            case 12:
            default:
              Lu(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              4 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -5), Ru(e))
                : Lu(e);
          }
        }
        function Ru(e) {
          var t = e.deletions;
          if (0 !== (16 & e.flags)) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (nu = r), Ou(r, e);
              }
            zu(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                Ui(8, t, t.return), Ru(t);
                break;
              case 22:
                4 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -5), Ru(t));
                break;
              default:
                Ru(t);
            }
            e = e.sibling;
          }
        }
        function Ou(e, t) {
          for (; null !== nu; ) {
            var n = nu;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Ui(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Ua(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) (r.return = n), (nu = r);
            else
              e: for (n = e; null !== nu; ) {
                var a = (r = nu).sibling,
                  l = r.return;
                if ((lu(r), r === n)) {
                  nu = null;
                  break e;
                }
                if (null !== a) {
                  (a.return = l), (nu = a);
                  break e;
                }
                nu = l;
              }
          }
        }
        function ju(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Au(e, t, n, r) {
          return new ju(e, t, n, r);
        }
        function Du(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Fu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Au(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 31457280 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Mu(e, t) {
          e.flags &= 31457282;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function $u(e, t, n, r, a, l) {
          var i = 0;
          if (((r = e), "function" === typeof e)) Du(e) && (i = 1);
          else if ("string" === typeof e)
            i = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" !== typeof t.precedence ||
                    "string" !== typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" !== typeof t.rel ||
                    "string" !== typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" === typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" !== typeof t.async &&
                    "symbol" !== typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" === typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, K.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
              ? 27
              : 5;
          else
            e: switch (e) {
              case f:
                return Iu(n.children, a, l, t);
              case d:
                (i = 8), (a |= 24);
                break;
              case p:
                return (
                  ((e = Au(12, n, t, 2 | a)).elementType = p), (e.lanes = l), e
                );
              case y:
                return (
                  ((e = Au(13, n, t, a)).elementType = y), (e.lanes = l), e
                );
              case b:
                return (
                  ((e = Au(19, n, t, a)).elementType = b), (e.lanes = l), e
                );
              case S:
                return Uu(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case h:
                    case g:
                      i = 10;
                      break e;
                    case m:
                      i = 9;
                      break e;
                    case v:
                      i = 11;
                      break e;
                    case k:
                      i = 14;
                      break e;
                    case w:
                      (i = 16), (r = null);
                      break e;
                  }
                (i = 29),
                  (n = Error(o(130, null === e ? "null" : typeof e, ""))),
                  (r = null);
            }
          return (
            ((t = Au(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Iu(e, t, n, r) {
          return ((e = Au(7, e, r, t)).lanes = n), e;
        }
        function Uu(e, t, n, r) {
          ((e = Au(22, e, r, t)).elementType = S), (e.lanes = n);
          var a = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function () {
              var e = a._current;
              if (null === e) throw Error(o(456));
              if (0 === (2 & a._pendingVisibility)) {
                var t = zr(e, 2);
                null !== t && ((a._pendingVisibility |= 2), Rs(t, e, 2));
              }
            },
            attach: function () {
              var e = a._current;
              if (null === e) throw Error(o(456));
              if (0 !== (2 & a._pendingVisibility)) {
                var t = zr(e, 2);
                null !== t && ((a._pendingVisibility &= -3), Rs(t, e, 2));
              }
            },
          };
          return (e.stateNode = a), e;
        }
        function Hu(e, t, n) {
          return ((e = Au(6, e, null, t)).lanes = n), e;
        }
        function Bu(e, t, n) {
          return (
            ((t = Au(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Wu(e) {
          e.flags |= 4;
        }
        function Vu(e, t) {
          if ("stylesheet" !== t.type || 0 !== (4 & t.state.loading))
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !Lf(t))) {
            if (
              null !== (t = Na.current) &&
              ((4194176 & rs) === rs
                ? null !== za
                : ((62914560 & rs) !== rs && 0 === (536870912 & rs)) ||
                  t !== za)
            )
              throw ((da = ua), ia);
            e.flags |= 8192;
          }
        }
        function Qu(e, t) {
          null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? Le() : 536870912),
              (e.lanes |= t),
              (ms |= t));
        }
        function qu(e, t) {
          if (!Gr)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Yu(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 31457280 & a.subtreeFlags),
                (r |= 31457280 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ku(e, t, n) {
          var r = t.pendingProps;
          switch ((qr(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return Yu(t), null;
            case 3:
              return (
                (n = t.stateNode),
                (r = null),
                null !== e && (r = e.memoizedState.cache),
                t.memoizedState.cache !== r && (t.flags |= 2048),
                bi($a),
                ee(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ra(t)
                    ? Wu(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== Xr && (js(Xr), (Xr = null)))),
                Yu(t),
                null
              );
            case 26:
              return (
                (n = t.memoizedState),
                null === e
                  ? (Wu(t),
                    null !== n
                      ? (Yu(t), Vu(t, n))
                      : (Yu(t), (t.flags &= -16777217)))
                  : n
                  ? n !== e.memoizedState
                    ? (Wu(t), Yu(t), Vu(t, n))
                    : (Yu(t), (t.flags &= -16777217))
                  : (e.memoizedProps !== r && Wu(t),
                    Yu(t),
                    (t.flags &= -16777217)),
                null
              );
            case 27:
              ne(t), (n = X.current);
              var a = t.type;
              if (null !== e && null != t.stateNode)
                e.memoizedProps !== r && Wu(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Yu(t), null;
                }
                (e = K.current),
                  ra(t) ? ta(t) : ((e = cf(a, r, n)), (t.stateNode = e), Wu(t));
              }
              return Yu(t), null;
            case 5:
              if ((ne(t), (n = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== r && Wu(t);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Yu(t), null;
                }
                if (((e = K.current), ra(t))) ta(t);
                else {
                  switch (((a = Kc(X.current)), e)) {
                    case 1:
                      e = a.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case 2:
                      e = a.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        n
                      );
                      break;
                    default:
                      switch (n) {
                        case "svg":
                          e = a.createElementNS(
                            "http://www.w3.org/2000/svg",
                            n
                          );
                          break;
                        case "math":
                          e = a.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            n
                          );
                          break;
                        case "script":
                          ((e = a.createElement("div")).innerHTML =
                            "<script></script>"),
                            (e = e.removeChild(e.firstChild));
                          break;
                        case "select":
                          (e =
                            "string" === typeof r.is
                              ? a.createElement("select", { is: r.is })
                              : a.createElement("select")),
                            r.multiple
                              ? (e.multiple = !0)
                              : r.size && (e.size = r.size);
                          break;
                        default:
                          e =
                            "string" === typeof r.is
                              ? a.createElement(n, { is: r.is })
                              : a.createElement(n);
                      }
                  }
                  (e[Me] = t), (e[$e] = r);
                  e: for (a = t.child; null !== a; ) {
                    if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode);
                    else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
                      (a.child.return = a), (a = a.child);
                      continue;
                    }
                    if (a === t) break e;
                    for (; null === a.sibling; ) {
                      if (null === a.return || a.return === t) break e;
                      a = a.return;
                    }
                    (a.sibling.return = a.return), (a = a.sibling);
                  }
                  t.stateNode = e;
                  e: switch ((Qc(e, n, r), n)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      e = !!r.autoFocus;
                      break e;
                    case "img":
                      e = !0;
                      break e;
                    default:
                      e = !1;
                  }
                  e && Wu(t);
                }
              }
              return Yu(t), (t.flags &= -16777217), null;
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== r && Wu(t);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((e = X.current), ra(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (r = null),
                    null !== (a = Yr))
                  )
                    switch (a.tag) {
                      case 27:
                      case 5:
                        r = a.memoizedProps;
                    }
                  (e[Me] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== r && !0 === r.suppressHydrationWarning) ||
                      Hc(e.nodeValue, n)
                    )) || ea(t);
                } else
                  ((e = Kc(e).createTextNode(r))[Me] = t), (t.stateNode = e);
              }
              return Yu(t), null;
            case 13:
              if (
                ((r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((a = ra(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(o(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(o(317));
                    a[Me] = t;
                  } else
                    aa(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Yu(t), (a = !1);
                } else null !== Xr && (js(Xr), (Xr = null)), (a = !0);
                if (!a) return 256 & t.flags ? (Oa(t), t) : (Oa(t), null);
              }
              if ((Oa(t), 0 !== (128 & t.flags))) return (t.lanes = n), t;
              if (
                ((n = null !== r),
                (e = null !== e && null !== e.memoizedState),
                n)
              ) {
                (a = null),
                  null !== (r = t.child).alternate &&
                    null !== r.alternate.memoizedState &&
                    null !== r.alternate.memoizedState.cachePool &&
                    (a = r.alternate.memoizedState.cachePool.pool);
                var l = null;
                null !== r.memoizedState &&
                  null !== r.memoizedState.cachePool &&
                  (l = r.memoizedState.cachePool.pool),
                  l !== a && (r.flags |= 2048);
              }
              return (
                n !== e && n && (t.child.flags |= 8192),
                Qu(t, t.updateQueue),
                Yu(t),
                null
              );
            case 4:
              return (
                ee(), null === e && Rc(t.stateNode.containerInfo), Yu(t), null
              );
            case 10:
              return bi(t.type), Yu(t), null;
            case 19:
              if ((q(ja), null === (a = t.memoizedState))) return Yu(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = a.rendering)))
                if (r) qu(a, !1);
                else {
                  if (0 !== cs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = Aa(e))) {
                        for (
                          t.flags |= 128,
                            qu(a, !1),
                            e = l.updateQueue,
                            t.updateQueue = e,
                            Qu(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          Mu(n, e), (n = n.sibling);
                        return Y(ja, (1 & ja.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    ue() > ks &&
                    ((t.flags |= 128),
                    (r = !0),
                    qu(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = Aa(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      Qu(t, e),
                      qu(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !l.alternate &&
                        !Gr)
                    )
                      return Yu(t), null;
                  } else
                    2 * ue() - a.renderingStartTime > ks &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      qu(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (e = a.last) ? (e.sibling = l) : (t.child = l),
                    (a.last = l));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = ue()),
                  (t.sibling = null),
                  (e = ja.current),
                  Y(ja, r ? (1 & e) | 2 : 1 & e),
                  t)
                : (Yu(t), null);
            case 22:
            case 23:
              return (
                Oa(t),
                Pa(),
                (r = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== r && (t.flags |= 8192)
                  : r && (t.flags |= 8192),
                r
                  ? 0 !== (536870912 & n) &&
                    0 === (128 & t.flags) &&
                    (Yu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Yu(t),
                null !== (n = t.updateQueue) && Qu(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (r = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (r = t.memoizedState.cachePool.pool),
                r !== n && (t.flags |= 2048),
                null !== e && q(Ya),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                bi($a),
                Yu(t),
                null
              );
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gu(e, t) {
          switch ((qr(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                bi($a),
                ee(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return ne(t), null;
            case 13:
              if (
                (Oa(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                aa();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return q(ja), null;
            case 4:
              return ee(), null;
            case 10:
              return bi(t.type), null;
            case 22:
            case 23:
              return (
                Oa(t),
                Pa(),
                null !== e && q(Ya),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return bi($a), null;
            default:
              return null;
          }
        }
        function Xu(e, t) {
          switch ((qr(t), t.tag)) {
            case 3:
              bi($a), ee();
              break;
            case 26:
            case 27:
            case 5:
              ne(t);
              break;
            case 4:
              ee();
              break;
            case 13:
              Oa(t);
              break;
            case 19:
              q(ja);
              break;
            case 10:
              bi(t.type);
              break;
            case 22:
            case 23:
              Oa(t), Pa(), null !== e && q(Ya);
              break;
            case 24:
              bi($a);
          }
        }
        var Ju = {
            getCacheForType: function (e) {
              var t = Ci($a),
                n = t.data.get(e);
              return void 0 === n && ((n = e()), t.data.set(e, n)), n;
            },
          },
          Zu = "function" === typeof WeakMap ? WeakMap : Map,
          es = 0,
          ts = null,
          ns = null,
          rs = 0,
          as = 0,
          ls = null,
          os = !1,
          is = !1,
          us = !1,
          ss = 0,
          cs = 0,
          fs = 0,
          ds = 0,
          ps = 0,
          hs = 0,
          ms = 0,
          gs = null,
          vs = null,
          ys = !1,
          bs = 0,
          ks = 1 / 0,
          ws = null,
          Ss = null,
          xs = !1,
          Es = null,
          Cs = 0,
          _s = 0,
          Ps = null,
          Ns = 0,
          zs = null;
        function Ls() {
          if (0 !== (2 & es) && 0 !== rs) return rs & -rs;
          if (null !== L.T) {
            return 0 !== Wa ? Wa : wc();
          }
          return De();
        }
        function Ts() {
          0 === hs && (hs = 0 === (536870912 & rs) || Gr ? ze() : 536870912);
          var e = Na.current;
          return null !== e && (e.flags |= 32), hs;
        }
        function Rs(e, t, n) {
          ((e === ts && 2 === as) || null !== e.cancelPendingCommit) &&
            (Is(e, 0), Fs(e, rs, hs, !1)),
            Re(e, n),
            (0 !== (2 & es) && e === ts) ||
              (e === ts &&
                (0 === (2 & es) && (ds |= n), 4 === cs && Fs(e, rs, hs, !1)),
              mc(e));
        }
        function Os(e, t, n) {
          if (0 !== (6 & es)) throw Error(o(327));
          for (
            var r =
                (!n && 0 === (60 & t) && 0 === (t & e.expiredLanes)) ||
                Pe(e, t),
              a = r
                ? (function (e, t) {
                    var n = es;
                    es |= 2;
                    var r = Hs(),
                      a = Bs();
                    ts !== e || rs !== t
                      ? ((ws = null), (ks = ue() + 500), Is(e, t))
                      : (is = Pe(e, t));
                    e: for (;;)
                      try {
                        if (0 !== as && null !== ns) {
                          t = ns;
                          var l = ls;
                          t: switch (as) {
                            case 1:
                              (as = 0), (ls = null), Gs(e, t, l, 1);
                              break;
                            case 2:
                              if (sa(l)) {
                                (as = 0), (ls = null), Ks(t);
                                break;
                              }
                              (t = function () {
                                2 === as && ts === e && (as = 7), mc(e);
                              }),
                                l.then(t, t);
                              break e;
                            case 3:
                              as = 7;
                              break e;
                            case 4:
                              as = 5;
                              break e;
                            case 7:
                              sa(l)
                                ? ((as = 0), (ls = null), Ks(t))
                                : ((as = 0), (ls = null), Gs(e, t, l, 7));
                              break;
                            case 5:
                              var i = null;
                              switch (ns.tag) {
                                case 26:
                                  i = ns.memoizedState;
                                case 5:
                                case 27:
                                  var u = ns;
                                  if (!i || Lf(i)) {
                                    (as = 0), (ls = null);
                                    var s = u.sibling;
                                    if (null !== s) ns = s;
                                    else {
                                      var c = u.return;
                                      null !== c
                                        ? ((ns = c), Xs(c))
                                        : (ns = null);
                                    }
                                    break t;
                                  }
                              }
                              (as = 0), (ls = null), Gs(e, t, l, 5);
                              break;
                            case 6:
                              (as = 0), (ls = null), Gs(e, t, l, 6);
                              break;
                            case 8:
                              $s(), (cs = 6);
                              break e;
                            default:
                              throw Error(o(462));
                          }
                        }
                        qs();
                        break;
                      } catch (f) {
                        Us(e, f);
                      }
                    return (
                      (vi = gi = null),
                      (L.H = r),
                      (L.A = a),
                      (es = n),
                      null !== ns ? 0 : ((ts = null), (rs = 0), _r(), cs)
                    );
                  })(e, t)
                : Vs(e, t, !0),
              l = r;
            ;

          ) {
            if (0 === a) {
              is && !r && Fs(e, t, 0, !1);
              break;
            }
            if (6 === a) Fs(e, t, 0, !os);
            else {
              if (((n = e.current.alternate), l && !Ds(n))) {
                (a = Vs(e, t, !1)), (l = !1);
                continue;
              }
              if (2 === a) {
                if (((l = t), e.errorRecoveryDisabledLanes & l)) var i = 0;
                else
                  i =
                    0 !== (i = -536870913 & e.pendingLanes)
                      ? i
                      : 536870912 & i
                      ? 536870912
                      : 0;
                if (0 !== i) {
                  t = i;
                  e: {
                    var u = e;
                    a = gs;
                    var s = u.current.memoizedState.isDehydrated;
                    if (
                      (s && (Is(u, i).flags |= 256), 2 !== (i = Vs(u, i, !1)))
                    ) {
                      if (us && !s) {
                        (u.errorRecoveryDisabledLanes |= l), (ds |= l), (a = 4);
                        break e;
                      }
                      (l = vs), (vs = a), null !== l && js(l);
                    }
                    a = i;
                  }
                  if (((l = !1), 2 !== a)) continue;
                }
              }
              if (1 === a) {
                Is(e, 0), Fs(e, t, 0, !0);
                break;
              }
              e: {
                switch (((r = e), a)) {
                  case 0:
                  case 1:
                    throw Error(o(345));
                  case 4:
                    if ((4194176 & t) === t) {
                      Fs(r, t, hs, !os);
                      break e;
                    }
                    break;
                  case 2:
                    vs = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(o(329));
                }
                if (
                  ((r.finishedWork = n),
                  (r.finishedLanes = t),
                  (62914560 & t) === t && 10 < (l = bs + 300 - ue()))
                ) {
                  if ((Fs(r, t, hs, !os), 0 !== _e(r, 0))) break e;
                  r.timeoutHandle = ef(
                    As.bind(
                      null,
                      r,
                      n,
                      vs,
                      ws,
                      ys,
                      t,
                      hs,
                      ds,
                      ms,
                      os,
                      2,
                      -0,
                      0
                    ),
                    l
                  );
                } else As(r, n, vs, ws, ys, t, hs, ds, ms, os, 0, -0, 0);
              }
            }
            break;
          }
          mc(e);
        }
        function js(e) {
          null === vs ? (vs = e) : vs.push.apply(vs, e);
        }
        function As(e, t, n, r, a, l, i, u, s, c, f, d, p) {
          var h = t.subtreeFlags;
          if (
            (8192 & h || 16785408 === (16785408 & h)) &&
            ((Tf = { stylesheets: null, count: 0, unsuspend: Rf }),
            Nu(t),
            null !==
              (t = (function () {
                if (null === Tf) throw Error(o(475));
                var e = Tf;
                return (
                  e.stylesheets && 0 === e.count && Af(e, e.stylesheets),
                  0 < e.count
                    ? function (t) {
                        var n = setTimeout(function () {
                          if (
                            (e.stylesheets && Af(e, e.stylesheets), e.unsuspend)
                          ) {
                            var t = e.unsuspend;
                            (e.unsuspend = null), t();
                          }
                        }, 6e4);
                        return (
                          (e.unsuspend = t),
                          function () {
                            (e.unsuspend = null), clearTimeout(n);
                          }
                        );
                      }
                    : null
                );
              })()))
          )
            return (
              (e.cancelPendingCommit = t(
                Zs.bind(null, e, n, r, a, i, u, s, 1, d, p)
              )),
              void Fs(e, l, i, !c)
            );
          Zs(e, n, r, a, i, u, s, f, d, p);
        }
        function Ds(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var a = n[r],
                  l = a.getSnapshot;
                a = a.value;
                try {
                  if (!Yn(l(), a)) return !1;
                } catch (o) {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              (n.return = t), (t = n);
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return !0;
        }
        function Fs(e, t, n, r) {
          (t &= ~ps),
            (t &= ~ds),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes);
          for (var a = t; 0 < a; ) {
            var l = 31 - ke(a),
              o = 1 << l;
            (r[l] = -1), (a &= ~o);
          }
          0 !== n && Oe(e, n, t);
        }
        function Ms() {
          return 0 !== (6 & es) || (gc(0, !1), !1);
        }
        function $s() {
          if (null !== ns) {
            if (0 === as) var e = ns.return;
            else
              (vi = gi = null), vl((e = ns)), (ha = null), (ma = 0), (e = ns);
            for (; null !== e; ) Xu(e.alternate, e), (e = e.return);
            ns = null;
          }
        }
        function Is(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          -1 !== n && ((e.timeoutHandle = -1), tf(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            $s(),
            (ts = e),
            (ns = n = Fu(e.current, null)),
            (rs = t),
            (as = 0),
            (ls = null),
            (os = !1),
            (is = Pe(e, t)),
            (us = !1),
            (ms = hs = ps = ds = fs = cs = 0),
            (vs = gs = null),
            (ys = !1),
            0 !== (8 & t) && (t |= 32 & t);
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var a = 31 - ke(r),
                l = 1 << a;
              (t |= e[a]), (r &= ~l);
            }
          return (ss = t), _r(), n;
        }
        function Us(e, t) {
          (Za = null),
            (L.H = Co),
            t === oa
              ? ((t = pa()), (as = 3))
              : t === ia
              ? ((t = pa()), (as = 4))
              : (as =
                  t === Bo
                    ? 8
                    : null !== t &&
                      "object" === typeof t &&
                      "function" === typeof t.then
                    ? 6
                    : 1),
            (ls = t),
            null === ns && ((cs = 1), Mo(e, jr(t, e.current)));
        }
        function Hs() {
          var e = L.H;
          return (L.H = Co), null === e ? Co : e;
        }
        function Bs() {
          var e = L.A;
          return (L.A = Ju), e;
        }
        function Ws() {
          (cs = 4),
            os || ((4194176 & rs) !== rs && null !== Na.current) || (is = !0),
            (0 === (134217727 & fs) && 0 === (134217727 & ds)) ||
              null === ts ||
              Fs(ts, rs, hs, !1);
        }
        function Vs(e, t, n) {
          var r = es;
          es |= 2;
          var a = Hs(),
            l = Bs();
          (ts === e && rs === t) || ((ws = null), Is(e, t)), (t = !1);
          var o = cs;
          e: for (;;)
            try {
              if (0 !== as && null !== ns) {
                var i = ns,
                  u = ls;
                switch (as) {
                  case 8:
                    $s(), (o = 6);
                    break e;
                  case 3:
                  case 2:
                  case 6:
                    null === Na.current && (t = !0);
                    var s = as;
                    if (((as = 0), (ls = null), Gs(e, i, u, s), n && is)) {
                      o = 0;
                      break e;
                    }
                    break;
                  default:
                    (s = as), (as = 0), (ls = null), Gs(e, i, u, s);
                }
              }
              Qs(), (o = cs);
              break;
            } catch (c) {
              Us(e, c);
            }
          return (
            t && e.shellSuspendCounter++,
            (vi = gi = null),
            (es = r),
            (L.H = a),
            (L.A = l),
            null === ns && ((ts = null), (rs = 0), _r()),
            o
          );
        }
        function Qs() {
          for (; null !== ns; ) Ys(ns);
        }
        function qs() {
          for (; null !== ns && !oe(); ) Ys(ns);
        }
        function Ys(e) {
          var t = hi(e.alternate, e, ss);
          (e.memoizedProps = e.pendingProps), null === t ? Xs(e) : (ns = t);
        }
        function Ks(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Zo(n, t, t.pendingProps, t.type, void 0, rs);
              break;
            case 11:
              t = Zo(n, t, t.pendingProps, t.type.render, t.ref, rs);
              break;
            case 5:
              vl(t);
            default:
              Xu(n, t), (t = hi(n, (t = ns = Mu(t, ss)), ss));
          }
          (e.memoizedProps = e.pendingProps), null === t ? Xs(e) : (ns = t);
        }
        function Gs(e, t, n, r) {
          (vi = gi = null), vl(t), (ha = null), (ma = 0);
          var a = t.return;
          try {
            if (
              (function (e, t, n, r, a) {
                if (
                  ((n.flags |= 32768),
                  null !== r &&
                    "object" === typeof r &&
                    "function" === typeof r.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && Si(t, n, a, !0),
                    null !== (n = Na.current))
                  ) {
                    switch (n.tag) {
                      case 13:
                        return (
                          null === za
                            ? Ws()
                            : null === n.alternate && 0 === cs && (cs = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = a),
                          r === ua
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([r]))
                                : t.add(r),
                              ac(e, r, a)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          r === ua
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([r]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                ? (t.retryQueue = new Set([r]))
                                : n.add(r),
                              ac(e, r, a)),
                          !1
                        );
                    }
                    throw Error(o(435, n.tag));
                  }
                  return ac(e, r, a), Ws(), !1;
                }
                if (Gr)
                  return (
                    null !== (t = Na.current)
                      ? (0 === (65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = a),
                        r !== Zr &&
                          la(jr((e = Error(o(422), { cause: r })), n)))
                      : (r !== Zr &&
                          la(jr((t = Error(o(423), { cause: r })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (a &= -a),
                        (e.lanes |= a),
                        (r = jr(r, n)),
                        ji(e, (a = Io(e.stateNode, r, a))),
                        4 !== cs && (cs = 2)),
                    !1
                  );
                var l = Error(o(520), { cause: r });
                if (
                  ((l = jr(l, n)),
                  null === gs ? (gs = [l]) : gs.push(l),
                  4 !== cs && (cs = 2),
                  null === t)
                )
                  return !0;
                (r = jr(r, n)), (n = t);
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = a & -a),
                        (n.lanes |= e),
                        ji(n, (e = Io(n.stateNode, r, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (l = n.stateNode),
                        0 === (128 & n.flags) &&
                          ("function" === typeof t.getDerivedStateFromError ||
                            (null !== l &&
                              "function" === typeof l.componentDidCatch &&
                              (null === Ss || !Ss.has(l)))))
                      )
                        return (
                          (n.flags |= 65536),
                          (a &= -a),
                          (n.lanes |= a),
                          Ho((a = Uo(a)), e, n, r),
                          ji(n, a),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, a, t, n, rs)
            )
              return (cs = 1), Mo(e, jr(n, e.current)), void (ns = null);
          } catch (l) {
            if (null !== a) throw ((ns = a), l);
            return (cs = 1), Mo(e, jr(n, e.current)), void (ns = null);
          }
          32768 & t.flags
            ? (Gr || 1 === r
                ? (e = !0)
                : is || 0 !== (536870912 & rs)
                ? (e = !1)
                : ((os = e = !0),
                  (2 === r || 3 === r || 6 === r) &&
                    null !== (r = Na.current) &&
                    13 === r.tag &&
                    (r.flags |= 16384)),
              Js(t, e))
            : Xs(t);
        }
        function Xs(e) {
          var t = e;
          do {
            if (0 !== (32768 & t.flags)) return void Js(t, os);
            e = t.return;
            var n = Ku(t.alternate, t, ss);
            if (null !== n) return void (ns = n);
            if (null !== (t = t.sibling)) return void (ns = t);
            ns = t = e;
          } while (null !== t);
          0 === cs && (cs = 5);
        }
        function Js(e, t) {
          do {
            var n = Gu(e.alternate, e);
            if (null !== n) return (n.flags &= 32767), void (ns = n);
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (ns = e);
            ns = e = n;
          } while (null !== e);
          (cs = 6), (ns = null);
        }
        function Zs(e, t, n, r, a, l, i, u, s, c) {
          var f = L.T,
            d = H.p;
          try {
            (H.p = 2),
              (L.T = null),
              (function (e, t, n, r, a, l, i, u) {
                do {
                  tc();
                } while (null !== Es);
                if (0 !== (6 & es)) throw Error(o(327));
                var s = e.finishedWork;
                if (((r = e.finishedLanes), null === s)) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  s === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null),
                  (e.callbackPriority = 0),
                  (e.cancelPendingCommit = null);
                var c = s.lanes | s.childLanes;
                if (
                  ((function (e, t, n, r, a, l) {
                    var o = e.pendingLanes;
                    (e.pendingLanes = n),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.warmLanes = 0),
                      (e.expiredLanes &= n),
                      (e.entangledLanes &= n),
                      (e.errorRecoveryDisabledLanes &= n),
                      (e.shellSuspendCounter = 0);
                    var i = e.entanglements,
                      u = e.expirationTimes,
                      s = e.hiddenUpdates;
                    for (n = o & ~n; 0 < n; ) {
                      var c = 31 - ke(n),
                        f = 1 << c;
                      (i[c] = 0), (u[c] = -1);
                      var d = s[c];
                      if (null !== d)
                        for (s[c] = null, c = 0; c < d.length; c++) {
                          var p = d[c];
                          null !== p && (p.lane &= -536870913);
                        }
                      n &= ~f;
                    }
                    0 !== r && Oe(e, r, 0),
                      0 !== l &&
                        0 === a &&
                        0 !== e.tag &&
                        (e.suspendedLanes |= l & ~(o & ~t));
                  })(e, r, (c |= Cr), l, i, u),
                  e === ts && ((ns = ts = null), (rs = 0)),
                  (0 === (10256 & s.subtreeFlags) && 0 === (10256 & s.flags)) ||
                    xs ||
                    ((xs = !0),
                    (_s = c),
                    (Ps = n),
                    (function (e, t) {
                      ae(e, t);
                    })(de, function () {
                      return tc(), null;
                    })),
                  (n = 0 !== (15990 & s.flags)),
                  0 !== (15990 & s.subtreeFlags) || n
                    ? ((n = L.T),
                      (L.T = null),
                      (l = H.p),
                      (H.p = 2),
                      (i = es),
                      (es |= 4),
                      (function (e, t) {
                        if (
                          ((e = e.containerInfo), (qc = Vf), er((e = Zn(e))))
                        ) {
                          if ("selectionStart" in e)
                            var n = {
                              start: e.selectionStart,
                              end: e.selectionEnd,
                            };
                          else
                            e: {
                              var r =
                                (n =
                                  ((n = e.ownerDocument) && n.defaultView) ||
                                  window).getSelection && n.getSelection();
                              if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var a = r.anchorOffset,
                                  l = r.focusNode;
                                r = r.focusOffset;
                                try {
                                  n.nodeType, l.nodeType;
                                } catch (g) {
                                  n = null;
                                  break e;
                                }
                                var i = 0,
                                  u = -1,
                                  s = -1,
                                  c = 0,
                                  f = 0,
                                  d = e,
                                  p = null;
                                t: for (;;) {
                                  for (
                                    var h;
                                    d !== n ||
                                      (0 !== a && 3 !== d.nodeType) ||
                                      (u = i + a),
                                      d !== l ||
                                        (0 !== r && 3 !== d.nodeType) ||
                                        (s = i + r),
                                      3 === d.nodeType &&
                                        (i += d.nodeValue.length),
                                      null !== (h = d.firstChild);

                                  )
                                    (p = d), (d = h);
                                  for (;;) {
                                    if (d === e) break t;
                                    if (
                                      (p === n && ++c === a && (u = i),
                                      p === l && ++f === r && (s = i),
                                      null !== (h = d.nextSibling))
                                    )
                                      break;
                                    p = (d = p).parentNode;
                                  }
                                  d = h;
                                }
                                n =
                                  -1 === u || -1 === s
                                    ? null
                                    : { start: u, end: s };
                              } else n = null;
                            }
                          n = n || { start: 0, end: 0 };
                        } else n = null;
                        for (
                          Yc = { focusedElem: e, selectionRange: n },
                            Vf = !1,
                            nu = t;
                          null !== nu;

                        )
                          if (
                            ((e = (t = nu).child),
                            0 !== (1028 & t.subtreeFlags) && null !== e)
                          )
                            (e.return = t), (nu = e);
                          else
                            for (; null !== nu; ) {
                              switch (
                                ((l = (t = nu).alternate), (e = t.flags), t.tag)
                              ) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 26:
                                case 27:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (0 !== (1024 & e) && null !== l) {
                                    (e = void 0),
                                      (n = t),
                                      (a = l.memoizedProps),
                                      (l = l.memoizedState),
                                      (r = n.stateNode);
                                    try {
                                      var m = Oo(
                                        n.type,
                                        a,
                                        (n.elementType, n.type)
                                      );
                                      (e = r.getSnapshotBeforeUpdate(m, l)),
                                        (r.__reactInternalSnapshotBeforeUpdate =
                                          e);
                                    } catch (v) {
                                      rc(n, n.return, v);
                                    }
                                  }
                                  break;
                                case 3:
                                  if (0 !== (1024 & e))
                                    if (
                                      9 ===
                                      (n = (e = t.stateNode.containerInfo)
                                        .nodeType)
                                    )
                                      of(e);
                                    else if (1 === n)
                                      switch (e.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                          of(e);
                                          break;
                                        default:
                                          e.textContent = "";
                                      }
                                  break;
                                default:
                                  if (0 !== (1024 & e)) throw Error(o(163));
                              }
                              if (null !== (e = t.sibling)) {
                                (e.return = t.return), (nu = e);
                                break;
                              }
                              nu = t.return;
                            }
                        (m = ru), (ru = !1);
                      })(e, s),
                      hu(s, e),
                      tr(Yc, e.containerInfo),
                      (Vf = !!qc),
                      (Yc = qc = null),
                      (e.current = s),
                      au(e, s.alternate, s),
                      ie(),
                      (es = i),
                      (H.p = l),
                      (L.T = n))
                    : (e.current = s),
                  xs ? ((xs = !1), (Es = e), (Cs = r)) : ec(e, c),
                  (c = e.pendingLanes),
                  0 === c && (Ss = null),
                  (function (e) {
                    if (ye && "function" === typeof ye.onCommitFiberRoot)
                      try {
                        ye.onCommitFiberRoot(
                          ve,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(s.stateNode),
                  mc(e),
                  null !== t)
                )
                  for (a = e.onRecoverableError, s = 0; s < t.length; s++)
                    (c = t[s]), a(c.value, { componentStack: c.stack });
                0 !== (3 & Cs) && tc(),
                  (c = e.pendingLanes),
                  0 !== (4194218 & r) && 0 !== (42 & c)
                    ? e === zs
                      ? Ns++
                      : ((Ns = 0), (zs = e))
                    : (Ns = 0),
                  gc(0, !1);
              })(e, t, n, r, d, a, l, i);
          } finally {
            (L.T = f), (H.p = d);
          }
        }
        function ec(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Ua(t));
        }
        function tc() {
          if (null !== Es) {
            var e = Es,
              t = _s;
            _s = 0;
            var n = Ae(Cs),
              r = L.T,
              a = H.p;
            try {
              if (((H.p = 32 > n ? 32 : n), (L.T = null), null === Es))
                var l = !1;
              else {
                (n = Ps), (Ps = null);
                var i = Es,
                  u = Cs;
                if (((Es = null), (Cs = 0), 0 !== (6 & es)))
                  throw Error(o(331));
                var s = es;
                if (
                  ((es |= 4),
                  Tu(i.current),
                  xu(i, i.current, u, n),
                  (es = s),
                  gc(0, !1),
                  ye && "function" === typeof ye.onPostCommitFiberRoot)
                )
                  try {
                    ye.onPostCommitFiberRoot(ve, i);
                  } catch (c) {}
                l = !0;
              }
              return l;
            } finally {
              (H.p = a), (L.T = r), ec(e, t);
            }
          }
          return !1;
        }
        function nc(e, t, n) {
          (t = jr(n, t)),
            null !== (e = Ri(e, (t = Io(e.stateNode, t, 2)), 2)) &&
              (Re(e, 2), mc(e));
        }
        function rc(e, t, n) {
          if (3 === e.tag) nc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                nc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ss || !Ss.has(r)))
                ) {
                  (e = jr(n, e)),
                    null !== (r = Ri(t, (n = Uo(2)), 2)) &&
                      (Ho(n, r, t, e), Re(r, 2), mc(r));
                  break;
                }
              }
              t = t.return;
            }
        }
        function ac(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new Zu();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) ||
            ((us = !0), a.add(n), (e = lc.bind(null, e, t, n)), t.then(e, e));
        }
        function lc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            ts === e &&
              (rs & n) === n &&
              (4 === cs ||
              (3 === cs && (62914560 & rs) === rs && 300 > ue() - bs)
                ? 0 === (2 & es) && Is(e, 0)
                : (ps |= n),
              ms === rs && (ms = 0)),
            mc(e);
        }
        function oc(e, t) {
          0 === t && (t = Le()), null !== (e = zr(e, t)) && (Re(e, t), mc(e));
        }
        function ic(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), oc(e, n);
        }
        function uc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            case 22:
              r = e.stateNode._retryCache;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), oc(e, n);
        }
        var sc = null,
          cc = null,
          fc = !1,
          dc = !1,
          pc = !1,
          hc = 0;
        function mc(e) {
          var t;
          e !== cc &&
            null === e.next &&
            (null === cc ? (sc = cc = e) : (cc = cc.next = e)),
            (dc = !0),
            fc ||
              ((fc = !0),
              (t = vc),
              rf(function () {
                0 !== (6 & es) ? ae(ce, t) : t();
              }));
        }
        function gc(e, t) {
          if (!pc && dc) {
            pc = !0;
            do {
              for (var n = !1, r = sc; null !== r; ) {
                if (!t)
                  if (0 !== e) {
                    var a = r.pendingLanes;
                    if (0 === a) var l = 0;
                    else {
                      var o = r.suspendedLanes,
                        i = r.pingedLanes;
                      (l = (1 << (31 - ke(42 | e) + 1)) - 1),
                        (l =
                          201326677 & (l &= a & ~(o & ~i))
                            ? (201326677 & l) | 1
                            : l
                            ? 2 | l
                            : 0);
                    }
                    0 !== l && ((n = !0), kc(r, l));
                  } else
                    (l = rs),
                      0 === (3 & (l = _e(r, r === ts ? l : 0))) ||
                        Pe(r, l) ||
                        ((n = !0), kc(r, l));
                r = r.next;
              }
            } while (n);
            pc = !1;
          }
        }
        function vc() {
          dc = fc = !1;
          var e = 0;
          0 !== hc &&
            ((function () {
              var e = window.event;
              if (e && "popstate" === e.type) return e !== Zc && ((Zc = e), !0);
              return (Zc = null), !1;
            })() && (e = hc),
            (hc = 0));
          for (var t = ue(), n = null, r = sc; null !== r; ) {
            var a = r.next,
              l = yc(r, t);
            0 === l
              ? ((r.next = null),
                null === n ? (sc = a) : (n.next = a),
                null === a && (cc = n))
              : ((n = r), (0 !== e || 0 !== (3 & l)) && (dc = !0)),
              (r = a);
          }
          gc(e, !1);
        }
        function yc(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              a = e.expirationTimes,
              l = -62914561 & e.pendingLanes;
            0 < l;

          ) {
            var o = 31 - ke(l),
              i = 1 << o,
              u = a[o];
            -1 === u
              ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = Ne(i, t))
              : u <= t && (e.expiredLanes |= i),
              (l &= ~i);
          }
          if (
            ((n = rs),
            (n = _e(e, e === (t = ts) ? n : 0)),
            (r = e.callbackNode),
            0 === n || (e === t && 2 === as) || null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && le(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (0 === (3 & n) || Pe(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && le(r), Ae(n))) {
              case 2:
              case 8:
                n = fe;
                break;
              case 32:
              default:
                n = de;
                break;
              case 268435456:
                n = he;
            }
            return (
              (r = bc.bind(null, e)),
              (n = ae(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && le(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function bc(e, t) {
          var n = e.callbackNode;
          if (tc() && e.callbackNode !== n) return null;
          var r = rs;
          return 0 === (r = _e(e, e === ts ? r : 0))
            ? null
            : (Os(e, r, t),
              yc(e, ue()),
              null != e.callbackNode && e.callbackNode === n
                ? bc.bind(null, e)
                : null);
        }
        function kc(e, t) {
          if (tc()) return null;
          Os(e, t, !0);
        }
        function wc() {
          return 0 === hc && (hc = ze()), hc;
        }
        function Sc(e) {
          return null == e || "symbol" === typeof e || "boolean" === typeof e
            ? null
            : "function" === typeof e
            ? e
            : zt("" + e);
        }
        function xc(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var Ec = 0; Ec < wr.length; Ec++) {
          var Cc = wr[Ec];
          Sr(Cc.toLowerCase(), "on" + (Cc[0].toUpperCase() + Cc.slice(1)));
        }
        Sr(pr, "onAnimationEnd"),
          Sr(hr, "onAnimationIteration"),
          Sr(mr, "onAnimationStart"),
          Sr("dblclick", "onDoubleClick"),
          Sr("focusin", "onFocus"),
          Sr("focusout", "onBlur"),
          Sr(gr, "onTransitionRun"),
          Sr(vr, "onTransitionStart"),
          Sr(yr, "onTransitionCancel"),
          Sr(br, "onTransitionEnd"),
          tt("onMouseEnter", ["mouseout", "mouseover"]),
          tt("onMouseLeave", ["mouseout", "mouseover"]),
          tt("onPointerEnter", ["pointerout", "pointerover"]),
          tt("onPointerLeave", ["pointerout", "pointerover"]),
          et(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          et(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          et("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          et(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          et(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          et(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var _c =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Pc = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(_c)
          );
        function Nc(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== l && a.isPropagationStopped()))
                    break e;
                  (l = i), (a.currentTarget = s);
                  try {
                    l(a);
                  } catch (c) {
                    jo(c);
                  }
                  (a.currentTarget = null), (l = u);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e;
                  (l = i), (a.currentTarget = s);
                  try {
                    l(a);
                  } catch (c) {
                    jo(c);
                  }
                  (a.currentTarget = null), (l = u);
                }
            }
          }
        }
        function zc(e, t) {
          var n = t[Ue];
          void 0 === n && (n = t[Ue] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Oc(t, e, 2, !1), n.add(r));
        }
        function Lc(e, t, n) {
          var r = 0;
          t && (r |= 4), Oc(n, e, r, t);
        }
        var Tc = "_reactListening" + Math.random().toString(36).slice(2);
        function Rc(e) {
          if (!e[Tc]) {
            (e[Tc] = !0),
              Je.forEach(function (t) {
                "selectionchange" !== t &&
                  (Pc.has(t) || Lc(t, !1, e), Lc(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Tc] || ((t[Tc] = !0), Lc("selectionchange", !1, t));
          }
        }
        function Oc(e, t, n, r) {
          switch (Jf(t)) {
            case 2:
              var a = Qf;
              break;
            case 8:
              a = qf;
              break;
            default:
              a = Yf;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Mt ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function jc(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== i; ) {
                  if (null === (o = qe(i))) return;
                  if (5 === (u = o.tag) || 6 === u || 26 === u || 27 === u) {
                    r = l = o;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          Dt(function () {
            var r = l,
              a = Tt(n),
              o = [];
            e: {
              var i = kr.get(e);
              if (void 0 !== i) {
                var u = Jt,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === Wt(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = hn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = an);
                    break;
                  case "focusout":
                    (s = "blur"), (u = an);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = an;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = nn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = rn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = gn;
                    break;
                  case pr:
                  case hr:
                  case mr:
                    u = ln;
                    break;
                  case br:
                    u = vn;
                    break;
                  case "scroll":
                  case "scrollend":
                    u = en;
                    break;
                  case "wheel":
                    u = yn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = on;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = mn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    u = bn;
                }
                var c = 0 !== (4 & t),
                  f = !c && ("scroll" === e || "scrollend" === e),
                  d = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = h;
                  if (
                    ((p = m.stateNode),
                    (5 !== (m = m.tag) && 26 !== m && 27 !== m) ||
                      null === p ||
                      null === d ||
                      (null != (m = Ft(h, d)) && c.push(Ac(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  o.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === Lt ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!qe(s) && !s[Ie])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? qe(s)
                          : null) &&
                        ((f = F(s)),
                        (c = s.tag),
                        s !== f || (5 !== c && 27 !== c && 6 !== c)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = nn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = mn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? i : Ke(u)),
                  (p = null == s ? i : Ke(s)),
                  ((i = new c(m, h + "leave", u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (m = null),
                  qe(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = Fc(p)) h++;
                    for (p = 0, m = d; m; m = Fc(m)) p++;
                    for (; 0 < h - p; ) (c = Fc(c)), h--;
                    for (; 0 < p - h; ) (d = Fc(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Fc(c)), (d = Fc(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Mc(o, i, u, c, !1),
                  null !== s && null !== f && Mc(o, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? Ke(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var g = Fn;
              else if (Tn(i))
                if (Mn) g = qn;
                else {
                  g = Vn;
                  var v = Wn;
                }
              else
                !(u = i.nodeName) ||
                "input" !== u.toLowerCase() ||
                ("checkbox" !== i.type && "radio" !== i.type)
                  ? r && _t(r.elementType) && (g = Fn)
                  : (g = Qn);
              switch (
                (g && (g = g(e, r))
                  ? Rn(o, g, n, a)
                  : (v && v(e, i, r),
                    "focusout" === e &&
                      r &&
                      "number" === i.type &&
                      null != r.memoizedProps.value &&
                      yt(i, "number", i.value)),
                (v = r ? Ke(r) : window),
                e)
              ) {
                case "focusin":
                  (Tn(v) || "true" === v.contentEditable) &&
                    ((rr = v), (ar = r), (lr = null));
                  break;
                case "focusout":
                  lr = ar = rr = null;
                  break;
                case "mousedown":
                  or = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (or = !1), ir(o, n, a);
                  break;
                case "selectionchange":
                  if (nr) break;
                case "keydown":
                case "keyup":
                  ir(o, n, a);
              }
              var y;
              if (wn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                zn
                  ? Pn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (En &&
                  "ko" !== n.locale &&
                  (zn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && zn && (y = Bt())
                    : ((Ut = "value" in (It = a) ? It.value : It.textContent),
                      (zn = !0))),
                0 < (v = Dc(r, b)).length &&
                  ((b = new un(b, e, null, n, a)),
                  o.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Nn(n)) && (b.data = y))),
                (y = xn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Nn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((_n = !0), Cn);
                        case "textInput":
                          return (e = t.data) === Cn && _n ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (zn)
                        return "compositionend" === e || (!wn && Pn(e, t))
                          ? ((e = Bt()), (Ht = Ut = It = null), (zn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return En && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (b = Dc(r, "onBeforeInput")).length &&
                  ((v = new un("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: v, listeners: b }),
                  (v.data = y)),
                (function (e, t, n, r, a) {
                  if ("submit" === t && n && n.stateNode === a) {
                    var l = Sc((a[$e] || null).action),
                      o = r.submitter;
                    o &&
                      null !==
                        (t = (t = o[$e] || null)
                          ? Sc(t.formAction)
                          : o.getAttribute("formAction")) &&
                      ((l = t), (o = null));
                    var i = new Jt("action", "action", null, r, a);
                    e.push({
                      event: i,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== hc) {
                                var e = o ? xc(a, o) : new FormData(a);
                                co(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: l,
                                  },
                                  null,
                                  e
                                );
                              }
                            } else
                              "function" === typeof l &&
                                (i.preventDefault(),
                                (e = o ? xc(a, o) : new FormData(a)),
                                co(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: a.method,
                                    action: l,
                                  },
                                  l,
                                  e
                                ));
                          },
                          currentTarget: a,
                        },
                      ],
                    });
                  }
                })(o, e, r, n, a);
            }
            Nc(o, t);
          });
        }
        function Ac(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Dc(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            (5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
              null === l ||
              (null != (a = Ft(e, n)) && r.unshift(Ac(e, a, l)),
              null != (a = Ft(e, t)) && r.push(Ac(e, a, l))),
              (e = e.return);
          }
          return r;
        }
        function Fc(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function Mc(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (((i = i.tag), null !== u && u === r)) break;
            (5 !== i && 26 !== i && 27 !== i) ||
              null === s ||
              ((u = s),
              a
                ? null != (s = Ft(n, l)) && o.unshift(Ac(n, s, u))
                : a || (null != (s = Ft(n, l)) && o.push(Ac(n, s, u)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var $c = /\r\n?/g,
          Ic = /\u0000|\uFFFD/g;
        function Uc(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace($c, "\n")
            .replace(Ic, "");
        }
        function Hc(e, t) {
          return (t = Uc(t)), Uc(e) === t;
        }
        function Bc() {}
        function Wc(e, t, n, r, a, l) {
          switch (n) {
            case "children":
              "string" === typeof r
                ? "body" === t || ("textarea" === t && "" === r) || St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  "body" !== t &&
                  St(e, "" + r);
              break;
            case "className":
              it(e, "class", r);
              break;
            case "tabIndex":
              it(e, "tabindex", r);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              it(e, n, r);
              break;
            case "style":
              Ct(e, r, l);
              break;
            case "data":
              if ("object" !== t) {
                it(e, "data", r);
                break;
              }
            case "src":
            case "href":
              if ("" === r && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == r ||
                "function" === typeof r ||
                "symbol" === typeof r ||
                "boolean" === typeof r
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = zt("" + r)), e.setAttribute(n, r);
              break;
            case "action":
            case "formAction":
              if ("function" === typeof r) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                );
                break;
              }
              if (
                ("function" === typeof l &&
                  ("formAction" === n
                    ? ("input" !== t && Wc(e, t, "name", a.name, a, null),
                      Wc(e, t, "formEncType", a.formEncType, a, null),
                      Wc(e, t, "formMethod", a.formMethod, a, null),
                      Wc(e, t, "formTarget", a.formTarget, a, null))
                    : (Wc(e, t, "encType", a.encType, a, null),
                      Wc(e, t, "method", a.method, a, null),
                      Wc(e, t, "target", a.target, a, null))),
                null == r || "symbol" === typeof r || "boolean" === typeof r)
              ) {
                e.removeAttribute(n);
                break;
              }
              (r = zt("" + r)), e.setAttribute(n, r);
              break;
            case "onClick":
              null != r && (e.onclick = Bc);
              break;
            case "onScroll":
              null != r && zc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && zc("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple =
                r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "muted":
              e.muted = r && "function" !== typeof r && "symbol" !== typeof r;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == r ||
                "function" === typeof r ||
                "boolean" === typeof r ||
                "symbol" === typeof r
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              (n = zt("" + r)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n
                );
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "" + r)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              r && "function" !== typeof r && "symbol" !== typeof r
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === r
                ? e.setAttribute(n, "")
                : !1 !== r &&
                  null != r &&
                  "function" !== typeof r &&
                  "symbol" !== typeof r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != r &&
              "function" !== typeof r &&
              "symbol" !== typeof r &&
              !isNaN(r) &&
              1 <= r
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == r ||
              "function" === typeof r ||
              "symbol" === typeof r ||
              isNaN(r)
                ? e.removeAttribute(n)
                : e.setAttribute(n, r);
              break;
            case "popover":
              zc("beforetoggle", e), zc("toggle", e), ot(e, "popover", r);
              break;
            case "xlinkActuate":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
              break;
            case "xlinkArcrole":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
              break;
            case "xlinkRole":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
              break;
            case "xlinkShow":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
              break;
            case "xlinkTitle":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
              break;
            case "xlinkType":
              ut(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
              break;
            case "xmlBase":
              ut(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
              break;
            case "xmlLang":
              ut(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
              break;
            case "xmlSpace":
              ut(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
              break;
            case "is":
              ot(e, "is", r);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                ot(e, (n = Pt.get(n) || n), r);
          }
        }
        function Vc(e, t, n, r, a, l) {
          switch (n) {
            case "style":
              Ct(e, r, l);
              break;
            case "dangerouslySetInnerHTML":
              if (null != r) {
                if ("object" !== typeof r || !("__html" in r))
                  throw Error(o(61));
                if (null != (n = r.__html)) {
                  if (null != a.children) throw Error(o(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" === typeof r
                ? St(e, r)
                : ("number" === typeof r || "bigint" === typeof r) &&
                  St(e, "" + r);
              break;
            case "onScroll":
              null != r && zc("scroll", e);
              break;
            case "onScrollEnd":
              null != r && zc("scrollend", e);
              break;
            case "onClick":
              null != r && (e.onclick = Bc);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              Ze.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((a = n.endsWith("Capture")),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                "function" ===
                  typeof (l = null != (l = e[$e] || null) ? l[n] : null) &&
                  e.removeEventListener(t, l, a),
                "function" !== typeof r)
                  ? n in e
                    ? (e[n] = r)
                    : !0 === r
                    ? e.setAttribute(n, "")
                    : ot(e, n, r)
                  : ("function" !== typeof l &&
                      null !== l &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, r, a)));
          }
        }
        function Qc(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              zc("error", e), zc("load", e);
              var r,
                a = !1,
                l = !1;
              for (r in n)
                if (n.hasOwnProperty(r)) {
                  var i = n[r];
                  if (null != i)
                    switch (r) {
                      case "src":
                        a = !0;
                        break;
                      case "srcSet":
                        l = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                      default:
                        Wc(e, t, r, i, n, null);
                    }
                }
              return (
                l && Wc(e, t, "srcSet", n.srcSet, n, null),
                void (a && Wc(e, t, "src", n.src, n, null))
              );
            case "input":
              zc("invalid", e);
              var u = (r = i = l = null),
                s = null,
                c = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var f = n[a];
                  if (null != f)
                    switch (a) {
                      case "name":
                        l = f;
                        break;
                      case "type":
                        i = f;
                        break;
                      case "checked":
                        s = f;
                        break;
                      case "defaultChecked":
                        c = f;
                        break;
                      case "value":
                        r = f;
                        break;
                      case "defaultValue":
                        u = f;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != f) throw Error(o(137, t));
                        break;
                      default:
                        Wc(e, t, a, f, n, null);
                    }
                }
              return vt(e, r, u, s, c, i, l, !1), void ft(e);
            case "select":
              for (l in (zc("invalid", e), (a = i = r = null), n))
                if (n.hasOwnProperty(l) && null != (u = n[l]))
                  switch (l) {
                    case "value":
                      r = u;
                      break;
                    case "defaultValue":
                      i = u;
                      break;
                    case "multiple":
                      a = u;
                    default:
                      Wc(e, t, l, u, n, null);
                  }
              return (
                (t = r),
                (n = i),
                (e.multiple = !!a),
                void (null != t
                  ? bt(e, !!a, t, !1)
                  : null != n && bt(e, !!a, n, !0))
              );
            case "textarea":
              for (i in (zc("invalid", e), (r = l = a = null), n))
                if (n.hasOwnProperty(i) && null != (u = n[i]))
                  switch (i) {
                    case "value":
                      a = u;
                      break;
                    case "defaultValue":
                      l = u;
                      break;
                    case "children":
                      r = u;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != u) throw Error(o(91));
                      break;
                    default:
                      Wc(e, t, i, u, n, null);
                  }
              return wt(e, a, l, r), void ft(e);
            case "option":
              for (s in n)
                if (n.hasOwnProperty(s) && null != (a = n[s]))
                  if ("selected" === s)
                    e.selected =
                      a && "function" !== typeof a && "symbol" !== typeof a;
                  else Wc(e, t, s, a, n, null);
              return;
            case "dialog":
              zc("cancel", e), zc("close", e);
              break;
            case "iframe":
            case "object":
              zc("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < _c.length; a++) zc(_c[a], e);
              break;
            case "image":
              zc("error", e), zc("load", e);
              break;
            case "details":
              zc("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              zc("error", e), zc("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (c in n)
                if (n.hasOwnProperty(c) && null != (a = n[c]))
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(o(137, t));
                    default:
                      Wc(e, t, c, a, n, null);
                  }
              return;
            default:
              if (_t(t)) {
                for (f in n)
                  n.hasOwnProperty(f) &&
                    void 0 !== (a = n[f]) &&
                    Vc(e, t, f, a, n, void 0);
                return;
              }
          }
          for (u in n)
            n.hasOwnProperty(u) &&
              null != (a = n[u]) &&
              Wc(e, t, u, a, n, null);
        }
        var qc = null,
          Yc = null;
        function Kc(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function Gc(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function Xc(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function Jc(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            "bigint" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Zc = null;
        var ef = "function" === typeof setTimeout ? setTimeout : void 0,
          tf = "function" === typeof clearTimeout ? clearTimeout : void 0,
          nf = "function" === typeof Promise ? Promise : void 0,
          rf =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof nf
              ? function (e) {
                  return nf.resolve(null).then(e).catch(af);
                }
              : ef;
        function af(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function lf(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void gd(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          gd(t);
        }
        function of(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                of(n), Qe(n);
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function uf(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function sf(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function cf(e, t, n) {
          switch (((t = Kc(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(o(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(o(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(o(454));
              return e;
            default:
              throw Error(o(451));
          }
        }
        var ff = new Map(),
          df = new Set();
        function pf(e) {
          return "function" === typeof e.getRootNode
            ? e.getRootNode()
            : e.ownerDocument;
        }
        var hf = H.d;
        H.d = {
          f: function () {
            var e = hf.f(),
              t = Ms();
            return e || t;
          },
          r: function (e) {
            var t = Ye(e);
            null !== t && 5 === t.tag && "form" === t.type ? po(t) : hf.r(e);
          },
          D: function (e) {
            hf.D(e), gf("dns-prefetch", e, null);
          },
          C: function (e, t) {
            hf.C(e, t), gf("preconnect", e, t);
          },
          L: function (e, t, n) {
            hf.L(e, t, n);
            var r = mf;
            if (r && e && t) {
              var a = 'link[rel="preload"][as="' + mt(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((a += '[imagesrcset="' + mt(n.imageSrcSet) + '"]'),
                  "string" === typeof n.imageSizes &&
                    (a += '[imagesizes="' + mt(n.imageSizes) + '"]'))
                : (a += '[href="' + mt(e) + '"]');
              var l = a;
              switch (t) {
                case "style":
                  l = yf(e);
                  break;
                case "script":
                  l = wf(e);
              }
              ff.has(l) ||
                ((e = T(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n
                )),
                ff.set(l, e),
                null !== r.querySelector(a) ||
                  ("style" === t && r.querySelector(bf(l))) ||
                  ("script" === t && r.querySelector(Sf(l))) ||
                  (Qc((t = r.createElement("link")), "link", e),
                  Xe(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            hf.m(e, t);
            var n = mf;
            if (n && e) {
              var r = t && "string" === typeof t.as ? t.as : "script",
                a =
                  'link[rel="modulepreload"][as="' +
                  mt(r) +
                  '"][href="' +
                  mt(e) +
                  '"]',
                l = a;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  l = wf(e);
              }
              if (
                !ff.has(l) &&
                ((e = T({ rel: "modulepreload", href: e }, t)),
                ff.set(l, e),
                null === n.querySelector(a))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(Sf(l))) return;
                }
                Qc((r = n.createElement("link")), "link", e),
                  Xe(r),
                  n.head.appendChild(r);
              }
            }
          },
          X: function (e, t) {
            hf.X(e, t);
            var n = mf;
            if (n && e) {
              var r = Ge(n).hoistableScripts,
                a = wf(e),
                l = r.get(a);
              l ||
                ((l = n.querySelector(Sf(a))) ||
                  ((e = T({ src: e, async: !0 }, t)),
                  (t = ff.get(a)) && _f(e, t),
                  Xe((l = n.createElement("script"))),
                  Qc(l, "link", e),
                  n.head.appendChild(l)),
                (l = { type: "script", instance: l, count: 1, state: null }),
                r.set(a, l));
            }
          },
          S: function (e, t, n) {
            hf.S(e, t, n);
            var r = mf;
            if (r && e) {
              var a = Ge(r).hoistableStyles,
                l = yf(e);
              t = t || "default";
              var o = a.get(l);
              if (!o) {
                var i = { loading: 0, preload: null };
                if ((o = r.querySelector(bf(l)))) i.loading = 5;
                else {
                  (e = T(
                    { rel: "stylesheet", href: e, "data-precedence": t },
                    n
                  )),
                    (n = ff.get(l)) && Cf(e, n);
                  var u = (o = r.createElement("link"));
                  Xe(u),
                    Qc(u, "link", e),
                    (u._p = new Promise(function (e, t) {
                      (u.onload = e), (u.onerror = t);
                    })),
                    u.addEventListener("load", function () {
                      i.loading |= 1;
                    }),
                    u.addEventListener("error", function () {
                      i.loading |= 2;
                    }),
                    (i.loading |= 4),
                    Ef(o, t, r);
                }
                (o = { type: "stylesheet", instance: o, count: 1, state: i }),
                  a.set(l, o);
              }
            }
          },
          M: function (e, t) {
            hf.M(e, t);
            var n = mf;
            if (n && e) {
              var r = Ge(n).hoistableScripts,
                a = wf(e),
                l = r.get(a);
              l ||
                ((l = n.querySelector(Sf(a))) ||
                  ((e = T({ src: e, async: !0, type: "module" }, t)),
                  (t = ff.get(a)) && _f(e, t),
                  Xe((l = n.createElement("script"))),
                  Qc(l, "link", e),
                  n.head.appendChild(l)),
                (l = { type: "script", instance: l, count: 1, state: null }),
                r.set(a, l));
            }
          },
        };
        var mf = "undefined" === typeof document ? null : document;
        function gf(e, t, n) {
          var r = mf;
          if (r && "string" === typeof t && t) {
            var a = mt(t);
            (a = 'link[rel="' + e + '"][href="' + a + '"]'),
              "string" === typeof n && (a += '[crossorigin="' + n + '"]'),
              df.has(a) ||
                (df.add(a),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(a) &&
                  (Qc((t = r.createElement("link")), "link", e),
                  Xe(t),
                  r.head.appendChild(t)));
          }
        }
        function vf(e, t, n, r) {
          var a,
            l,
            i,
            u,
            s = (s = X.current) ? pf(s) : null;
          if (!s) throw Error(o(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" === typeof n.precedence &&
                "string" === typeof n.href
                ? ((t = yf(n.href)),
                  (r = (n = Ge(s).hoistableStyles).get(t)) ||
                    ((r = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, r)),
                  r)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" === typeof n.href &&
                "string" === typeof n.precedence
              ) {
                e = yf(n.href);
                var c = Ge(s).hoistableStyles,
                  f = c.get(e);
                if (
                  (f ||
                    ((s = s.ownerDocument || s),
                    (f = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    c.set(e, f),
                    (c = s.querySelector(bf(e))) &&
                      !c._p &&
                      ((f.instance = c), (f.state.loading = 5)),
                    ff.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      ff.set(e, n),
                      c ||
                        ((a = s),
                        (l = e),
                        (i = n),
                        (u = f.state),
                        a.querySelector(
                          'link[rel="preload"][as="style"][' + l + "]"
                        )
                          ? (u.loading = 1)
                          : ((l = a.createElement("link")),
                            (u.preload = l),
                            l.addEventListener("load", function () {
                              return (u.loading |= 1);
                            }),
                            l.addEventListener("error", function () {
                              return (u.loading |= 2);
                            }),
                            Qc(l, "link", i),
                            Xe(l),
                            a.head.appendChild(l))))),
                  t && null === r)
                )
                  throw Error(o(528, ""));
                return f;
              }
              if (t && null !== r) throw Error(o(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" === typeof (n = n.src) &&
                t &&
                "function" !== typeof t &&
                "symbol" !== typeof t
                  ? ((t = wf(n)),
                    (r = (n = Ge(s).hoistableScripts).get(t)) ||
                      ((r = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, r)),
                    r)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(o(444, e));
          }
        }
        function yf(e) {
          return 'href="' + mt(e) + '"';
        }
        function bf(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function kf(e) {
          return T({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function wf(e) {
          return '[src="' + mt(e) + '"]';
        }
        function Sf(e) {
          return "script[async]" + e;
        }
        function xf(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var r = e.querySelector(
                  'style[data-href~="' + mt(n.href) + '"]'
                );
                if (r) return (t.instance = r), Xe(r), r;
                var a = T({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  Xe((r = (e.ownerDocument || e).createElement("style"))),
                  Qc(r, "style", a),
                  Ef(r, n.precedence, e),
                  (t.instance = r)
                );
              case "stylesheet":
                a = yf(n.href);
                var l = e.querySelector(bf(a));
                if (l)
                  return (t.state.loading |= 4), (t.instance = l), Xe(l), l;
                (r = kf(n)),
                  (a = ff.get(a)) && Cf(r, a),
                  Xe((l = (e.ownerDocument || e).createElement("link")));
                var i = l;
                return (
                  (i._p = new Promise(function (e, t) {
                    (i.onload = e), (i.onerror = t);
                  })),
                  Qc(l, "link", r),
                  (t.state.loading |= 4),
                  Ef(l, n.precedence, e),
                  (t.instance = l)
                );
              case "script":
                return (
                  (l = wf(n.src)),
                  (a = e.querySelector(Sf(l)))
                    ? ((t.instance = a), Xe(a), a)
                    : ((r = n),
                      (a = ff.get(l)) && _f((r = T({}, n)), a),
                      Xe(
                        (a = (e = e.ownerDocument || e).createElement("script"))
                      ),
                      Qc(a, "link", r),
                      e.head.appendChild(a),
                      (t.instance = a))
                );
              case "void":
                return null;
              default:
                throw Error(o(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              0 === (4 & t.state.loading) &&
              ((r = t.instance),
              (t.state.loading |= 4),
              Ef(r, n.precedence, e));
          return t.instance;
        }
        function Ef(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]'
              ),
              a = r.length ? r[r.length - 1] : null,
              l = a,
              o = 0;
            o < r.length;
            o++
          ) {
            var i = r[o];
            if (i.dataset.precedence === t) l = i;
            else if (l !== a) break;
          }
          l
            ? l.parentNode.insertBefore(e, l.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function Cf(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title);
        }
        function _f(e, t) {
          null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity);
        }
        var Pf = null;
        function Nf(e, t, n) {
          if (null === Pf) {
            var r = new Map(),
              a = (Pf = new Map());
            a.set(n, r);
          } else (r = (a = Pf).get(n)) || ((r = new Map()), a.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), a = 0;
            a < n.length;
            a++
          ) {
            var l = n[a];
            if (
              !(
                l[Ve] ||
                l[Me] ||
                ("link" === e && "stylesheet" === l.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== l.namespaceURI
            ) {
              var o = l.getAttribute(t) || "";
              o = e + o;
              var i = r.get(o);
              i ? i.push(l) : r.set(o, [l]);
            }
          }
          return r;
        }
        function zf(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null
          );
        }
        function Lf(e) {
          return "stylesheet" !== e.type || 0 !== (3 & e.state.loading);
        }
        var Tf = null;
        function Rf() {}
        function Of() {
          if ((this.count--, 0 === this.count))
            if (this.stylesheets) Af(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              (this.unsuspend = null), e();
            }
        }
        var jf = null;
        function Af(e, t) {
          (e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (jf = new Map()),
              t.forEach(Df, e),
              (jf = null),
              Of.call(e));
        }
        function Df(e, t) {
          if (!(4 & t.state.loading)) {
            var n = jf.get(e);
            if (n) var r = n.get(null);
            else {
              (n = new Map()), jf.set(e, n);
              for (
                var a = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]"
                  ),
                  l = 0;
                l < a.length;
                l++
              ) {
                var o = a[l];
                ("LINK" !== o.nodeName &&
                  "not all" === o.getAttribute("media")) ||
                  (n.set(o.dataset.precedence, o), (r = o));
              }
              r && n.set(null, r);
            }
            (o = (a = t.instance).getAttribute("data-precedence")),
              (l = n.get(o) || r) === r && n.set(null, a),
              n.set(o, a),
              this.count++,
              (r = Of.bind(this)),
              a.addEventListener("load", r),
              a.addEventListener("error", r),
              l
                ? l.parentNode.insertBefore(a, l.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    a,
                    e.firstChild
                  ),
              (t.state.loading |= 4);
          }
        }
        var Ff = {
          $$typeof: g,
          Provider: null,
          Consumer: null,
          _currentValue: B,
          _currentValue2: B,
          _threadCount: 0,
        };
        function Mf(e, t, n, r, a, l, o, i) {
          (this.tag = 1),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Te(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.finishedLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Te(0)),
            (this.hiddenUpdates = Te(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = a),
            (this.onCaughtError = l),
            (this.onRecoverableError = o),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = i),
            (this.incompleteTransitions = new Map());
        }
        function $f(e, t, n, r, a, l, o, i, u, s, c, f) {
          return (
            (e = new Mf(e, t, n, o, i, u, s, f)),
            (t = 1),
            !0 === l && (t |= 24),
            (l = Au(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (t = Ia()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (l.memoizedState = { element: r, isDehydrated: n, cache: t }),
            zi(l),
            e
          );
        }
        function If(e) {
          return e ? (e = Rr) : Rr;
        }
        function Uf(e, t, n, r, a, l) {
          (a = If(a)),
            null === r.context ? (r.context = a) : (r.pendingContext = a),
            ((r = Ti(t)).payload = { element: n }),
            null !== (l = void 0 === l ? null : l) && (r.callback = l),
            null !== (n = Ri(e, r, t)) && (Rs(n, 0, t), Oi(n, e, t));
        }
        function Hf(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Bf(e, t) {
          Hf(e, t), (e = e.alternate) && Hf(e, t);
        }
        function Wf(e) {
          if (13 === e.tag) {
            var t = zr(e, 67108864);
            null !== t && Rs(t, 0, 67108864), Bf(e, 67108864);
          }
        }
        var Vf = !0;
        function Qf(e, t, n, r) {
          var a = L.T;
          L.T = null;
          var l = H.p;
          try {
            (H.p = 2), Yf(e, t, n, r);
          } finally {
            (H.p = l), (L.T = a);
          }
        }
        function qf(e, t, n, r) {
          var a = L.T;
          L.T = null;
          var l = H.p;
          try {
            (H.p = 8), Yf(e, t, n, r);
          } finally {
            (H.p = l), (L.T = a);
          }
        }
        function Yf(e, t, n, r) {
          if (Vf) {
            var a = Kf(r);
            if (null === a) jc(e, t, r, Gf, n), id(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (ed = ud(ed, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (td = ud(td, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (nd = ud(nd, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return rd.set(l, ud(rd.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      ad.set(l, ud(ad.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((id(e, r), 4 & t && -1 < od.indexOf(e))) {
              for (; null !== a; ) {
                var l = Ye(a);
                if (null !== l)
                  switch (l.tag) {
                    case 3:
                      if (
                        (l = l.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var o = Ce(l.pendingLanes);
                        if (0 !== o) {
                          var i = l;
                          for (
                            i.pendingLanes |= 2, i.entangledLanes |= 2;
                            o;

                          ) {
                            var u = 1 << (31 - ke(o));
                            (i.entanglements[1] |= u), (o &= ~u);
                          }
                          mc(l),
                            0 === (6 & es) && ((ks = ue() + 500), gc(0, !1));
                        }
                      }
                      break;
                    case 13:
                      null !== (i = zr(l, 2)) && Rs(i, 0, 2), Ms(), Bf(l, 2);
                  }
                if ((null === (l = Kf(r)) && jc(e, t, r, Gf, n), l === a))
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else jc(e, t, r, null, n);
          }
        }
        function Kf(e) {
          return Xf((e = Tt(e)));
        }
        var Gf = null;
        function Xf(e) {
          if (((Gf = null), null !== (e = qe(e)))) {
            var t = F(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = M(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return (Gf = e), null;
        }
        function Jf(e) {
          switch (e) {
            case "beforetoggle":
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
            case "toggle":
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
              return 2;
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
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (se()) {
                case ce:
                  return 2;
                case fe:
                  return 8;
                case de:
                case pe:
                  return 32;
                case he:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Zf = !1,
          ed = null,
          td = null,
          nd = null,
          rd = new Map(),
          ad = new Map(),
          ld = [],
          od =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " "
            );
        function id(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              ed = null;
              break;
            case "dragenter":
            case "dragleave":
              td = null;
              break;
            case "mouseover":
            case "mouseout":
              nd = null;
              break;
            case "pointerover":
            case "pointerout":
              rd.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ad.delete(t.pointerId);
          }
        }
        function ud(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = Ye(t)) && Wf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function sd(e) {
          var t = qe(e.target);
          if (null !== t) {
            var n = F(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = M(n)))
                  return (
                    (e.blockedOn = t),
                    void (function (e, t) {
                      var n = H.p;
                      try {
                        return (H.p = e), t();
                      } finally {
                        H.p = n;
                      }
                    })(e.priority, function () {
                      if (13 === n.tag) {
                        var e = Ls(),
                          t = zr(n, e);
                        null !== t && Rs(t, 0, e), Bf(n, e);
                      }
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function cd(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kf(e.nativeEvent);
            if (null !== n)
              return null !== (t = Ye(n)) && Wf(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (Lt = r), n.target.dispatchEvent(r), (Lt = null), t.shift();
          }
          return !0;
        }
        function fd(e, t, n) {
          cd(e) && n.delete(t);
        }
        function dd() {
          (Zf = !1),
            null !== ed && cd(ed) && (ed = null),
            null !== td && cd(td) && (td = null),
            null !== nd && cd(nd) && (nd = null),
            rd.forEach(fd),
            ad.forEach(fd);
        }
        function pd(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Zf ||
              ((Zf = !0),
              r.unstable_scheduleCallback(r.unstable_NormalPriority, dd)));
        }
        var hd = null;
        function md(e) {
          hd !== e &&
            ((hd = e),
            r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
              hd === e && (hd = null);
              for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                  r = e[t + 1],
                  a = e[t + 2];
                if ("function" !== typeof r) {
                  if (null === Xf(r || n)) continue;
                  break;
                }
                var l = Ye(n);
                null !== l &&
                  (e.splice(t, 3),
                  (t -= 3),
                  co(
                    l,
                    { pending: !0, data: a, method: n.method, action: r },
                    r,
                    a
                  ));
              }
            }));
        }
        function gd(e) {
          function t(t) {
            return pd(t, e);
          }
          null !== ed && pd(ed, e),
            null !== td && pd(td, e),
            null !== nd && pd(nd, e),
            rd.forEach(t),
            ad.forEach(t);
          for (var n = 0; n < ld.length; n++) {
            var r = ld[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < ld.length && null === (n = ld[0]).blockedOn; )
            sd(n), null === n.blockedOn && ld.shift();
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var a = n[r],
                l = n[r + 1],
                o = a[$e] || null;
              if ("function" === typeof l) o || md(n);
              else if (o) {
                var i = null;
                if (l && l.hasAttribute("formAction")) {
                  if (((a = l), (o = l[$e] || null))) i = o.formAction;
                  else if (null !== Xf(a)) continue;
                } else i = o.action;
                "function" === typeof i
                  ? (n[r + 1] = i)
                  : (n.splice(r, 3), (r -= 3)),
                  md(n);
              }
            }
        }
        function vd(e) {
          this._internalRoot = e;
        }
        function yd(e) {
          this._internalRoot = e;
        }
        (yd.prototype.render = vd.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Uf(t.current, Ls(), e, t, null, null);
          }),
          (yd.prototype.unmount = vd.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                0 === e.tag && tc(),
                  Uf(e.current, 2, null, e, null, null),
                  Ms(),
                  (t[Ie] = null);
              }
            }),
          (yd.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = De();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < ld.length && 0 !== t && t < ld[n].priority;
                n++
              );
              ld.splice(n, 0, e), 0 === n && sd(e);
            }
          });
        var bd = a.version;
        if ("19.0.0" !== bd) throw Error(o(527, bd, "19.0.0"));
        H.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" === typeof e.render) throw Error(o(188));
            throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
          }
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = F(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return $(a), e;
                    if (l === r) return $(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            (e = null === (e = null !== e ? I(e) : null) ? null : e.stateNode)
          );
        };
        var kd = {
          bundleType: 0,
          version: "19.0.0",
          rendererPackageName: "react-dom",
          currentDispatcherRef: L,
          findFiberByHostInstance: qe,
          reconcilerVersion: "19.0.0",
        };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var wd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!wd.isDisabled && wd.supportsFiber)
            try {
              (ve = wd.inject(kd)), (ye = wd);
            } catch (xd) {}
        }
        (t.createRoot = function (e, t) {
          if (!i(e)) throw Error(o(299));
          var n = !1,
            r = "",
            a = Ao,
            l = Do,
            u = Fo;
          return (
            null !== t &&
              void 0 !== t &&
              (!0 === t.unstable_strictMode && (n = !0),
              void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
              void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
              void 0 !== t.onCaughtError && (l = t.onCaughtError),
              void 0 !== t.onRecoverableError && (u = t.onRecoverableError),
              void 0 !== t.unstable_transitionCallbacks &&
                t.unstable_transitionCallbacks),
            (t = $f(e, 1, !1, null, 0, n, r, a, l, u, 0, null)),
            (e[Ie] = t.current),
            Rc(8 === e.nodeType ? e.parentNode : e),
            new vd(t)
          );
        }),
          (t.hydrateRoot = function (e, t, n) {
            if (!i(e)) throw Error(o(299));
            var r = !1,
              a = "",
              l = Ao,
              u = Do,
              s = Fo,
              c = null;
            return (
              null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (r = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (l = n.onUncaughtError),
                void 0 !== n.onCaughtError && (u = n.onCaughtError),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError),
                void 0 !== n.unstable_transitionCallbacks &&
                  n.unstable_transitionCallbacks,
                void 0 !== n.formState && (c = n.formState)),
              ((t = $f(e, 1, !0, t, 0, r, a, l, u, s, 0, c)).context =
                If(null)),
              (n = t.current),
              ((a = Ti((r = Ls()))).callback = null),
              Ri(n, a, r),
              (t.current.lanes = r),
              Re(t, r),
              mc(t),
              (e[Ie] = t.current),
              Rc(e),
              new yd(t)
            );
          }),
          (t.version = "19.0.0");
      },
      43: (e, t, n) => {
        e.exports = n(288);
      },
      288: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.consumer"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var k = (b.prototype = new y());
        (k.constructor = b), m(k, v.prototype), (k.isPureReactComponent = !0);
        var w = Array.isArray,
          S = { H: null, A: null, T: null, S: null },
          x = Object.prototype.hasOwnProperty;
        function E(e, t, r, a, l, o) {
          return (
            (r = o.ref),
            {
              $$typeof: n,
              type: e,
              key: t,
              ref: void 0 !== r ? r : null,
              props: o,
            }
          );
        }
        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N() {}
        function z(e, t, a, l, o) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u,
            s,
            c = !1;
          if (null === e) c = !0;
          else
            switch (i) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    c = !0;
                    break;
                  case d:
                    return z((c = e._init)(e._payload), t, a, l, o);
                }
            }
          if (c)
            return (
              (o = o(e)),
              (c = "" === l ? "." + P(e, 0) : l),
              w(o)
                ? ((a = ""),
                  null != c && (a = c.replace(_, "$&/") + "/"),
                  z(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (C(o) &&
                    ((u = o),
                    (s =
                      a +
                      (null == o.key || (e && e.key === o.key)
                        ? ""
                        : ("" + o.key).replace(_, "$&/") + "/") +
                      c),
                    (o = E(u.type, s, void 0, 0, 0, u.props))),
                  t.push(o)),
              1
            );
          c = 0;
          var f,
            h = "" === l ? "." : l + ":";
          if (w(e))
            for (var m = 0; m < e.length; m++)
              c += z((l = e[m]), t, a, (i = h + P(l, m)), o);
          else if (
            "function" ===
            typeof (m =
              null === (f = e) || "object" !== typeof f
                ? null
                : "function" === typeof (f = (p && f[p]) || f["@@iterator"])
                ? f
                : null)
          )
            for (e = m.call(e), m = 0; !(l = e.next()).done; )
              c += z((l = l.value), t, a, (i = h + P(l, m++)), o);
          else if ("object" === i) {
            if ("function" === typeof e.then)
              return z(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" === typeof e.status
                          ? e.then(N, N)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                a,
                l,
                o
              );
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          }
          return c;
        }
        function L(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            z(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function T(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" === typeof window &&
                  "function" === typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" === typeof e &&
                      null !== e &&
                      "string" === typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  "object" === typeof process &&
                  "function" === typeof process.emit
                )
                  return void process.emit("uncaughtException", e);
                console.error(e);
              };
        function O() {}
        (t.Children = {
          map: L,
          forEach: function (e, t, n) {
            L(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              L(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              L(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            S),
          (t.act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = m({}, e.props),
              a = e.key;
            if (null != t)
              for (l in (void 0 !== t.ref && void 0,
              void 0 !== t.key && (a = "" + t.key),
              t))
                !x.call(t, l) ||
                  "key" === l ||
                  "__self" === l ||
                  "__source" === l ||
                  ("ref" === l && void 0 === t.ref) ||
                  (r[l] = t[l]);
            var l = arguments.length - 2;
            if (1 === l) r.children = n;
            else if (1 < l) {
              for (var o = Array(l), i = 0; i < l; i++) o[i] = arguments[i + 2];
              r.children = o;
            }
            return E(e.type, a, void 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = { $$typeof: i, _context: e }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              a = {},
              l = null;
            if (null != t)
              for (r in (void 0 !== t.key && (l = "" + t.key), t))
                x.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (a[r] = t[r]);
            var o = arguments.length - 2;
            if (1 === o) a.children = n;
            else if (1 < o) {
              for (var i = Array(o), u = 0; u < o; u++) i[u] = arguments[u + 2];
              a.children = i;
            }
            if (e && e.defaultProps)
              for (r in (o = e.defaultProps)) void 0 === a[r] && (a[r] = o[r]);
            return E(e, l, void 0, 0, 0, a);
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: T,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = S.T,
              n = {};
            S.T = n;
            try {
              var r = e(),
                a = S.S;
              null !== a && a(n, r),
                "object" === typeof r &&
                  null !== r &&
                  "function" === typeof r.then &&
                  r.then(O, R);
            } catch (l) {
              R(l);
            } finally {
              S.T = t;
            }
          }),
          (t.unstable_useCacheRefresh = function () {
            return S.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return S.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return S.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return S.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return S.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return S.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t) {
            return S.H.useEffect(e, t);
          }),
          (t.useId = function () {
            return S.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return S.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return S.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return S.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return S.H.useMemo(e, t);
          }),
          (t.useOptimistic = function (e, t) {
            return S.H.useOptimistic(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return S.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return S.H.useRef(e);
          }),
          (t.useState = function (e) {
            return S.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return S.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return S.H.useTransition();
          }),
          (t.version = "19.0.0");
      },
      358: (e, t) => {
        const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
          r = /^[\u0021-\u003A\u003C-\u007E]*$/,
          a =
            /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
          l = /^[\u0020-\u003A\u003D-\u007E]*$/,
          o = Object.prototype.toString,
          i = (() => {
            const e = function () {};
            return (e.prototype = Object.create(null)), e;
          })();
        function u(e, t, n) {
          do {
            const n = e.charCodeAt(t);
            if (32 !== n && 9 !== n) return t;
          } while (++t < n);
          return n;
        }
        function s(e, t, n) {
          for (; t > n; ) {
            const n = e.charCodeAt(--t);
            if (32 !== n && 9 !== n) return t + 1;
          }
          return n;
        }
        function c(e) {
          if (-1 === e.indexOf("%")) return e;
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return e;
          }
        }
      },
      391: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4));
      },
      579: (e, t, n) => {
        e.exports = n(799);
      },
      672: (e, t, n) => {
        var r = n(43);
        function a(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function l() {}
        var o = {
            d: {
              f: l,
              r: function () {
                throw Error(a(522));
              },
              D: l,
              C: l,
              L: l,
              m: l,
              X: l,
              S: l,
              M: l,
            },
            p: 0,
            findDOMNode: null,
          },
          i = Symbol.for("react.portal");
        var u =
          r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function s(e, t) {
          return "font" === e
            ? ""
            : "string" === typeof t
            ? "use-credentials" === t
              ? t
              : ""
            : void 0;
        }
        (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (
              !t ||
              (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)
            )
              throw Error(a(299));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: i,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.flushSync = function (e) {
            var t = u.T,
              n = o.p;
            try {
              if (((u.T = null), (o.p = 2), e)) return e();
            } finally {
              (u.T = t), (o.p = n), o.d.f();
            }
          }),
          (t.preconnect = function (e, t) {
            "string" === typeof e &&
              (t
                ? (t =
                    "string" === typeof (t = t.crossOrigin)
                      ? "use-credentials" === t
                        ? t
                        : ""
                      : void 0)
                : (t = null),
              o.d.C(e, t));
          }),
          (t.prefetchDNS = function (e) {
            "string" === typeof e && o.d.D(e);
          }),
          (t.preinit = function (e, t) {
            if ("string" === typeof e && t && "string" === typeof t.as) {
              var n = t.as,
                r = s(n, t.crossOrigin),
                a = "string" === typeof t.integrity ? t.integrity : void 0,
                l =
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0;
              "style" === n
                ? o.d.S(
                    e,
                    "string" === typeof t.precedence ? t.precedence : void 0,
                    { crossOrigin: r, integrity: a, fetchPriority: l }
                  )
                : "script" === n &&
                  o.d.X(e, {
                    crossOrigin: r,
                    integrity: a,
                    fetchPriority: l,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
            }
          }),
          (t.preinitModule = function (e, t) {
            if ("string" === typeof e)
              if ("object" === typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                  var n = s(t.as, t.crossOrigin);
                  o.d.M(e, {
                    crossOrigin: n,
                    integrity:
                      "string" === typeof t.integrity ? t.integrity : void 0,
                    nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                  });
                }
              } else null == t && o.d.M(e);
          }),
          (t.preload = function (e, t) {
            if (
              "string" === typeof e &&
              "object" === typeof t &&
              null !== t &&
              "string" === typeof t.as
            ) {
              var n = t.as,
                r = s(n, t.crossOrigin);
              o.d.L(e, n, {
                crossOrigin: r,
                integrity:
                  "string" === typeof t.integrity ? t.integrity : void 0,
                nonce: "string" === typeof t.nonce ? t.nonce : void 0,
                type: "string" === typeof t.type ? t.type : void 0,
                fetchPriority:
                  "string" === typeof t.fetchPriority
                    ? t.fetchPriority
                    : void 0,
                referrerPolicy:
                  "string" === typeof t.referrerPolicy
                    ? t.referrerPolicy
                    : void 0,
                imageSrcSet:
                  "string" === typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes:
                  "string" === typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" === typeof t.media ? t.media : void 0,
              });
            }
          }),
          (t.preloadModule = function (e, t) {
            if ("string" === typeof e)
              if (t) {
                var n = s(t.as, t.crossOrigin);
                o.d.m(e, {
                  as:
                    "string" === typeof t.as && "script" !== t.as
                      ? t.as
                      : void 0,
                  crossOrigin: n,
                  integrity:
                    "string" === typeof t.integrity ? t.integrity : void 0,
                });
              } else o.d.m(e);
          }),
          (t.requestFormReset = function (e) {
            o.d.r(e);
          }),
          (t.unstable_batchedUpdates = function (e, t) {
            return e(t);
          }),
          (t.useFormState = function (e, t, n) {
            return u.H.useFormState(e, t, n);
          }),
          (t.useFormStatus = function () {
            return u.H.useHostTransitionStatus();
          }),
          (t.version = "19.0.0");
      },
      799: (e, t) => {
        var n = Symbol.for("react.transitional.element");
        function r(e, t, r) {
          var a = null;
          if (
            (void 0 !== r && (a = "" + r),
            void 0 !== t.key && (a = "" + t.key),
            "key" in t)
          )
            for (var l in ((r = {}), t)) "key" !== l && (r[l] = t[l]);
          else r = t;
          return (
            (t = r.ref),
            {
              $$typeof: n,
              type: e,
              key: a,
              ref: void 0 !== t ? t : null,
              props: r,
            }
          );
        }
        Symbol.for("react.fragment"), (t.jsx = r), (t.jsxs = r);
      },
      853: (e, t, n) => {
        e.exports = n(896);
      },
      896: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          ((t.unstable_now = void 0),
          "object" === typeof performance &&
            "function" === typeof performance.now)
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function k(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((g = !1), k(e), !m))
            if (null !== r(s)) (m = !0), T();
            else {
              var t = r(c);
              null !== t && R(w, t.startTime - e);
            }
        }
        var S,
          x = !1,
          E = -1,
          C = 5,
          _ = -1;
        function P() {
          return !(t.unstable_now() - _ < C);
        }
        function N() {
          if (x) {
            var e = t.unstable_now();
            _ = e;
            var n = !0;
            try {
              e: {
                (m = !1), g && ((g = !1), y(E), (E = -1)), (h = !0);
                var l = p;
                try {
                  t: {
                    for (
                      k(e), d = r(s);
                      null !== d && !(d.expirationTime > e && P());

                    ) {
                      var o = d.callback;
                      if ("function" === typeof o) {
                        (d.callback = null), (p = d.priorityLevel);
                        var i = o(d.expirationTime <= e);
                        if (((e = t.unstable_now()), "function" === typeof i)) {
                          (d.callback = i), k(e), (n = !0);
                          break t;
                        }
                        d === r(s) && a(s), k(e);
                      } else a(s);
                      d = r(s);
                    }
                    if (null !== d) n = !0;
                    else {
                      var u = r(c);
                      null !== u && R(w, u.startTime - e), (n = !1);
                    }
                  }
                  break e;
                } finally {
                  (d = null), (p = l), (h = !1);
                }
                n = void 0;
              }
            } finally {
              n ? S() : (x = !1);
            }
          }
        }
        if ("function" === typeof b)
          S = function () {
            b(N);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var z = new MessageChannel(),
            L = z.port2;
          (z.port1.onmessage = N),
            (S = function () {
              L.postMessage(null);
            });
        } else
          S = function () {
            v(N, 0);
          };
        function T() {
          x || ((x = !0), S());
        }
        function R(e, n) {
          E = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), T());
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (y(E), (E = -1)) : (g = !0), R(w, l - o)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), T())),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(672));
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (n.m = e),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".fc43274d.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "react-store-a:";
      n.l = (r, a, l, o) => {
        if (e[r]) e[r].push(a);
        else {
          var i, u;
          if (void 0 !== l)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var f = s[c];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + l
              ) {
                i = f;
                break;
              }
            }
          i ||
            ((u = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            n.nc && i.setAttribute("nonce", n.nc),
            i.setAttribute("data-webpack", t + l),
            (i.src = r)),
            (e[r] = [a]);
          var d = (t, n) => {
              (i.onerror = i.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            );
          (i.onerror = d.bind(null, i.onerror)),
            (i.onload = d.bind(null, i.onload)),
            u && document.head.appendChild(i);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/react-store-a/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var l = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = l));
            var o = n.p + n.u(t),
              i = new Error();
            n.l(
              o,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var l = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src;
                  (i.message =
                    "Loading chunk " + t + " failed.\n(" + l + ": " + o + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = l),
                    (i.request = o),
                    a[1](i);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var a,
            l,
            o = r[0],
            i = r[1],
            u = r[2],
            s = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (a in i) n.o(i, a) && (n.m[a] = i[a]);
            if (u) u(n);
          }
          for (t && t(r); s < o.length; s++)
            (l = o[s]), n.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
        },
        r = (self.webpackChunkreact_store_a =
          self.webpackChunkreact_store_a || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var r = n(43),
    a = n(391),
    l = (n(358), "popstate");
  function o() {
    return p(
      function (e, t) {
        let { pathname: n, search: r, hash: a } = e.location;
        return c(
          "",
          { pathname: n, search: r, hash: a },
          (t.state && t.state.usr) || null,
          (t.state && t.state.key) || "default"
        );
      },
      function (e, t) {
        return "string" === typeof t ? t : f(t);
      },
      null,
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
    );
  }
  function i(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function u(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function s(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function c(e, t) {
    let n =
        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      r = arguments.length > 3 ? arguments[3] : void 0;
    return {
      pathname: "string" === typeof e ? e : e.pathname,
      search: "",
      hash: "",
      ...("string" === typeof t ? d(t) : t),
      state: n,
      key: (t && t.key) || r || Math.random().toString(36).substring(2, 10),
    };
  }
  function f(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function d(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function p(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      { window: a = document.defaultView, v5Compat: o = !1 } = r,
      u = a.history,
      d = "POP",
      p = null,
      h = m();
    function m() {
      return (u.state || { idx: null }).idx;
    }
    function g() {
      d = "POP";
      let e = m(),
        t = null == e ? null : e - h;
      (h = e), p && p({ action: d, location: y.location, delta: t });
    }
    function v(e) {
      let t =
          "null" !== a.location.origin ? a.location.origin : a.location.href,
        n = "string" === typeof e ? e : f(e);
      return (
        (n = n.replace(/ $/, "%20")),
        i(
          t,
          `No window.location.(origin|href) available to create URL for href: ${n}`
        ),
        new URL(n, t)
      );
    }
    null == h && ((h = 0), u.replaceState({ ...u.state, idx: h }, ""));
    let y = {
      get action() {
        return d;
      },
      get location() {
        return e(a, u);
      },
      listen(e) {
        if (p) throw new Error("A history only accepts one active listener");
        return (
          a.addEventListener(l, g),
          (p = e),
          () => {
            a.removeEventListener(l, g), (p = null);
          }
        );
      },
      createHref: (e) => t(a, e),
      createURL: v,
      encodeLocation(e) {
        let t = v(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        d = "PUSH";
        let r = c(y.location, e, t);
        n && n(r, e), (h = m() + 1);
        let l = s(r, h),
          i = y.createHref(r);
        try {
          u.pushState(l, "", i);
        } catch (f) {
          if (f instanceof DOMException && "DataCloneError" === f.name) throw f;
          a.location.assign(i);
        }
        o && p && p({ action: d, location: y.location, delta: 1 });
      },
      replace: function (e, t) {
        d = "REPLACE";
        let r = c(y.location, e, t);
        n && n(r, e), (h = m());
        let a = s(r, h),
          l = y.createHref(r);
        u.replaceState(a, "", l),
          o && p && p({ action: d, location: y.location, delta: 0 });
      },
      go: (e) => u.go(e),
    };
    return y;
  }
  new WeakMap();
  function h(e, t) {
    return m(
      e,
      t,
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/",
      !1
    );
  }
  function m(e, t, n, r) {
    let a = z(("string" === typeof t ? d(t) : t).pathname || "/", n);
    if (null == a) return null;
    let l = g(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(l);
    let o = null;
    for (let i = 0; null == o && i < l.length; ++i) {
      let e = N(a);
      o = _(l[i], e, r);
    }
    return o;
  }
  function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
      a = (e, a, l) => {
        let o = {
          relativePath: void 0 === l ? e.path || "" : l,
          caseSensitive: !0 === e.caseSensitive,
          childrenIndex: a,
          route: e,
        };
        o.relativePath.startsWith("/") &&
          (i(
            o.relativePath.startsWith(r),
            `Absolute route path "${o.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
          ),
          (o.relativePath = o.relativePath.slice(r.length)));
        let u = j([r, o.relativePath]),
          s = n.concat(o);
        e.children &&
          e.children.length > 0 &&
          (i(
            !0 !== e.index,
            `Index routes must not have child routes. Please remove all child routes from route path "${u}".`
          ),
          g(e.children, t, s, u)),
          (null != e.path || e.index) &&
            t.push({ path: u, score: C(u, e.index), routesMeta: s });
      };
    return (
      e.forEach((e, t) => {
        if ("" !== e.path && e.path?.includes("?"))
          for (let n of v(e.path)) a(e, t, n);
        else a(e, t);
      }),
      t
    );
  }
  function v(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith("?"),
      l = n.replace(/\?$/, "");
    if (0 === r.length) return a ? [l, ""] : [l];
    let o = v(r.join("/")),
      i = [];
    return (
      i.push(...o.map((e) => ("" === e ? l : [l, e].join("/")))),
      a && i.push(...o),
      i.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  var y = /^:[\w-]+$/,
    b = 3,
    k = 2,
    w = 1,
    S = 10,
    x = -2,
    E = (e) => "*" === e;
  function C(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(E) && (r += x),
      t && (r += k),
      n
        .filter((e) => !E(e))
        .reduce((e, t) => e + (y.test(t) ? b : "" === t ? w : S), r)
    );
  }
  function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      { routesMeta: r } = e,
      a = {},
      l = "/",
      o = [];
    for (let i = 0; i < r.length; ++i) {
      let e = r[i],
        u = i === r.length - 1,
        s = "/" === l ? t : t.slice(l.length) || "/",
        c = P(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: u },
          s
        ),
        f = e.route;
      if (
        (!c &&
          u &&
          n &&
          !r[r.length - 1].route.index &&
          (c = P(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            s
          )),
        !c)
      )
        return null;
      Object.assign(a, c.params),
        o.push({
          params: a,
          pathname: j([l, c.pathname]),
          pathnameBase: A(j([l, c.pathnameBase])),
          route: f,
        }),
        "/" !== c.pathnameBase && (l = j([l, c.pathnameBase]));
    }
    return o;
  }
  function P(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        u(
          "*" === e || !e.endsWith("*") || e.endsWith("/*"),
          `Route path "${e}" will be treated as if it were "${e.replace(
            /\*$/,
            "/*"
          )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(
            /\*$/,
            "/*"
          )}".`
        );
        let r = [],
          a =
            "^" +
            e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }),
                  n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                )
              );
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
          ? (a += "\\/*$")
          : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
        let l = new RegExp(a, t ? void 0 : "i");
        return [l, r];
      })(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let l = a[0],
      o = l.replace(/(.)\/+$/, "$1"),
      i = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: a } = t;
        if ("*" === r) {
          let e = i[n] || "";
          o = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const u = i[n];
        return (e[r] = a && !u ? void 0 : (u || "").replace(/%2F/g, "/")), e;
      }, {}),
      pathname: l,
      pathnameBase: o,
      pattern: e,
    };
  }
  function N(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        u(
          !1,
          `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
        ),
        e
      );
    }
  }
  function z(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function L(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
      r
    )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function T(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
    );
  }
  function R(e) {
    let t = T(e);
    return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
  }
  function O(e, t, n) {
    let r,
      a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    "string" === typeof e
      ? (r = d(e))
      : ((r = { ...e }),
        i(
          !r.pathname || !r.pathname.includes("?"),
          L("?", "pathname", "search", r)
        ),
        i(
          !r.pathname || !r.pathname.includes("#"),
          L("#", "pathname", "hash", r)
        ),
        i(!r.search || !r.search.includes("#"), L("#", "search", "hash", r)));
    let l,
      o = "" === e || "" === r.pathname,
      u = o ? "/" : r.pathname;
    if (null == u) l = n;
    else {
      let e = t.length - 1;
      if (!a && u.startsWith("..")) {
        let t = u.split("/");
        for (; ".." === t[0]; ) t.shift(), (e -= 1);
        r.pathname = t.join("/");
      }
      l = e >= 0 ? t[e] : "/";
    }
    let s = (function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "/",
          {
            pathname: n,
            search: r = "",
            hash: a = "",
          } = "string" === typeof e ? d(e) : e,
          l = n
            ? n.startsWith("/")
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(n, t)
            : t;
        return { pathname: l, search: D(r), hash: F(a) };
      })(r, l),
      c = u && "/" !== u && u.endsWith("/"),
      f = (o || "." === u) && n.endsWith("/");
    return s.pathname.endsWith("/") || (!c && !f) || (s.pathname += "/"), s;
  }
  var j = (e) => e.join("/").replace(/\/\/+/g, "/"),
    A = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    D = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    F = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  function M(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  var $ = ["POST", "PUT", "PATCH", "DELETE"],
    I = (new Set($), ["GET", ...$]);
  new Set(I), Symbol("ResetLoaderData");
  var U = r.createContext(null);
  U.displayName = "DataRouter";
  var H = r.createContext(null);
  H.displayName = "DataRouterState";
  var B = r.createContext({ isTransitioning: !1 });
  B.displayName = "ViewTransition";
  var W = r.createContext(new Map());
  W.displayName = "Fetchers";
  var V = r.createContext(null);
  V.displayName = "Await";
  var Q = r.createContext(null);
  Q.displayName = "Navigation";
  var q = r.createContext(null);
  q.displayName = "Location";
  var Y = r.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  Y.displayName = "Route";
  var K = r.createContext(null);
  K.displayName = "RouteError";
  function G() {
    return null != r.useContext(q);
  }
  function X() {
    return (
      i(
        G(),
        "useLocation() may be used only in the context of a <Router> component."
      ),
      r.useContext(q).location
    );
  }
  var J =
    "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function Z(e) {
    r.useContext(Q).static || r.useLayoutEffect(e);
  }
  function ee() {
    let { isDataRoute: e } = r.useContext(Y);
    return e
      ? (function () {
          let { router: e } = se("useNavigate"),
            t = fe("useNavigate"),
            n = r.useRef(!1);
          Z(() => {
            n.current = !0;
          });
          let a = r.useCallback(
            async function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              u(n.current, J),
                n.current &&
                  ("number" === typeof r
                    ? e.navigate(r)
                    : await e.navigate(r, { fromRouteId: t, ...a }));
            },
            [e, t]
          );
          return a;
        })()
      : (function () {
          i(
            G(),
            "useNavigate() may be used only in the context of a <Router> component."
          );
          let e = r.useContext(U),
            { basename: t, navigator: n } = r.useContext(Q),
            { matches: a } = r.useContext(Y),
            { pathname: l } = X(),
            o = JSON.stringify(R(a)),
            s = r.useRef(!1);
          Z(() => {
            s.current = !0;
          });
          let c = r.useCallback(
            function (r) {
              let a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              if ((u(s.current, J), !s.current)) return;
              if ("number" === typeof r) return void n.go(r);
              let i = O(r, JSON.parse(o), l, "path" === a.relative);
              null == e &&
                "/" !== t &&
                (i.pathname = "/" === i.pathname ? t : j([t, i.pathname])),
                (a.replace ? n.replace : n.push)(i, a.state, a);
            },
            [t, n, o, l, e]
          );
          return c;
        })();
  }
  r.createContext(null);
  function te(e) {
    let { relative: t } =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { matches: n } = r.useContext(Y),
      { pathname: a } = X(),
      l = JSON.stringify(R(n));
    return r.useMemo(() => O(e, JSON.parse(l), a, "path" === t), [e, l, a, t]);
  }
  function ne(e, t, n, a) {
    i(
      G(),
      "useRoutes() may be used only in the context of a <Router> component."
    );
    let { navigator: l, static: o } = r.useContext(Q),
      { matches: s } = r.useContext(Y),
      c = s[s.length - 1],
      f = c ? c.params : {},
      p = c ? c.pathname : "/",
      m = c ? c.pathnameBase : "/",
      g = c && c.route;
    {
      let e = (g && g.path) || "";
      he(
        p,
        !g || e.endsWith("*") || e.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${
          "/" === e ? "*" : `${e}/*`
        }">.`
      );
    }
    let v,
      y = X();
    if (t) {
      let e = "string" === typeof t ? d(t) : t;
      i(
        "/" === m || e.pathname?.startsWith(m),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`
      ),
        (v = e);
    } else v = y;
    let b = v.pathname || "/",
      k = b;
    if ("/" !== m) {
      let e = m.replace(/^\//, "").split("/");
      k = "/" + b.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let w =
      !o && n && n.matches && n.matches.length > 0
        ? n.matches
        : h(e, { pathname: k });
    u(
      g || null != w,
      `No routes matched location "${v.pathname}${v.search}${v.hash}" `
    ),
      u(
        null == w ||
          void 0 !== w[w.length - 1].route.element ||
          void 0 !== w[w.length - 1].route.Component ||
          void 0 !== w[w.length - 1].route.lazy,
        `Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
      );
    let S = ie(
      w &&
        w.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, f, e.params),
            pathname: j([
              m,
              l.encodeLocation
                ? l.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? m
                : j([
                    m,
                    l.encodeLocation
                      ? l.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      a
    );
    return t && S
      ? r.createElement(
          q.Provider,
          {
            value: {
              location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...v,
              },
              navigationType: "POP",
            },
          },
          S
        )
      : S;
  }
  function re() {
    let e = de(),
      t = M(e)
        ? `${e.status} ${e.statusText}`
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      a = "rgba(200,200,200, 0.5)",
      l = { padding: "0.5rem", backgroundColor: a },
      o = { padding: "2px 4px", backgroundColor: a },
      i = null;
    return (
      console.error("Error handled by React Router default ErrorBoundary:", e),
      (i = r.createElement(
        r.Fragment,
        null,
        r.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
        r.createElement(
          "p",
          null,
          "You can provide a way better UX than this when your app throws errors by providing your own ",
          r.createElement("code", { style: o }, "ErrorBoundary"),
          " or",
          " ",
          r.createElement("code", { style: o }, "errorElement"),
          " prop on your route."
        )
      )),
      r.createElement(
        r.Fragment,
        null,
        r.createElement("h2", null, "Unexpected Application Error!"),
        r.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? r.createElement("pre", { style: l }, n) : null,
        i
      )
    );
  }
  var ae = r.createElement(re, null),
    le = class extends r.Component {
      constructor(e) {
        super(e),
          (this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error,
          });
      }
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        return t.location !== e.location ||
          ("idle" !== t.revalidation && "idle" === e.revalidation)
          ? {
              error: e.error,
              location: e.location,
              revalidation: e.revalidation,
            }
          : {
              error: void 0 !== e.error ? e.error : t.error,
              location: t.location,
              revalidation: e.revalidation || t.revalidation,
            };
      }
      componentDidCatch(e, t) {
        console.error(
          "React Router caught the following error during render",
          e,
          t
        );
      }
      render() {
        return void 0 !== this.state.error
          ? r.createElement(
              Y.Provider,
              { value: this.props.routeContext },
              r.createElement(K.Provider, {
                value: this.state.error,
                children: this.props.component,
              })
            )
          : this.props.children;
      }
    };
  function oe(e) {
    let { routeContext: t, match: n, children: a } = e,
      l = r.useContext(U);
    return (
      l &&
        l.static &&
        l.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (l.staticContext._deepestRenderedBoundaryId = n.route.id),
      r.createElement(Y.Provider, { value: t }, a)
    );
  }
  function ie(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (null == e) {
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (0 !== t.length || n.initialized || !(n.matches.length > 0))
          return null;
        e = n.matches;
      }
    }
    let a = e,
      l = n?.errors;
    if (null != l) {
      let e = a.findIndex((e) => e.route.id && void 0 !== l?.[e.route.id]);
      i(
        e >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(
          l
        ).join(",")}`
      ),
        (a = a.slice(0, Math.min(a.length, e + 1)));
    }
    let o = !1,
      u = -1;
    if (n)
      for (let r = 0; r < a.length; r++) {
        let e = a[r];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (u = r),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            l =
              e.route.loader &&
              !t.hasOwnProperty(e.route.id) &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || l) {
            (o = !0), (a = u >= 0 ? a.slice(0, u + 1) : [a[0]]);
            break;
          }
        }
      }
    return a.reduceRight((e, i, s) => {
      let c,
        f = !1,
        d = null,
        p = null;
      n &&
        ((c = l && i.route.id ? l[i.route.id] : void 0),
        (d = i.route.errorElement || ae),
        o &&
          (u < 0 && 0 === s
            ? (he(
                "route-fallback",
                !1,
                "No `HydrateFallback` element provided to render during initial hydration"
              ),
              (f = !0),
              (p = null))
            : u === s &&
              ((f = !0), (p = i.route.hydrateFallbackElement || null))));
      let h = t.concat(a.slice(0, s + 1)),
        m = () => {
          let t;
          return (
            (t = c
              ? d
              : f
              ? p
              : i.route.Component
              ? r.createElement(i.route.Component, null)
              : i.route.element
              ? i.route.element
              : e),
            r.createElement(oe, {
              match: i,
              routeContext: { outlet: e, matches: h, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (i.route.ErrorBoundary || i.route.errorElement || 0 === s)
        ? r.createElement(le, {
            location: n.location,
            revalidation: n.revalidation,
            component: d,
            error: c,
            children: m(),
            routeContext: { outlet: null, matches: h, isDataRoute: !0 },
          })
        : m();
    }, null);
  }
  function ue(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function se(e) {
    let t = r.useContext(U);
    return i(t, ue(e)), t;
  }
  function ce(e) {
    let t = r.useContext(H);
    return i(t, ue(e)), t;
  }
  function fe(e) {
    let t = (function (e) {
        let t = r.useContext(Y);
        return i(t, ue(e)), t;
      })(e),
      n = t.matches[t.matches.length - 1];
    return (
      i(
        n.route.id,
        `${e} can only be used on routes that contain a unique "id"`
      ),
      n.route.id
    );
  }
  function de() {
    let e = r.useContext(K),
      t = ce("useRouteError"),
      n = fe("useRouteError");
    return void 0 !== e ? e : t.errors?.[n];
  }
  var pe = {};
  function he(e, t, n) {
    t || pe[e] || ((pe[e] = !0), u(!1, n));
  }
  r.memo(function (e) {
    let { routes: t, future: n, state: r } = e;
    return ne(t, void 0, r, n);
  });
  function me(e) {
    i(
      !1,
      "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
    );
  }
  function ge(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: a,
      navigationType: l = "POP",
      navigator: o,
      static: s = !1,
    } = e;
    i(
      !G(),
      "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
    );
    let c = t.replace(/^\/*/, "/"),
      f = r.useMemo(
        () => ({ basename: c, navigator: o, static: s, future: {} }),
        [c, o, s]
      );
    "string" === typeof a && (a = d(a));
    let {
        pathname: p = "/",
        search: h = "",
        hash: m = "",
        state: g = null,
        key: v = "default",
      } = a,
      y = r.useMemo(() => {
        let e = z(p, c);
        return null == e
          ? null
          : {
              location: { pathname: e, search: h, hash: m, state: g, key: v },
              navigationType: l,
            };
      }, [c, p, h, m, g, v, l]);
    return (
      u(
        null != y,
        `<Router basename="${c}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`
      ),
      null == y
        ? null
        : r.createElement(
            Q.Provider,
            { value: f },
            r.createElement(q.Provider, { children: n, value: y })
          )
    );
  }
  function ve(e) {
    let { children: t, location: n } = e;
    return ne(ye(t), n);
  }
  r.Component;
  function ye(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = [];
    return (
      r.Children.forEach(e, (e, a) => {
        if (!r.isValidElement(e)) return;
        let l = [...t, a];
        if (e.type === r.Fragment)
          return void n.push.apply(n, ye(e.props.children, l));
        i(
          e.type === me,
          `[${
            "string" === typeof e.type ? e.type : e.type.name
          }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
        ),
          i(
            !e.props.index || !e.props.children,
            "An index route cannot have child routes."
          );
        let o = {
          id: e.props.id || l.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          hydrateFallbackElement: e.props.hydrateFallbackElement,
          HydrateFallback: e.props.HydrateFallback,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            !0 === e.props.hasErrorBoundary ||
            null != e.props.ErrorBoundary ||
            null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        e.props.children && (o.children = ye(e.props.children, l)), n.push(o);
      }),
      n
    );
  }
  var be = "get",
    ke = "application/x-www-form-urlencoded";
  function we(e) {
    return null != e && "string" === typeof e.tagName;
  }
  var Se = null;
  var xe = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  function Ee(e) {
    return null == e || xe.has(e)
      ? e
      : (u(
          !1,
          `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ke}"`
        ),
        null);
  }
  function Ce(e, t) {
    let n, r, a, l, o;
    if (we((i = e)) && "form" === i.tagName.toLowerCase()) {
      let o = e.getAttribute("action");
      (r = o ? z(o, t) : null),
        (n = e.getAttribute("method") || be),
        (a = Ee(e.getAttribute("enctype")) || ke),
        (l = new FormData(e));
    } else if (
      (function (e) {
        return we(e) && "button" === e.tagName.toLowerCase();
      })(e) ||
      ((function (e) {
        return we(e) && "input" === e.tagName.toLowerCase();
      })(e) &&
        ("submit" === e.type || "image" === e.type))
    ) {
      let o = e.form;
      if (null == o)
        throw new Error(
          'Cannot submit a <button> or <input type="submit"> without a <form>'
        );
      let i = e.getAttribute("formaction") || o.getAttribute("action");
      if (
        ((r = i ? z(i, t) : null),
        (n = e.getAttribute("formmethod") || o.getAttribute("method") || be),
        (a =
          Ee(e.getAttribute("formenctype")) ||
          Ee(o.getAttribute("enctype")) ||
          ke),
        (l = new FormData(o, e)),
        !(function () {
          if (null === Se)
            try {
              new FormData(document.createElement("form"), 0), (Se = !1);
            } catch (e) {
              Se = !0;
            }
          return Se;
        })())
      ) {
        let { name: t, type: n, value: r } = e;
        if ("image" === n) {
          let e = t ? `${t}.` : "";
          l.append(`${e}x`, "0"), l.append(`${e}y`, "0");
        } else t && l.append(t, r);
      }
    } else {
      if (we(e))
        throw new Error(
          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
        );
      (n = be), (r = null), (a = ke), (o = e);
    }
    var i;
    return (
      l && "text/plain" === a && ((o = l), (l = void 0)),
      { action: r, method: n.toLowerCase(), encType: a, formData: l, body: o }
    );
  }
  function _e(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  async function Pe(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let n = await import(e.module);
      return (t[e.id] = n), n;
    } catch (n) {
      return (
        console.error(
          `Error loading route module \`${e.module}\`, reloading page...`
        ),
        console.error(n),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function Ne(e) {
    return null != e && "string" === typeof e.page;
  }
  function ze(e) {
    return (
      null != e &&
      (null == e.href
        ? "preload" === e.rel &&
          "string" === typeof e.imageSrcSet &&
          "string" === typeof e.imageSizes
        : "string" === typeof e.rel && "string" === typeof e.href)
    );
  }
  function Le(e, t, n, r, a, l) {
    let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
      i = (e, t) =>
        n[t].pathname !== e.pathname ||
        (n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"]);
    return "assets" === l
      ? t.filter((e, t) => o(e, t) || i(e, t))
      : "data" === l
      ? t.filter((t, l) => {
          let u = r.routes[t.route.id];
          if (!u || !u.hasLoader) return !1;
          if (o(t, l) || i(t, l)) return !0;
          if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                a.pathname + a.search + a.hash,
                window.origin
              ),
              currentParams: n[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if ("boolean" === typeof r) return r;
          }
          return !0;
        })
      : [];
  }
  function Te(e, t) {
    let { includeHydrateFallback: n } =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (
      (r = e
        .map((e) => {
          let r = t.routes[e.route.id];
          if (!r) return [];
          let a = [r.module];
          return (
            r.clientActionModule && (a = a.concat(r.clientActionModule)),
            r.clientLoaderModule && (a = a.concat(r.clientLoaderModule)),
            n &&
              r.hydrateFallbackModule &&
              (a = a.concat(r.hydrateFallbackModule)),
            r.imports && (a = a.concat(r.imports)),
            a
          );
        })
        .flat(1)),
      [...new Set(r)]
    );
    var r;
  }
  function Re(e, t) {
    let n = new Set(),
      r = new Set(t);
    return e.reduce((e, a) => {
      if (t && !Ne(a) && "script" === a.as && a.href && r.has(a.href)) return e;
      let l = JSON.stringify(
        (function (e) {
          let t = {},
            n = Object.keys(e).sort();
          for (let r of n) t[r] = e[r];
          return t;
        })(a)
      );
      return n.has(l) || (n.add(l), e.push({ key: l, link: a })), e;
    }, []);
  }
  function Oe(e) {
    return { __html: e };
  }
  Symbol("SingleFetchRedirect");
  function je(e, t) {
    let n =
      "string" === typeof e
        ? new URL(
            e,
            "undefined" === typeof window
              ? "server://singlefetch/"
              : window.location.origin
          )
        : e;
    return (
      "/" === n.pathname
        ? (n.pathname = "_root.data")
        : t && "/" === z(n.pathname, t)
        ? (n.pathname = `${t.replace(/\/$/, "")}/_root.data`)
        : (n.pathname = `${n.pathname.replace(/\/$/, "")}.data`),
      n
    );
  }
  r.Component;
  function Ae(e) {
    let { error: t, isOutsideRemixApp: n } = e;
    console.error(t);
    let a,
      l = r.createElement("script", {
        dangerouslySetInnerHTML: {
          __html:
            '\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      ',
        },
      });
    if (M(t))
      return r.createElement(
        De,
        { title: "Unhandled Thrown Response!" },
        r.createElement(
          "h1",
          { style: { fontSize: "24px" } },
          t.status,
          " ",
          t.statusText
        ),
        l
      );
    if (t instanceof Error) a = t;
    else {
      let e =
        null == t
          ? "Unknown Error"
          : "object" === typeof t && "toString" in t
          ? t.toString()
          : JSON.stringify(t);
      a = new Error(e);
    }
    return r.createElement(
      De,
      { title: "Application Error!", isOutsideRemixApp: n },
      r.createElement(
        "h1",
        { style: { fontSize: "24px" } },
        "Application Error"
      ),
      r.createElement(
        "pre",
        {
          style: {
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto",
          },
        },
        a.stack
      ),
      l
    );
  }
  function De(e) {
    let { title: t, renderScripts: n, isOutsideRemixApp: a, children: l } = e,
      { routeModules: o } = Ue();
    return o.root?.Layout && !a
      ? l
      : r.createElement(
          "html",
          { lang: "en" },
          r.createElement(
            "head",
            null,
            r.createElement("meta", { charSet: "utf-8" }),
            r.createElement("meta", {
              name: "viewport",
              content: "width=device-width,initial-scale=1,viewport-fit=cover",
            }),
            r.createElement("title", null, t)
          ),
          r.createElement(
            "body",
            null,
            r.createElement(
              "main",
              {
                style: { fontFamily: "system-ui, sans-serif", padding: "2rem" },
              },
              l,
              n ? r.createElement(Ye, null) : null
            )
          )
        );
  }
  function Fe(e) {
    return !0 === e;
  }
  function Me() {
    let e = r.useContext(U);
    return (
      _e(
        e,
        "You must render this element inside a <DataRouterContext.Provider> element"
      ),
      e
    );
  }
  function $e() {
    let e = r.useContext(H);
    return (
      _e(
        e,
        "You must render this element inside a <DataRouterStateContext.Provider> element"
      ),
      e
    );
  }
  var Ie = r.createContext(void 0);
  function Ue() {
    let e = r.useContext(Ie);
    return (
      _e(e, "You must render this element inside a <HydratedRouter> element"), e
    );
  }
  function He(e, t) {
    return (n) => {
      e && e(n), n.defaultPrevented || t(n);
    };
  }
  function Be(e, t, n) {
    if (n && !qe) return [e[0]];
    if (t) {
      let n = e.findIndex((e) => void 0 !== t[e.route.id]);
      return e.slice(0, n + 1);
    }
    return e;
  }
  function We(e) {
    let { page: t, ...n } = e,
      { router: a } = Me(),
      l = r.useMemo(
        () => h(a.routes, t, a.basename),
        [a.routes, t, a.basename]
      );
    return l ? r.createElement(Qe, { page: t, matches: l, ...n }) : null;
  }
  function Ve(e) {
    let { manifest: t, routeModules: n } = Ue(),
      [a, l] = r.useState([]);
    return (
      r.useEffect(() => {
        let r = !1;
        return (
          (async function (e, t, n) {
            return Re(
              (
                await Promise.all(
                  e.map(async (e) => {
                    let r = t.routes[e.route.id];
                    if (r) {
                      let e = await Pe(r, n);
                      return e.links ? e.links() : [];
                    }
                    return [];
                  })
                )
              )
                .flat(1)
                .filter(ze)
                .filter((e) => "stylesheet" === e.rel || "preload" === e.rel)
                .map((e) =>
                  "stylesheet" === e.rel
                    ? { ...e, rel: "prefetch", as: "style" }
                    : { ...e, rel: "prefetch" }
                )
            );
          })(e, t, n).then((e) => {
            r || l(e);
          }),
          () => {
            r = !0;
          }
        );
      }, [e, t, n]),
      a
    );
  }
  function Qe(e) {
    let { page: t, matches: n, ...a } = e,
      l = X(),
      { manifest: o, routeModules: i } = Ue(),
      { basename: u } = Me(),
      { loaderData: s, matches: c } = $e(),
      f = r.useMemo(() => Le(t, n, c, o, l, "data"), [t, n, c, o, l]),
      d = r.useMemo(() => Le(t, n, c, o, l, "assets"), [t, n, c, o, l]),
      p = r.useMemo(() => {
        if (t === l.pathname + l.search + l.hash) return [];
        let e = new Set(),
          r = !1;
        if (
          (n.forEach((t) => {
            let n = o.routes[t.route.id];
            n &&
              n.hasLoader &&
              ((!f.some((e) => e.route.id === t.route.id) &&
                t.route.id in s &&
                i[t.route.id]?.shouldRevalidate) ||
              n.hasClientLoader
                ? (r = !0)
                : e.add(t.route.id));
          }),
          0 === e.size)
        )
          return [];
        let a = je(t, u);
        return (
          r &&
            e.size > 0 &&
            a.searchParams.set(
              "_routes",
              n
                .filter((t) => e.has(t.route.id))
                .map((e) => e.route.id)
                .join(",")
            ),
          [a.pathname + a.search]
        );
      }, [u, s, l, o, f, n, t, i]),
      h = r.useMemo(() => Te(d, o), [d, o]),
      m = Ve(d);
    return r.createElement(
      r.Fragment,
      null,
      p.map((e) =>
        r.createElement("link", {
          key: e,
          rel: "prefetch",
          as: "fetch",
          href: e,
          ...a,
        })
      ),
      h.map((e) =>
        r.createElement("link", { key: e, rel: "modulepreload", href: e, ...a })
      ),
      m.map((e) => {
        let { key: t, link: n } = e;
        return r.createElement("link", { key: t, ...n });
      })
    );
  }
  Ie.displayName = "FrameworkContext";
  var qe = !1;
  function Ye(e) {
    let {
        manifest: t,
        serverHandoffString: n,
        isSpaMode: a,
        ssr: l,
        renderMeta: o,
      } = Ue(),
      { router: i, static: u, staticContext: s } = Me(),
      { matches: c } = $e(),
      f = Fe(l);
    o && (o.didRenderScripts = !0);
    let d = Be(c, null, a);
    r.useEffect(() => {
      qe = !0;
    }, []);
    let p = r.useMemo(() => {
        let a = s
            ? `window.__reactRouterContext = ${n};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`
            : " ",
          l = u
            ? `${
                t.hmr?.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""
              }${f ? "" : `import ${JSON.stringify(t.url)}`};\n${d
                .map((e, n) => {
                  let r = `route${n}`,
                    a = t.routes[e.route.id];
                  _e(a, `Route ${e.route.id} not found in manifest`);
                  let {
                      clientActionModule: l,
                      clientLoaderModule: o,
                      hydrateFallbackModule: i,
                      module: u,
                    } = a,
                    s = [
                      ...(l
                        ? [{ module: l, varName: `${r}_clientAction` }]
                        : []),
                      ...(o
                        ? [{ module: o, varName: `${r}_clientLoader` }]
                        : []),
                      ...(i
                        ? [{ module: i, varName: `${r}_HydrateFallback` }]
                        : []),
                      { module: u, varName: `${r}_main` },
                    ];
                  return 1 === s.length
                    ? `import * as ${r} from ${JSON.stringify(u)};`
                    : [
                        s
                          .map(
                            (e) =>
                              `import * as ${e.varName} from "${e.module}";`
                          )
                          .join("\n"),
                        `const ${r} = {${s
                          .map((e) => `...${e.varName}`)
                          .join(",")}};`,
                      ].join("\n");
                })
                .join("\n")}\n  ${
                f
                  ? `window.__reactRouterManifest = ${JSON.stringify(
                      (function (e, t) {
                        let n = new Set(t.state.matches.map((e) => e.route.id)),
                          r = t.state.location.pathname
                            .split("/")
                            .filter(Boolean),
                          a = ["/"];
                        for (r.pop(); r.length > 0; )
                          a.push(`/${r.join("/")}`), r.pop();
                        a.forEach((e) => {
                          let r = h(t.routes, e, t.basename);
                          r && r.forEach((e) => n.add(e.route.id));
                        });
                        let l = [...n].reduce(
                          (t, n) => Object.assign(t, { [n]: e.routes[n] }),
                          {}
                        );
                        return { ...e, routes: l };
                      })(t, i),
                      null,
                      2
                    )};`
                  : ""
              }\n  window.__reactRouterRouteModules = {${d
                .map((e, t) => `${JSON.stringify(e.route.id)}:route${t}`)
                .join(",")}};\n\nimport(${JSON.stringify(t.entry.module)});`
            : " ";
        return r.createElement(
          r.Fragment,
          null,
          r.createElement("script", {
            ...e,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Oe(a),
            type: void 0,
          }),
          r.createElement("script", {
            ...e,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Oe(l),
            type: "module",
            async: !0,
          })
        );
      }, []),
      m = qe
        ? []
        : t.entry.imports.concat(Te(d, t, { includeHydrateFallback: !0 }));
    return qe
      ? null
      : r.createElement(
          r.Fragment,
          null,
          f
            ? null
            : r.createElement("link", {
                rel: "modulepreload",
                href: t.url,
                crossOrigin: e.crossOrigin,
              }),
          r.createElement("link", {
            rel: "modulepreload",
            href: t.entry.module,
            crossOrigin: e.crossOrigin,
          }),
          ((g = m), [...new Set(g)]).map((t) =>
            r.createElement("link", {
              key: t,
              rel: "modulepreload",
              href: t,
              crossOrigin: e.crossOrigin,
            })
          ),
          p
        );
    var g;
  }
  function Ke() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return (e) => {
      t.forEach((t) => {
        "function" === typeof t ? t(e) : null != t && (t.current = e);
      });
    };
  }
  var Ge =
    "undefined" !== typeof window &&
    "undefined" !== typeof window.document &&
    "undefined" !== typeof window.document.createElement;
  try {
    Ge && (window.__reactRouterVersion = "7.4.0");
  } catch (vt) {}
  function Xe(e) {
    let { basename: t, children: n, window: a } = e,
      l = r.useRef();
    null == l.current && (l.current = o({ window: a, v5Compat: !0 }));
    let i = l.current,
      [u, s] = r.useState({ action: i.action, location: i.location }),
      c = r.useCallback(
        (e) => {
          r.startTransition(() => s(e));
        },
        [s]
      );
    return (
      r.useLayoutEffect(() => i.listen(c), [i, c]),
      r.createElement(ge, {
        basename: t,
        children: n,
        location: u.location,
        navigationType: u.action,
        navigator: i,
      })
    );
  }
  var Je = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Ze = r.forwardRef(function (e, t) {
      let n,
        {
          onClick: a,
          discover: l = "render",
          prefetch: o = "none",
          relative: s,
          reloadDocument: c,
          replace: d,
          state: p,
          target: h,
          to: m,
          preventScrollReset: g,
          viewTransition: v,
          ...y
        } = e,
        { basename: b } = r.useContext(Q),
        k = "string" === typeof m && Je.test(m),
        w = !1;
      if ("string" === typeof m && k && ((n = m), Ge))
        try {
          let e = new URL(window.location.href),
            t = m.startsWith("//") ? new URL(e.protocol + m) : new URL(m),
            n = z(t.pathname, b);
          t.origin === e.origin && null != n
            ? (m = n + t.search + t.hash)
            : (w = !0);
        } catch (vt) {
          u(
            !1,
            `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
          );
        }
      let S = (function (e) {
          let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          i(
            G(),
            "useHref() may be used only in the context of a <Router> component."
          );
          let { basename: n, navigator: a } = r.useContext(Q),
            { hash: l, pathname: o, search: u } = te(e, { relative: t }),
            s = o;
          return (
            "/" !== n && (s = "/" === o ? n : j([n, o])),
            a.createHref({ pathname: s, search: u, hash: l })
          );
        })(m, { relative: s }),
        [x, E, C] = (function (e, t) {
          let n = r.useContext(Ie),
            [a, l] = r.useState(!1),
            [o, i] = r.useState(!1),
            {
              onFocus: u,
              onBlur: s,
              onMouseEnter: c,
              onMouseLeave: f,
              onTouchStart: d,
            } = t,
            p = r.useRef(null);
          r.useEffect(() => {
            if (("render" === e && i(!0), "viewport" === e)) {
              let e = new IntersectionObserver(
                (e) => {
                  e.forEach((e) => {
                    i(e.isIntersecting);
                  });
                },
                { threshold: 0.5 }
              );
              return (
                p.current && e.observe(p.current),
                () => {
                  e.disconnect();
                }
              );
            }
          }, [e]),
            r.useEffect(() => {
              if (a) {
                let e = setTimeout(() => {
                  i(!0);
                }, 100);
                return () => {
                  clearTimeout(e);
                };
              }
            }, [a]);
          let h = () => {
              l(!0);
            },
            m = () => {
              l(!1), i(!1);
            };
          return n
            ? "intent" !== e
              ? [o, p, {}]
              : [
                  o,
                  p,
                  {
                    onFocus: He(u, h),
                    onBlur: He(s, m),
                    onMouseEnter: He(c, h),
                    onMouseLeave: He(f, m),
                    onTouchStart: He(d, h),
                  },
                ]
            : [!1, p, {}];
        })(o, y),
        _ = (function (e) {
          let {
              target: t,
              replace: n,
              state: a,
              preventScrollReset: l,
              relative: o,
              viewTransition: i,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {},
            u = ee(),
            s = X(),
            c = te(e, { relative: o });
          return r.useCallback(
            (r) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(e)
                  );
                })(r, t)
              ) {
                r.preventDefault();
                let t = void 0 !== n ? n : f(s) === f(c);
                u(e, {
                  replace: t,
                  state: a,
                  preventScrollReset: l,
                  relative: o,
                  viewTransition: i,
                });
              }
            },
            [s, u, c, n, a, t, e, l, o, i]
          );
        })(m, {
          replace: d,
          state: p,
          target: h,
          preventScrollReset: g,
          relative: s,
          viewTransition: v,
        });
      let P = r.createElement("a", {
        ...y,
        ...C,
        href: n || S,
        onClick:
          w || c
            ? a
            : function (e) {
                a && a(e), e.defaultPrevented || _(e);
              },
        ref: Ke(t, E),
        target: h,
        "data-discover": k || "render" !== l ? void 0 : "true",
      });
      return x && !k
        ? r.createElement(r.Fragment, null, P, r.createElement(We, { page: S }))
        : P;
    });
  (Ze.displayName = "Link"),
    (r.forwardRef(function (e, t) {
      let {
          "aria-current": n = "page",
          caseSensitive: a = !1,
          className: l = "",
          end: o = !1,
          style: u,
          to: s,
          viewTransition: c,
          children: f,
          ...d
        } = e,
        p = te(s, { relative: d.relative }),
        h = X(),
        m = r.useContext(H),
        { navigator: g, basename: v } = r.useContext(Q),
        y =
          null != m &&
          (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = r.useContext(B);
            i(
              null != n,
              "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
            );
            let { basename: a } = nt("useViewTransitionState"),
              l = te(e, { relative: t.relative });
            if (!n.isTransitioning) return !1;
            let o =
                z(n.currentLocation.pathname, a) || n.currentLocation.pathname,
              u = z(n.nextLocation.pathname, a) || n.nextLocation.pathname;
            return null != P(l.pathname, u) || null != P(l.pathname, o);
          })(p) &&
          !0 === c,
        b = g.encodeLocation ? g.encodeLocation(p).pathname : p.pathname,
        k = h.pathname,
        w =
          m && m.navigation && m.navigation.location
            ? m.navigation.location.pathname
            : null;
      a ||
        ((k = k.toLowerCase()),
        (w = w ? w.toLowerCase() : null),
        (b = b.toLowerCase())),
        w && v && (w = z(w, v) || w);
      const S = "/" !== b && b.endsWith("/") ? b.length - 1 : b.length;
      let x,
        E = k === b || (!o && k.startsWith(b) && "/" === k.charAt(S)),
        C =
          null != w &&
          (w === b || (!o && w.startsWith(b) && "/" === w.charAt(b.length))),
        _ = { isActive: E, isPending: C, isTransitioning: y },
        N = E ? n : void 0;
      x =
        "function" === typeof l
          ? l(_)
          : [
              l,
              E ? "active" : null,
              C ? "pending" : null,
              y ? "transitioning" : null,
            ]
              .filter(Boolean)
              .join(" ");
      let L = "function" === typeof u ? u(_) : u;
      return r.createElement(
        Ze,
        {
          ...d,
          "aria-current": N,
          className: x,
          ref: t,
          style: L,
          to: s,
          viewTransition: c,
        },
        "function" === typeof f ? f(_) : f
      );
    }).displayName = "NavLink");
  var et = r.forwardRef((e, t) => {
    let {
        discover: n = "render",
        fetcherKey: a,
        navigate: l,
        reloadDocument: o,
        replace: u,
        state: s,
        method: c = be,
        action: d,
        onSubmit: p,
        relative: h,
        preventScrollReset: m,
        viewTransition: g,
        ...v
      } = e,
      y = lt(),
      b = (function (e) {
        let { relative: t } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { basename: n } = r.useContext(Q),
          a = r.useContext(Y);
        i(a, "useFormAction must be used inside a RouteContext");
        let [l] = a.matches.slice(-1),
          o = { ...te(e || ".", { relative: t }) },
          u = X();
        if (null == e) {
          o.search = u.search;
          let e = new URLSearchParams(o.search),
            t = e.getAll("index");
          if (t.some((e) => "" === e)) {
            e.delete("index"),
              t.filter((e) => e).forEach((t) => e.append("index", t));
            let n = e.toString();
            o.search = n ? `?${n}` : "";
          }
        }
        (e && "." !== e) ||
          !l.route.index ||
          (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index");
        "/" !== n && (o.pathname = "/" === o.pathname ? n : j([n, o.pathname]));
        return f(o);
      })(d, { relative: h }),
      k = "get" === c.toLowerCase() ? "get" : "post",
      w = "string" === typeof d && Je.test(d);
    return r.createElement("form", {
      ref: t,
      method: k,
      action: b,
      onSubmit: o
        ? p
        : (e) => {
            if ((p && p(e), e.defaultPrevented)) return;
            e.preventDefault();
            let t = e.nativeEvent.submitter,
              n = t?.getAttribute("formmethod") || c;
            y(t || e.currentTarget, {
              fetcherKey: a,
              method: n,
              navigate: l,
              replace: u,
              state: s,
              relative: h,
              preventScrollReset: m,
              viewTransition: g,
            });
          },
      ...v,
      "data-discover": w || "render" !== n ? void 0 : "true",
    });
  });
  function tt(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function nt(e) {
    let t = r.useContext(U);
    return i(t, tt(e)), t;
  }
  et.displayName = "Form";
  var rt = 0,
    at = () => `__${String(++rt)}__`;
  function lt() {
    let { router: e } = nt("useSubmit"),
      { basename: t } = r.useContext(Q),
      n = fe("useRouteId");
    return r.useCallback(
      async function (r) {
        let a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { action: l, method: o, encType: i, formData: u, body: s } = Ce(r, t);
        if (!1 === a.navigate) {
          let t = a.fetcherKey || at();
          await e.fetch(t, n, a.action || l, {
            preventScrollReset: a.preventScrollReset,
            formData: u,
            body: s,
            formMethod: a.method || o,
            formEncType: a.encType || i,
            flushSync: a.flushSync,
          });
        } else
          await e.navigate(a.action || l, {
            preventScrollReset: a.preventScrollReset,
            formData: u,
            body: s,
            formMethod: a.method || o,
            formEncType: a.encType || i,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
      },
      [e, t, n]
    );
  }
  new TextEncoder();
  var ot = n(579);
  function it() {
    const { Detail: e, setDetail: t, cart: n } = (0, r.useContext)(ht),
      a = ee(),
      l = Object.values(n).reduce((e, t) => e + t, 0);
    return (0, ot.jsxs)("div", {
      className: "App-Header-Row",
      children: [
        (0, ot.jsx)("h1", {
          onClick: () => {
            a("/");
          },
          style: { cursor: "pointer" },
          children: "My React Store",
        }),
        (0, ot.jsxs)("div", {
          children: [
            (0, ot.jsx)(Ze, {
              to: "products",
              className: "App-Header-Link",
              children: "Home",
            }),
            (0, ot.jsxs)(Ze, {
              to: "cart",
              className: "App-Header-Link",
              children: ["Cart(", l, ")"],
            }),
            (0, ot.jsx)(Ze, {
              to: "orders",
              className: "App-Header-Link",
              children: "Orders",
            }),
            "" === e.name
              ? (0, ot.jsx)(Ze, {
                  to: "login",
                  className: "App-Header-Link",
                  children: "Login",
                })
              : (0, ot.jsx)(Ze, {
                  to: "login",
                  className: "App-Header-Link",
                  onClick: () => t({ ...e, name: "", email: "", pswd: "" }),
                  children: "Logout",
                }),
          ],
        }),
      ],
    });
  }
  function ut() {
    const { Detail: e } = (0, r.useContext)(ht),
      { products: t, cart: n, setCart: a } = (0, r.useContext)(ht);
    return (0, ot.jsxs)("div", {
      children: [
        e.name,
        (0, ot.jsx)("div", {
          className: "App-Products-Row",
          children: t.map((e, t) =>
            (0, ot.jsxs)(
              "div",
              {
                className: "App-Products-Box",
                children: [
                  (0, ot.jsx)("img", {
                    src: e.image,
                    alt: "",
                    width: 200,
                    height: 200,
                    style: { borderRadius: 10 },
                  }),
                  (0, ot.jsx)("h3", { children: e.name }),
                  (0, ot.jsxs)("h4", { children: ["$", e.price] }),
                  (0, ot.jsx)("button", {
                    className: "btn btn-success p-2",
                    onClick: () => {
                      return (
                        (t = e.id), a({ ...n, [t]: 1 }), void console.log(n)
                      );
                      var t;
                    },
                    children: "Add to cart",
                  }),
                ],
              },
              t
            )
          ),
        }),
      ],
    });
  }
  function st() {
    return (0, ot.jsx)("div", {
      className: "App-Footer text-dark p-3 mt-5 text-center",
      children: "@Copyrights 2025 . All rights reserved.",
    });
  }
  function ct() {
    const { Detail: e, setDetail: t, Details: n } = (0, r.useContext)(ht),
      a = ee(),
      [l, o] = (0, r.useState)();
    return (0, ot.jsx)("div", {
      className: "Row",
      children: (0, ot.jsxs)("div", {
        className: "LoginForm",
        children: [
          (0, ot.jsx)("h3", {
            style: { marginBottom: "40px" },
            children: "Login Form",
          }),
          l,
          (0, ot.jsx)("p", {
            children: (0, ot.jsx)("input", {
              type: "text",
              placeholder: "Email Address",
              onChange: (n) => t({ ...e, email: n.target.value }),
            }),
          }),
          (0, ot.jsx)("p", {
            children: (0, ot.jsx)("input", {
              type: "password",
              placeholder: "Enter password",
              onChange: (n) => t({ ...e, pswd: n.target.value }),
            }),
          }),
          (0, ot.jsx)("p", {
            children: (0, ot.jsx)("button", {
              onClick: () => {
                const t = n.find(
                  (t) => t.email === e.email && t.pswd === e.pswd
                );
                t ? ((e.name = t.name), a("/")) : o("Invalid User !");
              },
              children: "LogIn",
            }),
          }),
          (0, ot.jsx)("p", {
            children: (0, ot.jsx)(Ze, {
              to: "../register",
              className: "CAbtn",
              children: "Create Account",
            }),
          }),
        ],
      }),
    });
  }
  function ft() {
    const { orders: e } = (0, r.useContext)(ht);
    return (0, ot.jsxs)("div", {
      children: [
        (0, ot.jsx)("h2", { children: "Your Orders are:" }),
        e.map((e) =>
          (0, ot.jsxs)("div", {
            children: [
              (0, ot.jsxs)("div", {
                className: "d-flex p-1 text-center",
                children: [
                  (0, ot.jsxs)("h5", {
                    style: { marginRight: "15px", alignItems: "center" },
                    children: ["Order Date :", " "],
                  }),
                  e.orderDate,
                ],
              }),
              " ",
              (0, ot.jsxs)("div", {
                className: "d-flex p-1 text-center",
                children: [
                  (0, ot.jsxs)("h5", {
                    style: { marginRight: "15px", alignItems: "center" },
                    children: ["User Email :", " "],
                  }),
                  e.email,
                  " ",
                ],
              }),
              (0, ot.jsxs)("div", {
                className: "d-flex p-1 text-center",
                children: [
                  (0, ot.jsxs)("h5", {
                    style: { marginRight: "15px", alignItems: "center" },
                    children: ["No Of Products :", " "],
                  }),
                  " ",
                  Object.keys(e.items).length,
                ],
              }),
              (0, ot.jsxs)("div", {
                className: "d-flex p-1 text-center ",
                children: [
                  (0, ot.jsxs)("h5", {
                    style: { marginRight: "15px", alignItems: "center" },
                    children: ["Order Value :", " "],
                  }),
                  e.total,
                ],
              }),
              (0, ot.jsxs)("div", {
                className: "d-flex p-1 text-center",
                children: [
                  (0, ot.jsxs)("h5", {
                    style: { marginRight: "15px", alignItems: "center" },
                    children: ["Order Status :", " "],
                  }),
                  e.status,
                ],
              }),
              (0, ot.jsx)("hr", {}),
            ],
          })
        ),
      ],
    });
  }
  function dt() {
    const {
        cart: e,
        products: t,
        setCart: n,
        Detail: a,
        orders: l,
        setOrders: o,
      } = (0, r.useContext)(ht),
      i = ee(),
      u = (t) => {
        n({ ...e, [t]: 0 });
      },
      s = t.reduce((t, n) => t + (e[n.id] || 0) * n.price, 0);
    return (0, ot.jsxs)("div", {
      children: [
        (0, ot.jsx)("h3", { children: "My Cart" }),
        " ",
        (0, ot.jsx)("hr", {}),
        (0, ot.jsx)("div", {
          children: t.map(
            (t) =>
              e[t.id] > 0 &&
              (0, ot.jsxs)(
                "div",
                {
                  children: [
                    (0, ot.jsxs)("div", {
                      children: ["Product Name: ", t.name],
                    }),
                    " ",
                    (0, ot.jsxs)("div", { children: ["Price: $ ", t.price] }),
                    " ",
                    (0, ot.jsxs)("div", {
                      children: [
                        "Quantity :",
                        (0, ot.jsx)("button", {
                          className: "btn btn-pink ",
                          onClick: () => {
                            return (
                              (r = t.id),
                              void (e[r] > 1
                                ? n({ ...e, [r]: e[r] - 1 })
                                : u(r))
                            );
                            var r;
                          },
                          children: "-",
                        }),
                        e[t.id],
                        (0, ot.jsx)("button", {
                          className: "btn btn-pink",
                          onClick: () => {
                            return (r = t.id), void n({ ...e, [r]: e[r] + 1 });
                            var r;
                          },
                          children: "+",
                        }),
                      ],
                    }),
                    (0, ot.jsxs)("div", {
                      children: ["Products Price: $", e[t.id] * t.price],
                    }),
                    (0, ot.jsx)("button", {
                      onClick: () => u(t.id),
                      children: "Delete",
                    }),
                    (0, ot.jsx)("hr", {}),
                  ],
                },
                t.id
              )
          ),
        }),
        (0, ot.jsx)("div", {
          children: (0, ot.jsxs)("h3", { children: ["Order Price : $", s] }),
        }),
        (0, ot.jsx)("div", {
          children: a.email
            ? (0, ot.jsx)("button", {
                onClick: () => {
                  o([
                    ...l,
                    {
                      orderDate: Date(),
                      email: a.email,
                      items: e,
                      total: s,
                      status: "pending",
                    },
                  ]),
                    n({}),
                    i("/orders");
                },
                children: "Place Order",
              })
            : (0, ot.jsx)("button", {
                onClick: () => i("/login"),
                children: "Login to Order",
              }),
        }),
      ],
    });
  }
  function pt() {
    const {
        Details: e,
        setDetails: t,
        Detail: n,
        setDetail: a,
      } = (0, r.useContext)(ht),
      l = ee(),
      [o, i] = (0, r.useState)(),
      u = (0, r.useRef)();
    return (0, ot.jsx)("div", {
      children: (0, ot.jsxs)("div", {
        className: "Row",
        children: [
          (0, ot.jsxs)("div", {
            className: "RegForm",
            children: [
              (0, ot.jsx)("h3", {
                style: { marginBottom: "30px" },
                children: "Registration Form",
              }),
              (0, ot.jsx)("p", { ref: u, children: o }),
              (0, ot.jsx)("p", {
                children: (0, ot.jsx)("input", {
                  type: "text",
                  placeholder: "Enter Name",
                  onChange: (e) => a({ ...n, name: e.target.value }),
                }),
              }),
              (0, ot.jsx)("p", {
                children: (0, ot.jsx)("input", {
                  type: "text",
                  placeholder: "Enter Email address",
                  onChange: (e) => a({ ...n, email: e.target.value }),
                }),
              }),
              (0, ot.jsx)("p", {
                children: (0, ot.jsx)("input", {
                  type: "password",
                  placeholder: "Enter Password",
                  onChange: (e) => a({ ...n, pswd: e.target.value }),
                }),
              }),
              (0, ot.jsx)("p", {
                children: (0, ot.jsx)("button", {
                  onClick: () => {
                    e.find((e) => e.email === n.email)
                      ? (i("User already exists !!"),
                        (u.current.style.color = "red"))
                      : (i(), t([...e, n]), l("/"));
                  },
                  children: "Submit",
                }),
              }),
              (0, ot.jsx)("p", {
                children: (0, ot.jsx)(Ze, {
                  to: "../login",
                  children: "Already a member ? Login Here!",
                }),
              }),
            ],
          }),
          (0, ot.jsx)("div", {
            className: "RegForm",
            children: (0, ot.jsxs)("table", {
              className: "Reg-Table",
              children: [
                (0, ot.jsxs)("tr", {
                  children: [
                    (0, ot.jsx)("th", { children: "Name" }),
                    (0, ot.jsx)("th", { children: "Email" }),
                    (0, ot.jsx)("th", { children: "Password" }),
                    (0, ot.jsx)("th", {}),
                  ],
                }),
                e &&
                  e.map((n, r) =>
                    (0, ot.jsxs)(
                      "tr",
                      {
                        children: [
                          (0, ot.jsxs)("td", { children: [n.name, " "] }),
                          " ",
                          (0, ot.jsxs)("td", { children: [n.email, " "] }),
                          (0, ot.jsxs)("td", { children: [n.pswd, " "] }),
                          (0, ot.jsx)("td", {
                            children: (0, ot.jsx)("button", {
                              onClick: () => {
                                return (
                                  (r = n.email),
                                  void t(e.filter((e) => e.email !== r))
                                );
                                var r;
                              },
                              children: "Delete",
                            }),
                          }),
                        ],
                      },
                      r
                    )
                  ),
              ],
            }),
          }),
        ],
      }),
    });
  }
  const ht = (0, r.createContext)();
  const mt = function () {
      const [e, t] = (0, r.useState)([]),
        [n, a] = (0, r.useState)({}),
        [l, o] = (0, r.useState)({}),
        [i, u] = (0, r.useState)([]);
      return (0, ot.jsx)("div", {
        children: (0, ot.jsx)(Xe, {
          children: (0, ot.jsxs)(ht.Provider, {
            value: {
              Details: e,
              setDetails: t,
              Detail: n,
              setDetail: a,
              products: [
                {
                  id: 1,
                  name: "Dairy Milk",
                  price: 30,
                  image: "https://m.media-amazon.com/images/I/71w7ppkACUL.jpg",
                },
                {
                  id: 2,
                  name: "Munch",
                  price: 60,
                  image:
                    "https://www.indianonshop.com/wp-content/uploads/2020/07/Nestl%C3%A9-Munch-Maha-Home-Pack-72g.jpg",
                },
                {
                  id: 3,
                  name: "Snickers",
                  price: 90,
                  image:
                    "https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/663359-00001.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjg1Mzh8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzVZeTlvTTJFdk9URXhNamcxTnpnM01ETTJOaTVxY0djfDg3ZWEwMGVjYzZkYjE5YjE3NzA3Yzk1MDBkNzA5ZWY0MTM2NzliMTZlZmRjMzg5YWIzOGY0OGFlYjZlODQ5NDU",
                },
                {
                  id: 4,
                  name: "5Star",
                  price: 120,
                  image:
                    "https://images-na.ssl-images-amazon.com/images/I/51AsTzERRQL._SL1045_.jpg",
                },
                {
                  id: 5,
                  name: "KitKat",
                  price: 150,
                  image: "https://pics.drugstore.com/prodimg/417629/900.jpg",
                },
                {
                  id: 6,
                  name: "Perk",
                  price: 180,
                  image:
                    "https://e.saravanaonline.com/6304-large_default/cadbury-perk-chocolate-bar-.jpg",
                },
              ],
              cart: l,
              setCart: o,
              orders: i,
              setOrders: u,
            },
            children: [
              (0, ot.jsx)(it, {}),
              (0, ot.jsxs)(ve, {
                children: [
                  (0, ot.jsx)(me, { index: !0, element: (0, ot.jsx)(ut, {}) }),
                  (0, ot.jsx)(me, {
                    path: "products",
                    element: (0, ot.jsx)(ut, {}),
                  }),
                  (0, ot.jsx)(me, {
                    path: "login",
                    element: (0, ot.jsx)(ct, {}),
                  }),
                  (0, ot.jsx)(me, {
                    path: "register",
                    element: (0, ot.jsx)(pt, {}),
                  }),
                  (0, ot.jsx)(me, {
                    path: "cart",
                    element: (0, ot.jsx)(dt, {}),
                  }),
                  (0, ot.jsx)(me, {
                    path: "orders",
                    element: (0, ot.jsx)(ft, {}),
                  }),
                ],
              }),
              (0, ot.jsx)(st, {}),
            ],
          }),
        }),
      });
    },
    gt = (e) => {
      e &&
        e instanceof Function &&
        n
          .e(453)
          .then(n.bind(n, 453))
          .then((t) => {
            let { getCLS: n, getFID: r, getFCP: a, getLCP: l, getTTFB: o } = t;
            n(e), r(e), a(e), l(e), o(e);
          });
    };
  a
    .createRoot(document.getElementById("root"))
    .render((0, ot.jsx)(r.StrictMode, { children: (0, ot.jsx)(mt, {}) })),
    gt();
})();
//# sourceMappingURL=main.7eac9c1c.js.map

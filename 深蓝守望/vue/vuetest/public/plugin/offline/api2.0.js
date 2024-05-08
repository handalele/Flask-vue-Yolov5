/**
 * Author: yang jian fei
 * Email: 1294485765@qq.com
 * Created Date: Monday, August 8th 2022, 6:55:12 pm
 * Modified By: yang jian fei
 * Desc: desc
 * Copyright (c) 2022 黑发
 */


window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20220804"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20220804"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20220804"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20220804"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20220804"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20220804"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20220804"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20220804"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20220804"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20220804"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20220804"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "Yp57V71dkOPiXjiN8VdcFRsVELzlVNKK";
(function () {
    function aa(a) {
        throw a;
    }
    var j = void 0,
        o = !0,
        p = null,
        q = !1;

    function t() {
        return function () { }
    }

    function da(a) {
        return function (b) {
            this[a] = b
        }
    }

    function v(a) {
        return function () {
            return this[a]
        }
    }

    function ea(a) {
        return function () {
            return a
        }
    }
    var fa, ga = [];

    function ha(a) {
        return function () {
            return ga[a].apply(this, arguments)
        }
    }

    function ia(a, b) {
        return ga[a] = b
    }
    var ja, x = ja = x || {
        version: "1.3.4"
    };
    x.ba = "$BAIDU$";
    window[x.ba] = window[x.ba] || {};
    x.object = x.object || {};
    x.extend = x.object.extend = function (a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    x.K = x.K || {};
    x.K.$ = function (a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : p
    };
    x.$ = x.Ec = x.K.$;
    x.K.U = function (a) {
        a = x.K.$(a);
        if (a === p) return a;
        a.style.display = "none";
        return a
    };
    x.U = x.K.U;
    x.lang = x.lang || {};
    x.lang.ug = function (a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    x.ug = x.lang.ug;
    x.K.Wj = function (a) {
        return x.lang.ug(a) ? document.getElementById(a) : a
    };
    x.Wj = x.K.Wj;
    x.K.getElementsByClassName = function (a, b) {
        var c;
        if (a.getElementsByClassName) c = a.getElementsByClassName(b);
        else {
            var d = a;
            d == p && (d = document);
            c = [];
            var d = d.getElementsByTagName("*"),
                e = d.length,
                f = RegExp("(^|\\s)" + b + "(\\s|$)"),
                g, i;
            for (i = g = 0; g < e; g++) f.test(d[g].className) && (c[i] = d[g], i++)
        }
        return c
    };
    x.getElementsByClassName = x.K.getElementsByClassName;
    x.K.contains = function (a, b) {
        var c = x.K.Wj,
            a = c(a),
            b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    };
    x.da = x.da || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (x.da.ma = x.ma = document.documentMode || +RegExp.$1);
    var ka = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > x.da.ma ? (ka["for"] = "htmlFor", ka["class"] = "className") : (ka.htmlFor = "for", ka.className = "class");
    x.K.VG = ka;
    x.K.HF = function (a, b, c) {
        a = x.K.$(a);
        if (a === p) return a;
        if ("style" == b) a.style.cssText = c;
        else {
            b = x.K.VG[b] || b;
            a.setAttribute(b, c)
        }
        return a
    };
    x.HF = x.K.HF;
    x.K.IF = function (a, b) {
        a = x.K.$(a);
        if (a === p) return a;
        for (var c in b) x.K.HF(a, c, b[c]);
        return a
    };
    x.IF = x.K.IF;
    x.Zk = x.Zk || {};
    (function () {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        x.Zk.trim = function (b) {
            return ("" + b).replace(a, "")
        }
    })();
    x.trim = x.Zk.trim;
    x.Zk.bp = function (a, b) {
        var a = "" + a,
            c = Array.prototype.slice.call(arguments, 1),
            d = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== p && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function (a, b) {
                var g = c[b];
                "[object Function]" == d.call(g) && (g = g(b));
                return "undefined" == typeof g ? "" : g
            })
        }
        return a
    };
    x.bp = x.Zk.bp;
    x.K.Tb = function (a, b) {
        a = x.K.$(a);
        if (a === p) return a;
        for (var c = a.className.split(/\s+/), d = b.split(/\s+/), e, f = d.length, g, i = 0; i < f; ++i) {
            g = 0;
            for (e = c.length; g < e; ++g)
                if (c[g] == d[i]) {
                    c.splice(g, 1);
                    break
                }
        }
        a.className = c.join(" ");
        return a
    };
    x.Tb = x.K.Tb;
    x.K.$x = function (a, b, c) {
        a = x.K.$(a);
        if (a === p) return a;
        var d;
        if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
        else {
            d = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                d.selectNodeContents(a);
                d.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                d[b ? "setStartBefore" : "setEndAfter"](a);
                d.collapse(b)
            }
            d.insertNode(d.createContextualFragment(c))
        }
        return a
    };
    x.$x = x.K.$x;
    x.K.show = function (a) {
        a = x.K.$(a);
        if (a === p) return a;
        a.style.display = "";
        return a
    };
    x.show = x.K.show;
    x.K.ZD = function (a) {
        a = x.K.$(a);
        return a === p ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
    };
    x.K.Ta = function (a, b) {
        a = x.K.$(a);
        if (a === p) return a;
        for (var c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; f < g; f++) e.indexOf(" " + c[f] + " ") < 0 && (d = d + (" " + c[f]));
        a.className = d;
        return a
    };
    x.Ta = x.K.Ta;
    x.K.WB = x.K.WB || {};
    x.K.Ul = x.K.Ul || [];
    x.K.Ul.filter = function (a, b, c) {
        for (var d = 0, e = x.K.Ul, f; f = e[d]; d++)
            if (f = f[c]) b = f(a, b);
        return b
    };
    x.Zk.QO = function (a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function (a) {
            return a.charAt(1).toUpperCase()
        })
    };
    x.K.b0 = function (a) {
        x.K.nt(a, "expand") ? x.K.Tb(a, "expand") : x.K.Ta(a, "expand")
    };
    x.K.nt = function (a) {
        if (arguments.length <= 0 || typeof a === "function") return this;
        if (this.size() <= 0) return q;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
            b = a.split(" "),
            c;
        x.forEach(this, function (a) {
            for (var a = a.className, e = 0; e < b.length; e++)
                if (!~(" " + a + " ").indexOf(" " + b[e] + " ")) {
                    c = q;
                    return
                }
            c !== q && (c = o)
        });
        return c
    };
    x.K.wj = function (a, b) {
        var c = x.K,
            a = c.$(a);
        if (a === p) return a;
        var b = x.Zk.QO(b),
            d = a.style[b];
        if (!d) var e = c.WB[b],
            d = a.currentStyle || (x.da.ma ? a.style : getComputedStyle(a, p)),
            d = e && e.get ? e.get(a, d) : d[e || b];
        if (e = c.Ul) d = e.filter(b, d, "get");
        return d
    };
    x.wj = x.K.wj;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.opera = +RegExp.$1);
    x.da.FM = /webkit/i.test(navigator.userAgent);
    x.da.KY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    x.da.LE = "CSS1Compat" == document.compatMode;
    x.K.ia = function (a) {
        a = x.K.$(a);
        if (a === p) return a;
        var b = x.K.ZD(a),
            c = x.da,
            d = x.K.wj;
        c.KY > 0 && b.getBoxObjectFor && d(a, "position");
        var e = {
            left: 0,
            top: 0
        },
            f;
        if (a == (c.ma && !c.LE ? b.body : b.documentElement)) return e;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            e.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            e.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            e.left = e.left - b.documentElement.clientLeft;
            e.top = e.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(d(a, "borderLeftWidth"));
            d = parseInt(d(a, "borderTopWidth"));
            if (c.ma && !c.LE) {
                e.left = e.left - (isNaN(b) ? 2 : b);
                e.top = e.top - (isNaN(d) ? 2 : d)
            }
        } else {
            f = a;
            do {
                e.left = e.left + f.offsetLeft;
                e.top = e.top + f.offsetTop;
                if (c.FM > 0 && d(f, "position") == "fixed") {
                    e.left = e.left + b.body.scrollLeft;
                    e.top = e.top + b.body.scrollTop;
                    break
                }
                f = f.offsetParent
            } while (f && f != a);
            if (c.opera > 0 || c.FM > 0 && d(a, "position") == "absolute") e.top = e.top - b.body.offsetTop;
            for (f = a.offsetParent; f && f != b.body;) {
                e.left = e.left - f.scrollLeft;
                if (!c.opera || f.tagName != "TR") e.top = e.top - f.scrollTop;
                f = f.offsetParent
            }
        }
        return e
    };
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.Te = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (x.da.X1 = o);
    var la = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (x.da.BF = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.Tw = +RegExp.$1);
    x.jc = x.jc || {};
    x.jc.Fb = function (a, b) {
        var c, d, e = a.length;
        if ("function" == typeof b)
            for (d = 0; d < e; d++) {
                c = a[d];
                c = b.call(a, c, d);
                if (c === q) break
            }
        return a
    };
    x.Fb = x.jc.Fb;
    x.lang.ba = function () {
        return "TANGRAM__" + (window[x.ba]._counter++).toString(36)
    };
    window[x.ba]._counter = window[x.ba]._counter || 1;
    window[x.ba]._instances = window[x.ba]._instances || {};
    x.lang.Dt = function (a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    };
    x.lang.Da = function (a) {
        this.ba = a || x.lang.ba();
        window[x.ba]._instances[this.ba] = this
    };
    window[x.ba]._instances = window[x.ba]._instances || {};
    x.lang.Da.prototype.mi = ha(0);
    x.lang.Da.prototype.toString = function () {
        return "[object " + (this.VQ || "Object") + "]"
    };
    x.lang.vz = function (a, b) {
        this.type = a;
        this.returnValue = o;
        this.target = b || p;
        this.currentTarget = p
    };
    x.lang.Da.prototype.addEventListener = function (a, b, c) {
        if (x.lang.Dt(b)) {
            !b.Nj && (b.Nj = {});
            !this.Mi && (this.Mi = {});
            var d = this.Mi,
                e;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                e = b.ot = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof d[a] != "object" && (d[a] = {});
            typeof b.Nj[a] != "object" && (b.Nj[a] = {});
            e = e || x.lang.ba();
            !b.Nj[a].ot && (b.Nj[a].ot = e);
            d[a][e] = b
        }
    };
    x.lang.Da.prototype.removeEventListener = function (a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (x.lang.Dt(b)) {
            if (!b.Nj || !b.Nj[a]) return;
            b = b.Nj[a].ot
        } else if (!x.lang.ug(b)) return;
        !this.Mi && (this.Mi = {});
        var c = this.Mi;
        c[a] && c[a][b] && delete c[a][b]
    };
    x.lang.Da.prototype.dispatchEvent = function (a, b) {
        x.lang.ug(a) && (a = new x.lang.vz(a));
        !this.Mi && (this.Mi = {});
        var b = b || {},
            c;
        for (c in b) a[c] = b[c];
        var d = this.Mi,
            e = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        e.indexOf("on") != 0 && (e = "on" + e);
        x.lang.Dt(this[e]) && this[e].apply(this, arguments);
        if (typeof d[e] == "object")
            for (c in d[e]) d[e][c].apply(this, arguments);
        return a.returnValue
    };
    x.lang.ua = function (a, b, c) {
        var d, e, f = a.prototype;
        e = new Function;
        e.prototype = b.prototype;
        e = a.prototype = new e;
        for (d in f) e[d] = f[d];
        a.prototype.constructor = a;
        a.T_ = b.prototype;
        if ("string" == typeof c) e.VQ = c
    };
    x.ua = x.lang.ua;
    x.lang.Lc = function (a) {
        return window[x.ba]._instances[a] || p
    };
    x.platform = x.platform || {};
    x.platform.yM = /macintosh/i.test(navigator.userAgent);
    x.platform.K3 = /MicroMessenger/i.test(navigator.userAgent);
    x.platform.GM = /windows/i.test(navigator.userAgent);
    x.platform.SY = /x11/i.test(navigator.userAgent);
    x.platform.Sm = /android/i.test(navigator.userAgent);
    /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (x.platform.iK = x.iK = RegExp.$1);
    x.platform.MY = /ipad/i.test(navigator.userAgent);
    x.platform.HE = /iphone/i.test(navigator.userAgent);

    function ma(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++) a.touches.push({
                clientX: b.touches[c].clientX,
                clientY: b.touches[c].clientY,
                screenX: b.touches[c].screenX,
                screenY: b.touches[c].screenY,
                pageX: b.touches[c].pageX,
                pageY: b.touches[c].pageY,
                target: b.touches[c].target,
                identifier: b.touches[c].identifier
            })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({
                clientX: b.changedTouches[c].clientX,
                clientY: b.changedTouches[c].clientY,
                screenX: b.changedTouches[c].screenX,
                screenY: b.changedTouches[c].screenY,
                pageX: b.changedTouches[c].pageX,
                pageY: b.changedTouches[c].pageY,
                target: b.changedTouches[c].target,
                identifier: b.changedTouches[c].identifier
            })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({
                clientX: b.targetTouches[c].clientX,
                clientY: b.targetTouches[c].clientY,
                screenX: b.targetTouches[c].screenX,
                screenY: b.targetTouches[c].screenY,
                pageX: b.targetTouches[c].pageX,
                pageY: b.targetTouches[c].pageY,
                target: b.targetTouches[c].target,
                identifier: b.targetTouches[c].identifier
            })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    x.lang.lx = function (a) {
        var b = window[x.ba];
        b.eT && delete b.eT[a]
    };
    x.event = {};
    x.M = x.event.M = function (a, b, c) {
        if (!(a = x.$(a))) return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    };
    x.cd = x.event.cd = function (a, b, c) {
        if (!(a = x.$(a))) return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    };
    x.K.nt = function (a, b) {
        if (!a || !a.className || typeof a.className != "string") return q;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (d) {
            return q
        }
        return c > -1
    };
    x.nL = function () {
        function a(a) {
            document.addEventListener && (this.element = a, this.qL = this.Gk ? "touchstart" : "mousedown", this.GD = this.Gk ? "touchmove" : "mousemove", this.FD = this.Gk ? "touchend" : "mouseup", this.th = q, this.tu = this.su = 0, this.element.addEventListener(this.qL, this, q), ja.M(this.element, "mousedown", t()), this.handleEvent(p))
        }
        a.prototype = {
            Gk: "ontouchstart" in window || "createTouch" in document,
            start: function (a) {
                na(a);
                this.th = q;
                this.su = this.Gk ? a.touches[0].clientX : a.clientX;
                this.tu = this.Gk ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.GD, this, q);
                this.element.addEventListener(this.FD, this, q)
            },
            move: function (a) {
                oa(a);
                var c = this.Gk ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.Gk ? a.touches[0].clientX : a.clientX) - this.su) || 10 < Math.abs(c - this.tu)) this.th = o
            },
            end: function (a) {
                oa(a);
                this.th || (a = document.createEvent("Event"), a.initEvent("tap", q, o), this.element.dispatchEvent(a));
                this.element.removeEventListener(this.GD, this, q);
                this.element.removeEventListener(this.FD, this, q)
            },
            handleEvent: function (a) {
                if (a) switch (a.type) {
                    case this.qL:
                        this.start(a);
                        break;
                    case this.GD:
                        this.move(a);
                        break;
                    case this.FD:
                        this.end(a)
                }
            }
        };
        return function (b) {
            return new a(b)
        }
    }();
    var B = window.BMap || {};
    B.version = "2.0";

    function pa(a, b) {
        if (navigator.cookieEnabled) {
            var c = new Date;
            c.setTime(c.getTime() + 2592E6);
            document.cookie = a + "=" + escape(b) + ";expires=" + c.toGMTString()
        } else localStorage ? localStorage.setItem(a, b) : sessionStorage && sessionStorage.setItem(a, b)
    }
    B.dV = 0.34 > Math.random();
    0 <= B.version.indexOf("#") && (B.version = "2.0");
    B.Pr = [];
    B.Xe = function (a) {
        this.Pr.push(a)
    };
    B.Fr = [];
    B.bn = function (a) {
        this.Fr.push(a)
    };
    B.B0 = function () {
        var a = +new Date,
            b = H("script", {
                type: "text/javascript",
                async: ""
            });
        b.charset = "utf-8";
        b.src = "https://dlswbr.baidu.com/heicha/mw/abclite-2063-s.js?_t=" + a;
        b.onload = function () {
            window.___abvk && pa("SECKEY_ABVK", window.___abvk)
        };
        window.__abbaidu_2063_cb = function (a) {
            a = JSON.parse(a);
            pa("BMAP_SECKEY", a.data)
        };
        b.addEventListener ? b.addEventListener("load", function (a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, q) : b.attachEvent && b.attachEvent("onreadystatechange", function () {
            var a = window.event.srcElement;
            a && (a.readyState == "loaded" || a.readyState == "complete") && a.parentNode.removeChild(a)
        });
        setTimeout(function () {
            document.getElementsByTagName("head")[0].appendChild(b);
            b = p
        }, 1)
    };
    B.Jw = B.apiLoad || function (a) {
        if (B.version && B.version >= 1.5) {
            var b = B.oc + "?qt=verify&v=2.1&ak=" + qa;
            a && (b = b + "&fromPanorama=" + a);
            ra(b, function (a) {
                if (a && a.error !== 0) {
                    B = p;
                    var b = "\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                    a.error && sa[a.error] && (b = sa[a.error] + "\u8be6\u60c5\u67e5\u770b\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002");
                    alert(b);
                    if (typeof map !== "undefined" && typeof map.Ha === "function") {
                        map.Ha().innerHTML = "";
                        map.Mi = {}
                    }
                }
            })
        }
    };
    var qa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = p;
    var ta = window.BMap_loadScriptTime,
        ua = (new Date).getTime(),
        va = p,
        wa = o,
        xa = 5042,
        ya = 5002,
        za = 5003,
        Aa = "load_mapclick",
        Ba = 5038,
        Ca = 5041,
        Ea = 5047,
        Fa = 5036,
        Ga = 5039,
        Ha = 5037,
        Ia = 5040,
        Ja = 5011,
        Ka = 7E3,
        sa = {
            101: "\u60a8\u6240\u4f7f\u7528\u7684\u5bc6\u94a5ak\u6709\u95ee\u9898\uff0c\u4e0d\u652f\u6301jsapi\u670d\u52a1\uff0c\u53ef\u4ee5\u8bbf\u95ee\u8be5\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u5bc6\u94a5\u3002",
            102: "MCODE\u53c2\u6570\u4e0d\u5b58\u5728\uff0cmobile\u7c7b\u578bMCODE\u53c2\u6570\u5fc5\u9700\u3002",
            200: "APP\u4e0d\u5b58\u5728\uff0cAK\u6709\u8bef\u8bf7\u68c0\u67e5\u518d\u91cd\u8bd5\u3002",
            201: "APP\u88ab\u60a8\u7981\u7528\u5566\u3002",
            202: "APP\u88ab\u7ba1\u7406\u5458\u5220\u9664\u5566\u3002",
            203: "APP\u7c7b\u578b\u9519\u8bef\u3002",
            210: "APP IP\u6821\u9a8c\u5931\u8d25\u3002",
            220: "APP Referer\u6821\u9a8c\u5931\u8d25\u3002\u8bf7\u68c0\u67e5\u8be5ak\u8bbe\u7f6e\u7684\u767d\u540d\u5355\u4e0e\u8bbf\u95ee\u6240\u6709\u7684\u57df\u540d\u662f\u5426\u4e00\u81f4\u3002",
            230: "APP Mcode\u7801\u6821\u9a8c\u5931\u8d25\u3002",
            240: "APP\u670d\u52a1\u88ab\u7981\u7528\u4e86\u3002",
            250: "\u8be5\u7528\u6237\u4e0d\u5b58\u5728...",
            251: "\u8be5\u7528\u6237\u88ab\u81ea\u5df1\u5220\u9664\u5566\u3002",
            252: "\u8be5\u7528\u6237\u88ab\u7ba1\u7406\u5458\u5220\u9664\u5566\u3002",
            260: "\u60a8\u6240\u4f7f\u7528\u7684\u5bc6\u94a5AK\u4e0d\u5305\u542b\u8be5\u670d\u52a1\u5462\uff0c",
            261: "\u60a8\u6240\u4f7f\u7528\u7684\u5bc6\u94a5AK\u7684\u8be5\u670d\u52a1\u88ab\u7981\u7528\u5566\uff0c",
            401: "\u60a8\u6240\u4f7f\u7528\u7684AK\u5e76\u53d1\u8d85\u9650\u4e86\uff0c",
            302: "\u60a8\u6240\u4f7f\u7528\u7684AK\u5929\u914d\u989d\u8d85\u9650\u4e86\uff0c"
        };
    var La = 0;
    window.BMAP_COORD_BD09 = 5;
    window.BMAP_COORD_GCJ02 = 3;

    function Na(a, b) {
        if (a = x.$(a)) {
            var c = this;
            x.lang.Da.call(c);
            b = b || {};
            c.B = {
                yk: b.fixedZoomCenter || q,
                BC: 200,
                Gb: o,
                tx: q,
                yD: o,
                Zo: o,
                $o: b.enableWheelZoom || q,
                lL: o,
                AD: o,
                wm: o,
                Ss: o,
                xm: o,
                Xo: b.enable3DBuilding || q,
                Hc: 25,
                M0: 240,
                fV: 450,
                Xb: I.Xb,
                Id: I.Id,
                dy: !!b.dy,
                fc: Math.round(b.minZoom) || 1,
                Zb: Math.round(b.maxZoom) || 19,
                xb: b.mapType || Oa,
                B4: q,
                gL: b.drawer || La,
                sx: o,
                px: 500,
                TW: b.enableHighResolution !== q,
                pj: b.enableMapClick !== q,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                lG: 99,
                ze: b.mapStyle || p,
                $Y: b.logoControl === q ? q : o,
                xV: [],
                Nw: b.beforeClickIcon || p,
                uD: b.enableBizAuthLogo === q ? q : o,
                ax: b.coordsType || 5
            };
            window.GCJMAP = this;
            c.B.ze && (this.BY(c.B.ze.controls), this.tM(c.B.ze.geotableId));
            c.B.ze && c.B.ze.styleId && c.u3(c.B.ze.styleId);
            c.B.om = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.B.Ss = b.enableAutoResize);
            b.enableStreetEntrance === q && (c.B.xm = b.enableStreetEntrance);
            b.enableDeepZoom === q && (c.B.lL = b.enableDeepZoom);
            var d = c.B.xV;
            if (J())
                for (var e = 0, f = d.length; e < f; e++)
                    if (x.da[d[e]]) {
                        c.B.devicePixelRatio = 1;
                        break
                    }
            d = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            e = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || d && e) c.B.lG = 99;
            c.Ua = a;
            c.PB(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.va());
            b.size && this.Ce(b.size);
            d = c.vb();
            c.width = d.width;
            c.height = d.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.Ae = c.platform.firstChild;
            c.Ae.style.width = c.width + "px";
            c.Ae.style.height = c.height + "px";
            c.Zd = {};
            c.re = new K(0, 0);
            c.dc = new K(0, 0);
            c.Na = 3;
            c.Mc = 0;
            c.TC = p;
            c.SC = p;
            c.Sb = "";
            c.Uw = "";
            c.Sh = {};
            c.Sh.custom = {};
            c.Sa = 0;
            b.useWebGL === q && Pa(q);
            c.P = new Qa(a, {
                of: "api",
                jT: o
            });
            c.P.U();
            c.P.Ry(c);
            b = b || {};
            d = c.xb = c.B.xb;
            c.Nd = d.Hm();
            c.B.xb && this.oa().OF(this);
            d === Ra && Ta(ya);
            d === Ua && Ta(za);
            d = c.B;
            d.hP = Math.round(b.minZoom);
            d.gP = Math.round(b.maxZoom);
            c.gv();
            c.R = {
                Ic: q,
                kc: 0,
                Cp: 0,
                KM: 0,
                O3: 0,
                tC: q,
                tF: -1,
                Re: []
            };
            c.platform.style.cursor = c.B.Xb;
            for (e = 0; e < B.Pr.length; e++) B.Pr[e](c);
            c.R.tF = e;
            c.ca();
            L.load("map", function () {
                c.Ab()
            });
            c.B.pj && (setTimeout(function () {
                Ta(Aa)
            }, 1E3), L.load("mapclick", function () {
                window.MPC_Mgr = window.MPC_Mgr || {};
                window.MPC_Mgr[c.ba] = new Va(c)
            }, o));
            Xa() && L.load("oppc", function () {
                c.Nz()
            });
            J() && L.load("opmb", function () {
                c.Nz()
            });
            a = p;
            c.cC = []
        }
    }
    x.lang.ua(Na, x.lang.Da, "Map");
    x.extend(Na.prototype, {
        va: function () {
            var a = H("div"),
                b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = H("div", {
                "class": "BMap_mask"
            }),
                c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        PB: function (a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== Ya(a).position && (b.position = "relative", b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ca: function () {
            var a = this;
            a.Co = function () {
                var b = a.vb();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new M(a.width, a.height),
                        d = new N("onbeforeresize");
                    d.size = c;
                    a.dispatchEvent(d);
                    a.ok((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.Ae.style.width = (a.width = b.width) + "px";
                    a.Ae.style.height = (a.height = b.height) + "px";
                    c = new N("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            };
            a.B.Ss && (a.R.fm = setInterval(a.Co, 80))
        },
        ok: function (a, b, c, d) {
            var e = this.oa().yc(this.ga()),
                f = this.Nd,
                g = o;
            c && O.GE(c) && (this.re = new K(c.lng, c.lat), g = q);
            if (c = c && d ? f.Jk(c, this.Sb) : this.dc)
                if (this.dc = new K(c.lng + a * e, c.lat - b * e), (a = f.rh(this.dc, this.Sb)) && g) this.re = a
        },
        Ig: function (a, b) {
            if (Za(a) && (this.gv(), this.dispatchEvent(new N("onzoomstart")), a = this.fo(a).zoom, a !== this.Na)) {
                this.Mc = this.Na;
                this.Na = a;
                var c;
                b ? c = new K($a(cp, me).lng, $a(b, me).lat) : this.lh() && (c = this.lh().ia());
                c && (c = this.Cc(c, this.Mc), this.ok(this.width / 2 - c.x, this.height / 2 - c.y, this.Rb(c, this.Mc), o));
                this.dispatchEvent(new N("onzoomstartcode"))
            }
        },
        Oc: function (a) {
            this.Ig(a)
        },
        pG: function (a) {
            this.Ig(this.Na + 1, a)
        },
        qG: function (a) {
            this.Ig(this.Na - 1, a)
        },
        Ai: function (a) {
            if (a instanceof O || a instanceof K) a = $a(a, this), this.dc = this.Nd.Jk(a, this.Sb), this.re = K.GE(a) ? new K(a.lng, a.lat) : this.Nd.rh(this.dc, this.Sb)
        },
        zg: function (a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.ok(-a, -b)
        },
        js: function (a) {
            a && ab(a.Ie) && (a.Ie(this), this.dispatchEvent(new N("onaddcontrol", a)))
        },
        WN: function (a) {
            a && ab(a.remove) && (a.remove(), this.dispatchEvent(new N("onremovecontrol", a)))
        },
        Fo: function (a) {
            a && ab(a.ra) && (a.ra(this), this.dispatchEvent(new N("onaddcontextmenu", a)))
        },
        Op: function (a) {
            a && ab(a.remove) && (this.dispatchEvent(new N("onremovecontextmenu", a)), a.remove())
        },
        Ka: function (a) {
            a && ab(a.Ie) && (a.Ie(this), this.dispatchEvent(new N("onaddoverlay", a)))
        },
        Ub: function (a) {
            a && ab(a.remove) && (a.remove(), this.dispatchEvent(new N("onremoveoverlay", a)))
        },
        CK: function () {
            this.dispatchEvent(new N("onclearoverlays"))
        },
        $g: function (a) {
            a && this.dispatchEvent(new N("onaddtilelayer", a))
        },
        Ah: function (a) {
            a && this.dispatchEvent(new N("onremovetilelayer", a))
        },
        Fg: function (a) {
            if (this.xb !== a) {
                var b = new N("onsetmaptype");
                b.s4 = this.xb;
                this.xb = this.B.xb = a;
                this.Nd = this.xb.Hm();
                this.ok(0, 0, this.wc(), o);
                this.xb.OF(this);
                this.gv();
                var c = this.fo(this.ga()).zoom;
                this.Ig(c);
                this.dispatchEvent(b);
                b = new N("onmaptypechange");
                b.Na = c;
                b.xb = a;
                this.dispatchEvent(b);
                (a === bb || a === Ua) && Ta(za)
            }
        },
        Xf: function (a) {
            var b = this;
            if (a instanceof O || a instanceof K) a = new K($a(a, b).lng, $a(a, b).lat), b.Ai(a, {
                noAnimation: o
            });
            else if (cb(a))
                if (b.xb === Ra) {
                    var c = I.xC[a];
                    c && (pt = c.m, b.Xf(pt))
                } else {
                    var d = this.bI();
                    d.PF(function (c) {
                        0 === d.Im() && 2 === d.Ga.result.type && (b.Xf(c.Ek(0).point), Ra.Ak(a) && b.JF(a))
                    });
                    d.search(a, {
                        log: "center"
                    })
                }
        },
        Gd: function (a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            B.Ln("cus.fire", "time", {
                z_loadscripttime: ua - ta
            });
            var c = this;
            if (cb(a))
                if (c.xb === Ra) {
                    var d = I.xC[a];
                    d && (pt = d.m, c.Gd(pt, b))
                } else {
                    var e = c.bI();
                    e.PF(function (d) {
                        if (0 === e.Im() && (2 === e.Ga.result.type || 11 === e.Ga.result.type)) {
                            var d = d.Ek(0).point,
                                f = b || Q.xx(e.Ga.content.level, c);
                            c.Gd(d, f);
                            Ra.Ak(a) && c.JF(a)
                        }
                    });
                    e.search(a, {
                        log: "center"
                    })
                }
            else if ((a instanceof K || a instanceof O) && b) {
                var b = c.fo(b).zoom,
                    f = $a(a, c);
                c.Mc = c.Na || b;
                c.Na = b;
                d = c.re;
                c.re = new K(f.lng, f.lat);
                c.dc = c.Nd.Jk(c.re, c.Sb);
                c.TC = c.TC || c.Na;
                c.SC = c.SC || c.re;
                var g = new N("onload"),
                    i = new N("onloadcode");
                g.point = new K(f.lng, f.lat);
                g.pixel = c.Cc(c.re, c.Na);
                g.zoom = b;
                c.loaded || (c.loaded = o, c.dispatchEvent(g), va || (va = db()));
                c.dispatchEvent(i);
                f = new N("onmoveend");
                f.EH = "centerAndZoom";
                d.ab(c.re) || c.dispatchEvent(f);
                c.dispatchEvent(new N("onmoveend"));
                c.Mc !== c.Na && (d = new N("onzoomend"), d.EH = "centerAndZoom", c.dispatchEvent(d));
                c.B.Xo && c.Xo()
            }
        },
        bI: function () {
            this.R.UM || (this.R.UM = new eb(1));
            return this.R.UM
        },
        reset: function () {
            this.Gd(this.SC, this.TC, o)
        },
        enableDragging: function () {
            this.B.Gb = o
        },
        disableDragging: function () {
            this.B.Gb = q
        },
        enableInertialDragging: function () {
            this.B.sx = o
        },
        disableInertialDragging: function () {
            this.B.sx = q
        },
        enableScrollWheelZoom: function () {
            this.B.$o = o
        },
        disableScrollWheelZoom: function () {
            this.B.$o = q
        },
        enableContinuousZoom: function () {
            this.B.Zo = o
        },
        disableContinuousZoom: function () {
            this.B.Zo = q
        },
        enableDoubleClickZoom: function () {
            this.B.yD = o
        },
        disableDoubleClickZoom: function () {
            this.B.yD = q
        },
        enableKeyboard: function () {
            this.B.tx = o
        },
        disableKeyboard: function () {
            this.B.tx = q
        },
        enablePinchToZoom: function () {
            this.B.wm = o
        },
        disablePinchToZoom: function () {
            this.B.wm = q
        },
        enableAutoResize: function () {
            this.B.Ss = o;
            this.Co();
            this.R.fm || (this.R.fm = setInterval(this.Co, 80))
        },
        disableAutoResize: function () {
            this.B.Ss = q;
            this.R.fm && (clearInterval(this.R.fm), this.R.fm = p)
        },
        enableBizAuthLogo: function () {
            this.B.uD = o;
            this.Ow && this.Ow.show()
        },
        disableBizAuthLogo: function () {
            this.B.uD = q;
            this.Ow && this.Ow.U()
        },
        Xo: function () {
            this.B.Xo = o;
            this.Tn || (this.Tn = new fb({
                uL: o
            }), this.$g(this.Tn))
        },
        DW: function () {
            this.B.Xo = q;
            this.Tn && (this.Ah(this.Tn), this.Tn = p, delete this.Tn)
        },
        vb: function () {
            return this.Ds && this.Ds instanceof M ? new M(this.Ds.width, this.Ds.height) : new M(this.Ua.clientWidth, this.Ua.clientHeight)
        },
        Ce: function (a) {
            a && a instanceof M ? (this.Ds = a, this.Ua.style.width = a.width + "px", this.Ua.style.height = a.height + "px") : this.Ds = p
        },
        wc: v("re"),
        pc: function () {
            return gb(this.re, this)
        },
        ga: v("Na"),
        SV: function () {
            this.Co()
        },
        fo: function (a) {
            var b = this.B.fc,
                c = this.B.Zb,
                d = q,
                a = Math.round(a);
            a < b && (d = o, a = b);
            a > c && (d = o, a = c);
            return {
                zoom: a,
                HD: d
            }
        },
        Ha: v("Ua"),
        Cc: function (a, b) {
            b = b || this.ga();
            return this.Nd.Mp(a, b, this.dc, this.vb(), this.Sb)
        },
        Mp: function (a, b) {
            b = b || this.ga();
            if (a && (a instanceof O || a instanceof K)) return a = $a(a, this), this.Nd.Mp(a, b, this.dc, this.vb(), this.Sb)
        },
        Rb: function (a, b) {
            b = b || this.ga();
            return this.Nd.Ag(a, b, this.dc, this.vb(), this.Sb)
        },
        Ag: function (a, b) {
            b = b || this.ga();
            return gb(this.Rb(a, b), this)
        },
        We: function (a, b) {
            if (a) {
                var a = $a(a, this),
                    c = this.Cc(new K(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        KT: function (a, b) {
            if (a) {
                var c = new S(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.Rb(c, b)
            }
        },
        IN: function (a, b) {
            if (a) {
                var c = new S(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.Ag(c, b)
            }
        },
        pointToPixelFor3D: function (a, b) {
            var c = map.Sb;
            this.xb === Ra && c && hb.IK(a, this, b)
        },
        m4: function (a, b) {
            var c = map.Sb;
            this.xb === Ra && c && hb.HK(a, this, b)
        },
        n4: function (a, b) {
            var c = this,
                d = map.Sb;
            c.xb === Ra && d && hb.IK(a, c, function (a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        k4: function (a, b) {
            var c = map.Sb;
            this.xb === Ra && c && (a.x += this.offsetX, a.y += this.offsetY, hb.HK(a, this, b))
        },
        Kd: function (a) {
            if (!this.by()) return new ib;
            var b = a || {},
                a = b.margins || [0, 0, 0, 0],
                c = b.zoom || p,
                b = this.Ag({
                    x: a[3],
                    y: this.height - a[2]
                }, c),
                a = this.Ag({
                    x: this.width - a[1],
                    y: a[0]
                }, c);
            return new ib(b, a)
        },
        by: function () {
            return !!this.loaded
        },
        lS: function (a, b) {
            for (var c = this.oa(), d = b.margins || [10, 10, 10, 10], e = b.zoomFactor || 0, f = d[1] + d[3], d = d[0] + d[2], g = c.hp(), i = c = c.Dm(); i >= g; i--) {
                var k = this.oa().yc(i);
                if (a.dG().lng / k < this.width - f && a.dG().lat / k < this.height - d) break
            }
            i += e;
            i < g && (i = g);
            i > c && (i = c);
            return i
        },
        mt: function (a, b) {
            var c = {
                center: this.wc(),
                zoom: this.ga()
            };
            if (!a || !a instanceof ib && 0 === a.length || a instanceof ib && a.Bj()) return c;
            var d = [];
            a instanceof ib ? (d.push($a(a.pf(), this)), d.push($a(a.xe(), this))) : d = a.slice(0);
            for (var b = b || {}, e = [], f = 0, g = d.length; f < g; f++) e.push(this.Nd.Jk($a(d[f], this), this.Sb));
            d = new ib;
            for (f = e.length - 1; 0 <= f; f--) d.extend(e[f]);
            if (d.Bj()) return c;
            c = d.pc();
            e = this.lS(d, b);
            b.margins && (d = b.margins, f = (d[1] - d[3]) / 2, d = (d[0] - d[2]) / 2, g = this.oa().yc(e), b.offset && (f = b.offset.width, d = b.offset.height), c.lng += g * f, c.lat += g * d);
            c = this.Nd.rh(c, this.Sb);
            return {
                center: gb(c, this),
                zoom: e
            }
        },
        Dh: function (a, b) {
            var c;
            c = a && a.center ? a : this.mt(a, b);
            var b = b || {},
                d = b.delay || 200;
            if (c.zoom === this.Na && b.enableAnimation !== q) {
                var e = this;
                setTimeout(function () {
                    e.Ai(c.center, {
                        duration: 210
                    })
                }, d)
            } else this.Gd(c.center, c.zoom)
        },
        Rf: v("Zd"),
        lh: function () {
            return this.R.ob && this.R.ob.Va() ? this.R.ob : p
        },
        getDistance: function (a, b) {
            if (a && b) {
                if (a.ab(b)) return 0;
                var a = $a(a, this),
                    b = $a(b, this),
                    c = 0,
                    c = T.fp(a, b);
                if (c === p || c === j) c = 0;
                return c
            }
        },
        Mx: function () {
            var a = [],
                b = this.wa,
                c = this.Fe;
            if (b)
                for (var d in b) b[d] instanceof jb && a.push(b[d]);
            if (c) {
                d = 0;
                for (b = c.length; d < b; d++) a.push(c[d])
            }
            return a
        },
        oa: function () {
            this.xb.OF(this);
            return this.xb
        },
        Nz: function () {
            for (var a = this.R.tF; a < B.Pr.length; a++) B.Pr[a](this);
            this.R.tF = a
        },
        JF: function (a) {
            this.Sb = Ra.Ak(a);
            this.Uw = Ra.GL(this.Sb);
            this.xb === Ra && this.Nd instanceof kb && (this.Nd.ij = this.Sb)
        },
        setDefaultCursor: function (a) {
            this.B.Xb = a;
            this.platform && (this.platform.style.cursor = this.B.Xb)
        },
        getDefaultCursor: function () {
            return this.B.Xb
        },
        setDraggingCursor: function (a) {
            this.B.Id = a
        },
        getDraggingCursor: function () {
            return this.B.Id
        },
        Xx: function () {
            return this.B.TW && 1.5 <= this.B.devicePixelRatio
        },
        Ew: function (a, b) {
            b ? this.Sh[b] || (this.Sh[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof lb && (this.Sh[b][a.ba] = a, a.ra(this));
            var c = this;
            L.load("hotspot", function () {
                c.Nz()
            }, o)
        },
        LZ: function (a, b) {
            b || (b = "custom");
            this.Sh[b][a.ba] && delete this.Sh[b][a.ba]
        },
        lm: function (a) {
            a || (a = "custom");
            this.Sh[a] = {}
        },
        gv: function () {
            var a = this.xb.hp(),
                b = this.xb.Dm(),
                c = this.B;
            c.fc = c.hP || a;
            c.Zb = c.gP || b;
            c.fc < a && (c.fc = a);
            c.Zb > b && (c.Zb = b)
        },
        setMinZoom: function (a) {
            a = Math.round(a);
            a > this.B.Zb && (a = this.B.Zb);
            this.B.hP = a;
            this.LJ()
        },
        setMaxZoom: function (a) {
            a = Math.round(a);
            a < this.B.fc && (a = this.B.fc);
            this.B.gP = a;
            this.LJ()
        },
        LJ: function () {
            this.gv();
            var a = this.B;
            this.Na < a.fc ? this.Oc(a.fc) : this.Na > a.Zb && this.Oc(a.Zb);
            var b = new N("onzoomspanchange");
            b.fc = a.fc;
            b.Zb = a.Zb;
            this.dispatchEvent(b)
        },
        w3: v("cC"),
        getKey: function () {
            return qa
        },
        du: function (a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.ba] && window.MPC_Mgr[b.ba].close();
            b.B.pj = q;
            B.Ln("cus.fire", "count", "z_setmapstylecount");
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.Q_(a.styleJson));
                J() && x.da.BF ? setTimeout(function () {
                    b.B.ze = a;
                    b.dispatchEvent(new N("onsetcustomstyles", a))
                }, 50) : (this.B.ze = a, this.dispatchEvent(new N("onsetcustomstyles", a)), this.tM(b.B.ze.geotableId));
                var c = {
                    style: a.style
                };
                a.features && 0 < a.features.length && (c.features = o);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = o);
                Ta(5050, c);
                a.style && (c = b.B.om[a.style] ? b.B.om[a.style].backColor : b.B.om.normal.backColor) && (this.Ha().style.backgroundColor = c)
            }
        },
        BY: function (a) {
            this.controls || (this.controls = {
                navigationControl: new mb,
                scaleControl: new nb,
                overviewMapControl: new ob,
                mapTypeControl: new pb
            });
            var b = this,
                c;
            for (c in this.controls) b.WN(b.controls[c]);
            a = a || [];
            x.jc.Fb(a, function (a) {
                b.js(b.controls[a])
            })
        },
        tM: function (a) {
            a ? this.Bs && this.Bs.Bf === a || (this.Ah(this.Bs), this.Bs = new qb({
                geotableId: a
            }), this.$g(this.Bs)) : this.Ah(this.Bs)
        },
        Wb: function () {
            var a = this.ga() >= this.B.lG && this.oa() === Oa && 18 >= this.ga(),
                b = q;
            try {
                document.createElement("canvas").getContext("2d"), b = o
            } catch (c) {
                b = q
            }
            return a && b
        },
        getCurrentCity: function () {
            return {
                name: this.bh,
                code: this.ns
            }
        },
        Em: function () {
            this.P.lo();
            return this.P
        },
        setPanorama: function (a) {
            this.P = a;
            this.P.Ry(this)
        },
        Q_: function (a) {
            for (var b = {
                featureType: "t",
                elementType: "e",
                visibility: "v",
                color: "c",
                lightness: "l",
                saturation: "s",
                weight: "w",
                zoom: "z",
                hue: "h"
            }, c = {
                all: "all",
                geometry: "g",
                "geometry.fill": "g.f",
                "geometry.stroke": "g.s",
                labels: "l",
                "labels.text.fill": "l.t.f",
                "labels.text.stroke": "l.t.s",
                "lables.text": "l.t",
                "labels.icon": "l.i"
            }, d = [], e = 0, f; f = a[e]; e++) {
                var g = f.stylers;
                delete f.stylers;
                x.extend(f, g);
                var g = [],
                    i;
                for (i in b)
                    if (f[i])
                        if ("elementType" === i) g.push(b[i] + ":" + c[f[i]]);
                        else {
                            switch (f[i]) {
                                case "poilabel":
                                    f[i] = "poi";
                                    break;
                                case "districtlabel":
                                    f[i] = "label"
                            }
                            g.push(b[i] + ":" + f[i])
                        }
                2 < g.length && d.push(g.join("|"))
            }
            return d.join(",")
        },
        k_: function (a) {
            this.B.kL = a
        }
    });

    function Ta(a, b) {
        if (a) {
            var b = b || {},
                c = "",
                d;
            for (d in b) c = c + "&" + d + "=" + encodeURIComponent(b[d]);
            var e = function (a) {
                a && (rb = o, setTimeout(function () {
                    sb.src = B.oc + "images/blank.gif?" + a.src
                }, 50))
            },
                f = function () {
                    var a = tb.shift();
                    a && e(a)
                };
            d = (1E8 * Math.random()).toFixed(0);
            rb ? tb.push({
                src: "product=jsapi&sub_product=jsapi&v=" + B.version + "&sub_product_v=" + B.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
            }) : e({
                src: "product=jsapi&sub_product=jsapi&v=" + B.version + "&sub_product_v=" + B.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
            });
            ub || (x.M(sb, "load", function () {
                rb = q;
                f()
            }), x.M(sb, "error", function () {
                rb = q;
                f()
            }), ub = o)
        }
    }
    var rb, ub, tb = [],
        sb = new Image;
    Ta(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    B.nM = {
        TILE_BASE_URLS: ["maponline0.bdimg.com/starpic/?qt=satepc&", "maponline1.bdimg.com/starpic/?qt=satepc&", "maponline2.bdimg.com/starpic/?qt=satepc&", "maponline3.bdimg.com/starpic/?qt=satepc&"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "itsmap2.baidu.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["apisv0.bdimg.com", "apisv1.bdimg.com"],
        panoVerify: "api.map.baidu.com",
        main_domain_nocdn: {
            baidu: "api.map.baidu.com",
            other: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["mapapip0.bdimg.com", "mapapip1.bdimg.com", "mapapip2.bdimg.com"],
            other: ["api.map.baidu.com"],
            webmap: ["webmap0.bdimg.com"]
        },
        map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "maponline0.bdimg.com"
    };
    B.vY = {
        TILE_BASE_URLS: ["maponline0.bdimg.com/starpic/?qt=satepc&", "maponline1.bdimg.com/starpic/?qt=satepc&", "maponline2.bdimg.com/starpic/?qt=satepc&", "maponline3.bdimg.com/starpic/?qt=satepc&"],
        TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "itsmap2.baidu.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["apisv0.bdimg.com", "apisv1.bdimg.com"],
        panoVerify: "api.map.baidu.com",
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["mapapip0.bdimg.com", "mapapip1.bdimg.com", "mapapip2.bdimg.com"],
            webmap: ["webmap0.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "maponline0.bdimg.com"
    };
    B.s0 = {
        "0": {
            proto: "http://",
            domain: B.vY
        },
        1: {
            proto: "https://",
            domain: B.nM
        },
        2: {
            proto: "https://",
            domain: B.nM
        }
    };
    B.kz = window.HOST_TYPE || "0";
    B.url = B.s0[B.kz];
    B.Fp = B.url.proto + B.url.domain.baidumap + "/";
    B.oc = B.url.proto + ("2" == B.kz ? B.url.domain.main_domain_nocdn.other : B.url.domain.main_domain_nocdn.baidu) + "/";
    B.la = B.url.proto + ("2" == B.kz ? B.url.domain.main_domain_cdn.other[0] : B.url.domain.main_domain_nocdn.baidu) + "/";
    B.gj = B.url.proto + B.url.domain.main_domain_cdn.webmap[0] + "/";
    // B.JN = B.url.proto + B.url.domain.panoVerify + "/"; // yangjianfei 注释
    B.JN = ''; // yangjianfei 添加
    B.Sf = function (a, b) {
        var c, d, b = b || "";
        switch (a) {
            case "main_domain_nocdn":
                c = B.oc + b;
                break;
            case "main_domain_cdn":
                c = B.la + b;
                break;
            default:
                d = B.url.domain[a], "[object Array]" == Object.prototype.toString.call(d) ? (c = [], x.jc.Fb(d, function (a, d) {
                    c[d] = B.url.proto + a + "/" + b
                })) : c = B.url.proto + B.url.domain[a] + "/" + b
        }
        return c
    };

    function vb(a) {
        var b = {
            duration: 1E3,
            Hc: 30,
            To: 0,
            hc: wb.SM,
            Pt: t()
        };
        this.$f = [];
        if (a)
            for (var c in a) b[c] = a[c];
        this.k = b;
        if (Za(b.To)) {
            var d = this;
            setTimeout(function () {
                d.start()
            }, b.To)
        } else b.To != xb && this.start()
    }
    var xb = "INFINITE";
    vb.prototype.start = function () {
        this.Xu = db();
        this.pA = this.Xu + this.k.duration;
        yb(this)
    };
    vb.prototype.add = function (a) {
        this.$f.push(a)
    };

    function yb(a) {
        var b = db();
        b >= a.pA ? (ab(a.k.va) && a.k.va(a.k.hc(1)), ab(a.k.finish) && a.k.finish(), 0 < a.$f.length && (b = a.$f[0], b.$f = [].concat(a.$f.slice(1)), b.start())) : (a.Oy = a.k.hc((b - a.Xu) / a.k.duration), ab(a.k.va) && a.k.va(a.Oy), a.YF || (a.fs = setTimeout(function () {
            yb(a)
        }, 1E3 / a.k.Hc)))
    }
    vb.prototype.stop = function (a) {
        this.YF = o;
        for (var b = 0; b < this.$f.length; b++) this.$f[b].stop(), this.$f[b] = p;
        this.$f.length = 0;
        this.fs && (clearTimeout(this.fs), this.fs = p);
        this.k.Pt(this.Oy);
        a && (this.pA = this.Xu, yb(this))
    };
    vb.prototype.cancel = ha(1);
    var wb = {
        SM: function (a) {
            return a
        },
        reverse: function (a) {
            return 1 - a
        },
        sD: function (a) {
            return a * a
        },
        rD: function (a) {
            return Math.pow(a, 3)
        },
        Qs: function (a) {
            return -(a * (a - 2))
        },
        iL: function (a) {
            return Math.pow(a - 1, 3) + 1
        },
        hL: function (a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        },
        y2: function (a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        z2: function (a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    wb["ease-in"] = wb.sD;
    wb["ease-out"] = wb.Qs;
    var I = {
        tG: 34,
        uG: 21,
        vG: new M(21, 32),
        yP: new M(10, 32),
        xP: new M(24, 36),
        wP: new M(12, 36),
        rG: new M(13, 1),
        // pa: B.la + "images/",
        pa: "./plugin/offline/images/",
        F3: "http://mapapip0.bdimg.com/images/",
        sG: B.la + "images/markers_new.png",
        uP: 24,
        vP: 73,
        xC: {
            "\u5317\u4eac": {
                Fy: "bj",
                m: new K(116.403874, 39.914889)
            },
            "\u4e0a\u6d77": {
                Fy: "sh",
                m: new K(121.487899, 31.249162)
            },
            "\u6df1\u5733": {
                Fy: "sz",
                m: new K(114.025974, 22.546054)
            },
            "\u5e7f\u5dde": {
                Fy: "gz",
                m: new K(113.30765, 23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    x.da.Te ? (x.extend(I, {
        XK: "url(" + I.pa + "ruler.cur),crosshair",
        Xb: "-moz-grab",
        Id: "-moz-grabbing"
    }), x.platform.GM && (I.fontFamily = "arial,simsun,sans-serif")) : x.da.Tw || x.da.BF ? x.extend(I, {
        XK: "url(" + I.pa + "ruler.cur) 2 6,crosshair",
        Xb: "url(" + I.pa + "openhand.cur) 8 8,default",
        Id: "url(" + I.pa + "closedhand.cur) 8 8,move"
    }) : x.extend(I, {
        XK: "url(" + I.pa + "ruler.cur),crosshair",
        Xb: "url(" + I.pa + "openhand.cur),default",
        Id: "url(" + I.pa + "closedhand.cur),move"
    });

    function zb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }

    function Ab(a) {
        0 < x.da.ma ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }

    function Bb(a) {
        return a && a.parentNode && 11 !== a.parentNode.nodeType
    }

    function Cb(a, b) {
        x.K.$x(a, "beforeEnd", b);
        return a.lastChild
    }

    function Db(a) {
        for (var b = {
            left: 0,
            top: 0
        }; a && a.offsetParent;) b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent;
        return b
    }

    function na(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = o
    }

    function Fb(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = q;
        return q
    }

    function oa(a) {
        na(a);
        return Fb(a)
    }

    function Gb() {
        var a = document.documentElement,
            b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }

    function Hb(a, b) {
        if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }

    function Ib(a, b) {
        var c = [],
            b = b || function (a) {
                return a
            },
            d;
        for (d in a) c.push(d + "=" + b(a[d]));
        return c.join("&")
    }

    function H(a, b, c) {
        var d = document.createElement(a);
        c && (d = document.createElementNS(c, a));
        return x.K.IF(d, b || {})
    }

    function Ya(a) {
        if (a.currentStyle) return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, p)
    }

    function ab(a) {
        return "function" === typeof a
    }

    function Za(a) {
        return "number" === typeof a
    }

    function cb(a) {
        return "string" == typeof a
    }

    function Jb(a) {
        return "undefined" != typeof a
    }

    function Kb(a) {
        return "object" == typeof a
    }
    var Lb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function Mb(a) {
        var b = "",
            c, d, e = "",
            f, g = "",
            i = 0;
        f = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || f.exec(a)) return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do c = Lb.indexOf(a.charAt(i++)), d = Lb.indexOf(a.charAt(i++)), f = Lb.indexOf(a.charAt(i++)), g = Lb.indexOf(a.charAt(i++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e)); while (i < a.length);
        return b
    }
    var N = x.lang.vz;

    function J() {
        return !(!x.platform.HE && !x.platform.MY && !x.platform.Sm)
    }

    function Xa() {
        return !(!x.platform.GM && !x.platform.yM && !x.platform.SY)
    }

    function db() {
        return (new Date).getTime()
    }

    function Nb() {
        var a = document.body.appendChild(H("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style) return q;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj : o;
        a.parentNode.removeChild(a);
        return b
    }

    function Ob() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }

    function Pb() {
        return !!H("canvas").getContext
    }

    function Qb(a) {
        return a * Math.PI / 180
    }
    B.ZY = function () {
        var a = o,
            b = o,
            c = o,
            d = o,
            e = 0,
            f = 0,
            g = 0,
            i = 0;
        return {
            fR: function () {
                e += 1;
                a && (a = q, setTimeout(function () {
                    Ta(5054, {
                        pic: e
                    });
                    a = o;
                    e = 0
                }, 1E4))
            },
            f1: function () {
                f += 1;
                b && (b = q, setTimeout(function () {
                    Ta(5055, {
                        move: f
                    });
                    b = o;
                    f = 0
                }, 1E4))
            },
            h1: function () {
                g += 1;
                c && (c = q, setTimeout(function () {
                    Ta(5056, {
                        zoom: g
                    });
                    c = o;
                    g = 0
                }, 1E4))
            },
            g1: function (a) {
                i += a;
                d && (d = q, setTimeout(function () {
                    Ta(5057, {
                        tile: i
                    });
                    d = o;
                    i = 0
                }, 5E3))
            }
        }
    }();
    B.rq = {
        HG: "#83a1ff",
        uq: "#808080"
    };

    function Tb(a, b, c) {
        b.Xm || (b.Xm = [], b.handle = {});
        b.Xm.push({
            filter: c,
            ym: a
        });
        b.addEventListener || (b.addEventListener = function (a, c) {
            b.attachEvent("on" + a, c)
        });
        b.handle.click || (b.addEventListener("click", function (a) {
            for (var c = a.target || a.srcElement; c != b;) {
                Ub(b.Xm, function (b, g) {
                    RegExp(g.filter).test(c.getAttribute("filter")) && g.ym.call(c, a, c.getAttribute("filter"))
                });
                c = c.parentNode
            }
        }, q), b.handle.click = o)
    }

    function Ub(a, b) {
        for (var c = 0, d = a.length; c < d; c++) b(c, a[c])
    }
    void
        function (a, b, c) {
            void
                function (a, b, c) {
                    function g(a) {
                        if (!a.So) {
                            for (var c = o, d = [], f = a.PZ, i = 0; f && i < f.length; i++) {
                                var k = f[i],
                                    l = ba[k] = ba[k] || {};
                                if (l.So || l == a) d.push(l.Lc);
                                else {
                                    c = q;
                                    if (!l.vW && (k = (Ma.get("alias") || {})[k] || k + ".js", !E[k])) {
                                        E[k] = o;
                                        var m = b.createElement("script"),
                                            n = b.getElementsByTagName("script")[0];
                                        m.async = o;
                                        m.src = k;
                                        n.parentNode.insertBefore(m, n)
                                    }
                                    l.lz = l.lz || {};
                                    l.lz[a.name] = a
                                }
                            }
                            if (c) {
                                a.So = o;
                                a.PK && (a.Lc = a.PK.apply(a, d));
                                for (var s in a.lz) g(a.lz[s])
                            }
                        }
                    }

                    function i(a) {
                        return (a || new Date) - F
                    }

                    function k(a, b, c) {
                        if (a) {
                            "string" == typeof a && (c = b, b = a, a = G);
                            try {
                                a == G ? (P[b] = P[b] || [], P[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c)
                            } catch (d) { }
                        }
                    }

                    function l(a, b, c) {
                        if (a) {
                            "string" == typeof a && (c = b, b = a, a = G);
                            try {
                                if (a == G) {
                                    var d = P[b];
                                    if (d)
                                        for (var e = d.length; e--;) d[e] === c && d.splice(e, 1)
                                } else a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c)
                            } catch (f) { }
                        }
                    }

                    function m(a) {
                        var b = P[a],
                            c = 0;
                        if (b) {
                            for (var d = [], e = arguments, f = 1; f < e.length; f++) d.push(e[f]);
                            for (f = b.length; f--;) b[f].apply(this, d) && c++;
                            return c
                        }
                    }

                    function n(a, b) {
                        if (a && b) {
                            var c = new Image(1, 1),
                                d = [],
                                e = "img_" + +new Date,
                                f;
                            for (f in b) b[f] && d.push(f + "=" + encodeURIComponent(b[f]));
                            G[e] = c;
                            c.onload = c.onerror = function () {
                                G[e] = c = c.onload = c.onerror = p;
                                delete G[e]
                            };
                            c.src = a + "?" + d.join("&")
                        }
                    }

                    function s() {
                        var a = arguments,
                            b = a[0];
                        if (this.OK || /^(on|un|set|get|create)$/.test(b)) {
                            for (var b = w.prototype[b], c = [], d = 1, e = a.length; d < e; d++) c.push(a[d]);
                            "function" == typeof b && b.apply(this, c)
                        } else this.nK.push(a)
                    }

                    function u(a, b) {
                        var c = {},
                            d;
                        for (d in a) a.hasOwnProperty(d) && (c[d] = a[d]);
                        for (d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
                        return c
                    }

                    function w(a) {
                        this.name = a;
                        this.Vs = {
                            protocolParameter: {
                                postUrl: p,
                                protocolParameter: p
                            }
                        };
                        this.nK = [];
                        this.alog = G
                    }

                    function y(a) {
                        a = a || "default";
                        if ("*" == a) {
                            var a = [],
                                b;
                            for (b in R) a.push(R[b]);
                            return a
                        } (b = R[a]) || (b = R[a] = new w(a));
                        return b
                    }
                    var D = c.alog;
                    if (!D || !D.So) {
                        var C = b.all && a.attachEvent,
                            F = D && D.QE || +new Date,
                            z = a.R3 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3),
                            A = 0,
                            E = {},
                            G = function (a) {
                                var b = arguments,
                                    c, d, e, f;
                                if ("define" == a || "require" == a) {
                                    for (d = 1; d < b.length; d++) switch (typeof b[d]) {
                                        case "string":
                                            c = b[d];
                                            break;
                                        case "object":
                                            e = b[d];
                                            break;
                                        case "function":
                                            f = b[d]
                                    }
                                    "require" == a && (c && !e && (e = [c]), c = p);
                                    c = !c ? "#" + A++ : c;
                                    d = ba[c] = ba[c] || {};
                                    d.So || (d.name = c, d.PZ = e, d.PK = f, "define" == a && (d.vW = o), g(d))
                                } else "function" == typeof a ? a(G) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function (a, c, d) {
                                    b[0] = d;
                                    s.apply(G.gG(c), b)
                                })
                            },
                            P = {},
                            R = {},
                            ba = {
                                R1: {
                                    name: "alog",
                                    So: o,
                                    Lc: G
                                }
                            };
                        w.prototype.start = w.prototype.create = function (a) {
                            if (!this.OK) {
                                "object" == typeof a && this.set(a);
                                this.OK = new Date;
                                for (this.Ws("create", this); a = this.nK.shift();) s.apply(this, a)
                            }
                        };
                        w.prototype.send = function (a, b) {
                            var c = u({
                                ts: i().toString(36),
                                t: a,
                                sid: z
                            }, this.Vs);
                            if ("object" == typeof b) c = u(c, b);
                            else {
                                var d = arguments;
                                switch (a) {
                                    case "pageview":
                                        d[1] && (c.page = d[1]);
                                        d[2] && (c.title = d[2]);
                                        break;
                                    case "event":
                                        d[1] && (c.eventCategory = d[1]);
                                        d[2] && (c.eventAction = d[2]);
                                        d[3] && (c.eventLabel = d[3]);
                                        d[4] && (c.eventValue = d[4]);
                                        break;
                                    case "timing":
                                        d[1] && (c.timingCategory = d[1]);
                                        d[2] && (c.timingVar = d[2]);
                                        d[3] && (c.timingValue = d[3]);
                                        d[4] && (c.timingLabel = d[4]);
                                        break;
                                    case "exception":
                                        d[1] && (c.exDescription = d[1]);
                                        d[2] && (c.exFatal = d[2]);
                                        break;
                                    default:
                                        return
                                }
                            }
                            this.Ws("send", c);
                            var e;
                            if (d = this.Vs.protocolParameter) {
                                var f = {};
                                for (e in c) d[e] !== p && (f[d[e] || e] = c[e]);
                                e = f
                            } else e = c;
                            n(this.Vs.postUrl, e)
                        };
                        w.prototype.set = function (a, b) {
                            if ("string" == typeof a) "protocolParameter" == a && (b = u({
                                postUrl: p,
                                protocolParameter: p
                            }, b)), this.Vs[a] = b;
                            else if ("object" == typeof a)
                                for (var c in a) this.set(c, a[c])
                        };
                        w.prototype.get = function (a, b) {
                            var c = this.Vs[a];
                            "function" == typeof b && b(c);
                            return c
                        };
                        w.prototype.Ws = function (a, b) {
                            return G.Ws(this.name + "." + a, b)
                        };
                        w.prototype.M = function (a, b) {
                            G.M(this.name + "." + a, b)
                        };
                        w.prototype.cd = function (a, b) {
                            G.cd(this.name + "." + a, b)
                        };
                        G.name = "alog";
                        G.zO = z;
                        G.So = o;
                        G.timestamp = i;
                        G.cd = l;
                        G.M = k;
                        G.Ws = m;
                        G.gG = y;
                        G("init");
                        var ca = w.prototype;
                        U(ca, {
                            start: ca.start,
                            create: ca.create,
                            send: ca.send,
                            set: ca.set,
                            get: ca.get,
                            on: ca.M,
                            un: ca.cd,
                            fire: ca.Ws
                        });
                        var Ma = y();
                        Ma.set("protocolParameter", {
                            Q1: p
                        });
                        if (D) {
                            ca = [].concat(D.yb || [], D.hn || []);
                            D.yb = D.hn = p;
                            for (var Sa in G) G.hasOwnProperty(Sa) && (D[Sa] = G[Sa]);
                            G.yb = G.hn = {
                                push: function (a) {
                                    G.apply(G, a)
                                }
                            };
                            for (D = 0; D < ca.length; D++) G.apply(G, ca[D])
                        }
                        c.alog = G;
                        C && k(b, "mouseup", function (a) {
                            a = a.target || a.srcElement;
                            1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                        });
                        var Wa = q;
                        a.onerror = function (a, b, d, e) {
                            var g = o;
                            !b && /^script error/i.test(a) && (Wa ? g = q : Wa = o);
                            g && c.alog("exception.send", "exception", {
                                Mt: a,
                                PE: b,
                                It: d,
                                nm: e
                            });
                            return q
                        };
                        c.alog("exception.on", "catch", function (a) {
                            c.alog("exception.send", "exception", {
                                Mt: a.Mt,
                                PE: a.path,
                                It: a.It,
                                method: a.method,
                                wL: "catch"
                            })
                        })
                    }
                }(a, b, c);
            void
                function (a, b, c) {
                    var g = "18_1";
                    J() && (g = "18_2");
                    var i = "http://static.tieba.baidu.com";
                    "https:" === a.location.protocol && (i = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
                    var k = Math.random,
                        i = i + "/tb/pms/img/st.gif",
                        l = {
                            Bh: "0.1"
                        },
                        m = {
                            Bh: "0.1"
                        },
                        n = {
                            Bh: "0.1"
                        },
                        s = {
                            Bh: "0"
                        };
                    if (l && l.Bh && k() < l.Bh) {
                        var u = c.alog.gG("monkey"),
                            w, l = a.screen,
                            y = b.referrer;
                        u.set("ver", 5);
                        u.set("pid", 241);
                        l && u.set("px", l.width + "*" + l.height);
                        u.set("ref", y);
                        c.alog("monkey.on", "create", function () {
                            w = c.alog.timestamp;
                            u.set("protocolParameter", {
                                reports: p
                            })
                        });
                        c.alog("monkey.on", "send", function (a) {
                            "pageview" == a.t && (a.cmd = "open");
                            a.now && (a.ts = w(a.now).toString(36), a.now = "")
                        });
                        c.alog("monkey.create", {
                            page: g,
                            pid: "241",
                            p: "18",
                            dv: 6,
                            postUrl: i,
                            reports: {
                                refer: 1
                            }
                        });
                        c.alog("monkey.send", "pageview", {
                            now: +new Date
                        })
                    }
                    if (m && m.Bh && k() < m.Bh) {
                        var D = q;
                        a.onerror = function (a, b, d, e) {
                            var g = o;
                            !b && /^script error/i.test(a) && (D ? g = q : D = o);
                            g && c.alog("exception.send", "exception", {
                                Mt: a,
                                PE: b,
                                It: d,
                                nm: e
                            });
                            return q
                        };
                        c.alog("exception.on", "catch", function (a) {
                            c.alog("exception.send", "exception", {
                                Mt: a.Mt,
                                PE: a.path,
                                It: a.It,
                                method: a.method,
                                wL: "catch"
                            })
                        });
                        c.alog("exception.create", {
                            postUrl: i,
                            dv: 7,
                            page: g,
                            pid: "170",
                            p: "18"
                        })
                    }
                    n && (n.Bh && k() < n.Bh) && (c.alog("cus.on", "time", function (a) {
                        var b = {},
                            d = q,
                            e;
                        if ("[object Object]" === a.toString()) {
                            for (var g in a) "page" == g ? b.page = a[g] : (e = parseInt(a[g]), 0 < e && /^z_/.test(g) && (d = o, b[g] = e));
                            d && c.alog("cus.send", "time", b)
                        }
                    }), c.alog("cus.on", "count", function (a) {
                        var b = {},
                            d = q;
                        "string" === typeof a && (a = [a]);
                        if (a instanceof Array)
                            for (var e = 0; e < a.length; e++) /^z_/.test(a[e]) ? (d = o, b[a[e]] = 1) : /^page:/.test(a[e]) && (b.page = a[e].substring(5));
                        d && c.alog("cus.send", "count", b)
                    }), c.alog("cus.create", {
                        dv: 3,
                        postUrl: i,
                        page: g,
                        p: "18"
                    }));
                    if (s && s.Bh && k() < s.Bh) {
                        var C = ["Moz", "O", "ms", "Webkit"],
                            F = ["-webkit-", "-moz-", "-o-", "-ms-"],
                            z = function () {
                                return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
                            },
                            A = z("dpFeatureTest").style,
                            E = function (a) {
                                return G(a, j, j)
                            },
                            G = function (a, b, c) {
                                var d = a.charAt(0).toUpperCase() + a.slice(1),
                                    e = (a + " " + C.join(d + " ") + d).split(" ");
                                if (typeof b === "string" || typeof b === "undefined") return P(e, b);
                                e = (a + " " + C.join(d + " ") + d).split(" ");
                                a: {
                                    var a = e,
                                        f;
                                    for (f in a)
                                        if (a[f] in b) {
                                            if (c === q) {
                                                b = a[f];
                                                break a
                                            }
                                            f = b[a[f]];
                                            b = typeof f === "function" ? fnBind(f, c || b) : f;
                                            break a
                                        }
                                    b = q
                                }
                                return b
                            },
                            P = function (a, b) {
                                var c, d, e;
                                d = a.length;
                                for (c = 0; c < d; c++) {
                                    e = a[c];
                                    ~("" + e).indexOf("-") && (e = R(e));
                                    if (A[e] !== j) return b == "pfx" ? e : o
                                }
                                return q
                            },
                            R = function (a) {
                                return a.replace(/([a-z])-([a-z])/g, function (a, b, c) {
                                    return b + c.toUpperCase()
                                }).replace(/^-/, "")
                            },
                            ba = function (a, b, c) {
                                if (a.indexOf("@") === 0) return atRule(a);
                                a.indexOf("-") != -1 && (a = R(a));
                                return !b ? G(a, "pfx") : G(a, b, c)
                            },
                            ca = function () {
                                var a = z("canvas");
                                return !(!a.getContext || !a.getContext("2d"))
                            },
                            Ma = function () {
                                var a = z("div");
                                return "draggable" in a || "ondragstart" in a && "ondrop" in a
                            },
                            Sa = function () {
                                try {
                                    localStorage.setItem("localStorage", "localStorage");
                                    localStorage.removeItem("localStorage");
                                    return o
                                } catch (a) {
                                    return q
                                }
                            },
                            Wa = function () {
                                return "content" in b.createElement("template")
                            },
                            Da = function () {
                                return "createShadowRoot" in b.createElement("a")
                            },
                            vc = function () {
                                return "registerElement" in b
                            },
                            Fe = function () {
                                return "import" in b.createElement("link")
                            },
                            Hf = function () {
                                return "getItems" in b
                            },
                            pd = function () {
                                return "EventSource" in window
                            },
                            Rb = function (a, b) {
                                var c = new Image;
                                c.onload = function () {
                                    b(a, c.width > 0 && c.height > 0)
                                };
                                c.onerror = function () {
                                    b(a, q)
                                };
                                c.src = "data:image/webp;base64," + {
                                    U3: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                                    T3: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                                    alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                                    qk: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                                }[a]
                            },
                            wc = function (a, b) {
                                return Sb.oi["WebP-" + a] = b
                            },
                            Ge = function () {
                                return "openDatabase" in a
                            },
                            He = function () {
                                return "performance" in a && "timing" in a.performance
                            },
                            Wc = function () {
                                return "performance" in a && "mark" in a.performance
                            },
                            qd = function () {
                                return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
                            },
                            Ie = function () {
                                return "Promise" in a && "cast" in a.vq && "resolve" in a.vq && "reject" in a.vq && "all" in a.vq && "race" in a.vq && function () {
                                    var b;
                                    new a.vq(function (a) {
                                        b = a
                                    });
                                    return typeof b === "function"
                                }()
                            },
                            rd = function () {
                                var b = !!a.T0,
                                    c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                                return !!a.W0 && b && c
                            },
                            If = function () {
                                return "geolocation" in navigator
                            },
                            Je = function () {
                                var b = z("canvas"),
                                    c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
                                return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
                            },
                            Ui = function () {
                                return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").k2
                            },
                            Vi = function () {
                                return !!a.c1
                            },
                            Wi = function () {
                                return "WebSocket" in a && a.$0.Q0 === 2
                            },
                            Xi = function () {
                                return !!b.createElement("video").canPlayType
                            },
                            Yi = function () {
                                return !!b.createElement("audio").canPlayType
                            },
                            Zi = function () {
                                return !!(a.history && "pushState" in a.history)
                            },
                            $i = function () {
                                return !(!a.R0 || !a.S0)
                            },
                            aj = function () {
                                return "postMessage" in window
                            },
                            bj = function () {
                                return !!a.webkitNotifications || "Notification" in a && "permission" in a.RP && "requestPermission" in a.RP
                            },
                            cj = function () {
                                for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, e = 0; e < b.length && !c; ++e) c = a[b[e] + "RequestAnimationFrame"];
                                return !!c
                            },
                            dj = function () {
                                return "JSON" in a && "parse" in JSON && "stringify" in JSON
                            },
                            ej = function () {
                                return !(!ba("exitFullscreen", b, q) && !ba("cancelFullScreen", b, q))
                            },
                            fj = function () {
                                return !!ba("Intl", a)
                            },
                            gj = function () {
                                return E("flexBasis")
                            },
                            hj = function () {
                                return !!E("perspective")
                            },
                            ij = function () {
                                return E("shapeOutside")
                            },
                            jj = function () {
                                var a = z("div");
                                a.style.cssText = F.join("filter:blur(2px); ");
                                return !!a.style.length && (b.documentMode === j || b.documentMode > 9)
                            },
                            kj = function () {
                                return "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest
                            },
                            lj = function () {
                                return z("progress").max !== j
                            },
                            mj = function () {
                                return z("meter").max !== j
                            },
                            nj = function () {
                                return "sendBeacon" in navigator
                            },
                            oj = function () {
                                return E("borderRadius")
                            },
                            pj = function () {
                                return E("boxShadow")
                            },
                            qj = function () {
                                var a = z("div").style;
                                a.cssText = F.join("opacity:.55;");
                                return /^0.55$/.test(a.opacity)
                            },
                            rj = function () {
                                return P(["textShadow"], j)
                            },
                            sj = function () {
                                return E("animationName")
                            },
                            tj = function () {
                                return E("transition")
                            },
                            uj = function () {
                                return navigator.userAgent.indexOf("Android 2.") === -1 && E("transform")
                            },
                            Sb = {
                                oi: {},
                                qa: function (a, b, c) {
                                    this.oi[a] = b.apply(this, [].slice.call(arguments, 2))
                                },
                                Fd: function (a, b) {
                                    a.apply(this, [].slice.call(arguments, 1))
                                },
                                WZ: function () {
                                    this.qa("bdrs", oj);
                                    this.qa("bxsd", pj);
                                    this.qa("opat", qj);
                                    this.qa("txsd", rj);
                                    this.qa("anim", sj);
                                    this.qa("trsi", tj);
                                    this.qa("trfm", uj);
                                    this.qa("flex", gj);
                                    this.qa("3dtr", hj);
                                    this.qa("shpe", ij);
                                    this.qa("fltr", jj);
                                    this.qa("cavs", ca);
                                    this.qa("dgdp", Ma);
                                    this.qa("locs", Sa);
                                    this.qa("wctem", Wa);
                                    this.qa("wcsdd", Da);
                                    this.qa("wccse", vc);
                                    this.qa("wchti", Fe);
                                    this.Fd(Rb, "lossy", wc);
                                    this.Fd(Rb, "lossless", wc);
                                    this.Fd(Rb, "alpha", wc);
                                    this.Fd(Rb, "animation", wc);
                                    this.qa("wsql", Ge);
                                    this.qa("natm", He);
                                    this.qa("ustm", Wc);
                                    this.qa("arra", qd);
                                    this.qa("prms", Ie);
                                    this.qa("xhr2", rd);
                                    this.qa("wbgl", Je);
                                    this.qa("geol", If);
                                    this.qa("svg", Ui);
                                    this.qa("work", Vi);
                                    this.qa("wbsk", Wi);
                                    this.qa("vido", Xi);
                                    this.qa("audo", Yi);
                                    this.qa("hsty", Zi);
                                    this.qa("file", $i);
                                    this.qa("psmg", aj);
                                    this.qa("wknf", bj);
                                    this.qa("rqaf", cj);
                                    this.qa("json", dj);
                                    this.qa("flsc", ej);
                                    this.qa("i18n", fj);
                                    this.qa("cors", kj);
                                    this.qa("prog", lj);
                                    this.qa("metr", mj);
                                    this.qa("becn", nj);
                                    this.qa("mcrd", Hf);
                                    this.qa("esrc", pd)
                                }
                            },
                            u = c.alog.gG("feature");
                        u.M("commit", function () {
                            Sb.WZ();
                            var a = setInterval(function () {
                                if ("WebP-lossy" in Sb.oi && "WebP-lossless" in Sb.oi && "WebP-alpha" in Sb.oi && "WebP-animation" in Sb.oi) {
                                    for (var b in Sb.oi) Sb.oi[b] = Sb.oi[b] ? "y" : "n";
                                    u.send("feature", Sb.oi);
                                    clearInterval(a)
                                }
                            }, 500)
                        });
                        c.alog("feature.create", {
                            v2: 4,
                            o4: i,
                            page: g,
                            yb: "18"
                        });
                        c.alog("feature.fire", "commit")
                    }
                }(a, b, c)
        }(window, document, B);
    B.Ln = B.alog || t();
    B.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && B.alog("cus.fire", "count", "z_httpscount");

    function Vb(a) {
        var b = window.TILE_VERSION,
            c = "20211014";
        b && b.ditu && (b = b.ditu, b[a] && b[a].updateDate && (c = b[a].updateDate));
        return c
    }
    var Wb = [72.6892532, 0.1939743381, 136.1168614, 54.392257],
        Xb = [72.69566833, 0.1999420909, 136.1232863, 54.39791217],
        Yb = 158,
        Zb = [98.795985, 122.960792, 107.867379, 118.093451, 119.139658, 128.035888, 79.948212, 99.029524, 119.923388, 122.094977, 127.918527, 130.94789, 106.50606, 108.076783, 119.8329, 126.382207, 111.803567, 119.324928, 100.749858, 102.227985, 99.860885, 100.788921, 97.529435, 98.841564, 99.100017, 99.90035, 122.917416, 123.774367, 123.728314, 125.507211, 123.736065, 124.767299, 125.488463, 126.410675, 125.484326, 126.07764, 130.830784, 133.620042, 127.912178, 128.668957, 128.658937, 129.638599, 132.894179, 134.119086, 117.379378, 119.244569, 116.086736, 117.431212, 114.420233, 116.137458, 116.492775, 119.605527, 110.579401, 111.86488, 74.468228, 80.001908, 82.867432, 91.353788, 85.721075, 98.976964, 127.664757, 129.546833, 129.476893, 130.22449, 133.730358, 134.745235, 134.381034, 135.1178, 130.868117, 131.34409, 115.513245, 117.544751, 115.779271, 116.748045, 108.536254, 110.614326, 121.365534, 124.626434, 126.165992, 127.347013, 91.281869, 95.611754, 79.879648, 82.945041, 76.413314, 78.345207, 78.275229, 80.002329, 83.956612, 85.734098, 85.510186, 89.356499, 97.997001, 98.948845, 106.653208, 108.610811, 111.400183, 111.824179, 111.592224, 111.817136, 116.00682, 117.024631, 116.258574, 116.689291, 119.436876, 119.922961, 120.659806, 121.395479, 120.349116, 120.676014, 124.59389, 125.787788, 126.221756, 126.788962, 95.572955, 102.046581, 95.583772, 96.165551, 95.564318, 97.806095, 91.30446, 93.356438, 93.330319, 94.698145, 89.349129, 90.548677, 82.268802, 82.892025, 78.335615, 80.032266, 76.625755, 78.361413, 73.498248, 74.490992, 74.846872, 76.488771, 91.563521, 94.878444, 88.768214, 89.244787, 83.247076, 83.974127, 82.29595, 83.256003, 81.885315, 83.26249, 80.760619, 81.472404, 86.470983, 88.276988, 102.207537, 104.234614, 112.164795, 116.833667, 108.965663, 113.032246, 111.166575, 117.983363],
        $b = [22.551183, 42.284787, 17.227969, 22.738314, 41.300981, 50.749638, 30.368087, 42.332701, 21.705055, 22.696452, 42.426047, 48.944674, 21.432184, 22.651387, 50.657409, 52.92296, 42.212192, 45.206905, 21.137031, 22.57186, 21.444502, 22.586566, 23.741571, 25.301472, 22.006806, 22.56637, 38.985114, 41.346531, 40.295617, 41.338581, 39.740021, 40.351012, 40.974644, 41.331562, 40.726852, 41.067192, 44.877158, 48.018285, 41.344597, 42.451798, 42.016305, 42.443235, 45.880906, 48.214001, 45.140027, 46.792775, 45.141083, 46.400433, 45.156418, 45.748281, 47.485889, 50.071879, 42.223667, 43.469487, 37.019867, 40.668675, 42.226823, 47.321605, 27.72944, 30.469853, 48.919002, 49.650614, 48.840188, 49.443166, 46.949801, 48.382798, 47.660603, 48.472692, 42.859946, 44.913298, 47.605896, 48.445914, 48.41698, 48.909667, 42.23507, 42.914193, 52.8281, 53.585952, 50.709311, 51.662219, 42.29968, 44.399225, 42.302746, 45.391958, 34.680866, 37.03377, 30.743515, 37.07228, 28.245649, 30.408935, 47.277693, 48.504255, 25.241528, 27.780726, 42.223363, 42.548418, 43.435888, 44.696952, 44.693193, 45.00187, 48.886267, 49.326755, 49.288642, 49.632304, 50.717486, 51.314369, 52.914204, 53.33964, 52.910094, 53.115926, 52.908382, 53.258095, 51.64533, 52.408305, 42.236825, 42.699126, 43.068466, 43.898632, 42.670403, 43.082219, 44.379045, 45.187742, 44.382336, 44.981379, 47.310362, 48.06019, 45.359099, 46.814439, 40.569751, 42.047741, 40.587956, 41.41263, 38.519192, 40.185033, 35.790476, 37.029005, 26.825605, 27.763896, 27.199658, 27.751649, 29.150192, 30.381073, 29.573886, 30.065162, 30.047775, 30.384089, 30.001277, 30.388525, 48.494118, 49.173841, 22.398528, 22.601198, 7.441114, 11.505968, 3.767491, 9.005209, 12.642067, 17.410886],
        ac = 95,
        bc = [110.3961374, 105.0743788, 96.8991824, 95.61810411, 93.82412598, 91.3892353, 91.38931858, 89.08325955, 87.22469808, 86.26278402, 85.17353, 85.23741211, 82.86627441, 81.90481038, 79.59687147, 80.39829237, 79.93319363, 77.80279948, 75.2557704, 73.49357829, 73.1892532, 73.87758816, 74.4064738, 74.10215224, 75.46409695, 76.77739692, 78.28299615, 78.15499485, 78.37920654, 78.89145345, 79.69282199, 81.19938178, 81.80830295, 83.89093424, 85.94149523, 87.86447266, 89.03414958, 90.05918132, 91.10026937, 92.15733832, 93.74361735, 95.82597331, 97.95655545, 97.12363037, 98.2129739, 99.2068571, 101.6587874, 102.5239084, 102.2356106, 105.0249238, 106.0992342, 107.8617093, 111.6439372, 109.591869, 112.284586, 117.7961157, 118.9495128, 114.2076584, 118.693565, 123.1475225, 122.730705, 120.9361393, 123.4207441, 122.3787782, 122.1385425, 121.5904281, 121.1773763, 120.6805404, 120.2483355, 122.795807, 122.8759077, 121.3060262, 122.1392177, 123.7418799, 126.4177599, 128.5647409, 129.7194884, 131.2259136, 131.9950494, 133.6289931, 135.6168614, 131.3875545, 130.8743365, 128.6303223, 126.0997773, 124.4015375, 122.22161, 119.6586483, 119.7866827, 118.5685878, 116.5177976, 114.819101, 119.0812964, 116.453265, 111.7431171],
        cc = [43.2190351, 42.38053385, 43.17417589, 44.42226915, 45.09863634, 45.56708116, 47.33599718, 48.68832709, 49.62448486, 48.9482175, 48.4800472, 47.33564399, 47.43948676, 46.03452067, 45.20221788, 43.34563043, 42.32965739, 41.39690972, 40.82972331, 39.95567654, 39.25892877, 38.36098768, 38.05441569, 37.16878445, 36.38899414, 35.36126817, 34.30953451, 32.58503879, 31.56975694, 30.77800266, 30.43559814, 29.7744892, 30.0931977, 28.71103299, 27.70739665, 27.5775472, 27.01096137, 27.77857883, 27.50707954, 26.50328315, 26.70387804, 27.95548557, 27.29428901, 23.64685493, 23.62310601, 21.67493381, 20.77751465, 21.32070991, 22.1824113, 22.31232964, 22.51316054, 16.80037679, 13.19749864, 0.6939743381, 1.541660428, 10.50208252, 15.58926975, 17.89090007, 19.94928467, 22.18490153, 25.37285292, 25.61456434, 30.62532552, 31.08099284, 31.89238173, 32.50092692, 32.80325765, 34.25546956, 35.15486138, 36.90170139, 37.8348272, 37.941604, 38.6480797, 38.96797201, 40.98146918, 41.25573296, 42.07218153, 42.49132813, 44.65259766, 44.69330702, 48.62286865, 48.09383952, 49.19628499, 50.03402317, 53.27678901, 53.62976345, 53.89420546, 52.98933322, 52.01872884, 50.23210259, 50.18807048, 47.49769857, 47.34362712, 46.50502143, 45.24770128],
        dc = [98.7895, 122.954182, 107.860913, 118.087007, 119.133165, 128.029533, 79.941749, 99.023087, 119.916883, 122.08841, 127.912143, 130.941471, 106.499502, 108.070244, 119.826245, 126.375818, 111.797006, 119.318387, 100.743285, 102.221517, 99.854448, 100.782445, 97.522928, 98.835028, 99.093518, 99.893783, 122.910927, 123.767769, 123.721954, 125.50077, 123.729657, 124.760724, 125.481902, 126.404079, 125.477737, 126.071019, 130.824331, 133.613395, 127.905767, 128.662524, 128.652527, 129.6321, 132.887552, 134.11249, 117.37297, 119.237999, 116.080154, 117.424589, 114.413586, 116.130948, 116.486264, 119.598927, 110.5728, 111.858437, 74.465162, 79.995337, 82.860821, 91.347291, 85.716024, 98.970481, 127.658331, 129.540202, 129.470528, 130.21808, 133.723748, 134.738785, 134.374555, 135.111443, 130.861475, 131.337438, 115.506627, 117.538123, 115.772783, 116.741632, 108.529656, 110.60782, 121.358945, 124.619773, 126.159424, 127.340582, 91.275275, 95.605228, 79.874427, 82.938601, 76.413314, 78.338763, 78.275229, 79.995765, 83.956612, 85.727511, 85.503554, 89.349858, 97.990418, 98.942257, 106.646704, 108.604437, 111.393667, 111.817723, 111.585811, 111.810645, 116.000232, 117.018216, 116.252108, 116.682705, 119.430384, 119.916417, 120.653168, 121.38883, 120.342727, 120.669383, 124.587426, 125.781376, 126.215282, 126.782323, 95.566367, 102.040026, 95.577158, 96.159009, 95.557772, 97.799728, 91.298032, 93.350057, 93.323794, 94.691771, 89.342471, 90.542019, 82.264229, 82.885485, 78.335615, 80.025844, 76.623947, 78.355027, 73.495149, 74.484473, 74.846872, 76.482208, 91.560117, 94.871859, 88.761692, 89.23822, 83.240549, 83.967602, 82.292367, 83.2495, 81.878825, 83.256003, 80.75421, 81.465955, 86.465421, 88.270356, 102.201019, 104.228033, 112.158282, 116.827153, 108.965663, 113.025767, 111.166575, 117.97687],
        ec = [22.545421, 42.279053, 17.226272, 22.731982, 41.294917, 50.743316, 30.361986, 42.326603, 21.699185, 22.690751, 42.419757, 48.938435, 21.426505, 22.64567, 50.651745, 52.916705, 42.20641, 45.201064, 21.131326, 22.565685, 21.438288, 22.580379, 23.735785, 25.295582, 22.001087, 22.560315, 38.979333, 41.340757, 40.28938, 41.332289, 39.734164, 40.344718, 40.968803, 41.325813, 40.721073, 41.061503, 44.871533, 48.012179, 41.338366, 42.445601, 42.010343, 42.436934, 45.875217, 48.208327, 45.134237, 46.786509, 45.135376, 46.394665, 45.150734, 45.742257, 47.480099, 50.065931, 42.217982, 43.46329, 37.014057, 40.662848, 42.221079, 47.315558, 27.723432, 30.46385, 48.913298, 49.644555, 48.83396, 49.436824, 46.944059, 48.376613, 47.654503, 48.466331, 42.854333, 44.907682, 47.600253, 48.440245, 48.410926, 48.903468, 42.229292, 42.908294, 52.822466, 53.58012, 50.703491, 51.656037, 42.29378, 44.393379, 42.296912, 45.385809, 34.679282, 37.027699, 30.740622, 37.066377, 28.241967, 30.403134, 47.271949, 48.49848, 25.235818, 27.774976, 42.217425, 42.542102, 43.429763, 44.691016, 44.687044, 44.995758, 48.880431, 49.320551, 49.282865, 49.626267, 50.711607, 51.308382, 52.908547, 53.333963, 52.904419, 53.109706, 52.902338, 53.251938, 51.639701, 52.402205, 42.231045, 42.693581, 43.062756, 43.892771, 42.664519, 43.075927, 44.372942, 45.1815, 44.376327, 44.975476, 47.304623, 48.054453, 45.353174, 46.808493, 40.563653, 42.041556, 40.582164, 41.4064, 38.51618, 40.179105, 35.789745, 37.023144, 26.825402, 27.757641, 27.193806, 27.745766, 29.144229, 30.375186, 29.567889, 30.059102, 30.041938, 30.378006, 29.995047, 30.382338, 48.48834, 49.169021, 22.392816, 22.595333, 7.439914, 11.500161, 3.766676, 9.000793, 12.640512, 17.406563],
        fc = 3E3,
        gc = 2.0E-5,
        hc = 3.0E-6,
        ic = 0.0174532925194,
        jc = 0.0065,
        kc = 0.0060,
        lc = 4E4,
        mc = 0,
        nc = 3,
        oc = 1.0E-10,
        pc = 6370996.81,
        qc = 1E8;

    function rc(a, b, c) {
        for (var d = Yb, e = 0; e < d; e += 2)
            if (a.lng >= b[e] && a.lng <= b[e + 1] && a.lat >= c[e] && a.lat <= c[e + 1]) return o;
        return q
    }

    function sc(a) {
        var b = a.lng,
            c = a.lat,
            a = Math.sqrt(b * b + c * c) + Math.sin(c * fc * ic) * gc,
            b = Math.atan2(c, b) + Math.cos(b * fc * ic) * hc;
        return {
            lng: a * Math.cos(b) + jc,
            lat: a * Math.sin(b) + kc
        }
    }

    function tc(a) {
        var b = uc,
            c = {},
            d = a.lng,
            e = a.lat,
            f = 1,
            g = a.lng,
            i = a.lat,
            k = d - f,
            l = 0,
            m = e + f,
            n = 0,
            s = d - f,
            u = 0,
            w = e - f,
            y = 0,
            D = d + f,
            C = 0,
            F = e - f,
            z = 0,
            A = d + f,
            E = 0,
            G = e + f,
            P = 0,
            m = k = 0,
            m = xc(b, d, e),
            k = m.lng,
            m = m.lat;
        if (1.0E-6 >= yc(k, m, g, i)) return c.lng = d, c.lat = e, c;
        for (; ;) {
            k = d - f;
            m = e + f;
            s = d - f;
            w = e - f;
            D = d + f;
            F = e - f;
            A = d + f;
            G = e + f;
            d = xc(b, k, m);
            l = d.lng;
            n = d.lat;
            d = xc(b, s, w);
            u = d.lng;
            y = d.lat;
            d = xc(b, D, F);
            C = d.lng;
            z = d.lat;
            d = xc(b, A, G);
            E = d.lng;
            P = d.lat;
            d = yc(l, n, g, i);
            l = yc(u, y, g, i);
            u = yc(C, z, g, i);
            E = yc(E, P, g, i);
            if (1.0E-6 > d) return c.lng = k, c.lat = m, c;
            if (1.0E-6 > l) return c.lng = s, c.lat = w, c;
            if (1.0E-6 > u) return c.lng = D, c.lat = F, c;
            if (1.0E-6 > E) return c.lng = A, c.lat = G, c;
            C = 1 / d;
            l = 1 / l;
            u = 1 / u;
            E = 1 / E;
            d = (k * C + s * l + D * u + A * E) / (C + l + u + E);
            e = (m * C + w * l + F * u + G * E) / (C + l + u + E);
            m = xc(b, d, e);
            k = m.lng;
            m = m.lat;
            if (1.0E-6 >= yc(k, m, g, i)) return c.lng = d, c.lat = e, c;
            f *= 0.6;
            if (1.0E-6 > f) {
                a: {
                    c = (a.lng + 0.03 - (a.lng - 0.03)) / 1.0E-4 + 0.5; f = (a.lat + 0.03 - (a.lat - 0.03)) / 1.0E-4 + 0.5; g = a.lng * qc; i = a.lat * qc; w = 1.0E-4 * qc; k = g - w; m = g + w; s = i - w; D = i + w; C = l = u = E = j; A = l = w = F = u = E = 0; b(a); C = j;
                    for (G = 0; G <= c; G++) {
                        for (d = 0; d <= f; d++)
                            if (C = b(j), E = j.lng * qc, u = j.lat * qc, l = C.lng * qc, C = C.lat * qc, !(l < k || C < s || l > m || C > D)) {
                                E -= l;
                                u -= C;
                                l = Math.sqrt((g - l) * (g - l) + (i - C) * (i - C));
                                if (1 > l) {
                                    c = {};
                                    c.lng = j.lng;
                                    c.lat = j.lat;
                                    break a
                                }
                                F += 1 * E / l;
                                w += 1 * u / l;
                                A += 1 / l
                            }
                        F /= A * qc;
                        w /= A * qc
                    }
                    b = F * qc / qc; f = w * qc / qc; c = {}; c.lng = a.lng + b; c.lat = a.lat + f
                }
                return c
            }
        }
    }

    function xc(a, b, c) {
        a = a({
            lng: b,
            lat: c
        });
        b = {};
        b.lng = a.lng;
        b.lat = a.lat;
        return b
    }

    function zc(a, b, c, d) {
        var e = arguments.length;
        this.wg = {};
        this.Eg = {};
        0 !== e && 4 === e && this.normalize(a, b, c, d)
    }
    zc.prototype.contains = function (a) {
        return a.lng > this.wg.lng && a.lng < this.Eg.lng && a.lat > this.wg.lat && a.lat < this.Eg.lat ? nc : Math.abs(a.lng - this.wg.lng) < oc || Math.abs(a.lng - this.Eg.lng) < oc || Math.abs(a.lat - this.wg.lat) < oc || Math.abs(a.y - this.Eg.lat) > oc ? 2 : mc
    };
    zc.prototype.normalize = function (a, b, c, d) {
        a > c ? (this.wg.lng = c, this.Eg.lng = a) : (this.wg.lng = a, this.Eg.lng = c);
        b > d ? (this.wg.lat = d, this.Eg.lat = b) : (this.wg.lat = b, this.Eg.lat = d)
    };

    function Ac(a, b, c, d) {
        this.pu = {
            lng: a,
            lat: b
        };
        this.vx = {
            lng: c,
            lat: d
        };
        this.oy = new zc(a, b, c, d)
    }

    function Bc(a, b) {
        var c = a.lat * ic,
            d = b.lat * ic,
            e = c - d,
            f = a.lng * ic - b.lng * ic;
        return 2 * Math.asin(Math.sqrt(Math.sin(e / 2) * Math.sin(e / 2) + Math.cos(c) * Math.cos(d) * Math.sin(f / 2) * Math.sin(f / 2))) * pc
    }

    function yc(a, b, c, d) {
        return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d))
    }

    function Cc(a, b, c) {
        return (b.lng - a.lng) * (c.lat - a.lat) - (c.lng - a.lng) * (b.lat - a.lat)
    }

    function uc(a) {
        var b = {};
        if (a.lng < Wb[0] - 0.4 || a.lat < Wb[1] - 0.4 || a.lng > Wb[2] + 0.4 || a.lat > Wb[3] + 0.4) return b.lng = a.lng, b.lat = a.lat, b;
        if (rc(a, dc, ec)) return b = sc(a);
        for (var b = 0, c = lc, d = 0, e = new zc, f = 0, d = 0; d < ac; ++d) cc[d] <= a.lat ? cc[(d + 1) % ac] > a.lat && 0 < Cc({
            lng: bc[d],
            lat: cc[d]
        }, {
            lng: bc[(d + 1) % ac],
            lat: cc[(d + 1) % ac]
        }, a) && ++f : cc[(d + 1) % ac] <= a.lat && 0 > Cc({
            lng: bc[d],
            lat: cc[d]
        }, {
            lng: bc[(d + 1) % ac],
            lat: cc[(d + 1) % ac]
        }, a) && --f;
        if ((0 === f ? mc : nc) === mc) {
            for (f = 0; f < ac; ++f)
                if (d = new Ac(bc[f], cc[f], bc[(f + 1) % ac], cc[(f + 1) % ac]), e.wg.lng = d.oy.wg.lng - 0.5, e.wg.lat = d.oy.wg.lat - 0.5, e.Eg.lng = d.oy.Eg.lng + 0.5, e.Eg.lat = d.oy.Eg.lat + 0.5, e.contains(a) !== mc) {
                    var g;
                    var i = d.pu.lng,
                        k = d.pu.lat,
                        l = d.vx.lng,
                        m = d.vx.lat;
                    g = m - k;
                    var n = i - l;
                    !(Math.abs(g - 0) > oc) && !(Math.abs(n - 0) > oc) ? g = d.pu : (i = l * k - i * m, k = n * a.lng - g * a.lat, l = g * g - n * n, g = {
                        lng: (n * k - g * i) / l,
                        lat: -(g * k + n * i) / l
                    });
                    n = 180;
                    i = 90;
                    k = -180;
                    l = -90;
                    l = d.pu;
                    m = d.vx;
                    n = l.lng < m.lng ? l.lng : m.lng;
                    i = l.lat < m.lat ? l.lat : m.lat;
                    k = l.lng < m.lng ? l.lng : m.lng;
                    l = l.lat < m.lat ? l.lat : m.lat;
                    g.lng <= k && g.lng >= n && g.lng <= l && g.lat >= i ? (d = a.lat * ic, n = a.lng * ic, i = g.lat * ic, g = g.lng * ic, k = Math.cos(d) * Math.cos(i), d = k * Math.cos(n) * Math.cos(g) + k * Math.sin(n) * Math.sin(g) + Math.sin(d) * Math.sin(i), -1 > d ? d = -1 : 1 < d && (d = 1), d = Math.acos(d) * pc) : (g = Bc(a, d.pu), d = Bc(a, d.vx), d = g < d ? g : d);
                    d < c && (c = d)
                }
            c < lc && (b = (lc - c) / lc)
        } else b = 1;
        c = sc(a);
        return b = {
            lng: a.lng + (c.lng - a.lng) * b,
            lat: a.lat + (c.lat - a.lat) * b
        }
    }

    function Dc(a) {
        var b = {};
        if (a.lng < Xb[0] - 0.4 || a.lat < Xb[1] - 0.4 || a.lng > Xb[2] + 0.4 || a.lat > Xb[3] + 0.4) return b.lng = a.lng, b.lat = a.lat, b;
        if (rc(a, Zb, $b)) {
            var b = a.lng - jc,
                c = a.lat - kc,
                a = Math.sqrt(b * b + c * c) - Math.sin(c * fc * ic) * gc,
                b = Math.atan2(c, b) - Math.cos(b * fc * ic) * hc;
            return b = {
                lng: a * Math.cos(b),
                lat: a * Math.sin(b)
            }
        }
        c = uc(a);
        return a.lng === c.lng && a.lat === c.lng ? (b.lng = a.lng, b.lat = a.lat, b) : tc(a)
    }

    function $a(a, b) {
        if (b && b.B && b.B.ax && 3 === b.B.ax && a instanceof O) {
            var c = uc(a);
            return new K(c.lng, c.lat)
        }
        return a
    }

    function gb(a, b) {
        if (b && b.B && 3 === b.B.ax && a instanceof K) {
            var c = Dc(a);
            return new O(c.lng, c.lat)
        }
        return b && b.B && 5 === b.B.ax && a instanceof K ? new O(a.lng, a.lat) : a
    }

    function Ec(a) {
        a = a.split("//");
        if (2 <= a.length) {
            var b = a[1].split("?");
            if (1 <= b.length) {
                var c = b[0].split("/"),
                    d;
                d = b.length - 1;
                var e = 1,
                    f = "/",
                    g = c.length;
                e || (e = 0);
                d || (d = g - 1);
                f || (f = "");
                if (e > g - 1 || d > g - 1) d = "";
                else {
                    for (g = ""; e <= d; e++) g = e === d ? g + c[e] : g + (c[e] + f);
                    d = g
                }
                return {
                    host: b[0],
                    origin: a[0] + "//" + c[0],
                    path: "/" + d
                }
            }
        }
        return p
    };

    function ra(a, b) {
        if (/^http/.test(a)) return; // yangjianfei 添加
        if (b) {
            var c = (1E5 * Math.random()).toFixed(0);
            B._rd["_cbk" + c] = function (a) {
                b && b(a);
                delete B._rd["_cbk" + c]
            };
            a += "&callback=BMap._rd._cbk" + c
        }
        var a = Fc(a),
            d = H("script", {
                type: "text/javascript"
            });
        d.charset = "utf-8";
        d.src = a;
        d.addEventListener ? d.addEventListener("load", function (a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, q) : d.attachEvent && d.attachEvent("onreadystatechange", function () {
            var a = window.event.srcElement;
            a && ("loaded" === a.readyState || "complete" === a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function () {
            document.getElementsByTagName("head")[0].appendChild(d);
            d = p
        }, 1)
    }

    function Fc(a) {
        var b = decodeURIComponent(a.substring(a.indexOf("?") + 1)),
            c = (new Date).getTime(),
            d = window.___abvk ? window.___abvk : Gc("SECKEY_ABVK"),
            e = Gc("BMAP_SECKEY"),
            f = encodeURIComponent(d + "," + e); - 1 === a.indexOf("v=") && (a += "&v=2.1", b += "&v=2.1");
        return a = a + ("&seckey=" + f + "&timeStamp=" + c) + Hc()(b + ("&seckey=" + d + "," + e + "&timeStamp=" + c))
    }

    function Gc(a) {
        if (navigator.cookieEnabled) return (a = document.cookie.match(RegExp("(^| )" + a + "=([^;]*)(;|$)"))) ? unescape(a[2]) : -1;
        if (localStorage) return localStorage.getItem(a) ? localStorage.getItem(a) : -1;
        if (sessionStorage) return sessionStorage.getItem(a) ? localStorage.getItem(a) : -1
    };
    var Ic = {
        map: "dfvr0d",
        common: "jlxvtp",
        style: "1eb2kn",
        tile: "nv5she",
        vectordrawlib: "o22h0e",
        newvectordrawlib: "320ew3",
        groundoverlay: "k2rgsw",
        pointcollection: "aqf4rs",
        marker: "q3rtuf",
        symbol: "01xzbl",
        canvablepath: "h3fu23",
        vmlcontext: "boqb3g",
        markeranimation: "t5kflf",
        poly: "tnwlqr",
        draw: "svjlto",
        drawbysvg: "2yrgcy",
        drawbyvml: "ed2q2n",
        drawbycanvas: "fs1mzv",
        infowindow: "etoqbp",
        oppc: "eud3yb",
        opmb: "zckrwd",
        menu: "notpz4",
        control: "b1gvex",
        navictrl: "gmzd3q",
        geoctrl: "kmkjb0",
        copyrightctrl: "ywzoxv",
        citylistcontrol: "4x24ix",
        scommon: "fblso0",
        local: "x0h000",
        route: "xcxcfx",
        othersearch: "35z1cg",
        mapclick: "enxpsn",
        buslinesearch: "s0skh4",
        hotspot: "b3mqou",
        autocomplete: "lq3zav",
        coordtrans: "xfmqk2",
        coordtransutils: "1zgfxi",
        convertor: "3utjra",
        clayer: "jkukaa",
        pservice: "vruwmi",
        pcommon: "2sgsaq",
        panorama: "qq5xnh",
        panoramaflash: "zasr1a",
        vector: "gifqa5"
    };
    x.dz = function () {
        function a(a) {
            return d && !!c[b + a + "_" + Ic[a]]
        }
        var b = "BMap_",
            c = window.localStorage,
            d = "localStorage" in window && c !== p && c !== j;
        return {
            OY: d,
            set: function (a, f) {
                if (d) {
                    for (var g = b + a + "_", i = c.length, k; i--;) k = c.key(i), -1 < k.indexOf(g) && c.removeItem(k);
                    try {
                        c.setItem(b + a + "_" + Ic[a], f)
                    } catch (l) {
                        c.clear()
                    }
                }
            },
            get: function (e) {
                return d && a(e) ? c.getItem(b + e + "_" + Ic[e]) : q
            },
            yK: a
        }
    }();

    function L() { }
    x.object.extend(L, {
        Lj: {
            IG: -1,
            eQ: 0,
            mq: 1
        },
        KL: function () {
            var a = "canvablepath",
                b = B.dV ? "newvectordrawlib" : "vectordrawlib";
            if (!J() || !Pb()) Ob() || (Nb() ? a = "vmlcontext" : Pb());
            return {
                tile: [b, "style"],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === a ? [] : [a],
                vmlcontext: [],
                style: [],
                poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                citylistcontrol: ["autocomplete"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                convertor: [],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        r4: {},
        BG: {
            vQ: B.la + "getmodules?v=2.0&t=20140707",
            VU: 5E3
        },
        UC: q,
        Sd: {
            Bl: {},
            Nn: [],
            gw: []
        },
        load: function (a, b, c) {
            var d = this.jb(a);
            if (d.Dd == this.Lj.mq) c && b();
            else {
                if (d.Dd == this.Lj.IG) {
                    this.EK(a);
                    this.TN(a);
                    var e = this;
                    e.UC == q && (e.UC = o, setTimeout(function () {
                        for (var a = [], b = 0, c = e.Sd.Nn.length; b < c; b++) {
                            var d = e.Sd.Nn[b],
                                l = "";
                            ja.dz.yK(d) ? l = ja.dz.get(d) : (l = "", a.push(d + "_" + Ic[d]));
                            e.Sd.gw.push({
                                kN: d,
                                cF: l
                            })
                        }
                        e.UC = q;
                        e.Sd.Nn.length = 0;
                        0 == a.length ? e.pL() : ra(e.BG.vQ + "&mod=" + a.join(","))
                    }, 1));
                    d.Dd = this.Lj.eQ
                }
                d.bv.push(b)
            }
        },
        EK: function (a) {
            if (a && this.KL()[a])
                for (var a = this.KL()[a], b = 0; b < a.length; b++) this.EK(a[b]), this.Sd.Bl[a[b]] || this.TN(a[b])
        },
        TN: function (a) {
            for (var b = 0; b < this.Sd.Nn.length; b++)
                if (this.Sd.Nn[b] == a) return;
            this.Sd.Nn.push(a)
        },
        VZ: function (a, b) {
            var c = this.jb(a);
            try {
                eval(b)
            } catch (d) {
                return
            }
            c.Dd = this.Lj.mq;
            for (var e = 0, f = c.bv.length; e < f; e++) c.bv[e]();
            c.bv.length = 0
        },
        yK: function (a, b) {
            var c = this;
            c.timeout = setTimeout(function () {
                c.Sd.Bl[a].Dd != c.Lj.mq ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            }, c.BG.VU)
        },
        jb: function (a) {
            this.Sd.Bl[a] || (this.Sd.Bl[a] = {}, this.Sd.Bl[a].Dd = this.Lj.IG, this.Sd.Bl[a].bv = []);
            return this.Sd.Bl[a]
        },
        remove: function (a) {
            delete this.jb(a)
        },
        PV: function (a, b) {
            for (var c = this.Sd.gw, d = o, e = 0, f = c.length; e < f; e++) "" == c[e].cF && (c[e].kN == a ? c[e].cF = b : d = q);
            d && this.pL()
        },
        pL: function () {
            for (var a = this.Sd.gw, b = 0, c = a.length; b < c; b++) this.VZ(a[b].kN, a[b].cF);
            this.Sd.gw.length = 0
        }
    });

    function S(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    S.prototype.ab = function (a) {
        return a && a.x == this.x && a.y == this.y
    };

    function M(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    M.prototype.ab = function (a) {
        return a && this.width == a.width && this.height == a.height
    };
    (function (a) {
        function b(a, b) {
            var c = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
        }

        function c(a, c, d, e, f, g) {
            return b(b(b(c, a), b(e, g)) << f | b(b(c, a), b(e, g)) >>> 32 - f, d)
        }

        function d(a, b, d, e, f, g, i) {
            return c(b & d | ~b & e, a, b, f, g, i)
        }

        function e(a, b, d, e, f, g, i) {
            return c(b & e | d & ~e, a, b, f, g, i)
        }

        function f(a, b, d, e, f, g, i) {
            return c(d ^ (b | ~e), a, b, f, g, i)
        }

        function g(a, g) {
            a[g >> 5] |= 128 << g % 32;
            a[(g + 64 >>> 9 << 4) + 14] = g;
            var i, k, l, m, n, z = 1732584193,
                A = -271733879,
                E = -1732584194,
                G = 271733878;
            for (i = 0; i < a.length; i += 16) k = z, l = A, m = E, n = G, z = d(z, A, E, G, a[i], 7, -680876936), G = d(G, z, A, E, a[i + 1], 12, -389564586), E = d(E, G, z, A, a[i + 2], 17, 606105819), A = d(A, E, G, z, a[i + 3], 22, -1044525330), z = d(z, A, E, G, a[i + 4], 7, -176418897), G = d(G, z, A, E, a[i + 5], 12, 1200080426), E = d(E, G, z, A, a[i + 6], 17, -1473231341), A = d(A, E, G, z, a[i + 7], 22, -45705983), z = d(z, A, E, G, a[i + 8], 7, 1770035416), G = d(G, z, A, E, a[i + 9], 12, -1958414417), E = d(E, G, z, A, a[i + 10], 17, -42063), A = d(A, E, G, z, a[i + 11], 22, -1990404162), z = d(z, A, E, G, a[i + 12], 7, 1804603682), G = d(G, z, A, E, a[i + 13], 12, -40341101), E = d(E, G, z, A, a[i + 14], 17, -1502002290), A = d(A, E, G, z, a[i + 15], 22, 1236535329), z = e(z, A, E, G, a[i + 1], 5, -165796510), G = e(G, z, A, E, a[i + 6], 9, -1069501632), E = e(E, G, z, A, a[i + 11], 14, 643717713), A = e(A, E, G, z, a[i], 20, -373897302), z = e(z, A, E, G, a[i + 5], 5, -701558691), G = e(G, z, A, E, a[i + 10], 9, 38016083), E = e(E, G, z, A, a[i + 15], 14, -660478335), A = e(A, E, G, z, a[i + 4], 20, -405537848), z = e(z, A, E, G, a[i + 9], 5, 568446438), G = e(G, z, A, E, a[i + 14], 9, -1019803690), E = e(E, G, z, A, a[i + 3], 14, -187363961), A = e(A, E, G, z, a[i + 8], 20, 1163531501), z = e(z, A, E, G, a[i + 13], 5, -1444681467), G = e(G, z, A, E, a[i + 2], 9, -51403784), E = e(E, G, z, A, a[i + 7], 14, 1735328473), A = e(A, E, G, z, a[i + 12], 20, -1926607734), z = c(A ^ E ^ G, z, A, a[i + 5], 4, -378558), G = c(z ^ A ^ E, G, z, a[i + 8], 11, -2022574463), E = c(G ^ z ^ A, E, G, a[i + 11], 16, 1839030562), A = c(E ^ G ^ z, A, E, a[i + 14], 23, -35309556), z = c(A ^ E ^ G, z, A, a[i + 1], 4, -1530992060), G = c(z ^ A ^ E, G, z, a[i + 4], 11, 1272893353), E = c(G ^ z ^ A, E, G, a[i + 7], 16, -155497632), A = c(E ^ G ^ z, A, E, a[i + 10], 23, -1094730640), z = c(A ^ E ^ G, z, A, a[i + 13], 4, 681279174), G = c(z ^ A ^ E, G, z, a[i], 11, -358537222), E = c(G ^ z ^ A, E, G, a[i + 3], 16, -722521979), A = c(E ^ G ^ z, A, E, a[i + 6], 23, 76029189), z = c(A ^ E ^ G, z, A, a[i + 9], 4, -640364487), G = c(z ^ A ^ E, G, z, a[i + 12], 11, -421815835), E = c(G ^ z ^ A, E, G, a[i + 15], 16, 530742520), A = c(E ^ G ^ z, A, E, a[i + 2], 23, -995338651), z = f(z, A, E, G, a[i], 6, -198630844), G = f(G, z, A, E, a[i + 7], 10, 1126891415), E = f(E, G, z, A, a[i + 14], 15, -1416354905), A = f(A, E, G, z, a[i + 5], 21, -57434055), z = f(z, A, E, G, a[i + 12], 6, 1700485571), G = f(G, z, A, E, a[i + 3], 10, -1894986606), E = f(E, G, z, A, a[i + 10], 15, -1051523), A = f(A, E, G, z, a[i + 1], 21, -2054922799), z = f(z, A, E, G, a[i + 8], 6, 1873313359), G = f(G, z, A, E, a[i + 15], 10, -30611744), E = f(E, G, z, A, a[i + 6], 15, -1560198380), A = f(A, E, G, z, a[i + 13], 21, 1309151649), z = f(z, A, E, G, a[i + 4], 6, -145523070), G = f(G, z, A, E, a[i + 11], 10, -1120210379), E = f(E, G, z, A, a[i + 2], 15, 718787259), A = f(A, E, G, z, a[i + 9], 21, -343485551), z = b(z, k), A = b(A, l), E = b(E, m), G = b(G, n);
            return [z, A, E, G]
        }

        function i(a) {
            var b, c = "",
                d = 32 * a.length;
            for (b = 0; b < d; b += 8) c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
            return c
        }

        function k(a) {
            var b, c = [];
            c[(a.length >> 2) - 1] = j;
            for (b = 0; b < c.length; b += 1) c[b] = 0;
            var d = 8 * a.length;
            for (b = 0; b < d; b += 8) c[b >> 5] |= (a.charCodeAt(b / 8) & 255) << b % 32;
            return c
        }

        function l(a) {
            var b = "",
                c, d;
            for (d = 0; d < a.length; d += 1) c = a.charCodeAt(d), b += "0123456789abcdef".charAt(c >>> 4 & 15) + "0123456789abcdef".charAt(c & 15);
            return b
        }

        function m(a, b) {
            var c = unescape(encodeURIComponent(a)),
                d = unescape(encodeURIComponent(b)),
                e = k(c),
                f = [],
                l = [];
            f[15] = l[15] = j;
            16 < e.length && (e = g(e, 8 * c.length));
            for (c = 0; 16 > c; c += 1) f[c] = e[c] ^ 909522486, l[c] = e[c] ^ 1549556828;
            d = g(f.concat(k(d)), 512 + 8 * d.length);
            return i(g(l.concat(d), 640))
        }

        function n(a, b, c) {
            return !b ? !c ? l(i(g(k(unescape(encodeURIComponent(a))), 8 * unescape(encodeURIComponent(a)).length))) : i(g(k(unescape(encodeURIComponent(a))), 8 * unescape(encodeURIComponent(a)).length)) : !c ? l(m(b, a)) : m(b, a)
        }
        "function" === typeof define && define.S1 ? define(function () {
            return n
        }) : "object" === typeof module && module.ZW ? module.ZW = n : a.md5 = n
    })(this);
    for (var Jc = function (a, b) {
        function c(a) {
            return f.emeie(e, a, function (a) {
                return d(a)
            })
        }

        function d(a) {
            return f.edaxd(a, "")[f.xxcce][f.mxila(f.mxila(k, "Char"), i)](a)
        }

        function e(a, b) {
            for (var c = a.length, d = [], e = 0; f.ccmlh(e, c); e++) {
                var g = f.mhmcx(b, a[e]);
                d.push(g)
            }
            return d
        }
        var f = {
            ccmlh: function (a, b) {
                return a < b
            },
            mhmcx: function (a, b) {
                return a(b)
            },
            edaxd: function (a, b) {
                return a + b
            },
            xxcce: "constructor",
            mxila: function (a, b) {
                return a + b
            },
            emeie: function (a, b, c) {
                return a(b, c)
            },
            clxhe: "1.1.2",
            ixhex: function (a, b) {
                return a + b
            }
        },
            g, i, k, l = decodeURIComponent;
        g = "de";
        k = f.ixhex("fr", "o") + "m";
        i = f.ixhex("Co", g);
        var m = c.call(d, [39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 110, 109, 111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
        g = e([28782, 27702, 26416, 25167, 24183], function (a) {
            return l(a)
        });
        var n = c.call(g, [22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547, 22984, 25690, 22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368, 29532, 29459, 29530, 24146, 24500, 26352, 27441, 28788, 29370, 27673, 26925, 25249, 24430]),
            s = {};
        g = f.mhmcx(c, g);
        var u = RegExp(g.join("|"));
        for (g = 0; g < m.length; g++) s[n[g]] = m[g];
        b = f.emeie(e, b.split(""), function (a) {
            return s[a] || a
        }).join("");
        return e(b.split(u), function (a) {
            return l(a)
        })
    }(this, "\u5f5f\u66f0\u6c19\u5f5f\u66f0\u5e52\u59c8\u5ef2ll\u5c2b\u5ef2\u59c8k\u5f5f\u6b31\u6b9b\u5e77l\u56c4\u735c\u59c8\u59c8\u706e\u5f5f\u6b31\u7209qt\u5f5f\u6b31\u6b9b\u735a\u5ef2\u72b8\u7313_\u545a\u72b8try\u5f5f\u66f0\u6c19v\u5f5f\u6b31\u6b9b\u6730\u545a\u59c8\u545a\u545a\u5ef2\u6c36\u5ef2\u5ef2\u545a\u59c8\u5ef2\u6730h\u59c8ll\u545a\u706e\u545a\u735cii\u5ef2\u5e77\u59c8\u58a0\u545ah\u5ef2\u6c36\u5f5f\u6a4a\u5f6e\u5f5f\u5f6e\u645a\u5f5f\u62a1\u5e52\u5f5f\u6a4a\u62a1\u5f5f\u6256\u6c19\u5f5f\u62a1\u5fb4\u5f5f\u6a4a\u692d\u5f5f\u5f6e\u7074\u5f5f\u63cb\u6b31\u5f5f\u6a4a\u62a1\u5f5f\u6256\u7209\u5f5f\u63cb\u692d\u5f5f\u6a4a\u72ba\u5f5f\u62a1\u72ba\u5f5f\u6256\u62a1\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u5f6e\u5f5f\u6256\u7209\u5f5f\u6a4a\u72ba\u5f5f\u5f6e\u645a\u5f5f\u63cb\u5e52\u5f5f\u6a4a\u72ba\u5f5f\u5f6e\u63cb\u5f5f\u63cb\u6a4a\u5f5f\u6a4a\u7074\u5f5f\u63cb\u6b9b\u5f5f\u63cb\u7209\u5f5f\u6a4a\u692d\u5f5f\u5f6e\u7074\u5f5f\u6256\u62a1\u5f5f\u6a4a\u6c19\u5f5f\u5f6e\u6b9b\u5f5f\u62a1\u6b31\u5f5f\u6a4a\u5f6e\u5f5f\u5f6e\u5f6e\u5f5f\u5f6e\u5e52\u6c36i\u5ef2\u5ef2\u6730\u545a\u735cl\u6c36\u5ef2\u59c8\u5ef2\u706e\u545a\u56c4l\u706e\u735c\u5ef2l\u624fl\u545a\u5ef2\u6730ih\u58a0i\u706e\u59c8\u59c8\u735c\u6c36\u545a\u545ah\u624f\u735c\u735c\u59c8\u5e77\u545a\u545a\u5ef2l\u5ef2\u624f\u735c\u56c4\u56c4\u5ef2\u6730hh\u545a\u6730\u545a\u5ef2\u5ef2\u59c8i\u5e77hh\u735c\u545a\u5ef2\u5e77\u56c4\u5ef2\u59c8\u5ef2\u545a\u6c36\u545arr\u7313r\u5e77\u5ef2lh\u5ef2\u5ef2\u6730\u545a\u56c4\u5ef2\u58a0\u5ef2\u6c36l\u5ef2h\u5ef2\u706el\u5ef2\u735clh\u624f\u56c4\u545a\u5ef2\u5ef2\u545a\u5e77\u5ef2ih\u59c8\u5ef2\u5e77\u5f5f\u6b31\u7209qt\u5f5f\u6b31\u6b9b\u735a\u5ef2\u72b8\u7313_\u59c8\u7313u\u72b8t\u5f5f\u66f0\u6c19v\u5f5f\u6b31\u6b9b\u6c36\u5f5f\u66f0\u6c19\u5ef2k\u5f5f\u6b31\u6b9b\u6c36\u5f5f\u66f0\u6c19\u59c8\u7313\u72b8su\u735c\u545a\u5f5f\u6b31\u6b9b\u624f\u5ef2\u58a0l\u545a\u735c\u6730\u545a\u735c\u545a\u56c4i\u706e\u5ef2h\u5ef2\u58a0\u545a\u6c36P\u6256NOR\u6256M\u6256\u6730\u56c4\u58a0h\u6730\u58a0l\u56c4\u5ef2\u5ef2\u624f\u545a\u56c4\u56c4l\u735c\u6c36\u5ef2uth_k\u545ay\u5f5f\u6b31\u6b9b\u6730\u545a\u58a0\u545a\u56c4\u545a\u624fSJv\u6a4aY\u72bah\u6b31\u692dZ\u6b9bh\u72ba\u735aHS\u6730\u735a\u5ef2rs\u545a\u624fh\u5ef2\u545a\u735c\u58a0\u6730\u5ef2\u545ahl\u59c8\u706e\u545al\u545ai\u545a\u6c36h\u56c4\u735c\u545ah\u6730\u5ef2\u545ai\u735ch\u5e77\u58a0\u5ef2\u59c8\u5ef2l\u6c36\u545a\u545ai\u735ci\u6730il\u5ef2\u545a\u56c4\u6c36l\u545a\u735cl\u59c8\u6730\u5a32u\u72b8\u59c8ti\u7313\u72b8"), Kc = 233, Lc = ++Kc; --Lc;) Jc.push(Jc.shift());

    function V(a) {
        return Jc[a - 0]
    }
    var Oc = function (a) {
        for (var b = {
            alhaa: V("0x0"),
            edaxa: function (a, b) {
                return a !== b
            },
            lamlh: V("0x1"),
            deaae: function (a, b) {
                return a + b
            },
            aihca: function (a, b) {
                return a + b
            },
            axlem: V("0x2"),
            hhmea: V("0x3"),
            dacae: V("0x4"),
            xldaa: V("0x5"),
            eddlm: V("0x6"),
            eeala: V("0x7"),
            imhae: V("0x8"),
            eaaci: V("0x9"),
            hmehx: "hhe"
        }, c = b[V("0xa")]; c !== V("0xb");) switch (c) {
            case V("0x9"):
                var d = a ? a : 5E3,
                    c = b.imhae;
                break;
            case V("0xc"):
                var e = 0,
                    c = b[V("0xd")];
                break;
            case "eeh":
                return function (a) {
                    for (var c = V("0x3"); c !== V("0x6");) switch (c) {
                        case b[V("0xe")]:
                            e += a;
                            c = b[V("0xf")];
                            break;
                        case b.xldaa:
                            f = setTimeout(function () {
                                for (var a = {
                                    alldi: function (a, b) {
                                        return a !== b
                                    },
                                    emedi: V("0x10"),
                                    ahaxe: "PANORAMA"
                                }, c = b[V("0x11")]; b[V("0x12")](c, V("0x13"));) switch (c) {
                                    case b[V("0x14")]:
                                        f = p;
                                        c = V("0x13");
                                        break;
                                    case "dxh":
                                        e = 0;
                                        c = b[V("0x14")];
                                        break;
                                    case b[V("0x11")]:
                                        var d = b[V("0x15")](b.aihca(b[V("0x16")](B.JN + V("0x17"), B.version) + V("0x18"), qa) + V("0x19"), e),
                                            c = V("0x2");
                                        break;
                                    case b[V("0x1a")]:
                                        ra(d, function (b) {
                                            (!b || b[V("0x10")] === j || 0 !== b[a[V("0x1b")]]) && Mc(a[V("0x1c")], function (b) {
                                                (!b || b[V("0x10")] === j || a.alldi(b[a.emedi], 0)) && Nc(V("0x1d"))
                                            })
                                        }), c = V("0x1e")
                                }
                            }, d);
                            c = b.eddlm;
                            break;
                        case b[V("0xf")]:
                            if (!f) {
                                c = b[V("0x1f")];
                                break
                            }
                            c = b[V("0x20")]
                    }
                };
            case V("0x7"):
                var f = p,
                    c = b.hmehx
        }
    }();

    function Pc(a, b) {
        var c = {
            exede: function (a, b) {
                return a === b
            },
            haemx: function (a, b) {
                return a / b
            },
            aehlc: function (a, b) {
                return a + b
            },
            eleie: function (a, b) {
                return a + b
            },
            hdmeh: function (a, b) {
                return a + b
            },
            aeimh: function (a, b) {
                return a + b
            },
            xacal: function (a, b) {
                return a(b)
            },
            eeimi: function (a, b) {
                return a + b
            },
            ilaed: V("0x21"),
            lemlc: function (a, b) {
                return a + b
            }
        },
            d, e;
        b ? (d = b.fW ? b.fW : 1, e = c[V("0x22")](b.yp, q) ? q : o) : (d = 1, e = o);
        var f = V("0x23"),
            g = Date[V("0x24")](new Date),
            i = c[V("0x25")](g, 1E3),
            f = c[V("0x26")](c[V("0x27")](c.hdmeh(c[V("0x28")](c[V("0x29")](a + "-" + (i + 1800), "-"), g), "-"), qa) + "-", f),
            f = c[V("0x2a")](md5, f),
            c = c[V("0x29")](c[V("0x2b")](c[V("0x2b")](c[V("0x2b")](c[V("0x2c")], c[V("0x2d")](i, 1800)) + "-" + g + "-", qa), "-"), f);
        e && Oc(d);
        return c
    }

    function Mc(a, b) {
        var c = {
            ldmcc: V("0x1d"),
            hclle: function (a, b) {
                return a + b
            },
            eceea: V("0x18"),
            aaeca: V("0x2e"),
            alaei: V("0x2f")
        };
        switch (a) {
            case c[V("0x30")]:
                var d = c.hclle(B.JN + V("0x31"), B.version) + c[V("0x32")] + qa;
                typeof b === c[V("0x33")] ? ra(d, b) : ra(c[V("0x34")](d + c.alaei, b))
        }
    }

    function Nc(a) {
        var b = {
            emiia: "PANORAMA",
            cxeha: function (a, b) {
                return a(b)
            }
        };
        switch (a) {
            case b[V("0x35")]:
                b[V("0x36")](alert, V("0x37"))
        }
    };

    function Hc() {
        function a(a) {
            return b[a - 0]
        }
        var b = function (a, b) {
            function e(a) {
                return i.xaxma(g, a, function (a) {
                    return i.eiiee(f, a)
                })
            }

            function f(a) {
                return i.chial(a, "")[i.xaaid][i.haeil(m + s, l)](a)
            }

            function g(a, b) {
                for (var c = "iae"; i.iaece(c, "eeeh");) switch (c) {
                    case i.ialih:
                        return e;
                    case "acx":
                        for (c = 0; c < f; c++) {
                            var d = i.axxce(b, a[c]);
                            e.push(d)
                        }
                        c = "ihl";
                        break;
                    case i.helex:
                        var e = [],
                            c = "acx";
                        break;
                    case i.xaimx:
                        var f = a.length,
                            c = "ecx"
                }
            }
            var i = {
                iaece: function (a, b) {
                    return a !== b
                },
                ialih: "ihl",
                axxce: function (a, b) {
                    return a(b)
                },
                helex: "ecx",
                xaimx: "iae",
                chial: function (a, b) {
                    return a + b
                },
                xaaid: "constructor",
                haeil: function (a, b) {
                    return a + b
                },
                eiiee: function (a, b) {
                    return a(b)
                },
                xaxma: function (a, b, c) {
                    return a(b, c)
                },
                eaaia: "1.1.2",
                aadhe: "Char",
                cealx: function (a, b) {
                    return a + b
                }
            },
                k, l, m, n = decodeURIComponent,
                s = i.aadhe;
            k = "de";
            m = i.haeil("fro", "m");
            l = i.cealx("Co", k);
            var u = e.call(f, [39, 34, 37, 96, 60, 120, 97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 110, 109, 111, 112, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57]);
            k = g([28782, 27702, 26416, 25167, 24183], function (a) {
                return i.eiiee(n, a)
            });
            var w = e.call(k, [22354, 22749, 24415, 23346, 22257, 22688, 24306, 25174, 23595, 25547, 22984, 25690, 22212, 27547, 21594, 27210, 23090, 29193, 22394, 29368, 29532, 29459, 29530, 24146, 24500, 26352, 27441, 28788, 29370, 27673, 26925, 25249, 24430]),
                y = {};
            k = e(k);
            var D = RegExp(k.join("|"));
            for (k = 0; k < u.length; k++) y[w[k]] = u[k];
            b = g(b.split(""), function (a) {
                return y[a] || a
            }).join("");
            return g(b.split(D), function (a) {
                return n(a)
            })
        }(this, "\u7209\u72baL\u66f0O\u6c19R\u6c19\u6256\u6b9b\u62a1\u5f6e\u5f6e\u5e52O\u5e77l\u545a\u545a\u624f\u5ef2hl\u6730\u545a\u58a0\u735c\u5ef2\u545a\u6730\u56c4\u5ef2\u735c\u58a0\u735c\u6730\u5ef2\u5ef2\u58a0\u59c8i\u706esu\u5c2bstri\u72b8\u577a\u5e77l\u545a\u72b8\u577ath\u706e\u545a\u735c\u545a\u56c4h\u624f\u5ef2h\u545ah\u58a0\u5e77\u59c8\u545a\u58a0\u59c8\u545a\u5e77\u58a0il\u624f\u735cih\u5ef2i\u624fh\u5ef2\u545al\u545a\u624f\u545ahl\u58a0i\u5e77H\u5e52\u6256\u5f6eP\u62a1P\u692dY\u6c19\u6256\u63cbQO\u5e52\u706e\u56c4\u545a\u545a\u6c36\u5f5f\u66f0\u6c19si\u577a\u72b8\u5f5f\u6b31\u6b9b");
        (function (a, b) {
            for (var e = ++b; --e;) a.push(a.shift())
        })(b, 394);
        return function (b) {
            for (var d = {
                exmae: a("0x0"),
                damxm: function (a, b) {
                    return a + b
                },
                aaxci: a("0x1"),
                emedh: "ahl",
                ahehx: a("0x2"),
                cexce: a("0x3"),
                mihai: function (a, b) {
                    return a(b)
                },
                haele: function (a, b) {
                    return a + b
                },
                ehlxi: function (a, b) {
                    return a + b
                }
            }, e = a("0x4");
                "lcha" !== e;) switch (e) {
                    case d[a("0x5")]:
                        return d[a("0x6")](d[a("0x7")], g[a("0x8")](g[a("0x9")] - 12));
                    case d[a("0xa")]:
                        var f = d[a("0xb")],
                            e = d[a("0xc")];
                        break;
                    case a("0xd"):
                        var g = d[a("0xe")](md5, d[a("0xf")](md5(d[a("0x10")](b, f)), i)),
                            e = d[a("0x5")];
                        break;
                    case d.cexce:
                        var i = a("0x11"),
                            e = a("0xd")
                }
        }
    };

    function lb(a, b) {
        a && (this.Kb = a, this.ba = "spot" + lb.ba++, b = b || {}, this.Xg = b.text || "", this.Mv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.NJ = b.userData || p, this.Uh = b.minZoom || p, this.Gf = b.maxZoom || p)
    }
    lb.ba = 0;
    x.extend(lb.prototype, {
        ra: function (a) {
            this.Uh == p && (this.Uh = a.B.fc);
            this.Gf == p && (this.Gf = a.B.Zb)
        },
        ta: function (a) {
            if (a instanceof O || a instanceof K) this.Kb = a
        },
        ia: v("Kb"),
        hu: da("Xg"),
        nE: v("Xg"),
        setUserData: da("NJ"),
        getUserData: v("NJ")
    });

    function Qc() {
        this.D = p;
        this.Lb = "control";
        this.Pa = this.rK = o
    }
    x.lang.ua(Qc, x.lang.Da, "Control");
    x.extend(Qc.prototype, {
        initialize: function (a) {
            this.D = a;
            if (this.C) return a.Ua.appendChild(this.C), this.C
        },
        Ie: function (a) {
            !this.C && (this.initialize && ab(this.initialize)) && (this.C = this.initialize(a));
            this.k = this.k || {
                Dg: q
            };
            this.PB();
            this.Xr();
            this.C && (this.C.wr = this)
        },
        PB: function () {
            var a = this.C;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.Zu || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.k.Dg || x.K.Ta(a, "BMap_noprint");
                J() || x.M(a, "contextmenu", oa)
            }
        },
        remove: function () {
            this.D = p;
            this.C && (this.C.parentNode && this.C.parentNode.removeChild(this.C), this.C = this.C.wr = p)
        },
        Ba: function () {
            this.C = Cb(this.D.Ua, "<div unselectable='on'></div>");
            this.Pa == q && x.K.U(this.C);
            return this.C
        },
        Xr: function () {
            this.qc(this.k.anchor)
        },
        qc: function (a) {
            if (this.T1 || !Za(a) || isNaN(a) || a < Rc || 3 < a) a = this.defaultAnchor;
            this.k = this.k || {
                Dg: q
            };
            this.k.Aa = this.k.Aa || this.defaultOffset;
            var b = this.k.anchor;
            this.k.anchor = a;
            if (this.C) {
                var c = this.C,
                    d = this.k.Aa.width,
                    e = this.k.Aa.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                    case Rc:
                        c.style.top = e + "px";
                        c.style.left = d + "px";
                        break;
                    case Sc:
                        c.style.top = e + "px";
                        c.style.right = d + "px";
                        break;
                    case Tc:
                        c.style.bottom = e + "px";
                        c.style.left = d + "px";
                        break;
                    case 3:
                        c.style.bottom = e + "px", c.style.right = d + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                x.K.Tb(this.C, "anchor" + c[b]);
                x.K.Ta(this.C, "anchor" + c[a])
            }
        },
        RD: function () {
            return this.k.anchor
        },
        getContainer: v("C"),
        Ye: function (a) {
            a instanceof M && (this.k = this.k || {
                Dg: q
            }, this.k.Aa = new M(a.width, a.height), this.C && this.qc(this.k.anchor))
        },
        Qf: function () {
            return this.k.Aa
        },
        Ld: v("C"),
        show: function () {
            this.Pa != o && (this.Pa = o, this.C && x.K.show(this.C))
        },
        U: function () {
            this.Pa != q && (this.Pa = q, this.C && x.K.U(this.C))
        },
        isPrintable: function () {
            return !!this.k.Dg
        },
        oh: function () {
            return !this.C && !this.D ? q : !!this.Pa
        }
    });
    var Rc = 0,
        Sc = 1,
        Tc = 2;

    function mb(a) {
        Qc.call(this);
        a = a || {};
        this.k = {
            Dg: q,
            UF: a.showZoomInfo || o,
            anchor: a.anchor,
            Aa: a.offset,
            type: a.type,
            SW: a.enableGeolocation || q
        };
        this.defaultAnchor = J() ? 3 : Rc;
        this.defaultOffset = new M(10, 10);
        this.qc(a.anchor);
        this.wn(a.type);
        this.Ee()
    }
    x.lang.ua(mb, Qc, "NavigationControl");
    x.extend(mb.prototype, {
        initialize: function (a) {
            this.D = a;
            return this.C
        },
        wn: function (a) {
            this.k.type = Za(a) && 0 <= a && 3 >= a ? a : 0
        },
        pp: function () {
            return this.k.type
        },
        Ee: function () {
            var a = this;
            L.load("navictrl", function () {
                a.yf()
            })
        }
    });

    function Uc(a) {
        Qc.call(this);
        a = a || {};
        this.k = {
            anchor: a.anchor || Tc,
            Aa: a.offset || new M(10, 30),
            G_: a.showAddressBar !== q,
            B2: a.enableAutoLocation || q,
            ZM: a.locationIcon || p
        };
        var b = this;
        this.Zu = 1200;
        b.u0 = [];
        this.qe = [];
        L.load("geoctrl", function () {
            (function d() {
                if (0 !== b.qe.length) {
                    var a = b.qe.shift();
                    b[a.method].apply(b, a.arguments);
                    d()
                }
            })();
            b.uQ()
        });
        Ta(Ka)
    }
    x.lang.ua(Uc, Qc, "GeolocationControl");
    x.extend(Uc.prototype, {
        location: function () {
            this.qe.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: ea(p)
    });

    function Vc(a) {
        Qc.call(this);
        a = a || {};
        this.k = {
            Dg: q,
            anchor: a.anchor,
            Aa: a.offset
        };
        this.bc = [];
        this.defaultAnchor = Tc;
        this.defaultOffset = new M(5, 2);
        this.qc(a.anchor);
        this.rK = q;
        this.Ee()
    }
    x.lang.ua(Vc, Qc, "CopyrightControl");
    x.object.extend(Vc.prototype, {
        initialize: function (a) {
            this.D = a;
            return this.C
        },
        Dw: function (a) {
            if (a && Za(a.id) && !isNaN(a.id)) {
                var b = {
                    bounds: p,
                    content: ""
                },
                    c;
                for (c in a) b[c] = a[c];
                if (a = this.Am(a.id))
                    for (var d in b) a[d] = b[d];
                else this.bc.push(b)
            }
        },
        Am: function (a) {
            for (var b = 0, c = this.bc.length; b < c; b++)
                if (this.bc[b].id == a) return this.bc[b]
        },
        YD: v("bc"),
        uF: function (a) {
            for (var b = 0, c = this.bc.length; b < c; b++) this.bc[b].id == a && (r = this.bc.splice(b, 1), b--, c = this.bc.length)
        },
        Ee: function () {
            var a = this;
            L.load("copyrightctrl", function () {
                a.yf()
            })
        }
    });

    function ob(a) {
        Qc.call(this);
        a = a || {};
        this.k = {
            Dg: q,
            size: a.size || new M(150, 150),
            padding: 5,
            Va: a.isOpen === o ? o : q,
            K0: 4,
            Aa: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new M(0, 0);
        this.Kq = this.Lq = 13;
        this.qc(a.anchor);
        this.Ce(this.k.size);
        this.Ee()
    }
    x.lang.ua(ob, Qc, "OverviewMapControl");
    x.extend(ob.prototype, {
        initialize: function (a) {
            this.D = a;
            return this.C
        },
        qc: function (a) {
            Qc.prototype.qc.call(this, a)
        },
        se: function () {
            this.se.to = o;
            this.k.Va = !this.k.Va;
            this.C || (this.se.to = q)
        },
        Ce: function (a) {
            a instanceof M || (a = new M(150, 150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.k.size = a
        },
        vb: function () {
            return this.k.size
        },
        Va: function () {
            return this.k.Va
        },
        Ee: function () {
            var a = this;
            L.load("control", function () {
                a.yf()
            })
        }
    });

    function Xc(a) {
        Qc.call(this);
        a = a || {};
        this.defaultAnchor = Rc;
        this.MV = a.canCheckSize === q ? q : o;
        this.ij = "";
        this.defaultOffset = new M(10, 10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.k = {
            Dg: q,
            Aa: a.offset || this.defaultOffset,
            anchor: a.anchor || this.defaultAnchor,
            expand: !!a.expand
        };
        a.onChangeBefore && ab(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && ab(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && ab(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.qc(a.anchor);
        this.Ee()
    }
    x.lang.ua(Xc, Qc, "CityListControl");
    x.object.extend(Xc.prototype, {
        initialize: function (a) {
            this.D = a;
            return this.C
        },
        Ee: function () {
            var a = this;
            L.load("citylistcontrol", function () {
                a.yf()
            }, o)
        }
    });

    function nb(a) {
        Qc.call(this);
        a = a || {};
        this.k = {
            Dg: q,
            color: "black",
            dd: "metric",
            Aa: a.offset
        };
        this.defaultAnchor = Tc;
        this.defaultOffset = new M(81, 18);
        this.qc(a.anchor);
        this.ei = {
            metric: {
                name: "metric",
                GK: 1,
                sM: 1E3,
                aP: "\u7c73",
                bP: "\u516c\u91cc"
            },
            us: {
                name: "us",
                GK: 3.2808,
                sM: 5280,
                aP: "\u82f1\u5c3a",
                bP: "\u82f1\u91cc"
            }
        };
        this.ei[this.k.dd] || (this.k.dd = "metric");
        this.lJ = p;
        this.LI = {};
        this.Ee()
    }
    x.lang.ua(nb, Qc, "ScaleControl");
    x.object.extend(nb.prototype, {
        initialize: function (a) {
            this.D = a;
            return this.C
        },
        Sk: function (a) {
            this.k.color = a + ""
        },
        S2: function () {
            return this.k.color
        },
        RF: function (a) {
            this.k.dd = this.ei[a] && this.ei[a].name || this.k.dd
        },
        kY: function () {
            return this.k.dd
        },
        Ee: function () {
            var a = this;
            L.load("control", function () {
                a.yf()
            })
        }
    });
    var Yc = 0;

    function pb(a) {
        Qc.call(this);
        a = a || {};
        this.defaultAnchor = Sc;
        this.defaultOffset = new M(10, 10);
        this.k = {
            Dg: q,
            qh: [Oa, bb, Ua, Ra],
            uW: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || Yc,
            Aa: a.offset || this.defaultOffset,
            WW: o
        };
        this.qc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.k.qh = a.mapTypes.slice(0));
        this.Ee()
    }
    x.lang.ua(pb, Qc, "MapTypeControl");
    x.object.extend(pb.prototype, {
        initialize: function (a) {
            this.D = a;
            return this.C
        },
        ez: function (a) {
            this.D.jo = a
        },
        Ee: function () {
            var a = this;
            L.load("control", function () {
                a.yf()
            }, o)
        }
    });

    function Zc(a) {
        Qc.call(this);
        a = a || {};
        this.k = {
            Dg: q,
            Aa: a.offset,
            anchor: a.anchor
        };
        this.Wi = q;
        this.lw = p;
        this.VI = new $c({
            of: "api"
        });
        this.WI = new ad(p, {
            of: "api"
        });
        this.defaultAnchor = Sc;
        this.defaultOffset = new M(10, 10);
        this.qc(a.anchor);
        this.Ee();
        Ta(xa)
    }
    x.lang.ua(Zc, Qc, "PanoramaControl");
    x.extend(Zc.prototype, {
        initialize: function (a) {
            this.D = a;
            return this.C
        },
        Ee: function () {
            var a = this;
            L.load("control", function () {
                a.yf()
            })
        }
    });

    function bd(a) {
        x.lang.Da.call(this);
        this.k = {
            Ua: p,
            cursor: "default"
        };
        this.k = x.extend(this.k, a);
        this.Lb = "contextmenu";
        this.D = p;
        this.ya = [];
        this.Jf = [];
        this.Ge = [];
        this.jx = this.ys = p;
        this.Th = q;
        var b = this;
        L.load("menu", function () {
            b.Ab()
        })
    }
    x.lang.ua(bd, x.lang.Da, "ContextMenu");
    x.object.extend(bd.prototype, {
        ra: function (a, b) {
            this.D = a;
            this.Gl = b || p
        },
        remove: function () {
            this.D = this.Gl = p
        },
        Fw: function (a) {
            if (a && !("menuitem" != a.Lb || "" == a.Xg || 0 >= a.dj)) {
                for (var b = 0, c = this.ya.length; b < c; b++)
                    if (this.ya[b] === a) return;
                this.ya.push(a);
                this.Jf.push(a)
            }
        },
        removeItem: function (a) {
            if (a && "menuitem" == a.Lb) {
                for (var b = 0, c = this.ya.length; b < c; b++) this.ya[b] === a && (this.ya[b].remove(), this.ya.splice(b, 1), c--);
                b = 0;
                for (c = this.Jf.length; b < c; b++) this.Jf[b] === a && (this.Jf[b].remove(), this.Jf.splice(b, 1), c--)
            }
        },
        iC: function () {
            this.ya.push({
                Lb: "divider",
                Uj: this.Ge.length
            });
            this.Ge.push({
                K: p
            })
        },
        wF: function (a) {
            if (this.Ge[a]) {
                for (var b = 0, c = this.ya.length; b < c; b++) this.ya[b] && ("divider" == this.ya[b].Lb && this.ya[b].Uj == a) && (this.ya.splice(b, 1), c--), this.ya[b] && ("divider" == this.ya[b].Lb && this.ya[b].Uj > a) && this.ya[b].Uj--;
                this.Ge.splice(a, 1)
            }
        },
        Ld: v("C"),
        show: function () {
            this.Th != o && (this.Th = o)
        },
        U: function () {
            this.Th != q && (this.Th = q)
        },
        m_: function (a) {
            a && (this.k.cursor = a)
        },
        getItem: function (a) {
            return this.Jf[a]
        }
    });
    var cd = I.pa + "menu_zoom_in.png",
        dd = I.pa + "menu_zoom_out.png";

    function ed(a, b, c) {
        if (a && ab(b)) {
            x.lang.Da.call(this);
            this.k = {
                width: 100,
                id: "",
                Pm: ""
            };
            c = c || {};
            this.k.width = 1 * c.width ? c.width : 100;
            this.k.id = c.id ? c.id : "";
            this.k.Pm = c.iconUrl ? c.iconUrl : "";
            this.Xg = a + "";
            this.Tz = b;
            this.D = p;
            this.Lb = "menuitem";
            this.ds = this.Av = this.C = this.Lh = p;
            this.Ph = o;
            var d = this;
            L.load("menu", function () {
                d.Ab()
            })
        }
    }
    x.lang.ua(ed, x.lang.Da, "MenuItem");
    x.object.extend(ed.prototype, {
        ra: function (a, b) {
            this.D = a;
            this.Lh = b
        },
        remove: function () {
            this.D = this.Lh = p
        },
        hu: function (a) {
            a && (this.Xg = a + "")
        },
        Vb: function (a) {
            a && (this.k.Pm = a)
        },
        Ld: v("C"),
        enable: function () {
            this.Ph = o
        },
        disable: function () {
            this.Ph = q
        }
    });

    function ib(a, b) {
        a && !b && (b = a);
        this.Je = this.Yd = this.Ne = this.$d = this.Vl = this.El = p;
        a && (this.Vl = new O(a.lng, a.lat), this.El = new O(b.lng, b.lat), this.Ne = a.lng, this.$d = a.lat, this.Je = b.lng, this.Yd = b.lat)
    }
    x.object.extend(ib.prototype, {
        Bj: function () {
            return !this.Vl || !this.El
        },
        ab: function (a) {
            return !(a instanceof ib) || this.Bj() ? q : this.xe().ab(a.xe()) && this.pf().ab(a.pf())
        },
        xe: v("Vl"),
        pf: v("El"),
        cW: function (a) {
            return !(a instanceof ib) || this.Bj() || a.Bj() ? q : a.Ne > this.Ne && a.Je < this.Je && a.$d > this.$d && a.Yd < this.Yd
        },
        pc: function () {
            return this.Bj() ? p : new O((this.Ne + this.Je) / 2, (this.$d + this.Yd) / 2)
        },
        At: function (a) {
            if (!(a instanceof ib) || Math.max(a.Ne, a.Je) < Math.min(this.Ne, this.Je) || Math.min(a.Ne, a.Je) > Math.max(this.Ne, this.Je) || Math.max(a.$d, a.Yd) < Math.min(this.$d, this.Yd) || Math.min(a.$d, a.Yd) > Math.max(this.$d, this.Yd)) return p;
            var b = Math.max(this.Ne, a.Ne),
                c = Math.min(this.Je, a.Je),
                d = Math.max(this.$d, a.$d),
                a = Math.min(this.Yd, a.Yd);
            return new ib(new O(b, d), new O(c, a))
        },
        Zw: function (a) {
            return !(a instanceof O || a instanceof K) || this.Bj() ? q : a.lng >= this.Ne && a.lng <= this.Je && a.lat >= this.$d && a.lat <= this.Yd
        },
        extend: function (a) {
            if (a instanceof O || a instanceof K) {
                var b = a.lng,
                    a = a.lat;
                this.Vl || (this.Vl = new O(0, 0));
                this.El || (this.El = new O(0, 0));
                if (!this.Ne || this.Ne > b) this.Vl.lng = this.Ne = b;
                if (!this.Je || this.Je < b) this.El.lng = this.Je = b;
                if (!this.$d || this.$d > a) this.Vl.lat = this.$d = a;
                if (!this.Yd || this.Yd < a) this.El.lat = this.Yd = a
            }
        },
        dG: function () {
            return this.Bj() ? new O(0, 0) : new O(Math.abs(this.Je - this.Ne), Math.abs(this.Yd - this.$d))
        }
    });

    function O(a, b) {
        isNaN(a) && (a = Mb(a), a = isNaN(a) ? 0 : a);
        cb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Mb(b), b = isNaN(b) ? 0 : b);
        cb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    O.GE = function (a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    O.prototype.ab = function (a) {
        return a && this.lat == a.lat && this.lng == a.lng
    };

    function K(a, b) {
        isNaN(a) && (a = Mb(a), a = isNaN(a) ? 0 : a);
        cb(a) && (a = parseFloat(a));
        isNaN(b) && (b = Mb(b), b = isNaN(b) ? 0 : b);
        cb(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b;
        this.of = "inner"
    }
    K.GE = function (a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    K.prototype.ab = function (a) {
        return a && this.lat == a.lat && this.lng == a.lng
    };

    function fd() { }
    fd.prototype.jy = function () {
        aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };
    fd.prototype.Ej = function () {
        aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };

    function gd() { };
    var hb = {
        IK: function (a, b, c) {
            L.load("coordtransutils", function () {
                hb.vV(a, b, c)
            }, o)
        },
        HK: function (a, b, c) {
            L.load("coordtransutils", function () {
                hb.uV(a, b, c)
            }, o)
        }
    };

    function hd() {
        this.Oa = [];
        var a = this;
        L.load("convertor", function () {
            a.sQ()
        })
    }
    x.ua(hd, x.lang.Da, "Convertor");
    x.extend(hd.prototype, {
        translate: function (a, b, c, d) {
            this.Oa.push({
                method: "translate",
                arguments: [a, b, c, d]
            })
        }
    });
    U(hd.prototype, {
        translate: hd.prototype.translate
    });

    function T() { }
    T.prototype = new fd;
    x.extend(T, {
        IP: 6370996.81,
        MG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Ou: [75, 60, 45, 30, 15, 0],
        OP: [
            [1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7],
            [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7],
            [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
            [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
            [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
            [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]
        ],
        JG: [
            [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
            [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5],
            [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5],
            [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
            [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
            [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
        ],
        X2: function (a, b) {
            if (!a || !b) return 0;
            var c, d, a = this.ub(a);
            if (!a) return 0;
            c = this.$k(a.lng);
            d = this.$k(a.lat);
            b = this.ub(b);
            return !b ? 0 : this.Ue(c, this.$k(b.lng), d, this.$k(b.lat))
        },
        fp: function (a, b) {
            if (!a || !b) return 0;
            a.lng = this.fE(a.lng, -180, 180);
            a.lat = this.jE(a.lat, -74, 74);
            b.lng = this.fE(b.lng, -180, 180);
            b.lat = this.jE(b.lat, -74, 74);
            return this.Ue(this.$k(a.lng), this.$k(b.lng), this.$k(a.lat), this.$k(b.lat))
        },
        ub: function (a) {
            if (a === p || a === j) return new K(0, 0);
            var b, c;
            b = new K(Math.abs(a.lng), Math.abs(a.lat));
            for (var d = 0; d < this.MG.length; d++)
                if (b.lat >= this.MG[d]) {
                    c = this.OP[d];
                    break
                }
            a = this.JK(a, c);
            return a = new K(a.lng.toFixed(6), a.lat.toFixed(6))
        },
        tb: function (a) {
            if (a === p || a === j || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new K(0, 0);
            var b, c;
            a.lng = this.fE(a.lng, -180, 180);
            a.lat = this.jE(a.lat, -74, 74);
            b = new K(a.lng, a.lat);
            for (var d = 0; d < this.Ou.length; d++)
                if (b.lat >= this.Ou[d]) {
                    c = this.JG[d];
                    break
                }
            if (!c)
                for (d = 0; d < this.Ou.length; d++)
                    if (b.lat <= -this.Ou[d]) {
                        c = this.JG[d];
                        break
                    }
            a = this.JK(a, c);
            return a = new K(a.lng.toFixed(2), a.lat.toFixed(2))
        },
        JK: function (a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng),
                    d = Math.abs(a.lat) / b[9],
                    d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d,
                    c = c * (0 > a.lng ? -1 : 1),
                    d = d * (0 > a.lat ? -1 : 1);
                return new K(c, d)
            }
        },
        Ue: function (a, b, c, d) {
            return this.IP * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a))
        },
        $k: function (a) {
            return Math.PI * a / 180
        },
        W4: function (a) {
            return 180 * a / Math.PI
        },
        jE: function (a, b, c) {
            b != p && (a = Math.max(a, b));
            c != p && (a = Math.min(a, c));
            return a
        },
        fE: function (a, b, c) {
            for (; a > c;) a -= c - b;
            for (; a < b;) a += c - b;
            return a
        }
    });
    x.extend(T.prototype, {
        Jk: function (a) {
            return T.tb(a)
        },
        jy: function (a) {
            a = $a(a, this.map);
            a = T.tb(a);
            return new S(a.lng, a.lat)
        },
        zl: function (a) {
            a = T.tb(a);
            return new S(a.lng, a.lat)
        },
        rh: function (a) {
            return T.ub(a)
        },
        Ej: function (a) {
            a = new K(a.x, a.y);
            return gb(T.ub(a), this.map)
        },
        B1: function (a) {
            a = new K(a.x, a.y);
            return T.ub(a)
        },
        Mp: function (a, b, c, d, e) {
            if (a) return a = this.Jk(a, e), b = this.yc(b), new S(Math.round((a.lng - c.lng) / b + d.width / 2), Math.round((c.lat - a.lat) / b + d.height / 2))
        },
        Ag: function (a, b, c, d, e) {
            if (a) return b = this.yc(b), this.rh(new K(c.lng + b * (a.x - d.width / 2), c.lat - b * (a.y - d.height / 2)), e)
        },
        yc: function (a) {
            return Math.pow(2, 18 - a)
        },
        l_: da("map")
    });

    function kb() {
        this.ij = "bj"
    }
    kb.prototype = new T;
    x.extend(kb.prototype, {
        Jk: function (a, b) {
            return this.cR(b, T.tb(a))
        },
        rh: function (a, b) {
            return T.ub(this.dR(b, a))
        },
        lngLatToPointFor3D: function (a, b) {
            var c = this,
                d = T.tb(a);
            L.load("coordtrans", function () {
                var a = gd.hE(c.ij || "bj", d),
                    a = new S(a.x, a.y);
                b && b(a)
            }, o)
        },
        pointToLngLatFor3D: function (a, b) {
            var c = this,
                d = new K(a.x, a.y);
            L.load("coordtrans", function () {
                var a = gd.gE(c.ij || "bj", d),
                    a = new K(a.lng, a.lat),
                    a = T.ub(a);
                b && b(a)
            }, o)
        },
        cR: function (a, b) {
            if (L.jb("coordtrans").Dd == L.Lj.mq) {
                var c = gd.hE(a || "bj", b);
                return new K(c.x, c.y)
            }
            L.load("coordtrans", t());
            return new K(0, 0)
        },
        dR: function (a, b) {
            if (L.jb("coordtrans").Dd == L.Lj.mq) {
                var c = gd.gE(a || "bj", b);
                return new K(c.lng, c.lat)
            }
            L.load("coordtrans", t());
            return new K(0, 0)
        },
        yc: function (a) {
            return Math.pow(2, 20 - a)
        },
        Ry: da("map")
    });

    function id() {
        this.Lb = "overlay"
    }
    x.lang.ua(id, x.lang.Da, "Overlay");
    id.Mm = function (a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    };
    x.extend(id.prototype, {
        Ie: function (a) {
            if (!this.V && ab(this.initialize) && (this.V = this.initialize(a))) this.V.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function () {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        draw: function () {
            aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function () {
            this.V && this.V.parentNode && this.V.parentNode.removeChild(this.V);
            this.V = p;
            this.dispatchEvent(new N("onremove"))
        },
        U: function () {
            this.V && x.K.U(this.V)
        },
        show: function () {
            this.V && x.K.show(this.V)
        },
        oh: function () {
            return !this.V || "none" == this.V.style.display || "hidden" == this.V.style.visibility ? q : o
        }
    });
    B.Xe(function (a) {
        function b(a, b) {
            var c = H("div"),
                g = c.style;
            g.position = "absolute";
            g.top = g.left = g.width = g.height = "0";
            g.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.R;
        c.rd = a.rd = b(a.platform, 200);
        a.Zd.LD = b(c.rd, 800);
        a.Zd.ZE = b(c.rd, 700);
        a.Zd.xL = b(c.rd, 600);
        a.Zd.RE = b(c.rd, 500);
        a.Zd.cN = b(c.rd, 400);
        a.Zd.dN = b(c.rd, 300);
        a.Zd.nP = b(c.rd, 201);
        a.Zd.Jt = b(c.rd, 200)
    });

    function jb() {
        x.lang.Da.call(this);
        id.call(this);
        this.map = p;
        this.Pa = o;
        this.Bb = p;
        this.zH = 0
    }
    x.lang.ua(jb, id, "OverlayInternal");
    x.extend(jb.prototype, {
        initialize: function (a) {
            this.map = a;
            x.lang.Da.call(this, this.ba);
            return p
        },
        Hx: v("map"),
        draw: t(),
        Oj: t(),
        remove: function () {
            this.map = p;
            x.lang.lx(this.ba);
            id.prototype.remove.call(this)
        },
        U: function () {
            this.Pa !== q && (this.Pa = q)
        },
        show: function () {
            this.Pa !== o && (this.Pa = o)
        },
        oh: function () {
            return !this.V ? q : !!this.Pa
        },
        Ha: v("V"),
        kO: function (a) {
            var a = a || {},
                b;
            for (b in a) this.z[b] = a[b]
        },
        iu: da("zIndex"),
        qj: function () {
            this.z.qj = o
        },
        FW: function () {
            this.z.qj = q
        },
        Fo: da("ig"),
        Op: function () {
            this.ig = p
        }
    });

    function jd() {
        this.map = p;
        this.wa = {};
        this.Fe = []
    }
    B.Xe(function (a) {
        var b = new jd;
        b.map = a;
        a.wa = b.wa;
        a.Fe = b.Fe;
        a.addEventListener("load", function (a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function (a) {
            b.draw(a)
        });
        x.da.ma && 8 > x.da.ma || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function (a) {
            setTimeout(function () {
                b.draw(a)
            }, 20)
        }) : a.addEventListener("zoomend", function (a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function (a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function (a) {
            a = a.target;
            if (a instanceof jb) b.wa[a.ba] || (b.wa[a.ba] = a);
            else {
                for (var d = q, e = 0, f = b.Fe.length; e < f; e++)
                    if (b.Fe[e] === a) {
                        d = o;
                        break
                    }
                d || b.Fe.push(a)
            }
        });
        a.addEventListener("removeoverlay", function (a) {
            a = a.target;
            if (a instanceof jb) delete b.wa[a.ba];
            else
                for (var d = 0, e = b.Fe.length; d < e; d++)
                    if (b.Fe[d] === a) {
                        b.Fe.splice(d, 1);
                        break
                    }
        });
        a.addEventListener("clearoverlays", function () {
            this.Wc();
            for (var a in b.wa) b.wa[a].z.qj && (b.wa[a].remove(), delete b.wa[a]);
            a = 0;
            for (var d = b.Fe.length; a < d; a++) b.Fe[a].enableMassClear !== q && (b.Fe[a].remove(), b.Fe[a] = p, b.Fe.splice(a, 1), a--, d--)
        });
        a.addEventListener("infowindowopen", function () {
            var a = this.Bb;
            a && (x.K.U(a.zc), x.K.U(a.ac))
        });
        a.addEventListener("movestart", function () {
            this.lh() && this.lh().rJ()
        });
        a.addEventListener("moveend", function () {
            this.lh() && this.lh().hJ()
        })
    });
    jd.prototype.draw = function (a) {
        if (B.qq) {
            var b = B.qq.bt(this.map);
            "canvas" === b.Lb && b.canvas && b.YQ(b.canvas.getContext("2d"))
        }
        for (var c in this.wa) this.wa[c].draw(a);
        x.jc.Fb(this.Fe, function (a) {
            a.draw()
        });
        this.map.R.ob && this.map.R.ob.ta();
        B.qq && b.NF()
    };

    function kd(a) {
        jb.call(this);
        a = a || {};
        this.z = {
            strokeColor: a.strokeColor || "#3a6bdb",
            lc: a.strokeWeight || 5,
            td: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            qj: a.enableMassClear === q ? q : o,
            Dk: p,
            Fm: p,
            mf: a.enableEditing === o ? o : q,
            lN: 5,
            t0: q,
            jf: a.enableClicking === q ? q : o,
            ti: a.icons && 0 < a.icons.length ? a.icons : p
        };
        0 >= this.z.lc && (this.z.lc = 5);
        if (0 > this.z.td || 1 < this.z.td) this.z.td = 0.65;
        if (0 > this.z.sg || 1 < this.z.sg) this.z.sg = 0.65;
        "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
        this.V = p;
        this.Yu = new ib(0, 0);
        this.gf = [];
        this.mc = [];
        this.Qa = {}
    }
    x.lang.ua(kd, jb, "Graph");
    kd.Cx = function (a) {
        var b = [];
        if (!a) return b;
        cb(a) && x.jc.Fb(a.split(";"), function (a) {
            a = a.split(",");
            b.push(new O(a[0], a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    };
    kd.iF = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    x.extend(kd.prototype, {
        initialize: function (a) {
            this.map = a;
            return p
        },
        draw: t(),
        Wr: function (a) {
            this.gf.length = 0;
            this.ha = kd.Cx(a).slice(0);
            this.Ih()
        },
        me: function (a) {
            this.Wr(a)
        },
        Ih: function () {
            if (this.ha) {
                var a = this;
                a.Yu = new ib;
                x.jc.Fb(this.ha, function (b) {
                    a.Yu.extend(b)
                })
            }
        },
        ve: v("ha"),
        vn: function (a, b) {
            b && this.ha[a] && (this.gf.length = 0, this.ha[a] = new K(b.lng, b.lat), this.Ih())
        },
        setStrokeColor: function (a) {
            this.z.strokeColor = a
        },
        bY: function () {
            return this.z.strokeColor
        },
        bq: function (a) {
            0 < a && (this.z.lc = a)
        },
        YL: function () {
            return this.z.lc
        },
        $p: function (a) {
            a == j || (1 < a || 0 > a) || (this.z.td = a)
        },
        cY: function () {
            return this.z.td
        },
        bu: function (a) {
            1 < a || 0 > a || (this.z.sg = a)
        },
        zX: function () {
            return this.z.sg
        },
        aq: function (a) {
            "solid" != a && "dashed" != a || (this.z.strokeStyle = a)
        },
        XL: function () {
            return this.z.strokeStyle
        },
        setFillColor: function (a) {
            this.z.fillColor = a || ""
        },
        yX: function () {
            return this.z.fillColor
        },
        Kd: v("Yu"),
        remove: function () {
            this.map && this.map.removeEventListener("onmousemove", this.xv);
            jb.prototype.remove.call(this);
            this.gf.length = 0
        },
        mf: function () {
            if (!(2 > this.ha.length)) {
                this.z.mf = o;
                var a = this;
                L.load("poly", function () {
                    a.am()
                }, o)
            }
        },
        EW: function () {
            this.z.mf = q;
            var a = this;
            L.load("poly", function () {
                a.tk()
            }, o)
        },
        vX: function () {
            return this.z.mf
        }
    });

    function ld(a) {
        jb.call(this);
        this.V = this.map = p;
        this.z = {
            width: 0,
            height: 0,
            Aa: new M(0, 0),
            opacity: 1,
            background: "transparent",
            iy: 1,
            QM: "#000",
            XY: "solid",
            point: p
        };
        this.kO(a);
        this.point = this.z.point
    }
    x.lang.ua(ld, jb, "Division");
    x.extend(ld.prototype, {
        Oj: function () {
            var a = this.z,
                b = this.content,
                c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.iy + "px " + a.XY + " " + a.QM + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.V = Cb(this.map.Rf().ZE, c.join(""))
        },
        initialize: function (a) {
            this.map = a;
            this.Oj();
            this.V && x.M(this.V, J() ? "touchstart" : "mousedown", function (a) {
                na(a)
            });
            return this.V
        },
        draw: function () {
            var a = this.map.We(this.z.point);
            this.z.Aa = new M(-Math.round(this.z.width / 2) - Math.round(this.z.iy), -Math.round(this.z.height / 2) - Math.round(this.z.iy));
            this.V.style.left = a.x + this.z.Aa.width + "px";
            this.V.style.top = a.y + this.z.Aa.height + "px"
        },
        ia: function () {
            return this.z.point
        },
        u1: function () {
            return this.map.Cc(this.ia())
        },
        ta: function (a) {
            this.z.point = a;
            this.draw()
        },
        n_: function (a, b) {
            this.z.width = Math.round(a);
            this.z.height = Math.round(b);
            this.V && (this.V.style.width = this.z.width + "px", this.V.style.height = this.z.height + "px", this.draw())
        }
    });

    function md(a, b, c) {
        a && b && (this.imageUrl = a, this.size = b, a = new M(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c || {}, a = c.anchor || a, b = c.imageOffset || new M(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
    }
    x.extend(md.prototype, {
        lO: function (a) {
            a && (this.imageUrl = a)
        },
        D_: function (a) {
            a && (this.printImageUrl = a)
        },
        Ce: function (a) {
            a && (this.size = new M(a.width, a.height))
        },
        qc: function (a) {
            a && (this.anchor = new M(a.width, a.height))
        },
        cu: function (a) {
            a && (this.imageOffset = new M(a.width, a.height))
        },
        t_: function (a) {
            a && (this.infoWindowAnchor = new M(a.width, a.height))
        },
        q_: function (a) {
            a && (this.imageSize = new M(a.width, a.height))
        },
        toString: ea("Icon")
    });

    function nd(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new M(0, 0),
                fillColor: b.fillColor || "#000",
                sg: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                td: b.strokeOpacity || 1,
                lc: b.strokeWeight
            };
            this.Lb = "number" === typeof a ? a : "UserDefined";
            this.Ni = this.style.anchor;
            this.Cr = new M(0, 0);
            this.anchor = p;
            this.CB = a;
            var c = this;
            L.load("symbol", function () {
                c.Sn()
            }, o)
        }
    }
    x.extend(nd.prototype, {
        setPath: da("CB"),
        setAnchor: function (a) {
            this.Ni = this.style.anchor = a
        },
        setRotation: function (a) {
            this.style.rotation = a
        },
        setScale: function (a) {
            this.style.scale = a
        },
        setStrokeWeight: function (a) {
            this.style.lc = a
        },
        setStrokeColor: function (a) {
            a = x.rs.IC(a, this.style.td);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function (a) {
            this.style.td = a
        },
        setFillOpacity: function (a) {
            this.style.sg = a
        },
        setFillColor: function (a) {
            this.style.fillColor = a
        }
    });

    function od(a, b, c, d) {
        a && (this.Rv = {}, this.vL = d ? !!d : q, this.jd = [], this.U_ = a instanceof nd ? a : p, this.aJ = b === j ? o : !!(b.indexOf("%") + 1), this.gk = isNaN(parseFloat(b)) ? 1 : this.aJ ? parseFloat(b) / 100 : parseFloat(b), this.bJ = !!(c.indexOf("%") + 1), this.repeat = c != j ? this.bJ ? parseFloat(c) / 100 : parseFloat(c) : 0)
    };

    function sd(a, b) {
        x.lang.Da.call(this);
        this.content = a;
        this.map = p;
        b = b || {};
        this.z = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            Aa: b.offset || new M(0, 0),
            title: b.title || "",
            $E: b.maxContent || "",
            fh: b.enableMaximize || q,
            Rs: b.enableAutoPan === q ? q : o,
            wD: b.enableCloseOnClick === q ? q : o,
            margin: b.margin || [10, 10, 40, 10],
            DC: b.collisions || [
                [10, 10],
                [10, 10],
                [10, 10],
                [10, 10]
            ],
            wY: q,
            rZ: b.onClosing || ea(o),
            mL: q,
            BD: b.enableParano === o ? o : q,
            message: b.message,
            DD: b.enableSearchTool === o ? o : q,
            Tx: b.headerContent || "",
            xD: b.enableContentScroll || q
        };
        if (0 != this.z.width && (220 > this.z.width && (this.z.width = 220), 730 < this.z.width)) this.z.width = 730;
        if (0 != this.z.height && (60 > this.z.height && (this.z.height = 60), 650 < this.z.height)) this.z.height = 650;
        if (0 != this.z.maxWidth && (220 > this.z.maxWidth && (this.z.maxWidth = 220), 730 < this.z.maxWidth)) this.z.maxWidth = 730;
        this.ge = q;
        this.Ji = I.pa;
        this.cb = p;
        var c = this;
        L.load("infowindow", function () {
            c.Ab()
        })
    }
    x.lang.ua(sd, x.lang.Da, "InfoWindow");
    x.extend(sd.prototype, {
        setWidth: function (a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.width = a)
        },
        setHeight: function (a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.z.height = a)
        },
        oO: function (a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.maxWidth = a)
        },
        Dc: function (a) {
            this.z.title = a
        },
        getTitle: function () {
            return this.z.title
        },
        ad: da("content"),
        Bk: v("content"),
        eu: function (a) {
            this.z.$E = a + ""
        },
        le: t(),
        Rs: function () {
            this.z.Rs = o
        },
        disableAutoPan: function () {
            this.z.Rs = q
        },
        enableCloseOnClick: function () {
            this.z.wD = o
        },
        disableCloseOnClick: function () {
            this.z.wD = q
        },
        fh: function () {
            this.z.fh = o
        },
        ox: function () {
            this.z.fh = q
        },
        show: function () {
            this.Pa = o
        },
        U: function () {
            this.Pa = q
        },
        close: function () {
            this.U()
        },
        ny: function () {
            this.ge = o
        },
        restore: function () {
            this.ge = q
        },
        oh: function () {
            return this.Va()
        },
        Va: ea(q),
        ia: function () {
            if (this.cb && this.cb.ia) return this.cb.ia()
        },
        Qf: function () {
            return this.z.Aa
        }
    });
    Na.prototype.Mb = function (a, b) {
        if (a instanceof sd && (b instanceof O || b instanceof K)) {
            var c = this.R;
            c.Wm ? c.Wm.ta(b) : (c.Wm = new W(b, {
                icon: new md(I.pa + "blank.gif", {
                    width: 1,
                    height: 1
                }),
                offset: new M(0, 0),
                clickable: q
            }), c.Wm.$R = 1);
            this.Ka(c.Wm);
            c.Wm.Mb(a)
        }
    };
    Na.prototype.Wc = function () {
        var a = this.R.ob || this.R.ul;
        a && a.cb && a.cb.Wc()
    };
    jb.prototype.Mb = function (a) {
        this.map && (this.map.Wc(), a.Pa = o, this.map.R.ul = a, a.cb = this, x.lang.Da.call(a, a.ba))
    };
    jb.prototype.Wc = function () {
        this.map && this.map.R.ul && (this.map.R.ul.Pa = q, x.lang.lx(this.map.R.ul.ba), this.map.R.ul = p)
    };

    function td(a, b) {
        jb.call(this);
        this.content = a;
        this.V = this.map = p;
        b = b || {};
        this.z = {
            width: 0,
            Aa: b.offset || new M(0, 0),
            fq: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + I.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || p,
            qj: b.enableMassClear === q ? q : o,
            jf: o
        };
        0 > this.z.width && (this.z.width = 0);
        Jb(b.enableClicking) && (this.z.jf = b.enableClicking);
        this.point = this.z.position;
        var c = this;
        L.load("marker", function () {
            c.Ab()
        })
    }
    x.lang.ua(td, jb, "Label");
    x.extend(td.prototype, {
        ia: function () {
            return this.Gv ? this.Gv.ia() : this.point
        },
        ta: function (a) {
            if ((a instanceof O || a instanceof K) && !this.Ix()) this.point = this.z.position = new K(a.lng, a.lat)
        },
        ad: da("content"),
        MF: function (a) {
            0 <= a && 1 >= a && (this.z.opacity = a)
        },
        Ye: function (a) {
            a instanceof M && (this.z.Aa = new M(a.width, a.height))
        },
        Qf: function () {
            return this.z.Aa
        },
        bd: function (a) {
            a = a || {};
            this.z.fq = x.extend(this.z.fq, a)
        },
        Di: function (a) {
            return this.bd(a)
        },
        Dc: function (a) {
            this.z.title = a || ""
        },
        getTitle: function () {
            return this.z.title
        },
        nO: function (a) {
            this.point = (this.Gv = a) ? this.z.position = a.ia() : this.z.position = p
        },
        Ix: function () {
            return this.Gv || p
        },
        Bk: v("content")
    });

    function ud(a, b) {
        if (0 !== arguments.length) {
            jb.apply(this, arguments);
            b = b || {};
            this.z = {
                $a: a,
                opacity: b.opacity || 1,
                vp: b.imageURL || "",
                Hs: b.displayOnMinLevel || 1,
                qj: b.enableMassClear === q ? q : o,
                Gs: b.displayOnMaxLevel || 19,
                O_: b.stretch || q
            };
            0 === b.opacity && (this.z.opacity = 0);
            var c = this;
            L.load("groundoverlay", function () {
                c.Ab()
            })
        }
    }
    x.lang.ua(ud, jb, "GroundOverlay");
    x.extend(ud.prototype, {
        setBounds: function (a) {
            this.z.$a = a
        },
        getBounds: function () {
            return this.z.$a
        },
        setOpacity: function (a) {
            this.z.opacity = a
        },
        getOpacity: function () {
            return this.z.opacity
        },
        setImageURL: function (a) {
            this.z.vp = a
        },
        getImageURL: function () {
            return this.z.vp
        },
        setDisplayOnMinLevel: function (a) {
            this.z.Hs = a
        },
        getDisplayOnMinLevel: function () {
            return this.z.Hs
        },
        setDisplayOnMaxLevel: function (a) {
            this.z.Gs = a
        },
        getDisplayOnMaxLevel: function () {
            return this.z.Gs
        }
    });
    var vd = 3,
        wd = 4;

    function xd() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }

    function yd(a, b) {
        var c = this;
        xd() && (a === j && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")), "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")), b = b || {}, jb.apply(c, arguments), c.ea = {
            ha: a
        }, c.z = {
            shape: b.shape || vd,
            size: b.size || wd,
            color: b.color || "#fa937e",
            qj: o
        }, this.zB = [], this.qe = [], L.load("pointcollection", function () {
            for (var a = 0, b; b = c.zB[a]; a++) c[b.method].apply(c, b.arguments);
            for (a = 0; b = c.qe[a]; a++) c[b.method].apply(c, b.arguments)
        }))
    }
    x.lang.ua(yd, jb, "PointCollection");
    x.extend(yd.prototype, {
        initialize: function (a) {
            this.zB && this.zB.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function (a) {
            this.qe && this.qe.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function (a) {
            this.qe && this.qe.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function () {
            this.qe && this.qe.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function () {
            this.qe && this.qe.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var zd = new md(I.pa + "marker_red_sprite.png", new M(19, 25), {
        anchor: new M(10, 25),
        infoWindowAnchor: new M(10, 0)
    }),
        Ad = new md(I.pa + "marker_red_sprite.png", new M(20, 11), {
            anchor: new M(6, 11),
            imageOffset: new M(-19, -13)
        });

    function W(a, b) {
        jb.call(this);
        b = b || {};
        this.point = a;
        this.Gq = this.map = p;
        this.z = {
            Aa: b.offset || new M(0, 0),
            yj: b.icon || zd,
            Uk: Ad,
            title: b.title || "",
            label: p,
            qK: b.baseZIndex || 0,
            jf: o,
            q5: q,
            ME: q,
            qj: b.enableMassClear === q ? q : o,
            Gb: q,
            VN: b.raiseOnDrag === o ? o : q,
            bO: q,
            Id: b.draggingCursor || I.Id,
            rotation: b.rotation || 0
        };
        b.icon && !b.shadow && (this.z.Uk = p);
        b.enableDragging && (this.z.Gb = b.enableDragging);
        Jb(b.enableClicking) && (this.z.jf = b.enableClicking);
        var c = this;
        L.load("marker", function () {
            c.Ab()
        })
    }
    W.Tu = id.Mm(-90) + 1E6;
    W.FG = W.Tu + 1E6;
    x.lang.ua(W, jb, "Marker");
    x.extend(W.prototype, {
        Vb: function (a) {
            if (a instanceof md || a instanceof nd) this.z.yj = a
        },
        gp: function () {
            return this.z.yj
        },
        Vy: function (a) {
            a instanceof md && (this.z.Uk = a)
        },
        getShadow: function () {
            return this.z.Uk
        },
        qn: function (a) {
            this.z.label = a || p
        },
        dE: function () {
            return this.z.label
        },
        Gb: function () {
            this.z.Gb = o
        },
        aD: function () {
            this.z.Gb = q
        },
        eo: v("point"),
        ia: function () {
            return this.point instanceof O || this.point instanceof K ? this.map ? gb(this.point, this.map) : new O(this.point.lng, this.point.lat) : this.point
        },
        ta: function (a) {
            this.point = this.map ? $a(a, this.map) : a
        },
        Ei: function (a, b) {
            this.z.ME = !!a;
            a && (this.aH = b || 0)
        },
        Dc: function (a) {
            this.z.title = a + ""
        },
        getTitle: function () {
            return this.z.title
        },
        Ye: function (a) {
            a instanceof M && (this.z.Aa = a)
        },
        Qf: function () {
            return this.z.Aa
        },
        nn: da("Gq"),
        Ty: function (a) {
            this.z.rotation = a
        },
        VL: function () {
            return this.z.rotation
        }
    });

    function Bd(a, b) {
        kd.call(this, b);
        b = b || {};
        this.z.sg = b.fillOpacity ? b.fillOpacity : 0.65;
        this.z.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.me(a);
        var c = this;
        L.load("poly", function () {
            c.Ab()
        })
    }
    x.lang.ua(Bd, kd, "Polygon");
    x.extend(Bd.prototype, {
        me: function (a, b) {
            this.Bo = kd.Cx(a).slice(0);
            var c = kd.Cx(a).slice(0);
            1 < c.length && c.push(new O(c[0].lng, c[0].lat));
            kd.prototype.me.call(this, c, b)
        },
        vn: function (a, b) {
            this.Bo[a] && (this.Bo[a] = new O(b.lng, b.lat), this.ha[a] = new O(b.lng, b.lat), 0 == a && !this.ha[0].ab(this.ha[this.ha.length - 1]) && (this.ha[this.ha.length - 1] = new O(b.lng, b.lat)), this.Ih())
        },
        ve: function () {
            var a = this.Bo;
            0 == a.length && (a = this.ha);
            return a
        }
    });

    function Cd(a, b) {
        kd.call(this, b);
        this.Wr(a);
        var c = this;
        L.load("poly", function () {
            c.Ab()
        })
    }
    x.lang.ua(Cd, kd, "Polyline");

    function Dd(a, b, c) {
        this.point = a;
        this.xa = Math.abs(b);
        Bd.call(this, [], c)
    }
    Dd.iF = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    x.lang.ua(Dd, Bd, "Circle");
    x.extend(Dd.prototype, {
        initialize: function (a) {
            this.map = a;
            this.ha = this.tv(this.point, this.xa);
            this.Ih();
            return p
        },
        pc: function () {
            return gb(this.point, this.map)
        },
        wc: v("point"),
        Xf: function (a) {
            a && (this.point = a)
        },
        TL: v("xa"),
        wf: function (a) {
            this.xa = Math.abs(a)
        },
        tv: function (a, b) {
            if (!a || !b || !this.map) return [];
            for (var c = [], d = b / 6378800, e = Math.PI / 180 * a.lat, f = Math.PI / 180 * a.lng, g = 0; 360 > g; g += 9) {
                var i = Math.PI / 180 * g,
                    k = Math.asin(Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(i)),
                    i = new O(((f - Math.atan2(Math.sin(i) * Math.sin(d) * Math.cos(e), Math.cos(d) - Math.sin(e) * Math.sin(k)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), k * (180 / Math.PI));
                c.push(i)
            }
            d = c[0];
            c.push(new O(d.lng, d.lat));
            return c
        }
    });
    var Ed = {};

    function Fd(a) {
        this.map = a;
        this.Vm = [];
        this.Yf = [];
        this.Hg = [];
        this.IV = 300;
        this.sF = 0;
        this.xg = {};
        this.hj = {};
        this.uh = 0;
        this.FE = o;
        this.RK = {};
        this.mo = this.Vn(1);
        this.nd = this.Vn(2);
        this.Fl = this.Vn(3);
        a.platform.appendChild(this.mo);
        a.platform.appendChild(this.nd);
        a.platform.appendChild(this.Fl);
        var b = 256 * Math.pow(2, 15),
            c = 3 * b,
            a = T.tb(new K(180, 0)).lng,
            c = c - a,
            b = -3 * b,
            d = T.tb(new K(-180, 0)).lng;
        this.hB = a;
        this.EI = d;
        this.eB = c + (d - b);
        this.FI = a - d
    }
    B.Xe(function (a) {
        var b = new Fd(a);
        b.ra();
        a.fb = b
    });
    x.extend(Fd.prototype, {
        ra: function () {
            var a = this,
                b = a.map;
            b.addEventListener("loadcode", function () {
                a.ky()
            });
            b.addEventListener("addtilelayer", function (b) {
                a.$g(b)
            });
            b.addEventListener("removetilelayer", function (b) {
                a.Ah(b)
            });
            b.addEventListener("setmaptype", function (b) {
                a.Fg(b)
            });
            b.addEventListener("zoomstartcode", function (b) {
                a.Kc(b)
            });
            b.addEventListener("setcustomstyles", function (b) {
                a.du(b.target);
                a.Vf(o)
            })
        },
        ky: function () {
            var a = this;
            if (x.da.ma) try {
                document.execCommand("BackgroundImageCache", q, o)
            } catch (b) { }
            this.loaded || a.Zx();
            a.Vf();
            this.loaded || (this.loaded = o, L.load("tile", function () {
                a.tQ()
            }))
        },
        Zx: function () {
            for (var a = this.map.oa().xr, b = 0; b < a.length; b++) {
                var c = new Gd;
                x.extend(c, a[b]);
                this.Vm.push(c);
                c.ra(this.map, this.mo)
            }
            this.du()
        },
        Vn: function (a) {
            var b = H("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        zf: function () {
            this.uh--;
            var a = this;
            this.FE && (this.map.dispatchEvent(new N("onfirsttileloaded")), this.FE = q);
            0 == this.uh && (this.Ri && (clearTimeout(this.Ri), this.Ri = p), this.Ri = setTimeout(function () {
                if (a.uh == 0) {
                    a.map.dispatchEvent(new N("ontilesloaded"));
                    a.FE = o
                }
                a.Ri = p
            }, 80))
        },
        oE: function (a, b) {
            return "TILE-" + b.ba + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Wx: function (a) {
            var b = a.Hb;
            b && Bb(b) && b.parentNode.removeChild(b);
            delete this.xg[a.name];
            a.loaded || (Hd(a), a.Hb = p, a.Cj = p)
        },
        Lm: function (a, b, c) {
            var d = this.map,
                e = d.oa(),
                f = d.Na,
                g = d.dc,
                i = e.yc(f),
                k = this.IL(),
                l = k[0],
                m = k[1],
                n = k[2],
                s = k[3],
                u = k[4],
                c = "undefined" != typeof c ? c : 0,
                e = e.k.Ob,
                k = d.ba.replace(/^TANGRAM_/, "");
            for (this.Rc ? this.Rc.length = 0 : this.Rc = []; l < n; l++)
                for (var w = m; w < s; w++) {
                    var y = l,
                        D = w;
                    this.Rc.push([y, D]);
                    y = k + "_" + b + "_" + y + "_" + D + "_" + f;
                    this.RK[y] = y
                }
            this.Rc.sort(function (a) {
                return function (b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([u[0] - 1, u[1] - 1]));
            g = [Math.round(-g.lng / i), Math.round(g.lat / i)];
            l = -d.offsetY + d.height / 2;
            a.style.left = -d.offsetX + d.width / 2 + "px";
            a.style.top = l + "px";
            this.Oe ? this.Oe.length = 0 : this.Oe = [];
            l = 0;
            for (d = a.childNodes.length; l < d; l++) w = a.childNodes[l], w.tr = q, this.Oe.push(w);
            if (l = this.$m)
                for (var C in l) delete l[C];
            else this.$m = {};
            this.Pe ? this.Pe.length = 0 : this.Pe = [];
            l = 0;
            for (d = this.Rc.length; l < d; l++) {
                C = this.Rc[l][0];
                i = this.Rc[l][1];
                w = 0;
                for (m = this.Oe.length; w < m; w++)
                    if (n = this.Oe[w], n.id == k + "_" + b + "_" + C + "_" + i + "_" + f) {
                        n.tr = o;
                        this.$m[n.id] = n;
                        break
                    }
            }
            l = 0;
            for (d = this.Oe.length; l < d; l++) n = this.Oe[l], n.tr || this.Pe.push(n);
            this.An = [];
            w = (e + c) * this.map.B.devicePixelRatio;
            l = 0;
            for (d = this.Rc.length; l < d; l++) C = this.Rc[l][0], i = this.Rc[l][1], s = C * e + g[0] - c / 2, u = (-1 - i) * e + g[1] - c / 2, y = k + "_" + b + "_" + C + "_" + i + "_" + f, m = this.$m[y], n = p, m ? (n = m.style, n.left = s + "px", n.top = u + "px", m.af || this.An.push([C, i, m])) : (0 < this.Pe.length ? (m = this.Pe.shift(), m.getContext("2d").clearRect(-c / 2, -c / 2, w, w), n = m.style) : (m = document.createElement("canvas"), n = m.style, n.position = "absolute", n.width = e + c + "px", n.height = e + c + "px", this.ey() && (n.WebkitTransform = "scale(1.001)"), m.setAttribute("width", w), m.setAttribute("height", w), a.appendChild(m)), m.id = y, n.left = s + "px", n.top = u + "px", -1 < y.indexOf("bg") && (s = "#F3F1EC", this.map.B.Ko && (s = this.map.B.Ko), n.background = s ? s : ""), this.An.push([C, i, m])), m.style.visibility = "";
            l = 0;
            for (d = this.Pe.length; l < d; l++) this.Pe[l].style.visibility = "hidden";
            return this.An
        },
        ey: function () {
            return /M040/i.test(navigator.userAgent)
        },
        IL: function () {
            var a = this.map,
                b = a.oa(),
                c = b.tE(a.Na),
                d = a.dc,
                e = Math.ceil(d.lng / c),
                f = Math.ceil(d.lat / c),
                b = b.k.Ob,
                c = [e, f, (d.lng - e * c) / c * b, (d.lat - f * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        J_: function (a, b, c, d) {
            var e = this;
            e.e2 = b;
            var f = this.map.oa(),
                g = e.oE(a, c),
                i = f.k.Ob,
                b = [a[0] * i + b[0], (-1 - a[1]) * i + b[1]],
                k = this.xg[g];
            if (this.map.oa() !== bb && this.map.oa() !== Ua) {
                var l = this.os(a[0], a[2]).offsetX;
                b[0] += l;
                b.y1 = l
            }
            k && k.Hb ? (zb(k.Hb, b), d && (d = new S(a[0], a[1]), f = this.map.B.ze ? this.map.B.ze.style : "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = q, Id(k, d)), k.loaded ? this.zf() : Jd(k, function () {
                e.zf()
            })) : (k = this.hj[g]) && k.Hb ? (c.Pb.insertBefore(k.Hb, c.Pb.lastChild), this.xg[g] = k, zb(k.Hb, b), d && (d = new S(a[0], a[1]), f = this.map.B.ze ? this.map.B.ze.style : "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = q, Id(k, d)), k.loaded ? this.zf() : Jd(k, function () {
                e.zf()
            })) : (k = i * Math.pow(2, f.Dm() - a[2]), new K(a[0] * k, a[1] * k), d = new S(a[0], a[1]), f = this.map.B.ze ? this.map.B.ze.style : "normal", d = c.getTilesUrl(d, a[2], f), k = new Kd(this, d, b, a, c), Jd(k, function () {
                e.zf()
            }), k.lo(), this.xg[g] = k)
        },
        zf: function () {
            this.uh--;
            var a = this;
            0 == this.uh && (this.Ri && (clearTimeout(this.Ri), this.Ri = p), this.Ri = setTimeout(function () {
                if (a.uh == 0) {
                    a.map.dispatchEvent(new N("ontilesloaded"));
                    if (wa) {
                        if (ta && ua && va) {
                            var b = db(),
                                c = a.map.vb();
                            setTimeout(function () {
                                Ta(5030, {
                                    load_script_time: ua - ta,
                                    load_tiles_time: b - va,
                                    map_width: c.width,
                                    map_height: c.height,
                                    map_size: c.width * c.height
                                })
                            }, 1E4);
                            B.Ln("cus.fire", "time", {
                                z_imgfirstloaded: b - va
                            })
                        }
                        wa = q
                    }
                }
                a.Ri = p
            }, 80))
        },
        oE: function (a, b) {
            return this.map.oa() === Ra ? "TILE-" + b.ba + "-" + this.map.Uw + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.ba + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Wx: function (a) {
            var b = a.Hb;
            b && (Ld(b), Bb(b) && b.parentNode.removeChild(b));
            delete this.xg[a.name];
            a.loaded || (Ld(b), Hd(a), a.Hb = p, a.Cj = p)
        },
        os: function (a, b) {
            for (var c = 0, d = 6 * Math.pow(2, b - 3), e = d / 2 - 1, f = -d / 2; a > e;) a -= d, c -= this.eB;
            for (; a < f;) a += d, c += this.eB;
            c = Math.round(c / Math.pow(2, 18 - b));
            return {
                offsetX: c,
                nm: a
            }
        },
        KV: function (a) {
            for (var b = a.lng; b > this.hB;) b -= this.FI;
            for (; b < this.EI;) b += this.FI;
            a.lng = b;
            return a
        },
        LV: function (a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), d = Math.floor(this.hB / c), e = Math.floor(this.EI / c), c = Math.floor(this.eB / c), f = [], g = 0; g < a.length; g++) {
                var i = a[g],
                    k = i[0],
                    i = i[1];
                if (k >= d) {
                    var k = k + c,
                        l = "id_" + k + "_" + i + "_" + b;
                    a[l] || (a[l] = o, f.push([k, i]))
                } else k <= e && (k -= c, l = "id_" + k + "_" + i + "_" + b, a[l] || (a[l] = o, f.push([k, i])))
            }
            for (g = 0; g < f.length; g++) a.push(f[g]);
            return a
        },
        Vf: function (a) {
            var b = this;
            if (b.map.oa() == Ra) L.load("coordtrans", function () {
                b.map.Sb || (b.map.Sb = Ra.Ak(b.map.bh), b.map.Uw = Ra.GL(b.map.Sb));
                b.HI()
            }, o);
            else {
                if (a && a)
                    for (var c in this.hj) delete this.hj[c];
                b.HI(a)
            }
        },
        HI: function (a) {
            var b = this.Vm.concat(this.Yf),
                c = b.length,
                d = this.map,
                e = d.oa(),
                f = d.dc;
            this.map.oa() !== bb && this.map.oa() !== Ua && (f = this.KV(f));
            for (var g = 0; g < c; g++) {
                var i = b[g];
                if (i.fc && d.Na < i.fc) break;
                if (i.Mw) {
                    var k = this.Pb = i.Pb;
                    if (a) {
                        var l = k;
                        if (l && l.childNodes)
                            for (var m = l.childNodes.length, n = m - 1; 0 <= n; n--) m = l.childNodes[n], l.removeChild(m), m = p
                    }
                    if (this.map.Wb()) {
                        this.nd.style.display = "block";
                        k.style.display = "none";
                        this.map.dispatchEvent(new N("vectorchanged"), {
                            isvector: o
                        });
                        continue
                    } else k.style.display = "block", this.nd.style.display = "none", this.map.dispatchEvent(new N("vectorchanged"), {
                        isvector: q
                    })
                }
                if (!i.uI && !(i.Ap && !this.map.Wb() || i.EM && this.map.Wb())) {
                    d = this.map;
                    e = d.oa();
                    k = e.Hm();
                    m = d.Na;
                    f = d.dc;
                    e == Ra && f.ab(new K(0, 0)) && (f = d.dc = k.Jk(d.re, d.Sb));
                    var s = e.yc(m),
                        k = e.tE(m),
                        l = Math.ceil(f.lng / k),
                        u = Math.ceil(f.lat / k),
                        w = e.k.Ob,
                        k = [l, u, (f.lng - l * k) / k * w, (f.lat - u * k) / k * w],
                        u = 2 * d.width,
                        n = k[0] - Math.ceil((u / 2 - k[2]) / w),
                        l = k[1] - Math.ceil((d.height / 2 - k[3]) / w),
                        u = k[0] + Math.ceil((u / 2 + k[2]) / w),
                        y = 0;
                    e === Ra && 15 == d.ga() && (y = 1);
                    e = k[1] + Math.ceil((d.height / 2 + k[3]) / w) + y;
                    this.lK = new K(f.lng, f.lat);
                    var D = this.xg,
                        w = -this.lK.lng / s,
                        y = this.lK.lat / s,
                        s = [Math.ceil(w), Math.ceil(y)],
                        f = d.ga(),
                        C;
                    for (C in D) {
                        var F = D[C],
                            z = F.info;
                        (z[2] != f || z[2] == f && (n > z[0] || u <= z[0] || l > z[1] || e <= z[1])) && this.Wx(F)
                    }
                    D = -d.offsetX + d.width / 2;
                    F = -d.offsetY + d.height / 2;
                    i.Pb && (i.Pb.style.left = Math.ceil(w + D) - s[0] + "px", i.Pb.style.top = Math.ceil(y + F) - s[1] + "px", i.Pb.style.WebkitTransform = "translate3d(0,0,0)");
                    w = [];
                    for (d.cC = []; n < u; n++)
                        for (y = l; y < e; y++) w.push([n, y]), d.cC.push({
                            x: n,
                            y: y
                        });
                    this.map.oa() !== bb && this.map.oa() !== Ua && (w = this.LV(w, m));
                    w.sort(function (a) {
                        return function (b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([k[0] - 1, k[1] - 1]));
                    k = Math.ceil(this.hB / (256 * Math.pow(2, 18 - f)));
                    m = w.length;
                    this.uh += m;
                    for (n = 0; n < m; n++) {
                        if (i.xO === o && (l = this.os(w[n][0], f), l.nm > k - 1 || l.nm < -k)) continue;
                        this.J_([w[n][0], w[n][1], f], s, i, a)
                    }
                }
            }
        },
        $g: function (a) {
            var b = this,
                c = a.target,
                a = b.map.Wb();
            if (c instanceof fb) a && !c.Rm && (c.ra(this.map, this.nd), c.Rm = o);
            else if (c.Gh && this.map.$g(c.Gh), c.Ap) {
                for (a = 0; a < b.Hg.length; a++)
                    if (b.Hg[a] == c) return;
                L.load("vector", function () {
                    c.ra(b.map, b.nd);
                    b.Hg.push(c)
                }, o)
            } else {
                for (a = 0; a < b.Yf.length; a++)
                    if (b.Yf[a] == c) return;
                c.ra(this.map, this.Fl);
                b.Yf.push(c)
            }
        },
        Ah: function (a) {
            var a = a.target,
                b = this.map.Wb();
            if (a instanceof fb) b && a.Rm && (a.remove(), a.Rm = q);
            else {
                a.Gh && this.map.Ah(a.Gh);
                if (a.Ap)
                    for (var b = 0, c = this.Hg.length; b < c; b++) a == this.Hg[b] && this.Hg.splice(b, 1);
                else {
                    b = 0;
                    for (c = this.Yf.length; b < c; b++) a == this.Yf[b] && this.Yf.splice(b, 1)
                }
                a.remove()
            }
        },
        Fg: function () {
            for (var a = this.Vm, b = 0, c = a.length; b < c; b++) a[b].remove();
            delete this.Pb;
            this.Vm = [];
            this.hj = this.xg = {};
            this.Zx();
            this.Vf()
        },
        Kc: function () {
            var a = this;
            a.vd && x.K.U(a.vd);
            setTimeout(function () {
                a.Vf();
                a.map.dispatchEvent(new N("onzoomend"))
            }, 10)
        },
        g5: t(),
        du: function (a) {
            var b = this.map.oa();
            if (!this.map.Wb() && (a ? this.map.B.R_ = a : a = this.map.B.R_, a))
                for (var c = p, c = "2" == B.kz ? [B.url.proto + B.url.domain.main_domain_cdn.other[0] + "/"] : [B.url.proto + B.url.domain.main_domain_cdn.baidu[0] + "/", B.url.proto + B.url.domain.main_domain_cdn.baidu[1] + "/", B.url.proto + B.url.domain.main_domain_cdn.baidu[2] + "/"], d = 0, e; e = this.Vm[d]; d++)
                    if (e.xO == o) {
                        b.k.Zb = 18;
                        e.getTilesUrl = function (b, d) {
                            var e = b.x,
                                e = this.map.fb.os(e, d).nm,
                                k = b.y,
                                l = Vb("normal"),
                                m = 1;
                            this.map.Xx() && (m = 2);
                            l = "customimage/tile?qt=customimage&x=" + e + "&y=" + k + "&z=" + d + "&udt=" + l + "&scale=" + m + "&ak=" + qa;
                            l = a.styleStr ? l + ("&styles=" + encodeURIComponent(a.styleStr)) : l + ("&customid=" + a.style);
                            // l = c[Math.abs(e + k) % c.length] + l; // yangjianfei 注释
                            // return l = Fc(l) // yangjianfei 注释
                            return `./plugin/offline/map/${d}/${e}/${k}.jpg`;
                        };
                        break
                    }
        }
    });

    function Kd(a, b, c, d, e) {
        this.Cj = a;
        this.position = c;
        this.ev = [];
        this.name = a.oE(d, e);
        this.info = d;
        this.NO = e;
        this.KJ = e.Gt();
        a = H("img");
        Ab(a);
        a.zL = q;
        this.bd(a);
        this.Hb = a;
        this.src = b;
        Md && (this.Hb.style.opacity = 0);
        var f = this;
        document.createElement("canvas").getContext("2d");
        this.Hb.onload = function () {
            B.ZY.fR();
            Nd(f)
        };
        this.Hb.onerror = function () {
            Hd(f);
            if (f.Cj) {
                var a = f.Cj.map.oa();
                if (a.k.ED) {
                    f.error = o;
                    f.Hb.src = a.k.ED;
                    f.Hb && !Bb(f.Hb) && e.Pb.appendChild(f.Hb)
                }
            }
        };
        a = p
    }

    function Nd(a) {
        a.loaded = o;
        if (a.Cj) {
            var b = a.Cj,
                c = b.hj;
            c[a.name] || (b.sF++, c[a.name] = a);
            a.Hb && !Bb(a.Hb) && a.NO.Pb && (a.NO.Pb.appendChild(a.Hb), 6 >= x.da.ma && (0 < x.da.ma && a.KJ) && (a.Hb.style.cssText += ';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + a.src + '",sizingMethod=scale);'));
            var d = b.sF - b.IV,
                e;
            for (e in c) {
                if (0 >= d) break;
                if (!b.xg[e]) {
                    c[e].Cj = p;
                    var f = c[e].Hb;
                    f && f.parentNode && (f.parentNode.removeChild(f), Ld(f));
                    f = p;
                    c[e].Hb = p;
                    delete c[e];
                    b.sF--;
                    d--
                }
            }
            Md && new vb({
                Hc: 20,
                duration: 200,
                va: function (b) {
                    if (a.Hb && a.Hb.style) a.Hb.style.opacity = b * 1
                },
                finish: function () {
                    a.Hb && a.Hb.style && delete a.Hb.style.opacity
                }
            });
            Hd(a)
        }
    }
    Kd.prototype.bd = function (a) {
        a = a.style;
        if (this.Cj) {
            var b = this.Cj.map.oa();
            a.position = "absolute";
            a.border = "none";
            a.width = b.k.Ob + "px";
            a.height = b.k.Ob + "px";
            a.left = this.position[0] + "px";
            a.top = this.position[1] + "px";
            a.maxWidth = "none"
        }
    };

    function Jd(a, b) {
        a.ev.push(b)
    }
    Kd.prototype.lo = function () {
        this.Hb.src = 0 < x.da.ma && 6 >= x.da.ma && this.KJ ? I.pa + "blank.gif" : "" !== this.src && this.Hb.src == this.src ? this.src + "&t = " + Date.now() : this.src
    };

    function Hd(a) {
        for (var b = 0; b < a.ev.length; b++) a.ev[b]();
        a.ev.length = 0
    }

    function Ld(a) {
        if (a) {
            a.onload = a.onerror = p;
            var b = a.attributes,
                c, d, e;
            if (b) {
                d = b.length;
                for (c = 0; c < d; c += 1) e = b[c].name, "unknown" !== typeof a[e] && ab(a[e]) && (a[e] = p)
            }
            if (b = a.children) {
                d = b.length;
                for (c = 0; c < d; c += 1) Ld(a.children[c])
            }
        }
    }

    function Id(a, b) {
        a.src = b;
        a.lo()
    }
    var Md = !x.da.ma || 8 < x.da.ma;

    function Gd(a) {
        this.vh = a || {};
        this.eW = this.vh.copyright || p;
        this.p0 = this.vh.transparentPng || q;
        this.Mw = this.vh.baseLayer || q;
        this.zIndex = this.vh.zIndex || 0;
        this.ba = Gd.TS++
    }
    Gd.TS = 0;
    x.lang.ua(Gd, x.lang.Da, "TileLayer");
    x.extend(Gd.prototype, {
        ra: function (a, b) {
            this.Mw && (this.zIndex = -100);
            this.map = a;
            if (!this.Pb) {
                var c = H("div"),
                    d = c.style;
                d.position = "absolute";
                d.overflow = "visible";
                d.zIndex = this.zIndex;
                d.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                d.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.Pb = c
            }
        },
        remove: function () {
            this.Pb && this.Pb.parentNode && (this.Pb.innerHTML = "", this.Pb.parentNode.removeChild(this.Pb));
            delete this.Pb
        },
        Gt: v("p0"),
        getTilesUrl: function (a, b) {
            if (this.map.oa() !== bb && this.map.oa() !== Ua) var c = this.map.fb.os(a.x, b).nm;
            var d = "";
            this.vh.tileUrlTemplate && (d = this.vh.tileUrlTemplate.replace(/\{X\}/, c), d = d.replace(/\{Y\}/, a.y), d = d.replace(/\{Z\}/, b));
            return d
        },
        Am: v("eW"),
        oa: function () {
            return this.xb || Oa
        }
    });

    function Od(a, b) {
        Kb(a) ? b = a || {} : (b = b || {}, b.databoxId = a);
        this.k = {
            SK: b.databoxId,
            hh: b.geotableId,
            hn: b.q || "",
            hz: b.tags || "",
            filter: b.filter || "",
            bz: b.sortby || "",
            P_: b.styleId || "",
            bm: b.ak || qa,
            Iw: b.age || 36E5,
            zIndex: 11,
            VY: "VectorCloudLayer",
            Ik: b.hotspotName || "vector_md_" + (1E5 * Math.random()).toFixed(0),
            qV: "LBS\u4e91\u9ebb\u70b9\u5c42"
        };
        this.Ap = o;
        Gd.call(this, this.k);
        this.yW = B.oc + "geosearch/detail/";
        this.zW = B.oc + "geosearch/v2/detail/";
        this.sp = {}
    }
    x.ua(Od, Gd, "VectorCloudLayer");

    function Pd(a) {
        a = a || {};
        this.k = x.extend(a, {
            zIndex: 1,
            VY: "VectorTrafficLayer",
            qV: "\u77e2\u91cf\u8def\u51b5\u5c42"
        });
        this.Ap = o;
        Gd.call(this, this.k);
        this.l0 = B.url.proto + B.url.domain.vector_traffic + "/gvd/?qt=lgvd&styles=pl&layers=tf";
        this.Eb = {
            "0": [2, 1354709503, 2, 2, 0, [], 0, 0],
            1: [2, 1354709503, 3, 2, 0, [], 0, 0],
            10: [2, -231722753, 2, 2, 0, [], 0, 0],
            11: [2, -231722753, 3, 2, 0, [], 0, 0],
            12: [2, -231722753, 4, 2, 0, [], 0, 0],
            13: [2, -231722753, 5, 2, 0, [], 0, 0],
            14: [2, -231722753, 6, 2, 0, [], 0, 0],
            15: [2, -1, 4, 0, 0, [], 0, 0],
            16: [2, -1, 5.5, 0, 0, [], 0, 0],
            17: [2, -1, 7, 0, 0, [], 0, 0],
            18: [2, -1, 8.5, 0, 0, [], 0, 0],
            19: [2, -1, 10, 0, 0, [], 0, 0],
            2: [2, 1354709503, 4, 2, 0, [], 0, 0],
            3: [2, 1354709503, 5, 2, 0, [], 0, 0],
            4: [2, 1354709503, 6, 2, 0, [], 0, 0],
            5: [2, -6350337, 2, 2, 0, [], 0, 0],
            6: [2, -6350337, 3, 2, 0, [], 0, 0],
            7: [2, -6350337, 4, 2, 0, [], 0, 0],
            8: [2, -6350337, 5, 2, 0, [], 0, 0],
            9: [2, -6350337, 6, 2, 0, [], 0, 0]
        }
    }
    x.ua(Pd, Gd, "VectorTrafficLayer");

    function fb(a) {
        this.JV = [B.url.proto + B.url.domain.TILE_ONLINE_URLS[1] + "/gvd/?", B.url.proto + B.url.domain.TILE_ONLINE_URLS[2] + "/gvd/?", B.url.proto + B.url.domain.TILE_ONLINE_URLS[3] + "/gvd/?"];
        this.k = {
            uL: q
        };
        for (var b in a) this.k[b] = a[b];
        this.di = this.Mh = this.Xa = this.C = this.D = p;
        this.JM = 0;
        var c = this;
        L.load("vector", function () {
            c.Ee()
        })
    }
    x.extend(fb.prototype, {
        ra: function (a, b) {
            this.D = a;
            this.C = b
        },
        remove: function () {
            this.C = this.D = p
        }
    });

    function Qd(a) {
        Gd.call(this, a);
        this.k = a || {};
        this.EM = o;
        if (this.k.predictDate) {
            if (1 > this.k.predictDate.weekday || 7 < this.k.predictDate.weekday) this.k.predictDate = 1;
            if (0 > this.k.predictDate.hour || 23 < this.k.predictDate.hour) this.k.predictDate.hour = 0
        }
        this.UU = B.url.proto + B.url.domain.traffic + "/traffic/"
    }
    Qd.prototype = new Gd;
    Qd.prototype.ra = function (a, b) {
        Gd.prototype.ra.call(this, a, b);
        this.D = a
    };
    Qd.prototype.Gt = ea(o);
    Qd.prototype.getTilesUrl = function (a, b) {
        var c = "";
        this.k.predictDate ? c = "HistoryService?day=" + (this.k.predictDate.weekday - 1) + "&hour=" + this.k.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&", c += "label=web2D&v=016&");
        var c = this.UU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y,
            d = 1;
        this.D.Xx() && (d = 2);
        return (c + "&scaler=" + d).replace(/-(\d+)/gi, "M$1")
    };
    var Rd = [B.url.proto + B.url.domain.TILES_YUN_HOST[0] + "/georender/gss", B.url.proto + B.url.domain.TILES_YUN_HOST[1] + "/georender/gss", B.url.proto + B.url.domain.TILES_YUN_HOST[2] + "/georender/gss", B.url.proto + B.url.domain.TILES_YUN_HOST[3] + "/georender/gss"],
        Sd = B.url.proto + B.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle",
        Td = 100;

    function qb(a, b) {
        Gd.call(this);
        var c = this;
        this.EM = o;
        var d = q;
        try {
            document.createElement("canvas").getContext("2d"), d = o
        } catch (e) {
            d = q
        }
        d && (this.Gh = new Od(a, b), this.Gh.aG = this);
        Kb(a) ? b = a || {} : (c.Yn = a, b = b || {});
        b.geotableId && (c.Bf = b.geotableId);
        b.databoxId && (c.Yn = b.databoxId);
        d = B.oc + "geosearch";
        c.nc = {
            QN: b.pointDensity || Td,
            tY: d + "/detail/",
            uY: d + "/v2/detail/",
            Iw: b.age || 36E5,
            hn: b.q || "",
            Z_: "png",
            D3: [5, 5, 5, 5],
            UY: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            bm: b.ak || qa,
            hz: b.tags || "",
            filter: b.filter || "",
            bz: b.sortby || "",
            Ik: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
            jG: o
        };
        L.load("clayer", function () {
            c.Td()
        })
    }
    qb.prototype = new Gd;
    qb.prototype.ra = function (a, b) {
        Gd.prototype.ra.call(this, a, b);
        this.D = a
    };
    qb.prototype.getTilesUrl = function (a, b) {
        var c = a.x,
            d = a.y,
            e = this.nc,
            c = Rd[Math.abs(c + d) % Rd.length] + "/image?grids=" + c + "_" + d + "_" + b + "&q=" + e.hn + "&tags=" + e.hz + "&filter=" + e.filter + "&sortby=" + e.bz + "&ak=" + this.nc.bm + "&age=" + e.Iw + "&page_size=" + e.QN + "&format=" + e.Z_;
        e.jG || (e = (1E5 * Math.random()).toFixed(0), c += "&timeStamp=" + e);
        this.Bf ? c += "&geotable_id=" + this.Bf : this.Yn && (c += "&databox_id=" + this.Yn);
        return c
    };
    qb.prototype.enableUseCache = function () {
        this.nc.jG = o
    };
    qb.prototype.disableUseCache = function () {
        this.nc.jG = q
    };
    qb.rU = /^point\(|\)$/ig;
    qb.sU = /\s+/;
    qb.uU = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function Ud(a, b, c) {
        this.ff = a;
        this.xr = b instanceof Gd ? [b] : b.slice(0);
        c = c || {};
        this.k = {
            $_: c.tips || "",
            SE: "",
            fc: c.minZoom || 4,
            Zb: c.maxZoom || 18,
            C3: c.minZoom || 4,
            B3: c.maxZoom || 18,
            Ob: 256,
            ZF: c.textColor || "black",
            ED: c.errorImageUrl || "",
            $a: new ib(new K(-21364736, -16023552), new K(23855104, 19431424)),
            Nd: c.projection || new T
        };
        1 <= this.xr.length && (this.xr[0].Mw = o);
        x.extend(this.k, c)
    }
    x.extend(Ud.prototype, {
        getName: v("ff"),
        lt: function () {
            return this.k.$_
        },
        h3: function () {
            return this.k.SE
        },
        gY: function () {
            return this.xr[0]
        },
        v3: v("xr"),
        hY: function () {
            return this.k.Ob
        },
        hp: function () {
            return this.k.fc
        },
        Dm: function () {
            return this.k.Zb
        },
        setMaxZoom: function (a) {
            this.k.Zb = a
        },
        Km: function () {
            return this.k.ZF
        },
        Hm: function () {
            return this.k.Nd
        },
        Y2: function () {
            return this.k.ED
        },
        hY: function () {
            return this.k.Ob
        },
        yc: function (a) {
            return Math.pow(2, 18 - a)
        },
        tE: function (a) {
            return this.yc(a) * this.k.Ob
        },
        OF: function (a) {
            this.Hm().l_(a)
        }
    });
    var Vd = [B.url.proto + B.url.domain.TILE_BASE_URLS[0], B.url.proto + B.url.domain.TILE_BASE_URLS[1], B.url.proto + B.url.domain.TILE_BASE_URLS[2], B.url.proto + B.url.domain.TILE_BASE_URLS[3]],
        Wd = [B.url.proto + B.url.domain.TILE_ONLINE_URLS[0] + "/tile/", B.url.proto + B.url.domain.TILE_ONLINE_URLS[1] + "/tile/", B.url.proto + B.url.domain.TILE_ONLINE_URLS[2] + "/tile/", B.url.proto + B.url.domain.TILE_ONLINE_URLS[3] + "/tile/"],
        Xd = {
            dark: "dl",
            light: "ll",
            normal: "pl"
        },
        Yd = new Gd;
    Yd.xO = o;
    Yd.getTilesUrl = function (a, b, c) {
        var d = a.x,
            a = a.y,
            e = Vb("normal"),
            f = 1,
            c = Xd[c];
        // this.map.Xx() && (f = 2);
        // d = this.map.fb.os(d, b).nm;
        // return (Wd[Math.abs(d + a) % Wd.length] + "?qt=vtile&x=" + (d + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + f + (6 == x.da.ma ? "&color_dep=32&colors=50" : "") + "&udt=" + e + "&from=jsapi2_0").replace(/-(\d+)/gi, "M$1")

        return `./plugin/offline/tiles/${b}/${d}/${a}.jpg`;  // yangjianfei 添加
    };
    var Oa = new Ud("\u5730\u56fe", Yd, {
        tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
        maxZoom: 19
    }),
        Zd = new Gd;
    Zd.MO = [B.url.proto + B.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", B.url.proto + B.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", B.url.proto + B.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", B.url.proto + B.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Zd.getTilesUrl = function (a, b) {
        var c = a.x,
            d = a.y,
            e = 256 * Math.pow(2, 20 - b),
            d = Math.round((9998336 - e * d) / e) - 1;
        return url = this.MO[Math.abs(c + d) % this.MO.length] + this.map.Sb + "/" + this.map.Uw + "/3/lv" + (21 - b) + "/" + c + "," + d + ".jpg"
    };
    var Ra = new Ud("\u4e09\u7ef4", Zd, {
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new kb
    });
    Ra.yc = function (a) {
        return Math.pow(2, 20 - a)
    };
    Ra.Ak = function (a) {
        if (!a) return "";
        var b = I.xC,
            c;
        for (c in b)
            if (-1 < a.search(c)) return b[c].Fy;
        return ""
    };
    Ra.GL = function (a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        }[a]
    };
    var $d = new Gd({
        Mw: o
    });
    $d.getTilesUrl = function (a, b) {
        var c = a.x,
            d = a.y;
        return (Vd[Math.abs(c + d) % Vd.length] + "u=x=" + c + ";y=" + d + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Vb("satellite")).replace(/-(\d+)/gi, "M$1")
    };
    var bb = new Ud("\u536b\u661f", $d, {
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    }),
        ae = new Gd({
            transparentPng: o
        });
    ae.getTilesUrl = function (a, b) {
        var c = a.x,
            d = a.y,
            e = Vb("satelliteStreet");
        return (Wd[Math.abs(c + d) % Wd.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == x.da.ma ? "&color_dep=32&colors=50" : "") + "&udt=" + e).replace(/-(\d+)/gi, "M$1")
    };
    var Ua = new Ud("\u6df7\u5408", [$d, ae], {
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 4,
        maxZoom: 19,
        textColor: "white"
    });
    var be = 1,
        X = {};
    window.N0 = X;

    function Y(a, b) {
        x.lang.Da.call(this);
        this.Ad = {};
        this.tn(a);
        b = b || {};
        b.ja = b.renderOptions || {};
        this.k = {
            ja: {
                Ia: b.ja.panel || p,
                map: b.ja.map || p,
                ah: b.ja.autoViewport || o,
                Zt: b.ja.selectFirstResult,
                vt: b.ja.highlightMode,
                Gb: b.ja.enableDragging || q
            },
            yy: b.onSearchComplete || t(),
            AN: b.onMarkersSet || t(),
            zN: b.onInfoHtmlSet || t(),
            CN: b.onResultsHtmlSet || t(),
            yN: b.onGetBusListComplete || t(),
            xN: b.onGetBusLineComplete || t(),
            vN: b.onBusListHtmlSet || t(),
            uN: b.onBusLineHtmlSet || t(),
            fF: b.onPolylinesSet || t(),
            Pp: b.reqFrom || ""
        };
        this.map = b.ja.map || window.GCJMAP;
        this.k.ja.ah = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : o;
        this.k.ja.Ia = x.Ec(this.k.ja.Ia)
    }
    x.ua(Y, x.lang.Da);
    x.extend(Y.prototype, {
        getResults: function () {
            return this.Gc ? this.Oi : this.ka
        },
        enableAutoViewport: function () {
            this.k.ja.ah = o
        },
        disableAutoViewport: function () {
            this.k.ja.ah = q
        },
        tn: function (a) {
            a && (this.Ad.src = a)
        },
        PF: function (a) {
            this.k.yy = a || t()
        },
        setMarkersSetCallback: function (a) {
            this.k.AN = a || t()
        },
        setPolylinesSetCallback: function (a) {
            this.k.fF = a || t()
        },
        setInfoHtmlSetCallback: function (a) {
            this.k.zN = a || t()
        },
        setResultsHtmlSetCallback: function (a) {
            this.k.CN = a || t()
        },
        Im: v("Dd")
    });
    var ce = {
        OG: B.oc,
        eb: function (a, b, c, d, e) {
            this.IZ(b);
            var f = (1E5 * Math.random()).toFixed(0);
            B._rd["_cbk" + f] = function (b) {
                b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {}, a && a(b, c), delete B._rd["_cbk" + f])
            };
            d = d || "";
            b = c && c.eP ? Ib(b, encodeURI) : Ib(b, encodeURIComponent);
            this.OG = c && c.Ts ? c.aO ? c.aO : B.Fp : B.oc;
            d = this.OG + d + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi&v=2.1";
            e || (d += "&res=api");
            d = d + ("&callback=BMap._rd._cbk" + f) + ("&ak=" + qa);
            ra(d)
        },
        IZ: function (a) {
            if (a.qt) {
                var b = "";
                switch (a.qt) {
                    case "bt":
                        b = "z_qt|bt";
                        break;
                    case "nav":
                        b = "z_qt|nav";
                        break;
                    case "walk":
                        b = "z_qt|walk";
                        break;
                    case "bse":
                        b = "z_qt|bse";
                        break;
                    case "nse":
                        b = "z_qt|nse";
                        break;
                    case "drag":
                        b = "z_qt|drag";
                        break;
                    case "s":
                        b = "z_qt|s";
                        break;
                    case "ext":
                        b = "z_qt|ext";
                        break;
                    case "gc":
                        b = "z_qt|gc";
                        break;
                    case "rgc":
                        b = "z_qt|rgc";
                        break;
                    case "bl":
                        b = "z_qt|bl";
                        break;
                    case "bsl":
                        b = "z_qt|bsl";
                        break;
                    case "con":
                        b = "z_qt|con";
                        break;
                    case "bd":
                        b = "z_qt|bd";
                        break;
                    case "nb":
                        b = "z_qt|nb";
                        break;
                    case "bda":
                        b = "z_qt|bda";
                        break;
                    case "sa":
                        b = "z_qt|sa";
                        break;
                    case "nba":
                        b = "z_qt|nba";
                        break;
                    case "dec":
                        b = "z_qt|dec"
                }
                "" !== b && B.alog("cus.fire", "count", b)
            }
        }
    };
    window.Z0 = ce;
    B._rd = {};
    var Q = {};
    window.Y0 = Q;
    Q.XN = function (a) {
        a = a.replace(/<\/?[^>]*>/g, "");
        return a = a.replace(/[ | ]* /g, " ")
    };
    Q.zZ = function (a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    };
    Q.AZ = function (a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    };
    var de = 2,
        ee = 3,
        fe = 0,
        ge = "bt",
        he = "nav",
        ie = "walk",
        je = "bl",
        ke = "bsl",
        le = 14,
        ne = 15,
        oe = 18,
        pe = 20,
        qe = 31;
    B.I = window.Instance = x.lang.Lc;

    function re(a, b, c) {
        x.lang.Da.call(this);
        if (a) {
            this.Ua = "object" == typeof a ? a : x.Ec(a);
            this.page = 1;
            this.Md = 100;
            this.mK = "pg";
            this.Wf = 4;
            this.uK = b;
            this.update = o;
            a = {
                page: 1,
                Ze: 100,
                Md: 100,
                Wf: 4,
                mK: "pg",
                update: o
            };
            c || (c = a);
            for (var d in c) "undefined" != typeof c[d] && (this[d] = c[d]);
            this.va()
        }
    }
    x.extend(re.prototype, {
        va: function () {
            this.ra()
        },
        ra: function () {
            this.RV();
            this.Ua.innerHTML = this.nW()
        },
        RV: function () {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Md)) && (this.Md = 1);
            1 > this.page && (this.page = 1);
            1 > this.Md && (this.Md = 1);
            this.page > this.Md && (this.page = this.Md);
            this.page = parseInt(this.page);
            this.Md = parseInt(this.Md)
        },
        m3: function () {
            location.search.match(RegExp("[?&]?" + this.mK + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        nW: function () {
            var a = [],
                b = this.page - 1,
                c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.Wf) {
                    var d;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.ba + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.ba + "').toPage(" + b + ");"))
            }
            if (this.page < this.Wf) d = 0 == this.page % this.Wf ? this.page - this.Wf - 1 : this.page - this.page % this.Wf + 1, b = d + this.Wf - 1;
            else {
                d = Math.floor(this.Wf / 2);
                var e = this.Wf % 2 - 1,
                    b = this.Md > this.page + d ? this.page + d : this.Md;
                d = this.page - d - e
            }
            this.page > this.Md - this.Wf && this.page >= this.Wf && (d = this.Md - this.Wf + 1, b = this.Md);
            for (e = d; e <= b; e++) 0 < e && (e == this.page ? a.push('<span style="margin-right:3px">' + e + "</span>") : 1 <= e && e <= this.Md && (d = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + e + "]</a></span>", a.push(d.replace("{temp3}", "BMap.I('" + this.ba + "').toPage(" + e + ");"))));
            c > this.Md || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.ba + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function (a) {
            a = a ? a : 1;
            "function" == typeof this.uK && (this.uK(a), this.page = a);
            this.update && this.va()
        }
    });

    function eb(a, b) {
        Y.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.Zp(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.bD() : this.zD();
        this.wa = [];
        this.xf = [];
        this.lb = -1;
        this.Oa = [];
        var c = this;
        L.load("local", function () {
            c.Wz()
        }, o)
    }
    x.ua(eb, Y, "LocalSearch");
    eb.oq = 10;
    eb.V0 = 1;
    eb.Kn = 100;
    eb.EG = 2E3;
    eb.LG = 1E5;
    x.extend(eb.prototype, {
        search: function (a, b) {
            this.Oa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        mn: function (a, b, c) {
            this.Oa.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        Vp: function (a, b, c, d) {
            this.Oa.push({
                method: "searchNearby",
                arguments: [a, b, c, d]
            })
        },
        Qe: function () {
            delete this.Ga;
            delete this.Dd;
            delete this.ka;
            delete this.fa;
            this.lb = -1;
            this.sb();
            this.k.ja.Ia && (this.k.ja.Ia.innerHTML = "")
        },
        Nm: t(),
        zD: function () {
            this.k.ja.Zt = o
        },
        bD: function () {
            this.k.ja.Zt = q
        },
        Zp: function (a) {
            this.k.Nk = "number" == typeof a && !isNaN(a) ? 1 > a ? eb.oq : a > eb.Kn ? eb.oq : a : eb.oq
        },
        qf: function () {
            return this.k.Nk
        },
        toString: ea("LocalSearch")
    });
    var se = eb.prototype;
    U(se, {
        clearResults: se.Qe,
        setPageCapacity: se.Zp,
        getPageCapacity: se.qf,
        gotoPage: se.Nm,
        searchNearby: se.Vp,
        searchInBounds: se.mn,
        search: se.search,
        enableFirstResultSelection: se.zD,
        disableFirstResultSelection: se.bD
    });

    function te(a, b) {
        Y.call(this, a, b)
    }
    x.ua(te, Y, "BaseRoute");
    x.extend(te.prototype, {
        Qe: t()
    });

    function ue(a, b) {
        Y.call(this, a, b);
        b = b || {};
        this.gu(b.policy);
        this.Zp(b.pageCapacity);
        this.xd = ge;
        this.Pu = le;
        this.Qu = be;
        this.wa = [];
        this.lb = -1;
        this.k.fd = b.enableTraffic || q;
        this.Oa = [];
        var c = this;
        L.load("route", function () {
            c.Td()
        })
    }
    ue.Kn = 100;
    ue.KP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    x.ua(ue, te, "TransitRoute");
    x.extend(ue.prototype, {
        gu: function (a) {
            this.k.$c = 0 <= a && 4 >= a ? a : 0
        },
        UA: function (a, b) {
            this.Oa.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function (a, b) {
            this.Oa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        Zp: function (a) {
            if ("string" === typeof a && (a = parseInt(a, 10), isNaN(a))) {
                this.k.Nk = ue.Kn;
                return
            }
            this.k.Nk = "number" !== typeof a ? ue.Kn : 1 <= a && a <= ue.Kn ? Math.round(a) : ue.Kn
        },
        toString: ea("TransitRoute"),
        GU: function (a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var ve = ue.prototype;
    U(ve, {
        _internalSearch: ve.UA
    });

    function we(a, b) {
        Y.call(this, a, b);
        this.wa = [];
        this.lb = -1;
        this.Oa = [];
        var c = this,
            d = this.k.ja;
        1 !== d.vt && 2 !== d.vt && (d.vt = 1);
        this.oA = this.k.ja.Gb ? o : q;
        L.load("route", function () {
            c.Td()
        });
        this.CE && this.CE()
    }
    we.YP = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    x.ua(we, te, "DWRoute");
    x.extend(we.prototype, {
        search: function (a, b, c) {
            this.Oa.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });

    function xe(a, b) {
        we.call(this, a, b);
        b = b || {};
        this.k.fd = b.enableTraffic || q;
        this.gu(b.policy);
        this.xd = he;
        this.Pu = pe;
        this.Qu = ee
    }
    x.ua(xe, we, "DrivingRoute");
    xe.prototype.gu = function (a) {
        this.k.$c = 0 <= a && 2 >= a ? a : 0
    };

    function ye(a, b) {
        we.call(this, a, b);
        this.xd = ie;
        this.Pu = qe;
        this.Qu = de;
        this.oA = q
    }
    x.ua(ye, we, "WalkingRoute");

    function ze(a, b) {
        x.lang.Da.call(this);
        this.Uf = [];
        this.dn = [];
        this.k = b;
        this.cc = a;
        this.map = this.k.ja.map || p;
        this.Ny = this.k.Ny;
        this.Bb = p;
        this.jj = 0;
        this.cz = "";
        this.fe = 1;
        this.ux = "";
        this.Qp = [0, 0, 0, 0, 0, 0, 0];
        this.VE = [];
        this.xs = [1, 1, 1, 1, 1, 1, 1];
        this.VO = [1, 1, 1, 1, 1, 1, 1];
        this.Xt = [0, 0, 0, 0, 0, 0, 0];
        this.Rp = [0, 0, 0, 0, 0, 0, 0];
        this.Ma = [{
            o: "",
            Fd: 0,
            Cn: 0,
            x: 0,
            y: 0,
            qa: -1
        }, {
            o: "",
            Fd: 0,
            Cn: 0,
            x: 0,
            y: 0,
            qa: -1
        }, {
            o: "",
            Fd: 0,
            Cn: 0,
            x: 0,
            y: 0,
            qa: -1
        }, {
            o: "",
            Fd: 0,
            Cn: 0,
            x: 0,
            y: 0,
            qa: -1
        }, {
            o: "",
            Fd: 0,
            Cn: 0,
            x: 0,
            y: 0,
            qa: -1
        }, {
            o: "",
            Fd: 0,
            Cn: 0,
            x: 0,
            y: 0,
            qa: -1
        }, {
            o: "",
            Fd: 0,
            Cn: 0,
            x: 0,
            y: 0,
            qa: -1
        }];
        this.li = -1;
        this.wu = [];
        this.xu = [];
        L.load("route", t())
    }
    x.lang.ua(ze, x.lang.Da, "RouteAddr");
    var Ae = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(Ae);
    var Be = /android/i.test(Ae);

    function Ce(a) {
        this.vh = a || {}
    }
    x.extend(Ce.prototype, {
        gO: function (a, b, c) {
            var d = this;
            L.load("route", function () {
                d.Td(a, b, c)
            })
        }
    });

    function De(a) {
        this.k = {};
        x.extend(this.k, a);
        this.Oa = [];
        var b = this;
        L.load("othersearch", function () {
            b.Td()
        })
    }
    x.ua(De, x.lang.Da, "Geocoder");
    x.extend(De.prototype, {
        Gm: function (a, b, c) {
            this.Oa.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        Cm: function (a, b, c) {
            this.Oa.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: ea("Geocoder")
    });
    var Ee = De.prototype;
    U(Ee, {
        getPoint: Ee.Gm,
        getLocation: Ee.Cm
    });

    function Geolocation(a) {
        a = a || {};
        this.B = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5,
            il: q
        };
        this.qe = [];
        var b = this;
        L.load("othersearch", function () {
            for (var a = 0, d; d = b.qe[a]; a++) b[d.method].apply(b, d.arguments)
        })
    }
    x.extend(Geolocation.prototype, {
        getCurrentPosition: function (a, b) {
            this.qe.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: ea(2),
        enableSDKLocation: function () {
            J() && (this.B.il = o)
        },
        disableSDKLocation: function () {
            this.B.il = q
        }
    });

    function Ke(a) {
        a = a || {};
        a.ja = a.renderOptions || {};
        this.k = {
            ja: {
                map: a.ja.map || p
            }
        };
        this.Oa = [];
        var b = this;
        L.load("othersearch", function () {
            b.Td()
        })
    }
    x.ua(Ke, x.lang.Da, "LocalCity");
    x.extend(Ke.prototype, {
        get: function (a) {
            this.Oa.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: ea("LocalCity")
    });

    function Le() {
        this.Oa = [];
        var a = this;
        L.load("othersearch", function () {
            a.Td()
        })
    }
    x.ua(Le, x.lang.Da, "Boundary");
    x.extend(Le.prototype, {
        get: function (a, b) {
            this.Oa.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: ea("Boundary")
    });

    function Me(a, b) {
        Y.call(this, a, b);
        this.VP = je;
        this.XP = ne;
        this.UP = ke;
        this.WP = oe;
        this.Oa = [];
        var c = this;
        L.load("buslinesearch", function () {
            c.Td()
        })
    }
    Me.Bv = I.pa + "iw_plus.gif";
    Me.ZS = I.pa + "iw_minus.gif";
    Me.QU = I.pa + "stop_icon.png";
    x.ua(Me, Y);
    x.extend(Me.prototype, {
        getBusList: function (a) {
            this.Oa.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function (a) {
            this.Oa.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function (a) {
            this.k.yN = a || t()
        },
        setGetBusLineCompleteCallback: function (a) {
            this.k.xN = a || t()
        },
        setBusListHtmlSetCallback: function (a) {
            this.k.vN = a || t()
        },
        setBusLineHtmlSetCallback: function (a) {
            this.k.uN = a || t()
        },
        setPolylinesSetCallback: function (a) {
            this.k.fF = a || t()
        }
    });

    function Ne(a) {
        Y.call(this, a);
        a = a || {};
        this.nc = {
            input: a.input || p,
            nC: a.baseDom || p,
            types: a.types || [],
            yy: a.onSearchComplete || t()
        };
        this.Ad.src = a.location || "\u5168\u56fd";
        this.ej = "";
        this.og = p;
        this.qI = "";
        this.Vi();
        Ta(Ja);
        var b = this;
        L.load("autocomplete", function () {
            b.Td()
        })
    }
    x.ua(Ne, Y, "Autocomplete");
    x.extend(Ne.prototype, {
        Vi: t(),
        show: t(),
        U: t(),
        QF: function (a) {
            this.nc.types = a
        },
        tn: function (a) {
            this.Ad.src = a
        },
        search: da("ej"),
        Qy: da("qI")
    });
    var Va;

    function Qa(a, b) {
        function c() {
            e.k.visible ? ("inter" === e.Le && Xa() && e.k.haveBreakId && e.k.indoorExitControl === o ? x.K.show(e.pr) : x.K.U(e.pr), this.Ed && this.k.closeControl && this.Af && this.D && this.D.Ha() === this.C ? x.K.show(e.Af) : x.K.U(e.Af), this.k.forceCloseControl && x.K.show(e.Af)) : (x.K.U(e.Af), x.K.U(e.pr))
        }
        this.C = "string" == typeof a ? x.$(a) : a;
        this.ba = Oe++;
        this.k = {
            enableScrollWheelZoom: o,
            panoramaRenderer: Pa() ? "javascript" : "flash",
            swfSrc: B.Sf("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: o,
            indoorExitControl: o,
            indoorFloorControl: q,
            linksControl: o,
            clickOnRoad: o,
            navigationControl: o,
            closeControl: o,
            indoorSceneSwitchControl: o,
            albumsControl: q,
            albumsControlOptions: {},
            copyrightControlOptions: {},
            forceCloseControl: q,
            haveBreakId: q
        };
        var b = b || {},
            d;
        for (d in b) this.k[d] = b[d];
        b.closeControl === o && (this.k.forceCloseControl = o);
        b.useWebGL === q && Pa(q);
        this.Ea = {
            heading: 0,
            pitch: 0
        };
        this.ko = [];
        this.Kb = this.Ya = p;
        this.jk = this.mr();
        this.wa = [];
        this.Kc = 1;
        this.Le = this.vT = this.ml = "";
        this.Ke = {};
        this.Nf = p;
        this.Ug = [];
        this.Ir = [];
        "cvsRender" == this.jk || Pa() ? (this.ck = 90, this.ek = -90) : "cssRender" == this.jk && (this.ck = 45, this.ek = -45);
        this.Mr = q;
        var e = this,
            f = (1E5 * Math.random()).toFixed(0);
        B._rd = B._rd || {};
        B._rd["_cbk" + f] = function (a) {
            if (!a || a.error === j || a.error !== 0) Nc("PANORAMA");
            else {
                this.jk === "flashRender" ? L.load("panoramaflash", function () {
                    e.Vi()
                }, o) : L.load("panorama", function () {
                    e.Ab()
                }, o);
                b.of == "api" ? Ta(Fa) : Ta(Ga)
            }
            delete B._rd["_cbk" + f]
        };
        this.lo = function () {
            Mc("PANORAMA", "BMap._rd._cbk" + f);
            this.lo = t()
        };
        this.k.jT !== o && (this.lo(), B.Ln("cus.fire", "count", "z_loadpanoramacount"));
        this.$T(this.C);
        this.addEventListener("id_changed", function () {
            Ta(Ea, {
                from: b.of
            })
        });
        this.oQ();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }
    var Pe = 4,
        Qe = 1,
        Oe = 0;
    x.lang.ua(Qa, x.lang.Da, "Panorama");
    x.extend(Qa.prototype, {
        oQ: function () {
            var a = this,
                b = this.Af = H("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "\u9000\u51fa\u5168\u666f";
            b.onclick = function () {
                a.U()
            };
            this.C.appendChild(b);
            var c = this.pr = H("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
            c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
            c.onclick = function () {
                a.ap()
            };
            this.C.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)", c.style.backgroundColor = "rgb(37,37,37)")
        },
        ap: t(),
        $T: function (a) {
            var b, c;
            b = a.style;
            c = Ya(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = Ya(a).zIndex, !a || "auto" === a) b.zIndex = 0
        },
        HX: v("ko"),
        Yb: v("Ya"),
        iY: v("mw"),
        vO: v("mw"),
        ia: v("Kb"),
        Fa: v("Ea"),
        ga: v("Kc"),
        jh: v("ml"),
        o3: function () {
            return this.E1 || []
        },
        j3: v("vT"),
        kt: v("Le"),
        Uy: function (a) {
            a !== this.Le && (this.Le = a, this.dispatchEvent(new N("onscene_type_changed")))
        },
        rc: function (a, b, c) {
            "object" === typeof b && (c = b, b = j);
            a != this.Ya && (this.xl = this.Ya, this.yl = this.Kb, this.Ya = a, this.Le = b || "street", this.Kb = p, c && c.pov && this.Nc(c.pov))
        },
        ta: function (a) {
            a.ab(this.Kb) || (this.xl = this.Ya, this.yl = this.Kb, this.Kb = a, this.Ya = p)
        },
        Nc: function (a) {
            a && (this.Ea = a, a = this.Ea.pitch, a > this.ck ? a = this.ck : a < this.ek && (a = this.ek), this.Mr = o, this.Ea.pitch = a)
        },
        A_: function (a, b) {
            this.ek = 0 <= a ? 0 : a;
            this.ck = 0 >= b ? 0 : b
        },
        Oc: function (a) {
            a != this.Kc && (a > Pe && (a = Pe), a < Qe && (a = Qe), a != this.Kc && (this.Kc = a), "cssRender" === this.jk && this.Nc(this.Ea))
        },
        NB: function () {
            if (this.D)
                for (var a = this.D.Mx(), b = 0; b < a.length; b++)(a[b] instanceof W || a[b] instanceof td) && a[b].point && this.wa.push(a[b])
        },
        Ry: da("D"),
        fu: function (a) {
            this.Nf = a || "none"
        },
        Fj: function (a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b]) this.k[b][c] = a[b][c];
                else this.k[b] = a[b];
                a.closeControl === o && (this.k.forceCloseControl = o);
                a.closeControl === q && (this.k.forceCloseControl = q);
                switch (b) {
                    case "linksControl":
                        this.dispatchEvent(new N("onlinks_visible_changed"));
                        break;
                    case "clickOnRoad":
                        this.dispatchEvent(new N("onclickonroad_changed"));
                        break;
                    case "navigationControl":
                        this.dispatchEvent(new N("onnavigation_visible_changed"));
                        break;
                    case "indoorSceneSwitchControl":
                        this.dispatchEvent(new N("onindoor_default_switch_mode_changed"));
                        break;
                    case "albumsControl":
                        this.dispatchEvent(new N("onalbums_visible_changed"));
                        break;
                    case "albumsControlOptions":
                        this.dispatchEvent(new N("onalbums_options_changed"));
                        break;
                    case "copyrightControlOptions":
                        this.dispatchEvent(new N("oncopyright_options_changed"));
                        break;
                    case "closeControl":
                        this.dispatchEvent(new N("onclose_options_changed"));
                        break;
                    case "indoorExitControl":
                        this.dispatchEvent(new N("onindoorexit_options_changed"));
                        break;
                    case "indoorFloorControl":
                        this.dispatchEvent(new N("onindoorfloor_options_changed"))
                }
            }
        },
        Hk: function () {
            this.Hl.style.visibility = "hidden"
        },
        Yy: function () {
            this.Hl.style.visibility = "visible"
        },
        VW: function () {
            this.k.enableScrollWheelZoom = o
        },
        GW: function () {
            this.k.enableScrollWheelZoom = q
        },
        show: function () {
            this.k.visible = o
        },
        U: function () {
            this.k.visible = q
        },
        mr: function () {
            return Xa() && !J() && "javascript" !== this.k.panoramaRenderer ? "flashRender" : !J() && Pb() ? "cvsRender" : "cssRender"
        },
        Ka: function (a) {
            this.Ke[a.kd] = a
        },
        Ub: function (a) {
            delete this.Ke[a]
        },
        rE: function () {
            return this.k.visible
        },
        ih: function () {
            return new M(this.C.clientWidth, this.C.clientHeight)
        },
        Ha: v("C"),
        CL: function () {
            var a = B.Sf("baidumap", "?"),
                b = this.Yb();
            if (b) {
                var b = {
                    panotype: this.kt(),
                    heading: this.Fa().heading,
                    pitch: this.Fa().pitch,
                    pid: b,
                    panoid: b,
                    from: "api"
                },
                    c;
                for (c in b) a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        Ux: function () {
            this.Fj({
                copyrightControlOptions: {
                    logoVisible: q
                }
            })
        },
        TF: function () {
            this.Fj({
                copyrightControlOptions: {
                    logoVisible: o
                }
            })
        },
        hC: function (a) {
            function b(a, b) {
                return function () {
                    a.Ir.push({
                        hN: b,
                        gN: arguments
                    })
                }
            }
            for (var c = a.getPanoMethodList(), d = "", e = 0, f = c.length; e < f; e++) d = c[e], this[d] = b(this, d);
            this.Ug.push(a)
        },
        vF: function (a) {
            for (var b = this.Ug.length; b--;) this.Ug[b] === a && this.Ug.splice(b, 1)
        },
        LF: t()
    });
    var Re = Qa.prototype;
    U(Re, {
        setId: Re.rc,
        setPosition: Re.ta,
        setPov: Re.Nc,
        setZoom: Re.Oc,
        setOptions: Re.Fj,
        getId: Re.Yb,
        getPosition: Re.ia,
        getPov: Re.Fa,
        getZoom: Re.ga,
        getLinks: Re.HX,
        getBaiduMapUrl: Re.CL,
        hideMapLogo: Re.Ux,
        showMapLogo: Re.TF,
        enableDoubleClickZoom: Re.D2,
        disableDoubleClickZoom: Re.r2,
        enableScrollWheelZoom: Re.VW,
        disableScrollWheelZoom: Re.GW,
        show: Re.show,
        hide: Re.U,
        addPlugin: Re.hC,
        removePlugin: Re.vF,
        getVisible: Re.rE,
        addOverlay: Re.Ka,
        removeOverlay: Re.Ub,
        getSceneType: Re.kt,
        setPanoramaPOIType: Re.fu,
        exitInter: Re.ap,
        setInteractiveState: Re.LF
    });
    U(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });

    function Se() {
        x.lang.Da.call(this);
        this.kd = "PanoramaOverlay_" + this.ba;
        this.P = p;
        this.Pa = o
    }
    x.lang.ua(Se, x.lang.Da, "PanoramaOverlayBase");
    x.extend(Se.prototype, {
        k3: v("kd"),
        ra: function () {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function () {
            aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Mf: function () {
            aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });

    function Te(a, b) {
        Se.call(this);
        var c = {
            position: p,
            altitude: 2,
            displayDistance: o
        },
            b = b || {},
            d;
        for (d in b) c[d] = b[d];
        this.Kb = c.position;
        this.Sj = a;
        this.Fq = c.altitude;
        this.AR = c.displayDistance;
        this.ZF = c.color;
        this.lM = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.oK = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.sK = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.xE = c.imageUrl;
        this.size = c.size;
        this.ye = c.image;
        this.width = c.width;
        this.height = c.height;
        this.xY = c.imageData;
        this.borderWidth = c.borderWidth
    }
    x.lang.ua(Te, Se, "PanoramaLabel");
    x.extend(Te.prototype, {
        P2: v("borderWidth"),
        getImageData: v("xY"),
        Km: v("ZF"),
        d3: v("lM"),
        L2: v("backgroundColor"),
        M2: v("oK"),
        N2: v("borderColor"),
        O2: v("sK"),
        a3: v("fontSize"),
        l3: v("padding"),
        e3: v("xE"),
        vb: v("size"),
        Dx: v("ye"),
        ta: function (a) {
            this.Kb = a;
            this.Mf("position", a)
        },
        ia: v("Kb"),
        ad: function (a) {
            this.Sj = a;
            this.Mf("content", a)
        },
        Bk: v("Sj"),
        GF: function (a) {
            this.Fq = a;
            this.Mf("altitude", a)
        },
        dp: v("Fq"),
        Fa: function () {
            var a = this.ia(),
                b = p,
                c = p;
            this.P && (c = this.P.ia());
            if (a && c)
                if (a.ab(c)) b = this.P.Fa();
                else {
                    b = {};
                    b.heading = Ue(a.lng - c.lng, a.lat - c.lat) || 0;
                    var a = b,
                        c = this.dp(),
                        d = this.co();
                    a.pitch = Math.round(180 * (Math.atan(c / d) / Math.PI)) || 0
                }
            return b
        },
        co: function () {
            var a = 0,
                b, c;
            this.P && (b = this.P.ia(), (c = this.ia()) && !c.ab(b) && (a = T.fp(b, c)));
            return a
        },
        U: function () {
            aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        show: function () {
            aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Mf: t()
    });
    var Ve = Te.prototype;
    U(Ve, {
        setPosition: Ve.ta,
        getPosition: Ve.ia,
        setContent: Ve.ad,
        getContent: Ve.Bk,
        setAltitude: Ve.GF,
        getAltitude: Ve.dp,
        getPov: Ve.Fa,
        show: Ve.show,
        hide: Ve.U
    });

    function We(a, b) {
        Se.call(this);
        var c = {
            icon: "",
            title: "",
            panoInfo: p,
            altitude: 2
        },
            b = b || {},
            d;
        for (d in b) c[d] = b[d];
        this.Kb = a;
        this.lI = c.icon;
        this.IJ = c.title;
        this.Fq = c.altitude;
        this.NT = c.panoInfo;
        this.Ea = {
            heading: 0,
            pitch: 0
        }
    }
    x.lang.ua(We, Se, "PanoramaMarker");
    x.extend(We.prototype, {
        ta: function (a) {
            this.Kb = a;
            this.Mf("position", a)
        },
        ia: v("Kb"),
        Dc: function (a) {
            this.IJ = a;
            this.Mf("title", a)
        },
        np: v("IJ"),
        Vb: function (a) {
            this.lI = icon;
            this.Mf("icon", a)
        },
        gp: v("lI"),
        GF: function (a) {
            this.Fq = a;
            this.Mf("altitude", a)
        },
        dp: v("Fq"),
        iE: v("NT"),
        Fa: function () {
            var a = p;
            if (this.P) {
                var a = this.P.ia(),
                    b = this.ia(),
                    a = Ue(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else a = this.Ea;
            return a
        },
        Mf: t()
    });
    var Xe = We.prototype;
    U(Xe, {
        setPosition: Xe.ta,
        getPosition: Xe.ia,
        setTitle: Xe.Dc,
        getTitle: Xe.np,
        setAltitude: Xe.GF,
        getAltitude: Xe.dp,
        getPanoInfo: Xe.iE,
        getIcon: Xe.gp,
        setIcon: Xe.Vb,
        getPov: Xe.Fa
    });

    function Ue(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI),
                d = 0;
            0 < a && 0 > b && (d = 90);
            0 > a && 0 > b && (d = 180);
            0 > a && 0 < b && (d = 270);
            c = (c + 90) % 90 + d
        } else 0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }

    function Pa(a) {
        if ("boolean" === typeof Ye) return Ye;
        if (a === q || !window.WebGLRenderingContext) return Ye = q;
        if (x.platform.Sm) {
            a = 0;
            try {
                a = navigator.userAgent.split("Android ")[1].charAt(0)
            } catch (b) { }
            if (5 > a) return Ye = q
        }
        var a = document.createElement("canvas"),
            c = p;
        try {
            c = a.getContext("webgl")
        } catch (d) {
            Ye = q
        }
        return Ye = c === p ? q : o
    }
    var Ye;

    function Ze() {
        if ("boolean" === typeof $e) return $e;
        $e = o;
        if (x.platform.HE) return o;
        var a = navigator.userAgent;
        return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? o : $e = q
    }
    var $e;

    function ad(a, b) {
        this.P = a || p;
        var c = this;
        c.P && c.ca();
        L.load("pservice", function () {
            c.TQ()
        });
        "api" == (b || {}).of ? Ta(Ha) : Ta(Ia);
        this.yd = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }
    B.bn(function (a) {
        "flashRender" !== a.mr() && new ad(a, {
            of: "api"
        })
    });
    x.extend(ad.prototype, {
        ca: function () {
            function a(a) {
                if (a) {
                    if (a.id != b.mw) {
                        b.vO(a.id);
                        b.ea = a;
                        Ze() || b.dispatchEvent(new N("onthumbnail_complete"));
                        b.Ya != p && (b.yl = b._position);
                        for (var c in a)
                            if (a.hasOwnProperty(c)) switch (b["_" + c] = a[c], c) {
                                case "position":
                                    b.Kb = a[c];
                                    break;
                                case "id":
                                    b.Ya = a[c];
                                    break;
                                case "links":
                                    b.ko = a[c];
                                    break;
                                case "zoom":
                                    b.Kc = a[c]
                            }
                        if (b.yl) {
                            var f = b.yl,
                                g = b._position;
                            c = f.lat;
                            var i = g.lat,
                                k = Qb(i - c),
                                f = Qb(g.lng - f.lng);
                            c = Math.sin(k / 2) * Math.sin(k / 2) + Math.cos(Qb(c)) * Math.cos(Qb(i)) * Math.sin(f / 2) * Math.sin(f / 2);
                            b.AH = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new N("ondataload");
                        b.show();
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new N("onposition_changed"));
                        b.dispatchEvent(new N("onlinks_changed"));
                        b.dispatchEvent(new N("oncopyright_changed"), {
                            copyright: a.copyright
                        });
                        a.jm ? (b.Fj({
                            haveBreakId: o
                        }), Xa() && b.k.closeControl && x.K.show(b.pr)) : x.K.U(b.pr)
                    }
                } else b.Ya = b.xl, b.Kb = b.yl, b.dispatchEvent(new N("onnoresult"))
            }
            var b = this.P,
                c = this;
            b.addEventListener("id_changed", function () {
                B.Jw("y");
                c.kp(b.Yb(), a)
            });
            b.addEventListener("iid_changed", function () {
                B.Jw("y");
                c.mg(ad.jl + "qt=idata&iid=" + b.KA + "&fn=", function (b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo,
                            e = {};
                        e.jm = b.BreakID;
                        for (var f = b.Defaultfloor, g = p, i = 0; i < b.Floors.length; i++)
                            if (b.Floors[i].Floor == f) {
                                g = b.Floors[i];
                                break
                            }
                        e.id = g.StartID || g.Points[0].PID;
                        c.kp(e.id, a, e)
                    }
                })
            });
            b.addEventListener("position_changed_inner", function () {
                B.Jw("y");
                c.tj(b.ia(), a)
            })
        },
        kp: function (a, b) {
            this.yd.getPanoramaById.push(arguments)
        },
        tj: function (a, b, c) {
            this.yd.getPanoramaByLocation.push(arguments)
        },
        sE: function (a, b, c, d) {
            this.yd.getVisiblePOIs.push(arguments)
        },
        Px: function (a, b) {
            this.yd.getRecommendPanosById.push(arguments)
        },
        Ox: function (a) {
            this.yd.getPanoramaVersions.push(arguments)
        },
        vC: function (a, b) {
            this.yd.checkPanoSupportByCityCode.push(arguments)
        },
        Nx: function (a, b) {
            this.yd.getPanoramaByPOIId.push(arguments)
        },
        HL: function (a) {
            this.yd.getCopyrightProviders.push(arguments)
        }
    });
    var af = ad.prototype;
    U(af, {
        getPanoramaById: af.kp,
        getPanoramaByLocation: af.tj,
        getPanoramaByPOIId: af.Nx
    });

    function $c(a) {
        Gd.call(this);
        "api" == (a || {}).of ? Ta(Ba) : Ta(Ca)
    }
    $c.SG = B.Sf("pano", "");
    $c.prototype = new Gd;
    $c.prototype.getTilesUrl = function (a, b) {
        var c = $c.SG[(a.x + a.y) % $c.SG.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        x.da.ma && 6 >= x.da.ma && (c += "&color_dep=32");
        var d = Ec(c);
        d ? (d = Pc(d.path, {
            yp: q
        }), c += "&" + d) : c = p;
        return c
    };
    $c.prototype.Gt = ea(o);
    bf.Xd = new T;

    function bf() { }
    x.extend(bf, {
        HW: function (a, b, c) {
            c = x.lang.Lc(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = bf.Xd.Ej(new S(b.data.mercatorX, b.data.mercatorY)));
            c.dispatchEvent(new N("on" + a), b)
        }
    });
    var cf = bf;
    U(cf, {
        dispatchFlashEvent: cf.HW
    });
    var df = {
        MP: 50
    };
    df.Ru = B.Sf("pano")[0];
    df.Nu = {
        width: 220,
        height: 60
    };
    x.extend(df, {
        wp: function (a, b, c, d) {
            if (!b || !c || !c.lngLat || !c.panoInstance) d();
            else {
                this.qo === j && (this.qo = new ad(p, {
                    of: "api"
                }));
                var e = this;
                this.qo.vC(b, function (b) {
                    b ? e.qo.tj(c.lngLat, df.MP, function (b) {
                        if (b && b.id) {
                            var f = b.id,
                                k = b.wh,
                                b = b.xh,
                                l = ad.Xd.zl(c.lngLat),
                                m = e.AS(l, {
                                    x: k,
                                    y: b
                                }),
                                k = e.RL(f, m, 0, df.Nu.width, df.Nu.height);
                            a.content = e.BS(a.content, k, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function () {
                                ja.M(x.Ec("infoWndPano"), "click", function () {
                                    c.panoInstance.rc(f);
                                    c.panoInstance.show();
                                    c.panoInstance.Nc({
                                        heading: m,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        d()
                    }) : d()
                })
            }
        },
        BS: function (a, b, c, d) {
            var c = c || "",
                e;
            !d || !a.split(d)[0] ? (d = a, a = "") : (d = a.split(d)[0], e = d.lastIndexOf("<"), d = a.substring(0, e), a = a.substring(e));
            e = [];
            var f = df.Nu.width,
                g = df.Nu.height;
            e.push(d);
            e.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + g + "px;width:" + f + "px; margin-top: -19px;'>");
            e.push("<img class='pano_thumnail_img' width='" + f + "' height='" + g + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + f + ", " + g + ");' />");
            e.push("<div class='panoInfoBoxTitleBg' style='width:" + f + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            e.push("</div>");
            e.push(a);
            return e.join("")
        },
        AS: function (a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        RL: function (a, b, c, d, e) {
            var f = df.Ru + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}",
                g = {
                    panoId: a,
                    panoHeading: b || 0,
                    panoPitch: c || 0,
                    width: d,
                    height: e
                },
                f = f.replace(/\{(.*?)\}/g, function (a, b) {
                    return g[b]
                });
            return (a = Ec(f)) ? (a = Pc(a.path, {
                yp: q
            }), f + ("&" + a)) : p
        }
    });
    var ef = document,
        ff = Math,
        gf = ef.createElement("div").style,
        hf;
    a: {
        for (var jf = ["t", "webkitT", "MozT", "msT", "OT"], kf, lf = 0, mf = jf.length; lf < mf; lf++)
            if (kf = jf[lf] + "ransform", kf in gf) {
                hf = jf[lf].substr(0, jf[lf].length - 1);
                break a
            }
        hf = q
    }
    var nf = hf ? "-" + hf.toLowerCase() + "-" : "",
        pf = of("transform"),
        qf = of("transitionProperty"),
        rf = of("transitionDuration"),
        sf = of("transformOrigin"),
        tf = of("transitionTimingFunction"),
        uf = of("transitionDelay"),
        Be = /android/gi.test(navigator.appVersion),
        vf = /iphone|ipad/gi.test(navigator.appVersion),
        wf = /hp-tablet/gi.test(navigator.appVersion),
        xf = of("perspective") in gf,
        yf = "ontouchstart" in window && !wf,
        zf = hf !== q,
        Af = of("transition") in gf,
        Bf = "onorientationchange" in window ? "orientationchange" : "resize",
        Cf = yf ? "touchstart" : "mousedown",
        Df = yf ? "touchmove" : "mousemove",
        Ef = yf ? "touchend" : "mouseup",
        Ff = yf ? "touchcancel" : "mouseup",
        Gf = hf === q ? q : {
            "": "transitionend",
            webkit: "webkitTransitionEnd",
            Moz: "transitionend",
            O: "otransitionend",
            ms: "MSTransitionEnd"
        }[hf],
        Jf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            return setTimeout(a, 1)
        },
        Kf = window.cancelRequestAnimationFrame || window.n5 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
        Lf = xf ? " translateZ(0)" : "";

    function Mf(a, b) {
        var c = this,
            d;
        c.Fn = "object" == typeof a ? a : ef.getElementById(a);
        c.Fn.style.overflow = "hidden";
        c.Nb = c.Fn.children[0];
        c.options = {
            rp: o,
            Dn: o,
            x: 0,
            y: 0,
            Mo: o,
            FV: q,
            py: o,
            WE: o,
            al: o,
            Gi: q,
            c0: 0,
            Sw: q,
            Sx: o,
            si: o,
            Hi: o,
            KD: Be,
            Vx: vf,
            bX: vf && xf,
            DF: "",
            zoom: q,
            cl: 1,
            kq: 4,
            JW: 2,
            rP: "scroll",
            ou: q,
            az: 1,
            BN: p,
            tN: function (a) {
                a.preventDefault()
            },
            EN: p,
            sN: p,
            DN: p,
            rN: p,
            xy: p,
            FN: p,
            wN: p,
            Jp: p,
            GN: p,
            Ip: p
        };
        for (d in b) c.options[d] = b[d];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.al = zf && c.options.al;
        c.options.si = c.options.rp && c.options.si;
        c.options.Hi = c.options.Dn && c.options.Hi;
        c.options.zoom = c.options.al && c.options.zoom;
        c.options.Gi = Af && c.options.Gi;
        c.options.zoom && Be && (Lf = "");
        c.Nb.style[qf] = c.options.al ? nf + "transform" : "top left";
        c.Nb.style[rf] = "0";
        c.Nb.style[sf] = "0 0";
        c.options.Gi && (c.Nb.style[tf] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.al ? c.Nb.style[pf] = "translate(" + c.x + "px," + c.y + "px)" + Lf : c.Nb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.Gi && (c.options.KD = o);
        c.refresh();
        c.ca(Bf, window);
        c.ca(Cf);
        !yf && "none" != c.options.rP && (c.ca("DOMMouseScroll"), c.ca("mousewheel"));
        c.options.Sw && (c.QV = setInterval(function () {
            c.QQ()
        }, 500));
        this.options.Sx && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function (a, b, c) {
            var d = Node.prototype.removeEventListener;
            a === "click" ? d.call(document.body, a, b.jM || b, c) : d.call(document.body, a, b, c)
        }, document.body.addEventListener = function (a, b, c) {
            var d = Node.prototype.addEventListener;
            a === "click" ? d.call(document.body, a, b.jM || (b.jM = function (a) {
                a.HZ || b(a)
            }), c) : d.call(document.body, a, b, c)
        }), c.ca("click", document.body, o))
    }
    Mf.prototype = {
        enabled: o,
        x: 0,
        y: 0,
        Gj: [],
        scale: 1,
        PC: 0,
        QC: 0,
        Ve: [],
        vf: [],
        mC: p,
        mz: 0,
        handleEvent: function (a) {
            switch (a.type) {
                case Cf:
                    if (!yf && 0 !== a.button) break;
                    this.ew(a);
                    break;
                case Df:
                    this.xT(a);
                    break;
                case Ef:
                case Ff:
                    this.pv(a);
                    break;
                case Bf:
                    this.GB();
                    break;
                case "DOMMouseScroll":
                case "mousewheel":
                    this.bV(a);
                    break;
                case Gf:
                    this.YU(a);
                    break;
                case "click":
                    this.aR(a)
            }
        },
        QQ: function () {
            !this.th && (!this.dl && !(this.em || this.Py == this.Nb.offsetWidth * this.scale && this.Up == this.Nb.offsetHeight * this.scale)) && this.refresh()
        },
        Vv: function (a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = ef.createElement("div"), this.options.DF ? b.className = this.options.DF + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.Hi ? "7" : "2") + "px" : "width:7px;bottom:" + (this.si ? "7" : "2") + "px;top:2px;right:1px"), b.style.cssText += ";pointer-events:none;" + nf + "transition-property:opacity;" + nf + "transition-duration:" + (this.options.bX ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Vx ? "0" : "1"), this.Fn.appendChild(b), this[a + "ScrollbarWrapper"] = b, b = ef.createElement("div"), this.options.DF || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + nf + "background-clip:padding-box;" + nf + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + nf + "border-radius:3px;border-radius:3px"), b.style.cssText += ";pointer-events:none;" + nf + "transition-property:" + nf + "transform;" + nf + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + nf + "transition-duration:0;" + nf + "transform: translate(0,0)" + Lf, this.options.Gi && (b.style.cssText += ";" + nf + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[a + "ScrollbarWrapper"].appendChild(b), this[a + "ScrollbarIndicator"] = b), "h" == a ? (this.gM = this.hM.clientWidth, this.qY = ff.max(ff.round(this.gM * this.gM / this.Py), 8), this.pY.style.width = this.qY + "px") : (this.iP = this.jP.clientHeight, this.x0 = ff.max(ff.round(this.iP * this.iP / this.Up), 8), this.w0.style.height = this.x0 + "px"), this.HB(a, o)) : this[a + "ScrollbarWrapper"] && (zf && (this[a + "ScrollbarIndicator"].style[pf] = ""), this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]), this[a + "ScrollbarWrapper"] = p, this[a + "ScrollbarIndicator"] = p)
        },
        GB: function () {
            var a = this;
            setTimeout(function () {
                a.refresh()
            }, Be ? 200 : 0)
        },
        Lr: function (a, b) {
            this.dl || (a = this.rp ? a : 0, b = this.Dn ? b : 0, this.options.al ? this.Nb.style[pf] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + Lf : (a = ff.round(a), b = ff.round(b), this.Nb.style.left = a + "px", this.Nb.style.top = b + "px"), this.x = a, this.y = b, this.HB("h"), this.HB("v"))
        },
        HB: function (a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"], 0 > c ? (this.options.KD || (c = this[a + "ScrollbarIndicatorSize"] + ff.round(3 * c), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.KD ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - ff.round(3 * (c - this[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))), this[a + "ScrollbarWrapper"].style[uf] = "0", this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Vx ? "0" : "1", this[a + "ScrollbarIndicator"].style[pf] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + Lf)
        },
        aR: function (a) {
            if (a.WR === o) return this.eC = a.target, this.wx = Date.now(), o;
            if (this.eC && this.wx) {
                if (600 < Date.now() - this.wx) return this.wx = this.eC = p, o
            } else {
                for (var b = a.target; b != this.Nb && b != document.body;) b = b.parentNode;
                if (b == document.body) return o
            }
            for (b = a.target; 1 != b.nodeType;) b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b) return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.HZ = o, a.stopPropagation(), a.preventDefault(), this.wx = this.eC = p, q
        },
        ew: function (a) {
            var b = yf ? a.touches[0] : a,
                c, d;
            if (this.enabled) {
                this.options.tN && this.options.tN.call(this, a);
                (this.options.Gi || this.options.zoom) && this.JJ(0);
                this.dl = this.em = this.th = q;
                this.ZC = this.YC = this.yw = this.xw = this.eD = this.dD = 0;
                this.options.zoom && (yf && 1 < a.touches.length) && (d = ff.abs(a.touches[0].pageX - a.touches[1].pageX), c = ff.abs(a.touches[0].pageY - a.touches[1].pageY), this.e0 = ff.sqrt(d * d + c * c), this.zy = ff.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.nG) / 2 - this.x, this.Ay = ff.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.oG) / 2 - this.y, this.options.Jp && this.options.Jp.call(this, a));
                if (this.options.py && (this.options.al ? (c = getComputedStyle(this.Nb, p)[pf].replace(/[^0-9\-.,]/g, "").split(","), d = +(c[12] || c[4]), c = +(c[13] || c[5])) : (d = +getComputedStyle(this.Nb, p).left.replace(/[^0-9-]/g, ""), c = +getComputedStyle(this.Nb, p).top.replace(/[^0-9-]/g, "")), d != this.x || c != this.y)) this.options.Gi ? this.ae(Gf) : Kf(this.mC), this.Gj = [], this.Lr(d, c), this.options.xy && this.options.xy.call(this);
                this.zw = this.x;
                this.Aw = this.y;
                this.su = this.x;
                this.tu = this.y;
                this.wh = b.pageX;
                this.xh = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.EN && this.options.EN.call(this, a);
                this.ca(Df, window);
                this.ca(Ef, window);
                this.ca(Ff, window)
            }
        },
        xT: function (a) {
            var b = yf ? a.touches[0] : a,
                c = b.pageX - this.wh,
                d = b.pageY - this.xh,
                e = this.x + c,
                f = this.y + d,
                g = a.timeStamp || Date.now();
            this.options.sN && this.options.sN.call(this, a);
            if (this.options.zoom && yf && 1 < a.touches.length) e = ff.abs(a.touches[0].pageX - a.touches[1].pageX), f = ff.abs(a.touches[0].pageY - a.touches[1].pageY), this.d0 = ff.sqrt(e * e + f * f), this.dl = o, b = 1 / this.e0 * this.d0 * this.scale, b < this.options.cl ? b = 0.5 * this.options.cl * Math.pow(2, b / this.options.cl) : b > this.options.kq && (b = 2 * this.options.kq * Math.pow(0.5, this.options.kq / b)), this.Dp = b / this.scale, e = this.zy - this.zy * this.Dp + this.x, f = this.Ay - this.Ay * this.Dp + this.y, this.Nb.style[pf] = "translate(" + e + "px," + f + "px) scale(" + b + ")" + Lf, this.options.GN && this.options.GN.call(this, a);
            else {
                this.wh = b.pageX;
                this.xh = b.pageY;
                if (0 < e || e < this.ke) e = this.options.Mo ? this.x + c / 2 : 0 <= e || 0 <= this.ke ? 0 : this.ke;
                if (f > this.sf || f < this.qd) f = this.options.Mo ? this.y + d / 2 : f >= this.sf || 0 <= this.qd ? this.sf : this.qd;
                this.dD += c;
                this.eD += d;
                this.xw = ff.abs(this.dD);
                this.yw = ff.abs(this.eD);
                6 > this.xw && 6 > this.yw || (this.options.WE && (this.xw > this.yw + 5 ? (f = this.y, d = 0) : this.yw > this.xw + 5 && (e = this.x, c = 0)), this.th = o, this.Lr(e, f), this.YC = 0 < c ? -1 : 0 > c ? 1 : 0, this.ZC = 0 < d ? -1 : 0 > d ? 1 : 0, 300 < g - this.startTime && (this.startTime = g, this.su = this.x, this.tu = this.y), this.options.DN && this.options.DN.call(this, a))
            }
        },
        pv: function (a) {
            if (!(yf && 0 !== a.touches.length)) {
                var b = this,
                    c = yf ? a.changedTouches[0] : a,
                    d, e, f = {
                        Ca: 0,
                        time: 0
                    },
                    g = {
                        Ca: 0,
                        time: 0
                    },
                    i = (a.timeStamp || Date.now()) - b.startTime;
                d = b.x;
                e = b.y;
                b.ae(Df, window);
                b.ae(Ef, window);
                b.ae(Ff, window);
                b.options.rN && b.options.rN.call(b, a);
                if (b.dl) d = b.scale * b.Dp, d = Math.max(b.options.cl, d), d = Math.min(b.options.kq, d), b.Dp = d / b.scale, b.scale = d, b.x = b.zy - b.zy * b.Dp + b.x, b.y = b.Ay - b.Ay * b.Dp + b.y, b.Nb.style[rf] = "200ms", b.Nb.style[pf] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + Lf, b.dl = q, b.refresh(), b.options.Ip && b.options.Ip.call(b, a);
                else {
                    if (b.th) {
                        if (300 > i && b.options.py) {
                            f = d ? b.GI(d - b.su, i, -b.x, b.Py - b.Gu + b.x, b.options.Mo ? b.Gu : 0) : f;
                            g = e ? b.GI(e - b.tu, i, -b.y, 0 > b.qd ? b.Up - b.Gn + b.y - b.sf : 0, b.options.Mo ? b.Gn : 0) : g;
                            d = b.x + f.Ca;
                            e = b.y + g.Ca;
                            if (0 < b.x && 0 < d || b.x < b.ke && d < b.ke) f = {
                                Ca: 0,
                                time: 0
                            };
                            if (b.y > b.sf && e > b.sf || b.y < b.qd && e < b.qd) g = {
                                Ca: 0,
                                time: 0
                            }
                        }
                        f.Ca || g.Ca ? (c = ff.max(ff.max(f.time, g.time), 10), b.options.ou && (f = d - b.zw, g = e - b.Aw, ff.abs(f) < b.options.az && ff.abs(g) < b.options.az ? b.scrollTo(b.zw, b.Aw, 200) : (f = b.AJ(d, e), d = f.x, e = f.y, c = ff.max(f.time, c))), b.scrollTo(ff.round(d), ff.round(e), c)) : b.options.ou ? (f = d - b.zw, g = e - b.Aw, ff.abs(f) < b.options.az && ff.abs(g) < b.options.az ? b.scrollTo(b.zw, b.Aw, 200) : (f = b.AJ(b.x, b.y), (f.x != b.x || f.y != b.y) && b.scrollTo(f.x, f.y, f.time))) : b.so(200)
                    } else {
                        if (yf)
                            if (b.ZK && b.options.zoom) clearTimeout(b.ZK), b.ZK = p, b.options.Jp && b.options.Jp.call(b, a), b.zoom(b.wh, b.xh, 1 == b.scale ? b.options.JW : 1), b.options.Ip && setTimeout(function () {
                                b.options.Ip.call(b, a)
                            }, 200);
                            else if (this.options.Sx) {
                                for (d = c.target; 1 != d.nodeType;) d = d.parentNode;
                                e = d.tagName.toLowerCase();
                                "select" != e && "input" != e && "textarea" != e ? (e = ef.createEvent("MouseEvents"), e.initMouseEvent("click", o, o, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, p), e.WR = o, d.dispatchEvent(e)) : d.focus()
                            }
                        b.so(400)
                    }
                    b.options.FN && b.options.FN.call(b, a)
                }
            }
        },
        so: function (a) {
            var b = 0 <= this.x ? 0 : this.x < this.ke ? this.ke : this.x,
                c = this.y >= this.sf || 0 < this.qd ? this.sf : this.y < this.qd ? this.qd : this.y;
            if (b == this.x && c == this.y) {
                if (this.th && (this.th = q, this.options.xy && this.options.xy.call(this)), this.si && this.options.Vx && ("webkit" == hf && (this.hM.style[uf] = "300ms"), this.hM.style.opacity = "0"), this.Hi && this.options.Vx) "webkit" == hf && (this.jP.style[uf] = "300ms"), this.jP.style.opacity = "0"
            } else this.scrollTo(b, c, a || 0)
        },
        bV: function (a) {
            var b = this,
                c, d;
            if ("wheelDeltaX" in a) c = a.wheelDeltaX / 12, d = a.wheelDeltaY / 12;
            else if ("wheelDelta" in a) c = d = a.wheelDelta / 12;
            else if ("detail" in a) c = d = 3 * -a.detail;
            else return;
            if ("zoom" == b.options.rP) {
                if (d = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)), d < b.options.cl && (d = b.options.cl), d > b.options.kq && (d = b.options.kq), d != b.scale) !b.mz && b.options.Jp && b.options.Jp.call(b, a), b.mz++, b.zoom(a.pageX, a.pageY, d, 400), setTimeout(function () {
                    b.mz--;
                    !b.mz && b.options.Ip && b.options.Ip.call(b, a)
                }, 400)
            } else c = b.x + c, d = b.y + d, 0 < c ? c = 0 : c < b.ke && (c = b.ke), d > b.sf ? d = b.sf : d < b.qd && (d = b.qd), 0 > b.qd && b.scrollTo(c, d, 0)
        },
        YU: function (a) {
            a.target == this.Nb && (this.ae(Gf), this.TB())
        },
        TB: function () {
            var a = this,
                b = a.x,
                c = a.y,
                d = Date.now(),
                e, f, g;
            a.em || (a.Gj.length ? (e = a.Gj.shift(), e.x == b && e.y == c && (e.time = 0), a.em = o, a.th = o, a.options.Gi) ? (a.JJ(e.time), a.Lr(e.x, e.y), a.em = q, e.time ? a.ca(Gf) : a.so(0)) : (g = function () {
                var i = Date.now(),
                    k;
                if (i >= d + e.time) {
                    a.Lr(e.x, e.y);
                    a.em = q;
                    a.options.qZ && a.options.qZ.call(a);
                    a.TB()
                } else {
                    i = (i - d) / e.time - 1;
                    f = ff.sqrt(1 - i * i);
                    i = (e.x - b) * f + b;
                    k = (e.y - c) * f + c;
                    a.Lr(i, k);
                    if (a.em) a.mC = Jf(g)
                }
            }, g()) : a.so(400))
        },
        JJ: function (a) {
            a += "ms";
            this.Nb.style[rf] = a;
            this.si && (this.pY.style[rf] = a);
            this.Hi && (this.w0.style[rf] = a)
        },
        GI: function (a, b, c, d, e) {
            var b = ff.abs(a) / b,
                f = b * b / 0.0012;
            0 < a && f > c ? (c += e / (6 / (6.0E-4 * (f / b))), b = b * c / f, f = c) : 0 > a && f > d && (d += e / (6 / (6.0E-4 * (f / b))), b = b * d / f, f = d);
            return {
                Ca: f * (0 > a ? -1 : 1),
                time: ff.round(b / 6.0E-4)
            }
        },
        gk: function (a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a.offsetTop;
            a != this.Fn && (b *= this.scale, c *= this.scale);
            return {
                left: b,
                top: c
            }
        },
        AJ: function (a, b) {
            var c, d, e;
            e = this.Ve.length - 1;
            c = 0;
            for (d = this.Ve.length; c < d; c++)
                if (a >= this.Ve[c]) {
                    e = c;
                    break
                }
            e == this.PC && (0 < e && 0 > this.YC) && e--;
            a = this.Ve[e];
            d = (d = ff.abs(a - this.Ve[this.PC])) ? 500 * (ff.abs(this.x - a) / d) : 0;
            this.PC = e;
            e = this.vf.length - 1;
            for (c = 0; c < e; c++)
                if (b >= this.vf[c]) {
                    e = c;
                    break
                }
            e == this.QC && (0 < e && 0 > this.ZC) && e--;
            b = this.vf[e];
            c = (c = ff.abs(b - this.vf[this.QC])) ? 500 * (ff.abs(this.y - b) / c) : 0;
            this.QC = e;
            e = ff.round(ff.max(d, c)) || 200;
            return {
                x: a,
                y: b,
                time: e
            }
        },
        ca: function (a, b, c) {
            (b || this.Nb).addEventListener(a, this, !!c)
        },
        ae: function (a, b, c) {
            (b || this.Nb).removeEventListener(a, this, !!c)
        },
        VC: ha(2),
        refresh: function () {
            var a, b, c, d = 0;
            b = 0;
            this.scale < this.options.cl && (this.scale = this.options.cl);
            this.Gu = this.Fn.clientWidth || 1;
            this.Gn = this.Fn.clientHeight || 1;
            this.sf = -this.options.c0 || 0;
            this.Py = ff.round(this.Nb.offsetWidth * this.scale);
            this.Up = ff.round((this.Nb.offsetHeight + this.sf) * this.scale);
            this.ke = this.Gu - this.Py;
            this.qd = this.Gn - this.Up + this.sf;
            this.ZC = this.YC = 0;
            this.options.BN && this.options.BN.call(this);
            this.rp = this.options.rp && 0 > this.ke;
            this.Dn = this.options.Dn && (!this.options.FV && !this.rp || this.Up > this.Gn);
            this.si = this.rp && this.options.si;
            this.Hi = this.Dn && this.options.Hi && this.Up > this.Gn;
            a = this.gk(this.Fn);
            this.nG = -a.left;
            this.oG = -a.top;
            if ("string" == typeof this.options.ou) {
                this.Ve = [];
                this.vf = [];
                c = this.Nb.querySelectorAll(this.options.ou);
                a = 0;
                for (b = c.length; a < b; a++) d = this.gk(c[a]), d.left += this.nG, d.top += this.oG, this.Ve[a] = d.left < this.ke ? this.ke : d.left * this.scale, this.vf[a] = d.top < this.qd ? this.qd : d.top * this.scale
            } else if (this.options.ou) {
                for (this.Ve = []; d >= this.ke;) this.Ve[b] = d, d -= this.Gu, b++;
                this.ke % this.Gu && (this.Ve[this.Ve.length] = this.ke - this.Ve[this.Ve.length - 1] + this.Ve[this.Ve.length - 1]);
                b = d = 0;
                for (this.vf = []; d >= this.qd;) this.vf[b] = d, d -= this.Gn, b++;
                this.qd % this.Gn && (this.vf[this.vf.length] = this.qd - this.vf[this.vf.length - 1] + this.vf[this.vf.length - 1])
            }
            this.Vv("h");
            this.Vv("v");
            this.dl || (this.Nb.style[rf] = "0", this.so(400))
        },
        scrollTo: function (a, b, c, d) {
            var e = a;
            this.stop();
            e.length || (e = [{
                x: a,
                y: b,
                time: c,
                JZ: d
            }]);
            a = 0;
            for (b = e.length; a < b; a++) e[a].JZ && (e[a].x = this.x - e[a].x, e[a].y = this.y - e[a].y), this.Gj.push({
                x: e[a].x,
                y: e[a].y,
                time: e[a].time || 0
            });
            this.TB()
        },
        disable: function () {
            this.stop();
            this.so(0);
            this.enabled = q;
            this.ae(Df, window);
            this.ae(Ef, window);
            this.ae(Ff, window)
        },
        enable: function () {
            this.enabled = o
        },
        stop: function () {
            this.options.Gi ? this.ae(Gf) : Kf(this.mC);
            this.Gj = [];
            this.em = this.th = q
        },
        zoom: function (a, b, c, d) {
            var e = c / this.scale;
            this.options.al && (this.dl = o, d = d === j ? 200 : d, a = a - this.nG - this.x, b = b - this.oG - this.y, this.x = a - a * e + this.x, this.y = b - b * e + this.y, this.scale = c, this.refresh(), this.x = 0 < this.x ? 0 : this.x < this.ke ? this.ke : this.x, this.y = this.y > this.sf ? this.sf : this.y < this.qd ? this.qd : this.y, this.Nb.style[rf] = d + "ms", this.Nb.style[pf] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + Lf, this.dl = q)
        }
    };

    function of(a) {
        if ("" === hf) return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return hf + a
    }
    gf = p;

    function Nf(a) {
        this.k = {
            anchor: Tc,
            offset: new M(0, 0),
            maxWidth: "100%",
            imageHeight: 80
        };
        var a = a || {},
            b;
        for (b in a) this.k[b] = a[b];
        this.Rl = new ad(p, {
            of: "api"
        });
        this.hk = [];
        this.P = p;
        this.fg = {
            height: this.k.imageHeight,
            width: this.k.imageHeight * Of
        };
        this.Pc = this.IB = this.jm = this.Xc = p
    }
    var Pf = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10],
        Qf = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    B.bn(function (a) {
        var b = p;
        a.addEventListener("position_changed", function () {
            a.k.visible && a.k.albumsControl === o && (b ? b.Jy(a.Yb()) : (b = new Nf(a.k.albumsControlOptions), b.ra(a)))
        });
        a.addEventListener("albums_visible_changed", function () {
            a.k.albumsControl === o ? (b ? b.Jy(a.Yb()) : (b = new Nf(a.k.albumsControlOptions), b.ra(a)), b.show()) : b.U()
        });
        a.addEventListener("albums_options_changed", function () {
            b && b.Fj(a.k.albumsControlOptions)
        });
        a.addEventListener("visible_changed", function () {
            b && (a.rE() ? a.k.albumsControl === o && (b.C.style.visibility = "visible") : b.C.style.visibility = "hidden")
        })
    });
    var Of = 1.8;
    J() && (Of = 1);
    x.extend(Nf.prototype, {
        Fj: function (a) {
            for (var b in a) this.k[b] = a[b];
            a = this.k.imageHeight + "px";
            this.qc(this.k.anchor);
            this.C.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
            this.C.style.height = a;
            this.mk.style.height = a;
            this.$h.style.height = a;
            this.fg = {
                height: this.k.imageHeight,
                width: this.k.imageHeight * Of
            };
            this.lk.style.height = this.fg.height - 6 + "px";
            this.lk.style.width = this.fg.width - 6 + "px";
            this.Jy(this.P.Yb(), o)
        },
        ra: function (a) {
            this.P = a;
            this.vs();
            this.zQ();
            this.EY();
            this.Jy(a.Yb())
        },
        vs: function () {
            var a = this.k.imageHeight + "px";
            this.C = H("div");
            var b = this.C.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.mk = H("div");
            b = this.mk.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.$h = H("div");
            b = this.$h.style;
            b.height = a;
            this.mk.appendChild(this.$h);
            this.C.appendChild(this.mk);
            this.P.C.appendChild(this.C);
            this.lk = H("div", {
                "class": "pano_photo_item_seleted"
            });
            this.lk.style.height = this.fg.height - 6 + "px";
            this.lk.style.width = this.fg.width - 6 + "px";
            this.qc(this.k.anchor)
        },
        XH: function (a) {
            for (var b = this.hk, c = b.length - 1; 0 <= c; c--)
                if (b[c].panoId == a) return c;
            return -1
        },
        Jy: function (a, b) {
            if (b || !this.hk[this.Xc] || !(this.hk[this.Xc].panoId == a && 3 !== this.hk[this.Xc].recoType)) {
                var c = this,
                    d = this.XH(a);
                !b && -1 !== d && this.hk[d] && 3 !== this.hk[d].recoType ? this.Yp(d) : this.WX(function (a) {
                    for (var b = {}, d, i, k = q, l = [], m = 0, n = a.length; m < n; m++) d = a[m].catlog, i = a[m].floor, j !== d && ("" === d && j !== i ? (k = o, b[i] || (b[i] = []), b[i].push(a[m])) : (b[Pf[d]] || (b[Pf[d]] = []), b[Pf[d]].push(a[m])));
                    for (var s in b) k ? l.push({
                        data: s + "F",
                        index: s
                    }) : l.push({
                        data: Qf[s],
                        index: s
                    });
                    c.nH = b;
                    c.Ti = l;
                    c.Nl(a);
                    0 == a.length ? c.U() : c.show()
                })
            }
        },
        oW: function () {
            if (!this.Qi) {
                var a = this.KX(this.Ti),
                    b = H("div");
                b.style.cssText = ["width:" + 134 * this.Ti.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                b.innerHTML = a;
                a = H("div");
                a.appendChild(b);
                a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new Mf(a, {
                    Mo: q,
                    py: o,
                    si: q,
                    Hi: q,
                    Dn: q,
                    WE: o,
                    Sw: o,
                    Sx: o
                });
                this.C.appendChild(a);
                for (var c = this, d = b.getElementsByTagName("span"), e = 0, f = d.length; e < f; e++) b = d[e], x.M(b, "click", function () {
                    if (this.getAttribute("dataindex")) {
                        c.Nl(c.nH[this.getAttribute("dataindex")]);
                        for (var a = 0, b = d.length; a < b; a++) d[a].style.color = "#FFFFFF";
                        this.style.color = "#3383FF"
                    }
                });
                this.Qi = a
            }
        },
        lW: function () {
            if (this.Qi) a = this.FL(this.Ti), this.PQ.innerHTML = a;
            else {
                var a = this.FL(this.Ti),
                    b = H("ul"),
                    c = this;
                b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                x.M(b, "click", function (a) {
                    if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                        c.Nl(c.nH[a]);
                        for (var d = b.getElementsByTagName("li"), e = 0, f = d.length; e < f; e++) d[e].childNodes[0].getAttribute("dataindex") === a ? x.K.Ta(d[e], "pano_catlogLiActive") : x.K.Tb(d[e], "pano_catlogLiActive")
                    }
                });
                var a = H("div"),
                    d = H("a"),
                    e = H("span"),
                    f = H("a"),
                    g = H("span"),
                    i = ["background:url(" + I.pa + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                e.style.cssText = i + "background-position:-18px 0;";
                d.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.cssText = i + "background-position:0 0;";
                f.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                f.style.top = this.k.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                d.appendChild(e);
                f.appendChild(g);
                x.M(d, "mouseover", function () {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (e.style.backgroundPosition = "-27px 0");
                    new vb({
                        Hc: 60,
                        hc: wb.Qs,
                        duration: 300,
                        va: function (c) {
                            b.style.top = a + (7 - a) * c + "px"
                        }
                    })
                });
                x.M(d, "mouseout", function () {
                    e.style.backgroundPosition = "-18px 0"
                });
                x.M(f, "mouseover", function () {
                    var a = parseInt(b.style.top, 10),
                        d = c.k.imageHeight - 14;
                    if (!(parseInt(b.offsetHeight, 10) < d)) {
                        var e = d - parseInt(b.offsetHeight, 10) + 7;
                        e !== a && (g.style.backgroundPosition = "-9px 0");
                        new vb({
                            Hc: 60,
                            hc: wb.Qs,
                            duration: 300,
                            va: function (c) {
                                b.style.top = a + (e - a) * c + "px"
                            }
                        })
                    }
                });
                x.M(f, "mouseout", function () {
                    g.style.backgroundPosition = "0 0"
                });
                a.appendChild(d);
                a.appendChild(f);
                d = H("div");
                d.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.k.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                d.appendChild(b);
                d.appendChild(a);
                this.Qi = d;
                this.PQ = b;
                this.C.appendChild(d)
            }
        },
        mW: function () {
            if (this.Ti && !(0 >= this.Ti.length)) {
                var a = H("div");
                a.innerHTML = this.qA;
                a.style.cssText = "position:absolute;background:#252525";
                this.C.appendChild(a);
                this.Us = a;
                this.Pc.gg.style.left = this.fg.width + 8 + "px";
                this.Qi && (this.Qi.style.left = parseInt(this.Qi.style.left, 10) + this.fg.width + 8 + "px");
                var b = this;
                x.M(a, "click", function () {
                    b.P.rc(b.YW)
                })
            }
        },
        Nl: function (a) {
            this.hk = a;
            this.k.showCatalog && (0 < this.Ti.length ? (Xa() ? this.lW() : this.oW(), this.Pc.offsetLeft = 60) : (this.Us && (this.C.removeChild(this.Us), this.Us = p, this.Pc.gg.style.left = "0px"), this.Qi && (this.C.removeChild(this.Qi), this.Qi = p), this.Pc.offsetLeft = 0));
            var b = this.EX(a);
            Xa() && (this.Ti && 0 < this.Ti.length && this.k.showExit && this.qA) && (this.Pc.offsetLeft += this.fg.width + 8, this.Us ? this.Us.innerHTML = this.qA : this.mW());
            this.$h.innerHTML = b;
            this.$h.style.width = (this.fg.width + 8) * a.length + 8 + "px";
            a = this.C.offsetWidth;
            b = this.$h.offsetWidth;
            this.Pc.at && (b += this.Pc.at());
            b < a - 2 * this.Pc.Ki - this.Pc.offsetLeft ? this.C.style.width = b + this.Pc.offsetLeft + "px" : (this.C.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px", b < this.C.offsetWidth - 2 * this.Pc.Ki - this.Pc.offsetLeft && (this.C.style.width = b + this.Pc.offsetLeft + "px"));
            this.Pc.refresh();
            this.IB = this.$h.children;
            this.$h.appendChild(this.lk);
            this.lk.style.left = "-100000px";
            a = this.XH(this.P.Yb(), this.I1); - 1 !== a && this.Yp(a)
        },
        KX: function (a) {
            for (var b = "", c, d = 0, e = a.length; d < e; d++) c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[d].index + '">' + a[d].data + "</span></div>", b += c;
            return b
        },
        FL: function (a) {
            for (var b = "", c, d = 0, e = a.length; d < e; d++) c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[d].index + '">' + a[d].data + "</span></li>", b += c;
            return b
        },
        EX: function (a) {
            for (var b, c, d, e, f = [], g = this.fg.height, i = this.fg.width, k = 0; k < a.length; k++) b = a[k], recoType = b.recoType, d = b.panoId, e = b.name, c = b.heading, b = b.pitch, c = df.RL(d, c, b, 198, 108), b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><span class="pano_photo_decs" data-index="' + k + '" style="width:' + i + "px;font-size:" + Math.floor(g / 6) + "px; line-height:" + Math.floor(g / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + e + "</span></a>", 3 === recoType ? Xa() ? (this.qA = b, this.YW = d, a.splice(k, 1), k--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.k.imageHeight + 'px;" data-index="' + k + '"><img src="' + I.pa + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + k + '" alt=""/></div></a>', f.push(b)) : f.push(b);
            return f.join("")
        },
        WX: function (a) {
            var b = this,
                c = this.P.Yb();
            c && this.Rl.Px(c, function (d) {
                b.P.Yb() === c && a(d)
            })
        },
        qc: function (a) {
            if (!Za(a) || isNaN(a) || a < Rc || 3 < a) a = this.defaultAnchor;
            var b = this.C,
                c = this.k.offset.width,
                d = this.k.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
                case Rc:
                    b.style.top = d + "px";
                    b.style.left = c + "px";
                    break;
                case Sc:
                    b.style.top = d + "px";
                    b.style.right = c + "px";
                    break;
                case Tc:
                    b.style.bottom = d + "px";
                    b.style.left = c + "px";
                    break;
                case 3:
                    b.style.bottom = d + "px", b.style.right = c + "px"
            }
        },
        zQ: function () {
            this.xQ()
        },
        xQ: function () {
            var a = this;
            x.M(this.C, "touchstart", function (a) {
                a.stopPropagation()
            });
            x.M(this.mk, "click", function (b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Xc) a.Yp(b), a.P.rc(a.hk[b].panoId)
            });
            x.M(this.$h, "mouseover", function (b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== p && a.FK(b, o)
            });
            this.P.addEventListener("size_changed", function () {
                isNaN(Number(a.k.maxWidth)) && a.Fj({
                    maxWidth: a.k.maxWidth
                })
            })
        },
        Yp: function (a) {
            this.lk.style.left = this.IB[a].offsetLeft + 8 + "px";
            this.lk.setAttribute("data-index", this.IB[a].getAttribute("data-index"));
            this.Xc = a;
            this.FK(a)
        },
        FK: function (a, b) {
            var c = this.fg.width + 8,
                d = 0;
            this.Pc.at && (d = this.Pc.at() / 2);
            var e = this.mk.offsetWidth - 2 * d,
                f = this.$h.offsetLeft || this.Pc.x,
                f = f - d,
                g = -a * c;
            g > f && this.Pc.scrollTo(g + d);
            c = g - c;
            f -= e;
            c < f && (!b || b && 8 < g - f) && this.Pc.scrollTo(c + e + d)
        },
        EY: function () {
            this.Pc = J() ? new Mf(this.mk, {
                Mo: q,
                py: o,
                si: q,
                Hi: q,
                Dn: q,
                WE: o,
                Sw: o,
                Sx: o
            }) : new Rf(this.mk)
        },
        U: function () {
            this.C.style.visibility = "hidden"
        },
        show: function () {
            this.C.style.visibility = "visible"
        }
    });

    function Rf(a) {
        this.C = a;
        this.Wg = a.children[0];
        this.Zr = p;
        this.Ki = 20;
        this.offsetLeft = 0;
        this.ra()
    }
    Rf.prototype = {
        ra: function () {
            this.Wg.style.position = "relative";
            this.refresh();
            this.vs();
            this.hm()
        },
        refresh: function () {
            this.oo = this.C.offsetWidth - this.at();
            this.gB = -(this.Wg.offsetWidth - this.oo - this.Ki);
            this.Hv = this.Ki + this.offsetLeft;
            this.Wg.style.left = this.Hv + "px";
            this.Wg.children[0] && (this.Zr = this.Wg.children[0].offsetWidth);
            this.gg && (this.gg.children[0].style.marginTop = this.Rr.children[0].style.marginTop = this.gg.offsetHeight / 2 - this.gg.children[0].offsetHeight / 2 + "px")
        },
        at: function () {
            return 2 * this.Ki
        },
        vs: function () {
            this.Wv = H("div");
            this.Wv.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.gg = this.Wv.children[0];
            this.Rr = this.Wv.children[1];
            this.C.appendChild(this.Wv);
            this.gg.children[0].style.marginTop = this.Rr.children[0].style.marginTop = this.gg.offsetHeight / 2 - this.gg.children[0].offsetHeight / 2 + "px"
        },
        hm: function () {
            var a = this;
            x.M(this.gg, "click", function () {
                a.scrollTo(a.Wg.offsetLeft + a.oo)
            });
            x.M(this.Rr, "click", function () {
                a.scrollTo(a.Wg.offsetLeft - a.oo)
            })
        },
        ZU: function () {
            x.K.Tb(this.gg, "pano_arrow_disable");
            x.K.Tb(this.Rr, "pano_arrow_disable");
            var a = this.Wg.offsetLeft;
            a >= this.Hv && x.K.Ta(this.gg, "pano_arrow_disable");
            a - this.oo <= this.gB && x.K.Ta(this.Rr, "pano_arrow_disable")
        },
        scrollTo: function (a) {
            a = a < this.Wg.offsetLeft ? Math.ceil((a - this.Ki - this.oo) / this.Zr) * this.Zr + this.oo + this.Ki - 8 : Math.ceil((a - this.Ki) / this.Zr) * this.Zr + this.Ki;
            a < this.gB ? a = this.gB : a > this.Hv && (a = this.Hv);
            var b = this.Wg.offsetLeft,
                c = this;
            new vb({
                Hc: 60,
                hc: wb.Qs,
                duration: 300,
                va: function (d) {
                    c.Wg.style.left = b + (a - b) * d + "px"
                },
                finish: function () {
                    c.ZU()
                }
            })
        }
    };
    B.Map = Na;
    B.Hotspot = lb;
    B.MapType = Ud;
    B.Point = O;
    B.Pixel = S;
    B.Size = M;
    B.Bounds = ib;
    B.TileLayer = Gd;
    B.Projection = fd;
    B.MercatorProjection = T;
    B.PerspectiveProjection = kb;
    B.Copyright = function (a, b, c) {
        this.id = a;
        this.$a = b;
        this.content = c
    };
    B.Overlay = id;
    B.Label = td;
    B.GroundOverlay = ud;
    B.PointCollection = yd;
    B.Marker = W;
    B.Icon = md;
    B.IconSequence = od;
    B.Symbol = nd;
    B.Polyline = Cd;
    B.Polygon = Bd;
    B.InfoWindow = sd;
    B.Circle = Dd;
    B.Control = Qc;
    B.NavigationControl = mb;
    B.GeolocationControl = Uc;
    B.OverviewMapControl = ob;
    B.CopyrightControl = Vc;
    B.ScaleControl = nb;
    B.MapTypeControl = pb;
    B.CityListControl = Xc;
    B.PanoramaControl = Zc;
    B.TrafficLayer = Qd;
    B.CustomLayer = qb;
    B.ContextMenu = bd;
    B.MenuItem = ed;
    B.LocalSearch = eb;
    B.TransitRoute = ue;
    B.DrivingRoute = xe;
    B.WalkingRoute = ye;
    B.Autocomplete = Ne;
    B.RouteSearch = Ce;
    B.Geocoder = De;
    B.LocalCity = Ke;
    B.Geolocation = Geolocation;
    B.Convertor = hd;
    B.BusLineSearch = Me;
    B.Boundary = Le;
    B.VectorCloudLayer = Od;
    B.VectorTrafficLayer = Pd;
    B.Panorama = Qa;
    B.PanoramaLabel = Te;
    B.PanoramaService = ad;
    B.PanoramaCoverageLayer = $c;
    B.PanoramaFlashInterface = bf;

    function U(a, b) {
        for (var c in b) a[c] = b[c]
    }
    U(window, {
        BMap: B,
        _jsload2: function (a, b) {
            ja.dz.OY && ja.dz.set(a, b);
            L.PV(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var Sf = Na.prototype;
    U(Sf, {
        getBounds: Sf.Kd,
        getCenter: Sf.pc,
        getMapType: Sf.oa,
        getSize: Sf.vb,
        setSize: Sf.Ce,
        getViewport: Sf.mt,
        getZoom: Sf.ga,
        centerAndZoom: Sf.Gd,
        panTo: Sf.Ai,
        panBy: Sf.zg,
        setCenter: Sf.Xf,
        setCurrentCity: Sf.JF,
        setMapType: Sf.Fg,
        setViewport: Sf.Dh,
        setZoom: Sf.Oc,
        highResolutionEnabled: Sf.Xx,
        zoomTo: Sf.Ig,
        zoomIn: Sf.pG,
        zoomOut: Sf.qG,
        addHotspot: Sf.Ew,
        removeHotspot: Sf.LZ,
        clearHotspots: Sf.lm,
        checkResize: Sf.SV,
        addControl: Sf.js,
        removeControl: Sf.WN,
        getContainer: Sf.Ha,
        addContextMenu: Sf.Fo,
        removeContextMenu: Sf.Op,
        addOverlay: Sf.Ka,
        removeOverlay: Sf.Ub,
        clearOverlays: Sf.CK,
        openInfoWindow: Sf.Mb,
        closeInfoWindow: Sf.Wc,
        pointToOverlayPixel: Sf.We,
        overlayPixelToPoint: Sf.IN,
        getInfoWindow: Sf.lh,
        getOverlays: Sf.Mx,
        getPanes: function () {
            return {
                floatPane: this.Zd.LD,
                markerMouseTarget: this.Zd.ZE,
                floatShadow: this.Zd.xL,
                labelPane: this.Zd.RE,
                markerPane: this.Zd.cN,
                markerShadow: this.Zd.dN,
                mapPane: this.Zd.Jt,
                vertexPane: this.Zd.nP
            }
        },
        addTileLayer: Sf.$g,
        removeTileLayer: Sf.Ah,
        pixelToPoint: Sf.Ag,
        pointToPixel: Sf.Mp,
        setFeatureStyle: Sf.Xp,
        selectBaseElement: Sf.F4,
        setMapStyle: Sf.du,
        enable3DBuilding: Sf.Xo,
        disable3DBuilding: Sf.DW,
        getPanorama: Sf.Em,
        setBrowserContextmenu: Sf.k_
    });
    var Tf = Ud.prototype;
    U(Tf, {
        getTileLayer: Tf.gY,
        getMinZoom: Tf.hp,
        getMaxZoom: Tf.Dm,
        getProjection: Tf.Hm,
        getTextColor: Tf.Km,
        getTips: Tf.lt
    });
    U(window, {
        BMAP_NORMAL_MAP: Oa,
        BMAP_PERSPECTIVE_MAP: Ra,
        BMAP_SATELLITE_MAP: bb,
        BMAP_HYBRID_MAP: Ua
    });
    var Uf = T.prototype;
    U(Uf, {
        lngLatToPoint: Uf.jy,
        pointToLngLat: Uf.Ej
    });
    var Vf = kb.prototype;
    U(Vf, {
        lngLatToPoint: Vf.jy,
        pointToLngLat: Vf.Ej
    });
    var Wf = ib.prototype;
    U(Wf, {
        equals: Wf.ab,
        containsPoint: Wf.Zw,
        containsBounds: Wf.cW,
        intersects: Wf.At,
        extend: Wf.extend,
        getCenter: Wf.pc,
        isEmpty: Wf.Bj,
        getSouthWest: Wf.xe,
        getNorthEast: Wf.pf,
        toSpan: Wf.dG
    });
    var Xf = id.prototype;
    U(Xf, {
        isVisible: Xf.oh,
        show: Xf.show,
        hide: Xf.U
    });
    id.getZIndex = id.Mm;
    var Yf = jb.prototype;
    U(Yf, {
        openInfoWindow: Yf.Mb,
        closeInfoWindow: Yf.Wc,
        enableMassClear: Yf.qj,
        disableMassClear: Yf.FW,
        show: Yf.show,
        hide: Yf.U,
        getMap: Yf.Hx,
        addContextMenu: Yf.Fo,
        removeContextMenu: Yf.Op
    });
    var Zf = W.prototype;
    U(Zf, {
        setIcon: Zf.Vb,
        getIcon: Zf.gp,
        setPosition: Zf.ta,
        getPosition: Zf.ia,
        setOffset: Zf.Ye,
        getOffset: Zf.Qf,
        getLabel: Zf.dE,
        setLabel: Zf.qn,
        setTitle: Zf.Dc,
        setTop: Zf.Ei,
        enableDragging: Zf.Gb,
        disableDragging: Zf.aD,
        setZIndex: Zf.iu,
        getMap: Zf.Hx,
        setAnimation: Zf.nn,
        setShadow: Zf.Vy,
        hide: Zf.U,
        setRotation: Zf.Ty,
        getRotation: Zf.VL
    });
    U(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var $f = td.prototype;
    U($f, {
        setStyle: $f.bd,
        setStyles: $f.Di,
        setContent: $f.ad,
        setPosition: $f.ta,
        getPosition: $f.ia,
        setOffset: $f.Ye,
        getOffset: $f.Qf,
        setTitle: $f.Dc,
        setZIndex: $f.iu,
        getMap: $f.Hx,
        getContent: $f.Bk
    });
    var ag = md.prototype;
    U(ag, {
        setImageUrl: ag.lO,
        setSize: ag.Ce,
        setAnchor: ag.qc,
        setImageOffset: ag.cu,
        setImageSize: ag.q_,
        setInfoWindowAnchor: ag.t_,
        setPrintImageUrl: ag.D_
    });
    var cg = sd.prototype;
    U(cg, {
        redraw: cg.le,
        setTitle: cg.Dc,
        setContent: cg.ad,
        getContent: cg.Bk,
        getPosition: cg.ia,
        enableMaximize: cg.fh,
        disableMaximize: cg.ox,
        isOpen: cg.Va,
        setMaxContent: cg.eu,
        maximize: cg.ny,
        enableAutoPan: cg.Rs
    });
    var dg = kd.prototype;
    U(dg, {
        getPath: dg.ve,
        setPath: dg.me,
        setPositionAt: dg.vn,
        getStrokeColor: dg.bY,
        setStrokeWeight: dg.bq,
        getStrokeWeight: dg.YL,
        setStrokeOpacity: dg.$p,
        getStrokeOpacity: dg.cY,
        setFillOpacity: dg.bu,
        getFillOpacity: dg.zX,
        setStrokeStyle: dg.aq,
        getStrokeStyle: dg.XL,
        getFillColor: dg.yX,
        getBounds: dg.Kd,
        enableEditing: dg.mf,
        disableEditing: dg.EW,
        getEditing: dg.vX
    });
    var eg = Dd.prototype;
    U(eg, {
        setCenter: eg.Xf,
        getCenter: eg.pc,
        getRadius: eg.TL,
        setRadius: eg.wf
    });
    var fg = Bd.prototype;
    U(fg, {
        getPath: fg.ve,
        setPath: fg.me,
        setPositionAt: fg.vn
    });
    var gg = lb.prototype;
    U(gg, {
        getPosition: gg.ia,
        setPosition: gg.ta,
        getText: gg.nE,
        setText: gg.hu
    });
    O.prototype.equals = O.prototype.ab;
    S.prototype.equals = S.prototype.ab;
    M.prototype.equals = M.prototype.ab;
    U(window, {
        BMAP_ANCHOR_TOP_LEFT: Rc,
        BMAP_ANCHOR_TOP_RIGHT: Sc,
        BMAP_ANCHOR_BOTTOM_LEFT: Tc,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var hg = Qc.prototype;
    U(hg, {
        setAnchor: hg.qc,
        getAnchor: hg.RD,
        setOffset: hg.Ye,
        getOffset: hg.Qf,
        show: hg.show,
        hide: hg.U,
        isVisible: hg.oh,
        toString: hg.toString
    });
    var ig = mb.prototype;
    U(ig, {
        getType: ig.pp,
        setType: ig.wn
    });
    U(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var jg = ob.prototype;
    U(jg, {
        changeView: jg.se,
        setSize: jg.Ce,
        getSize: jg.vb
    });
    var kg = nb.prototype;
    U(kg, {
        getUnit: kg.kY,
        setUnit: kg.RF
    });
    U(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var lg = Vc.prototype;
    U(lg, {
        addCopyright: lg.Dw,
        removeCopyright: lg.uF,
        getCopyright: lg.Am,
        getCopyrightCollection: lg.YD
    });
    U(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: Yc,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var mg = Gd.prototype;
    U(mg, {
        getMapType: mg.oa,
        getCopyright: mg.Am,
        isTransparentPng: mg.Gt
    });
    var ng = bd.prototype;
    U(ng, {
        addItem: ng.Fw,
        addSeparator: ng.iC,
        removeSeparator: ng.wF
    });
    var og = ed.prototype;
    U(og, {
        setText: og.hu
    });
    var pg = Y.prototype;
    U(pg, {
        getStatus: pg.Im,
        setSearchCompleteCallback: pg.PF,
        getPageCapacity: pg.qf,
        setPageCapacity: pg.Zp,
        setLocation: pg.tn,
        disableFirstResultSelection: pg.bD,
        enableFirstResultSelection: pg.zD,
        gotoPage: pg.Nm,
        searchNearby: pg.Vp,
        searchInBounds: pg.mn,
        search: pg.search
    });
    U(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: 2,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: 6,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: 8
    });
    U(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    U(window, {
        BMAP_TRANSIT_POLICY_LEAST_TIME: 0,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 2,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 3,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 4,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2
    });
    var qg = te.prototype;
    U(qg, {
        clearResults: qg.Qe
    });
    ve = ue.prototype;
    U(ve, {
        setPolicy: ve.gu,
        toString: ve.toString,
        setPageCapacity: ve.Zp
    });
    U(window, {
        BMAP_DRIVING_POLICY_LEAST_TIME: 0,
        BMAP_DRIVING_POLICY_LEAST_DISTANCE: 1,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 2
    });
    U(window, {
        BMAP_MODE_DRIVING: "driving",
        BMAP_MODE_TRANSIT: "transit",
        BMAP_MODE_WALKING: "walking",
        BMAP_MODE_NAVIGATION: "navigation"
    });
    var rg = Ce.prototype;
    U(rg, {
        routeCall: rg.gO
    });
    U(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    U(window, {
        BMAP_ROUTE_TYPE_DRIVING: ee,
        BMAP_ROUTE_TYPE_WALKING: de
    });
    U(window, {
        BMAP_ROUTE_STATUS_NORMAL: fe,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var sg = xe.prototype;
    U(sg, {
        setPolicy: sg.gu
    });
    var tg = Ne.prototype;
    U(tg, {
        show: tg.show,
        hide: tg.U,
        setTypes: tg.QF,
        setLocation: tg.tn,
        search: tg.search,
        setInputValue: tg.Qy
    });
    U(qb.prototype, {});
    var ug = Le.prototype;
    U(ug, {
        get: ug.get
    });
    U($c.prototype, {});
    U(fb.prototype, {});
    U(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: Td,
        BMAP_POINT_DENSITY_LOW: 50
    });
    U(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: vd,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    U(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: wd,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    U(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    U(window, {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: cd,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: dd
    });
    U(window, {
        BMAP_SYS_DRAWER: La,
        BMAP_SVG_DRAWER: 1,
        BMAP_VML_DRAWER: 2,
        BMAP_CANVAS_DRAWER: 3,
        BMAP_SVG_DRAWER_FIRST: 4
    });
    B.Jw();
    B.B0();
})()
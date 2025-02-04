(function(g) {
    var window = this;
    'use strict';
    var I3 = function(a) {
            a.publish("cardstatechange", a.Jk() && a.Yo() ? 1 : 0)
        },
        J3 = function(a, b) {
            var c = g.ab(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (null == a) return;
                a = a[d[c]]
            }
            return a
        },
        Dnb = function(a) {
            var b = g.Gs(a);
            a = g.Js(a);
            return new g.vs(b.x, b.y, a.width, a.height)
        },
        Enb = function(a, b, c) {
            var d = void 0 === d ? {} : d;
            var e;
            return e = g.iC(a, b, function() {
                g.jC(e);
                c.apply(a, arguments)
            }, d)
        },
        M3 = function(a) {
            a = g.fb(a);
            delete K3[a];
            g.nd(K3) && L3 && L3.stop()
        },
        Gnb = function() {
            L3 || (L3 = new g.dv(function() {
                Fnb()
            }, 20));
            var a = L3;
            a.isActive() || a.start()
        },
        Fnb = function() {
            var a = g.kb();
            g.bd(K3, function(b) {
                Hnb(b, a)
            });
            g.nd(K3) || Gnb()
        },
        N3 = function(a, b, c, d) {
            g.wv.call(this);
            if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
            if (a.length != b.length) throw Error("Start and end points must be the same length");
            this.B = a;
            this.N = b;
            this.duration = c;
            this.G = d;
            this.coords = [];
            this.progress = this.K = 0;
            this.D = null
        },
        Hnb = function(a, b) {
            b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
            a.progress = (b - a.startTime) / (a.endTime - a.startTime);
            1 < a.progress && (a.progress = 1);
            a.K = 1E3 / (b - a.D);
            a.D = b;
            Inb(a, a.progress);
            1 == a.progress ? (a.j = 0, M3(a), a.onFinish(), a.lr()) : a.isPlaying() && a.SL()
        },
        Inb = function(a, b) {
            "function" === typeof a.G && (b = a.G(b));
            a.coords = Array(a.B.length);
            for (var c = 0; c < a.B.length; c++) a.coords[c] = (a.N[c] - a.B[c]) * b + a.B[c]
        },
        Jnb = function(a, b) {
            g.zb.call(this, a);
            this.coords = b.coords;
            this.x = b.coords[0];
            this.y = b.coords[1];
            this.z = b.coords[2];
            this.duration = b.duration;
            this.progress = b.progress;
            this.fps = b.K;
            this.state = b.j
        },
        O3 = function(a, b, c, d, e) {
            N3.call(this, b, c, d, e);
            this.element = a
        },
        Knb = function(a, b, c, d, e) {
            if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
            O3.call(this, a, b, c, d, e)
        },
        Lnb = function(a) {
            return Math.pow(a, 3)
        },
        Mnb = function(a) {
            return 3 * a * a - 2 * a * a * a
        },
        Nnb = function(a) {
            g.I.call(this);
            this.B = a || window;
            this.j = []
        },
        P3 = function(a) {
            return a.baseUrl || null
        },
        Q3 = function(a, b) {
            return g.Et(g.Rr(a, b), function(c) {
                return !!c
            })
        },
        Onb = function(a, b, c) {
            function d(qa) {
                var la = qa.hovercardButton;
                if (!la) return null;
                la = la.subscribeButtonRenderer;
                if (!la) return null;
                var va = f(la.unsubscribedButtonText),
                    da = f(la.subscribedButtonText);
                if (la.subscribed) {
                    var W = f(la.subscriberCountWithUnsubscribeText);
                    var Oa = f(la.subscriberCountText)
                } else W = f(la.subscriberCountText), Oa = f(la.subscriberCountWithSubscribeText);
                var y = null;
                if (qa.signinEndpoint) {
                    y = J3(qa, "signinEndpoint", "webNavigationEndpointData", "url");
                    if (!y) {
                        var aa, Ja;
                        y = null == (Ja = g.U(null == (aa = la.signInEndpoint) ? void 0 : aa.commandMetadata, g.C2)) ? void 0 :
                            Ja.url
                    }
                    if (!y) return null
                }
                return va && (da || y) ? {
                    subscribed: la.subscribed,
                    subscribeText: va,
                    subscribeCount: W,
                    unsubscribeText: da,
                    unsubscribeCount: Oa,
                    enabled: la.enabled,
                    signinUrl: y,
                    classic: qa.useClassicSubscribeButton
                } : null
            }

            function e(qa) {
                if (qa) {
                    var la = [],
                        va = qa.videoId;
                    va && la.push("v=" + va);
                    (va = qa.playlistId) && la.push("list=" + va);
                    (qa = qa.startTimeSeconds) && la.push("t=" + qa);
                    return "/watch?" + la.join("&")
                }
            }

            function f(qa) {
                if (!qa) return null;
                var la = qa.simpleText;
                return la ? la : qa.runs ? g.Rr(qa.runs, function(va) {
                    return va.text
                }).join("") : null
            }
            b = b.endscreenElementRenderer;
            if (!b) return null;
            var h = b.style,
                l = b.endpoint || {},
                m = null,
                n = null,
                p = !1,
                q = null,
                r = null,
                t = null,
                v = null,
                w = !1,
                A = null,
                D = null,
                F = null,
                G = null,
                L = null,
                N = null;
            if ("VIDEO" === h) g.U(l, g.SF) ? m = g.U(l, g.SF).url : (N = g.U(l, g.ZS), m = e(N)), n = !1, q = a, b.thumbnailOverlays ? (p = b.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer, r = f(p.text), p = "LIVE" === p.style) : r = f(b.videoDuration);
            else if ("PLAYLIST" === h) g.U(l, g.SF) ? m = g.U(l, g.SF).url : (N = g.U(l, g.ZS), m = e(N)), n = !1, q = a, t = f(b.playlistLength);
            else if ("CHANNEL" ===
                h) {
                if (w = J3(l, "browseEndpoint", "browseId")) v = w, m = "/channel/" + v;
                n = !1;
                q = "new";
                (w = !!b.isSubscribe) ? A = d(b): D = f(b.subscribersText)
            } else "WEBSITE" === h ? ((F = J3(l, "urlEndpoint", "url")) && (m = F), n = !0, q = "new", F = b.icon.thumbnails[0].url) : "CREATOR_MERCHANDISE" === h && (b.productPrice && (G = f(b.productPrice)), b.additionalFeesText && (L = f(b.additionalFeesText)), (n = J3(l, "urlEndpoint", "url")) && (m = n), n = !0, q = "new");
            a = J3(b, "title", "accessibility", "accessibilityData", "label");
            var R = b.endpoint ? b.endpoint.clickTrackingParams : null,
                ea = "";
            if (b.metadata) {
                var ra = f(b.metadata);
                ra && (ea = ra)
            }
            return {
                id: "element-" + c,
                type: h,
                title: f(b.title),
                metadata: ea,
                callToAction: f(b.callToAction),
                IW: b.image,
                iconUrl: F,
                left: Number(b.left),
                width: Number(b.width),
                top: Number(b.top),
                aspectRatio: Number(b.aspectRatio),
                startMs: Math.floor(Number(b.startMs)),
                endMs: Math.floor(Number(b.endMs)),
                videoDuration: r,
                pE: p,
                playlistLength: t,
                channelId: v,
                subscribeButton: A,
                subscribersText: D,
                isSubscribe: w,
                targetUrl: m || null,
                U8: n,
                sessionData: R ? {
                    itct: R
                } : null,
                qda: q,
                PC: a ? a : null,
                isPlaceholder: b.isPlaceholder,
                impressionUrls: Q3(b.impressionUrls || [], P3),
                G8: Q3(b.hovercardShowUrls || [], P3),
                clickUrls: Q3(l.loggingUrls || [], P3),
                visualElement: g.YE(b.trackingParams),
                productPrice: G,
                additionalFeesText: L,
                watchEndpoint: N || null
            }
        },
        Pnb = function(a, b) {
            var c = {
                startMs: Math.floor(Number(a.startMs)),
                impressionUrls: Q3(a.impressionUrls || [], P3),
                elements: Q3(a.elements || [], function(d, e) {
                    return Onb(b, d, e)
                })
            };
            a.trackingParams && (c.visualElement = g.YE(a.trackingParams));
            return c
        },
        Qnb = function(a) {
            g.uV.call(this, a);
            this.C = this.endscreen = null;
            this.j = {};
            this.G = {};
            this.D = this.B = null;
            this.N = [];
            this.Y = !0;
            this.K = 0;
            a = a.U();
            this.Z = g.QR(a) || g.SR(a);
            this.events = new g.xK(this);
            g.O(this, this.events);
            this.events.T(this.player, g.GJ("creatorendscreen"), this.onCueRangeEnter);
            this.events.T(this.player, g.HJ("creatorendscreen"), this.onCueRangeExit);
            this.events.T(this.player, "resize", this.Vb);
            this.events.T(window, "focus", this.Fba);
            this.load();
            var b = g.Jf("STYLE");
            (g.yf("HEAD")[0] || document.body).appendChild(b);
            this.addOnDisposeCallback(function() {
                g.Tf(b)
            });
            b.sheet && (b.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0), b.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0))
        },
        Rnb = function(a) {
            return a.player.getVideoData().Mf ? "current" : a.Z ? "new" : "current"
        },
        R3 = function(a) {
            return "creator-endscreen-editor" === a.player.U().playerStyle
        },
        Snb = function(a) {
            var b = a.player.getVideoData(),
                c = b.videoId;
            a.C && a.C.abort();
            c = {
                method: "POST",
                onFinish: function(e) {
                    var f = a.C = null;
                    200 === e.status && (e = e.responseText, ")]}" === e.substring(0, 3) && (e = e.substring(3), f = JSON.parse(e), f = Pnb(f, Rnb(a))));
                    S3(a, f)
                },
                urlParams: {
                    v: c
                },
                withCredentials: !0
            };
            a.Z && (c.urlParams.ptype = "embedded");
            var d = b.sy;
            d && (c.postParams = {
                ad_tracking: d
            });
            if (b = g.DUa(b))
                if (b = g.oe(b), b = g.ke(b)) a.C = g.AB(b, c)
        },
        S3 = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            a.player.wf("creatorendscreen");
            a.B && (a.B.dispose(), a.B = null, a.D.dispose(), a.D = null);
            for (var d = g.u(Object.values(a.j)), e = d.next(); !e.done; e = d.next()) e.value.dispose();
            a.j = {};
            a.G = {};
            0 < a.N.length && (a.N.forEach(function(l) {
                l.dispose()
            }), a.N.length = 0);
            a.K = 0;
            if ((a.endscreen = b) && b.elements) {
                c && Tnb(a);
                c = [];
                d = new g.FJ(b.startMs, 0x7ffffffffffff, {
                    id: "ytp-ce-in-endscreen",
                    namespace: "creatorendscreen"
                });
                c.push(d);
                a.player.U().B || (a.B = new g.V({
                    I: "div",
                    S: "ytp-ce-shadow"
                }), g.fU(a.player, a.B.element, 4), a.D = new g.fG(a.B, 200));
                for (d = 0; d < b.elements.length; ++d) {
                    e = b.elements[d];
                    var f = Unb(a, e);
                    if (f) {
                        a.j[e.id] = f;
                        a.G[e.id] = e;
                        g.fU(a.player, f.element, 4);
                        var h = new g.FJ(e.startMs, e.endMs, {
                            id: "ytp-ce-element-" + e.id,
                            namespace: "creatorendscreen"
                        });
                        c.push(h);
                        Vnb(a, f, e)
                    } else g.dF(new g.zC("buildEndscreenElement null",
                        e))
                }
                a.player.qf(c);
                a.Vb()
            }
        },
        Tnb = function(a) {
            var b = g.ZE(),
                c = g.$E();
            c && b && a.endscreen.visualElement && g.eB(g.lF)(void 0, c, b, a.endscreen.visualElement)
        },
        Unb = function(a, b) {
            var c = null;
            switch (b.type) {
                case "VIDEO":
                    a = {
                        I: "div",
                        Ka: ["ytp-ce-element", "ytp-ce-video"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.PC || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-image",
                            X: T3(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-shadow-top"
                        }, {
                            I: "a",
                            S: "ytp-ce-covering-overlay",
                            X: {
                                href: U3(a, b.targetUrl),
                                tabindex: "-1"
                            },
                            V: [{
                                I: "div",
                                Ka: ["ytp-ce-video-title", "ytp-webkit-ellipsis"],
                                X: {
                                    dir: g.Bv(b.title || "")
                                },
                                xa: b.title
                            }, {
                                I: "div",
                                S: b.pE ? "ytp-ce-live-video-duration" : "ytp-ce-video-duration",
                                xa: b.videoDuration || void 0
                            }]
                        }]
                    };
                    c = new g.V(a);
                    break;
                case "PLAYLIST":
                    a = {
                        I: "div",
                        Ka: ["ytp-ce-element", "ytp-ce-playlist"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.PC || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-image",
                            X: T3(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-shadow-top"
                        }, {
                            I: "a",
                            S: "ytp-ce-covering-overlay",
                            X: {
                                href: U3(a, b.targetUrl),
                                tabindex: "-1"
                            },
                            V: [{
                                I: "div",
                                Ka: ["ytp-ce-playlist-title", "ytp-webkit-ellipsis"],
                                X: {
                                    dir: g.Bv(b.title || "")
                                },
                                xa: b.title
                            }, {
                                I: "div",
                                S: "ytp-ce-playlist-count",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-playlist-icon"
                                }, {
                                    I: "div",
                                    S: "ytp-ce-playlist-count-text",
                                    xa: b.playlistLength || void 0
                                }]
                            }]
                        }]
                    };
                    c = new g.V(a);
                    break;
                case "CHANNEL":
                    c = {
                        I: "div",
                        Ka: ["ytp-ce-element", "ytp-ce-channel", b.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.PC || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-overlay",
                            V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-hider"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-background"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-content",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-expanding-overlay-body",
                                    V: [{
                                        I: "div",
                                        S: "ytp-ce-expanding-overlay-body-padding",
                                        V: [{
                                            I: "a",
                                            Ka: ["ytp-ce-channel-title", "ytp-ce-link"],
                                            X: {
                                                href: U3(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1",
                                                dir: g.Bv(b.title || "")
                                            },
                                            xa: b.title
                                        }, b.subscribeButton ? {
                                            I: "div",
                                            S: "ytp-ce-subscribe-container",
                                            V: [{
                                                I: "div",
                                                S: "ytp-ce-channel-subscribe"
                                            }]
                                        } : "", b.subscribersText ? {
                                            I: "div",
                                            S: "ytp-ce-channel-subscribers-text",
                                            xa: b.subscribersText
                                        } : "", b.metadata ? {
                                            I: "div",
                                            Ka: ["ytp-ce-channel-metadata", "yt-ui-ellipsis",
                                                "yt-ui-ellipsis-3"
                                            ],
                                            xa: b.metadata
                                        } : ""]
                                    }]
                                }]
                            }]
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-image",
                            X: T3(b)
                        }]
                    };
                    c = new g.V(c);
                    var d = g.zf(document, "div", "ytp-ce-channel-subscribe", c.element)[0];
                    if (b.subscribeButton && b.channelId) {
                        g.qv(d, "ytp-ce-subscribe-button");
                        if (a.player.U().B) {
                            var e = null;
                            var f = b.sessionData.itct
                        } else e = "endscreen", f = null;
                        e = new g.cW(b.subscribeButton.subscribeText, b.subscribeButton.subscribeCount, b.subscribeButton.unsubscribeText, b.subscribeButton.unsubscribeCount, !!b.subscribeButton.enabled, !!b.subscribeButton.classic,
                            b.channelId, !!b.subscribeButton.subscribed, e, f, a.player, !1);
                        d.appendChild(e.element);
                        a.N.push(e)
                    }
                    break;
                case "WEBSITE":
                    a = {
                        I: "div",
                        Ka: ["ytp-ce-element", "ytp-ce-website"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.PC || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-overlay",
                            V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-hider"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-background"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-content",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-expanding-overlay-body",
                                    V: [{
                                        I: "div",
                                        S: "ytp-ce-expanding-overlay-body-padding",
                                        V: [{
                                            I: "div",
                                            S: "ytp-ce-website-title",
                                            X: {
                                                dir: g.Bv(b.title || "")
                                            },
                                            xa: b.title
                                        }, {
                                            I: "div",
                                            S: "ytp-ce-website-metadata",
                                            xa: b.metadata
                                        }, {
                                            I: "a",
                                            Ka: ["ytp-ce-website-goto", "ytp-ce-link"],
                                            X: {
                                                href: U3(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            xa: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-image",
                            X: T3(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-icon",
                            X: Wnb(b.iconUrl)
                        }]
                    };
                    c = new g.V(a);
                    break;
                case "CREATOR_MERCHANDISE":
                    c = "", b.productPrice && (c = {
                        I: "div",
                        S: "ytp-ce-merchandise-price-container",
                        V: [{
                            I: "div",
                            S: "ytp-ce-merchandise-price",
                            xa: b.productPrice
                        }]
                    }, b.additionalFeesText && c.V.push({
                        I: "div",
                        S: "ytp-ce-merchandise-additional-fees",
                        xa: b.additionalFeesText
                    })), a = {
                        I: "div",
                        Ka: ["ytp-ce-element", "ytp-ce-merchandise"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.PC || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-overlay",
                            V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-hider"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-background"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-content",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-expanding-overlay-body",
                                    V: [{
                                        I: "div",
                                        S: "ytp-ce-expanding-overlay-body-padding",
                                        V: [{
                                            I: "div",
                                            S: "ytp-ce-merchandise-title",
                                            X: {
                                                dir: g.Bv(b.title || "")
                                            },
                                            xa: b.title
                                        }, c, {
                                            I: "div",
                                            S: "ytp-ce-merchandise-metadata",
                                            xa: b.metadata
                                        }, {
                                            I: "a",
                                            Ka: ["ytp-ce-merchandise-goto", "ytp-ce-link"],
                                            X: {
                                                href: U3(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            xa: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-image",
                            X: T3(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-merchandise-invideo-cta-container",
                            V: [{
                                I: "div",
                                S: "ytp-ce-merchandise-invideo-cta",
                                xa: b.callToAction || void 0
                            }]
                        }]
                    }, c = new g.V(a)
            }
            b.isPlaceholder && g.qv(c.element, "ytp-ce-placeholder");
            return c
        },
        T3 = function(a) {
            if (a.IW) var b = a.IW.thumbnails;
            return Wnb(b ? b[b.length - 1].url : null)
        },
        Wnb = function(a) {
            return a ? {
                style: "background-image: url(" + a + ")"
            } : {}
        },
        Vnb = function(a, b, c) {
            function d(m) {
                m && (b.listen("blur", function() {
                    "none" != m.style.display && a.Y && m.focus()
                }), b.T(m, "focus", f), b.T(m, "blur", h))
            }

            function e(m) {
                a.K += m;
                0 < a.K ? (g.qv(b.element, "ytp-ce-force-expand"), V3(a, c.id, !0)) : (g.tv(b.element, "ytp-ce-force-expand"), g.tv(b.element, "ytp-ce-element-hover"), V3(a, c.id, !1))
            }

            function f() {
                e(1)
            }

            function h() {
                e(-1)
            }
            b.listen("mouseenter", function() {
                Xnb(a, b, c)
            });
            b.listen("mouseleave", function() {
                Ynb(a, b, c)
            });
            a.player.U().B || b.listen("click", function() {
                g.qv(b.element, "ytp-ce-element-hover")
            });
            b.listen("click", function(m) {
                Znb(a, c, m)
            });
            b.listen("keypress", function(m) {
                Znb(a, c, m)
            });
            b.listen("focus", function() {
                Xnb(a, b, c)
            });
            b.listen("blur", function() {
                Ynb(a, b, c)
            });
            b.listen("touchstart", function() {
                Xnb(a, b, c)
            });
            var l = g.Bf("ytp-ce-expanding-overlay-hider", b.element);
            l && b.T(l, "touchstart", function(m) {
                m.stopPropagation();
                g.tv(b.element, "ytp-ce-element-hover");
                g.tv(b.element, "ytp-ce-force-expand")
            });
            b.listen("keydown", function(m) {
                a.Y = 9 === m.keyCode && !m.shiftKey
            });
            d(g.Bf("ytp-sb-subscribe", b.element));
            d(g.Bf("ytp-sb-unsubscribe", b.element));
            b.listen("focus", f);
            b.listen("blur", h)
        },
        Znb = function(a, b, c) {
            if (b.targetUrl && (!c || "keypress" !== c.type || 13 === c.keyCode)) {
                for (var d = c.target; d && !g.pv(d, "ytp-ce-element");) {
                    g.pv(d, "subscribe-label") && $nb(a, b);
                    if (g.pv(d, "ytp-ce-channel-subscribe")) return;
                    d = g.Uf(d)
                }
                if (!d || g.pv(d, "ytp-ce-element-hover")) {
                    c.preventDefault();
                    c.stopPropagation();
                    if (d = a.j[b.id]) Ynb(a, d, b), d.element.blur();
                    if (c.ctrlKey || c.metaKey || "new" === b.qda) $nb(a, b), a.player.sendVideoStatsEngageEvent(17, void 0), a.player.pauseVideo(), c = g.oe(U3(a, b.targetUrl)), c = g.ke(c), g.MG(c, void 0, b.sessionData);
                    else {
                        var e = g.bS(a.player.U()) || a.player.getVideoData().Mf,
                            f = function() {
                                var h = U3(a, b.targetUrl),
                                    l = b.sessionData,
                                    m = b.watchEndpoint,
                                    n = g.jB(h);
                                e && n &&
                                    (n.v || n.list) ? a.player.Ko(n.v, l, n.list, !1, void 0, m || void 0) : g.fya(h, l)
                            };
                        $nb(a, b, function() {
                            a.player.sendVideoStatsEngageEvent(17, f)
                        })
                    }
                }
            }
        },
        U3 = function(a, b) {
            a = a.player.U();
            if (b) {
                if (b.startsWith("//")) return a.protocol + ":" + b;
                if (b.startsWith("/")) return g.iS(a) + b
            } else return "";
            return b
        },
        Xnb = function(a, b, c) {
            g.pv(b.element, "ytp-ce-element-hover") || ("VIDEO" === c.type || "PLAYLIST" === c.type ? g.qv(b.element, "ytp-ce-element-hover") : a.player.U().B ? (new g.dv(function() {
                g.qv(b.element, "ytp-ce-element-hover")
            }, 200)).start() : g.qv(b.element, "ytp-ce-element-hover"), W3(a, c.G8), V3(a, c.id, !0))
        },
        Ynb = function(a, b, c) {
            g.tv(b.element, "ytp-ce-element-hover");
            g.tv(b.element, "ytp-ce-force-expand");
            V3(a, c.id, !1)
        },
        V3 = function(a, b, c) {
            a.B && (c ? a.D.show() : a.D.hide());
            for (var d = g.u(Object.keys(a.j)), e = d.next(); !e.done; e = d.next()) e = e.value, e !== b && g.vv(a.j[e].element, "ytp-ce-element-shadow-show", c)
        },
        W3 = function(a, b, c) {
            function d() {
                f || (e++, e === b.length && (h.stop(), c && c()))
            }
            if (!b || 0 === b.length || R3(a)) c && c();
            else {
                b = aob(a, b);
                var e = 0,
                    f = !1,
                    h = new g.dv(function() {
                        f = !0;
                        c && c()
                    }, 1E3, a);
                h.start();
                for (a = 0; a < b.length; a++) g.TD(b[a], d)
            }
        },
        $nb = function(a, b, c) {
            W3(a, b.clickUrls, c);
            (a = g.$E()) && b.U8 && g.sF(a, b.visualElement)
        },
        aob = function(a, b) {
            var c = a.player.getVideoData().clientPlaybackNonce;
            a = a.player.getCurrentTime().toFixed(2);
            c = {
                CPN: c,
                AD_CPN: c,
                MT: a
            };
            a = [];
            for (var d = 0; d < b.length; d++) a.push(bob(b[d], c));
            return a
        },
        bob = function(a, b) {
            return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(c) {
                var d = unescape(c);
                d = d.substring(1, d.length - 1);
                return b[d] ? escape(b[d]) : c
            })
        },
        cob = function(a) {
            return "string" === typeof a ? a : ""
        },
        X3 = function(a, b, c) {
            for (var d in b)
                if (b[d] === a) return a;
            return c
        },
        dob = function(a, b, c, d) {
            this.value = a;
            this.target = b;
            this.showLinkIcon = c;
            this.j = d
        },
        Y3 = function(a) {
            return a.value ? a.value : null
        },
        Z3 = function(a) {
            if (!a) return null;
            var b = g.oe(cob(a.value));
            b = g.ke(b);
            if (!b) return null;
            var c = X3(a.target, eob, "current");
            if (null == c) a = null;
            else {
                var d = a.show_link_icon;
                a = new dob(b, c, "true" === d || "false" === d ? "true" === d : !0, null != a.pause_on_navigation ? a.pause_on_navigation : !0)
            }
            return a
        },
        fob = function(a, b, c) {
            this.type = a;
            this.trigger = b;
            this.url = c
        },
        iob = function(a) {
            if (!a) return null;
            var b = X3(a.type, gob),
                c = X3(a.trigger, hob);
            a = a.url;
            a = Array.isArray(a) && a.length ? a[0] : a;
            a = Z3(a ? a : null);
            return b ? new fob(b, c, a) : null
        },
        job = function(a, b, c, d, e) {
            this.id = a;
            this.type = b;
            this.style = c;
            this.data = e;
            this.action = d || []
        },
        kob = function(a, b) {
            return g.Db(a.action, b)
        },
        lob = function(a, b) {
            this.context = a;
            this.j = b
        },
        mob = function(a) {
            return a.customMessage ? $3("div", "iv-card-message", a.customMessage) : ""
        },
        a4 = function(a, b) {
            a = "background-image: url(" + a + ");";
            var c = [];
            b && c.push(b);
            return {
                I: "div",
                S: "iv-card-image",
                X: {
                    style: a
                },
                V: c
            }
        },
        nob = function(a) {
            if (!a.metaInfo || 0 === a.metaInfo.length) return "";
            var b = [];
            a = g.u(a.metaInfo);
            for (var c = a.next(); !c.done; c = a.next()) b.push($3("li", "", c.value));
            return {
                I: "ul",
                S: "iv-card-meta-info",
                V: b
            }
        },
        $3 = function(a, b, c) {
            b ? "string" === typeof b ? b = {
                "class": b
            } : Array.isArray(b) && (b = {
                "class": b.join(" ")
            }) : b = {};
            b.dir = g.Bv(c);
            return {
                I: a,
                X: b,
                xa: c
            }
        },
        oob = function(a) {
            if (!a.customMessage) return "";
            var b = ["iv-card-action", "iv-card-primary-link"],
                c = {};
            a.ZC && (b.push("iv-card-action-icon"), c.style = "background-image: url(" + a.ZC + ");");
            c.dir = g.Bv(a.customMessage);
            var d = [{
                I: "span",
                xa: a.customMessage
            }];
            a.showLinkIcon && (d.push("\u00a0"), d.push({
                I: "span",
                S: "iv-card-link-icon"
            }));
            return {
                I: "div",
                Ka: b,
                X: c,
                V: d
            }
        },
        b4 = function(a, b, c, d) {
            if (d) {
                b = g.u(b);
                for (var e = b.next(); !e.done; e = b.next()) a.j(e.value, d, c.id, c.sessionData, c.dj.click, 5)
            }
        },
        pob = function(a, b) {
            this.merchant = a;
            this.price = b
        },
        qob = function(a) {
            var b;
            (b = a) && !(b = 1 < a.length ? "/" === a.charAt(0) && "/" !== a.charAt(1) : "/" === a) && (b = a.replace(/^(https?:)?\/\//, "").split("/", 1), b = !b || 1 > b.length || !b[0] ? [] : b[0].toLowerCase().split(".").reverse(), b = "com" === b[0] && "youtube" === b[1] || "be" === b[0] && "youtu" === b[1]);
            return b ? -1 === a.indexOf("/redirect?") : !1
        },
        rob = function(a, b) {
            return b ? b : qob(a) ? "current" : "new"
        },
        c4 = function(a, b) {
            g.I.call(this);
            var c = this;
            this.element = a;
            this.context = b;
            this.rb = !1;
            this.Va = new Map;
            this.Ya = new Map;
            this.context.J.addEventListener(g.GJ("annotations_module"), function(d) {
                (d = c.Va.get(d)) && d.apply(c)
            });
            this.context.J.addEventListener(g.HJ("annotations_module"), function(d) {
                (d = c.Ya.get(d)) && d.apply(c)
            })
        },
        d4 = function(a, b, c, d, e, f, h) {
            a.context.j.listen(b, "click", function(l) {
                a.TL(c, d, e, f || [], h || 0, l)
            });
            a.context.j.listen(b, "touchstart", function() {
                a.rb = !1
            });
            a.context.j.listen(b, "touchmove", function() {
                a.rb = !0
            })
        },
        sob = function(a) {
            var b;
            return (null == (b = g.U(a, g.SF)) ? 0 : b.url) ? g.U(a, g.SF).url : (a = g.U(a, g.ZS)) && a.videoId ? (b = "/watch?v=" + a.videoId, a.playlistId && (b += "&list=" + a.playlistId), a.index && (b += "&index=" + a.index), a.startTimeSeconds && (b += "&t=" + a.startTimeSeconds), b) : null
        },
        e4 = function(a, b, c) {
            return {
                lY: (a.impressionLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                click: (c.loggingUrls || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                close: (b.dismissLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                V0: (b.impressionLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                jL: (b.clickLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                })
            }
        },
        tob = function(a, b, c) {
            c4.call(this, b, c);
            var d = this;
            this.J = a;
            this.eventId = null;
            this.Gb = this.Ma = this.Ib = this.C = this.isInitialized = !1;
            this.cards = [];
            this.wb = this.Z = this.La = this.G = this.Ta = this.j = null;
            this.oa = [];
            this.ra = this.N = this.Jf = this.Da = null;
            this.K = 0;
            this.Ga = new g.dv(function() {}, c.W.Jl ? 4E3 : 3E3);
            g.O(this, this.Ga);
            this.eb = new g.dv(function() {});
            g.O(this, this.eb);
            this.Ba = new lob(c, function(e, f, h, l, m, n) {
                d4(d, e, f, h, l, m, n)
            });
            this.Y = new g.V({
                I: "div",
                S: "iv-drawer",
                X: {
                    id: "iv-drawer"
                },
                V: [{
                    I: "div",
                    S: "iv-drawer-header",
                    X: {
                        "aria-role": "heading"
                    },
                    V: [{
                        I: "span",
                        S: "iv-drawer-header-text"
                    }, {
                        I: "button",
                        Ka: ["iv-drawer-close-button", "ytp-button"],
                        X: {
                            "aria-label": "Hide cards",
                            tabindex: "0"
                        }
                    }]
                }, {
                    I: "div",
                    S: "iv-drawer-content"
                }]
            });
            g.O(this, this.Y);
            this.D = this.Y.element;
            this.Za = new g.fG(this.Y, 330);
            g.O(this, this.Za);
            this.Eb = g.Bf("iv-drawer-header-text", this.D);
            this.B = g.Bf("iv-drawer-content", this.D);
            this.addCueRange(0, 1E3 * c.videoData.lengthSeconds,
                "",
                function() {
                    d.Ib && f4(d, "YOUTUBE_DRAWER_AUTO_OPEN")
                },
                function() {
                    (d.Ib = d.C) && g4(d)
                });
            this.Qa = new g.xK(this);
            g.O(this, this.Qa);
            this.J.addEventListener("videodatachange", this.jt.bind(this))
        },
        uob = function(a, b) {
            b = b.data;
            b.autoOpenMs && a.addCueRange(b.autoOpenMs, 0x8000000000000, "", function() {
                f4(a, "YOUTUBE_DRAWER_AUTO_OPEN")
            });
            b.autoCloseMs && a.addCueRange(b.autoCloseMs, 0x8000000000000, "", function() {
                g4(a)
            });
            var c = b.headerText;
            g.Xf(a.Eb, c);
            a.Z && a.Z.setAttribute("title", c);
            b.eventId && (a.eventId = b.eventId);
            a.Da = g.YE(b.trackingParams);
            a.N = g.YE(b.closeTrackingParams);
            a.Jf = g.YE(b.iconTrackingParams)
        },
        vob = function(a, b) {
            var c = b.cardId ? b.cardId : "cr:" + a.K,
                d = a.J.U().experiments.ib("enable_error_corrections_infocard_web_client");
            if (!b.content && b.teaser.simpleCardTeaserRenderer && d) {
                var e = b.teaser.simpleCardTeaserRenderer,
                    f = b.icon ? b.icon.infoCardIconRenderer : null;
                b = {
                    id: c,
                    timestamp: a.K,
                    type: "simple",
                    teaserText: g.GF(e.message),
                    teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                    startMs: Number(b.cueRanges[0].startCardActiveMs),
                    autoOpen: !!b.autoOpen,
                    sessionData: {},
                    sponsored: !1,
                    dj: {},
                    gp: null,
                    Kj: e.trackingParams ? g.YE(e.trackingParams) : null,
                    Jf: f && f.trackingParams ? g.YE(f.trackingParams) : null,
                    imageUrl: "",
                    displayDomain: null,
                    showLinkIcon: !1,
                    ZC: null,
                    title: "",
                    customMessage: "",
                    url: null,
                    onClickCommand: e.onTapCommand || null
                };
                h4(a, b)
            } else {
                var h;
                if (null == (h = b.content) ? 0 : h.simpleCardContentRenderer) {
                    if (!b.cueRanges.length) return;
                    f = null == (e = b.content) ? void 0 : e.simpleCardContentRenderer;
                    e = b.teaser.simpleCardTeaserRenderer;
                    var l = b.icon ? b.icon.infoCardIconRenderer : null;
                    b = {
                        id: c,
                        timestamp: a.K,
                        type: "simple",
                        teaserText: g.GF(e.message),
                        teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                        startMs: Number(b.cueRanges[0].startCardActiveMs),
                        autoOpen: !!b.autoOpen,
                        sessionData: i4(a, c, b, f),
                        sponsored: !1,
                        dj: e4(f, e, f.command),
                        gp: f.trackingParams ? g.YE(f.trackingParams) : null,
                        Kj: e.trackingParams ? g.YE(e.trackingParams) : null,
                        Jf: l && l.trackingParams ? g.YE(l.trackingParams) : null,
                        imageUrl: j4(f.image.thumbnails, 290).url,
                        displayDomain: f.displayDomain ? g.GF(f.displayDomain) : null,
                        showLinkIcon: !!f.showLinkIcon,
                        ZC: null,
                        title: f.title ? g.GF(f.title) : "",
                        customMessage: f.callToAction ? g.GF(f.callToAction) : "",
                        url: g.U(f.command, g.SF).url ? Z3({
                            pause_on_navigation: !a.context.videoData.isLivePlayback,
                            target: "new",
                            value: g.U(f.command, g.SF).url
                        }) : null,
                        onClickCommand: null
                    };
                    h4(a, b)
                } else {
                    var m;
                    if (null == (m = b.content) ? 0 : m.collaboratorInfoCardContentRenderer) {
                        if (!b.cueRanges.length) return;
                        e = null == (f = b.content) ? void 0 : f.collaboratorInfoCardContentRenderer;
                        f = b.teaser.simpleCardTeaserRenderer;
                        l = b.icon ? b.icon.infoCardIconRenderer : null;
                        b = {
                            id: c,
                            timestamp: a.K,
                            type: "collaborator",
                            teaserText: g.GF(f.message),
                            teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                            startMs: Number(b.cueRanges[0].startCardActiveMs),
                            autoOpen: !!b.autoOpen,
                            sessionData: i4(a, c, b, e),
                            sponsored: !1,
                            dj: e4(e, f, e.endpoint),
                            gp: e.trackingParams ? g.YE(e.trackingParams) : null,
                            Kj: f.trackingParams ? g.YE(f.trackingParams) : null,
                            Jf: l && l.trackingParams ? g.YE(l.trackingParams) : null,
                            channelId: g.U(e.endpoint, g.nT).browseId,
                            customMessage: e.customText ? g.GF(e.customText) : null,
                            profileImageUrl: j4(e.channelAvatar.thumbnails, 290).url,
                            title: e.channelName ? g.GF(e.channelName) : "",
                            metaInfo: [e.subscriberCountText ? g.GF(e.subscriberCountText) : ""],
                            url: Z3({
                                pause_on_navigation: !a.context.videoData.isLivePlayback,
                                target: "new",
                                value: g.U(e.endpoint, g.nT).canonicalBaseUrl ? g.U(e.endpoint, g.nT).canonicalBaseUrl : "/channel/" + g.U(e.endpoint, g.nT).browseId
                            }),
                            onClickCommand: null
                        };
                        h4(a, b)
                    } else {
                        var n;
                        if (null == (n = b.content) ? 0 : n.playlistInfoCardContentRenderer) {
                            if (!b.cueRanges.length) return;
                            e = null == (l = b.content) ? void 0 : l.playlistInfoCardContentRenderer;
                            f = b.teaser.simpleCardTeaserRenderer;
                            l = b.icon ? b.icon.infoCardIconRenderer : null;
                            b = {
                                id: c,
                                timestamp: a.K,
                                type: "playlist",
                                teaserText: g.GF(f.message),
                                teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                startMs: Number(b.cueRanges[0].startCardActiveMs),
                                autoOpen: !!b.autoOpen,
                                sessionData: i4(a, c, b, e),
                                sponsored: !1,
                                dj: e4(e, f, e.action),
                                gp: e.trackingParams ? g.YE(e.trackingParams) : null,
                                Kj: f.trackingParams ? g.YE(f.trackingParams) : null,
                                Jf: l && l.trackingParams ? g.YE(l.trackingParams) : null,
                                xG: j4(e.playlistThumbnail.thumbnails, 258).url,
                                customMessage: e.customMessage ? g.GF(e.customMessage) : null,
                                playlistVideoCount: g.GF(e.playlistVideoCount),
                                title: e.playlistTitle ? g.GF(e.playlistTitle) : "",
                                metaInfo: [e.channelName ? g.GF(e.channelName) :
                                    "", e.videoCountText ? g.GF(e.videoCountText) : ""
                                ],
                                url: Z3({
                                    pause_on_navigation: !a.context.videoData.isLivePlayback,
                                    target: "new",
                                    value: sob(e.action)
                                }),
                                onClickCommand: null
                            };
                            h4(a, b)
                        } else {
                            var p;
                            if (null == (p = b.content) ? 0 : p.videoInfoCardContentRenderer) {
                                if (!b.cueRanges.length) return;
                                var q;
                                e = null == (q = b.content) ? void 0 : q.videoInfoCardContentRenderer;
                                f = b.teaser.simpleCardTeaserRenderer;
                                l = b.icon ? b.icon.infoCardIconRenderer : null;
                                b = {
                                    id: c,
                                    timestamp: a.K,
                                    type: "video",
                                    teaserText: g.GF(f.message),
                                    teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                    startMs: Number(b.cueRanges[0].startCardActiveMs),
                                    autoOpen: !!b.autoOpen,
                                    sessionData: i4(a, c, b, e),
                                    sponsored: !1,
                                    dj: e4(e, f, e.action),
                                    gp: e.trackingParams ? g.YE(e.trackingParams) : null,
                                    Kj: f.trackingParams ? g.YE(f.trackingParams) : null,
                                    Jf: l && l.trackingParams ? g.YE(l.trackingParams) : null,
                                    xG: j4(e.videoThumbnail.thumbnails, 258).url,
                                    videoDuration: e.lengthString ? g.GF(e.lengthString) : null,
                                    customMessage: e.customMessage ? g.GF(e.customMessage) : null,
                                    title: e.videoTitle ? g.GF(e.videoTitle) : "",
                                    metaInfo: [e.channelName ? g.GF(e.channelName) :
                                        "", e.viewCountText ? g.GF(e.viewCountText) : ""
                                    ],
                                    isLiveNow: !!e.badge,
                                    url: Z3({
                                        pause_on_navigation: !a.context.videoData.isLivePlayback,
                                        target: "new",
                                        value: sob(e.action)
                                    }),
                                    onClickCommand: null
                                };
                                h4(a, b)
                            }
                        }
                    }
                }
            }
            a.K++
        },
        j4 = function(a, b) {
            for (var c = -1, d = -1, e = 0; e < a.length; e++) {
                if (a[e].height === b || 290 === a[e].width) return a[e];
                ((a[e].height || 0) < b || 290 > (a[e].width || 0)) && (0 > c || (a[c].height || 0) < (a[e].height || 0) || (a[c].width || 0) < (a[e].width || 0)) ? c = e: ((a[e].height || 0) >= b || 290 <= (a[e].width || 0)) && (0 > d || (a[d].height || 0) > (a[e].height || 0) || (a[d].width || 0) > (a[e].width || 0)) && (d = e)
            }
            return a[0 <= d ? d : c]
        },
        i4 = function(a, b, c, d) {
            return {
                feature: c.feature ? c.feature : "cards",
                src_vid: a.context.videoData.videoId,
                annotation_id: b,
                ei: a.context.videoData.eventId || "",
                itct: d.trackingParams || ""
            }
        },
        xob = function(a, b) {
            if (b = wob(a, b)) b === a.j && (a.j = null), a.J.removeCueRange(b.Ef.id), g.Tf(b.qN), g.Hb(a.cards, b), a.tH(), k4(a)
        },
        f4 = function(a, b, c) {
            if (!a.C) {
                a.Za.show();
                a.Ta = new g.dv(function() {
                    g.qv(a.context.J.getRootNode(), g.eZ.IV_DRAWER_OPEN)
                }, 0);
                a.Ta.start();
                a.Qa.T(a.B, "mousewheel", function(h) {
                    a.Ga.start();
                    h.preventDefault();
                    h = h || window.event;
                    var l = 0;
                    "MozMousePixelScroll" == h.type ? l = 0 == (h.axis == h.HORIZONTAL_AXIS) ? h.detail : 0 : window.opera ? l = h.detail : l = 0 == h.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? h.wheelDeltaY / -30 : h.wheelDeltaY / -1.2 : h.wheelDelta / -1.6 : h.wheelDeltaY / -3;
                    if (h = l) a.B.scrollTop += h
                });
                a.C = !0;
                var d = g.$E();
                d && a.Da && a.N && g.qF(d, [a.Da, a.N]);
                b = {
                    TRIGGER_TYPE: b
                };
                for (var e = g.u(a.cards), f = e.next(); !f.done; f = e.next()) f = f.value, f.fZ || (f.fZ = !0, yob(a.context.logger, f.Ef.dj.lY, b)), d && g.qF(d, [f.Ef.gp]);
                I3(a.J);
                c && (a.G = new g.dv(function() {
                    a.La = a.Z;
                    a.wb.focus()
                }, 330), a.G.start())
            }
        },
        g4 = function(a) {
            a.C && (a.Za.hide(), g.oC(a.Qa), g.tv(a.context.J.getRootNode(), g.eZ.IV_DRAWER_OPEN), a.C = !1, I3(a.J), a.G && a.G.stop(), a.G = new g.dv(function() {
                a.La && (a.La.focus(), a.La = null)
            }, 330), a.G.start())
        },
        Aob = function(a) {
            g.rv(a.Hb(), [g.eZ.STOP_EVENT_PROPAGATION,
                "iv-drawer-manager"
            ]);
            g.fU(a.J, a.D, 5);
            zob(a);
            a.Z = g.Bf("ytp-cards-button", a.J.getRootNode());
            a.wb = g.Bf("iv-drawer-close-button", a.D);
            a.isInitialized = !0
        },
        zob = function(a) {
            var b = g.Bf("iv-drawer-close-button", a.D);
            a.context.j.listen(b, "click", a.r6, a);
            a.context.j.listen(a.B, "touchend", function() {
                a.Ga.start()
            });
            a.context.j.listen(a.B, "scroll", a.O6, a);
            a.context.B.subscribe("onHideControls", function() {
                a.Ma = !0
            });
            a.context.B.subscribe("onShowControls", function() {
                a.Ma = !1
            });
            a.context.B.subscribe("onVideoAreaChange", function() {
                a.Ma = g.pv(a.J.getRootNode(), "ytp-autohide")
            });
            a.oa.push(g.gE("iv-button-shown", a.m9, a));
            a.oa.push(g.gE("iv-button-hidden", a.l9, a));
            Bob(a)
        },
        Bob = function(a) {
            a.oa.push(g.gE("iv-teaser-shown", a.f3, a));
            a.oa.push(g.gE("iv-teaser-hidden", a.n9, a));
            a.oa.push(g.gE("iv-teaser-clicked", a.e3, a));
            a.Gb = !0
        },
        Cob = function(a, b) {
            var c;
            return b.onClickCommand && "engagement-panel-error-corrections" === (null == (c = g.U(b.onClickCommand, g.dkb)) ? void 0 : c.targetId) ? (a.ra = b, !0) : !1
        },
        Dob = function(a, b) {
            a.ra = b;
            var c = a.J.getVideoData();
            if (!c) return !1;
            c = g.cTa(c);
            if (null == c ? 0 : c.markersMap)
                for (var d, e = 0;
                    (null == (d = c) ? void 0 : d.markersMap.length) > e; e++) {
                    var f = void 0,
                        h = null == (f = c) ? void 0 : f.markersMap[e];
                    if ("ERROR_CORRECTION_MARKERS" === h.key && (f = void 0, (h = null == (f = h.value) ? void 0 : f.markers) && 0 < h.length)) return d = void 0, b.startMs = (null == (d = g.U(h[0], g.A0a)) ? void 0 : d.timeRangeStartMillis) || 0, a.ra = null, !0
                }
            return !1
        },
        h4 = function(a, b) {
            if (!Cob(a, b) || Dob(a, b)) {
                var c = Eob(a, b);
                if (c) {
                    var d = {
                        Ef: b,
                        qN: c.element,
                        fZ: !1
                    };
                    if (b.onClickCommand) a.J.L("web_infocards_teaser_show_logging_fix") && (a.Gb || Bob(a), xob(a, b.id), c = a.findLastIndex(d), g.Pb(a.cards, c, 0, d));
                    else {
                        a.isInitialized || Aob(a);
                        xob(a, b.id);
                        var e = a.findLastIndex(d);
                        g.Pb(a.cards, e, 0, d);
                        c.Ia(a.B, e);
                        a.tH()
                    }
                    b.autoOpen ? a.addCueRange(b.startMs, 0x8000000000000, b.id, function() {
                        a.C || (a.j = d, k4(a), Fob(a, d), f4(a, "YOUTUBE_DRAWER_AUTO_OPEN", !1))
                    }) : (c = 1E3 * a.context.J.getCurrentTime(), 5E3 > c && c > b.startMs && Gob(a, d), a.addCueRange(b.startMs,
                        b.startMs + 1, b.id,
                        function() {
                            Gob(a, d)
                        }), k4(a))
                }
            }
        },
        Eob = function(a, b) {
            switch (b.type) {
                case "simple":
                    a = a.Ba;
                    var c = b.displayDomain ? {
                        I: "div",
                        S: "iv-card-image-text",
                        xa: b.displayDomain
                    } : void 0;
                    var d = oob(b);
                    c = {
                        I: "div",
                        Ka: ["iv-card"],
                        V: [{
                            I: "a",
                            S: "iv-click-target",
                            X: {
                                href: b.url ? Y3(b.url) || "" : ""
                            },
                            V: [a4(b.imageUrl, c), {
                                I: "div",
                                S: "iv-card-content",
                                V: [$3("h2", void 0, b.title), d]
                            }]
                        }]
                    };
                    c = new g.V(c);
                    b4(a, g.Af("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "collaborator":
                    a = a.Ba;
                    c = {
                        I: "div",
                        Ka: ["iv-card", "iv-card-channel"],
                        V: [{
                            I: "a",
                            Ka: ["iv-click-target"],
                            X: {
                                href: Y3(b.url) || "",
                                "data-ytid": b.channelId
                            },
                            V: [a4(b.profileImageUrl),
                                {
                                    I: "div",
                                    S: "iv-card-content",
                                    V: [mob(b), {
                                        I: "h2",
                                        S: "iv-card-primary-link",
                                        xa: b.title
                                    }, nob(b)]
                                }
                            ]
                        }]
                    };
                    c = new g.V(c);
                    b4(a, g.Af("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "playlist":
                    a = a.Ba;
                    c = {
                        I: "div",
                        Ka: ["iv-card", "iv-card-playlist"],
                        V: [{
                            I: "a",
                            S: "iv-click-target",
                            X: {
                                href: Y3(b.url) || ""
                            },
                            V: [a4(b.xG, {
                                I: "div",
                                S: "iv-card-image-overlay",
                                V: [{
                                    I: "span",
                                    S: "iv-card-playlist-video-count",
                                    xa: b.playlistVideoCount
                                }]
                            }), {
                                I: "div",
                                S: "iv-card-content",
                                V: [mob(b), $3("h2", "iv-card-primary-link", b.title), nob(b)]
                            }]
                        }]
                    };
                    c = new g.V(c);
                    b4(a, g.Af("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "productListing":
                    a = a.Ba;
                    var e = 0 != b.offers.length;
                    c = ["iv-card"];
                    d = "";
                    var f = oob(b);
                    e && (c.push("iv-card-product-listing"), d = "iv-card-primary-link", f = b.offers[0], e = [], f.price && e.push({
                        I: "div",
                        S: "iv-card-offer-price",
                        xa: f.price
                    }), f.merchant && e.push({
                        I: "div",
                        S: "iv-card-offer-merchant",
                        xa: f.merchant
                    }), f = {
                        I: "div",
                        V: e
                    });
                    e = b.url ? Y3(b.url) || "" : "";
                    c = {
                        I: "div",
                        Ka: c,
                        X: {
                            tabindex: "0"
                        },
                        V: [{
                            I: "a",
                            Ka: ["iv-card-image", "iv-click-target"],
                            X: {
                                style: "background-image: url(" +
                                    b.imageUrl + ");",
                                href: e,
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }
                        }, {
                            I: "div",
                            S: "iv-card-content",
                            V: [b.sponsored ? {
                                I: "div",
                                S: "iv-card-sponsored",
                                V: ["Sponsored", {
                                    I: "div",
                                    S: "iv-ad-info-container",
                                    V: [{
                                        I: "div",
                                        S: "iv-ad-info",
                                        xa: "{{adInfo}}"
                                    }, {
                                        I: "div",
                                        S: "iv-ad-info-icon-container",
                                        V: [{
                                            I: "div",
                                            S: "iv-ad-info-icon"
                                        }, {
                                            I: "div",
                                            S: "iv-ad-info-callout"
                                        }]
                                    }]
                                }]
                            } : "", {
                                I: "a",
                                S: "iv-click-target",
                                X: {
                                    href: e
                                },
                                V: [$3("h2", d, b.title), f]
                            }]
                        }]
                    };
                    c = new g.V(c);
                    d = g.Jf("span");
                    g.Xf(d, "You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.");
                    c.Od(d, "adInfo");
                    b4(a, g.Af("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "video":
                    a = a.Ba;
                    d = b.videoDuration ? {
                        I: "span",
                        S: "iv-card-video-duration",
                        xa: b.videoDuration
                    } : void 0;
                    f = b.isLiveNow ? {
                        I: "span",
                        Ka: ["yt-badge", "yt-badge-live"],
                        xa: "LIVE NOW"
                    } : null;
                    e = {
                        I: "div",
                        Ka: ["iv-card", "iv-card-video"],
                        V: [{
                            I: "a",
                            S: "iv-click-target",
                            X: {
                                href: (null == (c = b.url) ? void 0 : Y3(c)) || ""
                            },
                            V: [a4(b.xG, d), {
                                I: "div",
                                S: "iv-card-content",
                                V: [mob(b), $3("h2", "iv-card-primary-link", b.title), nob(b), f]
                            }]
                        }]
                    };
                    c = new g.V(e);
                    b4(a, g.Af("iv-click-target",
                        c.element), b, b.url);
                    b = c;
                    break;
                default:
                    return null
            }
            return b
        },
        Hob = function(a) {
            if (a.j) return "productListing" === a.j.Ef.type;
            if (a.J.L("enable_wn_infocards")) {
                var b;
                return !(null == (b = a.cards) || !b.length) && g.Sr(a.cards, function(c) {
                    return "productListing" === c.Ef.type
                })
            }
            return g.Sr(a.cards, function(c) {
                return "productListing" === c.Ef.type
            })
        },
        k4 = function(a) {
            g.vv(a.J.getRootNode(), "ytp-cards-shopping-active", Hob(a))
        },
        Gob = function(a, b) {
            if (!g.pv(a.J.getRootNode(), "ytp-cards-teaser-shown")) {
                if (a.j !== b) {
                    var c = g.$E(),
                        d = a.j ? a.j.Ef.Jf : a.Jf;
                    c && d && g.rF(c, [d]);
                    a.j = b;
                    k4(a)
                }(c = a.isInitialized && "none" == a.Hb().style.display) || (c = a.context.J.getPlayerState(), d = 0 === c && 0 === a.context.J.getCurrentTime(), c = !(1 === c || 3 === c || d));
                c || b.Ef.teaserDurationMs && a.J.vB(!0, {
                    teaserText: b.Ef.teaserText,
                    durationMs: b.Ef.teaserDurationMs,
                    onClickCommand: b.Ef.onClickCommand
                });
                a.eb.isActive() || ((!a.C || !a.Ga.isActive() && a.Ma) && Fob(a, b), a.eb.start(910 + b.Ef.teaserDurationMs))
            }
        },
        Fob = function(a, b) {
            a.Y.Cb ? (b = new N3([0,
                a.B.scrollTop
            ], [0, b.qN.offsetTop], 600, Mnb), a.context.C.listen(b, "animate", function(c) {
                a.B.scrollTop = c.y
            }), a.context.C.listen(b, "finish", function(c) {
                a.B.scrollTop = c.y
            }), b.play()) : (g.CF(a.Y, !0), a.B.scrollTop = b.qN.offsetTop, g.CF(a.Y, !1))
        },
        l4 = function(a) {
            return a.j && a.j.Ef ? a.j.Ef : a.cards[0] && a.cards[0].Ef ? a.cards[0].Ef : null
        },
        wob = function(a, b) {
            return g.Db(a.cards, function(c) {
                return c.Ef.id === b
            })
        },
        m4 = function(a, b, c) {
            c4.call(this, a, b);
            this.annotation = c;
            this.isActive = !1
        },
        Iob = function(a) {
            var b = a.annotation.data;
            "start_ms" in b && "end_ms" in b && a.addCueRange(b.start_ms, b.end_ms, a.annotation.id, function() {
                a.show()
            }, function() {
                a.hide()
            })
        },
        n4 = function(a, b, c) {
            m4.call(this, a, b, c);
            this.B = null;
            this.N = !1;
            this.C = null;
            this.D = !1;
            this.j = this.K = this.G = null
        },
        Job = function(a, b) {
            var c = void 0 === c ? 0 : c;
            var d = Dnb(b).width;
            g.Es(b, d);
            c = new Knb(b, [d, b.offsetTop], [d - d - c, b.offsetTop], 200, Lnb);
            g.O(a, c);
            a.context.C.listen(c, "begin", function() {
                g.Ks(b, !0)
            });
            c.play()
        },
        Mob = function(a, b) {
            if (b.channel_name) {
                var c = a.createElement({
                        I: "div",
                        Ka: ["iv-branding-context-name"],
                        xa: b.channel_name
                    }),
                    d = a.createElement({
                        I: "div",
                        Ka: ["iv-branding-context-subscribe"]
                    }),
                    e = b.standalone_subscribe_button_data;
                e && (a.j = new g.cW(e.subscribeText, e.subscribeCount, e.unsubscribeText, e.unsubscribeCount, !!e.enabled, !!e.classic, b.channel_id, !!e.subscribed, e.feature, b.session_data.itct, a.context.J, !1), a.j.Ia(d));
                var f = a.createElement({
                        I: "div",
                        Ka: ["iv-branding-context-subscribe-caret"]
                    }),
                    h = a.createElement({
                        I: "div",
                        Ka: ["branding-context-container-inner"]
                    });
                h.appendChild(f);
                h.appendChild(c);
                h.appendChild(d);
                g.Ks(h, !1);
                var l = a.createElement({
                    I: "div",
                    Ka: ["branding-context-container-outer"]
                });
                l.appendChild(h);
                g.ys(l, "right", b.image_width + "px");
                g.Qf(a.Hb(), l);
                a.C = new g.dv(function() {
                    Kob(a, h, l)
                }, 500);
                g.O(a, a.C);
                a.context.j.listen(a.Hb(), "mouseover", function() {
                    Lob(a, h, l, f, b.image_height)
                });
                a.context.j.listen(a.Hb(), "mouseout", function() {
                    a.C.start()
                })
            }
        },
        Lob = function(a, b, c, d, e) {
            a.C.stop();
            if (!a.D) {
                var f = g.Js(b);
                a.j || (b.style.width = g.Ds(f.width, !0), c.style.width = g.Ds(f.width, !0));
                g.ys(d, "top", f.height - Math.max(Math.min(f.height, e) / 2 + 10, 20) + "px");
                g.ys(d, "right", "1px");
                a.D = !0;
                g.Ks(b, !0);
                a.G = new g.dv(function() {
                    g.qv(this.Hb(), "iv-branding-active")
                }, 0, a);
                a.G.start()
            }
        },
        Kob = function(a, b, c) {
            g.tv(a.Hb(), "iv-branding-active");
            a.K = new g.dv(function() {
                g.Ks(b, !1);
                a.j || (c.style.width = g.Ds(0, !0))
            }, 250);
            a.K.start();
            a.D = !1
        },
        Nob = function(a, b, c, d, e, f, h) {
            this.j = a;
            this.C = b;
            this.W = c;
            this.videoData = d;
            this.logger = e;
            this.J = f;
            this.B = h
        },
        Oob = function(a, b, c) {
            m4.call(this, a, b, c);
            var d = this;
            this.Z = this.isCollapsed = this.Y = !1;
            this.K = 5E3;
            this.B = this.C = this.j = this.D = null;
            this.N = this.createElement({
                I: "div",
                Ka: ["iv-promo-contents"]
            });
            this.G = new g.dv(function() {
                d.j.setAttribute("aria-hidden", "true");
                g.Ks(d.C, !1);
                g.Ks(d.B, !0)
            }, 700, this);
            g.O(this, this.G)
        },
        Rob = function(a, b, c) {
            c.stopPropagation();
            Pob(a);
            Qob(a, b);
            a.j.focus()
        },
        Sob = function(a) {
            a.isCollapsed || a.Z || a.D || (g.qv(a.Hb(), "iv-promo-collapsed"), a.isCollapsed = !0, a.G.start())
        },
        Pob = function(a) {
            a.G.stop();
            a.isCollapsed && (g.uv(a.Hb(), ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]), a.isCollapsed = !1, a.j && a.j.removeAttribute("aria-hidden"), g.Ks(a.B, !1), g.Ks(a.C, !0))
        },
        Qob = function(a, b) {
            a.D || (a.D = g.Eg(function() {
                Tob(this);
                Sob(this)
            }, b, a))
        },
        Tob = function(a) {
            a.D && (g.Ta.clearTimeout(a.D), a.D = null)
        },
        Uob = function(a) {
            this.J = a
        },
        yob = function(a, b, c) {
            b && (c ? o4(a, b.map(function(d) {
                return g.Tu(d, c)
            })) : o4(a, b))
        },
        o4 = function(a, b, c, d) {
            var e = 1,
                f = void 0,
                h = -1;
            if (c) {
                var l = !1;
                f = function() {
                    e--;
                    e || l || (clearTimeout(h), l = !0, c())
                };
                h = setTimeout(function() {
                    l = !0;
                    c()
                }, 1E3)
            }
            b = g.u(b || []);
            for (var m = b.next(); !m.done; m = b.next()) m = m.value, e++, g.TD(m, f);
            d && (e++, 0 !== d && a.J.sendVideoStatsEngageEvent(d, f))
        },
        Vob = function(a) {
            g.uV.call(this, a);
            var b = this;
            this.oa = this.Z = !1;
            this.loadNumber = 0;
            this.N = {};
            this.logger = new Uob(this.player);
            this.D = new g.xK(this);
            this.G = this.K = null;
            this.events = new g.xK(this);
            this.Vg = this.Y = this.j = null;
            this.ra = [];
            g.O(this, this.D);
            this.D.T(this.player, "onVideoAreaChange", function() {
                b.publish("onVideoAreaChange")
            });
            this.D.T(this.player, "onHideControls", function() {
                b.publish("onHideControls")
            });
            this.D.T(this.player, "onShowControls", function() {
                b.publish("onShowControls")
            });
            this.D.T(this.player, "resize", function(d) {
                b.publish("resize", d)
            });
            this.D.T(this.player, "presentingplayerstatechange", function(d) {
                b.publish("presentingplayerstatechange", d)
            });
            this.subscribe("presentingplayerstatechange", this.g3, this);
            this.subscribe("resize", this.XJ, this);
            this.player.U().Ma.subscribe("vast_info_card_add", this.k_, this);
            g.O(this, this.events);
            this.Ba = this.createElement({
                I: "div",
                S: "video-custom-annotations"
            });
            this.B = new g.V({
                I: "div",
                Ka: ["ytp-player-content", "ytp-iv-player-content"]
            });
            g.O(this, this.B);
            g.fU(this.player, this.B.element, 4);
            this.B.hide();
            this.C = new g.V({
                I: "div",
                Ka: ["ytp-iv-video-content"]
            });
            g.O(this, this.C);
            a = this.createElement({
                I: "div",
                S: "video-annotations"
            });
            a.appendChild(this.Ba);
            this.C.element.appendChild(a);
            this.fu() && this.load();
            var c = this.createElement({
                I: "style"
            });
            (g.yf("HEAD")[0] || document.body).appendChild(c);
            this.addOnDisposeCallback(function() {
                g.Tf(c)
            });
            if (a = c.sheet) a.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0), a.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
                0), a.insertRule(".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0), a.insertRule(".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0), a.insertRule(".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0), a.insertRule(".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
                0), a.insertRule(".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 0), a.insertRule(".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}",
                0)
        },
        Wob = function(a) {
            a = a.createElement({
                I: "div",
                Ka: ["annotation", "annotation-type-custom"]
            });
            g.Ks(a, !1);
            return a
        },
        Xob = function(a, b) {
            b = !b.isCued() && !g.lG(b, 1024);
            g.CF(a.B, b);
            g.CF(a.C, b)
        },
        Yob = function(a, b, c) {
            a.Z = !0;
            a.G = g.AB(b, c)
        },
        Zob = function(a, b) {
            for (var c = {}, d = g.u(b.attributes), e = d.next(); !e.done; e = d.next()) e = e.value, c[e.name] = e.nodeValue;
            for (d = 0; d < b.childNodes.length; d++)
                if (e = b.childNodes[d], g.bb(e) && 1 == e.nodeType) {
                    if (c[e.tagName]) var f = c[e.tagName];
                    else if ("data" === e.tagName) {
                        0 < e.childNodes.length && (f = e.childNodes[0].nodeValue, c[e.tagName] = "string" === typeof f ? f.trim() : f);
                        continue
                    } else f = [], c[e.tagName] = f;
                    e && "TEXT" === e.tagName ? 1 === e.childNodes.length && 3 === e.childNodes[0].nodeType ? f.push(e.childNodes[0].nodeValue) : f.push("") : e && f.push(Zob(a, e))
                }
            return c
        },
        cpb = function(a) {
            var b = a.player.getVideoData();
            if (b.Ta) {
                var c = a.player.U().Ma.get(b.videoId);
                if (c) {
                    var d = {
                        format: "XML",
                        urlParams: {},
                        method: "POST",
                        withCredentials: !0,
                        onFinish: function(e, f, h) {
                            e = a.loadNumber;
                            f = b.videoId;
                            a.loaded && a.loadNumber === e && a.player.getVideoData().videoId === f && (h = g.rB(h) && h.responseXML ? h.responseXML : null) && $ob(a, h)
                        }
                    };
                    g.HC() && (d.onFinish = apb(a, d.onFinish));
                    d.postParams = {
                        ic_only: "1"
                    };
                    bpb(d, c);
                    a.Z = !0;
                    g.AB(b.Ta, d)
                }
            }
        },
        bpb = function(a, b) {
            a.method = "POST";
            a.postParams = a.postParams || {};
            b.yH && (a.postParams.ic_coll = b.yH);
            b.rN && (a.postParams.ic_xml = b.rN);
            b.oL && (a.postParams.ic_track = b.oL)
        },
        dpb = function(a) {
            var b = new g.V({
                I: "div"
            });
            g.Ks(b.element, !1);
            var c = new tob(a.player, b.element, p4(a));
            g.O(c, b);
            b.Ia(a.B.element);
            c.gG();
            return c
        },
        fpb = function(a, b) {
            var c, d;
            if (b = null == (c = b.getWatchNextResponse()) ? void 0 : null == (d = c.cards) ? void 0 : d.cardCollectionRenderer) a.oa = !0, epb(a, b), b.headerText && a.Vg && (c = g.GF(b.headerText), a.Vg.setAttribute("title", c))
        },
        p4 = function(a) {
            if (!a.Y) {
                var b = new Nnb(a);
                g.O(a, b);
                var c = new g.Kp(a);
                g.O(a, c);
                a.Y = new Nob(b, c, a.player.U(), a.player.getVideoData(), a.logger, a.player, a.tj)
            }
            return a.Y
        },
        $ob = function(a, b) {
            var c = !1,
                d = b.getElementsByTagName("annotations");
            if (d && !(1 > d.length) && (d = d[0].getAttribute("itct"))) {
                var e = g.$E();
                if (e) {
                    var f = g.ZE();
                    f && g.eB(g.Ewa)(void 0, e, f, [g.YE(d)])
                }
            }
            b = b.getElementsByTagName("annotation");
            for (d = 0; d < b.length; d++) {
                f = Zob(a, b[d]);
                e = null;
                try {
                    if (f) {
                        var h = f.id,
                            l = /.+/;
                        var m = "string" === typeof h && null != l && null != h && h.match(l) ? h : "";
                        var n = X3(f.type, gpb),
                            p = X3(f.style, hpb),
                            q = cob(f.data),
                            r = 0 !== q.length ? JSON.parse(q) : {};
                        var t = f.action;
                        f = iob;
                        if (null == t) var v = null;
                        else if (g.ab(t)) {
                            l = [];
                            for (var w = g.u(t), A = w.next(); !A.done; A = w.next()) {
                                var D = f(A.value);
                                D && l.push(D)
                            }
                            v = l
                        } else {
                            var F = f(t);
                            v = F ? [F] : []
                        }
                        e = m && n ? new job(m, n, p, v, r) : null
                    } else e = null
                } catch (ra) {}
                if (e)
                    if ("branding" === e.type || "promotion" === e.type) {
                        f = a;
                        l = e;
                        var G = Wob(f),
                            L = null;
                        switch (l.type) {
                            case "branding":
                                if (f.player.U().Yd) break;
                                f.B.element.appendChild(G);
                                L = new n4(G, p4(f), l);
                                break;
                            case "promotion":
                                g.fU(f.player, G, 4), L = new Oob(G, p4(f), l)
                        }
                        L && L.gG();
                        if (f = L) g.O(a, f), a.N[e.id] = f
                    } else if ("card" === e.type || "drawer" === e.type) {
                    a.j || (a.j = dpb(a), g.O(a, a.j));
                    if ("card" === e.type) {
                        G = a.j;
                        var N = (c = e) && c.data &&
                            c.data.card_type;
                        e = c.data;
                        if (N) switch (f = e.tracking || {}, f = {
                            lY: f.impression,
                            click: f.click,
                            close: f.close,
                            V0: f.teaser_impression,
                            jL: f.teaser_click
                        }, l = e.tracking_params || {}, L = null, N) {
                            case "collaborator":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    dj: f,
                                    gp: l.card ? g.YE(l.card) : null,
                                    Kj: l.teaser ? g.YE(l.teaser) : null,
                                    Jf: l.icon ? g.YE(l.icon) : null,
                                    channelId: e.channel_id,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    profileImageUrl: e.image_url,
                                    title: e.title,
                                    metaInfo: e.meta_info,
                                    url: Z3({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                };
                                h4(G, c);
                                break;
                            case "playlist":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    dj: f,
                                    gp: l.card ? g.YE(l.card) : null,
                                    Kj: l.teaser ? g.YE(l.teaser) : null,
                                    Jf: l.icon ? g.YE(l.icon) : null,
                                    xG: e.image_url,
                                    playlistVideoCount: e.playlist_video_count,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    title: e.title,
                                    metaInfo: e.meta_info,
                                    url: Z3({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                };
                                h4(G, c);
                                break;
                            case "productListing":
                                e.signin_url && (L = Z3({
                                    target: "current",
                                    value: e.signin_url
                                }));
                                N = [];
                                for (var R = e.offers || [], ea = 0; ea < R.length; ea++) N.push(new pob(g.ff(R[ea].merchant),
                                    g.ff(R[ea].price)));
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    dj: f,
                                    gp: l.card ? g.YE(l.card) : null,
                                    Kj: l.teaser ? g.YE(l.teaser) : null,
                                    Jf: l.icon ? g.YE(l.icon) : null,
                                    imageUrl: e.image_url,
                                    displayDomain: e.display_domain ? e.display_domain : null,
                                    showLinkIcon: !!e.show_link_icon,
                                    ZC: e.button_icon_url ? e.button_icon_url : null,
                                    title: e.title,
                                    customMessage: e.custom_message ?
                                        e.custom_message : null,
                                    url: Z3({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    Hpb: L,
                                    Gpb: e.signin_title ? e.signin_title : void 0,
                                    Fpb: e.signin_message ? e.signin_message : void 0,
                                    offers: N,
                                    onClickCommand: null
                                };
                                h4(G, c);
                                break;
                            case "simple":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    dj: f,
                                    gp: l.card ? g.YE(l.card) : null,
                                    Kj: l.teaser ? g.YE(l.teaser) : null,
                                    Jf: l.icon ? g.YE(l.icon) : null,
                                    imageUrl: e.image_url,
                                    displayDomain: e.display_domain ? e.display_domain : null,
                                    showLinkIcon: !!e.show_link_icon,
                                    ZC: e.button_icon_url ? e.button_icon_url : null,
                                    title: e.title,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    url: Z3({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                };
                                h4(G, c);
                                break;
                            case "video":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    dj: f,
                                    gp: l.card ? g.YE(l.card) : null,
                                    Kj: l.teaser ? g.YE(l.teaser) : null,
                                    Jf: l.icon ? g.YE(l.icon) : null,
                                    xG: e.image_url,
                                    videoDuration: e.video_duration || null,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    title: e.title,
                                    metaInfo: e.meta_info,
                                    isLiveNow: !!e.is_live_now,
                                    url: Z3({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                }, h4(G, c)
                        }
                    } else uob(a.j, e);
                    c = !0
                }
            }
            c &&
                (I3(a.player), a.XJ())
        },
        epb = function(a, b) {
            var c = !1;
            a.j || (a.j = dpb(a), g.O(a, a.j));
            for (var d = g.u(b.cards || []), e = d.next(); !e.done; e = d.next()) e = e.value, e.cardRenderer && (vob(a.j, e.cardRenderer), c = !0);
            if (c) {
                var f;
                null != (f = a.player.getVideoData()) && g.uT(f) || (c = a.j, d = b.headerText ? g.GF(b.headerText) : "", g.Xf(c.Eb, d), c.Z && c.Z.setAttribute("title", d), c.context.videoData.eventId && (c.eventId = c.context.videoData.eventId), c.Da = b.trackingParams ? g.YE(b.trackingParams) : null, c.N = b.closeButton.infoCardIconRenderer.trackingParams ? g.YE(b.closeButton.infoCardIconRenderer.trackingParams) :
                    null, c.Jf = b.icon.infoCardIconRenderer.trackingParams ? g.YE(b.icon.infoCardIconRenderer.trackingParams) : null, a.XJ());
                I3(a.player)
            }
        },
        ipb = function(a, b, c, d, e) {
            if (!a.player.U().Yd) {
                var f = [];
                b.navigationEndpoint && g.U(b.navigationEndpoint, g.nT) && g.U(b.navigationEndpoint, g.nT).browseId && f.push(new fob("openUrl", "click", new dob("/channel/" + g.U(b.navigationEndpoint, g.nT).browseId, "new", !0, !0)));
                var h = b.watermark.thumbnails[0];
                d = {
                    channel_name: b.channelName,
                    end_ms: b.endTimeMs,
                    image_height: h.height,
                    image_type: 1,
                    image_url: h.url,
                    image_width: h.width,
                    is_mobile: !1,
                    session_data: {
                        annotation_id: c,
                        ei: e,
                        feature: "iv",
                        itct: b.trackingParams,
                        src_vid: d
                    },
                    start_ms: b.startTimeMs
                };
                if (b.subscribeButton && g.U(b.subscribeButton,
                        g.oT)) {
                    d.channel_id = g.U(b.subscribeButton, g.oT).channelId;
                    var l;
                    b = g.U(b.subscribeButton, g.oT);
                    h = e = null;
                    b.subscribed ? (b.subscriberCountWithUnsubscribeText && (e = g.GF(b.subscriberCountWithUnsubscribeText)), b.subscriberCountText && (h = g.GF(b.subscriberCountText))) : (b.subscriberCountText && (e = g.GF(b.subscriberCountText)), b.subscriberCountWithSubscribeText && (h = g.GF(b.subscriberCountWithSubscribeText)));
                    var m, n = (null == (m = g.U(null == (l = b.signInEndpoint) ? void 0 : l.commandMetadata, g.C2)) ? void 0 : m.url) || "";
                    l = {
                        subscribeText: g.GF(b.unsubscribedButtonText),
                        subscribeCount: e || "",
                        unsubscribeText: g.GF(b.subscribedButtonText),
                        unsubscribeCount: h || "",
                        enabled: b.enabled || !1,
                        classic: !1,
                        subscribed: b.subscribed || !1,
                        feature: "iv",
                        signInUrl: n
                    };
                    d.standalone_subscribe_button_data = l
                }
                f = new job(c, "branding", "branding", f, d);
                l = Wob(a);
                a.B.element.appendChild(l);
                f = new n4(l, p4(a), f);
                f.gG();
                g.O(f, f);
                a.N[c] = f
            }
        },
        apb = function(a, b) {
            return function() {
                var c = g.Ia.apply(0, arguments);
                a.isDisposed() || a.ra.push(g.Wu.Pi(function() {
                    b.apply(null, g.oa(c))
                }))
            }
        },
        jpb = function(a) {
            return "annotation-editor" === a || "live-dashboard" === a
        };
    g.ZT.prototype.vB = g.fa(28, function(a, b) {
        var c = g.LV(this.xb());
        c && c.vB(a, b)
    });
    var K3 = {},
        L3 = null;
    g.lb(N3, g.wv);
    g.k = N3.prototype;
    g.k.getDuration = function() {
        return this.duration
    };
    g.k.play = function(a) {
        if (a || 0 == this.j) this.progress = 0, this.coords = this.B;
        else if (this.isPlaying()) return !1;
        M3(this);
        this.startTime = a = g.kb();
        this.isPaused() && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.D = this.startTime;
        this.progress || this.OJ();
        this.un("play");
        this.isPaused() && this.un("resume");
        this.j = 1;
        var b = g.fb(this);
        b in K3 || (K3[b] = this);
        Gnb();
        Hnb(this, a);
        return !0
    };
    g.k.stop = function(a) {
        M3(this);
        this.j = 0;
        a && (this.progress = 1);
        Inb(this, this.progress);
        this.onStop();
        this.lr()
    };
    g.k.pause = function() {
        this.isPlaying() && (M3(this), this.j = -1, this.un("pause"))
    };
    g.k.va = function() {
        0 == this.j || this.stop(!1);
        this.un("destroy");
        N3.Rf.va.call(this)
    };
    g.k.destroy = function() {
        this.dispose()
    };
    g.k.SL = function() {
        this.un("animate")
    };
    g.k.un = function(a) {
        this.dispatchEvent(new Jnb(a, this))
    };
    g.lb(Jnb, g.zb);
    g.lb(O3, N3);
    O3.prototype.C = function() {};
    O3.prototype.SL = function() {
        this.C();
        O3.Rf.SL.call(this)
    };
    O3.prototype.lr = function() {
        this.C();
        O3.Rf.lr.call(this)
    };
    O3.prototype.OJ = function() {
        this.C();
        O3.Rf.OJ.call(this)
    };
    g.lb(Knb, O3);
    Knb.prototype.C = function() {
        this.element.style.left = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    g.x(Nnb, g.I);
    g.k = Nnb.prototype;
    g.k.listen = function(a, b, c, d) {
        c = (0, g.ib)(c, d || this.B);
        a = g.iC(a, b, c);
        this.j.push(a);
        return a
    };
    g.k.pJ = function(a, b, c, d) {
        c = (0, g.ib)(c, d || this.B);
        a = Enb(a, b, c);
        this.j.push(a);
        return a
    };
    g.k.Sc = function(a) {
        g.jC(a);
        g.Hb(this.j, a)
    };
    g.k.removeAll = function() {
        g.jC(this.j);
        this.j.length = 0
    };
    g.k.va = function() {
        this.removeAll();
        g.I.prototype.va.call(this)
    };
    g.x(Qnb, g.uV);
    g.k = Qnb.prototype;
    g.k.load = function() {
        g.uV.prototype.load.call(this);
        if (!R3(this)) {
            var a = g.EUa(this.player.getVideoData());
            a ? (a = Pnb(a, Rnb(this)), S3(this, a, !1)) : Snb(this)
        }
    };
    g.k.unload = function() {
        S3(this, null);
        this.C && (this.C.abort(), this.C = null);
        g.uV.prototype.unload.call(this)
    };
    g.k.Oh = function(a, b) {
        return R3(this) ? "loadCustomEndscreenRenderer" === a ? (a = Pnb(b, "new"), S3(this, a), !0) : null : null
    };
    g.k.getOptions = function() {
        return R3(this) ? ["loadCustomEndscreenRenderer"] : []
    };
    g.k.Vb = function() {
        if (this.endscreen && this.endscreen.elements) {
            var a = this.player.getVideoContentRect();
            if (a && 0 !== a.width && 0 !== a.height) {
                var b = this.player.getPlayerSize();
                if (b && 0 !== b.width && 0 !== b.height) {
                    var c = a.width / a.height;
                    var d = 0;
                    for (var e = -1, f = 0; f < kpb.length; f++) {
                        var h = Math.abs(b.width - kpb[f]);
                        if (-1 === e || d >= h) e = f, d = h
                    }
                    d = lpb[e];
                    this.B && g.ys(this.B.element, "outline-width", Math.max(b.width, b.height) + "px");
                    for (b = 0; b < this.endscreen.elements.length; ++b)
                        if (f = this.endscreen.elements[b].id, e = this.j[f],
                            h = this.G[f], e && h) {
                            var l = h.width * c / h.aspectRatio,
                                m = Math.round(h.width * a.width);
                            f = Math.round(l * a.height);
                            var n = a.left + Math.round(h.left * a.width),
                                p = a.top + Math.round(h.top * a.height);
                            g.Is(e.element, m, f);
                            g.Es(e.element, n, p);
                            g.uv(e.element, mpb);
                            256 < m || 256 < f ? g.qv(e.element, "ytp-ce-large-round") : 96 < m || 96 < f ? g.qv(e.element, "ytp-ce-medium-round") : g.qv(e.element, "ytp-ce-small-round");
                            g.uv(e.element, npb);
                            m = h.left + h.width / 2;
                            h = h.top + l / 2;
                            g.qv(e.element, .5 >= m && .5 >= h ? "ytp-ce-top-left-quad" : .5 < m && .5 >= h ? "ytp-ce-top-right-quad" :
                                .5 >= m && .5 < h ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
                            g.uv(e.element, lpb);
                            g.qv(e.element, d);
                            (e = g.zf(document, "div", "ytp-ce-expanding-overlay-body", e.element)[0]) && g.ys(e, "height", f + "px")
                        }
                }
            }
        }
    };
    g.k.onCueRangeEnter = function(a) {
        if (this.endscreen)
            if ("ytp-ce-in-endscreen" === a.getId()) W3(this, this.endscreen.impressionUrls), (a = g.$E()) && this.endscreen.visualElement && g.pF(a, this.endscreen.visualElement);
            else {
                a = a.getId().substring(15);
                var b = this.j[a],
                    c = this.G[a];
                g.qv(b.element, "ytp-ce-element-show");
                b.element.removeAttribute("aria-hidden");
                b = this.player.getRootNode();
                g.qv(b, "ytp-ce-shown");
                W3(this, c.impressionUrls);
                (b = g.$E()) && g.pF(b, c.visualElement);
                this.player.U().N && this.player.gb("endscreenelementshown",
                    a)
            }
    };
    g.k.onCueRangeExit = function(a) {
        if ("ytp-ce-in-endscreen" !== a.getId()) {
            a = a.getId().substring(15);
            var b = this.j[a];
            g.tv(b.element, "ytp-ce-element-show");
            b.element.setAttribute("aria-hidden", "true");
            b = this.player.getRootNode();
            g.tv(b, "ytp-ce-shown");
            this.player.U().N && this.player.gb("endscreenelementhidden", a)
        }
    };
    g.k.Fba = function(a) {
        var b = this;
        a.target === window && (new g.dv(function() {
            for (var c = g.u(Object.values(b.j)), d = c.next(); !d.done; d = c.next()) g.uv(d.value.element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"])
        }, 0)).start()
    };
    var kpb = [346, 426, 470, 506, 570, 640, 853, 1280, 1920],
        lpb = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" "),
        npb = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"],
        mpb = ["ytp-ce-small-round", "ytp-ce-medium-round", "ytp-ce-large-round"];
    var eob = {
        jva: "current",
        kWa: "new"
    };
    var gob = {
            CLOSE: "close",
            b_a: "openUrl",
            SUBSCRIBE: "subscribe"
        },
        hob = {
            tta: "click",
            CLOSE: "close",
            jHa: "hidden",
            d5a: "rollOut",
            e5a: "rollOver",
            T6a: "shown"
        };
    job.prototype.Qe = function() {
        var a = kob(this, function(b) {
            return "openUrl" === b.type && null != b.url
        });
        return a ? a.url : null
    };
    var hpb = {
            Nna: "anchored",
            v2: "branding",
            CHANNEL: "channel",
            Zua: "cta",
            mHa: "highlightText",
            qLa: "label",
            PLAYLIST: "playlist",
            POPUP: "popup",
            T9a: "speech",
            SUBSCRIBE: "subscribe",
            Jcb: "title",
            VIDEO: "video",
            lkb: "website"
        },
        gpb = {
            v2: "branding",
            Wqa: "card",
            jxa: "drawer",
            lHa: "highlight",
            CRa: "marker",
            p3a: "promotion",
            TEXT: "text",
            Rlb: "widget"
        };
    g.x(c4, g.I);
    g.k = c4.prototype;
    g.k.addCueRange = function(a, b, c, d, e) {
        a = new g.FJ(a, b, {
            id: c,
            namespace: "annotations_module"
        });
        d && this.Va.set(a, d);
        e && this.Ya.set(a, e);
        this.context.J.qf([a])
    };
    g.k.gG = function() {
        this.context.B.subscribe("resize", this.tH, this)
    };
    g.k.Hb = function() {
        return this.element
    };
    g.k.TL = function(a, b, c, d, e, f) {
        if (this.rb) return !1;
        f && (f.stopPropagation(), f.preventDefault());
        this.navigate(a, c, d, e);
        return !1
    };
    g.k.show = function() {};
    g.k.hide = function() {};
    g.k.destroy = function() {
        g.Tf(this.Hb())
    };
    g.k.tH = function() {};
    g.k.navigate = function(a, b, c, d) {
        var e = this,
            f = Y3(a);
        if (f) {
            var h = rob(f, a.target),
                l = function() {
                    a.j && e.context.J.pauseVideo();
                    var m = e.context.videoData.Mf || !1,
                        n = g.jB(f || "");
                    m && n && (n.v || n.list) ? e.context.J.Ko(n.v, b, n.list, !1) : g.MG(f || "", "current" === h ? "_top" : void 0, b)
                };
            "new" === h && (l(), l = null);
            o4(this.context.logger, c, l, d);
            qob(f) || (c = g.$E(), d = b.itct, c && d && g.sF(c, g.YE(d)))
        }
    };
    g.k.va = function() {
        this.Va.clear();
        this.Ya.clear();
        g.I.prototype.va.call(this)
    };
    g.k.createElement = function(a) {
        a = new g.V(a);
        g.O(this, a);
        return a.element
    };
    g.x(tob, c4);
    g.k = tob.prototype;
    g.k.jt = function() {
        this.ra && h4(this, this.ra)
    };
    g.k.isAvailable = function() {
        var a;
        if (a = !!this.cards.length)(a = this.J.getRootNode()) ? (a = g.Js(a), a = 173 < a.width && 173 < a.height) : a = !1;
        return a
    };
    g.k.tH = function() {
        var a = this.isAvailable();
        g.Ks(this.Hb(), a);
        g.vv(this.context.J.getRootNode(), g.eZ.IV_DRAWER_ENABLED, a);
        I3(this.J)
    };
    g.k.destroy = function() {
        this.J.vB(!1);
        try {
            this.J.getRootNode().removeChild(this.D)
        } catch (a) {}
        g.hE(this.oa);
        g.oC(this.Qa);
        this.Ta && this.Ta.dispose();
        this.G && this.G.dispose();
        c4.prototype.destroy.call(this)
    };
    g.k.findLastIndex = function(a) {
        if (0 === this.cards.length) return 0;
        var b = g.Eb(this.cards, function(c) {
            return a.Ef.startMs > c.Ef.startMs || a.Ef.startMs === c.Ef.startMs && a.Ef.timestamp >= c.Ef.timestamp ? !0 : !1
        });
        return -1 === b ? 0 : b + 1
    };
    g.k.r6 = function() {
        if (this.C) {
            o4(this.context.logger, l4(this).dj.close);
            var a = g.$E();
            a && this.N && g.sF(a, this.N);
            g4(this)
        }
    };
    g.k.O6 = function() {
        g.vv(this.D, "iv-drawer-scrolled", 0 < this.B.scrollTop)
    };
    g.k.m9 = function() {
        var a = g.$E(),
            b = l4(this);
        b = b ? b.Jf : this.Jf;
        a && b && g.qF(a, [b])
    };
    g.k.l9 = function() {
        var a = g.$E(),
            b = l4(this);
        b = b ? b.Jf : this.Jf;
        a && b && g.rF(a, [b])
    };
    g.k.f3 = function() {
        var a = l4(this);
        o4(this.context.logger, a.dj.V0);
        var b = g.$E();
        if (b && a)
            if (this.J.L("web_infocards_teaser_show_logging_fix")) {
                var c = [];
                a.Kj && c.push(a.Kj);
                a.Jf && c.push(a.Jf);
                0 < c.length && g.qF(b, c)
            } else g.qF(b, [a.Kj, a.Jf])
    };
    g.k.n9 = function() {
        var a = g.$E(),
            b = l4(this);
        a && b && g.rF(a, [b.Kj])
    };
    g.k.e3 = function(a) {
        var b = l4(this),
            c = g.$E();
        this.j ? a ? (a = this.context.logger, o4(a, b.dj.jL), a.J.sendVideoStatsEngageEvent(4, void 0), c && b.Kj && g.sF(c, b.Kj)) : (a = this.context.logger, o4(a, b.dj.jL), a.J.sendVideoStatsEngageEvent(4, void 0), c && b.Jf && g.sF(c, b.Jf)) : (a = this.context.logger, o4(a, b.dj.jL), a.J.sendVideoStatsEngageEvent(4, void 0), c && this.Jf && g.sF(c, this.Jf))
    };
    g.x(m4, c4);
    m4.prototype.gG = function() {
        c4.prototype.gG.call(this);
        Iob(this)
    };
    m4.prototype.show = function() {
        c4.prototype.show.call(this);
        var a = g.$E(),
            b = this.annotation.data;
        a && b && (b = b.session_data) && g.qF(a, [g.YE(b.itct)])
    };
    m4.prototype.hide = function() {
        c4.prototype.hide.call(this);
        var a = g.$E(),
            b = this.annotation.data;
        a && b && (b = b.session_data) && g.rF(a, [g.YE(b.itct)])
    };
    g.x(n4, m4);
    n4.prototype.tx = function() {
        g.qv(this.Hb(), "iv-branding");
        var a = this.annotation.data;
        this.B = this.createElement({
            I: "img",
            Ka: ["branding-img", "iv-click-target"],
            X: {
                "aria-label": "Channel watermark",
                src: a.image_url,
                width: a.image_width,
                height: a.image_height
            }
        });
        g.Ks(this.B, !1);
        var b = this.createElement({
            I: "button",
            Ka: ["branding-img-container", "ytp-button"]
        });
        b.appendChild(this.B);
        this.Hb().appendChild(b);
        var c = this.annotation.Qe();
        c && d4(this, b, c, this.annotation.id, a.session_data);
        Mob(this, a)
    };
    n4.prototype.show = function() {
        if (!this.isActive && (m4.prototype.show.call(this), this.N || (this.tx(), this.N = !0), g.Ks(this.Hb(), !0), this.isActive = !0, this.B)) {
            try {
                Job(this, this.B)
            } catch (a) {}
            g.qv(this.context.J.getRootNode(), "ytp-branding-shown")
        }
    };
    n4.prototype.hide = function() {
        this.isActive && (m4.prototype.hide.call(this), g.Ks(this.Hb(), !1), this.isActive = !1, g.tv(this.context.J.getRootNode(), "ytp-branding-shown"))
    };
    n4.prototype.destroy = function() {
        this.j && (this.j.dispose(), this.j = null);
        m4.prototype.destroy.call(this)
    };
    g.x(Oob, m4);
    g.k = Oob.prototype;
    g.k.tx = function() {
        var a = this,
            b = this.annotation.data;
        if ("cta" === this.annotation.style) var c = 6;
        else if ("video" === this.annotation.style || "playlist" === this.annotation.style) c = 7;
        this.K = b.collapsedelay_ms || this.K;
        var d = ["iv-promo", "iv-promo-inactive"];
        this.Hb().setAttribute("aria-hidden", "true");
        this.Hb().setAttribute("aria-label", "Promotion");
        this.Hb().tabIndex = 0;
        var e = this.annotation.Qe(),
            f = b.image_url;
        if (f) {
            var h = this.createElement({
                I: "div",
                Ka: ["iv-promo-img", "iv-click-target"]
            });
            f = this.createElement({
                I: "img",
                X: {
                    src: f,
                    "aria-hidden": "true"
                }
            });
            h.appendChild(f);
            b.video_duration && !b.is_live ? (f = this.createElement({
                I: "span",
                S: "iv-promo-video-duration",
                xa: b.video_duration
            }), h.appendChild(f)) : b.playlist_length && (f = this.createElement({
                I: "span",
                S: "iv-promo-playlist-length",
                xa: b.playlist_length.toString()
            }), h.appendChild(f));
            e && d4(this, h, e, this.annotation.id, b.session_data, void 0, c)
        }
        e ? (f = this.createElement({
            I: "a",
            S: "iv-promo-txt"
        }), g.Re(f, Y3(e)), this.j = f) : this.j = this.createElement({
            I: "div",
            S: "iv-promo-txt"
        });
        switch (this.annotation.style) {
            case "cta":
            case "website":
                var l =
                    this.createElement({
                        I: "p",
                        V: [{
                            I: "strong",
                            xa: b.text_line_1
                        }]
                    });
                var m = this.createElement({
                    I: "p",
                    V: [{
                        I: "span",
                        S: "iv-promo-link",
                        xa: b.text_line_2
                    }]
                });
                if (f = b.text_line_3) {
                    d.push("iv-promo-website-card-cta-redesign");
                    var n = this.createElement({
                        I: "button",
                        Ka: ["iv-promo-round-expand-icon", "ytp-button"]
                    });
                    f = this.createElement({
                        I: "button",
                        Ka: ["iv-button", "iv-promo-button"],
                        V: [{
                            I: "span",
                            S: "iv-button-content",
                            xa: f
                        }]
                    });
                    var p = this.createElement({
                        I: "div",
                        S: "iv-promo-button-container"
                    });
                    p.appendChild(f);
                    e && d4(this,
                        this.Hb(), e, this.annotation.id, b.session_data, void 0, c)
                }
                g.qv(this.j, "iv-click-target");
                e && d4(this, this.j, e, this.annotation.id, b.session_data, void 0, c);
                break;
            case "playlist":
            case "video":
                l = this.createElement({
                    I: "p",
                    V: [{
                        I: "span",
                        xa: b.text_line_1
                    }]
                }), m = this.createElement({
                    I: "p",
                    V: [{
                        I: "strong",
                        xa: b.text_line_2
                    }]
                }), b.is_live && (l = m, m = this.createElement({
                    I: "span",
                    Ka: ["yt-badge", "iv-promo-badge-live"],
                    xa: "LIVE NOW"
                })), g.qv(this.j, "iv-click-target"), e && d4(this, this.j, e, this.annotation.id, b.session_data, void 0,
                    c), d.push("iv-promo-video")
        }
        l && this.j.appendChild(l);
        m && this.j.appendChild(m);
        this.N.appendChild(this.j);
        p && this.N.appendChild(p);
        c = this.createElement({
            I: "div",
            S: "iv-promo-actions"
        });
        this.B = this.createElement({
            I: "button",
            Ka: ["iv-promo-expand", "ytp-button"]
        });
        this.B.title = "Expand";
        this.context.j.listen(this.B, "click", function(q) {
            Rob(a, 5E3, q)
        });
        c.appendChild(this.B);
        g.Ks(this.B, !1);
        this.context.j.listen(this.Hb(), "mouseover", this.h8, this);
        this.context.j.listen(this.Hb(), "mouseout", this.g8, this);
        this.context.j.listen(this.Hb(), "touchend", function(q) {
            Rob(a, 5E3, q)
        });
        this.C = this.createElement({
            I: "button",
            Ka: ["iv-promo-close", "ytp-button"]
        });
        this.C.title = "Close";
        this.context.j.listen(this.C, "click", "cta" === this.annotation.style && b.text_line_3 ? this.c8 : this.b8, this);
        c.appendChild(this.C);
        g.rv(this.Hb(), d);
        h && (g.Qf(this.Hb(), h), n && h.appendChild(n));
        g.Qf(this.Hb(), this.N);
        g.Qf(this.Hb(), c)
    };
    g.k.show = function() {
        this.isActive || (m4.prototype.show.call(this), this.Y || (this.tx(), this.Y = !0), g.Ks(this.Hb(), !0), g.Eg(function() {
            g.tv(this.Hb(), "iv-promo-inactive")
        }, 100, this), this.Hb().removeAttribute("aria-hidden"), this.isActive = !0, Tob(this), Pob(this), Qob(this, this.K))
    };
    g.k.hide = function() {
        this.isActive && (g.qv(this.Hb(), "iv-promo-inactive"), this.isActive = !1, this.Hb().setAttribute("aria-hidden", "true"))
    };
    g.k.TL = function(a, b, c, d, e, f) {
        return this.isCollapsed ? !1 : m4.prototype.TL.call(this, a, b, c, d, e, f)
    };
    g.k.h8 = function(a) {
        this.Z = !0;
        Rob(this, 500, a)
    };
    g.k.g8 = function() {
        this.Z = !1;
        Sob(this)
    };
    g.k.b8 = function(a) {
        a.stopPropagation();
        this.hide()
    };
    g.k.c8 = function(a) {
        a.stopPropagation();
        Tob(this);
        this.isCollapsed = !0;
        g.qv(this.Hb(), "iv-promo-collapsed-no-delay");
        this.G.start()
    };
    g.k.destroy = function() {
        this.G.dispose();
        m4.prototype.destroy.call(this)
    };
    g.x(Vob, g.uV);
    g.k = Vob.prototype;
    g.k.Oh = function(a, b) {
        if (!jpb(this.player.U().playerStyle)) return null;
        switch (a) {
            case "loadCustomAnnotationsXml":
                return (a = g.i2(b)) && $ob(this, a), !0;
            case "removeCustomAnnotationById":
                return b && this.j && (xob(this.j, b), I3(this.player)), !0
        }
        return null
    };
    g.k.getOptions = function() {
        return jpb(this.player.U().playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : []
    };
    g.k.fu = function() {
        var a = this.player.U(),
            b = this.player.getVideoData(),
            c = a.annotationsLoadPolicy || b.annotationsLoadPolicy;
        return g.HT(b) || g.RT(this.player.app) ? !1 : 1 === c && !b.KV || a.Ma.get(b.videoId) || g.vT(b) || g.FUa(b) ? !0 : !1
    };
    g.k.XJ = function() {
        if (this.C) {
            var a = this.player.kb().getVideoContentRect(!0);
            g.Is(this.C.element, a.width, a.height);
            g.Es(this.C.element, a.left, a.top)
        }
        if (this.j) {
            var b = this.player.Dn();
            a = this.j;
            b = b.width;
            g.vv(a.D, "iv-drawer-small", 426 >= b);
            g.vv(a.D, "iv-drawer-big", 1280 <= b)
        }
    };
    g.k.g3 = function(a) {
        Xob(this, a.state);
        g.lG(a.state, 2) && (this.Jk() && this.Yo() && 2 !== this.player.getPresentingPlayerType() && this.wB(!1), this.vB(!1))
    };
    g.k.load = function() {
        function a(h) {
            var l = b.loadNumber;
            b.G = null;
            b.loaded && b.loadNumber === l && b.player.getVideoData().videoId === d && (h = g.rB(h) && h.responseXML ? h.responseXML : null) && ($ob(b, h), g.qv(b.player.getRootNode(), "iv-module-loaded"))
        }
        var b = this;
        g.uV.prototype.load.call(this);
        Xob(this, this.player.Tb());
        this.loadNumber++;
        var c = this.player.getVideoData(),
            d = c.videoId;
        g.HC() && (a = apb(this, a));
        var e = {
            format: "XML",
            onFinish: a,
            onError: function() {
                b.G = null
            },
            urlParams: {}
        };
        c.isPharma && (e.urlParams.pharma = "1");
        e.method = "POST";
        e.withCredentials = !0;
        var f = this.player.U().Ma.get(d);
        f && bpb(e, f);
        f = f && (f.rN || f.yH);
        if (!c.Iu || f) c.Ta ? Yob(this, c.Ta, e) : (this.K = function() {
            if (!b.Z) b.onVideoDataChange(e);
            var h = b.player.getVideoData();
            (null == h ? 0 : g.uT(h)) && !b.oa && fpb(b, h)
        }, this.player.addEventListener("videodatachange", this.K));
        g.fU(this.player, this.C.element, 4);
        this.XJ();
        (f = g.vT(c)) && epb(this, f);
        (f = g.FUa(c)) && f.featuredChannel && ipb(this, f.featuredChannel, f.annotationId || "branding", c.videoId || null, c.eventId || null);
        this.Vg = g.Bf("ytp-cards-button", this.player.getRootNode());
        g.uT(c) && fpb(this, c)
    };
    g.k.onVideoDataChange = function(a) {
        var b = this.player.getVideoData();
        b.Ta && Yob(this, b.Ta, a)
    };
    g.k.unload = function() {
        this.player.wf("annotations_module");
        for (var a = g.u(Object.keys(this.N)), b = a.next(); !b.done; b = a.next()) this.N[b.value].destroy();
        this.Y = null;
        this.j && (this.j.destroy(), this.j = null, I3(this.player));
        this.Z = !1;
        this.G && (this.G.abort(), this.G = null);
        this.oa = !1;
        this.N = {};
        this.B.hide();
        g.uV.prototype.unload.call(this);
        this.C.detach();
        this.K && (this.player.removeEventListener("videodatachange", this.K), this.K = null)
    };
    g.k.k_ = function(a) {
        a === this.player.getVideoData().videoId && (this.loaded ? cpb(this) : this.load())
    };
    g.k.Jk = function() {
        var a;
        return (null == (a = this.j) ? void 0 : a.isAvailable()) || this.oa
    };
    g.k.Yo = function() {
        return !!this.j && this.j.C
    };
    g.k.wB = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        this.Jk();
        this.j && (a ? c ? f4(this.j, c, b) : f4(this.j, "YOUTUBE_DRAWER_AUTO_OPEN", b) : g4(this.j))
    };
    g.k.vB = function(a, b) {
        this.player.publish(a ? "cardsteasershow" : "cardsteaserhide", b)
    };
    g.k.va = function() {
        this.player.U().Ma.unsubscribe("vast_info_card_add", this.k_, this);
        g.tv(this.player.getRootNode(), g.eZ.IV_DRAWER_OPEN);
        for (var a = this.ra, b = g.Wu, c = 0, d = a.length; c < d; c++) b.Qj(a[c]);
        this.ra.length = 0;
        g.uV.prototype.va.call(this)
    };
    g.k.createElement = function(a) {
        a = new g.V(a);
        g.O(this, a);
        return a.element
    };
    g.tV("annotations_module", Vob);
    g.tV("creatorendscreen", Qnb);
})(_yt_player);
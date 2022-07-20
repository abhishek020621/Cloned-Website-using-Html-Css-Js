(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        316: function(t, e, a) {
            "use strict";
            e.a = function() {
                return !!(window.Sitecore && Sitecore.WebEditSettings && Sitecore.WebEditSettings.editing)
            }
        },
        320: function(t, e, a) {
            "use strict";
            e.a = {
                add: function() {
                    document.body.classList.add("no-scroll")
                },
                remove: function() {
                    document.body.classList.remove("no-scroll")
                },
                toggle: function() {
                    document.body.classList.toggle("no-scroll")
                }
            }
        },
        335: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, "default", (function() {
                return f
            }));
            var i = a(91),
                s = a.n(i),
                n = a(46),
                o = a.n(n),
                c = a(319),
                l = a(316),
                d = a(30),
                r = a.n(d),
                u = a(345),
                v = {
                    name: "FeaturedPanel",
                    components: {
                        "video-modal": a(349).a
                    },
                    data: function() {
                        return {
                            isInit: !1,
                            activeTab: 0,
                            lastTabIndex: 0
                        }
                    },
                    mounted: function() {
                        var t = r()(this.$refs.tablist.querySelectorAll("[data-featured-tab]")),
                            e = t[t.length - 1].getAttribute("data-featured-tab");
                        this.lastTabIndex = parseInt(e), this.isInit = !0
                    },
                    methods: {
                        activateTab: function(t) {
                            var e = this;
                            this.activeTab = t, this.$nextTick((function() {
                                e.$refs["tab-".concat(t)].focus()
                            }))
                        },
                        handleKeyDown: function(t) {
                            switch (t.keyCode) {
                                case u.a.end:
                                    t.preventDefault(), this.activateTab(this.lastTabIndex);
                                    break;
                                case u.a.home:
                                    t.preventDefault(), this.activateTab(0);
                                    break;
                                case u.a.left:
                                    this.activeTab > 0 ? this.activateTab(this.activeTab - 1) : this.activateTab(this.lastTabIndex);
                                    break;
                                case u.a.right:
                                    this.activeTab === this.lastTabIndex ? this.activateTab(0) : this.activateTab(this.activeTab + 1)
                            }
                        }
                    }
                },
                m = a(314),
                p = Object(m.a)(v, void 0, void 0, !1, null, null, null).exports,
                f = function t(e) {
                    var a = this;
                    s()(this, t), o()(this, "createVueInstance", (function() {
                        return new c.default({
                            el: a.context,
                            name: "FeaturedPanelBinding",
                            components: {
                                "featured-panel": p
                            }
                        })
                    })), this.context = e, Object(l.a)() || this.createVueInstance()
                }
        },
        345: function(t, e, a) {
            "use strict";
            e.a = {
                tab: 9,
                end: 35,
                home: 36,
                left: 37,
                right: 39
            }
        },
        349: function(t, e, a) {
            "use strict";
            var i = a(320),
                s = {
                    name: "VideoModal",
                    props: {
                        additionalClasses: {
                            type: String,
                            default: ""
                        },
                        closeText: {
                            type: String,
                            default: "Close"
                        },
                        imageAlt: {
                            type: String,
                            default: ""
                        },
                        imageUrl: {
                            type: String,
                            default: "",
                            required: !0
                        },
                        videoHelpText: {
                            type: String,
                            default: ""
                        },
                        vimeoId: {
                            type: String,
                            default: "",
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            isOpen: !1,
                            videoUrl: "https://player.vimeo.com/video/".concat(this.vimeoId, "?title=0&byline=0&portrait=0&badge=0$color=f4364c")
                        }
                    },
                    watch: {
                        isOpen: function() {
                            this.isOpen ? i.a.add() : i.a.remove()
                        }
                    },
                    mounted: function() {
                        if (!document.querySelector("data-vimeo-script")) {
                            var t = document.createElement("script");
                            t.setAttribute("data-vimeo-api", "true"), t.setAttribute("src", "https://player.vimeo.com/api/player.js"), document.body.appendChild(t)
                        }
                    },
                    methods: {
                        closeModal: function() {
                            this.isOpen = !1
                        },
                        openModal: function() {
                            this.isOpen = !0
                        }
                    }
                },
                n = a(314),
                o = Object(n.a)(s, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "video-modal",
                        class: t.additionalClasses,
                        on: {
                            keydown: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.closeModal(e)
                            }
                        }
                    }, [a("button", {
                        staticClass: "video-modal__trigger",
                        attrs: {
                            "aria-expanded": t.isOpen.toString()
                        },
                        on: {
                            click: t.openModal
                        }
                    }, [a("img", {
                        staticClass: "video-modal__trigger-image",
                        attrs: {
                            src: t.imageUrl,
                            alt: t.imageAlt,
                            loading: "lazy"
                        }
                    }), t._v(" "), a("span", {
                        staticClass: "video-modal__trigger-text"
                    }, [t._v("\n      " + t._s(t.videoHelpText) + "\n    ")]), t._v(" "), a("svg", {
                        staticClass: "icon video-modal__trigger-icon",
                        attrs: {
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true"
                        }
                    }, [a("use", {
                        attrs: {
                            "xlink:href": "/dist/icons/icons.svg#play"
                        }
                    })])]), t._v(" "), a("div", {
                        staticClass: "media-modal",
                        class: {
                            "media-modal--open": t.isOpen
                        },
                        on: {
                            click: t.closeModal
                        }
                    }, [a("div", {
                        staticClass: "media-modal__modal-inner",
                        on: {
                            click: t.closeModal
                        }
                    }, [a("div", {
                        staticClass: "media-modal__video-wrapper"
                    }, [a("button", {
                        staticClass: "media-modal__close",
                        on: {
                            click: t.closeModal
                        }
                    }, [a("span", {
                        staticClass: "media-modal__close-text"
                    }, [t._v("\n            " + t._s(t.closeText) + "\n          ")]), t._v(" "), a("svg", {
                        staticClass: "icon",
                        attrs: {
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true"
                        }
                    }, [a("use", {
                        attrs: {
                            "xlink:href": "/dist/icons/icons.svg#cross"
                        }
                    })])]), t._v(" "), t.isOpen ? a("iframe", {
                        staticClass: "media-modal__video",
                        attrs: {
                            src: t.videoUrl,
                            allow: "autoplay; fullscreen",
                            allowfullscreen: ""
                        }
                    }) : t._e()])])])])
                }), [], !1, null, null, null);
            e.a = o.exports
        }
    }
]);
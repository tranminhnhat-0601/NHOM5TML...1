(window.webpackJsonp = window.webpackJsonp || []).push([
    [75], { 446: function(t, e, l) { t.exports = { home: "csm-e27a", cta: "csm-9c7f", btn: "csm-5827", service: "csm-e1ba", variant: "csm-bb83", name: "csm-3a92" } }, 491: function(t, e, l) { "use strict"; var c = l(446),
                n = l.n(c);
            l.d(e, "default", (function() { return n.a })) }, 507: function(t, e, l) { "use strict";
            l.r(e);
            l(41), l(73), l(50); var c = l(491),
                n = l(26); var component = Object(n.a)({}, (function() { var t = this,
                    e = t._self._c; return e("div", [e("div", { staticClass: "csm-bg-light rounded", class: t.$style.home }, [e("div", { staticClass: "p-4" }, [e("h2", { staticClass: "mt-0 mb-2 csm-text fw-bold" }, [t._v(t._s(t.$setting.title))]), t._v(" "), t.$setting.description ? e("p", { staticClass: "text-muted fs-15" }, [t._v(t._s(t.$setting.description))]) : t._e(), t._v(" "), e("div", { class: t.$style.cta }, [e("nuxt-link", { staticClass: "btn btn-main px-5 py-2", class: t.$style.btn, attrs: { to: "/dang-nhap" } }, [e("Icon", { staticClass: "fal fa-user-circle" }), e("span", { staticClass: "ps-2" }, [t._v("Đăng nhập")])], 1), t._v(" "), e("span", { staticClass: "px-3 py-2 py-lg-0 fs-13 text-muted d-lg-inline d-block" }, [t._v("hoặc")]), t._v(" "), e("nuxt-link", { staticClass: "btn btn-light csm-border-dashed fw-bold csm-text px-5 py-2", class: t.$style.btn, attrs: { to: "/dang-ky" } }, [e("Icon", { staticClass: "fad fa-user-plus" }), e("span", { staticClass: "ps-2" }, [t._v("Tạo tài khoản mới")])], 1)], 1), t._v(" "), t.$setting.keywords ? e("div", { staticClass: "keywords pt-3 fs-14" }, [e("span", { staticClass: "text-muted" }, [e("Icon", { staticClass: "fal fa-search" }), e("span", { staticClass: "ps-1" }, [t._v("Từ khóa:")])], 1), t._v(" "), e("p", { staticClass: "d-inline csm-text" }, [t._v(t._s(t.$setting.keywords))])]) : t._e()])]), t._v(" "), e("div", { staticClass: "pt-4" }, [t._m(0), t._v(" "), e("div", { staticClass: "row gx-4" }, t._l(t.$store.state.services, (function(l, c) { return e("div", { staticClass: "col-lg-2 col-sm-4 col-6" }, [e("nuxt-link", { class: t.$style.service, style: { "--csm-provider": l.color, "--csm-provider-rgb": t.hex2rgba(l.color) }, attrs: { to: "/dich-vu-" + t.get_only_provider(c) } }, [e("csm-box", { staticClass: "mb-3 p-4 text-center", class: t.$style.variant }, [e("div", { staticClass: "mb-3" }, [e("img", { directives: [{ name: "lazy-load", rawName: "v-lazy-load" }], staticClass: "provider", attrs: { "data-src": t.get_service_icon(c, { width: 50 }), height: "40", alt: "" } })]), t._v(" "), e("span", { class: t.$style.name }, [t._v(t._s(l.name))])])], 1)], 1) })), 0)]), t._v(" "), e("csm-support")], 1) }), [function() { var t = this._self._c; return t("h4", { staticClass: "fw-bold mb-4 text-center" }, [t("span", { staticClass: "d-inline-block pb-2 border-bottom", staticStyle: { "--csm-border-width": "5px" } }, [this._v("Nền tảng cung cấp")])]) }], !1, (function(t) { this.$style = c.default.locals || c.default }), null, null);
            e.default = component.exports;
            installComponents(component, { Icon: l(113).default, CsmBox: l(422).default, CsmSupport: l(468).default }) }, 548: function(t, e, l) { "use strict";
            l.r(e); var c = l(26),
                component = Object(c.a)({}, (function() { var t = this._self._c; return t("div", [this.is_logged ? t("csm-dashboard") : t("csm-home")], 1) }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, { CsmHome: l(507).default, CsmDashboard: l(516).default }) } }
]);
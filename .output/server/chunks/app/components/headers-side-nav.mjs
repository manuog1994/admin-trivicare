function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var headersSideNav$1 = {};

var ids = headersSideNav$1.ids = [2];
var modules = headersSideNav$1.modules = {
  118: function(module, exports2) {
    module.exports = {};
  },
  144: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_741aab24_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_741aab24_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_style_index_0_id_741aab24_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  177: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("nav", { staticClass: "sidebar d-none d-md-block" }, [_vm._ssrNode('<div class="logo">', "</div>", [_c("nuxt-link", { attrs: { "to": "/" } }, [_c("img", { attrs: { "src": "/logo-sidenav.png", "alt": "logo-trivicare", "width": "80" } })])], 1), _vm._ssrNode(" "), _vm._ssrNode('<div class="position-sticky pt-3">', "</div>", [_vm._ssrNode('<ul class="nav flex-column">', "</ul>", [_vm._ssrNode('<li class="nav-item">', "</li>", [_c("n-link", { staticClass: "nav-link", class: { "active": _vm.isActive == "/" }, attrs: { "aria-current": "page", "to": "/" } }, [_c("i", { staticClass: "fa fa-dashboard icon-list" }), _vm._v("\n                    Dashboard\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode('<li class="nav-item">', "</li>", [_c("n-link", { staticClass: "nav-link", class: { "active": _vm.isActive == "/orders" || _vm.isActive == "/orders-history" }, attrs: { "to": "/orders" } }, [_c("i", { staticClass: "fa fa-shopping-cart icon-list" }), _vm._v("\n                    Pedidos\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode('<li class="nav-item">', "</li>", [_c("n-link", { staticClass: "nav-link", class: { "active": _vm.isActive == "/products" }, attrs: { "to": "/products" } }, [_c("i", { staticClass: "fa fa-cubes icon-list" }), _vm._v("\n                    Productos\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode('<li class="nav-item">', "</li>", [_c("n-link", { staticClass: "nav-link", class: { "active": _vm.isActive == "/clients" || _vm.isActive == "/guests" }, attrs: { "to": "/clients" } }, [_c("i", { staticClass: "fa fa-users icon-list" }), _vm._v("\n                    Clientes\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode('<li class="nav-item">', "</li>", [_c("n-link", { staticClass: "nav-link", class: { "active": _vm.isActive == "/invoices" }, attrs: { "to": "/invoices" } }, [_c("i", { staticClass: "fa fa-file-text icon-list" }), _vm._v("\n                    Facturas\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode('<li class="nav-item">', "</li>", [_c("n-link", { staticClass: "nav-link", class: { "active": _vm.isActive == "/coupons" }, attrs: { "to": "/coupons" } }, [_c("i", { staticClass: "fa fa-ticket icon-list" }), _vm._v("\n                    Cupones\n                ")])], 1), _vm._ssrNode(" "), _vm._ssrNode('<li class="nav-item">', "</li>", [_c("n-link", { staticClass: "nav-link", class: { "active": _vm.isActive == "/reviews" }, attrs: { "to": "/reviews" } }, [_c("i", { staticClass: "fa fa-star icon-list" }), _vm._v("\n                    Valoraciones\n                ")])], 1)], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="position-absolute bottom-0 button-final">', "</div>", [_vm._ssrNode('<div class="d-flex justify-content-around">', "</div>", [_c("n-link", { staticClass: "nav-link", attrs: { "to": "/settings" } }, [_c("i", { staticClass: "fa fa-cog icon-size" })]), _vm._ssrNode(' <button to="/logout" class="nav-link"><i class="fa fa-sign-out icon-size"></i></button>')], 2)])], 2);
    };
    var staticRenderFns = [];
    var SideNavvue_type_script_lang_js_ = { data() {
      return { closeSideNav: false, isActive: false };
    }, mounted() {
      this.isActive = this.$route.path;
    }, methods: { async logout() {
      await this.$auth.logout();
      window.location.reload();
      this.$notify({ title: "Has cerrado sesi\xF3n!" });
    } } };
    var headers_SideNavvue_type_script_lang_js_ = SideNavvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(144);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      headers_SideNavvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "7a36dc00"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const headersSideNav = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': headersSideNav$1
}, [headersSideNav$1]);

export { headersSideNav as h };
//# sourceMappingURL=headers-side-nav.mjs.map

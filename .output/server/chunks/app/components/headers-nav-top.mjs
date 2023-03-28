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

var headersNavTop$1 = {};

var ids = headersNavTop$1.ids = [0];
var modules = headersNavTop$1.modules = {
  115: function(module, exports2) {
    module.exports = {};
  },
  140: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_style_index_0_id_59433c6d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_style_index_0_id_59433c6d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavTop_vue_vue_type_style_index_0_id_59433c6d_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  172: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("nav", { staticClass: "navbar navbar-expand-lg navbar-light bg-light sticky-top shadow d-md-none" }, [_vm._ssrNode('<div class="container-fluid">', "</div>", [_vm._ssrNode('<button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button> <div class="d-flex justify-content-center"><a href="#" class="navbar-brand"><img src="/svg/logo.svg" alt width="50" height="24" class="d-inline-block align-text-top"></a></div> '), _vm._ssrNode('<div id="navbarNav" class="collapse navbar-collapse">', "</div>", [_vm._ssrNode('<ul class="navbar-nav d-md-none">', "</ul>", [_vm._ssrNode('<li class="nav-item-top">', "</li>", [_c("n-link", { staticClass: "nav-link active", attrs: { "aria-current": "page", "to": "/" } }, [_vm._v("Dashboard")])], 1), _vm._ssrNode(" "), _vm._ssrNode('<li class="nav-item-top">', "</li>", [_c("n-link", { staticClass: "nav-link-top", attrs: { "to": "/orders" } }, [_vm._v("Pedidos")])], 1), _vm._ssrNode(" "), _vm._ssrNode('<li class="nav-item-top">', "</li>", [_c("n-link", { staticClass: "nav-link-top", attrs: { "to": "/products" } }, [_vm._v("Productos")])], 1), _vm._ssrNode(" "), _vm._ssrNode('<li class="nav-item-top">', "</li>", [_c("n-link", { staticClass: "nav-link-top", attrs: { "to": "/clients" } }, [_vm._v("Clientes")])], 1), _vm._ssrNode(" "), _vm._ssrNode('<li class="nav-item-top">', "</li>", [_c("n-link", { staticClass: "nav-link-top", attrs: { "to": "/invoices" } }, [_vm._v("Facturas")])], 1), _vm._ssrNode(" "), _vm._ssrNode('<li class="nav-item-top">', "</li>", [_c("n-link", { staticClass: "nav-link-top", attrs: { "to": "/coupons" } }, [_vm._v("Cupones")])], 1), _vm._ssrNode(" "), _vm._ssrNode('<li class="nav-item-top">', "</li>", [_c("n-link", { staticClass: "nav-link-top", attrs: { "to": "/reviews" } }, [_vm._v("Valoraciones")])], 1)], 2)]), _vm._ssrNode(' <div class="d-flex"><button class="btn btn-outline-danger"><i class="fa fa-sign-out"></i></button></div>')], 2)]);
    };
    var staticRenderFns = [];
    var NavTopvue_type_script_lang_js_ = { methods: { async logout() {
      await this.$auth.logout();
      window.location.reload();
      this.$notify({ title: "Has cerrado sesi\xF3n!" });
    } } };
    var headers_NavTopvue_type_script_lang_js_ = NavTopvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(140);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      headers_NavTopvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "7b46c624"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const headersNavTop = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': headersNavTop$1
}, [headersNavTop$1]);

export { headersNavTop as h };
//# sourceMappingURL=headers-nav-top.mjs.map

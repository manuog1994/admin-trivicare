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

var navBottom$1 = {};

var ids = navBottom$1.ids = [33];
var modules = navBottom$1.modules = {
  105: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBottom_vue_vue_type_style_index_0_id_38c358a2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBottom_vue_vue_type_style_index_0_id_38c358a2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBottom_vue_vue_type_style_index_0_id_38c358a2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  130: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("client-only", [_c("div", { staticClass: "d-block bg-dark" }, [_c("div", [_c("div", {}, [_c("div", { staticClass: "custom-banner" }, [_c("span", [_vm._v("MODO EDICI\xD3N EN ADMIN TRIVICARE")])])])])])]);
    };
    var staticRenderFns = [];
    var NavBottomvue_type_script_lang_js_ = {};
    var components_NavBottomvue_type_script_lang_js_ = NavBottomvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(105);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_NavBottomvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "7f7110ab"
    );
    __webpack_exports__["default"] = component.exports;
  },
  94: function(module, exports2) {
    module.exports = {};
  }
};

const navBottom = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': navBottom$1
}, [navBottom$1]);

export { navBottom as n };
//# sourceMappingURL=nav-bottom.mjs.map

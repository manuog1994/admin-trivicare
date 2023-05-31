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

var mobileBar$1 = {};

var ids = mobileBar$1.ids = [31];
var modules = mobileBar$1.modules = {
  112: function(module, exports2) {
    module.exports = {};
  },
  138: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileBar_vue_vue_type_style_index_0_id_687633dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileBar_vue_vue_type_style_index_0_id_687633dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileBar_vue_vue_type_style_index_0_id_687633dc_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  166: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "breadcrumb-area bg-dark pt-3 pb-3" }, [_vm._ssrNode('<div class="container" data-v-687633dc><div class="breadcrumb-content text-center" data-v-687633dc><div class="pro-sidebar-search d-flex align-items-center" data-v-687633dc><input type="text" placeholder="Buscar..."' + _vm._ssrAttr("value", _vm.search) + ' data-v-687633dc> <i class="pe-7s-search fs-1 ms-2 text-light" data-v-687633dc></i></div></div></div>')]);
    };
    var staticRenderFns = [];
    var MobileBarvue_type_script_lang_js_ = { data() {
      return { search: "" };
    }, watch: { search() {
      this.$emit("search", this.search);
    } } };
    var components_MobileBarvue_type_script_lang_js_ = MobileBarvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(138);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_MobileBarvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      "687633dc",
      "5263760e"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const mobileBar = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': mobileBar$1
}, [mobileBar$1]);

export { mobileBar as m };
//# sourceMappingURL=mobile-bar.mjs.map

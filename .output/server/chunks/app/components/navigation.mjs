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

var navigation$1 = {};

var ids = navigation$1.ids = [33];
var modules = navigation$1.modules = {
  80: function(module, exports2) {
    module.exports = {};
  },
  86: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_72fd99fd_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_72fd99fd_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_72fd99fd_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  88: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("client-only", [_c("div", { staticClass: "d-flex justify-content-around" }, [_c("div", { staticClass: "d-flex col-7" }, [_c("nav", [_c("ul", { staticClass: "d-flex justify-content-around" }, [_c("li", { staticClass: "p-nav" }, [_c("n-link", { attrs: { "to": "/shop" } }, [_vm._v("Ver Todo")])], 1), _vm._v(" "), _vm._l(_vm.categories, function(category) {
        return _c("li", { key: category.id, staticClass: "p-nav" }, [_c("n-link", { attrs: { "to": `/shop?category=${category.slug}` } }, [_vm._v(_vm._s(category.name))])], 1);
      }), _vm._v(" "), _c("li", { staticClass: "p-nav" }, [_c("n-link", { attrs: { "to": "/contact" } }, [_vm._v("Contacto")])], 1)], 2)])]), _vm._v(" "), _c("div", { staticClass: "col-5" }, [_c("div", {}, [_c("div", { staticClass: "d-flex justify-content-end" }, [_c("p", { staticClass: "p-text" }, [_c("i", { staticClass: "pe-7s-phone" }), _vm._v("\n                         Atenci\xF3n al cliente 10:00 AM a 20:00 PM || \n                        "), _c("a", { attrs: { "href": "tel:+34613036942" } }, [_vm._v("613 036 942")])])])])])])]);
    };
    var staticRenderFns = [];
    var Navigationvue_type_script_lang_js_ = { data() {
      return { categoryId: "", url: "https://admin.trivicare.com" };
    }, computed: { categories() {
      return this.$store.getters.getCategories;
    } }, created() {
      this.getCategories();
    }, methods: { getCategories() {
      this.$store.dispatch("getCategories");
    }, redirectHome() {
      this.categoryId = "";
      this.$router.push({ path: "/shop" });
    } }, watch: { categoryId() {
      this.$router.push({ path: "/shop", query: { category: this.categoryId } });
    } } };
    var components_Navigationvue_type_script_lang_js_ = Navigationvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(86);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_Navigationvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "7c75ffb2"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const navigation = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': navigation$1
}, [navigation$1]);

export { navigation as n };
//# sourceMappingURL=navigation.mjs.map

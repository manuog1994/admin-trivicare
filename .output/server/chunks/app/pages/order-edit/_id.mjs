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

var _id$1 = {};

var ids = _id$1.ids = [59, 49];
var modules = _id$1.modules = {
  110: function(module, exports2) {
    module.exports = {};
  },
  136: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_07f7189f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_07f7189f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_07f7189f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  163: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_c("SideNav"), _vm._ssrNode(" "), _c("NavTop"), _vm._ssrNode(" "), _c("Search"), _vm._ssrNode(" "), _c("EditOrder"), _vm._ssrNode(" "), _vm.loading ? _c("BigLoader") : _vm._e()], 2);
    };
    var staticRenderFns = [];
    var _idvue_type_script_lang_js_ = { components: { SideNav: () => __webpack_require__.e(2).then(__webpack_require__.bind(null, 177)), NavTop: () => __webpack_require__.e(0).then(__webpack_require__.bind(null, 174)), Search: () => __webpack_require__.e(1).then(__webpack_require__.bind(null, 176)), EditOrder: () => __webpack_require__.e(13).then(__webpack_require__.bind(null, 184)), BigLoader: () => __webpack_require__.e(3).then(__webpack_require__.bind(null, 182)) }, data() {
      return { loading: false };
    }, beforeMount() {
      this.$root.$on("loading", (data) => {
        this.loading = data;
      });
    }, head() {
      return { titleTemplate: "Editar Pedido | Admin" };
    } };
    var order_edit_idvue_type_script_lang_js_ = _idvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(136);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      order_edit_idvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      "07f7189f",
      "3a006bd5"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { Search: __webpack_require__(77).default });
  },
  76: function(module, exports2) {
    module.exports = {};
  },
  77: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("client-only", [_c("div", { staticClass: "container d-block" }, [_c("div", { staticClass: "row" }, [_c("div", { staticClass: "col-12" }, [_c("div", { staticClass: "input-group" }, [_c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.search, expression: "search" }], staticClass: "form-control rounded-0", attrs: { "type": "text", "placeholder": "Encuentra tu lado m\xE1s natural...", "aria-label": "Buscar...", "aria-describedby": "basic-addon1" }, domProps: { "value": _vm.search }, on: { "input": [function($event) {
        if ($event.target.composing)
          return;
        _vm.search = $event.target.value;
      }, function($event) {
        _vm.hidden = false;
      }] } }), _vm._v(" "), _c("span", { staticClass: "input-group-text rounded-0 bg-blue-color", attrs: { "id": "basic-addon1" } }, [_c("i", { staticClass: "fa fa-search" })])])]), _vm._v(" "), _c("div", { staticClass: "col-12" }, [_c("div", { staticClass: "position-relative" }, [_c("div", { staticClass: "search-box", class: { "active": _vm.hidden == false }, attrs: { "id": "search-box" } }, _vm._l(_vm.products, function(product) {
        return _c("div", { key: product.id, staticClass: "box-products" }, [_c("a", { staticClass: "single-product", attrs: { "href": _vm.url + "/product/" + product.slug } }, [product.images.length == 0 ? _c("div", [_c("nuxt-img", { attrs: { "provider": "customProvider", "src": "nuxt/default.webp", "alt": "default", "width": "100px" } })], 1) : _c("div", [_c("nuxt-img", { attrs: { "provider": "customProvider", "src": product.images[0].path, "alt": product.name, "width": "100px" } })], 1), _vm._v(" "), _c("div", { staticClass: "ms-5" }, [_c("p", [_vm._v(_vm._s(product.name))]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(_vm._s(product.price) + " \u20AC")])])])])]);
      }), 0)])])])])]);
    };
    var staticRenderFns = [];
    var Searchvue_type_script_lang_js_ = { data() {
      return { searchFather: false, products: [], search: "", url: "https://admin.trivicare.com", hidden: true };
    }, watch: { search(search) {
      if (search == "" || search == null) {
        this.products = [];
        this.$root.$emit("opacityOther", false);
        this.hidden = true;
        return;
      } else {
        this.search = search;
        this.getProducts();
        this.$root.$emit("opacityOther", true);
      }
    } }, methods: { async getProducts() {
      await this.$store.dispatch("getProducts", { perPage: "", page: "", category: "", search: this.search, slug: "", sort: "", tag: "", status: 2 });
      const products = this.$store.getters.getProducts;
      this.products = products.data;
    } } };
    var components_Searchvue_type_script_lang_js_ = Searchvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(78);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_Searchvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "f29c0b0a"
    );
    __webpack_exports__["default"] = component.exports;
  },
  78: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_7fd396fa_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_7fd396fa_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_7fd396fa_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  }
};

const _id = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': _id$1
}, [_id$1]);

export { _id as _ };
//# sourceMappingURL=_id.mjs.map

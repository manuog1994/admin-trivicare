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

var coupons$1 = {};

var ids = coupons$1.ids = [52, 24, 48];
var modules = coupons$1.modules = {
  102: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponsTable_vue_vue_type_style_index_0_id_46207034_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponsTable_vue_vue_type_style_index_0_id_46207034_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponsTable_vue_vue_type_style_index_0_id_46207034_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  122: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm$coupons;
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm.newCoupon == false ? _vm._ssrNode('<div class="main">', "</div>", [_vm._ssrNode('<div><div class="d-flex justify-content-end"><button class="btn bg-trivi-green text-white mb-2"><i class="fa fa-plus"></i></button></div> <div><h2>Cupones</h2></div></div> '), _vm._ssrNode('<div class="table-responsive">', "</div>", [_vm._ssrNode('<table class="table"><thead><tr><th scope>C\xF3digo</th> <th scope>Descuento</th> <th scope>Fecha de expiraci\xF3n</th> <th scope>Estado</th> <th>Acci\xF3n</th></tr></thead> ' + (((_vm$coupons = _vm.coupons) === null || _vm$coupons === void 0 ? void 0 : _vm$coupons.length) > 0 ? "<tbody>" + _vm._ssrList(_vm.paginatedItems, function(coupon) {
        return "<tr><td>" + _vm._ssrEscape(_vm._s(coupon.code)) + "</td> <td>" + _vm._ssrEscape(_vm._s(coupon.discount)) + "</td> <td>" + _vm._ssrEscape(_vm._s(coupon.validity)) + "</td> " + (coupon.status == 1 ? "<td>Inactivo</td>" : "<td>Activo</td>") + ' <td><form><button type="submit" title="Eliminar" class="btn btn-danger">\n                                    Eliminar\n                                </button></form></td></tr>';
      }) + "</tbody>" : '<tbody><tr><td colspan="6">No hay cupones.</td></tr></tbody>') + "</table> "), _vm._ssrNode('<div class="d-flex justify-content-center mt-2">', "</div>", [_c("pagination", { attrs: { "records": _vm.coupons.length, "perPage": _vm.perPage }, on: { "paginate": _vm.myCallback }, model: { value: _vm.page, callback: function($$v) {
        _vm.page = $$v;
      }, expression: "page" } })], 1)], 2)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.newCoupon == true ? _c("CreateCoupons") : _vm._e()], 2);
    };
    var staticRenderFns = [];
    var CouponsTablevue_type_script_lang_js_ = { auth: true, components: { CreateCoupons: () => __webpack_require__.e(6).then(__webpack_require__.bind(null, 168)) }, data() {
      return { coupons: [], page: 1, perPage: 10, newCoupon: false };
    }, beforeMount() {
      this.$root.$on("closeNewCoupon", (data) => {
        this.newCoupon = data;
      });
    }, mounted() {
      this.getCoupons();
    }, computed: { paginatedItems() {
      const start = (this.page - 1) * this.perPage;
      return this.coupons.slice(start, start + this.perPage);
    } }, methods: { async getCoupons() {
      await this.$axios.get("/api/cupons").then((response) => {
        this.coupons = Object.values(response.data.data).flat();
      }).catch((error) => {
        console.log(error);
      });
    }, async destroy(id) {
      await this.$axios.delete(`/api/cupons/${id}`).then(() => {
        this.getCoupons();
        this.$notify({ title: "Cup\xF3n eliminado" });
      }).catch((error) => {
        console.log(error);
      });
    }, myCallback(page) {
      this.page = page;
    } } };
    var coupons_CouponsTablevue_type_script_lang_js_ = CouponsTablevue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(102);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      coupons_CouponsTablevue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "5c768956"
    );
    __webpack_exports__["default"] = component.exports;
  },
  150: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_c("SideNav"), _vm._ssrNode(" "), _c("NavTop"), _vm._ssrNode(" "), _c("Search"), _vm._ssrNode(" "), _c("CouponsTable")], 2);
    };
    var staticRenderFns = [];
    var couponsvue_type_script_lang_js_ = { components: { SideNav: () => __webpack_require__.e(2).then(__webpack_require__.bind(null, 175)), NavTop: () => __webpack_require__.e(0).then(__webpack_require__.bind(null, 172)), CouponsTable: () => Promise.resolve().then(__webpack_require__.bind(null, 122)), Search: () => __webpack_require__.e(1).then(__webpack_require__.bind(null, 174)) }, head() {
      return { titleTemplate: "Cupones" };
    } };
    var pages_couponsvue_type_script_lang_js_ = couponsvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      pages_couponsvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "2c13aa9c"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { Search: __webpack_require__(77).default, CouponsTable: __webpack_require__(122).default });
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
      "7be9673b"
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
  },
  89: function(module, exports2) {
    module.exports = {};
  }
};

const coupons = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': coupons$1
}, [coupons$1]);

export { coupons as c };
//# sourceMappingURL=coupons.mjs.map

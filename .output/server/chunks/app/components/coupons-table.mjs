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

var couponsTable$1 = {};

var ids = couponsTable$1.ids = [24];
var modules = couponsTable$1.modules = {
  102: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponsTable_vue_vue_type_style_index_0_id_56a07be6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponsTable_vue_vue_type_style_index_0_id_56a07be6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CouponsTable_vue_vue_type_style_index_0_id_56a07be6_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  123: function(module, __webpack_exports__, __webpack_require__) {
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
    var CouponsTablevue_type_script_lang_js_ = { auth: true, components: { CreateCoupons: () => __webpack_require__.e(6).then(__webpack_require__.bind(null, 170)) }, data() {
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
        this.$root.$emit("loading", false);
      }).catch((error) => {
        this.$root.$emit("loading", false);
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
      "5e1c6c96"
    );
    __webpack_exports__["default"] = component.exports;
  },
  89: function(module, exports2) {
    module.exports = {};
  }
};

const couponsTable = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': couponsTable$1
}, [couponsTable$1]);

export { couponsTable as c };
//# sourceMappingURL=coupons-table.mjs.map

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

var clientsRegisteds$1 = {};

var ids = clientsRegisteds$1.ids = [5];
var modules = clientsRegisteds$1.modules = {
  115: function(module, exports2) {
    module.exports = {};
  },
  141: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registeds_vue_vue_type_style_index_0_id_5fd45ac0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registeds_vue_vue_type_style_index_0_id_5fd45ac0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registeds_vue_vue_type_style_index_0_id_5fd45ac0_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  169: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm$profiles;
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm._ssrNode('<div class="main">', "</div>", [_vm._ssrNode('<div><div class="d-flex justify-content-end"><button class="btn bg-trivi-red text-white mb-2"><i class="fa fa-user-secret"></i>\n                    Invitados\n                </button></div> <div><h2>Clientes registrados</h2></div></div> '), _vm._ssrNode('<div class="table-responsive">', "</div>", [_vm._ssrNode('<table class="table"><thead><tr><th scope>Cliente</th> <th scope>Pedidos</th> <th scope>\xDAltimo pedido</th></tr></thead> ' + (((_vm$profiles = _vm.profiles) === null || _vm$profiles === void 0 ? void 0 : _vm$profiles.length) > 0 ? "<tbody>" + _vm._ssrList(_vm.paginatedItems, function(profile) {
        var _profile$orders, _profile$orders2, _profile$orders2$;
        return "<tr><td>" + _vm._ssrEscape(_vm._s(profile.name) + " " + _vm._s(profile.lastname)) + "</td> <td>" + _vm._ssrEscape(_vm._s(profile === null || profile === void 0 ? void 0 : (_profile$orders = profile.orders) === null || _profile$orders === void 0 ? void 0 : _profile$orders.length)) + "</td> <td>" + _vm._ssrEscape(_vm._s(profile === null || profile === void 0 ? void 0 : (_profile$orders2 = profile.orders) === null || _profile$orders2 === void 0 ? void 0 : (_profile$orders2$ = _profile$orders2[0]) === null || _profile$orders2$ === void 0 ? void 0 : _profile$orders2$.order_date)) + "</td></tr>";
      }) + "</tbody>" : '<tbody><tr><td colspan="6">No hay pedidos pendientes.</td></tr></tbody>') + "</table> "), _vm._ssrNode('<div class="d-flex justify-content-center mt-2">', "</div>", [_c("pagination", { attrs: { "records": _vm.profiles.length, "perPage": _vm.perPage }, on: { "paginate": _vm.myCallback }, model: { value: _vm.page, callback: function($$v) {
        _vm.page = $$v;
      }, expression: "page" } })], 1)], 2)], 2)]);
    };
    var staticRenderFns = [];
    var Registedsvue_type_script_lang_js_ = { auth: true, data() {
      return { pagination: {}, profiles: [], guestView: false, page: 1, perPage: 10 };
    }, mounted() {
      this.getUserProfiles();
    }, computed: { paginatedItems() {
      const start = (this.page - 1) * this.perPage;
      return this.profiles.slice(start, start + this.perPage);
    } }, methods: { async getUserProfiles() {
      this.$root.$emit("loading", true);
      const response = await this.$axios.get("/api/user-profile");
      this.profiles = response.data.data;
      this.profiles.shift(1);
      this.$root.$emit("loading", false);
    }, myCallback(page) {
      this.page = page;
    } } };
    var clients_Registedsvue_type_script_lang_js_ = Registedsvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(141);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      clients_Registedsvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "28178b34"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const clientsRegisteds = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': clientsRegisteds$1
}, [clientsRegisteds$1]);

export { clientsRegisteds as c };
//# sourceMappingURL=clients-registeds.mjs.map

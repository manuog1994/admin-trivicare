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

var clientsGuests$1 = {};

var ids = clientsGuests$1.ids = [4];
var modules = clientsGuests$1.modules = {
  113: function(module, exports2) {
    module.exports = {};
  },
  138: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Guests_vue_vue_type_style_index_0_id_80e1b87e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Guests_vue_vue_type_style_index_0_id_80e1b87e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Guests_vue_vue_type_style_index_0_id_80e1b87e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  166: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm$guests;
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm._ssrNode('<div class="main">', "</div>", [_vm._ssrNode('<div><div class="d-flex justify-content-end"><button class="btn bg-trivi-green text-white mb-2"><i class="fa fa-users"></i>\n                    Registrados\n                </button></div> <div><h2>Invitados</h2></div></div> '), _vm._ssrNode('<div class="table-responsive">', "</div>", [_vm._ssrNode('<table class="table"><thead><tr><th scope>Cliente</th> <th scope>N\xFAmero de pedido</th> <th scope>Fecha</th></tr></thead> ' + (((_vm$guests = _vm.guests) === null || _vm$guests === void 0 ? void 0 : _vm$guests.length) > 0 ? "<tbody>" + _vm._ssrList(_vm.paginatedItems, function(profile) {
        var _profile$orders, _profile$orders$, _profile$orders2, _profile$orders2$;
        return "<tr><td>" + _vm._ssrEscape(_vm._s(profile.name) + " " + _vm._s(profile.lastname)) + "</td> <td>" + _vm._ssrEscape(_vm._s(profile === null || profile === void 0 ? void 0 : (_profile$orders = profile.orders) === null || _profile$orders === void 0 ? void 0 : (_profile$orders$ = _profile$orders[0]) === null || _profile$orders$ === void 0 ? void 0 : _profile$orders$.id)) + "</td> <td>" + _vm._ssrEscape(_vm._s(profile === null || profile === void 0 ? void 0 : (_profile$orders2 = profile.orders) === null || _profile$orders2 === void 0 ? void 0 : (_profile$orders2$ = _profile$orders2[0]) === null || _profile$orders2$ === void 0 ? void 0 : _profile$orders2$.order_date)) + "</td></tr>";
      }) + "</tbody>" : '<tbody><tr><td colspan="6">No hay pedidos pendientes.</td></tr></tbody>') + "</table> "), _vm._ssrNode('<div class="d-flex justify-content-center mt-2">', "</div>", [_c("pagination", { attrs: { "records": _vm.guests.length, "perPage": _vm.perPage }, on: { "paginate": _vm.myCallback }, model: { value: _vm.page, callback: function($$v) {
        _vm.page = $$v;
      }, expression: "page" } })], 1)], 2)], 2)]);
    };
    var staticRenderFns = [];
    var Guestsvue_type_script_lang_js_ = { auth: true, data() {
      return { pagination: {}, guests: [], guestView: false, page: 1, perPage: 10 };
    }, mounted() {
      this.getGuests();
    }, computed: { paginatedItems() {
      const start = (this.page - 1) * this.perPage;
      return this.guests.slice(start, start + this.perPage);
    } }, methods: { async getGuests() {
      const response = await this.$axios.get("/api/guests");
      this.guests = response.data.data;
    }, myCallback(page) {
      this.page = page;
    } } };
    var clients_Guestsvue_type_script_lang_js_ = Guestsvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(138);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      clients_Guestsvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "7349edd6"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const clientsGuests = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': clientsGuests$1
}, [clientsGuests$1]);

export { clientsGuests as c };
//# sourceMappingURL=clients-guests.mjs.map

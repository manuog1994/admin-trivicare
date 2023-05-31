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

var ordersHistory$1 = {};

var ids = ordersHistory$1.ids = [38];
var modules = ordersHistory$1.modules = {
  128: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "main" }, [_vm._ssrNode('<div><div class="d-flex justify-content-end"><button class="btn bg-trivi-green text-white mb-2"><i class="fa fa-check"></i>\n                Pedidos recientes\n            </button></div> <div><h2>Historial de pedidos</h2></div></div> '), _vm._ssrNode('<div class="table-responsive">', "</div>", [_vm._ssrNode('<table class="table">', "</table>", [_vm._ssrNode("<thead><tr><th scope>Cliente</th> <th scope>Fecha</th> <th scope>Estado</th> <th scope>Acciones</th></tr></thead> "), _vm.orders.length > 0 ? _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.paginatedItems, function(order) {
        var _order$user_profile, _order$user_profile2, _order$guest, _order$guest2;
        return _vm._ssrNode("<tr>", "</tr>", [_vm._ssrNode((order.guest == null ? "<td>" + _vm._ssrEscape(_vm._s((_order$user_profile = order.user_profile) === null || _order$user_profile === void 0 ? void 0 : _order$user_profile.name) + " " + _vm._s((_order$user_profile2 = order.user_profile) === null || _order$user_profile2 === void 0 ? void 0 : _order$user_profile2.lastname)) + "</td>" : "<td>" + _vm._ssrEscape(_vm._s((_order$guest = order.guest) === null || _order$guest === void 0 ? void 0 : _order$guest.name) + " " + _vm._s((_order$guest2 = order.guest) === null || _order$guest2 === void 0 ? void 0 : _order$guest2.lastname)) + "</td>") + " <td>" + _vm._ssrEscape(_vm._s(order.order_date)) + "</td> " + (order.status == 4 ? "<td>Completado</td>" : "<!---->") + " " + (order.status == 5 ? "<td>Cancelado</td>" : "<!---->") + " "), _vm._ssrNode("<td>", "</td>", [_c("n-link", { staticClass: "btn bg-trivi-blue", attrs: { "to": `/orders-view/${order.id}` } }, [_c("i", { staticClass: "pe-7s-look" })])], 1)], 2);
      }), 0) : _vm._ssrNode('<tbody><tr><td colspan="6">No hay pedidos pendientes.</td></tr></tbody>')], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="d-flex justify-content-center mt-2">', "</div>", [_c("pagination", { attrs: { "records": _vm.orders.length, "perPage": _vm.perPage }, on: { "paginate": _vm.myCallback }, model: { value: _vm.page, callback: function($$v) {
        _vm.page = $$v;
      }, expression: "page" } })], 1)], 2)], 2);
    };
    var staticRenderFns = [];
    var OrdersHistoryvue_type_script_lang_js_ = { auth: true, data() {
      return { orders: [], users: [], order: {}, user: {}, page: 1, perPage: 10 };
    }, mounted() {
      this.getOrders();
    }, computed: { paginatedItems() {
      const start = (this.page - 1) * this.perPage;
      return this.orders.slice(start, start + this.perPage);
    } }, methods: { async getOrders() {
      const response = await this.$axios.get("/api/orders?history[status]=");
      this.orders = response.data.data;
      this.$root.$emit("loading", false);
    }, myCallback(page) {
      this.page = page;
    } } };
    var orders_OrdersHistoryvue_type_script_lang_js_ = OrdersHistoryvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      orders_OrdersHistoryvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "58860718"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const ordersHistory = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': ordersHistory$1
}, [ordersHistory$1]);

export { ordersHistory as o };
//# sourceMappingURL=orders-history.mjs.map

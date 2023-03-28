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

var dashboardGraphicMonths$1 = {};

var ids = dashboardGraphicMonths$1.ids = [8];
var modules = dashboardGraphicMonths$1.modules = {
  171: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "mb-2" }, [_vm._ssrNode('<div class="d-flex justify-content-center"><h3>Ventas por mes</h3></div> '), _vm._ssrNode('<div class="d-flex justify-content-center">', "</div>", [_c("apexchart", { staticStyle: { "width": "100%", "min-width": "300px", "max-width": "650px", "height": "30vh" }, attrs: { "type": "bar", "options": _vm.options, "series": _vm.series } })], 1)], 2);
    };
    var staticRenderFns = [];
    var GraphicMonthsvue_type_script_lang_js_ = { name: "Donut", components: { [false]: () => __webpack_require__.e(21).then(__webpack_require__.t.bind(null, 148, 7)) }, data: function() {
      return { options: { chart: { id: "vuechart-example" }, xaxis: { categories: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] } }, series: [{ name: "series-1", data: [] }], orders: [], jan: [], feb: [], mar: [], apr: [], may: [], jun: [], jul: [], aug: [], sep: [], oct: [], nov: [], dec: [] };
    }, mounted() {
      this.getOrders();
    }, methods: { getOrders() {
      this.$axios.get("/api/orders").then((response) => {
        this.orders = response.data.data;
        this.orders.filter((order) => {
          if (new Date(order.created_at).getFullYear() == new Date().getFullYear()) {
            this.jan = this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 1 && new Date(order2.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 1).length : 0;
            this.feb = this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 2 && new Date(order2.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 2).length : 0;
            this.mar = this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 3 && new Date(order2.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 3).length : 0;
            this.apr = this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 4 && new Date(order2.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 4).length : 0;
            this.may = this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 5 && new Date(order2.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 5).length : 0;
            this.jun = this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 6 && new Date(order2.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 6).length : 0;
            this.jul = this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 7 && new Date(order2.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 7).length : 0;
            this.aug = this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 8 && new Date(order2.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 8).length : 0;
            this.sep = this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 9 && new Date(order2.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 9).length : 0;
            this.oct = this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 10 && new Date(order2.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 10).length : 0;
            this.nov = this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 11 && new Date(order2.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 11).length : 0;
            this.dec = this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 12 && new Date(order2.created_at).getFullYear() == new Date().getFullYear()).length > 0 ? this.orders.filter((order2) => new Date(order2.created_at).getMonth() + 1 == 12).length : 0;
          }
        });
        this.series = [{ name: "series-1", data: [this.jan, this.feb, this.mar, this.apr, this.may, this.jun, this.jul, this.aug, this.sep, this.oct, this.nov, this.dec] }];
      });
    } } };
    var dashboard_GraphicMonthsvue_type_script_lang_js_ = GraphicMonthsvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    var component = Object(componentNormalizer["a"])(
      dashboard_GraphicMonthsvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "7cf517bd"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const dashboardGraphicMonths = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': dashboardGraphicMonths$1
}, [dashboardGraphicMonths$1]);

export { dashboardGraphicMonths as d };
//# sourceMappingURL=dashboard-graphic-months.mjs.map

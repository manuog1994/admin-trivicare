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

var dashboardDonutsProducts$1 = {};

var ids = dashboardDonutsProducts$1.ids = [7];
var modules = dashboardDonutsProducts$1.modules = {
  170: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm._ssrNode('<div class="d-flex justify-content-center"><h3>Productos m\xE1s vendidos</h3></div> '), _vm._ssrNode('<div class="d-md-flex justify-content-md-center w-100">', "</div>", [_c("apexchart", { staticStyle: { "width": "100%", "min-width": "500px", "max-width": "650px", "height": "30vh" }, attrs: { "type": "donut", "options": _vm.options, "series": _vm.series } })], 1)], 2);
    };
    var staticRenderFns = [];
    var DonutsProductsvue_type_script_lang_js_ = { name: "Donut", components: { [false]: () => __webpack_require__.e(21).then(__webpack_require__.t.bind(null, 148, 7)) }, data: function() {
      return { options: { chart: { id: "vuechart-example" }, labels: [] }, series: [] };
    }, mounted() {
      this.getProducts();
    }, methods: { async getProducts() {
      await this.$axios.get("/api/products").then((response) => {
        this.products = response.data.data;
        this.products.forEach((product) => {
          this.series.push(product.sold == null ? 0 : product.sold);
          this.options.labels.push(product.name);
        });
      });
    } } };
    var dashboard_DonutsProductsvue_type_script_lang_js_ = DonutsProductsvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    var component = Object(componentNormalizer["a"])(
      dashboard_DonutsProductsvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "e7b7387a"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const dashboardDonutsProducts = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': dashboardDonutsProducts$1
}, [dashboardDonutsProducts$1]);

export { dashboardDonutsProducts as d };
//# sourceMappingURL=dashboard-donuts-products.mjs.map

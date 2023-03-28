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

var dashboardAnalyticsGoogle$1 = {};

var ids = dashboardAnalyticsGoogle$1.ids = [25];
var modules = dashboardAnalyticsGoogle$1.modules = {
  169: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_c("apexchart", { attrs: { "options": _vm.options, "series": _vm.series, "type": "line", "height": "350" } })], 1);
    };
    var staticRenderFns = [];
    var AnalyticsGooglevue_type_script_lang_js_ = { data() {
      return { options: { chart: { id: "visits-chart" }, xaxis: { categories: [] } }, series: [{ name: "Visitas", data: [] }] };
    }, mounted() {
      const viewId = "TU_VIEW_ID_DE_GOOGLE_ANALYTICS";
      const startDate = "7daysAgo";
      const endDate = "today";
      const metrics = "ga:sessions";
      this.$ga.ready(() => {
        this.$ga.get("/data/ga", { params: { ids: `ga:${viewId}`, "start-date": startDate, "end-date": endDate, metrics } }).then((response) => {
          const data = response.data.rows.map((row) => parseInt(row[0]));
          const categories = response.data.rows.map((row) => row[1]);
          this.series[0].data = data;
          this.options.xaxis.categories = categories;
        });
      });
    } };
    var dashboard_AnalyticsGooglevue_type_script_lang_js_ = AnalyticsGooglevue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    var component = Object(componentNormalizer["a"])(
      dashboard_AnalyticsGooglevue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "dbd0a4be"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const dashboardAnalyticsGoogle = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': dashboardAnalyticsGoogle$1
}, [dashboardAnalyticsGoogle$1]);

export { dashboardAnalyticsGoogle as d };
//# sourceMappingURL=dashboard-analytics-google.mjs.map

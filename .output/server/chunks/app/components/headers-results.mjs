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

var headersResults$1 = {};

var ids = headersResults$1.ids = [27];
var modules = headersResults$1.modules = {
  175: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm._ssrNode(_vm._ssrEscape("\n    " + _vm._s(_vm.results) + "\n"))]);
    };
    var staticRenderFns = [];
    var Resultsvue_type_script_lang_js_ = { data() {
      return { searchFather: false, products: [], search: "", url: "https://admin.trivicare.com", hidden: true, results: [], resultsMin: [] };
    }, watch: {
      $route() {
        this.search = this.$route.query.search;
      }
    }, methods: { async getOrders() {
      await this.$axios.get("/api/search?search=" + this.search).then((response) => {
        this.results = response.data;
        this.resultsMin = response.data.slice(0, 5);
      }).catch((error) => {
        console.log(error);
      });
    } } };
    var headers_Resultsvue_type_script_lang_js_ = Resultsvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      headers_Resultsvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "d5031aac"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const headersResults = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': headersResults$1
}, [headersResults$1]);

export { headersResults as h };
//# sourceMappingURL=headers-results.mjs.map

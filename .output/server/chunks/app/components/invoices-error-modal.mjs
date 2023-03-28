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

var invoicesErrorModal$1 = {};

var ids = invoicesErrorModal$1.ids = [10];
var modules = invoicesErrorModal$1.modules = {
  176: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("modal", { attrs: { "name": "errorModal", "width": "300px", "scrollable": true, "height": "auto" }, on: { "before-open": _vm.beforeOpen } }, [_c("div", { staticClass: "d-flex justify-content-center" }, [_c("div", [_c("div", { staticClass: "d-flex justify-content-center mb-5" }, [_c("img", { attrs: { "src": "/payment/error.webp", "alt": "error.webp", "width": "60" } })]), _vm._v(" "), _c("div", { staticClass: "mb-2" }, [_c("h2", [_vm._v("Se ha producido un error")])]), _vm._v(" "), _vm._l(_vm.errors.errors, function(error) {
        return _c("div", { key: error }, [_c("h4", [_vm._v(_vm._s(error.toString()))])]);
      })], 2)])]);
    };
    var staticRenderFns = [];
    var ErrorModalvue_type_script_lang_js_ = { data() {
      return { errors: {} };
    }, methods: { beforeOpen({ params: errors }) {
      this.errors = errors;
    } } };
    var invoices_ErrorModalvue_type_script_lang_js_ = ErrorModalvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      invoices_ErrorModalvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "6ece9d0b"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const invoicesErrorModal = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': invoicesErrorModal$1
}, [invoicesErrorModal$1]);

export { invoicesErrorModal as i };
//# sourceMappingURL=invoices-error-modal.mjs.map

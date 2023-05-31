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

var invoicesInvoiceViewer$1 = {};

var ids = invoicesInvoiceViewer$1.ids = [10];
var modules = invoicesInvoiceViewer$1.modules = {
  179: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div");
    };
    var staticRenderFns = [];
    var InvoiceViewervue_type_script_lang_js_ = {};
    var invoices_InvoiceViewervue_type_script_lang_js_ = InvoiceViewervue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      invoices_InvoiceViewervue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "231dd86e"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const invoicesInvoiceViewer = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': invoicesInvoiceViewer$1
}, [invoicesInvoiceViewer$1]);

export { invoicesInvoiceViewer as i };
//# sourceMappingURL=invoices-invoice-viewer.mjs.map

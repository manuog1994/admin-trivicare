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

var invoicesSuccessInvoiceModal$1 = {};

var ids = invoicesSuccessInvoiceModal$1.ids = [12];
var modules = invoicesSuccessInvoiceModal$1.modules = {
  181: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("modal", { attrs: { "name": "successInvoice", "width": "300px", "scrollable": true, "height": "auto" }, on: { "before-open": _vm.beforeOpen } }, [_c("div", { staticClass: "d-flex justify-content-center" }, [_c("div", [_c("div", { staticClass: "d-flex justify-content-center mb-5" }, [_c("img", { attrs: { "src": "/payment/success.webp", "alt": "success.webp", "width": "60" } })]), _vm._v(" "), _c("div", [_c("h4", [_vm._v(_vm._s(_vm.invoice.message))])]), _vm._v(" "), _c("div", { staticClass: "d-flex justify-content-center mt-3" }, [_c("a", { staticClass: "btn btn-primary", attrs: { "href": _vm.invoice.data, "target": "_blank" } }, [_vm._v("Ver Factura")])])])])]);
    };
    var staticRenderFns = [];
    var SuccessInvoiceModalvue_type_script_lang_js_ = { data() {
      return { invoice: {} };
    }, methods: { beforeOpen({ params: invoice }) {
      this.invoice = invoice;
    } } };
    var invoices_SuccessInvoiceModalvue_type_script_lang_js_ = SuccessInvoiceModalvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      invoices_SuccessInvoiceModalvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "7b57f3cd"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const invoicesSuccessInvoiceModal = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': invoicesSuccessInvoiceModal$1
}, [invoicesSuccessInvoiceModal$1]);

export { invoicesSuccessInvoiceModal as i };
//# sourceMappingURL=invoices-success-invoice-modal.mjs.map

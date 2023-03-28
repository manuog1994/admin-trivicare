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

var ordersNote$1 = {};

var ids = ordersNote$1.ids = [38];
var modules = ordersNote$1.modules = {
  183: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("modal", { attrs: { "name": "note", "width": "600px", "height": "500px" }, on: { "before-open": _vm.beforeOpen } }, [_c("div", [_c("div", { staticClass: "modal-header border-bottom-1 mb-5" }, [_c("h5", { staticClass: "modal-title" }, [_vm._v("Notas")]), _vm._v(" "), _c("button", { staticClass: "close", attrs: { "type": "button" }, on: { "click": function($event) {
        return _vm.$modal.hide("note");
      } } }, [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("\xD7")])])]), _vm._v(" "), _c("div", { staticClass: "modal-body" }, [_c("div", { staticClass: "form-group" }, [_c("label", { staticClass: "mb-2", attrs: { "for": "note" } }, [_vm._v("Nota del cliente")]), _vm._v(" "), _c("textarea", { directives: [{ name: "model", rawName: "v-model", value: _vm.note, expression: "note" }], staticClass: "form-control", attrs: { "id": "note", "rows": "10", "disabled": "" }, domProps: { "value": _vm.note }, on: { "input": function($event) {
        if ($event.target.composing)
          return;
        _vm.note = $event.target.value;
      } } })])])])]);
    };
    var staticRenderFns = [];
    var Notevue_type_script_lang_js_ = { auth: true, name: "Note", data() {
      return { note: "" };
    }, methods: { beforeOpen({ params: note }) {
      this.note = note;
    } } };
    var orders_Notevue_type_script_lang_js_ = Notevue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      orders_Notevue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "465f10ce"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const ordersNote = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': ordersNote$1
}, [ordersNote$1]);

export { ordersNote as o };
//# sourceMappingURL=orders-note.mjs.map

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

var ordersModalTrack$1 = {};

var ids = ordersModalTrack$1.ids = [14];
var modules = ordersModalTrack$1.modules = {
  182: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("modal", { attrs: { "name": "modal-track", "width": "800px", "height": "auto" }, on: { "before-open": _vm.beforeOpen } }, [_c("div", [_c("h2", [_vm._v("A\xF1adir n\xFAmero de seguimiento")])]), _vm._v(" "), _c("form", { on: { "submit": function($event) {
        $event.preventDefault();
        return _vm.updateStatus.apply(null, arguments);
      } } }, [_c("div", [_c("label", { attrs: { "for": "track" } }, [_vm._v("N\xFAmero de seguimiento")]), _vm._v(" "), _c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.order.track, expression: "order.track" }], attrs: { "type": "text", "name": "track", "id": "track" }, domProps: { "value": _vm.order.track }, on: { "input": function($event) {
        if ($event.target.composing)
          return;
        _vm.$set(_vm.order, "track", $event.target.value);
      } } })]), _vm._v(" "), _c("div", { staticClass: "d-flex justify-content-end mt-3" }, [_c("button", { staticClass: "btn btn-primary", attrs: { "type": "submit" } }, [_vm._v("Enviar")])])])]);
    };
    var staticRenderFns = [];
    var ModalTrackvue_type_script_lang_js_ = { data() {
      return { order: { id: "", track: "" } };
    }, methods: { beforeOpen({ params: order }) {
      this.order.id = order;
    }, async updateStatus() {
      await this.$axios.put("/api/orders/status/" + this.order.id, { status: 3, track: this.order.track }).then(() => {
        this.$notify({ title: "El estado del pedido ha sido actualizado" });
        this.$modal.hide("modal-track");
        this.order.track = "";
      });
    } } };
    var orders_ModalTrackvue_type_script_lang_js_ = ModalTrackvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      orders_ModalTrackvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "0fca3505"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const ordersModalTrack = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': ordersModalTrack$1
}, [ordersModalTrack$1]);

export { ordersModalTrack as o };
//# sourceMappingURL=orders-modal-track.mjs.map

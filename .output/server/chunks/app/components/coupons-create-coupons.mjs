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

var couponsCreateCoupons$1 = {};

var ids = couponsCreateCoupons$1.ids = [6];
var modules = couponsCreateCoupons$1.modules = {
  168: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "main" }, [_vm._ssrNode('<div class="mb-2"><div class="d-flex justify-content-end"><button class="btn bg-trivi-red"><i class="fa fa-close"></i>\n                Cerrar\n            </button></div> <div><h3>Nuevo cup\xF3n</h3></div></div> <div><form><div class="mb-2"><label for="code">C\xF3digo</label> <input type="text" name="code" class="form-control"></div> <div class="mb-2"><label for="discount">Descuento</label> <input type="number" name="discount" class="form-control"></div> <div class="mb-2"><label for="validity">Validez</label> <input type="date" name="validity" class="form-control"></div> <div class="mb-4"><label for="status">Estado</label> <select name="status" class="form-select"><option value="1">Inactivo</option> <option value="2">Activo</option></select></div> <div class="mb-2"><button type="submit" title="Crear" class="btn btn-primary">Crear</button></div></form></div>')]);
    };
    var staticRenderFns = [];
    var CreateCouponsvue_type_script_lang_js_ = { methods: { newCoupon() {
      const data = new FormData(this.$refs.createCoupon);
      this.$axios.post("/api/cupons", data).then(() => {
        this.$refs.createCoupon.reset();
        this.$root.$emit("closeNewCoupon", false);
        window.location.reload();
      }).catch((error) => {
        console.log(error);
      });
    } } };
    var coupons_CreateCouponsvue_type_script_lang_js_ = CreateCouponsvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      coupons_CreateCouponsvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "2eeb91ac"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const couponsCreateCoupons = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': couponsCreateCoupons$1
}, [couponsCreateCoupons$1]);

export { couponsCreateCoupons as c };
//# sourceMappingURL=coupons-create-coupons.mjs.map

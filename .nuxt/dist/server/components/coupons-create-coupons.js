exports.ids = [6];
exports.modules = {

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/coupons/CreateCoupons.vue?vue&type=template&id=eab8eb44&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"main"},[_vm._ssrNode("<div class=\"mb-2\"><div class=\"d-flex justify-content-end\"><button class=\"btn bg-trivi-red\"><i class=\"fa fa-close\"></i>\n                Cerrar\n            </button></div> <div><h3>Nuevo cupón</h3></div></div> <div><form><div class=\"mb-2\"><label for=\"code\">Código</label> <input type=\"text\" name=\"code\" class=\"form-control\"></div> <div class=\"mb-2\"><label for=\"discount\">Descuento</label> <input type=\"number\" name=\"discount\" class=\"form-control\"></div> <div class=\"mb-2\"><label for=\"validity\">Validez</label> <input type=\"date\" name=\"validity\" class=\"form-control\"></div> <div class=\"mb-4\"><label for=\"status\">Estado</label> <select name=\"status\" class=\"form-select\"><option value=\"1\">Inactivo</option> <option value=\"2\">Activo</option></select></div> <div class=\"mb-2\"><button type=\"submit\" title=\"Crear\" class=\"btn btn-primary\">Crear</button></div></form></div>")]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/coupons/CreateCoupons.vue?vue&type=template&id=eab8eb44&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/coupons/CreateCoupons.vue?vue&type=script&lang=js&
/* harmony default export */ var CreateCouponsvue_type_script_lang_js_ = ({methods:{newCoupon(){const data=new FormData(this.$refs.createCoupon);this.$axios.post('/api/cupons',data).then(()=>{this.$refs.createCoupon.reset();this.$root.$emit('closeNewCoupon',false);window.location.reload();}).catch(error=>{console.log(error);});}}});
// CONCATENATED MODULE: ./components/coupons/CreateCoupons.vue?vue&type=script&lang=js&
 /* harmony default export */ var coupons_CreateCouponsvue_type_script_lang_js_ = (CreateCouponsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/coupons/CreateCoupons.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  coupons_CreateCouponsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2eeb91ac"
  
)

/* harmony default export */ var CreateCoupons = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
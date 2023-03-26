exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/dashboard.vue?vue&type=template&id=6fc4d46b&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=template&id=6fc4d46b& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("client-only",[_c("div",{staticClass:"home-cosmetics"},[_c("Nav"),_vm._v(" "),_c("div",{staticClass:"login-register-area pt-5 pb-100"},[_c("div",{staticClass:"container"},[_c("div",{staticClass:"d-flex justify-content-center mb-5"},[_c("select",{staticClass:"form-select",on:{change:_vm.openOption}},[_c("option",{class:{active:_vm.isActive==="All"},attrs:{value:"All"},on:{click:function($event){return _vm.comA("All");}}},[_vm._v("Todos los productos")]),_vm._v(" "),_c("option",{class:{active:_vm.isActive==="Create"},attrs:{value:"Create"},on:{click:function($event){return _vm.comA("Create");}}},[_vm._v("Crear producto")]),_vm._v(" "),_c("option",{class:{active:_vm.isActive==="Orders"},attrs:{value:"Orders"},on:{click:function($event){return _vm.comA("Orders");}}},[_vm._v("Pedidos")]),_vm._v(" "),_c("option",{class:{active:_vm.isActive==="OrdersHistory"},attrs:{value:"OrdersHistory"},on:{click:function($event){return _vm.comA("OrdersHistory");}}},[_vm._v("Historial de pedidos")]),_vm._v(" "),_c("option",{class:{active:_vm.isActive==="Coupons"},attrs:{value:"Coupons"},on:{click:function($event){return _vm.comA("Coupons");}}},[_vm._v("Cupones")]),_vm._v(" "),_c("option",{class:{active:_vm.isActive==="NewInvoice"},attrs:{value:"NewInvoice"},on:{click:function($event){return _vm.comA("NewInvoice");}}},[_vm._v("Nueva Factura")]),_vm._v(" "),_c("option",{class:{active:_vm.isActive==="FormReview"},attrs:{value:"FormReview"},on:{click:function($event){return _vm.comA("FormReview");}}},[_vm._v("Formulario de valoración")]),_vm._v(" "),_c("option",{class:{active:_vm.isActive==="Newsletter"},attrs:{value:"Newsletter"},on:{click:function($event){return _vm.comA("Newsletter");}}},[_vm._v("Newsletter")])])]),_vm._v(" "),_c("div",{staticClass:"row"},[_c("div",{},[_c(_vm.isActive,{tag:"component"})],1)])])])],1)]);};var staticRenderFns=[];render._withStripped=true;

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({auth:true,components:{Nav:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/dashboard/Nav */ "./components/dashboard/Nav.vue")),All:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/dashboard/All */ "./components/dashboard/All.vue")),Create:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/dashboard/Create */ "./components/dashboard/Create.vue")),Coupons:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/dashboard/Coupons */ "./components/dashboard/Coupons.vue")),NewInvoice:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/dashboard/NewInvoice */ "./components/dashboard/NewInvoice.vue")),FormReview:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/dashboard/FormReview */ "./components/dashboard/FormReview.vue")),Newsletter:()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! @/components/dashboard/Newsletter */ "./components/dashboard/Newsletter.vue"))},data(){return{isActive:"All",unauthorized:''};},mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},2000);});if(this.$axios.onError(error=>{const code=error.response.status;if(code==401){this.$auth.logout();}}));},methods:{comA(item){this.isActive=item;},openOption(e){let option=e.target.value;this.comA(option);}},head(){return{title:"Panel de Control"};}});

/***/ }),

/***/ "./pages/dashboard.vue":
/*!*****************************!*\
  !*** ./pages/dashboard.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_6fc4d46b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=6fc4d46b& */ "./pages/dashboard.vue?vue&type=template&id=6fc4d46b&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./pages/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_6fc4d46b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_6fc4d46b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "869d6776"
  
)

component.options.__file = "pages/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./pages/dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./pages/dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_vue_transform_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_legacy_capi_key_transform_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./pages/dashboard.vue?vue&type=template&id=6fc4d46b&":
/*!************************************************************!*\
  !*** ./pages/dashboard.vue?vue&type=template&id=6fc4d46b& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_6fc4d46b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!../node_modules/babel-loader/lib??ref--4-0!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=6fc4d46b& */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./pages/dashboard.vue?vue&type=template&id=6fc4d46b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_6fc4d46b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_nuxt_3Aimports_transform_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_6fc4d46b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

};;
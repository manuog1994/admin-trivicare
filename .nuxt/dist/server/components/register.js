exports.ids = [46];
exports.modules = {

/***/ 112:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_e821239a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_e821239a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_e821239a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_e821239a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_e821239a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Register.vue?vue&type=template&id=e821239a&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"register-form"},[_vm._ssrNode("<div>","</div>",[_c('client-only',_vm._l(_vm.errors,function(error){return _c('div',{key:error.id,staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v("\n                "+_vm._s(error)+"\n            ")]);}),0)],1),_vm._ssrNode(" <form><input name=\"name\" placeholder=\"Nombre\" type=\"text\" required=\"required\"> <input name=\"email\" placeholder=\"Email\" type=\"email\" required=\"required\"> <div class=\"d-flex\"><input id=\"passOne\" type=\"password\" name=\"password\" placeholder=\"Contraseña\" required=\"required\"> <span class=\"form-pass\"><i class=\"fa fa-eye\"></i></span></div> <div class=\"d-flex\"><input id=\"passTwo\" type=\"password\" name=\"password_confirmation\" placeholder=\"Confirma tu contraseña\" required=\"required\"> <span class=\"form-pass\"><i class=\"fa fa-eye\"></i></span></div> <div class=\"d-flex flex-column\"><div class=\"mb-2 d-flex align-items-center\"><input type=\"checkbox\" name=\"newsletter\" id=\"newsletter\" value=\"1\""+_vm._ssrAttr("checked",Array.isArray(_vm.newsletter)?_vm._i(_vm.newsletter,"1")>-1:_vm.newsletter)+"> <label for=\"newsletter\" class=\"ms-2\">Quiero recibir novedades, ofertas y descuentos.</label></div> <div class=\"mb-2 d-flex align-items-center\"><input type=\"checkbox\" name=\"terms\" id=\"terms\" value=\"true\""+_vm._ssrAttr("checked",Array.isArray(_vm.checked)?_vm._i(_vm.checked,"true")>-1:_vm.checked)+"> <label for=\"terms\" class=\"ms-2\">Acepto los <a href=\"https://trivicare.com/\">términos y condiciones</a></label></div></div> <div class=\"button-box mt-4\"><button type=\"submit\" title=\"Registrarse\""+_vm._ssrClass("btn rounded-0",{'disabled':_vm.checked?false:true})+">Registrar</button></div></form>")],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Register.vue?vue&type=template&id=e821239a&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Register.vue?vue&type=script&lang=js&
/* harmony default export */ var Registervue_type_script_lang_js_ = ({data(){return{errors:[],checked:false,newsletter:false};},async mounted(){await this.$axios.get('/sanctum/csrf-cookie');},methods:{register(){const formData=new FormData(this.$refs.registerform);formData.append('newsletter',this.newsletter);this.$axios.post('/register',formData).then(res=>{//console.log(res);
this.$auth.loginWith('laravelSanctum',{data:formData});this.errors=[];this.$router.push({path:'/'});this.$notify({title:'Te has registrado correctamente, Bienvenid@!'});}).catch(error=>{//console.log(error);
this.errors=Object.values(error.response.data.errors).flat();this.$axios.post('/api/error-message',{message:error.response.data.message});});},viewPass(id){const pass=document.getElementById(id);if(pass.type==="password"){pass.type="text";}else{pass.type="password";}}}});
// CONCATENATED MODULE: ./components/Register.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Registervue_type_script_lang_js_ = (Registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Register.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(137)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0da93014"
  
)

/* harmony default export */ var Register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
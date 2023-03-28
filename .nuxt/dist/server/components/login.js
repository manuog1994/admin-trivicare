exports.ids = [29];
exports.modules = {

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Login.vue?vue&type=template&id=53de5fee&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{},[_vm._ssrNode("<div>","</div>",[_c('client-only',_vm._l(_vm.errors,function(error){return _c('div',{key:error.id,staticClass:"alert alert-danger",attrs:{"role":"alert"}},[_vm._v("\n                "+_vm._s(error)+"\n            ")]);}),0)],1),_vm._ssrNode(" <form><div class=\"mb-2 shadow\"><input type=\"email\" name=\"email\" placeholder=\"Email\" required=\"required\" class=\"form-control\"></div> <div class=\"mb-2 shadow\"><input id=\"passOne\" type=\"password\" name=\"password\" placeholder=\"Contraseña\" required=\"required\" class=\"form-control\"></div> <div class=\"mt-4\"><div class=\"d-flex justify-content-center\"><button title=\"Iniciar sesión\" class=\"btn bg-trivi-blue text-white shadow\">Iniciar sesión</button></div></div></form>")],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Login.vue?vue&type=template&id=53de5fee&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Login.vue?vue&type=script&lang=js&
/* harmony default export */ var Loginvue_type_script_lang_js_ = ({auth:false,data(){return{disabled:false,errors:[]};},computed:{},mounted(){this.$axios.get('/sanctum/csrf-cookie');},methods:{async login(){try{const formData=new FormData(this.$refs.loginform);await this.$auth.loginWith('laravelJWT',{data:formData}).then(res=>{//console.log(res);
this.$router.push({path:'/'});});}catch(error){this.errors=['El correo electrónico o la contraseña son incorrectos.'];console.log(error);}},viewPass(id){var x=document.getElementById(id);if(x.type==="password"){x.type="text";}else{x.type="password";}}}});
// CONCATENATED MODULE: ./components/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Login.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "43fb9726"
  
)

/* harmony default export */ var Login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
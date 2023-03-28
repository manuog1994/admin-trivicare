exports.ids = [56,23,29];
exports.modules = {

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Auth.vue?vue&type=template&id=d08f0362&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"container-fluid d-flex justify-content-center align-items-center vh-100 bg-trivi-purple"},[_vm._ssrNode("<div class=\"card shadow p-4 p-md-5\">","</div>",[_vm._ssrNode("<div class=\"card-body\">","</div>",[_vm._ssrNode("<div class=\"text-center mb-30\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":"/svg/logo-horizontal.svg","alt":"logo-trivicare","width":"300"}})])],1),_vm._ssrNode(" "),_c('Login')],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/Auth.vue?vue&type=template&id=d08f0362&

// EXTERNAL MODULE: ./components/Login.vue + 4 modules
var Login = __webpack_require__(87);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/Auth.vue?vue&type=script&lang=js&
/* harmony default export */ var Authvue_type_script_lang_js_ = ({components:{Login: Login["default"]},data(){return{isActive:"Login"};},methods:{comA(item){this.isActive=item;}}});
// CONCATENATED MODULE: ./components/Auth.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Authvue_type_script_lang_js_ = (Authvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Auth.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Authvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "318361fb"
  
)

/* harmony default export */ var Auth = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Login: __webpack_require__(87).default})


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=93c797da&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('Auth')],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=93c797da&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/login.vue?vue&type=script&lang=js&
/* harmony default export */ var loginvue_type_script_lang_js_ = ({auth:false,components:{Auth:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 124))},data(){return{searchChildren:''};},methods:{closeMenus(){this.searchOpacity(false);this.$root.$emit('closeMenu',this.closeMenu);},searchOpacity(searchFather){if(searchFather==true){document.getElementById("post-nav").classList.add("search-screen");}else{document.getElementById("post-nav").classList.remove("search-screen");}}},head(){return{titleTemplate:"Iniciar sesión | Admin"// link: [
//     { rel: 'cannonical', href: 'https://trivicare.com/login'},
// ],
};}});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "93c797da",
  "24525e90"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Auth: __webpack_require__(124).default})


/***/ }),

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
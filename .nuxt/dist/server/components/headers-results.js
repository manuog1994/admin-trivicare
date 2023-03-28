exports.ids = [9];
exports.modules = {

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/Results.vue?vue&type=template&id=1413a622&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode(_vm._ssrEscape("\n    "+_vm._s(_vm.results)+"\n"))]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/headers/Results.vue?vue&type=template&id=1413a622&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/headers/Results.vue?vue&type=script&lang=js&
/* harmony default export */ var Resultsvue_type_script_lang_js_ = ({data(){return{searchFather:false,products:[],search:'',url:"https://admin.trivicare.com",hidden:true,results:[],resultsMin:[]};},watch:{// escuchamos url query params
$route(){this.search=this.$route.query.search;}},methods:{async getOrders(){await this.$axios.get('/api/search?search='+this.search).then(response=>{this.results=response.data;this.resultsMin=response.data.slice(0,5);}).catch(error=>{console.log(error);});}}});
// CONCATENATED MODULE: ./components/headers/Results.vue?vue&type=script&lang=js&
 /* harmony default export */ var headers_Resultsvue_type_script_lang_js_ = (Resultsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/headers/Results.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  headers_Resultsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7e15442c"
  
)

/* harmony default export */ var Results = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
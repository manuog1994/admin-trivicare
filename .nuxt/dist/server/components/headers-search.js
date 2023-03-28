exports.ids = [1];
exports.modules = {

/***/ 116:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_8277ad5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_8277ad5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_8277ad5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_8277ad5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_8277ad5c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/headers/Search.vue?vue&type=template&id=8277ad5c&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('div',{staticClass:"main-search mt-4 mt-md-0"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"input-group"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.search,expression:"search"}],staticClass:"form-control rounded-0",attrs:{"type":"text","placeholder":"Buscar...","aria-label":"Buscar...","aria-describedby":"basic-addon1"},domProps:{"value":_vm.search},on:{"input":[function($event){if($event.target.composing)return;_vm.search=$event.target.value;},function($event){_vm.hidden=false;}]}}),_vm._v(" "),_c('span',{staticClass:"input-group-text rounded-0 bg-blue-color",attrs:{"id":"basic-addon1"}},[_c('i',{staticClass:"fa fa-search"})])])]),_vm._v(" "),_c('div',{staticClass:"col-12"},[_c('div',{staticClass:"position-relative"},[_c('div',{staticClass:"search-box",class:{'active':_vm.hidden==false},attrs:{"id":"search-box"}},_vm._l(_vm.results,function(result){var _result$guest,_result$user_profile,_result$guest2,_result$user_profile2;return _c('div',{key:result.id,staticClass:"box-products"},[_c('a',{staticClass:"single-product",attrs:{"href":_vm.url+'/orders-view/'+result.id}},[_c('div',{staticClass:"row w-100"},[_c('div',{staticClass:"col-6"},[_c('span',[_vm._v(_vm._s(result.user_profile.name=='Guest'?result===null||result===void 0?void 0:(_result$guest=result.guest)===null||_result$guest===void 0?void 0:_result$guest.name:result===null||result===void 0?void 0:(_result$user_profile=result.user_profile)===null||_result$user_profile===void 0?void 0:_result$user_profile.name)+" "+_vm._s(result.user_profile.lastname=='Guest'?result===null||result===void 0?void 0:(_result$guest2=result.guest)===null||_result$guest2===void 0?void 0:_result$guest2.lastname:result===null||result===void 0?void 0:(_result$user_profile2=result.user_profile)===null||_result$user_profile2===void 0?void 0:_result$user_profile2.lastname))])]),_vm._v(" "),_c('div',{staticClass:"col-6"},[_c('span',[_c('strong',[_vm._v(_vm._s(result.order_date))])])])])])]);}),0)])])])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/headers/Search.vue?vue&type=template&id=8277ad5c&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/headers/Search.vue?vue&type=script&lang=js&
/* harmony default export */ var Searchvue_type_script_lang_js_ = ({data(){return{searchFather:false,products:[],search:'',url:"https://admin.trivicare.com",hidden:true,results:[],resultsMin:[]};},watch:{search(){if(this.search.length>0){this.hidden=false;}else{this.hidden=true;}this.getOrders();}},methods:{async getOrders(){await this.$axios.get('/api/search?search='+this.search).then(response=>{this.results=response.data;this.resultsMin=response.data.slice(0,5);}).catch(error=>{console.log(error);});}}});
// CONCATENATED MODULE: ./components/headers/Search.vue?vue&type=script&lang=js&
 /* harmony default export */ var headers_Searchvue_type_script_lang_js_ = (Searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/headers/Search.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  headers_Searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7174ee64"
  
)

/* harmony default export */ var Search = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
exports.ids = [4];
exports.modules = {

/***/ 113:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Guests_vue_vue_type_style_index_0_id_80e1b87e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Guests_vue_vue_type_style_index_0_id_80e1b87e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Guests_vue_vue_type_style_index_0_id_80e1b87e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Guests_vue_vue_type_style_index_0_id_80e1b87e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Guests_vue_vue_type_style_index_0_id_80e1b87e_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/clients/Guests.vue?vue&type=template&id=80e1b87e&
var render=function render(){var _vm$guests;var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<div class=\"main\">","</div>",[_vm._ssrNode("<div><div class=\"d-flex justify-content-end\"><button class=\"btn bg-trivi-green text-white mb-2\"><i class=\"fa fa-users\"></i>\n                    Registrados\n                </button></div> <div><h2>Invitados</h2></div></div> "),_vm._ssrNode("<div class=\"table-responsive\">","</div>",[_vm._ssrNode("<table class=\"table\"><thead><tr><th scope>Cliente</th> <th scope>Número de pedido</th> <th scope>Fecha</th></tr></thead> "+(((_vm$guests=_vm.guests)===null||_vm$guests===void 0?void 0:_vm$guests.length)>0?"<tbody>"+_vm._ssrList(_vm.paginatedItems,function(profile){var _profile$orders,_profile$orders$,_profile$orders2,_profile$orders2$;return"<tr><td>"+_vm._ssrEscape(_vm._s(profile.name)+" "+_vm._s(profile.lastname))+"</td> <td>"+_vm._ssrEscape(_vm._s(profile===null||profile===void 0?void 0:(_profile$orders=profile.orders)===null||_profile$orders===void 0?void 0:(_profile$orders$=_profile$orders[0])===null||_profile$orders$===void 0?void 0:_profile$orders$.id))+"</td> <td>"+_vm._ssrEscape(_vm._s(profile===null||profile===void 0?void 0:(_profile$orders2=profile.orders)===null||_profile$orders2===void 0?void 0:(_profile$orders2$=_profile$orders2[0])===null||_profile$orders2$===void 0?void 0:_profile$orders2$.order_date))+"</td></tr>";})+"</tbody>":"<tbody><tr><td colspan=\"6\">No hay pedidos pendientes.</td></tr></tbody>")+"</table> "),_vm._ssrNode("<div class=\"d-flex justify-content-center mt-2\">","</div>",[_c('pagination',{attrs:{"records":_vm.guests.length,"perPage":_vm.perPage},on:{"paginate":_vm.myCallback},model:{value:_vm.page,callback:function($$v){_vm.page=$$v;},expression:"page"}})],1)],2)],2)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/clients/Guests.vue?vue&type=template&id=80e1b87e&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/clients/Guests.vue?vue&type=script&lang=js&
/* harmony default export */ var Guestsvue_type_script_lang_js_ = ({auth:true,data(){return{pagination:{},guests:[],guestView:false,page:1,perPage:10};},mounted(){this.getGuests();},computed:{paginatedItems(){const start=(this.page-1)*this.perPage;return this.guests.slice(start,start+this.perPage);}},methods:{async getGuests(){const response=await this.$axios.get('/api/guests');this.guests=response.data.data;},myCallback(page){this.page=page;}}});
// CONCATENATED MODULE: ./components/clients/Guests.vue?vue&type=script&lang=js&
 /* harmony default export */ var clients_Guestsvue_type_script_lang_js_ = (Guestsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/clients/Guests.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(138)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  clients_Guestsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7349edd6"
  
)

/* harmony default export */ var Guests = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
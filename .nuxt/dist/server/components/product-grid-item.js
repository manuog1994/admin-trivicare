exports.ids = [41];
exports.modules = {

/***/ 121:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductGridItem_vue_vue_type_style_index_0_id_2ac440f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductGridItem_vue_vue_type_style_index_0_id_2ac440f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductGridItem_vue_vue_type_style_index_0_id_2ac440f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductGridItem_vue_vue_type_style_index_0_id_2ac440f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductGridItem_vue_vue_type_style_index_0_id_2ac440f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItem.vue?vue&type=template&id=2ac440f2&
var render=function render(){var _vm=this,_c=_vm._self._c;return _vm.product.status=='Publicado'?_c('div',{staticClass:"product-wrap mb-30"},[_vm._ssrNode("<div class=\"product-img\">","</div>",[_c('n-link',{attrs:{"to":`/product/${_vm.product.slug}`}},[_vm.product.images.length==0||_vm.product.images.length==1?_c('div',[_c('nuxt-img',{staticClass:"default-img",attrs:{"loading":"lazy","provider":"customProvider","src":"nuxt/default.webp","alt":_vm.product.name,"width":"100%","height":"100%"}}),_vm._v(" "),_c('nuxt-img',{staticClass:"hover-img",attrs:{"loading":"lazy","provider":"customProvider","src":"nuxt/default.webp","alt":_vm.product.name,"width":"100%","height":"100%"}})],1):_c('div',[_c('nuxt-img',{staticClass:"default-img",attrs:{"loading":"lazy","provider":"customProvider","src":_vm.product.images[0].path,"alt":_vm.product.name,"width":"100%","height":"100%"}}),_vm._v(" "),_c('nuxt-img',{staticClass:"hover-img",attrs:{"loading":"lazy","provider":"customProvider","src":_vm.product.images[1].path,"alt":_vm.product.name,"width":"100%","height":"100%"}})],1)]),_vm._ssrNode(" <div class=\"product-badges\">"+(_vm.product.new==='Nuevo'?"<span class=\"product-label pink\">Nuevo</span>":"<!---->")+" "+(_vm.product.discount?"<span class=\"product-label purple\">"+_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")+"</span>":"<!---->")+"</div> "),_vm.layout==='twoColumn'||_vm.layout==='threeColumn'?_vm._ssrNode("<div class=\"product-action\">","</div>",[_vm._ssrNode("<div class=\"pro-same-action pro-wishlist\"><button title=\"Añadir a la lista de deseos\" class=\"btn\"><i class=\"pe-7s-like\"></i></button></div> "),_vm._ssrNode("<div class=\"pro-same-action pro-cart\">","</div>",[_vm.product.variation?_c('n-link',{staticClass:"btn",attrs:{"to":`/product/${_vm.product.slug}`}},[_vm._v("\n                    selecciona una opción\n                ")]):_c('button',{staticClass:"btn",attrs:{"title":"Añadir al carrito"},on:{"click":function($event){return _vm.addToCart(_vm.product);}}},[_c('i',{staticClass:"pe-7s-cart"}),_vm._v(" \n                    Añadir al carrito\n                ")])],1),_vm._ssrNode(" <div class=\"pro-same-action pro-quickview\"><button title=\"Vista previa\" class=\"btn\"><i class=\"pe-7s-look\"></i></button></div>")],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-content text-center mt-4\">","</div>",[_vm._ssrNode("<h3 class=\"mb-1\">","</h3>",[_c('n-link',{attrs:{"to":`/product/${_vm.product.slug}`}},[_vm._v(_vm._s(_vm.product.name))])],1),_vm._ssrNode(" "),_vm._ssrNode("<div"+_vm._ssrClass(null,{'product-grid-change':_vm.layout==='list'?false:true})+">","</div>",[_c('client-only',[_c('vue-star-rating',{attrs:{"star-size":20,"read-only":true,"show-rating":false,"rating":_vm.product.rating}})],1)],1),_vm._ssrNode(" <div class=\"product-price\"><span>"+_vm._ssrEscape(_vm._s((_vm.discountedPrice(_vm.product)*1.21).toFixed(2))+" €")+"</span> "+(_vm.product.discount>0?"<span class=\"old\">"+_vm._ssrEscape(_vm._s((_vm.product.price_base*1.21).toFixed(2))+" €")+"</span>":"<!---->")+"</div> "+(_vm.layout==='list'?"<div class=\"product-content__list-view\"><div class=\"pro-action d-flex align-items-center\"><div class=\"pro-cart btn-hover\">"+(_vm.product.stock>0?"<button title=\"Añadir al carrito\" class=\"btn\"><i class=\"pe-7s-cart\"></i> \n                        Añadir al carrito\n                    </button>":"<button title=\"No hay stock\" class=\"btn disabled\"><i class=\"pe-7s-attention\"></i>\n                         No hay Stock\n                    </button>")+"</div> <div class=\"pro-wishlist\"><button title=\"Añadir a la lista de deseos\"><i class=\"fa fa-heart-o\"></i></button></div></div></div>":"<!---->"))],2)],2):_vm._e();};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=template&id=2ac440f2&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/product/ProductGridItem.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductGridItemvue_type_script_lang_js_ = ({auth:false,props:["layout","product"],data(){return{tag:Object.values(this.product.tags).flat()};},methods:{addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Se ha actualizado la cantidad del producto'});}else{this.$notify({title:'Añadido al carrito'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price_base-product.price_base*product.discount/100;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Ya estaba añadido a la lista de deseos!'});}else{this.$notify({title:'Añadido a la lista de deseos!'});}this.$store.dispatch('addToWishlist',product);},// addToCompare(product) {
//     // for notification
//     if (this.$store.state.compare.find(el => product.id === el.id)) {
//         this.$notify({ title: 'Already added to compare!' })
//     } else {
//         this.$notify({ title: 'Add to compare successfully!'})
//     }
//     this.$store.dispatch('addToCompare', product)
// },
onClick(product){this.$modal.show('quickview',product);}}});
// CONCATENATED MODULE: ./components/product/ProductGridItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductGridItemvue_type_script_lang_js_ = (ProductGridItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductGridItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(146)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "332db565"
  
)

/* harmony default export */ var ProductGridItem = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
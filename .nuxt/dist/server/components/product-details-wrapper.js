exports.ids = [40];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsWrapper_vue_vue_type_style_index_0_id_7e9af264_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsWrapper_vue_vue_type_style_index_0_id_7e9af264_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsWrapper_vue_vue_type_style_index_0_id_7e9af264_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsWrapper_vue_vue_type_style_index_0_id_7e9af264_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsWrapper_vue_vue_type_style_index_0_id_7e9af264_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductDetailsWrapper.vue?vue&type=template&id=7e9af264&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"shop-area pt-100 pb-100"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6\">","</div>",[_vm._ssrNode("<div class=\"product-details-slider\">","</div>",[_vm._ssrNode("<div class=\"product-details-img\">","</div>",[_vm._ssrNode("<div class=\"product-badges\">"+(_vm.product.new==='Nuevo'?"<span class=\"product-label pink\">Nuevo</span>":"<!---->")+" "+(_vm.product.discount?"<span class=\"product-label purple\">"+_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")+"</span>":"<!---->")+"</div> "),_c('swiper',{ref:"swiperTop",attrs:{"options":_vm.swiperOptionTop}},[_vm.product.images.length==0?_c('div',{staticClass:"swiper-slide text-center"},[_c('nuxt-img',{staticClass:"principal",attrs:{"loading":"lazy","provider":"customProvider","src":"nuxt/default.webp","alt":"default"}}),_vm._v(" "),_c('p',{staticClass:"fst-italic"},[_vm._v("Haz doble click sobre la imagen para zoom")])],1):_vm._l(_vm.product.images,function(image){return _c('div',{key:'image-'+image.id,staticClass:"swiper-slide text-center"},[_c('nuxt-img',{staticClass:"principal",attrs:{"loading":"lazy","provider":"customProvider","src":image.path,"alt":"default"}}),_vm._v(" "),_c('p',{staticClass:"fst-italic"},[_vm._v("Haz doble click sobre la imagen para zoom")])],1);})],2),_vm._ssrNode(" "),_c('swiper',{ref:"swiperThumbs",staticClass:"mt-2",attrs:{"options":_vm.swiperOptionThumbs}},[_vm.product.images.length==0?_c('div',{staticClass:"thumb-img swiper-slide"},[_c('nuxt-img',{attrs:{"loading":"lazy","provider":"customProvider","src":"nuxt/default.webp","alt":"default","width":"100%","height":"100%"}})],1):_vm._l(_vm.product.images,function(image){return _c('div',{key:'imagetwo-'+image.id,staticClass:"thumb-img swiper-slide"},[_c('nuxt-img',{attrs:{"loading":"lazy","provider":"customProvider","src":image.path,"alt":"default","width":"100%","height":"100%"}})],1);})],2)],2)])]),_vm._ssrNode(" "),_vm.product?_vm._ssrNode("<div class=\"col-lg-6 col-md-6\">","</div>",[_vm._ssrNode("<div class=\"product-details-content ml-70\">","</div>",[_vm._ssrNode("<h2>"+_vm._ssrEscape(_vm._s(_vm.product.name))+"</h2> <div class=\"product-details-price\"><span>"+_vm._ssrEscape(_vm._s((_vm.discountedPrice(_vm.product)*1.21).toFixed(2))+" €")+"</span> "+(_vm.product.discount>0?"<span class=\"old\">"+_vm._ssrEscape(_vm._s((_vm.product.price_base*1.21).toFixed(2))+" €")+"</span>":"<!---->")+"</div> "),_vm._ssrNode("<div class=\"pro-details-rating-wrap\">","</div>",[_c('client-only',[_c('vue-star-rating',{attrs:{"star-size":30,"read-only":true,"show-rating":false,"rating":_vm.product.rating}})],1),_vm._ssrNode(" <span><a href=\"#des-details3\" title=\"Valoraciones\" class=\"ms-2\">"+_vm._ssrEscape(_vm._s(_vm.product.total_reviews)+" Valoraciones")+"</a></span>")],2),_vm._ssrNode(" <div><p>"+_vm._ssrEscape(_vm._s(_vm.product.specifications))+"</p></div> "+(_vm.product.variation?"<div class=\"pro-details-size-color\"><div class=\"pro-details-color-wrap\"><h6 class=\"label\">Color</h6> <div class=\"pro-details-color-content\">"+_vm._ssrList(_vm.product.variation.color,function(item,index){return"<label"+_vm._ssrClass("radio",item)+"><input type=\"radio\" name=\"colorGroup\"> <span class=\"check-mark\"></span></label>";})+"</div></div></div>":"<!---->")+" "+(_vm.product.stock>0?"<div class=\"pro-details-quality\"><div class=\"cart-plus-minus\"><button title=\"Quitar\" class=\"dec qtybutton\">-</button> <input type=\"text\" readonly=\"readonly\""+_vm._ssrAttr("value",_vm.singleQuantity)+" class=\"cart-plus-minus-box\"> <button title=\"Añadir\" class=\"inc qtybutton\">+</button></div> <div class=\"pro-details-cart btn-hover\"><button title=\"Añadir al Carrito\">Añadir al Carrito</button></div> <div class=\"pro-details-wishlist\"><button title=\"Añadir a la lista de deseos\"><i class=\"fa fa-heart-o\"></i></button></div></div>":"<div><p class=\"text-danger fst-italic\">En estos momento no tenemos stock del producto.</p></div>")+" <div class=\"pro-details-meta\"><span class=\"label\">Categoría: </span> <ul><li><div><a"+_vm._ssrAttr("href",`https://trivicare.com/${_vm.product.category.slug}`)+_vm._ssrAttr("title",_vm.product.category.name)+">"+_vm._ssrEscape(_vm._s(_vm.product.category.name))+"</a></div></li></ul></div> "),_vm._ssrNode("<div class=\"pro-details-meta\">","</div>",[_vm._ssrNode("<span class=\"label me-2\">Tag:</span> "),_vm._ssrNode("<ul>","</ul>",_vm._l(_vm.product.tags,function(taggy){return _vm._ssrNode("<li>","</li>",[_c('n-link',{staticClass:"tag-block",style:`background-color:${taggy.color}`,attrs:{"to":`/shop?tag=${taggy.slug}`,"title":"Etiqueta"}},[_vm._v("#"+_vm._s(taggy.tag))])],1);}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pro-details-social\">","</div>",[_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.facebook.com/trivicare\" target=\"_blank\" title=\"Facebook\">","</a>",[_c('fa-icon',{attrs:{"icon":"fa-brands fa-facebook-f"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.instagram.com/trivicare\" target=\"_blank\" title=\"Instagram\">","</a>",[_c('fa-icon',{attrs:{"icon":"fa-brands fa-instagram"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a href=\"https://www.tiktok.com/@trivicare\" target=\"_blank\" title=\"TikTok\">","</a>",[_c('fa-icon',{attrs:{"icon":"fa-brands fa-tiktok"}})],1)])],2)])],2)]):_vm._e()],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductDetailsWrapper.vue?vue&type=template&id=7e9af264&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/product/ProductDetailsWrapper.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductDetailsWrappervue_type_script_lang_js_ = ({auth:false,props:['product'],data(){return{singleQuantity:1,categories:[],tags:[],swiperOptionTop:{loop:true,slidesPerView:1,spaceBetween:10,effect:'fade',loopedSlides:5,// looped slides should be the same
zoom:true,modules:''},swiperOptionThumbs:{loop:true,spaceBetween:10,centeredSlides:true,slidesPerView:5,freeMode:true,watchSlidesVisibility:true,watchSlidesProgress:true,slideToClickedSlide:true,loopedSlides:5// looped slides should be the same
}};},mounted(){this.$nextTick(()=>{const swiperTop=this.$refs.swiperTop.$swiper;const swiperThumbs=this.$refs.swiperThumbs.$swiper;swiperTop.controller.control=swiperThumbs;swiperThumbs.controller.control=swiperTop;});},methods:{addToCart(product){const prod={...product,cartQuantity:this.singleQuantity};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Se ha actualizado la cantidad del producto'});}else{this.$notify({title:'Añadido al carrito'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price_base-product.price_base*product.discount/100;},increaseQuantity(){if(this.product.stock>this.singleQuantity){this.singleQuantity++;}else{this.$notify({title:'No hay más stock'});}},decreaseQuantity(){if(this.singleQuantity>1)this.singleQuantity--;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Ya está en la lista de deseos!'});}else{this.$notify({title:'Añadido a la lista de deseos!'});}this.$store.dispatch('addToWishlist',product);},addToCompare(product){// for notification
if(this.$store.state.compare.find(el=>product.id===el.id)){this.$notify({title:'Already added to compare!'});}else{this.$notify({title:'Add to compare successfully!'});}this.$store.dispatch('addToCompare',product);}}});
// CONCATENATED MODULE: ./components/product/ProductDetailsWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductDetailsWrappervue_type_script_lang_js_ = (ProductDetailsWrappervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductDetailsWrapper.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(106)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductDetailsWrappervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "544e9edd"
  
)

/* harmony default export */ var ProductDetailsWrapper = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
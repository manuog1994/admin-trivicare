exports.ids = [43];
exports.modules = {

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridStyleThree.vue?vue&type=template&id=45715643&
var render=function render(){var _vm=this,_c=_vm._self._c;return _vm.product.status=='Publicado'?_c('div',{staticClass:"product-wrap-3 mb-20"},[_vm._ssrNode("<div class=\"product-img\">","</div>",[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(_vm.product.title)}`}},[_vm.product.images.lenght==0?_c('div',[_c('nuxt-img',{staticClass:"default-img",attrs:{"loading":"lazy","provider":"customProvider","src":"nuxt/default.webp","alt":_vm.product.title,"width":"100%","height":"100%"}}),_vm._v(" "),_c('nuxt-img',{staticClass:"hover-img",attrs:{"loading":"lazy","provider":"customProvider","src":"nuxt/default.webp","alt":_vm.product.title,"width":"100%","height":"100%"}})],1):_c('div',[_c('nuxt-img',{staticClass:"default-img",attrs:{"loading":"lazy","provider":"customProvider","src":_vm.product.images[0].path,"alt":_vm.product.title,"width":"100%","height":"100%"}}),_vm._v(" "),_c('nuxt-img',{staticClass:"hover-img",attrs:{"loading":"lazy","provider":"customProvider","src":_vm.product.images[0].path,"alt":_vm.product.title,"width":"100%","height":"100%"}})],1)]),_vm._ssrNode(" <div class=\"product-badges\">"+(_vm.product.new==='Nuevo'?"<span class=\"product-label pink\">Nuevo</span>":"<!---->")+" "+(_vm.product.discount?"<span class=\"product-label purple\">"+_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")+"</span>":"<!---->")+"</div> "),_vm._ssrNode("<div class=\"product-content-3-wrap\">","</div>",[_vm._ssrNode("<div class=\"product-content-3\">","</div>",[_vm._ssrNode("<div class=\"product-title\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('n-link',{attrs:{"to":`/product/${_vm.slugify(_vm.product.title)}`}},[_vm._v(_vm._s(_vm.product.title))])],1)]),_vm._ssrNode(" <div class=\"price-3\"><span>"+_vm._ssrEscape("$"+_vm._s((_vm.discountedPrice(_vm.product)*1.21).toFixed(2)))+"</span> "+(_vm.product.discount>0?"<span class=\"old\">"+_vm._ssrEscape("$"+_vm._s((_vm.product.price_base*1.21).toFixed(2)))+"</span>":"<!---->")+"</div> <div class=\"product-action-3\">"+(_vm.product.stock>0?"<button title=\"Añadir al carrito\" class=\"btn\"><i class=\"pe-7s-cart\"></i></button>":"<!---->")+" <button title=\"Añadir a la lista de deseos\" class=\"btn\"><i class=\"pe-7s-like\"></i></button> <button title=\"Vista previa\" class=\"btn\"><i class=\"pe-7s-look\"></i></button></div>")],2)])],2)]):_vm._e();};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductGridStyleThree.vue?vue&type=template&id=45715643&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/product/ProductGridStyleThree.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductGridStyleThreevue_type_script_lang_js_ = ({props:["product"],methods:{addToCart(product){const prod={...product,cartQuantity:1};// for notification
if(this.$store.state.cart.find(el=>product.id===el.id)){this.$notify({title:'Already added to cart update with one'});}else{this.$notify({title:'Añadido al carrito'});}this.$store.dispatch('addToCartItem',prod);},discountedPrice(product){return product.price_base-product.price_base*product.discount/100;},addToWishlist(product){// for notification
if(this.$store.state.wishlist.find(el=>product.id===el.id)){this.$notify({title:'Already added to wishlist!'});}else{this.$notify({title:'Add to wishlist successfully!'});}this.$store.dispatch('addToWishlist',product);},addToCompare(product){// for notification
if(this.$store.state.compare.find(el=>product.id===el.id)){this.$notify({title:'Already added to compare!'});}else{this.$notify({title:'Add to compare successfully!'});}this.$store.dispatch('addToCompare',product);},onClick(product){this.$modal.show('quickview',product);},slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}}});
// CONCATENATED MODULE: ./components/product/ProductGridStyleThree.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductGridStyleThreevue_type_script_lang_js_ = (ProductGridStyleThreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductGridStyleThree.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridStyleThreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7c81af82"
  
)

/* harmony default export */ var ProductGridStyleThree = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
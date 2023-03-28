exports.ids = [44,42];
exports.modules = {

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductGridItemTwo.vue?vue&type=template&id=559ea645&
var render=function render(){var _vm=this,_c=_vm._self._c;return _vm.product.status=='Publicado'?_c('div',{staticClass:"product-wrap-2 mb-25"},[_vm._ssrNode("<div class=\"product-img\">","</div>",[_c('n-link',{attrs:{"to":`/product/${_vm.product.slug}`}},[_vm.product.images.length==0||_vm.product.images.length==1?_c('div',[_c('nuxt-img',{staticClass:"default-img",attrs:{"loading":"lazy","provider":"customProvider","src":"nuxt/default.webp","alt":_vm.product.name,"width":"100%","height":"100%"}}),_vm._v(" "),_c('nuxt-img',{staticClass:"hover-img",attrs:{"loading":"lazy","provider":"customProvider","src":"nuxt/default.webp","alt":_vm.product.name,"width":"100%","height":"100%"}})],1):_c('div',[_c('nuxt-img',{staticClass:"default-img",attrs:{"loading":"lazy","provider":"customProvider","src":_vm.product.images[0].path,"alt":_vm.product.name,"width":"100%","height":"100%"}}),_vm._v(" "),_c('nuxt-img',{staticClass:"hover-img",attrs:{"loading":"lazy","provider":"customProvider","src":_vm.product.images[1].path,"alt":_vm.product.name,"width":"100%","height":"100%"}})],1)]),_vm._ssrNode(" <div class=\"product-badges\">"+(_vm.product.new==='Nuevo'?"<span class=\"product-label pink\">Nuevo</span>":"<!---->")+" "+(_vm.product.discount?"<span class=\"product-label purple\">"+_vm._ssrEscape("-"+_vm._s(_vm.product.discount)+"%")+"</span>":"<!---->")+"</div> <div class=\"product-action-2\">"+(_vm.product.stock>0?"<button title=\"Añadir al carrito\" class=\"btn\"><i class=\"pe-7s-cart\"></i></button>":"<!---->")+" <button title=\"Vista previa\" class=\"btn\"><i class=\"pe-7s-look\"></i></button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"product-content-2\">","</div>",[_vm._ssrNode("<div class=\"title-price-wrap-2\">","</div>",[_vm._ssrNode("<h3>","</h3>",[_c('n-link',{attrs:{"to":`/product/${_vm.product.slug}`}},[_vm._v(_vm._s(_vm.product.name))])],1),_vm._ssrNode(" <div class=\"price-2\"><span>"+_vm._ssrEscape(_vm._s((_vm.discountedPrice(_vm.product)*1.21).toFixed(2))+" €")+"</span> "+(_vm.product.discount>0?"<span class=\"old\">"+_vm._ssrEscape(_vm._s((_vm.product.price_base*1.21).toFixed(2))+" €")+"</span>":"<!---->")+"</div>")],2),_vm._ssrNode(" <div class=\"pro-wishlist-2\"><button title=\"Añadir a la lista de deseos\"><i class=\"pe-7s-like\"></i></button></div>")],2)],2):_vm._e();};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue?vue&type=template&id=559ea645&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/product/ProductGridItemTwo.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductGridItemTwovue_type_script_lang_js_ = ({props:["product"],methods:{addToCart(product){const prod={...product,cartQuantity:1};// for notification
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
// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductGridItemTwovue_type_script_lang_js_ = (ProductGridItemTwovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductGridItemTwo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductGridItemTwovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e0c41652"
  
)

/* harmony default export */ var ProductGridItemTwo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductWrapperCosmetics.vue?vue&type=template&id=eaae39c2&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<div class=\"product-area pb-95 d-none d-md-block\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<ul class=\"nav product-tab-list-2 pb-55\"><li role=\"presentation\" class=\"nav-item\"><button data-bs-toggle=\"pill\" data-bs-target=\"#sale-product\" role=\"tab\" title=\"Vista previa\" class=\"nav-link active\">Más Vendidos</button></li> <li role=\"presentation\" class=\"nav-item\"><button data-bs-toggle=\"pill\" data-bs-target=\"#new-product\" role=\"tab\" title=\"Últimos productos añadidos\" class=\"nav-link\">Últimos Productos Añadidos</button></li></ul> "),_vm._ssrNode("<div class=\"tab-content\">","</div>",[_vm._ssrNode("<div id=\"new-product\" role=\"tabpanel\" class=\"tab-pane fade\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l(_vm.newsProducts,function(product,index){return _vm._ssrNode("<div class=\"col-xl-3 col-lg-4 col-sm-6\">","</div>",[_c('ProductGridItemTwo',{attrs:{"product":product}})],1);}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"sale-product\" role=\"tabpanel\" class=\"tab-pane fade active show\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",_vm._l(_vm.bestSold,function(product,index){return _vm._ssrNode("<div class=\"col-xl-3 col-lg-4 col-sm-6\">","</div>",[_c('ProductGridItemTwo',{attrs:{"product":product}})],1);}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"view-more text-center mt-20 toggle-btn2\">","</div>",[_c('n-link',{staticClass:"loadMore2",attrs:{"to":"/shop"}},[_vm._v("VER MÁS PRODUCTOS")])],1)],2)],2)])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductWrapperCosmetics.vue?vue&type=template&id=eaae39c2&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/product/ProductWrapperCosmetics.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductWrapperCosmeticsvue_type_script_lang_js_ = ({components:{ProductGridItemTwo:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 133))},data(){return{products:[],bestSold:[],newsProducts:[]};},async mounted(){await this.getProducts();},methods:{async getProducts(){await this.$store.dispatch('getProducts',{perPage:'',page:'',category:'',search:'',slug:'',sort:'',tag:'',status:2});const products=this.$store.getters.getProducts;this.products=products.data;this.lastProducts();this.bestSales();},lastProducts(){const allProducts=this.products.map(item=>{return item;});const idProducts=this.products.map(item=>{if(item.status==='Publicado'){return item.id;}});idProducts.sort((a,b)=>b-a);const lastIdProducts=idProducts.slice(0,4);const lastFourProducts=allProducts.filter(item=>{return lastIdProducts.includes(item.id);});lastFourProducts.sort((a,b)=>b.id-a.id);this.newsProducts=lastFourProducts;},bestSales(){const best=this.products.map(item=>{return item.sold;});best.sort((a,b)=>b-a);const bestSold=best.slice(0,4);const allProducts=this.products.map(item=>{return item;});const bestProducts=allProducts.filter(item=>{return bestSold.includes(item.sold);});bestProducts.sort((a,b)=>b.sold-a.sold);if(bestProducts.length>4){this.bestSold=this.newsProducts;}else{this.bestSold=bestProducts;}}}});
// CONCATENATED MODULE: ./components/product/ProductWrapperCosmetics.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductWrapperCosmeticsvue_type_script_lang_js_ = (ProductWrapperCosmeticsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductWrapperCosmetics.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductWrapperCosmeticsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2c42021d"
  
)

/* harmony default export */ var ProductWrapperCosmetics = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductGridItemTwo: __webpack_require__(133).default})


/***/ })

};;
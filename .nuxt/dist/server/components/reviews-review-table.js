exports.ids = [20];
exports.modules = {

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/reviews/ReviewTable.vue?vue&type=template&id=345bc292&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"main"},[_vm._ssrNode("<div class=\"mb-2\"><div class=\"d-flex justify-content-end\"><button class=\"btn bg-trivi-orange\"><i class=\"fa fa-plus\"></i></button></div> <div class=\"d-flex justify-content-start\"><h3>Valoraciones</h3></div></div> "),_vm._ssrNode("<table class=\"table\">","</table>",[_vm._ssrNode("<thead><tr><th scope=\"col\">Producto</th> <th scope=\"col\">Usuario</th> <th scope=\"col\">Valoración</th> <th scope=\"col\">Comentario</th> <th scope=\"col\">Acciones</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",_vm._l(_vm.paginatedReviews,function(review){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td>"+_vm._ssrEscape(_vm._s(_vm.filterProduct(review===null||review===void 0?void 0:review.product_id)))+"</td> <td>"+_vm._ssrEscape(_vm._s(review.user_name)+" "+_vm._s(review.user_lastname))+"</td> "),_vm._ssrNode("<td>","</td>",[_c('vue-star-rating',{attrs:{"read-only":true,"rating":review.rating,"star-size":20}})],1),_vm._ssrNode(" <td>"+_vm._ssrEscape(_vm._s(review.message))+"</td> <td><button><i class=\"fa fa-trash-o\"></i></button></td>")],2);}),0)],2),_vm._ssrNode(" "),_vm.reviews.length>10?_vm._ssrNode("<div class=\"d-flex justify-content-center\">","</div>",[_c('pagination',{attrs:{"records":_vm.reviews.length,"perPage":_vm.perPage},on:{"paginate":_vm.myCallBack},model:{value:_vm.page,callback:function($$v){_vm.page=$$v;},expression:"page"}})],1):_vm._e()],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/reviews/ReviewTable.vue?vue&type=template&id=345bc292&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/reviews/ReviewTable.vue?vue&type=script&lang=js&
/* harmony default export */ var ReviewTablevue_type_script_lang_js_ = ({data(){return{products:[],reviews:[],page:1,perPage:10};},mounted(){this.getReviews();this.getProducts();},computed:{paginatedReviews(){return this.reviews.slice((this.page-1)*this.perPage,this.page*this.perPage);}},methods:{async getProducts(){await this.$store.dispatch('getProducts',{page:'',category:'',search:'',slug:'',sort:'',tag:'',status:2});const products=this.$store.getters.getProducts;this.products=products.data;},async getReviews(){await this.$axios.get('/api/reviews').then(response=>{this.reviews=response.data.reviews;//console.log(response)
});},filterProduct(id){var _this$products;return(_this$products=this.products)===null||_this$products===void 0?void 0:_this$products.filter(product=>{if(id==product.id){return product.name;}}).map(product=>{return product.name;}).toString();},async destroy(review){await this.$axios.delete('/api/reviews/'+review).then(response=>{this.getReviews();});},myCallBack(page){this.page=page;}}});
// CONCATENATED MODULE: ./components/reviews/ReviewTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var reviews_ReviewTablevue_type_script_lang_js_ = (ReviewTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/reviews/ReviewTable.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reviews_ReviewTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7b80c9df"
  
)

/* harmony default export */ var ReviewTable = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
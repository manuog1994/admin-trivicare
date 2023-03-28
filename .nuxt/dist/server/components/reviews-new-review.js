exports.ids = [19];
exports.modules = {

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/reviews/NewReview.vue?vue&type=template&id=57e87d4f&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"main"},[_vm._ssrNode("<div id=\"des-details3\" class=\"tab-pane\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-lg-12\">","</div>",[_vm._ssrNode("<div class=\"ratting-form-wrapper\">","</div>",[_vm._ssrNode("<div class=\"ratting-form\">","</div>",[_vm._ssrNode("<div class=\"mb-2\"><div class=\"d-flex justify-content-end\"><button class=\"btn bg-trivi-orange\">\n                                    Cerrar\n                                </button></div> <div class=\"d-flex justify-content-start\"><h3>Añadir valoraciones</h3></div></div> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div><select id=\"product-select\" name=\"product_id\" class=\"form-select mt-2 mb-2\"><option value=\"default\">Seleccione un producto</option> "+_vm._ssrList(_vm.products,function(product){return"<option"+_vm._ssrAttr("value",product.id)+">"+_vm._ssrEscape(_vm._s(product.name))+"</option>";})+"</select></div> "),_vm._ssrNode("<div class=\"star-box\">","</div>",[_vm._ssrNode("<span>Valoración:</span> "),_vm._ssrNode("<div class=\"ratting-star\">","</div>",[_c('vue-star-rating',{ref:"rating",attrs:{"star-size":20}})],1)],2),_vm._ssrNode(" <div class=\"row\"><div class=\"row\"><div class=\"col-md-6\"><div class=\"rating-form-style mb-10\"><input name=\"user_name\" placeholder=\"Nombre\" type=\"text\" required=\"required\"></div></div> <div class=\"col-md-6\"><div class=\"rating-form-style mb-10\"><input name=\"user_lastname\" placeholder=\"Apellidos\" type=\"text\" required=\"required\"></div></div></div> <div class=\"col-md-12\"><div class=\"rating-form-style form-submit\"><textarea name=\"message\" placeholder=\"Escribe aquí tu valoración...\"></textarea> <button type=\"submit\" title=\"Enviar\" class=\"btn btn-light\">Crear</button></div></div></div>")],2)],2)])])])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/reviews/NewReview.vue?vue&type=template&id=57e87d4f&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/reviews/NewReview.vue?vue&type=script&lang=js&
/* harmony default export */ var NewReviewvue_type_script_lang_js_ = ({data(){return{products:[]};},mounted(){this.getProducts();},methods:{async getProducts(){await this.$store.dispatch('getProducts',{page:'',category:'',search:'',slug:'',sort:'',tag:'',status:2});const products=this.$store.getters.getProducts;this.products=products.data;},createReview(){const review=this.$refs.rating._data.selectedRating;const form=this.$refs.newReview;const formData=new FormData(form);formData.append('rating',review);formData.append('user_id',this.$auth.user.id);formData.append('user_profile_id',1);this.$axios.post('/api/reviews',formData).then(response=>{form.reset();// Reset rating
window.location.reload();}).catch(error=>{console.log(error);});}}});
// CONCATENATED MODULE: ./components/reviews/NewReview.vue?vue&type=script&lang=js&
 /* harmony default export */ var reviews_NewReviewvue_type_script_lang_js_ = (NewReviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/reviews/NewReview.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  reviews_NewReviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "36e5cae1"
  
)

/* harmony default export */ var NewReview = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
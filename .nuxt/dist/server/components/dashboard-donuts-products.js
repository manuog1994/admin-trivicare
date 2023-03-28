exports.ids = [7];
exports.modules = {

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/DonutsProducts.vue?vue&type=template&id=21b6d191&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<div class=\"d-flex justify-content-center\"><h3>Productos más vendidos</h3></div> "),_vm._ssrNode("<div class=\"d-md-flex justify-content-md-center w-100\">","</div>",[_c('apexchart',{staticStyle:{"width":"100%","min-width":"500px","max-width":"650px","height":"30vh"},attrs:{"type":"donut","options":_vm.options,"series":_vm.series}})],1)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/dashboard/DonutsProducts.vue?vue&type=template&id=21b6d191&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/dashboard/DonutsProducts.vue?vue&type=script&lang=js&
/* harmony default export */ var DonutsProductsvue_type_script_lang_js_ = ({name:'Donut',components:{[ false&&false]:()=>__webpack_require__.e(/* import() */ 21).then(__webpack_require__.t.bind(null, 148, 7))},data:function(){return{options:{chart:{id:'vuechart-example'},labels:[]},series:[]};},mounted(){this.getProducts();},methods:{async getProducts(){await this.$axios.get('/api/products').then(response=>{this.products=response.data.data;//console.log(this.products)
this.products.forEach(product=>{this.series.push(product.sold==null?0:product.sold);this.options.labels.push(product.name);});});}}});
// CONCATENATED MODULE: ./components/dashboard/DonutsProducts.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_DonutsProductsvue_type_script_lang_js_ = (DonutsProductsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/dashboard/DonutsProducts.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_DonutsProductsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e7b7387a"
  
)

/* harmony default export */ var DonutsProducts = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
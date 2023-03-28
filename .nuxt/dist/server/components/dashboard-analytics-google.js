exports.ids = [25];
exports.modules = {

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/AnalyticsGoogle.vue?vue&type=template&id=53625dbf&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_c('apexchart',{attrs:{"options":_vm.options,"series":_vm.series,"type":"line","height":"350"}})],1);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/dashboard/AnalyticsGoogle.vue?vue&type=template&id=53625dbf&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/dashboard/AnalyticsGoogle.vue?vue&type=script&lang=js&
/* harmony default export */ var AnalyticsGooglevue_type_script_lang_js_ = ({data(){return{options:{chart:{id:'visits-chart'},xaxis:{categories:[]}},series:[{name:'Visitas',data:[]}]};},mounted(){const viewId='TU_VIEW_ID_DE_GOOGLE_ANALYTICS';// Reemplaza esto con el ID de vista que deseas utilizar.
const startDate='7daysAgo';const endDate='today';const metrics='ga:sessions';this.$ga.ready(()=>{this.$ga.get('/data/ga',{params:{ids:`ga:${viewId}`,'start-date':startDate,'end-date':endDate,metrics:metrics}}).then(response=>{const data=response.data.rows.map(row=>parseInt(row[0]));const categories=response.data.rows.map(row=>row[1]);this.series[0].data=data;this.options.xaxis.categories=categories;});});}});
// CONCATENATED MODULE: ./components/dashboard/AnalyticsGoogle.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_AnalyticsGooglevue_type_script_lang_js_ = (AnalyticsGooglevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/dashboard/AnalyticsGoogle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_AnalyticsGooglevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dbd0a4be"
  
)

/* harmony default export */ var AnalyticsGoogle = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
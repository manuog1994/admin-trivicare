exports.ids = [8];
exports.modules = {

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/dashboard/GraphicMonths.vue?vue&type=template&id=1cf2f900&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"mb-2"},[_vm._ssrNode("<div class=\"d-flex justify-content-center\"><h3>Ventas por mes</h3></div> "),_vm._ssrNode("<div class=\"d-flex justify-content-center\">","</div>",[_c('apexchart',{staticStyle:{"width":"100%","min-width":"300px","max-width":"650px","height":"30vh"},attrs:{"type":"bar","options":_vm.options,"series":_vm.series}})],1)],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/dashboard/GraphicMonths.vue?vue&type=template&id=1cf2f900&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/dashboard/GraphicMonths.vue?vue&type=script&lang=js&
/* harmony default export */ var GraphicMonthsvue_type_script_lang_js_ = ({name:'Donut',components:{[ false&&false]:()=>__webpack_require__.e(/* import() */ 21).then(__webpack_require__.t.bind(null, 148, 7))},data:function(){return{options:{chart:{id:'vuechart-example'},xaxis:{categories:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']}},series:[{name:'series-1',data:[]}],orders:[],jan:[],feb:[],mar:[],apr:[],may:[],jun:[],jul:[],aug:[],sep:[],oct:[],nov:[],dec:[]};},mounted(){this.getOrders();},methods:{getOrders(){this.$axios.get('/api/orders').then(response=>{this.orders=response.data.data;// si el año del created_at es igual al año actual
this.orders.filter(order=>{if(new Date(order.created_at).getFullYear()==new Date().getFullYear()){// Iterar y asignar valores a cada mes              
this.jan=this.orders.filter(order=>new Date(order.created_at).getMonth()+1==1&&new Date(order.created_at).getFullYear()==new Date().getFullYear()).length>0?this.orders.filter(order=>new Date(order.created_at).getMonth()+1==1).length:0;this.feb=this.orders.filter(order=>new Date(order.created_at).getMonth()+1==2&&new Date(order.created_at).getFullYear()==new Date().getFullYear()).length>0?this.orders.filter(order=>new Date(order.created_at).getMonth()+1==2).length:0;this.mar=this.orders.filter(order=>new Date(order.created_at).getMonth()+1==3&&new Date(order.created_at).getFullYear()==new Date().getFullYear()).length>0?this.orders.filter(order=>new Date(order.created_at).getMonth()+1==3).length:0;this.apr=this.orders.filter(order=>new Date(order.created_at).getMonth()+1==4&&new Date(order.created_at).getFullYear()==new Date().getFullYear()).length>0?this.orders.filter(order=>new Date(order.created_at).getMonth()+1==4).length:0;this.may=this.orders.filter(order=>new Date(order.created_at).getMonth()+1==5&&new Date(order.created_at).getFullYear()==new Date().getFullYear()).length>0?this.orders.filter(order=>new Date(order.created_at).getMonth()+1==5).length:0;this.jun=this.orders.filter(order=>new Date(order.created_at).getMonth()+1==6&&new Date(order.created_at).getFullYear()==new Date().getFullYear()).length>0?this.orders.filter(order=>new Date(order.created_at).getMonth()+1==6).length:0;this.jul=this.orders.filter(order=>new Date(order.created_at).getMonth()+1==7&&new Date(order.created_at).getFullYear()==new Date().getFullYear()).length>0?this.orders.filter(order=>new Date(order.created_at).getMonth()+1==7).length:0;this.aug=this.orders.filter(order=>new Date(order.created_at).getMonth()+1==8&&new Date(order.created_at).getFullYear()==new Date().getFullYear()).length>0?this.orders.filter(order=>new Date(order.created_at).getMonth()+1==8).length:0;this.sep=this.orders.filter(order=>new Date(order.created_at).getMonth()+1==9&&new Date(order.created_at).getFullYear()==new Date().getFullYear()).length>0?this.orders.filter(order=>new Date(order.created_at).getMonth()+1==9).length:0;this.oct=this.orders.filter(order=>new Date(order.created_at).getMonth()+1==10&&new Date(order.created_at).getFullYear()==new Date().getFullYear()).length>0?this.orders.filter(order=>new Date(order.created_at).getMonth()+1==10).length:0;this.nov=this.orders.filter(order=>new Date(order.created_at).getMonth()+1==11&&new Date(order.created_at).getFullYear()==new Date().getFullYear()).length>0?this.orders.filter(order=>new Date(order.created_at).getMonth()+1==11).length:0;this.dec=this.orders.filter(order=>new Date(order.created_at).getMonth()+1==12&&new Date(order.created_at).getFullYear()==new Date().getFullYear()).length>0?this.orders.filter(order=>new Date(order.created_at).getMonth()+1==12).length:0;}});this.series=[{name:'series-1',data:[this.jan,this.feb,this.mar,this.apr,this.may,this.jun,this.jul,this.aug,this.sep,this.oct,this.nov,this.dec]}];});}}});
// CONCATENATED MODULE: ./components/dashboard/GraphicMonths.vue?vue&type=script&lang=js&
 /* harmony default export */ var dashboard_GraphicMonthsvue_type_script_lang_js_ = (GraphicMonthsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/dashboard/GraphicMonths.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dashboard_GraphicMonthsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7cf517bd"
  
)

/* harmony default export */ var GraphicMonths = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
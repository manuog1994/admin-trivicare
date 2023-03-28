exports.ids = [35];
exports.modules = {

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/orders/Orders.vue?vue&type=template&id=f196b728&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<div class=\"main\">","</div>",[_vm._ssrNode("<div><div class=\"d-flex justify-content-end\"><button class=\"btn bg-trivi-red text-white mb-2\"><i class=\"fa fa-history\"></i>\n                    Historial de pedidos\n                </button></div> <div><h2>Pedidos Recientes</h2></div></div> "),_vm._ssrNode("<div class=\"table-responsive\">","</div>",[_vm._ssrNode("<table class=\"table\">","</table>",[_vm._ssrNode("<thead><tr><th scope>Cliente</th> <th scope>Fecha</th> <th scope>Estado</th> <th scope>Acciones</th></tr></thead> "),_vm.orders.length>0?_vm._ssrNode("<tbody>","</tbody>",_vm._l(_vm.paginatedItems,function(order){var _order$user_profile,_order$user_profile2,_order$guest,_order$guest2;return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode((order.guest==null?"<td>"+_vm._ssrEscape(_vm._s((_order$user_profile=order.user_profile)===null||_order$user_profile===void 0?void 0:_order$user_profile.name)+" "+_vm._s((_order$user_profile2=order.user_profile)===null||_order$user_profile2===void 0?void 0:_order$user_profile2.lastname))+"</td>":"<td>"+_vm._ssrEscape(_vm._s((_order$guest=order.guest)===null||_order$guest===void 0?void 0:_order$guest.name)+" "+_vm._s((_order$guest2=order.guest)===null||_order$guest2===void 0?void 0:_order$guest2.lastname))+"</td>")+" <td>"+_vm._ssrEscape(_vm._s(order.order_date))+"</td> "+(order.paid=='PENDIENTE'?"<td>Pendiente</td>":"<!---->")+" "+(order.paid=='PROCESANDO'?"<td>Procesando</td>":"<!---->")+" "+(order.paid=='PAGADO'?"<td>Pagado</td>":"<!---->")+" "+(order.paid=='RECHAZADO'?"<td>Rechazado</td>":"<!---->")+" "),_vm._ssrNode("<td>","</td>",[_c('n-link',{staticClass:"btn bg-trivi-blue",attrs:{"to":`/orders-view/${order.id}`}},[_c('i',{staticClass:"pe-7s-look"})])],1)],2);}),0):_vm._ssrNode("<tbody><tr><td colspan=\"6\">No hay pedidos pendientes.</td></tr></tbody>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"d-flex justify-content-center mt-2\">","</div>",[_c('pagination',{attrs:{"records":_vm.orders.length,"perPage":parseInt(_vm.perPage)},on:{"paginate":_vm.myCallback},model:{value:_vm.page,callback:function($$v){_vm.page=$$v;},expression:"page"}})],1)],2)],2)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/orders/Orders.vue?vue&type=template&id=f196b728&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/orders/Orders.vue?vue&type=script&lang=js&
/* harmony default export */ var Ordersvue_type_script_lang_js_ = ({auth:true,data(){return{orders:[],order:{},pagination:{},page:1,perPage:10};},mounted(){this.getOrders();},computed:{paginatedItems(){const start=(this.page-1)*this.perPage;return this.orders.slice(start,start+this.perPage);}},methods:{async getOrders(){const response=await this.$axios.get('/api/orders');this.orders=response.data.data;},myCallback(page){this.page=page;}}});
// CONCATENATED MODULE: ./components/orders/Orders.vue?vue&type=script&lang=js&
 /* harmony default export */ var orders_Ordersvue_type_script_lang_js_ = (Ordersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/orders/Orders.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  orders_Ordersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dd579d68"
  
)

/* harmony default export */ var Orders = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
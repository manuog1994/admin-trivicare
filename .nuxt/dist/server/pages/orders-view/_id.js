exports.ids = [60,36];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersCom_vue_vue_type_style_index_0_id_df06afea_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersCom_vue_vue_type_style_index_0_id_df06afea_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersCom_vue_vue_type_style_index_0_id_df06afea_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersCom_vue_vue_type_style_index_0_id_df06afea_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersCom_vue_vue_type_style_index_0_id_df06afea_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 109:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/orders/OrdersCom.vue?vue&type=template&id=df06afea&
var render=function render(){var _vm$order,_vm$order$invoice,_vm$order2,_vm$order2$invoice,_vm$order3,_vm$order$user_profil,_vm$order$guest,_vm$order$user_profil2,_vm$order$user_profil3,_vm$order$guest2,_vm$order$user_profil4,_vm$order$user,_vm$order$guest3,_vm$order$user2,_vm$order$user_profil5,_vm$order$guest4,_vm$order$user_profil6,_vm$order$user_profil7,_vm$order$guest5,_vm$order$user_profil8,_vm$order$user_profil9,_vm$order$guest6,_vm$order$user_profil10,_vm$order$user_profil11,_vm$order$guest7,_vm$order$user_profil12,_vm$order$user_profil13,_vm$order$guest8,_vm$order$user_profil14,_vm$order$user_profil15,_vm$order$guest9,_vm$order$user_profil16;var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"container pt-3 pb-100"},[_vm._ssrNode("<div class=\"mb-5\"><div><h2>Detalle del pedido</h2></div></div> <div><div class=\"row\"><div class=\"col-lg-4 mb-4\"><h4>Datos del pedido</h4> <p>Id pedido: <strong>"+_vm._ssrEscape(_vm._s(_vm.order.id))+"</strong></p> "+((_vm$order=_vm.order)!==null&&_vm$order!==void 0&&(_vm$order$invoice=_vm$order.invoice)!==null&&_vm$order$invoice!==void 0&&_vm$order$invoice.invoice_number?"<p>Nº Factura: <strong>"+_vm._ssrEscape(_vm._s((_vm$order2=_vm.order)===null||_vm$order2===void 0?void 0:(_vm$order2$invoice=_vm$order2.invoice)===null||_vm$order2$invoice===void 0?void 0:_vm$order2$invoice.invoice_number))+"</strong></p>":"<!---->")+" <p>Fecha: <strong>"+_vm._ssrEscape(_vm._s(_vm.order.order_date))+"</strong></p> <p>Estado: <strong>"+_vm._ssrEscape(_vm._s(_vm.getState(_vm.order)))+"</strong></p> <p>Estado de pago: <strong>"+_vm._ssrEscape(_vm._s(_vm.getPaymentState(_vm.order)))+"</strong></p> <p>Método de pago: <strong>"+_vm._ssrEscape(_vm._s(_vm.order.payment_method))+"</strong></p> <p>Método de envío: <strong>"+_vm._ssrEscape(_vm._s(_vm.order.shipping_method))+"</strong></p> "+(((_vm$order3=_vm.order)===null||_vm$order3===void 0?void 0:_vm$order3.shipping_method)=='pickup-point'&&_vm.order.pickup_point!=null?"<p>Punto de recogida: <strong>"+_vm._ssrEscape(_vm._s(_vm.order.pickup_point))+"</strong></p>":"<!---->")+"</div> <div class=\"col-lg-4 mb-4\"><h4>Datos del cliente</h4> <p>Nombre: <strong>"+_vm._ssrEscape(_vm._s(((_vm$order$user_profil=_vm.order.user_profile)===null||_vm$order$user_profil===void 0?void 0:_vm$order$user_profil.name)=='Guest'?(_vm$order$guest=_vm.order.guest)===null||_vm$order$guest===void 0?void 0:_vm$order$guest.name:(_vm$order$user_profil2=_vm.order.user_profile)===null||_vm$order$user_profil2===void 0?void 0:_vm$order$user_profil2.name)+" "+_vm._s(((_vm$order$user_profil3=_vm.order.user_profile)===null||_vm$order$user_profil3===void 0?void 0:_vm$order$user_profil3.lastname)=='Guest'?(_vm$order$guest2=_vm.order.guest)===null||_vm$order$guest2===void 0?void 0:_vm$order$guest2.lastname:(_vm$order$user_profil4=_vm.order.user_profile)===null||_vm$order$user_profil4===void 0?void 0:_vm$order$user_profil4.lastname))+"</strong></p> <p>Correo: <strong>"+_vm._ssrEscape(_vm._s(((_vm$order$user=_vm.order.user)===null||_vm$order$user===void 0?void 0:_vm$order$user.email)=='guest@guest.com'?(_vm$order$guest3=_vm.order.guest)===null||_vm$order$guest3===void 0?void 0:_vm$order$guest3.email:(_vm$order$user2=_vm.order.user)===null||_vm$order$user2===void 0?void 0:_vm$order$user2.email))+"</strong></p> <p>Teléfono: <strong>"+_vm._ssrEscape(_vm._s(((_vm$order$user_profil5=_vm.order.user_profile)===null||_vm$order$user_profil5===void 0?void 0:_vm$order$user_profil5.phone)==0?(_vm$order$guest4=_vm.order.guest)===null||_vm$order$guest4===void 0?void 0:_vm$order$guest4.phone:(_vm$order$user_profil6=_vm.order.user_profile)===null||_vm$order$user_profil6===void 0?void 0:_vm$order$user_profil6.phone))+"</strong></p> <p>DNI/NIE/NIF: <strong>"+_vm._ssrEscape(_vm._s(((_vm$order$user_profil7=_vm.order.user_profile)===null||_vm$order$user_profil7===void 0?void 0:_vm$order$user_profil7.dni)=='00000000A'?(_vm$order$guest5=_vm.order.guest)===null||_vm$order$guest5===void 0?void 0:_vm$order$guest5.dni:(_vm$order$user_profil8=_vm.order.user_profile)===null||_vm$order$user_profil8===void 0?void 0:_vm$order$user_profil8.dni))+"</strong></p></div> <div class=\"col-lg-4 mb-4\"><h4>Datos de envío</h4> <p>Dirección: <strong>"+_vm._ssrEscape(_vm._s(((_vm$order$user_profil9=_vm.order.user_profile)===null||_vm$order$user_profil9===void 0?void 0:_vm$order$user_profil9.address)=='Guest'?(_vm$order$guest6=_vm.order.guest)===null||_vm$order$guest6===void 0?void 0:_vm$order$guest6.address:(_vm$order$user_profil10=_vm.order.user_profile)===null||_vm$order$user_profil10===void 0?void 0:_vm$order$user_profil10.address))+"</strong></p> <p>Ciudad: <strong>"+_vm._ssrEscape(_vm._s(((_vm$order$user_profil11=_vm.order.user_profile)===null||_vm$order$user_profil11===void 0?void 0:_vm$order$user_profil11.city)=='Guest'?(_vm$order$guest7=_vm.order.guest)===null||_vm$order$guest7===void 0?void 0:_vm$order$guest7.city:(_vm$order$user_profil12=_vm.order.user_profile)===null||_vm$order$user_profil12===void 0?void 0:_vm$order$user_profil12.city))+"</strong></p> <p>Provincia: <strong>"+_vm._ssrEscape(_vm._s(((_vm$order$user_profil13=_vm.order.user_profile)===null||_vm$order$user_profil13===void 0?void 0:_vm$order$user_profil13.state)=='Guest'?(_vm$order$guest8=_vm.order.guest)===null||_vm$order$guest8===void 0?void 0:_vm$order$guest8.state:(_vm$order$user_profil14=_vm.order.user_profile)===null||_vm$order$user_profil14===void 0?void 0:_vm$order$user_profil14.state))+"</strong></p> <p>Código postal: <strong>"+_vm._ssrEscape(_vm._s(((_vm$order$user_profil15=_vm.order.user_profile)===null||_vm$order$user_profil15===void 0?void 0:_vm$order$user_profil15.zipcode)==0?(_vm$order$guest9=_vm.order.guest)===null||_vm$order$guest9===void 0?void 0:_vm$order$guest9.zipcode:(_vm$order$user_profil16=_vm.order.user_profile)===null||_vm$order$user_profil16===void 0?void 0:_vm$order$user_profil16.zipcode))+"</strong></p></div></div></div> <div><table class=\"table\"><thead><tr><th scope=\"col\">Producto</th> <th scope=\"col\">Cantidad</th> <th scope=\"col\">Precio</th> <th scope=\"col\">Total</th></tr></thead> <tbody>"+_vm._ssrList(this.products,function(product){return"<tr><td><strong>"+_vm._ssrEscape(_vm._s(product.name))+"</strong></td> <td>"+_vm._ssrEscape(_vm._s(product.cartQuantity))+"</td> <td>"+(product.discount<0?"<span>"+_vm._ssrEscape("\n                            "+_vm._s((product.price_base*1.21).toFixed(2))+" €\n                        ")+"</span>":"<span>"+_vm._ssrEscape("\n                            "+_vm._s((_vm.discountedPrice(product)*1.21).toFixed(2))+" €\n                        ")+"</span>")+"</td> <td>"+_vm._ssrEscape(_vm._s((product.price_base*product.cartQuantity*1.21).toFixed(2))+" €")+"</td></tr>";})+"</tbody></table></div> <div><div class=\"d-flex justify-content-start\"><div class=\"mt-2\"><h4>Nota del pedido: <strong>"+_vm._ssrEscape(_vm._s(_vm.order.note))+"</strong></h4> <h4 class=\"mt-2\">Factura en papel: <strong>"+_vm._ssrEscape(_vm._s(_vm.order.invoice_paper==true?'Si':'No'))+"</strong></h4></div></div> <div class=\"d-flex justify-content-end mt-4\"><div class=\"d-flex flex-column\"><div class=\"d-flex justify-content-between mb-2\"><div class=\"me-2 fw-bold\">Subtotal:</div> <div>"+_vm._ssrEscape(_vm._s((_vm.order.total*1.21).toFixed(2))+" €")+"</div></div> "+(_vm.order.coupon?"<div class=\"d-flex justify-content-between mb-2\"><div class=\"me-2 fw-bold\">Cupón:</div> <div>"+_vm._ssrEscape(_vm._s(_vm.order.coupon)+" ")+"</div></div>":"<!---->")+" <div class=\"d-flex justify-content-evenly mb-2\"><div class=\"me-2\"><p class=\"fw-bold\">Gastos de envío:</p></div> "+(_vm.order.shipping==0?"<div><p class=\"text-danger ms-4\">Gratis</p></div>":"<div><p class=\"text-danger ms-4\">"+_vm._ssrEscape(_vm._s(_vm.order.shipping)+" €")+"</p></div>")+"</div> <div class=\"d-flex justify-content-between mt-2\"><div class=\"me-2 fs-4 fw-bold\">Total:</div> "+(_vm.order.shipping==0?"<div style=\"font-size:20px;\">"+_vm._ssrEscape(_vm._s((_vm.order.total*1.21).toFixed(2))+" €")+"</div>":"<div style=\"font-size:20px;\">"+_vm._ssrEscape(_vm._s((parseFloat(_vm.order.total)*1.21+parseFloat(_vm.order.shipping)).toFixed(2))+" €")+"</div>")+"</div></div></div></div> <div class=\"d-flex justify-content-around mt-5 fixed-bottom bg-trivi-purple p-4\"><button class=\"btn bg-trivi-blue text-white\"><i class=\"fa fa-truck icon-nav-order\"></i></button> <button class=\"btn bg-trivi-orange text-white\"><i class=\"fa fa-credit-card icon-nav-order\"></i></button> <button"+_vm._ssrClass("btn bg-trivi-green text-white",{'disabled':_vm.order.email_sent?false:true})+"><i class=\"fa fa-download icon-nav-order\"></i></button> <button class=\"btn bg-trivi-red text-white\"><i class=\"fa fa-level-up icon-nav-order\"></i></button></div> "),_c('modal',{attrs:{"name":"update-state","width":"800px","height":"auto"}},[_c('div',{staticClass:"p-5"},[_c('div',[_c('h2',[_vm._v("Cambiar estado del pedido")])]),_vm._v(" "),_c('form',{ref:"formStatus",on:{"submit":function($event){$event.preventDefault();return _vm.updateStatus.apply(null,arguments);}}},[_c('div',[_c('label',{attrs:{"for":"status"}},[_vm._v("Estado")]),_vm._v(" "),_c('select',{staticClass:"form-select",attrs:{"name":"status","id":"status"},domProps:{"value":_vm.order.status}},[_c('option',{attrs:{"value":"1"}},[_vm._v("Recibido")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("Preparando")]),_vm._v(" "),_c('option',{attrs:{"value":"3"}},[_vm._v("Enviado")]),_vm._v(" "),_c('option',{attrs:{"value":"4"}},[_vm._v("Entregado")]),_vm._v(" "),_c('option',{attrs:{"value":"4"}},[_vm._v("Cancelado")])])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-end mt-3"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"}},[_vm._v("Enviar")])])])])]),_vm._ssrNode(" "),_c('ModalTrack'),_vm._ssrNode(" "),_c('modal',{attrs:{"name":"update-pay","width":"800px","height":"auto"}},[_c('div',{staticClass:"p-5"},[_c('div',[_c('h2',[_vm._v("Cambiar estado de pago")])]),_vm._v(" "),_c('form',{ref:"formPaid",on:{"submit":function($event){$event.preventDefault();return _vm.updatePaid.apply(null,arguments);}}},[_c('div',[_c('label',{attrs:{"for":"pay"}},[_vm._v("Estado")]),_vm._v(" "),_c('select',{staticClass:"form-select",attrs:{"name":"paid","id":"paid"},domProps:{"value":_vm.order.paid}},[_c('option',{attrs:{"value":"Selecciona un estado","disabled":"","selected":""}},[_vm._v("Seleccione un estado")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("Pendiente")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("Procesando")]),_vm._v(" "),_c('option',{attrs:{"value":"3"}},[_vm._v("Pagado")]),_vm._v(" "),_c('option',{attrs:{"value":"4"}},[_vm._v("Rechazado")])])]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-end mt-3"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"}},[_vm._v("Enviar")])])])])])],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/orders/OrdersCom.vue?vue&type=template&id=df06afea&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/orders/OrdersCom.vue?vue&type=script&lang=js&
/* harmony default export */ var OrdersComvue_type_script_lang_js_ = ({components:{ModalTrack:()=>__webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, 182))},data(){return{order:{},products:[],id:this.$route.params.id,users:[],user:{},status:''};},mounted(){this.getOrder();},methods:{async getOrder(){await this.$axios.get('/api/orders?filter[id]='+this.id).then(response=>{const orders=response.data.data;orders.map(order=>{if(order.id==this.id){this.order=order;this.products=JSON.parse(order.products);}});}).catch(error=>{//console.log(error)
});},discountedPrice(product){return product.price_base-product.price_base*product.discount/100;},getState(order){if(order.status==1){return'Recibido';}else if(order.status==2){return'Preparando';}else if(order.status==3){return'Enviado';}else if(order.status==4){return'Entregado';}else{return'Cancelado';}},getPaymentState(order){if(order.paid=='PENDIENTE'){return'Pendiente';}else if(order.paid=='PROCESANDO'){return'Procesando';}else if(order.paid=='PAGADO'){return'Pagado';}else if(order.paid=='RECHAZADO'){return'Rechazado';}else if(order.paid=='CONTRAREEMBOLSO'){return'Contra reembolso';}else if(order.paid=='TRANSFERENCIA'){return'Transferencia';}},async getUrl(order){//console.log(order);
let FileDownload=__webpack_require__(70);await this.$axios.get('/api/invoices/'+order.invoice.id,{responseType:'blob'}).then(response=>{FileDownload(response.data,order.invoice.filename);});},async updateStatus(){const status=this.$refs.formStatus.status.value;if(status==3){this.$modal.hide('update-state');this.$modal.show('modal-track',this.order.id);}else{await this.$axios.put('/api/orders/status/'+this.order.id,{status:status}).then(()=>window.location.reload());}},async updatePaid(){const paid=this.$refs.formPaid.paid.value;await this.$axios.put('/api/orders/paid/'+this.order.id,{paid:paid}).then(()=>window.location.reload());}}});
// CONCATENATED MODULE: ./components/orders/OrdersCom.vue?vue&type=script&lang=js&
 /* harmony default export */ var orders_OrdersComvue_type_script_lang_js_ = (OrdersComvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/orders/OrdersCom.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(104)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  orders_OrdersComvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5efdb845"
  
)

/* harmony default export */ var OrdersCom = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_5a74135c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_5a74135c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_5a74135c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_5a74135c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_5a74135c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/orders-view/_id.vue?vue&type=template&id=5a74135c&scoped=true&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('client-only',[_c('div',{staticClass:"shop-page-wrapper"},[_c('OrdersCom')],1)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./pages/orders-view/_id.vue?vue&type=template&id=5a74135c&scoped=true&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./pages/orders-view/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({components:{OrdersCom:()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 128))},data(){return{searchChildren:'',unauthorized:''};},mounted(){this.$nextTick(()=>{this.$nuxt.$loading.start();setTimeout(()=>{this.$nuxt.$loading.finish();},2000);});if(this.$axios.onError(error=>{const code=error.response.status;if(code===401){this.unauthorized=true;}}));},watch:{unauthorized(){if(this.unauthorized==true){this.$auth.logout();}}},methods:{closeMenus(){this.searchOpacity(false);this.$root.$emit('closeMenu',this.closeMenu);},searchOpacity(searchFather){if(searchFather==true){document.getElementById('post-nav').classList.add('search-screen');}else{document.getElementById('post-nav').classList.remove('search-screen');}}},head(){return{titleTemplate:'Mis Pedidos | TriviCare Natural Cosmetics'};}});
// CONCATENATED MODULE: ./pages/orders-view/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var orders_view_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/orders-view/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(134)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  orders_view_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5a74135c",
  "f0566b72"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {OrdersCom: __webpack_require__(128).default})


/***/ }),

/***/ 93:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ })

};;
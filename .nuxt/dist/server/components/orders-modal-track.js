exports.ids = [14];
exports.modules = {

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/orders/ModalTrack.vue?vue&type=template&id=70f7a0c2&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('modal',{attrs:{"name":"modal-track","width":"800px","height":"auto"},on:{"before-open":_vm.beforeOpen}},[_c('div',[_c('h2',[_vm._v("Añadir número de seguimiento")])]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.updateStatus.apply(null,arguments);}}},[_c('div',[_c('label',{attrs:{"for":"track"}},[_vm._v("Número de seguimiento")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.order.track,expression:"order.track"}],attrs:{"type":"text","name":"track","id":"track"},domProps:{"value":_vm.order.track},on:{"input":function($event){if($event.target.composing)return;_vm.$set(_vm.order,"track",$event.target.value);}}})]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-end mt-3"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"}},[_vm._v("Enviar")])])])]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/orders/ModalTrack.vue?vue&type=template&id=70f7a0c2&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/orders/ModalTrack.vue?vue&type=script&lang=js&
/* harmony default export */ var ModalTrackvue_type_script_lang_js_ = ({data(){return{order:{id:'',track:''}};},methods:{beforeOpen({params:order}){this.order.id=order;},async updateStatus(){await this.$axios.put('/api/orders/status/'+this.order.id,{status:3,track:this.order.track}).then(()=>{this.$notify({title:'El estado del pedido ha sido actualizado'});this.$modal.hide('modal-track');this.order.track='';});}}});
// CONCATENATED MODULE: ./components/orders/ModalTrack.vue?vue&type=script&lang=js&
 /* harmony default export */ var orders_ModalTrackvue_type_script_lang_js_ = (ModalTrackvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/orders/ModalTrack.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  orders_ModalTrackvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0fca3505"
  
)

/* harmony default export */ var ModalTrack = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
exports.ids = [17];
exports.modules = {

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/ProductsTable.vue?vue&type=template&id=7ac338be&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',[_vm._ssrNode("<div class=\"main\">","</div>",[_vm._ssrNode((_vm.edit==false&&_vm.newProduct==false?"<div class=\"d-flex justify-content-end mb-4\"><button class=\"btn btn-primary\"><i class=\"fa fa-plus\"></i></button></div>":"<!---->")+" "),_vm.edit==false&&_vm.newProduct==false?_vm._ssrNode("<table class=\"table\">","</table>",[_vm._ssrNode("<thead><tr><th scope=\"col\">#</th> <th scope=\"col\">Producto(s)</th> <th scope=\"col\">Precio</th> <th scope=\"col\">Descuento</th> <th scope=\"col\">Vendido(s)</th> <th scope=\"col\">Stock</th> <th scope=\"col\">Estado</th> <th scope=\"col\">Acciones</th></tr></thead> "),_vm.products.length>0?_vm._ssrNode("<tbody>","</tbody>",_vm._l(_vm.products,function(product){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<th scope=\"row\">"+_vm._ssrEscape(_vm._s(product.id))+"</th> "),_vm._ssrNode("<td>","</td>",[_c('n-link',{attrs:{"to":`/product/${product.slug}`}},[_vm._v(_vm._s(product.name))])],1),_vm._ssrNode(" <td>"+_vm._ssrEscape(_vm._s(product.price)+" €")+"</td> "+(product.discount>0?"<td>"+_vm._ssrEscape(_vm._s(product.discount)+" %")+"</td>":"<td>-</td>")+" "+(product.sold>0?"<td>"+_vm._ssrEscape(_vm._s(product.sold))+"</td>":"<td>-</td>")+" "+(product.stock>0?"<td>"+_vm._ssrEscape(_vm._s(product.stock))+"</td>":"<td>-</td>")+" <td><select name=\"status\" class=\"form-select\"><option>"+_vm._ssrEscape(_vm._s(product.status))+"</option> "+(product.status==='Borrador'?"<option value=\"Publicado\">Publicado</option>":"<option value=\"Borrador\">Borrador</option>")+"</select></td> <td><div><button title=\"Editar producto\" class=\"btn btn-warning btn-sm text-white\"><i class=\"fa fa-edit\"></i></button> <button title=\"Eliminar producto\" class=\"btn btn-danger btn-sm text-white\"><i class=\"fa fa-trash\"></i></button></div></td>")],2);}),0):_vm._ssrNode("<tbody><tr><td colspan=\"8\">No hay productos.</td></tr></tbody>")],2):_vm._e(),_vm._ssrNode(" "),_vm.edit==false&&_vm.newProduct==false?_vm._ssrNode("<div class=\"d-flex justify-content-center mt-2\">","</div>",[_c('pagination',{attrs:{"records":_vm.products.length,"perPage":_vm.perPage},on:{"paginate":_vm.myCallback},model:{value:_vm.page,callback:function($$v){_vm.page=$$v;},expression:"page"}})],1):_vm._e(),_vm._ssrNode(" "),_vm.edit==true?_c('EditProduct',{attrs:{"product":_vm.product}}):_vm._e(),_vm._ssrNode(" "),_vm.newProduct==true?_c('CreateProduct'):_vm._e()],2),_vm._ssrNode(" "),_vm.loading==true?_c('BigLoader'):_vm._e()],2);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/ProductsTable.vue?vue&type=template&id=7ac338be&

// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(71);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/product/ProductsTable.vue?vue&type=script&lang=js&
/* harmony default export */ var ProductsTablevue_type_script_lang_js_ = ({auth:true,components:{EditProduct:()=>__webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, 185)),BigLoader:()=>__webpack_require__.e(/* import() */ 3).then(__webpack_require__.bind(null, 180)),CreateProduct:()=>__webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, 184))},data(){return{products:[],status:'',productId:'',yesterday:[],today:[],index:[],store:[],productsVisitors:[],cart:[],checkout:[],product:[],edit:false,newProduct:false,page:1,perPage:10};},beforeMount(){this.loading=true;this.$root.$on('closeAdd',data=>{this.newProduct=data;});this.$root.$on('closeEdit',data=>{this.edit=data;});},async mounted(){await this.getProducts();},computed:{paginatedItems(){const start=(this.page-1)*this.perPage;return this.products.slice(start,start+this.perPage);}},methods:{async getProducts(){await this.$axios.get('/api/products').then(response=>{this.products=response.data.data;this.loading=false;});},onClick(product){this.edit=true;this.product=product;},onClickNew(){this.newProduct=true;},async updateStatus(product){if(product.status==='Publicado'){await this.$axios.put('/api/products/status/'+product.id,{status:'Borrador'}).then(res=>{this.$notify({title:'Estado del producto actualizado'});});}else{await this.$axios.put('/api/products/status/'+product.id,{status:'Publicado'}).then(res=>{this.$notify({title:'Estado del producto actualizado'});});}window.location.reload(true);},destroy(id){external_sweetalert2_default.a.fire({title:'¿Estás seguro?',text:"¡No podrás revertir esto!",icon:'warning',showCancelButton:true,confirmButtonColor:'#3085d6',cancelButtonColor:'#d33',confirmButtonText:'¡Sí, bórralo!'}).then(result=>{if(result.isConfirmed){this.$axios.delete('/api/products/'+id).then(res=>{this.$notify({title:'Producto eliminado'});window.location.reload(true);});}});},myCallback(page){this.page=page;}}});
// CONCATENATED MODULE: ./components/product/ProductsTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_ProductsTablevue_type_script_lang_js_ = (ProductsTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/ProductsTable.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_ProductsTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7d3550e7"
  
)

/* harmony default export */ var ProductsTable = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
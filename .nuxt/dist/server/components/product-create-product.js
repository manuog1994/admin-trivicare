exports.ids = [15];
exports.modules = {

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/product/CreateProduct.vue?vue&type=template&id=9e0b4bc0&
var render=function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"main w-100"},[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"mb-4 d-inline-block\"><div class=\"d-flex justify-content-end\"><button class=\"btn bg-trivi-red text-white\"><i class=\"fa fa-close\"></i>\n                    Cerrar\n                </button></div> <h1>Añadir producto</h1></div> "),_vm._ssrNode("<div class=\"col-12\">","</div>",[_vm._ssrNode("<div class=\"m-auto\">","</div>",[_vm._ssrNode("<form class=\"row\">","</form>",[_vm._ssrNode("<div class=\"col-12 mb-2\"><label for=\"title\">Título</label> <input type=\"text\" name=\"name\" required=\"required\""+_vm._ssrAttr("value",_vm.title)+" class=\"form-control\"></div> "),_vm._ssrNode("<div class=\"col-12 mb-2\">","</div>",[_vm._ssrNode("<label for=\"description\">Descripción</label> "),_c('editor',{attrs:{"api-key":"8e7yeojh0bqgf51hmsdm12zbmuqh7yjs010wttlmc8yzgm6o","init":{height:500,menubar:true,plugins:['advlist autolink lists link image charmap print preview anchor','searchreplace visualblocks code fullscreen','insertdatetime media table paste code help wordcount'],toolbar:'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'}},model:{value:_vm.content,callback:function($$v){_vm.content=$$v;},expression:"content"}})],2),_vm._ssrNode(" <div class=\"col-12 mb-2\"><label for=\"specifications\">Mini Descripción</label> <textarea name=\"specifications\" id=\"specifications\" required=\"required\" class=\"form-control\"></textarea></div> <div class=\"col-12 mb-2\"><label for=\"specifications\">Meta Descripción</label> <textarea name=\"meta_description\" id=\"meta_description\" required=\"required\" class=\"form-control\"></textarea></div> <div class=\"col-12 col-md-3 mb-2\"><label for=\"price\">Precio</label> <input type=\"number\" name=\"price\" step=\".01\" required=\"required\" class=\"form-control\"></div> <div class=\"col-12 col-md-3 mb-2\"><label for=\"stock\">\n                            Stock\n                        </label> <input type=\"number\" name=\"stock\" required=\"required\" class=\"form-control\"></div> <div class=\"col-12 col-md-6 mb-2\"><label for=\"barcode\">Código de Barras</label> <input type=\"number\" name=\"barcode\" required=\"required\" class=\"form-control\"></div> <div class=\"col-12 col-md-4 mb-2\"><label for=\"category\">Categoría</label> <select name=\"category_id\" required=\"required\" class=\"form-select\">"+_vm._ssrList(_vm.categories,function(category){return"<option"+_vm._ssrAttr("value",category.id)+">"+_vm._ssrEscape(_vm._s(category.name))+"</option>";})+"</select></div> <div class=\"col-12 col-md-8 mb-2\"><label for=\"slug\">Slug</label> <input type=\"text\" name=\"slug\" required=\"required\""+_vm._ssrAttr("value",_vm.slugify(_vm.title))+" class=\"form-control\"></div> <div class=\"col-12 col-md-4 mb-2\"><label for=\"discount\">Descuento</label> <input type=\"number\" name=\"discount\" step=\".01\" class=\"form-control\"></div> <div class=\"col-12 col-md-4 mb-2\"><label for=\"weight\">Peso</label> <input type=\"number\" name=\"weight\" step=\".01\" required=\"required\" class=\"form-control\"></div> <div class=\"col-12 col-md-4 mb-2\"><label for=\"size\">Tamaño</label> <input type=\"number\" name=\"size\" step=\".01\" class=\"form-control\"></div> <div class=\"col-12 border-bottom-1 mb-2 pb-4\"><label for=\"dimensions\">Dimensiones</label> <input type=\"text\" name=\"dimensions\" required=\"required\" class=\"form-control\"></div> <div class=\"border-bottom-1 mb-3\"><div><h2 class=\"mt-3\">Activos</h2></div> <div class=\"row mt-2 mb-2\">"+_vm._ssrList(_vm.tags,function(tag){return"<div class=\"form-check col-6 col-md-3 mb-2\"><input type=\"checkbox\" id=\"flexCheckDefault\""+_vm._ssrAttr("value",tag.id)+_vm._ssrAttr("checked",Array.isArray(_vm.inputTag)?_vm._i(_vm.inputTag,tag.id)>-1:_vm.inputTag)+" class=\"form-check-input\"> <label for=\"flexCheckDefault\" class=\"form-check-label\">"+_vm._ssrEscape("\n                                    "+_vm._s(tag.name)+"\n                                ")+"</label></div>";})+"</div></div> <div class=\"border-bottom-1 mb-4 pb-3\"><div class=\"row\"><div class=\"mb-2\"><h2>Imágenes</h2></div> <div class=\"mb-2\"><label for=\"images\">Imágenes</label> <input type=\"file\" name=\"files\" multiple=\"multiple\" class=\"form-control\"></div></div></div> <div class=\"mb-5\"><button type=\"submit\" title=\"Crear Producto\" class=\"btn btn-primary\">Crear Producto</button></div>")],2)])])],2)]);};var staticRenderFns=[];
// CONCATENATED MODULE: ./components/product/CreateProduct.vue?vue&type=template&id=9e0b4bc0&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/product/CreateProduct.vue?vue&type=script&lang=js&
/* harmony default export */ var CreateProductvue_type_script_lang_js_ = ({auth:true,data(){return{inputTag:[],images:[],tags:[],content:'',title:''};},computed:{categories(){return this.$store.state.categories;}},mounted(){setTimeout(()=>{this.getTags();},1000);},methods:{async getCategories(){await this.$store.dispatch('getCategories');},async getTags(){await this.$axios.get('api/tags').then(response=>{this.tags=response.data.data;}).catch(error=>{console.log(error);});},groupImages(e){this.images=e.target.files;},async newProduct(){if(this.$refs.productform.checkValidity()){this.$refs.productform.classList.remove('was-validated');const formData=new FormData(this.$refs.productform);formData.append('tags',JSON.stringify(this.inputTag));formData.append('description',this.content);const images=this.images;for(let i=0;i<images.length;i++){formData.append('images[]',images[i]);}await this.$axios.post('/api/products/',formData,{headers:{'Content-Type':'multipart/form-data','Access-Control-Allow-Origin':'*'}}).then(response=>{this.$refs.productform.reset();this.$notify({title:'El producto se ha creado correctamente',type:'success'});}).catch(error=>{console.log(error);this.$notify({title:'Ha ocurrido un error',type:'error'});});}else{this.$refs.productform.classList.add('was-validated');}},closeAdd(){this.$root.$emit('closeAdd',false);},slugify(text){return text.toString().toLowerCase().replace(/\s+/g,"-")// Replace spaces with -
.replace(/[^\w-]+/g,"")// Remove all non-word chars
.replace(/--+/g,"-")// Replace multiple - with single -
.replace(/^-+/,"")// Trim - from start of text
.replace(/-+$/,"");// Trim - from end of text
}}});
// CONCATENATED MODULE: ./components/product/CreateProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_CreateProductvue_type_script_lang_js_ = (CreateProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/product/CreateProduct.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_CreateProductvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "32409bf0"
  
)

/* harmony default export */ var CreateProduct = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
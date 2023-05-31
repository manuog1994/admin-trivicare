(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{650:function(t,e,r){"use strict";r.r(e);r(18),r(4),r(25),r(12),r(15);var o=r(11),n=(r(51),r(42),r(2),r(0),{auth:!0,props:["product"],data:function(){return{item:{name:"",description:"",specifications:"",price:"",stock:"",barcode:"",category_id:"",slug:"",status:"",discount:"",weight:"",size:"",dimensions:"",new:"",tags:"",content:"",meta_description:""},images:[],inputTags:[],products:[],singleProduct:{},tags:[],baseUrl:"https://api.trivicare.com",title:""}},computed:{categories:function(){return this.$store.state.categories}},mounted:function(){var t=this;setTimeout((function(){t.getProducts(),t.getTags()}),1e3)},methods:{getProducts:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/products").then((function(e){e.data.data.filter((function(e){e.id===t.product.id&&(t.item=e)})),t.$root.$emit("loading",!1)})).catch((function(e){console.log(e),t.$root.$emit("loading",!1)}));case 2:case"end":return e.stop()}}),e)})))()},getCategories:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getCategories");case 2:case"end":return e.stop()}}),e)})))()},getTags:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/tags").then((function(e){t.tags=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()},updateProduct:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,c,l,d,m,v,f,_,h,C,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.put("/api/products/"+t.item.id,{name:null===(r=t.$refs.name)||void 0===r?void 0:r.value,description:null===(o=t.item)||void 0===o?void 0:o.description,specifications:null===(n=t.$refs.specifications)||void 0===n?void 0:n.value,meta_description:null===(c=t.$refs.meta_description)||void 0===c?void 0:c.value,price:null===(l=t.$refs.price)||void 0===l?void 0:l.value,stock:null===(d=t.$refs.stock)||void 0===d?void 0:d.value,barcode:null===(m=t.$refs.barcode)||void 0===m?void 0:m.value,category_id:null===(v=t.$refs.category_id)||void 0===v?void 0:v.value,slug:null===(f=t.$refs.slug)||void 0===f?void 0:f.value,discount:null===(_=t.$refs.discount)||void 0===_?void 0:_.value,weight:null===(h=t.$refs.weight)||void 0===h?void 0:h.value,size:null===(C=t.$refs.size)||void 0===C?void 0:C.value,dimensions:null===(y=t.$refs.dimensions)||void 0===y?void 0:y.value,tags:JSON.stringify(t.inputTags)}).then((function(e){console.log(e),t.$notify({title:"El producto se ha actualizado correctamente",type:"success"})})).catch((function(e){console.log(e),t.$notify({title:"Ha ocurrido un error",type:"error"})}));case 2:case"end":return e.stop()}}),e)})))()},deleteTag:function(t){var e=this,r=t.id,o=this.item.id;this.$axios.delete("/api/products/"+o+"/tags/"+r).then((function(t){e.getProducts(),e.$notify({title:"El tag se ha eliminado correctamente",type:"success"})})).catch((function(t){console.log(t),e.$notify({title:"Ha ocurrido un error",type:"error"})}))},deleteImage:function(image){var t=this,e=image.id;this.$axios.delete("/api/images/"+e).then((function(e){t.getProducts(),t.$notify({title:"La imagen se ha eliminado correctamente",type:"success"})})).catch((function(e){console.log(e),t.$notify({title:"Ha ocurrido un error",type:"error"})}))},updateImage:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(e.images=t.target.files,o=new FormData,n=e.images,i=0;i<n.length;i++)o.append("images[]",n[i]);return o.append("product_id",e.item.id),r.next=7,e.$axios.post("/api/images",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){console.log(t),e.images=[],e.$refs.file.value="",e.getProducts(),e.$notify({title:"La imagen se ha subido correctamente!"})})).catch((function(t){console.log(t),e.$notify({title:"Ha ocurrido un error al subir la imagen!"})}));case 7:case"end":return r.stop()}}),r)})))()},closeEdit:function(){this.$root.$emit("closeEdit",!1)}}}),c=r(68),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"main w-100"},[e("div",{staticClass:"mb-2 d-inline-block w-100"},[e("div",{staticClass:"d-flex justify-content-end"},[e("button",{staticClass:"btn bg-trivi-red text-white",on:{click:t.closeEdit}},[e("i",{staticClass:"fa fa-close"}),t._v("\n                    Cerrar\n                ")])]),t._v(" "),e("h2",[t._v("Modificar Producto")])]),t._v(" "),e("form",{ref:"updateproduct",staticClass:"row",on:{submit:t.updateProduct}},[e("div",{staticClass:"col-12 mb-2"},[e("label",{attrs:{for:"title"}},[t._v("Título")]),t._v(" "),e("input",{ref:"name",staticClass:"form-control",attrs:{type:"text",name:"name"},domProps:{value:t.item.name}})]),t._v(" "),e("div",{staticClass:"col-12 mb-2"},[e("label",{attrs:{for:"description"}},[t._v("Descripción")]),t._v(" "),e("editor",{attrs:{"api-key":"8e7yeojh0bqgf51hmsdm12zbmuqh7yjs010wttlmc8yzgm6o",init:{height:500,menubar:!0,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |                     alignleft aligncenter alignright alignjustify |                     bullist numlist outdent indent | removeformat | help"}},model:{value:t.item.description,callback:function(e){t.$set(t.item,"description",e)},expression:"item.description"}})],1),t._v(" "),e("div",{staticClass:"col-12 mb-2"},[e("label",{attrs:{for:"specifications"}},[t._v("Mini descripción")]),t._v(" "),e("textarea",{ref:"specifications",staticClass:"form-control",attrs:{name:"specifications",id:"specifications"},domProps:{value:t.item.specifications}})]),t._v(" "),e("div",{staticClass:"col-12 mb-2"},[e("label",{attrs:{for:"meta_description"}},[t._v("Meta descripción")]),t._v(" "),e("textarea",{ref:"meta_description",staticClass:"form-control",attrs:{name:"meta_description",id:"meta_description"},domProps:{value:t.item.meta_description}})]),t._v(" "),e("div",{staticClass:"col-12 col-md-3 mb-2"},[e("label",{attrs:{for:"price"}},[t._v("Precio")]),t._v(" "),e("input",{ref:"price",staticClass:"form-control",attrs:{type:"number",name:"price",step:".01"},domProps:{value:t.item.price}})]),t._v(" "),e("div",{staticClass:"col-12 col-md-3 mb-2"},[e("label",{attrs:{for:"stock"}},[t._v("\n                    Stock\n                ")]),t._v(" "),e("input",{ref:"stock",staticClass:"form-control",attrs:{type:"number",name:"stock",step:".01"},domProps:{value:t.item.stock}})]),t._v(" "),e("div",{staticClass:"col-12 col-md-6 mb-2"},[e("label",{attrs:{for:"barcode"}},[t._v("Código de Barras")]),t._v(" "),e("input",{ref:"barcode",staticClass:"form-control",attrs:{type:"number",name:"barcode"},domProps:{value:t.item.barcode}})]),t._v(" "),e("div",{staticClass:"col-12 col-md-4 mb-2"},[e("label",{attrs:{for:"category"}},[t._v("Categoría")]),t._v(" "),e("select",{ref:"category_id",staticClass:"form-select",attrs:{name:"category_id"},domProps:{value:t.item.category_id}},t._l(t.categories,(function(r){return e("option",{key:r.id,domProps:{value:r.id}},[t._v(t._s(r.name))])})),0)]),t._v(" "),e("div",{staticClass:"col-12 col-md-8 mb-2"},[e("label",{attrs:{for:"slug"}},[t._v("Slug")]),t._v(" "),e("input",{ref:"slug",staticClass:"form-control",attrs:{type:"text",name:"slug"},domProps:{value:t.item.slug}})]),t._v(" "),e("div",{staticClass:"col-12 col-md-4 mb-2"},[e("label",{attrs:{for:"discount"}},[t._v("Descuento")]),t._v(" "),e("input",{ref:"discount",staticClass:"form-control",attrs:{type:"number",name:"discount",step:".01"},domProps:{value:t.item.discount}})]),t._v(" "),e("div",{staticClass:"col-12 col-md-4 mb-2"},[e("label",{attrs:{for:"weight"}},[t._v("Peso")]),t._v(" "),e("input",{ref:"weight",staticClass:"form-control",attrs:{type:"number",name:"weight",step:".01"},domProps:{value:t.item.weight}})]),t._v(" "),e("div",{staticClass:"col-12 col-md-4 mb-2"},[e("label",{attrs:{for:"size"}},[t._v("Tamaño")]),t._v(" "),e("input",{ref:"size",staticClass:"form-control",attrs:{type:"number",name:"size",step:".01"},domProps:{value:t.item.size}})]),t._v(" "),e("div",{staticClass:"col-12 mb-2 pb-4 border-bottom-1"},[e("label",{attrs:{for:"dimensions"}},[t._v("Dimensiones")]),t._v(" "),e("input",{ref:"dimensions",staticClass:"form-control",attrs:{type:"text",name:"dimensions"},domProps:{value:t.item.dimensions}})]),t._v(" "),e("div",{attrs:{id:"actives"}},[t._m(0),t._v(" "),e("div",{staticClass:"bg-aqua rounded mb-3"},[e("span",{staticClass:"ms-2"},[t._v("Actuales:")]),t._v(" "),e("div",{staticClass:"row"},t._l(t.item.tags,(function(r){return e("div",{key:r.id,staticClass:"col-6 col-md-4"},[e("p",{staticClass:"ms-2"},[t._v("\n                                "+t._s(r.name)+" \n                                "),e("a",{on:{click:function(e){return e.preventDefault(),t.deleteTag(r)}}},[e("i",{staticClass:"fa fa-trash"})])])])})),0)]),t._v(" "),e("div",{staticClass:"row mt-2 mb-3 pb-3 border-bottom-1"},t._l(t.tags,(function(r){return e("div",{key:r.id,staticClass:"form-check col-12 col-md-3 mb-2 ms-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTags,expression:"inputTags"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexCheckDefault"},domProps:{value:r.id,checked:Array.isArray(t.inputTags)?t._i(t.inputTags,r.id)>-1:t.inputTags},on:{change:function(e){var o=t.inputTags,n=e.target,c=!!n.checked;if(Array.isArray(o)){var l=r.id,d=t._i(o,l);n.checked?d<0&&(t.inputTags=o.concat([l])):d>-1&&(t.inputTags=o.slice(0,d).concat(o.slice(d+1)))}else t.inputTags=c}}}),t._v(" "),e("label",{staticClass:"form-check-label",attrs:{for:"flexCheckDefault"}},[t._v("\n                            "+t._s(r.name)+"\n                        ")])])})),0)]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"mt-2"},[e("div",{staticClass:"row mb-5"},[t._m(2),t._v(" "),t._l(t.item.images,(function(image){return e("div",{key:image.id,staticClass:"col-3 text-center mb-3"},[e("img",{staticClass:"img-fluid",attrs:{src:t.baseUrl+"/"+image.path,alt:t.product.name}}),t._v(" "),e("a",{on:{click:function(e){return e.preventDefault(),t.deleteImage(image)}}},[t._v("Eliminar "),e("i",{staticClass:"fa fa-trash"})])])})),t._v(" "),e("div",{staticClass:"mb-2"},[e("label",{attrs:{for:"images"}},[t._v("Imágenes")]),t._v(" "),e("input",{ref:"file",staticClass:"form-control",attrs:{type:"file",multiple:""},on:{change:t.updateImage}})])],2)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"mb-2"},[t("h2",{staticClass:"mt-3"},[this._v("Activos")])])},function(){var t=this._self._c;return t("div",{staticClass:"mb-2"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit",title:"Guardar"}},[this._v("Guardar")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-2"},[e("h2",[t._v("Imágenes")]),t._v(" "),e("p",[t._v("("),e("span",{staticClass:"fw-bold"},[t._v("¡IMPORTANTE!")]),t._v(" Guardar los cambios antes de borrar o subir nuevas imágenes)")])])}],!1,null,null,null);e.default=component.exports}}]);
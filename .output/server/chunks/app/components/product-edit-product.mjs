function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var productEditProduct$1 = {};

var ids = productEditProduct$1.ids = [16];
var modules = productEditProduct$1.modules = {
  185: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm._ssrNode('<div class="main w-100">', "</div>", [_vm._ssrNode('<div class="mb-2 d-inline-block w-100"><div class="d-flex justify-content-end"><button class="btn bg-trivi-red text-white"><i class="fa fa-close"></i>\n                    Cerrar\n                </button></div> <h2>Modificar Producto</h2></div> '), _vm._ssrNode('<form class="row">', "</form>", [_vm._ssrNode('<div class="col-12 mb-2"><label for="title">T\xEDtulo</label> <input type="text" name="name"' + _vm._ssrAttr("value", _vm.item.name) + ' class="form-control"></div> '), _vm._ssrNode('<div class="col-12 mb-2">', "</div>", [_vm._ssrNode('<label for="description">Descripci\xF3n</label> '), _c("editor", { attrs: { "api-key": "8e7yeojh0bqgf51hmsdm12zbmuqh7yjs010wttlmc8yzgm6o", "init": { height: 500, menubar: true, plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table paste code help wordcount"], toolbar: "undo redo | formatselect | bold italic backcolor |                     alignleft aligncenter alignright alignjustify |                     bullist numlist outdent indent | removeformat | help" } }, model: { value: _vm.item.description, callback: function($$v) {
        _vm.$set(_vm.item, "description", $$v);
      }, expression: "item.description" } })], 2), _vm._ssrNode(' <div class="col-12 mb-2"><label for="specifications">Especificaciones</label> <textarea name="specifications" id="specifications"' + _vm._ssrAttr("value", _vm.item.specifications) + ' class="form-control"></textarea></div> <div class="col-12 col-md-3 mb-2"><label for="price">Precio</label> <input type="number" name="price" step=".01"' + _vm._ssrAttr("value", _vm.item.price) + ' class="form-control"></div> <div class="col-12 col-md-3 mb-2"><label for="stock">\n                    Stock\n                </label> <input type="number" name="stock" step=".01"' + _vm._ssrAttr("value", _vm.item.stock) + ' class="form-control"></div> <div class="col-12 col-md-6 mb-2"><label for="barcode">C\xF3digo de Barras</label> <input type="number" name="barcode"' + _vm._ssrAttr("value", _vm.item.barcode) + ' class="form-control"></div> <div class="col-12 col-md-4 mb-2"><label for="category">Categor\xEDa</label> <select name="category_id"' + _vm._ssrAttr("value", _vm.item.category_id) + ' class="form-select">' + _vm._ssrList(_vm.categories, function(category) {
        return "<option" + _vm._ssrAttr("value", category.id) + ">" + _vm._ssrEscape(_vm._s(category.name)) + "</option>";
      }) + '</select></div> <div class="col-12 col-md-8 mb-2"><label for="slug">Slug</label> <input type="text" name="slug"' + _vm._ssrAttr("value", _vm.slugify(_vm.item.name)) + ' class="form-control"></div> <div class="col-12 col-md-4 mb-2"><label for="discount">Descuento</label> <input type="number" name="discount" step=".01"' + _vm._ssrAttr("value", _vm.item.discount) + ' class="form-control"></div> <div class="col-12 col-md-4 mb-2"><label for="weight">Peso</label> <input type="number" name="weight" step=".01"' + _vm._ssrAttr("value", _vm.item.weight) + ' class="form-control"></div> <div class="col-12 col-md-4 mb-2"><label for="size">Tama\xF1o</label> <input type="number" name="size" step=".01"' + _vm._ssrAttr("value", _vm.item.size) + ' class="form-control"></div> <div class="col-12 mb-2 pb-4 border-bottom-1"><label for="dimensions">Dimensiones</label> <input type="text" name="dimensions"' + _vm._ssrAttr("value", _vm.item.dimensions) + ' class="form-control"></div> <div id="actives"><div class="mb-2"><h2 class="mt-3">Activos</h2></div> <div class="bg-aqua rounded mb-3"><span class="ms-2">Actuales:</span> <div class="row">' + _vm._ssrList(_vm.item.tags, function(tag) {
        return '<div class="col-6 col-md-4"><p class="ms-2">' + _vm._ssrEscape("\n                                " + _vm._s(tag.name) + " \n                                ") + '<a><i class="fa fa-trash"></i></a></p></div>';
      }) + '</div></div> <div class="row mt-2 mb-3 pb-3 border-bottom-1">' + _vm._ssrList(_vm.tags, function(tag) {
        return '<div class="form-check col-12 col-md-3 mb-2 ms-3"><input type="checkbox" id="flexCheckDefault"' + _vm._ssrAttr("value", tag.id) + _vm._ssrAttr("checked", Array.isArray(_vm.inputTags) ? _vm._i(_vm.inputTags, tag.id) > -1 : _vm.inputTags) + ' class="form-check-input"> <label for="flexCheckDefault" class="form-check-label">' + _vm._ssrEscape("\n                            " + _vm._s(tag.name) + "\n                        ") + "</label></div>";
      }) + '</div></div> <div class="mb-2"><button type="submit" title="Guardar" class="btn btn-primary">Guardar</button></div>')], 2), _vm._ssrNode(' <div class="mt-2"><div class="row mb-5"><div class="mb-2"><h2>Im\xE1genes</h2> <p>(<span class="fw-bold">\xA1IMPORTANTE!</span> Guardar los cambios antes de borrar o subir nuevas im\xE1genes)</p></div> ' + _vm._ssrList(_vm.item.images, function(image) {
        return '<div class="col-3 text-center mb-3"><img' + _vm._ssrAttr("src", _vm.baseUrl + "/" + image.path) + _vm._ssrAttr("alt", _vm.product.name) + ' class="img-fluid"> <a>Eliminar <i class="fa fa-trash"></i></a></div>';
      }) + ' <div class="mb-2"><label for="images">Im\xE1genes</label> <input type="file" multiple="multiple" class="form-control"></div></div></div>')], 2), _vm._ssrNode(" "), _vm.loading ? _c("BigLoader") : _vm._e()], 2);
    };
    var staticRenderFns = [];
    var EditProductvue_type_script_lang_js_ = { auth: true, props: ["product"], data() {
      return { item: { name: "", description: "", specifications: "", price: "", stock: "", barcode: "", category_id: "", slug: "", status: "", discount: "", weight: "", size: "", dimensions: "", new: "", tags: "", content: "" }, images: [], inputTags: [], products: [], singleProduct: {}, tags: [], baseUrl: "https://api.trivicare.com", loading: false, title: "" };
    }, computed: { categories() {
      return this.$store.state.categories;
    } }, components: { BigLoader: () => __webpack_require__.e(3).then(__webpack_require__.bind(null, 180)) }, beforeMount() {
      this.loading = true;
    }, mounted() {
      setTimeout(() => {
        this.getProducts();
        this.getTags();
      }, 1e3);
    }, methods: { async getProducts() {
      await this.$axios.get("/api/products").then((response) => {
        const data = response.data.data;
        data.filter((product) => {
          if (product.id === this.product.id) {
            this.item = product;
          }
        });
        this.loading = false;
      }).catch((error) => {
        console.log(error);
        this.loading = false;
      });
    }, async getCategories() {
      await this.$store.dispatch("getCategories");
    }, async getTags() {
      await this.$axios.get("/api/tags").then((response) => {
        this.tags = response.data.data;
      });
    }, async updateProduct() {
      await this.$axios.put("/api/products/" + this.item.id, { name: this.$refs.name.value, description: this.item.description, specifications: this.$refs.specifications.value, price: this.$refs.price.value, stock: this.$refs.stock.value, barcode: this.$refs.barcode.value, category_id: this.$refs.category_id.value, slug: this.$refs.slug.value, discount: this.$refs.discount.value, weight: this.$refs.weight.value, size: this.$refs.size.value, dimensions: this.$refs.dimensions.value, tags: JSON.stringify(this.inputTags) }).then((response) => {
        console.log(response);
        this.$notify({ title: "El producto se ha actualizado correctamente", type: "success" });
      }).catch((error) => {
        console.log(error);
        this.$notify({ title: "Ha ocurrido un error", type: "error" });
      });
    }, deleteTag(tag) {
      const tag_id = tag.id;
      const product_id = this.item.id;
      this.$axios.delete("/api/products/" + product_id + "/tags/" + tag_id).then((response) => {
        this.getProducts();
        this.$notify({ title: "El tag se ha eliminado correctamente", type: "success" });
      }).catch((error) => {
        console.log(error);
        this.$notify({ title: "Ha ocurrido un error", type: "error" });
      });
    }, deleteImage(image) {
      const image_id = image.id;
      this.$axios.delete("/api/images/" + image_id).then((response) => {
        this.getProducts();
        this.$notify({ title: "La imagen se ha eliminado correctamente", type: "success" });
      }).catch((error) => {
        console.log(error);
        this.$notify({ title: "Ha ocurrido un error", type: "error" });
      });
    }, async updateImage(e) {
      this.images = e.target.files;
      let formData = new FormData();
      const images = this.images;
      for (let i = 0; i < images.length; i++) {
        formData.append("images[]", images[i]);
      }
      formData.append("product_id", this.item.id);
      await this.$axios.post("/api/images", formData, { headers: { "Content-Type": "multipart/form-data" } }).then((response) => {
        console.log(response);
        this.images = [];
        this.$refs.file.value = "";
        this.getProducts();
        this.$notify({ title: "La imagen se ha subido correctamente!" });
      }).catch((error) => {
        console.log(error);
        this.$notify({ title: "Ha ocurrido un error al subir la imagen!" });
      });
    }, closeEdit() {
      this.$root.$emit("closeEdit", false);
    }, slugify(text) {
      return text === null || text === void 0 ? void 0 : text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    } } };
    var product_EditProductvue_type_script_lang_js_ = EditProductvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    var component = Object(componentNormalizer["a"])(
      product_EditProductvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "30aa9762"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const productEditProduct = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': productEditProduct$1
}, [productEditProduct$1]);

export { productEditProduct as p };
//# sourceMappingURL=product-edit-product.mjs.map

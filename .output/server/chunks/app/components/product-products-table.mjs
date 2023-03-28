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

var productProductsTable$1 = {};

var ids = productProductsTable$1.ids = [17];
var modules = productProductsTable$1.modules = {
  189: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm._ssrNode('<div class="main">', "</div>", [_vm._ssrNode((_vm.edit == false && _vm.newProduct == false ? '<div class="d-flex justify-content-end mb-4"><button class="btn btn-primary"><i class="fa fa-plus"></i></button></div>' : "<!---->") + " "), _vm.edit == false && _vm.newProduct == false ? _vm._ssrNode('<table class="table">', "</table>", [_vm._ssrNode('<thead><tr><th scope="col">#</th> <th scope="col">Producto(s)</th> <th scope="col">Precio</th> <th scope="col">Descuento</th> <th scope="col">Vendido(s)</th> <th scope="col">Stock</th> <th scope="col">Estado</th> <th scope="col">Acciones</th></tr></thead> '), _vm.products.length > 0 ? _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.products, function(product) {
        return _vm._ssrNode("<tr>", "</tr>", [_vm._ssrNode('<th scope="row">' + _vm._ssrEscape(_vm._s(product.id)) + "</th> "), _vm._ssrNode("<td>", "</td>", [_c("n-link", { attrs: { "to": `/product/${product.slug}` } }, [_vm._v(_vm._s(product.name))])], 1), _vm._ssrNode(" <td>" + _vm._ssrEscape(_vm._s(product.price) + " \u20AC") + "</td> " + (product.discount > 0 ? "<td>" + _vm._ssrEscape(_vm._s(product.discount) + " %") + "</td>" : "<td>-</td>") + " " + (product.sold > 0 ? "<td>" + _vm._ssrEscape(_vm._s(product.sold)) + "</td>" : "<td>-</td>") + " " + (product.stock > 0 ? "<td>" + _vm._ssrEscape(_vm._s(product.stock)) + "</td>" : "<td>-</td>") + ' <td><select name="status" class="form-select"><option>' + _vm._ssrEscape(_vm._s(product.status)) + "</option> " + (product.status === "Borrador" ? '<option value="Publicado">Publicado</option>' : '<option value="Borrador">Borrador</option>') + '</select></td> <td><div><button title="Editar producto" class="btn btn-warning btn-sm text-white"><i class="fa fa-edit"></i></button> <button title="Eliminar producto" class="btn btn-danger btn-sm text-white"><i class="fa fa-trash"></i></button></div></td>')], 2);
      }), 0) : _vm._ssrNode('<tbody><tr><td colspan="8">No hay productos.</td></tr></tbody>')], 2) : _vm._e(), _vm._ssrNode(" "), _vm.edit == false && _vm.newProduct == false ? _vm._ssrNode('<div class="d-flex justify-content-center mt-2">', "</div>", [_c("pagination", { attrs: { "records": _vm.products.length, "perPage": _vm.perPage }, on: { "paginate": _vm.myCallback }, model: { value: _vm.page, callback: function($$v) {
        _vm.page = $$v;
      }, expression: "page" } })], 1) : _vm._e(), _vm._ssrNode(" "), _vm.edit == true ? _c("EditProduct", { attrs: { "product": _vm.product } }) : _vm._e(), _vm._ssrNode(" "), _vm.newProduct == true ? _c("CreateProduct") : _vm._e()], 2), _vm._ssrNode(" "), _vm.loading == true ? _c("BigLoader") : _vm._e()], 2);
    };
    var staticRenderFns = [];
    var external_sweetalert2_ = __webpack_require__(71);
    var external_sweetalert2_default = /* @__PURE__ */ __webpack_require__.n(external_sweetalert2_);
    var ProductsTablevue_type_script_lang_js_ = { auth: true, components: { EditProduct: () => __webpack_require__.e(16).then(__webpack_require__.bind(null, 185)), BigLoader: () => __webpack_require__.e(3).then(__webpack_require__.bind(null, 180)), CreateProduct: () => __webpack_require__.e(15).then(__webpack_require__.bind(null, 184)) }, data() {
      return { products: [], status: "", productId: "", yesterday: [], today: [], index: [], store: [], productsVisitors: [], cart: [], checkout: [], product: [], edit: false, newProduct: false, page: 1, perPage: 10 };
    }, beforeMount() {
      this.loading = true;
      this.$root.$on("closeAdd", (data) => {
        this.newProduct = data;
      });
      this.$root.$on("closeEdit", (data) => {
        this.edit = data;
      });
    }, async mounted() {
      await this.getProducts();
    }, computed: { paginatedItems() {
      const start = (this.page - 1) * this.perPage;
      return this.products.slice(start, start + this.perPage);
    } }, methods: { async getProducts() {
      await this.$axios.get("/api/products").then((response) => {
        this.products = response.data.data;
        this.loading = false;
      });
    }, onClick(product) {
      this.edit = true;
      this.product = product;
    }, onClickNew() {
      this.newProduct = true;
    }, async updateStatus(product) {
      if (product.status === "Publicado") {
        await this.$axios.put("/api/products/status/" + product.id, { status: "Borrador" }).then((res) => {
          this.$notify({ title: "Estado del producto actualizado" });
        });
      } else {
        await this.$axios.put("/api/products/status/" + product.id, { status: "Publicado" }).then((res) => {
          this.$notify({ title: "Estado del producto actualizado" });
        });
      }
      window.location.reload(true);
    }, destroy(id) {
      external_sweetalert2_default.a.fire({ title: "\xBFEst\xE1s seguro?", text: "\xA1No podr\xE1s revertir esto!", icon: "warning", showCancelButton: true, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: "\xA1S\xED, b\xF3rralo!" }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.delete("/api/products/" + id).then((res) => {
            this.$notify({ title: "Producto eliminado" });
            window.location.reload(true);
          });
        }
      });
    }, myCallback(page) {
      this.page = page;
    } } };
    var product_ProductsTablevue_type_script_lang_js_ = ProductsTablevue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    var component = Object(componentNormalizer["a"])(
      product_ProductsTablevue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "7d3550e7"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const productProductsTable = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': productProductsTable$1
}, [productProductsTable$1]);

export { productProductsTable as p };
//# sourceMappingURL=product-products-table.mjs.map

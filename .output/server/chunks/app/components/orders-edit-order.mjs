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

var ordersEditOrder$1 = {};

var ids = ordersEditOrder$1.ids = [13];
var modules = ordersEditOrder$1.modules = {
  184: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm$order$user_profil, _vm$order$guest, _vm$order$user_profil2, _vm$order$user_profil3, _vm$order$guest2, _vm$order$user_profil4, _vm$order$invoice, _vm$order$invoice2;
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "main" }, [_vm._ssrNode('<div class="row mt-4 mb-2"><div class="col-12"><h3>Editar Pedido</h3></div> <div><p class="m-0">Nombre del cliente: <strong>' + _vm._ssrEscape(_vm._s(((_vm$order$user_profil = _vm.order.user_profile) === null || _vm$order$user_profil === void 0 ? void 0 : _vm$order$user_profil.name) == "Guest" ? (_vm$order$guest = _vm.order.guest) === null || _vm$order$guest === void 0 ? void 0 : _vm$order$guest.name : (_vm$order$user_profil2 = _vm.order.user_profile) === null || _vm$order$user_profil2 === void 0 ? void 0 : _vm$order$user_profil2.name) + " " + _vm._s(((_vm$order$user_profil3 = _vm.order.user_profile) === null || _vm$order$user_profil3 === void 0 ? void 0 : _vm$order$user_profil3.lastname) == "Guest" ? (_vm$order$guest2 = _vm.order.guest) === null || _vm$order$guest2 === void 0 ? void 0 : _vm$order$guest2.lastname : (_vm$order$user_profil4 = _vm.order.user_profile) === null || _vm$order$user_profil4 === void 0 ? void 0 : _vm$order$user_profil4.lastname)) + '</strong></p> <p class="m-0">Id pedido: <strong>' + _vm._ssrEscape(_vm._s(_vm.order.id)) + "</strong></p> " + ((_vm$order$invoice = _vm.order.invoice) !== null && _vm$order$invoice !== void 0 && _vm$order$invoice.id ? '<p class="m-0">Factura: <strong>' + _vm._ssrEscape(_vm._s((_vm$order$invoice2 = _vm.order.invoice) === null || _vm$order$invoice2 === void 0 ? void 0 : _vm$order$invoice2.invoice_number)) + "</strong></p>" : "<!---->") + "</div></div> "), _vm._ssrNode('<div class="row">', "</div>", [_vm._ssrNode('<div class="col-12"><div class="mt-2"><h4>\n                    Productos del pedido actual\n                </h4></div> <div class="mt-4"><table class="table"><thead><tr><th scope>Producto</th> <th scope>Cantidad</th> <th scope>Precio</th> <th scope>Acciones</th></tr></thead> ' + (_vm.productsOrder.length > 0 ? "<tbody>" + _vm._ssrList(_vm.productsOrder, function(product) {
        return "<tr><td>" + _vm._ssrEscape(_vm._s(product.name)) + '</td> <td><div class="row"><div class="col-12"><button type="button" id="button-minus" class="btn btn-outline-secondary">-</button> <span class="p-2 border">' + _vm._ssrEscape(_vm._s(product.cartQuantity)) + '</span> <button type="button" id="button-plus" class="btn btn-outline-secondary">+</button></div></div></td> <td>' + _vm._ssrEscape(_vm._s(product.price)) + '</td> <td><button class="btn bg-trivi-red text-white"><i class="fa fa-trash"></i></button></td></tr>';
      }) + "</tbody>" : "<!---->") + "</table></div></div> "), _vm._ssrNode("<div>", "</div>", [_vm._ssrNode((_vm.order.coupon ? '<div class="d-flex justify-content-end"><h5>' + _vm._ssrEscape("Descuento: " + _vm._s(_vm.order.coupon)) + "</h5></div>" : "<!---->") + " " + (_vm.order.shipping && _vm.post_shipping == 0 ? '<div class="d-flex justify-content-end"><h5>' + _vm._ssrEscape("Envio: " + _vm._s(_vm.getTotal() > 40 ? "Gratis" : _vm.order.shipping)) + "</h5></div>" : "<!---->") + " "), _vm.getTotal() < 40 && _vm.order.shipping == 0 && _vm.order.shipping_method != "pickup-point" ? _vm._ssrNode('<div class="mb-2">', "</div>", [_vm._ssrNode("<label for>Seleccione el env\xEDo:</label> "), _c("select", { directives: [{ name: "model", rawName: "v-model", value: _vm.post_shipping, expression: "post_shipping" }], ref: "selectStatus", staticClass: "form-select", attrs: { "name": "selectStatus" }, on: { "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected;
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.post_shipping = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      } } }, [_c("option", { attrs: { "value": "0", "disabled": "", "selected": "" } }, [_vm._v("Seleccione un env\xEDo")]), _vm._v(" "), _c("option", { attrs: { "value": "4.95" } }, [_vm._v("Est\xE1ndar 4.95 \u20AC")]), _vm._v(" "), _c("option", { attrs: { "value": "5.95" } }, [_vm._v("R\xE1pido 5.95 \u20AC")]), _vm._v(" "), _c("option", { attrs: { "value": "6.95" } }, [_vm._v("Urgente 6.95 \u20AC")])])], 2) : _vm._e(), _vm._ssrNode(' <div class="d-flex justify-content-end"><h4>' + _vm._ssrEscape("Total: " + _vm._s(_vm.getTotal() == "NaN" ? (_vm.order.total * 1.21).toFixed(2) : _vm.getTotal())) + "</h4></div>")], 2), _vm._ssrNode(' <div class="col-12"><div class="mb-2"><h4>Productos</h4></div> <div><div class="mb-3"><select name="selectProduct" class="form-select"><option value="0" disabled="disabled" selected="selected">Seleccione un producto</option> ' + _vm._ssrList(_vm.products, function(product) {
        return "<option" + _vm._ssrAttr("value", product.id) + ">" + _vm._ssrEscape(_vm._s(product.name)) + "</option>";
      }) + '</select></div> <div class="d-flex justify-content-end"><button class="btn bg-trivi-green">A\xF1adir producto</button></div></div></div> <div class="col-12 mt-4"><div class="text-center text-bg-danger rounded shadow p-3"><p class="text-white">Antes de confirmar el pedido revisa que el total que se muestra es el correcto, ya que el pedido se generar\xE1 con ese monto. Si no es as\xED pulsa en cambia la cantidad del primer producto con los botones y vuelve a dejarlo como estaba anteriormente, esto actualizar\xE1 la variable del total.</p></div> <div class="d-flex justify-content-center mt-4"><button class="btn bg-trivi-blue">Actualizar pedido</button></div></div>')], 2)], 2);
    };
    var staticRenderFns = [];
    var external_sweetalert2_ = __webpack_require__(71);
    var external_sweetalert2_default = /* @__PURE__ */ __webpack_require__.n(external_sweetalert2_);
    var EditOrdervue_type_script_lang_js_ = { data() {
      return { id: this.$route.params.id, order: {}, productsOrder: [], products: [], addProduct: "", post_shipping: 0, total: 0 };
    }, mounted() {
      this.getOrder();
      this.getProducts();
    }, methods: { async getOrder() {
      this.$root.$emit("loading", true);
      await this.$axios.get("/api/orders?filter[id]=" + this.id).then((response) => {
        this.$root.$emit("loading", false);
        const orders = response.data.data;
        orders.map((order) => {
          if (order.id == this.id) {
            this.order = order;
            this.productsOrder = JSON.parse(order.products);
          }
        });
      }).catch((error) => {
        this.$root.$emit("loading", false);
      });
    }, async getProducts() {
      this.$root.$emit("loading", true);
      await this.$axios.get("/api/products").then((response) => {
        this.$root.$emit("loading", false);
        this.products = response.data.data;
      }).catch((error) => {
        this.$root.$emit("loading", false);
      });
    }, addUpdateProduct() {
      const selectProduct = this.$refs.selectProduct;
      const product = this.products.find((product2) => product2.id == selectProduct.value);
      const productOrder = this.productsOrder.find((product2) => product2.id == selectProduct.value);
      if (productOrder) {
        productOrder.cartQuantity += 1;
        productOrder.total = productOrder.cartQuantity * productOrder.price_base;
      } else {
        product.cartQuantity = 1;
        product.total = product.cartQuantity * product.price_base;
        this.productsOrder.push({ ...product });
      }
    }, incremetProduct(product) {
      console.log(product);
      product.cartQuantity += 1;
      product.total = product.cartQuantity * product.price_base;
    }, decrementProduct(product) {
      if (product.cartQuantity > 1) {
        product.cartQuantity -= 1;
        product.total = product.cartQuantity * product.price_base;
      } else {
        this.deleteProduct(product);
      }
    }, deleteProduct(product) {
      const index = this.productsOrder.indexOf(product);
      this.productsOrder.splice(index, 1);
    }, getTotal() {
      const sum = this.productsOrder.reduce((acc, product) => acc + product.total, 0);
      this.total = sum;
      if (sum * 1.21 < 40) {
        return (sum * 1.21 + parseFloat(this.order.shipping) + parseFloat(this.post_shipping)).toFixed(2);
      } else {
        return (sum * 1.21).toFixed(2);
      }
    }, async sendModifications() {
      external_sweetalert2_default.a.fire({ title: "\xBFEst\xE1s seguro de que quieres guardar los cambios?", text: "\xA1Se borrar\xE1 la factura anterior y se enviara la rectificada al cliente!", icon: "warning", showCancelButton: true, confirmButtonColor: "#3085d6", cancelButtonColor: "#d33", confirmButtonText: "\xA1S\xED, actualizar!" }).then(async (result) => {
        if (result.isConfirmed) {
          this.$root.$emit("loading", true);
          await this.$axios.put("/api/order-modification", { id: this.id, products: JSON.stringify(this.productsOrder), total: this.getTotal(), shipping: this.post_shipping == 0 ? this.order.shipping : this.post_shipping }).then((response) => {
            this.$root.$emit("loading", false);
            external_sweetalert2_default.a.fire({ icon: "success", title: "\xA1Modificaci\xF3n realizada!", showConfirmButton: false, timer: 1500 });
            this.getOrder();
          }).catch((error) => {
            this.$root.$emit("loading", false);
            console.log(error);
          });
        }
      });
    } } };
    var orders_EditOrdervue_type_script_lang_js_ = EditOrdervue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      orders_EditOrdervue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "a9a352e6"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const ordersEditOrder = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': ordersEditOrder$1
}, [ordersEditOrder$1]);

export { ordersEditOrder as o };
//# sourceMappingURL=orders-edit-order.mjs.map

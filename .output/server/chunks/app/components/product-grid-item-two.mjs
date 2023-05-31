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

var productGridItemTwo$1 = {};

var ids = productGridItemTwo$1.ids = [43];
var modules = productGridItemTwo$1.modules = {
  134: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _vm.product.status == "Publicado" ? _c("div", { staticClass: "product-wrap-2 mb-25" }, [_vm._ssrNode('<div class="product-img">', "</div>", [_c("n-link", { attrs: { "to": `/product/${_vm.product.slug}` } }, [_vm.product.images.length == 0 || _vm.product.images.length == 1 ? _c("div", [_c("nuxt-img", { staticClass: "default-img", attrs: { "loading": "lazy", "provider": "customProvider", "src": "nuxt/default.webp", "alt": _vm.product.name, "width": "100%", "height": "100%" } }), _vm._v(" "), _c("nuxt-img", { staticClass: "hover-img", attrs: { "loading": "lazy", "provider": "customProvider", "src": "nuxt/default.webp", "alt": _vm.product.name, "width": "100%", "height": "100%" } })], 1) : _c("div", [_c("nuxt-img", { staticClass: "default-img", attrs: { "loading": "lazy", "provider": "customProvider", "src": _vm.product.images[0].path, "alt": _vm.product.name, "width": "100%", "height": "100%" } }), _vm._v(" "), _c("nuxt-img", { staticClass: "hover-img", attrs: { "loading": "lazy", "provider": "customProvider", "src": _vm.product.images[1].path, "alt": _vm.product.name, "width": "100%", "height": "100%" } })], 1)]), _vm._ssrNode(' <div class="product-badges">' + (_vm.product.new === "Nuevo" ? '<span class="product-label pink">Nuevo</span>' : "<!---->") + " " + (_vm.product.discount ? '<span class="product-label purple">' + _vm._ssrEscape("-" + _vm._s(_vm.product.discount) + "%") + "</span>" : "<!---->") + '</div> <div class="product-action-2">' + (_vm.product.stock > 0 ? '<button title="A\xF1adir al carrito" class="btn"><i class="pe-7s-cart"></i></button>' : "<!---->") + ' <button title="Vista previa" class="btn"><i class="pe-7s-look"></i></button></div>')], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="product-content-2">', "</div>", [_vm._ssrNode('<div class="title-price-wrap-2">', "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c("n-link", { attrs: { "to": `/product/${_vm.product.slug}` } }, [_vm._v(_vm._s(_vm.product.name))])], 1), _vm._ssrNode(' <div class="price-2"><span>' + _vm._ssrEscape(_vm._s((_vm.discountedPrice(_vm.product) * 1.21).toFixed(2)) + " \u20AC") + "</span> " + (_vm.product.discount > 0 ? '<span class="old">' + _vm._ssrEscape(_vm._s((_vm.product.price_base * 1.21).toFixed(2)) + " \u20AC") + "</span>" : "<!---->") + "</div>")], 2), _vm._ssrNode(' <div class="pro-wishlist-2"><button title="A\xF1adir a la lista de deseos"><i class="pe-7s-like"></i></button></div>')], 2)], 2) : _vm._e();
    };
    var staticRenderFns = [];
    var ProductGridItemTwovue_type_script_lang_js_ = { props: ["product"], methods: {
      addToCart(product) {
        const prod = { ...product, cartQuantity: 1 };
        if (this.$store.state.cart.find((el) => product.id === el.id)) {
          this.$notify({ title: "Se ha actualizado la cantidad del producto" });
        } else {
          this.$notify({ title: "A\xF1adido al carrito" });
        }
        this.$store.dispatch("addToCartItem", prod);
      },
      discountedPrice(product) {
        return product.price_base - product.price_base * product.discount / 100;
      },
      addToWishlist(product) {
        if (this.$store.state.wishlist.find((el) => product.id === el.id)) {
          this.$notify({ title: "Ya estaba a\xF1adido a la lista de deseos!" });
        } else {
          this.$notify({ title: "A\xF1adido a la lista de deseos!" });
        }
        this.$store.dispatch("addToWishlist", product);
      },
      onClick(product) {
        this.$modal.show("quickview", product);
      }
    } };
    var product_ProductGridItemTwovue_type_script_lang_js_ = ProductGridItemTwovue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    var component = Object(componentNormalizer["a"])(
      product_ProductGridItemTwovue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "619c6817"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const productGridItemTwo = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': productGridItemTwo$1
}, [productGridItemTwo$1]);

export { productGridItemTwo as p };
//# sourceMappingURL=product-grid-item-two.mjs.map

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

var productGridStyleThree$1 = {};

var ids = productGridStyleThree$1.ids = [43];
var modules = productGridStyleThree$1.modules = {
  187: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _vm.product.status == "Publicado" ? _c("div", { staticClass: "product-wrap-3 mb-20" }, [_vm._ssrNode('<div class="product-img">', "</div>", [_c("n-link", { attrs: { "to": `/product/${_vm.slugify(_vm.product.title)}` } }, [_vm.product.images.lenght == 0 ? _c("div", [_c("nuxt-img", { staticClass: "default-img", attrs: { "loading": "lazy", "provider": "customProvider", "src": "nuxt/default.webp", "alt": _vm.product.title, "width": "100%", "height": "100%" } }), _vm._v(" "), _c("nuxt-img", { staticClass: "hover-img", attrs: { "loading": "lazy", "provider": "customProvider", "src": "nuxt/default.webp", "alt": _vm.product.title, "width": "100%", "height": "100%" } })], 1) : _c("div", [_c("nuxt-img", { staticClass: "default-img", attrs: { "loading": "lazy", "provider": "customProvider", "src": _vm.product.images[0].path, "alt": _vm.product.title, "width": "100%", "height": "100%" } }), _vm._v(" "), _c("nuxt-img", { staticClass: "hover-img", attrs: { "loading": "lazy", "provider": "customProvider", "src": _vm.product.images[0].path, "alt": _vm.product.title, "width": "100%", "height": "100%" } })], 1)]), _vm._ssrNode(' <div class="product-badges">' + (_vm.product.new === "Nuevo" ? '<span class="product-label pink">Nuevo</span>' : "<!---->") + " " + (_vm.product.discount ? '<span class="product-label purple">' + _vm._ssrEscape("-" + _vm._s(_vm.product.discount) + "%") + "</span>" : "<!---->") + "</div> "), _vm._ssrNode('<div class="product-content-3-wrap">', "</div>", [_vm._ssrNode('<div class="product-content-3">', "</div>", [_vm._ssrNode('<div class="product-title">', "</div>", [_vm._ssrNode("<h3>", "</h3>", [_c("n-link", { attrs: { "to": `/product/${_vm.slugify(_vm.product.title)}` } }, [_vm._v(_vm._s(_vm.product.title))])], 1)]), _vm._ssrNode(' <div class="price-3"><span>' + _vm._ssrEscape("$" + _vm._s((_vm.discountedPrice(_vm.product) * 1.21).toFixed(2))) + "</span> " + (_vm.product.discount > 0 ? '<span class="old">' + _vm._ssrEscape("$" + _vm._s((_vm.product.price_base * 1.21).toFixed(2))) + "</span>" : "<!---->") + '</div> <div class="product-action-3">' + (_vm.product.stock > 0 ? '<button title="A\xF1adir al carrito" class="btn"><i class="pe-7s-cart"></i></button>' : "<!---->") + ' <button title="A\xF1adir a la lista de deseos" class="btn"><i class="pe-7s-like"></i></button> <button title="Vista previa" class="btn"><i class="pe-7s-look"></i></button></div>')], 2)])], 2)]) : _vm._e();
    };
    var staticRenderFns = [];
    var ProductGridStyleThreevue_type_script_lang_js_ = { props: ["product"], methods: { addToCart(product) {
      const prod = { ...product, cartQuantity: 1 };
      if (this.$store.state.cart.find((el) => product.id === el.id)) {
        this.$notify({ title: "Already added to cart update with one" });
      } else {
        this.$notify({ title: "A\xF1adido al carrito" });
      }
      this.$store.dispatch("addToCartItem", prod);
    }, discountedPrice(product) {
      return product.price_base - product.price_base * product.discount / 100;
    }, addToWishlist(product) {
      if (this.$store.state.wishlist.find((el) => product.id === el.id)) {
        this.$notify({ title: "Already added to wishlist!" });
      } else {
        this.$notify({ title: "Add to wishlist successfully!" });
      }
      this.$store.dispatch("addToWishlist", product);
    }, addToCompare(product) {
      if (this.$store.state.compare.find((el) => product.id === el.id)) {
        this.$notify({ title: "Already added to compare!" });
      } else {
        this.$notify({ title: "Add to compare successfully!" });
      }
      this.$store.dispatch("addToCompare", product);
    }, onClick(product) {
      this.$modal.show("quickview", product);
    }, slugify(text) {
      return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    } } };
    var product_ProductGridStyleThreevue_type_script_lang_js_ = ProductGridStyleThreevue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    var component = Object(componentNormalizer["a"])(
      product_ProductGridStyleThreevue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "7c81af82"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const productGridStyleThree = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': productGridStyleThree$1
}, [productGridStyleThree$1]);

export { productGridStyleThree as p };
//# sourceMappingURL=product-grid-style-three.mjs.map

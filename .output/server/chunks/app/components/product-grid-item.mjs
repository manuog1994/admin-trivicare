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

var productGridItem$1 = {};

var ids = productGridItem$1.ids = [41];
var modules = productGridItem$1.modules = {
  121: function(module, exports2) {
    module.exports = {};
  },
  146: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductGridItem_vue_vue_type_style_index_0_id_2ac440f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductGridItem_vue_vue_type_style_index_0_id_2ac440f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductGridItem_vue_vue_type_style_index_0_id_2ac440f2_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  186: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _vm.product.status == "Publicado" ? _c("div", { staticClass: "product-wrap mb-30" }, [_vm._ssrNode('<div class="product-img">', "</div>", [_c("n-link", { attrs: { "to": `/product/${_vm.product.slug}` } }, [_vm.product.images.length == 0 || _vm.product.images.length == 1 ? _c("div", [_c("nuxt-img", { staticClass: "default-img", attrs: { "loading": "lazy", "provider": "customProvider", "src": "nuxt/default.webp", "alt": _vm.product.name, "width": "100%", "height": "100%" } }), _vm._v(" "), _c("nuxt-img", { staticClass: "hover-img", attrs: { "loading": "lazy", "provider": "customProvider", "src": "nuxt/default.webp", "alt": _vm.product.name, "width": "100%", "height": "100%" } })], 1) : _c("div", [_c("nuxt-img", { staticClass: "default-img", attrs: { "loading": "lazy", "provider": "customProvider", "src": _vm.product.images[0].path, "alt": _vm.product.name, "width": "100%", "height": "100%" } }), _vm._v(" "), _c("nuxt-img", { staticClass: "hover-img", attrs: { "loading": "lazy", "provider": "customProvider", "src": _vm.product.images[1].path, "alt": _vm.product.name, "width": "100%", "height": "100%" } })], 1)]), _vm._ssrNode(' <div class="product-badges">' + (_vm.product.new === "Nuevo" ? '<span class="product-label pink">Nuevo</span>' : "<!---->") + " " + (_vm.product.discount ? '<span class="product-label purple">' + _vm._ssrEscape("-" + _vm._s(_vm.product.discount) + "%") + "</span>" : "<!---->") + "</div> "), _vm.layout === "twoColumn" || _vm.layout === "threeColumn" ? _vm._ssrNode('<div class="product-action">', "</div>", [_vm._ssrNode('<div class="pro-same-action pro-wishlist"><button title="A\xF1adir a la lista de deseos" class="btn"><i class="pe-7s-like"></i></button></div> '), _vm._ssrNode('<div class="pro-same-action pro-cart">', "</div>", [_vm.product.variation ? _c("n-link", { staticClass: "btn", attrs: { "to": `/product/${_vm.product.slug}` } }, [_vm._v("\n                    selecciona una opci\xF3n\n                ")]) : _c("button", { staticClass: "btn", attrs: { "title": "A\xF1adir al carrito" }, on: { "click": function($event) {
        return _vm.addToCart(_vm.product);
      } } }, [_c("i", { staticClass: "pe-7s-cart" }), _vm._v(" \n                    A\xF1adir al carrito\n                ")])], 1), _vm._ssrNode(' <div class="pro-same-action pro-quickview"><button title="Vista previa" class="btn"><i class="pe-7s-look"></i></button></div>')], 2) : _vm._e()], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="product-content text-center mt-4">', "</div>", [_vm._ssrNode('<h3 class="mb-1">', "</h3>", [_c("n-link", { attrs: { "to": `/product/${_vm.product.slug}` } }, [_vm._v(_vm._s(_vm.product.name))])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass(null, { "product-grid-change": _vm.layout === "list" ? false : true }) + ">", "</div>", [_c("client-only", [_c("vue-star-rating", { attrs: { "star-size": 20, "read-only": true, "show-rating": false, "rating": _vm.product.rating } })], 1)], 1), _vm._ssrNode(' <div class="product-price"><span>' + _vm._ssrEscape(_vm._s((_vm.discountedPrice(_vm.product) * 1.21).toFixed(2)) + " \u20AC") + "</span> " + (_vm.product.discount > 0 ? '<span class="old">' + _vm._ssrEscape(_vm._s((_vm.product.price_base * 1.21).toFixed(2)) + " \u20AC") + "</span>" : "<!---->") + "</div> " + (_vm.layout === "list" ? '<div class="product-content__list-view"><div class="pro-action d-flex align-items-center"><div class="pro-cart btn-hover">' + (_vm.product.stock > 0 ? '<button title="A\xF1adir al carrito" class="btn"><i class="pe-7s-cart"></i> \n                        A\xF1adir al carrito\n                    </button>' : '<button title="No hay stock" class="btn disabled"><i class="pe-7s-attention"></i>\n                         No hay Stock\n                    </button>') + '</div> <div class="pro-wishlist"><button title="A\xF1adir a la lista de deseos"><i class="fa fa-heart-o"></i></button></div></div></div>' : "<!---->"))], 2)], 2) : _vm._e();
    };
    var staticRenderFns = [];
    var ProductGridItemvue_type_script_lang_js_ = { auth: false, props: ["layout", "product"], data() {
      return { tag: Object.values(this.product.tags).flat() };
    }, methods: {
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
    var product_ProductGridItemvue_type_script_lang_js_ = ProductGridItemvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(146);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      product_ProductGridItemvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "332db565"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const productGridItem = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': productGridItem$1
}, [productGridItem$1]);

export { productGridItem as p };
//# sourceMappingURL=product-grid-item.mjs.map

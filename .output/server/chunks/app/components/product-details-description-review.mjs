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

var productDetailsDescriptionReview$1 = {};

var ids = productDetailsDescriptionReview$1.ids = [39];
var modules = productDetailsDescriptionReview$1.modules = {
  107: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsDescriptionReview_vue_vue_type_style_index_0_id_7252c5d4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsDescriptionReview_vue_vue_type_style_index_0_id_7252c5d4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsDescriptionReview_vue_vue_type_style_index_0_id_7252c5d4_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  131: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm$product$reviews, _vm$reviews, _vm$reviews2;
      var _vm = this, _c = _vm._self._c;
      return _vm.product ? _c("div", { staticClass: "description-review-area pb-90" }, [_vm._ssrNode('<div class="container">', "</div>", [_vm._ssrNode('<div class="description-review-wrapper">', "</div>", [_vm._ssrNode('<div class="description-review-topbar nav"><a data-bs-toggle="tab" href="#des-details1">Informaci\xF3n adicional</a> <a data-bs-toggle="tab" href="#des-details2" class="active">Descripci\xF3n</a> <a data-bs-toggle="tab" href="#des-details3">' + _vm._ssrEscape("Valoraciones ( " + _vm._s((_vm$product$reviews = _vm.product.reviews) === null || _vm$product$reviews === void 0 ? void 0 : _vm$product$reviews.length) + " )") + "</a></div> "), _vm._ssrNode('<div class="tab-content description-review-bottom">', "</div>", [_vm._ssrNode('<div id="des-details2" class="tab-pane active"><div class="product-description-wrapper m-auto"><div>' + _vm._s(_vm.product.description) + '</div></div></div> <div id="des-details1" class="tab-pane"><div class="product-anotherinfo-wrapper"><ul><li><span>Peso</span>' + _vm._ssrEscape(_vm._s(_vm.product.weight) + " g") + "</li> <li><span>Dimensiones</span>" + _vm._ssrEscape(_vm._s(_vm.product.dimensions) + " mm ") + "</li> <li><span>Tama\xF1o</span>" + _vm._ssrEscape(_vm._s(_vm.product.size) + " ml") + "</li></ul></div></div> "), _vm._ssrNode('<div id="des-details3" class="tab-pane">', "</div>", [_vm._ssrNode('<div class="row">', "</div>", [_vm._ssrNode('<div class="col-12">', "</div>", [_vm._l(_vm.paginatedReviews, function(review) {
        return _vm._ssrNode('<div class="review-wrapper">', "</div>", [_vm._ssrNode('<div class="single-review p-5">', "</div>", [_vm._ssrNode('<div class="d-flex justify-content-start">', "</div>", [_vm._ssrNode('<div class="review-content">', "</div>", [_vm._ssrNode('<div class="review-top-wrap">', "</div>", [_vm._ssrNode('<div class="review-left">', "</div>", [_vm._ssrNode('<div class="review-name"><h4>' + _vm._ssrEscape(_vm._s(review.user_name) + " " + _vm._s(review.user_lastname)) + "</h4></div> "), _vm._ssrNode('<div class="review-rating">', "</div>", [_c("client-only", [_c("vue-star-rating", { attrs: { "star-size": 20, "read-only": true, "show-rating": false, "rating": review.rating } })], 1)], 1)], 2)]), _vm._ssrNode(' <div class="review-bottom"><p>' + _vm._ssrEscape(_vm._s(review.message)) + "</p></div> " + (_vm.$auth.user && _vm.$auth.user.id == review.user_id ? '<form><div class="review-delete"><button class="btn">Eliminar</button></div></form>' : "<!---->"))], 2)])])]);
      }), _vm._ssrNode(" "), ((_vm$reviews = _vm.reviews) === null || _vm$reviews === void 0 ? void 0 : _vm$reviews.length) > 10 ? _vm._ssrNode('<div class="d-flex justify-content-center">', "</div>", [_c("pagination", { attrs: { "records": (_vm$reviews2 = _vm.reviews) === null || _vm$reviews2 === void 0 ? void 0 : _vm$reviews2.length, "perPage": _vm.perPage }, on: { "paginate": _vm.myCallBack }, model: { value: _vm.page, callback: function($$v) {
        _vm.page = $$v;
      }, expression: "page" } })], 1) : _vm._e()], 2)])])], 2)], 2)])]) : _vm._e();
    };
    var staticRenderFns = [];
    var ProductDetailsDescriptionReviewvue_type_script_lang_js_ = { props: ["product", "reviews"], data() {
      return { message: "", rating: 0, user_name: "", user_lastname: "", page: 1, perPage: 10 };
    }, computed: { paginatedReviews() {
      return this.reviews.slice((this.page - 1) * this.perPage, this.page * this.perPage);
    } }, methods: { async deleteReview(review) {
      try {
        const response = await this.$axios.delete("/api/reviews/" + review);
        this.$notify({ text: "Valoraci\xF3n eliminada correctamente", type: "success" });
      } catch (error) {
      }
    }, myCallBack(page) {
      this.page = page;
    } } };
    var components_ProductDetailsDescriptionReviewvue_type_script_lang_js_ = ProductDetailsDescriptionReviewvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(107);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_ProductDetailsDescriptionReviewvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "dc77c044"
    );
    __webpack_exports__["default"] = component.exports;
  },
  96: function(module, exports2) {
    module.exports = {};
  }
};

const productDetailsDescriptionReview = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': productDetailsDescriptionReview$1
}, [productDetailsDescriptionReview$1]);

export { productDetailsDescriptionReview as p };
//# sourceMappingURL=product-details-description-review.mjs.map

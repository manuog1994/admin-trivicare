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

var reviewsReviewTable$1 = {};

var ids = reviewsReviewTable$1.ids = [20];
var modules = reviewsReviewTable$1.modules = {
  196: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "main" }, [_vm._ssrNode('<div class="mb-2"><div class="d-flex justify-content-end"><button class="btn bg-trivi-orange"><i class="fa fa-plus"></i></button></div> <div class="d-flex justify-content-start"><h3>Valoraciones</h3></div></div> '), _vm._ssrNode('<table class="table">', "</table>", [_vm._ssrNode('<thead><tr><th scope="col">Producto</th> <th scope="col">Usuario</th> <th scope="col">Valoraci\xF3n</th> <th scope="col">Comentario</th> <th scope="col">Acciones</th></tr></thead> '), _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.paginatedReviews, function(review) {
        return _vm._ssrNode("<tr>", "</tr>", [_vm._ssrNode("<td>" + _vm._ssrEscape(_vm._s(_vm.filterProduct(review === null || review === void 0 ? void 0 : review.product_id))) + "</td> <td>" + _vm._ssrEscape(_vm._s(review.user_name) + " " + _vm._s(review.user_lastname)) + "</td> "), _vm._ssrNode("<td>", "</td>", [_c("vue-star-rating", { attrs: { "read-only": true, "rating": review.rating, "star-size": 20 } })], 1), _vm._ssrNode(" <td>" + _vm._ssrEscape(_vm._s(review.message)) + '</td> <td><button><i class="fa fa-trash-o"></i></button></td>')], 2);
      }), 0)], 2), _vm._ssrNode(" "), _vm.reviews.length > 10 ? _vm._ssrNode('<div class="d-flex justify-content-center">', "</div>", [_c("pagination", { attrs: { "records": _vm.reviews.length, "perPage": _vm.perPage }, on: { "paginate": _vm.myCallBack }, model: { value: _vm.page, callback: function($$v) {
        _vm.page = $$v;
      }, expression: "page" } })], 1) : _vm._e()], 2);
    };
    var staticRenderFns = [];
    var ReviewTablevue_type_script_lang_js_ = { data() {
      return { products: [], reviews: [], page: 1, perPage: 10 };
    }, mounted() {
      this.getReviews();
      this.getProducts();
    }, computed: { paginatedReviews() {
      return this.reviews.slice((this.page - 1) * this.perPage, this.page * this.perPage);
    } }, methods: { async getProducts() {
      await this.$store.dispatch("getProducts", { page: "", category: "", search: "", slug: "", sort: "", tag: "", status: 2 });
      const products = this.$store.getters.getProducts;
      this.products = products.data;
    }, async getReviews() {
      await this.$axios.get("/api/reviews").then((response) => {
        this.reviews = response.data.reviews;
        this.$root.$emit("loading", false);
      });
    }, filterProduct(id) {
      var _this$products;
      return (_this$products = this.products) === null || _this$products === void 0 ? void 0 : _this$products.filter((product) => {
        if (id == product.id) {
          return product.name;
        }
      }).map((product) => {
        return product.name;
      }).toString();
    }, async destroy(review) {
      await this.$axios.delete("/api/reviews/" + review).then((response) => {
        this.getReviews();
      });
    }, myCallBack(page) {
      this.page = page;
    } } };
    var reviews_ReviewTablevue_type_script_lang_js_ = ReviewTablevue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      reviews_ReviewTablevue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "07f17e9f"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const reviewsReviewTable = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': reviewsReviewTable$1
}, [reviewsReviewTable$1]);

export { reviewsReviewTable as r };
//# sourceMappingURL=reviews-review-table.mjs.map

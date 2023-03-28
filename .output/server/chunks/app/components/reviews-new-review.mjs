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

var reviewsNewReview$1 = {};

var ids = reviewsNewReview$1.ids = [19];
var modules = reviewsNewReview$1.modules = {
  192: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "main" }, [_vm._ssrNode('<div id="des-details3" class="tab-pane">', "</div>", [_vm._ssrNode('<div class="row">', "</div>", [_vm._ssrNode('<div class="col-lg-12">', "</div>", [_vm._ssrNode('<div class="ratting-form-wrapper">', "</div>", [_vm._ssrNode('<div class="ratting-form">', "</div>", [_vm._ssrNode('<div class="mb-2"><div class="d-flex justify-content-end"><button class="btn bg-trivi-orange">\n                                    Cerrar\n                                </button></div> <div class="d-flex justify-content-start"><h3>A\xF1adir valoraciones</h3></div></div> '), _vm._ssrNode("<form>", "</form>", [_vm._ssrNode('<div><select id="product-select" name="product_id" class="form-select mt-2 mb-2"><option value="default">Seleccione un producto</option> ' + _vm._ssrList(_vm.products, function(product) {
        return "<option" + _vm._ssrAttr("value", product.id) + ">" + _vm._ssrEscape(_vm._s(product.name)) + "</option>";
      }) + "</select></div> "), _vm._ssrNode('<div class="star-box">', "</div>", [_vm._ssrNode("<span>Valoraci\xF3n:</span> "), _vm._ssrNode('<div class="ratting-star">', "</div>", [_c("vue-star-rating", { ref: "rating", attrs: { "star-size": 20 } })], 1)], 2), _vm._ssrNode(' <div class="row"><div class="row"><div class="col-md-6"><div class="rating-form-style mb-10"><input name="user_name" placeholder="Nombre" type="text" required="required"></div></div> <div class="col-md-6"><div class="rating-form-style mb-10"><input name="user_lastname" placeholder="Apellidos" type="text" required="required"></div></div></div> <div class="col-md-12"><div class="rating-form-style form-submit"><textarea name="message" placeholder="Escribe aqu\xED tu valoraci\xF3n..."></textarea> <button type="submit" title="Enviar" class="btn btn-light">Crear</button></div></div></div>')], 2)], 2)])])])])]);
    };
    var staticRenderFns = [];
    var NewReviewvue_type_script_lang_js_ = { data() {
      return { products: [] };
    }, mounted() {
      this.getProducts();
    }, methods: { async getProducts() {
      await this.$store.dispatch("getProducts", { page: "", category: "", search: "", slug: "", sort: "", tag: "", status: 2 });
      const products = this.$store.getters.getProducts;
      this.products = products.data;
    }, createReview() {
      const review = this.$refs.rating._data.selectedRating;
      const form = this.$refs.newReview;
      const formData = new FormData(form);
      formData.append("rating", review);
      formData.append("user_id", this.$auth.user.id);
      formData.append("user_profile_id", 1);
      this.$axios.post("/api/reviews", formData).then((response) => {
        form.reset();
        window.location.reload();
      }).catch((error) => {
        console.log(error);
      });
    } } };
    var reviews_NewReviewvue_type_script_lang_js_ = NewReviewvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      reviews_NewReviewvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "36e5cae1"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const reviewsNewReview = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': reviewsNewReview$1
}, [reviewsNewReview$1]);

export { reviewsNewReview as r };
//# sourceMappingURL=reviews-new-review.mjs.map

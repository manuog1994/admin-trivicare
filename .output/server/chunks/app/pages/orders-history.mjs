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

var ordersHistory$1 = {};

var ids = ordersHistory$1.ids = [61, 38, 49];
var modules = ordersHistory$1.modules = {
  128: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "main" }, [_vm._ssrNode('<div><div class="d-flex justify-content-end"><button class="btn bg-trivi-green text-white mb-2"><i class="fa fa-check"></i>\n                Pedidos recientes\n            </button></div> <div><h2>Historial de pedidos</h2></div></div> '), _vm._ssrNode('<div class="table-responsive">', "</div>", [_vm._ssrNode('<table class="table">', "</table>", [_vm._ssrNode("<thead><tr><th scope>Cliente</th> <th scope>Fecha</th> <th scope>Estado</th> <th scope>Acciones</th></tr></thead> "), _vm.orders.length > 0 ? _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.paginatedItems, function(order) {
        var _order$user_profile, _order$user_profile2, _order$guest, _order$guest2;
        return _vm._ssrNode("<tr>", "</tr>", [_vm._ssrNode((order.guest == null ? "<td>" + _vm._ssrEscape(_vm._s((_order$user_profile = order.user_profile) === null || _order$user_profile === void 0 ? void 0 : _order$user_profile.name) + " " + _vm._s((_order$user_profile2 = order.user_profile) === null || _order$user_profile2 === void 0 ? void 0 : _order$user_profile2.lastname)) + "</td>" : "<td>" + _vm._ssrEscape(_vm._s((_order$guest = order.guest) === null || _order$guest === void 0 ? void 0 : _order$guest.name) + " " + _vm._s((_order$guest2 = order.guest) === null || _order$guest2 === void 0 ? void 0 : _order$guest2.lastname)) + "</td>") + " <td>" + _vm._ssrEscape(_vm._s(order.order_date)) + "</td> " + (order.status == 4 ? "<td>Completado</td>" : "<!---->") + " " + (order.status == 5 ? "<td>Cancelado</td>" : "<!---->") + " "), _vm._ssrNode("<td>", "</td>", [_c("n-link", { staticClass: "btn bg-trivi-blue", attrs: { "to": `/orders-view/${order.id}` } }, [_c("i", { staticClass: "pe-7s-look" })])], 1)], 2);
      }), 0) : _vm._ssrNode('<tbody><tr><td colspan="6">No hay pedidos pendientes.</td></tr></tbody>')], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="d-flex justify-content-center mt-2">', "</div>", [_c("pagination", { attrs: { "records": _vm.orders.length, "perPage": _vm.perPage }, on: { "paginate": _vm.myCallback }, model: { value: _vm.page, callback: function($$v) {
        _vm.page = $$v;
      }, expression: "page" } })], 1)], 2)], 2);
    };
    var staticRenderFns = [];
    var OrdersHistoryvue_type_script_lang_js_ = { auth: true, data() {
      return { orders: [], users: [], order: {}, user: {}, page: 1, perPage: 10 };
    }, mounted() {
      this.getOrders();
    }, computed: { paginatedItems() {
      const start = (this.page - 1) * this.perPage;
      return this.orders.slice(start, start + this.perPage);
    } }, methods: { async getOrders() {
      const response = await this.$axios.get("/api/orders?history[status]=");
      this.orders = response.data.data;
      this.$root.$emit("loading", false);
    }, myCallback(page) {
      this.page = page;
    } } };
    var orders_OrdersHistoryvue_type_script_lang_js_ = OrdersHistoryvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      orders_OrdersHistoryvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "58860718"
    );
    __webpack_exports__["default"] = component.exports;
  },
  158: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_c("SideNav"), _vm._ssrNode(" "), _c("NavTop"), _vm._ssrNode(" "), _c("Search"), _vm._ssrNode(" "), _c("OrdersHistory"), _vm._ssrNode(" "), _vm.loading ? _c("BigLoader") : _vm._e()], 2);
    };
    var staticRenderFns = [];
    var orders_historyvue_type_script_lang_js_ = { components: { SideNav: () => __webpack_require__.e(2).then(__webpack_require__.bind(null, 177)), OrdersHistory: () => Promise.resolve().then(__webpack_require__.bind(null, 128)), Search: () => __webpack_require__.e(1).then(__webpack_require__.bind(null, 176)), NavTop: () => __webpack_require__.e(0).then(__webpack_require__.bind(null, 174)), BigLoader: () => __webpack_require__.e(3).then(__webpack_require__.bind(null, 182)) }, data() {
      return { loading: true };
    }, beforeMount() {
      this.$root.$on("loading", (data) => {
        this.loading = data;
      });
    } };
    var pages_orders_historyvue_type_script_lang_js_ = orders_historyvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      pages_orders_historyvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "3e428ca6"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { Search: __webpack_require__(77).default, OrdersHistory: __webpack_require__(128).default });
  },
  76: function(module, exports2) {
    module.exports = {};
  },
  77: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("client-only", [_c("div", { staticClass: "container d-block" }, [_c("div", { staticClass: "row" }, [_c("div", { staticClass: "col-12" }, [_c("div", { staticClass: "input-group" }, [_c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.search, expression: "search" }], staticClass: "form-control rounded-0", attrs: { "type": "text", "placeholder": "Encuentra tu lado m\xE1s natural...", "aria-label": "Buscar...", "aria-describedby": "basic-addon1" }, domProps: { "value": _vm.search }, on: { "input": [function($event) {
        if ($event.target.composing)
          return;
        _vm.search = $event.target.value;
      }, function($event) {
        _vm.hidden = false;
      }] } }), _vm._v(" "), _c("span", { staticClass: "input-group-text rounded-0 bg-blue-color", attrs: { "id": "basic-addon1" } }, [_c("i", { staticClass: "fa fa-search" })])])]), _vm._v(" "), _c("div", { staticClass: "col-12" }, [_c("div", { staticClass: "position-relative" }, [_c("div", { staticClass: "search-box", class: { "active": _vm.hidden == false }, attrs: { "id": "search-box" } }, _vm._l(_vm.products, function(product) {
        return _c("div", { key: product.id, staticClass: "box-products" }, [_c("a", { staticClass: "single-product", attrs: { "href": _vm.url + "/product/" + product.slug } }, [product.images.length == 0 ? _c("div", [_c("nuxt-img", { attrs: { "provider": "customProvider", "src": "nuxt/default.webp", "alt": "default", "width": "100px" } })], 1) : _c("div", [_c("nuxt-img", { attrs: { "provider": "customProvider", "src": product.images[0].path, "alt": product.name, "width": "100px" } })], 1), _vm._v(" "), _c("div", { staticClass: "ms-5" }, [_c("p", [_vm._v(_vm._s(product.name))]), _vm._v(" "), _c("p", [_c("strong", [_vm._v(_vm._s(product.price) + " \u20AC")])])])])]);
      }), 0)])])])])]);
    };
    var staticRenderFns = [];
    var Searchvue_type_script_lang_js_ = { data() {
      return { searchFather: false, products: [], search: "", url: "https://admin.trivicare.com", hidden: true };
    }, watch: { search(search) {
      if (search == "" || search == null) {
        this.products = [];
        this.$root.$emit("opacityOther", false);
        this.hidden = true;
        return;
      } else {
        this.search = search;
        this.getProducts();
        this.$root.$emit("opacityOther", true);
      }
    } }, methods: { async getProducts() {
      await this.$store.dispatch("getProducts", { perPage: "", page: "", category: "", search: this.search, slug: "", sort: "", tag: "", status: 2 });
      const products = this.$store.getters.getProducts;
      this.products = products.data;
    } } };
    var components_Searchvue_type_script_lang_js_ = Searchvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(78);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_Searchvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "f29c0b0a"
    );
    __webpack_exports__["default"] = component.exports;
  },
  78: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_7fd396fa_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_7fd396fa_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_style_index_0_id_7fd396fa_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  }
};

const ordersHistory = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': ordersHistory$1
}, [ordersHistory$1]);

export { ordersHistory as o };
//# sourceMappingURL=orders-history.mjs.map

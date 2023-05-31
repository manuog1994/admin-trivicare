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

var _slug$1 = {};

var ids = _slug$1.ids = [63, 26, 33, 34, 35, 40, 41, 48, 49, 50, 51];
var modules = _slug$1.modules = {
  100: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "d-none d-lg-block" }, [_vm._ssrNode('<header class="header-area" data-v-9fd8ca2c>', "</header>", [_vm._ssrNode("<div" + _vm._ssrClass("header-padding-1 sticky-bar header-res-padding clearfix", { "is-sticky": _vm.isSticky }) + " data-v-9fd8ca2c>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass(null, _vm.containerClass) + " data-v-9fd8ca2c>", "</div>", [_vm._ssrNode('<div class="row" data-v-9fd8ca2c>', "</div>", [_vm._ssrNode('<div class="col-md-2 d-flex align-items-center" data-v-9fd8ca2c>', "</div>", [_vm._ssrNode('<div class="ms-lg-3 ms-xl-1" data-v-9fd8ca2c>', "</div>", [_c("n-link", { attrs: { "to": "/" } }, [_c("nuxt-img", { attrs: { "loading": "lazy", "provider": "customProvider", "src": "nuxt/TriviCare_byn Positivo.svg", "width": "350", "alt": "logo" } })], 1)], 1)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="col-md-8 d-flex align-items-center" data-v-9fd8ca2c>', "</div>", [_c("Search")], 1), _vm._ssrNode(" "), _vm._ssrNode('<div class="col-md-2 stiky-buttons" data-v-9fd8ca2c>', "</div>", [_vm._ssrNode('<div class="header-right-wrap" data-v-9fd8ca2c>', "</div>", [_vm._ssrNode('<div class="same-style account-setting d-block me-1" data-v-9fd8ca2c>', "</div>", [_vm._ssrNode('<button title="Men\xFA de perfil" class="account-setting-active" data-v-9fd8ca2c><i class="pe-7s-user-female" data-v-9fd8ca2c></i></button> '), _vm._ssrNode("<div" + _vm._ssrClass("account-dropdown", { active: _vm.isOpenAccountSettings }) + " data-v-9fd8ca2c>", "</div>", [_vm.$auth.loggedIn == true ? _vm._ssrNode("<ul data-v-9fd8ca2c>", "</ul>", [_vm._ssrNode('<li class="border-bottom-1 mb-1" data-v-9fd8ca2c><p data-v-9fd8ca2c>Hola, <strong data-v-9fd8ca2c>' + _vm._ssrEscape(_vm._s(_vm.getName())) + "</strong></p></li> "), _vm.role == "admin" ? _vm._ssrNode("<li data-v-9fd8ca2c>", "</li>", [_c("n-link", { attrs: { "to": "/crud" } }, [_vm._v("PDC")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-9fd8ca2c>", "</li>", [_c("n-link", { attrs: { "to": "/my-account" } }, [_vm._v("Mi Perfil")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-9fd8ca2c>", "</li>", [_c("n-link", { attrs: { "to": "/my-orders" } }, [_vm._v("Mis pedidos")])], 1), _vm._ssrNode(" <li data-v-9fd8ca2c><a data-v-9fd8ca2c>Cerrar sesi\xF3n</a></li>")], 2) : _vm._ssrNode("<ul data-v-9fd8ca2c>", "</ul>", [_vm._ssrNode("<li data-v-9fd8ca2c>", "</li>", [_c("n-link", { attrs: { "to": "/login" } }, [_vm._v("Iniciar sesi\xF3n")])], 1)])])], 2), _vm._ssrNode(" " + (_vm.$auth.loggedIn == true ? '<div class="same-style cart-wrap" data-v-9fd8ca2c><button title="Notificaciones" data-v-9fd8ca2c><i class="fa fa-comment-o icon-notify" data-v-9fd8ca2c></i> <span class="count-style" data-v-9fd8ca2c>' + _vm._ssrEscape(_vm._s(_vm.notifications)) + "</span></button></div>" : "<!---->") + " "), _vm._ssrNode('<div class="same-style header-wishlist" data-v-9fd8ca2c>', "</div>", [_c("n-link", { attrs: { "to": "/wishlist" } }, [_c("i", { staticClass: "pe-7s-like" })]), _vm._ssrNode(' <span class="count-style" data-v-9fd8ca2c>' + _vm._ssrEscape(_vm._s(_vm.wishlistItemCount)) + "</span>")], 2), _vm._ssrNode(' <div class="same-style cart-wrap me-lg-3 me-xl-1" data-v-9fd8ca2c><button title="Desplegar carrito" class="icon-cart" data-v-9fd8ca2c><i class="pe-7s-shopbag" data-v-9fd8ca2c></i> <span class="count-style" data-v-9fd8ca2c>' + _vm._ssrEscape(_vm._s(_vm.cartItemCount)) + '</span></button></div> <div class="same-style mobile-menu-toggler d-block d-lg-none" data-v-9fd8ca2c><button title="Menu" class="mobile-aside-button" data-v-9fd8ca2c><i class="pe-7s-menu" data-v-9fd8ca2c></i></button></div>')], 2)])], 2)])]), _vm._ssrNode(" "), _c("Navigation")], 2), _vm._ssrNode(" "), _c("OffCanvasMobileMenu", { class: { "show-mobile-menu": _vm.navOpen }, on: { "toggleAsideMenu": function($event) {
        _vm.navOpen = !_vm.navOpen;
      } } })], 2);
    };
    var staticRenderFns = [];
    var HeaderWithTopbarvue_type_script_lang_js_ = { components: { Search: () => Promise.resolve().then(__webpack_require__.bind(null, 77)), Navigation: () => Promise.resolve().then(__webpack_require__.bind(null, 88)) }, props: ["containerClass", "msg"], computed: { cartItemCount() {
      return this.$store.getters.cartItemCount;
    }, wishlistItemCount() {
      return this.$store.getters.wishlistItemCount;
    }, compareItemCount() {
      return this.$store.getters.compareItemCount;
    }, notificationsItemCount() {
      return this.$store.getters.notificationsItemCount;
    } }, data() {
      return { isSticky: false, isOpenSearch: false, isOpenAccountSettings: false, openCart: false, openNotifications: false, navOpen: false, categories: [], categoryFilter: "", role: "", notifications: 0, addToCart: false };
    }, mounted() {
      window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        if (scroll >= 200) {
          this.isSticky = true;
        } else {
          this.isSticky = false;
        }
      });
      this.getCategories();
      this.getRoles();
      this.countNotifications();
    }, watch: { father() {
      this.$emit("father", this.father);
    }, categoryFilter() {
      this.$emit("categoryFilter", this.categoryFilter);
    }, addToCart() {
      this.openCart = !this.openCart;
    } }, methods: { async logout() {
      await this.$auth.logout();
      window.location.reload();
      this.$notify({ title: "Has cerrado sesi\xF3n!" });
    }, async getCategories() {
      const response = await this.$axios.get("/api/categories");
      this.categories = response.data.data;
    }, redirectToShop() {
      this.$router.push("/shop");
    }, categoryId(value) {
      this.$emit("categoryFilter", value);
    }, getRoles() {
      if (this.$auth.loggedIn == true) {
        const roles = this.$auth.user.roles;
        if (roles != null) {
          roles.map((role) => {
            this.role = role.name;
          });
        } else {
          this.role = "";
        }
      }
    }, getName() {
      if (this.$auth.loggedIn == true) {
        const space = " ";
        const name = this.$auth.user.name;
        const arr = name.split(space);
        return arr[0];
      }
    }, countNotifications() {
      if (this.$auth.loggedIn == true) {
        let notifications = this.$auth.user.notifications;
        if (notifications != null) {
          const noti = notifications.filter((notification) => notification.read == 0).length;
          this.notifications = noti;
        } else {
          this.notifications = 0;
        }
      }
    } }, beforeMount() {
      this.$root.$on("closeMenu", (data) => {
        this.navOpen = data;
        this.openCart = data;
        this.isOpenAccountSettings = data;
      });
    } };
    var components_HeaderWithTopbarvue_type_script_lang_js_ = HeaderWithTopbarvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(90);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_HeaderWithTopbarvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      "9fd8ca2c",
      "04f7c7f8"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { Search: __webpack_require__(77).default, Navigation: __webpack_require__(88).default, OffCanvasMobileMenu: __webpack_require__(82).default });
  },
  101: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "d-lg-none menu-mobile" }, [_vm._ssrNode("<header" + _vm._ssrClass("header-area header-padding-1 sticky-bar header-res-padding clearfix", { "is-sticky": _vm.isSticky }) + " data-v-f449fa68>", "</header>", [_vm._ssrNode('<div class="container-fluid" data-v-f449fa68>', "</div>", [_vm._ssrNode('<div class="row" data-v-f449fa68>', "</div>", [_vm._ssrNode('<div class="col-md-4 col-sm-4 col-4 d-flex justify-content-start align-items-center" data-v-f449fa68><div class="same-style mobile-menu-toggler d-flex d-lg-none ms-sm-3" data-v-f449fa68><button title="Menu" class="mobile-aside-button fs-2" data-v-f449fa68><i class="pe-7s-menu" data-v-f449fa68></i></button></div></div> '), _vm._ssrNode('<div class="col-md-4 col-sm-4 col-4" data-v-f449fa68>', "</div>", [_vm._ssrNode('<div class="lgo" data-v-f449fa68>', "</div>", [_c("n-link", { attrs: { "to": "/" } }, [_c("nuxt-img", { staticStyle: { "width": "50px", "margin": "auto" }, attrs: { "loading": "lazy", "provider": "customProvider", "src": "nuxt/TriviCare_byn Round Positivo.svg", "alt": "logo" } })], 1)], 1)]), _vm._ssrNode(' <div class="col-md-4 col-sm-4 col-4 d-flex justify-content-end align-items-center" data-v-f449fa68><div class="header-right-wrap" data-v-f449fa68><div class="same-style header-search me-2" data-v-f449fa68><button class="search-active" data-v-f449fa68><i class="pe-7s-search" data-v-f449fa68></i></button></div> <div class="same-style cart-wrap me-sm-3" data-v-f449fa68><button title="Menu Carrito" class="icon-cart" data-v-f449fa68><i class="pe-7s-shopbag" data-v-f449fa68></i> <span class="count-style" data-v-f449fa68>' + _vm._ssrEscape(_vm._s(_vm.cartItemCount)) + "</span></button></div></div></div> "), _vm._ssrNode('<div id="searchMobile" class="col-12 hidden mt-3" data-v-f449fa68>', "</div>", [_c("Search")], 1)], 2)])]), _vm._ssrNode(" "), _c("OffCanvasMobileMenu", { class: { "show-mobile-menu": _vm.navOpen }, on: { "toggleAsideMenu": function($event) {
        _vm.navOpen = !_vm.navOpen;
      } } })], 2);
    };
    var staticRenderFns = [];
    var TheHeadervue_type_script_lang_js_ = { auth: false, props: ["searchChildren"], components: { Search: () => Promise.resolve().then(__webpack_require__.bind(null, 77)) }, computed: { cartItemCount() {
      return this.$store.getters.cartItemCount;
    }, wishlistItemCount() {
      return this.$store.getters.wishlistItemCount;
    }, compareItemCount() {
      return this.$store.getters.compareItemCount;
    } }, data() {
      return { isSticky: false, isOpenSearch: false, isOpenAccountSettings: false, openCart: false, navOpen: false, role: "", opacity: false };
    }, beforeMount() {
      this.$root.$on("opacityOther", (data) => {
        this.opacity = data;
      });
      this.$root.$on("closeMenu", (data) => {
        this.isOpenAccountSettings = data;
        this.openCart = data;
        this.navOpen = data;
        document.getElementById("searchMobile").classList.add("hidden");
      });
    }, mounted() {
      window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        if (scroll >= 200) {
          this.isSticky = true;
        } else {
          this.isSticky = false;
        }
      });
    }, watch: { opacity() {
      this.$emit("opacity", this.opacity);
    } }, methods: { searchOpen() {
      if (document.getElementById("searchMobile").classList.contains("hidden")) {
        document.getElementById("searchMobile").classList.remove("hidden");
      } else {
        document.getElementById("searchMobile").classList.add("hidden");
      }
    }, async logout() {
      await this.$auth.logout();
      window.location.reload();
      this.$notify({ title: "Has cerrado sesi\xF3n!" });
    } } };
    var components_TheHeadervue_type_script_lang_js_ = TheHeadervue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(91);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_TheHeadervue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      "f449fa68",
      "435725db"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { Search: __webpack_require__(77).default, OffCanvasMobileMenu: __webpack_require__(82).default });
  },
  105: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBottom_vue_vue_type_style_index_0_id_38c358a2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBottom_vue_vue_type_style_index_0_id_38c358a2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBottom_vue_vue_type_style_index_0_id_38c358a2_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  106: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsWrapper_vue_vue_type_style_index_0_id_7e9af264_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsWrapper_vue_vue_type_style_index_0_id_7e9af264_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetailsWrapper_vue_vue_type_style_index_0_id_7e9af264_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
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
  108: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_e1c80dd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_e1c80dd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_style_index_0_id_e1c80dd8_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  130: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("client-only", [_c("div", { staticClass: "d-block bg-dark" }, [_c("div", [_c("div", {}, [_c("div", { staticClass: "custom-banner" }, [_c("span", [_vm._v("MODO EDICI\xD3N EN ADMIN TRIVICARE")])])])])])]);
    };
    var staticRenderFns = [];
    var NavBottomvue_type_script_lang_js_ = {};
    var components_NavBottomvue_type_script_lang_js_ = NavBottomvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(105);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_NavBottomvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "7f7110ab"
    );
    __webpack_exports__["default"] = component.exports;
  },
  131: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "shop-area pt-100 pb-100" }, [_vm._ssrNode('<div class="container">', "</div>", [_vm._ssrNode('<div class="row">', "</div>", [_vm._ssrNode('<div class="col-md-6">', "</div>", [_vm._ssrNode('<div class="product-details-slider">', "</div>", [_vm._ssrNode('<div class="product-details-img">', "</div>", [_vm._ssrNode('<div class="product-badges">' + (_vm.product.new === "Nuevo" ? '<span class="product-label pink">Nuevo</span>' : "<!---->") + " " + (_vm.product.discount ? '<span class="product-label purple">' + _vm._ssrEscape("-" + _vm._s(_vm.product.discount) + "%") + "</span>" : "<!---->") + "</div> "), _c("swiper", { ref: "swiperTop", attrs: { "options": _vm.swiperOptionTop } }, [_vm.product.images.length == 0 ? _c("div", { staticClass: "swiper-slide text-center" }, [_c("nuxt-img", { staticClass: "principal", attrs: { "loading": "lazy", "provider": "customProvider", "src": "nuxt/default.webp", "alt": "default" } }), _vm._v(" "), _c("p", { staticClass: "fst-italic" }, [_vm._v("Haz doble click sobre la imagen para zoom")])], 1) : _vm._l(_vm.product.images, function(image) {
        return _c("div", { key: "image-" + image.id, staticClass: "swiper-slide text-center" }, [_c("nuxt-img", { staticClass: "principal", attrs: { "loading": "lazy", "provider": "customProvider", "src": image.path, "alt": "default" } }), _vm._v(" "), _c("p", { staticClass: "fst-italic" }, [_vm._v("Haz doble click sobre la imagen para zoom")])], 1);
      })], 2), _vm._ssrNode(" "), _c("swiper", { ref: "swiperThumbs", staticClass: "mt-2", attrs: { "options": _vm.swiperOptionThumbs } }, [_vm.product.images.length == 0 ? _c("div", { staticClass: "thumb-img swiper-slide" }, [_c("nuxt-img", { attrs: { "loading": "lazy", "provider": "customProvider", "src": "nuxt/default.webp", "alt": "default", "width": "100%", "height": "100%" } })], 1) : _vm._l(_vm.product.images, function(image) {
        return _c("div", { key: "imagetwo-" + image.id, staticClass: "thumb-img swiper-slide" }, [_c("nuxt-img", { attrs: { "loading": "lazy", "provider": "customProvider", "src": image.path, "alt": "default", "width": "100%", "height": "100%" } })], 1);
      })], 2)], 2)])]), _vm._ssrNode(" "), _vm.product ? _vm._ssrNode('<div class="col-lg-6 col-md-6">', "</div>", [_vm._ssrNode('<div class="product-details-content ml-70">', "</div>", [_vm._ssrNode("<h2>" + _vm._ssrEscape(_vm._s(_vm.product.name)) + '</h2> <div class="product-details-price"><span>' + _vm._ssrEscape(_vm._s((_vm.discountedPrice(_vm.product) * 1.21).toFixed(2)) + " \u20AC") + "</span> " + (_vm.product.discount > 0 ? '<span class="old">' + _vm._ssrEscape(_vm._s((_vm.product.price_base * 1.21).toFixed(2)) + " \u20AC") + "</span>" : "<!---->") + "</div> "), _vm._ssrNode('<div class="pro-details-rating-wrap">', "</div>", [_c("client-only", [_c("vue-star-rating", { attrs: { "star-size": 30, "read-only": true, "show-rating": false, "rating": _vm.product.rating } })], 1), _vm._ssrNode(' <span><a href="#des-details3" title="Valoraciones" class="ms-2">' + _vm._ssrEscape(_vm._s(_vm.product.total_reviews) + " Valoraciones") + "</a></span>")], 2), _vm._ssrNode(" <div><p>" + _vm._ssrEscape(_vm._s(_vm.product.specifications)) + "</p></div> " + (_vm.product.variation ? '<div class="pro-details-size-color"><div class="pro-details-color-wrap"><h6 class="label">Color</h6> <div class="pro-details-color-content">' + _vm._ssrList(_vm.product.variation.color, function(item, index) {
        return "<label" + _vm._ssrClass("radio", item) + '><input type="radio" name="colorGroup"> <span class="check-mark"></span></label>';
      }) + "</div></div></div>" : "<!---->") + " " + (_vm.product.stock > 0 ? '<div class="pro-details-quality"><div class="cart-plus-minus"><button title="Quitar" class="dec qtybutton">-</button> <input type="text" readonly="readonly"' + _vm._ssrAttr("value", _vm.singleQuantity) + ' class="cart-plus-minus-box"> <button title="A\xF1adir" class="inc qtybutton">+</button></div> <div class="pro-details-cart btn-hover"><button title="A\xF1adir al Carrito">A\xF1adir al Carrito</button></div> <div class="pro-details-wishlist"><button title="A\xF1adir a la lista de deseos"><i class="fa fa-heart-o"></i></button></div></div>' : '<div><p class="text-danger fst-italic">En estos momento no tenemos stock del producto.</p></div>') + ' <div class="pro-details-meta"><span class="label">Categor\xEDa: </span> <ul><li><div><a' + _vm._ssrAttr("href", `https://trivicare.com/${_vm.product.category.slug}`) + _vm._ssrAttr("title", _vm.product.category.name) + ">" + _vm._ssrEscape(_vm._s(_vm.product.category.name)) + "</a></div></li></ul></div> "), _vm._ssrNode('<div class="pro-details-meta">', "</div>", [_vm._ssrNode('<span class="label me-2">Tag:</span> '), _vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.product.tags, function(taggy) {
        return _vm._ssrNode("<li>", "</li>", [_c("n-link", { staticClass: "tag-block", style: `background-color:${taggy.color}`, attrs: { "to": `/shop?tag=${taggy.slug}`, "title": "Etiqueta" } }, [_vm._v("#" + _vm._s(taggy.tag))])], 1);
      }), 0)], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="pro-details-social">', "</div>", [_vm._ssrNode("<ul>", "</ul>", [_vm._ssrNode("<li>", "</li>", [_vm._ssrNode('<a href="https://www.facebook.com/trivicare" target="_blank" title="Facebook">', "</a>", [_c("fa-icon", { attrs: { "icon": "fa-brands fa-facebook-f" } })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode('<a href="https://www.instagram.com/trivicare" target="_blank" title="Instagram">', "</a>", [_c("fa-icon", { attrs: { "icon": "fa-brands fa-instagram" } })], 1)]), _vm._ssrNode(" "), _vm._ssrNode("<li>", "</li>", [_vm._ssrNode('<a href="https://www.tiktok.com/@trivicare" target="_blank" title="TikTok">', "</a>", [_c("fa-icon", { attrs: { "icon": "fa-brands fa-tiktok" } })], 1)])], 2)])], 2)]) : _vm._e()], 2)])]);
    };
    var staticRenderFns = [];
    var ProductDetailsWrappervue_type_script_lang_js_ = { auth: false, props: ["product"], data() {
      return { singleQuantity: 1, categories: [], tags: [], swiperOptionTop: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        effect: "fade",
        loopedSlides: 5,
        zoom: true,
        modules: ""
      }, swiperOptionThumbs: {
        loop: true,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
        loopedSlides: 5
      } };
    }, mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper;
        const swiperThumbs = this.$refs.swiperThumbs.$swiper;
        swiperTop.controller.control = swiperThumbs;
        swiperThumbs.controller.control = swiperTop;
      });
    }, methods: { addToCart(product) {
      const prod = { ...product, cartQuantity: this.singleQuantity };
      if (this.$store.state.cart.find((el) => product.id === el.id)) {
        this.$notify({ title: "Se ha actualizado la cantidad del producto" });
      } else {
        this.$notify({ title: "A\xF1adido al carrito" });
      }
      this.$store.dispatch("addToCartItem", prod);
    }, discountedPrice(product) {
      return product.price_base - product.price_base * product.discount / 100;
    }, increaseQuantity() {
      if (this.product.stock > this.singleQuantity) {
        this.singleQuantity++;
      } else {
        this.$notify({ title: "No hay m\xE1s stock" });
      }
    }, decreaseQuantity() {
      if (this.singleQuantity > 1)
        this.singleQuantity--;
    }, addToWishlist(product) {
      if (this.$store.state.wishlist.find((el) => product.id === el.id)) {
        this.$notify({ title: "Ya est\xE1 en la lista de deseos!" });
      } else {
        this.$notify({ title: "A\xF1adido a la lista de deseos!" });
      }
      this.$store.dispatch("addToWishlist", product);
    }, addToCompare(product) {
      if (this.$store.state.compare.find((el) => product.id === el.id)) {
        this.$notify({ title: "Already added to compare!" });
      } else {
        this.$notify({ title: "Add to compare successfully!" });
      }
      this.$store.dispatch("addToCompare", product);
    } } };
    var product_ProductDetailsWrappervue_type_script_lang_js_ = ProductDetailsWrappervue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(106);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      product_ProductDetailsWrappervue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "e41738c6"
    );
    __webpack_exports__["default"] = component.exports;
  },
  132: function(module, __webpack_exports__, __webpack_require__) {
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
      "0de896c4"
    );
    __webpack_exports__["default"] = component.exports;
  },
  133: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm._ssrNode('<footer class="footer-area bg-gray pt-5 d-none d-md-block" data-v-e1c80dd8>', "</footer>", [_vm._ssrNode('<div class="container-fluid ps-lg-5 pe-lg-5" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="row" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="col-6" data-v-e1c80dd8><div class="footer-widget mb-30" data-v-e1c80dd8><div class="footer-title" data-v-e1c80dd8><h3 data-v-e1c80dd8>\xBFQuieres estar a la \xFAltima?</h3></div> <div class="subscribe-style" data-v-e1c80dd8><p data-v-e1c80dd8>Recibe ofertas, descuentos y las \xFAltimas novedades.</p> <div class="subscribe-form" data-v-e1c80dd8><form class="mc-form" data-v-e1c80dd8><input type="email" required="required" placeholder="  Introduce tu email..." name="email"' + _vm._ssrAttr("value", _vm.email) + ' data-v-e1c80dd8> <button id="subscribe" type="submit" name="subscribe" title="Suscribirse" class="button" data-v-e1c80dd8><span data-v-e1c80dd8>Suscr\xEDbeme</span></button></form></div></div></div></div> <div class="col-3" data-v-e1c80dd8><div class="footer-widget mb-30 ml-75" data-v-e1c80dd8><div class="footer-title text-center" data-v-e1c80dd8><h3 data-v-e1c80dd8>Pago Seguro</h3></div> <p class="text-center" data-v-e1c80dd8>Utilizamos seguridad SSL encriptada para asegurar que tus datos est\xE1n 100% seguros.</p> <div class="text-center" data-v-e1c80dd8><img src="/payment/tarjetas.webp" alt="tarjetas.webp" width="100px" height="auto" class="ms-2" data-v-e1c80dd8> <img src="/payment/bizum.webp" alt="bizum.webp" width="100px" height="auto" class="ms-2" data-v-e1c80dd8> <img src="/payment/transfer_bank.webp" alt="transfer_bank.webp" width="80px" height="auto" class="ms-2" data-v-e1c80dd8> <img src="/payment/paypal.svg" alt="paypal.svg" width="100px" height="auto" class="ms-2" data-v-e1c80dd8></div></div></div> '), _vm._ssrNode('<div class="col-3" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-widget mb-30 ml-75" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-title text-center" data-v-e1c80dd8><h3 data-v-e1c80dd8>S\xEDguenos en las redes</h3></div> '), _vm._ssrNode('<div class="footer-list d-flex justify-content-around" data-v-e1c80dd8>', "</div>", [_vm._ssrNode("<ul data-v-e1c80dd8>", "</ul>", [_vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_vm._ssrNode('<a href="https://www.facebook.com/trivicare" target="_blank" title="Facebook" data-v-e1c80dd8>', "</a>", [_c("fa-icon", { staticClass: "me-2", attrs: { "icon": "fa-brands fa-facebook-f" } }), _vm._ssrNode("Facebook")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_vm._ssrNode('<a href="https://www.instagram.com/trivicare" target="_blank" title="Instagram" data-v-e1c80dd8>', "</a>", [_c("fa-icon", { staticClass: "me-2", attrs: { "icon": "fa-brands fa-instagram" } }), _vm._ssrNode("Instagram")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_vm._ssrNode('<a href="https://www.tiktok.com/@trivicare" target="_blank" title="TikTok" data-v-e1c80dd8>', "</a>", [_c("fa-icon", { staticClass: "me-2", attrs: { "icon": "fa-brands fa-tiktok" } }), _vm._ssrNode("TikTok")], 2)])], 2)])], 2)]), _vm._ssrNode(' <div class="col-4" data-v-e1c80dd8><div class="text-center footer-widget" data-v-e1c80dd8><div class="footer-title" data-v-e1c80dd8><h3 data-v-e1c80dd8>\xBFTienes dudas sobre tu pedido? \xA1Ll\xE1manos!</h3></div> <p data-v-e1c80dd8>De Lunes a Viernes de 10:00 AM a 20:00 PM</p> <p data-v-e1c80dd8><a href="tel:+34613036942" title="Tel\xE9fono" data-v-e1c80dd8><i class="pe-7s-phone" data-v-e1c80dd8></i>\n                                613 036 942\n                            </a></p> <p data-v-e1c80dd8><a href="https://api.whatsapp.com/send/?phone=34613036942&text=Hola%2C+quisiera%20informaci%C3%B3n..." title="Whatsapp" data-v-e1c80dd8><img src="/social/whatsapp.png" alt="whatsapp.png" width="90px" height="auto" data-v-e1c80dd8></a></p> <p data-v-e1c80dd8><a href="mailto:info@trivicare.com" title="Email" data-v-e1c80dd8><i class="pe-7s-mail" data-v-e1c80dd8></i>\n                                info@trivicare.com\n                            </a></p></div></div> '), _vm._ssrNode('<div class="col-3" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-widget mb-30 ml-30 text-center" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-title" data-v-e1c80dd8><h3 data-v-e1c80dd8>\xBFQuienes somos?</h3></div> '), _vm._ssrNode('<div class="footer-list" data-v-e1c80dd8>', "</div>", [_vm._ssrNode("<ul data-v-e1c80dd8>", "</ul>", [_vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/about" } }, [_vm._v("Sobre nosotros")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/contact" } }, [_vm._v("Puntos de venta")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/contact" } }, [_vm._v("Contacto")])], 1), _vm._ssrNode(" <li data-v-e1c80dd8><a data-v-e1c80dd8>Buz\xF3n de Sugerencias</a></li>")], 2)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="col-3" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-widget mb-30 ml-50 text-center" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-title" data-v-e1c80dd8><h3 data-v-e1c80dd8>Nuestras pol\xEDticas</h3></div> '), _vm._ssrNode('<div class="footer-list" data-v-e1c80dd8>', "</div>", [_vm._ssrNode("<ul data-v-e1c80dd8>", "</ul>", [_vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/terms-conditions" } }, [_vm._v("T\xE9rminos y Condiciones")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/cookies-policy" } }, [_vm._v("Pol\xEDtica de Cookies")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/legal-warning" } }, [_vm._v("Aviso Legal y Protecci\xF3n de Datos")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/questions" } }, [_vm._v("Preguntas Frecuentes")])], 1)], 2)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="col-2" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-widget mb-30 ml-50 text-center" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-title" data-v-e1c80dd8><h3 data-v-e1c80dd8>Mi cuenta</h3></div> '), _vm._ssrNode('<div class="footer-list" data-v-e1c80dd8>', "</div>", [_vm._ssrNode("<ul data-v-e1c80dd8>", "</ul>", [_vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/my-account" } }, [_vm._v("Mi perfil")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/my-orders" } }, [_vm._v("Mis pedidos")])], 1)], 2)])], 2)])], 2)]), _vm._ssrNode(' <div class="container-fluid bg-dark mt-3" data-v-e1c80dd8><div class="footer-widget text-center p-3" data-v-e1c80dd8><div class="footer-title" data-v-e1c80dd8><p class="text-light" data-v-e1c80dd8>' + _vm._ssrEscape("\xA9 2022 - " + _vm._s(_vm.yearNow) + " TriviCare Natural Cosmetics. Todos los derechos reservados.") + "</p></div></div></div>")], 2), _vm._ssrNode(" "), _vm._ssrNode('<footer class="d-md-none bg-gray" data-v-e1c80dd8>', "</footer>", [_vm._ssrNode('<div class="container" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="row" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="col-lg-4" data-v-e1c80dd8><div class="footer-widget mb-3 text-center" data-v-e1c80dd8><div class="footer-title mt-3" data-v-e1c80dd8><h3 data-v-e1c80dd8>\xBFQuieres recibir ofertas, descuentos y la \xFAltimas novedades?</h3></div> <div class="subscribe-style" data-v-e1c80dd8><p class="fst-italic" data-v-e1c80dd8>Introduce tu correo electr\xF3nico y suscr\xEDbete a nuestro newsletter.</p> <div class="subscribe-form" data-v-e1c80dd8><form class="mc-form" data-v-e1c80dd8><input type="email" required="required" placeholder="  Introduce tu email..." name="email"' + _vm._ssrAttr("value", _vm.email) + ' data-v-e1c80dd8> <button id="subscribeTwo" type="submit" name="subscribe" title="Suscribirse" class="button" data-v-e1c80dd8><span data-v-e1c80dd8>Suscr\xEDbeme</span></button></form></div></div></div></div> <div class="col-lg-2" data-v-e1c80dd8><div class="text-center footer-widget mb-3 border-top" data-v-e1c80dd8><div class="footer-title mt-3" data-v-e1c80dd8><h3 data-v-e1c80dd8>Pago Seguro</h3></div> <p data-v-e1c80dd8>Utilizamos seguridad SSL encriptada para asegurar que tus datos est\xE1n 100% seguros.</p> <div data-v-e1c80dd8><img src="/payment/tarjetas.webp" alt="tarjetas.webp" width="100px" height="auto" class="ms-2" data-v-e1c80dd8> <img src="/payment/bizum.webp" alt="bizum.webp" width="100px" height="auto" class="ms-2" data-v-e1c80dd8> <img src="/payment/transfer_bank.webp" alt="transfer_bank.webp" width="80px" height="auto" class="ms-2" data-v-e1c80dd8> <img src="/payment/paypal.svg" alt="paypal.svg" width="100px" height="auto" class="ms-2" data-v-e1c80dd8></div></div></div> <div class="col-lg-2" data-v-e1c80dd8><div class="text-center footer-widget mb-3 border-top" data-v-e1c80dd8><div class="footer-title mt-3" data-v-e1c80dd8><h3 data-v-e1c80dd8>\xBFTienes dudas sobre tu pedido? \xA1Ll\xE1manos!</h3></div> <p data-v-e1c80dd8>De Lunes a Viernes de 10:00 AM a 20:00 PM</p> <p data-v-e1c80dd8><a href="tel:+34613036942" title="Tel\xE9fono" data-v-e1c80dd8><i class="pe-7s-phone" data-v-e1c80dd8></i>\n                                613 036 942\n                            </a></p> <p data-v-e1c80dd8><a href="https://api.whatsapp.com/send/?phone=34613036942&text=Hola%2C+quisiera%20informaci%C3%B3n..." title="Whatsapp" data-v-e1c80dd8><img src="/social/whatsapp.png" alt="whatsapp.png" width="90px" height="auto" data-v-e1c80dd8></a></p> <p data-v-e1c80dd8><a href="mailto:info@trivicare.com" title="Email" data-v-e1c80dd8><i class="pe-7s-mail" data-v-e1c80dd8></i>\n                                info@trivicare.com\n                            </a></p></div></div> '), _vm._ssrNode('<div class="col-lg-2" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-widget mb-3 text-center border-top" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-title mt-3" data-v-e1c80dd8><h3 data-v-e1c80dd8>\xBFQuienes somos?</h3></div> '), _vm._ssrNode('<div class="footer-list" data-v-e1c80dd8>', "</div>", [_vm._ssrNode("<ul data-v-e1c80dd8>", "</ul>", [_vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/about" } }, [_vm._v("Sobre nosotros")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/contact" } }, [_vm._v("Puntos de venta")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/contact" } }, [_vm._v("Contacto")])], 1), _vm._ssrNode(" <li data-v-e1c80dd8><a data-v-e1c80dd8>Buz\xF3n de Sugerencias</a></li>")], 2)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="col-lg-2" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-widget mb-3 text-center border-top" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-title mt-3" data-v-e1c80dd8><h3 data-v-e1c80dd8>Nuestras pol\xEDticas</h3></div> '), _vm._ssrNode('<div class="footer-list" data-v-e1c80dd8>', "</div>", [_vm._ssrNode("<ul data-v-e1c80dd8>", "</ul>", [_vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/terms-conditions" } }, [_vm._v("T\xE9rminos y Condiciones")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/cookies-policy" } }, [_vm._v("Pol\xEDtica de Cookies")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/legal-warning" } }, [_vm._v("Aviso Legal y Protecci\xF3n de Datos")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li data-v-e1c80dd8>", "</li>", [_c("n-link", { attrs: { "to": "/questions" } }, [_vm._v("Preguntas Frecuentes")])], 1)], 2)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode('<div class="col-lg-2" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-widget mb-3 text-center border-top" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<div class="footer-title mt-3" data-v-e1c80dd8><h3 data-v-e1c80dd8>S\xEDguenos en las redes</h3></div> '), _vm._ssrNode('<div class="d-flex justify-content-evenly mt-2" data-v-e1c80dd8>', "</div>", [_vm._ssrNode('<a href="https://www.facebook.com/trivicare" target="_blank" title="Facebook" data-v-e1c80dd8>', "</a>", [_c("fa-icon", { staticClass: "fs-3", attrs: { "icon": "fa-brands fa-facebook-f" } })], 1), _vm._ssrNode(" "), _vm._ssrNode('<a href="https://www.instagram.com/trivicare" target="_blank" title="Instagram" data-v-e1c80dd8>', "</a>", [_c("fa-icon", { staticClass: "fs-3", attrs: { "icon": "fa-brands fa-instagram" } })], 1), _vm._ssrNode(" "), _vm._ssrNode('<a href="https://www.tiktok.com/@trivicare" target="_blank" title="TikTok" data-v-e1c80dd8>', "</a>", [_c("fa-icon", { staticClass: "fs-3", attrs: { "icon": "fa-brands fa-tiktok" } })], 1)], 2)], 2)])], 2)]), _vm._ssrNode(' <div class="container-fluid bg-dark mt-3" data-v-e1c80dd8><div class="footer-widget text-center p-3" data-v-e1c80dd8><div class="footer-title" data-v-e1c80dd8><p class="text-light" data-v-e1c80dd8>' + _vm._ssrEscape("\xA9 2022 - " + _vm._s(_vm.yearNow) + " TriviCare Natural Cosmetics. Todos los derechos reservados.") + "</p></div></div></div>")], 2)], 2);
    };
    var staticRenderFns = [];
    var TheFootervue_type_script_lang_js_ = { data() {
      return { email: "", yearNow: new Date().getFullYear() };
    }, components: {}, methods: { openSuggestionsModal() {
      this.$modal.show("suggestionsModal");
    }, openNewsletterModal(email) {
      this.$modal.show("newsletterModal", { email });
    } } };
    var components_TheFootervue_type_script_lang_js_ = TheFootervue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(108);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_TheFootervue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      "e1c80dd8",
      "2224c1e9"
    );
    __webpack_exports__["default"] = component.exports;
  },
  165: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("client-only", [_c("div", { staticClass: "product-details-page-wrapper" }, [_c("HeaderWithTopbar", { attrs: { "containerClass": "container-fluid" } }), _vm._v(" "), _c("TheHeader", { attrs: { "searchFather": _vm.searchChildren }, on: { "opacity": _vm.searchOpacity } }), _vm._v(" "), _c("div", { attrs: { "id": "post-nav" }, on: { "click": _vm.closeMenus } }, [_c("NavBottom"), _vm._v(" "), _vm.productDetails ? _c("ProductDetailsWrapper", { attrs: { "product": _vm.productDetails } }) : _vm._e(), _vm._v(" "), _vm.productDetails ? _c("ProductDetailsDescriptionReview", { attrs: { "product": _vm.productDetails, "reviews": _vm.productDetails.reviews } }) : _vm._e()], 1), _vm._v(" "), _c("TheFooter")], 1)]);
    };
    var staticRenderFns = [];
    var _slugvue_type_script_lang_js_ = { async asyncData({ store, params }) {
      try {
        const productDispatch = await store.dispatch("getProducts", { page: "", category: "", search: "", slug: params.slug, sort: "", tag: "", status: "" });
        const productDetails = store.getters.getProducts;
        return { productDetails: productDetails.data[0] };
      } catch (error) {
        console.log(error);
      }
    }, head() {
      return { title: this.productDetails.name + " | TriviCare Natural Cosmetics", link: [{ rel: "cannonical", href: "https://trivicare.com/product/" }], meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: this.productDetails.meta_description }] };
    }, data() {
      return { searchChildren: "" };
    }, async mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        setTimeout(() => {
          this.$nuxt.$loading.finish();
        }, 2e3);
      });
      await this.$axios.post("/api/visit", { ip_address: "No Ip", page_visited: this.productDetails.name });
    }, methods: { closeMenus() {
      this.searchOpacity(false);
      this.$root.$emit("closeMenu", this.closeMenu);
    }, searchOpacity(searchFather) {
      if (searchFather == true) {
        document.getElementById("post-nav").classList.add("search-screen");
      } else {
        document.getElementById("post-nav").classList.remove("search-screen");
      }
    } } };
    var product_slugvue_type_script_lang_js_ = _slugvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    var component = Object(componentNormalizer["a"])(
      product_slugvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "219f9b79"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { HeaderWithTopbar: __webpack_require__(100).default, TheHeader: __webpack_require__(101).default, NavBottom: __webpack_require__(130).default, ProductDetailsWrapper: __webpack_require__(131).default, ProductDetailsDescriptionReview: __webpack_require__(132).default, TheFooter: __webpack_require__(133).default });
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
  },
  79: function(module, exports2) {
    module.exports = {};
  },
  80: function(module, exports2) {
    module.exports = {};
  },
  81: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_c0e6631e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_c0e6631e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveMobileMenu_vue_vue_type_style_index_0_id_c0e6631e_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  82: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "offcanvas-mobile-menu-wrapper" }, [_vm._ssrNode('<div class="mobile-menu-overlay"></div> '), _vm._ssrNode('<div class="mobile-menu-inner">', "</div>", [_vm._ssrNode('<button title="Cerrar" class="close-btn"><i class="pe-7s-close"></i></button> '), _vm._ssrNode('<div class="mobile-menu-inner-wrapper">', "</div>", [_vm._ssrNode('<div class="offcanvas-body-inner">', "</div>", [_vm._ssrNode('<div class="menu-navigation">', "</div>", [_c("ResponsiveMobileMenu")], 1)])])], 2)], 2);
    };
    var staticRenderFns = [];
    var OffCanvasMobileMenuvue_type_script_lang_js_ = { components: { ResponsiveMobileMenu: () => Promise.resolve().then(__webpack_require__.bind(null, 83)) } };
    var components_OffCanvasMobileMenuvue_type_script_lang_js_ = OffCanvasMobileMenuvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    var component = Object(componentNormalizer["a"])(
      components_OffCanvasMobileMenuvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "03975f36"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { ResponsiveMobileMenu: __webpack_require__(83).default });
  },
  83: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", [_vm._ssrNode('<ul class="mobile-menu mb-2 border-bottom-1" data-v-c0e6631e>', "</ul>", [_c("client-only", _vm._l(_vm.menus, function(link, i) {
        return _c("li", { key: i }, [_c("n-link", { attrs: { "to": link.url } }, [_vm._v("\r\n                    " + _vm._s(link.title) + "\r\n                ")]), _vm._v(" "), link.submenu ? _c("span", { staticClass: "submenu-toggle" }, [_c("i", { staticClass: "pe-7s-angle-down" })]) : _vm._e(), _vm._v(" "), link.submenu ? _c("ul", { staticClass: "submenu" }, [_c("client-only", _vm._l(link.submenu, function(link2, i2) {
          return _c("li", { key: i2, staticClass: "title" }, [_c("n-link", { attrs: { "to": link2.url } }, [_vm._v(" " + _vm._s(link2.title) + " ")]), _vm._v(" "), link2.submenu ? _c("span", { staticClass: "submenu-toggle" }, [_c("i", { staticClass: "pe-7s-angle-down" })]) : _vm._e(), _vm._v(" "), link2.submenu ? _c("ul", { staticClass: "submenu" }, [_c("client-only", _vm._l(link2.submenu, function(link3, i3) {
            return _c("li", { key: i3 }, [_c("n-link", { attrs: { "to": link3.url } }, [_vm._v(" " + _vm._s(link3.title) + " ")])], 1);
          }), 0)], 1) : _vm._e()], 1);
        }), 0)], 1) : _vm._e()], 1);
      }), 0)], 1), _vm._ssrNode(' <div class="mt-4" data-v-c0e6631e>' + (_vm.$auth.loggedIn == false ? '<a href="/login" class="text-center" data-v-c0e6631e>Iniciar sesi\xF3n</a>' : '<div class="mt-2" data-v-c0e6631e><p data-v-c0e6631e>Hola, <strong data-v-c0e6631e>' + _vm._ssrEscape(_vm._s(_vm.getName())) + '</strong></p> <ul class="ms-2" data-v-c0e6631e>' + (_vm.role == "admin" ? '<li data-v-c0e6631e><a href="/crud" data-v-c0e6631e>PDC</a></li>' : "<!---->") + ' <li data-v-c0e6631e><a href="/my-account" data-v-c0e6631e>Mi cuenta</a></li> <li data-v-c0e6631e><a href="/my-orders" data-v-c0e6631e>Mis pedidos</a></li> <li data-v-c0e6631e><a data-v-c0e6631e>Cerrar sesi\xF3n</a></li></ul></div>') + "</div> "), _vm._ssrNode('<div class="mt-4" data-v-c0e6631e>', "</div>", [_c("n-link", { attrs: { "to": "/wishlist" } }, [_vm._v("Lista de deseos")]), _vm._ssrNode(' <span class="ms-2 bg-blue-color p-2 rounded-5" data-v-c0e6631e>' + _vm._ssrEscape(_vm._s(_vm.wishlistItemCount)) + "</span>")], 2), _vm._ssrNode(" "), _vm.$auth.loggedIn == true ? _vm._ssrNode('<div class="mt-4" data-v-c0e6631e>', "</div>", [_c("n-link", { attrs: { "to": "/notifications-center" } }, [_vm._v("\r\n            Notificaciones\r\n        ")]), _vm._ssrNode(' <span class="ms-2 bg-blue-color p-2 rounded-5" data-v-c0e6631e>' + _vm._ssrEscape(_vm._s(_vm.notifications)) + "</span>")], 2) : _vm._e()], 2);
    };
    var staticRenderFns = [];
    var ResponsiveMobileMenuvue_type_script_lang_js_ = { data() {
      return { menus: [{ url: "/", title: "Inicio" }, { url: "/shop", title: "Ver Todo" }, { url: "/shop?category=facial", title: "Facial" }, { url: "/shop?category=hidratante", title: "Hidratante" }, { url: "/shop?category=corporal", title: "Corporal" }, { url: "/shop?category=accesorios", title: "Accesorios" }, { url: "/contact", title: "Contacto" }], role: "", notifications: 0 };
    }, computed: { wishlistItemCount() {
      return this.$store.getters.wishlistItemCount;
    } }, mounted() {
      let getSiblings = function(e) {
        let siblings = [];
        if (!e.parentNode) {
          return siblings;
        }
        let sibling = e.parentNode.firstChild;
        while (sibling) {
          if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
          }
          sibling = sibling.nextSibling;
        }
        return siblings;
      };
      this.getRoles();
      const subMenuToggle = document.querySelectorAll(".submenu-toggle");
      subMenuToggle.forEach(function(btn) {
        btn.addEventListener("click", function() {
          if (!this.classList.contains("active")) {
            this.classList.add("active");
            this.nextElementSibling.classList.add("active");
            this.closest("li").classList.add("active");
            getSiblings(this.closest("li")).forEach(function(item) {
              item.classList.remove("active");
              item.querySelectorAll("li, .submenu-toggle, .submenu").forEach(function(child) {
                child.classList.remove("active");
              });
            });
          } else {
            this.closest("li").classList.remove("active");
            this.closest("li").querySelectorAll("li, .submenu-toggle, .submenu").forEach(function(child) {
              child.classList.remove("active");
            });
          }
        });
      });
      this.countNotifications();
    }, methods: { async logout() {
      await this.$auth.logout();
      window.location.reload();
      this.$notify({ title: "Has cerrado sesi\xF3n!" });
    }, getRoles() {
      if (this.$auth.loggedIn == true) {
        const roles = this.$auth.user.roles;
        if (roles != null) {
          roles.map((role) => {
            this.role = role.name;
          });
        } else {
          this.role = "";
        }
      }
    }, getName() {
      if (this.$auth.loggedIn == true) {
        const space = " ";
        const name = this.$auth.user.name;
        const arr = name.split(space);
        return arr[0];
      }
    }, countNotifications() {
      if (this.$auth.loggedIn == true) {
        const notifications = this.$auth.user.notifications;
        if (notifications.read == false) {
          this.notifications = notifications.length;
        }
      }
    } } };
    var components_ResponsiveMobileMenuvue_type_script_lang_js_ = ResponsiveMobileMenuvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(81);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_ResponsiveMobileMenuvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      "c0e6631e",
      "e56fe5f0"
    );
    __webpack_exports__["default"] = component.exports;
  },
  84: function(module, exports2) {
    module.exports = {};
  },
  85: function(module, exports2) {
    module.exports = {};
  },
  86: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_72fd99fd_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_72fd99fd_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_72fd99fd_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  88: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("client-only", [_c("div", { staticClass: "d-flex justify-content-around" }, [_c("div", { staticClass: "d-flex col-7" }, [_c("nav", [_c("ul", { staticClass: "d-flex justify-content-around" }, [_c("li", { staticClass: "p-nav" }, [_c("n-link", { attrs: { "to": "/shop" } }, [_vm._v("Ver Todo")])], 1), _vm._v(" "), _vm._l(_vm.categories, function(category) {
        return _c("li", { key: category.id, staticClass: "p-nav" }, [_c("n-link", { attrs: { "to": `/shop?category=${category.slug}` } }, [_vm._v(_vm._s(category.name))])], 1);
      }), _vm._v(" "), _c("li", { staticClass: "p-nav" }, [_c("n-link", { attrs: { "to": "/contact" } }, [_vm._v("Contacto")])], 1)], 2)])]), _vm._v(" "), _c("div", { staticClass: "col-5" }, [_c("div", {}, [_c("div", { staticClass: "d-flex justify-content-end" }, [_c("p", { staticClass: "p-text" }, [_c("i", { staticClass: "pe-7s-phone" }), _vm._v("\n                         Atenci\xF3n al cliente 10:00 AM a 20:00 PM || \n                        "), _c("a", { attrs: { "href": "tel:+34613036942" } }, [_vm._v("613 036 942")])])])])])])]);
    };
    var staticRenderFns = [];
    var Navigationvue_type_script_lang_js_ = { data() {
      return { categoryId: "", url: "https://admin.trivicare.com" };
    }, computed: { categories() {
      return this.$store.getters.getCategories;
    } }, created() {
      this.getCategories();
    }, methods: { getCategories() {
      this.$store.dispatch("getCategories");
    }, redirectHome() {
      this.categoryId = "";
      this.$router.push({ path: "/shop" });
    } }, watch: { categoryId() {
      this.$router.push({ path: "/shop", query: { category: this.categoryId } });
    } } };
    var components_Navigationvue_type_script_lang_js_ = Navigationvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(86);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_Navigationvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "4391f367"
    );
    __webpack_exports__["default"] = component.exports;
  },
  90: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_9fd8ca2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_9fd8ca2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderWithTopbar_vue_vue_type_style_index_0_id_9fd8ca2c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  91: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_f449fa68_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_f449fa68_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_2_node_modules_sass_resources_loader_lib_loader_js_ref_9_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheHeader_vue_vue_type_style_index_0_id_f449fa68_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  94: function(module, exports2) {
    module.exports = {};
  },
  95: function(module, exports2) {
    module.exports = {};
  },
  96: function(module, exports2) {
    module.exports = {};
  },
  97: function(module, exports2) {
    module.exports = {};
  }
};

const _slug = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': _slug$1
}, [_slug$1]);

export { _slug as _ };
//# sourceMappingURL=_slug.mjs.map

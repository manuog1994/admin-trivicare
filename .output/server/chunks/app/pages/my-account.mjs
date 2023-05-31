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

var myAccount$1 = {};

var ids = myAccount$1.ids = [58, 26, 32, 34, 35, 48, 49, 51];
var modules = myAccount$1.modules = {
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
  103: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccountContainer_vue_vue_type_style_index_0_id_031eff57_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccountContainer_vue_vue_type_style_index_0_id_031eff57_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccountContainer_vue_vue_type_style_index_0_id_031eff57_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  126: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("client-only", [_c("div", [_c("div", { staticClass: "my-account-area pb-80 pt-100" }, [_vm.errors ? _c("div", { staticClass: "w-50 m-auto" }, [_c("client-only", _vm._l(_vm.errors, function(error) {
        return _c("div", { key: error.id, staticClass: "alert alert-danger", attrs: { "role": "alert" } }, [_vm._v("\n                        " + _vm._s(error) + "\n                    ")]);
      }), 0)], 1) : _vm._e(), _vm._v(" "), _c("div", { staticClass: "container" }, [_c("div", { staticClass: "row" }, [_c("div", { staticClass: "ms-auto me-auto col-lg-9" }, [_c("div", { staticClass: "my-account-wrapper" }, [_c("div", { staticClass: "panel-group", attrs: { "id": "faq" } }, [_c("div", { staticClass: "panel panel-default single-my-account" }, [_c("div", { staticClass: "panel-heading my-account-title" }, [_c("h3", { staticClass: "panel-title" }, [_c("span", [_vm._v("1 .")]), _vm._v(" "), _c("a", { attrs: { "data-bs-toggle": "collapse", "href": "#my-account-1" } }, [_vm._v("Editar datos de tu cuenta ")])])]), _vm._v(" "), _c("div", { staticClass: "panel-collapse collapse show", attrs: { "id": "my-account-1", "data-bs-parent": "#faq" } }, [_c("div", { staticClass: "panel-body" }, [_c("form", { on: { "submit": function($event) {
        $event.preventDefault();
        return _vm.updateEmail.apply(null, arguments);
      } } }, [_c("div", { staticClass: "myaccount-info-wrapper" }, [_c("div", { staticClass: "account-info-wrapper" }, [_c("h4", [_vm._v("Informaci\xF3n de mi cuenta")]), _vm._v(" "), _c("h5", [_vm._v("Correo el\xE9ctronico")])]), _vm._v(" "), _c("div", { staticClass: "row" }, [_c("div", { staticClass: "col-lg-12 col-md-12" }, [_c("p", [_c("strong", [_vm._v("Email actual:")]), _vm._v(" " + _vm._s(_vm.$auth.user.email))]), _vm._v(" "), _c("div", { staticClass: "billing-info" }, [_c("label", [_vm._v("Email")]), _vm._v(" "), _c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.email, expression: "email" }], attrs: { "type": "email", "required": "" }, domProps: { "value": _vm.email }, on: { "input": function($event) {
        if ($event.target.composing)
          return;
        _vm.email = $event.target.value;
      } } })])])]), _vm._v(" "), _c("div", { staticClass: "billing-back-btn" }, [_c("div", { staticClass: "billing-back" }, [_c("a", { attrs: { "href": "#" } }, [_c("i", { staticClass: "fa fa-arrow-up", attrs: { "title": "Atr\xE1s" } }), _vm._v(" atr\xE1s")])]), _vm._v(" "), _c("div", { staticClass: "billing-btn" }, [_c("button", { attrs: { "type": "submit", "title": "Actualizar email" } }, [_vm._v("Actualizar Email")])])])])])])])]), _vm._v(" "), _c("div", { staticClass: "panel panel-default single-my-account" }, [_c("div", { staticClass: "panel-heading my-account-title" }, [_c("h3", { staticClass: "panel-title" }, [_c("span", [_vm._v("2 .")]), _vm._v(" "), _c("a", { attrs: { "data-bs-toggle": "collapse", "href": "#my-account-2" } }, [_vm._v("Cambiar tu contrase\xF1a ")])])]), _vm._v(" "), _c("div", { staticClass: "panel-collapse collapse", attrs: { "id": "my-account-2", "data-bs-parent": "#faq" } }, [_c("div", { staticClass: "panel-body" }, [_c("div", { staticClass: "myaccount-info-wrapper" }, [_c("div", { staticClass: "account-info-wrapper" }, [_c("h4", [_vm._v("Cambiar Contrase\xF1a")]), _vm._v(" "), _c("h5", [_vm._v("Tu Contrase\xF1a")])]), _vm._v(" "), _c("form", { on: { "submit": function($event) {
        $event.preventDefault();
        return _vm.updatePassword.apply(null, arguments);
      } } }, [_c("div", { staticClass: "row" }, [_c("div", { staticClass: "col-lg-12 col-md-12" }, [_c("div", { staticClass: "billing-info" }, [_c("label", [_vm._v("Contrase\xF1a actual")]), _vm._v(" "), _c("div", { staticClass: "d-flex" }, [_c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.old_password, expression: "old_password" }], attrs: { "id": "passOne", "type": "password", "name": "password", "required": "" }, domProps: { "value": _vm.old_password }, on: { "input": function($event) {
        if ($event.target.composing)
          return;
        _vm.old_password = $event.target.value;
      } } }), _vm._v(" "), _c("span", { staticClass: "form-pass", on: { "click": function($event) {
        return _vm.viewPass("passOne");
      } } }, [_c("i", { staticClass: "fa fa-eye" })])])])]), _vm._v(" "), _c("div", { staticClass: "col-lg-12 col-md-12" }, [_c("div", { staticClass: "billing-info" }, [_c("label", [_vm._v("Nueva Contrase\xF1a")]), _vm._v(" "), _c("div", { staticClass: "d-flex" }, [_c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.password, expression: "password" }], attrs: { "id": "passTwo", "type": "password", "name": "password", "required": "" }, domProps: { "value": _vm.password }, on: { "input": function($event) {
        if ($event.target.composing)
          return;
        _vm.password = $event.target.value;
      } } }), _vm._v(" "), _c("span", { staticClass: "form-pass", on: { "click": function($event) {
        return _vm.viewPass("passTwo");
      } } }, [_c("i", { staticClass: "fa fa-eye" })])])])]), _vm._v(" "), _c("div", { staticClass: "col-lg-12 col-md-12" }, [_c("div", { staticClass: "billing-info" }, [_c("label", [_vm._v("Confirma tu nueva Contrase\xF1a")]), _vm._v(" "), _c("div", { staticClass: "d-flex" }, [_c("input", { directives: [{ name: "model", rawName: "v-model", value: _vm.password_confirmation, expression: "password_confirmation" }], attrs: { "id": "passThree", "type": "password", "name": "password", "required": "" }, domProps: { "value": _vm.password_confirmation }, on: { "input": function($event) {
        if ($event.target.composing)
          return;
        _vm.password_confirmation = $event.target.value;
      } } }), _vm._v(" "), _c("span", { staticClass: "form-pass", on: { "click": function($event) {
        return _vm.viewPass("passThree");
      } } }, [_c("i", { staticClass: "fa fa-eye" })])])])])]), _vm._v(" "), _c("div", { staticClass: "billing-back-btn" }, [_c("div", { staticClass: "billing-back" }, [_c("a", { attrs: { "href": "#" } }, [_c("i", { staticClass: "fa fa-arrow-up", attrs: { "title": "Atr\xE1s" } }), _vm._v(" atr\xE1s")])]), _vm._v(" "), _c("div", { staticClass: "billing-btn" }, [_c("button", { attrs: { "type": "submit", "title": "Actualizar contrase\xF1a" } }, [_vm._v("Actualizar contrase\xF1a")])])])])])])])]), _vm._v(" "), _c("div", { staticClass: "panel panel-default single-my-account" }, [_c("div", { staticClass: "panel-heading my-account-title" }, [_c("h3", { staticClass: "panel-title" }, [_c("span", [_vm._v("3 .")]), _vm._v(" "), _c("a", { attrs: { "data-bs-toggle": "collapse", "href": "#my-account-3" } }, [_vm._v("Gestionar tu direcci\xF3n de env\xEDo ")])])]), _vm._v(" "), _c("div", { staticClass: "panel-collapse collapse", attrs: { "id": "my-account-3", "data-bs-parent": "#faq" } }, [_c("div", { staticClass: "panel-body" }, [_c("div", { staticClass: "myaccount-info-wrapper" }, [_c("div", { staticClass: "account-info-wrapper" }, [_c("h4", [_vm._v("Direcci\xF3nes de Env\xEDo")])]), _vm._v(" "), _c("div", { staticClass: "row" }, [_c("client-only", _vm._l(_vm.$auth.user.user_profile, function(profile) {
        return _c("div", { key: "profile" + profile.id }, [profile.name != "deleted" ? _c("div", { staticClass: "card shadow w-75 m-auto mb-3" }, [_c("div", { staticClass: "card-body" }, [_c("h5", { staticClass: "card-title" }, [_vm._v(_vm._s(profile.name) + "\n                                                                        " + _vm._s(profile.lastname))]), _vm._v(" "), _c("p", { staticClass: "card-text" }, [_vm._v(_vm._s(profile.address))]), _vm._v(" "), _c("p", { staticClass: "card-text" }, [_vm._v(_vm._s(profile.phone))]), _vm._v(" "), _c("p", { staticClass: "card-text" }, [_vm._v(_vm._s(profile.zipcode) + "\n                                                                        " + _vm._s(profile.city) + " (" + _vm._s(profile.state) + ")")]), _vm._v(" "), _c("p", { staticClass: "card-text" }, [_vm._v(_vm._s(profile.country))]), _vm._v(" "), _c("a", { staticClass: "btn btn-light", on: { "click": function($event) {
          $event.preventDefault();
          return _vm.deleteProfile(profile.id);
        } } }, [_vm._v("Eliminar")])])]) : _vm._e()]);
      }), 0)], 1), _vm._v(" "), _c("div", { staticClass: "billing-back-btn" }, [_c("div", { staticClass: "billing-back" }, [_c("a", { attrs: { "href": "#", "title": "Atr\xE1s" } }, [_c("i", { staticClass: "fa fa-arrow-up" }), _vm._v(" atr\xE1s")])])])])])])]), _vm._v(" "), _c("div", { staticClass: "panel panel-default single-my-account" }, [_c("div", { staticClass: "panel-heading my-account-title" }, [_c("h3", { staticClass: "panel-title" }, [_c("span", [_vm._v("4 .")]), _vm._v(" "), _c("a", { attrs: { "data-bs-toggle": "collapse", "href": "#my-account-4" } }, [_vm._v("Crear\n                                                otra direcci\xF3n de env\xEDo ")])])]), _vm._v(" "), _c("div", { staticClass: "panel-collapse collapse", attrs: { "id": "my-account-4", "data-bs-parent": "#faq" } }, [_c("div", { staticClass: "panel-body" }, [_c("div", { staticClass: "myaccount-info-wrapper" }, [_c("NewProfile")], 1)])])])])])])])])]), _vm._v(" "), _c("div", { staticClass: "text-center mb-5" }, [_c("a", { staticClass: "btn btn-light", on: { "click": function($event) {
        $event.preventDefault();
        return _vm.deleteAccount.apply(null, arguments);
      } } }, [_vm._v("Eliminar cuenta")])])])]);
    };
    var staticRenderFns = [];
    var external_sweetalert2_ = __webpack_require__(71);
    var external_sweetalert2_default = /* @__PURE__ */ __webpack_require__.n(external_sweetalert2_);
    var MyAccountContainervue_type_script_lang_js_ = { data() {
      return { email: "", old_password: "", password: "", password_confirmation: "", errors: [], disabled: true, checked: false };
    }, components: { NewProfile: () => __webpack_require__.e(18).then(__webpack_require__.bind(null, 194)) }, mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        setTimeout(() => {
          this.$nuxt.$loading.finish();
        }, 2e3);
      });
      var tituloOriginal = document.title;
      window.onblur = function() {
        document.title = "Ey, vuelve aqu\xED!";
      };
      window.onfocus = function() {
        document.title = tituloOriginal;
      };
      this.$auth.fetchUser();
    }, methods: { async updateEmail() {
      external_sweetalert2_default.a.fire({ title: "\xBFEstas seguro de que quieres cambiar tu email?", showCancelButton: true, confirmButtonText: "Si, cambiar" }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.post("/api/update-email/" + this.$auth.user.id, { email: this.email }).then(() => {
            external_sweetalert2_default.a.fire("\xA1Email actualizado!", "", "success");
            this.$auth.fetchUser();
            this.errors = [];
            this.email = "";
          }).catch((error) => {
            this.errors = Object.values(error.response.data).flat();
          });
        }
      });
    }, async updatePassword() {
      await this.$axios.post("/api/update-password/" + this.$auth.user.id, { old_password: this.old_password, password: this.password, password_confirmation: this.password_confirmation }).then(() => {
        external_sweetalert2_default.a.fire("\xA1Contrase\xF1a actualizada!", "", "success");
        this.old_password = "";
        this.password = "";
        this.password_confirmation = "";
        this.errors = [];
        this.$auth.fetchUser();
      }).catch((error) => {
        this.errors = Object.values(error.response.data).flat();
      });
    }, async deleteProfile(id) {
      external_sweetalert2_default.a.fire({ title: "\xBFEstas seguro de que quieres eliminar esta direcci\xF3n?", showCancelButton: true, confirmButtonText: "Si, eliminar" }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.delete("/api/delete-profile/" + id);
          this.$auth.fetchUser();
          external_sweetalert2_default.a.fire("Su direcci\xF3n ha sido eliminada!", "", "success");
        }
      });
    }, async deleteAccount() {
      external_sweetalert2_default.a.fire({ title: "\xBFEstas seguro de que quieres eliminar tu cuenta?", showCancelButton: true, confirmButtonText: "Si, eliminar" }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.delete("/api/destroy/" + this.$auth.user.id);
          external_sweetalert2_default.a.fire("Su cuenta ha sido eliminada!", "", "success");
          this.$auth.logout();
          this.$router.push("/");
        }
      });
    }, async resendEmail() {
      await this.$axios.post("/api/resend-email/" + this.$auth.user.id).then((res) => {
        console.log(res);
        this.$notify({ title: "Email reenviado" });
      }).catch((error) => {
        this.errors = Object.values(error.response.data).flat();
      });
    }, viewPass(id) {
      var x = document.getElementById(id);
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    } }, head() {
      return { title: "Mi Cuenta" };
    } };
    var components_MyAccountContainervue_type_script_lang_js_ = MyAccountContainervue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(103);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_MyAccountContainervue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      "031eff57",
      "049356f3"
    );
    __webpack_exports__["default"] = component.exports;
  },
  156: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("client-only", [_c("div", { staticClass: "shop-page-wrapper" }, [_c("HeaderWithTopbar", { attrs: { "containerClass": "container-fluid" } }), _vm._v(" "), _c("TheHeader", { attrs: { "searchFather": _vm.searchChildren }, on: { "opacity": _vm.searchOpacity } }), _vm._v(" "), _c("div", { attrs: { "id": "post-nav" }, on: { "click": _vm.closeMenus } }, [_c("MyAccountContainer")], 1)], 1)]);
    };
    var staticRenderFns = [];
    var my_accountvue_type_script_lang_js_ = { data() {
      return { disabled: true, checked: false, searchChildren: "", unauthorized: "" };
    }, components: { HeaderWithTopbar: () => Promise.resolve().then(__webpack_require__.bind(null, 100)), TheHeader: () => Promise.resolve().then(__webpack_require__.bind(null, 101)), MyAccountContainer: () => Promise.resolve().then(__webpack_require__.bind(null, 126)) }, mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        setTimeout(() => {
          this.$nuxt.$loading.finish();
        }, 2e3);
      });
      var tituloOriginal = document.title;
      window.onblur = function() {
        document.title = "Ey, vuelve aqu\xED!";
      };
      window.onfocus = function() {
        document.title = tituloOriginal;
      };
      if (this.$axios.onError((error) => {
        const code = error.response.status;
        if (code == 401) {
          this.$auth.logout();
        }
      }))
        ;
    }, methods: { closeMenus() {
      this.searchOpacity(false);
      this.$root.$emit("closeMenu", this.closeMenu);
    }, searchOpacity(searchFather) {
      if (searchFather == true) {
        document.getElementById("post-nav").classList.add("search-screen");
      } else {
        document.getElementById("post-nav").classList.remove("search-screen");
      }
    } }, head() {
      return {
        titleTemplate: "Mi Cuenta | TriviCare Natural Cosmetics"
      };
    } };
    var pages_my_accountvue_type_script_lang_js_ = my_accountvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    var component = Object(componentNormalizer["a"])(
      pages_my_accountvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "2d65bf8d"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { HeaderWithTopbar: __webpack_require__(100).default, TheHeader: __webpack_require__(101).default, MyAccountContainer: __webpack_require__(126).default });
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
  92: function(module, exports2) {
    module.exports = {};
  }
};

const myAccount = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': myAccount$1
}, [myAccount$1]);

export { myAccount as m };
//# sourceMappingURL=my-account.mjs.map

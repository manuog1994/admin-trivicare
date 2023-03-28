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

var headerWithTopbar$1 = {};

var ids = headerWithTopbar$1.ids = [26, 33, 34, 47, 48];
var modules = headerWithTopbar$1.modules = {
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
      "40ea98c4"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { Search: __webpack_require__(77).default, Navigation: __webpack_require__(88).default, OffCanvasMobileMenu: __webpack_require__(82).default });
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
      "7be9673b"
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
      "71c39ba5"
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
      "e8bbac70"
    );
    __webpack_exports__["default"] = component.exports;
  },
  84: function(module, exports2) {
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
      "7c75ffb2"
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
  }
};

const headerWithTopbar = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': headerWithTopbar$1
}, [headerWithTopbar$1]);

export { headerWithTopbar as h };
//# sourceMappingURL=header-with-topbar.mjs.map

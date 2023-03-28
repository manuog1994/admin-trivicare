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

var offCanvasMobileMenu$1 = {};

var ids = offCanvasMobileMenu$1.ids = [34, 47];
var modules = offCanvasMobileMenu$1.modules = {
  79: function(module, exports2) {
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
  }
};

const offCanvasMobileMenu = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': offCanvasMobileMenu$1
}, [offCanvasMobileMenu$1]);

export { offCanvasMobileMenu as o };
//# sourceMappingURL=off-canvas-mobile-menu.mjs.map

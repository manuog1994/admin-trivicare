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

var myAccountContainer$1 = {};

var ids = myAccountContainer$1.ids = [31];
var modules = myAccountContainer$1.modules = {
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
  125: function(module, __webpack_exports__, __webpack_require__) {
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
    }, components: { NewProfile: () => __webpack_require__.e(18).then(__webpack_require__.bind(null, 191)) }, mounted() {
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
      "084da3b3"
    );
    __webpack_exports__["default"] = component.exports;
  },
  92: function(module, exports2) {
    module.exports = {};
  }
};

const myAccountContainer = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': myAccountContainer$1
}, [myAccountContainer$1]);

export { myAccountContainer as m };
//# sourceMappingURL=my-account-container.mjs.map

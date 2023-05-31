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

var register$1 = {};

var ids = register$1.ids = [47];
var modules = register$1.modules = {
  113: function(module, exports2) {
    module.exports = {};
  },
  139: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_e821239a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_e821239a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_id_e821239a_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  167: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "register-form" }, [_vm._ssrNode("<div>", "</div>", [_c("client-only", _vm._l(_vm.errors, function(error) {
        return _c("div", { key: error.id, staticClass: "alert alert-danger", attrs: { "role": "alert" } }, [_vm._v("\n                " + _vm._s(error) + "\n            ")]);
      }), 0)], 1), _vm._ssrNode(' <form><input name="name" placeholder="Nombre" type="text" required="required"> <input name="email" placeholder="Email" type="email" required="required"> <div class="d-flex"><input id="passOne" type="password" name="password" placeholder="Contrase\xF1a" required="required"> <span class="form-pass"><i class="fa fa-eye"></i></span></div> <div class="d-flex"><input id="passTwo" type="password" name="password_confirmation" placeholder="Confirma tu contrase\xF1a" required="required"> <span class="form-pass"><i class="fa fa-eye"></i></span></div> <div class="d-flex flex-column"><div class="mb-2 d-flex align-items-center"><input type="checkbox" name="newsletter" id="newsletter" value="1"' + _vm._ssrAttr("checked", Array.isArray(_vm.newsletter) ? _vm._i(_vm.newsletter, "1") > -1 : _vm.newsletter) + '> <label for="newsletter" class="ms-2">Quiero recibir novedades, ofertas y descuentos.</label></div> <div class="mb-2 d-flex align-items-center"><input type="checkbox" name="terms" id="terms" value="true"' + _vm._ssrAttr("checked", Array.isArray(_vm.checked) ? _vm._i(_vm.checked, "true") > -1 : _vm.checked) + '> <label for="terms" class="ms-2">Acepto los <a href="https://trivicare.com/">t\xE9rminos y condiciones</a></label></div></div> <div class="button-box mt-4"><button type="submit" title="Registrarse"' + _vm._ssrClass("btn rounded-0", { "disabled": _vm.checked ? false : true }) + ">Registrar</button></div></form>")], 2);
    };
    var staticRenderFns = [];
    var Registervue_type_script_lang_js_ = { data() {
      return { errors: [], checked: false, newsletter: false };
    }, async mounted() {
      await this.$axios.get("/sanctum/csrf-cookie");
    }, methods: { register() {
      const formData = new FormData(this.$refs.registerform);
      formData.append("newsletter", this.newsletter);
      this.$axios.post("/register", formData).then((res) => {
        this.$auth.loginWith("laravelSanctum", { data: formData });
        this.errors = [];
        this.$router.push({ path: "/" });
        this.$notify({ title: "Te has registrado correctamente, Bienvenid@!" });
      }).catch((error) => {
        this.errors = Object.values(error.response.data.errors).flat();
        this.$axios.post("/api/error-message", { message: error.response.data.message });
      });
    }, viewPass(id) {
      const pass = document.getElementById(id);
      if (pass.type === "password") {
        pass.type = "text";
      } else {
        pass.type = "password";
      }
    } } };
    var components_Registervue_type_script_lang_js_ = Registervue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
      var style0 = __webpack_require__(139);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(
      components_Registervue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "741c2b36"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const register = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': register$1
}, [register$1]);

export { register as r };
//# sourceMappingURL=register.mjs.map

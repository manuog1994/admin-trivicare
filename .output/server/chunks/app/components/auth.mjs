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

var auth$1 = {};

var ids = auth$1.ids = [23, 29];
var modules = auth$1.modules = {
  124: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", { staticClass: "container-fluid d-flex justify-content-center align-items-center vh-100 bg-trivi-purple" }, [_vm._ssrNode('<div class="card shadow p-4 p-md-5">', "</div>", [_vm._ssrNode('<div class="card-body">', "</div>", [_vm._ssrNode('<div class="text-center mb-30">', "</div>", [_c("nuxt-link", { attrs: { "to": "/" } }, [_c("img", { attrs: { "src": "/svg/logo-horizontal.svg", "alt": "logo-trivicare", "width": "300" } })])], 1), _vm._ssrNode(" "), _c("Login")], 2)])]);
    };
    var staticRenderFns = [];
    var Login = __webpack_require__(87);
    var Authvue_type_script_lang_js_ = { components: { Login: Login["default"] }, data() {
      return { isActive: "Login" };
    }, methods: { comA(item) {
      this.isActive = item;
    } } };
    var components_Authvue_type_script_lang_js_ = Authvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      components_Authvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "318361fb"
    );
    __webpack_exports__["default"] = component.exports;
    installComponents(component, { Login: __webpack_require__(87).default });
  },
  87: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm = this, _c = _vm._self._c;
      return _c("div", {}, [_vm._ssrNode("<div>", "</div>", [_c("client-only", _vm._l(_vm.errors, function(error) {
        return _c("div", { key: error.id, staticClass: "alert alert-danger", attrs: { "role": "alert" } }, [_vm._v("\n                " + _vm._s(error) + "\n            ")]);
      }), 0)], 1), _vm._ssrNode(' <form><div class="mb-2 shadow"><input type="email" name="email" placeholder="Email" required="required" class="form-control"></div> <div class="mb-2 shadow"><input id="passOne" type="password" name="password" placeholder="Contrase\xF1a" required="required" class="form-control"></div> <div class="mt-4"><div class="d-flex justify-content-center"><button title="Iniciar sesi\xF3n" class="btn bg-trivi-blue text-white shadow">Iniciar sesi\xF3n</button></div></div></form>')], 2);
    };
    var staticRenderFns = [];
    var Loginvue_type_script_lang_js_ = { auth: false, data() {
      return { disabled: false, errors: [] };
    }, computed: {}, mounted() {
      this.$axios.get("/sanctum/csrf-cookie");
    }, methods: { async login() {
      try {
        const formData = new FormData(this.$refs.loginform);
        await this.$auth.loginWith("laravelJWT", { data: formData }).then((res) => {
          this.$router.push({ path: "/" });
        });
      } catch (error) {
        this.errors = ["El correo electr\xF3nico o la contrase\xF1a son incorrectos."];
        console.log(error);
      }
    }, viewPass(id) {
      var x = document.getElementById(id);
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    } } };
    var components_Loginvue_type_script_lang_js_ = Loginvue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    var component = Object(componentNormalizer["a"])(
      components_Loginvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      null,
      "43fb9726"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const auth = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': auth$1
}, [auth$1]);

export { auth as a };
//# sourceMappingURL=auth.mjs.map

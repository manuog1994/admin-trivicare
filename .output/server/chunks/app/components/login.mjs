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

var login$1 = {};

var ids = login$1.ids = [30];
var modules = login$1.modules = {
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
      this.$root.$emit("loading", false);
    }, methods: { async login() {
      this.$root.$emit("loading", true);
      try {
        const formData = new FormData(this.$refs.loginform);
        await this.$auth.loginWith("laravelJWT", { data: formData }).then((res) => {
          this.$router.push({ path: "/" });
          this.$root.$emit("loading", false);
        });
      } catch (error) {
        this.errors = ["El correo electr\xF3nico o la contrase\xF1a son incorrectos."];
        console.log(error);
        this.$root.$emit("loading", false);
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
      "7f98c834"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const login = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': login$1
}, [login$1]);

export { login as l };
//# sourceMappingURL=login.mjs.map

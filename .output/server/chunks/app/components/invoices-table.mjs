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

var invoicesTable$1 = {};

var ids = invoicesTable$1.ids = [27];
var modules = invoicesTable$1.modules = {
  123: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function render2() {
      var _vm$selectedInvoices, _vm$selectedInvoices2, _vm$selectedInvoices3, _vm$invoices;
      var _vm = this, _c = _vm._self._c;
      return _c("div", [!_vm.newInvoice ? _vm._ssrNode('<div class="main">', "</div>", [_vm._ssrNode("<div>" + (((_vm$selectedInvoices = _vm.selectedInvoices) === null || _vm$selectedInvoices === void 0 ? void 0 : _vm$selectedInvoices.length) == 0 ? '<div class="d-flex justify-content-end"><button class="btn bg-trivi-red text-white mb-2"><i class="fa fa-plus"></i></button></div>' : "<!---->") + " " + (((_vm$selectedInvoices2 = _vm.selectedInvoices) === null || _vm$selectedInvoices2 === void 0 ? void 0 : _vm$selectedInvoices2.length) > 0 ? '<div class="d-flex justify-content-end"><button class="btn bg-trivi-green text-white mb-2"><i class="fa fa-download"></i>' + _vm._ssrEscape("\n                    Descargar " + _vm._s((_vm$selectedInvoices3 = _vm.selectedInvoices) === null || _vm$selectedInvoices3 === void 0 ? void 0 : _vm$selectedInvoices3.length) + " facturas\n                ") + "</button></div>" : "<!---->") + " <div><h2>Facturas</h2></div></div> "), _vm._ssrNode('<div class="d-flex justify-content-between">', "</div>", [_vm._ssrNode('<div class="form-group">', "</div>", [_vm._ssrNode('<label for="limit">Mostrar</label> '), _c("select", { directives: [{ name: "model", rawName: "v-model", value: _vm.limit, expression: "limit" }], staticClass: "form-control", attrs: { "id": "limit" }, on: { "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected;
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.limit = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      } } }, [_c("option", { attrs: { "value": "10" } }, [_vm._v("10")]), _vm._v(" "), _c("option", { attrs: { "value": "20" } }, [_vm._v("20")]), _vm._v(" "), _c("option", { attrs: { "value": "50" } }, [_vm._v("50")]), _vm._v(" "), _c("option", { attrs: { "value": "1000" } }, [_vm._v("Todo")])])], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="d-flex">', "</div>", [_vm._ssrNode('<div class="form-group me-2">', "</div>", [_vm._ssrNode('<label for="day">D\xEDa</label> '), _c("select", { directives: [{ name: "model", rawName: "v-model", value: _vm.day, expression: "day" }], staticClass: "form-control", attrs: { "id": "day" }, on: { "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected;
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.day = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      } } }, [_c("option", { attrs: { "value": "0" } }, [_vm._v("Todos")]), _vm._v(" "), _vm._l(31, function(day) {
        return _c("option", { key: day, domProps: { "value": day } }, [_vm._v(_vm._s(day))]);
      })], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="form-group me-2">', "</div>", [_vm._ssrNode('<label for="month">Mes</label> '), _c("select", { directives: [{ name: "model", rawName: "v-model", value: _vm.month, expression: "month" }], staticClass: "form-control", attrs: { "id": "month" }, on: { "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected;
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.month = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      } } }, [_c("option", { attrs: { "value": "0" } }, [_vm._v("Todos")]), _vm._v(" "), _c("option", { attrs: { "value": "1" } }, [_vm._v("Enero")]), _vm._v(" "), _c("option", { attrs: { "value": "2" } }, [_vm._v("Febrero")]), _vm._v(" "), _c("option", { attrs: { "value": "3" } }, [_vm._v("Marzo")]), _vm._v(" "), _c("option", { attrs: { "value": "4" } }, [_vm._v("Abril")]), _vm._v(" "), _c("option", { attrs: { "value": "5" } }, [_vm._v("Mayo")]), _vm._v(" "), _c("option", { attrs: { "value": "6" } }, [_vm._v("Junio")]), _vm._v(" "), _c("option", { attrs: { "value": "7" } }, [_vm._v("Julio")]), _vm._v(" "), _c("option", { attrs: { "value": "8" } }, [_vm._v("Agosto")]), _vm._v(" "), _c("option", { attrs: { "value": "9" } }, [_vm._v("Septiembre")]), _vm._v(" "), _c("option", { attrs: { "value": "10" } }, [_vm._v("Octubre")]), _vm._v(" "), _c("option", { attrs: { "value": "11" } }, [_vm._v("Noviembre")]), _vm._v(" "), _c("option", { attrs: { "value": "12" } }, [_vm._v("Diciembre")])])], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="form-group">', "</div>", [_vm._ssrNode('<label for="year">A\xF1o</label> '), _c("select", { directives: [{ name: "model", rawName: "v-model", value: _vm.year, expression: "year" }], staticClass: "form-control", attrs: { "id": "year" }, on: { "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected;
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.year = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      } } }, [_c("option", { attrs: { "value": "0" } }, [_vm._v("Todos")]), _vm._v(" "), _vm._l(_vm.years, function(year) {
        return _c("option", { key: year, domProps: { "value": year } }, [_vm._v(_vm._s(year))]);
      })], 2)], 2)], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode('<div class="table-responsive">', "</div>", [_vm._ssrNode('<table class="table"><thead><tr><th><div class="form-check"><input type="checkbox" class="form-check-input"></div></th> <th scope>Factura</th> <th scope>Cliente</th> <th scope>Fecha</th> <th scope>Acciones</th></tr></thead> ' + (((_vm$invoices = _vm.invoices) === null || _vm$invoices === void 0 ? void 0 : _vm$invoices.length) > 0 ? "<tbody>" + _vm._ssrList(_vm.paginatedItems, function(invoice) {
        var _invoice$order, _invoice$order$user_p, _invoice$order2, _invoice$order2$guest, _invoice$order3, _invoice$order3$user_, _invoice$order4, _invoice$order4$user_, _invoice$order5, _invoice$order5$guest, _invoice$order6, _invoice$order6$user_;
        return '<tr><td><div class="form-check"><input type="checkbox"' + _vm._ssrAttr("value", invoice.id) + _vm._ssrAttr("checked", Array.isArray(_vm.selectedInvoices) ? _vm._i(_vm.selectedInvoices, invoice.id) > -1 : _vm.selectedInvoices) + ' class="form-check-input"></div></td> <td>' + _vm._ssrEscape(_vm._s(invoice.invoice_number)) + "</td> <td>" + _vm._ssrEscape(_vm._s(((_invoice$order = invoice.order) === null || _invoice$order === void 0 ? void 0 : (_invoice$order$user_p = _invoice$order.user_profile) === null || _invoice$order$user_p === void 0 ? void 0 : _invoice$order$user_p.name) == "Guest" ? (_invoice$order2 = invoice.order) === null || _invoice$order2 === void 0 ? void 0 : (_invoice$order2$guest = _invoice$order2.guest) === null || _invoice$order2$guest === void 0 ? void 0 : _invoice$order2$guest.name : (_invoice$order3 = invoice.order) === null || _invoice$order3 === void 0 ? void 0 : (_invoice$order3$user_ = _invoice$order3.user_profile) === null || _invoice$order3$user_ === void 0 ? void 0 : _invoice$order3$user_.name) + " " + _vm._s(((_invoice$order4 = invoice.order) === null || _invoice$order4 === void 0 ? void 0 : (_invoice$order4$user_ = _invoice$order4.user_profile) === null || _invoice$order4$user_ === void 0 ? void 0 : _invoice$order4$user_.lastname) == "Guest" ? (_invoice$order5 = invoice.order) === null || _invoice$order5 === void 0 ? void 0 : (_invoice$order5$guest = _invoice$order5.guest) === null || _invoice$order5$guest === void 0 ? void 0 : _invoice$order5$guest.lastname : (_invoice$order6 = invoice.order) === null || _invoice$order6 === void 0 ? void 0 : (_invoice$order6$user_ = _invoice$order6.user_profile) === null || _invoice$order6$user_ === void 0 ? void 0 : _invoice$order6$user_.lastname)) + "</td> <td>" + _vm._ssrEscape(_vm._s(_vm.formatDate(invoice.created_at))) + '</td> <td><a class="btn bg-trivi-orange"><i class="pe-7s-download"></i></a></td></tr>';
      }) + "</tbody>" : '<tbody><tr><td colspan="6">No hay pedidos pendientes.</td></tr></tbody>') + "</table> "), _vm._ssrNode('<div class="d-flex justify-content-center mt-2">', "</div>", [_c("pagination", { attrs: { "records": _vm.invoices.length, "perPage": parseInt(_vm.limit) }, on: { "paginate": _vm.myCallback }, model: { value: _vm.page, callback: function($$v) {
        _vm.page = $$v;
      }, expression: "page" } })], 1)], 2)], 2) : _vm._e(), _vm._ssrNode(" "), _vm.pdfViewer ? _c("InvoiceViewer", { attrs: { "id": _vm.id } }) : _vm._e(), _vm._ssrNode(" "), _vm.newInvoice ? _c("NewInvoice") : _vm._e()], 2);
    };
    var staticRenderFns = [];
    var InvoicesTablevue_type_script_lang_js_ = { auth: true, data() {
      return { invoices: [], selectedInvoices: [], month: 0, limit: 10, day: 0, year: 0, years: [], page: 1, perPage: 10, pdfViewer: false, id: "", newInvoice: false };
    }, beforeMount() {
      this.$root.$on("closeNewInvoice", (data) => {
        this.newInvoice = data;
      });
    }, mounted() {
      this.getInvoices();
    }, components: { InvoiceViewer: () => __webpack_require__.e(11).then(__webpack_require__.bind(null, 177)), NewInvoice: () => __webpack_require__.e(12).then(__webpack_require__.bind(null, 178)) }, computed: { paginatedItems() {
      const start = (this.page - 1) * parseInt(this.limit);
      return this.invoices.slice(start, start + parseInt(this.limit));
    } }, watch: { day() {
      setTimeout(() => {
        this.getInvoices();
      }, 500);
    }, month() {
      setTimeout(() => {
        this.getInvoices();
      }, 500);
    }, year() {
      setTimeout(() => {
        this.getInvoices();
      }, 500);
    }, limit() {
      setTimeout(() => {
        this.getInvoices();
      }, 500);
    }, id() {
      this.pdfViewer = true;
    } }, methods: {
      async getInvoices() {
        const response = await this.$axios.get("/api/invoice");
        this.invoices = response.data.data;
        if (this.day != 0) {
          this.invoices = this.invoices.filter((invoice) => {
            let date = new Date(invoice.created_at);
            return date.getDate() == this.day;
          });
        }
        if (this.month != 0) {
          this.invoices = this.invoices.filter((invoice) => {
            let date = new Date(invoice.created_at);
            return date.getMonth() + 1 == this.month;
          });
        }
        if (this.year != 0) {
          this.invoices = this.invoices.filter((invoice) => {
            let date = new Date(invoice.created_at);
            return date.getFullYear() == this.year;
          });
        }
        this.getYears();
      },
      async getUrl(invoice) {
        let FileDownload = __webpack_require__(70);
        await this.$axios.get("/api/invoices/" + invoice.id, { responseType: "blob" }).then((response) => {
          FileDownload(response.data, invoice.filename);
        });
      },
      formatDate(date) {
        let d = new Date(date);
        let month = "" + (d.getMonth() + 1);
        let day = "" + d.getDate();
        let year = d.getFullYear();
        if (month.length < 2)
          month = "0" + month;
        if (day.length < 2)
          day = "0" + day;
        return [day, month, year].join("-");
      },
      async downloadZip() {
        let FileDownload = __webpack_require__(70);
        await this.$axios.get("/api/multiples-invoices", { responseType: "blob", params: { selecteds: JSON.stringify(this.selectedInvoices) } }).then((response) => {
          FileDownload(response.data, "facturas.zip");
        }).catch((error) => {
        });
      },
      selectAll() {
        if (this.$refs.checkSelect.checked) {
          this.invoices.forEach((invoice) => {
            this.selectedInvoices.push(invoice.id);
          });
        } else {
          this.selectedInvoices = [];
        }
      },
      getYears() {
        this.invoices.forEach((invoice) => {
          let date = new Date(invoice.created_at);
          if (!this.years.includes(date.getFullYear())) {
            this.years.push(date.getFullYear());
          }
        });
      },
      myCallback(page) {
        this.page = page;
      },
      async changeView(id) {
        console.log(id);
        this.id = id;
      }
    } };
    var invoices_InvoicesTablevue_type_script_lang_js_ = InvoicesTablevue_type_script_lang_js_;
    var componentNormalizer = __webpack_require__(2);
    function injectStyles(context) {
    }
    var component = Object(componentNormalizer["a"])(
      invoices_InvoicesTablevue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      "563ee0f2"
    );
    __webpack_exports__["default"] = component.exports;
  }
};

const invoicesTable = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  ids: ids,
  modules: modules,
  'default': invoicesTable$1
}, [invoicesTable$1]);

export { invoicesTable as i };
//# sourceMappingURL=invoices-table.mjs.map

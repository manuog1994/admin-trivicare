(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{537:function(t,n,e){"use strict";var o=e(8),r=e(538),c=e(45),v=e(46),l=e(69),_=e(200);o({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=c(this),e=v(n),o=_(n,0);return o.length=r(o,n,n,e,0,void 0===t?1:l(t)),o}})},538:function(t,n,e){"use strict";var o=e(134),r=e(46),c=e(246),v=e(43),l=function(t,n,source,e,_,f,d,m){for(var element,h,C=_,w=0,y=!!d&&v(d,m);w<e;)w in source&&(element=y?y(source[w],w,n):source[w],f>0&&o(element)?(h=r(element),C=l(t,n,element,h,C,f-1)-1):(c(C+1),t[C]=element),C++),w++;return C};t.exports=l},539:function(t,n,e){e(114)("flat")},614:function(t,n,e){"use strict";e.r(n);var o=e(13),r=(e(55),e(537),e(539),e(355),{auth:!0,data:function(){return{coupons:[]}},mounted:function(){this.getCupons()},methods:{getCupons:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("/api/cupons").then((function(n){t.coupons=Object.values(n.data.data).flat()})).catch((function(t){console.log(t)}));case 2:case"end":return n.stop()}}),n)})))()},newCoupon:function(){var t=this,data=new FormData(this.$refs.createCoupon);this.$axios.post("/api/cupons",data).then((function(){t.getCupons(),t.$notify({title:"Cupón creado"}),t.$refs.createCoupon.reset()})).catch((function(t){console.log(t)}))},destroy:function(t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$axios.delete("/api/cupons/".concat(t)).then((function(){n.getCupons(),n.$notify({title:"Cupón eliminado"})})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=e(68),component=Object(c.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"container"},[n("div",{staticClass:"row mt-2 mb-2"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"card m-auto"},[t._m(0),t._v(" "),n("div",{staticClass:"w-75 m-auto mb-4"},[n("form",{ref:"createCoupon",on:{submit:function(n){return n.preventDefault(),t.newCoupon.apply(null,arguments)}}},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])])])])]),t._v(" "),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-12 overflow-auto"},[n("table",{staticClass:"table"},[t._m(6),t._v(" "),n("tbody",t._l(t.coupons,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.code))]),t._v(" "),n("td",[t._v(t._s(e.discount))]),t._v(" "),n("td",[t._v(t._s(e.validity))]),t._v(" "),1==e.status?n("td",[t._v("Inactivo")]):n("td",[t._v("Activo")]),t._v(" "),n("td",[n("form",{on:{submit:function(n){return n.preventDefault(),t.destroy(e.id)}}},[n("button",{staticClass:"btn btn-danger",attrs:{type:"submit",title:"Eliminar"}},[t._v("\n                                     Eliminar\n                                 ")])])])])})),0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-title p-3"},[t("h2",[this._v("Crear cupón")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"mb-2"},[n("label",{attrs:{for:"code"}},[t._v("Código")]),t._v(" "),n("input",{staticClass:"form-control",attrs:{type:"text",name:"code"}})])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"mb-2"},[n("label",{attrs:{for:"discount"}},[t._v("Descuento")]),t._v(" "),n("input",{staticClass:"form-control",attrs:{type:"number",name:"discount"}})])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"mb-2"},[n("label",{attrs:{for:"validity"}},[t._v("Validez")]),t._v(" "),n("input",{staticClass:"form-control",attrs:{type:"date",name:"validity"}})])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"mb-4"},[n("label",{attrs:{for:"status"}},[t._v("Estado")]),t._v(" "),n("select",{staticClass:"form-select",attrs:{name:"status"}},[n("option",{attrs:{value:"1"}},[t._v("Inactivo")]),t._v(" "),n("option",{attrs:{value:"2"}},[t._v("Activo")])])])},function(){var t=this._self._c;return t("div",{staticClass:"mb-2"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit",title:"Crear"}},[this._v("Crear")])])},function(){var t=this,n=t._self._c;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),n("th",[t._v("Código")]),t._v(" "),n("th",[t._v("Descuento(%)")]),t._v(" "),n("th",[t._v("Validez")]),t._v(" "),n("th",[t._v("Estado")]),t._v(" "),n("th",[t._v("Acciones")])])])}],!1,null,null,null);n.default=component.exports}}]);
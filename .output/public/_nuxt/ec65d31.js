(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{535:function(t,n,e){"use strict";var o=e(8),r=e(536),c=e(45),l=e(46),v=e(69),d=e(201);o({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=c(this),e=l(n),o=d(n,0);return o.length=r(o,n,n,e,0,void 0===t?1:v(t)),o}})},536:function(t,n,e){"use strict";var o=e(134),r=e(46),c=e(246),l=e(43),v=function(t,n,source,e,d,f,_,h){for(var element,m,C=d,w=0,x=!!_&&l(_,h);w<e;)w in source&&(element=x?x(source[w],w,n):source[w],f>0&&o(element)?(m=r(element),C=v(t,n,element,m,C,f-1)-1):(c(C+1),t[C]=element),C++),w++;return C};t.exports=v},537:function(t,n,e){e(114)("flat")},545:function(t,n,e){t.exports={}},556:function(t,n,e){"use strict";e(545)},582:function(t,n,e){"use strict";e.r(n);var o=e(11),r=(e(51),e(0),e(19),e(20),e(15),e(535),e(537),e(356),{auth:!0,components:{CreateCoupons:function(){return e.e(9).then(e.bind(null,632))}},data:function(){return{coupons:[],page:1,perPage:10,newCoupon:!1}},beforeMount:function(){var t=this;this.$root.$on("closeNewCoupon",(function(data){t.newCoupon=data}))},mounted:function(){this.getCoupons()},computed:{paginatedItems:function(){var t=(this.page-1)*this.perPage;return this.coupons.slice(t,t+this.perPage)}},methods:{getCoupons:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("/api/cupons").then((function(n){t.coupons=Object.values(n.data.data).flat(),t.$root.$emit("loading",!1)})).catch((function(n){t.$root.$emit("loading",!1)}));case 2:case"end":return n.stop()}}),n)})))()},destroy:function(t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.$axios.delete("/api/cupons/".concat(t)).then((function(){n.getCoupons(),n.$notify({title:"Cupón eliminado"})})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},myCallback:function(t){this.page=t}}}),c=(e(556),e(68)),component=Object(c.a)(r,(function(){var t,n=this,e=n._self._c;return e("div",[0==n.newCoupon?e("div",{staticClass:"main"},[e("div",[e("div",{staticClass:"d-flex justify-content-end"},[e("button",{staticClass:"btn bg-trivi-green text-white mb-2",on:{click:function(t){n.newCoupon=!0}}},[e("i",{staticClass:"fa fa-plus"})])]),n._v(" "),n._m(0)]),n._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table"},[n._m(1),n._v(" "),(null===(t=n.coupons)||void 0===t?void 0:t.length)>0?e("tbody",n._l(n.paginatedItems,(function(t){return e("tr",{key:t.id},[e("td",[n._v(n._s(t.code))]),n._v(" "),e("td",[n._v(n._s(t.discount))]),n._v(" "),e("td",[n._v(n._s(t.validity))]),n._v(" "),1==t.status?e("td",[n._v("Inactivo")]):e("td",[n._v("Activo")]),n._v(" "),e("td",[e("form",{on:{submit:function(e){return e.preventDefault(),n.destroy(t.id)}}},[e("button",{staticClass:"btn btn-danger",attrs:{type:"submit",title:"Eliminar"}},[n._v("\n                                    Eliminar\n                                ")])])])])})),0):e("tbody",[n._m(2)])]),n._v(" "),e("div",{staticClass:"d-flex justify-content-center mt-2"},[e("pagination",{attrs:{records:n.coupons.length,perPage:n.perPage},on:{paginate:n.myCallback},model:{value:n.page,callback:function(t){n.page=t},expression:"page"}})],1)])]):n._e(),n._v(" "),1==n.newCoupon?e("CreateCoupons"):n._e()],1)}),[function(){var t=this._self._c;return t("div",[t("h2",[this._v("Cupones")])])},function(){var t=this,n=t._self._c;return n("thead",[n("tr",[n("th",{attrs:{scope:""}},[t._v("Código")]),t._v(" "),n("th",{attrs:{scope:""}},[t._v("Descuento")]),t._v(" "),n("th",{attrs:{scope:""}},[t._v("Fecha de expiración")]),t._v(" "),n("th",{attrs:{scope:""}},[t._v("Estado")]),t._v(" "),n("th",[t._v("Acción")])])])},function(){var t=this._self._c;return t("tr",[t("td",{attrs:{colspan:"6"}},[this._v("No hay cupones.")])])}],!1,null,null,null);n.default=component.exports}}]);
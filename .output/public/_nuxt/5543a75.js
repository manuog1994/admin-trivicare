(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{555:function(e,t,r){e.exports={}},564:function(e,t,r){"use strict";r(555)},585:function(e,t,r){"use strict";r.r(t);r(4),r(23);var n=r(13),c=(r(55),r(15),{props:["product","reviews"],data:function(){return{message:"",rating:0,user_name:"",user_lastname:"",page:1,perPage:10}},computed:{paginatedReviews:function(){return this.reviews.slice((this.page-1)*this.perPage,this.page*this.perPage)}},methods:{deleteReview:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$axios.delete("/api/reviews/"+e);case 3:r.sent,t.$notify({text:"Valoración eliminada correctamente",type:"success"}),r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))()},myCallBack:function(e){this.page=e}}}),o=(r(564),r(68)),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return e.product?t("div",{staticClass:"description-review-area pb-90"},[t("div",{staticClass:"container"},[t("div",{staticClass:"description-review-wrapper"},[t("div",{staticClass:"description-review-topbar nav"},[t("a",{attrs:{"data-bs-toggle":"tab",href:"#des-details1"}},[e._v("Información adicional")]),e._v(" "),t("a",{staticClass:"active",attrs:{"data-bs-toggle":"tab",href:"#des-details2"}},[e._v("Descripción")]),e._v(" "),t("a",{attrs:{"data-bs-toggle":"tab",href:"#des-details3"}},[e._v("Valoraciones ( "+e._s(e.product.reviews.length)+" )")])]),e._v(" "),t("div",{staticClass:"tab-content description-review-bottom"},[t("div",{staticClass:"tab-pane active",attrs:{id:"des-details2"}},[t("div",{staticClass:"product-description-wrapper m-auto"},[t("div",{domProps:{innerHTML:e._s(e.product.description)}})])]),e._v(" "),t("div",{staticClass:"tab-pane",attrs:{id:"des-details1"}},[t("div",{staticClass:"product-anotherinfo-wrapper"},[t("ul",[t("li",[t("span",[e._v("Peso")]),e._v(e._s(e.product.weight)+" g")]),e._v(" "),t("li",[t("span",[e._v("Dimensiones")]),e._v(e._s(e.product.dimensions)+" mm ")]),e._v(" "),t("li",[t("span",[e._v("Tamaño")]),e._v(e._s(e.product.size)+" ml")])])])]),e._v(" "),t("div",{ref:"review-div",staticClass:"tab-pane",attrs:{id:"des-details3"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[e._l(e.paginatedReviews,(function(r){return t("div",{key:r.id,staticClass:"review-wrapper"},[t("div",{staticClass:"single-review p-5"},[t("div",{staticClass:"d-flex justify-content-start"},[t("div",{staticClass:"review-content"},[t("div",{staticClass:"review-top-wrap"},[t("div",{staticClass:"review-left"},[t("div",{staticClass:"review-name"},[t("h4",[e._v(e._s(r.user_name)+" "+e._s(r.user_lastname))])]),e._v(" "),t("div",{staticClass:"review-rating"},[t("client-only",[t("vue-star-rating",{attrs:{"star-size":20,"read-only":!0,"show-rating":!1,rating:r.rating}})],1)],1)])]),e._v(" "),t("div",{staticClass:"review-bottom"},[t("p",[e._v(e._s(r.message))])]),e._v(" "),e.$auth.user&&e.$auth.user.id==r.user_id?t("form",{on:{submit:function(t){return e.deleteReview(r.id)}}},[e._m(0,!0)]):e._e()])])])])})),e._v(" "),e.reviews.length>10?t("div",{staticClass:"d-flex justify-content-center"},[t("pagination",{attrs:{records:e.reviews.length,perPage:e.perPage},on:{paginate:e.myCallBack},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1):e._e()],2)])])])])])]):e._e()}),[function(){var e=this._self._c;return e("div",{staticClass:"review-delete"},[e("button",{staticClass:"btn"},[this._v("Eliminar")])])}],!1,null,null,null);t.default=component.exports}}]);
webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/orders/Orders.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/orders/Orders.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ \"./node_modules/core-js/modules/es.array.slice.js\");\n/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({auth:true,data:function data(){return{orders:[],order:{},pagination:{},page:1,perPage:10};},mounted:function mounted(){this.getOrders();},computed:{paginatedItems:function paginatedItems(){return this.orders.slice((this.page-1)*this.perPage,this.page*this.perPage);}},methods:{getOrders:function getOrders(){var _this=this;return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var response;return regeneratorRuntime.wrap(function _callee$(_context){while(1)switch(_context.prev=_context.next){case 0:_context.next=2;return _this.$axios.get('/api/orders?perPage=10&sort=-id&page='+_this.page+'&status[status]=');case 2:response=_context.sent;_this.orders=response.data.data;case 4:case\"end\":return _context.stop();}},_callee);}))();},myCallback:function myCallback(page){this.page=page;}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvb3JkZXJzL09yZGVycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvb3JkZXJzL09yZGVycy52dWU/OGYxNSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiJHJvdXRlci5wdXNoKHtwYXRoOiAnL29yZGVycy1oaXN0b3J5J30pXCIgY2xhc3M9XCJidG4gYmctdHJpdmktcmVkIHRleHQtd2hpdGUgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1oaXN0b3J5XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgSGlzdG9yaWFsIGRlIHBlZGlkb3NcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlBlZGlkb3MgUmVjaWVudGVzPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJcIj5DbGllbnRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cIlwiPkZlY2hhPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cIlwiPkVzdGFkbzwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJcIj5BY2Npb25lczwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgdi1pZj1cIm9yZGVycy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJvcmRlciBpbiBwYWdpbmF0ZWRJdGVtc1wiIDprZXk9XCJvcmRlci5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwib3JkZXIuZ3Vlc3QgPT0gbnVsbFwiPnt7IG9yZGVyLnVzZXJfcHJvZmlsZT8ubmFtZSB9fSB7eyBvcmRlci51c2VyX3Byb2ZpbGU/Lmxhc3RuYW1lIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgdi1lbHNlPnt7IG9yZGVyLmd1ZXN0Py5uYW1lIH19IHt7IG9yZGVyLmd1ZXN0Py5sYXN0bmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IG9yZGVyLm9yZGVyX2RhdGUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwib3JkZXIucGFpZCA9PSAnUEVORElFTlRFJ1wiPlBlbmRpZW50ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJvcmRlci5wYWlkID09ICdQUk9DRVNBTkRPJ1wiPlByb2Nlc2FuZG88L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2LWlmPVwib3JkZXIucGFpZCA9PSAnUEFHQURPJ1wiPlBhZ2FkbzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHYtaWY9XCJvcmRlci5wYWlkID09ICdSRUNIQVpBRE8nXCI+UmVjaGF6YWRvPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuLWxpbmsgOnRvPVwiYC9vcmRlcnMtdmlldy8ke29yZGVyLmlkfWBcIiBjbGFzcz1cImJ0biBiZy10cml2aS1ibHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cInBlLTdzLWxvb2tcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbi1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dGJvZHkgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNlwiPk5vIGhheSBwZWRpZG9zIHBlbmRpZW50ZXMuPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8IS0tIHBhZ2luYWNpw7NuIC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYWdpbmF0aW9uIHYtbW9kZWw9XCJwYWdlXCIgOnJlY29yZHM9XCJvcmRlcnMubGVuZ3RoXCIgOnBlclBhZ2U9XCJwYXJzZUludChwZXJQYWdlKVwiIEBwYWdpbmF0ZT1cIm15Q2FsbGJhY2tcIj48L3BhZ2luYXRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhdXRoOiB0cnVlLFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9yZGVyczogW10sXG4gICAgICAgICAgICBvcmRlcjoge30sXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7fSxcbiAgICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgICBwZXJQYWdlOiAxMCxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmdldE9yZGVycygpO1xuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBwYWdpbmF0ZWRJdGVtcyAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcmRlcnMuc2xpY2UoKHRoaXMucGFnZSAtIDEpICogdGhpcy5wZXJQYWdlLCB0aGlzLnBhZ2UgKiB0aGlzLnBlclBhZ2UpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYXN5bmMgZ2V0T3JkZXJzKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLiRheGlvcy5nZXQoJy9hcGkvb3JkZXJzP3BlclBhZ2U9MTAmc29ydD0taWQmcGFnZT0nICsgdGhpcy5wYWdlICsgJyZzdGF0dXNbc3RhdHVzXT0nICk7XG4gICAgICAgICAgICB0aGlzLm9yZGVycyA9IHJlc3BvbnNlLmRhdGEuZGF0YTtcbiAgICAgICAgfSxcblxuICAgICAgICBteUNhbGxiYWNrKHBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIH1cbiAgICB9LFxufVxuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiJBQXdEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/orders/Orders.vue?vue&type=script&lang=js&\n");

/***/ })

})
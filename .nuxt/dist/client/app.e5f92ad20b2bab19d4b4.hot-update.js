webpackHotUpdate("app",{

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/dashboard/GraphicMonths.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/dashboard/GraphicMonths.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({name:'Donut',components:Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, true&&'apexchart',function(){return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! vue-apexcharts */ \"./node_modules/vue-apexcharts/dist/vue-apexcharts.js\", 7));}),data:function data(){return{options:{chart:{id:'vuechart-example'},xaxis:{categories:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']}},series:[{name:'series-1',data:[]}],orders:[],jan:[],feb:[],mar:[],apr:[],may:[],jun:[],jul:[],aug:[],sep:[],oct:[],nov:[],dec:[]};},mounted:function mounted(){this.getOrders();},methods:{getOrders:function getOrders(){var _this=this;this.$axios.get('/api/orders').then(function(response){_this.orders=response.data.data;// si el año del created_at es igual al año actual\n_this.orders.filter(function(order){if(new Date(order.created_at).getFullYear()==new Date().getFullYear()){_this.jan=(new Date(order.created_at).getMonth()+1==1).length>0?0:new Date(order.created_at).getMonth()+1;_this.feb=(new Date(order.created_at).getMonth()+1==2).length>0?0:new Date(order.created_at).getMonth()+1;_this.mar=(new Date(order.created_at).getMonth()+1==3).length>0?0:new Date(order.created_at).getMonth()+1;}});console.log(_this.jan);_this.series=[{name:'series-1',data:[_this.jan,_this.feb,_this.mar,_this.apr,_this.may,_this.jun,_this.jul,_this.aug,_this.sep,_this.oct,_this.nov,_this.dec]}];});}}});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdW5wbHVnaW4vZGlzdC93ZWJwYWNrL2xvYWRlcnMvdHJhbnNmb3JtLmpzP3VucGx1Z2luTmFtZT1udXh0LWxlZ2FjeS12dWUtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL3VucGx1Z2luL2Rpc3Qvd2VicGFjay9sb2FkZXJzL3RyYW5zZm9ybS5qcz91bnBsdWdpbk5hbWU9bnV4dCUzQWltcG9ydHMtdHJhbnNmb3JtIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy91bnBsdWdpbi9kaXN0L3dlYnBhY2svbG9hZGVycy90cmFuc2Zvcm0uanM/dW5wbHVnaW5OYW1lPW51eHQtbGVnYWN5LWNhcGkta2V5LXRyYW5zZm9ybSEuL2NvbXBvbmVudHMvZGFzaGJvYXJkL0dyYXBoaWNNb250aHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0dyYXBoaWNNb250aHMudnVlP2Y0Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnRG9udXQnLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIFtwcm9jZXNzLmJyb3dzZXIgJiYgJ2FwZXhjaGFydCddOiAoKSA9PiBpbXBvcnQoJ3Z1ZS1hcGV4Y2hhcnRzJyksXG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIGlkOiAndnVlY2hhcnQtZXhhbXBsZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhheGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydFbmVybycsICdGZWJyZXJvJywgJ01hcnpvJywgJ0FicmlsJywgJ01heW8nLCAnSnVuaW8nLCAnSnVsaW8nLCAnQWdvc3RvJywgJ1NlcHRpZW1icmUnLCAnT2N0dWJyZScsICdOb3ZpZW1icmUnLCAnRGljaWVtYnJlJ11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdzZXJpZXMtMScsXG4gICAgICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgb3JkZXJzOiBbXSxcbiAgICAgICAgICAgIGphbjogW10sXG4gICAgICAgICAgICBmZWI6IFtdLFxuICAgICAgICAgICAgbWFyOiBbXSxcbiAgICAgICAgICAgIGFwcjogW10sXG4gICAgICAgICAgICBtYXk6IFtdLFxuICAgICAgICAgICAganVuOiBbXSxcbiAgICAgICAgICAgIGp1bDogW10sXG4gICAgICAgICAgICBhdWc6IFtdLFxuICAgICAgICAgICAgc2VwOiBbXSxcbiAgICAgICAgICAgIG9jdDogW10sXG4gICAgICAgICAgICBub3Y6IFtdLFxuICAgICAgICAgICAgZGVjOiBbXSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRPcmRlcnMoKVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldE9yZGVycygpIHtcbiAgICAgICAgICAgIHRoaXMuJGF4aW9zLmdldCgnL2FwaS9vcmRlcnMnKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgLy8gc2kgZWwgYcOxbyBkZWwgY3JlYXRlZF9hdCBlcyBpZ3VhbCBhbCBhw7FvIGFjdHVhbFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlcnMuZmlsdGVyKG9yZGVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYobmV3IERhdGUob3JkZXIuY3JlYXRlZF9hdCkuZ2V0RnVsbFllYXIoKSA9PSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuamFuID0gKG5ldyBEYXRlKG9yZGVyLmNyZWF0ZWRfYXQpLmdldE1vbnRoKCkgKyAxID09IDEpLmxlbmd0aCA+IDAgPyAwIDogbmV3IERhdGUob3JkZXIuY3JlYXRlZF9hdCkuZ2V0TW9udGgoKSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmViID0gKG5ldyBEYXRlKG9yZGVyLmNyZWF0ZWRfYXQpLmdldE1vbnRoKCkgKyAxID09IDIpLmxlbmd0aCA+IDAgPyAwIDogbmV3IERhdGUob3JkZXIuY3JlYXRlZF9hdCkuZ2V0TW9udGgoKSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFyID0gKG5ldyBEYXRlKG9yZGVyLmNyZWF0ZWRfYXQpLmdldE1vbnRoKCkgKyAxID09IDMpLmxlbmd0aCA+IDAgPyAwIDogbmV3IERhdGUob3JkZXIuY3JlYXRlZF9hdCkuZ2V0TW9udGgoKSArIDFcblxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuamFuKVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJpZXMgPSBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc2VyaWVzLTEnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbdGhpcy5qYW4sIHRoaXMuZmViLCB0aGlzLm1hciwgdGhpcy5hcHIsIHRoaXMubWF5LCB0aGlzLmp1biwgdGhpcy5qdWwsIHRoaXMuYXVnLCB0aGlzLnNlcCwgdGhpcy5vY3QsIHRoaXMubm92LCB0aGlzLmRlY11cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICAiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-vue-transform!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt%3Aimports-transform!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=nuxt-legacy-capi-key-transform!./components/dashboard/GraphicMonths.vue?vue&type=script&lang=js&\n");

/***/ })

})
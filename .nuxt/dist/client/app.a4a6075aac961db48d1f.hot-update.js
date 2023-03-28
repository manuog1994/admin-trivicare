webpackHotUpdate("app",{

/***/ "./middleware/admin.js":
/*!*****************************!*\
  !*** ./middleware/admin.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(_ref){var app=_ref.app,redirect=_ref.redirect,route=_ref.route;var cookies=app.$cookies.get('auth._token.laravelJWT');var refreshToken=app.$cookies.get('auth._refresh_token.laravelJWT');if(cookies==false){return redirect('/login');}if(cookies&&route.path==='/login'){return redirect('/');}// Comprobar si la cookies esta caducada y redirigir a login\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9taWRkbGV3YXJlL2FkbWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hZG1pbi5qcz9iZWEyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IGFwcCwgcmVkaXJlY3QsIHJvdXRlIH0pIHtcbiAgY29uc3QgY29va2llcyA9IGFwcC4kY29va2llcy5nZXQoJ2F1dGguX3Rva2VuLmxhcmF2ZWxKV1QnKVxuICBjb25zdCByZWZyZXNoVG9rZW4gPSBhcHAuJGNvb2tpZXMuZ2V0KCdhdXRoLl9yZWZyZXNoX3Rva2VuLmxhcmF2ZWxKV1QnKVxuXG4gIGlmIChjb29raWVzID09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHJlZGlyZWN0KCcvbG9naW4nKVxuICB9XG5cbiAgaWYgKGNvb2tpZXMgJiYgcm91dGUucGF0aCA9PT0gJy9sb2dpbicpIHtcbiAgICByZXR1cm4gcmVkaXJlY3QoJy8nKVxuICB9XG5cbiAgLy8gQ29tcHJvYmFyIHNpIGxhIGNvb2tpZXMgZXN0YSBjYWR1Y2FkYSB5IHJlZGlyaWdpciBhIGxvZ2luXG5cblxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQWVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./middleware/admin.js\n");

/***/ })

})
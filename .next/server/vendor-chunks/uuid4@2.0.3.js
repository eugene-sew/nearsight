"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uuid4@2.0.3";
exports.ids = ["vendor-chunks/uuid4@2.0.3"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/uuid4@2.0.3/node_modules/uuid4/index.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/.pnpm/uuid4@2.0.3/node_modules/uuid4/index.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   uuid4: () => (/* binding */ uuid4),\n/* harmony export */   valid: () => (/* binding */ valid)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n\n\nconst uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;\nfunction valid(uuid) {\n  return uuidPattern.test(uuid);\n}\n\nfunction uuid4() {\n  var rnd = crypto__WEBPACK_IMPORTED_MODULE_0__.randomBytes(16);\n  rnd[6] = (rnd[6] & 0x0f) | 0x40;\n  rnd[8] = (rnd[8] & 0x3f) | 0x80;\n  rnd = rnd.toString(\"hex\").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);\n  rnd.shift();\n  return rnd.join(\"-\");\n}\nuuid4.valid = valid;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uuid4);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdXVpZDRAMi4wLjMvbm9kZV9tb2R1bGVzL3V1aWQ0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRCOztBQUU1QiwrQkFBK0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRztBQUN6RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLCtDQUFrQjtBQUM5QjtBQUNBO0FBQ0Esc0NBQXNDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQztBQUNHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy8ucG5wbS91dWlkNEAyLjAuMy9ub2RlX21vZHVsZXMvdXVpZDQvaW5kZXgubWpzPzAzMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyeXB0byBmcm9tIFwiY3J5cHRvXCI7XG5cbmNvbnN0IHV1aWRQYXR0ZXJuID0gL15bMC05YS1mXXs4fS1bMC05YS1mXXs0fS00WzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9JC9pO1xuZnVuY3Rpb24gdmFsaWQodXVpZCkge1xuICByZXR1cm4gdXVpZFBhdHRlcm4udGVzdCh1dWlkKTtcbn1cblxuZnVuY3Rpb24gdXVpZDQoKSB7XG4gIHZhciBybmQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpO1xuICBybmRbNl0gPSAocm5kWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRbOF0gPSAocm5kWzhdICYgMHgzZikgfCAweDgwO1xuICBybmQgPSBybmQudG9TdHJpbmcoXCJoZXhcIikubWF0Y2goLyguezh9KSguezR9KSguezR9KSguezR9KSguezEyfSkvKTtcbiAgcm5kLnNoaWZ0KCk7XG4gIHJldHVybiBybmQuam9pbihcIi1cIik7XG59XG51dWlkNC52YWxpZCA9IHZhbGlkO1xuXG5leHBvcnQgZGVmYXVsdCB1dWlkNDtcbmV4cG9ydCB7IHV1aWQ0LCB2YWxpZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/uuid4@2.0.3/node_modules/uuid4/index.mjs\n");

/***/ })

};
;
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/toidentifier@1.0.0";
exports.ids = ["vendor-chunks/toidentifier@1.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/toidentifier@1.0.0/node_modules/toidentifier/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/toidentifier@1.0.0/node_modules/toidentifier/index.js ***!
  \**********************************************************************************/
/***/ ((module) => {

eval("/*!\n * toidentifier\n * Copyright(c) 2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = toIdentifier\n\n/**\n * Trasform the given string into a JavaScript identifier\n *\n * @param {string} str\n * @returns {string}\n * @public\n */\n\nfunction toIdentifier (str) {\n  return str\n    .split(' ')\n    .map(function (token) {\n      return token.slice(0, 1).toUpperCase() + token.slice(1)\n    })\n    .join('')\n    .replace(/[^ _0-9a-z]/gi, '')\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vdG9pZGVudGlmaWVyQDEuMC4wL25vZGVfbW9kdWxlcy90b2lkZW50aWZpZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3RvaWRlbnRpZmllckAxLjAuMC9ub2RlX21vZHVsZXMvdG9pZGVudGlmaWVyL2luZGV4LmpzPzMzNDIiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiB0b2lkZW50aWZpZXJcbiAqIENvcHlyaWdodChjKSAyMDE2IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdG9JZGVudGlmaWVyXG5cbi8qKlxuICogVHJhc2Zvcm0gdGhlIGdpdmVuIHN0cmluZyBpbnRvIGEgSmF2YVNjcmlwdCBpZGVudGlmaWVyXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiB0b0lkZW50aWZpZXIgKHN0cikge1xuICByZXR1cm4gc3RyXG4gICAgLnNwbGl0KCcgJylcbiAgICAubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgcmV0dXJuIHRva2VuLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyB0b2tlbi5zbGljZSgxKVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG4gICAgLnJlcGxhY2UoL1teIF8wLTlhLXpdL2dpLCAnJylcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/toidentifier@1.0.0/node_modules/toidentifier/index.js\n");

/***/ })

};
;
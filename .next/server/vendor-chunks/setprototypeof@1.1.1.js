"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/setprototypeof@1.1.1";
exports.ids = ["vendor-chunks/setprototypeof@1.1.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/setprototypeof@1.1.1/node_modules/setprototypeof/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/setprototypeof@1.1.1/node_modules/setprototypeof/index.js ***!
  \**************************************************************************************/
/***/ ((module) => {

eval("\n/* eslint no-proto: 0 */\nmodule.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties)\n\nfunction setProtoOf (obj, proto) {\n  obj.__proto__ = proto\n  return obj\n}\n\nfunction mixinProperties (obj, proto) {\n  for (var prop in proto) {\n    if (!obj.hasOwnProperty(prop)) {\n      obj[prop] = proto[prop]\n    }\n  }\n  return obj\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vc2V0cHJvdG90eXBlb2ZAMS4xLjEvbm9kZV9tb2R1bGVzL3NldHByb3RvdHlwZW9mL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZO0FBQ1o7QUFDQSw2Q0FBNkMsZ0JBQWdCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL25vZGVfbW9kdWxlcy8ucG5wbS9zZXRwcm90b3R5cGVvZkAxLjEuMS9ub2RlX21vZHVsZXMvc2V0cHJvdG90eXBlb2YvaW5kZXguanM/Njc3NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbi8qIGVzbGludCBuby1wcm90bzogMCAqL1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgPyBzZXRQcm90b09mIDogbWl4aW5Qcm9wZXJ0aWVzKVxuXG5mdW5jdGlvbiBzZXRQcm90b09mIChvYmosIHByb3RvKSB7XG4gIG9iai5fX3Byb3RvX18gPSBwcm90b1xuICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIG1peGluUHJvcGVydGllcyAob2JqLCBwcm90bykge1xuICBmb3IgKHZhciBwcm9wIGluIHByb3RvKSB7XG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIG9ialtwcm9wXSA9IHByb3RvW3Byb3BdXG4gICAgfVxuICB9XG4gIHJldHVybiBvYmpcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/setprototypeof@1.1.1/node_modules/setprototypeof/index.js\n");

/***/ })

};
;
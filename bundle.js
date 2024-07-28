/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* styles.css */\r\nhtml, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    font-family: 'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\r\n    background-color: #f4f4f4; /* Light background */\r\n}\r\n\r\n#app {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 8px 20px; /* Reduced padding by 20% */\r\n    background: linear-gradient(135deg, #001f3f, #00274d); /* Gradient background */\r\n    height: 10%;\r\n}\r\n\r\n.logo-container {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.logo-container a {\r\n    display: flex;\r\n    align-items: center;\r\n    text-decoration: none;\r\n}\r\n\r\n.logo-container img {\r\n    height: 40px; /* Adjust as needed */\r\n    width: 40px; /* Ensures the logo is square */\r\n    object-fit: contain;\r\n}\r\n\r\n.header-title {\r\n    margin-left: 10px;\r\n    font-size: 20px;\r\n    line-height: 40px;\r\n    color: #FFFFFF; /* White color for title */\r\n}\r\n\r\n.navbar ul {\r\n    display: flex;\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.navbar li {\r\n    margin-left: 20px;\r\n}\r\n\r\n.navbar a {\r\n    text-decoration: none;\r\n    color: #FFFFFF; /* White color for nav links */\r\n    font-size: 16px;\r\n    padding: 10px;\r\n}\r\n\r\n.navbar a:hover {\r\n    text-decoration: underline; /* Hover effect similar to Eni */\r\n}\r\n\r\n.ap-h1 {\r\n    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\r\n    font-size: 48px;\r\n    font-weight: bold;\r\n    color: #000000;\r\n    line-height: 1.2;\r\n    margin: 20px 0;\r\n}\r\n\r\n.body-regular {\r\n    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    color: #333333;\r\n    line-height: 1.5;\r\n    margin: 10px 0;\r\n}\r\n\r\n/* Flexbox settings for content and footer */\r\n.content {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column; /* Changed from row to column */\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.display-box {\r\n    width: 100%; /* Ensure the box takes full width */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 2em; /* Large text */\r\n    text-align: center; /* Center text horizontally */\r\n    color: #001f3f; /* Darker blue text */\r\n    background-color: #99aabb; /* Lighter background of the same color as header */\r\n    padding: 20px;\r\n    margin: 0;\r\n    border: 1px solid #ccc; /* Styling the border */\r\n    height: 100%; /* Ensures the box takes full height available */\r\n    box-sizing: border-box; /* Includes padding and border in the element's total width and height */\r\n}\r\n\r\n.footer {\r\n    background: linear-gradient(135deg, #00274d, #001f3f); /* Gradient background similar to header */\r\n    color: white;\r\n    text-align: center;\r\n    padding: 8px; /* Reduced padding by 20% */\r\n    margin-top: auto;\r\n}\r\n\r\n.footer p {\r\n    padding: 8px; /* Adjust the padding value as needed */\r\n    margin: 0; /* Optional: Reset margin for better control */\r\n}\r\n/* Responsive adjustments */\r\n@media (max-width: 768px) {\r\n    .header-title {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .navbar a {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .display-box {\r\n        font-size: 1.5em;\r\n    }\r\n}\r\n\r\n.dashboard-main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.welcome-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    width: 100%;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.welcome-container h2, .welcome-container p {\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n.dashboard-container {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    flex: 1; /* Take up the remaining space in the display-box */\r\n    box-sizing: border-box;\r\n}\r\n\r\n.bi-dashboard {\r\n    margin: 10px;\r\n    padding: 20px;\r\n    border: 1px solid #ccc;\r\n    background-color: #eaeaea;\r\n    flex: 1; /* Grow to fill the space in the container */\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center; /* Center content vertically */\r\n    justify-content: center; /* Center content horizontally */\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://fe/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://fe/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://fe/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://fe/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://fe/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://fe/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://fe/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://fe/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://fe/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://fe/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf(\"native code\")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&(\"style\"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}\nfunction w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(\" \").replace(/\\s+/g,\" \").replace(/^\\s+|\\s+$/,\"\")}function y(a,b){for(var c=a.className.split(/\\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}\nfunction ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,\"link\",{rel:\"stylesheet\",href:b,media:\"all\"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error(\"Stylesheet failed to load\");d()}):setTimeout(function(){e=!0;d()},0);u(a,\"head\",b)}\nfunction A(a,b,c,d){var e=a.c.getElementsByTagName(\"head\")[0];if(e){var f=t(a,\"script\",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&\"loaded\"!=this.readyState&&\"complete\"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,\"HEAD\"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error(\"Script load timeout\")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||\"-\"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\\W_]+/g,\"\").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a=\"n\";var c=(b||\"n4\").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+\" \"+(a.f+\"00\")+\" 300px \"+I(a.c)}function I(a){var b=[];a=a.split(/,\\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['\"]/g,\"\");-1!=d.indexOf(\" \")||/^\\d/.test(d)?b.push(\"'\"+d+\"'\"):b.push(d)}return b.join(\",\")}function J(a){return a.a+a.f}function H(a){var b=\"normal\";\"o\"===a.a?b=\"oblique\":\"i\"===a.a&&(b=\"italic\");return b}\nfunction ga(a){var b=4,c=\"n\",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F(\"-\");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c(\"wf\",\"loading\")]);K(a,\"loading\")}function L(a){if(a.g){var b=y(a.f,a.a.c(\"wf\",\"active\")),c=[],d=[a.a.c(\"wf\",\"loading\")];b||c.push(a.a.c(\"wf\",\"inactive\"));w(a.f,c,d)}K(a,\"inactive\")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,\"span\",{\"aria-hidden\":\"true\"},this.f)}function N(a){u(a.c,\"body\",a.a)}function O(a){return\"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:\"+I(a.c)+\";\"+(\"font-style:\"+H(a)+\";font-weight:\"+(a.f+\"00\")+\";\")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||\"BESbswy\";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+\",serif\",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+\",sans-serif\",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G(\"serif\",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G(\"sans-serif\",J(this.a));a=\nO(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:\"serif\",C:\"sans-serif\"},S=null;function T(){if(null===S){var a=/AppleWebKit\\/([0-9]+)(?:\\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f[\"sans-serif\"]=this.m.a.offsetWidth;this.A=q();U(this)};\nfunction la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f[\"sans-serif\"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c(\"wf\",a.c,J(a).toString(),\"active\")],[b.a.c(\"wf\",a.c,J(a).toString(),\"loading\"),b.a.c(\"wf\",a.c,J(a).toString(),\"inactive\")]);K(b,\"fontactive\",a);this.m=!0;na(this)};\nW.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c(\"wf\",a.c,J(a).toString(),\"active\")),d=[],e=[b.a.c(\"wf\",a.c,J(a).toString(),\"loading\")];c||d.push(b.a.c(\"wf\",a.c,J(a).toString(),\"inactive\"));w(b.f,d,e)}K(b,\"fontinactive\",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c(\"wf\",\"active\")],[a.a.c(\"wf\",\"loading\"),a.a.c(\"wf\",\"inactive\")]),K(a,\"active\")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};\nfunction qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c(\"wf\",x.c,J(x).toString(),\"loading\")]);K(r,\"fontloading\",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\\/(\\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\\/10\\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);\nX=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}\nra.prototype.load=function(a){function b(){if(f[\"__mti_fntLst\"+d]){var c=f[\"__mti_fntLst\"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||\"https://fast.fonts.net/jsapi\")+\"/\"+d+\".js\"+(e?\"?v=\"+e:\"\"),function(e){e?a([]):(f[\"__MonotypeConfiguration__\"+\nd]=function(){return c.a},b())}).id=\"__MonotypeAPIScript__\"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(\":\"),d[1])for(var h=d[1].split(\",\"),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||\"\"}var ua=\"https://fonts.googleapis.com/css\";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(\":\");3==e.length&&a.f.push(e.pop());var f=\"\";2==e.length&&\"\"!=e[1]&&(f=\":\");a.a.push(e.join(f))}}\nfunction wa(a){if(0==a.a.length)throw Error(\"No fonts to load!\");if(-1!=a.c.indexOf(\"kit=\"))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,\"+\"));b=a.c+\"?family=\"+c.join(\"%7C\");0<a.f.length&&(b+=\"&subset=\"+a.f.join(\",\"));0<a.g.length&&(b+=\"&text=\"+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}\nvar za={latin:\"BESbswy\",\"latin-ext\":\"\\u00e7\\u00f6\\u00fc\\u011f\\u015f\",cyrillic:\"\\u0439\\u044f\\u0416\",greek:\"\\u03b1\\u03b2\\u03a3\",khmer:\"\\u1780\\u1781\\u1782\",Hanuman:\"\\u1780\\u1781\\u1782\"},Aa={thin:\"1\",extralight:\"2\",\"extra-light\":\"2\",ultralight:\"2\",\"ultra-light\":\"2\",light:\"3\",regular:\"4\",book:\"4\",medium:\"5\",\"semi-bold\":\"6\",semibold:\"6\",\"demi-bold\":\"6\",demibold:\"6\",bold:\"7\",\"extra-bold\":\"8\",extrabold:\"8\",\"ultra-bold\":\"8\",ultrabold:\"8\",black:\"9\",heavy:\"9\",l:\"3\",r:\"4\",b:\"7\"},Ba={i:\"i\",italic:\"i\",n:\"n\",normal:\"n\"},\nCa=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;\nfunction Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(\":\"),e=d[0].replace(/\\+/g,\" \"),f=[\"n4\"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(\",\"),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k=\"\";else{k=n[2];k=null==k||\"\"==k?\"n\":Ba[k];n=n[1];if(null==n||\"\"==n)n=\"4\";else var r=Aa[n],n=r?r:isNaN(n)?\"4\":n.substr(0,1);k=[k,n].join(\"\")}}else k=\"\";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(\",\"):\ng,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||\"https://use.typekit.net\")+\"/\"+b+\".js\",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga(\"font-weight:\"+h.weight+\";font-style:\"+h.style)))}a(d.a)},A(this.c,(this.f.api||\"https://f.fontdeck.com/s/css/js/\")+ea(this.c)+\"/\"+b+\".js\",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}());\n\n\n//# sourceURL=webpack://fe/./node_modules/webfontloader/webfontloader.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ \"./node_modules/webfontloader/webfontloader.js\");\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _content_pageContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/pageContent */ \"./src/content/pageContent.js\");\n\r\n\r\nwebfontloader__WEBPACK_IMPORTED_MODULE_1___default().load({\r\n    google: {\r\n        families: ['Roboto:400,700']\r\n    }\r\n});\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    createAppContainer();\r\n    createPageStructure();\r\n});\r\n\r\nlet currentInterval;\r\n\r\nfunction createAppContainer() {\r\n    const app = document.createElement('div');\r\n    app.id = 'app';\r\n    document.body.appendChild(app);\r\n}\r\n\r\n\r\nfunction createPageStructure() {\r\n    const app = document.getElementById('app');\r\n\r\n    // Header\r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n\r\n    // Logo and Title\r\n    const logoContainer = document.createElement('div');\r\n    logoContainer.classList.add('logo-container');\r\n\r\n    const logoLink = document.createElement('a');\r\n    logoLink.href = '#home'; // Change this to your actual landing route if needed\r\n\r\n    const logo = new Image();\r\n    logo.src = __webpack_require__(/*! ./images/logo.jpg */ \"./src/images/logo.jpg\"); // Using Webpack require to ensure the image is bundled\r\n    logo.alt = 'Logo';\r\n    logo.classList.add('logo');\r\n    logoLink.appendChild(logo);\r\n    logoContainer.appendChild(logoLink);\r\n     // Add event listener for logo click\r\n     logoLink.addEventListener('click', function(event) {\r\n        event.preventDefault();\r\n        displayPageContent('home', document.getElementById('displayBox'));\r\n    });\r\n    logoLink.href = '#home';\r\n    const title = document.createElement('h1');\r\n    title.textContent = 'Aamir Pharmacy';\r\n    title.classList.add('header-title');\r\n    logoContainer.appendChild(title);\r\n\r\n    header.appendChild(logoContainer);\r\n\r\n    // Navigation\r\n    const nav = document.createElement('nav');\r\n    nav.classList.add('navbar');\r\n\r\n    const ul = document.createElement('ul');\r\n    ['Home', 'Services', 'Contact', 'Sign-in'].forEach(item => {\r\n        const li = document.createElement('li');\r\n        const a = document.createElement('a');\r\n        a.href = `#${item.toLowerCase()}`;\r\n        a.id = `${item.toLowerCase()}-link`; // Assign unique IDs\r\n        a.textContent = item;\r\n        li.appendChild(a);\r\n        ul.appendChild(li);\r\n    });\r\n    nav.appendChild(ul);\r\n\r\n    header.appendChild(nav);\r\n    app.appendChild(header);\r\n\r\n    // Main Content\r\n    const content = document.createElement('div');\r\n    content.classList.add('content');\r\n\r\n    // Big Box for Displaying the Selected Item\r\n    const displayBox = document.createElement('div');\r\n    displayBox.id = 'displayBox';\r\n    displayBox.classList.add('display-box');\r\n    displayBox.textContent = 'Select an item'; // Default text\r\n\r\n\r\n    content.appendChild(displayBox);\r\n    app.appendChild(content);\r\n    setupNavigationEventListener();\r\n\r\n    // Footer\r\n    const footer = document.createElement('footer');\r\n    footer.classList.add('footer');\r\n    footer.innerHTML = '<p>Footer Content</p>';\r\n    app.appendChild(footer);\r\n    displayPageContent(\"home\", displayBox)\r\n}\r\n\r\nfunction handleNavClick(event) {\r\n    event.preventDefault();\r\n    const displayBox = document.getElementById('displayBox');\r\n    displayBox.innerHTML = ''; // Clear any existing content\r\n\r\n    switch (event.target.id) {\r\n        case 'home-link':\r\n            displayPageContent('home', displayBox);\r\n            break;\r\n        case 'services-link':\r\n            displayPageContent('services', displayBox);\r\n            break;\r\n        case 'contact-link':\r\n            displayPageContent('contact', displayBox);\r\n            break;\r\n        case 'sign-in-link':\r\n            displayLoginForm(displayBox);\r\n            updateNavToSignOut();\r\n            break;\r\n        case 'sign-out-link':\r\n            handleSignOut(event);\r\n            break;\r\n        default:\r\n            console.log('Unknown navigation item');\r\n    }\r\n}\r\n\r\nfunction setupNavigationEventListener() {\r\n    const nav = document.querySelector('.navbar');\r\n    nav.addEventListener('click', function(event) {\r\n        if (event.target.tagName === 'A') {\r\n            handleNavClick(event);\r\n        }\r\n    });\r\n}\r\n\r\n\r\nfunction displayPageContent(page, displayBox) {\r\n    let content;\r\n    console.log(`Displaying page content for: ${page}`);\r\n    if (page === 'home') {\r\n        console.log('Home content:', _content_pageContent__WEBPACK_IMPORTED_MODULE_2__.home);  // Log the home content\r\n        content = _content_pageContent__WEBPACK_IMPORTED_MODULE_2__.home;\r\n        console.log('Content content:', content);  // Log the home content\r\n    } else if (page === 'services') {\r\n        content = _content_pageContent__WEBPACK_IMPORTED_MODULE_2__.services;\r\n    } else if (page === 'contact') {\r\n        content = _content_pageContent__WEBPACK_IMPORTED_MODULE_2__.contact;\r\n    }\r\n\r\n    if (currentInterval) {\r\n        clearInterval(currentInterval);\r\n    }\r\n\r\n    \r\n\r\n    displayBox.innerHTML = ''; // Clear any existing content\r\n    console.log('Content to display:', content);\r\n    console.log('Display box:', displayBox);\r\n\r\n    if (content.length > 1) {\r\n        let slideIndex = 0;\r\n        displayBox.innerHTML = `\r\n            <div class=\"slide\">\r\n                <h2>${content[slideIndex].title}</h2>\r\n                <p>${content[slideIndex].description}</p>\r\n            </div>\r\n        `;\r\n        currentInterval = setInterval(() => {\r\n            slideIndex = (slideIndex + 1) % content.length;\r\n            displayBox.innerHTML = `\r\n                <div class=\"slide\">\r\n                    <h2>${content[slideIndex].title}</h2>\r\n                    <p>${content[slideIndex].description}</p>\r\n                </div>\r\n            `;\r\n        }, 3000); // Change slide every 3 seconds\r\n    } else {\r\n        displayBox.innerHTML = `\r\n            <h2>${content[0].title}</h2>\r\n            <p>${content[0].description}</p>\r\n        `;\r\n    }\r\n}\r\n\r\nfunction displayLoginForm(displayBox) {\r\n    if (currentInterval) {\r\n        clearInterval(currentInterval);\r\n    }\r\n    \r\n    displayBox.innerHTML = `\r\n    <form id=\"loginForm\">\r\n        <h2>Login</h2>\r\n        <label for=\"username\">Username:</label>\r\n        <input type=\"text\" id=\"username\" name=\"username\"><br><br>\r\n        <label for=\"password\">Password:</label>\r\n        <input type=\"password\" id=\"password\" name=\"password\"><br><br>\r\n        <input type=\"submit\" value=\"Login\">\r\n        <a href=\"http://54.157.46.70:5000/auth/google\">\r\n            <button type=\"button\">Login with Google</button>\r\n        </a>\r\n    </form>\r\n    `;\r\n\r\n    const loginForm = document.getElementById('loginForm');\r\n    loginForm.addEventListener('submit', function(event) {\r\n        event.preventDefault();\r\n        console.log(\"Login form submitted\");\r\n        displayWelcomeContent(displayBox);\r\n        updateNavToSignOut();\r\n        //displayPageContent('home', displayBox);\r\n    });\r\n    //displayBox.innerHTML='';\r\n}\r\nfunction displayWelcomeContent(displayBox) {\r\n    if (currentInterval) {\r\n        clearInterval(currentInterval);\r\n    }\r\n\r\n    displayBox.innerHTML = `\r\n        <div class=\"dashboard-main\">\r\n            <div class=\"welcome-container\">\r\n                <h2>${_content_pageContent__WEBPACK_IMPORTED_MODULE_2__.welcomeContent.title}</h2>\r\n                <p>${_content_pageContent__WEBPACK_IMPORTED_MODULE_2__.welcomeContent.description}</p>\r\n            </div>\r\n            <div class=\"dashboard-container\">\r\n                <div class=\"bi-dashboard\">${_content_pageContent__WEBPACK_IMPORTED_MODULE_2__.welcomeContent.dashboards[0]}</div>\r\n                <div class=\"bi-dashboard\">${_content_pageContent__WEBPACK_IMPORTED_MODULE_2__.welcomeContent.dashboards[1]}</div>\r\n                <div class=\"bi-dashboard\">${_content_pageContent__WEBPACK_IMPORTED_MODULE_2__.welcomeContent.dashboards[2]}</div>\r\n                <div class=\"bi-dashboard\">${_content_pageContent__WEBPACK_IMPORTED_MODULE_2__.welcomeContent.dashboards[3]}</div>\r\n            </div>\r\n        </div>\r\n    `;\r\n}\r\nfunction updateNavToSignOut() {\r\n    const signInLink = document.getElementById('sign-in-link');\r\n    if (signInLink) {\r\n        signInLink.id = 'sign-out-link';\r\n        signInLink.textContent = 'Sign-out';\r\n        signInLink.href = '#sign-out';\r\n    }\r\n}\r\n\r\nfunction updateNavToSignIn() {\r\n    const signOutLink = document.getElementById('sign-out-link');\r\n    if (signOutLink) {\r\n        signOutLink.id = 'sign-in-link';\r\n        signOutLink.textContent = 'Sign-in';\r\n        signOutLink.href = '#sign-in';\r\n    }\r\n    console.log(\"I should take you to home\");\r\n    const displayBox = document.getElementById('displayBox');\r\n    displayBox.innerHTML = ''; // Clear any existing content\r\n    displayPageContent('home', displayBox);\r\n}\r\n\r\nfunction handleSignOut(event) {\r\n    event.preventDefault();\r\n    console.log(\"Sign-out clicked\");\r\n    updateNavToSignIn();\r\n    \r\n\r\n}\r\n\r\n\r\nfunction handleSignIn(event) {\r\n    event.preventDefault();\r\n    console.log(\"Sign-in clicked\");\r\n    const displayBox = document.getElementById('displayBox');\r\n    displayBox.innerHTML = ''; // Clear any existing content\r\n    displayLoginForm(displayBox);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://fe/./src/app.js?");

/***/ }),

/***/ "./src/content/pageContent.js":
/*!************************************!*\
  !*** ./src/content/pageContent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact),\n/* harmony export */   home: () => (/* binding */ home),\n/* harmony export */   services: () => (/* binding */ services),\n/* harmony export */   welcomeContent: () => (/* binding */ welcomeContent)\n/* harmony export */ });\nconst home = [\r\n    {\r\n      title: \"Home Title 1\",\r\n      description: \"Home Description 1\",\r\n      img: \"path/to/home-image1.jpg\",\r\n    },\r\n    {\r\n      title: \"Home Title 2\",\r\n      description: \"Home Description 2\",\r\n      img: \"path/to/home-image2.jpg\",\r\n    },\r\n  ];\r\n  \r\n  const services = [\r\n    {\r\n      title: \"Services Title 1\",\r\n      description: \"Services Description 1\",\r\n      img: \"path/to/services-image1.jpg\",\r\n    },\r\n    {\r\n      title: \"Services Title 2\",\r\n      description: \"Services Description 2\",\r\n      img: \"path/to/services-image2.jpg\",\r\n    },\r\n  ];\r\n  \r\n  const contact = [\r\n    {\r\n      title: \"Contact Title 1\",\r\n      description: \"Contact Description 1\",\r\n      img: \"path/to/contact-image1.jpg\",\r\n    },\r\n    {\r\n      title: \"Contact Title 2\",\r\n      description: \"Contact Description 2\",\r\n      img: \"path/to/contact-image2.jpg\",\r\n    },\r\n  ];\r\n  \r\nconst welcomeContent = {\r\n    title: \"Welcome\",\r\n    description: \"You are logged in.\",\r\n    dashboards: [\r\n        \"Dashboard 1\",\r\n        \"Dashboard 2\",\r\n        \"Dashboard 3\",\r\n        \"Dashboard 4\"\r\n    ]\r\n};\r\n\n\n//# sourceURL=webpack://fe/./src/content/pageContent.js?");

/***/ }),

/***/ "./src/images/logo.jpg":
/*!*****************************!*\
  !*** ./src/images/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"dc36f617b84593a3bf01.jpg\";\n\n//# sourceURL=webpack://fe/./src/images/logo.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
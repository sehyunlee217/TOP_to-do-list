/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/skeleton.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/skeleton.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n* Skeleton V2.0.4\n* Copyright 2014, Dave Gamache\n* www.getskeleton.com\n* Free to use under the MIT license.\n* http://www.opensource.org/licenses/mit-license.php\n* 12/29/2014\n*/\n\n\n/* Table of contents\n––––––––––––––––––––––––––––––––––––––––––––––––––\n- Grid\n- Base Styles\n- Typography\n- Links\n- Buttons\n- Forms\n- Lists\n- Code\n- Tables\n- Spacing\n- Utilities\n- Clearing\n- Media Queries\n*/\n\n\n/* Grid\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n    display: grid;\n    position: relative;\n    width: 100%;\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 0 20px;\n    box-sizing: border-box; }\n  .column,\n  .columns {\n    width: 100%;\n    float: left;\n    box-sizing: border-box; }\n  \n  /* For devices larger than 400px */\n  @media (min-width: 400px) {\n    .container {\n      width: 85%;\n      padding: 0; }\n  }\n  \n  /* For devices larger than 550px */\n  @media (min-width: 550px) {\n    .container {\n      width: 80%; }\n    .column,\n    .columns {\n      margin-left: 4%; }\n    .column:first-child,\n    .columns:first-child {\n      margin-left: 0; }\n  \n    .one.column,\n    .one.columns                    { width: 4.66666666667%; }\n    .two.columns                    { width: 13.3333333333%; }\n    .three.columns                  { width: 22%;            }\n    .four.columns                   { width: 30.6666666667%; }\n    .five.columns                   { width: 39.3333333333%; }\n    .six.columns                    { width: 48%;            }\n    .seven.columns                  { width: 56.6666666667%; }\n    .eight.columns                  { width: 65.3333333333%; }\n    .nine.columns                   { width: 74.0%;          }\n    .ten.columns                    { width: 82.6666666667%; }\n    .eleven.columns                 { width: 91.3333333333%; }\n    .twelve.columns                 { width: 100%; margin-left: 0; }\n  \n    .one-third.column               { width: 30.6666666667%; }\n    .two-thirds.column              { width: 65.3333333333%; }\n  \n    .one-half.column                { width: 48%; }\n  \n    /* Offsets */\n    .offset-by-one.column,\n    .offset-by-one.columns          { margin-left: 8.66666666667%; }\n    .offset-by-two.column,\n    .offset-by-two.columns          { margin-left: 17.3333333333%; }\n    .offset-by-three.column,\n    .offset-by-three.columns        { margin-left: 26%;            }\n    .offset-by-four.column,\n    .offset-by-four.columns         { margin-left: 34.6666666667%; }\n    .offset-by-five.column,\n    .offset-by-five.columns         { margin-left: 43.3333333333%; }\n    .offset-by-six.column,\n    .offset-by-six.columns          { margin-left: 52%;            }\n    .offset-by-seven.column,\n    .offset-by-seven.columns        { margin-left: 60.6666666667%; }\n    .offset-by-eight.column,\n    .offset-by-eight.columns        { margin-left: 69.3333333333%; }\n    .offset-by-nine.column,\n    .offset-by-nine.columns         { margin-left: 78.0%;          }\n    .offset-by-ten.column,\n    .offset-by-ten.columns          { margin-left: 86.6666666667%; }\n    .offset-by-eleven.column,\n    .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\n  \n    .offset-by-one-third.column,\n    .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\n    .offset-by-two-thirds.column,\n    .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\n  \n    .offset-by-one-half.column,\n    .offset-by-one-half.columns     { margin-left: 52%; }\n  \n  }\n  \n  \n  /* Base Styles\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  /* NOTE\n  html is set to 62.5% so that all the REM measurements throughout Skeleton\n  are based on 10px sizing. So basically 1.5rem = 15px :) */\n  html {\n    font-size: 62.5%; \n    margin: 0;\n    height: 100vh;\n  }\n  body {\n    font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\n    line-height: 1.6;\n    font-weight: 400;\n    font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    color: #222; \n  \n    margin: 0;\n    background-size: cover;\n    min-width: 60%;\n    width: auto;\n    height: 100%;\n  }\n  \n  \n  /* Typography\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 0;\n    margin-bottom: 2rem;\n    font-weight: 300; }\n  h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\n  h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\n  h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\n  h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\n  h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\n  h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n  \n  /* Larger than phablet */\n  @media (min-width: 550px) {\n    h1 { font-size: 5.0rem; }\n    h2 { font-size: 4.2rem; }\n    h3 { font-size: 3.6rem; }\n    h4 { font-size: 3.0rem; }\n    h5 { font-size: 2.4rem; }\n    h6 { font-size: 1.5rem; }\n  }\n  \n  p {\n    margin-top: 0; }\n  \n  \n  /* Links\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  a {\n    color: #1EAEDB; }\n  a:hover {\n    color: #0FA0CE; }\n  \n  \n  /* Buttons\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  .button,\n  button,\n  input[type=\"submit\"],\n  input[type=\"reset\"],\n  input[type=\"button\"] {\n    display: inline-block;\n    height: 38px;\n    padding: 0 30px;\n    color: #555;\n    text-align: center;\n    font-size: 11px;\n    font-weight: 600;\n    line-height: 38px;\n    letter-spacing: .1rem;\n    text-transform: uppercase;\n    text-decoration: none;\n    white-space: nowrap;\n    background-color: transparent;\n    border-radius: 4px;\n    border: 1px solid #bbb;\n    cursor: pointer;\n    box-sizing: border-box; }\n  .button:hover,\n  button:hover,\n  input[type=\"submit\"]:hover,\n  input[type=\"reset\"]:hover,\n  input[type=\"button\"]:hover,\n  .button:focus,\n  button:focus,\n  input[type=\"submit\"]:focus,\n  input[type=\"reset\"]:focus,\n  input[type=\"button\"]:focus {\n    color:#333;\n    border-color: #888;\n    outline: 0; }\n  .button.button-primary,\n  button.button-primary,\n  input[type=\"submit\"].button-primary,\n  input[type=\"reset\"].button-primary,\n  input[type=\"button\"].button-primary {\n    color: #FFF;\n    background-color: #33C3F0;\n    border-color: #33C3F0; }\n  .button.button-primary:hover,\n  button.button-primary:hover,\n  input[type=\"submit\"].button-primary:hover,\n  input[type=\"reset\"].button-primary:hover,\n  input[type=\"button\"].button-primary:hover,\n  .button.button-primary:focus,\n  button.button-primary:focus,\n  input[type=\"submit\"].button-primary:focus,\n  input[type=\"reset\"].button-primary:focus,\n  input[type=\"button\"].button-primary:focus {\n    color: #FFF;\n    background-color: #1EAEDB;\n    border-color: #1EAEDB; }\n  \n  \n  /* Forms\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  input[type=\"email\"],\n  input[type=\"number\"],\n  input[type=\"search\"],\n  input[type=\"text\"],\n  input[type=\"tel\"],\n  input[type=\"url\"],\n  input[type=\"password\"],\n  textarea,\n  select {\n    height: 38px;\n    padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\n    background-color: #fff;\n    border: 1px solid #D1D1D1;\n    border-radius: 4px;\n    box-shadow: none;\n    box-sizing: border-box; }\n  /* Removes awkward default styles on some inputs for iOS */\n  input[type=\"email\"],\n  input[type=\"number\"],\n  input[type=\"search\"],\n  input[type=\"text\"],\n  input[type=\"tel\"],\n  input[type=\"url\"],\n  input[type=\"password\"],\n  textarea {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none; }\n  textarea {\n    min-height: 65px;\n    padding-top: 6px;\n    padding-bottom: 6px; }\n  input[type=\"email\"]:focus,\n  input[type=\"number\"]:focus,\n  input[type=\"search\"]:focus,\n  input[type=\"text\"]:focus,\n  input[type=\"tel\"]:focus,\n  input[type=\"url\"]:focus,\n  input[type=\"password\"]:focus,\n  textarea:focus,\n  select:focus {\n    border: 1px solid #33C3F0;\n    outline: 0; }\n  label,\n  legend {\n    display: block;\n    margin-bottom: .5rem;\n    font-weight: 600; }\n  fieldset {\n    padding: 0;\n    border-width: 0; }\n  input[type=\"checkbox\"],\n  input[type=\"radio\"] {\n    display: inline; }\n  label > .label-body {\n    display: inline-block;\n    margin-left: .5rem;\n    font-weight: normal; }\n  \n  \n  /* Lists\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  ul {\n    list-style: circle inside; }\n  ol {\n    list-style: decimal inside; }\n  ol, ul {\n    padding-left: 0;\n    margin-top: 0; }\n  ul ul,\n  ul ol,\n  ol ol,\n  ol ul {\n    margin: 1.5rem 0 1.5rem 3rem;\n    font-size: 90%; }\n  li {\n    margin-bottom: 1rem; }\n  \n  \n  /* Code\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  code {\n    padding: .2rem .5rem;\n    margin: 0 .2rem;\n    font-size: 90%;\n    white-space: nowrap;\n    background: #F1F1F1;\n    border: 1px solid #E1E1E1;\n    border-radius: 4px; }\n  pre > code {\n    display: block;\n    padding: 1rem 1.5rem;\n    white-space: pre; }\n  \n  \n  /* Tables\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  th,\n  td {\n    padding: 12px 15px;\n    text-align: left;\n    border-bottom: 1px solid #E1E1E1; }\n  th:first-child,\n  td:first-child {\n    padding-left: 0; }\n  th:last-child,\n  td:last-child {\n    padding-right: 0; }\n  \n  \n  /* Spacing\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  input,\n  textarea,\n  select,\n  fieldset {\n    margin-bottom: 1.5rem; }\n  pre,\n  blockquote,\n  dl,\n  figure,\n  table,\n  p,\n  ul,\n  ol,\n  form {\n    margin-bottom: 2.5rem; }\n  \n  \n  /* Utilities\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  .u-full-width {\n    width: 100%;\n    box-sizing: border-box; }\n  .u-max-full-width {\n    max-width: 100%;\n    box-sizing: border-box; }\n  .u-pull-right {\n    float: right; }\n  .u-pull-left {\n    float: left; }\n  \n  \n  /* Misc\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  hr {\n    margin-top: 3rem;\n    margin-bottom: 3.5rem;\n    border-width: 0;\n    border-top: 1px solid #E1E1E1; }\n  \n  \n  /* Clearing\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  \n  /* Self Clearing Goodness */\n  .container:after,\n  .row:after,\n  .u-cf {\n    content: \"\";\n    display: table;\n    clear: both; }\n  \n  \n  /* Media Queries\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n  /*\n  Note: The best way to structure the use of media queries is to create the queries\n  near the relevant code. For example, if you wanted to change the styles for buttons\n  on small devices, paste the mobile query code up in the buttons section and style it\n  there.\n  */\n  \n  \n  /* Larger than mobile */\n  @media (min-width: 400px) {}\n  \n  /* Larger than phablet (also point when grid becomes active) */\n  @media (min-width: 550px) {}\n  \n  /* Larger than tablet */\n  @media (min-width: 750px) {}\n  \n  /* Larger than desktop */\n  @media (min-width: 1000px) {}\n  \n  /* Larger than Desktop HD */\n  @media (min-width: 1200px) {}\n  \n  /* -------- Adjustments --------- */\n\n    body{\n      text-transform: uppercase;\n      letter-spacing: .1rem;\n    }\n\n  #header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.5rem;\n    background-color: rgb(145, 200, 232) ;\n  }\n\n  button{\n    border: none;\n    display: flex;\n    align-items: center;\n  }\n\n  #content{\n    display: flex;\n    flex-wrap: wrap;\n    background-color: rgba(128, 128, 128, 0.3);\n    height: 100%;\n  }\n\n  .break{\n    flex-basis: 100%;\n  }\n\n  #sidebar{\n    order: 1;\n    font-family: inherit;\n    display: flex;\n    flex-direction: column;\n    gap: 0.5em;\n    background-color: white;\n    padding: 1em;\n  }\n\n  #tasks{\n    order: 2;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n  }\n\n  .task_content{\n  }\n\n  .title-m{\n    color: rgb(7, 20, 28);\n    font-size: 1.3em;\n    border-bottom: 2px solid rgb(7, 20, 28) ;\n  }\n\n  .list-items>div{\n    color: rgba(7, 20, 28, 0.8);;\n    margin-top: 0.3em;\n  }\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top_to-do-list_v2/./src/styles/skeleton.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top_to-do-list_v2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top_to-do-list_v2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/skeleton.css":
/*!*********************************!*\
  !*** ./src/styles/skeleton.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/skeleton.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top_to-do-list_v2/./src/styles/skeleton.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top_to-do-list_v2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top_to-do-list_v2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top_to-do-list_v2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top_to-do-list_v2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top_to-do-list_v2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top_to-do-list_v2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_skeleton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/skeleton.css */ \"./src/styles/skeleton.css\");\n/* harmony import */ var _pages_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/toggleMenu */ \"./src/pages/toggleMenu.js\");\n/* harmony import */ var _pages_addTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/addTasks */ \"./src/pages/addTasks.js\");\n\n\n\n\n(0,_pages_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://top_to-do-list_v2/./src/index.js?");

/***/ }),

/***/ "./src/pages/addTasks.js":
/*!*******************************!*\
  !*** ./src/pages/addTasks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction addTask() {\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://top_to-do-list_v2/./src/pages/addTasks.js?");

/***/ }),

/***/ "./src/pages/toggleMenu.js":
/*!*********************************!*\
  !*** ./src/pages/toggleMenu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction isDisplay() {\n    console.log(\"isDisplay\");\n    // checks if sidebar is displaying or not\n    const contentLoc = document.getElementById(\"content\");\n    const sidebarLoc = document.getElementById(\"sidebar\");\n\n    if (contentLoc.contains(sidebarLoc) == false) {\n        // if nothing is displayed, display:none\n        return false;\n    }\n    else {\n        // if true, display:true\n        return true;\n    }\n}\n\nfunction buildSidebar() {\n\n    const contentLoc = document.getElementById(\"content\");\n\n    // basic structure\n    const sidebarContainer = document.createElement(\"div\");\n    sidebarContainer.setAttribute(\"id\", \"sidebar\");\n    contentLoc.appendChild(sidebarContainer);\n    // ------------ home ---------------\n    const sidebarHome = document.createElement(\"div\");\n    sidebarContainer.appendChild(sidebarHome);\n\n    const homeTxt = document.createElement(\"div\");\n    homeTxt.textContent = \"Home\";\n    homeTxt.classList.add(\"title-m\");\n    sidebarHome.appendChild(homeTxt);\n\n    // -------- home pages ---------\n    const homePages = document.createElement(\"div\");\n    sidebarHome.appendChild(homePages);\n    homePages.classList.add(\"list-items\");\n\n    // all tasks\n    const allTasks = document.createElement(\"div\");\n    allTasks.textContent = \"All Tasks\";\n    homePages.appendChild(allTasks);\n    // today\n    const todayTasks = document.createElement(\"div\");\n    todayTasks.textContent = \"Today\";\n    homePages.appendChild(todayTasks);\n    // next 7 days\n    const next7Tasks = document.createElement(\"div\");\n    next7Tasks.textContent = \"Next 7 Days\";\n    homePages.appendChild(next7Tasks);\n    // important\n    const impTasks = document.createElement(\"div\");\n    impTasks.textContent = \"Important\";\n    homePages.appendChild(impTasks);\n\n    // ------------ groups ---------------\n    const sidebarGroups = document.createElement(\"div\");\n    sidebarContainer.appendChild(sidebarGroups);\n\n    // groups text\n    const groupsTxt = document.createElement(\"div\");\n    groupsTxt.textContent = \"Groups\";\n    groupsTxt.classList.add(\"title-m\");\n    sidebarGroups.appendChild(groupsTxt);\n\n    // new groups\n    const newGroups = document.createElement(\"div\");\n    sidebarGroups.appendChild(newGroups);\n    sidebarGroups.classList.add(\"list-items\");\n\n    // Add a new group \n    const addGroup = document.createElement(\"div\");\n    addGroup.textContent = \"New Group\";\n    sidebarGroups.appendChild(addGroup);\n}\n\nfunction generateMenu() {\n    // check if sidebar is not generated, build sidebar\n    if (isDisplay() == false) {\n        buildSidebar();\n    }\n    // if sidebar is generated, \n    else {\n        const sidebarLoc = document.getElementById(\"sidebar\");\n        // if display is shown, change to none\n        if (sidebarLoc.style.display != \"none\") {\n            sidebarLoc.style.display = \"none\";\n        }\n        // if display is not shown, change to flex/block\n        else {\n            sidebarLoc.style.display = \"flex\";\n        }\n    }\n}\n\n// when menu is clicked, show and hide menu page\nfunction toggleMenu() {\n    // add event listener for when menu button is clicked\n    const menuBtn = document.getElementById(\"menu\");\n    menuBtn.addEventListener(\"click\", generateMenu);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://top_to-do-list_v2/./src/pages/toggleMenu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
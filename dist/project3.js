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

/***/ "./src/project3.js":
/*!*************************!*\
  !*** ./src/project3.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _img_contact_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/contact-bg.png */ \"./src/img/contact-bg.png\");\n/* harmony import */ var _img_lt_pink_cube_half_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/lt-pink-cube-half.png */ \"./src/img/lt-pink-cube-half.png\");\n/* harmony import */ var _img_bg_footer_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/bg-footer.png */ \"./src/img/bg-footer.png\");\n\n\n\n // contact images\n\nvar contactBGImg = document.querySelector(\".contact__bg\");\n\nif (contactBGImg !== null) {\n  contactBGImg.src = _img_contact_bg_png__WEBPACK_IMPORTED_MODULE_1__;\n}\n\nvar contactBGImg2 = document.querySelector(\".contact__bg--lower\");\ncontactBGImg2.src = _img_lt_pink_cube_half_png__WEBPACK_IMPORTED_MODULE_2__; // footer images\n\nvar bgFooter = document.querySelector(\".footer\");\n\nif (bgFooter !== null) {\n  bgFooter.style.backgroundImage = \"url(\\\"\".concat(_img_bg_footer_png__WEBPACK_IMPORTED_MODULE_3__, \"\\\")\");\n}\n\n//# sourceURL=webpack://portfolio/./src/project3.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/styles/main.scss?");

/***/ }),

/***/ "./src/img/bg-footer.png":
/*!*******************************!*\
  !*** ./src/img/bg-footer.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dist/bg-footer.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-footer.png?");

/***/ }),

/***/ "./src/img/contact-bg.png":
/*!********************************!*\
  !*** ./src/img/contact-bg.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dist/contact-bg.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/contact-bg.png?");

/***/ }),

/***/ "./src/img/lt-pink-cube-half.png":
/*!***************************************!*\
  !*** ./src/img/lt-pink-cube-half.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dist/lt-pink-cube-half.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/lt-pink-cube-half.png?");

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
/******/ 			// no module.id needed
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/project3.js");
/******/ 	
/******/ })()
;
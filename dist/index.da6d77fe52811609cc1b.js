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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _img_bg_mobile_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/bg-mobile.png */ \"./src/img/bg-mobile.png\");\n/* harmony import */ var _img_bg_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/bg-menu.png */ \"./src/img/bg-menu.png\");\n/* harmony import */ var _img_blue_bg_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/blue-bg.svg */ \"./src/img/blue-bg.svg\");\n/* harmony import */ var _img_hero_bg_shapes_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/hero-bg-shapes.png */ \"./src/img/hero-bg-shapes.png\");\n/* harmony import */ var _img_bg_figure_orange_ball_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/bg-figure-orange-ball.png */ \"./src/img/bg-figure-orange-ball.png\");\n/* harmony import */ var _img_designo_preview_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/designo-preview.png */ \"./src/img/designo-preview.png\");\n/* harmony import */ var _img_audiophile_preview_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/audiophile-preview.png */ \"./src/img/audiophile-preview.png\");\n/* harmony import */ var _img_bg_figure_pink_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/bg-figure-pink.png */ \"./src/img/bg-figure-pink.png\");\n/* harmony import */ var _img_lt_pink_cube_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/lt-pink-cube.png */ \"./src/img/lt-pink-cube.png\");\n/* harmony import */ var _img_lt_pink_cube_half_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/lt-pink-cube-half.png */ \"./src/img/lt-pink-cube-half.png\");\n/* harmony import */ var _img_bg_figure_purple_ball_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/bg-figure-purple-ball.png */ \"./src/img/bg-figure-purple-ball.png\");\n/* harmony import */ var _img_white_cube_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/white-cube.png */ \"./src/img/white-cube.png\");\n/* harmony import */ var _img_white_cube_lg_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/white-cube-lg.png */ \"./src/img/white-cube-lg.png\");\n/* harmony import */ var _img_purple_cube_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/purple-cube.png */ \"./src/img/purple-cube.png\");\n/* harmony import */ var _img_blue_cube_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/blue-cube.png */ \"./src/img/blue-cube.png\");\n/* harmony import */ var _img_contact_bg_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/contact-bg.png */ \"./src/img/contact-bg.png\");\n/* harmony import */ var _img_bg_footer_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/bg-footer.png */ \"./src/img/bg-footer.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // menu background\n\nvar mobileBG = document.querySelector(\".mobile-nav\");\nmobileBG.style.backgroundImage = \"url(\\\"\".concat(_img_bg_mobile_png__WEBPACK_IMPORTED_MODULE_1__, \"\\\")\");\nvar menuBG = document.querySelector(\".main-menu__bg\");\nmenuBG.src = _img_bg_menu_png__WEBPACK_IMPORTED_MODULE_2__; // hero images\n\nvar heroImg = document.querySelector(\".hero__img\");\nheroImg.src = _img_blue_bg_svg__WEBPACK_IMPORTED_MODULE_3__;\nvar heroFigs = document.querySelector(\".hero__shapes\");\nheroFigs.src = _img_hero_bg_shapes_png__WEBPACK_IMPORTED_MODULE_4__;\nvar smWhiteCube = document.querySelector(\".hero__bg-cube-sm\");\nsmWhiteCube.src = _img_white_cube_png__WEBPACK_IMPORTED_MODULE_12__;\nvar lgWhiteCube = document.querySelector(\".hero__bg-cube-lg\");\nlgWhiteCube.src = _img_white_cube_lg_png__WEBPACK_IMPORTED_MODULE_13__; // What I Do figures\n\nvar whatIDoCube = document.querySelector(\".what-i-do__pink-cube\");\nwhatIDoCube.src = _img_lt_pink_cube_png__WEBPACK_IMPORTED_MODULE_9__;\nvar whatIDoCubeWhiteSm = document.querySelector(\".what-i-do__white-cube--sm\");\nwhatIDoCubeWhiteSm.src = _img_white_cube_png__WEBPACK_IMPORTED_MODULE_12__;\nvar whatIDoCubeWhite = document.querySelector(\".what-i-do__white-cube\");\nwhatIDoCubeWhite.src = _img_white_cube_lg_png__WEBPACK_IMPORTED_MODULE_13__; // About me section images\n\nvar leftAboutMeCube = document.querySelector(\".about-me__purple-cube--left\");\nleftAboutMeCube.src = _img_purple_cube_png__WEBPACK_IMPORTED_MODULE_14__;\nvar rightAboutMeCube = document.querySelector(\".about-me__purple-cube--right\");\nrightAboutMeCube.src = _img_purple_cube_png__WEBPACK_IMPORTED_MODULE_14__;\nvar aboutMeOrangeBall = document.querySelector(\".about-me__orange-ball\");\naboutMeOrangeBall.src = _img_bg_figure_orange_ball_png__WEBPACK_IMPORTED_MODULE_5__;\nvar aboutMePinkCube = document.querySelector(\".about-me__pink-cube\");\naboutMePinkCube.src = _img_bg_figure_pink_png__WEBPACK_IMPORTED_MODULE_8__;\nvar aboutMeBlueCube = document.querySelector(\".about-me__blue-cube\");\naboutMeBlueCube.src = _img_blue_cube_png__WEBPACK_IMPORTED_MODULE_15__;\nvar aboutMePurpleBall = document.querySelector(\".about-me__purple-ball\");\naboutMePurpleBall.src = _img_bg_figure_purple_ball_png__WEBPACK_IMPORTED_MODULE_11__;\nvar aboutMePurpleBall2 = document.querySelector(\".about-me__purple-ball--second\");\naboutMePurpleBall2.src = _img_bg_figure_purple_ball_png__WEBPACK_IMPORTED_MODULE_11__; // Work Images\n\nvar workCube = document.querySelector(\".work__bg-cube\");\nworkCube.src = _img_lt_pink_cube_png__WEBPACK_IMPORTED_MODULE_9__;\nvar designoPreviewImg = document.querySelector(\".designoImg\");\ndesignoPreviewImg.src = _img_designo_preview_png__WEBPACK_IMPORTED_MODULE_6__;\nvar audiophilePreviewImg = document.querySelector(\".audiophileImg\");\naudiophilePreviewImg.src = _img_audiophile_preview_png__WEBPACK_IMPORTED_MODULE_7__; // contact images\n\nvar contactBGImg = document.querySelector(\".contact__bg\");\ncontactBGImg.src = _img_contact_bg_png__WEBPACK_IMPORTED_MODULE_16__;\nvar contactBGImg2 = document.querySelector(\".contact__bg--lower\");\ncontactBGImg2.src = _img_lt_pink_cube_half_png__WEBPACK_IMPORTED_MODULE_10__; // footer images\n\nvar bgFooter = document.querySelector(\".footer\");\nbgFooter.style.backgroundImage = \"url(\\\"\".concat(_img_bg_footer_png__WEBPACK_IMPORTED_MODULE_17__, \"\\\")\"); // burger menu toggle\n\nvar openedBurgerMobile = document.querySelector(\".mobile-burger\");\nvar openedBurger = document.querySelector(\".main-menu__burger\");\nvar closedBurgerMobile = document.querySelector(\".header__burger-menu--mobile\"); // const burgerLines = document.querySelectorAll(\".burger__line\");\n\nvar closedBurger = document.querySelector(\".header__burger-menu--main\");\nvar menuList = document.querySelector(\".main-menu__content\");\nvar mobileMenuList = document.querySelector(\".mobile-nav__content\");\nvar burgerMenuContainer = document.querySelector(\".burger__menu-container\");\n\nvar toggleVisibility = function toggleVisibility(element) {\n  document.body.classList.toggle(\"no-scroll\");\n\n  for (var _len = arguments.length, className = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    className[_key - 1] = arguments[_key];\n  }\n\n  className.map(function (className) {\n    return element.classList.toggle(className);\n  });\n};\n\n[openedBurgerMobile, openedBurger, closedBurgerMobile, closedBurger, menuList, mobileMenuList].forEach(function (element) {\n  element.addEventListener(\"click\", toggleVisibility.bind(null, burgerMenuContainer, \"hidden\", \"burger__menu--open\"));\n});\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/styles/main.scss?");

/***/ }),

/***/ "./src/img/audiophile-preview.png":
/*!****************************************!*\
  !*** ./src/img/audiophile-preview.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/audiophile-preview.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/audiophile-preview.png?");

/***/ }),

/***/ "./src/img/bg-figure-orange-ball.png":
/*!*******************************************!*\
  !*** ./src/img/bg-figure-orange-ball.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/bg-figure-orange-ball.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-figure-orange-ball.png?");

/***/ }),

/***/ "./src/img/bg-figure-pink.png":
/*!************************************!*\
  !*** ./src/img/bg-figure-pink.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/bg-figure-pink.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-figure-pink.png?");

/***/ }),

/***/ "./src/img/bg-figure-purple-ball.png":
/*!*******************************************!*\
  !*** ./src/img/bg-figure-purple-ball.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/bg-figure-purple-ball.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-figure-purple-ball.png?");

/***/ }),

/***/ "./src/img/bg-footer.png":
/*!*******************************!*\
  !*** ./src/img/bg-footer.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/bg-footer.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-footer.png?");

/***/ }),

/***/ "./src/img/bg-menu.png":
/*!*****************************!*\
  !*** ./src/img/bg-menu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/bg-menu.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-menu.png?");

/***/ }),

/***/ "./src/img/bg-mobile.png":
/*!*******************************!*\
  !*** ./src/img/bg-mobile.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/bg-mobile.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-mobile.png?");

/***/ }),

/***/ "./src/img/blue-bg.svg":
/*!*****************************!*\
  !*** ./src/img/blue-bg.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/blue-bg.svg\";\n\n//# sourceURL=webpack://portfolio/./src/img/blue-bg.svg?");

/***/ }),

/***/ "./src/img/blue-cube.png":
/*!*******************************!*\
  !*** ./src/img/blue-cube.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/blue-cube.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/blue-cube.png?");

/***/ }),

/***/ "./src/img/contact-bg.png":
/*!********************************!*\
  !*** ./src/img/contact-bg.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/contact-bg.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/contact-bg.png?");

/***/ }),

/***/ "./src/img/designo-preview.png":
/*!*************************************!*\
  !*** ./src/img/designo-preview.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/designo-preview.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/designo-preview.png?");

/***/ }),

/***/ "./src/img/hero-bg-shapes.png":
/*!************************************!*\
  !*** ./src/img/hero-bg-shapes.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/hero-bg-shapes.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/hero-bg-shapes.png?");

/***/ }),

/***/ "./src/img/lt-pink-cube-half.png":
/*!***************************************!*\
  !*** ./src/img/lt-pink-cube-half.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/lt-pink-cube-half.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/lt-pink-cube-half.png?");

/***/ }),

/***/ "./src/img/lt-pink-cube.png":
/*!**********************************!*\
  !*** ./src/img/lt-pink-cube.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/lt-pink-cube.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/lt-pink-cube.png?");

/***/ }),

/***/ "./src/img/purple-cube.png":
/*!*********************************!*\
  !*** ./src/img/purple-cube.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/purple-cube.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/purple-cube.png?");

/***/ }),

/***/ "./src/img/white-cube-lg.png":
/*!***********************************!*\
  !*** ./src/img/white-cube-lg.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/white-cube-lg.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/white-cube-lg.png?");

/***/ }),

/***/ "./src/img/white-cube.png":
/*!********************************!*\
  !*** ./src/img/white-cube.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/white-cube.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/white-cube.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"src_styles_main_scss-src_styles_main_scss": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_styles_main_scss-src_styles_main_scss"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
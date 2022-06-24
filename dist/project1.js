/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/img/bg-footer.png":
/*!*******************************!*\
  !*** ./src/img/bg-footer.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dist/bg-footer.png";

/***/ }),

/***/ "./src/img/bg-menu.png":
/*!*****************************!*\
  !*** ./src/img/bg-menu.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dist/bg-menu.png";

/***/ }),

/***/ "./src/img/bg-mobile.png":
/*!*******************************!*\
  !*** ./src/img/bg-mobile.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dist/bg-mobile.png";

/***/ }),

/***/ "./src/img/contact-bg.png":
/*!********************************!*\
  !*** ./src/img/contact-bg.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dist/contact-bg.png";

/***/ }),

/***/ "./src/img/discover-bg.png":
/*!*********************************!*\
  !*** ./src/img/discover-bg.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dist/discover-bg.png";

/***/ }),

/***/ "./src/img/lt-pink-cube-half.png":
/*!***************************************!*\
  !*** ./src/img/lt-pink-cube-half.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dist/lt-pink-cube-half.png";

/***/ }),

/***/ "./src/img/showtrackr.jpg":
/*!********************************!*\
  !*** ./src/img/showtrackr.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dist/showtrackr.jpg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/project1.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _img_bg_mobile_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/bg-mobile.png */ "./src/img/bg-mobile.png");
/* harmony import */ var _img_bg_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/bg-menu.png */ "./src/img/bg-menu.png");
/* harmony import */ var _img_contact_bg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/contact-bg.png */ "./src/img/contact-bg.png");
/* harmony import */ var _img_lt_pink_cube_half_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/lt-pink-cube-half.png */ "./src/img/lt-pink-cube-half.png");
/* harmony import */ var _img_discover_bg_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/discover-bg.png */ "./src/img/discover-bg.png");
/* harmony import */ var _img_bg_footer_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/bg-footer.png */ "./src/img/bg-footer.png");
/* harmony import */ var _img_showtrackr_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/showtrackr.jpg */ "./src/img/showtrackr.jpg");







 // menu background

var mobileBG = document.querySelector(".mobile-nav");
mobileBG.style.backgroundImage = "url(\"".concat(_img_bg_mobile_png__WEBPACK_IMPORTED_MODULE_1__, "\")");
var menuBG = document.querySelector(".main-menu__bg");
menuBG.src = _img_bg_menu_png__WEBPACK_IMPORTED_MODULE_2__; // contact images

var contactBGImg = document.querySelector(".contact__bg");
contactBGImg.src = _img_contact_bg_png__WEBPACK_IMPORTED_MODULE_3__;
var contactBGImg2 = document.querySelector(".contact__bg--lower");
contactBGImg2.src = _img_lt_pink_cube_half_png__WEBPACK_IMPORTED_MODULE_4__; // project image

var project1Img = document.querySelector(".project__img--first");
project1Img.style.backgroundImage = "url(\"".concat(_img_showtrackr_jpg__WEBPACK_IMPORTED_MODULE_7__, "\")");
var projectBGImg = document.querySelector(".project__discover-img");
projectBGImg.style.backgroundImage = "url(\"".concat(_img_showtrackr_jpg__WEBPACK_IMPORTED_MODULE_7__, "\")");
var projectBGFig = document.querySelector(".project__discover-img--figure");
projectBGFig.src = _img_discover_bg_png__WEBPACK_IMPORTED_MODULE_5__; // footer images

var bgFooter = document.querySelector(".footer");
bgFooter.style.backgroundImage = "url(\"".concat(_img_bg_footer_png__WEBPACK_IMPORTED_MODULE_6__, "\")"); // burger menu toggle

var openedBurgerMobile = document.querySelector(".mobile-burger");
var openedBurger = document.querySelector(".main-menu__burger");
var closedBurgerMobile = document.querySelector(".header__burger-menu--mobile");
var closedBurger = document.querySelector(".header__burger-menu--main");
var menuList = document.querySelector(".main-menu__content");
var mobileMenuList = document.querySelector(".mobile-nav__content");
var burgerMenuContainer = document.querySelector(".burger__menu-container");

var toggleVisibility = function toggleVisibility(element) {
  document.body.classList.toggle("no-scroll");

  for (var _len = arguments.length, className = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    className[_key - 1] = arguments[_key];
  }

  className.map(function (className) {
    return element.classList.toggle(className);
  });
};

[openedBurgerMobile, openedBurger, closedBurgerMobile, closedBurger, menuList, mobileMenuList].forEach(function (element) {
  element.addEventListener("click", toggleVisibility.bind(null, burgerMenuContainer, "hidden", "burger__menu--open"));
});
})();

/******/ })()
;
//# sourceMappingURL=project1.js.map
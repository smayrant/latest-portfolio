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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _img_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.svg */ \"./src/img/logo.svg\");\n/* harmony import */ var _img_scroll_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/scroll-icon.svg */ \"./src/img/scroll-icon.svg\");\n/* harmony import */ var _img_blue_bg_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/blue-bg.svg */ \"./src/img/blue-bg.svg\");\n/* harmony import */ var _img_bg_figure_blue_ball_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/bg-figure-blue-ball.png */ \"./src/img/bg-figure-blue-ball.png\");\n/* harmony import */ var _img_bg_figure_lt_blue_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/bg-figure-lt-blue.png */ \"./src/img/bg-figure-lt-blue.png\");\n/* harmony import */ var _img_bg_figure_orange_ball_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/bg-figure-orange-ball.png */ \"./src/img/bg-figure-orange-ball.png\");\n/* harmony import */ var _img_bg_figure_pink_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/bg-figure-pink.png */ \"./src/img/bg-figure-pink.png\");\n/* harmony import */ var _img_bg_figure_purple_ball_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/bg-figure-purple-ball.png */ \"./src/img/bg-figure-purple-ball.png\");\n/* harmony import */ var _img_bg_figure_purple_base_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/bg-figure-purple-base.png */ \"./src/img/bg-figure-purple-base.png\");\n/* harmony import */ var _img_bg_figure_purple_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/bg-figure-purple.png */ \"./src/img/bg-figure-purple.png\");\n/* harmony import */ var _img_bg_figure_yellow_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/bg-figure-yellow.png */ \"./src/img/bg-figure-yellow.png\");\n/* harmony import */ var _img_hero_cube_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/hero-cube.png */ \"./src/img/hero-cube.png\");\n/* harmony import */ var _img_hero_cube_lg_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/hero-cube-lg.png */ \"./src/img/hero-cube-lg.png\");\n/* harmony import */ var _img_arrow_right_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/arrow-right.svg */ \"./src/img/arrow-right.svg\");\n/* harmony import */ var _img_purple_cube_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/purple-cube.png */ \"./src/img/purple-cube.png\");\n/* harmony import */ var _img_blue_cube_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/blue-cube.png */ \"./src/img/blue-cube.png\");\n/* harmony import */ var _img_showtrackr_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/showtrackr.jpg */ \"./src/img/showtrackr.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // header images\n\nvar logoImg = document.querySelector(\".header__logo\");\nlogoImg.src = _img_logo_svg__WEBPACK_IMPORTED_MODULE_1__; // hero images\n\nvar scrollImg = document.querySelector(\".scroll__img\");\nscrollImg.src = _img_scroll_icon_svg__WEBPACK_IMPORTED_MODULE_2__;\nvar heroBG = document.querySelector(\".hero\");\nheroBG.style.backgroundImage = \"url(\\\"\".concat(_img_blue_bg_svg__WEBPACK_IMPORTED_MODULE_3__, \"\\\")\"); // hero figures\n\nvar blueBallFig = document.querySelector(\".blue-ball-fig\");\nblueBallFig.src = _img_bg_figure_blue_ball_png__WEBPACK_IMPORTED_MODULE_4__;\nvar ltBlueFig = document.querySelector(\".lt-blue-fig\");\nltBlueFig.src = _img_bg_figure_lt_blue_png__WEBPACK_IMPORTED_MODULE_5__;\nvar orangeBallFig = document.querySelector(\".orange-ball-fig\");\norangeBallFig.src = _img_bg_figure_orange_ball_png__WEBPACK_IMPORTED_MODULE_6__;\nvar pinkCube = document.querySelector(\".pink-fig\");\npinkCube.src = _img_bg_figure_pink_png__WEBPACK_IMPORTED_MODULE_7__;\nvar purpleBallFig = document.querySelector(\".purple-ball-fig\");\npurpleBallFig.src = _img_bg_figure_purple_ball_png__WEBPACK_IMPORTED_MODULE_8__;\nvar purpleBaseFig = document.querySelector(\".purple-base-fig\");\npurpleBaseFig.src = _img_bg_figure_purple_base_png__WEBPACK_IMPORTED_MODULE_9__;\nvar ltPurpleFig = document.querySelector(\".purple-fig\");\nltPurpleFig.src = _img_bg_figure_purple_png__WEBPACK_IMPORTED_MODULE_10__;\nvar yellowBlock = document.querySelector(\".yellow-fig\");\nyellowBlock.src = _img_bg_figure_yellow_png__WEBPACK_IMPORTED_MODULE_11__;\nvar smWhiteCube = document.querySelector(\".hero__bg-cube-sm\");\nsmWhiteCube.src = _img_hero_cube_png__WEBPACK_IMPORTED_MODULE_12__;\nvar lgWhiteCube = document.querySelector(\".hero__bg-cube-lg\");\nlgWhiteCube.src = _img_hero_cube_lg_png__WEBPACK_IMPORTED_MODULE_13__; // What I Do figures\n\nvar whatIDoCube = document.querySelector(\".what-i-do__pink-cube\");\nwhatIDoCube.src = _img_bg_figure_pink_png__WEBPACK_IMPORTED_MODULE_7__;\nvar whatIDoCubeWhite = document.querySelector(\".what-i-do__white-cube\");\nwhatIDoCubeWhite.src = _img_hero_cube_lg_png__WEBPACK_IMPORTED_MODULE_13__; // Right Arrow Icon for Buttons\n\nvar rtArrow = document.querySelector(\".btn-arrow\");\nrtArrow.src = _img_arrow_right_svg__WEBPACK_IMPORTED_MODULE_14__; // About me section images\n\nvar leftAboutMeCube = document.querySelector(\".about-me__purple-cube--left\");\nleftAboutMeCube.src = _img_purple_cube_png__WEBPACK_IMPORTED_MODULE_15__;\nvar rightAboutMeCube = document.querySelector(\".about-me__purple-cube--right\");\nrightAboutMeCube.src = _img_purple_cube_png__WEBPACK_IMPORTED_MODULE_15__;\nvar aboutMeOrangeBall = document.querySelector(\".about-me__orange-ball\");\naboutMeOrangeBall.src = _img_bg_figure_orange_ball_png__WEBPACK_IMPORTED_MODULE_6__;\nvar aboutMePinkCube = document.querySelector(\".about-me__pink-cube\");\naboutMePinkCube.src = _img_bg_figure_pink_png__WEBPACK_IMPORTED_MODULE_7__;\nvar aboutMeBlueCube = document.querySelector(\".about-me__blue-cube\");\naboutMeBlueCube.src = _img_blue_cube_png__WEBPACK_IMPORTED_MODULE_16__; // Work Images\n\nvar showtrackr = document.querySelector(\".work__item-img\");\nshowtrackr.src = _img_showtrackr_jpg__WEBPACK_IMPORTED_MODULE_17__;\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portfolio/./src/styles/main.scss?");

/***/ }),

/***/ "./src/img/arrow-right.svg":
/*!*********************************!*\
  !*** ./src/img/arrow-right.svg ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgOEgyMSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE0IDFMMjEgOEwxNCAxNSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==\";\n\n//# sourceURL=webpack://portfolio/./src/img/arrow-right.svg?");

/***/ }),

/***/ "./src/img/bg-figure-blue-ball.png":
/*!*****************************************!*\
  !*** ./src/img/bg-figure-blue-ball.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bg-figure-blue-ball.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-figure-blue-ball.png?");

/***/ }),

/***/ "./src/img/bg-figure-lt-blue.png":
/*!***************************************!*\
  !*** ./src/img/bg-figure-lt-blue.png ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAADeCAMAAAB2bg5xAAAC7lBMVEUAAAC75f/6///m/P/R8v+95//p+/654//T///N+/+85f+85v/P/f+64/+85f+85f/J8//N+P++6P+54//L9//8//++5f+75f+75P/R+v/7///8//+/6P/L9v/O+/++6f/6///7///N+f+64v/P/P/O+//6///a+v/L9//M+P/I8v/K8//u/f+/6v/O/P/7//++5//7///7///I8v/5///P/P/7///6///5///L+P/L+P/M+P/M+f/5///N+f+95v/M+P/4///J9v+/6f/N+//8///M+f/6///5///L9//5///L9//4///4///K9f/M9//4///7///8///7///L9//L+P/L9//4//+95//N+f/M+P/5///4///4///4///3///M9//J9v/Q/f/O/P/7///9//+/6v/M+f/6///5///3///4///4///5///2///J8//5///4//+/6P/8///A6v/6///7///K9//5///5///4///5///4///O+P/3///4///N+f/8///6///M+P/M+f/L+P+95f/K9//4///K9//L9//3///4///M+P+85P/M+P/M9//M9//3///A6v/+//+/6f/M+f+/6P++5v/M+f/M+P/M+f+85//M+f/N+v/Q+f/T+P/Q/f/8//++6P++6P+85f/6//+85v++5v/M9//N+f++5f+75v/t/f/H6//L+P/3///d+f/N+v/4///r+v/M+f/D7P/M+//4///K9v/L9//3//+64v+75P+54v/J9/+85f+54f/M+f/J9v+95v/G8f/2//+95f/y///1///y/f/0//++5/+/6P/N9//v///h/P/p/v/r+v/U+P/Q+P/H8//E6f/A5v/0/f/U8f/L7P/I6//w/f/C5//Z+v/N+v/Y8v/c+//j+P/m+P/f9//A6f/o+v/b9f/R8P/O7v/l/f/t/P/Q/f/d9P/v+//W+v/R+P/6///e/P+64f/s/v/r/v/U+v/i9f/Q7P/j/P/wdmdeAAAAuHRSTlMACP0DBukJcALw6ML8c0bAGxHFQvvzSHVED/jqxxT+/fr29D/57R0N/fgmGQv79+3r488hEf7736uqkX48FeHDhV0p9unm0bu3paGaSCwjHhnW0sifi4mIhYJ5bWNCNjMx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\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-figure-lt-blue.png?");

/***/ }),

/***/ "./src/img/bg-figure-orange-ball.png":
/*!*******************************************!*\
  !*** ./src/img/bg-figure-orange-ball.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bg-figure-orange-ball.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-figure-orange-ball.png?");

/***/ }),

/***/ "./src/img/bg-figure-pink.png":
/*!************************************!*\
  !*** ./src/img/bg-figure-pink.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bg-figure-pink.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-figure-pink.png?");

/***/ }),

/***/ "./src/img/bg-figure-purple-ball.png":
/*!*******************************************!*\
  !*** ./src/img/bg-figure-purple-ball.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bg-figure-purple-ball.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-figure-purple-ball.png?");

/***/ }),

/***/ "./src/img/bg-figure-purple-base.png":
/*!*******************************************!*\
  !*** ./src/img/bg-figure-purple-base.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bg-figure-purple-base.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-figure-purple-base.png?");

/***/ }),

/***/ "./src/img/bg-figure-purple.png":
/*!**************************************!*\
  !*** ./src/img/bg-figure-purple.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bg-figure-purple.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-figure-purple.png?");

/***/ }),

/***/ "./src/img/bg-figure-yellow.png":
/*!**************************************!*\
  !*** ./src/img/bg-figure-yellow.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bg-figure-yellow.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/bg-figure-yellow.png?");

/***/ }),

/***/ "./src/img/blue-bg.svg":
/*!*****************************!*\
  !*** ./src/img/blue-bg.svg ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjI2IiBoZWlnaHQ9IjM3MCIgdmlld0JveD0iMCAwIDIyNiAzNzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAxMjQuODg5TDIyNiAwVjM3MEgwVjEyNC44ODlaIiBmaWxsPSIjMUIxQjg3Ii8+Cjwvc3ZnPgo=\";\n\n//# sourceURL=webpack://portfolio/./src/img/blue-bg.svg?");

/***/ }),

/***/ "./src/img/blue-cube.png":
/*!*******************************!*\
  !*** ./src/img/blue-cube.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"blue-cube.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/blue-cube.png?");

/***/ }),

/***/ "./src/img/hero-cube-lg.png":
/*!**********************************!*\
  !*** ./src/img/hero-cube-lg.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"hero-cube-lg.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/hero-cube-lg.png?");

/***/ }),

/***/ "./src/img/hero-cube.png":
/*!*******************************!*\
  !*** ./src/img/hero-cube.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"hero-cube.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/hero-cube.png?");

/***/ }),

/***/ "./src/img/logo.svg":
/*!**************************!*\
  !*** ./src/img/logo.svg ***!
  \**************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAzNCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTEuMjE4OCIgd2lkdGg9IjIyIiBoZWlnaHQ9IjExLjIxODQiIHRyYW5zZm9ybT0icm90YXRlKDkwIDExLjIxODggMCkiIGZpbGw9IiNGRkJEQkQiLz4KPGVsbGlwc2UgY3g9IjIyLjQzNzEiIGN5PSIxMSIgcng9IjExLjIxODQiIHJ5PSIxMSIgZmlsbD0iIzRDNDBGNyIvPgo8L3N2Zz4K\";\n\n//# sourceURL=webpack://portfolio/./src/img/logo.svg?");

/***/ }),

/***/ "./src/img/purple-cube.png":
/*!*********************************!*\
  !*** ./src/img/purple-cube.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"purple-cube.png\";\n\n//# sourceURL=webpack://portfolio/./src/img/purple-cube.png?");

/***/ }),

/***/ "./src/img/scroll-icon.svg":
/*!*********************************!*\
  !*** ./src/img/scroll-icon.svg ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIxIiBoZWlnaHQ9IjEyMiIgdmlld0JveD0iMCAwIDEyMSAxMjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTptdWx0aXBseSIgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl8xNzlfMzkzKSI+CjxlbGxpcHNlIGN4PSI2MCIgY3k9IjYwLjk1ODciIHJ4PSIyOCIgcnk9IjI4LjA0MTIiIGZpbGw9IiNFQ0VDRUMiLz4KPC9nPgo8ZWxsaXBzZSBjeD0iNjAiIGN5PSI0OS4wNDEyIiByeD0iMjgiIHJ5PSIyOC4wNDEyIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNjAuMDAwNCA1MS4xNDQzVjU2LjA1MTUiIHN0cm9rZT0iIzExMTAyOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYwLjAwMDQgNDYuOTM4MlY0Mi4wMzEiIHN0cm9rZT0iIzExMTAyOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTYyLjgwMDIgNTMuMjQ3Nkw2MC4wMDAyIDU2LjA1MTdMNTcuMjAwMiA1My4yNDc2IiBzdHJva2U9IiMxMTEwMjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01Ny4yMDAyIDQ0LjgzNTFMNjAuMDAwMiA0Mi4wMzFMNjIuODAwMiA0NC44MzUxIiBzdHJva2U9IiMxMTEwMjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik02NyA0OS4wNDE0SDUzIiBzdHJva2U9IiMxMTEwMjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2ZfMTc5XzM5MyIgeD0iLTAuNjE5MzgxIiB5PSIwLjI5ODEiIHdpZHRoPSIxMjEuMjM5IiBoZWlnaHQ9IjEyMS4zMjEiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTYuMzA5NyIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzE3OV8zOTMiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg==\";\n\n//# sourceURL=webpack://portfolio/./src/img/scroll-icon.svg?");

/***/ }),

/***/ "./src/img/showtrackr.jpg":
/*!********************************!*\
  !*** ./src/img/showtrackr.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"showtrackr.jpg\";\n\n//# sourceURL=webpack://portfolio/./src/img/showtrackr.jpg?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
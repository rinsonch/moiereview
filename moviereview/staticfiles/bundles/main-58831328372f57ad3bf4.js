/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Identifier directly after number (57:49)\n\n\u001b[0m \u001b[90m 55 | \u001b[39m\n \u001b[90m 56 | \u001b[39m    render(){\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 57 | \u001b[39m        \u001b[36mvar\u001b[39m style\u001b[33m=\u001b[39m{display\u001b[33m:\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m.\u001b[39mshow\u001b[33m,\u001b[39mtop\u001b[33m:\u001b[39m\u001b[35m50\u001b[39mpx\u001b[33m,\u001b[39mfloat\u001b[33m:\u001b[39mright\u001b[33m,\u001b[39mborder\u001b[33m:\u001b[39m\u001b[35m1\u001b[39mpx solid green}\n \u001b[90m    | \u001b[39m                                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 58 | \u001b[39m\u001b[90m//        var bookNodes = this.state.data.map(function(book){\u001b[39m\n \u001b[90m 59 | \u001b[39m\u001b[90m//            console.log(\"inside bookNodes\",book)\u001b[39m\n \u001b[90m 60 | \u001b[39m\u001b[90m//                return <li> {book.title} </li>\u001b[39m\u001b[0m\n");

/***/ })
/******/ ]);
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

throw new Error("Module build failed: SyntaxError: Unexpected token, expected , (223:12)\n\n\u001b[0m \u001b[90m 221 | \u001b[39m            cache\u001b[33m:\u001b[39m \u001b[36mfalse\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 222 | \u001b[39m            data\u001b[33m:\u001b[39m{\u001b[32m'year'\u001b[39m\u001b[33m:\u001b[39m\u001b[32m'year'\u001b[39m\u001b[33m,\u001b[39m\u001b[32m'category'\u001b[39m\u001b[33m:\u001b[39m\u001b[32m'select'\u001b[39m}\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 223 | \u001b[39m            success\u001b[33m:\u001b[39m \u001b[36mfunction\u001b[39m (data) {\n \u001b[90m     | \u001b[39m            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 224 | \u001b[39m                \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msetState({nameofdata\u001b[33m:\u001b[39mdata\u001b[33m.\u001b[39mresults\u001b[33m,\u001b[39mtotalpages\u001b[33m:\u001b[39mdata\u001b[33m.\u001b[39mcount})\n \u001b[90m 225 | \u001b[39m                console\u001b[33m.\u001b[39mlog(data\u001b[33m.\u001b[39mresults\u001b[33m,\u001b[39mdata\u001b[33m.\u001b[39mcount)\n \u001b[90m 226 | \u001b[39m            }\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m)\u001b[0m\n");

/***/ })
/******/ ]);
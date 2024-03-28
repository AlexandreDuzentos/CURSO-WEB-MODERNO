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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/principal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/estilo.css":
/*!***********************************!*\
  !*** ./src/assets/css/estilo.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/css/estilo.css?");

/***/ }),

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/estilo.css */ \"./src/assets/css/estilo.css\");\n/* harmony import */ var _css_estilo_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_estilo_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/assets/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n// importando um arquivo css que se deseja que o webpack enchergue, ou seja, que caia no radar dele\r\n\r\n\r\n// importando um arquivo css que se deseja que o webpack enchergue, ou seja, que caia no radar dele\r\n\n\n//# sourceURL=webpack:///./src/assets/index.js?");

/***/ }),

/***/ "./src/assets/scss/index.scss":
/*!************************************!*\
  !*** ./src/assets/scss/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/scss/index.scss?");

/***/ }),

/***/ "./src/modulos/moduloA.js":
/*!********************************!*\
  !*** ./src/modulos/moduloA.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduloB = __webpack_require__(/*! ./moduloB */ \"./src/modulos/moduloB.js\")\r\nconst { saudacao } = __webpack_require__(/*! ./moduloB */ \"./src/modulos/moduloB.js\") // desestruturando o objeto retornado pelo móduloB\r\n\r\nconsole.log(saudacao())\r\nconsole.log(moduloB.saudacao())\n\n//# sourceURL=webpack:///./src/modulos/moduloA.js?");

/***/ }),

/***/ "./src/modulos/moduloB.js":
/*!********************************!*\
  !*** ./src/modulos/moduloB.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** \r\n *  O sistema de módulos sendo usado aqui é o COMMONSJS, que é o módulo padrào usado dentro do\r\n *  módulo.\r\n * */\r\nmodule.exports = {\r\n    saudacao(){\r\n        return \"Olá eu sou o módulo B!!!!\"\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modulos/moduloB.js?");

/***/ }),

/***/ "./src/pessoa.js":
/*!***********************!*\
  !*** ./src/pessoa.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pessoa; });\n/**\r\n * Usando recursos do ECMASCRIPT 2015, como classes e um padrão do sistema de módulos do\r\n * ECMASCRIPT para exportar coisas para fora do módulo.\r\n * \r\n * O código abaixo não será interpretado nativamente pelo módulo, pois embora ele já suporte\r\n * o sistema de módulos do ECMASCRIPT 2015, para usá-lo é preciso fazer algumas configurações.\r\n * \r\n * */\r\n\r\nclass Pessoa {\r\n   cumprimentar(){\r\n      return \"Bom dia\"\r\n   }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/pessoa.js?");

/***/ }),

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ \"./src/pessoa.js\");\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets */ \"./src/assets/index.js\");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulos/moduloA */ \"./src/modulos/moduloA.js\");\n/* harmony import */ var _modulos_moduloA__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modulos_moduloA__WEBPACK_IMPORTED_MODULE_2__);\n/** importando um módulo usando o sistema de módulo do ECMASCRIPT 2015 */\r\n\r\n\r\n/** \r\n * Por padrão o sistema de módulo importará o arquivo index.js de dentro da pasta assets, e ele por sua vez importará os outros\r\n * arquivos referênciados dentro dele.\r\n */\r\n\r\n\r\n// importando um arquivo js que se deseja que o webpack enchergue ou seja, que caia no radar dele.\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\nconst atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n\r\nconsole.log(atendente.cumprimentar())\n\n//# sourceURL=webpack:///./src/principal.js?");

/***/ })

/******/ });
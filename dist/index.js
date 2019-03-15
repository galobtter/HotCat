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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./modules/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/getEditableCategories.js":
/*!******************************************!*\
  !*** ./modules/getEditableCategories.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nfunction getEditableCategories(Api, title) {\n\tvar apiEditableCategories = false;\n\tif (apiEditableCategories) {\n\t\t// use that api\n\t} else {\n\t\t// FIXME - this is just an initial quick regex for testing purposes\n\t\tvar categoryRegex = /\\[\\[\\s*[Cc]ategory:(.*?)\\s*\\]\\]/g;\n\n\t\tvar pageText = Api.get({\n\t\t\taction: 'query',\n\t\t\tprop: 'revisions',\n\t\t\ttitles: title,\n\t\t\trvprop: 'content',\n\t\t\trvslots: 'main',\n\t\t\tformatversion: 2\n\t\t});\n\n\t\t// pageText.match( categoryRegex );\n\t}\n\n\treturn 'foo';\n}\n\nexports.default = getEditableCategories;\n\n//# sourceURL=webpack:///./modules/getEditableCategories.js?");

/***/ }),

/***/ "./modules/index.js":
/*!**************************!*\
  !*** ./modules/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _getEditableCategories = __webpack_require__(/*! ../modules/getEditableCategories.js */ \"./modules/getEditableCategories.js\");\n\nvar _getEditableCategories2 = _interopRequireDefault(_getEditableCategories);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* function initUpload() {\n\n}*/\n\nfunction initPage($content, Api, title) {\n\tvar editableCategories = (0, _getEditableCategories2.default)(Api, title);\n\t$content.find('.mw-normal-catlinks li').append(' (+)');\n}\n\nfunction init() {\n\tmw.hook('wikipage.categories').add(initPage); // FIXME exclude previews/only on view? allowing editing on preview prolly won't work\n\t// mw.hook( 'wikipage.categories' ).fire();\n}\nvar title = mw.config.get('wgPageName');\nvar namespace = mw.config.get('wgNameSpacwgNamespaceNumber');\nvar badNamespace = [-1, 8, // MediaWiki\n10, // Template\n710, // TimedText\n828, // Module\n2300, // Gadget\n2302 // Gadget definition\n].indexOf(namespace) !== -1;\nvar specialUpload = title === 'Upload';\n\nif (mw.config.get('wgIsProbablyEditable') && mw.config.get('wgArticleId') !== 0 && !badNamespace // documented difference to previous hotcat - does not load on nonexistant pages\n) {\n\t\tmw.loader.using(['mediawiki.api']).then(function () {\n\t\t\tvar Api = new mw.Api({\n\t\t\t\tajax: {\n\t\t\t\t\theaders: {\n\t\t\t\t\t\t'Api-User-Agent': 'HotCat (mw:Extension:HotCat)'\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t\tinit;\n\t\t});\n\t}\n\n//# sourceURL=webpack:///./modules/index.js?");

/***/ })

/******/ });
window["wp"] = window["wp"] || {}; window["wp"]["main"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block.scss":
/*!************************!*\
  !*** ./src/block.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://wp.%5Bname%5D/./src/block.scss?");

/***/ }),

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.scss */ \"./src/block.scss\");\n/* harmony import */ var _block_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_block_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ \"./src/editor.scss\");\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _blocks_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/button.js */ \"./src/blocks/button.js\");\n\n\n\n\nObject(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__[\"registerBlockType\"])(_blocks_button_js__WEBPACK_IMPORTED_MODULE_3__[\"name\"], _blocks_button_js__WEBPACK_IMPORTED_MODULE_3__[\"settings\"]);\n\n//# sourceURL=webpack://wp.%5Bname%5D/./src/blocks.js?");

/***/ }),

/***/ "./src/blocks/button.js":
/*!******************************!*\
  !*** ./src/blocks/button.js ***!
  \******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ \"@wordpress/editor\");\n/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst colors = ['Black', 'Gray', 'Red', 'Yellow', 'Blue', 'Purple'];\nconst name = 'limeguten/button';\nconst settings = {\n  title: 'Button',\n  icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"SVG\"], {\n    viewBox: \"0 0 24 24\",\n    xmlns: \"http://www.w3.org/2000/svg\"\n  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"Path\"], {\n    fill: \"none\",\n    d: \"M0 0h24v24H0V0z\"\n  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"G\"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__[\"Path\"], {\n    d: \"M19 6H5L3 8v8l2 2h14l2-2V8l-2-2zm0 10H5V8h14v8z\"\n  }))),\n  category: 'limecuda',\n\n  /**\n   * I like how `default` doesn't seem to be mentioned anywhere in the docs.\n   */\n  attributes: {\n    text: {\n      type: 'string',\n      default: ''\n    },\n    url: {\n      type: 'string',\n      default: ''\n    }\n  },\n  styles: colors.map((color, index) => {\n    return {\n      name: color.toLowerCase().replace(' ', '-'),\n      label: color,\n      isDefault: 0 === index ? true : false\n    };\n  }),\n\n  edit({\n    attributes,\n    className,\n    setAttributes\n  }) {\n    const {\n      url,\n      text\n    } = attributes;\n\n    let changeText = text => setAttributes({\n      text: text\n    });\n\n    let changeUrl = (url, post) => setAttributes({\n      url,\n      text: post && post.title || attributes.text\n    });\n\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: className\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__[\"PlainText\"], {\n      onChange: changeText,\n      value: text,\n      placeholder: 'Click here...'\n    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__[\"URLInput\"], {\n      className: className,\n      onChange: changeUrl,\n      value: attributes.url\n    }));\n  },\n\n  save({\n    attributes,\n    className\n  }) {\n    const {\n      url,\n      text\n    } = attributes;\n    /**\n     * I don't know why the <Button> element doesn't work here when it\n     * works in the `edit()` function. A mystery that will never be\n     * solved.\n     */\n\n    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n      className: className\n    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"a\", {\n      className: 'button',\n      href: url\n    }, text));\n  }\n\n};\n\n//# sourceURL=webpack://wp.%5Bname%5D/./src/blocks/button.js?");

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://wp.%5Bname%5D/./src/editor.scss?");

/***/ }),

/***/ "@wordpress/blocks":
/*!*******************************************!*\
  !*** external {"window":["wp","blocks"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"blocks\"]; }());\n\n//# sourceURL=webpack://wp.%5Bname%5D/external_%7B%22window%22:%5B%22wp%22,%22blocks%22%5D%7D?");

/***/ }),

/***/ "@wordpress/components":
/*!***********************************************!*\
  !*** external {"window":["wp","components"]} ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"components\"]; }());\n\n//# sourceURL=webpack://wp.%5Bname%5D/external_%7B%22window%22:%5B%22wp%22,%22components%22%5D%7D?");

/***/ }),

/***/ "@wordpress/editor":
/*!*******************************************!*\
  !*** external {"window":["wp","editor"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"editor\"]; }());\n\n//# sourceURL=webpack://wp.%5Bname%5D/external_%7B%22window%22:%5B%22wp%22,%22editor%22%5D%7D?");

/***/ }),

/***/ "@wordpress/element":
/*!********************************************!*\
  !*** external {"window":["wp","element"]} ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"element\"]; }());\n\n//# sourceURL=webpack://wp.%5Bname%5D/external_%7B%22window%22:%5B%22wp%22,%22element%22%5D%7D?");

/***/ })

/******/ });
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ \"./node_modules/babel-polyfill/lib/index.js\");\n/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _Page_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Page.jsx */ \"./src/Page.jsx\");\n\n\n\n\n\n\nconst element = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"HashRouter\"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Page_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\nreact_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(element, document.getElementById('content'));\n\nif (false) {}\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/Contents.jsx":
/*!**************************!*\
  !*** ./src/Contents.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Contents; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _ProductList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductList.jsx */ \"./src/ProductList.jsx\");\n/* harmony import */ var _ProductReport_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductReport.jsx */ \"./src/ProductReport.jsx\");\n/* harmony import */ var _ProductEdit_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductEdit.jsx */ \"./src/ProductEdit.jsx\");\n/* harmony import */ var _ProductImage_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductImage.jsx */ \"./src/ProductImage.jsx\");\n\n\n\n\n\n\n\nconst NotFound = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Page Not Found\");\n\nfunction Contents() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n    exact: true,\n    from: \"/\",\n    to: \"/products\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/products\",\n    component: _ProductList_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/edit/:id\",\n    component: _ProductEdit_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/image/:id\",\n    component: _ProductImage_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    component: NotFound\n  }));\n}\n\n//# sourceURL=webpack:///./src/Contents.jsx?");

/***/ }),

/***/ "./src/NumInput.jsx":
/*!**************************!*\
  !*** ./src/NumInput.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NumInput; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction format(num) {\n  return num != null ? num.toString() : '';\n}\n\nfunction unformat(str) {\n  console.log(\"In Unformat\");\n  const val = parseFloat(str);\n  return Number.isNaN(val) ? null : val;\n}\n\nclass NumInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: format(props.value)\n    };\n    this.onBlur = this.onBlur.bind(this);\n    this.onChange = this.onChange.bind(this);\n  }\n\n  onChange(e) {\n    if (e.target.value.match(/^\\d*\\.{0,1}\\d{0,2}$/)) {\n      this.setState({\n        value: e.target.value\n      });\n    }\n  }\n\n  onBlur(e) {\n    const {\n      onChange\n    } = this.props;\n    const {\n      value\n    } = this.state;\n    onChange(e, unformat(value));\n  }\n\n  render() {\n    const {\n      value\n    } = this.state;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", _extends({\n      type: \"text\"\n    }, this.props, {\n      value: value,\n      onBlur: this.onBlur,\n      onChange: this.onChange\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/NumInput.jsx?");

/***/ }),

/***/ "./src/Page.jsx":
/*!**********************!*\
  !*** ./src/Page.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Contents_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contents.jsx */ \"./src/Contents.jsx\");\n\n\n\nfunction NavBar() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"/\"\n  }, \"Home\"));\n}\n\nfunction Page() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBar, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n}\n\n//# sourceURL=webpack:///./src/Page.jsx?");

/***/ }),

/***/ "./src/ProductAdd.jsx":
/*!****************************!*\
  !*** ./src/ProductAdd.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductAdd; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass ProductAdd extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n    this.priceRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    this.state = {\n      defaultPrice: '$',\n      categoryValue: '',\n      URL: [{\n        shirts: 'https://www.istockphoto.com/photo/formal-shirt-with-button-down-collar-isolated-on-white-gm856917576-141225609',\n        jeans: 'https://www.istockphoto.com/photo/blue-jeans-isolated-with-clipping-path-gm600373506-103229995',\n        jackets: 'https://www.istockphoto.com/photo/black-hoodie-mock-up-gm695933044-128721993',\n        sweaters: 'https://www.istockphoto.com/photo/formal-shirt-with-button-down-collar-isolated-on-white-gm856917576-141225609',\n        accessories: 'https://www.shutterstock.com/image-vector/hair-accessories-woman-items-stylist-salon-1451306021'\n      }]\n    };\n    this.handleSubmit = this.handleSubmit.bind(this);\n    this.handleChange = this.handleChange.bind(this);\n  }\n\n  handleSubmit(e) {\n    e.preventDefault();\n    const form = document.forms.productAdd;\n    const product = {\n      productName: form.productName.value,\n      category: form.category.value,\n      price: parseFloat(form.price.value.replace(/\\$/g, '')),\n      image: form.image.value\n    };\n    const {\n      createProduct\n    } = this.props;\n    createProduct(product);\n    form.productName.value = '';\n    form.category.value = '';\n    this.setState({\n      defaultPrice: '$',\n      URL: [{\n        shirts: 'https://www.istockphoto.com/photo/formal-shirt-with-button-down-collar-isolated-on-white-gm856917576-141225609',\n        jeans: 'https://www.istockphoto.com/photo/blue-jeans-isolated-with-clipping-path-gm600373506-103229995',\n        jackets: 'https://www.istockphoto.com/photo/black-hoodie-mock-up-gm695933044-128721993',\n        sweaters: 'https://www.istockphoto.com/photo/formal-shirt-with-button-down-collar-isolated-on-white-gm856917576-141225609',\n        accessories: 'https://www.shutterstock.com/image-vector/hair-accessories-woman-items-stylist-salon-1451306021'\n      }]\n    });\n  }\n\n  handleChange(e) {\n    this.setState({\n      defaultPrice: e.target.value\n    });\n  }\n\n  render() {\n    let btnClass = ['btn', 'clearfix'];\n    btnClass = btnClass.join(' ');\n    const {\n      defaultPrice\n    } = this.state;\n    const {\n      categoryValue\n    } = this.state;\n    const {\n      URL\n    } = this.state;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      name: \"productAdd\",\n      onSubmit: this.handleSubmit,\n      className: \"form\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"div1\"\n    }, \"Category\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n      name: \"category\",\n      className: \"selectBox\",\n      onChange: e => this.setState({\n        categoryValue: e.target.value\n      })\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      \"aria-label\": \"None\",\n      value: \"\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      \"aria-label\": \"shirts\",\n      value: \"shirts\"\n    }, \"shirts\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      \"aria-label\": \"shirts\",\n      value: \"jeans\"\n    }, \"jeans\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      \"aria-label\": \"jackets\",\n      value: \"jackets\"\n    }, \"jackets\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      \"aria-label\": \"sweaters\",\n      value: \"sweaters\"\n    }, \"sweaters\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      \"aria-label\": \"accessories\",\n      value: \"accessories\"\n    }, \"accessories\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Product Name\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"productName\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"div2\"\n    }, \"Price Per Unit\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      ref: this.priceRef,\n      type: \"text\",\n      name: \"price\",\n      onChange: this.handleChange,\n      value: defaultPrice\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \"Image URL\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"image\",\n      defaultValue: URL[0][categoryValue] || ''\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"submit\",\n      className: btnClass\n    }, \"Add Product\")));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/ProductAdd.jsx?");

/***/ }),

/***/ "./src/ProductDetail.jsx":
/*!*******************************!*\
  !*** ./src/ProductDetail.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductDetail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphQLFetch.js */ \"./src/graphQLFetch.js\");\n\n\nclass ProductDetail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n    console.log(\"Product Detail\");\n    this.state = {\n      product: {}\n    };\n  }\n\n  componentDidMount() {\n    this.loadData();\n  }\n\n  componentDidUpdate(prevProps) {\n    const {\n      match: {\n        params: {\n          id: prevId\n        }\n      }\n    } = prevProps;\n    const {\n      match: {\n        params: {\n          id\n        }\n      }\n    } = this.props;\n\n    if (prevId !== id) {\n      this.loadData();\n    }\n  }\n\n  async loadData() {\n    const {\n      match: {\n        params: {\n          id\n        }\n      }\n    } = this.props;\n    const query = `query product($id: Int!) {\n      product (id: $id) {\n        id description\n      }\n    }`;\n    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(query, {\n      id\n    });\n\n    if (data) {\n      this.setState({\n        product: data.product\n      });\n    } else {\n      this.setState({\n        product: {}\n      });\n    }\n  }\n\n  render() {\n    const {\n      product: {\n        description\n      }\n    } = this.state;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Description\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"pre\", null, description));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/ProductDetail.jsx?");

/***/ }),

/***/ "./src/ProductEdit.jsx":
/*!*****************************!*\
  !*** ./src/ProductEdit.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductEdit; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphQLFetch.js */ \"./src/graphQLFetch.js\");\n/* harmony import */ var _NumInput_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NumInput.jsx */ \"./src/NumInput.jsx\");\n/* harmony import */ var _TextInput_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextInput.jsx */ \"./src/TextInput.jsx\");\n\n\n\n\n\nclass ProductEdit extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n    this.state = {\n      product: {}\n    };\n    this.onChange = this.onChange.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  componentDidMount() {\n    this.loadData();\n  }\n\n  componentDidUpdate(prevProps) {\n    const {\n      match: {\n        params: {\n          id: prevId\n        }\n      }\n    } = prevProps;\n    const {\n      match: {\n        params: {\n          id\n        }\n      }\n    } = this.props;\n\n    if (id !== prevId) {\n      this.loadData();\n    }\n  }\n\n  onChange(event, naturalValue) {\n    const {\n      name,\n      value: textValue\n    } = event.target;\n    const value = naturalValue === undefined ? textValue : naturalValue;\n    this.setState(prevState => ({\n      product: { ...prevState.product,\n        [name]: value\n      }\n    }));\n  }\n\n  async handleSubmit(e) {\n    e.preventDefault();\n    const {\n      product,\n      invalidFields\n    } = this.state;\n    if (Object.keys(invalidFields).length !== 0) return;\n    const query = `mutation productUpdate(\n      $id: Int!\n      $changes: ProductUpdateInputs!\n    ) {\n      productUpdate(\n        id: $id\n        changes: $changes\n      ) {\n        id productName price category image\n      }\n    }`;\n    const {\n      id,\n      created,\n      ...changes\n    } = product;\n    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(query, {\n      changes,\n      id\n    });\n\n    if (data) {\n      this.setState({\n        product: data.productUpdate\n      });\n      alert('Updated product successfully'); // eslint-disable-line no-alert\n    }\n  }\n\n  async loadData() {\n    const query = `query product($id: Int!) {\n      product(id: $id) {\n        id productName price category image\n      }\n    }`;\n    const id = parseInt(this.props.match.params.id);\n    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(query, {\n      id\n    });\n\n    if (data) {\n      const {\n        product\n      } = data;\n      product.category = product.category != null ? product.category.toString() : '';\n      product.image = product.image != null ? product.image.toString() : '';\n    }\n\n    this.setState({\n      product: data ? data.product : {},\n      invalidFields: {}\n    });\n  }\n\n  render() {\n    const {\n      product: {\n        id\n      }\n    } = this.state;\n    console.log(this.state);\n    var {\n      match: {\n        params: {\n          id: propsId\n        }\n      }\n    } = this.props;\n\n    if (id == null) {\n      if (propsId != null) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, `Product with ID ${propsId} not found.`);\n      }\n\n      return null;\n    }\n\n    const {\n      product: {\n        productName,\n        price,\n        category,\n        image\n      }\n    } = this.state;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.handleSubmit\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, `Editing product: ${id}`), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"ProductName:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextInput_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      name: \"productName\",\n      value: productName,\n      onChange: this.onChange,\n      key: id\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"Price:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NumInput_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      name: \"price\",\n      value: price,\n      onChange: this.onChange,\n      key: id\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"Category:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n      name: \"category\",\n      className: \"selectBox\",\n      value: category,\n      onChange: this.onChange\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      \"aria-label\": \"None\",\n      value: \"\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      \"aria-label\": \"shirts\",\n      value: \"shirts\"\n    }, \"shirts\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      \"aria-label\": \"shirts\",\n      value: \"jeans\"\n    }, \"jeans\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      \"aria-label\": \"jackets\",\n      value: \"jackets\"\n    }, \"jackets\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      \"aria-label\": \"sweaters\",\n      value: \"sweaters\"\n    }, \"sweaters\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      \"aria-label\": \"accessories\",\n      value: \"accessories\"\n    }, \"accessories\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"Image:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      name: \"image\",\n      value: image,\n      onChange: this.onChange\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      type: \"submit\"\n    }, \"Submit\"))))));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/ProductEdit.jsx?");

/***/ }),

/***/ "./src/ProductImage.jsx":
/*!******************************!*\
  !*** ./src/ProductImage.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductImage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphQLFetch.js */ \"./src/graphQLFetch.js\");\n\n\nclass ProductImage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n    this.state = {\n      product: {}\n    };\n  }\n\n  componentDidMount() {\n    this.loadData();\n  }\n\n  async loadData() {\n    const query = `query product($id: Int!) {\n      product(id: $id) {\n        id image\n      }\n    }`;\n    const id = parseInt(this.props.match.params.id);\n    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(query, {\n      id\n    });\n\n    if (data) {\n      const {\n        product\n      } = data;\n      product.image = product.image != null ? product.image.toString() : '';\n    }\n\n    this.setState({\n      product: data ? data.product : null,\n      invalidFields: {}\n    });\n  }\n\n  render() {\n    const {\n      product: {\n        id\n      }\n    } = this.state;\n    var {\n      match: {\n        params: {\n          id: propsId\n        }\n      }\n    } = this.props;\n\n    if (id == null) {\n      if (propsId != null) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, `Product with ID ${propsId} not found.`);\n      }\n\n      return null;\n    }\n\n    const {\n      product: {\n        image\n      }\n    } = this.state;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: this.state.product.image\n    }, \"Link to image\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"(Unable to display link directly on page due to cors issue.)\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: this.state.product.image\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/ProductImage.jsx?");

/***/ }),

/***/ "./src/ProductList.jsx":
/*!*****************************!*\
  !*** ./src/ProductList.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _ProductTable_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductTable.jsx */ \"./src/ProductTable.jsx\");\n/* harmony import */ var _ProductAdd_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductAdd.jsx */ \"./src/ProductAdd.jsx\");\n/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphQLFetch.js */ \"./src/graphQLFetch.js\");\n/* harmony import */ var _ProductDetail_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductDetail.jsx */ \"./src/ProductDetail.jsx\");\n\n\n\n\n\n\nclass ProductList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor() {\n    super();\n    this.state = {\n      products: []\n    };\n    this.createProduct = this.createProduct.bind(this);\n    this.deleteProduct = this.deleteProduct.bind(this);\n  }\n\n  componentDidMount() {\n    this.loadData();\n  }\n\n  async loadData() {\n    const query = `query {\n        productList {\n          id productName price category image\n        }\n      }`;\n    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(query);\n\n    if (data) {\n      this.setState({\n        products: data.productList\n      });\n    }\n  }\n\n  async createProduct(product) {\n    const query = `mutation productAdd($product: ProductInput!) {\n        productAdd(product: $product) {\n          id\n        }\n      }`;\n    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(query, {\n      product\n    });\n\n    if (data) {\n      this.loadData();\n    }\n  }\n\n  async deleteProduct(index) {\n    const query = `mutation productDelete($id: Int!) {\n        productDelete(id: $id)\n      }`;\n    const {\n      products\n    } = this.state;\n    const {\n      location: {\n        pathname,\n        search\n      },\n      history\n    } = this.props;\n    const {\n      id\n    } = products[index];\n    const data = await Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(query, {\n      id\n    });\n\n    if (data && data.productDelete) {\n      this.setState(prevState => {\n        const newList = [...prevState.products];\n\n        if (pathname === `/products/${id}`) {\n          history.push({\n            pathname: '/products',\n            search\n          });\n        }\n\n        newList.splice(index, 1);\n        return {\n          products: newList\n        };\n      });\n    } else {\n      this.loadData();\n    }\n  }\n\n  render() {\n    const {\n      products\n    } = this.state;\n    const {\n      match\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"My Company Inventory\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Showing all available products\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductTable_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      productList: products,\n      deleteProduct: this.deleteProduct\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Add a new product to the inventory\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProductAdd_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      createProduct: this.createProduct\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: `${match.path}/:id`,\n      component: _ProductDetail_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/ProductList.jsx?");

/***/ }),

/***/ "./src/ProductReport.jsx":
/*!*******************************!*\
  !*** ./src/ProductReport.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductAddItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ProductAddItem() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"This is a placeholder for the product add item\"));\n}\n\n//# sourceURL=webpack:///./src/ProductReport.jsx?");

/***/ }),

/***/ "./src/ProductTable.jsx":
/*!******************************!*\
  !*** ./src/ProductTable.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductTable; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\nfunction ProductTable({\n  productList,\n  deleteProduct\n}) {\n  const productRows = productList.map((product, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProductRow, {\n    key: product.id,\n    product: product,\n    deleteProduct: deleteProduct,\n    index: index\n  }));\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Product Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Price\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Category\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Image\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Action\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, productRows));\n}\nconst ProductRow = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(({\n  product,\n  location: {\n    search\n  },\n  deleteProduct,\n  index\n}) => {\n  const selectLocation = {\n    pathname: `/productList/${product.id}`,\n    search\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, product.productName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, `$${product.price}`), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, product.category), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: `/image/${product.id}`\n  }, \"View\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: `/edit/${product.id}`\n  }, \"Edit\"), \"  \", ' | ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"button\",\n    onClick: () => {\n      deleteProduct(index);\n    }\n  }, \"Delete\")));\n});\n\n//# sourceURL=webpack:///./src/ProductTable.jsx?");

/***/ }),

/***/ "./src/TextInput.jsx":
/*!***************************!*\
  !*** ./src/TextInput.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextInput; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction format(text) {\n  return text != null ? text : '';\n}\n\nfunction unformat(text) {\n  return text.trim().length === 0 ? null : text;\n}\n\nclass TextInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: format(props.value)\n    };\n    this.onBlur = this.onBlur.bind(this);\n    this.onChange = this.onChange.bind(this);\n  }\n\n  onChange(e) {\n    this.setState({\n      value: e.target.value\n    });\n  }\n\n  onBlur(e) {\n    const {\n      onChange\n    } = this.props;\n    const {\n      value\n    } = this.state;\n    onChange(e, unformat(value));\n  }\n\n  render() {\n    const {\n      value\n    } = this.state;\n    const {\n      tag = 'input',\n      ...props\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(tag, { ...props,\n      value,\n      onBlur: this.onBlur,\n      onChange: this.onChange\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/TextInput.jsx?");

/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return graphQLFetch; });\nasync function graphQLFetch(query, variables = {}) {\n  try {\n    const response = await fetch(window.ENV.UI_API_ENDPOINT, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        query,\n        variables\n      })\n    });\n    const body = await response.text();\n    const result = JSON.parse(body);\n\n    if (result.errors) {\n      const error = result.errors[0];\n\n      if (error.extensions.code === 'BAD_USER_INPUT') {\n        const details = error.extensions.exception.errors.join('\\n ');\n        alert(`${error.message}:\\n ${details}`);\n      } else {\n        alert(`${error.extensions.code}: ${error.message}`);\n      }\n    }\n\n    return result.data;\n  } catch (e) {\n    alert(`Error in sending data to server: ${e.message}`);\n    return null;\n  }\n}\n\n//# sourceURL=webpack:///./src/graphQLFetch.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/App.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/App.jsx */\"./src/App.jsx\");\n\n\n//# sourceURL=webpack:///multi_./src/App.jsx?");

/***/ })

/******/ });
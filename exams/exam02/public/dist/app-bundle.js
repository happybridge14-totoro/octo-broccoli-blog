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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./ts/main.ts":
/*!********************!*\
  !*** ./ts/main.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewcontroller_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewcontroller/index */ "./ts/viewcontroller/index.ts");

Object(_viewcontroller_index__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./ts/utils/mini-jquery.ts":
/*!*********************************!*\
  !*** ./ts/utils/mini-jquery.ts ***!
  \*********************************/
/*! exports provided: MiniJquery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniJquery", function() { return MiniJquery; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var DEFAULT_KEY = "id";
var CLASS_NAME_ERROR = "error";
var ATTR_DATE_TIME = "datetime";
var MiniJquery = /*#__PURE__*/function () {
  function MiniJquery(parameters) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MiniJquery);

    if (typeof parameters === "string") {
      var targetElement = null;

      try {
        targetElement = window.document.querySelector(parameters);
      } catch (e) {}

      if (!targetElement) {
        targetElement = window.document.createElement("div");
      }

      this.element = targetElement;
    } else {
      this.element = parameters;
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MiniJquery, [{
    key: "onClick",
    value: function onClick(callback) {
      this.element.addEventListener("click", callback);
      return this;
    }
  }, {
    key: "onInput",
    value: function onInput(callback) {
      this.element.addEventListener("input", callback);
      return this;
    }
  }, {
    key: "append",
    value: function append(child) {
      this.element.appendChild(child.htmlElement);
      return this;
    }
  }, {
    key: "removeSelf",
    value: function removeSelf() {
      if (this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }

      return this;
    }
  }, {
    key: "removeChildren",
    value: function removeChildren() {
      this.element.innerHTML = "";
      return this;
    }
  }, {
    key: "find",
    value: function find(query) {
      var targetElement = this.element.querySelector(query);

      if (targetElement) {
        return new MiniJquery(targetElement);
      } else {
        return null;
      }
    }
  }, {
    key: "getDataByKey",
    value: function getDataByKey() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_KEY;
      return this.element.dataset[key] || "";
    }
  }, {
    key: "updateClass",
    value: function updateClass(newToken, oldToken) {
      if (oldToken === "") {
        this.element.classList.add(newToken);
      } else {
        this.element.classList.replace(oldToken, newToken);
      }

      return this;
    }
  }, {
    key: "updateData",
    value: function updateData(data) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_KEY;
      this.element.dataset[key] = data;
      return this;
    }
  }, {
    key: "updateContent",
    value: function updateContent(content) {
      this.element.textContent = content;
      this.element.setAttribute("title", content);
      return this;
    }
  }, {
    key: "scrollToButtom",
    value: function scrollToButtom() {
      this.element.scrollTop = this.element.scrollHeight;
      return this;
    }
  }, {
    key: "clearValue",
    value: function clearValue() {
      this.element.value = "";
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.element.outerHTML;
    }
  }, {
    key: "triggleClass",
    value: function triggleClass(className) {
      this.element.classList.toggle(className);
      return this;
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      this.element.classList.add(className);
      return this;
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      this.element.classList.remove(className);
      return this;
    }
  }, {
    key: "time",
    set: function set(value) {
      var time = new Date(value).toLocaleString();
      this.element.setAttribute(ATTR_DATE_TIME, time);
      this.element.innerText = time;
    }
  }, {
    key: "text",
    set: function set(value) {
      this.element.innerText = value;
    }
  }, {
    key: "disable",
    set: function set(value) {
      var disabledAttr = this.element.disabled;

      if (disabledAttr || disabledAttr === false) {
        this.element.disabled = value;
      }
    },
    get: function get() {
      return !!this.element.disabled;
    }
  }, {
    key: "hidden",
    set: function set(value) {
      this.element.hidden = value;
    }
  }, {
    key: "error",
    set: function set(value) {
      if (value) {
        this.element.classList.add(CLASS_NAME_ERROR);
      } else {
        this.element.classList.remove(CLASS_NAME_ERROR);
      }
    }
  }, {
    key: "value",
    set: function set(value) {
      this.element.value = value;
    },
    get: function get() {
      return this.element.value || "";
    }
  }, {
    key: "htmlElement",
    get: function get() {
      return this.element;
    }
  }, {
    key: "parent",
    get: function get() {
      if (this.element.parentNode) {
        return new MiniJquery(this.element.parentNode);
      } else {
        return null;
      }
    }
  }, {
    key: "templateClone",
    get: function get() {
      var content = this.element.content;

      if (content) {
        var clone = content.cloneNode(true);
        return new MiniJquery(clone);
      }

      return null;
    }
  }]);

  return MiniJquery;
}(); // Object.defineProperty(window, "$", {
//     value: $,
//     writable: false,
//     enumerable: false,
//     configurable: false
// });

var $ = function $(query) {
  return new MiniJquery(query);
};

var METHOD;

(function (METHOD) {
  METHOD["GET"] = "GET";
  METHOD["POST"] = "POST";
  METHOD["DELETE"] = "DELETE";
  METHOD["PUT"] = "PUT";
})(METHOD || (METHOD = {}));

;
;
[METHOD.GET, METHOD.POST, METHOD.DELETE, METHOD.PUT].forEach(function (method) {
  var param = {
    method: method
  };

  $[method.toLowerCase()] = function (url, content) {
    if (content) {
      param.headers = {
        'Content-Type': 'application/json'
      };
      param.body = JSON.stringify(content);
    }

    return fetch(url, param);
  };
});
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./ts/viewcontroller/index.ts":
/*!************************************!*\
  !*** ./ts/viewcontroller/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mini-jquery */ "./ts/utils/mini-jquery.ts");
/* harmony import */ var _pageInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageInterface */ "./ts/viewcontroller/pageInterface.ts");


var WRONT_USER_ID_MESSAGE = "Wrong user! Please login again.";
var recipeStage = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"])("#recipe-stage");
var userStage = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"])("#user-stage");
var currentPage = _pageInterface__WEBPACK_IMPORTED_MODULE_1__["PAGES"].INIT;
var userStatus = _pageInterface__WEBPACK_IMPORTED_MODULE_1__["USER_STATUS"].INIT;

var displayPage = function displayPage(targetPage) {
  if (currentPage !== targetPage) {
    recipeStage.removeChildren();
  }
};

var changeUserStatus = function changeUserStatus(status) {
  if (userStatus !== status) {
    userStage.removeChildren();
  }
};

var init = function init() {
  displayPage(_pageInterface__WEBPACK_IMPORTED_MODULE_1__["PAGES"].DETAIL);
  changeUserStatus(_pageInterface__WEBPACK_IMPORTED_MODULE_1__["USER_STATUS"].ANONYMOUS);
};

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ "./ts/viewcontroller/pageInterface.ts":
/*!********************************************!*\
  !*** ./ts/viewcontroller/pageInterface.ts ***!
  \********************************************/
/*! exports provided: PAGES, USER_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGES", function() { return PAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATUS", function() { return USER_STATUS; });
var PAGES;

(function (PAGES) {
  PAGES[PAGES["INIT"] = 0] = "INIT";
  PAGES[PAGES["LIST"] = 1] = "LIST";
  PAGES[PAGES["DETAIL"] = 2] = "DETAIL";
  PAGES[PAGES["ADD"] = 3] = "ADD";
})(PAGES || (PAGES = {}));

;
var USER_STATUS;

(function (USER_STATUS) {
  USER_STATUS[USER_STATUS["INIT"] = 0] = "INIT";
  USER_STATUS[USER_STATUS["LOGGED_IN"] = 1] = "LOGGED_IN";
  USER_STATUS[USER_STATUS["ANONYMOUS"] = 2] = "ANONYMOUS";
})(USER_STATUS || (USER_STATUS = {}));

;


/***/ })

/******/ });
//# sourceMappingURL=app-bundle.js.map
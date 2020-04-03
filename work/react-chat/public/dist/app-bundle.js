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
/******/ 	return __webpack_require__(__webpack_require__.s = "./ts/main.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./ts/viewcontroller/index.module.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./ts/viewcontroller/index.module.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stage {\n    color: white;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./ts/main.tsx":
/*!*********************!*\
  !*** ./ts/main.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const index_1 = __webpack_require__(/*! ./viewcontroller/index */ "./ts/viewcontroller/index.tsx");
ReactDOM.render(React.createElement(index_1.Index, null), document.getElementById("stage"));


/***/ }),

/***/ "./ts/model/chat.ts":
/*!**************************!*\
  !*** ./ts/model/chat.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __webpack_require__(/*! ../utils/api */ "./ts/utils/api.ts");
const long_connection_1 = __webpack_require__(/*! ./long-connection */ "./ts/model/long-connection.ts");
const URL = "/chat";
let timestamp = 0;
const getURL = (isLong = false) => {
    return (isLong ? "/long" : "") + URL;
};
const sendMessage = (message) => {
    return api_1.default.post(getURL(), { message });
};
exports.sendMessage = sendMessage;
const getMessage = () => {
    return api_1.default.get(getURL());
};
exports.getMessage = getMessage;
const getLongMessage = () => {
    return api_1.default.get(getURL(true)).then((res) => {
        if (res.ok) {
            return res.json();
        }
        else {
            return Promise.reject(res);
        }
    });
};
let intervalHandler = -1;
let shortMessageResolver;
let shortMessageRejecter;
const beginShowMessageLoop = () => {
    if (intervalHandler === -1) {
        intervalHandler = setInterval(() => {
            getMessage().then((res) => {
                if (res.ok) {
                    res.json().then((datas) => {
                        if (datas.length > 0 && datas[datas.length - 1].timestamp > timestamp) {
                            const message = datas.filter((data) => {
                                return data.timestamp > timestamp;
                            });
                            timestamp = datas[datas.length - 1].timestamp;
                            shortMessageResolver({
                                timestamp: timestamp,
                                message
                            });
                        }
                    });
                }
                else {
                    shortMessageRejecter(res);
                }
            });
        }, 5000);
    }
};
const getShortMessage = () => {
    return new Promise((resolve, reject) => {
        shortMessageResolver = resolve;
        shortMessageRejecter = reject;
    });
};
let signalRejecter;
let signalPromise;
const getSignal = () => {
    if (!signalPromise) {
        signalPromise = new Promise((resolve, reject) => {
            signalRejecter = reject;
        });
    }
    return signalPromise;
};
const receiveMessage = (tmpTimestamp) => {
    timestamp = Math.max(timestamp, tmpTimestamp);
    beginShowMessageLoop();
    return Promise.race([getSignal(), long_connection_1.getChat(timestamp), getLongMessage(), getShortMessage()]).then((data) => {
        if (timestamp > data.timestamp) {
            return receiveMessage(timestamp);
        }
        else {
            timestamp = data.timestamp;
            return data;
        }
    });
};
exports.receiveMessage = receiveMessage;
const stopMessage = () => {
    timestamp = 0;
    long_connection_1.stop();
    if (signalRejecter) {
        signalRejecter();
        signalPromise = null;
        signalRejecter = null;
    }
    if (intervalHandler != -1) {
        clearInterval(intervalHandler);
        intervalHandler = -1;
    }
};
exports.stopMessage = stopMessage;


/***/ }),

/***/ "./ts/model/dataInterface.ts":
/*!***********************************!*\
  !*** ./ts/model/dataInterface.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TYPE;
(function (TYPE) {
    TYPE["USERS"] = "users";
    TYPE["CHAT"] = "chat";
})(TYPE || (TYPE = {}));
exports.TYPE = TYPE;
;
;
;
;


/***/ }),

/***/ "./ts/model/login.ts":
/*!***************************!*\
  !*** ./ts/model/login.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __webpack_require__(/*! ../utils/api */ "./ts/utils/api.ts");
const URL = "/session";
const signIn = (userName) => {
    return api_1.default.post(URL, { userName });
};
exports.signIn = signIn;
const signOut = () => {
    return api_1.default.delete(URL);
};
exports.signOut = signOut;


/***/ }),

/***/ "./ts/model/long-connection.ts":
/*!*************************************!*\
  !*** ./ts/model/long-connection.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const sse_1 = __webpack_require__(/*! ./sse */ "./ts/model/sse.ts");
const websocket_1 = __webpack_require__(/*! ./websocket */ "./ts/model/websocket.ts");
const dataInterface_1 = __webpack_require__(/*! ./dataInterface */ "./ts/model/dataInterface.ts");
let userTimeStamp = 0;
let chatTimeStamp = 0;
let userResolver;
let chatResolver;
let isStarted = false;
const filterMessage = (data) => {
    if (data.type === dataInterface_1.TYPE.CHAT) {
        if (data.timestamp > chatTimeStamp) {
            if (chatResolver) {
                const newData = {
                    timestamp: data.timestamp,
                    message: data.message
                };
                chatResolver(newData);
                chatTimeStamp = data.timestamp;
            }
            chatResolver = null;
        }
    }
    else {
        if (data.timestamp > userTimeStamp) {
            if (userResolver) {
                const newData = {
                    timestamp: data.timestamp,
                    users: data.users
                };
                userResolver(newData);
                userTimeStamp = data.timestamp;
            }
            userResolver = null;
        }
    }
};
const start = () => {
    sse_1.start(filterMessage);
    websocket_1.start(filterMessage);
};
const stop = () => {
    if (isStarted) {
        sse_1.stop();
        websocket_1.stop();
    }
    isStarted = false;
};
exports.stop = stop;
const getUsers = (timestamp) => {
    if (!isStarted) {
        start();
        isStarted = true;
    }
    if (userTimeStamp < timestamp) {
        userTimeStamp = timestamp;
    }
    return new Promise((resolve, reject) => {
        userResolver = resolve;
    });
};
exports.getUsers = getUsers;
const getChat = (timestamp) => {
    if (!isStarted) {
        start();
        isStarted = true;
    }
    if (chatTimeStamp < timestamp) {
        chatTimeStamp = timestamp;
    }
    return new Promise((resolve, reject) => {
        chatResolver = resolve;
    });
};
exports.getChat = getChat;


/***/ }),

/***/ "./ts/model/sse.ts":
/*!*************************!*\
  !*** ./ts/model/sse.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let evtSource;
const start = (cb) => {
    if (!evtSource) {
        evtSource = new EventSource("/sse");
        evtSource.onmessage = function (event) {
            try {
                const data = JSON.parse(event.data);
                cb(data);
            }
            catch (e) {
            }
        };
    }
};
exports.start = start;
const stop = () => {
    if (evtSource) {
        evtSource.close();
        evtSource = null;
    }
};
exports.stop = stop;


/***/ }),

/***/ "./ts/model/websocket.ts":
/*!*******************************!*\
  !*** ./ts/model/websocket.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let ws;
let intervalHandler = -1;
const ONE_MINUTE = 60000;
const start = (cb) => {
    if (!ws) {
        ws = new WebSocket('ws://localhost:3000');
        const ping = () => {
            clearInterval(intervalHandler);
            intervalHandler = setInterval(() => {
                const ping = "ping";
                ws === null || ws === void 0 ? void 0 : ws.send(JSON.stringify({ ping }));
            }, ONE_MINUTE);
        };
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            cb(data);
            ping();
        };
        ws.onopen = () => {
            ping();
        };
        window.onbeforeunload = () => {
            if (ws) {
                ws.onclose = () => { };
                ws.close();
            }
        };
        ws.onclose = () => {
            clearInterval(intervalHandler);
            intervalHandler = -1;
            ws = null;
        };
    }
};
exports.start = start;
const stop = () => {
    if (ws) {
        ws.close();
    }
    delete window.onbeforeunload;
};
exports.stop = stop;


/***/ }),

/***/ "./ts/utils/api.ts":
/*!*************************!*\
  !*** ./ts/utils/api.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;
const api = {};
const METHOD = {
    GET: "get",
    PUT: "put",
    DELETE: "delete",
    POST: "post",
};
Object.values(METHOD).forEach((method) => {
    const param = {
        method
    };
    api[method.toLowerCase()] = (url, content) => {
        if (content) {
            if (method !== METHOD.GET) {
                param.headers = { 'Content-Type': 'application/json' };
                param.body = JSON.stringify(content);
            }
            else {
                const query = Object.entries(content).map(([key, value]) => {
                    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
                }).join("&");
                url = url + (query === "" ? "" : "?" + query);
            }
        }
        return fetch(url, param);
    };
});
exports.default = api;


/***/ }),

/***/ "./ts/utils/event.ts":
/*!***************************!*\
  !*** ./ts/utils/event.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const EVENTS = {
    REFRESH: "refresh",
    DISPLAY_ERROR: "displayError",
    HIDE_ERROR: "hideError",
};
exports.EVENTS = EVENTS;
const eventMap = new Map();
Object.values(EVENTS).forEach((event) => {
    eventMap.set(event, new Set());
});
const dispatch = (eventName, params) => {
    const cbSet = eventMap.get(eventName);
    if (cbSet) {
        for (let cb of cbSet) {
            cb(params);
        }
    }
};
exports.dispatch = dispatch;
const addEventListener = (eventName, fn) => {
    const cbSet = eventMap.get(eventName);
    if (cbSet && !cbSet.has(fn)) {
        cbSet.add(fn);
    }
};
exports.addEventListener = addEventListener;
const removeEventListener = (eventName, fn) => {
    const cbSet = eventMap.get(eventName);
    if (cbSet && cbSet.has(fn)) {
        cbSet.delete(fn);
    }
};
exports.removeEventListener = removeEventListener;


/***/ }),

/***/ "./ts/utils/status-error-codes.ts":
/*!****************************************!*\
  !*** ./ts/utils/status-error-codes.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var STATUS_CODES;
(function (STATUS_CODES) {
    STATUS_CODES[STATUS_CODES["SUCCESS"] = 200] = "SUCCESS";
    STATUS_CODES[STATUS_CODES["BAD_RQUEST"] = 400] = "BAD_RQUEST";
    STATUS_CODES[STATUS_CODES["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    STATUS_CODES[STATUS_CODES["NOT_FOUND"] = 404] = "NOT_FOUND";
    STATUS_CODES[STATUS_CODES["DUPLICATED"] = 409] = "DUPLICATED";
    STATUS_CODES[STATUS_CODES["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(STATUS_CODES || (STATUS_CODES = {}));
exports.STATUS_CODES = STATUS_CODES;
;
var ERROR_CODES;
(function (ERROR_CODES) {
    ERROR_CODES[ERROR_CODES["WRONG_USER_ID"] = 3] = "WRONG_USER_ID";
    ERROR_CODES[ERROR_CODES["WRONG_USER_NAME"] = 4] = "WRONG_USER_NAME";
    ERROR_CODES[ERROR_CODES["SESSION_NOT_FOUND"] = 5] = "SESSION_NOT_FOUND";
    ERROR_CODES[ERROR_CODES["WRONG_SESSION"] = 6] = "WRONG_SESSION";
    ERROR_CODES[ERROR_CODES["ITEM_ID_ERROR"] = 10] = "ITEM_ID_ERROR";
    ERROR_CODES[ERROR_CODES["ITEM_NAME_ERROR"] = 11] = "ITEM_NAME_ERROR";
    ERROR_CODES[ERROR_CODES["ITEM_QUANTITY_ERROR"] = 12] = "ITEM_QUANTITY_ERROR";
    ERROR_CODES[ERROR_CODES["ITEM_DULPLICATED"] = 15] = "ITEM_DULPLICATED";
    ERROR_CODES[ERROR_CODES["NOT_FOUND"] = 1000] = "NOT_FOUND";
})(ERROR_CODES || (ERROR_CODES = {}));
exports.ERROR_CODES = ERROR_CODES;
;
;


/***/ }),

/***/ "./ts/viewcontroller/error-message.tsx":
/*!*********************************************!*\
  !*** ./ts/viewcontroller/error-message.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const { memo, useState, useEffect } = React;
const event_1 = __webpack_require__(/*! ../utils/event */ "./ts/utils/event.ts");
var ERROR_TYPE;
(function (ERROR_TYPE) {
    ERROR_TYPE[ERROR_TYPE["USER_NAME_ERROR"] = 0] = "USER_NAME_ERROR";
    ERROR_TYPE[ERROR_TYPE["UNEXPECTED_ERROR"] = 1] = "UNEXPECTED_ERROR";
    ERROR_TYPE[ERROR_TYPE["NETWORK_ERROR"] = 2] = "NETWORK_ERROR";
    ERROR_TYPE[ERROR_TYPE["RECIPE_ID_ERROR"] = 3] = "RECIPE_ID_ERROR";
    ERROR_TYPE[ERROR_TYPE["RECIPE_PARAM_ERROR"] = 4] = "RECIPE_PARAM_ERROR";
    ERROR_TYPE[ERROR_TYPE["SESSION_ERROR"] = 5] = "SESSION_ERROR";
})(ERROR_TYPE || (ERROR_TYPE = {}));
exports.ERROR_TYPE = ERROR_TYPE;
;
const getErrorMessage = (type) => {
    let message = "";
    switch (type) {
        case ERROR_TYPE.USER_NAME_ERROR:
            message = "User name is not valid!";
            break;
        case ERROR_TYPE.NETWORK_ERROR:
            message = "Unable to connect to server! Please try again!";
            break;
        case ERROR_TYPE.RECIPE_ID_ERROR:
            message = "Wrong recipe id!";
            break;
        case ERROR_TYPE.SESSION_ERROR:
            message = "Invalid user!";
            break;
        case ERROR_TYPE.RECIPE_PARAM_ERROR:
            message = "Param error!";
            break;
        case ERROR_TYPE.UNEXPECTED_ERROR:
        default:
            "Something went wrong!";
            break;
    }
    return message;
};
const ErrorMessage = memo(() => {
    const [errorText, setErrorTest] = useState("");
    useEffect(() => {
        const displayError = (errorType) => {
            setErrorTest(getErrorMessage(errorType));
        };
        const hideError = () => {
            setErrorTest("");
        };
        event_1.addEventListener(event_1.EVENTS.DISPLAY_ERROR, displayError);
        event_1.addEventListener(event_1.EVENTS.HIDE_ERROR, hideError);
        return () => {
            event_1.removeEventListener(event_1.EVENTS.DISPLAY_ERROR, displayError);
            event_1.removeEventListener(event_1.EVENTS.HIDE_ERROR, hideError);
        };
    }, []);
    return (React.createElement("div", { className: `error ${errorText === "" ? "" : "display"}` }, errorText));
});
exports.ErrorMessage = ErrorMessage;


/***/ }),

/***/ "./ts/viewcontroller/index.module.css":
/*!********************************************!*\
  !*** ./ts/viewcontroller/index.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.module.css */ "./node_modules/css-loader/dist/cjs.js!./ts/viewcontroller/index.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./ts/viewcontroller/index.tsx":
/*!*************************************!*\
  !*** ./ts/viewcontroller/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const { memo, useState, useEffect, useRef, useCallback } = React;
const chat_1 = __webpack_require__(/*! ../model/chat */ "./ts/model/chat.ts");
const status_error_codes_1 = __webpack_require__(/*! ../utils/status-error-codes */ "./ts/utils/status-error-codes.ts");
const event_1 = __webpack_require__(/*! ../utils/event */ "./ts/utils/event.ts");
const error_message_1 = __webpack_require__(/*! ./error-message */ "./ts/viewcontroller/error-message.tsx");
const login_1 = __webpack_require__(/*! ./login */ "./ts/viewcontroller/login.tsx");
__webpack_require__(/*! ./index.module.css */ "./ts/viewcontroller/index.module.css");
var PAGES;
(function (PAGES) {
    PAGES[PAGES["INIT"] = 0] = "INIT";
    PAGES[PAGES["LOGIN"] = 1] = "LOGIN";
    PAGES[PAGES["CHAT"] = 2] = "CHAT";
})(PAGES || (PAGES = {}));
;
exports.Index = memo(() => {
    const [currentPage, setCurrentPage] = useState(PAGES.INIT);
    const [chatData, setChatData] = useState(null);
    const loadingEl = useRef(null);
    const showLoading = (show) => {
        if (loadingEl && loadingEl.current) {
            loadingEl.current.hidden = show;
        }
    };
    useEffect(() => {
        const checkUser = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                showLoading(true);
                const response = yield chat_1.getMessage();
                showLoading(false);
                if (response.ok) {
                    event_1.dispatch(event_1.EVENTS.HIDE_ERROR);
                    const chat = yield response.json();
                    setChatData(chatData);
                    setCurrentPage(PAGES.CHAT);
                }
                else if (response.status === status_error_codes_1.STATUS_CODES.UNAUTHORIZED) {
                    const errorMessage = yield response.json();
                    if (errorMessage.errorCode === status_error_codes_1.ERROR_CODES.WRONG_USER_ID) {
                        event_1.dispatch(event_1.EVENTS.DISPLAY_ERROR, error_message_1.ERROR_TYPE.SESSION_ERROR);
                    }
                    else {
                        event_1.dispatch(event_1.EVENTS.HIDE_ERROR);
                    }
                    setCurrentPage(PAGES.LOGIN);
                }
                else {
                    event_1.dispatch(event_1.EVENTS.DISPLAY_ERROR, error_message_1.ERROR_TYPE.UNEXPECTED_ERROR);
                }
            }
            catch (e) {
                showLoading(false);
                event_1.dispatch(event_1.EVENTS.DISPLAY_ERROR, error_message_1.ERROR_TYPE.NETWORK_ERROR);
            }
        });
        event_1.addEventListener(event_1.EVENTS.REFRESH, checkUser);
        return () => {
            event_1.removeEventListener(event_1.EVENTS.REFRESH, checkUser);
        };
    }, []);
    const renderContent = useCallback(() => {
        if (currentPage === PAGES.LOGIN) {
            return (React.createElement(login_1.Login, null));
        }
        else {
            return (React.createElement("div", null));
        }
    }, [currentPage]);
    return (React.createElement("div", { className: "stage" },
        React.createElement(error_message_1.ErrorMessage, null),
        React.createElement("div", { className: "loading", ref: loadingEl }, "Loading..."),
        renderContent()));
});


/***/ }),

/***/ "./ts/viewcontroller/login.tsx":
/*!*************************************!*\
  !*** ./ts/viewcontroller/login.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const { memo, useState } = React;
const login_1 = __webpack_require__(/*! ../model/login */ "./ts/model/login.ts");
const status_error_codes_1 = __webpack_require__(/*! ../utils/status-error-codes */ "./ts/utils/status-error-codes.ts");
const event_1 = __webpack_require__(/*! ../utils/event */ "./ts/utils/event.ts");
const error_message_1 = __webpack_require__(/*! ./error-message */ "./ts/viewcontroller/error-message.tsx");
exports.Login = memo(() => {
    const [userName, setUserName] = useState("");
    const signin = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        try {
            const response = yield login_1.signIn(userName);
            setUserName("");
            if (response.ok) {
                event_1.dispatch(event_1.EVENTS.HIDE_ERROR);
                event_1.dispatch(event_1.EVENTS.REFRESH);
            }
            else {
                if (response.status === status_error_codes_1.STATUS_CODES.UNAUTHORIZED) {
                    const error = yield response.json();
                    if (error.errorCode === status_error_codes_1.ERROR_CODES.WRONG_USER_NAME) {
                        event_1.dispatch(event_1.EVENTS.DISPLAY_ERROR, error_message_1.ERROR_TYPE.USER_NAME_ERROR);
                        return;
                    }
                }
                event_1.dispatch(event_1.EVENTS.DISPLAY_ERROR, error_message_1.ERROR_TYPE.UNEXPECTED_ERROR);
            }
        }
        catch (e) {
            event_1.dispatch(event_1.EVENTS.DISPLAY_ERROR, error_message_1.ERROR_TYPE.NETWORK_ERROR);
        }
    });
    return (React.createElement("div", { className: "login-page" },
        React.createElement("label", null,
            "User Name:",
            React.createElement("input", { id: "user-name", type: "text", value: userName })),
        React.createElement("button", { className: "signin", onClick: signin }, "submit")));
});


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=app-bundle.js.map
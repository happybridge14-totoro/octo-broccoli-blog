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

/***/ "./ts/model/users.ts":
/*!***************************!*\
  !*** ./ts/model/users.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __webpack_require__(/*! ../utils/api */ "./ts/utils/api.ts");
const long_connection_1 = __webpack_require__(/*! ./long-connection */ "./ts/model/long-connection.ts");
const URL = "/users";
let timestamp = 0;
const getURL = (isLong = false) => {
    return (isLong ? "/long" : "") + URL;
};
const getUser = () => {
    return api_1.default.get(getURL());
};
const getLongUser = () => {
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
let shortUserResolver;
let shortUserRejecter;
const beginShowUserLoop = () => {
    if (intervalHandler === -1) {
        setTimeout(() => {
            getUser().then((res) => {
                if (res.ok) {
                    res.json().then((data) => {
                        if (data.timestamp > timestamp) {
                            shortUserResolver(data);
                        }
                    });
                }
                else {
                    shortUserRejecter(res);
                }
            });
        });
        intervalHandler = setInterval(() => {
            getUser().then((res) => {
                if (res.ok) {
                    res.json().then((data) => {
                        if (data.timestamp > timestamp) {
                            shortUserResolver(data.users);
                        }
                    });
                }
                else {
                    shortUserRejecter(res);
                }
            });
        }, 5000);
    }
};
const getShortUser = () => {
    return new Promise((resolve, reject) => {
        shortUserResolver = resolve;
        shortUserRejecter = reject;
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
const receiveUsers = (tmpTimestamp) => {
    timestamp = Math.max(timestamp, tmpTimestamp);
    beginShowUserLoop();
    return Promise.race([getSignal(), long_connection_1.getUsers(timestamp), getLongUser(), getShortUser()]).then((data) => {
        if (timestamp > data.timestamp) {
            return receiveUsers(timestamp);
        }
        else {
            timestamp = data.timestamp;
            return data;
        }
    });
};
exports.receiveUsers = receiveUsers;
const stopUser = () => {
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
exports.stopUser = stopUser;


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
    STATUS_CODES[STATUS_CODES["FORBIDDEN"] = 403] = "FORBIDDEN";
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

/***/ "./ts/viewcontroller/chat.tsx":
/*!************************************!*\
  !*** ./ts/viewcontroller/chat.tsx ***!
  \************************************/
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
const { memo, useState, useEffect, useRef, useCallback, useReducer } = React;
const login_1 = __webpack_require__(/*! ../model/login */ "./ts/model/login.ts");
const chat_1 = __webpack_require__(/*! ../model/chat */ "./ts/model/chat.ts");
const status_error_codes_1 = __webpack_require__(/*! ../utils/status-error-codes */ "./ts/utils/status-error-codes.ts");
const event_1 = __webpack_require__(/*! ../utils/event */ "./ts/utils/event.ts");
const error_message_1 = __webpack_require__(/*! ./error-message */ "./ts/viewcontroller/error-message.tsx");
const users_1 = __webpack_require__(/*! ../model/users */ "./ts/model/users.ts");
exports.Chat = memo(({ data }) => {
    const [messages, dispatchMessage] = useReducer((state, newMessages) => {
        return [...state, ...newMessages];
    }, data);
    const [users, setUsers] = useState([]);
    const [usersTimeStamp, setUsersTimeStamp] = useState(0);
    const initTimeStamp = messages.length > 0 ? messages[messages.length - 1].timestamp : 0;
    const [messageTimeStamp, setMessageTimeStamp] = useState(initTimeStamp);
    const messageRef = useRef(null);
    const userRef = useRef(null);
    useEffect(() => {
        if (messageRef && messageRef.current) {
            messageRef.current.scrollTop = messageRef.current.scrollHeight;
        }
    }, []);
    useEffect(() => {
        users_1.receiveUsers(usersTimeStamp).then(({ timestamp, users }) => {
            setUsersTimeStamp(timestamp);
            setUsers(users);
            if (userRef && userRef.current) {
                userRef.current.scrollTop = userRef.current.scrollHeight;
            }
        }).catch((e) => {
            chat_1.stopMessage();
            users_1.stopUser();
            event_1.dispatch(event_1.EVENTS.REFRESH);
        });
    }, [usersTimeStamp, setUsersTimeStamp, setUsers, userRef]);
    useEffect(() => {
        chat_1.receiveMessage(messageTimeStamp).then(({ timestamp, message }) => {
            setMessageTimeStamp(timestamp);
            dispatchMessage(message);
            if (messageRef && messageRef.current) {
                messageRef.current.scrollTop = messageRef.current.scrollHeight;
            }
        });
    }, [messageTimeStamp, setMessageTimeStamp, dispatchMessage, messageRef]);
    const renderUser = () => {
        return users.map((user, index) => {
            return (React.createElement("div", { className: "user-name", key: index }, user));
        });
    };
    const renderMessage = () => {
        return messages.map(({ userName, message, timestamp }) => {
            const time = new Date(timestamp).toLocaleString();
            return (React.createElement("div", { className: "single-chat", key: timestamp },
                React.createElement("time", { className: "chat-time" }, time),
                React.createElement("div", { className: "chat-name" }, userName),
                React.createElement("div", { className: "chat-content" }, message)));
        });
    };
    const [message, setMessage] = useState("");
    const [sendButtonDisabled, setSendButtonDisabled] = useState(false);
    const send = useCallback((event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        try {
            const response = yield chat_1.sendMessage(message);
            if (response.ok) {
                event_1.dispatch(event_1.EVENTS.HIDE_ERROR);
                setMessage("");
                setSendButtonDisabled(true);
            }
            else {
                if (response.status === status_error_codes_1.STATUS_CODES.UNAUTHORIZED || response.status === status_error_codes_1.STATUS_CODES.FORBIDDEN) {
                    chat_1.stopMessage();
                    users_1.stopUser();
                    event_1.dispatch(event_1.EVENTS.REFRESH);
                }
            }
        }
        catch (e) {
            event_1.dispatch(event_1.EVENTS.DISPLAY_ERROR, error_message_1.ERROR_TYPE.NETWORK_ERROR);
        }
    }), [message, setSendButtonDisabled]);
    const handleInput = useCallback((e) => {
        e.preventDefault();
        const value = e.target.value;
        setMessage(value);
        setSendButtonDisabled(value === "");
    }, [setMessage, setSendButtonDisabled]);
    const signOutHandler = useCallback((event) => {
        event.preventDefault();
        login_1.signOut().then(() => {
            users_1.stopUser();
            chat_1.stopMessage();
            event_1.dispatch(event_1.EVENTS.REFRESH);
        });
    }, []);
    return (React.createElement("div", null,
        React.createElement("div", { className: "chat-page" },
            React.createElement("section", { className: "users-list" },
                React.createElement("h5", null, "Users"),
                React.createElement("div", { className: "users-detail", ref: userRef }, renderUser())),
            React.createElement("section", { className: "chat-list" },
                React.createElement("h5", { className: "chat-title" }, "Messages"),
                React.createElement("div", { className: "chat-detail", ref: messageRef }, renderMessage()))),
        React.createElement("div", { className: "chat-action" },
            React.createElement("span", null, "Message:"),
            React.createElement("input", { type: "text", className: "message", minLength: 1, value: message, onChange: handleInput }),
            React.createElement("button", { className: "send", onClick: send, disabled: sendButtonDisabled }, "Send")),
        React.createElement("div", { className: "user-action" },
            React.createElement("button", { className: "signout", onClick: signOutHandler }, "Sign out"))));
});


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
const chat_2 = __webpack_require__(/*! ./chat */ "./ts/viewcontroller/chat.tsx");
var PAGES;
(function (PAGES) {
    PAGES[PAGES["INIT"] = 0] = "INIT";
    PAGES[PAGES["LOGIN"] = 1] = "LOGIN";
    PAGES[PAGES["CHAT"] = 2] = "CHAT";
})(PAGES || (PAGES = {}));
;
exports.Index = memo(() => {
    const [currentPage, setCurrentPage] = useState(PAGES.INIT);
    const loadingEl = useRef(null);
    const showLoading = useCallback((show) => {
        if (loadingEl && loadingEl.current) {
            loadingEl.current.hidden = !show;
        }
    }, [loadingEl]);
    const [chatData, setChatData] = useState([]);
    useEffect(() => {
        const checkUser = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                showLoading(true);
                const response = yield chat_1.getMessage();
                showLoading(false);
                if (response.ok) {
                    event_1.dispatch(event_1.EVENTS.HIDE_ERROR);
                    const chat = yield response.json();
                    setChatData(chat);
                    setCurrentPage(PAGES.CHAT);
                }
                else if (response.status === status_error_codes_1.STATUS_CODES.UNAUTHORIZED || response.status === status_error_codes_1.STATUS_CODES.FORBIDDEN) {
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
        checkUser();
        event_1.addEventListener(event_1.EVENTS.REFRESH, checkUser);
        return () => {
            event_1.removeEventListener(event_1.EVENTS.REFRESH, checkUser);
        };
    }, []);
    const renderContent = useCallback(() => {
        if (currentPage === PAGES.LOGIN) {
            return (React.createElement(login_1.Login, null));
        }
        else if (currentPage === PAGES.CHAT) {
            return (React.createElement(chat_2.Chat, { data: chatData }));
        }
        else {
            return "";
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
const { memo, useState, useCallback } = React;
const login_1 = __webpack_require__(/*! ../model/login */ "./ts/model/login.ts");
const status_error_codes_1 = __webpack_require__(/*! ../utils/status-error-codes */ "./ts/utils/status-error-codes.ts");
const event_1 = __webpack_require__(/*! ../utils/event */ "./ts/utils/event.ts");
const error_message_1 = __webpack_require__(/*! ./error-message */ "./ts/viewcontroller/error-message.tsx");
exports.Login = memo(() => {
    const [userName, setUserName] = useState("");
    const keyPressHandler = useCallback((e) => {
        const value = e.target.value;
        setUserName(value);
    }, [setUserName]);
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
                if (response.status === status_error_codes_1.STATUS_CODES.UNAUTHORIZED || response.status === status_error_codes_1.STATUS_CODES.FORBIDDEN) {
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
            React.createElement("input", { id: "user-name", type: "text", value: userName, onChange: keyPressHandler })),
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
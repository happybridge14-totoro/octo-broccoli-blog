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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


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

/***/ "./ts/model/login.ts":
/*!***************************!*\
  !*** ./ts/model/login.ts ***!
  \***************************/
/*! exports provided: signIn, signOut, check */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check", function() { return check; });
/* harmony import */ var _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mini-jquery */ "./ts/utils/mini-jquery.ts");

var URL = "/session";

var signIn = function signIn(userName) {
  return _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"].post(URL, {
    userName: userName
  });
};

var signOut = function signOut() {
  return _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](URL);
};

var check = function check() {
  return _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"].get(URL);
};



/***/ }),

/***/ "./ts/model/recipes.ts":
/*!*****************************!*\
  !*** ./ts/model/recipes.ts ***!
  \*****************************/
/*! exports provided: getRecipesList, getRecipeDetail, addRecipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipesList", function() { return getRecipesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecipeDetail", function() { return getRecipeDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRecipe", function() { return addRecipe; });
/* harmony import */ var _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mini-jquery */ "./ts/utils/mini-jquery.ts");

var RECIPE_URL = "/recipe";
var RECIPES_URL = "/recipes";
;
;

var getRecipeURLById = function getRecipeURLById(id) {
  return RECIPE_URL + "/" + id;
};

var getRecipesList = function getRecipesList() {
  return _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"].get(RECIPES_URL);
};

var getRecipeDetail = function getRecipeDetail(id) {
  return _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"].get(getRecipeURLById(id));
};

var addRecipe = function addRecipe(title, ingredients, instructions) {
  var params = {
    title: title,
    ingredients: ingredients,
    instructions: instructions
  };
  return _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"].post(RECIPE_URL, params);
};



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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);



var DEFAULT_KEY = "id";
var CLASS_NAME_ERROR = "error";
var ATTR_DATE_TIME = "datetime";
var MiniJquery = /*#__PURE__*/function () {
  function MiniJquery(parameters) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MiniJquery);

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

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MiniJquery, [{
    key: "onSubmit",
    value: function onSubmit(callback) {
      this.element.addEventListener("submit", callback);
      return this;
    }
  }, {
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
    key: "scrollToTop",
    value: function scrollToTop() {
      this.element.scrollTop = 0;
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
      if (method !== METHOD.GET) {
        param.headers = {
          'Content-Type': 'application/json'
        };
        param.body = JSON.stringify(content);
      } else {
        var query = Object.entries(content).map(function (_ref) {
          var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
        }).join("&");
        url = url + (query === "" ? "" : "?" + query);
      }
    }

    return fetch(url, param);
  };
});
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./ts/utils/status-error-codes.ts":
/*!****************************************!*\
  !*** ./ts/utils/status-error-codes.ts ***!
  \****************************************/
/*! exports provided: STATUS_CODES, ERROR_CODES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_CODES", function() { return STATUS_CODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_CODES", function() { return ERROR_CODES; });
var STATUS_CODES;

(function (STATUS_CODES) {
  STATUS_CODES[STATUS_CODES["SUCCESS"] = 200] = "SUCCESS";
  STATUS_CODES[STATUS_CODES["BAD_RQUEST"] = 400] = "BAD_RQUEST";
  STATUS_CODES[STATUS_CODES["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  STATUS_CODES[STATUS_CODES["NOT_FOUND"] = 404] = "NOT_FOUND";
  STATUS_CODES[STATUS_CODES["DUPLICATED"] = 409] = "DUPLICATED";
  STATUS_CODES[STATUS_CODES["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(STATUS_CODES || (STATUS_CODES = {}));

;
var ERROR_CODES;

(function (ERROR_CODES) {
  ERROR_CODES[ERROR_CODES["WRONG_USER_ID"] = 3] = "WRONG_USER_ID";
  ERROR_CODES[ERROR_CODES["WRONG_USER_NAME"] = 4] = "WRONG_USER_NAME";
  ERROR_CODES[ERROR_CODES["SESSION_NOT_FOUND"] = 5] = "SESSION_NOT_FOUND";
  ERROR_CODES[ERROR_CODES["WRONG_SESSION"] = 6] = "WRONG_SESSION";
  ERROR_CODES[ERROR_CODES["WRONG_RECIPE_ID"] = 11] = "WRONG_RECIPE_ID";
  ERROR_CODES[ERROR_CODES["WRONG_RECIPE_TITLE"] = 12] = "WRONG_RECIPE_TITLE";
  ERROR_CODES[ERROR_CODES["WRONG_RECIPE_INGREDIENTS"] = 13] = "WRONG_RECIPE_INGREDIENTS";
  ERROR_CODES[ERROR_CODES["WRONG_RECIPE_INSTRUCTIONS"] = 14] = "WRONG_RECIPE_INSTRUCTIONS";
})(ERROR_CODES || (ERROR_CODES = {}));

;
;


/***/ }),

/***/ "./ts/viewcontroller/action.ts":
/*!*************************************!*\
  !*** ./ts/viewcontroller/action.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/login */ "./ts/model/login.ts");
/* harmony import */ var _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/status-error-codes */ "./ts/utils/status-error-codes.ts");
/* harmony import */ var _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/mini-jquery */ "./ts/utils/mini-jquery.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error */ "./ts/viewcontroller/error.ts");






var userStage = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])("#user-stage");
var anonymousTemplate = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])("#anonymous");
var loggedInTemplate = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])("#logged-in");
var isChecking = false;
var gotoHomepageCB;
var gotoAddRecipeCB;

var displayAnonymousPage = function displayAnonymousPage() {
  var anonymousPage = anonymousTemplate.templateClone || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var input = anonymousPage.find("#username") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var signInBtn = anonymousPage.find("#sign-in") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])();
  signInBtn.disable = true;
  input.onInput(function (event) {
    event.preventDefault();
    signInBtn.disable = input.value === "";
  });
  signInBtn.onClick( /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var response, error;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.next = 3;
              return Object(_model_login__WEBPACK_IMPORTED_MODULE_2__["signIn"])(input.value || "");

            case 3:
              response = _context.sent;
              input.clearValue();

              if (!response.ok) {
                _context.next = 10;
                break;
              }

              Object(_error__WEBPACK_IMPORTED_MODULE_5__["hideError"])();
              displayLoggedInPage();
              _context.next = 18;
              break;

            case 10:
              if (!(response.status === _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_3__["STATUS_CODES"].UNAUTHORIZED)) {
                _context.next = 17;
                break;
              }

              _context.next = 13;
              return response.json();

            case 13:
              error = _context.sent;

              if (!(error.errorCode === _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_3__["ERROR_CODES"].WRONG_USER_NAME)) {
                _context.next = 17;
                break;
              }

              Object(_error__WEBPACK_IMPORTED_MODULE_5__["displayError"])(_error__WEBPACK_IMPORTED_MODULE_5__["ERROR_TYPE"].USER_NAME_ERROR);
              return _context.abrupt("return");

            case 17:
              Object(_error__WEBPACK_IMPORTED_MODULE_5__["displayError"])(_error__WEBPACK_IMPORTED_MODULE_5__["ERROR_TYPE"].UNEXPECTED_ERROR);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  userStage.removeChildren();
  userStage.append(anonymousPage);
};

var displayLoggedInPage = function displayLoggedInPage() {
  var loggedInPage = loggedInTemplate.templateClone || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var addItem = loggedInPage.find("#add") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var signOutBtn = loggedInPage.find("#sign-out") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])();
  addItem.onClick(function (event) {
    event.preventDefault();

    if (gotoAddRecipeCB) {
      gotoAddRecipeCB();
    }
  });
  signOutBtn.onClick( /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              _context2.next = 3;
              return Object(_model_login__WEBPACK_IMPORTED_MODULE_2__["signOut"])();

            case 3:
              Object(_error__WEBPACK_IMPORTED_MODULE_5__["hideError"])();
              displayAnonymousPage();

              if (gotoHomepageCB) {
                gotoHomepageCB();
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  userStage.removeChildren();
  userStage.append(loggedInPage);
};

var displayAction = /*#__PURE__*/function () {
  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(gotoHomepage, gotoAddRecipe) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (isChecking) {
              _context3.next = 9;
              break;
            }

            isChecking = true;
            gotoHomepageCB = gotoHomepage;
            gotoAddRecipeCB = gotoAddRecipe;
            _context3.next = 6;
            return Object(_model_login__WEBPACK_IMPORTED_MODULE_2__["check"])();

          case 6:
            response = _context3.sent;
            isChecking = false;

            if (response.ok) {
              displayLoggedInPage();
            } else {
              displayAnonymousPage();
            }

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function displayAction(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (displayAction);

/***/ }),

/***/ "./ts/viewcontroller/error.ts":
/*!************************************!*\
  !*** ./ts/viewcontroller/error.ts ***!
  \************************************/
/*! exports provided: displayError, hideError, ERROR_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayError", function() { return displayError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideError", function() { return hideError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return ERROR_TYPE; });
/* harmony import */ var _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mini-jquery */ "./ts/utils/mini-jquery.ts");

var ERROR_TYPE;

(function (ERROR_TYPE) {
  ERROR_TYPE[ERROR_TYPE["USER_NAME_ERROR"] = 0] = "USER_NAME_ERROR";
  ERROR_TYPE[ERROR_TYPE["UNEXPECTED_ERROR"] = 1] = "UNEXPECTED_ERROR";
  ERROR_TYPE[ERROR_TYPE["NETWORK_ERROR"] = 2] = "NETWORK_ERROR";
  ERROR_TYPE[ERROR_TYPE["RECIPE_ID_ERROR"] = 3] = "RECIPE_ID_ERROR";
  ERROR_TYPE[ERROR_TYPE["RECIPE_PARAM_ERROR"] = 4] = "RECIPE_PARAM_ERROR";
  ERROR_TYPE[ERROR_TYPE["SESSION_ERROR"] = 5] = "SESSION_ERROR";
})(ERROR_TYPE || (ERROR_TYPE = {}));

;

var getErrorMessage = function getErrorMessage(type) {
  var message = "";

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

var CLASS_DISPLAY = "display";
var errorview = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"])(".error");

var displayError = function displayError(type) {
  errorview.text = getErrorMessage(type);
  errorview.addClass(CLASS_DISPLAY);
};

var hideError = function hideError() {
  errorview.text = "";
  errorview.removeClass(CLASS_DISPLAY);
};



/***/ }),

/***/ "./ts/viewcontroller/index.ts":
/*!************************************!*\
  !*** ./ts/viewcontroller/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageInterface */ "./ts/viewcontroller/pageInterface.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./ts/viewcontroller/action.ts");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipe */ "./ts/viewcontroller/recipe.ts");




var gotoHomePage = function gotoHomePage() {
  Object(_recipe__WEBPACK_IMPORTED_MODULE_2__["default"])(_pageInterface__WEBPACK_IMPORTED_MODULE_0__["PAGES"].LIST, checkUserStatus);
};

var gotoAddRecipePage = function gotoAddRecipePage() {
  Object(_recipe__WEBPACK_IMPORTED_MODULE_2__["default"])(_pageInterface__WEBPACK_IMPORTED_MODULE_0__["PAGES"].ADD, checkUserStatus);
};

var checkUserStatus = function checkUserStatus() {
  Object(_action__WEBPACK_IMPORTED_MODULE_1__["default"])(gotoHomePage, gotoAddRecipePage);
};

var init = function init() {
  gotoHomePage();
  checkUserStatus();
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


/***/ }),

/***/ "./ts/viewcontroller/recipe.ts":
/*!*************************************!*\
  !*** ./ts/viewcontroller/recipe.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageInterface */ "./ts/viewcontroller/pageInterface.ts");
/* harmony import */ var _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mini-jquery */ "./ts/utils/mini-jquery.ts");
/* harmony import */ var _model_recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/recipes */ "./ts/model/recipes.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error */ "./ts/viewcontroller/error.ts");
/* harmony import */ var _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/status-error-codes */ "./ts/utils/status-error-codes.ts");





var checkUserStatusCB;
var currentPage;
var stage = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])("#recipe-stage");
var listTemplate = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])("#list");
var listRecipeTemplate = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])("#list-recipe");
var recipeDetailTemplate = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])("#recipe-detail");
var addTemplate = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])("#recipe-add");

var createRecipeListNode = function createRecipeListNode(recipe) {
  var recipeId = recipe.recipeId,
      title = recipe.title;
  var listRecipe = listRecipeTemplate.templateClone || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var recipeItem = listRecipe.find(".recipe-item") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  recipeItem.updateData(recipeId);
  var recipeTitle = listRecipe.find(".recipe-title") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  recipeTitle.updateContent(title);
  return listRecipe;
};

var renderMainPage = function renderMainPage(recipes) {
  var listPage = listTemplate.templateClone || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var listContentPage = listPage.find("#list-content") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  listContentPage.onClick(function (event) {
    event.preventDefault();
    var target = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])(event.target);
    var targetParent = target.parent || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
    var itemId = targetParent.getDataByKey();

    if (itemId || itemId === "0") {
      displayDetailPage(itemId);
    }
  });
  recipes.forEach(function (recipe) {
    listContentPage.append(createRecipeListNode(recipe));
  });
  stage.removeChildren();
  stage.append(listPage);
  stage.scrollToButtom();
};

var renderDetailPage = function renderDetailPage(_ref) {
  var title = _ref.title,
      author = _ref.author,
      ingredients = _ref.ingredients,
      instructions = _ref.instructions;
  var detailPage = recipeDetailTemplate.templateClone || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var recipeTitle = detailPage.find(".recipe-detail-title") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  recipeTitle.updateContent(title);
  var recipeAuthor = detailPage.find(".recipe-author") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  recipeAuthor.updateContent(author);
  var recipeIngredients = detailPage.find(".recipe-ingredients") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  recipeIngredients.updateContent(ingredients);
  var recipeInstructions = detailPage.find(".recipe-instructions") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  recipeInstructions.updateContent(instructions);
  var backBtn = detailPage.find(".back") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  backBtn.onClick(function (event) {
    event.preventDefault();
    displayMainPage();
  });
  stage.removeChildren();
  stage.append(detailPage);
  stage.scrollToTop();
};

var handleServiceCall = function handleServiceCall(promise) {
  return promise.then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then(function (errorMessage) {
        return Promise.reject(errorMessage);
      });
    }
  }, function (error) {
    Object(_error__WEBPACK_IMPORTED_MODULE_3__["displayError"])(_error__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"].NETWORK_ERROR);
    return null;
  });
};

var displayMainPage = function displayMainPage() {
  currentPage = _pageInterface__WEBPACK_IMPORTED_MODULE_0__["PAGES"].LIST;
  handleServiceCall(Object(_model_recipes__WEBPACK_IMPORTED_MODULE_2__["getRecipesList"])()).then(function (recipes) {
    if (recipes) {
      renderMainPage(recipes);
    }
  })["catch"](function (errorMessage) {
    Object(_error__WEBPACK_IMPORTED_MODULE_3__["displayError"])(_error__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"].UNEXPECTED_ERROR);
  });
};

var displayDetailPage = function displayDetailPage(itemId) {
  currentPage = _pageInterface__WEBPACK_IMPORTED_MODULE_0__["PAGES"].DETAIL;
  handleServiceCall(Object(_model_recipes__WEBPACK_IMPORTED_MODULE_2__["getRecipeDetail"])(itemId)).then(function (recipe) {
    if (recipe) {
      renderDetailPage(recipe);
    }
  })["catch"](function (errorMessage) {
    if (errorMessage.errorCode === _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_4__["ERROR_CODES"].WRONG_RECIPE_ID) {
      Object(_error__WEBPACK_IMPORTED_MODULE_3__["displayError"])(_error__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"].RECIPE_ID_ERROR);
    } else {
      Object(_error__WEBPACK_IMPORTED_MODULE_3__["displayError"])(_error__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"].UNEXPECTED_ERROR);
    }
  });
};

var displayAddPage = function displayAddPage() {
  currentPage = _pageInterface__WEBPACK_IMPORTED_MODULE_0__["PAGES"].ADD;
  var addPage = addTemplate.templateClone || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var submitBtn = addPage.find(".submit") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var recipeTitle = addPage.find("#recipe-add-title") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var recipeIngredients = addPage.find("#recipe-ingredients") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var recipeInstructions = addPage.find("#recipe-instructions") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var submitForm = addPage.find(".recipe-form") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var successMessage = addPage.find(".success-message") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  successMessage.hidden = true;
  submitBtn.disable = true;

  var checkSubmit = function checkSubmit(event) {
    submitBtn.disable = recipeTitle.value === "" || recipeIngredients.value === "" || recipeInstructions.value === "";
  };

  recipeTitle.onInput(checkSubmit);
  recipeIngredients.onInput(checkSubmit);
  recipeInstructions.onInput(checkSubmit);
  var submitting = false;
  submitForm.onSubmit(function (event) {
    event.preventDefault();
    if (submitting) return;
    submitting = true;
    var title = recipeTitle.value;
    var ingredients = recipeIngredients.value;
    var instructions = recipeInstructions.value;
    handleServiceCall(Object(_model_recipes__WEBPACK_IMPORTED_MODULE_2__["addRecipe"])(title, ingredients, instructions)).then(function (recipe) {
      if (recipe) {
        successMessage.hidden = false;
        setTimeout(function () {
          displayMainPage();
        }, 2000);
      } else {
        submitting = false;
      }
    })["catch"](function (errorMessage) {
      switch (errorMessage.errorCode) {
        case _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_4__["ERROR_CODES"].SESSION_NOT_FOUND:
        case _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_4__["ERROR_CODES"].WRONG_USER_ID:
          Object(_error__WEBPACK_IMPORTED_MODULE_3__["displayError"])(_error__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"].SESSION_ERROR);
          checkUserStatusCB();
          displayMainPage();
          break;

        case _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_4__["ERROR_CODES"].WRONG_RECIPE_INSTRUCTIONS:
        case _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_4__["ERROR_CODES"].WRONG_RECIPE_INGREDIENTS:
        case _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_4__["ERROR_CODES"].WRONG_RECIPE_TITLE:
          Object(_error__WEBPACK_IMPORTED_MODULE_3__["displayError"])(_error__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"].RECIPE_PARAM_ERROR);
          submitting = false;
          break;

        default:
          submitting = false;
          Object(_error__WEBPACK_IMPORTED_MODULE_3__["displayError"])(_error__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"].UNEXPECTED_ERROR);
          break;
      }
    });
  });
  var backBtn = addPage.find(".back") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_1__["default"])();
  backBtn.onClick(function (event) {
    event.preventDefault();
    displayMainPage();
  });
  stage.removeChildren();
  stage.append(addPage);
};

var displayRecipe = function displayRecipe(target, checkUserStatus) {
  if (currentPage !== target) {
    checkUserStatusCB = checkUserStatus;

    switch (target) {
      case _pageInterface__WEBPACK_IMPORTED_MODULE_0__["PAGES"].ADD:
        displayAddPage();
        break;

      default:
        displayMainPage();
        break;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (displayRecipe);

/***/ })

/******/ });
//# sourceMappingURL=app-bundle.js.map
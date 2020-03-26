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

/***/ "./ts/model/chat.ts":
/*!**************************!*\
  !*** ./ts/model/chat.ts ***!
  \**************************/
/*! exports provided: sendMessage, getMessage, receiveMessage, stopMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessage", function() { return getMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveMessage", function() { return receiveMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopMessage", function() { return stopMessage; });
/* harmony import */ var _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mini-jquery */ "./ts/utils/mini-jquery.ts");
/* harmony import */ var _long_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./long-connection */ "./ts/model/long-connection.ts");


var URL = "/chat";
var timestamp = 0;

var getURL = function getURL() {
  var isLong = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (isLong ? "/long" : "") + URL;
};

var sendMessage = function sendMessage(message) {
  return _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"].post(getURL(), {
    message: message
  });
};

var getMessage = function getMessage() {
  return _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"].get(getURL());
};

var getLongMessage = function getLongMessage() {
  return _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"].get(getURL(true)).then(function (res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  });
};

var intervalHandler = -1;
var shortMessageResolver;
var shortMessageRejecter;

var beginShowMessageLoop = function beginShowMessageLoop() {
  if (intervalHandler === -1) {
    intervalHandler = setInterval(function () {
      getMessage().then(function (res) {
        if (res.ok) {
          res.json().then(function (datas) {
            if (datas.length > 0 && datas[datas.length - 1].timestamp > timestamp) {
              var message = datas.filter(function (data) {
                return data.timestamp > timestamp;
              });
              timestamp = datas[datas.length - 1].timestamp;
              shortMessageResolver({
                timestamp: timestamp,
                message: message
              });
            }
          });
        } else {
          shortMessageRejecter(res);
        }
      });
    }, 5000);
  }
};

var getShortMessage = function getShortMessage() {
  return new Promise(function (resolve, reject) {
    shortMessageResolver = resolve;
    shortMessageRejecter = reject;
  });
};

var signalRejecter;
var signalPromise;

var getSignal = function getSignal() {
  if (!signalPromise) {
    signalPromise = new Promise(function (resolve, reject) {
      signalRejecter = reject;
    });
  }

  return signalPromise;
};

var receiveMessage = function receiveMessage(tmpTimestamp) {
  timestamp = Math.max(timestamp, tmpTimestamp);
  beginShowMessageLoop();
  return Promise.race([getSignal(), Object(_long_connection__WEBPACK_IMPORTED_MODULE_1__["getChat"])(timestamp), getLongMessage(), getShortMessage()]).then(function (data) {
    if (timestamp > data.timestamp) {
      return receiveMessage(timestamp);
    } else {
      timestamp = data.timestamp;
      return data;
    }
  });
};

var stopMessage = function stopMessage() {
  timestamp = 0;
  Object(_long_connection__WEBPACK_IMPORTED_MODULE_1__["stop"])();

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



/***/ }),

/***/ "./ts/model/dataInterface.ts":
/*!***********************************!*\
  !*** ./ts/model/dataInterface.ts ***!
  \***********************************/
/*! exports provided: TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
var TYPE;

(function (TYPE) {
  TYPE["USERS"] = "users";
  TYPE["CHAT"] = "chat";
})(TYPE || (TYPE = {}));

;
;
;
;


/***/ }),

/***/ "./ts/model/login.ts":
/*!***************************!*\
  !*** ./ts/model/login.ts ***!
  \***************************/
/*! exports provided: signIn, signOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signOut", function() { return signOut; });
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



/***/ }),

/***/ "./ts/model/long-connection.ts":
/*!*************************************!*\
  !*** ./ts/model/long-connection.ts ***!
  \*************************************/
/*! exports provided: stop, getUsers, getChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChat", function() { return getChat; });
/* harmony import */ var _sse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sse */ "./ts/model/sse.ts");
/* harmony import */ var _websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./websocket */ "./ts/model/websocket.ts");
/* harmony import */ var _dataInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataInterface */ "./ts/model/dataInterface.ts");



var userTimeStamp = 0;
var chatTimeStamp = 0;
var userResolver;
var chatResolver;
var isStarted = false;

var filterMessage = function filterMessage(data) {
  if (data.type === _dataInterface__WEBPACK_IMPORTED_MODULE_2__["TYPE"].CHAT) {
    if (data.timestamp > chatTimeStamp) {
      if (chatResolver) {
        var newData = {
          timestamp: data.timestamp,
          message: data.message
        };
        chatResolver(newData);
        chatTimeStamp = data.timestamp;
      }

      chatResolver = null;
    }
  } else {
    if (data.timestamp > userTimeStamp) {
      if (userResolver) {
        var _newData = {
          timestamp: data.timestamp,
          users: data.users
        };
        userResolver(_newData);
        userTimeStamp = data.timestamp;
      }

      userResolver = null;
    }
  }
};

var start = function start() {
  Object(_sse__WEBPACK_IMPORTED_MODULE_0__["start"])(filterMessage);
  Object(_websocket__WEBPACK_IMPORTED_MODULE_1__["start"])(filterMessage);
};

var stop = function stop() {
  if (isStarted) {
    Object(_sse__WEBPACK_IMPORTED_MODULE_0__["stop"])();
    Object(_websocket__WEBPACK_IMPORTED_MODULE_1__["stop"])();
  }

  isStarted = false;
};

var getUsers = function getUsers(timestamp) {
  if (!isStarted) {
    start();
    isStarted = true;
  }

  if (userTimeStamp < timestamp) {
    userTimeStamp = timestamp;
  }

  return new Promise(function (resolve, reject) {
    userResolver = resolve;
  });
};

var getChat = function getChat(timestamp) {
  if (!isStarted) {
    start();
    isStarted = true;
  }

  if (chatTimeStamp < timestamp) {
    chatTimeStamp = timestamp;
  }

  return new Promise(function (resolve, reject) {
    chatResolver = resolve;
  });
};



/***/ }),

/***/ "./ts/model/sse.ts":
/*!*************************!*\
  !*** ./ts/model/sse.ts ***!
  \*************************/
/*! exports provided: start, stop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
var evtSource;

var start = function start(cb) {
  if (!evtSource) {
    evtSource = new EventSource("/sse");

    evtSource.onmessage = function (event) {
      try {
        var _data = JSON.parse(event.data);

        cb(_data);
      } catch (e) {}
    };
  }
};

var stop = function stop() {
  if (evtSource) {
    evtSource.close();
    evtSource = null;
  }
};



/***/ }),

/***/ "./ts/model/users.ts":
/*!***************************!*\
  !*** ./ts/model/users.ts ***!
  \***************************/
/*! exports provided: receiveUsers, stopUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveUsers", function() { return receiveUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopUser", function() { return stopUser; });
/* harmony import */ var _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mini-jquery */ "./ts/utils/mini-jquery.ts");
/* harmony import */ var _long_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./long-connection */ "./ts/model/long-connection.ts");


var URL = "/users";
var timestamp = 0;

var getURL = function getURL() {
  var isLong = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (isLong ? "/long" : "") + URL;
};

var getUser = function getUser() {
  return _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"].get(getURL());
};

var getLongUser = function getLongUser() {
  return _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"].get(getURL(true)).then(function (res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  });
};

var intervalHandler = -1;
var shortUserResolver;
var shortUserRejecter;

var beginShowUserLoop = function beginShowUserLoop() {
  if (intervalHandler === -1) {
    setTimeout(function () {
      getUser().then(function (res) {
        if (res.ok) {
          res.json().then(function (data) {
            if (data.timestamp > timestamp) {
              shortUserResolver(data);
            }
          });
        } else {
          shortUserRejecter(res);
        }
      });
    });
    intervalHandler = setInterval(function () {
      getUser().then(function (res) {
        if (res.ok) {
          res.json().then(function (data) {
            if (data.timestamp > timestamp) {
              shortUserResolver(data.users);
            }
          });
        } else {
          shortUserRejecter(res);
        }
      });
    }, 5000);
  }
};

var getShortUser = function getShortUser() {
  return new Promise(function (resolve, reject) {
    shortUserResolver = resolve;
    shortUserRejecter = reject;
  });
};

var signalRejecter;
var signalPromise;

var getSignal = function getSignal() {
  if (!signalPromise) {
    signalPromise = new Promise(function (resolve, reject) {
      signalRejecter = reject;
    });
  }

  return signalPromise;
};

var receiveUsers = function receiveUsers(tmpTimestamp) {
  timestamp = Math.max(timestamp, tmpTimestamp);
  beginShowUserLoop();
  return Promise.race([getSignal(), Object(_long_connection__WEBPACK_IMPORTED_MODULE_1__["getUsers"])(timestamp), getLongUser(), getShortUser()]).then(function (data) {
    if (timestamp > data.timestamp) {
      return receiveUsers(timestamp);
    } else {
      timestamp = data.timestamp;
      return data;
    }
  });
};

var stopUser = function stopUser() {
  timestamp = 0;
  Object(_long_connection__WEBPACK_IMPORTED_MODULE_1__["stop"])();

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



/***/ }),

/***/ "./ts/model/websocket.ts":
/*!*******************************!*\
  !*** ./ts/model/websocket.ts ***!
  \*******************************/
/*! exports provided: start, stop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
var ws;
var intervalHandler = -1;
var ONE_MINUTE = 60000;

var start = function start(cb) {
  if (!ws) {
    ws = new WebSocket('ws://localhost:3000');

    var ping = function ping() {
      clearInterval(intervalHandler);
      intervalHandler = setInterval(function () {
        var _ws;

        var ping = "ping";
        (_ws = ws) === null || _ws === void 0 ? void 0 : _ws.send(JSON.stringify({
          ping: ping
        }));
      }, ONE_MINUTE);
    };

    ws.onmessage = function (event) {
      var data = JSON.parse(event.data);
      cb(data);
      ping();
    };

    ws.onopen = function () {
      ping();
    };

    window.onbeforeunload = function () {
      if (ws) {
        ws.onclose = function () {}; // disable onclose handler first


        ws.close();
      }
    };

    ws.onclose = function () {
      clearInterval(intervalHandler);
      intervalHandler = -1;
      ws = null;
    };
  }
};

var stop = function stop() {
  if (ws) {
    ws.close();
  }

  delete window.onbeforeunload;
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
  ERROR_CODES[ERROR_CODES["ITEM_ID_ERROR"] = 10] = "ITEM_ID_ERROR";
  ERROR_CODES[ERROR_CODES["ITEM_NAME_ERROR"] = 11] = "ITEM_NAME_ERROR";
  ERROR_CODES[ERROR_CODES["ITEM_QUANTITY_ERROR"] = 12] = "ITEM_QUANTITY_ERROR";
  ERROR_CODES[ERROR_CODES["ITEM_DULPLICATED"] = 15] = "ITEM_DULPLICATED";
  ERROR_CODES[ERROR_CODES["NOT_FOUND"] = 1000] = "NOT_FOUND";
})(ERROR_CODES || (ERROR_CODES = {}));

;
;


/***/ }),

/***/ "./ts/viewcontroller/chat.ts":
/*!***********************************!*\
  !*** ./ts/viewcontroller/chat.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/mini-jquery */ "./ts/utils/mini-jquery.ts");
/* harmony import */ var _model_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/login */ "./ts/model/login.ts");
/* harmony import */ var _model_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/chat */ "./ts/model/chat.ts");
/* harmony import */ var _model_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/users */ "./ts/model/users.ts");
/* harmony import */ var _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/status-error-codes */ "./ts/utils/status-error-codes.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error */ "./ts/viewcontroller/error.ts");








var chatPageTemplate = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])("#chat");
var userTemplate = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])("#user");
var chatTemplate = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])("#message");
var resolver;

var displayChat = function displayChat(parent, data) {
  var updateChat = function updateChat(_ref) {
    var userName = _ref.userName,
        message = _ref.message,
        timestamp = _ref.timestamp;
    var messagePage = chatTemplate.templateClone || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var name = messagePage.find(".chat-name") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var time = messagePage.find(".chat-time") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var content = messagePage.find(".chat-content") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
    time.time = timestamp;
    name.updateContent(userName);
    content.updateContent(message);
    parent.append(messagePage);
  };

  var handlePromise = function handlePromise(timestamp) {
    Object(_model_chat__WEBPACK_IMPORTED_MODULE_4__["receiveMessage"])(timestamp).then(function (content) {
      content.message.forEach(function (message) {
        updateChat(message);
      });
      parent.scrollToButtom();
      handlePromise(timestamp);
    })["catch"](function (e) {
      //error handler
      // if (e) {
      //     console.error(e);
      // }
      if (resolver) {
        Object(_model_chat__WEBPACK_IMPORTED_MODULE_4__["stopMessage"])();
        Object(_model_users__WEBPACK_IMPORTED_MODULE_5__["stopUser"])();
        resolver();
        resolver = null;
      }
    });
  };

  parent.removeChildren();

  if (data) {
    data.forEach(function (value) {
      updateChat(value);
    });
    parent.scrollToButtom();
    var timestamp = 0;

    if (data.length > 0) {
      timestamp = data[data.length - 1].timestamp;
    }

    handlePromise(timestamp);
  }
};

var displayUser = function displayUser(parent) {
  var updateUser = function updateUser(userName, userParent) {
    var userPage = userTemplate.templateClone || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
    var name = userPage.find(".user-name") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
    name.updateContent(userName);
    userParent.append(userPage);
  };

  var handlePromise = function handlePromise(timestamp) {
    Object(_model_users__WEBPACK_IMPORTED_MODULE_5__["receiveUsers"])(timestamp).then(function (content) {
      var parentNode = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])("");
      content.users.forEach(function (userName) {
        updateUser(userName, parentNode);
      });
      parent.removeChildren();
      parent.append(parentNode);
      parent.scrollToButtom();
      handlePromise(timestamp);
    })["catch"](function (e) {
      //error handler
      if (e) {
        console.error(e);
      }

      if (resolver) {
        Object(_model_users__WEBPACK_IMPORTED_MODULE_5__["stopUser"])();
        Object(_model_chat__WEBPACK_IMPORTED_MODULE_4__["stopMessage"])();
        resolver();
        resolver = null;
      }
    });
  };

  var timestamp = 0;
  handlePromise(timestamp);
};

var displayChatPage = function displayChatPage(stage, chat) {
  var chatPage = chatPageTemplate.templateClone || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var messagePage = chatPage.find(".chat-detail") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var userPage = chatPage.find(".users-detail") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var signout = chatPage.find(".signout") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var send = chatPage.find(".send") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var message = chatPage.find(".message") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_2__["default"])();
  send.disable = true;
  signout.onClick(function (event) {
    event.preventDefault();
    Object(_model_login__WEBPACK_IMPORTED_MODULE_3__["signOut"])().then(function () {
      if (resolver) {
        resolver();
        resolver = null;
      }

      Object(_model_users__WEBPACK_IMPORTED_MODULE_5__["stopUser"])();
      Object(_model_chat__WEBPACK_IMPORTED_MODULE_4__["stopMessage"])();
    });
  });
  message.onInput(function (event) {
    send.disable = message.value === "";
  });
  send.onClick( /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var value, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = message.value;
              _context.next = 3;
              return Object(_model_chat__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])(value);

            case 3:
              response = _context.sent;

              if (response.ok) {
                Object(_error__WEBPACK_IMPORTED_MODULE_7__["hideError"])();
                message.value = "";
                send.disable = true;
              } else {
                if (response.status === _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_6__["STATUS_CODES"].UNAUTHORIZED) {
                  if (resolver) {
                    Object(_model_chat__WEBPACK_IMPORTED_MODULE_4__["stopMessage"])();
                    Object(_model_users__WEBPACK_IMPORTED_MODULE_5__["stopUser"])();
                    resolver();
                    resolver = null;
                  }
                }
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
  stage.append(chatPage);
  displayChat(messagePage, chat);
  displayUser(userPage);
  return new Promise(function (resolve, reject) {
    resolver = resolve;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (displayChatPage);

/***/ }),

/***/ "./ts/viewcontroller/error.ts":
/*!************************************!*\
  !*** ./ts/viewcontroller/error.ts ***!
  \************************************/
/*! exports provided: displayError, hideError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayError", function() { return displayError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideError", function() { return hideError; });
/* harmony import */ var _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/mini-jquery */ "./ts/utils/mini-jquery.ts");

var CLASS_DISPLAY = "display";
var errorview = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_0__["default"])(".error");

var displayError = function displayError(message) {
  errorview.text = message;
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/chat */ "./ts/model/chat.ts");
/* harmony import */ var _utils_mini_jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/mini-jquery */ "./ts/utils/mini-jquery.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login */ "./ts/viewcontroller/login.ts");
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat */ "./ts/viewcontroller/chat.ts");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error */ "./ts/viewcontroller/error.ts");
/* harmony import */ var _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/status-error-codes */ "./ts/utils/status-error-codes.ts");








var PAGES;

(function (PAGES) {
  PAGES[PAGES["LOGIN"] = 0] = "LOGIN";
  PAGES[PAGES["CHAT"] = 1] = "CHAT";
})(PAGES || (PAGES = {}));

;
var WRONT_USER_ID_MESSAGE = "Wrong user! Please login again.";
var stage = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_3__["default"])("#stage");
var loading = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_3__["default"])(".loading");
var currentPage;

var displayPage = function displayPage(page) {
  var chat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  switch (page) {
    case PAGES.CHAT:
      if (currentPage !== PAGES.CHAT) {
        currentPage = PAGES.CHAT;
        stage.removeChildren();
        Object(_chat__WEBPACK_IMPORTED_MODULE_5__["default"])(stage, chat).then(function () {
          displayPage(PAGES.LOGIN);
        });
      }

      break;

    case PAGES.LOGIN:
      if (currentPage !== PAGES.LOGIN) {
        currentPage = PAGES.LOGIN;
        stage.removeChildren();
        Object(_login__WEBPACK_IMPORTED_MODULE_4__["default"])(stage).then(function () {
          renderPage();
        });
      }

      break;

    default:
      break;
  }
};

var renderPage = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var response, chat, errorMessage;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            loading.hidden = false;
            _context.next = 4;
            return Object(_model_chat__WEBPACK_IMPORTED_MODULE_2__["getMessage"])();

          case 4:
            response = _context.sent;
            loading.hidden = true;

            if (!response.ok) {
              _context.next = 14;
              break;
            }

            Object(_error__WEBPACK_IMPORTED_MODULE_6__["hideError"])();
            _context.next = 10;
            return response.json();

          case 10:
            chat = _context.sent;
            displayPage(PAGES.CHAT, chat);
            _context.next = 23;
            break;

          case 14:
            if (!(response.status === _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_7__["STATUS_CODES"].UNAUTHORIZED)) {
              _context.next = 22;
              break;
            }

            _context.next = 17;
            return response.json();

          case 17:
            errorMessage = _context.sent;

            if (errorMessage.errorCode === _utils_status_error_codes__WEBPACK_IMPORTED_MODULE_7__["ERROR_CODES"].WRONG_USER_ID) {
              Object(_error__WEBPACK_IMPORTED_MODULE_6__["displayError"])(WRONT_USER_ID_MESSAGE);
            } else {
              Object(_error__WEBPACK_IMPORTED_MODULE_6__["hideError"])();
            }

            displayPage(PAGES.LOGIN);
            _context.next = 23;
            break;

          case 22:
            console.error("Unexpect error!");

          case 23:
            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](0);
            console.error("Unexpect error!");

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 25]]);
  }));

  return function renderPage() {
    return _ref.apply(this, arguments);
  };
}();

var init = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return renderPage();

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function init() {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (init);

/***/ }),

/***/ "./ts/viewcontroller/login.ts":
/*!************************************!*\
  !*** ./ts/viewcontroller/login.ts ***!
  \************************************/
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






var USER_NAME_ERROR_MESSAGE = "User name is not valid!";
var UNEXPECTED_ERROR_MESSAGE = "Something went wrong!";
var template = Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])("#login");

var displayLoginPage = function displayLoginPage(parentElement) {
  var loginPage = template.templateClone || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var input = loginPage.find("#user-name") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var signin = loginPage.find(".signin") || Object(_utils_mini_jquery__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var resolver;
  var rejecter;

  if (!loginPage.element) {
    throw new Error("#signin is not a template node");
  }

  signin.onClick( /*#__PURE__*/function () {
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
              resolver && resolver(true);
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

              Object(_error__WEBPACK_IMPORTED_MODULE_5__["displayError"])(USER_NAME_ERROR_MESSAGE);
              return _context.abrupt("return");

            case 17:
              Object(_error__WEBPACK_IMPORTED_MODULE_5__["displayError"])(UNEXPECTED_ERROR_MESSAGE);

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
  parentElement.append(loginPage);
  return new Promise(function (resolve, reject) {
    resolver = resolve;
    rejecter = reject;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (displayLoginPage);

/***/ })

/******/ });
//# sourceMappingURL=app-bundle.js.map
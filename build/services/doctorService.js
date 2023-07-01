"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _index = _interopRequireDefault(require("../models/index"));
var _lodash = _interopRequireDefault(require("lodash"));
var _emailService = _interopRequireDefault(require("../services/emailService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
require('dotenv').config();
var MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;
var getTopDoctorHome = function getTopDoctorHome(limitInput) {
  return new Promise( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
      var users;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _index["default"].User.findAll({
              limit: limitInput,
              where: {
                roleId: 'R2'
              },
              order: [["createdAt", "DESC"]],
              attributes: {
                exclude: ['password']
              },
              include: [{
                model: _index["default"].Allcode,
                as: 'positionData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Allcode,
                as: 'genderData',
                attributes: ['valueEn', 'valueVi']
              }],
              raw: true,
              nest: true
            });
          case 3:
            users = _context.sent;
            resolve({
              errCode: 0,
              data: users
            });
            _context.next = 10;
            break;
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            reject(_context.t0);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};
var getAllDoctors = function getAllDoctors() {
  return new Promise( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
      var _doctors;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _index["default"].User.findAll({
              where: {
                roleId: 'R2'
              },
              attributes: {
                exclude: ['password', 'image']
              }
            });
          case 3:
            _doctors = _context2.sent;
            resolve({
              errCode: 0,
              data: _doctors
            });
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};
var checkRequiredFields = function checkRequiredFields(inputData) {
  var arrFields = ['doctorId', 'contentHTML', 'contentMarkdown', 'test', 'selectedPrice', 'selectedPayment', 'selectedProvince', 'addressClinic', 'note', 'specialtyId', 'clinicId'];
  var isValid = true;
  var element = '';
  for (var i = 0; i < arrFields.length; i++) {
    if (!inputData[arrFields[i]]) {
      isValid = false;
      element = arrFields[i];
      break;
    }
  }
  return {
    isValid: isValid,
    element: element
  };
};
var saveDetailInfoDoctors = function saveDetailInfoDoctors(inputData) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(resolve, reject) {
      var checkObj, doctorMarkdown, doctorInfo;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            checkObj = checkRequiredFields(inputData);
            if (!(checkObj.isValid === false)) {
              _context3.next = 6;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: "Missing parameter:".concat(checkObj.element)
            });
            _context3.next = 40;
            break;
          case 6:
            if (!(inputData.test === 'CREATE')) {
              _context3.next = 11;
              break;
            }
            _context3.next = 9;
            return _index["default"].Markdown.create({
              contentHTML: inputData.contentHTML,
              contentMarkdown: inputData.contentMarkdown,
              description: inputData.description,
              doctorId: inputData.doctorId
            });
          case 9:
            _context3.next = 21;
            break;
          case 11:
            if (!(inputData.test === 'EDIT')) {
              _context3.next = 21;
              break;
            }
            _context3.next = 14;
            return _index["default"].Markdown.findOne({
              where: {
                doctorId: inputData.doctorId
              },
              raw: false
            });
          case 14:
            doctorMarkdown = _context3.sent;
            if (!doctorMarkdown) {
              _context3.next = 21;
              break;
            }
            doctorMarkdown.contentHTML = inputData.contentHTML;
            doctorMarkdown.contentMarkdown = inputData.contentMarkdown;
            doctorMarkdown.description = inputData.description;
            _context3.next = 21;
            return doctorMarkdown.save();
          case 21:
            _context3.next = 23;
            return _index["default"].Doctor_Info.findOne({
              where: {
                doctorId: inputData.doctorId
              },
              raw: false
            });
          case 23:
            doctorInfo = _context3.sent;
            if (!doctorInfo) {
              _context3.next = 37;
              break;
            }
            doctorInfo.doctorId = inputData.doctorId;
            doctorInfo.priceId = inputData.selectedPrice;
            doctorInfo.paymentId = inputData.selectedPayment;
            doctorInfo.provinceId = inputData.selectedProvince;
            doctorInfo.addressClinic = inputData.addressClinic;
            doctorInfo.note = inputData.note;
            doctorInfo.specialtyId = inputData.specialtyId;
            doctorInfo.clinicId = inputData.clinicId;
            _context3.next = 35;
            return doctorInfo.save();
          case 35:
            _context3.next = 39;
            break;
          case 37:
            _context3.next = 39;
            return _index["default"].Doctor_Info.create({
              doctorId: inputData.doctorId,
              priceId: inputData.selectedPrice,
              paymentId: inputData.selectedPayment,
              provinceId: inputData.selectedProvince,
              addressClinic: inputData.addressClinic,
              note: inputData.note,
              specialtyId: inputData.specialtyId,
              clinicId: inputData.clinicId
            });
          case 39:
            resolve({
              errCode: 0,
              errMessage: 'Save info doctor successfully'
            });
          case 40:
            _context3.next = 45;
            break;
          case 42:
            _context3.prev = 42;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);
          case 45:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 42]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
var getDetailDoctorById = function getDetailDoctorById(inputId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            if (inputId) {
              _context4.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing required parameter'
            });
            _context4.next = 11;
            break;
          case 5:
            _context4.next = 7;
            return _index["default"].User.findOne({
              where: {
                id: inputId
              },
              attributes: {
                exclude: ['password']
              },
              include: [{
                model: _index["default"].Doctor_Info,
                attributes: {
                  exclude: ['id', 'doctorId']
                },
                include: [{
                  model: _index["default"].Allcode,
                  as: 'priceTypeData',
                  attributes: ['valueEn', 'valueVi']
                }, {
                  model: _index["default"].Allcode,
                  as: 'paymentTypeData',
                  attributes: ['valueEn', 'valueVi']
                }, {
                  model: _index["default"].Allcode,
                  as: 'provinceTypeData',
                  attributes: ['valueEn', 'valueVi']
                }]
              }, {
                model: _index["default"].Markdown,
                attributes: ['description', 'contentHTML', 'contentMarkdown']
              }, {
                model: _index["default"].Allcode,
                as: 'positionData',
                attributes: ['valueEn', 'valueVi']
              }],
              raw: false,
              nest: true
            });
          case 7:
            data = _context4.sent;
            if (data && data.image) {
              data.image = new Buffer(data.image, 'base64').toString('binary');
            }
            if (!data) data = {};
            resolve({
              errCode: 2,
              data: data
            });
          case 11:
            resolve({
              errCode: 0,
              data: doctors
            });
            _context4.next = 17;
            break;
          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            reject(_context4.t0);
          case 17:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 14]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};
var getExtraInfoDoctorById = function getExtraInfoDoctorById(doctorId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            if (doctorId) {
              _context5.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing required parameter'
            });
            _context5.next = 10;
            break;
          case 5:
            _context5.next = 7;
            return _index["default"].Doctor_Info.findOne({
              where: {
                doctorId: doctorId
              },
              attributes: {
                exclude: ['id', 'doctorId']
              },
              include: [{
                model: _index["default"].Allcode,
                as: 'priceTypeData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Allcode,
                as: 'paymentTypeData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Allcode,
                as: 'provinceTypeData',
                attributes: ['valueEn', 'valueVi']
              }],
              raw: false,
              nest: true
            });
          case 7:
            data = _context5.sent;
            if (!data) data = {};
            resolve({
              errCode: 2,
              data: data
            });
          case 10:
            resolve({
              errCode: 0,
              data: doctors
            });
            _context5.next = 16;
            break;
          case 13:
            _context5.prev = 13;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);
          case 16:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var bulkCreateSchedule = function bulkCreateSchedule(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
      var schedule, existing, toCreate;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            if (!(!data.arrSchedule || !data.doctorId || !data.formattedDate)) {
              _context6.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing required parameter'
            });
            _context6.next = 15;
            break;
          case 5:
            schedule = data.arrSchedule;
            if (schedule && schedule.length > 0) {
              schedule = schedule.map(function (item) {
                item.maxNumber = MAX_NUMBER_SCHEDULE;
                return item;
              });
            }
            //get all existing data
            _context6.next = 9;
            return _index["default"].Schedule.findAll({
              where: {
                doctorId: data.doctorId,
                date: data.formattedDate
              },
              attributes: ['timeType', 'date', 'doctorId', 'maxNumber'],
              raw: true
            });
          case 9:
            existing = _context6.sent;
            //compare different
            toCreate = _lodash["default"].differenceWith(schedule, existing, function (a, b) {
              return a.timeType === b.timeType && +a.date === +b.date;
            }); //create data
            if (!(toCreate && toCreate.length > 0)) {
              _context6.next = 14;
              break;
            }
            _context6.next = 14;
            return _index["default"].Schedule.bulkCreate(toCreate);
          case 14:
            resolve({
              errCode: 0,
              errMessage: 'oki'
            });
          case 15:
            _context6.next = 20;
            break;
          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);
          case 20:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 17]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};
var getScheduleDoctorByDate = function getScheduleDoctorByDate(doctorId, date) {
  return new Promise( /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(resolve, reject) {
      var dataSchedule;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            if (!(!doctorId || !date)) {
              _context7.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing required parameter'
            });
            _context7.next = 10;
            break;
          case 5:
            _context7.next = 7;
            return _index["default"].Schedule.findAll({
              where: {
                doctorId: doctorId,
                date: date
              },
              include: [{
                model: _index["default"].Allcode,
                as: 'timeTypeData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].User,
                as: 'doctorData',
                attributes: ['firstName', 'lastName']
              }],
              raw: false,
              nest: true
            });
          case 7:
            dataSchedule = _context7.sent;
            if (!dataSchedule) dataSchedule = [];
            resolve({
              errCode: 0,
              data: dataSchedule
            });
          case 10:
            _context7.next = 15;
            break;
          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            reject(_context7.t0);
          case 15:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 12]]);
    }));
    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};
var getProfileDoctorById = function getProfileDoctorById(inputId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            if (inputId) {
              _context8.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing required parameter'
            });
            _context8.next = 11;
            break;
          case 5:
            _context8.next = 7;
            return _index["default"].User.findOne({
              where: {
                id: inputId
              },
              attributes: {
                exclude: ['password']
              },
              include: [{
                model: _index["default"].Doctor_Info,
                attributes: {
                  exclude: ['id', 'doctorId']
                },
                include: [{
                  model: _index["default"].Allcode,
                  as: 'priceTypeData',
                  attributes: ['valueEn', 'valueVi']
                }, {
                  model: _index["default"].Allcode,
                  as: 'paymentTypeData',
                  attributes: ['valueEn', 'valueVi']
                }, {
                  model: _index["default"].Allcode,
                  as: 'provinceTypeData',
                  attributes: ['valueEn', 'valueVi']
                }]
              }, {
                model: _index["default"].Allcode,
                as: 'positionData',
                attributes: ['valueEn', 'valueVi']
              }, {
                model: _index["default"].Markdown,
                attributes: ['description']
              }],
              raw: false,
              nest: true
            });
          case 7:
            data = _context8.sent;
            if (data && data.image) {
              data.image = new Buffer(data.image, 'base64').toString('binary');
            }
            if (!data) data = {};
            resolve({
              errCode: 2,
              data: data
            });
          case 11:
            resolve({
              errCode: 0,
              data: doctors
            });
            _context8.next = 17;
            break;
          case 14:
            _context8.prev = 14;
            _context8.t0 = _context8["catch"](0);
            reject(_context8.t0);
          case 17:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[0, 14]]);
    }));
    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};
var getListPatientsForDoctor = function getListPatientsForDoctor(doctorId, date) {
  return new Promise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(resolve, reject) {
      var data;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            if (!(!doctorId || !date)) {
              _context9.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing required parameter'
            });
            _context9.next = 9;
            break;
          case 5:
            _context9.next = 7;
            return _index["default"].Booking.findAll({
              where: {
                statusId: 'S2',
                doctorId: doctorId,
                date: date
              },
              include: [{
                model: _index["default"].User,
                as: 'patientData',
                attributes: ['email', 'phoneNumber', 'lastName', 'firstName', 'gender', 'address', 'reason'],
                include: [{
                  model: _index["default"].Allcode,
                  as: 'genderData',
                  attributes: ['valueEn', 'valueVi']
                }]
              }, {
                model: _index["default"].Allcode,
                as: 'timeTypeDataPatient',
                attributes: ['valueEn', 'valueVi']
              }],
              raw: false,
              nest: true
            });
          case 7:
            data = _context9.sent;
            resolve({
              errCode: 2,
              data: data
            });
          case 9:
            _context9.next = 14;
            break;
          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](0);
            reject(_context9.t0);
          case 14:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[0, 11]]);
    }));
    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};
var sendRemedy = function sendRemedy(data) {
  return new Promise( /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
      var appointment;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            if (!(!data.email || !data.doctorId || !data.patientId || !data.timeType)) {
              _context10.next = 5;
              break;
            }
            resolve({
              errCode: 1,
              errMessage: 'Missing required parameter'
            });
            _context10.next = 15;
            break;
          case 5:
            _context10.next = 7;
            return _index["default"].Booking.findOne({
              where: {
                doctorId: data.doctorId,
                patientId: data.patientId,
                timeType: data.timeType,
                statusId: 'S2'
              },
              raw: false
            });
          case 7:
            appointment = _context10.sent;
            if (!appointment) {
              _context10.next = 12;
              break;
            }
            appointment.statusId = 'S3';
            _context10.next = 12;
            return appointment.save();
          case 12:
            _context10.next = 14;
            return _emailService["default"].sendAttachment(data);
          case 14:
            resolve({
              errCode: 0,
              errMessage: '0k'
            });
          case 15:
            _context10.next = 20;
            break;
          case 17:
            _context10.prev = 17;
            _context10.t0 = _context10["catch"](0);
            reject(_context10.t0);
          case 20:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[0, 17]]);
    }));
    return function (_x19, _x20) {
      return _ref10.apply(this, arguments);
    };
  }());
};
module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctors: getAllDoctors,
  saveDetailInfoDoctors: saveDetailInfoDoctors,
  getDetailDoctorById: getDetailDoctorById,
  bulkCreateSchedule: bulkCreateSchedule,
  getScheduleDoctorByDate: getScheduleDoctorByDate,
  getExtraInfoDoctorById: getExtraInfoDoctorById,
  getProfileDoctorById: getProfileDoctorById,
  getListPatientsForDoctor: getListPatientsForDoctor,
  sendRemedy: sendRemedy
};
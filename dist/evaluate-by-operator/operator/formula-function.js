"use strict";

exports.__esModule = true;
exports["default"] = func;
exports.SYMBOL = void 0;

var _formulajs = _interopRequireDefault(require("@handsontable/formulajs"));

var _supportedFormulas = _interopRequireDefault(require("./../../supported-formulas"));

var _error = require("./../../error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var SYMBOL = _supportedFormulas["default"];
exports.SYMBOL = SYMBOL;

function func(symbol) {
  return function __formulaFunction() {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    symbol = symbol.toUpperCase();
    var symbolParts = symbol.split('.');
    var foundFormula = false;
    var result;

    if (symbolParts.length === 1) {
      if (_formulajs["default"][symbolParts[0]]) {
        foundFormula = true;
        if (symbol === 'LOG' && params.length === 1) params = [].concat(_toConsumableArray(params), [Math.E]);
        result = _formulajs["default"][symbolParts[0]].apply(_formulajs["default"], _toConsumableArray(params));
      }
    } else {
      var length = symbolParts.length;
      var index = 0;
      var nestedFormula = _formulajs["default"];

      while (index < length) {
        nestedFormula = nestedFormula[symbolParts[index]];
        index++;

        if (!nestedFormula) {
          nestedFormula = null;
          break;
        }
      }

      if (nestedFormula) {
        foundFormula = true;
        result = nestedFormula.apply(void 0, _toConsumableArray(params));
      }
    }

    if (!foundFormula) {
      throw Error(_error.ERROR_NAME);
    }

    return result;
  };
}

func.isFactory = true;
func.SYMBOL = SYMBOL;
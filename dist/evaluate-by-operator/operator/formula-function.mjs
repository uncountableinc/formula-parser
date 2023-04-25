function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import formulajs from '@handsontable/formulajs';
import SUPPORTED_FORMULAS from "./../../supported-formulas.mjs";
import { ERROR_NAME } from "./../../error.mjs";
export var SYMBOL = SUPPORTED_FORMULAS;
export default function func(symbol) {
  return function __formulaFunction() {
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    symbol = symbol.toUpperCase();
    var symbolParts = symbol.split('.');
    var foundFormula = false;
    var result;

    if (symbolParts.length === 1) {
      if (formulajs[symbolParts[0]]) {
        foundFormula = true;
        if (symbol === 'LOG' && params.length === 1) params = [].concat(_toConsumableArray(params), [Math.E]);
        result = formulajs[symbolParts[0]].apply(formulajs, _toConsumableArray(params));
      }
    } else {
      var length = symbolParts.length;
      var index = 0;
      var nestedFormula = formulajs;

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
      throw Error(ERROR_NAME);
    }

    return result;
  };
}
func.isFactory = true;
func.SYMBOL = SYMBOL;
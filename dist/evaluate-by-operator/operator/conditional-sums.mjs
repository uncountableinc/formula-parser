function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import formulajs from '@handsontable/formulajs';
import { ERROR_NOT_AVAILABLE, ERROR_VALUE } from "../../error.mjs";

function asRange(value) {
  if (!Array.isArray(value)) {
    return [[value]];
  }

  return Array.isArray(value[0]) ? value : [value];
}

function hasShape(range, rowCount, columnCount) {
  return range.length === rowCount && range.every(function (row) {
    return Array.isArray(row) && row.length === columnCount && !row.some(Array.isArray);
  });
}

function caseInsensitive(value) {
  return typeof value === 'string' ? value.toLowerCase() : value;
}

function matchesCriterion(value, criterion) {
  return formulajs.COUNTIF([caseInsensitive(value)], caseInsensitive(criterion)) !== 0;
}

function sumMatchingRanges(sumRange, criteriaRanges) {
  var values = asRange(sumRange);
  var conditions = criteriaRanges.map(function (_ref) {
    var range = _ref.range,
        criterion = _ref.criterion;
    return {
      range: asRange(range),
      criterion: criterion
    };
  });
  var rowCount = values.length;
  var columnCount = values[0].length;

  if (columnCount === 0 || [values].concat(_toConsumableArray(conditions.map(function (_ref2) {
    var range = _ref2.range;
    return range;
  }))).some(function (range) {
    return !hasShape(range, rowCount, columnCount);
  })) {
    return Error(ERROR_VALUE);
  }

  var criterionError = conditions.find(function (_ref3) {
    var criterion = _ref3.criterion;
    return criterion instanceof Error;
  });

  if (criterionError) {
    return criterionError.criterion;
  }

  var result = 0;

  for (var row = 0; row < rowCount; row++) {
    for (var column = 0; column < columnCount; column++) {
      var matches = true;

      for (var index = 0; index < conditions.length; index++) {
        var _conditions$index = conditions[index],
            range = _conditions$index.range,
            criterion = _conditions$index.criterion;
        var value = range[row][column];

        if (value instanceof Error) {
          return value;
        }

        matches = matches && matchesCriterion(value, criterion);
      }

      if (matches) {
        var _value = values[row][column];

        if (_value instanceof Error) {
          return _value;
        }

        if (typeof _value === 'number') {
          result += _value;
        }
      }
    }
  }

  return result;
}

export function sumIf() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length < 2 || args.length > 3) {
    return Error(ERROR_NOT_AVAILABLE);
  }

  var range = args[0],
      criterion = args[1],
      _args$ = args[2],
      sumRange = _args$ === void 0 ? range : _args$;
  return sumMatchingRanges(sumRange, [{
    range: range,
    criterion: criterion
  }]);
}
export function sumIfs() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length < 3 || args.length % 2 !== 1) {
    return Error(ERROR_NOT_AVAILABLE);
  }

  var sumRange = args[0],
      conditions = args.slice(1);
  var criteriaRanges = [];

  for (var index = 0; index < conditions.length; index += 2) {
    criteriaRanges.push({
      range: conditions[index],
      criterion: conditions[index + 1]
    });
  }

  return sumMatchingRanges(sumRange, criteriaRanges);
}
import { toNumber } from "./../../helper/number.mjs";
import { ERROR_DIV_ZERO, ERROR_VALUE } from "./../../error.mjs";
export var SYMBOL = '/';
export default function func(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  var result = rest.reduce(function (acc, value) {
    return acc / toNumber(value);
  }, toNumber(first));
  var has_consecutive_zeros = [first].concat(rest).some(function (value, index, array) {
    return value === 0 && array[index + 1] === 0;
  }); // allowing Infinity so cases like 1 / (100 / var) where var is 0 to resolve to 0 instead of error
  // this is the current logic on the backend
  // if (result === Infinity) {
  //   throw Error(ERROR_DIV_ZERO);
  // }

  if (isNaN(result) && !has_consecutive_zeros) {
    throw Error(ERROR_VALUE);
  }

  return result;
}
func.SYMBOL = SYMBOL;
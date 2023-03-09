import {toNumber} from './../../helper/number';
import {ERROR_DIV_ZERO, ERROR_VALUE} from './../../error';

export const SYMBOL = '/';

export default function func(first, ...rest) {
  const result = rest.reduce((acc, value) => acc / toNumber(value), toNumber(first));

  // allowing Infinity so cases like 1 / (100 / var) where var is 0 to resolve to 0 instead of error
  // this is the current logic on the backend
  // if (result === Infinity) {
  //   throw Error(ERROR_DIV_ZERO);
  // }
  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }

  return result;
}

func.SYMBOL = SYMBOL;

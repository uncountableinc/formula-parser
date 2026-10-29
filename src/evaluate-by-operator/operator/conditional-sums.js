import formulajs from '@handsontable/formulajs';
import {ERROR_NOT_AVAILABLE, ERROR_VALUE} from '../../error';

function asRange(value) {
  if (!Array.isArray(value)) {
    return [[value]];
  }

  return Array.isArray(value[0]) ? value : [value];
}

function hasShape(range, rowCount, columnCount) {
  return range.length === rowCount &&
    range.every((row) => Array.isArray(row) && row.length === columnCount && !row.some(Array.isArray));
}

function caseInsensitive(value) {
  return typeof value === 'string' ? value.toLowerCase() : value;
}

function matchesCriterion(value, criterion) {
  return formulajs.COUNTIF([caseInsensitive(value)], caseInsensitive(criterion)) !== 0;
}

function sumMatchingRanges(sumRange, criteriaRanges) {
  const values = asRange(sumRange);
  const conditions = criteriaRanges.map(({range, criterion}) => ({range: asRange(range), criterion}));
  const rowCount = values.length;
  const columnCount = values[0].length;

  if (columnCount === 0 || [values, ...conditions.map(({range}) => range)].some((range) => !hasShape(range, rowCount, columnCount))) {
    return Error(ERROR_VALUE);
  }

  const criterionError = conditions.find(({criterion}) => criterion instanceof Error);

  if (criterionError) {
    return criterionError.criterion;
  }

  let result = 0;

  for (let row = 0; row < rowCount; row++) {
    for (let column = 0; column < columnCount; column++) {
      let matches = true;

      for (let index = 0; index < conditions.length; index++) {
        const {range, criterion} = conditions[index];
        const value = range[row][column];

        if (value instanceof Error) {
          return value;
        }
        matches = matches && matchesCriterion(value, criterion);
      }

      if (matches) {
        const value = values[row][column];

        if (value instanceof Error) {
          return value;
        }
        if (typeof value === 'number') {
          result += value;
        }
      }
    }
  }

  return result;
}

export function sumIf(...args) {
  if (args.length < 2 || args.length > 3) {
    return Error(ERROR_NOT_AVAILABLE);
  }
  const [range, criterion, sumRange = range] = args;

  return sumMatchingRanges(sumRange, [{range, criterion}]);
}

function isLegacyCriteriaList(args) {
  return !Array.isArray(args[1]);
}

export function sumIfs(...args) {
  if (isLegacyCriteriaList(args)) {
    return formulajs.SUMIFS(...args);
  }
  if (args.length < 3 || args.length % 2 !== 1) {
    return Error(ERROR_NOT_AVAILABLE);
  }
  const [sumRange, ...conditions] = args;
  const criteriaRanges = [];

  for (let index = 0; index < conditions.length; index += 2) {
    criteriaRanges.push({range: conditions[index], criterion: conditions[index + 1]});
  }

  return sumMatchingRanges(sumRange, criteriaRanges);
}

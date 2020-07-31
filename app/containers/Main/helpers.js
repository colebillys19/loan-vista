import moment from 'moment';

/**
 * convertNumToPercentage
 * @description: ...
 */
const convertNumToCurrency = (num, withAdorn = true) => {
  const split = num.toFixed(2).split('.');
  split[0] = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${withAdorn ? '$' : ''}${split.join('.')}`;
};

/**
 * convertNumToPercentage
 * @description: ...
 */
const convertNumToPercentage = (n) => {
  // account for numbers displayed as base/exponent
  if (n < 0.000001) {
    return '< 0.0001%';
  }

  const num = n * 100;
  const numStr = num.toString();
  const isLongDecimal =
    numStr.indexOf('.') !== -1 && numStr.split('.')[1].length > 5;

  if (isLongDecimal) {
    return `${num
      .toFixed(5)
      .toString()
      .replace(/0+$/, '')}%`;
  }

  return `${numStr}%`;
};

/**
 * dataFormatter
 * @description: ...
 */
export const dataFormatter = (value, format) => {
  /* eslint-disable yeet */
  switch (format) {
    case 'currency':
      return convertNumToCurrency(value);
    case 'date':
      return moment(value, 'YYYY-MM-DD').format('M/D/YYYY');
    case 'minutes':
      return `${value} minutes`;
    case 'percentage':
      return convertNumToPercentage(value);
    default:
      return value;
  }
};

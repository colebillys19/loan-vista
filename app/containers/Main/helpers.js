import moment from 'moment';
import { lowerCase } from 'lodash';

import { convertNumToCurrency, toTitleCase } from 'utils/globalHelpers';

import { DASHBOARD_BORROWER_LABEL_DICT } from './selectorConstants';

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
  const isLongDecimal = numStr.includes('.') && numStr.split('.')[1].length > 5;

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
  if (value === null) {
    return '-';
  }

  switch (format) {
    case 'currency':
      return convertNumToCurrency(value);
    case 'currencyNoAdorn':
      return convertNumToCurrency(value, false);
    case 'date':
      return value !== '-'
        ? moment(value, 'YYYY-MM-DD').format('M/D/YYYY')
        : '-';
    case 'maskedLoanNumber':
      return getMaskedLoanNumber(value);
    case 'minutes':
      return `${value} minutes`;
    case 'monthYear':
      return getMonthYear(value);
    case 'percentage':
      return convertNumToPercentage(value);
    case 'phone':
      return formatPhoneNumber(value);
    case 'string':
      return `${value}`;
    case 'stringLowerCase':
      return toLowerCase(value);
    case 'stringTitleCase':
      return toTitleCase(value);
    default:
      return value;
  }
};

/**
 * formatPhoneNumber
 * @description: ...
 */
export const formatPhoneNumber = (numStr) => {
  const a = numStr.slice(0, 3);
  const b = numStr.slice(3, 6);
  const c = numStr.slice(-4);

  return `(${a}) ${b}-${c}`;
};

/**
 * getBorrowerKeyValues
 * @description: ...
 */
export const getBorrowerKeyValues = (data) => {
  const { email, name, phone, ssn, ...restData } = data;

  const { addressA, addressB } = getFormattedAddress({ ...restData });

  const valuesToBeFormatted = {
    addressA,
    addressB,
    email,
    name,
    phone,
    ssn,
  };

  return DASHBOARD_BORROWER_LABEL_DICT.map(({ format, key, label }) => ({
    label,
    value: dataFormatter(valuesToBeFormatted[key], format),
  }));
};

/**
 * getFormattedAddress
 * @description: ...
 */
export const getFormattedAddress = ({
  city,
  state,
  streetAddressA,
  streetAddressB,
  unit,
  zip,
}) => {
  const addressAUnformatted = `${streetAddressA}${
    streetAddressB ? `, ${streetAddressB}` : ''
  }${unit ? `, Unit ${unit}` : ''}`;

  const addressA = toTitleCase(addressAUnformatted);

  const addressB = `${toTitleCase(city)}, ${state} ${zip}`;

  return { addressA, addressB };
};

/**
 * getMaskedLoanNumber
 * @description ...
 */
export const getMaskedLoanNumber = (loanNumber) =>
  `${'*'.repeat(loanNumber.length - 4)}${loanNumber.slice(-4)}`;

/**
 * getMonthYear
 * @description ...
 */
export const getMonthYear = (date) => {
  const formattedDate = moment(date, 'YYYY-MM').format('ll');
  const [m, d, y] = formattedDate.split(' '); // eslint-disable-line
  return `${m} ${y}`;
};

/**
 * toLowerCase
 * @description ...
 */
const toLowerCase = (str) => str.replace(/\w+/g, lowerCase);

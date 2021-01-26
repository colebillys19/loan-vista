import moment from 'moment';

import { convertNumToCurrency } from 'utils/globalHelpers';

import { DASHBOARD_BORROWER_LABEL_DICT } from './constants';

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
    case 'currencyNoAdorn':
      return convertNumToCurrency(value, false);
    case 'date':
      return value !== '-'
        ? moment(value, 'YYYY-MM-DD').format('M/D/YYYY')
        : '-';
    case 'minutes':
      return `${value} minutes`;
    case 'percentage':
      return convertNumToPercentage(value);
    case 'phone':
      return formatPhoneNumber(value);
    case 'string':
      return `${value}`;
    default:
      return value;
  }
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
  const addressA = `${streetAddressA}${
    streetAddressB ? `, ${streetAddressB}` : ''
  }${unit ? `, Unit ${unit}` : ''}`;

  const addressB = `${city}, ${state} ${zip}`;

  return { addressA, addressB };
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

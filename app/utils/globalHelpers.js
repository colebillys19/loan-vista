import { capitalize } from 'lodash';
import moment from 'moment';

/**
 * convertNumToPercentage
 * @description: ...
 */
export const convertNumToCurrency = (num, withAdorn = true) => {
  const split = num.toFixed(2).split('.');
  split[0] = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${withAdorn ? '$' : ''}${split.join('.')}`;
};

/**
 * formatFilterState
 * @description: ...
 */
export const formatFilterState = ({ dateFrom, dateTo, ...restState }) => ({
  ...restState,
  ...getDateStrings(dateFrom, dateTo),
});

/**
 * getDateStrings
 * @description: ...
 */
const getDateStrings = (dateFrom, dateTo) => ({
  dateFrom: dateFrom ? dateFrom.format() : '1970-01-01T00:00:00.000Z',
  dateTo: dateTo ? dateTo.format() : moment().format(),
});

/**
 * getHealthColor
 * @description: ...
 */
export const getHealthColor = (health) => {
  switch (health) {
    case 1:
      return '#299544';
    case 0:
      return '#ff8e27';
    case -1:
      return '#fe3c36';
    default:
      return null;
  }
};

/**
 * isValidRoute
 * @description: ...
 */
export const isValidRoute = (pathname) =>
  ['/', '/calls', '/documents', '/payments', '/escrow'].includes(pathname);

/**
 * toTitleCase
 * @description ...
 */
export const toTitleCase = (str) => str.replace(/\w+/g, capitalize);

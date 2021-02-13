import { capitalize } from 'lodash';

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

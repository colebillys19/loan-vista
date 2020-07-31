/**
 * convertNumToPercentage
 * @description: ...
 */
export const convertNumToCurrency = (num, withAdorn = true) => {
  const split = num.toFixed(2).split('.');
  split[0] = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `${withAdorn ? '$' : ''}${split.join('.')}`;
};

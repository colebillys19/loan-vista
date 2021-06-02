const moment = require('moment');

const {
  checkDate,
  checkKeyword,
  sortByDateAsc,
  sortByString,
} = require('../helpers');

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
 * filterPayments
 * @description ...
 */
const filterPayments = (data, dateFrom, dateTo, keyword) => {
  const dateFromMoment = moment(dateFrom);
  const dateToMoment = moment(dateTo);

  return data.filter((row) => {
    const { date, time } = row;
    const dateMatch = checkDate(date, dateFromMoment, dateToMoment, time);

    let keywordMatch = true;
    if (keyword !== '') {
      const rowVals = getFormattedRowValuesArray(row);
      keywordMatch = checkKeyword(rowVals, keyword);
    }

    return dateMatch && keywordMatch;
  });
};

/**
 * getFormattedRowValuesArray
 * @description ...
 */
const getFormattedRowValuesArray = (rowObj) => {
  const { date } = rowObj;
  const dateFormatted = moment(date, 'YYYY-MM-DD').format('MM/DD/YYYY');

  return Object.keys(rowObj).reduce((acc, key) => {
    switch (key) {
      case 'date':
        acc.push(dateFormatted);
        break;
      case 'desc':
        acc.push(rowObj[key]);
        break;
      case 'effectiveDate':
        acc.push(rowObj[key]);
        break;
      case 'id':
        break;
      case 'time':
        break;
      default:
        acc.push(convertNumToCurrency(rowObj[key]));
    }

    return acc;
  }, []);
};

/**
 * getTargetPaymentsData
 * @description ...
 */
const getTargetPaymentsData = (
  data,
  { dateFrom, dateTo, keyword, sortCol, sortOrder },
) => {
  const filteredData = filterPayments(data, dateFrom, dateTo, keyword);

  return sortPayments(filteredData, sortCol, sortOrder);
};

/**
 * sortByNumber
 * @description ...
 */
const sortByNumber = (data, sortCol, sortOrder) =>
  sortOrder === 'asc'
    ? data.sort((a, b) => a[sortCol] - b[sortCol])
    : data.sort((a, b) => b[sortCol] - a[sortCol]);

/**
 * sortPayments
 * @description ...
 */
const sortPayments = (data, sortCol, sortOrder) => {
  if (sortCol === 'date') {
    if (sortOrder === 'desc') {
      return data;
    }

    return sortByDateAsc(data);
  }

  if (sortCol === 'desc') {
    return sortByString(data, sortCol, sortOrder);
  }

  return sortByNumber(data, sortCol, sortOrder);
};

module.exports = { getTargetPaymentsData };

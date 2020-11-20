const moment = require('moment');

const { MOCK_DATA_DATE_FORMAT } = require('../constants');
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
  const now = moment();
  const epoch = moment('1970-01-01 00:00:00', MOCK_DATA_DATE_FORMAT);
  const dateFromMoment = dateFrom
    ? moment(`${dateFrom} 00:00:00`, MOCK_DATA_DATE_FORMAT)
    : epoch;
  const dateToMoment = dateTo
    ? moment(`${dateTo} 23:59:59`, MOCK_DATA_DATE_FORMAT)
    : now;

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
const getFormattedRowValuesArray = (rowObj) =>
  Object.keys(rowObj).reduce((acc, key) => {
    switch (key) {
      case 'date':
        acc.push(moment(rowObj[key], 'YYYY-MM-DD').format('MM/DD/YYYY'));
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
        acc.push(rowObj[key].slice(0, -3));
        break;
      default:
        acc.push(convertNumToCurrency(rowObj[key]));
    }

    return acc;
  }, []);

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

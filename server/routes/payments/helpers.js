const moment = require('moment');

const { MOCK_DATA_DATE_FORMAT } = require('../constants');
const {
  checkDate,
  checkKeyword,
  sortByDateAsc,
  sortByString,
} = require('../helpers');

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

  return data.filter(
    ({ date, desc, escrow, interest, principal, time, total }) => {
      const dateMatch = checkDate(date, dateFromMoment, dateToMoment, time);

      const formattedKeyword = keyword[0] === '$' ? keyword.slice(1) : keyword;
      const keywordMatch = checkKeyword(
        [desc, escrow, interest, principal, total],
        formattedKeyword,
      );

      return dateMatch && keywordMatch;
    },
  );
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

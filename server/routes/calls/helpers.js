const moment = require('moment');

const { MOCK_DATA_DATE_FORMAT } = require('../constants');
const {
  checkDate,
  checkKeyword,
  sortByDateAsc,
  sortByString,
} = require('../helpers');

/**
 * filterCalls
 * @description ...
 */
const filterCalls = (data, dateFrom, dateTo, keyword) => {
  const now = moment();
  const epoch = moment('1970-01-01 00:00:00', MOCK_DATA_DATE_FORMAT);
  const dateFromMoment = dateFrom
    ? moment(`${dateFrom} 00:00:00`, MOCK_DATA_DATE_FORMAT)
    : epoch;
  const dateToMoment = dateTo
    ? moment(`${dateTo} 23:59:59`, MOCK_DATA_DATE_FORMAT)
    : now;

  return data.filter(({ date, dept, desc, rep, time }) => {
    const dateMatch = checkDate(date, dateFromMoment, dateToMoment, time);
    const keywordMatch = checkKeyword([dept, desc, rep], keyword);

    return dateMatch && keywordMatch;
  });
};

/**
 * getTargetCallsData
 * @description ...
 */
const getTargetCallsData = (
  data,
  { dateFrom, dateTo, keyword, sortCol, sortOrder },
) => {
  const filteredData = filterCalls(data, dateFrom, dateTo, keyword);

  return sortCalls(filteredData, sortCol, sortOrder);
};

/**
 * sortCalls
 * @description ...
 */
const sortCalls = (data, sortCol, sortOrder) => {
  if (sortCol === 'date') {
    if (sortOrder === 'desc') {
      return data;
    }

    return sortByDateAsc(data);
  }

  return sortByString(data, sortCol, sortOrder);
};

module.exports = { getTargetCallsData };

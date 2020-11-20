const moment = require('moment');

const { MOCK_DATA_DATE_FORMAT } = require('../constants');
const {
  checkDate,
  checkKeyword,
  getDateTimeFormatted,
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
  const { date, time } = rowObj;
  const dateTime = `${date} ${time}`;
  const [dateFormatted, timeFormatted] = getDateTimeFormatted(dateTime);

  return Object.keys(rowObj).reduce((acc, key) => {
    switch (key) {
      case 'date':
        acc.push(dateFormatted);
        break;
      case 'id':
        break;
      case 'time':
        acc.push(timeFormatted);
        break;
      default:
        acc.push(rowObj[key]);
    }

    return acc;
  }, []);
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

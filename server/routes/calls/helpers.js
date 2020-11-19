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

  return data.filter((row) => {
    const { date, time } = row;
    const dateMatch = checkDate(date, dateFromMoment, dateToMoment, time);

    let keywordMatch = true;
    if (keyword !== '') {
      const rowVals = Object.keys(row).reduce((acc, key) => {
        switch (key) {
          case 'date':
            acc.push(moment(row[key], 'YYYY-MM-DD').format('MM/DD/YYYY'));
            break;
          case 'time':
            acc.push(row[key].slice(0, -3));
            break;
          case 'id':
            break;
          default:
            acc.push(row[key]);
        }

        return acc;
      }, []);

      keywordMatch = checkKeyword(rowVals, keyword);
    }

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

const moment = require('moment');

const { MOCK_DATA_DATE_FORMAT } = require('../constants');
const { checkDate, checkKeyword } = require('../helpers');

/**
 * filterDocuments
 * @description ...
 */
const filterDocuments = (data, dateFrom, dateTo, keyword) => {
  const now = moment();
  const epoch = moment('1970-01-01 00:00:00', MOCK_DATA_DATE_FORMAT);
  const dateFromMoment = dateFrom
    ? moment(`${dateFrom} 00:00:00`, MOCK_DATA_DATE_FORMAT)
    : epoch;
  const dateToMoment = dateTo
    ? moment(`${dateTo} 23:59:59`, MOCK_DATA_DATE_FORMAT)
    : now;

  return data.filter((row) => {
    const { dateSent, timeSent } = row;
    const dateMatch = checkDate(
      dateSent,
      dateFromMoment,
      dateToMoment,
      timeSent,
    );

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
      case 'dateSent':
        acc.push(moment(rowObj[key], 'YYYY-MM-DD').format('MM/DD/YYYY'));
        break;
      case 'id':
        break;
      case 'timeSent':
        acc.push(rowObj[key].slice(0, -3));
        break;
      default:
        acc.push(rowObj[key]);
    }

    return acc;
  }, []);

/**
 * getTargetDocumentsData
 * @description ...
 */
const getTargetDocumentsData = (
  data,
  { dateFrom, dateTo, keyword, sortCol, sortOrder },
) => {
  const filteredData = filterDocuments(data, dateFrom, dateTo, keyword);

  const formattedSortCol = sortCol === 'date sent' ? 'dateSent' : sortCol;
  return sortDocuments(filteredData, formattedSortCol, sortOrder);
};

/**
 * sortByDateAsc
 * @description ...
 */
const sortByDateAsc = (data) =>
  data.sort((a, b) =>
    moment(`${a.dateSent} ${a.timeSent}`, MOCK_DATA_DATE_FORMAT).diff(
      moment(`${b.dateSent} ${b.timeSent}`, MOCK_DATA_DATE_FORMAT),
    ),
  );

/**
 * sortDocuments
 * @description ...
 */
const sortDocuments = (data, sortCol, sortOrder) => {
  if (sortCol === 'dateSent') {
    if (sortOrder === 'desc') {
      return data;
    }

    return sortByDateAsc(data);
  }

  return sortByString(data, sortCol, sortOrder);
};

/**
 * sortByString
 * @description ...
 */
const sortByString = (data, str, order) =>
  order === 'asc'
    ? data.sort((a, b) => b[str].localeCompare(a[str]))
    : data.sort((a, b) => a[str].localeCompare(b[str]));

module.exports = { getTargetDocumentsData };

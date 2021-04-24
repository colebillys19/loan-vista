const moment = require('moment');

const { MOCK_DATA_DATE_FORMAT } = require('../constants');
const {
  checkDate,
  checkKeyword,
  getDateTimeFormatted,
  sortByString,
} = require('../helpers');

/**
 * filterDocuments
 * @description ...
 */
const filterDocuments = (data, dateFrom, dateTo, keyword) => {
  const dateFromMoment = moment(dateFrom);
  const dateToMoment = moment(dateTo);

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
const getFormattedRowValuesArray = (rowObj) => {
  const { dateSent, timeSent } = rowObj;
  const dateTime = `${dateSent} ${timeSent || '00:00:00'}`;
  const [dateFormatted, timeFormatted] = getDateTimeFormatted(dateTime);

  return Object.keys(rowObj).reduce((acc, key) => {
    switch (key) {
      case 'dateSent':
        acc.push(dateFormatted);
        break;
      case 'id':
        break;
      case 'timeSent':
        if (rowObj[key] !== null) {
          acc.push(timeFormatted);
        }
        break;
      default:
        acc.push(rowObj[key]);
    }

    return acc;
  }, []);
};

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

module.exports = { getTargetDocumentsData };

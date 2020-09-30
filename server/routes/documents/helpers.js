const moment = require('moment');

// "dateSent": "2020-12-29", * * * * *
// "desc": null, * * * * *
// "file": "integer_aliquet.pdf",
// "from": "JPP", * * * * *
// "id": "1311f935-a8f4-4c63-b339-a3b4cd93c287",
// "timeSent": "20:59:44", * * * * *
// "type": "email"

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

  return data.filter(({ dateSent, desc, from, timeSent }) => {
    const dateMatch = checkDate(
      dateSent,
      dateFromMoment,
      dateToMoment,
      timeSent,
    );
    const keywordMatch = checkKeyword([desc, from], keyword);

    return dateMatch && keywordMatch;
  });
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
  if (sortCol === 'date') {
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

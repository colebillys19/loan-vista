const moment = require('moment');

const { EPOCH_MOMENT, MOCK_DATA_DATE_FORMAT } = require('./constants');

/**
 * checkDate
 * @description ...
 */
const checkDate = (date, dateFromMoment, dateToMoment, time) => {
  const dateMoment = moment(`${date} ${time}`, MOCK_DATA_DATE_FORMAT);

  return (
    dateMoment.isSameOrAfter(dateFromMoment) &&
    dateMoment.isSameOrBefore(dateToMoment)
  );
};

/**
 * checkKeyword
 * @description ...
 */
const checkKeyword = (strArr, keyword) => {
  const matches = strArr.filter(
    (str) => str !== null && str.toString().includes(keyword),
  );

  return !!matches.length;
};

/**
 * getDateMoments
 * @description ...
 */
const getDateMoments = (dateFrom, dateTo) => {
  const dateFromMoment = dateFrom
    ? moment(`${dateFrom} 00:00:00`, MOCK_DATA_DATE_FORMAT)
    : EPOCH_MOMENT;
  const dateToMoment = dateTo
    ? moment(`${dateTo} 23:59:59`, MOCK_DATA_DATE_FORMAT)
    : moment();

  return { dateFromMoment, dateToMoment };
};

/**
 * getDateTimeFormatted
 * @description ...
 */
const getDateTimeFormatted = (dateTime) => {
  const dateTimeFormatted = moment(dateTime, 'YYYY-MM-DD HH:mm:ss').format(
    'MM/DD/YYYY hh:mm A',
  );
  const [dateFormatted, t, m] = dateTimeFormatted.split(' ');
  const timeFormatted = `${t} ${m}`;

  return [dateFormatted, timeFormatted];
};

/**
 * getPageData
 * @description ...
 */
const getPageData = ({ data, itemsPerPage, pageToFetch }) => {
  const offset = itemsPerPage * (pageToFetch - 1);
  const pageData = data.slice(offset, offset + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  return { pageData, totalPages };
};

/**
 * sortByDateAsc
 * @description ...
 */
const sortByDateAsc = (data) =>
  data.sort((a, b) =>
    moment(`${a.date} ${a.time}`, MOCK_DATA_DATE_FORMAT).diff(
      moment(`${b.date} ${b.time}`, MOCK_DATA_DATE_FORMAT),
    ),
  );

/**
 * sortByString
 * @description ...
 */
const sortByString = (data, str, order) =>
  order === 'asc'
    ? data.sort((a, b) => b[str].localeCompare(a[str]))
    : data.sort((a, b) => a[str].localeCompare(b[str]));

module.exports = {
  checkDate,
  checkKeyword,
  getDateMoments,
  getDateTimeFormatted,
  getPageData,
  sortByDateAsc,
  sortByString,
};

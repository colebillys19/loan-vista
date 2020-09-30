const moment = require('moment');

const { MOCK_DATA_DATE_FORMAT } = require('./constants');

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
  if (keyword === '') {
    return true;
  }

  const matches = strArr.filter(
    (str) => str !== null && str.toString().includes(keyword),
  );
  return !!matches.length;
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

module.exports = { checkDate, checkKeyword, sortByDateAsc, sortByString };

const moment = require('moment');

const momentFormat = 'YYYY-MM-DD HH:mm:ss';

/** */
const checkDate = (date, dateFromMoment, dateToMoment, time) => {
  const dateMoment = moment(`${date} ${time}`, momentFormat);

  return (
    dateMoment.isSameOrAfter(dateFromMoment) &&
    dateMoment.isSameOrBefore(dateToMoment)
  );
};

/** */
const checkKeyword = (strArr, keyword) => {
  if (keyword === '') {
    return true;
  }

  const matches = strArr.filter((str) => str !== null && str.includes(keyword));
  return !!matches.length;
};

/** */
const filterCalls = (data, dateFrom, dateTo, keyword) => {
  const now = moment();
  const epoch = moment('1970-01-01 00:00:00', momentFormat);
  const dateFromMoment = dateFrom
    ? moment(`${dateFrom} 00:00:00`, momentFormat)
    : epoch;
  const dateToMoment = dateTo
    ? moment(`${dateTo} 23:59:59`, momentFormat)
    : now;

  return data.filter(({ date, dept, desc, rep, time }) => {
    const dateMatch = checkDate(date, dateFromMoment, dateToMoment, time);
    const keywordMatch = checkKeyword([dept, desc, rep], keyword);

    return dateMatch && keywordMatch;
  });
};

/** */
const getTargetCallsData = (
  data,
  { dateFrom, dateTo, keyword, sortCol, sortOrder },
) => {
  const filteredData = filterCalls(data, dateFrom, dateTo, keyword);

  return sortCalls(filteredData, sortCol, sortOrder);
};

/** */
const sortByDateAsc = (data) =>
  data.sort((a, b) =>
    moment(`${a.date} ${a.time}`, momentFormat).diff(
      moment(`${b.date} ${b.time}`, momentFormat),
    ),
  );

/** */
const sortCalls = (data, sortCol, sortOrder) => {
  if (sortCol === 'date') {
    if (sortOrder === 'desc') {
      return data;
    }

    return sortByDateAsc(data);
  }

  return sortByString(data, sortCol, sortOrder);
};

/** */
const sortByString = (data, str, order) =>
  order === 'asc'
    ? data.sort((a, b) => b[str].localeCompare(a[str]))
    : data.sort((a, b) => a[str].localeCompare(b[str]));

module.exports = { getTargetCallsData };

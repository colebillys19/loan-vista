const moment = require('moment');

const { MOCK_DATA_DATE_FORMAT } = require('../constants');
const {
  checkDate,
  checkKeyword,
  sortByDateAsc,
  sortByString,
} = require('../helpers');

// "accidentHealthInsurance": 66.86,
// "accruedLateCharge": 70.42,
// "date": "2020-12-30",
// "desc": "principal curtailment",
// "effectiveDate": "10/19/2019",
// "escrow": 41.02,
// "escrowBalance": 38.82,
// "fees": 74.24,
// "id": "29ba8a70-19d3-4ddf-b4ff-879b4f8c8fe6",
// "interest": 25,
// "lifeInsurance": 55.66,
// "misc": 45.28,
// "otherTotal": 11.32,
// "principal": 36.02,
// "principalBalance": 8.68,
// "replacementReserve": 97.76,
// "restrictedReserve": 15.48,
// "suspense": 83.46,
// "time": "04:12:45",
// "total": 14.93

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

  return data.filter(({ date, from, time, type }) => {
    const dateMatch = checkDate(date, dateFromMoment, dateToMoment, time);
    const keywordMatch = checkKeyword([from, type], keyword);

    return dateMatch && keywordMatch;
  });
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

  return sortByString(data, sortCol, sortOrder);
};

module.exports = { getTargetPaymentsData };

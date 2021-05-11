import moment from 'moment';

import { EPOCH_MOMENT } from 'utils/globalConstants';

const checkChronological = (dateFrom, dateTo) => {
  if (!dateFrom || !dateTo) {
    return ['', ''];
  }

  return dateFrom.isAfter(dateTo)
    ? ['', 'dates must be in chronological order']
    : ['', ''];
};

const getDateError = (date) => {
  if (!date) {
    return '';
  }

  if (!date.isValid()) {
    return 'invalid date format';
  }

  if (date.isBefore(EPOCH_MOMENT)) {
    return 'pick a more recent date';
  }

  if (date.isAfter(moment())) {
    return 'no future dates permitted';
  }

  return '';
};

export const getDatesArr = () => {
  const now = moment();
  const oneWe = moment().subtract(7, 'days');
  const twoWe = moment().subtract(14, 'days');
  const oneMo = moment().subtract(1, 'months');
  const twoMo = moment().subtract(2, 'months');

  return [now, oneWe, twoWe, oneMo, twoMo];
};

export const getDatesErrorState = (dateFrom, dateTo) => {
  const fromError = getDateError(dateFrom);
  const toError = getDateError(dateTo);

  return !fromError && !toError
    ? checkChronological(dateFrom, dateTo)
    : [fromError, toError];
};

export const getRangeValue = (fromDate, toDate) => {
  const datesArr = getDatesArr();

  const fromIndex = datesArr.findIndex((dateObj) =>
    dateObj.isSame(fromDate, 'day'),
  );
  const toIndex = datesArr.findIndex((dateObj) =>
    dateObj.isSame(toDate, 'day'),
  );

  return fromIndex !== -1 && toIndex === 0 ? fromIndex : 0;
};

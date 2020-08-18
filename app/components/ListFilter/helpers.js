import moment from 'moment';

const momentFormatStr = 'YYYY-MM-DD';

const getDates = () => ({
  now: moment(),
  oneMo: moment().subtract(1, 'months'),
  oneWk: moment().subtract(7, 'days'),
  twoMo: moment().subtract(2, 'months'),
  twoWk: moment().subtract(14, 'days'),
});

export const getError = (fromDate, toDate) => {
  if (fromDate && fromDate.isValid() && toDate && toDate.isValid()) {
    return fromDate.isBefore(toDate)
      ? ''
      : 'dates must be in chronological order';
  }

  return '';
};

export const getDatesArr = () => {
  const dates = getDates();

  return [dates.now, dates.oneWk, dates.twoWk, dates.oneMo, dates.twoMo];
};

export const getRangeValue = (fromDate, toDate) => {
  const fromStr = fromDate ? fromDate.format(momentFormatStr) : '';
  const toStr = toDate ? toDate.format(momentFormatStr) : '';

  const dateStrArr = getDatesArr().map((dateObj) =>
    dateObj.format(momentFormatStr),
  );
  const fromIndex = dateStrArr.indexOf(fromStr);

  return fromIndex !== -1 && dateStrArr.indexOf(toStr) === 0 ? fromIndex : 0;
};

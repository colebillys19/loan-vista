import moment from 'moment';

const momentFormatStr = 'YYYY-MM-DD';

export const checkPickersStatus = (fromError, toError) => {
  const crucialErrors = [
    'future dates not permitted',
    'invalid date format',
    'pick a more recent date',
  ];

  if (crucialErrors.indexOf(fromError) !== -1) {
    return { from: false, to: true };
  }

  if (crucialErrors.indexOf(toError) !== -1) {
    return { from: true, to: false };
  }

  return { from: false, to: false };
};

const getDates = () => ({
  now: moment(),
  oneMo: moment().subtract(1, 'months'),
  oneWk: moment().subtract(7, 'days'),
  twoMo: moment().subtract(2, 'months'),
  twoWk: moment().subtract(14, 'days'),
});

export const getErrors = (fromDate, toDate, activePicker) => {
  if (
    fromDate &&
    fromDate.isValid() &&
    toDate &&
    toDate.isValid() &&
    !fromDate.isBefore(toDate)
  ) {
    return activePicker === 'from'
      ? ['dates must be in chronological order', '']
      : ['', 'dates must be in chronological order'];
  }

  return ['', ''];
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

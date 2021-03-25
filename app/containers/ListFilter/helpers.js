import moment from 'moment';

export const checkDatesOrder = (fromDate, toDate, activePicker) => {
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

export const checkParamsNotEmpty = ({ dateFrom, dateTo, keyword }) =>
  dateFrom !== '' || dateTo !== '' || keyword !== '';

export const getDatesArr = () => {
  const now = moment();
  const oneWe = moment().subtract(7, 'days');
  const twoWe = moment().subtract(14, 'days');
  const oneMo = moment().subtract(1, 'months');
  const twoMo = moment().subtract(2, 'months');

  return [now, oneWe, twoWe, oneMo, twoMo];
};

export const getDateStrings = (dateFrom, dateTo) => ({
  dateFrom: dateFrom ? dateFrom.format('YYYY-MM-DD') : '',
  dateTo: dateTo ? dateTo.format('YYYY-MM-DD') : '',
});

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

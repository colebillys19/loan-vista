import moment from 'moment';

const momentFormatStr = 'YYYY-MM-DD';

export const getDates = () => ({
  now: moment(),
  oneMo: moment().subtract(1, 'months'),
  oneWk: moment().subtract(7, 'days'),
  twoMo: moment().subtract(2, 'months'),
  twoWk: moment().subtract(14, 'days'),
});

const getDatesArr = () => [
  getDates().now.format(momentFormatStr),
  getDates().oneWk.format(momentFormatStr),
  getDates().twoWk.format(momentFormatStr),
  getDates().oneMo.format(momentFormatStr),
  getDates().twoMo.format(momentFormatStr),
];

export const getRangeValue = (fromDate, toDate) => {
  const fromStr = fromDate ? fromDate.format(momentFormatStr) : '';
  const toStr = toDate ? toDate.format(momentFormatStr) : '';
  const fromIndex = getDatesArr().indexOf(fromStr);

  return fromIndex !== -1 && getDatesArr().indexOf(toStr) === 0 ? fromIndex : 0;
};

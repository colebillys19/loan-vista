export const getDateStrings = (dateFrom, dateTo) => ({
  dateFrom: dateFrom ? dateFrom.format('YYYY-MM-DD') : '',
  dateTo: dateTo ? dateTo.format('YYYY-MM-DD') : '',
});

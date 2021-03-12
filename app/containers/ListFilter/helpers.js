export const getDateStrings = ({ dateFrom, dateTo, keyword }) => {
  const dateFromStr = dateFrom ? dateFrom.format('YYYY-MM-DD') : '';
  const dateToStr = dateTo ? dateTo.format('YYYY-MM-DD') : '';

  return { dateFrom: dateFromStr, dateTo: dateToStr, keyword };
};

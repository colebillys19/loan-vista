import { getDatesArr, getRangeValue } from './helpers';

const HandlerLogic = ({
  dateErrors: [dateFromError, dateToError],
  dispatchFetchData,
  dispatchSetIsFiltered,
  dispatchUpdateFilterState,
  isFilteredData,
  render,
  state,
  tabId,
}) => {
  const { dateFrom, dateTo } = state;

  const isDateErrors = !!dateFromError || !!dateToError;

  const handleDateFromChange = (date) => {
    dispatchUpdateFilterState(tabId, {
      ...state,
      dateFrom: date,
      dateRange: getRangeValue(date, dateTo),
    });
  };

  const handleDateToChange = (date) => {
    dispatchUpdateFilterState(tabId, {
      ...state,
      dateRange: getRangeValue(dateFrom, date),
      dateTo: date,
    });
  };

  const handleDateRangeChange = (value) => {
    const newValues = { ...state, dateRange: value };

    if (value === 0) {
      newValues.dateFrom = null;
      newValues.dateTo = null;
    } else {
      const datesArr = getDatesArr();

      newValues.dateFrom = datesArr[value];
      newValues.dateTo = datesArr[0]; // eslint-disable-line
    }

    dispatchUpdateFilterState(tabId, newValues);
  };

  const handleKeywordChange = (value) => {
    dispatchUpdateFilterState(tabId, { ...state, keyword: value });
  };

  const handleRefreshClick = () => {
    if (isDateErrors) {
      dispatchUpdateFilterState(tabId, {
        ...state,
        dateFrom: null,
        dateTo: null,
      });
    } else {
      dispatchUpdateFilterState(tabId, {
        dateFrom: null,
        dateRange: 0,
        dateTo: null,
        keyword: '',
      });
    }

    if (!isDateErrors && isFilteredData) {
      dispatchFetchData();
      dispatchSetIsFiltered(false);
    }
  };

  const handleSubmitClick = () => {
    if (!isFilteredData) {
      dispatchSetIsFiltered(true);
    }

    dispatchFetchData();
  };

  return render({
    handleDateFromChange,
    handleDateRangeChange,
    handleDateToChange,
    handleKeywordChange,
    handleRefreshClick,
    handleSubmitClick,
  });
};

export default HandlerLogic;

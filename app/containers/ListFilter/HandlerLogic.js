import { checkParamsNotEmpty, getDatesArr, getRangeValue } from './helpers';

const HandlerLogic = ({
  dateErrors: [dateFromError, dateToError],
  dispatchFetchData,
  dispatchUpdateFilterState,
  lastFetchParams,
  render,
  state,
  tabId,
}) => {
  const { dateFrom, dateTo } = state;

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
    dispatchUpdateFilterState(tabId, {
      dateFrom: null,
      dateRange: 0,
      dateTo: null,
      keyword: '',
    });

    if (checkParamsNotEmpty(lastFetchParams)) {
      dispatchFetchData();
    }
  };

  const handleSubmitClick = () => {
    if (!dateFromError && !dateToError) {
      dispatchFetchData();
    }
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

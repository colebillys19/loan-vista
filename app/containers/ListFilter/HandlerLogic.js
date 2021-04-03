import {
  // checkDatesOrder,
  checkParamsNotEmpty,
  getDatesArr,
  getRangeValue,
} from './helpers';

const HandlerLogic = ({
  dispatchFetchData,
  dispatchUpdateFilterState,
  filterState,
  lastFetchParams,
  render,
}) => {
  const { state, targetId } = filterState;
  const { dateFrom, dateFromError, dateTo, dateToError } = state;

  //
  const handleDateFromChange = (date) => {
    dispatchUpdateFilterState(targetId, {
      ...state,
      dateFrom: date,
      dateRange: getRangeValue(date, dateTo),
    });
  };

  //
  const handleDateToChange = (date) => {
    dispatchUpdateFilterState(targetId, {
      ...state,
      dateRange: getRangeValue(dateFrom, date),
      dateTo: date,
    });
  };

  //
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

    dispatchUpdateFilterState(targetId, newValues);
  };

  //
  const handleKeywordChange = (value) => {
    dispatchUpdateFilterState(targetId, { ...state, keyword: value });
  };

  //
  const handleRefreshClick = () => {
    dispatchUpdateFilterState(targetId, {
      dateFrom: null,
      dateFromError: '',
      dateRange: 0,
      dateTo: null,
      dateToError: '',
      keyword: '',
    });

    if (checkParamsNotEmpty(lastFetchParams)) {
      dispatchFetchData();
    }
  };

  //
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

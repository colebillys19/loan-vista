import {
  checkDatesOrder,
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
  const { dateFrom, dateFromError, dateTo, dateToError } = filterState;

  //
  const handleDateFromChange = (date) => {
    const [fromError, toError] = checkDatesOrder(date, dateTo, 'from');

    const payload = {
      ...filterState,
      dateFrom: date,
      dateRange: getRangeValue(date, dateTo),
    };

    if (fromError || toError) {
      payload.dateFromError = fromError;
      payload.dateToError = toError;
    }

    dispatchUpdateFilterState(payload);
  };

  //
  const handleDateToChange = (date) => {
    const [fromError, toError] = checkDatesOrder(dateFrom, date, 'to');

    const payload = {
      ...filterState,
      dateRange: getRangeValue(dateFrom, date),
      dateTo: date,
    };

    if (fromError || toError) {
      payload.dateFromError = fromError;
      payload.dateToError = toError;
    }

    dispatchUpdateFilterState(payload);
  };

  //
  const handleDateRangeChange = (value) => {
    const payload = { ...filterState, dateRange: value };

    if (value === 0) {
      payload.dateFrom = null;
      payload.dateTo = null;
    } else {
      const datesArr = getDatesArr();

      payload.dateFrom = datesArr[value];
      payload.dateTo = datesArr[0]; // eslint-disable-line
    }

    dispatchUpdateFilterState(payload);
  };

  //
  const handleKeywordChange = (value) => {
    dispatchUpdateFilterState({ ...filterState, keyword: value });
  };

  //
  const handleRefreshClick = () => {
    dispatchUpdateFilterState({
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

  //
  const setDateFromError = (err) =>
    dispatchUpdateFilterState({ ...filterState, dateFromError: err });

  //
  const setDateToError = (err) =>
    dispatchUpdateFilterState({ ...filterState, dateToError: err });

  return render({
    handleDateFromChange,
    handleDateRangeChange,
    handleDateToChange,
    handleKeywordChange,
    handleRefreshClick,
    handleSubmitClick,
    setDateFromError,
    setDateToError,
  });
};

export default HandlerLogic;

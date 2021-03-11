const initialState = {
  callsData: [],
  error: false,
  filterState: {
    dateFrom: null,
    dateFromError: '',
    dateRange: 0,
    dateTo: null,
    dateToError: '',
    keyword: '',
  },
  lastFetchParams: {
    dateFrom: '',
    dateTo: '',
    keyword: '',
    sortCol: 'date',
    sortOrder: 'desc',
  },
  loading: false,
  sortLoading: false,
};

export default initialState;

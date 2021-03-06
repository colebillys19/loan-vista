const initialState = {
  callsData: [],
  currentFilterParams: { dateFrom: null, dateTo: null, keyword: '' },
  currentSortParams: { sortCol: 'date', sortOrder: 'desc' },
  error: false,
  loading: false,
  noDataFetched: false,
  oldFilterParams: { dateFrom: null, dateTo: null, keyword: '' },
  oldSortParams: { sortCol: 'date', sortOrder: 'desc' },
  sortLoading: false,
};

export default initialState;

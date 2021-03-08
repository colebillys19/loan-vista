const initialState = {
  callsData: [],
  error: false,
  filterState: { dateFrom: null, dateTo: null, keyword: '' },
  lastFetch: {
    dateFrom: null,
    dateTo: null,
    keyword: '',
    sortCol: 'date',
    sortOrder: 'desc',
  },
  loading: false,
  noDataFetched: false,
  sortLoading: false,
};

export default initialState;

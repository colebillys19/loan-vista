const initialState = {
  error: false,
  isFilteredData: false,
  lastFetchParams: {
    dateFrom: '',
    dateTo: '',
    keyword: '',
    sortCol: 'date',
    sortOrder: 'desc',
  },
  loading: false,
  paymentsData: [],
  sortLoading: false,
};

export default initialState;

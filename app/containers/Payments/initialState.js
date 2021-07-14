const initialState = {
  error: false,
  isFilteredData: false,
  itemsPerPage: 70,
  lastFetchParams: {
    dateFrom: '',
    dateTo: '',
    keyword: '',
    sortCol: 'date',
    sortOrder: 'desc',
  },
  loading: false,
  nextPageToFetch: 1,
  paymentsData: [],
  scrollLoading: false,
  sortLoading: false,
  totalPages: -1,
};

export default initialState;

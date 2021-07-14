const initialState = {
  documentsData: [],
  error: false,
  isFilteredData: false,
  itemsPerPage: 70,
  lastFetchParams: {
    dateFrom: '',
    dateTo: '',
    keyword: '',
    sortCol: 'date sent',
    sortOrder: 'desc',
  },
  loading: false,
  nextPageToFetch: 1,
  scrollLoading: false,
  sortLoading: false,
  totalPages: -1,
};

export default initialState;

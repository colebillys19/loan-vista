const initialState = {
  error: false,
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

const initialState = {
  callsData: [],
  error: false,
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

const initialState = {
  documentsData: [],
  error: false,
  lastFetchParams: {
    dateFrom: '',
    dateTo: '',
    keyword: '',
    sortCol: 'date sent',
    sortOrder: 'desc',
  },
  loading: false,
  sortLoading: false,
};

export default initialState;

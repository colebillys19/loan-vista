const initialState = {
  callsData: [],
  error: false,
  fetchParams: {
    currentTotal: '80',
    dateFrom: '',
    dateTo: '',
    keyword: '',
    sortCol: 'date',
    sortOrder: 'desc',
  },
  loading: false,
  noDataFetched: false,
  sortLoading: false,
};

export default initialState;

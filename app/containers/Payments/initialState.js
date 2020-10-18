const initialState = {
  error: false,
  fetchParams: {
    currentTotal: 80,
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

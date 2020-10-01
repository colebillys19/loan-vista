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
};

export default initialState;

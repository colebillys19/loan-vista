const initialState = {
  documentsData: [],
  error: false,
  fetchParams: {
    currentTotal: 80,
    dateFrom: '',
    dateTo: '',
    keyword: '',
    sortCol: 'date sent',
    sortOrder: 'desc',
  },
  loading: false,
};

export default initialState;

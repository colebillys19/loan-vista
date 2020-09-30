const initialState = {
  documentsData: [
    {
      dateSent: '',
      desc: '',
      file: '',
      from: '',
      id: '',
      timeSent: '',
      type: '',
    },
  ],
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

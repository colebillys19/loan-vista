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
    dateSort: 'desc',
    dateTo: '',
    fromSort: '',
    keyword: '',
    typeSort: '',
  },
  loading: false,
};

export default initialState;

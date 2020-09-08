const initialState = {
  callsData: [
    {
      audio: '',
      date: '',
      dept: '',
      desc: '',
      id: '',
      rep: '',
      time: '',
    },
  ],
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
};

export default initialState;

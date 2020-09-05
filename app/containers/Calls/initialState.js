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
    dateSort: 'desc',
    dateTo: '',
    deptSort: '',
    keyword: '',
    repSort: '',
  },
  loading: false,
};

export default initialState;

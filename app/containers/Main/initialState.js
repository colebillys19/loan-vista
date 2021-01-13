const initialState = {
  error: false,
  loading: false,
  loanData: {
    balances: {},
    borrower: { name: '-' },
    payment: {},
    propertyAddress: {
      city: '-',
      state: '-',
      streetAddress: '-',
      unit: null,
      zip: '-',
    },
    stops: {},
    summaries: {
      calls: {
        avgCallsQuarter: 0,
        avgTimeCall: 0,
        callsLast30Days: 0,
        mostFreqReason: '-',
        totalCalls: 0,
        totalNotes: 0,
      },
      loan: {
        assumptionCode: '-',
        assumptionDate: '-',
        graceDays: 0,
        interestRate: 0,
        investorCode: '-',
        investorName: '-',
        lienPosition: '-',
        loanType: '-',
        maturityDate: '-',
        originalLoanAmount: 0,
        originationDate: '-',
        principalBalance: 0,
        status: '-',
      },
      payment: {
        badCheckFees: 0,
        dueDate: '-',
        lateChargesDue: 0,
        otherFees: 0,
        paymentDue: 0,
        totalDue: 0,
      },
      service: {
        eStatements: '-',
        webAccess: '-',
        welcomeCall: '-',
      },
    },
  },
  loanNumber: '',
};

export default initialState;

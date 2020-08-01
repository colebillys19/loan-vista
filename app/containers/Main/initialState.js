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
        totalCalls: 0,
        totalNotes: 0,
        avgCallsQuarter: 0,
        callsLast30Days: 0,
        avgTimeCall: 0,
        mostFreqReason: '-',
      },
      loan: {
        loanType: '-',
        status: '-',
        principalBalance: 0,
        originalLoanAmount: 0,
        investorName: '-',
        investorCode: '-',
        assumptionCode: '-',
        assumptionDate: '-',
        interestRate: 0,
        originationDate: '-',
        maturityDate: '-',
        graceDays: 0,
        lienPosition: '-',
      },
      payment: {
        paymentDue: 0,
        lateChargesDue: 0,
        badCheckFees: 0,
        otherFees: 0,
        totalDue: 0,
        dueDate: '-',
      },
      service: {
        eStatements: '-',
        webAccess: '-',
        welcomeCall: '-',
      },
    },
  },
  loanNumber: '1590753088',
};

export default initialState;

const loanInfoMockData = {
  balances: {},
  borrower: {},
  payment: {},
  propertyAddress: {
    city: 'Carson City',
    state: 'NV',
    streetAddress: '43 Heritage Knoll Ct',
    unit: null,
    zip: '89701',
  },
  stops: {},
  summaries: {
    calls: {
      totalCalls: 82,
      totalNotes: 27,
      avgCallsQuarter: 4,
      callsLast30Days: 3,
      avgTimeCall: 3.61,
      mostFreqReason: 'A100',
    },
    loan: {
      loanType: 'FHA Residential',
      status: 'Current',
      principalBalance: 234456.78,
      originalLoanAmount: 345678.9,
      investorName: 'Nevada Housing',
      investorCode: 'N03',
      assumptionCode: 'A',
      assumptionDate: '2020-06-21',
      interestRate: 0.05,
      originationDate: '2016-01-01',
      maturityDate: '2046-01-01',
      graceDays: 15,
      lienPosition: '1st Mortgage',
    },
    payment: {
      paymentDue: 2345.67,
      lateChargesDue: 0,
      badCheckFees: 0,
      otherFees: 123.45,
      totalDue: 2469.12,
      dueDate: '2020-09-21',
    },
    service: {
      eStatements: 'Yes',
      webAccess: 'Registered',
      welcomeCall: 'Yes',
    },
  },
};

export default loanInfoMockData;

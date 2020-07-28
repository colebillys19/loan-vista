const loanMockData = {
  balances: {},
  borrower: { name: 'John Doe' },
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
      avgCallsQuarter: 4,
      avgTimeCall: 3.61,
      callsLast30Days: 3,
      mostFreqReason: 'A100',
      totalCalls: 82,
      totalNotes: 27,
    },
    loan: {
      assumptionCode: 'A',
      assumptionDate: '2020-06-21',
      graceDays: 15,
      health: 1,
      interestRate: 0.05,
      investorCode: 'N03',
      investorName: 'Nevada Housing',
      lienPosition: '1st Mortgage',
      loanType: 'FHA Residential',
      maturityDate: '2046-01-01',
      originalLoanAmount: 345678.9,
      originationDate: '2016-01-01',
      principalBalance: 234456.78,
      status: 'Current',
    },
    payment: {
      badCheckFees: 0,
      dueDate: '2020-09-21',
      lateChargesDue: 0,
      otherFees: 123.45,
      paymentDue: 2345.67,
      totalDue: 2469.12,
    },
    service: {
      eStatements: 'Yes',
      webAccess: 'Registered',
      welcomeCall: 'Yes',
    },
  },
};

module.exports = loanMockData;

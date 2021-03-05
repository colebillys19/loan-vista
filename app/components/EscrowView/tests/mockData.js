export const MOCK_ESCROW_DATA = {
  currentListData: {
    listData: [
      { label: 'Current Due Date', value: '05/06/2021' },
      { label: 'Current Escrow Payment', value: '$123.45' },
      { label: 'Current Escrow Balance', value: '$876.54' },
    ],
  },
  currentPieData: [
    { color: 'red', text: 'County/City Tax', value: 123.4 },
    { color: 'green', text: 'Other Tax', value: 67.8 },
    { color: 'blue', text: 'County Tax', value: 90 },
  ],
  effectiveListData: {
    listData: [
      { label: 'Last/Next Escrow Analysis Date', value: 'May 2022' },
      { label: 'Effective Due Date', value: '02/20' },
      { label: 'Effective Escrow Payment', value: '$654.32' },
    ],
  },
  effectivePieData: [
    { color: 'red', text: 'County/City Tax', value: 123.4 },
    { color: 'green', text: 'Other Tax', value: 67.8 },
    { color: 'blue', text: 'County Tax', value: 90 },
  ],
};

export const MOCK_HOMEOWNERS_DATA = [
  {
    annualPremium: 'annualPremium',
    company: 'company',
    id: '1',
    insuranceType: 'insuranceType',
    policyExpiration: 'policyExpiration',
    policyType: 'policyType',
  },
];

export const MOCK_MORTGAGE_DATA = [
  {
    company: 'company',
    id: '1',
    insuranceId: 'insuranceId',
    premiumAmount: 'premiumAmount',
    premiumDue: 'premiumDue',
  },
];

export const MOCK_TAXES_DATA = [
  {
    expectedAmount: 'expectedAmount',
    id: '1',
    nextDue: 'nextDue',
    paidTo: 'paidTo',
    payFrequency: 'payFrequency',
    taxId: 'taxId',
    taxType: 'taxType',
  },
];

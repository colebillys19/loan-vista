export const MOCK_DATA = {
  data: [
    {
      expandedData: [
        {
          listData: [
            { label: 'Effective Date', value: '10/19/2019' },
            { label: 'Principal Balance', value: '$8.68' },
            { label: 'Escrow Balance', value: '$38.82' },
            { label: 'Fees', value: '$74.24' },
            { label: 'Accrued Late Charge', value: '$70.42' },
            { label: 'Other Total', value: '$11.32' },
          ],
        },
        {
          listData: [
            { label: 'Accident/Health Insurance', value: '$66.86' },
            { label: 'Life Insurance', value: '$55.66' },
            { label: 'Miscellaneous', value: '$45.28' },
            { label: 'Suspense', value: '$83.46' },
            { label: 'Replacement Reserve', value: '$97.76' },
            { label: 'Restricted Reserve', value: '$15.48' },
          ],
        },
      ],
      id: '29ba8a70-19d3-4ddf-b4ff-879b4f8c8fe6',
      mainData: {
        date: '12/30/2020',
        desc: 'Principal Curtailment',
        escrow: '$41.02',
        interest: '$25.00',
        principal: '$36.02',
        total: '$14.93',
      },
    },
  ],
  listHeaders: ['date', 'desc', 'total', 'principal', 'interest', 'escrow'],
};

export const MOCK_RAW_DATA = [
  {
    accidentHealthInsurance: 66.86,
    accruedLateCharge: 70.42,
    date: '2020-12-30',
    desc: 'principal curtailment',
    effectiveDate: '2019-10-19',
    escrow: 41.02,
    escrowBalance: 38.82,
    fees: 74.24,
    id: '29ba8a70-19d3-4ddf-b4ff-879b4f8c8fe6',
    interest: 25,
    lifeInsurance: 55.66,
    misc: 45.28,
    otherTotal: 11.32,
    principal: 36.02,
    principalBalance: 8.68,
    replacementReserve: 97.76,
    restrictedReserve: 15.48,
    suspense: 83.46,
    time: '04:12:45',
    total: 14.93,
  },
];

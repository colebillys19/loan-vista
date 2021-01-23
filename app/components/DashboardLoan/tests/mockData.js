export const MOCK_BALANCES_DATA = {
  listData: [
    { label: 'Escrow', value: '1090.33' },
    { label: 'Advance', value: '0.01' },
    { label: 'Suspense', value: '1.00' },
    { label: 'Late Charge Due', value: '5.00' },
    { label: 'Replacement Reserve', value: '1.00' },
    { label: 'Res Esc', value: '1.00' },
    { label: 'Interest Due', value: '5.00' },
    { label: 'HUD', value: '1.00' },
    { label: 'Deficit', value: '1080.20' },
    { label: 'Disc Bal', value: '1.00' },
    { label: 'Original Disbursement', value: '1.00' },
    { label: 'Original Loan', value: '90,000.00' },
  ],
  title: 'Balances',
};

export const MOCK_PAYMENT_DATA = {
  listData: [
    { label: 'Principal & Interest', value: '718.75' },
    { label: '2nd Principal & Interest', value: '100.00' },
    { label: 'Escrow', value: '2800.00' },
    { label: 'Replacement Reserve', value: '1.00' },
    { label: 'Miscellaneous', value: '100.00' },
    { label: 'Life Insurance', value: '1.00' },
    { label: 'Accident & Health', value: '1.00' },
    { label: 'BSC', value: '1.00' },
    { label: 'Total', value: '4422.93' },
    { label: 'HUD-P', value: '1.00' },
    { label: 'Net Payment', value: '4422.93' },
    { label: 'Payment Frequency', value: '12' },
  ],
  title: 'Payment',
};

export const MOCK_STOPS_DATA = [
  {
    date: '02/03/2019',
    desc: 'User Defined - 1',
    name: 'Process',
  },
  {
    date: '06/19/2020',
    desc: 'Cash will assign. Lorem ipsum dolor sit amet...',
    name: 'Bad Check',
  },
  {
    date: '11/01/2019',
    desc: 'Normal or early payoff. Lorem ipsum dolor sit amet...',
    name: 'Paid In Full',
  },
  {
    date: '09/28/2019',
    desc: 'Marked for deletion. Lorem ipsum dolor sit amet...',
    name: 'Foreclosure Status',
  },
  {
    date: '04/14/2020',
    desc: 'User Defined - 3',
    name: 'No Notice',
  },
  {
    date: '01/02/2021',
    desc: 'Exceeds max hazard lines.',
    name: 'Do Not Analyze',
  },
  {
    date: '10/22/2020',
    desc: 'Solicitation allowed. Lorem ipsum dolor sit amet...',
    name: 'Accident & Health',
  },
  {
    date: '04/25/2020',
    desc: 'Solicitation not allowed. Lorem ipsum dolor sit amet...',
    name: 'Life Insurance',
  },
  {
    date: '11/11/2019',
    desc: 'User Defined - 4',
    name: 'Disbursement',
  },
  {
    date: '05/06/2019',
    desc: 'Lorem ipsum dolor sit amet...',
    name: 'Cashier',
  },
  {
    date: '06/07/2020',
    desc: 'Not accruing. Greater than or equal to accruing stop day.',
    name: 'Accrual Status',
  },
  {
    date: '07/08/2020',
    desc: 'User Defined - 1',
    name: 'Late Charge',
  },
];

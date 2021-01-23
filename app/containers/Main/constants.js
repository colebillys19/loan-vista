export const FETCH_LOAN_DATA = 'app/Main/FETCH_LOAN_DATA';
export const FETCH_LOAN_DATA_FAILURE = 'app/Main/FETCH_LOAN_DATA_FAILURE';
export const FETCH_LOAN_DATA_SUCCESS = 'app/Main/FETCH_LOAN_DATA_SUCCESS';

export const DASHBOARD_BORROWER_LABEL_DICT = [
  { format: null, key: 'name', label: 'Name' },
  { format: null, key: 'addressA', label: 'Address' },
  { format: null, key: 'addressB', label: '' },
  { format: null, key: 'phone', label: 'Phone' },
  { format: null, key: 'email', label: 'Email' },
  { format: null, key: 'ssn', label: 'SSN' },
];

export const DASHBOARD_LOAN_LABEL_DICT = {
  balances: [
    { format: 'currency', key: 'escrow', label: 'Escrow' },
    { format: 'currency', key: 'advance', label: 'Advance' },
    { format: 'currency', key: 'suspense', label: 'Suspense' },
    { format: 'currency', key: 'lateChargeDue', label: 'Late Charge Due' },
    {
      format: 'currency',
      key: 'replacementReserve',
      label: 'Replacement Reserve',
    },
    { format: 'currency', key: 'resEsc', label: 'Res Esc' },
    { format: 'currency', key: 'interestDue', label: 'Interest Due' },
    { format: 'currency', key: 'hud', label: 'HUD' },
    { format: 'currency', key: 'deficit', label: 'Deficit' },
    { format: 'currency', key: 'discBal', label: 'Disc Bal' },
    {
      format: 'currency',
      key: 'originalDisbursement',
      label: 'Original Disbursement',
    },
    { format: 'currency', key: 'originalLoan', label: 'Original Loan' },
  ],
  payment: [
    {
      format: 'currency',
      key: 'principalAndInterest1',
      label: 'Principal & Interest',
    },
    {
      format: 'currency',
      key: 'principalAndInterest2',
      label: '2nd Principal & Interest',
    },
    { format: 'currency', key: 'escrow', label: 'Escrow' },
    {
      format: 'currency',
      key: 'replacementReserve',
      label: 'Replacement Reserve',
    },
    { format: 'currency', key: 'miscellaneous', label: 'Miscellaneous' },
    { format: 'currency', key: 'lifeInsurance', label: 'Life Insurance' },
    {
      format: 'currency',
      key: 'accidentAndHealth',
      label: 'Accident & Health',
    },
    { format: 'currency', key: 'bsc', label: 'BSC' },
    { format: 'currency', key: 'total', label: 'Total' },
    { format: 'currency', key: 'hudP', label: 'HUD-P' },
    { format: 'currency', key: 'netPayment', label: 'Net Payment' },
    { format: 'string', key: 'paymentFrequency', label: 'Payment Frequency' },
  ],
};

export const SIDEBAR_SUMMARY_LABEL_DICT = {
  calls: [
    { format: null, key: 'totalCalls', label: 'Total Calls' },
    { format: null, key: 'totalNotes', label: 'Total Notes' },
    { format: null, key: 'avgCallsQuarter', label: 'Average Calls/Quarter' },
    { format: null, key: 'callsLast30Days', label: 'Calls/Last 30 Days' },
    { format: 'minutes', key: 'avgTimeCall', label: 'Average Time/Call' },
    { format: null, key: 'mostFreqReason', label: 'Most Frequent Reason' },
  ],
  loan: [
    { format: null, key: 'loanNumber', label: 'Loan Number' },
    { format: null, key: 'status', label: 'Status' },
    { format: null, key: 'loanType', label: 'Loan Type' },
    { format: 'currency', key: 'principalBalance', label: 'Principal Balance' },
    {
      format: 'currency',
      key: 'originalLoanAmount',
      label: 'Original Loan Amount',
    },
    { format: null, key: 'investorName', label: 'Investor Name' },
    { format: null, key: 'investorCode', label: 'Investor Code' },
    { format: null, key: 'assumptionCode', label: 'Assumption Code' },
    { format: 'date', key: 'assumptionDate', label: 'Assumption Date' },
    { format: 'percentage', key: 'interestRate', label: 'Interest Rate' },
    { format: 'date', key: 'originationDate', label: 'Origination Date' },
    { format: 'date', key: 'maturityDate', label: 'Maturity Date' },
    { format: null, key: 'graceDays', label: 'Grace Days' },
    { format: null, key: 'lienPosition', label: 'Lien Position' },
  ],
  payment: [
    { format: 'currency', key: 'paymentDue', label: 'Payment Due' },
    { format: 'currency', key: 'lateChargesDue', label: 'Late Charges Due' },
    { format: 'currency', key: 'badCheckFees', label: 'Bad Check Fees' },
    { format: 'currency', key: 'otherFees', label: 'Other Fees' },
    { format: 'currency', key: 'totalDue', label: 'Total Due' },
    { format: 'date', key: 'dueDate', label: 'Due Date' },
  ],
  service: [
    { format: null, key: 'eStatements', label: 'E-Statements' },
    { format: null, key: 'webAccess', label: 'Web Access' },
    { format: null, key: 'welcomeCall', label: 'Welcome Call' },
  ],
};

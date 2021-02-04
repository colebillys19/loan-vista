export const DASHBOARD_BORROWER_LABEL_DICT = [
  { format: 'stringTitleCase', key: 'name', label: 'Name' },
  { format: null, key: 'addressA', label: 'Address' },
  { format: null, key: 'addressB', label: '' },
  { format: 'phone', key: 'phone', label: 'Phone' },
  { format: 'stringLowerCase', key: 'email', label: 'Email' },
  { format: null, key: 'ssn', label: 'SSN' },
];

export const DASHBOARD_LOAN_LABEL_DICT = {
  balances: [
    { format: 'currencyNoAdorn', key: 'escrow', label: 'Escrow' },
    { format: 'currencyNoAdorn', key: 'advance', label: 'Advance' },
    { format: 'currencyNoAdorn', key: 'suspense', label: 'Suspense' },
    {
      format: 'currencyNoAdorn',
      key: 'lateChargeDue',
      label: 'Late Charge Due',
    },
    {
      format: 'currencyNoAdorn',
      key: 'replacementReserve',
      label: 'Replacement Reserve',
    },
    { format: 'currencyNoAdorn', key: 'resEsc', label: 'Res Esc' },
    { format: 'currencyNoAdorn', key: 'interestDue', label: 'Interest Due' },
    { format: 'currencyNoAdorn', key: 'hud', label: 'HUD' },
    { format: 'currencyNoAdorn', key: 'deficit', label: 'Deficit' },
    { format: 'currencyNoAdorn', key: 'discBal', label: 'Disc Bal' },
    {
      format: 'currencyNoAdorn',
      key: 'originalDisbursement',
      label: 'Original Disbursement',
    },
    { format: 'currencyNoAdorn', key: 'originalLoan', label: 'Original Loan' },
  ],
  payment: [
    {
      format: 'currencyNoAdorn',
      key: 'principalAndInterest1',
      label: 'Principal & Interest',
    },
    {
      format: 'currencyNoAdorn',
      key: 'principalAndInterest2',
      label: '2nd Principal & Interest',
    },
    { format: 'currencyNoAdorn', key: 'escrow', label: 'Escrow' },
    {
      format: 'currencyNoAdorn',
      key: 'replacementReserve',
      label: 'Replacement Reserve',
    },
    { format: 'currencyNoAdorn', key: 'miscellaneous', label: 'Miscellaneous' },
    {
      format: 'currencyNoAdorn',
      key: 'lifeInsurance',
      label: 'Life Insurance',
    },
    {
      format: 'currencyNoAdorn',
      key: 'accidentAndHealth',
      label: 'Accident & Health',
    },
    { format: 'currencyNoAdorn', key: 'bsc', label: 'BSC' },
    { format: 'currencyNoAdorn', key: 'total', label: 'Total' },
    { format: 'currencyNoAdorn', key: 'hudP', label: 'HUD-P' },
    { format: 'currencyNoAdorn', key: 'netPayment', label: 'Net Payment' },
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
    { format: 'stringTitleCase', key: 'status', label: 'Status' },
    { format: null, key: 'loanType', label: 'Loan Type' },
    { format: 'currency', key: 'principalBalance', label: 'Principal Balance' },
    {
      format: 'currency',
      key: 'originalLoanAmount',
      label: 'Original Loan Amount',
    },
    { format: 'stringTitleCase', key: 'investorName', label: 'Investor Name' },
    { format: null, key: 'investorCode', label: 'Investor Code' },
    { format: null, key: 'assumptionCode', label: 'Assumption Code' },
    { format: 'date', key: 'assumptionDate', label: 'Assumption Date' },
    { format: 'percentage', key: 'interestRate', label: 'Interest Rate' },
    { format: 'date', key: 'originationDate', label: 'Origination Date' },
    { format: 'date', key: 'maturityDate', label: 'Maturity Date' },
    { format: null, key: 'graceDays', label: 'Grace Days' },
    { format: 'stringTitleCase', key: 'lienPosition', label: 'Lien Position' },
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
    { format: 'stringTitleCase', key: 'eStatements', label: 'E-Statements' },
    { format: 'stringTitleCase', key: 'webAccess', label: 'Web Access' },
    { format: 'stringTitleCase', key: 'welcomeCall', label: 'Welcome Call' },
  ],
};

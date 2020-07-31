export const FETCH_LOAN_DATA = 'app/Main/FETCH_LOAN_DATA';
export const FETCH_LOAN_DATA_FAILURE = 'app/Main/FETCH_LOAN_DATA_FAILURE';
export const FETCH_LOAN_DATA_SUCCESS = 'app/Main/FETCH_LOAN_DATA_SUCCESS';

export const SUMMARY_LABEL_DICT = {
  calls: [
    { format: null, key: 'totalCalls', label: 'Total Calls' },
    { format: null, key: 'totalNotes', label: 'Total Notes' },
    { format: null, key: 'avgCallsQuarter', label: 'Average Calls/Quarter' },
    { format: null, key: 'callsLast30Days', label: 'Calls/Last 30 Days' },
    { format: 'minutes', key: 'avgTimeCall', label: 'Average Time/Call' },
    { format: null, key: 'mostFreqReason', label: 'Most Frequent Reason' },
  ],
  loan: [
    { format: null, key: 'loanType', label: 'Loan Type' },
    { format: null, key: 'status', label: 'Status' },
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

export const FETCH_LOAN_DATA = 'app/Main/FETCH_LOAN_DATA';
export const FETCH_LOAN_DATA_FAILURE = 'app/Main/FETCH_LOAN_DATA_FAILURE';
export const FETCH_LOAN_DATA_SUCCESS = 'app/Main/FETCH_LOAN_DATA_SUCCESS';

export const SUMMARY_LABEL_DICT = {
  calls: [
    { key: 'totalCalls', label: 'Total Calls' },
    { key: 'totalNotes', label: 'Total Notes' },
    { key: 'avgCallsQuarter', label: 'Average Calls/Quarter' },
    { key: 'callsLast30Days', label: 'Calls/Last 30 Days' },
    { key: 'avgTimeCall', label: 'Average Time/Call' },
    { key: 'mostFreqReason', label: 'Most Frequent Reason' },
  ],
  loan: [
    { key: 'loanType', label: 'Loan Type' },
    { key: 'status', label: 'Status' },
    { key: 'principalBalance', label: 'Principal Balance' },
    { key: 'originalLoanAmount', label: 'Original Loan Amount' },
    { key: 'investorName', label: 'Investor Name' },
    { key: 'investorCode', label: 'Investor Code' },
    { key: 'assumptionCode', label: 'Assumption Code' },
    { key: 'assumptionDate', label: 'Assumption Date' },
    { key: 'interestRate', label: 'Interest Rate' },
    { key: 'originationDate', label: 'Origination Date' },
    { key: 'maturityDate', label: 'Maturity Date' },
    { key: 'graceDays', label: 'Grace Days' },
    { key: 'lienPosition', label: 'Lien Position' },
  ],
  payment: [
    { key: 'paymentDue', label: 'Payment Due' },
    { key: 'lateChargesDue', label: 'Late Charges Due' },
    { key: 'badCheckFees', label: 'Bad Check Fees' },
    { key: 'otherFees', label: 'Other Fees' },
    { key: 'totalDue', label: 'Total Due' },
    { key: 'dueDate', label: 'Due Date' },
  ],
  service: [
    { key: 'eStatements', label: 'E-Statements' },
    { key: 'webAccess', label: 'Web Access' },
    { key: 'welcomeCall', label: 'Welcome Call' },
  ],
};

import {
  FETCH_LOAN_DATA,
  FETCH_LOAN_DATA_FAILURE,
  FETCH_LOAN_DATA_SUCCESS,
} from './constants';

export const fetchLoanData = (loanNumber) => ({
  payload: { loanNumber },
  type: FETCH_LOAN_DATA,
});

export const fetchLoanDataFailure = (error) => ({
  payload: { error },
  type: FETCH_LOAN_DATA_FAILURE,
});

export const fetchLoanDataSuccess = (loanData, loanNumber) => ({
  payload: { loanData, loanNumber },
  type: FETCH_LOAN_DATA_SUCCESS,
});

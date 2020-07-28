import {
  FETCH_LOAN_DATA,
  FETCH_LOAN_DATA_FAILURE,
  FETCH_LOAN_DATA_SUCCESS,
} from './constants';

export function fetchLoanData() {
  return {
    type: FETCH_LOAN_DATA,
  };
}

export function fetchLoanDataFailure(error) {
  return {
    payload: { error },
    type: FETCH_LOAN_DATA_FAILURE,
  };
}

export function fetchLoanDataSuccess(loanData) {
  return {
    payload: { loanData },
    type: FETCH_LOAN_DATA_SUCCESS,
  };
}

import {
  FETCH_LOAN_DATA,
  FETCH_LOAN_DATA_FAILURE,
  FETCH_LOAN_DATA_SUCCESS,
} from './constants';

export const fetchLoanData = () => {
  return {
    type: FETCH_LOAN_DATA,
  };
};

export const fetchLoanDataFailure = (error) => {
  return {
    payload: { error },
    type: FETCH_LOAN_DATA_FAILURE,
  };
};

export const fetchLoanDataSuccess = (loanData) => {
  return {
    payload: { loanData },
    type: FETCH_LOAN_DATA_SUCCESS,
  };
};

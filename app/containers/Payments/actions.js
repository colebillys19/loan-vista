import {
  FETCH_PAYMENTS_DATA,
  FETCH_PAYMENTS_DATA_FAILURE,
  FETCH_PAYMENTS_DATA_SUCCESS,
} from './constants';

export function fetchPaymentsData() {
  return {
    type: FETCH_PAYMENTS_DATA,
  };
}

export function fetchPaymentsDataFailure(error) {
  return {
    payload: { error },
    type: FETCH_PAYMENTS_DATA_FAILURE,
  };
}

export function fetchPaymentsDataSuccess(paymentsData) {
  return {
    payload: { paymentsData },
    type: FETCH_PAYMENTS_DATA_SUCCESS,
  };
}

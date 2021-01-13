import {
  FETCH_PAYMENTS_DATA,
  FETCH_PAYMENTS_DATA_FAILURE,
  FETCH_PAYMENTS_DATA_SUCCESS,
  ON_UNMOUNT,
} from './constants';

/* eslint-disable arrow-body-style */
export const fetchPaymentsData = (params) => ({
  payload: { params },
  type: FETCH_PAYMENTS_DATA,
});

export const fetchPaymentsDataFailure = (error) => ({
  payload: { error },
  type: FETCH_PAYMENTS_DATA_FAILURE,
});

export const fetchPaymentsDataSuccess = (paymentsData, newFetchParams) => ({
  payload: { newFetchParams, paymentsData },
  type: FETCH_PAYMENTS_DATA_SUCCESS,
});

export const onUnmount = () => ({ type: ON_UNMOUNT });

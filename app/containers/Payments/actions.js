import {
  FETCH_PAYMENTS_DATA,
  FETCH_PAYMENTS_DATA_FAILURE,
  FETCH_PAYMENTS_DATA_SUCCESS,
  SET_IS_FILTERED,
  SET_LOADING_TRUE,
} from './constants';

export const fetchPaymentsData = (sortCol, sortOrder) => ({
  payload: { sortCol, sortOrder },
  type: FETCH_PAYMENTS_DATA,
});

export const fetchPaymentsDataFailure = (error) => ({
  payload: { error },
  type: FETCH_PAYMENTS_DATA_FAILURE,
});

export const fetchPaymentsDataSuccess = (paymentsData, params) => ({
  payload: { params, paymentsData },
  type: FETCH_PAYMENTS_DATA_SUCCESS,
});

export const setIsFilteredData = (value) => ({
  payload: { value },
  type: SET_IS_FILTERED,
});

export const setLoadingTrue = () => ({ type: SET_LOADING_TRUE });

import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
  ON_UNMOUNT,
} from './constants';

/* eslint-disable arrow-body-style */
export const fetchCallsData = (params) => ({
  payload: { params },
  type: FETCH_CALLS_DATA,
});

export const fetchCallsDataFailure = (error) => ({
  payload: { error },
  type: FETCH_CALLS_DATA_FAILURE,
});

export const fetchCallsDataSuccess = (callsData) => ({
  payload: { callsData },
  type: FETCH_CALLS_DATA_SUCCESS,
});

export const onUnmount = () => ({ type: ON_UNMOUNT });

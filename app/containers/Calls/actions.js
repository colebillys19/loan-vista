import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
  ON_UNMOUNT,
  SET_LOADING_TRUE,
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

export const fetchCallsDataSuccess = (callsData, newFetchParams) => ({
  payload: { callsData, newFetchParams },
  type: FETCH_CALLS_DATA_SUCCESS,
});

export const onUnmount = () => ({ type: ON_UNMOUNT });

export const setLoadingTrue = () => ({ type: SET_LOADING_TRUE });

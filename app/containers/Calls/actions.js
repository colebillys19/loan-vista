import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
  SET_LOADING_TRUE,
  UPDATE_FILTER_STATE,
} from './constants';

export const fetchCallsData = (sortCol, sortOrder) => ({
  payload: { sortCol, sortOrder },
  type: FETCH_CALLS_DATA,
});

export const fetchCallsDataFailure = (error) => ({
  payload: { error },
  type: FETCH_CALLS_DATA_FAILURE,
});

export const fetchCallsDataSuccess = (callsData, params) => ({
  payload: { callsData, params },
  type: FETCH_CALLS_DATA_SUCCESS,
});

export const setLoadingTrue = () => ({ type: SET_LOADING_TRUE });

export const updateFilterState = (payload) => ({
  payload,
  type: UPDATE_FILTER_STATE,
});

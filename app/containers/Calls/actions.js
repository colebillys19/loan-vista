import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
  SET_LOADING_TRUE,
  UPDATE_FILTER_PARAM,
  UPDATE_SORT_PARAM,
} from './constants';

export const fetchCallsData = (sortCol) => ({
  payload: { sortCol },
  type: FETCH_CALLS_DATA,
});

export const fetchCallsDataFailure = (error) => ({
  payload: { error },
  type: FETCH_CALLS_DATA_FAILURE,
});

export const fetchCallsDataSuccess = (callsData, paramsUsed) => ({
  payload: { callsData, paramsUsed },
  type: FETCH_CALLS_DATA_SUCCESS,
});

export const setLoadingTrue = () => ({ type: SET_LOADING_TRUE });

export const updateFilterParam = (param, value) => ({
  payload: { param, value },
  type: UPDATE_FILTER_PARAM,
});

export const updateSortParam = (param, value) => ({
  payload: { param, value },
  type: UPDATE_SORT_PARAM,
});

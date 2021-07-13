import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
  SET_IS_FILTERED,
  SET_LOADING_TRUE,
} from './constants';

export const fetchCallsData = (payload) => {
  const { pageToFetch, sortCol, sortOrder } = payload || {};

  return {
    payload: { pageToFetch, sortCol, sortOrder },
    type: FETCH_CALLS_DATA,
  };
};

export const fetchCallsDataFailure = (error) => ({
  payload: { error },
  type: FETCH_CALLS_DATA_FAILURE,
});

export const fetchCallsDataSuccess = ({
  pageData,
  pageNum,
  params,
  totalPages,
}) => ({
  payload: { pageData, pageNum, params, totalPages },
  type: FETCH_CALLS_DATA_SUCCESS,
});

export const setIsFilteredData = (value) => ({
  payload: { value },
  type: SET_IS_FILTERED,
});

export const setLoadingTrue = () => ({ type: SET_LOADING_TRUE });

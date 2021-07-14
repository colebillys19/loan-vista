import {
  FETCH_DOCUMENTS_DATA,
  FETCH_DOCUMENTS_DATA_FAILURE,
  FETCH_DOCUMENTS_DATA_SUCCESS,
  SET_IS_FILTERED,
  SET_LOADING_TRUE,
} from './constants';

export const fetchDocumentsData = (payload) => {
  const { pageToFetch, sortCol, sortOrder } = payload || {};

  return {
    payload: { pageToFetch, sortCol, sortOrder },
    type: FETCH_DOCUMENTS_DATA,
  };
};

export const fetchDocumentsDataFailure = (error) => ({
  payload: { error },
  type: FETCH_DOCUMENTS_DATA_FAILURE,
});

export const fetchDocumentsDataSuccess = ({
  pageData,
  pageNum,
  params,
  totalPages,
}) => ({
  payload: { pageData, pageNum, params, totalPages },
  type: FETCH_DOCUMENTS_DATA_SUCCESS,
});

export const setIsFilteredData = (value) => ({
  payload: { value },
  type: SET_IS_FILTERED,
});

export const setLoadingTrue = () => ({ type: SET_LOADING_TRUE });

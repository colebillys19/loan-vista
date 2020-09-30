import {
  FETCH_DOCUMENTS_DATA,
  FETCH_DOCUMENTS_DATA_FAILURE,
  FETCH_DOCUMENTS_DATA_SUCCESS,
  ON_UNMOUNT,
} from './constants';

/* eslint-disable arrow-body-style */
export const fetchDocumentsData = (params) => ({
  payload: { params },
  type: FETCH_DOCUMENTS_DATA,
});

export const fetchDocumentsDataFailure = (error) => ({
  payload: { error },
  type: FETCH_DOCUMENTS_DATA_FAILURE,
});

export const fetchDocumentsDataSuccess = (documentsData) => ({
  payload: { documentsData },
  type: FETCH_DOCUMENTS_DATA_SUCCESS,
});

export const onUnmount = () => ({ type: ON_UNMOUNT });

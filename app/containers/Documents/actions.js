import {
  FETCH_EMAILS_DATA,
  FETCH_EMAILS_DATA_FAILURE,
  FETCH_EMAILS_DATA_SUCCESS,
  ON_UNMOUNT,
} from './constants';

/* eslint-disable arrow-body-style */
export const fetchDocumentsData = () => ({ type: FETCH_EMAILS_DATA });

export const fetchDocumentsDataFailure = (error) => ({
  payload: { error },
  type: FETCH_EMAILS_DATA_FAILURE,
});

export const fetchDocumentsDataSuccess = (documentsData) => ({
  payload: { documentsData },
  type: FETCH_EMAILS_DATA_SUCCESS,
});

export const onUnmount = () => ({ type: ON_UNMOUNT });

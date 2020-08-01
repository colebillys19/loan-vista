import {
  FETCH_EMAILS_DATA,
  FETCH_EMAILS_DATA_FAILURE,
  FETCH_EMAILS_DATA_SUCCESS,
  ON_UNMOUNT,
} from './constants';

/* eslint-disable arrow-body-style */
export const fetchEmailsData = () => ({ type: FETCH_EMAILS_DATA });

export const fetchEmailsDataFailure = (error) => ({
  payload: { error },
  type: FETCH_EMAILS_DATA_FAILURE,
});

export const fetchEmailsDataSuccess = (emailsData) => ({
  payload: { emailsData },
  type: FETCH_EMAILS_DATA_SUCCESS,
});

export const onUnmount = () => ({ type: ON_UNMOUNT });

import {
  CLEAR_LIST_MODAL_DATA,
  FETCH_LOAN_DATA,
  FETCH_LOAN_DATA_FAILURE,
  FETCH_LOAN_DATA_SUCCESS,
  SET_AUDIO_MODAL_DATA,
  SET_DOWNLOAD_MODAL_DATA,
} from './constants';

export const clearListModalData = () => ({ type: CLEAR_LIST_MODAL_DATA });

export const fetchLoanData = (loanNumber) => ({
  payload: { loanNumber },
  type: FETCH_LOAN_DATA,
});

export const fetchLoanDataFailure = (error) => ({
  payload: { error },
  type: FETCH_LOAN_DATA_FAILURE,
});

export const fetchLoanDataSuccess = (loanData, loanNumber) => ({
  payload: { loanData, loanNumber },
  type: FETCH_LOAN_DATA_SUCCESS,
});

export const setAudioModalData = (data) => ({
  payload: { data },
  type: SET_AUDIO_MODAL_DATA,
});

export const setDownloadModalData = (data) => ({
  payload: { data },
  type: SET_DOWNLOAD_MODAL_DATA,
});

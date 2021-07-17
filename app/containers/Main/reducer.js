import produce from 'immer';

import initialState from './initialState';
import {
  CLEAR_LIST_MODAL_DATA,
  FETCH_LOAN_DATA,
  FETCH_LOAN_DATA_FAILURE,
  FETCH_LOAN_DATA_SUCCESS,
  SET_AUDIO_MODAL_DATA,
  SET_DOWNLOAD_MODAL_DATA,
} from './constants';

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const mainReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case CLEAR_LIST_MODAL_DATA:
        draft.audioModalData = {};
        draft.downloadModalData = {};
        break;
      case FETCH_LOAN_DATA:
        draft.error = false;
        draft.loading = true;
        break;
      case FETCH_LOAN_DATA_FAILURE:
        const { error } = payload;
        draft.error = error;
        draft.loading = false;
        break;
      case FETCH_LOAN_DATA_SUCCESS:
        const { loanData, loanNumber } = payload;
        draft.loanNumber = loanNumber;
        draft.loanData = loanData;
        draft.loading = false;
        break;
      case SET_AUDIO_MODAL_DATA: {
        const { data } = payload;
        draft.audioModalData = data;
        break;
      }
      case SET_DOWNLOAD_MODAL_DATA: {
        const { data } = payload;
        draft.downloadModalData = data;
        break;
      }
    }
  });

export default mainReducer;

import produce from 'immer';

import mainInitialState from './initialState';
import {
  FETCH_LOAN_DATA,
  FETCH_LOAN_DATA_FAILURE,
  FETCH_LOAN_DATA_SUCCESS,
} from './constants';

export const initialState = mainInitialState;

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const mainReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
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
    }
  });

export default mainReducer;

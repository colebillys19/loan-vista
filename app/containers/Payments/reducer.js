import produce from 'immer';

import initialState from './initialState';
import {
  FETCH_PAYMENTS_DATA,
  FETCH_PAYMENTS_DATA_FAILURE,
  FETCH_PAYMENTS_DATA_SUCCESS,
  SET_LOADING_TRUE,
} from './constants';

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const paymentsReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_PAYMENTS_DATA:
        const { sortCol } = payload;
        draft.error = false;
        if (sortCol) {
          draft.sortLoading = sortCol;
        } else {
          draft.loading = true;
        }
        break;
      case FETCH_PAYMENTS_DATA_FAILURE:
        const { error } = payload;
        draft.error = error;
        draft.loading = false;
        draft.sortLoading = false;
        break;
      case FETCH_PAYMENTS_DATA_SUCCESS:
        const { params, paymentsData } = payload;
        draft.paymentsData = paymentsData;
        draft.lastFetchParams = params;
        draft.loading = false;
        draft.sortLoading = false;
        break;
      case SET_LOADING_TRUE:
        draft.loading = true;
        break;
    }
  });

export default paymentsReducer;

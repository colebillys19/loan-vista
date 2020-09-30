import produce from 'immer';

import paymentsInitialState from './initialState';
import {
  FETCH_PAYMENTS_DATA,
  FETCH_PAYMENTS_DATA_FAILURE,
  FETCH_PAYMENTS_DATA_SUCCESS,
  ON_UNMOUNT,
} from './constants';

export const initialState = paymentsInitialState;

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const paymentsReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_PAYMENTS_DATA:
        draft.error = false;
        draft.loading = true;
        break;
      case FETCH_PAYMENTS_DATA_FAILURE:
        const { error } = payload;
        draft.error = error;
        draft.loading = false;
        break;
      case FETCH_PAYMENTS_DATA_SUCCESS:
        const { newFetchParams, paymentsData } = payload;
        draft.loading = false;
        draft.fetchParams = newFetchParams;
        draft.paymentsData = paymentsData;
        break;
      case ON_UNMOUNT:
        draft.error = false;
        draft.loading = true;
        break;
    }
  });

export default paymentsReducer;

import produce from 'immer';

import paymentsInitialState from './initialState';
import {
  FETCH_PAYMENTS_DATA,
  FETCH_PAYMENTS_DATA_FAILURE,
  FETCH_PAYMENTS_DATA_SUCCESS,
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
        const { paymentsData } = payload;
        draft.paymentsData = paymentsData;
        draft.loading = false;
        break;
    }
  });

export default paymentsReducer;

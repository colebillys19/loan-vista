import produce from 'immer';

import paymentsInitialState from './initialState';
import {
  FETCH_PAYMENTS_DATA,
  FETCH_PAYMENTS_DATA_FAILURE,
  FETCH_PAYMENTS_DATA_SUCCESS,
  ON_UNMOUNT,
  SET_LOADING_TRUE,
} from './constants';

export const initialState = paymentsInitialState;

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const paymentsReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_PAYMENTS_DATA:
        const { params } = payload;
        draft.error = false;
        if (params && params.sortOrder) {
          draft.sortLoading = true;
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
        const { newFetchParams, paymentsData } = payload;
        draft.noDataFetched = !paymentsData.length;
        draft.loading = false;
        draft.fetchParams = newFetchParams;
        draft.paymentsData = paymentsData;
        draft.sortLoading = false;
        break;
      case ON_UNMOUNT:
        draft.error = false;
        draft.fetchParams = initialState.fetchParams;
        draft.loading = false;
        draft.sortLoading = false;
        break;
      case SET_LOADING_TRUE:
        draft.loading = true;
        break;
    }
  });

export default paymentsReducer;

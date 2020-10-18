import produce from 'immer';

import callsInitialState from './initialState';
import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
  ON_UNMOUNT,
} from './constants';

export const initialState = callsInitialState;

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const callsReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_CALLS_DATA:
        const { params } = payload;
        draft.error = false;
        if (params && params.sortOrder) {
          draft.sortLoading = true;
        } else {
          draft.loading = true;
        }
        break;
      case FETCH_CALLS_DATA_FAILURE:
        const { error } = payload;
        draft.error = error;
        draft.loading = false;
        draft.sortLoading = false;
        break;
      case FETCH_CALLS_DATA_SUCCESS:
        const { callsData, newFetchParams } = payload;
        draft.callsData = callsData;
        draft.fetchParams = newFetchParams;
        draft.loading = false;
        draft.sortLoading = false;
        break;
      case ON_UNMOUNT:
        draft.error = false;
        draft.fetchParams = initialState.fetchParams;
        draft.loading = false;
        draft.sortLoading = false;
        break;
    }
  });

export default callsReducer;

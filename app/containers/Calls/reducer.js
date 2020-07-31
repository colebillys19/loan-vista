import produce from 'immer';

import callsInitialState from './initialState';
import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
} from './constants';

export const initialState = callsInitialState;

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const callsReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_CALLS_DATA:
        draft.error = false;
        draft.loading = true;
        break;
      case FETCH_CALLS_DATA_FAILURE:
        const { error } = payload;
        draft.error = error;
        draft.loading = false;
        break;
      case FETCH_CALLS_DATA_SUCCESS:
        const { callsData } = payload;
        draft.callsData = callsData;
        draft.loading = false;
        break;
    }
  });

export default callsReducer;

import produce from 'immer';

import corrInitialState from './initialState';
import {
  FETCH_CORR_DATA,
  FETCH_CORR_DATA_FAILURE,
  FETCH_CORR_DATA_SUCCESS,
} from './constants';

export const initialState = corrInitialState;

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const corrReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_CORR_DATA:
        draft.error = false;
        draft.loading = true;
        break;
      case FETCH_CORR_DATA_FAILURE:
        const { error } = payload;
        draft.error = error;
        draft.loading = false;
        break;
      case FETCH_CORR_DATA_SUCCESS:
        const { corrData } = payload;
        draft.corrData = corrData;
        draft.loading = false;
        break;
    }
  });

export default corrReducer;

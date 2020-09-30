import produce from 'immer';

import documentsInitialState from './initialState';
import {
  FETCH_DOCUMENTS_DATA,
  FETCH_DOCUMENTS_DATA_FAILURE,
  FETCH_DOCUMENTS_DATA_SUCCESS,
  ON_UNMOUNT,
} from './constants';

export const initialState = documentsInitialState;

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const documentsReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_DOCUMENTS_DATA:
        draft.error = false;
        draft.loading = true;
        break;
      case FETCH_DOCUMENTS_DATA_FAILURE:
        const { error } = payload;
        draft.error = error;
        draft.loading = false;
        break;
      case FETCH_DOCUMENTS_DATA_SUCCESS:
        const { documentsData, newFetchParams } = payload;
        draft.documentsData = documentsData;
        draft.fetchParams = newFetchParams;
        draft.loading = false;
        break;
      case ON_UNMOUNT:
        draft.error = false;
        draft.loading = true;
        break;
    }
  });

export default documentsReducer;

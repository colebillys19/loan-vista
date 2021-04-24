import produce from 'immer';

import initialState from './initialState';
import {
  FETCH_DOCUMENTS_DATA,
  FETCH_DOCUMENTS_DATA_FAILURE,
  FETCH_DOCUMENTS_DATA_SUCCESS,
  SET_LOADING_TRUE,
} from './constants';

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const documentsReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_DOCUMENTS_DATA:
        const { sortCol } = payload;
        draft.error = false;
        if (sortCol) {
          draft.sortLoading = sortCol;
        } else {
          draft.loading = true;
        }
        break;
      case FETCH_DOCUMENTS_DATA_FAILURE:
        const { error } = payload;
        draft.error = error;
        draft.loading = false;
        draft.sortLoading = false;
        break;
      case FETCH_DOCUMENTS_DATA_SUCCESS:
        const { documentsData, params } = payload;
        draft.documentsData = documentsData;
        draft.lastFetchParams = params;
        draft.loading = false;
        draft.sortLoading = false;
        break;
      case SET_LOADING_TRUE:
        draft.loading = true;
        break;
    }
  });

export default documentsReducer;

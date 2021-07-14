import produce, { original } from 'immer';

import initialState from './initialState';
import {
  FETCH_DOCUMENTS_DATA,
  FETCH_DOCUMENTS_DATA_FAILURE,
  FETCH_DOCUMENTS_DATA_SUCCESS,
  SET_IS_FILTERED,
  SET_LOADING_TRUE,
} from './constants';

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const documentsReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_DOCUMENTS_DATA:
        const { pageToFetch, sortCol } = payload;
        draft.error = false;
        if (pageToFetch) {
          draft.scrollLoading = true;
        } else if (sortCol) {
          draft.sortLoading = sortCol;
        } else {
          draft.loading = true;
        }
        break;
      case FETCH_DOCUMENTS_DATA_FAILURE:
        const { error } = payload;
        draft.error = error;
        draft.loading = false;
        draft.scrollLoading = false;
        draft.sortLoading = false;
        break;
      case FETCH_DOCUMENTS_DATA_SUCCESS:
        const { pageData, pageNum, params, totalPages } = payload;
        if (pageNum === 1) {
          draft.documentsData = pageData;
        } else {
          const { documentsData } = original(draft);
          draft.documentsData = documentsData.concat(pageData);
        }
        draft.lastFetchParams = params;
        draft.loading = false;
        draft.nextPageToFetch = pageNum === totalPages ? -1 : pageNum + 1;
        draft.scrollLoading = false;
        draft.sortLoading = false;
        draft.totalPages = totalPages;
        break;
      case SET_IS_FILTERED:
        const { value } = payload;
        draft.isFilteredData = value;
        break;
      case SET_LOADING_TRUE:
        draft.loading = true;
        break;
    }
  });

export default documentsReducer;

import produce, { original } from 'immer';

import initialState from './initialState';
import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
  SET_IS_FILTERED,
} from './constants';

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const callsReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_CALLS_DATA:
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
      case FETCH_CALLS_DATA_FAILURE:
        const { error } = payload;
        draft.error = error;
        draft.loading = false;
        draft.scrollLoading = false;
        draft.sortLoading = false;
        break;
      case FETCH_CALLS_DATA_SUCCESS:
        const { pageData, pageNum, params, totalPages } = payload;
        if (pageNum === 1) {
          draft.callsData = pageData;
        } else {
          const { callsData } = original(draft);
          draft.callsData = callsData.concat(pageData);
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
    }
  });

export default callsReducer;

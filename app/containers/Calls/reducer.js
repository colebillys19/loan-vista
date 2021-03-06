import produce from 'immer';

import callsInitialState from './initialState';
import {
  FETCH_CALLS_DATA,
  FETCH_CALLS_DATA_FAILURE,
  FETCH_CALLS_DATA_SUCCESS,
  SET_LOADING_TRUE,
  UPDATE_FILTER_PARAM,
  UPDATE_SORT_PARAM,
} from './constants';

export const initialState = callsInitialState;

/* eslint-disable default-case, no-param-reassign, no-case-declarations */
const callsReducer = (state = initialState, { payload, type }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH_CALLS_DATA:
        const { sortCol } = payload;
        draft.error = false;
        if (sortCol) {
          draft.sortLoading = sortCol;
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
        const {
          callsData,
          paramsUsed: { dateFrom, dateTo, keyword, sortCol: c, sortOrder },
        } = payload;
        draft.noDataFetched = !callsData.length;
        draft.callsData = callsData;
        draft.oldFilterParams = { dateFrom, dateTo, keyword };
        draft.oldSortParams = { sortCol: c, sortOrder };
        draft.loading = false;
        draft.sortLoading = false;
        break;
      case SET_LOADING_TRUE:
        draft.loading = true;
        break;
      case UPDATE_FILTER_PARAM:
        const { param, value } = payload;
        draft.currentFilterParams[param] = value;
        break;
      case UPDATE_SORT_PARAM:
        const { param: p, value: v } = payload;
        draft.currentSortParams[p] = v;
        break;
    }
  });

export default callsReducer;

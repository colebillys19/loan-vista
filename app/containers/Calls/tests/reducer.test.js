import produce from 'immer';

import {
  fetchCallsData,
  fetchCallsDataFailure,
  fetchCallsDataSuccess,
} from '../actions';
import initialState from '../initialState';
import callsReducer from '../reducer';

/* eslint-disable no-param-reassign */
describe('callsReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expected = state;
    expect(callsReducer(undefined, {})).toEqual(expected);
  });

  it('should handle fetchCallsData correctly when no arguments are passed', () => {
    const expected = produce(state, (draft) => {
      draft.loading = true;
    });

    expect(callsReducer(state, fetchCallsData())).toEqual(expected);
  });

  it('should handle fetchCallsData correctly when filter arguments are passed', () => {
    const expected = produce(state, (draft) => {
      draft.sortLoading = 'date';
    });

    expect(
      callsReducer(
        state,
        fetchCallsData({ sortCol: 'date', sortOrder: 'desc' }),
      ),
    ).toEqual(expected);
  });

  it('should handle fetchCallsDataFailure correctly', () => {
    const error = 'error';
    const expected = produce(state, (draft) => {
      draft.error = 'error';
    });

    expect(callsReducer(state, fetchCallsDataFailure(error))).toEqual(expected);
  });

  it('should handle fetchCallsDataSuccess correctly', () => {
    const params = {
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = produce(state, (draft) => {
      draft.callsData = [];
      draft.lastFetchParams = params;
      draft.nextPageToFetch = -1;
      draft.totalPages = 1;
    });

    expect(
      callsReducer(
        state,
        fetchCallsDataSuccess({
          pageData: [],
          pageNum: 1,
          params,
          totalPages: 1,
        }),
      ),
    ).toEqual(expected);
  });
});

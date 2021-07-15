import produce from 'immer';

import {
  fetchDocumentsData,
  fetchDocumentsDataFailure,
  fetchDocumentsDataSuccess,
} from '../actions';
import initialState from '../initialState';
import documentsReducer from '../reducer';

/* eslint-disable no-param-reassign */
describe('documentsReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expected = state;
    expect(documentsReducer(undefined, {})).toEqual(expected);
  });

  it('should handle fetchDocumentsData correctly when no arguments are passed', () => {
    const expected = produce(state, (draft) => {
      draft.loading = true;
    });

    expect(documentsReducer(state, fetchDocumentsData())).toEqual(expected);
  });

  it('should handle fetchDocumentsData correctly when filter arguments are passed', () => {
    const expected = produce(state, (draft) => {
      draft.sortLoading = 'date';
    });

    expect(
      documentsReducer(
        state,
        fetchDocumentsData({ sortCol: 'date', sortOrder: 'desc' }),
      ),
    ).toEqual(expected);
  });

  it('should handle fetchDocumentsDataFailure correctly', () => {
    const error = 'error';
    const expected = produce(state, (draft) => {
      draft.error = 'error';
    });

    expect(documentsReducer(state, fetchDocumentsDataFailure(error))).toEqual(
      expected,
    );
  });

  it('should handle fetchDocumentsDataSuccess correctly', () => {
    const params = {
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = produce(state, (draft) => {
      draft.documentsData = [];
      draft.lastFetchParams = params;
      draft.nextPageToFetch = -1;
      draft.totalPages = 1;
    });

    expect(
      documentsReducer(
        state,
        fetchDocumentsDataSuccess({
          pageData: [],
          pageNum: 1,
          params,
          totalPages: 1,
        }),
      ),
    ).toEqual(expected);
  });
});

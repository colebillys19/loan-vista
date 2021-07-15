import produce from 'immer';

import {
  fetchPaymentsData,
  fetchPaymentsDataFailure,
  fetchPaymentsDataSuccess,
} from '../actions';
import initialState from '../initialState';
import paymentsReducer from '../reducer';

/* eslint-disable no-param-reassign */
describe('paymentsReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expected = state;
    expect(paymentsReducer(undefined, {})).toEqual(expected);
  });

  it('should handle fetchPaymentsData correctly when no arguments are passed', () => {
    const expected = produce(state, (draft) => {
      draft.loading = true;
    });

    expect(paymentsReducer(state, fetchPaymentsData())).toEqual(expected);
  });

  it('should handle fetchPaymentsData correctly when filter arguments are passed', () => {
    const expected = produce(state, (draft) => {
      draft.sortLoading = 'date';
    });

    expect(
      paymentsReducer(
        state,
        fetchPaymentsData({ sortCol: 'date', sortOrder: 'desc' }),
      ),
    ).toEqual(expected);
  });

  it('should handle fetchPaymentsDataFailure correctly', () => {
    const error = 'error';
    const expected = produce(state, (draft) => {
      draft.error = 'error';
    });

    expect(paymentsReducer(state, fetchPaymentsDataFailure(error))).toEqual(
      expected,
    );
  });

  it('should handle fetchPaymentsDataSuccess correctly', () => {
    const params = {
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = produce(state, (draft) => {
      draft.paymentsData = [];
      draft.lastFetchParams = params;
      draft.nextPageToFetch = -1;
      draft.totalPages = 1;
    });

    expect(
      paymentsReducer(
        state,
        fetchPaymentsDataSuccess({
          pageData: [],
          pageNum: 1,
          params,
          totalPages: 1,
        }),
      ),
    ).toEqual(expected);
  });
});

import produce from 'immer';

import {
  fetchPaymentsData,
  fetchPaymentsDataFailure,
  fetchPaymentsDataSuccess,
  onUnmount,
  setLoadingTrue,
} from '../actions';
import initialState from '../initialState';
import paymentsReducer from '../reducer';
import { MOCK_DATA } from './mockData';

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
    const params = {
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
    };
    const expected = produce(state, (draft) => {
      draft.loading = true;
    });

    expect(paymentsReducer(state, fetchPaymentsData(params))).toEqual(expected);
  });

  it('should handle fetchPaymentsData correctly when sort arguments are passed', () => {
    const params = { sortOrder: 'asc' };
    const expected = produce(state, (draft) => {
      draft.sortLoading = true;
    });

    expect(paymentsReducer(state, fetchPaymentsData(params))).toEqual(expected);
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
    const paymentsData = MOCK_DATA;
    const newFetchParams = {
      currentTotal: '80',
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = produce(state, (draft) => {
      draft.paymentsData = paymentsData;
      draft.fetchParams = newFetchParams;
    });

    expect(
      paymentsReducer(
        state,
        fetchPaymentsDataSuccess(paymentsData, newFetchParams),
      ),
    ).toEqual(expected);
  });

  it('should handle fetchPaymentsDataSuccess correctly when no data was fetched', () => {
    const paymentsData = [];
    const newFetchParams = {
      currentTotal: '80',
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = produce(state, (draft) => {
      draft.paymentsData = paymentsData;
      draft.fetchParams = newFetchParams;
      draft.noDataFetched = true;
    });

    expect(
      paymentsReducer(
        state,
        fetchPaymentsDataSuccess(paymentsData, newFetchParams),
      ),
    ).toEqual(expected);
  });

  it('should handle onUnmount correctly', () => {
    expect(paymentsReducer(state, onUnmount())).toEqual(initialState);
  });

  it('should handle setLoadingTrue correctly', () => {
    const expected = produce(state, (draft) => {
      draft.loading = true;
    });

    expect(paymentsReducer(state, setLoadingTrue())).toEqual(expected);
  });
});

import produce from 'immer';

import {
  fetchCallsData,
  fetchCallsDataFailure,
  fetchCallsDataSuccess,
  onUnmount,
  setLoadingTrue,
} from '../actions';
import initialState from '../initialState';
import callsReducer from '../reducer';
import { MOCK_DATA } from './mockData';

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
    const params = {
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
    };
    const expected = produce(state, (draft) => {
      draft.loading = true;
    });

    expect(callsReducer(state, fetchCallsData(params))).toEqual(expected);
  });

  it('should handle fetchCallsData correctly when sort arguments are passed', () => {
    const params = { sortOrder: 'asc' };
    const expected = produce(state, (draft) => {
      draft.sortLoading = true;
    });

    expect(callsReducer(state, fetchCallsData(params))).toEqual(expected);
  });

  it('should handle fetchCallsDataFailure correctly', () => {
    const error = 'error';
    const expected = produce(state, (draft) => {
      draft.error = 'error';
    });

    expect(callsReducer(state, fetchCallsDataFailure(error))).toEqual(expected);
  });

  it('should handle fetchCallsDataSuccess correctly', () => {
    const callsData = MOCK_DATA;
    const newFetchParams = {
      currentTotal: '80',
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = produce(state, (draft) => {
      draft.callsData = callsData;
      draft.fetchParams = newFetchParams;
    });

    expect(
      callsReducer(state, fetchCallsDataSuccess(callsData, newFetchParams)),
    ).toEqual(expected);
  });

  it('should handle fetchCallsDataSuccess correctly when no data was fetched', () => {
    const callsData = [];
    const newFetchParams = {
      currentTotal: '80',
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = produce(state, (draft) => {
      draft.callsData = callsData;
      draft.fetchParams = newFetchParams;
      draft.noDataFetched = true;
    });

    expect(
      callsReducer(state, fetchCallsDataSuccess(callsData, newFetchParams)),
    ).toEqual(expected);
  });

  it('should handle onUnmount correctly', () => {
    expect(callsReducer(state, onUnmount())).toEqual(initialState);
  });

  it('should handle setLoadingTrue correctly', () => {
    const expected = produce(state, (draft) => {
      draft.loading = true;
    });

    expect(callsReducer(state, setLoadingTrue())).toEqual(expected);
  });
});

import produce from 'immer';

import {
  fetchCallsData,
  fetchCallsDataFailure,
  fetchCallsDataSuccess,
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
    const expected = produce(state, (draft) => {
      draft.sortLoading = 'date';
    });

    expect(callsReducer(state, fetchCallsData('date', 'desc'))).toEqual(
      expected,
    );
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
    const params = {
      dateFrom: '2020-01-01',
      dateTo: '2020-02-01',
      keyword: 'test',
      sortCol: 'date',
      sortOrder: 'desc',
    };
    const expected = produce(state, (draft) => {
      draft.callsData = callsData;
      draft.lastFetchParams = params;
    });

    expect(
      callsReducer(state, fetchCallsDataSuccess(callsData, params)),
    ).toEqual(expected);
  });

  it('should handle setLoadingTrue correctly', () => {
    const expected = produce(state, (draft) => {
      draft.loading = true;
    });

    expect(callsReducer(state, setLoadingTrue())).toEqual(expected);
  });
});

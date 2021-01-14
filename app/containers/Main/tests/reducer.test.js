import produce from 'immer';

import {
  fetchLoanData,
  fetchLoanDataFailure,
  fetchLoanDataSuccess,
} from '../actions';
import initialState from '../initialState';
import mainReducer from '../reducer';
import { MOCK_DATA } from './mockData';

/* eslint-disable no-param-reassign */
describe('mainReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('returns the initial state', () => {
    const expected = state;
    expect(mainReducer(undefined, {})).toEqual(expected);
  });

  it('should handle fetchLoanData correctly', () => {
    const expected = produce(state, (draft) => {
      draft.loading = true;
    });

    expect(mainReducer(state, fetchLoanData())).toEqual(expected);
  });

  it('should handle fetchLoanDataFailure correctly', () => {
    const error = 'error';
    const expected = produce(state, (draft) => {
      draft.error = 'error';
    });

    expect(mainReducer(state, fetchLoanDataFailure(error))).toEqual(expected);
  });

  it('should handle fetchLoanDataSuccess correctly', () => {
    const loanData = MOCK_DATA;
    const loanNumber = '0123456789';
    const expected = produce(state, (draft) => {
      draft.loanData = loanData;
      draft.loanNumber = loanNumber;
    });

    expect(
      mainReducer(state, fetchLoanDataSuccess(loanData, loanNumber)),
    ).toEqual(expected);
  });
});

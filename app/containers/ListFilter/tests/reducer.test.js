import produce from 'immer';

import { updateFilterState } from '../actions';
import initialState from '../initialState';
import listFilterReducer from '../reducer';

/* eslint-disable no-param-reassign */
describe('listFilterReducer', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('should handle updateFilterState correctly', () => {
    const subState = [];
    const param = [];
    const value = [];
    const expected = produce(state, (draft) => {
      draft[subState][param] = value;
    });

    expect(
      listFilterReducer(state, updateFilterState(subState, param, value)),
    ).toEqual(expected);
  });
});

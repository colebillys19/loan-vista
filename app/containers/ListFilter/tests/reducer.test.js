import produce from 'immer';
import moment from 'moment';

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
    const newParams = {
      dateFrom: moment(),
      dateRange: 1,
      dateTo: moment(),
      keyword: 'test',
    };
    const expected = produce(state, (draft) => {
      draft.calls = newParams;
    });

    expect(
      listFilterReducer(state, updateFilterState('calls', newParams)),
    ).toEqual(expected);
  });
});

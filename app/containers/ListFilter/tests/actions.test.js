import { updateFilterState } from '../actions';
import { UPDATE_FILTER_STATE } from '../constants';

describe('ListFilter actions', () => {
  describe('update filter state', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        payload: { newValues: {}, substate: 'calls' },
        type: UPDATE_FILTER_STATE,
      };
      expect(updateFilterState('calls', {})).toEqual(expected);
    });
  });
});

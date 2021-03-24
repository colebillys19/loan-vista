import { UPDATE_FILTER_STATE } from './constants';

export const updateFilterState = (substate, newValues) => ({
  payload: { newValues, substate },
  type: UPDATE_FILTER_STATE,
});

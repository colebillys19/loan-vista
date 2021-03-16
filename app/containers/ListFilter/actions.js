import { UPDATE_FILTER_STATE } from './constants';

export const updateFilterState = (substate, param, value) => ({
  payload: { param, substate, value },
  type: UPDATE_FILTER_STATE,
});

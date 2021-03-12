import { UPDATE_FILTER_STATE } from './constants';

export const updateFilterState = (payload) => ({
  payload,
  type: UPDATE_FILTER_STATE,
});

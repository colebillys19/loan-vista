import { createSelector } from 'reselect';

import { initialState } from './reducer';
import { getCallsData } from './helpers';

const selectCallsDomain = (state) => state.calls || initialState;

const makeSelectCalls = (prop) =>
  createSelector(
    selectCallsDomain,
    (substate) => substate[prop],
  );

/**
 * makeSelectCallsData
 * @description ...
 */
const makeSelectCallsData = () =>
  createSelector(
    makeSelectCalls('callsData'),
    (callsData) => getCallsData(callsData),
  );

export default makeSelectCalls;
export { makeSelectCallsData, selectCallsDomain };

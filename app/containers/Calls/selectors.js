import { createSelector } from 'reselect';

import { getCallsData } from './helpers';
import initialState from './initialState';

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

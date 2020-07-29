import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCallsDomain = (state) => state.calls || initialState;

const makeSelectCalls = (prop) =>
  createSelector(
    selectCallsDomain,
    (substate) => substate[prop],
  );

export default makeSelectCalls;
export { selectCallsDomain };

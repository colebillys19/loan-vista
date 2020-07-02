import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCallsDomain = state => state.calls || initialState;

const makeSelectCalls = () =>
  createSelector(
    selectCallsDomain,
    substate => substate,
  );

export default makeSelectCalls;
export { selectCallsDomain };

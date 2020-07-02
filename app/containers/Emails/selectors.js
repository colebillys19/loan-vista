import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectEmailsDomain = state => state.emails || initialState;

const makeSelectEmails = () =>
  createSelector(
    selectEmailsDomain,
    substate => substate,
  );

export default makeSelectEmails;
export { selectEmailsDomain };

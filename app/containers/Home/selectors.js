import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeDomain = state => state.home || initialState;

const makeSelectHome = () =>
  createSelector(
    selectHomeDomain,
    substate => substate,
  );

export default makeSelectHome;
export { selectHomeDomain };

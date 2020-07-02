import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomePageDomain = state => state.homepage || initialState;

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate,
  );

export default makeSelectHomePage;
export { selectHomePageDomain };

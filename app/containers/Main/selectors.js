import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectMainDomain = (state) => state.main || initialState;

const makeSelectMain = () =>
  createSelector(
    selectMainDomain,
    (substate) => substate,
  );

export default makeSelectMain;
export { selectMainDomain };

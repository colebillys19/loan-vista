import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCorrDomain = (state) => state.corr || initialState;

const makeSelectCorr = () =>
  createSelector(
    selectCorrDomain,
    (substate) => substate,
  );

export default makeSelectCorr;
export { selectCorrDomain };

import { createSelector } from 'reselect';

import { initialState } from './reducer';
import { getCorrData } from './helpers';

const selectCorrDomain = (state) => state.corr || initialState;

const makeSelectCorr = (prop) =>
  createSelector(
    selectCorrDomain,
    (substate) => substate[prop],
  );

/**
 * makeSelectCorrData
 * @description ...
 */
const makeSelectCorrData = () =>
  createSelector(
    makeSelectCorr('corrData'),
    (corrData) => getCorrData(corrData),
  );

export default makeSelectCorr;
export { makeSelectCorrData, selectCorrDomain };

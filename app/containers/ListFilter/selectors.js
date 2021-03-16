import { createSelector } from 'reselect';

import initialState from './initialState';

const selectListFilterDomain = (state) => state.listFilter || initialState;

// const makeSelectListFilter = (prop) =>
//   createSelector(
//     selectListFilterDomain,
//     (substate) => substate[prop],
//   );

const makeSelectListFilterState = () =>
  createSelector(
    selectListFilterDomain,
    (substate) => substate,
  );

// export default makeSelectListFilter;
export { makeSelectListFilterState };

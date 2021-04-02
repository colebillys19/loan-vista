import { createSelector } from 'reselect';

import { makeSelectPathname } from 'containers/App/selectors';
import makeSelectCalls from 'containers/Calls/selectors';
import makeSelectDocuments from 'containers/Documents/selectors';
import makeSelectPayments from 'containers/Payments/selectors';

import initialState from './initialState';

const selectListFilterDomain = (state) => state.listFilter || initialState;

const makeSelectListFilterState = () =>
  createSelector(
    selectListFilterDomain,
    (substate) => substate,
  );

/**
 * makeSelectTargetFilterState
 * @description ...
 */
const makeSelectTargetFilterState = () =>
  createSelector(
    makeSelectListFilterState(),
    makeSelectPathname(),
    (listFilterState, pathname) => {
      const targetId = pathname.slice(1);

      return {
        state: listFilterState[targetId],
        targetId,
      };
    },
  );

/**
 * makeSelectTargetLastFetchParams
 * @description ...
 */
/* eslint-disable consistent-return, default-case */
const makeSelectTargetLastFetchParams = () =>
  createSelector(
    makeSelectPathname(),
    makeSelectCalls('lastFetchParams'),
    makeSelectDocuments('lastFetchParams'),
    makeSelectPayments('lastFetchParams'),
    (
      pathname,
      lastFetchParamsCalls,
      lastFetchParamsDocuments,
      lastFetchParamsPayments,
    ) => {
      switch (pathname.slice(1)) {
        case 'calls':
          return lastFetchParamsCalls;
        case 'documents':
          return lastFetchParamsDocuments;
        case 'payments':
          return lastFetchParamsPayments;
      }
    },
  );

export {
  makeSelectListFilterState,
  makeSelectTargetFilterState,
  makeSelectTargetLastFetchParams,
};

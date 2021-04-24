import { createSelector } from 'reselect';

import { makeSelectPathname } from 'containers/App/selectors';
import makeSelectCalls from 'containers/Calls/selectors';
import makeSelectDocuments from 'containers/Documents/selectors';
import makeSelectPayments from 'containers/Payments/selectors';

import { getDatesErrorState } from './helpers';
import initialState from './initialState';

const selectListFilterDomain = (state) => state.listFilter || initialState;

/**
 * makeSelectTargetDateErrors
 * @description ...
 */
const makeSelectTargetDateErrors = () =>
  createSelector(
    makeSelectTargetState(),
    ({ dateFrom, dateTo }) => getDatesErrorState(dateFrom, dateTo),
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

/**
 * makeSelectTargetState
 * @description ...
 */
const makeSelectTargetState = () =>
  createSelector(
    selectListFilterDomain,
    makeSelectPathname(),
    (listFilterState, pathname) => listFilterState[pathname.slice(1)],
  );

export {
  makeSelectTargetDateErrors,
  makeSelectTargetLastFetchParams,
  makeSelectTargetState,
  selectListFilterDomain,
};

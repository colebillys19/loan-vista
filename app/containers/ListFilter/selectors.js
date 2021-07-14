import { createSelector } from 'reselect';

import { makeSelectPathname } from 'containers/App/selectors';
import makeSelectCalls from 'containers/Calls/selectors';
import makeSelectDocuments from 'containers/Documents/selectors';
import makeSelectPayments from 'containers/Payments/selectors';

import { getDatesErrorState } from './helpers';
import initialState from './initialState';

const selectListFilterDomain = (state) => state.listFilter || initialState;

/**
 * makeSelectIsFilteredData
 * @description ...
 */
const makeSelectIsFilteredData = () =>
  createSelector(
    makeSelectCalls('isFilteredData'),
    makeSelectDocuments('isFilteredData'),
    makeSelectPayments('isFilteredData'),
    makeSelectTargetContainerName(),
    (
      isFilteredCalls,
      isFilteredDocuments,
      isFilteredPayments,
      containerName,
    ) => {
      const dict = {
        calls: isFilteredCalls,
        documents: isFilteredDocuments,
        payments: isFilteredPayments,
      };

      return dict[containerName];
    },
  );

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
 * makeSelectTargetContainerName
 * @description ...
 */
const makeSelectTargetContainerName = () =>
  createSelector(
    makeSelectPathname(),
    (pathname) =>
      ['calls', 'documents', 'payments'].includes(pathname.slice(1))
        ? pathname.slice(1)
        : 'calls',
  );

/**
 * makeSelectTargetState
 * @description ...
 */
const makeSelectTargetState = () =>
  createSelector(
    selectListFilterDomain,
    makeSelectTargetContainerName(),
    (listFilterState, targetContainerName) =>
      listFilterState[targetContainerName],
  );

export {
  makeSelectIsFilteredData,
  makeSelectTargetDateErrors,
  makeSelectTargetState,
  selectListFilterDomain,
};

import { createSelector } from 'reselect';

import initialState from './initialState';
import { getDateStrings } from './helpers';

const selectListFilterDomain = (state) => state.listFilter || initialState;

const makeSelectListFilter = (prop) =>
  createSelector(
    selectListFilterDomain,
    (substate) => substate[prop],
  );

/**
 * makeSelectCallsState
 * @description ...
 */
const makeSelectCallsState = () =>
  createSelector(
    makeSelectListFilter('calls'),
    ({ dateFrom, dateTo, ...restState }) => ({
      ...restState,
      ...getDateStrings(dateFrom, dateTo),
    }),
  );

/**
 * makeSelectDocumentsState
 * @description ...
 */
const makeSelectDocumentsState = () =>
  createSelector(
    makeSelectListFilter('documents'),
    ({ dateFrom, dateTo, ...restState }) => ({
      ...restState,
      ...getDateStrings(dateFrom, dateTo),
    }),
  );

/**
 * makeSelectPaymentsState
 * @description ...
 */
const makeSelectPaymentsState = () =>
  createSelector(
    makeSelectListFilter('payments'),
    ({ dateFrom, dateTo, ...restState }) => ({
      ...restState,
      ...getDateStrings(dateFrom, dateTo),
    }),
  );

export {
  makeSelectCallsState,
  makeSelectDocumentsState,
  makeSelectPaymentsState,
};

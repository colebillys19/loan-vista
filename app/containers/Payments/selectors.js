import { createSelector } from 'reselect';

import { initialState } from './reducer';
import { getPaymentsData } from './helpers';

const selectPaymentsDomain = (state) => state.payments || initialState;

const makeSelectPayments = (prop) =>
  createSelector(
    selectPaymentsDomain,
    (substate) => substate[prop],
  );

/**
 * makeSelectPaymentsData
 * @description ...
 */
const makeSelectPaymentsData = () =>
  createSelector(
    makeSelectPayments('paymentsData'),
    (paymentsData) => getPaymentsData(paymentsData),
  );

/**
 * makeSelectSortValues
 * @description ...
 */
const makeSelectSortValues = () =>
  createSelector(
    makeSelectPayments('fetchParams'),
    ({ sortCol, sortOrder }) => ({ sortCol, sortOrder }),
  );

export default makeSelectPayments;
export { makeSelectPaymentsData, selectPaymentsDomain, makeSelectSortValues };

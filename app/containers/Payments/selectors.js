import { createSelector } from 'reselect';

import { getPaymentsData } from './helpers';
import initialState from './initialState';

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

export default makeSelectPayments;
export { makeSelectPaymentsData, selectPaymentsDomain };

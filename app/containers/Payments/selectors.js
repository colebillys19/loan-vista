import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPaymentsDomain = state => state.payments || initialState;

const makeSelectPayments = () =>
  createSelector(
    selectPaymentsDomain,
    substate => substate,
  );

export default makeSelectPayments;
export { selectPaymentsDomain };

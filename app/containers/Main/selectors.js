import { createSelector } from 'reselect';

import { initialState } from './reducer';
import {
  getCallsSummary,
  getDashboardBorrowerData,
  getDashboardListsData,
  getDashboardLoanData,
  getEscrowEscrow,
  getEscrowHomeowners,
  getEscrowMortgage,
  getEscrowTaxes,
  getLoanSummary,
  getPaymentSummary,
  getServiceSummary,
  getSidebarHeaderData,
} from './selectorHelpers';

const selectMainDomain = (state) => state.main || initialState;

const makeSelectMain = (prop) =>
  createSelector(
    selectMainDomain,
    (substate) => substate[prop],
  );

/**
 * makeSelectDashboardBorrowerData
 * @description ...
 */
const makeSelectDashboardBorrowerData = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ borrower, coBorrower }) =>
      getDashboardBorrowerData(borrower, coBorrower),
  );

/**
 * makeSelectDashboardListsData
 * @description ...
 */
const makeSelectDashboardListsData = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ recentCalls, recentDocuments, recentPayments }) =>
      getDashboardListsData(recentCalls, recentDocuments, recentPayments),
  );

/**
 * makeSelectDashboardLoanData
 * @description ...
 */
const makeSelectDashboardLoanData = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ balances, payment, stops }) =>
      getDashboardLoanData(balances, payment, stops),
  );

/**
 * makeSelectEscrowEscrow
 * @description ...
 */
const makeSelectEscrowEscrow = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ escrow }) => getEscrowEscrow(escrow),
  );

/**
 * makeSelectEscrowHomeowners
 * @description ...
 */
const makeSelectEscrowHomeowners = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ homeownersHazard }) => getEscrowHomeowners(homeownersHazard),
  );

/**
 * makeSelectEscrowMortgage
 * @description ...
 */
const makeSelectEscrowMortgage = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ mortgage }) => getEscrowMortgage(mortgage),
  );

/**
 * makeSelectEscrowTaxes
 * @description ...
 */
const makeSelectEscrowTaxes = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ taxes }) => getEscrowTaxes(taxes),
  );

/**
 * makeSelectSidebarHeaderData
 * @description ...
 */
const makeSelectSidebarHeaderData = () =>
  createSelector(
    makeSelectMain('loanData'),
    makeSelectMain('loanNumber'),
    ({ property }, loanNumber) => getSidebarHeaderData(property, loanNumber),
  );

/**
 * makeSelectSidebarSummariesData
 * @description ...
 */
const makeSelectSidebarSummariesData = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ summaries: { calls, loan, payment, service } }) => {
      const { health } = loan;

      return {
        callsSummaryData: getCallsSummary(calls),
        health,
        loanSummaryData: getLoanSummary(loan),
        paymentSummaryData: getPaymentSummary(payment),
        serviceSummaryData: getServiceSummary(service),
      };
    },
  );

export default makeSelectMain;
export {
  makeSelectDashboardBorrowerData,
  makeSelectDashboardListsData,
  makeSelectDashboardLoanData,
  makeSelectEscrowEscrow,
  makeSelectEscrowHomeowners,
  makeSelectEscrowMortgage,
  makeSelectEscrowTaxes,
  makeSelectSidebarHeaderData,
  makeSelectSidebarSummariesData,
  selectMainDomain,
};

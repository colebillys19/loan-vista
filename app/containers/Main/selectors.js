import { createSelector } from 'reselect';

import { initialState } from './reducer';
import {
  getCallsSummary,
  getDashboardBorrowerData,
  getDashboardListsData,
  getDashboardLoanData,
  getLoanSummary,
  getMiscEscrow,
  getMiscHomeowners,
  getMiscMortgage,
  getMiscTaxes,
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
 * makeSelectMiscEscrow
 * @description ...
 */
const makeSelectMiscEscrow = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ escrow }) => getMiscEscrow(escrow),
  );

/**
 * makeSelectMiscHomeowners
 * @description ...
 */
const makeSelectMiscHomeowners = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ homeownersHazard }) => getMiscHomeowners(homeownersHazard),
  );

/**
 * makeSelectMiscMortgage
 * @description ...
 */
const makeSelectMiscMortgage = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ mortgage }) => getMiscMortgage(mortgage),
  );

/**
 * makeSelectMiscTaxes
 * @description ...
 */
const makeSelectMiscTaxes = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ taxes }) => getMiscTaxes(taxes),
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
  makeSelectMiscEscrow,
  makeSelectMiscHomeowners,
  makeSelectMiscMortgage,
  makeSelectMiscTaxes,
  makeSelectSidebarHeaderData,
  makeSelectSidebarSummariesData,
  selectMainDomain,
};

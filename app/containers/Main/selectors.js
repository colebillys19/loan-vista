import { createSelector } from 'reselect';

import { initialState } from './reducer';
import {
  getCallsSummary,
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
 * makeSelectSidebarHeaderData
 * @description ...
 */
const makeSelectSidebarHeaderData = () =>
  createSelector(
    makeSelectMain('loanData'),
    makeSelectMain('loanNumber'),
    (loanData, loanNumber) => getSidebarHeaderData(loanData, loanNumber),
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
  makeSelectSidebarHeaderData,
  makeSelectSidebarSummariesData,
  selectMainDomain,
};

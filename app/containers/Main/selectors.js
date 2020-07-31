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
    makeSelectMain('loanNumber'),
    makeSelectMain('loanData'),
    (loanNumber, loanData) => getSidebarHeaderData(loanNumber, loanData),
  );

/**
 * makeSelectSidebarSummariesData
 * @description ...
 */
const makeSelectSidebarSummariesData = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({ summaries: { calls, loan, payment, service } }) => ({
      callsSummaryData: getCallsSummary(calls),
      loanSummaryData: getLoanSummary(loan),
      paymentSummaryData: getPaymentSummary(payment),
      serviceSummaryData: getServiceSummary(service),
    }),
  );

export default makeSelectMain;
export {
  selectMainDomain,
  makeSelectSidebarHeaderData,
  makeSelectSidebarSummariesData,
};

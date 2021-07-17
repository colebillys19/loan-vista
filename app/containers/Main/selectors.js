import { createSelector } from 'reselect';
import isEmpty from 'lodash/isEmpty';

import initialState from './initialState';
import {
  getCallsSummary,
  getCurrentEscrowListData,
  getDashboardBorrowerData,
  getDashboardListsData,
  getDashboardLoanData,
  getEffectiveEscrowListData,
  getEscrowHomeowners,
  getEscrowMortgage,
  getEscrowTaxes,
  getLoanSummary,
  getPaymentSummary,
  getPieData,
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
 * makeSelectAudioModalData
 * @description ...
 */
const makeSelectAudioModalData = () =>
  createSelector(
    makeSelectMain('audioModalData'),
    (audioModalData) => {
      if (isEmpty(audioModalData)) {
        return false;
      }

      // format here

      return audioModalData;
    },
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
 * makeSelectDownloadModalData
 * @description ...
 */
const makeSelectDownloadModalData = () =>
  createSelector(
    makeSelectMain('downloadModalData'),
    (downloadModalData) => {
      if (isEmpty(downloadModalData)) {
        return false;
      }

      // format here

      return downloadModalData;
    },
  );

/**
 * makeSelectEscrowEscrow
 * @description ...
 */
const makeSelectEscrowEscrow = () =>
  createSelector(
    makeSelectMain('loanData'),
    ({
      escrow: {
        analysisDate,
        balance,
        currentDueDate,
        currentPayment,
        effectiveDueDate,
        effectivePayment,
      },
      homeownersHazard,
      mortgage,
      pastHomeownersHazard,
      pastMortgage,
      pastTaxes,
      taxes,
    }) => ({
      currentListData: getCurrentEscrowListData(
        balance,
        currentDueDate,
        currentPayment,
      ),
      currentPieData: getPieData({
        homeownersHazard: pastHomeownersHazard,
        mortgage: pastMortgage,
        taxes: pastTaxes,
        variant: 'current',
      }),
      effectiveListData: getEffectiveEscrowListData(
        analysisDate,
        effectiveDueDate,
        effectivePayment,
      ),
      effectivePieData: getPieData({
        homeownersHazard,
        mortgage,
        taxes,
        variant: 'effective',
      }),
    }),
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
  makeSelectAudioModalData,
  makeSelectDashboardBorrowerData,
  makeSelectDashboardListsData,
  makeSelectDashboardLoanData,
  makeSelectDownloadModalData,
  makeSelectEscrowEscrow,
  makeSelectEscrowHomeowners,
  makeSelectEscrowMortgage,
  makeSelectEscrowTaxes,
  makeSelectSidebarHeaderData,
  makeSelectSidebarSummariesData,
  selectMainDomain,
};

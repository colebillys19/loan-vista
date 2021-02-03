import { getCallsData } from 'containers/Calls/helpers';
import { getDocumentsData } from 'containers/Documents/helpers';
import { getPaymentsData } from 'containers/Payments/helpers';
import { toTitleCase } from 'utils/globalHelpers';

import {
  DASHBOARD_LOAN_LABEL_DICT,
  SIDEBAR_SUMMARY_LABEL_DICT,
} from './constants';
import {
  dataFormatter,
  getBorrowerKeyValues,
  getFormattedAddress,
} from './helpers';

/**
 * getCallsSummary
 * @description: ...
 */
export const getCallsSummary = (callsSummaryData) => {
  const { calls: callsDict } = SIDEBAR_SUMMARY_LABEL_DICT;

  return callsDict.map(({ format, key, label }) => ({
    label,
    value: dataFormatter(callsSummaryData[key], format),
  }));
};

/**
 * getDashboardBorrowerData
 * @description: ...
 */
export const getDashboardBorrowerData = (borrowerData, coBorrowerData) => {
  const formattedData = [
    { listData: getBorrowerKeyValues(borrowerData), title: 'Borrower 1' },
  ];

  if (Object.keys(coBorrowerData).length) {
    formattedData.push({
      listData: getBorrowerKeyValues(coBorrowerData),
      title: 'Borrower 2',
    });
  }

  return formattedData;
};

/**
 * getDashboardListsData
 * @description: ...
 */
export const getDashboardListsData = (
  recentCalls,
  recentDocuments,
  recentPayments,
) => {
  const formattedRecentCalls = getCallsData(recentCalls);
  const formattedRecentDocuments = getDocumentsData(recentDocuments);
  const formattedRecentPayments = getPaymentsData(recentPayments);

  return {
    callsData: formattedRecentCalls,
    documentsData: formattedRecentDocuments,
    paymentsData: formattedRecentPayments,
  };
};

/**
 * getDashboardLoanData
 * @description: ...
 */
export const getDashboardLoanData = (balancesData, paymentData, stopsData) => {
  const balancesKeyValues = DASHBOARD_LOAN_LABEL_DICT.balances.map(
    ({ format, key, label }) => ({
      label,
      value: dataFormatter(balancesData[key], format),
    }),
  );

  const paymentKeyValues = DASHBOARD_LOAN_LABEL_DICT.payment.map(
    ({ format, key, label }) => ({
      label,
      value: dataFormatter(paymentData[key], format),
    }),
  );

  const formattedStopsData = stopsData.map(({ date, desc, name }) => ({
    date: dataFormatter(date, 'date'),
    desc: desc.length > 60 ? `${desc.slice(0, 57)}...` : desc,
    name,
  }));

  return {
    balancesData: { listData: balancesKeyValues, title: 'Balances' },
    paymentData: { listData: paymentKeyValues, title: 'Payment' },
    stopsData: formattedStopsData,
  };
};

/**
 * getLoanSummary
 * @description: ...
 */
export const getLoanSummary = (loanSummaryData) => {
  const { loan: loanDict } = SIDEBAR_SUMMARY_LABEL_DICT;

  return loanDict.map(({ format, key, label }) => ({
    label,
    value: dataFormatter(loanSummaryData[key], format),
  }));
};

/**
 * getMiscEscrow
 * @description: ...
 */
export const getMiscEscrow = (escrowData) => {
  console.log('* * * PRE SELECTOR * * *');
  console.log(escrowData);

  return escrowData;
};

/**
 * getMiscHomeowners
 * @description: ...
 */
export const getMiscHomeowners = (homeownersData) => { // eslint-disable-line
  //

  return homeownersData;
};

/**
 * getMiscMortgage
 * @description: ...
 */
export const getMiscMortgage = (mortgageData) => { // eslint-disable-line
  //

  return mortgageData;
};

/**
 * getMiscTaxes
 * @description: ...
 */
export const getMiscTaxes = (taxesData) => { // eslint-disable-line
  //

  return taxesData;
};

/**
 * getPaymentSummary
 * @description: ...
 */
export const getPaymentSummary = (paymentSummaryData) => {
  const { payment: paymentDict } = SIDEBAR_SUMMARY_LABEL_DICT;

  return paymentDict.map(({ format, key, label }) => ({
    label,
    value: dataFormatter(paymentSummaryData[key], format),
  }));
};

/**
 * getServiceSummary
 * @description: ...
 */
export const getServiceSummary = (serviceSummaryData) => {
  const { service: serviceDict } = SIDEBAR_SUMMARY_LABEL_DICT;

  return serviceDict.map(({ format, key, label }) => ({
    label,
    value: dataFormatter(serviceSummaryData[key], format),
  }));
};

/**
 * getSidebarHeaderData
 * @description: ...
 */
export const getSidebarHeaderData = (property, loanNumber) => {
  const { resident, ...restProperty } = property;

  const { addressA, addressB } = getFormattedAddress(restProperty);

  return {
    addressA,
    addressB,
    loanNumber,
    name: toTitleCase(resident),
  };
};

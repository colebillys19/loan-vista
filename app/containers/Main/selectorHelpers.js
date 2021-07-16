import moment from 'moment';

import { getCallsData } from 'containers/Calls/helpers';
import { getDocumentsData } from 'containers/Documents/helpers';
import { PAYMENTS_LIST_HEADERS } from 'containers/Payments/constants';
import { convertNumToCurrency, toTitleCase } from 'utils/globalHelpers';

import {
  DASHBOARD_LOAN_LABEL_DICT,
  SIDEBAR_SUMMARY_LABEL_DICT,
} from './selectorConstants';
import {
  dataFormatter,
  formatPieData,
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
 * getCurrentEscrowListData
 * @description: ...
 */
export const getCurrentEscrowListData = (
  balance,
  currentDueDate,
  currentPayment,
) => ({
  listData: [
    {
      label: 'Current Due Date',
      value: dataFormatter(currentDueDate, 'date'),
    },
    {
      label: 'Current Escrow Payment',
      value: dataFormatter(currentPayment, 'currency'),
    },
    {
      label: 'Current Escrow Balance',
      value: dataFormatter(balance, 'currency'),
    },
  ],
});

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
  const formattedRecentPayments = getDashboardPaymentsData(recentPayments);

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
 * getDashboardPaymentsData
 * @description: ...
 */
const getDashboardPaymentsData = (paymentsData) => {
  const data = paymentsData.map(
    ({ date, desc, escrow, id, interest, principal, total }) => {
      const dateFormatted = moment(date, 'YYYY-MM-DD').format('MM/DD/YYYY');

      return {
        date: dateFormatted,
        desc: toTitleCase(desc),
        escrow: convertNumToCurrency(escrow),
        id,
        interest: convertNumToCurrency(interest),
        principal: convertNumToCurrency(principal),
        total: convertNumToCurrency(total),
      };
    },
  );

  return { data, ...PAYMENTS_LIST_HEADERS };
};

/**
 * getEffectiveEscrowListData
 * @description: ...
 */
export const getEffectiveEscrowListData = (
  analysisDate,
  effectiveDueDate,
  effectivePayment,
) => ({
  listData: [
    {
      label: 'Last/Next Escrow Analysis Date',
      value: dataFormatter(analysisDate, 'monthYear'),
    },
    {
      label: 'Effective Due Date',
      value: dataFormatter(effectiveDueDate, 'monthYear'),
    },
    {
      label: 'Effective Escrow Payment',
      value: dataFormatter(effectivePayment, 'currency'),
    },
  ],
});

/**
 * getEscrowHomeowners
 * @description: ...
 */
export const getEscrowHomeowners = (homeownersData) =>
  homeownersData.map(
    ({
      annualPremium,
      company,
      id,
      insuranceType,
      policyExpiration,
      policyType,
    }) => ({
      'Annual Premium': dataFormatter(annualPremium, 'currency'),
      Company: company,
      id,
      'Insurance Type': dataFormatter(insuranceType, 'stringTitleCase'),
      'Policy Expiration': dataFormatter(policyExpiration, 'date'),
      'Policy Type': policyType,
    }),
  );

/**
 * getEscrowMortgage
 * @description: ...
 */
export const getEscrowMortgage = (mortgageData) =>
  mortgageData.map(({ amount, company, due, id, insuranceId }) => ({
    Company: company,
    id,
    'Insurance ID': insuranceId,
    'Premium Amount': dataFormatter(amount, 'currency'),
    'Premium Due': dataFormatter(due, 'date'),
  }));

/**
 * getEscrowTaxes
 * @description: ...
 */
export const getEscrowTaxes = (taxesData) =>
  taxesData.map(({ amount, due, id, paidTo, taxId, type }) => ({
    'Expected Amount': dataFormatter(amount, 'currency'),
    id,
    'Next Due': dataFormatter(due, 'date'),
    'Paid To': dataFormatter(paidTo, 'maskedLoanNumber'),
    'Tax ID': taxId,
    'Tax Type': dataFormatter(type, 'stringTitleCase'),
  }));

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
 * getPieData
 * @description: ...
 */
export const getPieData = ({ homeownersHazard, mortgage, taxes, variant }) => {
  const homeownersHazardArr = homeownersHazard.map(
    ({ annualPremium, company, insuranceType, policyType }) => ({
      x: `${dataFormatter(
        insuranceType,
        'stringTitleCase',
      )} Insurance (${policyType}, ${company})`,
      y: annualPremium,
    }),
  );

  const mortgageArr = mortgage.map(({ amount, company, insuranceId }) => ({
    x: `Mortgage Insurance (${company}, ${insuranceId})`,
    y: amount,
  }));

  const taxesArr = taxes.map(({ amount, taxId, type }) => ({
    x: `${dataFormatter(type, 'stringTitleCase')} Tax (${taxId})`,
    y: amount,
  }));

  const combinedArr = homeownersHazardArr.concat(mortgageArr.concat(taxesArr));

  return formatPieData(combinedArr, variant);
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

import { SUMMARY_LABEL_DICT } from './constants';

/**
 * getCallsSummary
 * @description: ...
 */
export const getCallsSummary = (callsSummaryData) => {
  const { calls: callsDict } = SUMMARY_LABEL_DICT;

  return callsDict.map(({ key, label }) => ({
    label,
    value: callsSummaryData[key],
  }));
};

/**
 * getLoanSummary
 * @description: ...
 */
export const getLoanSummary = (loanSummaryData) => {
  const { loan: loanDict } = SUMMARY_LABEL_DICT;

  return loanDict.map(({ key, label }) => ({
    label,
    value: loanSummaryData[key],
  }));
};

/**
 * getPaymentSummary
 * @description: ...
 */
export const getPaymentSummary = (paymentSummaryData) => {
  const { payment: paymentDict } = SUMMARY_LABEL_DICT;

  return paymentDict.map(({ key, label }) => ({
    label,
    value: paymentSummaryData[key],
  }));
};

/**
 * getServiceSummary
 * @description: ...
 */
export const getServiceSummary = (serviceSummaryData) => {
  const { service: serviceDict } = SUMMARY_LABEL_DICT;

  return serviceDict.map(({ key, label }) => ({
    label,
    value: serviceSummaryData[key],
  }));
};

/**
 * getSidebarHeaderData
 * @description: ...
 */
export const getSidebarHeaderData = (
  loanNumber,
  {
    borrower: { name },
    propertyAddress: { city, state, streetAddress, unit, zip },
    summaries: {
      loan: { health, status },
    },
  },
) => {
  const address1 = `${streetAddress}${unit ? `, Unit ${unit}` : ''}`;
  const address2 = `${city}, ${state} ${zip}`;

  return {
    address1,
    address2,
    health,
    loanNumber,
    name,
    status,
  };
};

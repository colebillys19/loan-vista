import { SUMMARY_LABEL_DICT } from './constants';
import { dataFormatter } from './helpers';

/**
 * getCallsSummary
 * @description: ...
 */
export const getCallsSummary = (callsSummaryData) => {
  const { calls: callsDict } = SUMMARY_LABEL_DICT;

  return callsDict.map(({ format, key, label }) => ({
    label,
    value: dataFormatter(callsSummaryData[key], format),
  }));
};

/**
 * getLoanSummary
 * @description: ...
 */
export const getLoanSummary = (loanSummaryData) => {
  const { loan: loanDict } = SUMMARY_LABEL_DICT;

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
  const { payment: paymentDict } = SUMMARY_LABEL_DICT;

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
  const { service: serviceDict } = SUMMARY_LABEL_DICT;

  return serviceDict.map(({ format, key, label }) => ({
    label,
    value: dataFormatter(serviceSummaryData[key], format),
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

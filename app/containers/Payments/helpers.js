import moment from 'moment';

import { convertNumToCurrency, toTitleCase } from 'utils/globalHelpers';

import { PAYMENTS_LIST_HEADERS } from './constants';

export const getPaymentsData = (paymentsData) => {
  const data = paymentsData.map(
    ({
      accidentHealthInsurance,
      accruedLateCharge,
      date,
      desc,
      effectiveDate,
      escrow,
      escrowBalance,
      fees,
      id,
      interest,
      lifeInsurance,
      misc,
      otherTotal,
      principal,
      principalBalance,
      replacementReserve,
      restrictedReserve,
      suspense,
      total,
    }) => {
      const dateFormatted = moment(date, 'YYYY-MM-DD').format('MM/DD/YYYY');
      const effectiveDateFormatted = moment(effectiveDate, 'YYYY-MM-DD').format(
        'MM/DD/YYYY',
      );

      return {
        expandedData: [
          {
            listData: [
              { label: 'Effective Date', value: effectiveDateFormatted },
              {
                label: 'Principal Balance',
                value: convertNumToCurrency(principalBalance),
              },
              {
                label: 'Escrow Balance',
                value: convertNumToCurrency(escrowBalance),
              },
              { label: 'Fees', value: convertNumToCurrency(fees) },
              {
                label: 'Accrued Late Charge',
                value: convertNumToCurrency(accruedLateCharge),
              },
              { label: 'Other Total', value: convertNumToCurrency(otherTotal) },
            ],
          },
          {
            listData: [
              {
                label: 'Accident/Health Insurance',
                value: convertNumToCurrency(accidentHealthInsurance),
              },
              {
                label: 'Life Insurance',
                value: convertNumToCurrency(lifeInsurance),
              },
              { label: 'Miscellaneous', value: convertNumToCurrency(misc) },
              { label: 'Suspense', value: convertNumToCurrency(suspense) },
              {
                label: 'Replacement Reserve',
                value: convertNumToCurrency(replacementReserve),
              },
              {
                label: 'Restricted Reserve',
                value: convertNumToCurrency(restrictedReserve),
              },
            ],
          },
        ],
        id,
        mainData: {
          date: dateFormatted,
          desc: toTitleCase(desc),
          escrow: convertNumToCurrency(escrow),
          interest: convertNumToCurrency(interest),
          principal: convertNumToCurrency(principal),
          total: convertNumToCurrency(total),
        },
      };
    },
  );

  return { data, listHeaders: PAYMENTS_LIST_HEADERS };
};

import moment from 'moment';

import { convertNumToCurrency, toTitleCase } from 'utils/globalHelpers';

export const getPaymentsData = (paymentsData) =>
  paymentsData.map(
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
              { label: 'effectiveDate', value: effectiveDateFormatted },
              {
                label: 'principalBalance',
                value: convertNumToCurrency(principalBalance),
              },
              {
                label: 'escrowBalance',
                value: convertNumToCurrency(escrowBalance),
              },
              { label: 'fees', value: convertNumToCurrency(fees) },
              {
                label: 'accruedLateCharge',
                value: convertNumToCurrency(accruedLateCharge),
              },
              { label: 'otherTotal', value: convertNumToCurrency(otherTotal) },
            ],
          },
          {
            listData: [
              {
                label: 'accidentHealthInsurance',
                value: convertNumToCurrency(accidentHealthInsurance),
              },
              {
                label: 'lifeInsurance',
                value: convertNumToCurrency(lifeInsurance),
              },
              { label: 'misc', value: convertNumToCurrency(misc) },
              { label: 'suspense', value: convertNumToCurrency(suspense) },
              {
                label: 'replacementReserve',
                value: convertNumToCurrency(replacementReserve),
              },
              {
                label: 'restrictedReserve',
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

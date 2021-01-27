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
      time,
      total,
    }) => {
      const dateTime = `${date} ${time}`;
      const dateTimeFormatted = moment(dateTime, 'YYYY-MM-DD HH:mm:ss').format(
        'MM/DD/YYYY hh:mm A',
      );
      const [dateFormatted, t, m] = dateTimeFormatted.split(' ');
      const timeFormatted = `${t} ${m}`;

      const effectiveDateFormatted = moment(effectiveDate, 'YYYY-MM-DD').format(
        'MM/DD/YYYY',
      );

      return {
        accidentHealthInsurance: convertNumToCurrency(accidentHealthInsurance),
        accruedLateCharge: convertNumToCurrency(accruedLateCharge),
        date: dateFormatted,
        desc: toTitleCase(desc),
        effectiveDate: effectiveDateFormatted,
        escrow: convertNumToCurrency(escrow),
        escrowBalance: convertNumToCurrency(escrowBalance),
        fees: convertNumToCurrency(fees),
        id,
        interest: convertNumToCurrency(interest),
        lifeInsurance: convertNumToCurrency(lifeInsurance),
        misc: convertNumToCurrency(misc),
        otherTotal: convertNumToCurrency(otherTotal),
        principal: convertNumToCurrency(principal),
        principalBalance: convertNumToCurrency(principalBalance),
        replacementReserve: convertNumToCurrency(replacementReserve),
        restrictedReserve: convertNumToCurrency(restrictedReserve),
        suspense: convertNumToCurrency(suspense),
        time: timeFormatted,
        total: convertNumToCurrency(total),
      };
    },
  );

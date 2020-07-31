import moment from 'moment';

import { convertNumToCurrency } from 'utils/globalHelpers';

export const getPaymentsData = (paymentsData) =>
  paymentsData.map(
    ({ date, escrow, interest, principal, total, ...restData }) => {
      const dateFormatted = moment(date, 'YYYY-MM-DD').format('M/D/YYYY');

      return {
        date: dateFormatted,
        escrow: convertNumToCurrency(escrow),
        interest: convertNumToCurrency(interest),
        principal: convertNumToCurrency(principal),
        total: convertNumToCurrency(total),
        ...restData,
      };
    },
  );

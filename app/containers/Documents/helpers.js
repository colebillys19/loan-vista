import moment from 'moment';

import { toTitleCase } from 'utils/globalHelpers';

import { DOCUMENTS_LIST_HEADERS } from './constants';

export const getDocumentsData = (documentsData) => {
  const data = documentsData.map(
    ({ dateSent, desc, file, from, id, timeSent, type }) => {
      const dateSentFormatted = moment(dateSent, 'YYYY-MM-DD').format(
        'MM/DD/YYYY',
      );

      const timeSentFormatted = timeSent
        ? moment(timeSent, 'HH:mm:ss').format('hh:mm A')
        : '-';

      const typeFormatted = toTitleCase(type);

      return {
        'date sent': dateSentFormatted,
        desc: desc === null ? '-' : desc,
        from,
        id,
        pdf: file,
        'time sent': timeSentFormatted,
        type: typeFormatted,
      };
    },
  );

  return { data, ...DOCUMENTS_LIST_HEADERS };
};

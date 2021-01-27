import moment from 'moment';
import { toTitleCase } from 'utils/globalHelpers';

export const getDocumentsData = (documentsData) =>
  documentsData.map(({ dateSent, desc, file, from, id, timeSent, type }) => {
    const dateSentFormatted = moment(dateSent, 'YYYY-MM-DD').format(
      'MM/DD/YYYY',
    );

    const descFormatted = desc === null ? '-' : `${desc.slice(0, 15)}...`;

    const fileFormatted = `${file.slice(0, 15)}...`;

    const fromFormatted = `${from.slice(0, 15)}...`;

    const timeSentFormatted = timeSent
      ? moment(timeSent, 'HH:mm:ss').format('hh:mm A')
      : '-';

    const typeFormatted = toTitleCase(type);

    return {
      'date sent': dateSentFormatted,
      desc: descFormatted,
      from: fromFormatted,
      id,
      pdf: fileFormatted,
      'time sent': timeSentFormatted,
      type: typeFormatted,
    };
  });

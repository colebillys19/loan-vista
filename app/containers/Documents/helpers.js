import moment from 'moment';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';

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
      dateSent: dateSentFormatted,
      desc: descFormatted,
      file: fileFormatted,
      from: fromFormatted,
      id,
      timeSent: timeSentFormatted,
      type: typeFormatted,
    };
  });

export const toTitleCase = (str) => startCase(toLower(str));

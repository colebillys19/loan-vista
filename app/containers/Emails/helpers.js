import moment from 'moment';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';

export const getEmailsData = (emailsData) =>
  emailsData.map(({ dateSent, file, from, id, subject, timeSent, type }) => {
    const dateSentFormatted = moment(dateSent, 'YYYY-MM-DD').format(
      'MM/DD/YYYY',
    );

    const fileFormatted = `${file.slice(0, 15)}...`;

    const fromFormatted = `${from.slice(0, 15)}...`;

    const subjectFormatted = `${subject.slice(0, 15)}...`;

    const timeSentFormatted = timeSent
      ? moment(timeSent, 'HH:mm:ss').format('hh:mm A')
      : '-';

    const typeFormatted = toTitleCase(type);

    return {
      dateSent: dateSentFormatted,
      file: fileFormatted,
      from: fromFormatted,
      id,
      subject: subjectFormatted,
      timeSent: timeSentFormatted,
      type: typeFormatted,
    };
  });

export const toTitleCase = (str) => startCase(toLower(str));

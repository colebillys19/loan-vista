import moment from 'moment';

import { CALLS_LIST_HEADERS } from './constants';

export const getCallsData = (callsData) => {
  const data = callsData.map(({ audio, date, desc, time, ...restData }) => {
    const audioFormatted = `${audio.slice(0, 20)}...`;

    const dateTime = `${date} ${time}`;
    const dateTimeFormatted = moment(dateTime, 'YYYY-MM-DD HH:mm:ss').format(
      'MM/DD/YYYY hh:mm A',
    );
    const [dateFormatted, t, m] = dateTimeFormatted.split(' ');
    const timeFormatted = `${t} ${m}`;

    const descFormatted = desc === null ? '-' : desc;

    return {
      audio: audioFormatted,
      date: dateFormatted,
      desc: descFormatted,
      time: timeFormatted,
      ...restData,
    };
  });

  return { data, ...CALLS_LIST_HEADERS };
};

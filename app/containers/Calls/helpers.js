import moment from 'moment';

export const formatFilterState = ({ dateFrom, dateTo, keyword }) => {
  const dateFromStr = dateFrom ? dateFrom.format('YYYY-MM-DD') : '';
  const dateToStr = dateTo ? dateTo.format('YYYY-MM-DD') : '';

  return { dateFrom: dateFromStr, dateTo: dateToStr, keyword };
};

export const getCallsData = (callsData) =>
  callsData.map(({ audio, date, desc, time, ...restData }) => {
    const audioFormatted = `${audio.slice(0, 20)}...`;

    const dateTime = `${date} ${time}`;
    const dateTimeFormatted = moment(dateTime, 'YYYY-MM-DD HH:mm:ss').format(
      'MM/DD/YYYY hh:mm A',
    );
    const [dateFormatted, t, m] = dateTimeFormatted.split(' ');
    const timeFormatted = `${t} ${m}`;

    const descFormatted = desc === null ? '-' : `${desc.slice(0, 20)}...`;

    return {
      audio: audioFormatted,
      date: dateFormatted,
      desc: descFormatted,
      time: timeFormatted,
      ...restData,
    };
  });

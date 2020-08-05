/**
 * ListFilter
 * @description ...
 */

import React, { useState } from 'react';
// import T from 'prop-types';
import moment from 'moment';

import DateInput from './DateInput';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import { ListFilterContainer } from './styledComponents';

const ListFilter = () => {
  const [dateFromValue, setDateFromValue] = useState(moment());
  const [dateToValue, setDateToValue] = useState(moment());
  const [dateRangeValue, setDateRangeValue] = useState(0);
  const [keywordValue, setKeywordValue] = useState('');

  return (
    <ListFilterContainer>
      <DateInput onChange={setDateFromValue} value={dateFromValue} />
      <DateInput onChange={setDateToValue} value={dateToValue} />
      <SelectInput onChange={setDateRangeValue} value={dateRangeValue} />
      <TextInput onChange={setKeywordValue} value={keywordValue} />
    </ListFilterContainer>
  );
};

ListFilter.propTypes = {};

export default ListFilter;

import React, { memo } from 'react';
import T from 'prop-types';

import DateInput from '../Inputs/DateInput';

import { FieldWrapper, StyledLabel } from './styledComponents';

const DateField = ({ disabled, label, ...restProps }) => { // eslint-disable-line
  // console.log('* * * components/ListFilterCalls/Fields/DateField.js');

  console.log(`- - - - - ${label} - - - - -`);
  console.log(restProps);

  return (
    <FieldWrapper disabled={disabled}>
      <StyledLabel htmlFor="">{label}</StyledLabel>
      <DateInput {...restProps} />
    </FieldWrapper>
  );
};

DateField.propTypes = {
  disabled: T.bool.isRequired,
  label: T.oneOf(['from', 'to']).isRequired,
};

export default memo(DateField);

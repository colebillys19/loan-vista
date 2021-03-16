import React from 'react';
import T from 'prop-types';

import DateInput from '../Inputs/DateInput';

import { FieldWrapper, StyledLabel } from './styledComponents';

const DateField = ({ disabled, label, ...restProps }) => (
  <FieldWrapper disabled={disabled}>
    <StyledLabel htmlFor="">{label}</StyledLabel>
    <DateInput {...restProps} />
  </FieldWrapper>
);

DateField.propTypes = {
  disabled: T.bool.isRequired,
  label: T.oneOf(['from', 'to']).isRequired,
};

export default DateField;

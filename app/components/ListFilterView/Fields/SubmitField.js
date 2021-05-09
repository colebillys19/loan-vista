import React from 'react';
import T from 'prop-types';

import SubmitButton from '../Inputs/SubmitButton';

import { FieldWrapper } from './styledComponents';

const SubmitField = ({ disabled, onClick }) => (
  <FieldWrapper disabled={disabled}>
    <SubmitButton disabled={disabled} onClick={onClick} />
  </FieldWrapper>
);

SubmitField.propTypes = {
  disabled: T.bool.isRequired,
  onClick: T.func.isRequired,
};

export default SubmitField;

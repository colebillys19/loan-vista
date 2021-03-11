import React, { memo } from 'react';
import T from 'prop-types';

import SubmitButton from '../Inputs/SubmitButton';

import { FieldWrapper } from './styledComponents';

const SubmitField = ({ disabled, onClick }) => { // eslint-disable-line
  // console.log('* * * components/ListFilterCalls/Fields/SubmitField.js');

  return (
    <FieldWrapper disabled={disabled}>
      <SubmitButton onClick={onClick} />
    </FieldWrapper>
  );
};

SubmitField.propTypes = {
  disabled: T.bool.isRequired,
  onClick: T.func.isRequired,
};

export default memo(SubmitField);

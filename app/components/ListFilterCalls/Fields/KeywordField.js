import React from 'react';
import T from 'prop-types';

import KeywordInput from '../Inputs/KeywordInput';

import { FieldWrapper, StyledLabel } from './styledComponents';

const KeywordField = ({ disabled, keyword, onChange }) => (
  <FieldWrapper disabled={disabled}>
    <StyledLabel htmlFor="">and/or</StyledLabel>
    <KeywordInput onChange={onChange} value={keyword} />
  </FieldWrapper>
);

KeywordField.propTypes = {
  disabled: T.bool.isRequired,
  keyword: T.string.isRequired,
  onChange: T.func.isRequired,
};

export default KeywordField;

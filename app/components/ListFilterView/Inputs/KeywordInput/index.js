import React from 'react';
import T from 'prop-types';

import { StyledTextField } from './styledComponents';

const KeywordInput = ({ disabled, onChange, value }) => (
  <StyledTextField
    disabled={disabled}
    onChange={(e) => onChange(e.target.value)}
    placeholder="keyword search"
    value={value}
  />
);

KeywordInput.propTypes = {
  disabled: T.bool.isRequired,
  onChange: T.func.isRequired,
  value: T.string.isRequired,
};

export default KeywordInput;

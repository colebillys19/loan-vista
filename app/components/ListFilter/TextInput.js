import React from 'react';
import T from 'prop-types';

import { StyledTextField } from './styledComponents';

const TextInput = ({ onChange, value }) => (
  <StyledTextField
    onChange={(e) => onChange(e.target.value)}
    placeholder="date"
    value={value}
  />
);

TextInput.propTypes = {
  onChange: T.func.isRequired,
  value: T.string.isRequired,
};

export default TextInput;

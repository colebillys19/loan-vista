import React from 'react';
import T from 'prop-types';

import { StyledTextField } from './styledComponents';

const KeywordInput = ({ onChange, value }) => (
  <StyledTextField
    onChange={(e) => onChange(e.target.value)}
    placeholder="keyword search"
    value={value}
  />
);

KeywordInput.propTypes = {
  onChange: T.func.isRequired,
  value: T.string.isRequired,
};

export default KeywordInput;

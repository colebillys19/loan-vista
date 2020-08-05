import React from 'react';
import T from 'prop-types';
import { InputBase } from '@material-ui/core';

const KeywordInput = ({ onChange, value }) => (
  <InputBase onChange={(e) => onChange(e.target.value)} value={value} />
);

KeywordInput.propTypes = {
  onChange: T.func.isRequired,
  value: T.string.isRequired,
};

export default KeywordInput;

import React, { memo } from 'react';
import T from 'prop-types';

import KeywordInput from '../Inputs/KeywordInput';

import { FieldWrapper, StyledLabel } from './styledComponents';

const KeywordField = ({ disabled, keyword, onChange }) => { // eslint-disable-line
  // console.log('* * * components/ListFilterCalls/Fields/KeywordField.js');

  return (
    <FieldWrapper disabled={disabled}>
      <StyledLabel htmlFor="">and/or</StyledLabel>
      <KeywordInput onChange={onChange} value={keyword} />
    </FieldWrapper>
  );
};

KeywordField.propTypes = {
  disabled: T.bool.isRequired,
  keyword: T.string.isRequired,
  onChange: T.func.isRequired,
};

export default memo(KeywordField);

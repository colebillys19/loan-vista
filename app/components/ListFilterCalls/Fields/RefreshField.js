import React, { memo } from 'react';
import T from 'prop-types';

import RefreshButton from '../Inputs/RefreshButton';

import { FieldWrapper } from './styledComponents';

const RefreshField = ({ disabled, onClick }) => { // eslint-disable-line
  // console.log('* * * components/ListFilterCalls/Fields/RefreshField.js');

  return (
    <FieldWrapper disabled={disabled}>
      <RefreshButton onClick={onClick} />
    </FieldWrapper>
  );
};

RefreshField.propTypes = {
  disabled: T.bool.isRequired,
  onClick: T.func.isRequired,
};

export default memo(RefreshField);

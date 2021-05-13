import React from 'react';
import T from 'prop-types';

import RefreshButton from '../Inputs/RefreshButton';

import { FieldWrapper } from './styledComponents';

const RefreshField = ({ disabled, onClick }) => (
  <FieldWrapper disabled={disabled}>
    <RefreshButton disabled={disabled} onClick={onClick} />
  </FieldWrapper>
);

RefreshField.propTypes = {
  disabled: T.bool.isRequired,
  onClick: T.func.isRequired,
};

export default RefreshField;

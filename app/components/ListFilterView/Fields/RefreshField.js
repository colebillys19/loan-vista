import React from 'react';
import T from 'prop-types';

import RefreshButton from '../Inputs/RefreshButton';

import { FieldWrapper } from './styledComponents';

const RefreshField = ({ onClick }) => (
  <FieldWrapper>
    <RefreshButton onClick={onClick} />
  </FieldWrapper>
);

RefreshField.propTypes = { onClick: T.func.isRequired };

export default RefreshField;

import React from 'react';
import T from 'prop-types';

import { RefreshIcon } from 'images/iconComponents';

import { StyledIconButton } from './styledComponents';

const RefreshButton = ({ disabled, onClick }) => (
  <StyledIconButton aria-label="refresh" disabled={disabled} onClick={onClick}>
    <RefreshIcon size="2.5rem" />
  </StyledIconButton>
);

RefreshButton.propTypes = {
  disabled: T.bool.isRequired,
  onClick: T.func.isRequired,
};

export default RefreshButton;

import React from 'react';
import T from 'prop-types';

import { RefreshIcon } from 'images/iconComponents';

import { StyledIconButton } from './styledComponents';

const RefreshButton = ({ onClick }) => (
  <StyledIconButton aria-label="refresh" onClick={onClick}>
    <RefreshIcon size="2.5rem" />
  </StyledIconButton>
);

RefreshButton.propTypes = { onClick: T.func.isRequired };

export default RefreshButton;

import React from 'react';

import { appColorA } from 'styleConstants';

import { StyledButton, StyledSpinnerIcon } from './styledComponents';

const DefaultButton = () => (
  <StyledButton disableElevation disableRipple>
    <span>
      <StyledSpinnerIcon color={appColorA} size="1.7rem" />
    </span>
  </StyledButton>
);

export default DefaultButton;

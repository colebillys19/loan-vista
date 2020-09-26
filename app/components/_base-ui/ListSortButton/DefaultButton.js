import React from 'react';
import T from 'prop-types';

import { ArrowDownIcon, ArrowUpIcon } from 'images/icons';
import { appColorA, textColorB } from 'styleConstants';

import { StyledButton } from './styledComponents';

const DefaultButton = ({ isActive, isAscending, onClick, text }) => {
  const Icon = isAscending ? (
    <ArrowUpIcon color={isActive ? appColorA : textColorB} size="0.8rem" />
  ) : (
    <ArrowDownIcon color={isActive ? appColorA : textColorB} size="0.8rem" />
  );

  return (
    <StyledButton
      isActive={isActive}
      disableElevation
      disableRipple
      endIcon={Icon}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

DefaultButton.propTypes = {
  isActive: T.bool.isRequired,
  isAscending: T.bool.isRequired,
  onClick: T.func.isRequired,
  text: T.string.isRequired,
};

export default DefaultButton;

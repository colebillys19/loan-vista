import React from 'react';
import T from 'prop-types';

import { ArrowDownIcon, ArrowUpIcon } from 'images/icons';
import { iconColorC, textColorB } from 'styleConstants';

import { StyledButton } from './styledComponents';

const Button = ({ isActive, isAscending, onClick, text }) => {
  const iconProps = {
    color: isActive ? iconColorC : textColorB,
    size: '0.8rem',
  };
  const Icon = isAscending ? ArrowUpIcon : ArrowDownIcon;

  return (
    <StyledButton
      disableElevation
      disableRipple
      endIcon={<Icon {...iconProps} />}
      isActive={isActive}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  isActive: T.bool.isRequired,
  isAscending: T.bool.isRequired,
  onClick: T.func.isRequired,
  text: T.string.isRequired,
};

export default Button;

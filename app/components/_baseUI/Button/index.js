/**
 * Button
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { StyledButton } from './styledComponents';

const Button = ({ className, onClick, text }) => (
  <StyledButton className={className} onClick={onClick}>
    {text}
  </StyledButton>
);

Button.propTypes = {
  className: T.string,
  onClick: T.func.isRequired,
  text: T.string.isRequired,
};

export default Button;

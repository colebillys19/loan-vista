import React from 'react';
import T from 'prop-types';

import { StyledButton } from './styledComponents';

const Button = ({ className, onClick, text, ...restProps }) => (
  <StyledButton className={className} onClick={onClick} {...restProps}>
    {text}
  </StyledButton>
);

Button.propTypes = {
  className: T.string,
  onClick: T.func.isRequired,
  text: T.string.isRequired,
};

export default Button;

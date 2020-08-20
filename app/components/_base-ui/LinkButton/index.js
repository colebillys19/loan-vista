/**
 * LinkButton
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { StyledButton } from './styledComponents';

const LinkButton = ({ className, onClick, text, ...restProps }) => (
  <StyledButton
    className={className}
    disableRipple
    onClick={onClick}
    {...restProps}
  >
    {text}
  </StyledButton>
);

LinkButton.propTypes = {
  className: T.string,
  onClick: T.func.isRequired,
  text: T.string.isRequired,
};

export default LinkButton;

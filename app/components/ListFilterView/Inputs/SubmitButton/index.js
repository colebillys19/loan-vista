import React from 'react';
import T from 'prop-types';

import { StyledButton } from './styledComponents';

const SubmitButton = ({ disabled, onClick }) => (
  <StyledButton
    disabled={disabled}
    onClick={onClick}
    text="find"
    type="submit"
  />
);

SubmitButton.propTypes = {
  disabled: T.bool.isRequired,
  onClick: T.func.isRequired,
};

export default SubmitButton;

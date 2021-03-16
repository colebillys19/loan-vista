import React from 'react';
import T from 'prop-types';

import { StyledButton } from './styledComponents';

const SubmitButton = ({ onClick }) => (
  <StyledButton onClick={onClick} text="find" type="submit" />
);

SubmitButton.propTypes = { onClick: T.func.isRequired };

export default SubmitButton;

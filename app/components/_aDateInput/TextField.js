import React from 'react';

import { StyledTextField } from './styledComponents';

const CustomTextField = (props) => (
  <StyledTextField inputProps={{ placeholder: 'date' }} {...props} />
);

export default CustomTextField;

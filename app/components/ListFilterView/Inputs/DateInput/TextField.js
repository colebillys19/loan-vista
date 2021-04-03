import React from 'react';

import { StyledTextField } from './styledComponents';

const TextField = (props) => (
  <StyledTextField inputProps={{ placeholder: 'date' }} {...props} />
);

export default TextField;

import styled from 'styled-components';
import { TextField } from '@material-ui/core';

import { textColorB } from 'styleConstants';

export const StyledTextField = styled(TextField)`
  min-width: 13.5rem;
  & input {
    line-height: normal;
    text-indent: 0.1rem;
  }
  & input::placeholder {
    color: ${textColorB};
    opacity: 0.6;
    text-indent: 0.1rem;
  }
  & .MuiInput-underline:after {
    transition: none;
  }
`;

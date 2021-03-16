import styled from 'styled-components';

import { textColorA } from 'styleConstants';

export const StyledForm = styled.form`
  margin: 1.6rem 0;
  padding: 0.6rem 0 0 2.4rem;
  position: relative;
  & .MuiInputBase-input {
    color: ${textColorA};
    font-family: Arial, sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }
`;

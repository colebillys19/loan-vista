import styled from 'styled-components';

import { textColorA } from 'styleConstants';

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 1.6rem 0;
  padding: 0.6rem 1rem 0;
  position: relative;
  & .MuiInputBase-input {
    color: ${textColorA};
    font-family: Arial, sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }
`;

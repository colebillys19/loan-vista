import styled from 'styled-components';

import Button from 'components/_base-ui/Button';
import { textColorA, textColorB } from 'styleConstants';

export const FieldWrapper = styled.span`
  display: inline-block;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  vertical-align: top;
  & :not(:first-of-type) {
    margin-left: 2rem;
  }
`;

export const StyledButton = styled(Button)`
  display: inline-block;
  height: 3.3rem;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  position: relative;
  top: -0.3rem;
  vertical-align: top;
  & span {
    color: #ffffff;
  }
`;

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

export const StyledLabel = styled.label`
  color: ${textColorB};
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 0.8rem;
  padding-top: 0.7rem;
  vertical-align: top;
`;

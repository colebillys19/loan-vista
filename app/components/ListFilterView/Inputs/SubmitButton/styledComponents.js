import styled from 'styled-components';

import Button from 'components/_base-ui/Button';

export const StyledButton = styled(Button)`
  display: inline-block;
  height: 3.3rem;
  position: relative;
  top: -0.3rem;
  vertical-align: top;
  & span {
    color: #ffffff;
  }
`;

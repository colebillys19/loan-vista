import styled from 'styled-components';

import Button from 'components/_baseUI/Button';

export const HeadingContainer = styled.div`
  margin: 0.5rem 0 1.1rem;
  position: relative;
  text-align: center;
  & svg {
    display: none;
    left: 4.9rem;
    position: absolute;
    top: 0.1rem;
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const SidebarDetail = styled.div`
  text-align: center;
  & :not(:last-of-type) {
    margin-bottom: 0.3rem;
  }
`;

export const SidebarHeaderContainer = styled.div`
  margin-bottom: 4rem;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  display: block;
  margin: 1.6rem auto 0;
`;

export const StyledH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: normal;
  margin: 0;
`;

import styled from 'styled-components';

export const IconWrapper = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;
export const SidebarDetail = styled.div`
  outline: 1px solid green;
  text-align: center;
  & :not(:last-of-type) {
    margin-bottom: 0.3rem;
  }
`;

export const SidebarHeaderWrapper = styled.div`
  margin: 0 auto 4rem;
  width: 100%;
`;

export const StyledH1 = styled.h1`
  display: block;
  font-size: 2.5rem;
  font-weight: normal;
  margin: 1rem 0 0;
  text-align: center;

  outline: 1px solid blue;
`;

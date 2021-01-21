import styled from 'styled-components';

import { backgroundColor, borderGrey } from 'styleConstants';

export const Gradient = styled.div`
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    ${backgroundColor} 8%,
    ${borderGrey} 50%,
    ${backgroundColor} 92%,
    ${backgroundColor} 100%
  );
  height: 0.1rem;
  left: 1rem;
  position: absolute;
  top: -4rem;
  width: 34rem;
`;

export const SidebarContainer = styled.aside`
  display: inline-block;
  margin-right: 0.3rem;
  padding-top: 4rem;
  vertical-align: top;
  width: 36rem;
`;

export const SidebarContentContainer = styled.div`
  height: 108rem;
  padding: 0 2.5rem;
  position: relative;
`;

import styled from 'styled-components';

import { backgroundColor, borderGrey } from 'styleConstants';

export const LeftBorder = styled.div`
  background: linear-gradient(
    0deg,
    ${backgroundColor} 0%,
    ${borderGrey} 10%,
    ${borderGrey} 90%,
    ${backgroundColor} 100%
  );
  height: 108rem;
  left: 0;
  position: absolute;
  top: 0;
  width: 0.1rem;
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

export const SidebarSectionPlaceholder = styled.div`
  border-top: ${({ isHeader }) =>
    isHeader ? '' : `0.1rem solid ${borderGrey}`};
  height: ${({ height }) => height || ''};
  margin-bottom: ${({ isHeader }) => (isHeader ? '4rem' : '2.2rem')};
  width: 100%;
`;

export const TopBorder = styled.div`
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    ${borderGrey} 30%,
    ${borderGrey} 70%,
    ${backgroundColor} 100%
  );
  height: 0.1rem;
  left: 4.9rem;
  position: absolute;
  top: -4rem;
  width: 26rem;
`;

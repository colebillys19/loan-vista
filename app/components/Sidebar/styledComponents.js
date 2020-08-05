import styled from 'styled-components';

import { borderGrey } from 'styleConstants';

export const SidebarContainer = styled.aside`
  display: inline-block;
  margin-right: 0.3rem;
  padding-top: 4rem;
  vertical-align: top;
  width: 36rem;
`;

export const SidebarContentContainer = styled.div`
  border-left: 0.1rem solid ${borderGrey};
  height: 108rem;
  padding: 0 2.5rem;
`;

export const SidebarSectionPlaceholder = styled.div`
  border-top: ${({ isHeader }) =>
    isHeader ? '' : `0.1rem solid ${borderGrey}`};
  height: ${({ height }) => height || ''};
  margin-bottom: ${({ isHeader }) => (isHeader ? '4rem' : '2.2rem')};
  width: 100%;
`;

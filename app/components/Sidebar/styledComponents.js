import styled from 'styled-components';

import { appColorC, borderGrey } from 'styleConstants';

export const SidebarContainer = styled.aside`
  display: inline-block;
  margin-right: 0.3rem;
  min-height: calc(100vh - 14.3rem);
  padding: 4rem 0 8rem;
  width: 36rem;
  vertical-align: top;
`;

export const SidebarContentContainer = styled.div`
  border-left: 0.1rem solid ${borderGrey};
  padding: 0 2.5rem;
`;

export const SidebarDetailPlaceholder = styled.div`
  background-color: #eee;
  border: 0.1rem solid ${borderGrey};
  height: ${({ height }) => height};
  margin-bottom: 2.2rem;
  width: 100%;
`;

export const SidebarHeaderPlaceholder = styled.div`
  background-color: white;
  border: 0.1rem solid ${appColorC};
  height: 20.6rem;
  margin-bottom: 4rem;
  width: 100%;
`;

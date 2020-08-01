import styled from 'styled-components';

import { appColorC } from 'styleConstants';

export const SidebarContainer = styled.aside`
  display: inline-block;
  margin-right: 0.3rem;
  min-height: calc(100vh - 14.3rem);
  padding: 4rem 0 8rem;
  width: 36rem;
  vertical-align: top;
`;

export const SidebarContentContainer = styled.div`
  border-left: 0.1rem solid #ccc;
  padding: 0 2.5rem;
`;

export const SidebarHeaderPlaceholder = styled.div`
  background-color: ${appColorC};
  height: 20.6rem;
  width: 100%;
`;

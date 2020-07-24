import styled from 'styled-components';

import { mainBlue } from 'styleConstants';

export const SidebarWrapper = styled.aside`
  border-left: 0.3rem solid ${mainBlue};
  display: inline-block;
  margin-right: 0.3rem;
  min-height: calc(100vh - 14.3rem);
  padding: 4rem 2.5rem 8rem;
  width: 36rem;
  vertical-align: top;
`;

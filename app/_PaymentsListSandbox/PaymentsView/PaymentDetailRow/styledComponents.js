import styled from 'styled-components';

import TwoColumnList from 'components/_base-ui/TwoColumnList';

export const Anchor = styled.div`
  height: 16.6rem;
  position: relative;
`;

export const ContentContainer = styled.div`
  display: flex;
  height: 16.6rem;
  justify-content: space-between;
  left: 0;
  padding: 2rem;
  position: absolute;
  top: 0;
  width: 83.7rem;
`;

export const StyledTwoColumnList = styled(TwoColumnList)`
  width: 38rem;
`;

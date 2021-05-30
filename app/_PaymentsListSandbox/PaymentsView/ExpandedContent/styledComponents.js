import styled from 'styled-components';

import TwoColumnList from 'components/_base-ui/TwoColumnList';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  position: absolute;
  right: 0;
  top: 2.4rem;
`;

export const StyledTwoColumnList = styled(TwoColumnList)`
  width: 38rem;
  &:first-of-type {
    margin-right: 3.7rem;
  }
`;

import styled from 'styled-components';

import { borderGrey } from 'styleConstants';
import TwoColumnList from 'components/_shared/TwoColumnList';

export const ChartsSection = styled.div`
  border-top: 0.1rem solid ${borderGrey};
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
  padding-top: 4rem;
`;

export const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTwoColumnList = styled(TwoColumnList)`
  width: 37rem;
`;

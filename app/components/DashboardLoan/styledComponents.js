import styled from 'styled-components';

import { borderGrey } from 'styleConstants';
import { StyledTableRow } from 'components/_base-ui/ListTable';
import TwoColumnList from 'components/_base-ui/TwoColumnList';

export const StopsListHeading = styled.h3`
  margin: 0 0 1rem;
`;

export const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StopsListContainer = styled.div`
  border-top: 0.1rem solid ${borderGrey};
  margin-top: 3.5rem;
  padding-top: 3.5rem;
`;

export const StyledTwoColumnList = styled(TwoColumnList)`
  width: 37rem;
`;

export const CustomTableRow = styled(StyledTableRow)`
  & td:nth-of-type(2) {
    width: 47rem;
  }
`;

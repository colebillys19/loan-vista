import styled from 'styled-components';

import { borderGrey } from 'styleConstants';
import { StyledTableRow } from 'components/_base-ui/ListTable';
import KeyValueList from 'components/_base-ui/KeyValueList';

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

export const StyledKeyValueList = styled(KeyValueList)`
  width: 37rem;
`;

export const CustomTableRow = styled(StyledTableRow)`
  & td:nth-of-type(2) {
    width: 47rem;
  }
`;

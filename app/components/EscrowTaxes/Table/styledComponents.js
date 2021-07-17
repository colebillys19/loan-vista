import styled from 'styled-components';

import { textColorB } from 'styleConstants';
import { StyledTable, StyledTableRow } from 'components/_shared/ListTable';

export const CustomTable = styled(StyledTable)`
  margin-bottom: 1.1rem;
`;

export const TableHeadRow = styled(StyledTableRow)`
  color: ${textColorB};
  th {
    font-weight: normal;
  }
  th:nth-of-type(1) {
    width: 17.6rem;
  }
  th:nth-of-type(2) {
    width: 16.3rem;
  }
  th:nth-of-type(3) {
    width: 17.5rem;
  }
  th:nth-of-type(4) {
    width: 14.7rem;
  }
  th:nth-of-type(5) {
    width: 12.5rem;
  }
`;

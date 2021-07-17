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
    width: 27rem;
  }
  th:nth-of-type(2) {
    width: 12rem;
  }
  th:nth-of-type(3) {
    width: 11.4rem;
  }
  th:nth-of-type(4) {
    width: 16.5rem;
  }
  th:nth-of-type(5) {
    width: 11.8rem;
  }
`;

import styled from 'styled-components';

import { textColorB } from 'styleConstants';
import { StyledTableRow } from 'components/_shared/ListTable';

export const TableHeadRow = styled(StyledTableRow)`
  color: ${textColorB};
  th {
    font-weight: normal;
  }
  th:nth-of-type(1) {
    width: 14rem;
  }
  th:nth-of-type(2) {
    width: 23rem;
  }
  th:nth-of-type(3) {
    width: 12.2rem;
  }
  th:nth-of-type(4) {
    width: 12.2rem;
  }
  th:nth-of-type(6) {
    width: 5.4rem;
  }
`;

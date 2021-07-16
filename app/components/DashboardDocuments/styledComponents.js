import styled from 'styled-components';

import { textColorB } from 'styleConstants';
import { StyledTableRow } from 'components/_shared/ListTable';

export const TableHeadRow = styled(StyledTableRow)`
  color: ${textColorB};
  th {
    font-weight: normal;
  }
  th:nth-of-type(1) {
    width: 10rem;
  }
  th:nth-of-type(2) {
    width: 9.8rem;
  }
  th:nth-of-type(3) {
    width: 7.4rem;
  }
  th:nth-of-type(4) {
    width: 7.8rem;
  }
  th:nth-of-type(5) {
    width: 19rem;
  }
  th:nth-of-type(6) {
    width: 7rem;
  }
`;

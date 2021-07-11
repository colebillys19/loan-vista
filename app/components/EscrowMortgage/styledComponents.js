import styled from 'styled-components';

import { textColorB } from 'styleConstants';
import { StyledTableRow } from 'components/_shared/ListTable';

export const TableHeadRow = styled(StyledTableRow)`
  color: ${textColorB};
  th {
    font-weight: normal;
  }
  th:nth-of-type(1) {
    width: 22.5rem;
  }
  th:nth-of-type(4) {
    width: 10rem;
  }
`;

import styled from 'styled-components';

import { textColorB } from 'styleConstants';
import { StyledTableRow } from 'components/_base-ui/ListTable';

export const TableHeadRow = styled(StyledTableRow)`
  color: ${textColorB};
  th {
    font-weight: normal;
  }
  th:nth-of-type(1) {
    width: 24.5rem;
  }
  th:nth-of-type(5) {
    width: 14rem;
  }
`;

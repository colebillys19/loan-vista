import styled from 'styled-components';

import { textColorB } from 'styleConstants';
import { StyledTableRow } from 'components/_shared/ListTable';

export const LinkButtonContainer = styled.div`
  bottom: 0.1rem;
  position: relative;
`;

export const TableHeadRow = styled(StyledTableRow)`
  color: ${textColorB};
  th {
    font-weight: normal;
  }
  th:nth-of-type(1) {
    width: 9rem;
  }
  th:nth-of-type(2) {
    width: 8rem;
  }
  th:nth-of-type(3) {
    width: 8.8rem;
  }
  th:nth-of-type(4) {
    width: 10.6rem;
  }
  th:nth-of-type(5) {
    width: 16rem;
  }
  th:nth-of-type(6) {
    width: 4rem;
  }
`;

import styled from 'styled-components';

import { StyledTableHead } from 'components/_shared/GradientListTable';

export const DocumentsTableHead = styled(StyledTableHead)`
  & th:nth-of-type(1) {
    width: 13.4rem;
  }
  & th:nth-of-type(2) {
    width: 11.6rem;
  }
  & th:nth-of-type(3) {
    width: 8.8rem;
  }
  & th:nth-of-type(4) {
    width: 9.3rem;
  }
  & th:nth-of-type(6) {
    width: 7rem;
  }
`;

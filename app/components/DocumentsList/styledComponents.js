import styled from 'styled-components';

import { StyledTableHead } from 'components/_base-ui/ListTable';

export const CustomTableHead = styled(StyledTableHead)`
  & th:nth-of-type(1) {
    width: 14.2rem;
  }
  & th:nth-of-type(2) {
    width: 11.6rem;
  }
  & th:nth-of-type(3) {
    width: 8.7rem;
  }
  & th:nth-of-type(4) {
    width: 9.2rem;
  }
  & th:nth-of-type(6) {
    width: 7rem;
  }
`;

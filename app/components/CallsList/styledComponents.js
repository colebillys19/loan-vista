import styled from 'styled-components';

import { StyledTableHead } from 'components/_base-ui/ListTable';

export const CustomTableHead = styled(StyledTableHead)`
  & th:nth-of-type(1) {
    width: 12.2rem;
  }
  & th:nth-of-type(2) {
    width: 10rem;
  }
  & th:nth-of-type(3) {
    width: 8.9rem;
  }
  & th:nth-of-type(4) {
    width: 7.9rem;
  }
  & th:nth-of-type(6) {
    width: 5.6rem;
  }
`;
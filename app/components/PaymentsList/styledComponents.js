import styled from 'styled-components';

import { StyledTableHead } from 'components/_base-ui/ListTable';

export const CustomTableHead = styled(StyledTableHead)`
  & th:nth-of-type(1) {
    width: 13.2rem;
  }
  & th:nth-of-type(3) {
    width: 10.5rem;
  }
  & th:nth-of-type(4) {
    width: 13.8rem;
  }
  & th:nth-of-type(5) {
    width: 13.4rem;
  }
  & th:nth-of-type(6) {
    width: 9.5rem;
  }
`;

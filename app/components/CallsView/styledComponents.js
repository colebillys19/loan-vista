import styled from 'styled-components';

import { StyledTableHead } from 'components/_base-ui/GradientListTable';

export const CustomTableHead = styled(StyledTableHead)`
  & th:nth-of-type(1) {
    width: 11.4rem;
  }
  & th:nth-of-type(2) {
    width: 10.2rem;
  }
  & th:nth-of-type(3) {
    width: 8.2rem;
  }
  & th:nth-of-type(4) {
    width: 7.4rem;
  }
  & th:nth-of-type(6) {
    width: 5.6rem;
  }
`;

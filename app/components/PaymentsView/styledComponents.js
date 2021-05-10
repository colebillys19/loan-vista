import styled from 'styled-components';

import { StyledTableHead } from 'components/_base-ui/GradientListTable';

export const CustomTableHead = styled(StyledTableHead)`
  & th:nth-of-type(1) {
    width: 13rem;
  }
  & th:nth-of-type(3) {
    width: 11.6rem;
  }
  & th:nth-of-type(4) {
    width: 13.7rem;
  }
  & th:nth-of-type(5) {
    width: 13.3rem;
  }
  & th:nth-of-type(6) {
    width: 9.4rem;
  }
`;

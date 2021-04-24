import styled from 'styled-components';

import { StyledTableHead } from 'components/_base-ui/GradientListTable';

export const CustomTableHead = styled(StyledTableHead)`
  & th:nth-of-type(1) {
    width: 13.2rem;
  }
  & th:nth-of-type(3) {
    width: 10.6rem;
  }
  & th:nth-of-type(4) {
    width: 13.9rem;
  }
  & th:nth-of-type(5) {
    width: 13.5rem;
  }
  & th:nth-of-type(6) {
    width: 9.6rem;
  }
`;

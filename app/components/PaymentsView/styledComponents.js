import styled from 'styled-components';

import { StyledTableHead } from 'components/_base-ui/GradientListTable';

export const BaseTableData = styled.td`
  padding: 0;
  padding-bottom: ${({ isExpanded }) => (isExpanded ? '16.6rem' : '0')};
  position: relative;
`;

/* eslint-disable prettier/prettier */
export const CustomTableHead = styled(StyledTableHead)`
  & th:nth-of-type(1) {}
  & th:nth-of-type(2) {}
  & th:nth-of-type(3) {}
  & th:nth-of-type(4) {}
  & th:nth-of-type(5) {}
  & th:nth-of-type(6) {}
  & th:nth-of-type(7) {
    width: 2.4rem;
  }
`;

/*

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

*/

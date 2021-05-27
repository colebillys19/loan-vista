import styled from 'styled-components';

import { StyledTableHead } from 'components/_base-ui/GradientListTable';

export const BaseTableData = styled.td`
  padding: 0;
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

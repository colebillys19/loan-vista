import styled from 'styled-components';

import { backgroundColor } from 'styleConstants';

export const StyledTable = styled.table`
  width: 100%;
`;

export const StyledTableBody = styled.tbody`
  &:before {
    content: '';
    display: block;
    height: 0.5rem;
  }
`;

export const StyledTableData = styled.td`
  height: 2.1rem;
  vertical-align: middle;
  &:first-of-type {
    padding-left: 1rem;
  }
`;

export const StyledTableHead = styled.thead`
  border-bottom: 0.1rem solid transparent;
`;

export const StyledTableHeader = styled.th`
  font-weight: normal;
  height: 3.5rem;
  position: relative;
  text-align: left;
  text-transform: uppercase;
  &:first-of-type {
    padding-left: 1rem;
  }
`;

export const StyledTableRow = styled.tr`
  &:nth-of-type(even) {
    background: linear-gradient(
      90deg,
      ${backgroundColor} 0%,
      #eee 30%,
      #eee 70%,
      ${backgroundColor} 100%
    );
  }
`;

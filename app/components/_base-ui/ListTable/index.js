import styled from 'styled-components';

import { textColorA } from 'styleConstants';

export const StyledTable = styled.table`
  width: 100%;
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableData = styled.td`
  color: ${textColorA};
  height: 2.1rem;
  vertical-align: middle;
  &:last-of-type {
    text-align: right;
  }
`;

export const StyledTableHead = styled.thead``;

export const StyledTableHeader = styled.th``;

export const StyledTableRow = styled.tr``;

export const TableContainer = styled.div``;

import styled from 'styled-components';

import { textColorA } from 'styleConstants';

export const StyledTable = styled.table`
  width: 100%;
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableData = styled.td`
  color: ${textColorA};
  & :last-of-type {
    text-align: right;
  }
`;

export const StyledTableHead = styled.thead``;

export const StyledTableHeader = styled.th`
  text-align: left;
  & :last-of-type {
    text-align: right;
  }
`;

export const StyledTableRow = styled.tr`
  height: 2.1rem;
`;

export const TableContainer = styled.div``;

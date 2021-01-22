import styled from 'styled-components';

import { skeletonGrey, textColorA } from 'styleConstants';

export const SkeletonRowContainer = styled.tr`
  display: block;
  height: 2.1rem;
`;

export const SkeletonRowStripe = styled.td`
  background-color: ${skeletonGrey};
  display: block;
  height: 1rem;
  position: relative;
  top: 0.4rem;
`;

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

export const StyledTableHeader = styled.th``;

export const StyledTableRow = styled.tr`
  height: 2.1rem;
`;

export const TableContainer = styled.div``;

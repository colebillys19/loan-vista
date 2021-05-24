import styled from 'styled-components';

import { backgroundColor, textColorB } from 'styleConstants';

export const ListSpinnerWrapper = styled.span`
  display: inline-block;
  left: 39.2rem;
  padding: 10rem 0;
  position: relative;
`;

export const StyledTable = styled.table`
  background: ${backgroundColor};
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    #ffffff 50%,
    ${backgroundColor} 100%
  );
  width: 100%;
`;

export const StyledTableBody = styled.tbody`
  &:before {
    content: '';
    display: block;
    height: 0.2rem;
  }
`;

export const StyledTableData = styled.td`
  height: 2.1rem;
  vertical-align: top;
  padding: 0.4rem 0;
`;

export const StyledTableHead = styled.thead`
  border-bottom: 0.1rem solid transparent;
`;

export const StyledTableHeader = styled.th`
  color: ${textColorB};
  font-weight: normal;
  height: 3.5rem;
  position: relative;
  text-align: left;
  text-transform: uppercase;
`;

export const StyledTableRow = styled.tr`
  &:nth-of-type(even) {
    background: linear-gradient(
      90deg,
      ${backgroundColor} 0%,
      #f6f6f6 30%,
      #f6f6f6 70%,
      ${backgroundColor} 100%
    );
  }
`;

export const TableContainer = styled.div`
  position: relative;
`;

export const TableFooterCell = styled.td`
  color: transparent;
  line-height: 3.3rem;
`;

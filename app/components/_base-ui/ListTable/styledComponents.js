import styled from 'styled-components';

import { backgroundColor, textColorB } from 'styleConstants';

export const ListSpinnerWrapper = styled.span`
  left: 39.2rem;
  display: inline-block;
  padding: 10rem 0;
  position: relative;
`;

export const StyledTable = styled.table`
  background: ${backgroundColor};
  background: linear-gradient(
    90deg,
    ${backgroundColor} 0%,
    #fff 50%,
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
  vertical-align: middle;
  &:first-of-type {
    padding-left: 1rem;
  }
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
  &:first-of-type {
    padding-left: 1rem;
  }
`;

export const StyledTableRow = styled.tr`
  &:nth-of-type(even) {
    background: linear-gradient(
      90deg,
      ${backgroundColor} 0%,
      #f3f3f3 30%,
      #f3f3f3 70%,
      ${backgroundColor} 100%
    );
  }
  &:last-of-type td {
    padding-bottom: 0.4rem;
    padding-top: 0.2rem;
  }
`;

export const TableFooterCell = styled.td`
  color: transparent;
  line-height: 3.5rem;
`;

export const TableWrapper = styled.div`
  position: relative;
`;

import styled from 'styled-components';

export const StyledTableData = styled.td`
  height: 2.1rem;
  vertical-align: bottom;
  &:first-of-type {
    padding-left: 1rem;
  }
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

  & button {
    text-transform: uppercase;
  }
`;

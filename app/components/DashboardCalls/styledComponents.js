import styled from 'styled-components';

import { StyledTableData } from 'components/_shared/ListTable';

export const CustomTableData = styled(StyledTableData)`
  &:nth-of-type(1) {
    width: 11.4rem;
  }
  &:nth-of-type(2) {
    width: 10.2rem;
  }
  &:nth-of-type(3) {
    width: 7.6rem;
  }
  &:nth-of-type(4) {
    width: 6.8rem;
  }
  &:nth-of-type(5) {
    overflow: hidden;
    padding-right: 3rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 40rem;
  }
  &:nth-of-type(6) {
    width: 6rem;
  }
`;

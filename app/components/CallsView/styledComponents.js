import styled from 'styled-components';

import { StyledTableHead } from 'components/_base-ui/GradientListTable';
import LinkButton from 'components/_base-ui/LinkButton';

export const BaseTableData = styled.td`
  padding: 0;
  position: relative;
`;

export const CustomTableHead = styled(StyledTableHead)`
  & th:nth-of-type(1) {
    width: 11.4rem;
  }
  & th:nth-of-type(2) {
    width: 10.2rem;
  }
  & th:nth-of-type(3) {
    width: 7.6rem;
  }
  & th:nth-of-type(4) {
    width: 6.8rem;
  }
  & th:nth-of-type(6) {
    width: 5.6rem;
  }
`;

export const StyledLinkButton = styled(LinkButton)`
  position: absolute;
  right: 0;
  top: 0.4rem;
`;

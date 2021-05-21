import styled from 'styled-components';

import {
  StyledTableData,
  StyledTableHead,
} from 'components/_base-ui/GradientListTable';

export const CustomTableHead = styled(StyledTableHead)`
  & th:nth-of-type(1) {
    width: 11.3rem;
  }
  & th:nth-of-type(2) {
    width: 10rem;
  }
  & th:nth-of-type(3) {
    width: 8.9rem;
  }
  & th:nth-of-type(4) {
    width: 7.9rem;
  }
  & th:nth-of-type(6) {
    width: 5.6rem;
  }
`;

export const DescTableData = styled(StyledTableData)`
  max-width: 40rem;
  padding-right: 6rem;
  position: relative;
`;

export const ExpandableDescTableData = styled(DescTableData)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${({ isExpanded }) => (isExpanded ? 'normal' : 'nowrap')};
`;

export const AbsoluteButton = styled.button`
  opacity: 0.3;
  position: absolute;
  top: 0;
  right: 1rem;
  height: 1.8rem;
  width: 4rem;
  font-size: 1rem;
`;

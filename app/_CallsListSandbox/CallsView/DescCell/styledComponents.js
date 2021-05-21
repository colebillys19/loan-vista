import styled from 'styled-components';

import { StyledTableData } from 'components/_base-ui/GradientListTable';

export const DescTableData = styled(StyledTableData)`
  max-width: 40rem;
  padding-right: 6rem;
  position: relative;
`;

export const ExpandableTableData = styled(DescTableData)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${({ isExpanded }) => (isExpanded ? 'normal' : 'nowrap')};
`;

export const ExpandButton = styled.button`
  font-size: 1rem;
  height: 1.8rem;
  opacity: 0.3;
  position: absolute;
  right: 1rem;
  top: 0;
  width: 4rem;
`;

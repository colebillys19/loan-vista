import styled from 'styled-components';

import { StyledTableData } from 'components/_shared/GradientListTable';
import ArrowButton from 'components/_shared/ArrowButton';

export const DescTableData = styled(StyledTableData)`
  max-width: 40rem;
  padding-right: 6.4rem;
  position: relative;
`;

export const ExpandableTableData = styled(DescTableData)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${({ isExpanded }) => (isExpanded ? 'normal' : 'nowrap')};
`;

export const StyledArrowButton = styled(ArrowButton)`
  position: absolute;
  right: 3.4rem;
  top: 0;
`;

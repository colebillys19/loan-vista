import styled from 'styled-components';
import { Button } from '@material-ui/core';

import { textColorB } from 'styleConstants';
import { StyledTableData } from 'components/_base-ui/GradientListTable';

export const DescTableData = styled(StyledTableData)`
  max-width: 40rem;
  padding-right: 8.4rem;
  position: relative;
`;

export const ExpandableTableData = styled(DescTableData)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${({ isExpanded }) => (isExpanded ? 'normal' : 'nowrap')};
`;

export const ExpandButton = styled(Button)`
  border-radius: 0;
  color: ${textColorB};
  font-size: 1rem;
  height: 2.5rem;
  letter-spacing: 0.1rem;
  min-width: 0;
  padding: 0 0.6rem 0 1rem;
  position: absolute;
  right: 3.4rem;
  text-transform: none;
  top: 0;
  width: 4.8rem;
  & .MuiButton-startIcon {
    margin-right: 0.4rem;
  }
`;

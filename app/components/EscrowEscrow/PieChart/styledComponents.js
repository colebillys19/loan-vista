import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import {
  appColorA,
  borderGrey,
  loadingAnimationStyles,
  skeletonGreyOpaque,
  textColorA,
} from 'styleConstants';

export const BlockContainer = styled.div`
  position: relative;
  width: 50%;
  &:last-of-type {
    border-left: 0.1rem solid ${borderGrey};
    padding-left: 0.1rem;
  }
`;

export const ChartContainer = styled.div`
  height: 20rem;
  margin: 0 auto;
  width: 20rem;
`;

export const Heading = styled.h3`
  margin: 0 0 2rem;
  text-align: center;
`;

export const Metric = styled.h3`
  color: ${appColorA};
  font-size: 1.6rem;
  margin: 0 0 0.4rem;
`;

export const SkeletonContainer = styled.div`
  clip-path: url(#donutClipPath);
  height: 100%;
  background-color: ${skeletonGreyOpaque};
  ${({ isError }) => (isError ? '' : loadingAnimationStyles)}
`;

export const StyledTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#ffffff',
    border: '0.1rem solid grey',
    borderRadius: '0.5rem',
    color: textColorA,
    lineHeight: '1.15',
    maxWidth: 'none',
    padding: '1rem 1.2rem',
  },
}))(Tooltip);

export const TooltipContent = styled.div`
  text-align: ${({ tooltipPlacement }) =>
    tooltipPlacement === 'left' ? 'right' : 'left'};
`;

export const Value = styled.p`
  font-size: 1.6rem;
  margin: 0;
`;

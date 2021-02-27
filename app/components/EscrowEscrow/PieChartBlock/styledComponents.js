import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import {
  appColorA,
  borderGrey,
  loadingAnimationStyles,
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
  background-color: ${textColorA};
  border-radius: 50%;
  clip-path: url(#donutClipPath);
  height: 20rem;
  margin: 0 auto;
  position: relative;
  width: 20rem;
  ${({ renderLoading }) => renderLoading && loadingAnimationStyles}
`;

export const ChartWrapper = styled.div`
  height: 19.6rem;
  left: 0.2rem;
  position: absolute;
  top: 0.2rem;
  width: 19.6rem;
`;

export const Heading = styled.h3`
  margin: 0 0 2rem;
  text-align: center;
`;

export const Metric = styled.h3`
  color: ${appColorA};
  font-size: 1.6rem;
  margin: 0;
`;

export const StyledTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#ffffff',
    border: '0.1rem solid grey',
    borderRadius: '0.5rem',
    color: textColorA,
    lineHeight: '1.15',
    padding: '1rem 1.2rem',
  },
}))(Tooltip);

export const Value = styled.p`
  font-size: 1.4rem;
  margin: 0;
`;

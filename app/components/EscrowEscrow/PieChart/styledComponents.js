import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import {
  appColorA,
  borderGrey,
  loadingAnimation,
  textColorA,
} from 'styleConstants';

export const ChartContainer = styled.div`
  height: 20rem;
  margin: 0 auto;
  position: relative;
  width: 20rem;
  ${loadingAnimation}
`;

export const ChartHeading = styled.h3`
  margin: 0 0 2rem;
  text-align: center;
`;

export const ChartsSubsection = styled.div`
  position: relative;
  width: 50%;
  &:last-of-type {
    border-left: 0.1rem solid ${borderGrey};
    padding-left: 0.1rem;
  }
`;

export const ChartWrapper = styled.div`
  height: 19.8rem;
  left: 0.1rem;
  position: absolute;
  top: 0.1rem;
  width: 19.8rem;
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

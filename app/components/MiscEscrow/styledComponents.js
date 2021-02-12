import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { appColorA, borderGrey, textColorA } from 'styleConstants';
import TwoColumnList from 'components/_base-ui/TwoColumnList';

export const ChartContainer = styled.div`
  display: inline-block;
  width: 50%;
`;

export const ChartDivider = styled.div`
  height: 21.9rem;
  width: 0.1rem;
  background-color: ${borderGrey};
  position: absolute;
  left: 50%;
  top: 4rem;
`;

export const ChartHeading = styled.h3`
  margin: 0 0 2rem;
  text-align: center;
`;

export const ChartsSection = styled.div`
  position: relative;
  border-top: 0.1rem solid ${borderGrey};
  margin-top: 3.5rem;
  padding-top: 4rem;
`;

export const ChartWrapper = styled.div`
  height: 18rem;
  margin: 0 auto;
  width: 18rem;
`;

export const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export const StyledTwoColumnList = styled(TwoColumnList)`
  width: 37rem;
`;

export const TooltipMetric = styled.h3`
  color: ${appColorA};
  font-size: 1.6rem;
  margin: 0;
`;

export const TooltipValue = styled.p`
  font-size: 1.4rem;
  margin: 0;
`;

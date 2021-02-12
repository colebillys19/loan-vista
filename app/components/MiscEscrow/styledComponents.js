import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { borderGrey } from 'styleConstants';
import TwoColumnList from 'components/_base-ui/TwoColumnList';

export const ChartContainer = styled.div`
  border-top: 0.1rem solid ${borderGrey};
  margin-top: 3.5rem;
  padding-top: 4.3rem;
`;

export const ChartWrapper = styled.div`
  height: 22rem;
  margin: 0 auto;
  width: 22rem;
`;

export const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Metric = styled.h3`
  color: green;
  margin: 0;
`;

export const StyledTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: 'white',
    border: '0.1rem solid grey',
    borderRadius: '0',
    boxShadow: '0.1rem 0.1rem grey',
    color: 'black',
    padding: '1rem 1.2rem',
  },
}))(Tooltip);

export const StyledTwoColumnList = styled(TwoColumnList)`
  width: 37rem;
`;

export const Value = styled.p`
  margin: 0;
`;

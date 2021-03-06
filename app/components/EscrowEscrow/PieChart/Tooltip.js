import React from 'react';
import T from 'prop-types';

import { convertNumToCurrency } from 'utils/globalHelpers';

import {
  Metric,
  StyledTooltip,
  TooltipContent,
  Value,
} from './styledComponents';

const Tooltip = ({ active, datum: { tooltipValue, x }, tooltipPlacement }) => (
  <StyledTooltip
    open={!!active}
    placement={tooltipPlacement}
    title={
      <TooltipContent tooltipPlacement={tooltipPlacement}>
        <Metric>{x}</Metric>
        <Value>{convertNumToCurrency(tooltipValue)}</Value>
      </TooltipContent>
    }
    TransitionProps={{ timeout: 0 }}
  >
    <svg x={tooltipPlacement === 'left' ? 25 : 175} y={100} />
  </StyledTooltip>
);

Tooltip.propTypes = {
  active: T.bool,
  datum: T.object,
  tooltipPlacement: T.string,
};

export default Tooltip;

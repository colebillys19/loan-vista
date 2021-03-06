import React from 'react';
import T from 'prop-types';

import { convertNumToCurrency } from 'utils/globalHelpers';

import {
  Metric,
  StyledTooltip,
  TooltipContent,
  Value,
} from './styledComponents';

const Tooltip = ({ active, datum: { text, value }, tooltipPlacement }) => (
  <StyledTooltip
    open={!!active}
    placement={tooltipPlacement}
    title={
      <TooltipContent tooltipPlacement={tooltipPlacement}>
        <Metric>{text}</Metric>
        <Value>{convertNumToCurrency(value)}</Value>
      </TooltipContent>
    }
    TransitionProps={{ timeout: 0 }}
  >
    <svg x={tooltipPlacement === 'left' ? 24 : 172} y={98} />
  </StyledTooltip>
);

Tooltip.propTypes = {
  active: T.bool,
  datum: T.object,
  tooltipPlacement: T.string,
};

export default Tooltip;

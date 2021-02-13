import React, { Fragment } from 'react';
import T from 'prop-types';

import { convertNumToCurrency } from 'utils/globalHelpers';

import {
  TooltipMetric as Metric,
  StyledTooltip,
  TooltipValue as Value,
} from '../styledComponents';

const Tooltip = ({ active, datum: { name, value }, tooltipPlacement }) => (
  <StyledTooltip
    open={!!active}
    placement={tooltipPlacement}
    title={
      <Fragment>
        <Metric>{name}</Metric>
        <Value>{convertNumToCurrency(value)}</Value>
      </Fragment>
    }
    TransitionProps={{ timeout: 0 }}
  >
    <svg x={tooltipPlacement === 'left' ? 0 : 180} y={90} />
  </StyledTooltip>
);

Tooltip.propTypes = {
  active: T.bool,
  datum: T.object,
  tooltipPlacement: T.string,
};

export default Tooltip;

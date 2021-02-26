import React, { Fragment } from 'react';
import T from 'prop-types';

import { convertNumToCurrency } from 'utils/globalHelpers';

import { Metric, StyledTooltip, Value } from './styledComponents';

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
    <svg x={tooltipPlacement === 'left' ? 29 : 167} y={98} />
  </StyledTooltip>
);

Tooltip.propTypes = {
  active: T.bool,
  datum: T.object,
  tooltipPlacement: T.string,
};

export default Tooltip;

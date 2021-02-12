import React, { Fragment } from 'react';
import T from 'prop-types';

import { Metric, StyledTooltip, Value } from '../styledComponents';

const Tooltip = ({ active, datum: { x, y } }) => (
  <StyledTooltip
    open={!!active}
    title={
      <Fragment>
        <Metric>{x}</Metric>
        <Value>{y}</Value>
      </Fragment>
    }
    TransitionProps={{ timeout: 0 }}
  >
    <svg height={1} width={1} x={245} y={75} />
  </StyledTooltip>
);

Tooltip.propTypes = { active: T.bool, datum: T.object };

export default Tooltip;

/*
datum:
  endAngle: 119.99999999999999
  padAngle: 0
  startAngle: 0
  x: "a"
  xName: "a"
  y: 100
  _x: 1
  _y: 100
*/

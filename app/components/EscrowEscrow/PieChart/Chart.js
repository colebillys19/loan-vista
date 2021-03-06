import React, { useState } from 'react';
import T from 'prop-types';
import { VictoryPie } from 'victory-pie';

import Slice from './Slice';
import Tooltip from './Tooltip';
import { handleMouseOut, handleMouseOver } from './helpers';

const PieChart = ({ data, id }) => {
  const [focusedSlice, setFocusedSlice] = useState(-1);

  return (
    <VictoryPie
      colorScale={data.map(({ color }) => color)}
      data={data}
      dataComponent={<Slice focusedSlice={focusedSlice} />}
      events={[
        {
          eventHandlers: {
            onMouseOut: () => handleMouseOut(setFocusedSlice),
            onMouseOver: () => handleMouseOver(setFocusedSlice),
          },
          target: 'data',
        },
      ]}
      height={200}
      innerRadius={44}
      labelComponent={
        <Tooltip
          focusedSlice={focusedSlice}
          tooltipPlacement={id === 'current' ? 'right' : 'left'}
        />
      }
      padding={0}
      width={200}
      x="name"
      y="value"
    />
  );
};

PieChart.propTypes = {
  data: T.arrayOf(T.object).isRequired,
  id: T.oneOf(['current', 'effective']).isRequired,
};

export default PieChart;
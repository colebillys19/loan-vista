import React, { useState } from 'react';
import T from 'prop-types';
import { VictoryPie } from 'victory-pie';

import { ChartWrapper } from './styledComponents';
import Slice from './Slice';
import Tooltip from './Tooltip';
import { handleMouseOut, handleMouseOver } from './helpers';

const PieChart = ({ data: { colorScale, data }, id }) => {
  const [focusedSlice, setFocusedSlice] = useState(-1);

  return (
    <ChartWrapper>
      <VictoryPie
        colorScale={colorScale}
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
        height={180}
        innerRadius={45}
        labelComponent={
          <Tooltip
            focusedSlice={focusedSlice}
            tooltipPlacement={id === 'current' ? 'right' : 'left'}
          />
        }
        padding={0}
        width={180}
        x="name"
        y="value"
      />
    </ChartWrapper>
  );
};

PieChart.propTypes = {
  data: T.shape({
    colorScale: T.arrayOf(T.string),
    data: T.arrayOf(T.object),
  }).isRequired,
  id: T.oneOf(['current', 'effective']).isRequired,
};

export default PieChart;

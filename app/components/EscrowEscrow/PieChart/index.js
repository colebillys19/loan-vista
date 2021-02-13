import React, { useEffect, useRef, useState } from 'react';
import T from 'prop-types';
import { VictoryPie } from 'victory-pie';

import { ChartWrapper } from '../styledComponents';
import Slice from './Slice';
import Tooltip from './Tooltip';
import { getColorScale, handleMouseOut, handleMouseOver } from './helpers';

const PieChart = ({ data, tooltipPlacement }) => {
  const [focusedSlice, setFocusedSlice] = useState('');
  const colorScale = useRef();

  useEffect(() => {
    if (!colorScale.current) {
      colorScale.current = getColorScale(
        data.length,
        Math.floor(Math.random() * 10),
      );
    }
  }, [colorScale, data.length]);

  return (
    <ChartWrapper>
      <svg viewBox="0 0 180 180">
        <VictoryPie
          colorScale={colorScale.current}
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
              tooltipPlacement={tooltipPlacement}
            />
          }
          padding={0}
          standalone={false}
          width={180}
          x="name"
          y="value"
        />
      </svg>
    </ChartWrapper>
  );
};

PieChart.propTypes = {
  data: T.arrayOf(T.object).isRequired,
  tooltipPlacement: T.string.isRequired,
};

export default PieChart;

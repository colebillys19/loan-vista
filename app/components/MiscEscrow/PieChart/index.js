import React, { useState } from 'react';
import T from 'prop-types';
import { VictoryPie } from 'victory-pie';

import { ChartWrapper } from '../styledComponents';
import Slice from './Slice';
import Tooltip from './Tooltip';
import { colorScale, mockData } from './constants';
import { handleMouseOut, handleMouseOver } from './helpers';

const PieChart = ({ data }) => {
  const [focusedSlice, setFocusedSlice] = useState('');

  return (
    <ChartWrapper>
      <svg viewBox="0 0 220 220">
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
          height={220}
          innerRadius={55}
          labelComponent={<Tooltip focusedSlice={focusedSlice} />}
          labelRadius={120}
          padding={0}
          standalone={false}
          width={220}
        />
      </svg>
    </ChartWrapper>
  );
};

PieChart.propTypes = { data: T.arrayOf(T.object) };

PieChart.defaultProps = { data: mockData };

export default PieChart;

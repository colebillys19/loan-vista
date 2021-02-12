import React, { useState } from 'react';
import T from 'prop-types';
import { VictoryPie } from 'victory-pie';

import { PIE_MOCK_DATA } from '../tests/mockData';
import { ChartWrapper } from '../styledComponents';
import Slice from './Slice';
import Tooltip from './Tooltip';
import { handleMouseOut, handleMouseOver } from './helpers';

const PieChart = ({ data, tooltipPlacement }) => {
  const [focusedSlice, setFocusedSlice] = useState('');

  return (
    <ChartWrapper>
      <svg viewBox="0 0 180 180">
        <VictoryPie
          colorScale={['#dc3644', '#28a744', '#007bff']}
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
  data: T.arrayOf(T.object),
  tooltipPlacement: T.string.isRequired,
};

PieChart.defaultProps = { data: PIE_MOCK_DATA };

export default PieChart;

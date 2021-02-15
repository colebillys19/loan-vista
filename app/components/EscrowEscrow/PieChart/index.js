import React from 'react';
import T from 'prop-types';
import ConditionalRender from 'components/_base-ui/ConditionalRender';

import {
  ChartContainer,
  ChartHeading,
  ChartsSubsection,
} from './styledComponents';
import Chart from './Chart';
import Temp from './Temp';

const PieChart = ({ data, heading, id, renderLoading }) => (
  <ChartsSubsection>
    <ChartHeading>{heading}</ChartHeading>
    <ChartContainer renderLoading={renderLoading}>
      <Temp />
      <ConditionalRender
        Component={<Chart data={data} id={id} />}
        shouldRender={!renderLoading}
      />
    </ChartContainer>
  </ChartsSubsection>
);

PieChart.propTypes = {
  data: T.object.isRequired,
  heading: T.string.isRequired,
  id: T.string.isRequired,
  renderLoading: T.bool.isRequired,
};

export default PieChart;

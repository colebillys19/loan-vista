import React from 'react';
import T from 'prop-types';

import ConditionalRender from 'components/_base-ui/ConditionalRender';
import { BlockContainer, ChartContainer, Heading } from './styledComponents';
import Chart from './Chart';
import PieSkeleton from './PieSkeleton';

const PieChart = ({ data, heading, id, renderLoading }) => (
  <BlockContainer>
    <Heading>{heading}</Heading>
    <ChartContainer renderLoading={renderLoading}>
      <ConditionalRender
        Component={<Chart data={data} id={id} />}
        FallbackComponent={<PieSkeleton />}
        shouldRender={!renderLoading}
      />
    </ChartContainer>
  </BlockContainer>
);

PieChart.propTypes = {
  data: T.array.isRequired,
  heading: T.string.isRequired,
  id: T.string.isRequired,
  renderLoading: T.bool.isRequired,
};

export default PieChart;

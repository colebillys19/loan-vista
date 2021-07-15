import React, { useContext } from 'react';
import T from 'prop-types';

import Context from 'Context';
import ConditionalRender from 'components/_shared/ConditionalRender';

import { BlockContainer, ChartContainer, Heading } from './styledComponents';
import Chart from './Chart';
import PieSkeleton from './PieSkeleton';

const PieChart = ({ data, heading, id }) => {
  const [{ mainError, mainLoading }] = useContext(Context);

  return (
    <BlockContainer>
      <Heading>{heading}</Heading>
      <ChartContainer>
        <ConditionalRender
          Component={<Chart data={data} id={id} />}
          FallbackComponent={<PieSkeleton isError={mainError} />}
          shouldRender={!mainLoading && !mainError}
        />
      </ChartContainer>
    </BlockContainer>
  );
};

PieChart.propTypes = {
  data: T.array.isRequired,
  heading: T.string.isRequired,
  id: T.string.isRequired,
};

export default PieChart;

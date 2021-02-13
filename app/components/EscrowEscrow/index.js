/**
 * EscrowEscrow
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';

import PieChart from './PieChart';
import {
  ChartContainer,
  ChartDivider,
  ChartHeading,
  ChartsSection,
  ListsContainer,
  StyledTwoColumnList,
} from './styledComponents';
import {
  CURRENT_PIE_MOCK_DATA,
  EFFECTIVE_PIE_MOCK_DATA,
} from './tests/mockData';

/* eslint-disable react/no-array-index-key */
const EscrowEscrow = ({ data, renderLoading }) => (
  <GradientCard heading="Escrow">
    <ListsContainer>
      {data.map((listDataObj, i) => (
        <StyledTwoColumnList
          key={i}
          data={listDataObj}
          numRows={3}
          renderLoading={renderLoading}
        />
      ))}
    </ListsContainer>
    <ChartsSection>
      <ChartContainer>
        <ChartHeading>Current Escrow Breakdown</ChartHeading>
        <PieChart data={CURRENT_PIE_MOCK_DATA} tooltipPlacement="right" />
      </ChartContainer>
      <ChartDivider />
      <ChartContainer>
        <ChartHeading>Effective Escrow Breakdown</ChartHeading>
        <PieChart data={EFFECTIVE_PIE_MOCK_DATA} tooltipPlacement="left" />
      </ChartContainer>
    </ChartsSection>
  </GradientCard>
);

EscrowEscrow.propTypes = {
  data: T.arrayOf(T.object).isRequired,
  renderLoading: T.bool.isRequired,
};

export default EscrowEscrow;

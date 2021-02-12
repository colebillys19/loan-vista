/**
 * MiscEscrow
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

/* eslint-disable react/no-array-index-key */
const MiscEscrow = ({ data, renderLoading }) => (
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
        <PieChart tooltipPlacement="right" />
      </ChartContainer>
      <ChartDivider />
      <ChartContainer>
        <ChartHeading>Effective Escrow Breakdown</ChartHeading>
        <PieChart tooltipPlacement="left" />
      </ChartContainer>
    </ChartsSection>
  </GradientCard>
);

MiscEscrow.propTypes = {
  data: T.arrayOf(T.object).isRequired,
  renderLoading: T.bool.isRequired,
};

export default MiscEscrow;

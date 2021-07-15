/**
 * EscrowEscrow
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import GradientCard from 'components/_shared/GradientCard';

import PieChart from './PieChart';
import {
  ChartsSection,
  ListsContainer,
  StyledTwoColumnList,
} from './styledComponents';

/* eslint-disable react/no-array-index-key */
const EscrowEscrow = ({
  data: {
    currentListData,
    currentPieData,
    effectiveListData,
    effectivePieData,
  },
}) => (
  <GradientCard heading="Escrow">
    <ListsContainer>
      <StyledTwoColumnList data={currentListData} numRows={3} />
      <StyledTwoColumnList data={effectiveListData} numRows={3} />
    </ListsContainer>
    <ChartsSection>
      <PieChart
        data={currentPieData}
        heading="Current Escrow Breakdown"
        id="current"
      />
      <PieChart
        data={effectivePieData}
        heading="Effective Escrow Breakdown"
        id="effective"
      />
    </ChartsSection>
  </GradientCard>
);

EscrowEscrow.propTypes = {
  data: T.shape({
    currentListData: T.object,
    currentPieData: T.array,
    effectiveListData: T.object,
    effectivePieData: T.array,
  }).isRequired,
};

export default EscrowEscrow;

/**
 * EscrowEscrow
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';

import PieChartBlock from './PieChartBlock';
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
  renderLoading,
}) => (
  <GradientCard heading="Escrow">
    <ListsContainer>
      <StyledTwoColumnList
        data={currentListData}
        numRows={3}
        renderLoading={renderLoading}
      />
      <StyledTwoColumnList
        data={effectiveListData}
        numRows={3}
        renderLoading={renderLoading}
      />
    </ListsContainer>
    <ChartsSection>
      <PieChartBlock
        data={currentPieData}
        heading="Current Escrow Breakdown"
        id="current"
        renderLoading={renderLoading}
      />
      <PieChartBlock
        data={effectivePieData}
        heading="Effective Escrow Breakdown"
        id="effective"
        renderLoading={renderLoading}
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
  renderLoading: T.bool.isRequired,
};

export default EscrowEscrow;
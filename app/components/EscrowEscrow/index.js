/**
 * EscrowEscrow
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';

import PieChart from './PieChart';
import {
  ChartsSection,
  ListsContainer,
  StyledTwoColumnList,
} from './styledComponents';
import {
  CURRENT_PIE_MOCK_DATA,
  EFFECTIVE_PIE_MOCK_DATA,
} from './tests/mockData';

/* eslint-disable react/no-array-index-key */
const EscrowEscrow = ({
  data: { currentData, effectiveData },
  renderLoading,
}) => (
  <GradientCard heading="Escrow">
    <ListsContainer>
      <StyledTwoColumnList
        data={currentData}
        numRows={3}
        renderLoading={renderLoading}
      />
      <StyledTwoColumnList
        data={effectiveData}
        numRows={3}
        renderLoading={renderLoading}
      />
    </ListsContainer>
    <ChartsSection>
      <PieChart
        data={CURRENT_PIE_MOCK_DATA}
        heading="Current Escrow Breakdown"
        id="current"
        renderLoading={renderLoading}
      />
      <PieChart
        data={EFFECTIVE_PIE_MOCK_DATA}
        heading="Effective Escrow Breakdown"
        id="effective"
        renderLoading={renderLoading}
      />
    </ChartsSection>
  </GradientCard>
);

EscrowEscrow.propTypes = {
  data: T.shape({
    currentData: T.object,
    effectiveData: T.object,
  }).isRequired,
  renderLoading: T.bool.isRequired,
};

export default EscrowEscrow;

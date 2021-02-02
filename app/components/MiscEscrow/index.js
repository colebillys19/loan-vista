/**
 * MiscEscrow
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';

import { ListsContainer, StyledTwoColumnList } from './styledComponents';
import { MOCK_DATA } from './tests/mockData';

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
  </GradientCard>
);

MiscEscrow.propTypes = {
  data: T.arrayOf(T.object).isRequired,
  renderLoading: T.bool.isRequired,
};

// temp
// eslint-disable-next-line react/default-props-match-prop-types
MiscEscrow.defaultProps = { data: MOCK_DATA };

export default MiscEscrow;

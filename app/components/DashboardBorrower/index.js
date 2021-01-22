/**
 * DashboardBorrower
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';
import { GroupIcon } from 'images/icons';
import { appColorAOpaque } from 'styleConstants';

import { ListsContainer, StyledKeyValueList } from './styledComponents';
import { MOCK_DATA } from './tests/mockData';

const Icon = <GroupIcon color={appColorAOpaque} size="4rem" />;

/* eslint-disable react/no-array-index-key */
const DashboardBorrower = ({ data, renderLoading }) => (
  <GradientCard heading="Borrower Information" Icon={Icon}>
    <ListsContainer>
      {data.map((listData, i) => (
        <StyledKeyValueList
          key={i}
          data={listData}
          numRows={6}
          renderLoading={renderLoading}
          smallRows={[2]}
        />
      ))}
    </ListsContainer>
  </GradientCard>
);

DashboardBorrower.propTypes = {
  data: T.arrayOf(T.object),
  renderLoading: T.bool.isRequired,
};

// temp
DashboardBorrower.defaultProps = { data: MOCK_DATA };

export default DashboardBorrower;

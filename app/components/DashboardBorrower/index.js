/**
 * DashboardBorrower
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';
import { GroupIcon } from 'images/icons';
import { iconColorBOpaque } from 'styleConstants';

import { ListsContainer, StyledTwoColumnList } from './styledComponents';

const Icon = <GroupIcon color={iconColorBOpaque} size="4rem" />;

/* eslint-disable react/no-array-index-key */
const DashboardBorrower = ({ data, renderLoading }) => (
  <GradientCard heading="Borrower Information" Icon={Icon}>
    <ListsContainer>
      {data.map((listData, i) => (
        <StyledTwoColumnList
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

export default DashboardBorrower;

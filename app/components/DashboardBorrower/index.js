/**
 * DashboardBorrower
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import { GroupIcon } from 'images/iconComponents';
import GradientCard from 'components/_shared/GradientCard';

import { ListsContainer, StyledTwoColumnList } from './styledComponents';

const Icon = <GroupIcon size="4rem" />;

/* eslint-disable react/no-array-index-key */
const DashboardBorrower = ({ data }) => (
  <GradientCard heading="Borrower Information" Icon={Icon}>
    <ListsContainer>
      {data.map((listData, i) => (
        <StyledTwoColumnList
          key={i}
          data={listData}
          numRows={6}
          smallRows={[2]}
        />
      ))}
    </ListsContainer>
  </GradientCard>
);

DashboardBorrower.propTypes = { data: T.arrayOf(T.object) };

export default DashboardBorrower;

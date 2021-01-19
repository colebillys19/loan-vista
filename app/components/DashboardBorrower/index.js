/**
 * DashboardBorrower
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';

import { ListsContainer, StyledKeyValueList } from './styledComponents';
import { MOCK_DATA } from './tests/mockData';

/* eslint-disable react/no-array-index-key */
const DashboardBorrower = ({ data }) => (
  <GradientCard heading="Borrower Information">
    <ListsContainer>
      {data.map((listData, i) => (
        <StyledKeyValueList key={i} data={listData} />
      ))}
    </ListsContainer>
  </GradientCard>
);

DashboardBorrower.propTypes = { data: T.arrayOf(T.object) };

// temp
DashboardBorrower.defaultProps = { data: MOCK_DATA };

export default DashboardBorrower;

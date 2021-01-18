/**
 * DashboardBorrower
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import GradientBorder from 'components/_base-ui/GradientBorder';

import {
  ListsContainer,
  SectionContainer,
  StyledH2,
  StyledKeyValueList,
} from './styledComponents';
import { MOCK_DATA } from './tests/mockData';

/* eslint-disable react/no-array-index-key */
const DashboardBorrower = ({ data }) => (
  <SectionContainer>
    <GradientBorder bottom="" top="-0.1rem" />
    <StyledH2>Borrower Information</StyledH2>
    <ListsContainer>
      {data.map((listData, i) => (
        <StyledKeyValueList key={i} data={listData} />
      ))}
    </ListsContainer>
    <GradientBorder bottom="-0.1rem" top="" />
  </SectionContainer>
);

DashboardBorrower.propTypes = { data: T.arrayOf(T.object) };

// temp
DashboardBorrower.defaultProps = { data: MOCK_DATA };

export default DashboardBorrower;

/**
 * DashboardLoan
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import GradientCard from 'components/_shared/GradientCard';
import { TextIcon } from 'images/iconComponents';

import StopsList from './StopsList';
import { ListsContainer, StyledTwoColumnList } from './styledComponents';

const Icon = <TextIcon size="4rem" />;

const DashboardLoan = ({ data: { balancesData, paymentData, stopsData } }) => (
  <GradientCard heading="Loan Information" Icon={Icon}>
    <ListsContainer>
      <StyledTwoColumnList data={balancesData} numRows={12} />
      <StyledTwoColumnList data={paymentData} numRows={12} />
    </ListsContainer>
    <StopsList data={stopsData} />
  </GradientCard>
);

DashboardLoan.propTypes = {
  data: T.shape({
    balancesData: T.object,
    paymentData: T.object,
    stopsData: T.arrayOf(T.object),
  }),
};

export default DashboardLoan;

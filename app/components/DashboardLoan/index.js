/**
 * DashboardLoan
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';
import { TextIcon } from 'images/icons';
import { appColorAOpaque } from 'styleConstants';

import StopsList from './StopsList';
import { ListsContainer, StyledKeyValueList } from './styledComponents';
import {
  MOCK_BALANCES_DATA,
  MOCK_PAYMENT_DATA,
  MOCK_STOPS_DATA,
} from './tests/mockData';

const Icon = <TextIcon color={appColorAOpaque} size="4rem" />;

const DashboardLoan = ({ data: { balancesData, paymentData, stopsData } }) => (
  <GradientCard heading="Loan Information" Icon={Icon}>
    <ListsContainer>
      <StyledKeyValueList data={balancesData} />
      <StyledKeyValueList data={paymentData} />
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

// temp
DashboardLoan.defaultProps = {
  data: {
    balancesData: MOCK_BALANCES_DATA,
    paymentData: MOCK_PAYMENT_DATA,
    stopsData: MOCK_STOPS_DATA,
  },
};

export default DashboardLoan;

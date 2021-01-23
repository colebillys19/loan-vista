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

const Icon = <TextIcon color={appColorAOpaque} size="4rem" />;

const DashboardLoan = ({
  data: { balancesData, paymentData, stopsData },
  renderLoading,
}) => (
  <GradientCard heading="Loan Information" Icon={Icon}>
    <ListsContainer>
      <StyledKeyValueList
        data={balancesData}
        numRows={12}
        renderLoading={renderLoading}
      />
      <StyledKeyValueList
        data={paymentData}
        numRows={12}
        renderLoading={renderLoading}
      />
    </ListsContainer>
    <StopsList data={stopsData} renderLoading={renderLoading} />
  </GradientCard>
);

DashboardLoan.propTypes = {
  data: T.shape({
    balancesData: T.object,
    paymentData: T.object,
    stopsData: T.arrayOf(T.object),
  }),
  renderLoading: T.bool.isRequired,
};

export default DashboardLoan;

/**
 * DashboardLoan
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import GradientCard from 'components/_base-ui/GradientCard';
import { TextIcon } from 'images/icons';
import { appColorA, appColorB } from 'styleConstants';

import StopsList from './StopsList';
import { ListsContainer, StyledTwoColumnList } from './styledComponents';

const Icon = <TextIcon color={appColorA} size="4rem" />;

const DashboardLoan = ({
  data: { balancesData, paymentData, stopsData },
  renderLoading,
}) => (
  <GradientCard color={appColorB} heading="Loan Information" Icon={Icon}>
    <ListsContainer>
      <StyledTwoColumnList
        data={balancesData}
        numRows={12}
        renderLoading={renderLoading}
      />
      <StyledTwoColumnList
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

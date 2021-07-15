/**
 * SidebarView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import SidebarHeader from 'components/SidebarHeader';
import SidebarSummary from 'components/SidebarSummary';

import {
  Gradient,
  SidebarContainer,
  SidebarContentContainer,
} from './styledComponents';

const SidebarView = ({
  pathname,
  sidebarHeaderData,
  sidebarSummariesData: {
    callsSummaryData,
    health,
    loanSummaryData,
    paymentSummaryData,
    serviceSummaryData,
  },
}) => (
  <SidebarContainer>
    <SidebarContentContainer>
      <Gradient />
      <SidebarHeader
        pathname={pathname}
        sidebarHeaderData={sidebarHeaderData}
      />
      <SidebarSummary
        data={loanSummaryData}
        health={health}
        numRows={14}
        title="Loan"
      />
      <SidebarSummary data={paymentSummaryData} numRows={6} title="Payment" />
      <SidebarSummary data={callsSummaryData} numRows={6} title="Calls" />
      <SidebarSummary data={serviceSummaryData} numRows={3} title="Service" />
    </SidebarContentContainer>
  </SidebarContainer>
);

SidebarView.propTypes = {
  pathname: T.string.isRequired,
  sidebarHeaderData: T.object.isRequired,
  sidebarSummariesData: T.shape({
    callsSummaryData: T.array,
    health: T.number,
    loanSummaryData: T.array,
    paymentSummaryData: T.array,
    serviceSummaryData: T.array,
  }).isRequired,
};

export default SidebarView;

/**
 * SidebarContent
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import SidebarHeader from 'components/SidebarHeader';
import SidebarSummary from 'components/SidebarSummary';
import { SidebarContentWrapper } from '../styledComponents';

const SidebarContent = ({
  pathname,
  sidebarHeaderData,
  sidebarSummariesData: {
    callsSummaryData,
    loanSummaryData,
    paymentSummaryData,
    serviceSummaryData,
  },
}) => (
  <SidebarContentWrapper>
    <SidebarHeader pathname={pathname} sidebarHeaderData={sidebarHeaderData} />
    <SidebarSummary data={loanSummaryData} iconName="bullet" title="Loan" />
    <SidebarSummary
      data={paymentSummaryData}
      iconName="bullet"
      title="Payment"
    />
    <SidebarSummary data={callsSummaryData} iconName="bullet" title="Calls" />
    <SidebarSummary
      data={serviceSummaryData}
      iconName="bullet"
      title="Service"
    />
  </SidebarContentWrapper>
);

SidebarContent.propTypes = {
  pathname: T.string.isRequired,
  sidebarHeaderData: T.object.isRequired,
  sidebarSummariesData: T.shape({
    callsSummaryData: T.array,
    loanSummaryData: T.array,
    paymentSummaryData: T.array,
    serviceSummaryData: T.array,
  }).isRequired,
};

export default SidebarContent;

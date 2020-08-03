/**
 * Sidebar
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import SidebarHeader from 'components/SidebarHeader';
import SidebarSummary from 'components/SidebarSummary';
import ConditionalRender from 'components/_baseUI/ConditionalRender';

import {
  SidebarContainer,
  SidebarContentContainer,
  SidebarDetailPlaceholder,
  SidebarHeaderPlaceholder,
} from './styledComponents';

const Sidebar = ({
  loading,
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
      <ConditionalRender
        Component={
          <SidebarHeader
            pathname={pathname}
            sidebarHeaderData={sidebarHeaderData}
          />
        }
        FallbackComponent={<SidebarHeaderPlaceholder />}
        shouldRender={!loading}
      />
      <ConditionalRender
        Component={
          <SidebarSummary data={loanSummaryData} health={health} title="Loan" />
        }
        FallbackComponent={<SidebarDetailPlaceholder height="29.4rem" />}
        shouldRender={!loading}
      />
      <ConditionalRender
        Component={<SidebarSummary data={paymentSummaryData} title="Payment" />}
        FallbackComponent={<SidebarDetailPlaceholder height="14.7rem" />}
        shouldRender={!loading}
      />
      <ConditionalRender
        Component={<SidebarSummary data={callsSummaryData} title="Calls" />}
        FallbackComponent={<SidebarDetailPlaceholder height="14.7rem" />}
        shouldRender={!loading}
      />
      <ConditionalRender
        Component={<SidebarSummary data={serviceSummaryData} title="Service" />}
        FallbackComponent={<SidebarDetailPlaceholder height="10.4rem" />}
        shouldRender={!loading}
      />
    </SidebarContentContainer>
  </SidebarContainer>
);

Sidebar.propTypes = {
  loading: T.bool.isRequired,
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

export default Sidebar;

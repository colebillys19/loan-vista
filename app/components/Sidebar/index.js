/**
 * Sidebar
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import SidebarHeader from 'components/SidebarHeader';
import SidebarSummary from 'components/SidebarSummary';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import { isValidRoute } from 'utils/globalHelpers';

import {
  SidebarContainer,
  SidebarContentContainer,
  SidebarSectionPlaceholder,
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
}) => {
  const showComponents = !loading && isValidRoute(pathname);

  return (
    <SidebarContainer>
      <SidebarContentContainer>
        <ConditionalRender
          Component={
            <SidebarHeader
              pathname={pathname}
              sidebarHeaderData={sidebarHeaderData}
            />
          }
          FallbackComponent={
            <SidebarSectionPlaceholder height="24.1rem" isHeader />
          }
          shouldRender={showComponents}
        />
        <ConditionalRender
          Component={
            <SidebarSummary
              data={loanSummaryData}
              health={health}
              title="Loan"
            />
          }
          FallbackComponent={<SidebarSectionPlaceholder height="31.5rem" />}
          shouldRender={showComponents}
        />
        <ConditionalRender
          Component={
            <SidebarSummary data={paymentSummaryData} title="Payment" />
          }
          FallbackComponent={<SidebarSectionPlaceholder height="14.7rem" />}
          shouldRender={showComponents}
        />
        <ConditionalRender
          Component={<SidebarSummary data={callsSummaryData} title="Calls" />}
          FallbackComponent={<SidebarSectionPlaceholder height="14.7rem" />}
          shouldRender={showComponents}
        />
        <ConditionalRender
          Component={
            <SidebarSummary data={serviceSummaryData} title="Service" />
          }
          FallbackComponent={<SidebarSectionPlaceholder height="10.4rem" />}
          shouldRender={showComponents}
        />
      </SidebarContentContainer>
    </SidebarContainer>
  );
};

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

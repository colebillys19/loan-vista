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
  Gradient,
  SidebarContainer,
  SidebarContentContainer,
  SidebarSectionPlaceholder,
} from './styledComponents';

const Sidebar = ({
  error,
  loading,
  loanNumber,
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
  const showComponents =
    isValidRoute(pathname) && !error && !!loanNumber && !loading;

  return (
    <SidebarContainer>
      <SidebarContentContainer>
        <Gradient position="top" />
        <SidebarHeader
          loading={loading}
          pathname={pathname}
          sidebarHeaderData={sidebarHeaderData}
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
  error: T.oneOfType([T.bool, T.string]).isRequired,
  loading: T.bool.isRequired,
  loanNumber: T.string.isRequired,
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

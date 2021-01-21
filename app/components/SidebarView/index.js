/**
 * SidebarView
 * @description ...
 */

import React from 'react';
import T from 'prop-types';

import SidebarHeader from 'components/SidebarHeader';
import SidebarSummary from 'components/SidebarSummary';
import { isValidRoute } from 'utils/globalHelpers';

import {
  Gradient,
  SidebarContainer,
  SidebarContentContainer,
} from './styledComponents';

const SidebarView = ({
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
        <Gradient />
        <SidebarHeader
          loading={loading}
          pathname={pathname}
          renderLoading={!showComponents}
          sidebarHeaderData={sidebarHeaderData}
        />
        <SidebarSummary
          data={loanSummaryData}
          health={health}
          numRows={14}
          renderLoading={!showComponents}
          title="Loan"
        />
        <SidebarSummary
          data={paymentSummaryData}
          numRows={6}
          renderLoading={!showComponents}
          title="Payment"
        />
        <SidebarSummary
          data={callsSummaryData}
          numRows={6}
          renderLoading={!showComponents}
          title="Calls"
        />
        <SidebarSummary
          data={serviceSummaryData}
          numRows={3}
          renderLoading={!showComponents}
          title="Service"
        />
      </SidebarContentContainer>
    </SidebarContainer>
  );
};

SidebarView.propTypes = {
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

export default SidebarView;

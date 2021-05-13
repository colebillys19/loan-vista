/**
 * App.js
 * @description ...
 */

import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';

import GlobalStyles from 'globalStyles';

import AppHeader from 'components/AppHeader';
import BackToTopButton from 'components/_base-ui/BackToTopButton';
import Calls from 'containers/Calls';
import ConditionalRender from 'components/_base-ui/ConditionalRender';
import DashboardView from 'components/DashboardView';
import Documents from 'containers/Documents';
import EscrowView from 'components/EscrowView';
import Main from 'containers/Main';
import MainContainer from 'components/_base-ui/MainContainer';
import NotFoundView from 'components/NotFoundView';
import Payments from 'containers/Payments';
import SidebarView from 'components/SidebarView';
import TabNav from 'components/TabNav';
import TabView from 'components/TabView';

import { makeSelectPathname } from './selectors';

const App = ({ dispatchNavigation, pathname }) => (
  <Fragment>
    <AppHeader />
    <TabNav dispatchNavigation={dispatchNavigation} pathname={pathname} />
    <Main
      render={({
        dashboardBorrowerData,
        dashboardListsData,
        dashboardLoanData,
        error,
        escrowEscrowData,
        escrowHomeownersData,
        escrowMortgageData,
        escrowTaxesData,
        loading,
        loanNumber,
        sidebarHeaderData,
        sidebarSummariesData,
      }) => (
        <MainContainer>
          <SidebarView
            error={error}
            loading={loading}
            loanNumber={loanNumber}
            pathname={pathname}
            sidebarHeaderData={sidebarHeaderData}
            sidebarSummariesData={sidebarSummariesData}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <DashboardView
                  dashboardBorrowerData={dashboardBorrowerData}
                  dashboardListsData={dashboardListsData}
                  dashboardLoanData={dashboardLoanData}
                  dispatchNavigation={dispatchNavigation}
                  error={error}
                  loading={loading}
                  loanNumber={loanNumber}
                />
              )}
            />
            <Route
              exact
              path="/calls"
              render={() => <TabView Container={Calls} id="calls" />}
            />
            <Route
              exact
              path="/documents"
              render={() => <TabView Container={Documents} id="documents" />}
            />
            <Route
              exact
              path="/payments"
              render={() => <TabView Container={Payments} id="payments" />}
            />
            <Route
              exact
              path="/escrow"
              render={() => (
                <EscrowView
                  error={error}
                  escrowEscrowData={escrowEscrowData}
                  escrowHomeownersData={escrowHomeownersData}
                  escrowMortgageData={escrowMortgageData}
                  escrowTaxesData={escrowTaxesData}
                  loading={loading}
                  loanNumber={loanNumber}
                />
              )}
            />
            <Route component={NotFoundView} />
          </Switch>
          <ConditionalRender
            Component={BackToTopButton}
            shouldRender={['/calls', '/documents', '/payments'].includes(
              pathname,
            )}
          />
        </MainContainer>
      )}
    />
    <GlobalStyles />
  </Fragment>
);

App.propTypes = {
  dispatchNavigation: T.func.isRequired,
  pathname: T.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pathname: makeSelectPathname(),
});

const mapDispatchToProps = (dispatch) => ({
  dispatchNavigation: (pathname) => dispatch(push(pathname)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);

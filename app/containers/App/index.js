/**
 * App.js
 * @description ...
 */

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import T from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'connected-react-router';

import GlobalStyle from 'global-styles';

import Calls from 'containers/Calls';
import Emails from 'containers/Emails';
import Main from 'containers/Main';
import Payments from 'containers/Payments';

import Header from 'components/Header';
import Sandbox from 'components/Sandbox';
import HomeView from 'components/HomeView';
import MiscView from 'components/MiscView';
import NotFoundView from 'components/NotFoundView';
import Sidebar from 'components/Sidebar';
import TabNav from 'components/TabNav';

import { makeSelectPathname } from './selectors';
import { MainContainer } from './styledComponents';

const App = ({ dispatchNavigation, pathname }) => (
  <Fragment>
    <Header />
    <TabNav dispatchNavigation={dispatchNavigation} pathname={pathname} />
    <Main
      render={({ loading, sidebarHeaderData, sidebarSummariesData }) => (
        <MainContainer>
          <Sidebar
            loading={loading}
            pathname={pathname}
            sidebarHeaderData={sidebarHeaderData}
            sidebarSummariesData={sidebarSummariesData}
          />
          <Switch>
            <Route component={HomeView} exact path="/" />
            <Route component={Calls} exact path="/calls" />
            <Route component={Emails} exact path="/emails" />
            <Route component={Payments} exact path="/payments" />
            <Route component={MiscView} exact path="/misc" />
            <Route component={Sandbox} exact path="/test" />
            <Route component={NotFoundView} />
          </Switch>
        </MainContainer>
      )}
    />
    <GlobalStyle />
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

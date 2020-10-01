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

import GlobalStyles from 'globalStyles';

import Calls from 'containers/Calls';
import Documents from 'containers/Documents';
import Main from 'containers/Main';
import Payments from 'containers/Payments';

import HomeView from 'components/HomeView';
import MiscView from 'components/MiscView';
import NotFoundView from 'components/NotFoundView';
import Sidebar from 'components/Sidebar';
import TabNav from 'components/TabNav';
import Header from 'components/_base-ui/Header';
import MainContainer from 'components/_base-ui/MainContainer';

import { makeSelectPathname } from './selectors';

const App = ({ dispatchNavigation, pathname }) => (
  <Fragment>
    <Header />
    <TabNav dispatchNavigation={dispatchNavigation} pathname={pathname} />
    <Main
      render={({ error, loading, sidebarHeaderData, sidebarSummariesData }) => (
        <MainContainer>
          <Sidebar
            error={error}
            loading={loading}
            pathname={pathname}
            sidebarHeaderData={sidebarHeaderData}
            sidebarSummariesData={sidebarSummariesData}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <HomeView error={error} loading={loading} pathname={pathname} />
              )}
            />
            <Route component={Calls} exact path="/calls" />
            <Route component={Documents} exact path="/documents" />
            <Route component={Payments} exact path="/payments" />
            <Route
              exact
              path="/misc"
              render={() => (
                <MiscView error={error} loading={loading} pathname={pathname} />
              )}
            />
            <Route component={NotFoundView} />
          </Switch>
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

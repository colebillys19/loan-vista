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
import Home from 'containers/Home';
import Payments from 'containers/Payments';

import Header from 'components/Header';
import MiscView from 'components/MiscView';
import NotFoundView from 'components/NotFoundView';
import Sidebar from 'components/Sidebar';
import TabNav from 'components/TabNav';

import { makeSelectPathname } from './selectors';
import { MainWrapper } from './styledComponents';

const App = ({ dispatchNavigation, pathname }) => (
  <Fragment>
    <Header />
    <TabNav dispatchNavigation={dispatchNavigation} pathname={pathname} />
    <MainWrapper>
      <Sidebar pathname={pathname} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calls" component={Calls} />
        <Route exact path="/emails" component={Emails} />
        <Route exact path="/payments" component={Payments} />
        <Route exact path="/misc" component={MiscView} />
        <Route component={NotFoundView} />
      </Switch>
    </MainWrapper>
    <GlobalStyle />
  </Fragment>
);

App.propTypes = { dispatchNavigation: T.func.isRequired, pathname: T.string.isRequired };

const mapStateToProps = createStructuredSelector({
  pathname: makeSelectPathname(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchNavigation: (pathname) => dispatch(push(pathname)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);

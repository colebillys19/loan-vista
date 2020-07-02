/**
 * App.js
 * @description ...
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Calls from 'containers/Calls/Loadable';
import Emails from 'containers/Emails/Loadable';
import Home from 'containers/Home/Loadable';
import Payments from 'containers/Payments/Loadable';

import EscrowView from 'components/EscrowView';
import NotFoundView from 'components/NotFoundView';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calls" component={Calls} />
        <Route exact path="/emails" component={Emails} />
        <Route exact path="/payments" component={Payments} />
        <Route exact path="/escrow" component={EscrowView} />
        <Route component={NotFoundView} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

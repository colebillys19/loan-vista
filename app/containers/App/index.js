/**
 * App.js
 * @description ...
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home/Loadable';
import NotFound from 'containers/NotFound/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

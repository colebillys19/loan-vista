/**
 *
 * App.js
 *
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'containers/Home/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

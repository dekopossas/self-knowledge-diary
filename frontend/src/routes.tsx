// Packages
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Days from './pages/Days';
import Home from './pages/Home';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/calendario" component={Days} />
    </Switch>
  );
}

export default Routes;

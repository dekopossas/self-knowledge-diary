// Packages
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Days from './pages/Days';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/calendario" exact component={Days} />
    </Switch>
  );
}

export default Routes;

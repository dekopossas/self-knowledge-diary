// Packages
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Days from './pages/Days';
import FormDay from './pages/Days/FormDay';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/calendario" exact component={Days} />
      <Route path="/calendario/nova-observacao" exact component={FormDay} />
    </Switch>
  );
}

export default Routes;

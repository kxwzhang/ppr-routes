import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute, RestrictedRoute } from './components/util/route_util';
import { Splash } from './components/Splash';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Splash} />

      </Switch>
    </div>
  );
}

export default App;

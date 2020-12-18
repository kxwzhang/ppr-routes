import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute, RestrictedRoute } from './components/util/route_util';
import { Splash } from './components/Splash';
import { Profile } from './components/Profile';

function App() {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path='/profile' component={Profile} />
        <Route exact path='/' component={Splash} />

      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute, RestrictedRoute } from './components/util/route_util';
import { Splash } from './components/Splash';
import { Profile } from './components/Profile';
import { Album } from './components/Album';

function App() {
  return (
    <div>
      <Switch>
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/ablum' component={Album} />
        <Route exact path='/' component={Splash} />

      </Switch>
    </div>
  );
}

export default App;

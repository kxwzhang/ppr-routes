import React, { useState, useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute, PrivateRoute, RestrictedRoute } from './components/util/route_util';
import { Splash } from './components/Splash';
import { Profile } from './components/Profile';
import { Album } from './components/Album';
import { Subscribe } from './components/Subscribe';

function App() {
  return (
    <div>
      <Switch>
        <ProtectedRoute exact path='/profile' component={Profile} />
        <ProtectedRoute exact path='/album' component={Album} />
        <ProtectedRoute exact path='/subscribe' component={Subscribe} />
        <Route exact path='/' component={Splash} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Private = ({ component: Component, ...args }) => {
  return (
    <Route 
      {...args} 
      render={props => isLoggedIn ? 
        <Component {...props} /> : <Redirect to='/' />}
    />
  );
};

const Restricted = ({ component: Component, ...args }) => {
  return (
    <Route 
      {...args}
      render={props => !isLoggedIn ? 
        <Component {...props} /> : <Redirect to='/signup' />}
    />
  );
};

export const PrivateRoute = withRouter(Private);
export const RestrictedRoute = withRouter(Restricted);
import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Private = ({ component: Component, ...args }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Route 
      {...args} 
      render={props => isAuthenticated ? 
        <Component {...props} /> : <Redirect to='/' />}
    />
  );
};

const Restricted = ({ component: Component, ...args }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Route 
      {...args}
      render={props => !isAuthenticated ? 
        <Component {...props} /> : <Redirect to='/login' />}
    />
  );
};

export const PrivateRoute = withRouter(Private);
export const RestrictedRoute = withRouter(Restricted);
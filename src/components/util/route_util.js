import React, { useContext } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Protected = ({ component: Component, ...args }) => {
  return (
    <Route 
      {...args}
      component={withAuthenticationRequired(Component, {
        onRedirecting: () => (<div></div>)
      })}
    />
  );
}

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

const Restricted = ({ component: Component, restricted, ...args }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Route 
      {...args}
      render={props => isAuthenticated && restricted ? 
        <Component {...props} /> : <Redirect to='/login' />}
    />
  );
};

export const ProtectedRoute = withRouter(Protected);
export const PrivateRoute = withRouter(Private);
export const RestrictedRoute = withRouter(Restricted);
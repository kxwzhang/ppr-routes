import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Private = () => {

};

const Restricted = () => {

};

export const PrivateRoute = withRouter(Private);
export const RestrictedRoute = withRouter(Restricted);
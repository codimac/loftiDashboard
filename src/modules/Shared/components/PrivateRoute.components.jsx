import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authSvc } from '@services/auth.services';
import { permissionsSvc } from '@services/permissions.services';

export const PrivateRoute = ({ component: Component, allowed, ...rest }) => (
  <Route {...rest} render={props => (
    authSvc.isAuth() && permissionsSvc.is(allowed || ['admin', 'student'])
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: {from: props.location} }} />
    )}
  />
);

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { authSvc } from '@services/auth.services';
import { permissionsSvc } from '@services/permissions.services';

export const PrivateRoute = ({ component: Component, allowed, ...rest }) => (
  <Route {...rest} render={props => (
    authSvc.isAuth() && permissionsSvc.is(allowed)
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: {from: props.location} }} />
    )}
  />
);

PrivateRoute.propTypes = {
};

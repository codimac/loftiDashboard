import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('ib_token')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: {from: props.location} }} />
  )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

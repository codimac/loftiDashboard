import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

/* eslint-disable react/prop-types */
export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('ib_token')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: {from: props.location} }} />
    )}
  />
);
/* eslint-enable */

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

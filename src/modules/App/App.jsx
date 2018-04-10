import React from 'react';
import Http from '@Shared/Http';
import { Route } from 'react-router-dom';

import Home from '@App/components/Home/Home.components';
import Login from '@App/containers/Login.containers';
import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <PrivateRoute exact path='/' allowed={['admin']} component={Home} />
        <Route path='/login' component={Login} />
      </React.Fragment>
    );
  }
}

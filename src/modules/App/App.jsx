import React from 'react';
import Http from '@Shared/Http';
import { Route, Switch } from 'react-router-dom';

import Home from '@App/components/Home/Home.components';
import Login from '@App/containers/Login.containers';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/login' component={Login} />
          <PrivateRoute path='/' allowed={['admin', 'student']} component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

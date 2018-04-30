import React from 'react';
import Http from '@Shared/Http';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '@App/components/Home/Home.components';
import Error from '@App/components/Error/Error.components';
import Login from '@App/containers/Login.containers';

import { PrivateRoute } from '@Shared/components/PrivateRoute.components';

export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/404' component={Error} />
          <PrivateRoute exact path='/' allowed={['admin', 'student']} component={Home} />
          <Redirect from='*' to='/404' />
        </Switch>
      </React.Fragment>
    );
  }
}

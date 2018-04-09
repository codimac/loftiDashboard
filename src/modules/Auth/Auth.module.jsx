import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '@shared/components/PrivateRoute.components';

import Dashboard from './components/Dashboard.components';
import Home from './components/Home.components';
import Login from './containers/Login.containers';

class AuthModule extends React.Component {

  render() {
    return (
      <React.Fragment>
        <PrivateRoute exact path='/' allowed={['admin']} component={Home} />
        {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
        <Route path='/login' component={Login} />
      </React.Fragment>
    );
  }

}

export default AuthModule;

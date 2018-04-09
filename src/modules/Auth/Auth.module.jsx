import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '@shared/components/PrivateRoute.components';

import Dashboard from './components/Dashboard.components';
import Home from './components/Home.components';
import Login from './containers/Login.containers';

class AuthModule extends React.Component {

  render() {
    return (
      <div>
        <PrivateRoute exact path='/' allowed={['admin']} component={Home} />
        <Route path='/login' component={Login} />
      </div>
    );
  }

}

export default AuthModule;

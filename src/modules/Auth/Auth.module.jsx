import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from '@shared/components/PrivateRoute.components';

import Home from './components/Home.components';
import Login from './containers/Login.containers';

class AuthModule extends React.Component {

  render() {
    return (
      <div>
        <PrivateRoute exact path='/' component={Home} />
        <Route path='/login' component={Login} />
      </div>
    );
  }

}

export default AuthModule;

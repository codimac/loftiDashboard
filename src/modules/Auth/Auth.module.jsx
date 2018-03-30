import React from 'react';

import Public from './components/Public.components';
import Protected from './components/Protected.components';
import Login from './components/Login.components';

class AuthModule extends React.Component {

  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }

}

export default AuthModule;

import React from 'react';
import Http from '@shared/Http';

import AuthModule from '@modules/Auth/Auth.module';

export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <AuthModule />
      </React.Fragment>
    );
  }
}

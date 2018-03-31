import React from 'react';
import Http from '@shared/Http';

import AuthModule from '@modules/Auth/AUth.module';

export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <h1>App</h1>
        <div>
          <AuthModule />
        </div>
      </React.Fragment>
    );
  }
}

import React from 'react';

import Nav from './components/Nav.components';
import Main from './components/Main.components';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Nav />
        <Main />
      </main>
    );
  }
}

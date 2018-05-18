import React from 'react';

import Router from '@App/App.router';
import './Main.styles';

class Main extends React.Component {

  render() {
    return (
      <section className="main">
        <Router />
      </section>
    );
  }
}

export default Main;

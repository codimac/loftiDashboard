import React from 'react';
import Counter from '@components/Counter';
import FetchData from '@containers/FetchData';

export default class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Counter title="counter" />
        <FetchData />
      </React.Fragment>
    );
  }
}

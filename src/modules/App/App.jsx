import React from 'react';

import Counter from '@modules/Counter/Counter.components';
import TodoListModule from '@modules/TodoList/TodoListModule';


export default class App extends React.Component {

  render() {
    return (
      <main>
        <Counter />
        <TodoListModule />
      </main>
    );
  }
}

import React from 'react';

import Counter from '@modules/Counter/Counter.components';
import TodoListModule from '@modules/TodoList/TodoListModule';
import ListPost from '@modules/Post/containers/List.containers';

export default class App extends React.Component {

  render() {
    return (
      <main>
        <Counter />
        <TodoListModule />
        <ListPost />
      </main>
    );
  }
}

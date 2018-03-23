import React from 'react';
import Counter from '@modules/Counter/Counter.components';
import VisibleTodoList from '@modules/TodoList/containers/VisibleTodoList.containers';
import TodoList from '@modules/TodoList/components/TodoList.components';

export default class App extends React.Component {

  render() {
    return (
      <main>
        <Counter />
        <VisibleTodoList />
      </main>
    );
  }
}

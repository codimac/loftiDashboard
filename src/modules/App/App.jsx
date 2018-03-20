import React from 'react';
import Counter from '@modules/Counter/Counter.components';
import TodoList from '@modules/TodoList/components/TodoList.components';
import AddTodo from '@modules/TodoList/containers/AddTodo.containers';

export default class App extends React.Component {

  render() {
    return (
      <main>
        <Counter />
        <AddTodo />
        <TodoList />
      </main>
    );
  }
}

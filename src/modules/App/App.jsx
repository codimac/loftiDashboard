import React from 'react';
import TodoList from '@modules/TodoList/components/TodoList';

export default class App extends React.Component {

  render() {
    return (
      <main>
        <TodoList />
      </main>
    );
  }
}

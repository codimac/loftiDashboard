import React from 'react';
import TodoList from '@components/TodoList/TodoList';
import Form from '@components/Form/Form';

export default class App extends React.Component {

  render() {
    return (
      <main>
        <TodoList />
        <Form />
      </main>
    );
  }
}

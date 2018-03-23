import React from 'react';

import AddTodo from './containers/AddTodo.containers';
import TdooList from './components/TodoList.components';

export default class TodoListModule extends React.Component {

  render() {
    return (
      <React.Fragment>
        <AddTodo />
        <TdooList />
      </React.Fragment>
    );
  }

}

import React from 'react';

import TodoList from './containers/VisibleTodoList.containers';
import Footer from './components/Footer.components';
import AddTodo from './containers/AddTodo.containers';

class TodoListModule extends React.Component {

  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default TodoListModule;

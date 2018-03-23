import React from 'react';

import TodoList from './containers/VisibleTodoList.containers';
import Footer from './components/Footer.components';

class TodoListModule extends React.Component {

  render() {
    return (
      <div>
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default TodoListModule;

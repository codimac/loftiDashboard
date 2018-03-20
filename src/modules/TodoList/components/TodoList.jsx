import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {

  render() {
    const { todos, toggleTodo } = this.props;
    console.log('todo', todos);
    return (
      <h1>cou</h1>
    );
  }

}

export default TodoList;

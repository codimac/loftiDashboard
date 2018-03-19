import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoItem from '@components/TodoItem/TodoItem';

const mapStateToProps = state => {
  return { todos: state.todoList.todos };
};

class TodoList extends React.Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  render() {
    return (
      <div>
        <h4>Todo List</h4>
        <ul className="list">
          {this.props.todos.map(todo =>
            <TodoItem key={todo.id} todo={todo} />
          )}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(TodoList);

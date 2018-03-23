import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo.components';

class TodoList extends React.Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
  };

  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <div>
        <h1>TodoList</h1>
        <ul>
          {
            todos.map(todo =>
              <Todo key={todo.id} todo={todo} onClick={() => toggleTodo(todo.id)} />
            )
          }
        </ul>
        {
          todos.length === 0 && <p>Pas de todos</p>
        }
      </div>
    );
  }

}

export default TodoList;

import React from 'react';
import PropTypes from 'prop-types';

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
        <h1>Bonjour</h1>
        <ul>
          {
            todos.map(todo =>
              <li key={todo.id}>{todo.title}</li>
            )
          }
        </ul>
      </div>
    );
  }

}

export default TodoList;

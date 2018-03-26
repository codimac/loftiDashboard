import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {

  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
  };

  render() {
    const { todo, onClick } = this.props;
    return (
      <li onClick={onClick} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.title}</li>
    );
  }
}

export default Todo;

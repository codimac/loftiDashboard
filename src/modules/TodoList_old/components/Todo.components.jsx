import React from 'react';
import PropTypes from 'prop-types';
import './Todo.styles.scss';

class Todo extends React.Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { onClick, todo } = this.props;
    return (
      <li>
        <p>{todo.title}</p>
        <button onClick={onClick}>Delete</button>
      </li>
    );
  }

}
export default Todo;

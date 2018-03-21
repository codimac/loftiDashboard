import React from 'react';
import PropTypes from 'prop-types';

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
      <li onClick={onClick}>{todo.title}</li>
    );
  }

}
export default Todo;

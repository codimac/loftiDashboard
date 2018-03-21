import React from 'react';
import PropTypes from 'prop-types';
import './Todo.styles.scss';

class Todo extends React.Component {

  static propTypes = {
    // onClick: PropTypes.func.isRequired,
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { todo } = this.props;
    return (
      <li>{todo.title}</li>
    );
  }

}
export default Todo;

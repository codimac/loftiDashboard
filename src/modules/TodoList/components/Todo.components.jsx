import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <li>{this.props.title}</li>
    );
  }

}

export default Todo;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TodoItem extends React.Component {

/*   static propTypes = {
    todo: PropTypes.object
  };
 */
  render() {
    console.log('PROPS', this.props);
    return (
      <li>{this.props.todo.title}</li>
    );
  }

}

export default connect()(TodoItem);

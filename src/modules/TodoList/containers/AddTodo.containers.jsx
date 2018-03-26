import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todoList.actions';

class AddTodo extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  render() {
    let input;
    const { dispatch } = this.props;
    return (
      <div>
        <form onSubmit={ev => {
          ev.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
        >
          <input ref={node => input = node} />
          <button type="submit">
            AddTodo
          </button>
        </form>
      </div>
    );
  }

}

export default connect()(AddTodo);

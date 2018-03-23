import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '@modules/TodoList_old/actions/TodoList.actions';

class AddTodo extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { dispatch } = this.props;
    let input;
    return (
      <div>
        <h1>Form</h1>
        <form
          onSubmit={ev => {
            ev.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            dispatch(addTodo(input.value));
            input.value = '';
          }}
        >
          <input ref={node => input = node} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);

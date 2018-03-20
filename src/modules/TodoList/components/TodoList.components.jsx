import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Todo from './Todo.components';

class TodoList extends React.Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const { todos } = this.props;
    return (
      <React.Fragment>
        <h1>TodoList</h1>
        <ul>
          {todos.map(todo =>
            <Todo key={todo.id} {...todo} />
          )}
        </ul>
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);

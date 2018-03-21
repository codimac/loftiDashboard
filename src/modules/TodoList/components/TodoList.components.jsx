import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Todo from '@modules/TodoList/components/Todo.components';
import { removeTodo } from '@modules/TodoList/actions/TodoList.actions';

class TodoList extends React.Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
    ).isRequired,
    removeTodo: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <h1>TodoList</h1>
        <ul>
          {this.props.todos.slice(0, this.props.count).map(todo =>
            <Todo key={todo.id} todo={todo} onClick={() => this.props.removeTodo(todo.id)} />
          )}
        </ul>
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => ({
  todos: state.todos,
  count: state.count
});

const mapDispatchToProps = dispatch => bindActionCreators({removeTodo}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

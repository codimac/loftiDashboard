import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTodos } from '@modules/TodoList_old/reducers/TodoList.reducers';

import Todo from '@modules/TodoList_old/components/Todo.components';
import { removeTodo } from '@modules/TodoList_old/actions/TodoList.actions';

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
            <Todo onClick={() => this.props.removeTodo(todo.id)} key={todo.id} todo={todo} />
          )}
        </ul>
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => ({
  todos: getTodos(state),
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

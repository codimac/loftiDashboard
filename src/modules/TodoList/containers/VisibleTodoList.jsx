import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '@modules/TodoList/actions/TodoList.actions';
import constants from '@modules/TodoList/constants/TodoList.constants';
import TodoList from '@modules/TodoList/components/TodoList';

console.log('list', TodoList);

const getVisibletTodos = (todos, filter) => {

  switch (filter) {

    case constants.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);

    case constants.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);

    case constants.SHOW_ALL:
    default:
      return todos;
  }

}

const mapStateToProps = state => ({
  todos: getVisibletTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

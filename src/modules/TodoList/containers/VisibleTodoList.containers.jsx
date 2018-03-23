import { connect } from 'react-redux';

import { toggleTodo } from '../actions/todoList.actions';
import { getTodos } from '../reducers/todos.reducers';
import { getFilter } from '../reducers/visibilityFilter.reducers';
import TodoList from '../components/TodoList.components';
import types from '../constants/visibilityFilter.constants';

const getVisibleTodos = (todos, filter) => {

  switch (filter) {

    case types.SHOW_ALL:
      return todos;

    case types.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);

    case types.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);

    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(getTodos(state), getFilter(state))
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

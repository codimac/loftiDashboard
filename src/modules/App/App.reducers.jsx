import { combineReducers } from 'redux';

import counterReducer from '@modules/Counter/Counter.reducers';
import todosReducer from '@modules/TodoList/reducers/todos.reducers';
import visibilityFilterReducer from '@modules/TodoList/reducers/visibilityFilter.reducers';

const rootReducer = combineReducers({
  count: counterReducer,
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
});

export default rootReducer;

import { combineReducers } from 'redux';

import counterReducer from '@modules/Counter/Counter.reducers';
import todoListReducer from '@modules/TodoList/reducers/TodoList.reducers';
import visibilityFilterReducer from '@modules/TodoList/reducers/VisibilityFilter.reducers';

const reducers = {
  counterReducer,
  todoListReducer,
  visibilityFilterReducer
};

const rootReducer = combineReducers({
  count: counterReducer,
  todos: todoListReducer,
  visibilityFilter: visibilityFilterReducer
});

export default rootReducer;

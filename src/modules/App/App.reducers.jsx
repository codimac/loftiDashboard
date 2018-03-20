import { combineReducers } from 'redux';

import counterReducer from '@modules/Counter/Counter.reducers';
import todoListReducer from '@modules/TodoList/reducers/TodoList.reducers';

const rootReducer = combineReducers({
  count: counterReducer,
  todos: todoListReducer
});

export default rootReducer;

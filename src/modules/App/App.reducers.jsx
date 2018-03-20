import { combineReducers } from 'redux';

import todoListReducer from '@modules/TodoList/reducers/TodoList.reducers';
import visibilityReducer from '@modules/TodoList/reducers/Visibility.reducers';

const rootReducer = combineReducers({
  todoList: todoListReducer,
  visibilityFilter: visibilityReducer
});

export default rootReducer;

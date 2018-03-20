import { combineReducers } from 'redux';

import todoListReducer from '@components/TodoList/TodoList.reducers';
import visibilityReducer from '@components/TodoList/Visibility/Visibility.reducers';

const rootReducer = combineReducers({
  todoList: todoListReducer,
  visibilityFilter: visibilityReducer
});

export default rootReducer;

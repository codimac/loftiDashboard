import { combineReducers } from 'redux';

import TodoListReducer from '@components/TodoList/TodoList.reducers';

const rootReducer = combineReducers({
  todoList: TodoListReducer
});

export default rootReducer;

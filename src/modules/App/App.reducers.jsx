import { combineReducers } from 'redux';

import counterReducer from '@modules/Counter/Counter.reducers';
import todosReducer from '@modules/TodoList/reducers/todos.reducers';
import visibilityFilterReducer from '@modules/TodoList/reducers/visibilityFilter.reducers';
import postReducer from '@modules/Post/reducers/post.reducers';

const rootReducer = combineReducers({
  count: counterReducer,
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  posts: postReducer
});

export default rootReducer;

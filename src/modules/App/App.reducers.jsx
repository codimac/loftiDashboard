import { combineReducers } from 'redux';

import counterReducer from '@modules/Counter/Counter.reducers';
import todosReducer from '@modules/TodoList/reducers/todos.reducers';
import visibilityFilterReducer from '@modules/TodoList/reducers/visibilityFilter.reducers';
import postListReducer from '@modules/Post/reducers/list.reducers';

const rootReducer = combineReducers({
  count: counterReducer,
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,

  // posts
  list_posts: postListReducer
});

export default rootReducer;

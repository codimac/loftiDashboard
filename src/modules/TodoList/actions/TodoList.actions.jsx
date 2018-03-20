import constants from '@modules/TodoList/constants/TodoList.constants';

let nextTotoId = 0;
export const addTodo = text => ({
  type: constants.ADD_TODO,
  payload: {
    id: nextTotoId++,
    text
  }
});

export const toggleTodo = id => ({
  type: constants.TOGGLE_TODO,
  payload: {
    id
  }
});

export const setVisibilityFilter = filter => ({
  type: constants.SET_VISIBILITY_FILTER,
  payload: {
    filter
  }
});

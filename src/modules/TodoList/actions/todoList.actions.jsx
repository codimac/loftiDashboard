import types from '../constants/todoList.constants';

let nextTodoId = 0;
export const addTodo = todo => ({
  type: types.ADD_TODO,
  payload: {
    id: nextTodoId++,
    title: todo,
    completed: false
  }
});


export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  payload: {
    id
  }
});

export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  payload: {
    filter
  }
});

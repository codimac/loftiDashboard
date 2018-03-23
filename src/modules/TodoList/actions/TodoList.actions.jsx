import types from '../constants/todoList.constants';

let nextTodoId = 0;
export const addTodo = todo => ({
  type: types.ADD_TODO,
  payload: {
    id: nextTodoId++,
    title: todo
  }
});

export const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
});
/*
export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  payload: {
    filter
  }
}); */

export const setVisibilityFilter = filter => {
  console.log('ici set');
  return {
    type: types.SET_VISIBILITY_FILTER,
  };
};

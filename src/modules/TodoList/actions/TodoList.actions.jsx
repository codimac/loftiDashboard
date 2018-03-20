import types from '@modules/TodoList/constants/TodoList.constants';

let nextTodoId = 1;
export const addTodo = todo => ({
  type: types.ADD_TODO,
  payload: {
    id: nextTodoId++,
    title: todo
  }
});

export const removeTodo = id => ({
  type: types.ADD_TODO,
  payload: {
    id
  }
});


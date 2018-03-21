import types from '@modules/TodoList/constants/TodoList.constants';

let nextTodoId = 0;
export const addTodo = todo => ({
  type: types.ADD_TODO,
  payload: {
    id: nextTodoId++,
    title: todo
  }
});

export const removeTodo = id => ({
  type: types.REMOVE_TODO,
  payload: {
    id
  }
});


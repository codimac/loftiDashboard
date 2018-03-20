import types from '@modules/TodoList/constants/TodoList.constants';

const nextTodoId = 0;
export const addTodo = todo => ({
  type: this.ADD_TODO,
  payload: {
    id: this.nextTodoId++,
    ...todo
  }
});

export const removeTodo = id => ({
  type: this.ADD_TODO,
  payload: {
    id
  }
});


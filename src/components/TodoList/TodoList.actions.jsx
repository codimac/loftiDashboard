import { constants } from './TodoList.constants';

export function addTodo(todo) {
  return {
    type: constants.ADD_TODO,
    payload: todo
  };
}

import { constants } from './App.constant';


export function addTodo(todo) {
  return {
    type: constants.ADD_TODO,
    payload: todo
  };
}

import { initialState } from './TodoList.states';
import { addTodo } from './TodoList.actions';
import { constants } from './TodoList.constants';

const TodoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_TODO:
      return {...state, todos: [
        ...state.todos, action.payload
      ]};

    default:
      return state;
  }
};

export default TodoListReducer;

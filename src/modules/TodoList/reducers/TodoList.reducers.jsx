import constants from '@modules/TodoList/constants/TodoList.constants';
import { initialTodoListState } from '@modules/TodoList/states/TodoList.states';

const todoListReducer = (state = initialTodoListState, action) => {
  switch (action.type) {

    case constants.ADD_TODO:
      return [
        ...state, {
          ...action.payload,
          completed: false
        }
      ];

    case constants.TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.payload.id
          ? {...todo, completed: !todo.completed}
          : todo
        )
      );

    default:
      return state;
  }
};

export default todoListReducer;

import types from '@modules/TodoList/constants/todoList.constants';
import todoListInitialState from '@modules/TodoList/states/todoList.states';

const todosReducer = (state = todoListInitialState, action) => {

  switch (action.type) {

    case types.ADD_TODO:
      return [
        ...state,
        {
          ...action.payload
        }
      ];

    case types.TOGGLE_TODO:
      return state.map(todo => (todo.id === action.payload.id ? {
        ...todo, completed: !todo.completed
      } : todo));

    default:
      return state;
  }

};

export default todosReducer;

export const getTodos = state => state.todos;

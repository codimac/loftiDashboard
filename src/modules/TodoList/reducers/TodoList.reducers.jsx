import constants from '@modules/TodoList/constants/TodoList.constants';

const todoListReducer = (state = [], action) => {
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

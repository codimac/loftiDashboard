import initialTodoListState from '@modules/TodoList/states/TodoList.states';
import types from '@modules/TodoList/constants/TodoList.constants';

const todoListReducer = (state = initialTodoListState, action) => {

  switch (action.type) {

    case types.ADD_TODO:
      return [
        ...state, {
          ...action.payload
        }
      ];

    case types.REMOVE_TODO:
      return 'ok';

    default:
      return state;
  }

};

export default todoListReducer;

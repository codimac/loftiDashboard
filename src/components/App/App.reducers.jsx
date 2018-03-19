import { initialState } from './App.states';
import { TodoActions } from './App.actions';
import { constants } from './App.constant';

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case constants.ADD_TODO:
      return {...state, todos: [
        ...state.todos, action.payload
      ]};

    default:
      return state;
  }

};

export default rootReducer;

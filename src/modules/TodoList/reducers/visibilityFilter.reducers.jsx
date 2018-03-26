import filterTypes from '../constants/visibilityFilter.constants';
import todoTypes from '../constants/todoList.constants';

const visibilityFilterReducer = (state = filterTypes.SHOW_ALL, action) => {

  switch (action.type) {

    case todoTypes.SET_VISIBILITY_FILTER:
      return action.payload.filter;

    default:
      return state;

  }

};

export default visibilityFilterReducer;

export const getFilter = state => state.visibilityFilter;

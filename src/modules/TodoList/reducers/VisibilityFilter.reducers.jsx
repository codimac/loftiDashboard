import initialVisibilityFilterState from '@modules/TodoList/states/VisibilityFilter.states';
import types from '@modules/TodoList/constants/VisibilityFilter.constants';

const visibilityFilterReducer = (state = initialVisibilityFilterState, action) => {

  switch (action.type) {

    case types.SHOW_ALL:
      return state;

    case types.SHOW_COMPLETED:
      return state;

    case types.SHOW_ACTIVE:
      return state;

    default:
      return state;
  }
};

export default visibilityFilterReducer;

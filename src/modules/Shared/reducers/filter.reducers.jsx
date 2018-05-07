import types from '@Shared/constants/filter.constants';
import filterInitialState from '@Shared/states/filter.states';

const filterReducer = (state = filterInitialState, action) => {

  switch (action.type) {

    case types.FILTERING:
      return {
        ...state,
        ...action.payload
      };

    case types.CHANGE_FILTER_TYPE:
      return {
        ...state,
        ...action.payload
      };

    case types.RESET_FILTER:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }

};

export default filterReducer;

export const getFilter = state => state.filter;

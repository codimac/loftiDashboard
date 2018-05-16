import types from '@Shared/constants/filter.constants';
import filterInitialState from '@Shared/states/filter.states';

const activeTd = type => {
  switch (type) {
    case types.SHOW_TD_1:
      return 1;
    case types.SHOW_TD_2:
      return 2;
    default:
      return null;
  }
};

const filterReducer = (state = filterInitialState, action) => {

  switch (action.type) {

    case types.FILTERING:
      return {
        ...state,
        ...action.payload
      };

    case types.RESET_FILTER:
      return {
        ...state,
        ...action.payload
      };

    case types.SET_VISIBILITY_FILTER:
      return {
        ...state,
        ...action.payload,
        showAll: action.payload.visibilityFilter === types.SHOW_ALL,
        showedTd: activeTd(action.payload.visibilityFilter)
      };

    case types.FILTER_GRADES:
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


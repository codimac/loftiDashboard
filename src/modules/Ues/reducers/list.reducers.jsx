import types from '@Ues/constants/list.constants';
import uesListInitialState from '@Ues/states/list.states';

const uesListReducer = (state = uesListInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_UES_LIST:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_UES_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_UES_LIST_FAILURE:
      return state;

    default:
      return state;

  }
};

export default uesListReducer;

export const getUesList = state => state.uesList;

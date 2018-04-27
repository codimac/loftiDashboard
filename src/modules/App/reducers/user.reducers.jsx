import types from '@App/constants/user.constants';
import userInitialState from '@App/states/user.states';

const userReducer = (state = userInitialState, action) => {

  switch (action.type) {

    case types.FETCHING_USER:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_USER_SUCCESS:
      return {
        ...state,
        ...action.payload.data
      };

    case types.FETCHING_USER_FAILURE:
      return state;

    default:
      return state;
  }
};

export default userReducer;

export const getUser = state => state.user;

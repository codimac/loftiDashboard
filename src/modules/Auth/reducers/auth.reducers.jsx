import types from '../constants/auth.constants';
import authInitialState from '../states/auth.states';

const authReducer = (state = authInitialState, action) => {

  switch (action.type) {
    case types.FETCHING_AUTH:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_AUTH_SUCCES:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_AUTH_FAILURE:
      return state;

    default:
      return state;
  }

};

export default authReducer;

export const getAuth = state => state.auth;

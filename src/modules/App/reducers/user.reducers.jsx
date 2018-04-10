import types from '@App/constants/user.constants';
import userInitialState from '@App/states/user.states';

const userReducer = (state = userInitialState, action) => {

  switch (action.type) {

    default:
      return state;

  }
};

export default userReducer;

export const getUser = state => state.user;

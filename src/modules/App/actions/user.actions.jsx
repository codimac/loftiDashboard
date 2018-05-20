import types from '@App/constants/user.constants';

export const fetchUser = (isFetching = true) => ({
  type: types.FETCHING_USER,
  payload: {
    isFetching
  }
});

export const fetchUserSucceed = data => ({
  type: types.FETCHING_USER_SUCCESS,
  payload: {
    data
  }
});

export const fetchUserFailed = error => ({
  type: types.FETCHING_USER_FAILURE,
  payload: {
    error
  }
});

import types from '../constants/auth.constants';

export const fetchAuth = (isFetching = true) => ({
  type: types.FETCHING_AUTH,
  payload: {
    isFetching
  }
});

export const fetchAuthSucceed = token => ({
  type: types.FETCHING_AUTH_SUCCES,
  payload: {
    token
  }
});

export const fetchAuthFailed = error => ({
  type: types.FETCHING_AUTH_FAILURE,
  payload: {
    error
  }
});


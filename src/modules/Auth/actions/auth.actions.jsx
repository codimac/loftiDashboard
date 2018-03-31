import Http from '@shared/Http';
import { history } from '@shared/helpers/history.helpers';
import { storageSvc } from '@shared/services/storage.services';
import types from '../constants/auth.constants';


console.log(storageSvc.getItem('token'));

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

// EFFECTS

// export const saveToken = token => localStorage.setItem('ib_token', token);

export const signin = (email, password) => dispatch => {
  dispatch(fetchAuth());
  Http.post('/auth/signin', { email, password })
    .then(res => {
      // saveToken(res.data.token);
      history.push('/');
    })
    .then(dispatch(fetchAuth(false)))
    .catch(err => dispatch(fetchAuthFailed(err)));
};


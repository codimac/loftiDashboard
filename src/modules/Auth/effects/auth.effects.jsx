import Http from '@shared/Http';
import { history } from '@shared/helpers/history.helpers';
import { storageSvc } from '@shared/services/storage.services';

import * as actions from '../actions/auth.actions';

export const signin = (email, password) => dispatch => {
  dispatch(actions.fetchAuth());
  Http.post('/auth/signin', { email, password })
    .then(res => {
      const { token } = res.data;
      dispatch(actions.fetchAuthSucceed(token));
      storageSvc.setItem('token', token);
      history.push('/');
    })
    .then(dispatch(actions.fetchAuth(false)))
    .catch(err => dispatch(actions.fetchAuthFailed(err)));
};

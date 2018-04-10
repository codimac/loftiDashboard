import Http from '@Shared/Http';
import { history } from '@Shared/helpers/history.helpers';
import { storageSvc } from '@services/storage.services';
import { requestSvc } from '@services/request.services';
import * as actions from '@App/actions/auth.actions';

export const signin = (username, password) => dispatch => {
  dispatch(actions.fetchAuth());
  Http.post('/auth/signin', { username, password })
    .then(res => {
      const { token } = res.data;
      dispatch(actions.fetchAuthSucceed(token));
      storageSvc.setItem('token', token);
      history.push('/');
    })
    .then(dispatch(actions.fetchAuth(false)))
    .catch(err => dispatch(actions.fetchAuthFailed(err)));
};

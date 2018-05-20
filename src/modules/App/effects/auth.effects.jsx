import Http from '@Shared/Http';
import { history } from '@helpers/history.helpers';
import { storageSvc } from '@services/storage.services';
import { requestSvc } from '@services/request.services';
import { toasterSvc } from '@services/toaster.service';
import * as actions from '@App/actions/auth.actions';

export const signin = (username, password) => dispatch => {
  dispatch(actions.fetchAuth());
  Http.post('/auth/signin', { username, password })
    .then(res => {
      const { token } = res.data;
      dispatch(actions.fetchAuthSucceed(token));
      dispatch(actions.fetchAuth(false));
      storageSvc.setItem('token', token);
      history.push('/promotions/2020');
    })
    .catch(err => {
      dispatch(actions.fetchAuthFailed(err));
      toasterSvc.error('Combinaison incorrecte');
    });
};

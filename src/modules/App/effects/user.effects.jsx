import Http from '@Shared/Http';
import * as actions from '@App/actions/user.actions';
import mocks from '@App/mocks/user.mocks';
import { requestSvc } from '@services/request.services';

export const getUser = () => dispatch => {
  dispatch(actions.fetchUser());
  Http.get('/users/me', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchUserSucceed(mocks));
      dispatch(actions.fetchUser(false));
    })
    .catch(err => dispatch(actions.fetchUserFailed(err)));
};

import Http from '@Shared/Http';
import { userMock } from '@mocks/user.mocks';
import * as actions from '@App/actions/user.actions';

export const getUser = () => dispatch => {
  dispatch(actions.fetchUser());
  Http.get('/users/me')
    .then(res => console.log(res))
    .catch(err => console.error(err));
};

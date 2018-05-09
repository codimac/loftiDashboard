import Http from '@Shared/Http';
import * as actions from '@Ues/actions/list.actions';
import mocks from '@Ues/mocks/list.mocks';
import { requestSvc } from '@services/request.services';

export const getUesList = () => dispatch => {
  dispatch(actions.fetchUesList());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchUesListSucceed(mocks));
      dispatch(actions.fetchUesList(false));
    })
    .catch(err => dispatch(actions.fetchUesListFailed(err)));
};

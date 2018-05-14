import Http from '@Shared/Http';
import * as actions from '@Subjects/actions/list.actions';
import mocks from '@Subjects/mocks/list.mocks';
import { requestSvc } from '@services/request.services';

export const getSubjectsListForUe = ueId => dispatch => {
  dispatch(actions.fetchSubjectsList());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchSubjectsListSucceed(mocks));
      dispatch(actions.fetchSubjectsList(false));
    })
    .catch(err => dispatch(actions.fetchSubjectsListFailed(err)));
};

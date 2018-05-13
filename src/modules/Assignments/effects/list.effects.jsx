import Http from '@Shared/Http';
import * as actions from '@Assignments/actions/list.actions';
import mocks from '@Assignments/mocks/list.mocks';
import { requestSvc } from '@services/request.services';

export const getAssignmentsList = () => dispatch => {
  dispatch(actions.fetchAssignmentsList());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchAssignmentsListSucceed(mocks));
      dispatch(actions.fetchAssignmentsList(false));
    })
    .catch(err => dispatch(actions.fetchAssignmentsListFailed(err)));
};

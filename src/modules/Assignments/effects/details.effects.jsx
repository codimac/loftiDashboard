import Http from '@Shared/Http';
import * as actions from '@Assignments/actions/details.actions';
import mocks from '@Assignments/mocks/details.mocks';
import { requestSvc } from '@services/request.services';

export const getAssignment = () => dispatch => {
  dispatch(actions.fetchAssignmentsList());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchAssignmentsListSucceed(mocks));
      dispatch(actions.fetchAssignmentsList(false));
    })
    .catch(err => dispatch(actions.fetchAssignmentsListError(err)));
};

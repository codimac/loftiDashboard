import Http from '@Shared/Http';
import * as actions from '@Students/actions/details.actions';
import mocks from '@Students/mocks/details.mocks';
import { requestSvc } from '@services/request.services';


export const getStudent = username => dispatch => {
  dispatch(actions.fetchStudent());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchStudentDetailsSucceed(mocks));
      dispatch(actions.fetchStudent(false));
    })
    .catch(err => dispatch(actions.fetchStudentDetailsFailed(err)));
};

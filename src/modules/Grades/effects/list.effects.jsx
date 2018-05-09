import Http from '@Shared/Http';
import * as actions from '@Grades/actions/list.actions';
import mocks from '@Grades/mocks/list.mocks';
import { requestSvc } from '@services/request.services';

export const getGradesList = () => dispatch => {
  dispatch(actions.fetchGradesList());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchGradesListSucceed(mocks));
      dispatch(actions.fetchGradesListFailed(false));
    })
    .catch(err => dispatch(actions.fetchGradesListFailed(err)));
};

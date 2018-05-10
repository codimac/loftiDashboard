import Http from '@Shared/Http';
import * as actions from '@Semesters/actions/list.actions';
import mocks from '@Semesters/mocks/list.mocks';
import { requestSvc } from '@services/request.services';

export const getSemestersList = () => dispatch => {
  dispatch(actions.fetchSemestersList());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchSemestersListSucceed(mocks));
      dispatch(actions.fetchSemestersList(false));
    })
    .catch(err => dispatch(actions.fetchSemestersListFailed(err)));
};

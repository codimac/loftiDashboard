import Http from '@Shared/Http';
import * as actions from '@Absences/actions/list.actions';
import mocks from '@Absences/mocks/studentMocks.mocks';
import { requestSvc } from '@services/request.services';

export const getAbsencesList = (id) => dispatch => {
  dispatch(actions.fetchAbsencesList());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchAbsencesListSucceed(mocks));
      dispatch(actions.fetchAbsencesList(false));
    })
    .catch(err => dispatch(actions.fetchAbsencesListFailed(err)));
};

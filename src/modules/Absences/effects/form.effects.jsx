import Http from '@Shared/Http';
import * as actions from '@Absences/actions/list.actions';
import { success, error } from '@Absences/mocks/form.mocks';
import { requestSvc } from '@services/request.services';

export const createAbsences = absences => dispatch => {
  Http.post('/always/true', absences, requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.createAbsencesSucceed(success));
    })
    .catch(actions.createAbsencesFailed(error));
};

import Http from '@Shared/Http';
import * as actions from '@Absences/actions/form.actions';
import { success, error } from '@Absences/mocks/form.mocks';
import { requestSvc } from '@services/request.services';

export const createAbsences = absences => dispatch => {
  Http.post('/always/true', absences, requestSvc.generateOptions())
    .then(res => {
      console.log('absences created');
      dispatch(actions.createAbsencesSucceed(success));
    })
    .catch(actions.createAbsencesFailed(error));
};

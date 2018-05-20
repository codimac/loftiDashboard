import Http from '@Shared/Http';
import * as actions from '@Absences/actions/form.actions';
import { success, error } from '@Absences/mocks/form.mocks';
import { requestSvc } from '@services/request.services';
import { toasterSvc } from '@services/toaster.service';

export const createAbsences = absences => dispatch => {
  Http.post('/always/true', absences, requestSvc.generateOptions())
    .then(res => {
      toasterSvc.success('Absence créée');
      dispatch(actions.createAbsencesSucceed(success));
    })
    .catch(err => {
      toasterSvc.error('Erreur lors de la création de l\'absence');
      actions.createAbsencesFailed(error);
    });
};

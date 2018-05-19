import Http from '@Shared/Http';
import * as actions from '@Absences/actions/studentDetails.actions';
import mocks from '@Absences/mocks/studentMocks.mocks';
import { requestSvc } from '@services/request.services';
import { success, error } from '@Absences/mocks/form.mocks';

export const getAbsencesList = (id) => dispatch => {
  dispatch(actions.fetchAbsencesList());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchAbsencesListSucceed(mocks));
      dispatch(actions.fetchAbsencesList(false));
    })
    .catch(err => dispatch(actions.fetchAbsencesListFailed(err)));
};

export const updateAbsencesJustification = (absencesId, justified = true) => dispatch => {
  Http.post('/always/true', absencesId, justified, requestSvc.generateOptions())
    .then(res => {
      console.log('absences justification updated, id: ' + absencesId);
      dispatch(actions.updateAbsencesJustificationSucceed(success));
    })
    .catch(actions.updateAbsencesJustificationFailed(error));
};


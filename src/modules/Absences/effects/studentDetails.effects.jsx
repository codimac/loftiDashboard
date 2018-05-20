import Http from '@Shared/Http';
import store from '@App/App.store';

import { success, error } from '@Absences/mocks/form.mocks';
import mocks from '@Absences/mocks/studentMocks.mocks';

import * as actions from '@Absences/actions/studentDetails.actions';

import { requestSvc } from '@services/request.services';
import { toasterSvc } from '@services/toaster.service';

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
  const data = {absencesId, justified};
  const storedData = store.getState().absencesList.absencesList;
  // that way I don't have to call again the get. should only be used on request success
  const newData = storedData.map(m => {
    if (m.id === absencesId) {
      m.justified=justified;
      return m;
    }
    return m;
  });

  Http.post('/always/true', data, requestSvc.generateOptions())
    .then(res => {
      const abs = newData.find(absence => absence.id === absencesId);
      toasterSvc.success(`Absence du ${abs.beginning} a été ${abs.justified ? 'justifiée' : 'annulée'}`);
      dispatch(actions.updateAbsencesJustificationSucceed(success));
      dispatch(actions.fetchAbsencesListSucceed(newData));
    })
    .catch(err => {
      actions.updateAbsencesJustificationFailed(error);
      toasterSvc.error('Erreur lors de la mise à jour de l\'absence');
    });
};


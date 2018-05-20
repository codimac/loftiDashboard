import Http from '@Shared/Http';
import * as actions from '@Absences/actions/studentDetails.actions';
import mocks from '@Absences/mocks/studentMocks.mocks';
import { requestSvc } from '@services/request.services';
import { success, error } from '@Absences/mocks/form.mocks';
import store from '@App/App.store';

export const getAbsencesList = (id) => dispatch => {
  console.log(id);
  dispatch(actions.fetchAbsencesList());
  Http.get(`/abs/student/${id}`, requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchAbsencesListSucceed(res.data));
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
      console.log(`absences justification updated id: ${absencesId}`);
      dispatch(actions.updateAbsencesJustificationSucceed(success));
      dispatch(actions.fetchAbsencesListSucceed(newData));
    })
    .catch(actions.updateAbsencesJustificationFailed(error));
};


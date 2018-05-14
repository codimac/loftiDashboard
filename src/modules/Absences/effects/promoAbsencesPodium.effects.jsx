import Http from '@Shared/Http';
import * as actions from '@Absences/actions/promoAbsencesPodium.actions';
import mocks from '@Absences/mocks/promoPodium.mocks';
import { requestSvc } from '@services/request.services';

export const getPromoPodiumAbsences = (id) => dispatch => {
  dispatch(actions.fetchPromoAbsencesPodium());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchPromoAbsencesPodiumSucceed(mocks));
      dispatch(actions.fetchPromoAbsencesPodium(false));
    })
    .catch(err => dispatch(actions.fetchPromoAbsencesPodiumFailed(err)));
};

import Http from '@Shared/Http';
import * as actions from '@Absences/actions/promoAbsencesPodium.actions';
import mocks from '@Absences/mocks/promoPodium.mocks';
import { requestSvc } from '@services/request.services';

export const getPromoPodiumAbsences = (id) => dispatch => {
  dispatch(actions.fetchPromoAbsencesPodium());
  Http.get('/students/absences/2019', requestSvc.generateOptions())
    .then(res => {
      console.log(res);
      dispatch(actions.fetchPromoAbsencesPodiumSucceed(res.data));
      dispatch(actions.fetchPromoAbsencesPodium(false));
    })
    .catch(err => dispatch(actions.fetchPromoAbsencesPodiumFailed(err)));
};

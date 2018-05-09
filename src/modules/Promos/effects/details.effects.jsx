import Http from '@Shared/Http';
import * as actions from '@Promos/actions/details.actions';
import mocks from '@Promos/mocks/details.mocks';
import { requestSvc } from '@services/request.services';

export const getPromotion = (id) => dispatch => {
  dispatch(actions.fetchPromotion());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchPromotionDetailsSucceed(mocks));
      dispatch(actions.fetchPromotion(false));
    })
    .catch(err => dispatch(actions.fetchPromotionDetailsFailed(err)));
};

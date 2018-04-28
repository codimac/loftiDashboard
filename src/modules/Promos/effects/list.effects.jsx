import Http from '@Shared/Http';
import * as actions from '@Promos/actions/list.actions';
import mocks from '@Promos/mocks/list.mocks';
import { requestSvc } from '@services/request.services';

export const getPromotionsList = () => dispatch => {
  dispatch(actions.fetchPromotionsList());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchPromotionsListSucceed(mocks));
      dispatch(actions.fetchPromotionsList(false));
    })
    .catch(err => dispatch(actions.fetchPromotionsListFailed(err)));
};

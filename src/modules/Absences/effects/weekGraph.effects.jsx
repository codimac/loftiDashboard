import Http from '@Shared/Http';
import * as actions from '@Absences/actions/weekGraph.actions';
import mocks from '@Absences/mocks/weekGraph.mocks';
import { requestSvc } from '@services/request.services';

export const getAbsencesWeekGraphList = (id) => dispatch => {
  dispatch(actions.fetchAbsencesWeekGraphList());
  Http.get('/always/true', requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.fetchAbsencesWeekGraphListSucceed(mocks));
      dispatch(actions.fetchAbsencesWeekGraphList(false));
    })
    .catch(err => dispatch(actions.fetchAbsencesWeekGraphListFailed(err)));
};

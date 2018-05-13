import Http from '@Shared/Http';
import * as actions from '@Assignments/actions/form.actions';
import { success, error } from '@Assignments/mocks/form.mocks';
import { requestSvc } from '@services/request.services';

export const createSubjectWithGrades = subjectWithGrades => dispatch => {
  Http.post('/always/true', subjectWithGrades, requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.createAssignmentWithGradesSucceed(success));
    })
    .catch(actions.createAssignmentWithGradesFailed(error));
};

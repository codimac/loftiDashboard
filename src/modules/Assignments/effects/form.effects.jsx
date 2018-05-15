import Http from '@Shared/Http';
import * as actions from '@Assignments/actions/form.actions';
import { success, error } from '@Assignments/mocks/form.mocks';
import { requestSvc } from '@services/request.services';

export const createAssignmentWithGrades = assignmentWithGrades => dispatch => {
  Http.post('/always/true', assignmentWithGrades, requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.createAssignmentWithGradesSucceed(success));
    })
    .catch(actions.createAssignmentWithGradesFailed(error));
};

export const editAssignmentWithGrades = assignmentWithGrades => dispatch => {
  Http.put('/always/true', assignmentWithGrades, requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.editAssignmentWithGradesSucceed(success));
    })
    .catch(actions.editAssignmentWithGradesFailed(error));
};

import Http from '@Shared/Http';
import * as actions from '@Assignments/actions/form.actions';
import { success, error } from '@Assignments/mocks/form.mocks';
import { requestSvc } from '@services/request.services';
import { toasterSvc } from '@services/toaster.service';

export const createAssignmentWithGrades = assignmentWithGrades => dispatch => {
  Http.post('/always/true', assignmentWithGrades, requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.createAssignmentWithGradesSucceed(success));
      toasterSvc.success('Devoir et notes créés');
    })
    .catch(err => {
      actions.createAssignmentWithGradesFailed(error);
      toasterSvc.error('Erreur lors de la création du devoir');
    });
};

export const editAssignmentWithGrades = assignmentWithGrades => dispatch => {
  Http.put('/alwsays/true', assignmentWithGrades, requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.editAssignmentWithGradesSucceed(success));
      toasterSvc.success('Devoir et notes édités');
    })
    .catch(err => {
      actions.editAssignmentWithGradesFailed(error);
      toasterSvc.error('Erreur lors de l\'édition');
    });
};

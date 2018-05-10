import Http from '@Shared/Http';
import * as actions from '@Grades/actions/form.actions';
import { success, error } from '@Grades/mocks/form.mocks';
import { requestSvc } from '@services/request.services';

export const createSubjectWithGrades = subjectWithGrades => dispatch => {
  Http.post('/always/true', subjectWithGrades, requestSvc.generateOptions())
    .then(res => {
      dispatch(actions.createSubjectWithGradesSucceed(success));
    })
    .catch(actions.createSubjectWithGradesFailed(error));
};

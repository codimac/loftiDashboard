import types from '@Assignments/constants/form.constants';

export const createAssignmentWithGrades = data => ({
  type: types.CREATE_ASSIGNMENT_WITH_GRADES,
  payload: {
    subjectWithGrades: data
  }
});

export const createAssignmentWithGradesSucceed = data => ({
  type: types.CREATE_ASSIGNMENT_WITH_GRADES_SUCCESS,
  payload: {
    data
  }
});

export const createAssignmentWithGradesFailed = error => ({
  types: types.CREATE_ASSIGNMENT_WITH_GRADES_FAILURE,
  payload: {
    error
  }
});

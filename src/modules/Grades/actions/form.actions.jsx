import types from '@Grades/constants/form.constants';

export const createSubjectWithGrades = data => ({
  type: types.CREATE_SUBJECT_WITH_GRADES,
  payload: {
    subjectWithGrades: data
  }
});

export const createSubjectWithGradesSucceed = data => ({
  type: types.CREATE_SUBJECT_WITH_GRADES_SUCCESS,
  payload: {
    data
  }
});

export const createSubjectWithGradesFailed = error => ({
  types: types.CREATE_SUBJECT_WITH_GRADES_FAILURE,
  payload: {
    error
  }
});

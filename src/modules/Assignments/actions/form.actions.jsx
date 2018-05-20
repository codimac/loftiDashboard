import types from '@Assignments/constants/form.constants';

// CREATE

export const createAssignmentWithGrades = assignment => ({
  type: types.CREATE_ASSIGNMENT_WITH_GRADES,
  payload: {
    assignment
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


/* ----------------------------------- */

// EDIT

export const editAssignmentWithGrades = assignment => ({
  type: types.EDIT_ASSIGNMENT_WITH_GRADES,
  payload: {
    assignment
  }
});

export const editAssignmentWithGradesSucceed = data => ({
  type: types.EDIT_ASSIGNMENT_WITH_GRADES_SUCCESS,
  payload: {
    data
  }
});

export const editAssignmentWithGradesFailed = error => ({
  types: types.EDIT_ASSIGNMENT_WITH_GRADES_FAILURE,
  payload: {
    error
  }
});

import types from '@Grades/constants/list.constants';

export const fetchGradesList = (isFetching = true) => ({
  type: types.FETCHING_GRADES_LIST,
  payload: {
    isFetching
  }
});

export const fetchGradesListSucceed = data => ({
  type: types.FETCHING_GRADES_LIST_SUCCESS,
  payload: {
    gradesList: data
  }
});

export const fetchGradesListFailed = error => ({
  type: types.FETCHING_GRADES_LIST_FAILURE,
  payload: {
    error
  }
});

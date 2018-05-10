import types from '@Grades/constants/list.constants';

export const fetchGradesList = (isFetching = true) => ({
  type: types.FETCHING_GRADES_LIST,
  payload: {
    isFetching
  }
});

export const fetchGradesListSucceed = grades => ({
  type: types.FETCHING_GRADES_LIST_SUCCESS,
  payload: {
    grades
  }
});

export const fetchGradesListFailed = error => ({
  type: types.FETCHING_GRADES_LIST_FAILURE,
  payload: {
    error
  }
});

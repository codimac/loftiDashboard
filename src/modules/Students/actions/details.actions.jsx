import types from '@Students/constants/details.constants';

export const fetchStudent = (isFetching = false) => ({
  type: types.FETCHING_STUDENT_DETAILS,
  payload: {
    isFetching
  }
});

export const fetchStudentDetailsSucceed = data => ({
  type: types.FETCHING_STUDENT_DETAILS_SUCCESS,
  payload: {
    data
  }
});

export const fetchStudentDetailsFailed = error => ({
  type: types.FETCHING_STUDENT_DETAILS_FAILURE,
  payload: {
    error
  }
});

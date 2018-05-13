import types from '@Assignments/constants/list.constants';

export const fetchAssignmentsList = (isFetching = true) => ({
  type: types.FETCHING_ASSIGNMENTS_LIST,
  payload: {
    isFetching
  }
});

export const fetchAssignmentsListSucceed = assignments => ({
  type: types.FETCHING_ASSIGNMENTS_LIST_SUCCESS,
  payload: {
    assignments
  }
});

export const fetchAssignmentsListFailed = error => ({
  type: types.FETCHING_ASSIGNMENTS_LIST_FAILURE,
  payload: {
    error
  }
});

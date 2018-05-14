import types from '@Assignments/constants/details.constants';

export const fetchAssignmentsList = (isFetching = true) => ({
  type: types.FETCHING_ASSIGNMENTS_DETAILS,
  payload: {
    isFetching
  }
});

export const fetchAssignmentsListSucceed = assignment => ({
  type: types.FETCHING_ASSIGNMENTS_DETAILS_SUCCESS,
  payload: {
    assignment
  }
});

export const fetchAssignmentsListError = error => ({
  type: types.FETCHING_ASSIGNMENTS_DETAILS_FAILURE,
  payload: {
    error
  }
});

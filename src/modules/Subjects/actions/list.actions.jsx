import types from '@Subjects/constants/list.constants';

export const fetchSubjectsList = (isFetching = true) => ({
  type: types.FETCHING_SUBJECTS_LIST,
  payload: {
    isFetching,
  }
});

export const fetchSubjectsListSucceed = subjects => ({
  type: types.FETCHING_SUBJECTS_LIST_SUCCESS,
  payload: {
    subjects
  }
});

export const fetchSubjectsListFailed = error => ({
  type: types.FETCHING_SUBJECTS_LIST_FAILURE,
  payload: {
    error
  }
});


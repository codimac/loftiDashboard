import types from '@Semesters/constants/list.constants';

export const fetchSemestersList = (isFetching = true) => ({
  type: types.FETCHING_SEMESTERS_LIST,
  payload: {
    isFetching
  }
});

export const fetchSemestersListSucceed = semesters => ({
  type: types.FETCHING_SEMESTERS_LIST_SUCCESS,
  payload: {
    semesters
  }
});

export const fetchSemestersListFailed = error => ({
  type: types.FETCHING_SEMESTERS_LIST_FAILURE,
  payload: {
    error
  }
});

import types from '@Absences/constants/list.constants';

export const fetchAbsencesList = (isFetching = true) => ({
  type: types.FETCHING_ABSENCES_LIST,
  payload: {
    isFetching
  }
});

export const fetchAbsencesListSucceed = data => ({
  type: types.FETCHING_ABSENCES_LIST_SUCCESS,
  payload: {
    absencesList: data
  }
});

export const fetchAbsencesListFailed = error => ({
  type: types.FETCHING_ABSENCES_LIST_FAILURE,
  payload: {
    error
  }
});

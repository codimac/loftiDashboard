import types from '@Absences/constants/studentDetails.constants';

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

export const updateAbsencesJustificationSucceed = data => ({
  type: types.UPDATE_ABSENCES_SUCCESS,
  payload: {
    data
  }
});

export const updateAbsencesJustificationFailed = error => ({
  types: types.UPDATE_ABSENCES_FAILURE,
  payload: {
    error
  }
});

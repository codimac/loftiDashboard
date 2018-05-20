import types from '@Absences/constants/form.constants';
import absencesListInitialState from '@modules/Absences/states/list.states';

// CREATE
export const createAbsences = absences => ({
  type: types.CREATE_ABSENCE,
  payload: {
    absences
  }
});

export const createAbsencesSucceed = data => ({
  type: types.CREATE_ABSENCE_SUCCESS,
  payload: {
    data
  }
});

export const createAbsencesFailed = error => ({
  type: types.CREATE_ABSENCE_FAILURE,
  payload: {
    error
  }
});


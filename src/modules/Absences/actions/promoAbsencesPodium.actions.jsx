import types from '@Absences/constants/podiumStudent.constants';

export const fetchPromoAbsencesPodium = (isFetching = true) => ({
  type: types.FETCHING_PROMO_ABSENCE_PODIUM,
  payload: {
    isFetching
  }
});

export const fetchPromoAbsencesPodiumSucceed = data => ({
  type: types.FETCHING_PROMO_ABSENCE_PODIUM_SUCCESS,
  payload: {
    absencesPodium: data
  }
});

export const fetchPromoAbsencesPodiumFailed = error => ({
  type: types.FETCHING_PROMO_ABSENCE_PODIUM_FAILURE,
  payload: {
    error
  }
});

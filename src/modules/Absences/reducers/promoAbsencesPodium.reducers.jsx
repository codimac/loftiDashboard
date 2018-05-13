import types from '@Absences/constants/podiumStudent.constants';
import promoAbsencesPodiumInitialState from '@Absences/states/promoAbsencesPodium.states';

const promoAbsencesPodiumReducer = (state = promoAbsencesPodiumInitialState, action) => {
  switch (action.type) {

    case types.FETCHING_PROMO_ABSENCE_PODIUM:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_PROMO_ABSENCE_PODIUM_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.FETCHING_PROMO_ABSENCE_PODIUM_FAILURE:
      return state;

    default:
      return state;

  }
};

export default promoAbsencesPodiumReducer;

export const getPromoPodiumAbsences = state => state.promoAbsencesPodium;
